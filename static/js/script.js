//Remove msg box after 10sec
var msg = document.getElementById('msg')
if(msg !== null) {
    setTimeout(() => {
        msg.remove()
    }, 10000);
}



// Token Receipt Print
const printTokenReceipt = () => {
    const body = document.querySelector('body')
    const tempBody = body.innerHTML
    const tokenReceiptBox = document.getElementById('token-receipt-box')

    tokenReceiptBox.firstElementChild.classList.add('margin-auto')

    body.innerHTML = tokenReceiptBox.innerHTML
    window.print()
    body.innerHTML = tempBody
}

// Token Receipt Print
const printPass = () => {
    const body = document.querySelector('body')
    const temp = body.innerHTML
    const printPassBox = document.getElementById('printPassBox')

    printPassBox.firstElementChild.classList.remove('display-none')
    body.innerHTML = printPassBox.innerHTML
    
    window.print()    
    window.close()
}
