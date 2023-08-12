document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("Right Click is not allowed.");
});

document.addEventListener("keydown", (e) => {
  if (e.key == "F12" || e.key == "Control") {
    e.preventDefault();
    confirm(`${e.key} is not allowed.`);
    window.close();
  }
});


//WebSocket settings
JSPM.JSPrintManager.auto_reconnect = true;
JSPM.JSPrintManager.start();
JSPM.JSPrintManager.WS.onStatusChanged = function () {
  if (jspmWSStatus()) {
    if (jspmWSStatus()) {
      //get client installed printers
      JSPM.JSPrintManager.getPrintersInfo().then(function (myPrinters) {
        const clientPrinters = myPrinters;
        var options = "";
        for (var i = 0; i < clientPrinters.length; i++) {
          if (!this.isVirtualPrinter(clientPrinters[i])) {
            options += "<option>" + clientPrinters[i].name + "</option>";
          }
        }

        const lastPrinter = localStorage.getItem('printer')
        if(lastPrinter != null) {
          options += "<option selected>" + lastPrinter + "</option>";
        }
        $("#installedPrinterName").html(options);
      });
    }
  }
};

//Check JSPM WebSocket status
function jspmWSStatus() {
  const errPrinterMsg = document.getElementById('errPrinterMsg')

  if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.Open) {
    return true;
  } else if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.Closed) {
    errPrinterMsg.classList.remove('display-none')
    errPrinterMsg.innerHTML = `*JSPrintManager (JSPM) is not installed or not running! Download JSPM Client App.
    <a href="/user/driver-documentation" class="text-primary ml-1 text-success-hover" style="text-decoration: underline;">See Driver Documentaion</a>`
    return false;
  } else if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.Blocked) {
    errPrinterMsg.classList.remove('display-none')
    errPrinterMsg.innerHTML = `*JSPM has blocked this website! Please unblock from desktop client app in JSPM setting.
    <a href="/user/driver-documentation" class="text-primary ml-1 text-success-hover" style="text-decoration: underline;">See Driver Documentaion</a>`
    return false;
  }
}

//Do printing...
function print(o) {
  if (jspmWSStatus()) {
    //generate an image of HTML content through html2canvas utility
    const printContent = document.getElementById("printPassbook")
    printContent.classList.remove('display-none')
    html2canvas(printContent, { scale: 10 }).then(
      function (canvas) {
        //Create a ClientPrintJob
        var cpj = new JSPM.ClientPrintJob();
        //Set Printer type (Refer to the help, there many of them!)
        // if ($('#useDefaultPrinter').prop('checked')) {
        // cpj.clientPrinter = new JSPM.DefaultPrinter();
        // } else {
        cpj.clientPrinter = new JSPM.InstalledPrinter($("#installedPrinterName").val());
        localStorage.setItem('printer', $("#installedPrinterName").val())
        // }
        //Set content to print...
        var b64Prefix = "data:image/png;base64,";
        var imgBase64DataUri = canvas.toDataURL("image/png");
        var imgBase64Content = imgBase64DataUri.substring(
          b64Prefix.length,
          imgBase64DataUri.length
        );

        var myImageFile = new JSPM.PrintFile(canvas.toDataURL(), JSPM.FileSourceType.URL, "myFileToPrint.png", 1);
        // var myImageFile = new JSPM.PrintFile(imgBase64Content, JSPM.FileSourceType.Base64, "myFileToPrint.png", 1);
        //add file to print job
        cpj.files.push(myImageFile);

        //Send print job to printer!
        cpj.sendToClient();
        printContent.classList.add('display-none')
        window.close()
      }
    );
  }
}

//Guessing whether a printer is Virtual or real/physical
function isVirtualPrinter(clientPrinter) {
  let printerPort = clientPrinter.port.toLowerCase();
  //For Windows
  if (printerPort != "nul" && clientPrinter.BIDIEnabled) return false;
  //For Unix
  if (printerPort.indexOf("usb") >= 0 && printerPort.indexOf("?serial=") >= 0)
    return false;

  return true;
}
