/*! JSPrintManager v5.0.3 (https://neodynamic.com/products/printing/js-print-manager) | Requires JSPrintManager Client App (https://neodynamic.com/downloads/jspm) | (c) Neodynamic (https://neodynamic.com) */
!(function (t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : (("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).JSPM = t());
})(function () {
  return (function n(i, o, a) {
    function s(e, t) {
      if (!o[e]) {
        if (!i[e]) {
          var r = "function" == typeof require && require;
          if (!t && r) return r(e, !0);
          if (u) return u(e, !0);
          throw (
            (((r = new Error("Cannot find module '" + e + "'")).code =
              "MODULE_NOT_FOUND"),
            r)
          );
        }
        (r = o[e] = { exports: {} }),
          i[e][0].call(
            r.exports,
            function (t) {
              return s(i[e][1][t] || t);
            },
            r,
            r.exports,
            n,
            i,
            o,
            a
          );
      }
      return o[e].exports;
    }
    for (
      var u = "function" == typeof require && require, t = 0;
      t < a.length;
      t++
    )
      s(a[t]);
    return s;
  })(
    {
      1: [
        function (t, e, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.ClientJob = void 0);
          var a = t("./JSPrintManager"),
            t =
              ((n.prototype._generateDataAsync = function () {
                return new Promise(function (t) {});
              }),
              (n.prototype.onUpdate = function (t, e) {}),
              (n.prototype.onError = function (t, e) {}),
              (n.prototype.sendToClient = function () {
                var o = this;
                return new Promise(function (n, i) {
                  o._generateDataAsync()
                    .then(function (t) {
                      var e = {
                        type: o._type,
                        on_update: function (t, e, r) {
                          e ? n(t) : o.onUpdate(t, r);
                        },
                        on_error: function (t, e, r) {
                          e ? i(t) : o.onError(t, r);
                        },
                      };
                      a.JSPrintManager.WS.send(t, e);
                    })
                    .catch(function (t) {
                      return i(t);
                    });
                });
              }),
              n);
          function n() {
            this._type = "";
          }
          r.ClientJob = t;
        },
        { "./JSPrintManager": 8 },
      ],
      2: [
        function (t, e, r) {
          "use strict";
          var n,
            i =
              (this && this.__extends) ||
              ((n = function (t, e) {
                return (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(t, e);
              }),
              function (t, e) {
                function r() {
                  this.constructor = t;
                }
                n(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r()));
              }),
            s =
              (this && this.__awaiter) ||
              function (t, a, s, u) {
                return new (s = s || Promise)(function (r, e) {
                  function n(t) {
                    try {
                      o(u.next(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function i(t) {
                    try {
                      o(u.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function o(t) {
                    var e;
                    t.done
                      ? r(t.value)
                      : ((e = t.value) instanceof s
                          ? e
                          : new s(function (t) {
                              t(e);
                            })
                        ).then(n, i);
                  }
                  o((u = u.apply(t, a || [])).next());
                });
              },
            u =
              (this && this.__generator) ||
              function (r, n) {
                var i,
                  o,
                  a,
                  s = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  t = { next: e(0), throw: e(1), return: e(2) };
                return (
                  "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                      return this;
                    }),
                  t
                );
                function e(e) {
                  return function (t) {
                    return (function (e) {
                      if (i)
                        throw new TypeError("Generator is already executing.");
                      for (; s; )
                        try {
                          if (
                            ((i = 1),
                            o &&
                              (a =
                                2 & e[0]
                                  ? o.return
                                  : e[0]
                                  ? o.throw || ((a = o.return) && a.call(o), 0)
                                  : o.next) &&
                              !(a = a.call(o, e[1])).done)
                          )
                            return a;
                          switch (
                            ((o = 0), (e = a ? [2 & e[0], a.value] : e)[0])
                          ) {
                            case 0:
                            case 1:
                              a = e;
                              break;
                            case 4:
                              return s.label++, { value: e[1], done: !1 };
                            case 5:
                              s.label++, (o = e[1]), (e = [0]);
                              continue;
                            case 7:
                              (e = s.ops.pop()), s.trys.pop();
                              continue;
                            default:
                              if (
                                !(a =
                                  0 < (a = s.trys).length && a[a.length - 1]) &&
                                (6 === e[0] || 2 === e[0])
                              ) {
                                s = 0;
                                continue;
                              }
                              if (
                                3 === e[0] &&
                                (!a || (e[1] > a[0] && e[1] < a[3]))
                              ) {
                                s.label = e[1];
                                break;
                              }
                              if (6 === e[0] && s.label < a[1]) {
                                (s.label = a[1]), (a = e);
                                break;
                              }
                              if (a && s.label < a[2]) {
                                (s.label = a[2]), s.ops.push(e);
                                break;
                              }
                              a[2] && s.ops.pop(), s.trys.pop();
                              continue;
                          }
                          e = n.call(r, s);
                        } catch (t) {
                          (e = [6, t]), (o = 0);
                        } finally {
                          i = a = 0;
                        }
                      if (5 & e[0]) throw e[1];
                      return { value: e[0] ? e[1] : void 0, done: !0 };
                    })([e, t]);
                  };
                }
              };
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.ClientPrintJob = void 0);
          var o,
            a = t("./ClientJob"),
            l = t("./ClientPrinter"),
            c = t("./Enums"),
            f = t("./Utils"),
            h = t("jszip"),
            i =
              ((o = a.ClientJob),
              i(d, o),
              Object.defineProperty(d.prototype, "clientPrinter", {
                get: function () {
                  return this._clientPrinter;
                },
                set: function (t) {
                  this._clientPrinter = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "printerCommandsCopies", {
                get: function () {
                  return this._printerCommandsCopies;
                },
                set: function (t) {
                  if (t < 1) throw "Copies must be greater than or equal to 1.";
                  this._printerCommandsCopies = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "printerCommands", {
                get: function () {
                  return this._printerCommands;
                },
                set: function (t) {
                  this._printerCommands = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "printerCommandsCodePage", {
                get: function () {
                  return this._printerCommandsCodePage;
                },
                set: function (t) {
                  this._printerCommandsCodePage = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "binaryPrinterCommands", {
                get: function () {
                  return this._binaryPrinterCommands;
                },
                set: function (t) {
                  (this._binaryPrinterCommands = t),
                    (this._printerCommands = "");
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(d.prototype, "files", {
                get: function () {
                  return this._printFileGroup;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (d.prototype.onUpdated = function (t) {}),
              (d.prototype.onFinished = function (t) {}),
              (d.prototype.onError = function (t, e) {}),
              (d.prototype.onUpdate = function (t, e) {
                e ? this.onFinished(t) : this.onUpdated(t);
              }),
              (d.prototype._genPFGArrayAsync = function (a) {
                var e = this;
                return new Promise(function (n, i) {
                  var o, t;
                  0 != a.length &&
                    ((o = new h()),
                    (t = a.map(function (i) {
                      return s(e, void 0, void 0, function () {
                        var e, r, n;
                        return u(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (
                                (r = (e = o).file),
                                (n = [i.fileName]),
                                [4, i.getContent()]
                              );
                            case 1:
                              return r.apply(e, n.concat([t.sent()])), [2];
                          }
                        });
                      });
                    })),
                    Promise.all(t)
                      .then(function (t) {
                        return s(e, void 0, void 0, function () {
                          var e, r;
                          return u(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  t.trys.push([0, 2, , 3]),
                                  o.file(
                                    "metadata.json",
                                    JSON.stringify(
                                      a.map(function (t) {
                                        return t.getProperties();
                                      })
                                    )
                                  ),
                                  (e = n),
                                  [4, o.generateAsync({ type: "blob" })]
                                );
                              case 1:
                                return e.apply(void 0, [t.sent()]), [3, 3];
                              case 2:
                                return (r = t.sent()), i(r), [3, 3];
                              case 3:
                                return [2];
                            }
                          });
                        });
                      })
                      .catch(function (t) {
                        return i(t);
                      }));
                });
              }),
              (d.prototype._genPCArrayAsync = function (i, o) {
                return new Promise(function (t, e) {
                  try {
                    var r = f.Utils._str2UTF8Array(o.toString()),
                      n = new Uint8Array(0);
                    1 < o &&
                      ((n = new Uint8Array(5 + r.length)).set([80, 67, 67, 61]),
                      n.set(r, 4),
                      n.set([124], 4 + r.length)),
                      null != i && 0 < i.length && t(new Blob([n, i]));
                  } catch (t) {
                    e(t);
                  }
                });
              }),
              (d.prototype._genPrinterArrayAsync = function (r) {
                return new Promise(function (t, e) {
                  try {
                    (r = r || new l.UserSelectedPrinter()),
                      t(new Uint8Array(f.Utils._str2UTF8Array(r.serialize())));
                  } catch (t) {
                    e(t);
                  }
                });
              }),
              (d.prototype._cmd2bin = function () {
                if (this._printerCommands && 0 < this._printerCommands.length)
                  try {
                    if (this._printerCommandsCodePage == c.Encoding.Default)
                      this._binaryPrinterCommands = new Uint8Array(
                        f.Utils._str2UTF8Array(this._printerCommands)
                      );
                    else {
                      if (!("cptable" in window))
                        throw "cptable.js and cputils.js files from https://github.com/SheetJS/js-codepage project are missing";
                      if (!("utils" in window.cptable))
                        throw "cptable.js and cputils.js files from https://github.com/SheetJS/js-codepage project are missing";
                      if (!(this._printerCommandsCodePage in window.cptable))
                        throw (
                          "Encoding " +
                          this._printerCommandsCodePage.toString() +
                          " is missing. Add it fromhttps://github.com/SheetJS/js-codepage/tree/master/bits"
                        );
                      this._binaryPrinterCommands = new Uint8Array(
                        cptable.utils.encode(
                          this._printerCommandsCodePage,
                          this._printerCommands
                        )
                      );
                    }
                  } catch (t) {
                    throw t;
                  }
              }),
              (d.prototype._generateDataAsync = function () {
                var t = this;
                return new Promise(function (n, e) {
                  t._cmd2bin();
                  var i = new Uint8Array([99, 112, 106, 2]);
                  Promise.race([
                    t._genPCArrayAsync(
                      t.binaryPrinterCommands,
                      t._printerCommandsCopies
                    ),
                    t._genPFGArrayAsync(t._printFileGroup),
                  ])
                    .then(function (r) {
                      t._genPrinterArrayAsync(t._clientPrinter)
                        .then(function (t) {
                          var e = f.Utils._intToByteArray(r.size);
                          n(new Blob([i, e, r, t]));
                        })
                        .catch(function (t) {
                          e(t);
                        });
                    })
                    .catch(function (t) {
                      e(t);
                    });
                });
              }),
              d);
          function d() {
            var t = (null !== o && o.apply(this, arguments)) || this;
            return (
              (t._clientPrinter = null),
              (t._printerCommandsCopies = 1),
              (t._printerCommands = ""),
              (t._printerCommandsCodePage = c.Encoding.Default),
              (t._binaryPrinterCommands = null),
              (t._printFileGroup = []),
              t
            );
          }
          r.ClientPrintJob = i;
        },
        {
          "./ClientJob": 1,
          "./ClientPrinter": 4,
          "./Enums": 6,
          "./Utils": 19,
          jszip: 23,
        },
      ],
      3: [
        function (t, e, r) {
          "use strict";
          var n,
            i =
              (this && this.__extends) ||
              ((n = function (t, e) {
                return (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(t, e);
              }),
              function (t, e) {
                function r() {
                  this.constructor = t;
                }
                n(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r()));
              });
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.ClientPrintJobGroup = void 0);
          var o,
            a = t("./ClientJob"),
            u = t("./Utils"),
            i =
              ((o = a.ClientJob),
              i(s, o),
              Object.defineProperty(s.prototype, "jobs", {
                get: function () {
                  return this._jobs;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (s.prototype._generateMiniJob = function (t) {
                return new Promise(function (n, e) {
                  t._cmd2bin(),
                    Promise.race([
                      t._genPCArrayAsync(
                        t.binaryPrinterCommands,
                        t.printerCommandsCopies
                      ),
                      t._genPFGArrayAsync(t.files),
                    ])
                      .then(function (r) {
                        t._genPrinterArrayAsync(t.clientPrinter)
                          .then(function (t) {
                            var e = u.Utils._intToByteArray(r.size);
                            n(new Blob([e, r, t]));
                          })
                          .catch(function (t) {
                            e(t);
                          });
                      })
                      .catch(function (t) {
                        e(t);
                      });
                });
              }),
              (s.prototype._generateDataAsync = function () {
                var n = this;
                return new Promise(function (o, e) {
                  for (
                    var a = new Uint8Array([99, 112, 106, 103, 2]),
                      s = new Uint8Array(
                        u.Utils._intToByteArray(n.jobs.length)
                      ),
                      t = [],
                      r = 0;
                    r < n.jobs.length;
                    r++
                  )
                    t.push(n._generateMiniJob(n.jobs[r]));
                  Promise.all(t)
                    .then(function (t) {
                      for (
                        var e = t.map(function (t) {
                            return { startIndex: 0, endIndex: t.size - 1 };
                          }),
                          r = 1;
                        r < e.length;
                        r++
                      )
                        (e[r].startIndex = e[r - 1].endIndex + 1),
                          (e[r].endIndex += e[r].startIndex);
                      var n = JSON.stringify(e),
                        i = t.reduce(function (t, e) {
                          return new Blob([t, e]);
                        }),
                        t = new Uint8Array(u.Utils._intToByteArray(i.size));
                      o(new Blob([a, s, t, i, n]));
                    })
                    .catch(function (t) {
                      e(t);
                    });
                });
              }),
              s);
          function s() {
            var t = (null !== o && o.apply(this, arguments)) || this;
            return (t._jobs = []), t;
          }
          r.ClientPrintJobGroup = i;
        },
        { "./ClientJob": 1, "./Utils": 19 },
      ],
      4: [
        function (t, e, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.UserSelectedPrinter =
              r.NetworkPrinter =
              r.SerialPortPrinter =
              r.ParallelPortPrinter =
              r.InstalledPrinter =
              r.DefaultPrinter =
                void 0);
          var s = t("./Enums"),
            t =
              ((n.prototype.serialize = function () {
                return JSON.stringify({ type: this.Id });
              }),
              n);
          function n() {
            this.Id = 0;
          }
          r.DefaultPrinter = t;
          (i.prototype.bool2str = function (t, e, r) {
            return (
              void 0 === e && (e = "1"), void 0 === r && (r = "0"), t ? e : r
            );
          }),
            Object.defineProperty(i.prototype, "printerName", {
              get: function () {
                return this._name;
              },
              set: function (t) {
                this._name = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "printToDefaultIfNotFound", {
              get: function () {
                return this._printDefault;
              },
              set: function (t) {
                this._printDefault = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "trayName", {
              get: function () {
                return this._tray;
              },
              set: function (t) {
                this._tray = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "paperName", {
              get: function () {
                return this._paper;
              },
              set: function (t) {
                this._paper = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "duplex", {
              get: function () {
                return this._duplex;
              },
              set: function (t) {
                this._duplex = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "autoDetectRawModeDataType", {
              get: function () {
                return this._autoDetectRawModeDataType;
              },
              set: function (t) {
                this._autoDetectRawModeDataType = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "driverModel", {
              get: function () {
                return this._driverModel;
              },
              set: function (t) {
                this._driverModel = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (i.prototype.serialize = function () {
              if (!this._name)
                throw "The specified printer name is null or empty.";
              return JSON.stringify({
                type: this.Id,
                name: this._name,
                duplex: this._duplex,
                paper: this._paper,
                tray: this._tray,
                use_default: this._printDefault,
                auto_detect_raw_mode_data_type: this._autoDetectRawModeDataType,
                driver_model: this._driverModel,
              });
            }),
            (t = i);
          function i(t, e, r, n, i, o, a) {
            if (
              (void 0 === e && (e = !1),
              void 0 === r && (r = ""),
              void 0 === n && (n = ""),
              void 0 === i && (i = s.DuplexMode.Default),
              void 0 === o && (o = !1),
              void 0 === a && (a = 0),
              (this.Id = 1),
              (this._name = ""),
              (this._printDefault = !1),
              (this._tray = ""),
              (this._paper = ""),
              (this._duplex = s.DuplexMode.Default),
              (this._autoDetectRawModeDataType = !1),
              (this._driverModel = 0),
              !t)
            )
              throw "The specified printer name is null or empty.";
            (this._name = t),
              (this._printDefault = e),
              (this._paper = n),
              (this._tray = r),
              (this._duplex = i),
              (this._autoDetectRawModeDataType = o),
              (this._driverModel = a);
          }
          r.InstalledPrinter = t;
          Object.defineProperty(o.prototype, "portName", {
            get: function () {
              return this._parallelPortName;
            },
            set: function (t) {
              this._parallelPortName = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
            (o.prototype.serialize = function () {
              if (!this.portName)
                throw "The specified parallel port name is null or empty.";
              return JSON.stringify({
                type: this.Id,
                port: this._parallelPortName,
              });
            }),
            (t = o);
          function o(t) {
            if (((this.Id = 2), (this._parallelPortName = "LPT1"), !t))
              throw "The specified parallel port name is null or empty.";
            this._parallelPortName = t;
          }
          r.ParallelPortPrinter = t;
          Object.defineProperty(a.prototype, "portName", {
            get: function () {
              return this._port;
            },
            set: function (t) {
              this._port = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
            Object.defineProperty(a.prototype, "baudRate", {
              get: function () {
                return this._baud_rate;
              },
              set: function (t) {
                this._baud_rate = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(a.prototype, "parity", {
              get: function () {
                return this._parity;
              },
              set: function (t) {
                this._parity = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(a.prototype, "stopBits", {
              get: function () {
                return this._stop_bits;
              },
              set: function (t) {
                this._stop_bits = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(a.prototype, "dataBits", {
              get: function () {
                return this._data_bits;
              },
              set: function (t) {
                this._data_bits = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(a.prototype, "flowControl", {
              get: function () {
                return this._flow_control;
              },
              set: function (t) {
                this._flow_control = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (a.prototype.serialize = function () {
              if (!this.portName)
                throw "The specified serial port name is null or empty.";
              return JSON.stringify({
                type: this.Id,
                port: this._port,
                baud_rate: this._baud_rate,
                data_bits: this._data_bits,
                flow_control: this._flow_control,
                parity: this._parity,
                stop_bits: this._stop_bits,
              });
            }),
            (t = a);
          function a(t, e, r, n, i, o) {
            if (
              ((this.Id = 3),
              (this._port = "COM1"),
              (this._baud_rate = 9600),
              (this._parity = s.Serial.Parity.None),
              (this._stop_bits = s.Serial.StopBits.One),
              (this._data_bits = s.Serial.DataBits.Eight),
              (this._flow_control = s.Serial.Handshake.XOnXOff),
              !t)
            )
              throw "The specified serial port name is null or empty.";
            (this._port = t),
              (this._baud_rate = e),
              (this._parity = r),
              (this._stop_bits = n),
              (this._data_bits = i),
              (this._flow_control = o);
          }
          r.SerialPortPrinter = t;
          Object.defineProperty(u.prototype, "dnsName", {
            get: function () {
              return this._dnsName;
            },
            set: function (t) {
              this._dnsName = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
            Object.defineProperty(u.prototype, "ipAddress", {
              get: function () {
                return this._ip;
              },
              set: function (t) {
                this._ip = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(u.prototype, "port", {
              get: function () {
                return this._port;
              },
              set: function (t) {
                if (!(0 <= t && t <= 65535)) throw "Invalid Port Number";
                this._port = Math.floor(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (u.prototype.serialize = function () {
              if (!this.dnsName && !this.ipAddress)
                throw "You have to specify an IP address or a DNS name";
              return JSON.stringify({
                type: this.Id,
                ip: this._ip,
                dns: this._dnsName,
                port: this._port,
              });
            }),
            (t = u);
          function u(t, e, r) {
            if (
              ((this.Id = 4),
              (this._ip = "0.0.0.0"),
              (this._port = 0),
              (this._dnsName = ""),
              !e && !r)
            )
              throw "You have to specify an IP address or a DNS name";
            e && (this._ip = e), r && (this._dnsName = r), (this._port = t);
          }
          r.NetworkPrinter = t;
          (l.prototype.serialize = function () {
            return JSON.stringify({ type: this.Id });
          }),
            (t = l);
          function l() {
            this.Id = 5;
          }
          r.UserSelectedPrinter = t;
        },
        { "./Enums": 6 },
      ],
      5: [
        function (t, e, r) {
          "use strict";
          var n,
            i =
              (this && this.__extends) ||
              ((n = function (t, e) {
                return (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(t, e);
              }),
              function (t, e) {
                function r() {
                  this.constructor = t;
                }
                n(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r()));
              });
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.ClientScanJob = void 0);
          var o,
            a = t("./ClientJob"),
            s = t("./Enums"),
            i =
              ((o = a.ClientJob),
              i(u, o),
              Object.defineProperty(u.prototype, "scannerName", {
                get: function () {
                  return this._scannerName;
                },
                set: function (t) {
                  this._scannerName = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "pixelMode", {
                get: function () {
                  return this._pixelMode;
                },
                set: function (t) {
                  this._pixelMode = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "resolution", {
                get: function () {
                  return this._resolution;
                },
                set: function (t) {
                  this._resolution = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "imageFormat", {
                get: function () {
                  return this._imageFormat;
                },
                set: function (t) {
                  this._imageFormat = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "enableDuplex", {
                get: function () {
                  return this._enableDuplex;
                },
                set: function (t) {
                  this._enableDuplex = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "enableFeeder", {
                get: function () {
                  return this._enableFeeder;
                },
                set: function (t) {
                  this._enableFeeder = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "feederCount", {
                get: function () {
                  return this._feederCount;
                },
                set: function (t) {
                  this._feederCount = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "jpgCompressionQuality", {
                get: function () {
                  return this._jpgCompressionQuality;
                },
                set: function (t) {
                  this._jpgCompressionQuality = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "threshold", {
                get: function () {
                  return this._threshold;
                },
                set: function (t) {
                  this._threshold = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "dither", {
                get: function () {
                  return this._dither;
                },
                set: function (t) {
                  this._dither = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(u.prototype, "pdfTitle", {
                get: function () {
                  return this._pdfTitle;
                },
                set: function (t) {
                  this._pdfTitle = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (u.prototype.onFinished = function (t) {}),
              (u.prototype.onError = function (t, e) {}),
              (u.prototype.onUpdate = function (t, e) {
                t.result && this.onFinished(t);
              }),
              (u.prototype._generateDataAsync = function () {
                var r = this;
                return new Promise(function (t, e) {
                  r._resolution || e("Scan resolution is required"),
                    r._scannerName || e("Scanner name is required");
                  e = {
                    output_image_format: r._imageFormat,
                    pixel_mode: r._pixelMode,
                    scanner_name: r._scannerName,
                    resolution: r._resolution,
                    enable_duplex: r._enableDuplex,
                    enable_feeder: r._enableFeeder,
                    feeder_count: r._feederCount,
                    jpg_compression_quality: r._jpgCompressionQuality,
                    threshold: r._threshold,
                    dither: r._dither,
                    pdf_title: r._pdfTitle,
                  };
                  t(JSON.stringify(e));
                });
              }),
              u);
          function u() {
            var t = (null !== o && o.apply(this, arguments)) || this;
            return (
              (t._type = "scan_job"),
              (t._scannerName = ""),
              (t._pixelMode = s.PixelMode.Color),
              (t._resolution = 200),
              (t._imageFormat = s.ScannerImageFormatOutput.JPG),
              (t._enableDuplex = !1),
              (t._enableFeeder = !1),
              (t._feederCount = 1),
              (t._jpgCompressionQuality = 100),
              (t._threshold = 128),
              (t._dither = s.Dither.Threshold),
              (t._pdfTitle = ""),
              t
            );
          }
          r.ClientScanJob = i;
        },
        { "./ClientJob": 1, "./Enums": 6 },
      ],
      6: [
        function (t, e, r) {
          "use strict";
          var n, i;
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.Dither =
              r.PrinterIcon =
              r.Serial =
              r.PrintOrientation =
              r.TextAlignment =
              r.PrintRotation =
              r.WSStatus =
              r.FileSourceType =
              r.PixelMode =
              r.ScannerImageFormatOutput =
              r.Sizing =
              r.DuplexMode =
              r.Encoding =
              r.PrintersInfoLevel =
              r.PrintFileType =
                void 0),
            ((i = r.PrintFileType || (r.PrintFileType = {}))[(i.Image = 0)] =
              "Image"),
            (i[(i.Generic = 1)] = "Generic"),
            (i[(i.Document = 2)] = "Document"),
            (i[(i.WDOC = 3)] = "WDOC"),
            (i[(i.WXLS = 4)] = "WXLS"),
            (i[(i.WPDF = 5)] = "WPDF"),
            (i[(i.WTXT = 6)] = "WTXT"),
            (i[(i.Group = 7)] = "Group"),
            (i[(i.WTIF = 8)] = "WTIF"),
            ((n = r.PrintersInfoLevel || (r.PrintersInfoLevel = {}))[
              (n.Basic = 0)
            ] = "Basic"),
            (n[(n.Extended = 1)] = "Extended"),
            ((i = r.Encoding || (r.Encoding = {}))[(i.Default = -1)] =
              "Default"),
            (i[(i.IBM_EBCDIC_US_Canada = 37)] = "IBM_EBCDIC_US_Canada"),
            (i[(i.OEM_United_States = 437)] = "OEM_United_States"),
            (i[(i.IBM_EBCDIC_International = 500)] =
              "IBM_EBCDIC_International"),
            (i[(i.Polish_MS_DOS = 620)] = "Polish_MS_DOS"),
            (i[(i.Arabic_ASMO_708 = 708)] = "Arabic_ASMO_708"),
            (i[(i.Arabic_Transparent_ASMO_Arabic_DOS = 720)] =
              "Arabic_Transparent_ASMO_Arabic_DOS"),
            (i[(i.OEM_Greek_formerly_437G_Greek_DOS = 737)] =
              "OEM_Greek_formerly_437G_Greek_DOS"),
            (i[(i.OEM_Baltic_Baltic_DOS = 775)] = "OEM_Baltic_Baltic_DOS"),
            (i[(i.OEM_Russian_Cyrillic_Euro_symbol = 808)] =
              "OEM_Russian_Cyrillic_Euro_symbol"),
            (i[(i.OEM_Multilingual_Latin_1_Western_European_DOS = 850)] =
              "OEM_Multilingual_Latin_1_Western_European_DOS"),
            (i[(i.OEM_Latin_2_Central_European_DOS = 852)] =
              "OEM_Latin_2_Central_European_DOS"),
            (i[(i.OEM_Cyrillic_primarily_Russian = 855)] =
              "OEM_Cyrillic_primarily_Russian"),
            (i[(i.OEM_Turkish_Turkish_DOS = 857)] = "OEM_Turkish_Turkish_DOS"),
            (i[(i.OEM_Multilingual_Latin_1_Euro_symbol = 858)] =
              "OEM_Multilingual_Latin_1_Euro_symbol"),
            (i[(i.OEM_Portuguese_Portuguese_DOS = 860)] =
              "OEM_Portuguese_Portuguese_DOS"),
            (i[(i.OEM_Icelandic_Icelandic_DOS = 861)] =
              "OEM_Icelandic_Icelandic_DOS"),
            (i[(i.OEM_Hebrew_Hebrew_DOS = 862)] = "OEM_Hebrew_Hebrew_DOS"),
            (i[(i.OEM_French_Canadian_French_Canadian_DOS = 863)] =
              "OEM_French_Canadian_French_Canadian_DOS"),
            (i[(i.OEM_Arabic_Arabic_864 = 864)] = "OEM_Arabic_Arabic_864"),
            (i[(i.OEM_Nordic_Nordic_DOS = 865)] = "OEM_Nordic_Nordic_DOS"),
            (i[(i.OEM_Russian_Cyrillic_DOS = 866)] =
              "OEM_Russian_Cyrillic_DOS"),
            (i[(i.OEM_Modern_Greek_Greek_Modern_DOS = 869)] =
              "OEM_Modern_Greek_Greek_Modern_DOS"),
            (i[(i.IBM_EBCDIC_Multilingual_ROECE_Latin_2 = 870)] =
              "IBM_EBCDIC_Multilingual_ROECE_Latin_2"),
            (i[(i.OEM_Cyrillic_primarily_Russian_Euro_Symbol = 872)] =
              "OEM_Cyrillic_primarily_Russian_Euro_Symbol"),
            (i[(i.Windows_Thai = 874)] = "Windows_Thai"),
            (i[(i.IBM_EBCDIC_Greek_Modern = 875)] = "IBM_EBCDIC_Greek_Modern"),
            (i[(i.Kamenicky_Czech_MS_DOS = 895)] = "Kamenicky_Czech_MS_DOS"),
            (i[(i.Japanese_Shift_JIS = 932)] = "Japanese_Shift_JIS"),
            (i[(i.Simplified_Chinese_GBK = 936)] = "Simplified_Chinese_GBK"),
            (i[(i.Korean = 949)] = "Korean"),
            (i[(i.Traditional_Chinese_Big5 = 950)] =
              "Traditional_Chinese_Big5"),
            (i[(i.IBM_EBCDIC_French = 1010)] = "IBM_EBCDIC_French"),
            (i[(i.IBM_EBCDIC_Turkish_Latin_5 = 1026)] =
              "IBM_EBCDIC_Turkish_Latin_5"),
            (i[(i.IBM_EBCDIC_Latin_1_Open_System = 1047)] =
              "IBM_EBCDIC_Latin_1_Open_System"),
            (i[(i.IBM_EBCDIC_Lao_1132_1133_1341 = 1132)] =
              "IBM_EBCDIC_Lao_1132_1133_1341"),
            (i[(i.IBM_EBCDIC_US_Canada_037_Euro_symbol = 1140)] =
              "IBM_EBCDIC_US_Canada_037_Euro_symbol"),
            (i[(i.IBM_EBCDIC_Germany_20273_Euro_symbol = 1141)] =
              "IBM_EBCDIC_Germany_20273_Euro_symbol"),
            (i[(i.IBM_EBCDIC_Denmark_Norway_20277_Euro_symbol = 1142)] =
              "IBM_EBCDIC_Denmark_Norway_20277_Euro_symbol"),
            (i[(i.IBM_EBCDIC_Finland_Sweden_20278_Euro_symbol = 1143)] =
              "IBM_EBCDIC_Finland_Sweden_20278_Euro_symbol"),
            (i[(i.IBM_EBCDIC_Italy_20280_Euro_symbol = 1144)] =
              "IBM_EBCDIC_Italy_20280_Euro_symbol"),
            (i[(i.IBM_EBCDIC_Latin_America_Spain_20284_Euro_symbol = 1145)] =
              "IBM_EBCDIC_Latin_America_Spain_20284_Euro_symbol"),
            (i[(i.IBM_EBCDIC_United_Kingdom_20285_Euro_symbol = 1146)] =
              "IBM_EBCDIC_United_Kingdom_20285_Euro_symbol"),
            (i[(i.IBM_EBCDIC_France_20297_Euro_symbol = 1147)] =
              "IBM_EBCDIC_France_20297_Euro_symbol"),
            (i[(i.IBM_EBCDIC_International_500_Euro_symbol = 1148)] =
              "IBM_EBCDIC_International_500_Euro_symbol"),
            (i[(i.IBM_EBCDIC_Icelandic_20871_Euro_symbol = 1149)] =
              "IBM_EBCDIC_Icelandic_20871_Euro_symbol"),
            (i[(i.Unicode_UTF_16_little_endian_BMP_of_ISO_10646 = 1200)] =
              "Unicode_UTF_16_little_endian_BMP_of_ISO_10646"),
            (i[(i.Unicode_UTF_16_big_endian = 1201)] =
              "Unicode_UTF_16_big_endian"),
            (i[(i.Windows_Central_Europe = 1250)] = "Windows_Central_Europe"),
            (i[(i.Windows_Cyrillic = 1251)] = "Windows_Cyrillic"),
            (i[(i.Windows_Latin_I = 1252)] = "Windows_Latin_I"),
            (i[(i.Windows_Greek = 1253)] = "Windows_Greek"),
            (i[(i.Windows_Turkish = 1254)] = "Windows_Turkish"),
            (i[(i.Windows_Hebrew = 1255)] = "Windows_Hebrew"),
            (i[(i.Windows_Arabic = 1256)] = "Windows_Arabic"),
            (i[(i.Windows_Baltic = 1257)] = "Windows_Baltic"),
            (i[(i.Windows_Vietnam = 1258)] = "Windows_Vietnam"),
            (i[(i.Korean_Johab = 1361)] = "Korean_Johab"),
            (i[(i.MAC_Roman = 1e4)] = "MAC_Roman"),
            (i[(i.Japanese_Mac = 10001)] = "Japanese_Mac"),
            (i[(i.MAC_Traditional_Chinese_Big5 = 10002)] =
              "MAC_Traditional_Chinese_Big5"),
            (i[(i.Korean_Mac = 10003)] = "Korean_Mac"),
            (i[(i.Arabic_Mac = 10004)] = "Arabic_Mac"),
            (i[(i.Hebrew_Mac = 10005)] = "Hebrew_Mac"),
            (i[(i.Greek_Mac = 10006)] = "Greek_Mac"),
            (i[(i.Cyrillic_Mac = 10007)] = "Cyrillic_Mac"),
            (i[(i.MAC_Simplified_Chinese_GB_2312 = 10008)] =
              "MAC_Simplified_Chinese_GB_2312"),
            (i[(i.Romanian_Mac = 10010)] = "Romanian_Mac"),
            (i[(i.Ukrainian_Mac = 10017)] = "Ukrainian_Mac"),
            (i[(i.Thai_Mac = 10021)] = "Thai_Mac"),
            (i[(i.MAC_Latin_2_Central_European = 10029)] =
              "MAC_Latin_2_Central_European"),
            (i[(i.Icelandic_Mac = 10079)] = "Icelandic_Mac"),
            (i[(i.Turkish_Mac = 10081)] = "Turkish_Mac"),
            (i[(i.Croatian_Mac = 10082)] = "Croatian_Mac"),
            (i[(i.Unicode_UTF_32_little_endian_byte_order = 12e3)] =
              "Unicode_UTF_32_little_endian_byte_order"),
            (i[(i.Unicode_UTF_32_big_endian_byte_order = 12001)] =
              "Unicode_UTF_32_big_endian_byte_order"),
            (i[(i.CNS_Taiwan_Chinese_Traditional = 2e4)] =
              "CNS_Taiwan_Chinese_Traditional"),
            (i[(i.TCA_Taiwan = 20001)] = "TCA_Taiwan"),
            (i[(i.ETEN_Taiwan_Chinese_Traditional = 20002)] =
              "ETEN_Taiwan_Chinese_Traditional"),
            (i[(i.IBM5550_Taiwan = 20003)] = "IBM5550_Taiwan"),
            (i[(i.TeleText_Taiwan = 20004)] = "TeleText_Taiwan"),
            (i[(i.Wang_Taiwan = 20005)] = "Wang_Taiwan"),
            (i[(i.Western_European_IA5_IRV_International_Alphabet_5 = 20105)] =
              "Western_European_IA5_IRV_International_Alphabet_5"),
            (i[(i.IA5_German_7_bit = 20106)] = "IA5_German_7_bit"),
            (i[(i.IA5_Swedish_7_bit = 20107)] = "IA5_Swedish_7_bit"),
            (i[(i.IA5_Norwegian_7_bit = 20108)] = "IA5_Norwegian_7_bit"),
            (i[(i.US_ASCII_7_bit = 20127)] = "US_ASCII_7_bit"),
            (i[(i.T_61 = 20261)] = "T_61"),
            (i[(i.ISO_6937_Non_Spacing_Accent = 20269)] =
              "ISO_6937_Non_Spacing_Accent"),
            (i[(i.IBM_EBCDIC_Germany = 20273)] = "IBM_EBCDIC_Germany"),
            (i[(i.IBM_EBCDIC_Denmark_Norway = 20277)] =
              "IBM_EBCDIC_Denmark_Norway"),
            (i[(i.IBM_EBCDIC_Finland_Sweden = 20278)] =
              "IBM_EBCDIC_Finland_Sweden"),
            (i[(i.IBM_EBCDIC_Italy = 20280)] = "IBM_EBCDIC_Italy"),
            (i[(i.IBM_EBCDIC_Latin_America_Spain = 20284)] =
              "IBM_EBCDIC_Latin_America_Spain"),
            (i[(i.IBM_EBCDIC_United_Kingdom = 20285)] =
              "IBM_EBCDIC_United_Kingdom"),
            (i[(i.IBM_EBCDIC_Japanese_Katakana_Extended = 20290)] =
              "IBM_EBCDIC_Japanese_Katakana_Extended"),
            (i[(i.IBM_EBCDIC_France = 20297)] = "IBM_EBCDIC_France"),
            (i[(i.IBM_EBCDIC_Arabic = 20420)] = "IBM_EBCDIC_Arabic"),
            (i[(i.IBM_EBCDIC_Greek = 20423)] = "IBM_EBCDIC_Greek"),
            (i[(i.IBM_EBCDIC_Hebrew = 20424)] = "IBM_EBCDIC_Hebrew"),
            (i[(i.IBM_EBCDIC_Korean_Extended = 20833)] =
              "IBM_EBCDIC_Korean_Extended"),
            (i[(i.IBM_EBCDIC_Thai = 20838)] = "IBM_EBCDIC_Thai"),
            (i[(i.Russian_Cyrillic_KOI8_R = 20866)] =
              "Russian_Cyrillic_KOI8_R"),
            (i[(i.IBM_EBCDIC_Icelandic = 20871)] = "IBM_EBCDIC_Icelandic"),
            (i[(i.IBM_EBCDIC_Cyrillic_Russian = 20880)] =
              "IBM_EBCDIC_Cyrillic_Russian"),
            (i[(i.IBM_EBCDIC_Turkish = 20905)] = "IBM_EBCDIC_Turkish"),
            (i[(i.IBM_EBCDIC_Latin_1_Open_System_1047_Euro_symbol = 20924)] =
              "IBM_EBCDIC_Latin_1_Open_System_1047_Euro_symbol"),
            (i[(i.Japanese_JIS_0208_1990_and_0212_1990 = 20932)] =
              "Japanese_JIS_0208_1990_and_0212_1990"),
            (i[(i.Simplified_Chinese_GB2312_80 = 20936)] =
              "Simplified_Chinese_GB2312_80"),
            (i[(i.Korean_Wansung = 20949)] = "Korean_Wansung"),
            (i[(i.IBM_EBCDIC_Cyrillic_Serbian_Bulgarian = 21025)] =
              "IBM_EBCDIC_Cyrillic_Serbian_Bulgarian"),
            (i[(i.Extended_Ext_Alpha_Lowercase = 21027)] =
              "Extended_Ext_Alpha_Lowercase"),
            (i[(i.Ukrainian_Cyrillic_KOI8_U = 21866)] =
              "Ukrainian_Cyrillic_KOI8_U"),
            (i[(i.ISO_8859_1_Latin_1_Western_European = 28591)] =
              "ISO_8859_1_Latin_1_Western_European"),
            (i[(i.ISO_8859_2_Latin_2_Central_European = 28592)] =
              "ISO_8859_2_Latin_2_Central_European"),
            (i[(i.ISO_8859_3_Latin_3 = 28593)] = "ISO_8859_3_Latin_3"),
            (i[(i.ISO_8859_4_Baltic = 28594)] = "ISO_8859_4_Baltic"),
            (i[(i.ISO_8859_5_Cyrillic = 28595)] = "ISO_8859_5_Cyrillic"),
            (i[(i.ISO_8859_6_Arabic = 28596)] = "ISO_8859_6_Arabic"),
            (i[(i.ISO_8859_7_Greek = 28597)] = "ISO_8859_7_Greek"),
            (i[(i.ISO_8859_8_Hebrew_ISO_Visual = 28598)] =
              "ISO_8859_8_Hebrew_ISO_Visual"),
            (i[(i.ISO_8859_9_Turkish = 28599)] = "ISO_8859_9_Turkish"),
            (i[(i.ISO_8859_10_Latin_6 = 28600)] = "ISO_8859_10_Latin_6"),
            (i[(i.ISO_8859_11_Latin_Thai = 28601)] = "ISO_8859_11_Latin_Thai"),
            (i[(i.ISO_8859_13_Latin_7_Estonian = 28603)] =
              "ISO_8859_13_Latin_7_Estonian"),
            (i[(i.ISO_8859_14_Latin_8_Celtic = 28604)] =
              "ISO_8859_14_Latin_8_Celtic"),
            (i[(i.ISO_8859_15_Latin_9 = 28605)] = "ISO_8859_15_Latin_9"),
            (i[(i.ISO_8859_15_Latin_10 = 28606)] = "ISO_8859_15_Latin_10"),
            (i[(i.Europa_3 = 29001)] = "Europa_3"),
            (i[(i.ISO_8859_8_Hebrew_ISO_Logical = 38598)] =
              "ISO_8859_8_Hebrew_ISO_Logical"),
            (i[(i.Atari_ST_TT = 47451)] = "Atari_ST_TT"),
            (i[(i.ISO_2022_JIS_Japanese_with_no_halfwidth_Katakana = 50220)] =
              "ISO_2022_JIS_Japanese_with_no_halfwidth_Katakana"),
            (i[(i.ISO_2022_JIS_Japanese_with_halfwidth_Katakana = 50221)] =
              "ISO_2022_JIS_Japanese_with_halfwidth_Katakana"),
            (i[
              (i.ISO_2022_Japanese_JIS_X_0201_1989_1_byte_Kana_SO_SI = 50222)
            ] = "ISO_2022_Japanese_JIS_X_0201_1989_1_byte_Kana_SO_SI"),
            (i[(i.ISO_2022_Korean = 50225)] = "ISO_2022_Korean"),
            (i[(i.ISO_2022_Simplified_Chinese = 50227)] =
              "ISO_2022_Simplified_Chinese"),
            (i[(i.EUC_Japanese = 51932)] = "EUC_Japanese"),
            (i[(i.EUC_Simplified_Chinese = 51936)] = "EUC_Simplified_Chinese"),
            (i[(i.EUC_Korean = 51949)] = "EUC_Korean"),
            (i[(i.HZ_GB2312_Simplified_Chinese = 52936)] =
              "HZ_GB2312_Simplified_Chinese"),
            (i[(i.GB18030_Simplified_Chinese_4_byte = 54936)] =
              "GB18030_Simplified_Chinese_4_byte"),
            (i[(i.ISCII_Devanagari = 57002)] = "ISCII_Devanagari"),
            (i[(i.ISCII_Bengali = 57003)] = "ISCII_Bengali"),
            (i[(i.ISCII_Tamil = 57004)] = "ISCII_Tamil"),
            (i[(i.ISCII_Telugu = 57005)] = "ISCII_Telugu"),
            (i[(i.ISCII_Assamese = 57006)] = "ISCII_Assamese"),
            (i[(i.ISCII_Oriya = 57007)] = "ISCII_Oriya"),
            (i[(i.ISCII_Kannada = 57008)] = "ISCII_Kannada"),
            (i[(i.ISCII_Malayalam = 57009)] = "ISCII_Malayalam"),
            (i[(i.ISCII_Gujarati = 57010)] = "ISCII_Gujarati"),
            (i[(i.ISCII_Punjabi = 57011)] = "ISCII_Punjabi"),
            (i[(i.Unicode_UTF_7 = 65e3)] = "Unicode_UTF_7"),
            (i[(i.Unicode_UTF_8 = 65001)] = "Unicode_UTF_8"),
            ((n = r.DuplexMode || (r.DuplexMode = {}))[(n.Default = 0)] =
              "Default"),
            (n[(n.Simplex = 1)] = "Simplex"),
            (n[(n.DuplexLongEdge = 2)] = "DuplexLongEdge"),
            (n[(n.DuplexShortEdge = 3)] = "DuplexShortEdge"),
            ((i = r.Sizing || (r.Sizing = {}))[(i.None = 0)] = "None"),
            (i[(i.Fit = 1)] = "Fit"),
            ((n =
              r.ScannerImageFormatOutput || (r.ScannerImageFormatOutput = {}))[
              (n.JPG = 0)
            ] = "JPG"),
            (n[(n.PNG = 1)] = "PNG"),
            (n[(n.TIFF = 2)] = "TIFF"),
            (n[(n.PDF = 3)] = "PDF"),
            ((i = r.PixelMode || (r.PixelMode = {}))[(i.Grayscale = 0)] =
              "Grayscale"),
            (i[(i.Color = 1)] = "Color"),
            (i[(i.BlackAndWhite = 2)] = "BlackAndWhite"),
            ((n = r.FileSourceType || (r.FileSourceType = {}))[(n.Base64 = 0)] =
              "Base64"),
            (n[(n.Text = 1)] = "Text"),
            (n[(n.BLOB = 2)] = "BLOB"),
            (n[(n.URL = 3)] = "URL"),
            (n[(n.ExternalURL = 4)] = "ExternalURL"),
            ((i = r.WSStatus || (r.WSStatus = {}))[(i.Open = 0)] = "Open"),
            (i[(i.Closed = 1)] = "Closed"),
            (i[(i.Blocked = 2)] = "Blocked"),
            (i[(i.WaitingForUserResponse = 3)] = "WaitingForUserResponse"),
            ((n = r.PrintRotation || (r.PrintRotation = {}))[(n.None = 0)] =
              "None"),
            (n[(n.Rot90 = 1)] = "Rot90"),
            (n[(n.Rot180 = 2)] = "Rot180"),
            (n[(n.Rot270 = 3)] = "Rot270"),
            ((i = r.TextAlignment || (r.TextAlignment = {}))[(i.Left = 0)] =
              "Left"),
            (i[(i.Center = 1)] = "Center"),
            (i[(i.Right = 2)] = "Right"),
            (i[(i.Justify = 3)] = "Justify"),
            (i[(i.None = 4)] = "None"),
            ((n = r.PrintOrientation || (r.PrintOrientation = {}))[
              (n.Portrait = 0)
            ] = "Portrait"),
            (n[(n.Landscape = 1)] = "Landscape"),
            (i = r.Serial || (r.Serial = {})),
            ((n = i.Parity || (i.Parity = {}))[(n.None = 0)] = "None"),
            (n[(n.Odd = 1)] = "Odd"),
            (n[(n.Even = 2)] = "Even"),
            (n[(n.Mark = 3)] = "Mark"),
            (n[(n.Space = 4)] = "Space"),
            ((n = i.StopBits || (i.StopBits = {}))[(n.One = 0)] = "One"),
            (n[(n.OnePointFive = 1)] = "OnePointFive"),
            (n[(n.Two = 2)] = "Two"),
            ((n = i.DataBits || (i.DataBits = {}))[(n.Eight = 0)] = "Eight"),
            (n[(n.Seven = 1)] = "Seven"),
            (n[(n.Six = 2)] = "Six"),
            (n[(n.Five = 3)] = "Five"),
            ((i = i.Handshake || (i.Handshake = {}))[(i.None = 0)] = "None"),
            (i[(i.RequestToSend = 1)] = "RequestToSend"),
            (i[(i.RequestToSendXOnXOff = 2)] = "RequestToSendXOnXOff"),
            (i[(i.XOnXOff = 3)] = "XOnXOff"),
            ((i = r.PrinterIcon || (r.PrinterIcon = {}))[(i.None = 0)] =
              "None"),
            (i[(i.Small = 1)] = "Small"),
            (i[(i.Large = 2)] = "Large"),
            (i[(i.ExtraLarge = 3)] = "ExtraLarge"),
            (i[(i.Jumbo = 4)] = "Jumbo"),
            ((r = r.Dither || (r.Dither = {}))[(r.Threshold = 0)] =
              "Threshold"),
            (r[(r.FloydSteinberg = 1)] = "FloydSteinberg"),
            (r[(r.Bayer4x4 = 2)] = "Bayer4x4"),
            (r[(r.Bayer8x8 = 3)] = "Bayer8x8"),
            (r[(r.Cluster6x6 = 4)] = "Cluster6x6"),
            (r[(r.Cluster8x8 = 5)] = "Cluster8x8"),
            (r[(r.Cluster16x16 = 6)] = "Cluster16x16");
        },
        {},
      ],
      7: [
        function (t, e, r) {
          "use strict";
          var n =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, r, n) {
                    void 0 === n && (n = r),
                      Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function () {
                          return e[r];
                        },
                      });
                  }
                : function (t, e, r, n) {
                    t[(n = void 0 === n ? r : n)] = e[r];
                  }),
            i =
              (this && this.__exportStar) ||
              function (t, e) {
                for (var r in t)
                  "default" === r ||
                    Object.prototype.hasOwnProperty.call(e, r) ||
                    n(e, t, r);
              };
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.TcpComm =
              r.SerialComm =
              r.PrintFileXLS =
              r.PrintFileTXT =
              r.PrintFileTIF =
              r.PrintFilePDF =
              r.PrintFileGroup =
              r.PrintFileDOC =
              r.PrintFile =
              r.JSPrintManager =
              r.ClientScanJob =
              r.ClientPrintJobGroup =
              r.ClientPrintJob =
              r.UserSelectedPrinter =
              r.SerialPortPrinter =
              r.ParallelPortPrinter =
              r.NetworkPrinter =
              r.InstalledPrinter =
              r.DefaultPrinter =
                void 0);
          var o = t("./ClientPrinter");
          Object.defineProperty(r, "DefaultPrinter", {
            enumerable: !0,
            get: function () {
              return o.DefaultPrinter;
            },
          }),
            Object.defineProperty(r, "InstalledPrinter", {
              enumerable: !0,
              get: function () {
                return o.InstalledPrinter;
              },
            }),
            Object.defineProperty(r, "NetworkPrinter", {
              enumerable: !0,
              get: function () {
                return o.NetworkPrinter;
              },
            }),
            Object.defineProperty(r, "ParallelPortPrinter", {
              enumerable: !0,
              get: function () {
                return o.ParallelPortPrinter;
              },
            }),
            Object.defineProperty(r, "SerialPortPrinter", {
              enumerable: !0,
              get: function () {
                return o.SerialPortPrinter;
              },
            }),
            Object.defineProperty(r, "UserSelectedPrinter", {
              enumerable: !0,
              get: function () {
                return o.UserSelectedPrinter;
              },
            });
          var a = t("./ClientPrintJob");
          Object.defineProperty(r, "ClientPrintJob", {
            enumerable: !0,
            get: function () {
              return a.ClientPrintJob;
            },
          });
          var s = t("./ClientPrintJobGroup");
          Object.defineProperty(r, "ClientPrintJobGroup", {
            enumerable: !0,
            get: function () {
              return s.ClientPrintJobGroup;
            },
          });
          var u = t("./ClientScanJob");
          Object.defineProperty(r, "ClientScanJob", {
            enumerable: !0,
            get: function () {
              return u.ClientScanJob;
            },
          }),
            i(t("./Enums"), r);
          var l = t("./JSPrintManager");
          Object.defineProperty(r, "JSPrintManager", {
            enumerable: !0,
            get: function () {
              return l.JSPrintManager;
            },
          });
          var c = t("./PrintFile");
          Object.defineProperty(r, "PrintFile", {
            enumerable: !0,
            get: function () {
              return c.PrintFile;
            },
          });
          var f = t("./PrintFileDOC");
          Object.defineProperty(r, "PrintFileDOC", {
            enumerable: !0,
            get: function () {
              return f.PrintFileDOC;
            },
          });
          var h = t("./PrintFileGroup");
          Object.defineProperty(r, "PrintFileGroup", {
            enumerable: !0,
            get: function () {
              return h.PrintFileGroup;
            },
          });
          var d = t("./PrintFilePDF");
          Object.defineProperty(r, "PrintFilePDF", {
            enumerable: !0,
            get: function () {
              return d.PrintFilePDF;
            },
          });
          var p = t("./PrintFileTIF");
          Object.defineProperty(r, "PrintFileTIF", {
            enumerable: !0,
            get: function () {
              return p.PrintFileTIF;
            },
          });
          var _ = t("./PrintFileTXT");
          Object.defineProperty(r, "PrintFileTXT", {
            enumerable: !0,
            get: function () {
              return _.PrintFileTXT;
            },
          });
          var m = t("./PrintFileXLS");
          Object.defineProperty(r, "PrintFileXLS", {
            enumerable: !0,
            get: function () {
              return m.PrintFileXLS;
            },
          });
          var y = t("./SerialComm");
          Object.defineProperty(r, "SerialComm", {
            enumerable: !0,
            get: function () {
              return y.SerialComm;
            },
          });
          var g = t("./TcpComm");
          Object.defineProperty(r, "TcpComm", {
            enumerable: !0,
            get: function () {
              return g.TcpComm;
            },
          });
        },
        {
          "./ClientPrintJob": 2,
          "./ClientPrintJobGroup": 3,
          "./ClientPrinter": 4,
          "./ClientScanJob": 5,
          "./Enums": 6,
          "./JSPrintManager": 8,
          "./PrintFile": 10,
          "./PrintFileDOC": 11,
          "./PrintFileGroup": 12,
          "./PrintFilePDF": 13,
          "./PrintFileTIF": 14,
          "./PrintFileTXT": 15,
          "./PrintFileXLS": 16,
          "./SerialComm": 17,
          "./TcpComm": 18,
        },
      ],
      8: [
        function (t, e, r) {
          "use strict";
          var s =
              (this && this.__awaiter) ||
              function (t, a, s, u) {
                return new (s = s || Promise)(function (r, e) {
                  function n(t) {
                    try {
                      o(u.next(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function i(t) {
                    try {
                      o(u.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function o(t) {
                    var e;
                    t.done
                      ? r(t.value)
                      : ((e = t.value) instanceof s
                          ? e
                          : new s(function (t) {
                              t(e);
                            })
                        ).then(n, i);
                  }
                  o((u = u.apply(t, a || [])).next());
                });
              },
            u =
              (this && this.__generator) ||
              function (r, n) {
                var i,
                  o,
                  a,
                  s = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  t = { next: e(0), throw: e(1), return: e(2) };
                return (
                  "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                      return this;
                    }),
                  t
                );
                function e(e) {
                  return function (t) {
                    return (function (e) {
                      if (i)
                        throw new TypeError("Generator is already executing.");
                      for (; s; )
                        try {
                          if (
                            ((i = 1),
                            o &&
                              (a =
                                2 & e[0]
                                  ? o.return
                                  : e[0]
                                  ? o.throw || ((a = o.return) && a.call(o), 0)
                                  : o.next) &&
                              !(a = a.call(o, e[1])).done)
                          )
                            return a;
                          switch (
                            ((o = 0), (e = a ? [2 & e[0], a.value] : e)[0])
                          ) {
                            case 0:
                            case 1:
                              a = e;
                              break;
                            case 4:
                              return s.label++, { value: e[1], done: !1 };
                            case 5:
                              s.label++, (o = e[1]), (e = [0]);
                              continue;
                            case 7:
                              (e = s.ops.pop()), s.trys.pop();
                              continue;
                            default:
                              if (
                                !(a =
                                  0 < (a = s.trys).length && a[a.length - 1]) &&
                                (6 === e[0] || 2 === e[0])
                              ) {
                                s = 0;
                                continue;
                              }
                              if (
                                3 === e[0] &&
                                (!a || (e[1] > a[0] && e[1] < a[3]))
                              ) {
                                s.label = e[1];
                                break;
                              }
                              if (6 === e[0] && s.label < a[1]) {
                                (s.label = a[1]), (a = e);
                                break;
                              }
                              if (a && s.label < a[2]) {
                                (s.label = a[2]), s.ops.push(e);
                                break;
                              }
                              a[2] && s.ops.pop(), s.trys.pop();
                              continue;
                          }
                          e = n.call(r, s);
                        } catch (t) {
                          (e = [6, t]), (o = 0);
                        } finally {
                          i = a = 0;
                        }
                      if (5 & e[0]) throw e[1];
                      return { value: e[0] ? e[1] : void 0, done: !0 };
                    })([e, t]);
                  };
                }
              };
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.JSPrintManager = void 0);
          var l = t("./Enums"),
            i = t("./NDWS"),
            c = t("./Utils"),
            t =
              ((n.start = function (e, r, n) {
                return (
                  void 0 === e && (e = !0),
                  void 0 === r && (r = "localhost"),
                  void 0 === n && (n = c.WSPORT),
                  s(this, void 0, void 0, function () {
                    return u(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (
                            this.WS ||
                              (this.WS = new i.NDWS(
                                r,
                                n,
                                e,
                                this.auto_reconnect
                              )),
                            [4, this.WS.start()]
                          );
                        case 1:
                          return [2, t.sent()];
                      }
                    });
                  })
                );
              }),
              Object.defineProperty(n, "license_url", {
                get: function () {
                  return this._license;
                },
                set: function (t) {
                  (this._license = t),
                    this.WS &&
                      this.WS.status == l.WSStatus.Open &&
                      this.WS.send(JSON.stringify({ url: this._license }), {
                        type: "set_license",
                        on_update: function (t) {},
                        on_error: function (t) {},
                      });
                },
                enumerable: !1,
                configurable: !0,
              }),
              (n.getPrinters = function () {
                var t = this;
                return new Promise(function (e, r) {
                  t.WS.send("", {
                    type: "printers_list",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.getSessionCertificate = function () {
                var t = this;
                return new Promise(function (e, r) {
                  t.WS.send("", {
                    type: "session_certificate",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.getPrintersInfo = function (n, i, o) {
                var a = this;
                return (
                  void 0 === n && (n = l.PrintersInfoLevel.Basic),
                  void 0 === i && (i = ""),
                  new Promise(function (e, r) {
                    var t = { detail_level: n };
                    i && (t.printer_name = i),
                      o && (t.printer_icon = o),
                      a.WS.send(JSON.stringify(t), {
                        type: "printers_complete_list",
                        on_update: function (t) {
                          t && "result" in t ? e(t.result) : e(t);
                        },
                        on_error: function (t) {
                          return r(t);
                        },
                      });
                  })
                );
              }),
              Object.defineProperty(n, "websocket_status", {
                get: function () {
                  return this.WS ? this.WS.status : l.WSStatus.Closed;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (n.showAbout = function () {
                var t = this;
                return new Promise(function (e, r) {
                  t.WS.send("", {
                    type: "about",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.updateClient = function () {
                var t = this;
                return new Promise(function (e, r) {
                  t.WS.send("", {
                    type: "update",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.getSystemFonts = function () {
                var t = this;
                return new Promise(function (e, r) {
                  t.WS.send("", {
                    type: "fonts_list",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.getSerialPorts = function () {
                var t = this;
                return new Promise(function (e, r) {
                  t.WS.send("", {
                    type: "serial_ports_list",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.getScanners = function () {
                var t = this;
                return new Promise(function (e, r) {
                  t.WS.send("", {
                    type: "scanner_list",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.onPrinterCreated = function (e, r, t) {
                if (
                  (t = void 0 === t ? l.PrintersInfoLevel.Extended : t) ==
                  l.PrintersInfoLevel.Basic
                )
                  throw "Basic detail level information is not implemented yet";
                if (navigator.platform.toLowerCase().indexOf("win") < 0)
                  throw "This functionality is Windows only";
                return this.WS.send("", {
                  type: "on_printer_creation",
                  on_update: function (t) {
                    return e(t);
                  },
                  on_error: function (t) {
                    return r(t);
                  },
                });
              }),
              (n.onPrinterUpdated = function (e, r, t) {
                if (
                  (t = void 0 === t ? l.PrintersInfoLevel.Extended : t) ==
                  l.PrintersInfoLevel.Basic
                )
                  throw "Basic detail level information is not implemented yet";
                if (navigator.platform.toLowerCase().indexOf("win") < 0)
                  throw "This functionality is Windows only";
                return this.WS.send("", {
                  type: "on_printer_modification",
                  on_update: function (t) {
                    return e(t);
                  },
                  on_error: function (t) {
                    return r(t);
                  },
                });
              }),
              (n.onPrinterDeleted = function (e, r, t) {
                if (
                  (t = void 0 === t ? l.PrintersInfoLevel.Extended : t) ==
                  l.PrintersInfoLevel.Basic
                )
                  throw "Basic detail level information is not implemented yet";
                if (navigator.platform.toLowerCase().indexOf("win") < 0)
                  throw "This functionality is Windows only";
                return this.WS.send("", {
                  type: "on_printer_deletion",
                  on_update: function (t) {
                    return e(t);
                  },
                  on_error: function (t) {
                    return r(t);
                  },
                });
              }),
              (n.unsubscribePrinterEvent = function (t) {
                var n = this;
                return new Promise(function (e, r) {
                  return n.WS.send(JSON.stringify({ close: !0 }), {
                    id: t,
                    type: "on_printer_deletion",
                    on_update: function (t) {
                      return e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.stop = function () {
                this.WS.stop(), (this.WS = null);
              }),
              (n.getClientAppInfo = function (i, o, a) {
                return (
                  void 0 === i && (i = !0),
                  void 0 === o && (o = "localhost"),
                  void 0 === a && (a = c.WSPORT),
                  s(this, void 0, void 0, function () {
                    return u(this, function (t) {
                      return [
                        2,
                        new Promise(function (e, r) {
                          var n = new WebSocket(
                            (i ? "wss://" : "ws://") +
                              o +
                              ":" +
                              a +
                              "/?getClientAppInfo"
                          );
                          (n.onmessage = function (t) {
                            try {
                              if ("version" in JSON.parse(t.data))
                                return e(t.data), n.close(), void (n = null);
                            } catch (t) {
                              r("Cannot get Client App Info" + t);
                            }
                          }),
                            (n.onerror = function (t) {
                              return r("Cannot get Client App Info");
                            }),
                            (n.onclose = function (t) {
                              return r("Cannot get Client App Info");
                            });
                        }),
                      ];
                    });
                  })
                );
              }),
              (n.getMAC = function () {
                var t = this;
                return new Promise(function (e, r) {
                  t.WS.send("", {
                    type: "mac_address",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.getDefaultPaperName = function (t) {
                var n = this;
                return new Promise(function (e, r) {
                  n.WS.send(JSON.stringify({ printer_name: t }), {
                    type: "get_default_paper_name",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.getDefaultTrayName = function (t) {
                var n = this;
                return new Promise(function (e, r) {
                  n.WS.send(JSON.stringify({ printer_name: t }), {
                    type: "get_default_tray_name",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.getPaperInfo = function (t, n) {
                var i = this;
                return new Promise(function (e, r) {
                  i.WS.send(
                    JSON.stringify({ printer_name: t, paper_name: n }),
                    {
                      type: "get_paper_info",
                      on_update: function (t) {
                        t && "result" in t ? e(t.result) : e(t);
                      },
                      on_error: function (t) {
                        return r(t);
                      },
                    }
                  );
                });
              }),
              (n.getPapers = function (t) {
                var n = this;
                return new Promise(function (e, r) {
                  n.WS.send(JSON.stringify({ printer_name: t }), {
                    type: "get_papers",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.getTrays = function (t) {
                var n = this;
                return new Promise(function (e, r) {
                  n.WS.send(JSON.stringify({ printer_name: t }), {
                    type: "get_trays",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.getInstances = function (i, o, a) {
                return (
                  void 0 === i && (i = !0),
                  void 0 === o && (o = "localhost"),
                  void 0 === a && (a = c.WSPORT),
                  s(this, void 0, void 0, function () {
                    return u(this, function (t) {
                      return [
                        2,
                        new Promise(function (e, r) {
                          var n = new WebSocket(
                            (i ? "wss://" : "ws://") +
                              o +
                              ":" +
                              a +
                              "/?getInstances"
                          );
                          (n.onmessage = function (t) {
                            try {
                              return (
                                t && t.data && e(t.data),
                                n.close(),
                                void (n = null)
                              );
                            } catch (t) {
                              r("Cannot get Client App instances" + t);
                            }
                          }),
                            (n.onerror = function (t) {
                              return r("Cannot get Client App instances");
                            }),
                            (n.onclose = function (t) {
                              return r("Cannot get Client App instances");
                            });
                        }),
                      ];
                    });
                  })
                );
              }),
              (n.getUser = function () {
                var t = this;
                return new Promise(function (e, r) {
                  t.WS.send("", {
                    type: "get_user",
                    on_update: function (t) {
                      t && "result" in t ? e(t.result) : e(t);
                    },
                    on_error: function (t) {
                      return r(t);
                    },
                  });
                });
              }),
              (n.auto_reconnect = !1),
              (n._license = document.location.origin + "/jspm"),
              n);
          function n() {}
          r.JSPrintManager = t;
        },
        { "./Enums": 6, "./NDWS": 9, "./Utils": 19 },
      ],
      9: [
        function (t, e, r) {
          "use strict";
          var a =
              (this && this.__awaiter) ||
              function (t, a, s, u) {
                return new (s = s || Promise)(function (r, e) {
                  function n(t) {
                    try {
                      o(u.next(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function i(t) {
                    try {
                      o(u.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function o(t) {
                    var e;
                    t.done
                      ? r(t.value)
                      : ((e = t.value) instanceof s
                          ? e
                          : new s(function (t) {
                              t(e);
                            })
                        ).then(n, i);
                  }
                  o((u = u.apply(t, a || [])).next());
                });
              },
            f =
              (this && this.__generator) ||
              function (r, n) {
                var i,
                  o,
                  a,
                  s = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  t = { next: e(0), throw: e(1), return: e(2) };
                return (
                  "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                      return this;
                    }),
                  t
                );
                function e(e) {
                  return function (t) {
                    return (function (e) {
                      if (i)
                        throw new TypeError("Generator is already executing.");
                      for (; s; )
                        try {
                          if (
                            ((i = 1),
                            o &&
                              (a =
                                2 & e[0]
                                  ? o.return
                                  : e[0]
                                  ? o.throw || ((a = o.return) && a.call(o), 0)
                                  : o.next) &&
                              !(a = a.call(o, e[1])).done)
                          )
                            return a;
                          switch (
                            ((o = 0), (e = a ? [2 & e[0], a.value] : e)[0])
                          ) {
                            case 0:
                            case 1:
                              a = e;
                              break;
                            case 4:
                              return s.label++, { value: e[1], done: !1 };
                            case 5:
                              s.label++, (o = e[1]), (e = [0]);
                              continue;
                            case 7:
                              (e = s.ops.pop()), s.trys.pop();
                              continue;
                            default:
                              if (
                                !(a =
                                  0 < (a = s.trys).length && a[a.length - 1]) &&
                                (6 === e[0] || 2 === e[0])
                              ) {
                                s = 0;
                                continue;
                              }
                              if (
                                3 === e[0] &&
                                (!a || (e[1] > a[0] && e[1] < a[3]))
                              ) {
                                s.label = e[1];
                                break;
                              }
                              if (6 === e[0] && s.label < a[1]) {
                                (s.label = a[1]), (a = e);
                                break;
                              }
                              if (a && s.label < a[2]) {
                                (s.label = a[2]), s.ops.push(e);
                                break;
                              }
                              a[2] && s.ops.pop(), s.trys.pop();
                              continue;
                          }
                          e = n.call(r, s);
                        } catch (t) {
                          (e = [6, t]), (o = 0);
                        } finally {
                          i = a = 0;
                        }
                      if (5 & e[0]) throw e[1];
                      return { value: e[0] ? e[1] : void 0, done: !0 };
                    })([e, t]);
                  };
                }
              };
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.NDWS = void 0);
          var s = t("./Enums"),
            u = t("./JSPrintManager"),
            l = t("./Utils"),
            t =
              (Object.defineProperty(n.prototype, "address", {
                get: function () {
                  return this._addr;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "port", {
                get: function () {
                  return this._port;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "isSecure", {
                get: function () {
                  return this._secure;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "status", {
                get: function () {
                  return this._status;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (n.prototype._onOpen = function (t, e) {
                (this._status = s.WSStatus.WaitingForUserResponse),
                  this._pingPong(),
                  e.onStatusChanged(),
                  e.onOpen(t);
              }),
              (n.prototype._onMessage = function (c) {
                return a(this, void 0, void 0, function () {
                  var e, r, n, i, o, a, s, u, l;
                  return f(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this._processing_message.lock()];
                      case 1:
                        (e = t.sent()), (t.label = 2);
                      case 2:
                        if (
                          (t.trys.push([2, 6, 7, 8]), "string" != typeof c.data)
                        )
                          return [3, 3];
                        switch (
                          ((r = JSON.parse(c.data)),
                          (u = this._job_list[r.id]) ||
                            this.onError("Job " + r.id + " doesn't exist"),
                          (n = "last" in r && r.last),
                          (s = "type" in r ? r.type : "message"),
                          (i = "data" in r ? r.data : {}),
                          s)
                        ) {
                          case "message":
                            u.on_update &&
                              (u.on_update, 1) &&
                              u.on_update(i, u.first_update, n);
                            break;
                          case "error":
                            (o = "critical" in r && r.critical),
                              u.on_error &&
                                (u.on_error, 1) &&
                                u.on_error(i, u.first_update, o);
                            break;
                          default:
                            u.on_update &&
                              (u.on_update, 1) &&
                              u.on_update(i, u.first_update, n);
                        }
                        return [3, 5];
                      case 3:
                        return [
                          4,
                          (a = c.data).slice(a.size - 8, a.size).arrayBuffer(),
                        ];
                      case 4:
                        (l = t.sent()),
                          (s = new TextDecoder("utf-8").decode(l)),
                          (l = a.slice(0, a.size - 8)),
                          (u = this._job_list[s]) ||
                            this.onError("Job " + s + " doesn't exist"),
                          u.on_update &&
                            (u.on_update, 1) &&
                            u.on_update(l, u.first_update, !1),
                          (t.label = 5);
                      case 5:
                        return (u.first_update = !1), [3, 8];
                      case 6:
                        return (
                          (l = t.sent()),
                          this.onError(
                            "Malformed message. Error: " +
                              l +
                              " Message: " +
                              c.data
                          ),
                          [3, 8]
                        );
                      case 7:
                        return e(), [7];
                      case 8:
                        return [2];
                    }
                  });
                });
              }),
              (n.prototype._onError = function (e) {
                try {
                  var t = JSON.parse(e),
                    r = this._job_list[t.id];
                  r ? r.on_error(e, !0, !0) : this.onError(e);
                } catch (t) {
                  this.onError(e);
                }
              }),
              (n.prototype._pingPong = function () {
                var e = this;
                setInterval(function (t) {
                  e._status == s.WSStatus.Open &&
                    e.send("", {
                      type: "ping",
                      on_update: function (t) {},
                      on_error: function (t) {},
                    });
                }, 3e4);
              }),
              (n.prototype._onClose = function (t, e) {
                var r = this;
                403 == t.code
                  ? (this._status = s.WSStatus.Blocked)
                  : ((this._status = s.WSStatus.Closed),
                    this.autoReconnect &&
                      setTimeout(function (t) {
                        r.start();
                      }, 2e3)),
                  e.onClose(t),
                  e.onStatusChanged();
              }),
              (n.prototype._genID = function () {
                return Math.floor(4294967296 * (1 + Math.random()))
                  .toString(16)
                  .substring(1);
              }),
              (n.prototype._send = function (t, e) {
                var r = "";
                if ("id" in e) r = e.id;
                else {
                  do {
                    r = this._genID();
                  } while (this._job_list[r]);
                  this._job_list[r] = {
                    id: r,
                    first_update: !0,
                    on_update: e.on_update,
                    on_error: e.on_error,
                  };
                }
                var n,
                  i = "";
                return (
                  (i =
                    t instanceof Blob
                      ? ((n = new Uint8Array(
                          ("id" + r).split("").map(function (t) {
                            return t.charCodeAt(0);
                          })
                        )),
                        new Blob([t, n]))
                      : "string" == typeof t
                      ? ((i = { id: r, data: t }),
                        "type" in e && (i.type = e.type),
                        JSON.stringify(i))
                      : (delete this._job_list[r], t)),
                  this._ws.send(i),
                  r
                );
              }),
              (n.prototype.start = function () {
                var o = this;
                return new Promise(function (n, i) {
                  try {
                    (o._ws = new WebSocket(
                      (o._secure ? "wss://" : "ws://") + o._addr + ":" + o._port
                    )),
                      (o._ws.onclose = function (t) {
                        return o._onClose(t, o);
                      }),
                      (o._ws.onerror = function (t) {
                        return o.onError(t);
                      }),
                      (o._ws.onopen = function (t) {
                        return o._onOpen(t, o);
                      }),
                      (o._ws.onmessage = function (t) {
                        try {
                          var e,
                            r = JSON.parse(t.data);
                          "connection" in r &&
                            ("CONNECTED" == r.connection
                              ? ((o._status = s.WSStatus.Open),
                                o.onStatusChanged(),
                                o.send(
                                  JSON.stringify({
                                    url: u.JSPrintManager.license_url,
                                  }),
                                  {
                                    type: "set_license",
                                    on_update: function (t) {
                                      console.info(
                                        "License:",
                                        "result" in t ? t.result : t
                                      );
                                    },
                                    on_error: function (t) {
                                      console.warn(
                                        "License:",
                                        "result" in t ? t.result : t
                                      );
                                    },
                                  }
                                ),
                                (e = r.version.split("."))[0] + "." + e[1] !=
                                  l.VERSION &&
                                  console.warn(
                                    "Lib JS version and desktop version differs Desktop(" +
                                      r.version +
                                      ") JS (" +
                                      l.VERSION +
                                      ")"
                                  ),
                                (o._ws.onmessage = function (e) {
                                  return a(o, void 0, void 0, function () {
                                    return f(this, function (t) {
                                      switch (t.label) {
                                        case 0:
                                          return [4, this._onMessage(e)];
                                        case 1:
                                          return t.sent(), [2];
                                      }
                                    });
                                  });
                                }),
                                (o._ws.onerror = o._onError),
                                n())
                              : i(
                                  "WS Connection not established. Reason: " +
                                    r.connection
                                ));
                        } catch (t) {
                          o.onError(
                            "Malformed message. Check if JS version and Desktop version are the same. Description: " +
                              t
                          );
                        }
                      });
                  } catch (t) {
                    o.autoReconnect
                      ? setTimeout(function () {
                          o.start().then(n).catch(i);
                        }, 2e3)
                      : o.onError(t);
                  }
                });
              }),
              (n.prototype.send = function (t, e) {
                return (
                  this._status == s.WSStatus.Closed
                    ? e.on_error("The WebSocket connection is closed", !0, !0)
                    : this._status == s.WSStatus.Blocked
                    ? e.on_error(
                        "The site is blocked and the connection was closed",
                        !0,
                        !0
                      )
                    : this._ws.readyState != this._ws.OPEN &&
                      e.on_error("The WebSocket isn't ready yet", !0, !0),
                  this._send(t, e)
                );
              }),
              (n.prototype.stop = function () {
                this._ws && (this._ws.close(), (this._ws = null));
              }),
              n);
          function n(t, e, r, n) {
            void 0 === t && (t = "localhost"),
              void 0 === e && (e = l.WSPORT),
              void 0 === r && (r = !0),
              void 0 === n && (n = !1),
              (this._job_list = []),
              (this._processing_message = new l.Mutex()),
              (this.autoReconnect = !1),
              (this.onClose = function (t) {}),
              (this.onOpen = function (t) {}),
              (this.onStatusChanged = function () {}),
              (this.onError = function (t) {
                throw t;
              }),
              (this._addr = t),
              (this._port = e),
              (this._secure = r),
              (this.autoReconnect = n);
          }
          r.NDWS = t;
        },
        { "./Enums": 6, "./JSPrintManager": 8, "./Utils": 19 },
      ],
      10: [
        function (t, e, r) {
          "use strict";
          var n,
            i =
              (this && this.__extends) ||
              ((n = function (t, e) {
                return (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(t, e);
              }),
              function (t, e) {
                function r() {
                  this.constructor = t;
                }
                n(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r()));
              }),
            o =
              (this && this.__awaiter) ||
              function (t, a, s, u) {
                return new (s = s || Promise)(function (r, e) {
                  function n(t) {
                    try {
                      o(u.next(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function i(t) {
                    try {
                      o(u.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function o(t) {
                    var e;
                    t.done
                      ? r(t.value)
                      : ((e = t.value) instanceof s
                          ? e
                          : new s(function (t) {
                              t(e);
                            })
                        ).then(n, i);
                  }
                  o((u = u.apply(t, a || [])).next());
                });
              },
            a =
              (this && this.__generator) ||
              function (r, n) {
                var i,
                  o,
                  a,
                  s = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  t = { next: e(0), throw: e(1), return: e(2) };
                return (
                  "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                      return this;
                    }),
                  t
                );
                function e(e) {
                  return function (t) {
                    return (function (e) {
                      if (i)
                        throw new TypeError("Generator is already executing.");
                      for (; s; )
                        try {
                          if (
                            ((i = 1),
                            o &&
                              (a =
                                2 & e[0]
                                  ? o.return
                                  : e[0]
                                  ? o.throw || ((a = o.return) && a.call(o), 0)
                                  : o.next) &&
                              !(a = a.call(o, e[1])).done)
                          )
                            return a;
                          switch (
                            ((o = 0), (e = a ? [2 & e[0], a.value] : e)[0])
                          ) {
                            case 0:
                            case 1:
                              a = e;
                              break;
                            case 4:
                              return s.label++, { value: e[1], done: !1 };
                            case 5:
                              s.label++, (o = e[1]), (e = [0]);
                              continue;
                            case 7:
                              (e = s.ops.pop()), s.trys.pop();
                              continue;
                            default:
                              if (
                                !(a =
                                  0 < (a = s.trys).length && a[a.length - 1]) &&
                                (6 === e[0] || 2 === e[0])
                              ) {
                                s = 0;
                                continue;
                              }
                              if (
                                3 === e[0] &&
                                (!a || (e[1] > a[0] && e[1] < a[3]))
                              ) {
                                s.label = e[1];
                                break;
                              }
                              if (6 === e[0] && s.label < a[1]) {
                                (s.label = a[1]), (a = e);
                                break;
                              }
                              if (a && s.label < a[2]) {
                                (s.label = a[2]), s.ops.push(e);
                                break;
                              }
                              a[2] && s.ops.pop(), s.trys.pop();
                              continue;
                          }
                          e = n.call(r, s);
                        } catch (t) {
                          (e = [6, t]), (o = 0);
                        } finally {
                          i = a = 0;
                        }
                      if (5 & e[0]) throw e[1];
                      return { value: e[0] ? e[1] : void 0, done: !0 };
                    })([e, t]);
                  };
                }
              };
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.PrintFileDuplexable = r.PrintFile = void 0);
          var l = t("./Enums"),
            t =
              (Object.defineProperty(s.prototype, "copies", {
                get: function () {
                  return this._copies;
                },
                set: function (t) {
                  if (t < 1) throw "Copies must be greater than or equal to 1.";
                  this._copies = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (s.prototype.escapeInvalidFileNameChars = function () {
                -1 < this.fileName.indexOf("\\") &&
                  (this.fileName = this.fileName.replace(
                    "\\",
                    "BACKSLASHCHAR"
                  ));
              }),
              (s.prototype.bool2str = function (t, e, r) {
                return (
                  void 0 === e && (e = "1"),
                  void 0 === r && (r = "0"),
                  t ? e : r
                );
              }),
              (s.prototype.getProperties = function () {
                return {
                  file_type: l.PrintFileType.Generic,
                  file_name: this.fileName,
                  file_content_type: this.fileContentType,
                  copies: this._copies,
                };
              }),
              (s.prototype.isValidRange = function (t) {
                if (null == (t = t.replace(/\s/g, "")) || "" == t) return !0;
                var e = /([0-9])+((-[0-9]+)|(,[0-9]+))*/.exec(t);
                return null != e && e[0].length == t.length;
              }),
              (s.prototype._getBLOBContent = function (s, u) {
                return new Promise(function (e, r) {
                  switch (s) {
                    case l.FileSourceType.BLOB:
                      e(u);
                      break;
                    case l.FileSourceType.Base64:
                      try {
                        for (
                          var t = atob(u), n = new Uint8Array(t.length), i = 0;
                          i < t.length;
                          i++
                        )
                          n[i] = t.charCodeAt(i);
                        e(new Blob([n]));
                      } catch (t) {
                        r("Error trying to decode the base64 data.\n" + t);
                      }
                      break;
                    case l.FileSourceType.Text:
                      try {
                        e(new Blob([u], { type: "text/plain;charset=utf-8" }));
                      } catch (t) {
                        r("Error trying to decode the text data.\n" + t);
                      }
                      break;
                    case l.FileSourceType.URL:
                      var o = new XMLHttpRequest();
                      o.open("GET", u, !0),
                        (o.responseType = "blob"),
                        (o.onload = function (t) {
                          e(o.response);
                        }),
                        o.send(null);
                      break;
                    case l.FileSourceType.ExternalURL:
                      try {
                        var a = { url: u };
                        e(
                          new Blob([JSON.stringify(a)], {
                            type: "text/plain;charset=utf-8",
                          })
                        );
                      } catch (t) {
                        r("Error trying to decode the text data.\n" + t);
                      }
                      break;
                    default:
                      r("FileSourceType not specified");
                  }
                });
              }),
              (s.prototype.getContent = function () {
                return o(this, void 0, void 0, function () {
                  return a(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [
                          4,
                          this._getBLOBContent(
                            this.fileContentType,
                            this.fileContent
                          ),
                        ];
                      case 1:
                        return [2, t.sent()];
                    }
                  });
                });
              }),
              s);
          function s(t, e, r, n) {
            if (
              ((this.fileName = ""),
              (this._copies = 1),
              (this.fileContent = t),
              (this.fileContentType = e),
              !r)
            )
              throw "You must specify a FileName including the extension.";
            (this.fileName = r),
              n && (this.copies = n),
              this.escapeInvalidFileNameChars();
          }
          r.PrintFile = t;
          var u,
            t =
              (i(c, (u = t)),
              (c.prototype.getContent = function () {
                return o(this, void 0, void 0, function () {
                  return a(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if (!this.isValidRange(this.printRange))
                          throw "Invalid Print Range";
                        return [4, u.prototype.getContent.call(this)];
                      case 1:
                        return [2, t.sent()];
                    }
                  });
                });
              }),
              c);
          function c() {
            var t = (null !== u && u.apply(this, arguments)) || this;
            return (
              (t.manualDuplexMessage = ""),
              (t.manualDuplex = !1),
              (t.printInReverseOrder = !1),
              (t.printRange = ""),
              t
            );
          }
          r.PrintFileDuplexable = t;
        },
        { "./Enums": 6 },
      ],
      11: [
        function (t, e, r) {
          "use strict";
          var n,
            i =
              (this && this.__extends) ||
              ((n = function (t, e) {
                return (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(t, e);
              }),
              function (t, e) {
                function r() {
                  this.constructor = t;
                }
                n(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r()));
              });
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.PrintFileDOC = void 0);
          var o,
            a = t("./Enums"),
            t = t("./PrintFile"),
            i =
              ((o = t.PrintFileDuplexable),
              i(s, o),
              (s.prototype.getProperties = function () {
                return {
                  file_type: a.PrintFileType.WDOC,
                  file_name: this.fileName,
                  file_content_type: this.fileContentType,
                  copies: this.copies,
                  manual_duplex: this.manualDuplex,
                  reverse: this.printInReverseOrder,
                  duplex_message: this.manualDuplexMessage,
                  range: this.printRange,
                  password: this.encryptedPassword,
                };
              }),
              s);
          function s(t, e, r, n) {
            n = o.call(this, t, e, r, n) || this;
            return (n.encryptedPassword = ""), n;
          }
          r.PrintFileDOC = i;
        },
        { "./Enums": 6, "./PrintFile": 10 },
      ],
      12: [
        function (t, e, r) {
          "use strict";
          var n,
            i =
              (this && this.__extends) ||
              ((n = function (t, e) {
                return (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(t, e);
              }),
              function (t, e) {
                function r() {
                  this.constructor = t;
                }
                n(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r()));
              }),
            a =
              (this && this.__awaiter) ||
              function (t, a, s, u) {
                return new (s = s || Promise)(function (r, e) {
                  function n(t) {
                    try {
                      o(u.next(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function i(t) {
                    try {
                      o(u.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function o(t) {
                    var e;
                    t.done
                      ? r(t.value)
                      : ((e = t.value) instanceof s
                          ? e
                          : new s(function (t) {
                              t(e);
                            })
                        ).then(n, i);
                  }
                  o((u = u.apply(t, a || [])).next());
                });
              },
            s =
              (this && this.__generator) ||
              function (r, n) {
                var i,
                  o,
                  a,
                  s = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  t = { next: e(0), throw: e(1), return: e(2) };
                return (
                  "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                      return this;
                    }),
                  t
                );
                function e(e) {
                  return function (t) {
                    return (function (e) {
                      if (i)
                        throw new TypeError("Generator is already executing.");
                      for (; s; )
                        try {
                          if (
                            ((i = 1),
                            o &&
                              (a =
                                2 & e[0]
                                  ? o.return
                                  : e[0]
                                  ? o.throw || ((a = o.return) && a.call(o), 0)
                                  : o.next) &&
                              !(a = a.call(o, e[1])).done)
                          )
                            return a;
                          switch (
                            ((o = 0), (e = a ? [2 & e[0], a.value] : e)[0])
                          ) {
                            case 0:
                            case 1:
                              a = e;
                              break;
                            case 4:
                              return s.label++, { value: e[1], done: !1 };
                            case 5:
                              s.label++, (o = e[1]), (e = [0]);
                              continue;
                            case 7:
                              (e = s.ops.pop()), s.trys.pop();
                              continue;
                            default:
                              if (
                                !(a =
                                  0 < (a = s.trys).length && a[a.length - 1]) &&
                                (6 === e[0] || 2 === e[0])
                              ) {
                                s = 0;
                                continue;
                              }
                              if (
                                3 === e[0] &&
                                (!a || (e[1] > a[0] && e[1] < a[3]))
                              ) {
                                s.label = e[1];
                                break;
                              }
                              if (6 === e[0] && s.label < a[1]) {
                                (s.label = a[1]), (a = e);
                                break;
                              }
                              if (a && s.label < a[2]) {
                                (s.label = a[2]), s.ops.push(e);
                                break;
                              }
                              a[2] && s.ops.pop(), s.trys.pop();
                              continue;
                          }
                          e = n.call(r, s);
                        } catch (t) {
                          (e = [6, t]), (o = 0);
                        } finally {
                          i = a = 0;
                        }
                      if (5 & e[0]) throw e[1];
                      return { value: e[0] ? e[1] : void 0, done: !0 };
                    })([e, t]);
                  };
                }
              };
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.PrintFileGroup = void 0);
          var o,
            u = t("./Enums"),
            l = t("./PrintFile"),
            c = t("jszip"),
            i =
              ((o = l.PrintFileDuplexable),
              i(f, o),
              (f.prototype.getProperties = function () {
                return {
                  file_type: u.PrintFileType.Group,
                  file_name: this.fileName,
                  file_content_type: this.fileContentType,
                  range: this.printRange,
                  copies: this.copies,
                  manual_duplex: this.manualDuplex,
                  reverse: this.printInReverseOrder,
                  duplex_message: this.manualDuplexMessage,
                };
              }),
              (f.prototype._getBLOBContent = function () {
                return a(this, void 0, void 0, function () {
                  var e = this;
                  return s(this, function (t) {
                    return [
                      2,
                      new Promise(function (n, i) {
                        return a(e, void 0, void 0, function () {
                          var o,
                            e,
                            r = this;
                          return s(this, function (t) {
                            try {
                              (o = new c()),
                                (e = this.fileContent.map(function (i) {
                                  return a(r, void 0, void 0, function () {
                                    var e, r, n;
                                    return s(this, function (t) {
                                      switch (t.label) {
                                        case 0:
                                          return (
                                            (r = (e = o).file),
                                            (n = [i.fileName]),
                                            [4, i.getContent()]
                                          );
                                        case 1:
                                          return (
                                            r.apply(e, n.concat([t.sent()])),
                                            [2]
                                          );
                                      }
                                    });
                                  });
                                })),
                                Promise.all(e)
                                  .then(function (t) {
                                    return a(r, void 0, void 0, function () {
                                      var e;
                                      return s(this, function (t) {
                                        switch (t.label) {
                                          case 0:
                                            return (
                                              o.file(
                                                "metadata.json",
                                                new Blob([
                                                  JSON.stringify(
                                                    this.fileContent.map(
                                                      function (t) {
                                                        return t.getProperties();
                                                      }
                                                    )
                                                  ),
                                                ])
                                              ),
                                              (e = n),
                                              [
                                                4,
                                                o.generateAsync({
                                                  type: "blob",
                                                }),
                                              ]
                                            );
                                          case 1:
                                            return (
                                              e.apply(void 0, [t.sent()]), [2]
                                            );
                                        }
                                      });
                                    });
                                  })
                                  .catch(function (t) {
                                    return i(t);
                                  });
                            } catch (t) {
                              i(t);
                            }
                            return [2];
                          });
                        });
                      }),
                    ];
                  });
                });
              }),
              f);
          function f(t, e, r) {
            return o.call(this, t, u.FileSourceType.BLOB, e, r) || this;
          }
          r.PrintFileGroup = i;
        },
        { "./Enums": 6, "./PrintFile": 10, jszip: 23 },
      ],
      13: [
        function (t, e, r) {
          "use strict";
          var n,
            i =
              (this && this.__extends) ||
              ((n = function (t, e) {
                return (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(t, e);
              }),
              function (t, e) {
                function r() {
                  this.constructor = t;
                }
                n(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r()));
              });
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.PrintFilePDF = void 0);
          var o,
            a = t("./Enums"),
            t = t("./PrintFile"),
            i =
              ((o = t.PrintFileDuplexable),
              i(s, o),
              (s.prototype.getProperties = function () {
                return {
                  file_type: a.PrintFileType.WPDF,
                  file_name: this.fileName,
                  file_content_type: this.fileContentType,
                  copies: this.copies,
                  manual_duplex: this.manualDuplex,
                  grayscale: this.printAsGrayscale,
                  annotations: this.printAnnotations,
                  reverse: this.printInReverseOrder,
                  auto_rotate: this.printAutoRotate,
                  auto_center: this.printAutoCenter,
                  duplex_message: this.manualDuplexMessage,
                  range: this.printRange,
                  password: this.encryptedPassword,
                  rotation: this.printRotation,
                  sizing: this.pageSizing,
                };
              }),
              s);
          function s(t, e, r, n) {
            n = o.call(this, t, e, r, n) || this;
            return (
              (n.pageSizing = a.Sizing.None),
              (n.printAutoRotate = !1),
              (n.printAutoCenter = !1),
              (n.encryptedPassword = ""),
              (n.printAsGrayscale = !1),
              (n.printAnnotations = !1),
              (n.printRotation = a.PrintRotation.None),
              n
            );
          }
          r.PrintFilePDF = i;
        },
        { "./Enums": 6, "./PrintFile": 10 },
      ],
      14: [
        function (t, e, r) {
          "use strict";
          var n,
            i =
              (this && this.__extends) ||
              ((n = function (t, e) {
                return (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(t, e);
              }),
              function (t, e) {
                function r() {
                  this.constructor = t;
                }
                n(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r()));
              });
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.PrintFileTIF = void 0);
          var o,
            a = t("./Enums"),
            t = t("./PrintFile"),
            i =
              ((o = t.PrintFileDuplexable),
              i(s, o),
              (s.prototype.isValidRange = function (t) {
                if (null == t || "" == t) return !0;
                var e = /([0-9])+((-[0-9]+)|(,[0-9]+))*/.exec(t);
                return null != e && e[0].length == t.length;
              }),
              (s.prototype.getProperties = function () {
                return {
                  file_type: a.PrintFileType.WTIF,
                  file_name: this.fileName,
                  file_content_type: this.fileContentType,
                  copies: this.copies,
                  manual_duplex: this.manualDuplex,
                  grayscale: this.printAsGrayscale,
                  reverse: this.printInReverseOrder,
                  auto_rotate: this.printAutoRotate,
                  auto_center: this.printAutoCenter,
                  duplex_message: this.manualDuplexMessage,
                  range: this.printRange,
                  rotation: this.printRotation,
                  sizing: this.pageSizing,
                };
              }),
              s);
          function s(t, e, r, n) {
            n = o.call(this, t, e, r, n) || this;
            return (
              (n.printAutoRotate = !1),
              (n.printAutoCenter = !1),
              (n.printAsGrayscale = !1),
              (n.printRotation = a.PrintRotation.None),
              (n.pageSizing = a.Sizing.None),
              n
            );
          }
          r.PrintFileTIF = i;
        },
        { "./Enums": 6, "./PrintFile": 10 },
      ],
      15: [
        function (t, e, r) {
          "use strict";
          var n,
            i =
              (this && this.__extends) ||
              ((n = function (t, e) {
                return (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(t, e);
              }),
              function (t, e) {
                function r() {
                  this.constructor = t;
                }
                n(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r()));
              });
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.PrintFileTXT = void 0);
          var o,
            a = t("./Enums"),
            t = t("./PrintFile"),
            i =
              ((o = t.PrintFileDuplexable),
              i(s, o),
              (s.prototype.getProperties = function () {
                return {
                  file_name: this.fileName,
                  file_type: a.PrintFileType.WTXT,
                  file_content_type: this.fileContentType,
                  alignment: this.textAligment,
                  bold: this.fontBold,
                  color: this.fontColor,
                  copies: this.copies,
                  font_name: this.fontName,
                  font_size: this.fontSize,
                  italic: this.fontItalic,
                  margin_bottom: this.marginBottom,
                  margin_left: this.marginLeft,
                  margin_right: this.marginRight,
                  margin_top: this.marginTop,
                  orientation: this.printOrientation,
                  range: this.printRange,
                  duplex_message: this.manualDuplexMessage,
                  manual_duplex: this.manualDuplex,
                  reverse: this.printInReverseOrder,
                  strikethrough: this.fontStrikethrough,
                  underline: this.fontUnderline,
                };
              }),
              s);
          function s(t, e, r, n) {
            r = o.call(this, t, n || a.FileSourceType.Text, e, r) || this;
            return (
              (r.textContent = ""),
              (r.textAligment = a.TextAlignment.Left),
              (r.fontName = ""),
              (r.fontBold = !1),
              (r.fontItalic = !1),
              (r.fontUnderline = !1),
              (r.fontStrikethrough = !1),
              (r.fontSize = 10),
              (r.fontColor = "#000000"),
              (r.printOrientation = a.PrintOrientation.Portrait),
              (r.marginLeft = 0.5),
              (r.marginRight = 0.5),
              (r.marginTop = 0.5),
              (r.marginBottom = 0.5),
              r
            );
          }
          r.PrintFileTXT = i;
        },
        { "./Enums": 6, "./PrintFile": 10 },
      ],
      16: [
        function (t, e, r) {
          "use strict";
          var n,
            i =
              (this && this.__extends) ||
              ((n = function (t, e) {
                return (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(t, e);
              }),
              function (t, e) {
                function r() {
                  this.constructor = t;
                }
                n(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r()));
              }),
            o =
              (this && this.__awaiter) ||
              function (t, a, s, u) {
                return new (s = s || Promise)(function (r, e) {
                  function n(t) {
                    try {
                      o(u.next(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function i(t) {
                    try {
                      o(u.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  }
                  function o(t) {
                    var e;
                    t.done
                      ? r(t.value)
                      : ((e = t.value) instanceof s
                          ? e
                          : new s(function (t) {
                              t(e);
                            })
                        ).then(n, i);
                  }
                  o((u = u.apply(t, a || [])).next());
                });
              },
            a =
              (this && this.__generator) ||
              function (r, n) {
                var i,
                  o,
                  a,
                  s = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  },
                  t = { next: e(0), throw: e(1), return: e(2) };
                return (
                  "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                      return this;
                    }),
                  t
                );
                function e(e) {
                  return function (t) {
                    return (function (e) {
                      if (i)
                        throw new TypeError("Generator is already executing.");
                      for (; s; )
                        try {
                          if (
                            ((i = 1),
                            o &&
                              (a =
                                2 & e[0]
                                  ? o.return
                                  : e[0]
                                  ? o.throw || ((a = o.return) && a.call(o), 0)
                                  : o.next) &&
                              !(a = a.call(o, e[1])).done)
                          )
                            return a;
                          switch (
                            ((o = 0), (e = a ? [2 & e[0], a.value] : e)[0])
                          ) {
                            case 0:
                            case 1:
                              a = e;
                              break;
                            case 4:
                              return s.label++, { value: e[1], done: !1 };
                            case 5:
                              s.label++, (o = e[1]), (e = [0]);
                              continue;
                            case 7:
                              (e = s.ops.pop()), s.trys.pop();
                              continue;
                            default:
                              if (
                                !(a =
                                  0 < (a = s.trys).length && a[a.length - 1]) &&
                                (6 === e[0] || 2 === e[0])
                              ) {
                                s = 0;
                                continue;
                              }
                              if (
                                3 === e[0] &&
                                (!a || (e[1] > a[0] && e[1] < a[3]))
                              ) {
                                s.label = e[1];
                                break;
                              }
                              if (6 === e[0] && s.label < a[1]) {
                                (s.label = a[1]), (a = e);
                                break;
                              }
                              if (a && s.label < a[2]) {
                                (s.label = a[2]), s.ops.push(e);
                                break;
                              }
                              a[2] && s.ops.pop(), s.trys.pop();
                              continue;
                          }
                          e = n.call(r, s);
                        } catch (t) {
                          (e = [6, t]), (o = 0);
                        } finally {
                          i = a = 0;
                        }
                      if (5 & e[0]) throw e[1];
                      return { value: e[0] ? e[1] : void 0, done: !0 };
                    })([e, t]);
                  };
                }
              };
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.PrintFileXLS = void 0);
          var s,
            u = t("./Enums"),
            t = t("./PrintFile"),
            i =
              ((s = t.PrintFile),
              i(l, s),
              (l.prototype.getProperties = function () {
                return {
                  file_type: u.PrintFileType.WXLS,
                  file_name: this.fileName,
                  file_content_type: this.fileContentType,
                  copies: this.copies,
                  from_page: this.pageFrom,
                  to_page: this.pageTo,
                  password: this.encryptedPassword,
                };
              }),
              (l.prototype.getContent = function () {
                return o(this, void 0, void 0, function () {
                  return a(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if (this.pageFrom > this.pageTo)
                          throw "Invalid Print Range";
                        return [4, s.prototype.getContent.call(this)];
                      case 1:
                        return [2, t.sent()];
                    }
                  });
                });
              }),
              l);
          function l(t, e, r, n) {
            n = s.call(this, t, e, r, n) || this;
            return (
              (n.encryptedPassword = ""), (n.pageFrom = 0), (n.pageTo = 0), n
            );
          }
          r.PrintFileXLS = i;
        },
        { "./Enums": 6, "./PrintFile": 10 },
      ],
      17: [
        function (t, e, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.SerialComm = void 0);
          var a = t("./Enums"),
            s = t("./JSPrintManager"),
            t =
              (Object.defineProperty(n.prototype, "portName", {
                get: function () {
                  return this._port;
                },
                set: function (t) {
                  this._port = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "isOpen", {
                get: function () {
                  return this._isOpen;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "baudRate", {
                get: function () {
                  return this._baud_rate;
                },
                set: function (t) {
                  this._baud_rate = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "parity", {
                get: function () {
                  return this._parity;
                },
                set: function (t) {
                  this._parity = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "stopBits", {
                get: function () {
                  return this._stop_bits;
                },
                set: function (t) {
                  this._stop_bits = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "dataBits", {
                get: function () {
                  return this._data_bits;
                },
                set: function (t) {
                  this._data_bits = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "flowControl", {
                get: function () {
                  return this._flow_control;
                },
                set: function (t) {
                  this._flow_control = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "dsr", {
                get: function () {
                  var n = this;
                  if (!this._isOpen) throw "Connection closed";
                  return (
                    s.JSPrintManager.WS.send(
                      JSON.stringify({ dsr: !0 }),
                      this.propertiesJSON()
                    ),
                    new Promise(function (e, t) {
                      setTimeout(function () {
                        return t("Timeout");
                      }, n.SERIAL_TIMEOUT);
                      function r() {
                        "dsr" in n._updated_values || setTimeout(r, 100);
                        var t = n._updated_values.dsr;
                        delete n._updated_values.dsr, e(t);
                      }
                      r();
                    })
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "cts", {
                get: function () {
                  var n = this;
                  if (!this._isOpen) throw "Connection closed";
                  return (
                    s.JSPrintManager.WS.send(
                      JSON.stringify({ dsr: !0 }),
                      this.propertiesJSON()
                    ),
                    new Promise(function (e, t) {
                      setTimeout(function () {
                        return t("Timeout");
                      }, n.SERIAL_TIMEOUT);
                      function r() {
                        "cts" in n._updated_values || setTimeout(r, 100);
                        var t = n._updated_values.cts;
                        delete n._updated_values.cts, e(t);
                      }
                      r();
                    })
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "rts", {
                set: function (t) {
                  if (!this._isOpen) throw "Connection closed";
                  if (
                    this._flow_control in
                    [
                      a.Serial.Handshake.RequestToSend,
                      a.Serial.Handshake.RequestToSendXOnXOff,
                    ]
                  )
                    throw "Invalid operation. Flow control manages RTS";
                  s.JSPrintManager.WS.send(
                    JSON.stringify({ rts: t }),
                    this.propertiesJSON()
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "dtr", {
                set: function (t) {
                  if (!this._isOpen) throw "Connection closed";
                  s.JSPrintManager.WS.send(
                    JSON.stringify({ dtr: t }),
                    this.propertiesJSON()
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (n.prototype.onError = function (t, e) {}),
              (n.prototype.onDataReceived = function (t) {}),
              (n.prototype._onDataReceived = function (t) {
                "dsr" in t
                  ? (this._updated_values.dsr = t.dsr)
                  : "cts" in t
                  ? (this._updated_values.cts = t.cts)
                  : this.onDataReceived(t.data);
              }),
              (n.prototype.onClose = function (t) {}),
              (n.prototype.open = function () {
                var o = this;
                return new Promise(function (n, i) {
                  if (o._isOpen) throw "Connection is already open";
                  var t = o.propertiesJSON();
                  (t.on_update = function (t, e, r) {
                    e
                      ? (t.result &&
                          "Open" == t.result &&
                          0 == o._isOpen &&
                          (o._isOpen = !0),
                        n(t))
                      : r
                      ? (o.onClose(t), (o._id = ""), (o._isOpen = !1))
                      : o._onDataReceived(t);
                  }),
                    (t.on_error = function (t, e, r) {
                      e ? i(t) : o.onError(t, r);
                    }),
                    (o._id = s.JSPrintManager.WS.send(
                      JSON.stringify({
                        port: o._port,
                        baud_rate: o._baud_rate,
                        data_bits: o._data_bits,
                        flow_control: o._flow_control,
                        parity: o._parity,
                        stop_bits: o._stop_bits,
                      }),
                      t
                    ));
                });
              }),
              (n.prototype.send = function (t) {
                var e = this.propertiesJSON();
                s.JSPrintManager.WS.send(JSON.stringify({ data: t }), e);
              }),
              (n.prototype.close = function () {
                s.JSPrintManager.WS.send(
                  JSON.stringify({ close: !0 }),
                  this.propertiesJSON()
                );
              }),
              (n.prototype.propertiesJSON = function () {
                if (!this.portName)
                  throw "The specified serial port name is null or empty.";
                var t = { type: "serial" };
                return this._id && (t.id = this._id), t;
              }),
              n);
          function n(t, e, r, n, i, o) {
            if (
              ((this._id = ""),
              (this._isOpen = !1),
              (this._port = ""),
              (this._baud_rate = 9600),
              (this._parity = a.Serial.Parity.None),
              (this._stop_bits = a.Serial.StopBits.One),
              (this._data_bits = a.Serial.DataBits.Eight),
              (this._flow_control = a.Serial.Handshake.XOnXOff),
              (this._updated_values = {}),
              (this.SERIAL_TIMEOUT = 5e3),
              !t)
            )
              throw "The specified serial port name is null or empty.";
            (this._port = t),
              (this._baud_rate = e),
              (this._parity = r),
              (this._stop_bits = n),
              (this._data_bits = i),
              (this._flow_control = o);
          }
          r.SerialComm = t;
        },
        { "./Enums": 6, "./JSPrintManager": 8 },
      ],
      18: [
        function (t, e, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.TcpComm = void 0);
          var a = t("./JSPrintManager"),
            t =
              (Object.defineProperty(n.prototype, "timeout", {
                get: function () {
                  return this._timeout;
                },
                set: function (t) {
                  this._timeout = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, "receiveBufferSize", {
                get: function () {
                  return this._receiveBufferSize;
                },
                set: function (t) {
                  this._receiveBufferSize = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (n.prototype.onError = function (t, e) {}),
              (n.prototype.onDataReceived = function (t) {}),
              (n.prototype._onDataReceived = function (t) {
                this.onDataReceived(t.data);
              }),
              (n.prototype.onClose = function (t) {}),
              (n.prototype.connect = function () {
                var o = this;
                return new Promise(function (n, i) {
                  var t = o.propertiesJSON();
                  (t.on_update = function (t, e, r) {
                    e
                      ? n(t)
                      : r
                      ? (o.onClose(t), (o._id = ""))
                      : o._onDataReceived(t);
                  }),
                    (t.on_error = function (t, e, r) {
                      e ? i(t) : o.onError(t, r);
                    }),
                    (o._id = a.JSPrintManager.WS.send(
                      JSON.stringify({
                        port: o._port,
                        address: o._address,
                        timeout: o._timeout,
                        receive_buffer_size: o._receiveBufferSize,
                      }),
                      t
                    ));
                });
              }),
              (n.prototype.send = function (t) {
                var e = this.propertiesJSON();
                a.JSPrintManager.WS.send(JSON.stringify({ data: t }), e);
              }),
              (n.prototype.close = function () {
                a.JSPrintManager.WS.send(
                  JSON.stringify({ close: !0 }),
                  this.propertiesJSON()
                );
              }),
              (n.prototype.propertiesJSON = function () {
                if (!this._address)
                  throw "The specified address is null or empty.";
                var t = { type: "tcp" };
                return this._id && (t.id = this._id), t;
              }),
              n);
          function n(t, e) {
            if (
              ((this._id = ""),
              (this._address = ""),
              (this._port = 0),
              (this._timeout = 1e3),
              (this._receiveBufferSize = 8192),
              !t)
            )
              throw "The specified address is null or empty.";
            (this._address = t), (this._port = e);
          }
          r.TcpComm = t;
        },
        { "./JSPrintManager": 8 },
      ],
      19: [
        function (t, e, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.Utils = r.Mutex = r.WSPORT = r.VERSION = void 0),
            (r.VERSION = "5.0"),
            (r.WSPORT = 25443);
          var n =
            ((i.prototype.lock = function () {
              var e = function (t) {};
              return (
                (this.mutex = this.mutex.then(function () {
                  return new Promise(e);
                })),
                new Promise(function (t) {
                  e = t;
                })
              );
            }),
            i);
          function i() {
            this.mutex = Promise.resolve();
          }
          r.Mutex = n;
          (o._intToByteArray = function (t) {
            return new Uint8Array([
              255 & t,
              (t >> 8) & 255,
              (t >> 16) & 255,
              (t >> 24) & 255,
            ]);
          }),
            (o._str2UTF8Array = function (t) {
              for (var e = [], r = 0; r < t.length; r++) {
                var n = t.charCodeAt(r);
                0 == r &&
                239 == n &&
                r + 1 < t.length &&
                187 == t.charCodeAt(r + 1) &&
                r + 2 < t.length &&
                191 == t.charCodeAt(r + 2)
                  ? (e.push(239), e.push(187), e.push(191), (r += 2))
                  : n < 128
                  ? e.push(n)
                  : n < 2048
                  ? e.push(192 | (n >> 6), 128 | (63 & n))
                  : n < 55296 || 57344 <= n
                  ? e.push(
                      224 | (n >> 12),
                      128 | ((n >> 6) & 63),
                      128 | (63 & n)
                    )
                  : (r++,
                    (n =
                      65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(r)))),
                    e.push(
                      240 | (n >> 18),
                      128 | ((n >> 12) & 63),
                      128 | ((n >> 6) & 63),
                      128 | (63 & n)
                    ));
              }
              return e;
            }),
            (n = o);
          function o() {}
          r.Utils = n;
        },
        {},
      ],
      20: [
        function (t, e, r) {
          "use strict";
          (r.byteLength = function (t) {
            var e = c(t),
              t = e[0],
              e = e[1];
            return (3 * (t + e)) / 4 - e;
          }),
            (r.toByteArray = function (t) {
              var e,
                r,
                n = c(t),
                i = n[0],
                n = n[1],
                o = new l(
                  (function (t, e) {
                    return (3 * (t + e)) / 4 - e;
                  })(i, n)
                ),
                a = 0,
                s = 0 < n ? i - 4 : i;
              for (r = 0; r < s; r += 4)
                (e =
                  (u[t.charCodeAt(r)] << 18) |
                  (u[t.charCodeAt(r + 1)] << 12) |
                  (u[t.charCodeAt(r + 2)] << 6) |
                  u[t.charCodeAt(r + 3)]),
                  (o[a++] = (e >> 16) & 255),
                  (o[a++] = (e >> 8) & 255),
                  (o[a++] = 255 & e);
              2 === n &&
                ((e =
                  (u[t.charCodeAt(r)] << 2) | (u[t.charCodeAt(r + 1)] >> 4)),
                (o[a++] = 255 & e));
              1 === n &&
                ((e =
                  (u[t.charCodeAt(r)] << 10) |
                  (u[t.charCodeAt(r + 1)] << 4) |
                  (u[t.charCodeAt(r + 2)] >> 2)),
                (o[a++] = (e >> 8) & 255),
                (o[a++] = 255 & e));
              return o;
            }),
            (r.fromByteArray = function (t) {
              for (
                var e, r = t.length, n = r % 3, i = [], o = 0, a = r - n;
                o < a;
                o += 16383
              )
                i.push(
                  (function (t, e, r) {
                    for (var n, i = [], o = e; o < r; o += 3)
                      (n =
                        ((t[o] << 16) & 16711680) +
                        ((t[o + 1] << 8) & 65280) +
                        (255 & t[o + 2])),
                        i.push(
                          (function (t) {
                            return (
                              s[(t >> 18) & 63] +
                              s[(t >> 12) & 63] +
                              s[(t >> 6) & 63] +
                              s[63 & t]
                            );
                          })(n)
                        );
                    return i.join("");
                  })(t, o, a < o + 16383 ? a : o + 16383)
                );
              1 == n
                ? ((e = t[r - 1]), i.push(s[e >> 2] + s[(e << 4) & 63] + "=="))
                : 2 == n &&
                  ((e = (t[r - 2] << 8) + t[r - 1]),
                  i.push(
                    s[e >> 10] + s[(e >> 4) & 63] + s[(e << 2) & 63] + "="
                  ));
              return i.join("");
            });
          for (
            var s = [],
              u = [],
              l = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              n =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              i = 0,
              o = n.length;
            i < o;
            ++i
          )
            (s[i] = n[i]), (u[n.charCodeAt(i)] = i);
          function c(t) {
            var e = t.length;
            if (0 < e % 4)
              throw new Error("Invalid string. Length must be a multiple of 4");
            t = t.indexOf("=");
            return [(t = -1 === t ? e : t), t === e ? 0 : 4 - (t % 4)];
          }
          (u["-".charCodeAt(0)] = 62), (u["_".charCodeAt(0)] = 63);
        },
        {},
      ],
      21: [
        function (T, t, A) {
          !function (t) {
            !function () {
              "use strict";
              var s = T("base64-js"),
                o = T("ieee754");
              (A.Buffer = f),
                (A.SlowBuffer = function (t) {
                  +t != t && (t = 0);
                  return f.alloc(+t);
                }),
                (A.INSPECT_MAX_BYTES = 50);
              var e = 2147483647;
              function i(t) {
                if (e < t)
                  throw new RangeError(
                    'The value "' + t + '" is invalid for option "size"'
                  );
                t = new Uint8Array(t);
                return (t.__proto__ = f.prototype), t;
              }
              function f(t, e, r) {
                if ("number" != typeof t) return n(t, e, r);
                if ("string" == typeof e)
                  throw new TypeError(
                    'The "string" argument must be of type string. Received type number'
                  );
                return u(t);
              }
              function n(t, e, r) {
                if ("string" == typeof t)
                  return (function (t, e) {
                    ("string" == typeof e && "" !== e) || (e = "utf8");
                    if (!f.isEncoding(e))
                      throw new TypeError("Unknown encoding: " + e);
                    var r = 0 | h(t, e),
                      n = i(r),
                      e = n.write(t, e);
                    e !== r && (n = n.slice(0, e));
                    return n;
                  })(t, e);
                if (ArrayBuffer.isView(t)) return l(t);
                if (null == t)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof t
                  );
                if (x(t, ArrayBuffer) || (t && x(t.buffer, ArrayBuffer)))
                  return (function (t, e, r) {
                    if (e < 0 || t.byteLength < e)
                      throw new RangeError(
                        '"offset" is outside of buffer bounds'
                      );
                    if (t.byteLength < e + (r || 0))
                      throw new RangeError(
                        '"length" is outside of buffer bounds'
                      );
                    r =
                      void 0 === e && void 0 === r
                        ? new Uint8Array(t)
                        : void 0 === r
                        ? new Uint8Array(t, e)
                        : new Uint8Array(t, e, r);
                    return (r.__proto__ = f.prototype), r;
                  })(t, e, r);
                if ("number" == typeof t)
                  throw new TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return f.from(n, e, r);
                n = (function (t) {
                  if (f.isBuffer(t)) {
                    var e = 0 | c(t.length),
                      r = i(e);
                    return 0 === r.length ? r : (t.copy(r, 0, 0, e), r);
                  }
                  if (void 0 !== t.length)
                    return "number" != typeof t.length || B(t.length)
                      ? i(0)
                      : l(t);
                  if ("Buffer" === t.type && Array.isArray(t.data))
                    return l(t.data);
                })(t);
                if (n) return n;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof t[Symbol.toPrimitive]
                )
                  return f.from(t[Symbol.toPrimitive]("string"), e, r);
                throw new TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof t
                );
              }
              function a(t) {
                if ("number" != typeof t)
                  throw new TypeError('"size" argument must be of type number');
                if (t < 0)
                  throw new RangeError(
                    'The value "' + t + '" is invalid for option "size"'
                  );
              }
              function u(t) {
                return a(t), i(t < 0 ? 0 : 0 | c(t));
              }
              function l(t) {
                for (
                  var e = t.length < 0 ? 0 : 0 | c(t.length), r = i(e), n = 0;
                  n < e;
                  n += 1
                )
                  r[n] = 255 & t[n];
                return r;
              }
              function c(t) {
                if (e <= t)
                  throw new RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x" +
                      e.toString(16) +
                      " bytes"
                  );
                return 0 | t;
              }
              function h(t, e) {
                if (f.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || x(t, ArrayBuffer))
                  return t.byteLength;
                if ("string" != typeof t)
                  throw new TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof t
                  );
                var r = t.length,
                  n = 2 < arguments.length && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var i = !1; ; )
                  switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return r;
                    case "utf8":
                    case "utf-8":
                      return E(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * r;
                    case "hex":
                      return r >>> 1;
                    case "base64":
                      return P(t).length;
                    default:
                      if (i) return n ? -1 : E(t).length;
                      (e = ("" + e).toLowerCase()), (i = !0);
                  }
              }
              function r(t, e, r) {
                var n,
                  i,
                  o,
                  a = !1;
                if ((e = void 0 === e || e < 0 ? 0 : e) > this.length)
                  return "";
                if (
                  (r = void 0 === r || r > this.length ? this.length : r) <= 0
                )
                  return "";
                if ((r >>>= 0) <= (e >>>= 0)) return "";
                for (t = t || "utf8"; ; )
                  switch (t) {
                    case "hex":
                      return (function (t, e, r) {
                        var n = t.length;
                        (!e || e < 0) && (e = 0);
                        (!r || r < 0 || n < r) && (r = n);
                        for (var i = "", o = e; o < r; ++o)
                          i += (function (t) {
                            return t < 16
                              ? "0" + t.toString(16)
                              : t.toString(16);
                          })(t[o]);
                        return i;
                      })(this, e, r);
                    case "utf8":
                    case "utf-8":
                      return g(this, e, r);
                    case "ascii":
                      return (function (t, e, r) {
                        var n = "";
                        r = Math.min(t.length, r);
                        for (var i = e; i < r; ++i)
                          n += String.fromCharCode(127 & t[i]);
                        return n;
                      })(this, e, r);
                    case "latin1":
                    case "binary":
                      return (function (t, e, r) {
                        var n = "";
                        r = Math.min(t.length, r);
                        for (var i = e; i < r; ++i)
                          n += String.fromCharCode(t[i]);
                        return n;
                      })(this, e, r);
                    case "base64":
                      return (
                        (n = this),
                        (o = r),
                        0 === (i = e) && o === n.length
                          ? s.fromByteArray(n)
                          : s.fromByteArray(n.slice(i, o))
                      );
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (t, e, r) {
                        for (
                          var n = t.slice(e, r), i = "", o = 0;
                          o < n.length;
                          o += 2
                        )
                          i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                        return i;
                      })(this, e, r);
                    default:
                      if (a) throw new TypeError("Unknown encoding: " + t);
                      (t = (t + "").toLowerCase()), (a = !0);
                  }
              }
              function d(t, e, r) {
                var n = t[e];
                (t[e] = t[r]), (t[r] = n);
              }
              function p(t, e, r, n, i) {
                if (0 === t.length) return -1;
                if (
                  ("string" == typeof r
                    ? ((n = r), (r = 0))
                    : 2147483647 < r
                    ? (r = 2147483647)
                    : r < -2147483648 && (r = -2147483648),
                  (r =
                    (r = B((r = +r)) ? (i ? 0 : t.length - 1) : r) < 0
                      ? t.length + r
                      : r) >= t.length)
                ) {
                  if (i) return -1;
                  r = t.length - 1;
                } else if (r < 0) {
                  if (!i) return -1;
                  r = 0;
                }
                if (("string" == typeof e && (e = f.from(e, n)), f.isBuffer(e)))
                  return 0 === e.length ? -1 : _(t, e, r, n, i);
                if ("number" == typeof e)
                  return (
                    (e &= 255),
                    "function" == typeof Uint8Array.prototype.indexOf
                      ? (i
                          ? Uint8Array.prototype.indexOf
                          : Uint8Array.prototype.lastIndexOf
                        ).call(t, e, r)
                      : _(t, [e], r, n, i)
                  );
                throw new TypeError("val must be string, number or Buffer");
              }
              function _(t, e, r, n, i) {
                var o = 1,
                  a = t.length,
                  s = e.length;
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (t.length < 2 || e.length < 2) return -1;
                  (a /= o = 2), (s /= 2), (r /= 2);
                }
                function u(t, e) {
                  return 1 === o ? t[e] : t.readUInt16BE(e * o);
                }
                if (i)
                  for (var l = -1, c = r; c < a; c++)
                    if (u(t, c) === u(e, -1 === l ? 0 : c - l)) {
                      if (c - (l = -1 === l ? c : l) + 1 === s) return l * o;
                    } else -1 !== l && (c -= c - l), (l = -1);
                else
                  for (c = r = a < r + s ? a - s : r; 0 <= c; c--) {
                    for (var f = !0, h = 0; h < s; h++)
                      if (u(t, c + h) !== u(e, h)) {
                        f = !1;
                        break;
                      }
                    if (f) return c;
                  }
                return -1;
              }
              function m(t, e, r, n) {
                return k(
                  (function (t) {
                    for (var e = [], r = 0; r < t.length; ++r)
                      e.push(255 & t.charCodeAt(r));
                    return e;
                  })(e),
                  t,
                  r,
                  n
                );
              }
              function y(t, e, r, n) {
                return k(
                  (function (t, e) {
                    for (
                      var r, n, i = [], o = 0;
                      o < t.length && !((e -= 2) < 0);
                      ++o
                    )
                      (n = t.charCodeAt(o)),
                        (r = n >> 8),
                        (n = n % 256),
                        i.push(n),
                        i.push(r);
                    return i;
                  })(e, t.length - r),
                  t,
                  r,
                  n
                );
              }
              function g(t, e, r) {
                r = Math.min(t.length, r);
                for (var n = [], i = e; i < r; ) {
                  var o,
                    a,
                    s,
                    u,
                    l = t[i],
                    c = null,
                    f = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1;
                  if (i + f <= r)
                    switch (f) {
                      case 1:
                        l < 128 && (c = l);
                        break;
                      case 2:
                        128 == (192 & (o = t[i + 1])) &&
                          127 < (u = ((31 & l) << 6) | (63 & o)) &&
                          (c = u);
                        break;
                      case 3:
                        (o = t[i + 1]),
                          (a = t[i + 2]),
                          128 == (192 & o) &&
                            128 == (192 & a) &&
                            2047 <
                              (u =
                                ((15 & l) << 12) |
                                ((63 & o) << 6) |
                                (63 & a)) &&
                            (u < 55296 || 57343 < u) &&
                            (c = u);
                        break;
                      case 4:
                        (o = t[i + 1]),
                          (a = t[i + 2]),
                          (s = t[i + 3]),
                          128 == (192 & o) &&
                            128 == (192 & a) &&
                            128 == (192 & s) &&
                            65535 <
                              (u =
                                ((15 & l) << 18) |
                                ((63 & o) << 12) |
                                ((63 & a) << 6) |
                                (63 & s)) &&
                            u < 1114112 &&
                            (c = u);
                    }
                  null === c
                    ? ((c = 65533), (f = 1))
                    : 65535 < c &&
                      ((c -= 65536),
                      n.push(((c >>> 10) & 1023) | 55296),
                      (c = 56320 | (1023 & c))),
                    n.push(c),
                    (i += f);
                }
                return (function (t) {
                  var e = t.length;
                  if (e <= b) return String.fromCharCode.apply(String, t);
                  var r = "",
                    n = 0;
                  for (; n < e; )
                    r += String.fromCharCode.apply(
                      String,
                      t.slice(n, (n += b))
                    );
                  return r;
                })(n);
              }
              (A.kMaxLength = e),
                (f.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === t.foo()
                    );
                  } catch (t) {
                    return !1;
                  }
                })()) ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(f.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (f.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(f.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (f.isBuffer(this)) return this.byteOffset;
                  },
                }),
                "undefined" != typeof Symbol &&
                  null != Symbol.species &&
                  f[Symbol.species] === f &&
                  Object.defineProperty(f, Symbol.species, {
                    value: null,
                    configurable: !0,
                    enumerable: !1,
                    writable: !1,
                  }),
                (f.poolSize = 8192),
                (f.from = n),
                (f.prototype.__proto__ = Uint8Array.prototype),
                (f.__proto__ = Uint8Array),
                (f.alloc = function (t, e, r) {
                  return (
                    (e = e),
                    (r = r),
                    a((t = t)),
                    !(t <= 0) && void 0 !== e
                      ? "string" == typeof r
                        ? i(t).fill(e, r)
                        : i(t).fill(e)
                      : i(t)
                  );
                }),
                (f.allocUnsafe = u),
                (f.allocUnsafeSlow = u),
                (f.isBuffer = function (t) {
                  return null != t && !0 === t._isBuffer && t !== f.prototype;
                }),
                (f.compare = function (t, e) {
                  if (
                    (x(t, Uint8Array) &&
                      (t = f.from(t, t.offset, t.byteLength)),
                    x(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
                    !f.isBuffer(t) || !f.isBuffer(e))
                  )
                    throw new TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (t === e) return 0;
                  for (
                    var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
                    i < o;
                    ++i
                  )
                    if (t[i] !== e[i]) {
                      (r = t[i]), (n = e[i]);
                      break;
                    }
                  return r < n ? -1 : n < r ? 1 : 0;
                }),
                (f.isEncoding = function (t) {
                  switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (f.concat = function (t, e) {
                  if (!Array.isArray(t))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === t.length) return f.alloc(0);
                  if (void 0 === e)
                    for (i = e = 0; i < t.length; ++i) e += t[i].length;
                  for (
                    var r = f.allocUnsafe(e), n = 0, i = 0;
                    i < t.length;
                    ++i
                  ) {
                    var o = t[i];
                    if ((x(o, Uint8Array) && (o = f.from(o)), !f.isBuffer(o)))
                      throw new TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    o.copy(r, n), (n += o.length);
                  }
                  return r;
                }),
                (f.byteLength = h),
                (f.prototype._isBuffer = !0),
                (f.prototype.swap16 = function () {
                  var t = this.length;
                  if (t % 2 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var e = 0; e < t; e += 2) d(this, e, e + 1);
                  return this;
                }),
                (f.prototype.swap32 = function () {
                  var t = this.length;
                  if (t % 4 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var e = 0; e < t; e += 4)
                    d(this, e, e + 3), d(this, e + 1, e + 2);
                  return this;
                }),
                (f.prototype.swap64 = function () {
                  var t = this.length;
                  if (t % 8 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var e = 0; e < t; e += 8)
                    d(this, e, e + 7),
                      d(this, e + 1, e + 6),
                      d(this, e + 2, e + 5),
                      d(this, e + 3, e + 4);
                  return this;
                }),
                (f.prototype.toLocaleString = f.prototype.toString =
                  function () {
                    var t = this.length;
                    return 0 === t
                      ? ""
                      : 0 === arguments.length
                      ? g(this, 0, t)
                      : r.apply(this, arguments);
                  }),
                (f.prototype.equals = function (t) {
                  if (!f.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                  return this === t || 0 === f.compare(this, t);
                }),
                (f.prototype.inspect = function () {
                  var t = "",
                    e = A.INSPECT_MAX_BYTES,
                    t = this.toString("hex", 0, e)
                      .replace(/(.{2})/g, "$1 ")
                      .trim();
                  return (
                    this.length > e && (t += " ... "), "<Buffer " + t + ">"
                  );
                }),
                (f.prototype.compare = function (t, e, r, n, i) {
                  if (
                    (x(t, Uint8Array) &&
                      (t = f.from(t, t.offset, t.byteLength)),
                    !f.isBuffer(t))
                  )
                    throw new TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof t
                    );
                  if (
                    (void 0 === r && (r = t ? t.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === i && (i = this.length),
                    (e = void 0 === e ? 0 : e) < 0 ||
                      r > t.length ||
                      n < 0 ||
                      i > this.length)
                  )
                    throw new RangeError("out of range index");
                  if (i <= n && r <= e) return 0;
                  if (i <= n) return -1;
                  if (r <= e) return 1;
                  if (this === t) return 0;
                  for (
                    var o = (i >>>= 0) - (n >>>= 0),
                      a = (r >>>= 0) - (e >>>= 0),
                      s = Math.min(o, a),
                      u = this.slice(n, i),
                      l = t.slice(e, r),
                      c = 0;
                    c < s;
                    ++c
                  )
                    if (u[c] !== l[c]) {
                      (o = u[c]), (a = l[c]);
                      break;
                    }
                  return o < a ? -1 : a < o ? 1 : 0;
                }),
                (f.prototype.includes = function (t, e, r) {
                  return -1 !== this.indexOf(t, e, r);
                }),
                (f.prototype.indexOf = function (t, e, r) {
                  return p(this, t, e, r, !0);
                }),
                (f.prototype.lastIndexOf = function (t, e, r) {
                  return p(this, t, e, r, !1);
                }),
                (f.prototype.write = function (t, e, r, n) {
                  if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
                  else if (void 0 === r && "string" == typeof e)
                    (n = e), (r = this.length), (e = 0);
                  else {
                    if (!isFinite(e))
                      throw new Error(
                        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                      );
                    (e >>>= 0),
                      isFinite(r)
                        ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                        : ((n = r), (r = void 0));
                  }
                  var i = this.length - e;
                  if (
                    ((void 0 === r || i < r) && (r = i),
                    (0 < t.length && (r < 0 || e < 0)) || e > this.length)
                  )
                    throw new RangeError(
                      "Attempt to write outside buffer bounds"
                    );
                  n = n || "utf8";
                  for (var o, a, s, u = !1; ; )
                    switch (n) {
                      case "hex":
                        return (function (t, e, r, n) {
                          r = Number(r) || 0;
                          var i = t.length - r;
                          (!n || i < (n = Number(n))) && (n = i),
                            (i = e.length) / 2 < n && (n = i / 2);
                          for (var o = 0; o < n; ++o) {
                            var a = parseInt(e.substr(2 * o, 2), 16);
                            if (B(a)) return o;
                            t[r + o] = a;
                          }
                          return o;
                        })(this, t, e, r);
                      case "utf8":
                      case "utf-8":
                        return (
                          (a = e),
                          (s = r),
                          k(E(t, (o = this).length - a), o, a, s)
                        );
                      case "ascii":
                        return m(this, t, e, r);
                      case "latin1":
                      case "binary":
                        return m(this, t, e, r);
                      case "base64":
                        return (o = this), (a = e), (s = r), k(P(t), o, a, s);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return y(this, t, e, r);
                      default:
                        if (u) throw new TypeError("Unknown encoding: " + n);
                        (n = ("" + n).toLowerCase()), (u = !0);
                    }
                }),
                (f.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                });
              var b = 4096;
              function w(t, e, r) {
                if (t % 1 != 0 || t < 0)
                  throw new RangeError("offset is not uint");
                if (r < t + e)
                  throw new RangeError("Trying to access beyond buffer length");
              }
              function v(t, e, r, n, i, o) {
                if (!f.isBuffer(t))
                  throw new TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (i < e || e < o)
                  throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length)
                  throw new RangeError("Index out of range");
              }
              function S(t, e, r, n) {
                if (r + n > t.length)
                  throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range");
              }
              function C(t, e, r, n, i) {
                return (
                  (e = +e),
                  (r >>>= 0),
                  i || S(t, 0, r, 4),
                  o.write(t, e, r, n, 23, 4),
                  r + 4
                );
              }
              function I(t, e, r, n, i) {
                return (
                  (e = +e),
                  (r >>>= 0),
                  i || S(t, 0, r, 8),
                  o.write(t, e, r, n, 52, 8),
                  r + 8
                );
              }
              (f.prototype.slice = function (t, e) {
                var r = this.length;
                (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r),
                  (e = void 0 === e ? r : ~~e) < 0
                    ? (e += r) < 0 && (e = 0)
                    : r < e && (e = r),
                  e < t && (e = t);
                e = this.subarray(t, e);
                return (e.__proto__ = f.prototype), e;
              }),
                (f.prototype.readUIntLE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
                  for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                    n += this[t + o] * i;
                  return n;
                }),
                (f.prototype.readUIntBE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
                  for (var n = this[t + --e], i = 1; 0 < e && (i *= 256); )
                    n += this[t + --e] * i;
                  return n;
                }),
                (f.prototype.readUInt8 = function (t, e) {
                  return (t >>>= 0), e || w(t, 1, this.length), this[t];
                }),
                (f.prototype.readUInt16LE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || w(t, 2, this.length),
                    this[t] | (this[t + 1] << 8)
                  );
                }),
                (f.prototype.readUInt16BE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || w(t, 2, this.length),
                    (this[t] << 8) | this[t + 1]
                  );
                }),
                (f.prototype.readUInt32LE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || w(t, 4, this.length),
                    (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                      16777216 * this[t + 3]
                  );
                }),
                (f.prototype.readUInt32BE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || w(t, 4, this.length),
                    16777216 * this[t] +
                      ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                  );
                }),
                (f.prototype.readIntLE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
                  for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                    n += this[t + o] * i;
                  return (i *= 128) <= n && (n -= Math.pow(2, 8 * e)), n;
                }),
                (f.prototype.readIntBE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
                  for (
                    var n = e, i = 1, o = this[t + --n];
                    0 < n && (i *= 256);

                  )
                    o += this[t + --n] * i;
                  return (i *= 128) <= o && (o -= Math.pow(2, 8 * e)), o;
                }),
                (f.prototype.readInt8 = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || w(t, 1, this.length),
                    128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                  );
                }),
                (f.prototype.readInt16LE = function (t, e) {
                  (t >>>= 0), e || w(t, 2, this.length);
                  t = this[t] | (this[t + 1] << 8);
                  return 32768 & t ? 4294901760 | t : t;
                }),
                (f.prototype.readInt16BE = function (t, e) {
                  (t >>>= 0), e || w(t, 2, this.length);
                  t = this[t + 1] | (this[t] << 8);
                  return 32768 & t ? 4294901760 | t : t;
                }),
                (f.prototype.readInt32LE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || w(t, 4, this.length),
                    this[t] |
                      (this[t + 1] << 8) |
                      (this[t + 2] << 16) |
                      (this[t + 3] << 24)
                  );
                }),
                (f.prototype.readInt32BE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || w(t, 4, this.length),
                    (this[t] << 24) |
                      (this[t + 1] << 16) |
                      (this[t + 2] << 8) |
                      this[t + 3]
                  );
                }),
                (f.prototype.readFloatLE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || w(t, 4, this.length),
                    o.read(this, t, !0, 23, 4)
                  );
                }),
                (f.prototype.readFloatBE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || w(t, 4, this.length),
                    o.read(this, t, !1, 23, 4)
                  );
                }),
                (f.prototype.readDoubleLE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || w(t, 8, this.length),
                    o.read(this, t, !0, 52, 8)
                  );
                }),
                (f.prototype.readDoubleBE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || w(t, 8, this.length),
                    o.read(this, t, !1, 52, 8)
                  );
                }),
                (f.prototype.writeUIntLE = function (t, e, r, n) {
                  (t = +t),
                    (e >>>= 0),
                    (r >>>= 0),
                    n || v(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                  var i = 1,
                    o = 0;
                  for (this[e] = 255 & t; ++o < r && (i *= 256); )
                    this[e + o] = (t / i) & 255;
                  return e + r;
                }),
                (f.prototype.writeUIntBE = function (t, e, r, n) {
                  (t = +t),
                    (e >>>= 0),
                    (r >>>= 0),
                    n || v(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                  var i = r - 1,
                    o = 1;
                  for (this[e + i] = 255 & t; 0 <= --i && (o *= 256); )
                    this[e + i] = (t / o) & 255;
                  return e + r;
                }),
                (f.prototype.writeUInt8 = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || v(this, t, e, 1, 255, 0),
                    (this[e] = 255 & t),
                    e + 1
                  );
                }),
                (f.prototype.writeUInt16LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || v(this, t, e, 2, 65535, 0),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    e + 2
                  );
                }),
                (f.prototype.writeUInt16BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || v(this, t, e, 2, 65535, 0),
                    (this[e] = t >>> 8),
                    (this[e + 1] = 255 & t),
                    e + 2
                  );
                }),
                (f.prototype.writeUInt32LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || v(this, t, e, 4, 4294967295, 0),
                    (this[e + 3] = t >>> 24),
                    (this[e + 2] = t >>> 16),
                    (this[e + 1] = t >>> 8),
                    (this[e] = 255 & t),
                    e + 4
                  );
                }),
                (f.prototype.writeUInt32BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || v(this, t, e, 4, 4294967295, 0),
                    (this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t),
                    e + 4
                  );
                }),
                (f.prototype.writeIntLE = function (t, e, r, n) {
                  (t = +t),
                    (e >>>= 0),
                    n || v(this, t, e, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
                  var i = 0,
                    o = 1,
                    a = 0;
                  for (this[e] = 255 & t; ++i < r && (o *= 256); )
                    t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1),
                      (this[e + i] = (((t / o) >> 0) - a) & 255);
                  return e + r;
                }),
                (f.prototype.writeIntBE = function (t, e, r, n) {
                  (t = +t),
                    (e >>>= 0),
                    n || v(this, t, e, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
                  var i = r - 1,
                    o = 1,
                    a = 0;
                  for (this[e + i] = 255 & t; 0 <= --i && (o *= 256); )
                    t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
                      (this[e + i] = (((t / o) >> 0) - a) & 255);
                  return e + r;
                }),
                (f.prototype.writeInt8 = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || v(this, t, e, 1, 127, -128),
                    (this[e] = 255 & (t = t < 0 ? 255 + t + 1 : t)),
                    e + 1
                  );
                }),
                (f.prototype.writeInt16LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || v(this, t, e, 2, 32767, -32768),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    e + 2
                  );
                }),
                (f.prototype.writeInt16BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || v(this, t, e, 2, 32767, -32768),
                    (this[e] = t >>> 8),
                    (this[e + 1] = 255 & t),
                    e + 2
                  );
                }),
                (f.prototype.writeInt32LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || v(this, t, e, 4, 2147483647, -2147483648),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    (this[e + 2] = t >>> 16),
                    (this[e + 3] = t >>> 24),
                    e + 4
                  );
                }),
                (f.prototype.writeInt32BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || v(this, t, e, 4, 2147483647, -2147483648),
                    (this[e] = (t = t < 0 ? 4294967295 + t + 1 : t) >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t),
                    e + 4
                  );
                }),
                (f.prototype.writeFloatLE = function (t, e, r) {
                  return C(this, t, e, !0, r);
                }),
                (f.prototype.writeFloatBE = function (t, e, r) {
                  return C(this, t, e, !1, r);
                }),
                (f.prototype.writeDoubleLE = function (t, e, r) {
                  return I(this, t, e, !0, r);
                }),
                (f.prototype.writeDoubleBE = function (t, e, r) {
                  return I(this, t, e, !1, r);
                }),
                (f.prototype.copy = function (t, e, r, n) {
                  if (!f.isBuffer(t))
                    throw new TypeError("argument should be a Buffer");
                  if (
                    ((r = r || 0),
                    n || 0 === n || (n = this.length),
                    e >= t.length && (e = t.length),
                    (n = 0 < n && n < r ? r : n) === r)
                  )
                    return 0;
                  if (0 === t.length || 0 === this.length) return 0;
                  if ((e = e || 0) < 0)
                    throw new RangeError("targetStart out of bounds");
                  if (r < 0 || r >= this.length)
                    throw new RangeError("Index out of range");
                  if (n < 0) throw new RangeError("sourceEnd out of bounds");
                  n > this.length && (n = this.length);
                  var i = (n = t.length - e < n - r ? t.length - e + r : n) - r;
                  if (
                    this === t &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(e, r, n);
                  else if (this === t && r < e && e < n)
                    for (var o = i - 1; 0 <= o; --o) t[o + e] = this[o + r];
                  else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                  return i;
                }),
                (f.prototype.fill = function (t, e, r, n) {
                  if ("string" == typeof t) {
                    if (
                      ("string" == typeof e
                        ? ((n = e), (e = 0), (r = this.length))
                        : "string" == typeof r && ((n = r), (r = this.length)),
                      void 0 !== n && "string" != typeof n)
                    )
                      throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !f.isEncoding(n))
                      throw new TypeError("Unknown encoding: " + n);
                    var i;
                    1 === t.length &&
                      ((i = t.charCodeAt(0)),
                      (("utf8" === n && i < 128) || "latin1" === n) && (t = i));
                  } else "number" == typeof t && (t &= 255);
                  if (e < 0 || this.length < e || this.length < r)
                    throw new RangeError("Out of range index");
                  if (r <= e) return this;
                  var o;
                  if (
                    ((e >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    "number" == typeof (t = t || 0))
                  )
                    for (o = e; o < r; ++o) this[o] = t;
                  else {
                    var a = f.isBuffer(t) ? t : f.from(t, n),
                      s = a.length;
                    if (0 === s)
                      throw new TypeError(
                        'The value "' + t + '" is invalid for argument "value"'
                      );
                    for (o = 0; o < r - e; ++o) this[o + e] = a[o % s];
                  }
                  return this;
                });
              var O = /[^+/0-9A-Za-z-_]/g;
              function E(t, e) {
                var r;
                e = e || 1 / 0;
                for (var n = t.length, i = null, o = [], a = 0; a < n; ++a) {
                  if (55295 < (r = t.charCodeAt(a)) && r < 57344) {
                    if (!i) {
                      if (56319 < r) {
                        -1 < (e -= 3) && o.push(239, 191, 189);
                        continue;
                      }
                      if (a + 1 === n) {
                        -1 < (e -= 3) && o.push(239, 191, 189);
                        continue;
                      }
                      i = r;
                      continue;
                    }
                    if (r < 56320) {
                      -1 < (e -= 3) && o.push(239, 191, 189), (i = r);
                      continue;
                    }
                    r = 65536 + (((i - 55296) << 10) | (r - 56320));
                  } else i && -1 < (e -= 3) && o.push(239, 191, 189);
                  if (((i = null), r < 128)) {
                    if (--e < 0) break;
                    o.push(r);
                  } else if (r < 2048) {
                    if ((e -= 2) < 0) break;
                    o.push((r >> 6) | 192, (63 & r) | 128);
                  } else if (r < 65536) {
                    if ((e -= 3) < 0) break;
                    o.push(
                      (r >> 12) | 224,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    o.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  }
                }
                return o;
              }
              function P(t) {
                return s.toByteArray(
                  (function (t) {
                    if (
                      (t = (t = t.split("=")[0]).trim().replace(O, "")).length <
                      2
                    )
                      return "";
                    for (; t.length % 4 != 0; ) t += "=";
                    return t;
                  })(t)
                );
              }
              function k(t, e, r, n) {
                for (
                  var i = 0;
                  i < n && !(i + r >= e.length || i >= t.length);
                  ++i
                )
                  e[i + r] = t[i];
                return i;
              }
              function x(t, e) {
                return (
                  t instanceof e ||
                  (null != t &&
                    null != t.constructor &&
                    null != t.constructor.name &&
                    t.constructor.name === e.name)
                );
              }
              function B(t) {
                return t != t;
              }
            }.call(this);
          }.call(this, T("buffer").Buffer);
        },
        { "base64-js": 20, buffer: 21, ieee754: 22 },
      ],
      22: [
        function (t, e, r) {
          (r.read = function (t, e, r, n, i) {
            var o,
              a,
              s = 8 * i - n - 1,
              u = (1 << s) - 1,
              l = u >> 1,
              c = -7,
              f = r ? i - 1 : 0,
              h = r ? -1 : 1,
              r = t[e + f];
            for (
              f += h, o = r & ((1 << -c) - 1), r >>= -c, c += s;
              0 < c;
              o = 256 * o + t[e + f], f += h, c -= 8
            );
            for (
              a = o & ((1 << -c) - 1), o >>= -c, c += n;
              0 < c;
              a = 256 * a + t[e + f], f += h, c -= 8
            );
            if (0 === o) o = 1 - l;
            else {
              if (o === u) return a ? NaN : (1 / 0) * (r ? -1 : 1);
              (a += Math.pow(2, n)), (o -= l);
            }
            return (r ? -1 : 1) * a * Math.pow(2, o - n);
          }),
            (r.write = function (t, e, r, n, i, o) {
              var a,
                s,
                u = 8 * o - i - 1,
                l = (1 << u) - 1,
                c = l >> 1,
                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = n ? 0 : o - 1,
                d = n ? 1 : -1,
                o = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
              for (
                e = Math.abs(e),
                  isNaN(e) || e === 1 / 0
                    ? ((s = isNaN(e) ? 1 : 0), (a = l))
                    : ((a = Math.floor(Math.log(e) / Math.LN2)),
                      e * (n = Math.pow(2, -a)) < 1 && (a--, (n *= 2)),
                      2 <=
                        (e += 1 <= a + c ? f / n : f * Math.pow(2, 1 - c)) *
                          n && (a++, (n /= 2)),
                      l <= a + c
                        ? ((s = 0), (a = l))
                        : 1 <= a + c
                        ? ((s = (e * n - 1) * Math.pow(2, i)), (a += c))
                        : ((s = e * Math.pow(2, c - 1) * Math.pow(2, i)),
                          (a = 0)));
                8 <= i;
                t[r + h] = 255 & s, h += d, s /= 256, i -= 8
              );
              for (
                a = (a << i) | s, u += i;
                0 < u;
                t[r + h] = 255 & a, h += d, a /= 256, u -= 8
              );
              t[r + h - d] |= 128 * o;
            });
        },
        {},
      ],
      23: [
        function (l, e, i) {
          !function (r, f, n) {
            !function () {
              !(function (t) {
                "object" == typeof i && void 0 !== e
                  ? (e.exports = t())
                  : (("undefined" != typeof window
                      ? window
                      : void 0 !== r
                      ? r
                      : "undefined" != typeof self
                      ? self
                      : this
                    ).JSZip = t());
              })(function () {
                return (function n(i, o, a) {
                  function s(e, t) {
                    if (!o[e]) {
                      if (!i[e]) {
                        var r = "function" == typeof l && l;
                        if (!t && r) return r(e, !0);
                        if (u) return u(e, !0);
                        r = new Error("Cannot find module '" + e + "'");
                        throw ((r.code = "MODULE_NOT_FOUND"), r);
                      }
                      r = o[e] = { exports: {} };
                      i[e][0].call(
                        r.exports,
                        function (t) {
                          return s(i[e][1][t] || t);
                        },
                        r,
                        r.exports,
                        n,
                        i,
                        o,
                        a
                      );
                    }
                    return o[e].exports;
                  }
                  for (
                    var u = "function" == typeof l && l, t = 0;
                    t < a.length;
                    t++
                  )
                    s(a[t]);
                  return s;
                })(
                  {
                    1: [
                      function (t, e, r) {
                        "use strict";
                        var f = t("./utils"),
                          c = t("./support"),
                          h =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        (r.encode = function (t) {
                          for (
                            var e,
                              r,
                              n,
                              i,
                              o,
                              a,
                              s = [],
                              u = 0,
                              l = t.length,
                              c = "string" !== f.getTypeOf(t);
                            u < t.length;

                          )
                            (a = l - u),
                              (o = c
                                ? ((e = t[u++]),
                                  (r = u < l ? t[u++] : 0),
                                  u < l ? t[u++] : 0)
                                : ((e = t.charCodeAt(u++)),
                                  (r = u < l ? t.charCodeAt(u++) : 0),
                                  u < l ? t.charCodeAt(u++) : 0)),
                              (n = ((3 & e) << 4) | (r >> 4)),
                              (i = 1 < a ? ((15 & r) << 2) | (o >> 6) : 64),
                              (o = 2 < a ? 63 & o : 64),
                              s.push(
                                h.charAt(e >> 2) +
                                  h.charAt(n) +
                                  h.charAt(i) +
                                  h.charAt(o)
                              );
                          return s.join("");
                        }),
                          (r.decode = function (t) {
                            var e,
                              r,
                              n,
                              i,
                              o,
                              a = 0,
                              s = 0;
                            if ("data:" === t.substr(0, "data:".length))
                              throw new Error(
                                "Invalid base64 input, it looks like a data url."
                              );
                            var u,
                              l =
                                (3 *
                                  (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""))
                                    .length) /
                                4;
                            if (
                              (t.charAt(t.length - 1) === h.charAt(64) && l--,
                              t.charAt(t.length - 2) === h.charAt(64) && l--,
                              l % 1 != 0)
                            )
                              throw new Error(
                                "Invalid base64 input, bad content length."
                              );
                            for (
                              u = new (c.uint8array ? Uint8Array : Array)(
                                0 | l
                              );
                              a < t.length;

                            )
                              (e =
                                (h.indexOf(t.charAt(a++)) << 2) |
                                ((n = h.indexOf(t.charAt(a++))) >> 4)),
                                (r =
                                  ((15 & n) << 4) |
                                  ((i = h.indexOf(t.charAt(a++))) >> 2)),
                                (n =
                                  ((3 & i) << 6) |
                                  (o = h.indexOf(t.charAt(a++)))),
                                (u[s++] = e),
                                64 !== i && (u[s++] = r),
                                64 !== o && (u[s++] = n);
                            return u;
                          });
                      },
                      { "./support": 30, "./utils": 32 },
                    ],
                    2: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./external"),
                          i = t("./stream/DataWorker"),
                          o = t("./stream/Crc32Probe"),
                          a = t("./stream/DataLengthProbe");
                        function s(t, e, r, n, i) {
                          (this.compressedSize = t),
                            (this.uncompressedSize = e),
                            (this.crc32 = r),
                            (this.compression = n),
                            (this.compressedContent = i);
                        }
                        (s.prototype = {
                          getContentWorker: function () {
                            var t = new i(
                                n.Promise.resolve(this.compressedContent)
                              )
                                .pipe(this.compression.uncompressWorker())
                                .pipe(new a("data_length")),
                              e = this;
                            return (
                              t.on("end", function () {
                                if (
                                  this.streamInfo.data_length !==
                                  e.uncompressedSize
                                )
                                  throw new Error(
                                    "Bug : uncompressed data size mismatch"
                                  );
                              }),
                              t
                            );
                          },
                          getCompressedWorker: function () {
                            return new i(
                              n.Promise.resolve(this.compressedContent)
                            )
                              .withStreamInfo(
                                "compressedSize",
                                this.compressedSize
                              )
                              .withStreamInfo(
                                "uncompressedSize",
                                this.uncompressedSize
                              )
                              .withStreamInfo("crc32", this.crc32)
                              .withStreamInfo("compression", this.compression);
                          },
                        }),
                          (s.createWorkerFrom = function (t, e, r) {
                            return t
                              .pipe(new o())
                              .pipe(new a("uncompressedSize"))
                              .pipe(e.compressWorker(r))
                              .pipe(new a("compressedSize"))
                              .withStreamInfo("compression", e);
                          }),
                          (e.exports = s);
                      },
                      {
                        "./external": 6,
                        "./stream/Crc32Probe": 25,
                        "./stream/DataLengthProbe": 26,
                        "./stream/DataWorker": 27,
                      },
                    ],
                    3: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./stream/GenericWorker");
                        (r.STORE = {
                          magic: "\0\0",
                          compressWorker: function (t) {
                            return new n("STORE compression");
                          },
                          uncompressWorker: function () {
                            return new n("STORE decompression");
                          },
                        }),
                          (r.DEFLATE = t("./flate"));
                      },
                      { "./flate": 7, "./stream/GenericWorker": 28 },
                    ],
                    4: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./utils"),
                          a = (function () {
                            for (var t = [], e = 0; e < 256; e++) {
                              for (var r = e, n = 0; n < 8; n++)
                                r = 1 & r ? 3988292384 ^ (r >>> 1) : r >>> 1;
                              t[e] = r;
                            }
                            return t;
                          })();
                        e.exports = function (t, e) {
                          return void 0 !== t && t.length
                            ? ("string" !== n.getTypeOf(t)
                                ? function (t, e, r) {
                                    var n = a,
                                      i = 0 + r;
                                    t ^= -1;
                                    for (var o = 0; o < i; o++)
                                      t = (t >>> 8) ^ n[255 & (t ^ e[o])];
                                    return -1 ^ t;
                                  }
                                : function (t, e, r) {
                                    var n = a,
                                      i = 0 + r;
                                    t ^= -1;
                                    for (var o = 0; o < i; o++)
                                      t =
                                        (t >>> 8) ^
                                        n[255 & (t ^ e.charCodeAt(o))];
                                    return -1 ^ t;
                                  })(0 | e, t, t.length)
                            : 0;
                        };
                      },
                      { "./utils": 32 },
                    ],
                    5: [
                      function (t, e, r) {
                        "use strict";
                        (r.base64 = !1),
                          (r.binary = !1),
                          (r.dir = !1),
                          (r.createFolders = !0),
                          (r.date = null),
                          (r.compression = null),
                          (r.compressionOptions = null),
                          (r.comment = null),
                          (r.unixPermissions = null),
                          (r.dosPermissions = null);
                      },
                      {},
                    ],
                    6: [
                      function (t, e, r) {
                        "use strict";
                        var n =
                          "undefined" != typeof Promise ? Promise : t("lie");
                        e.exports = { Promise: n };
                      },
                      { lie: 37 },
                    ],
                    7: [
                      function (t, e, r) {
                        "use strict";
                        var n =
                            "undefined" != typeof Uint8Array &&
                            "undefined" != typeof Uint16Array &&
                            "undefined" != typeof Uint32Array,
                          i = t("pako"),
                          o = t("./utils"),
                          a = t("./stream/GenericWorker"),
                          s = n ? "uint8array" : "array";
                        function u(t, e) {
                          a.call(this, "FlateWorker/" + t),
                            (this._pako = null),
                            (this._pakoAction = t),
                            (this._pakoOptions = e),
                            (this.meta = {});
                        }
                        (r.magic = "\b\0"),
                          o.inherits(u, a),
                          (u.prototype.processChunk = function (t) {
                            (this.meta = t.meta),
                              null === this._pako && this._createPako(),
                              this._pako.push(o.transformTo(s, t.data), !1);
                          }),
                          (u.prototype.flush = function () {
                            a.prototype.flush.call(this),
                              null === this._pako && this._createPako(),
                              this._pako.push([], !0);
                          }),
                          (u.prototype.cleanUp = function () {
                            a.prototype.cleanUp.call(this), (this._pako = null);
                          }),
                          (u.prototype._createPako = function () {
                            this._pako = new i[this._pakoAction]({
                              raw: !0,
                              level: this._pakoOptions.level || -1,
                            });
                            var e = this;
                            this._pako.onData = function (t) {
                              e.push({ data: t, meta: e.meta });
                            };
                          }),
                          (r.compressWorker = function (t) {
                            return new u("Deflate", t);
                          }),
                          (r.uncompressWorker = function () {
                            return new u("Inflate", {});
                          });
                      },
                      { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 },
                    ],
                    8: [
                      function (t, e, r) {
                        "use strict";
                        function w(t, e) {
                          for (var r = "", n = 0; n < e; n++)
                            (r += String.fromCharCode(255 & t)), (t >>>= 8);
                          return r;
                        }
                        function n(t, e, r, n, i, o) {
                          var a,
                            s = t.file,
                            u = t.compression,
                            l = o !== S.utf8encode,
                            c = v.transformTo("string", o(s.name)),
                            f = v.transformTo("string", S.utf8encode(s.name)),
                            h = s.comment,
                            d = v.transformTo("string", o(h)),
                            p = v.transformTo("string", S.utf8encode(h)),
                            _ = f.length !== s.name.length,
                            m = p.length !== h.length,
                            y = "",
                            g = s.dir,
                            o = s.date,
                            h = {
                              crc32: 0,
                              compressedSize: 0,
                              uncompressedSize: 0,
                            };
                          (e && !r) ||
                            ((h.crc32 = t.crc32),
                            (h.compressedSize = t.compressedSize),
                            (h.uncompressedSize = t.uncompressedSize));
                          t = 0;
                          e && (t |= 8), l || (!_ && !m) || (t |= 2048);
                          (e = 0), (l = 0);
                          g && (e |= 16),
                            "UNIX" === i
                              ? ((l = 798),
                                (e |=
                                  (65535 &
                                    ((i = s.unixPermissions)
                                      ? i
                                      : g
                                      ? 16893
                                      : 33204)) <<
                                  16))
                              : ((l = 20), (e |= 63 & (s.dosPermissions || 0))),
                            (g = o.getUTCHours()),
                            (g <<= 6),
                            (g |= o.getUTCMinutes()),
                            (g <<= 5),
                            (g |= o.getUTCSeconds() / 2),
                            (s = o.getUTCFullYear() - 1980),
                            (s <<= 4),
                            (s |= o.getUTCMonth() + 1),
                            (s <<= 5),
                            (s |= o.getUTCDate()),
                            _ &&
                              ((a = w(1, 1) + w(C(c), 4) + f),
                              (y += "up" + w(a.length, 2) + a)),
                            m &&
                              ((b = w(1, 1) + w(C(d), 4) + p),
                              (y += "uc" + w(b.length, 2) + b));
                          var b = "";
                          return (
                            (b += "\n\0"),
                            (b += w(t, 2)),
                            (b += u.magic),
                            (b += w(g, 2)),
                            (b += w(s, 2)),
                            (b += w(h.crc32, 4)),
                            (b += w(h.compressedSize, 4)),
                            (b += w(h.uncompressedSize, 4)),
                            (b += w(c.length, 2)),
                            (b += w(y.length, 2)),
                            {
                              fileRecord: I.LOCAL_FILE_HEADER + b + c + y,
                              dirRecord:
                                I.CENTRAL_FILE_HEADER +
                                w(l, 2) +
                                b +
                                w(d.length, 2) +
                                "\0\0\0\0" +
                                w(e, 4) +
                                w(n, 4) +
                                c +
                                y +
                                d,
                            }
                          );
                        }
                        var v = t("../utils"),
                          i = t("../stream/GenericWorker"),
                          S = t("../utf8"),
                          C = t("../crc32"),
                          I = t("../signature");
                        function o(t, e, r, n) {
                          i.call(this, "ZipFileWorker"),
                            (this.bytesWritten = 0),
                            (this.zipComment = e),
                            (this.zipPlatform = r),
                            (this.encodeFileName = n),
                            (this.streamFiles = t),
                            (this.accumulate = !1),
                            (this.contentBuffer = []),
                            (this.dirRecords = []),
                            (this.currentSourceOffset = 0),
                            (this.entriesCount = 0),
                            (this.currentFile = null),
                            (this._sources = []);
                        }
                        v.inherits(o, i),
                          (o.prototype.push = function (t) {
                            var e = t.meta.percent || 0,
                              r = this.entriesCount,
                              n = this._sources.length;
                            this.accumulate
                              ? this.contentBuffer.push(t)
                              : ((this.bytesWritten += t.data.length),
                                i.prototype.push.call(this, {
                                  data: t.data,
                                  meta: {
                                    currentFile: this.currentFile,
                                    percent: r
                                      ? (e + 100 * (r - n - 1)) / r
                                      : 100,
                                  },
                                }));
                          }),
                          (o.prototype.openedSource = function (t) {
                            (this.currentSourceOffset = this.bytesWritten),
                              (this.currentFile = t.file.name);
                            var e = this.streamFiles && !t.file.dir;
                            e
                              ? ((e = n(
                                  t,
                                  e,
                                  !1,
                                  this.currentSourceOffset,
                                  this.zipPlatform,
                                  this.encodeFileName
                                )),
                                this.push({
                                  data: e.fileRecord,
                                  meta: { percent: 0 },
                                }))
                              : (this.accumulate = !0);
                          }),
                          (o.prototype.closedSource = function (t) {
                            this.accumulate = !1;
                            var e = this.streamFiles && !t.file.dir,
                              r = n(
                                t,
                                e,
                                !0,
                                this.currentSourceOffset,
                                this.zipPlatform,
                                this.encodeFileName
                              );
                            if ((this.dirRecords.push(r.dirRecord), e))
                              this.push({
                                data:
                                  ((t = t),
                                  I.DATA_DESCRIPTOR +
                                    w(t.crc32, 4) +
                                    w(t.compressedSize, 4) +
                                    w(t.uncompressedSize, 4)),
                                meta: { percent: 100 },
                              });
                            else
                              for (
                                this.push({
                                  data: r.fileRecord,
                                  meta: { percent: 0 },
                                });
                                this.contentBuffer.length;

                              )
                                this.push(this.contentBuffer.shift());
                            this.currentFile = null;
                          }),
                          (o.prototype.flush = function () {
                            for (
                              var t = this.bytesWritten, e = 0;
                              e < this.dirRecords.length;
                              e++
                            )
                              this.push({
                                data: this.dirRecords[e],
                                meta: { percent: 100 },
                              });
                            var r = this.bytesWritten - t,
                              t = (function (t, e, r, n, i) {
                                n = v.transformTo("string", i(n));
                                return (
                                  I.CENTRAL_DIRECTORY_END +
                                  "\0\0\0\0" +
                                  w(t, 2) +
                                  w(t, 2) +
                                  w(e, 4) +
                                  w(r, 4) +
                                  w(n.length, 2) +
                                  n
                                );
                              })(
                                this.dirRecords.length,
                                r,
                                t,
                                this.zipComment,
                                this.encodeFileName
                              );
                            this.push({ data: t, meta: { percent: 100 } });
                          }),
                          (o.prototype.prepareNextSource = function () {
                            (this.previous = this._sources.shift()),
                              this.openedSource(this.previous.streamInfo),
                              this.isPaused
                                ? this.previous.pause()
                                : this.previous.resume();
                          }),
                          (o.prototype.registerPrevious = function (t) {
                            this._sources.push(t);
                            var e = this;
                            return (
                              t.on("data", function (t) {
                                e.processChunk(t);
                              }),
                              t.on("end", function () {
                                e.closedSource(e.previous.streamInfo),
                                  e._sources.length
                                    ? e.prepareNextSource()
                                    : e.end();
                              }),
                              t.on("error", function (t) {
                                e.error(t);
                              }),
                              this
                            );
                          }),
                          (o.prototype.resume = function () {
                            return (
                              !!i.prototype.resume.call(this) &&
                              (!this.previous && this._sources.length
                                ? (this.prepareNextSource(), !0)
                                : this.previous ||
                                  this._sources.length ||
                                  this.generatedError
                                ? void 0
                                : (this.end(), !0))
                            );
                          }),
                          (o.prototype.error = function (t) {
                            var e = this._sources;
                            if (!i.prototype.error.call(this, t)) return !1;
                            for (var r = 0; r < e.length; r++)
                              try {
                                e[r].error(t);
                              } catch (t) {}
                            return !0;
                          }),
                          (o.prototype.lock = function () {
                            i.prototype.lock.call(this);
                            for (
                              var t = this._sources, e = 0;
                              e < t.length;
                              e++
                            )
                              t[e].lock();
                          }),
                          (e.exports = o);
                      },
                      {
                        "../crc32": 4,
                        "../signature": 23,
                        "../stream/GenericWorker": 28,
                        "../utf8": 31,
                        "../utils": 32,
                      },
                    ],
                    9: [
                      function (t, e, r) {
                        "use strict";
                        var l = t("../compressions"),
                          n = t("./ZipFileWorker");
                        r.generateWorker = function (t, a, e) {
                          var s = new n(
                              a.streamFiles,
                              e,
                              a.platform,
                              a.encodeFileName
                            ),
                            u = 0;
                          try {
                            t.forEach(function (t, e) {
                              u++;
                              var r = (function (t, e) {
                                  (t = t || e), (e = l[t]);
                                  if (!e)
                                    throw new Error(
                                      t + " is not a valid compression method !"
                                    );
                                  return e;
                                })(e.options.compression, a.compression),
                                n =
                                  e.options.compressionOptions ||
                                  a.compressionOptions ||
                                  {},
                                i = e.dir,
                                o = e.date;
                              e._compressWorker(r, n)
                                .withStreamInfo("file", {
                                  name: t,
                                  dir: i,
                                  date: o,
                                  comment: e.comment || "",
                                  unixPermissions: e.unixPermissions,
                                  dosPermissions: e.dosPermissions,
                                })
                                .pipe(s);
                            }),
                              (s.entriesCount = u);
                          } catch (t) {
                            s.error(t);
                          }
                          return s;
                        };
                      },
                      { "../compressions": 3, "./ZipFileWorker": 8 },
                    ],
                    10: [
                      function (t, e, r) {
                        "use strict";
                        function n() {
                          if (!(this instanceof n)) return new n();
                          if (arguments.length)
                            throw new Error(
                              "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide."
                            );
                          (this.files = Object.create(null)),
                            (this.comment = null),
                            (this.root = ""),
                            (this.clone = function () {
                              var t,
                                e = new n();
                              for (t in this)
                                "function" != typeof this[t] &&
                                  (e[t] = this[t]);
                              return e;
                            });
                        }
                        ((n.prototype = t("./object")).loadAsync = t("./load")),
                          (n.support = t("./support")),
                          (n.defaults = t("./defaults")),
                          (n.version = "3.7.1"),
                          (n.loadAsync = function (t, e) {
                            return new n().loadAsync(t, e);
                          }),
                          (n.external = t("./external")),
                          (e.exports = n);
                      },
                      {
                        "./defaults": 5,
                        "./external": 6,
                        "./load": 11,
                        "./object": 15,
                        "./support": 30,
                      },
                    ],
                    11: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./utils"),
                          a = t("./external"),
                          s = t("./utf8"),
                          u = t("./zipEntries"),
                          l = t("./stream/Crc32Probe"),
                          c = t("./nodejsUtils");
                        e.exports = function (t, i) {
                          var o = this;
                          return (
                            (i = n.extend(i || {}, {
                              base64: !1,
                              checkCRC32: !1,
                              optimizedBinaryString: !1,
                              createFolders: !1,
                              decodeFileName: s.utf8decode,
                            })),
                            c.isNode && c.isStream(t)
                              ? a.Promise.reject(
                                  new Error(
                                    "JSZip can't accept a stream when loading a zip file."
                                  )
                                )
                              : n
                                  .prepareContent(
                                    "the loaded zip file",
                                    t,
                                    !0,
                                    i.optimizedBinaryString,
                                    i.base64
                                  )
                                  .then(function (t) {
                                    var e = new u(i);
                                    return e.load(t), e;
                                  })
                                  .then(function (t) {
                                    var e = [a.Promise.resolve(t)],
                                      r = t.files;
                                    if (i.checkCRC32)
                                      for (var n = 0; n < r.length; n++)
                                        e.push(
                                          (function (n) {
                                            return new a.Promise(function (
                                              t,
                                              e
                                            ) {
                                              var r = n.decompressed
                                                .getContentWorker()
                                                .pipe(new l());
                                              r.on("error", function (t) {
                                                e(t);
                                              })
                                                .on("end", function () {
                                                  r.streamInfo.crc32 !==
                                                  n.decompressed.crc32
                                                    ? e(
                                                        new Error(
                                                          "Corrupted zip : CRC32 mismatch"
                                                        )
                                                      )
                                                    : t();
                                                })
                                                .resume();
                                            });
                                          })(r[n])
                                        );
                                    return a.Promise.all(e);
                                  })
                                  .then(function (t) {
                                    for (
                                      var t = t.shift(), e = t.files, r = 0;
                                      r < e.length;
                                      r++
                                    ) {
                                      var n = e[r];
                                      o.file(n.fileNameStr, n.decompressed, {
                                        binary: !0,
                                        optimizedBinaryString: !0,
                                        date: n.date,
                                        dir: n.dir,
                                        comment: n.fileCommentStr.length
                                          ? n.fileCommentStr
                                          : null,
                                        unixPermissions: n.unixPermissions,
                                        dosPermissions: n.dosPermissions,
                                        createFolders: i.createFolders,
                                      });
                                    }
                                    return (
                                      t.zipComment.length &&
                                        (o.comment = t.zipComment),
                                      o
                                    );
                                  })
                          );
                        };
                      },
                      {
                        "./external": 6,
                        "./nodejsUtils": 14,
                        "./stream/Crc32Probe": 25,
                        "./utf8": 31,
                        "./utils": 32,
                        "./zipEntries": 33,
                      },
                    ],
                    12: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("../utils"),
                          i = t("../stream/GenericWorker");
                        function o(t, e) {
                          i.call(this, "Nodejs stream input adapter for " + t),
                            (this._upstreamEnded = !1),
                            this._bindStream(e);
                        }
                        n.inherits(o, i),
                          (o.prototype._bindStream = function (t) {
                            var e = this;
                            (this._stream = t).pause(),
                              t
                                .on("data", function (t) {
                                  e.push({ data: t, meta: { percent: 0 } });
                                })
                                .on("error", function (t) {
                                  e.isPaused
                                    ? (this.generatedError = t)
                                    : e.error(t);
                                })
                                .on("end", function () {
                                  e.isPaused
                                    ? (e._upstreamEnded = !0)
                                    : e.end();
                                });
                          }),
                          (o.prototype.pause = function () {
                            return (
                              !!i.prototype.pause.call(this) &&
                              (this._stream.pause(), !0)
                            );
                          }),
                          (o.prototype.resume = function () {
                            return (
                              !!i.prototype.resume.call(this) &&
                              (this._upstreamEnded
                                ? this.end()
                                : this._stream.resume(),
                              !0)
                            );
                          }),
                          (e.exports = o);
                      },
                      { "../stream/GenericWorker": 28, "../utils": 32 },
                    ],
                    13: [
                      function (t, e, r) {
                        "use strict";
                        var i = t("readable-stream").Readable;
                        function n(t, e, r) {
                          i.call(this, e), (this._helper = t);
                          var n = this;
                          t.on("data", function (t, e) {
                            n.push(t) || n._helper.pause(), r && r(e);
                          })
                            .on("error", function (t) {
                              n.emit("error", t);
                            })
                            .on("end", function () {
                              n.push(null);
                            });
                        }
                        t("../utils").inherits(n, i),
                          (n.prototype._read = function () {
                            this._helper.resume();
                          }),
                          (e.exports = n);
                      },
                      { "../utils": 32, "readable-stream": 16 },
                    ],
                    14: [
                      function (t, e, r) {
                        "use strict";
                        e.exports = {
                          isNode: void 0 !== f,
                          newBufferFrom: function (t, e) {
                            if (f.from && f.from !== Uint8Array.from)
                              return f.from(t, e);
                            if ("number" == typeof t)
                              throw new Error(
                                'The "data" argument must not be a number'
                              );
                            return new f(t, e);
                          },
                          allocBuffer: function (t) {
                            if (f.alloc) return f.alloc(t);
                            t = new f(t);
                            return t.fill(0), t;
                          },
                          isBuffer: function (t) {
                            return f.isBuffer(t);
                          },
                          isStream: function (t) {
                            return (
                              t &&
                              "function" == typeof t.on &&
                              "function" == typeof t.pause &&
                              "function" == typeof t.resume
                            );
                          },
                        };
                      },
                      {},
                    ],
                    15: [
                      function (t, e, r) {
                        "use strict";
                        function i(t, e, r) {
                          var n,
                            i = u.getTypeOf(e),
                            o = u.extend(r || {}, f);
                          (o.date = o.date || new Date()),
                            null !== o.compression &&
                              (o.compression = o.compression.toUpperCase()),
                            "string" == typeof o.unixPermissions &&
                              (o.unixPermissions = parseInt(
                                o.unixPermissions,
                                8
                              )),
                            o.unixPermissions &&
                              16384 & o.unixPermissions &&
                              (o.dir = !0),
                            o.dosPermissions &&
                              16 & o.dosPermissions &&
                              (o.dir = !0),
                            o.dir && (t = y(t)),
                            o.createFolders &&
                              (n = a(t)) &&
                              s.call(this, n, !0);
                          i =
                            "string" === i &&
                            !1 === o.binary &&
                            !1 === o.base64;
                          (r && void 0 !== r.binary) || (o.binary = !i),
                            ((e instanceof h && 0 === e.uncompressedSize) ||
                              o.dir ||
                              !e ||
                              0 === e.length) &&
                              ((o.base64 = !1),
                              (o.binary = !0),
                              (e = ""),
                              (o.compression = "STORE"));
                          (i =
                            e instanceof h || e instanceof l
                              ? e
                              : _.isNode && _.isStream(e)
                              ? new m(t, e)
                              : u.prepareContent(
                                  t,
                                  e,
                                  o.binary,
                                  o.optimizedBinaryString,
                                  o.base64
                                )),
                            (o = new d(t, i, o));
                          this.files[t] = o;
                        }
                        function a(t) {
                          var e = (t =
                            "/" === t.slice(-1)
                              ? t.substring(0, t.length - 1)
                              : t).lastIndexOf("/");
                          return 0 < e ? t.substring(0, e) : "";
                        }
                        function s(t, e) {
                          return (
                            (e = void 0 !== e ? e : f.createFolders),
                            (t = y(t)),
                            this.files[t] ||
                              i.call(this, t, null, {
                                dir: !0,
                                createFolders: e,
                              }),
                            this.files[t]
                          );
                        }
                        var o = t("./utf8"),
                          u = t("./utils"),
                          l = t("./stream/GenericWorker"),
                          c = t("./stream/StreamHelper"),
                          f = t("./defaults"),
                          h = t("./compressedObject"),
                          d = t("./zipObject"),
                          p = t("./generate"),
                          _ = t("./nodejsUtils"),
                          m = t("./nodejs/NodejsStreamInputAdapter"),
                          y = function (t) {
                            return "/" !== t.slice(-1) && (t += "/"), t;
                          };
                        function g(t) {
                          return (
                            "[object RegExp]" ===
                            Object.prototype.toString.call(t)
                          );
                        }
                        t = {
                          load: function () {
                            throw new Error(
                              "This method has been removed in JSZip 3.0, please check the upgrade guide."
                            );
                          },
                          forEach: function (t) {
                            var e, r, n;
                            for (e in this.files)
                              (n = this.files[e]),
                                (r = e.slice(this.root.length, e.length)) &&
                                  e.slice(0, this.root.length) === this.root &&
                                  t(r, n);
                          },
                          filter: function (r) {
                            var n = [];
                            return (
                              this.forEach(function (t, e) {
                                r(t, e) && n.push(e);
                              }),
                              n
                            );
                          },
                          file: function (t, e, r) {
                            if (1 !== arguments.length)
                              return (
                                (t = this.root + t), i.call(this, t, e, r), this
                              );
                            if (g(t)) {
                              var n = t;
                              return this.filter(function (t, e) {
                                return !e.dir && n.test(t);
                              });
                            }
                            t = this.files[this.root + t];
                            return t && !t.dir ? t : null;
                          },
                          folder: function (r) {
                            if (!r) return this;
                            if (g(r))
                              return this.filter(function (t, e) {
                                return e.dir && r.test(t);
                              });
                            var t = this.root + r,
                              e = s.call(this, t),
                              t = this.clone();
                            return (t.root = e.name), t;
                          },
                          remove: function (r) {
                            r = this.root + r;
                            var t = this.files[r];
                            if (
                              (t ||
                                ("/" !== r.slice(-1) && (r += "/"),
                                (t = this.files[r])),
                              t && !t.dir)
                            )
                              delete this.files[r];
                            else
                              for (
                                var e = this.filter(function (t, e) {
                                    return e.name.slice(0, r.length) === r;
                                  }),
                                  n = 0;
                                n < e.length;
                                n++
                              )
                                delete this.files[e[n].name];
                            return this;
                          },
                          generate: function (t) {
                            throw new Error(
                              "This method has been removed in JSZip 3.0, please check the upgrade guide."
                            );
                          },
                          generateInternalStream: function (t) {
                            var e = {};
                            try {
                              if (
                                (((e = u.extend(t || {}, {
                                  streamFiles: !1,
                                  compression: "STORE",
                                  compressionOptions: null,
                                  type: "",
                                  platform: "DOS",
                                  comment: null,
                                  mimeType: "application/zip",
                                  encodeFileName: o.utf8encode,
                                })).type = e.type.toLowerCase()),
                                (e.compression = e.compression.toUpperCase()),
                                "binarystring" === e.type &&
                                  (e.type = "string"),
                                !e.type)
                              )
                                throw new Error("No output type specified.");
                              u.checkSupport(e.type),
                                ("darwin" !== e.platform &&
                                  "freebsd" !== e.platform &&
                                  "linux" !== e.platform &&
                                  "sunos" !== e.platform) ||
                                  (e.platform = "UNIX"),
                                "win32" === e.platform && (e.platform = "DOS");
                              var r = e.comment || this.comment || "",
                                n = p.generateWorker(this, e, r);
                            } catch (t) {
                              (n = new l("error")).error(t);
                            }
                            return new c(n, e.type || "string", e.mimeType);
                          },
                          generateAsync: function (t, e) {
                            return this.generateInternalStream(t).accumulate(e);
                          },
                          generateNodeStream: function (t, e) {
                            return (
                              (t = t || {}).type || (t.type = "nodebuffer"),
                              this.generateInternalStream(t).toNodejsStream(e)
                            );
                          },
                        };
                        e.exports = t;
                      },
                      {
                        "./compressedObject": 2,
                        "./defaults": 5,
                        "./generate": 9,
                        "./nodejs/NodejsStreamInputAdapter": 12,
                        "./nodejsUtils": 14,
                        "./stream/GenericWorker": 28,
                        "./stream/StreamHelper": 29,
                        "./utf8": 31,
                        "./utils": 32,
                        "./zipObject": 35,
                      },
                    ],
                    16: [
                      function (t, e, r) {
                        e.exports = t("stream");
                      },
                      { stream: void 0 },
                    ],
                    17: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./DataReader");
                        function i(t) {
                          n.call(this, t);
                          for (var e = 0; e < this.data.length; e++)
                            t[e] = 255 & t[e];
                        }
                        t("../utils").inherits(i, n),
                          (i.prototype.byteAt = function (t) {
                            return this.data[this.zero + t];
                          }),
                          (i.prototype.lastIndexOfSignature = function (t) {
                            for (
                              var e = t.charCodeAt(0),
                                r = t.charCodeAt(1),
                                n = t.charCodeAt(2),
                                i = t.charCodeAt(3),
                                o = this.length - 4;
                              0 <= o;
                              --o
                            )
                              if (
                                this.data[o] === e &&
                                this.data[o + 1] === r &&
                                this.data[o + 2] === n &&
                                this.data[o + 3] === i
                              )
                                return o - this.zero;
                            return -1;
                          }),
                          (i.prototype.readAndCheckSignature = function (t) {
                            var e = t.charCodeAt(0),
                              r = t.charCodeAt(1),
                              n = t.charCodeAt(2),
                              i = t.charCodeAt(3),
                              t = this.readData(4);
                            return (
                              e === t[0] &&
                              r === t[1] &&
                              n === t[2] &&
                              i === t[3]
                            );
                          }),
                          (i.prototype.readData = function (t) {
                            if ((this.checkOffset(t), 0 === t)) return [];
                            var e = this.data.slice(
                              this.zero + this.index,
                              this.zero + this.index + t
                            );
                            return (this.index += t), e;
                          }),
                          (e.exports = i);
                      },
                      { "../utils": 32, "./DataReader": 18 },
                    ],
                    18: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("../utils");
                        function i(t) {
                          (this.data = t),
                            (this.length = t.length),
                            (this.index = 0),
                            (this.zero = 0);
                        }
                        (i.prototype = {
                          checkOffset: function (t) {
                            this.checkIndex(this.index + t);
                          },
                          checkIndex: function (t) {
                            if (this.length < this.zero + t || t < 0)
                              throw new Error(
                                "End of data reached (data length = " +
                                  this.length +
                                  ", asked index = " +
                                  t +
                                  "). Corrupted zip ?"
                              );
                          },
                          setIndex: function (t) {
                            this.checkIndex(t), (this.index = t);
                          },
                          skip: function (t) {
                            this.setIndex(this.index + t);
                          },
                          byteAt: function (t) {},
                          readInt: function (t) {
                            var e,
                              r = 0;
                            for (
                              this.checkOffset(t), e = this.index + t - 1;
                              e >= this.index;
                              e--
                            )
                              r = (r << 8) + this.byteAt(e);
                            return (this.index += t), r;
                          },
                          readString: function (t) {
                            return n.transformTo("string", this.readData(t));
                          },
                          readData: function (t) {},
                          lastIndexOfSignature: function (t) {},
                          readAndCheckSignature: function (t) {},
                          readDate: function () {
                            var t = this.readInt(4);
                            return new Date(
                              Date.UTC(
                                1980 + ((t >> 25) & 127),
                                ((t >> 21) & 15) - 1,
                                (t >> 16) & 31,
                                (t >> 11) & 31,
                                (t >> 5) & 63,
                                (31 & t) << 1
                              )
                            );
                          },
                        }),
                          (e.exports = i);
                      },
                      { "../utils": 32 },
                    ],
                    19: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./Uint8ArrayReader");
                        function i(t) {
                          n.call(this, t);
                        }
                        t("../utils").inherits(i, n),
                          (i.prototype.readData = function (t) {
                            this.checkOffset(t);
                            var e = this.data.slice(
                              this.zero + this.index,
                              this.zero + this.index + t
                            );
                            return (this.index += t), e;
                          }),
                          (e.exports = i);
                      },
                      { "../utils": 32, "./Uint8ArrayReader": 21 },
                    ],
                    20: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./DataReader");
                        function i(t) {
                          n.call(this, t);
                        }
                        t("../utils").inherits(i, n),
                          (i.prototype.byteAt = function (t) {
                            return this.data.charCodeAt(this.zero + t);
                          }),
                          (i.prototype.lastIndexOfSignature = function (t) {
                            return this.data.lastIndexOf(t) - this.zero;
                          }),
                          (i.prototype.readAndCheckSignature = function (t) {
                            return t === this.readData(4);
                          }),
                          (i.prototype.readData = function (t) {
                            this.checkOffset(t);
                            var e = this.data.slice(
                              this.zero + this.index,
                              this.zero + this.index + t
                            );
                            return (this.index += t), e;
                          }),
                          (e.exports = i);
                      },
                      { "../utils": 32, "./DataReader": 18 },
                    ],
                    21: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./ArrayReader");
                        function i(t) {
                          n.call(this, t);
                        }
                        t("../utils").inherits(i, n),
                          (i.prototype.readData = function (t) {
                            if ((this.checkOffset(t), 0 === t))
                              return new Uint8Array(0);
                            var e = this.data.subarray(
                              this.zero + this.index,
                              this.zero + this.index + t
                            );
                            return (this.index += t), e;
                          }),
                          (e.exports = i);
                      },
                      { "../utils": 32, "./ArrayReader": 17 },
                    ],
                    22: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("../utils"),
                          i = t("../support"),
                          o = t("./ArrayReader"),
                          a = t("./StringReader"),
                          s = t("./NodeBufferReader"),
                          u = t("./Uint8ArrayReader");
                        e.exports = function (t) {
                          var e = n.getTypeOf(t);
                          return (
                            n.checkSupport(e),
                            "string" !== e || i.uint8array
                              ? "nodebuffer" === e
                                ? new s(t)
                                : i.uint8array
                                ? new u(n.transformTo("uint8array", t))
                                : new o(n.transformTo("array", t))
                              : new a(t)
                          );
                        };
                      },
                      {
                        "../support": 30,
                        "../utils": 32,
                        "./ArrayReader": 17,
                        "./NodeBufferReader": 19,
                        "./StringReader": 20,
                        "./Uint8ArrayReader": 21,
                      },
                    ],
                    23: [
                      function (t, e, r) {
                        "use strict";
                        (r.LOCAL_FILE_HEADER = "PK"),
                          (r.CENTRAL_FILE_HEADER = "PK"),
                          (r.CENTRAL_DIRECTORY_END = "PK"),
                          (r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK"),
                          (r.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
                          (r.DATA_DESCRIPTOR = "PK\b");
                      },
                      {},
                    ],
                    24: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./GenericWorker"),
                          i = t("../utils");
                        function o(t) {
                          n.call(this, "ConvertWorker to " + t),
                            (this.destType = t);
                        }
                        i.inherits(o, n),
                          (o.prototype.processChunk = function (t) {
                            this.push({
                              data: i.transformTo(this.destType, t.data),
                              meta: t.meta,
                            });
                          }),
                          (e.exports = o);
                      },
                      { "../utils": 32, "./GenericWorker": 28 },
                    ],
                    25: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./GenericWorker"),
                          i = t("../crc32");
                        function o() {
                          n.call(this, "Crc32Probe"),
                            this.withStreamInfo("crc32", 0);
                        }
                        t("../utils").inherits(o, n),
                          (o.prototype.processChunk = function (t) {
                            (this.streamInfo.crc32 = i(
                              t.data,
                              this.streamInfo.crc32 || 0
                            )),
                              this.push(t);
                          }),
                          (e.exports = o);
                      },
                      { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
                    ],
                    26: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("../utils"),
                          i = t("./GenericWorker");
                        function o(t) {
                          i.call(this, "DataLengthProbe for " + t),
                            (this.propName = t),
                            this.withStreamInfo(t, 0);
                        }
                        n.inherits(o, i),
                          (o.prototype.processChunk = function (t) {
                            var e;
                            t &&
                              ((e = this.streamInfo[this.propName] || 0),
                              (this.streamInfo[this.propName] =
                                e + t.data.length)),
                              i.prototype.processChunk.call(this, t);
                          }),
                          (e.exports = o);
                      },
                      { "../utils": 32, "./GenericWorker": 28 },
                    ],
                    27: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("../utils"),
                          i = t("./GenericWorker");
                        function o(t) {
                          i.call(this, "DataWorker");
                          var e = this;
                          (this.dataIsReady = !1),
                            (this.index = 0),
                            (this.max = 0),
                            (this.data = null),
                            (this.type = ""),
                            (this._tickScheduled = !1),
                            t.then(
                              function (t) {
                                (e.dataIsReady = !0),
                                  (e.data = t),
                                  (e.max = (t && t.length) || 0),
                                  (e.type = n.getTypeOf(t)),
                                  e.isPaused || e._tickAndRepeat();
                              },
                              function (t) {
                                e.error(t);
                              }
                            );
                        }
                        n.inherits(o, i),
                          (o.prototype.cleanUp = function () {
                            i.prototype.cleanUp.call(this), (this.data = null);
                          }),
                          (o.prototype.resume = function () {
                            return (
                              !!i.prototype.resume.call(this) &&
                              (!this._tickScheduled &&
                                this.dataIsReady &&
                                ((this._tickScheduled = !0),
                                n.delay(this._tickAndRepeat, [], this)),
                              !0)
                            );
                          }),
                          (o.prototype._tickAndRepeat = function () {
                            (this._tickScheduled = !1),
                              this.isPaused ||
                                this.isFinished ||
                                (this._tick(),
                                this.isFinished ||
                                  (n.delay(this._tickAndRepeat, [], this),
                                  (this._tickScheduled = !0)));
                          }),
                          (o.prototype._tick = function () {
                            if (this.isPaused || this.isFinished) return !1;
                            var t = null,
                              e = Math.min(this.max, this.index + 16384);
                            if (this.index >= this.max) return this.end();
                            switch (this.type) {
                              case "string":
                                t = this.data.substring(this.index, e);
                                break;
                              case "uint8array":
                                t = this.data.subarray(this.index, e);
                                break;
                              case "array":
                              case "nodebuffer":
                                t = this.data.slice(this.index, e);
                            }
                            return (
                              (this.index = e),
                              this.push({
                                data: t,
                                meta: {
                                  percent: this.max
                                    ? (this.index / this.max) * 100
                                    : 0,
                                },
                              })
                            );
                          }),
                          (e.exports = o);
                      },
                      { "../utils": 32, "./GenericWorker": 28 },
                    ],
                    28: [
                      function (t, e, r) {
                        "use strict";
                        function n(t) {
                          (this.name = t || "default"),
                            (this.streamInfo = {}),
                            (this.generatedError = null),
                            (this.extraStreamInfo = {}),
                            (this.isPaused = !0),
                            (this.isFinished = !1),
                            (this.isLocked = !1),
                            (this._listeners = {
                              data: [],
                              end: [],
                              error: [],
                            }),
                            (this.previous = null);
                        }
                        (n.prototype = {
                          push: function (t) {
                            this.emit("data", t);
                          },
                          end: function () {
                            if (this.isFinished) return !1;
                            this.flush();
                            try {
                              this.emit("end"),
                                this.cleanUp(),
                                (this.isFinished = !0);
                            } catch (t) {
                              this.emit("error", t);
                            }
                            return !0;
                          },
                          error: function (t) {
                            return (
                              !this.isFinished &&
                              (this.isPaused
                                ? (this.generatedError = t)
                                : ((this.isFinished = !0),
                                  this.emit("error", t),
                                  this.previous && this.previous.error(t),
                                  this.cleanUp()),
                              !0)
                            );
                          },
                          on: function (t, e) {
                            return this._listeners[t].push(e), this;
                          },
                          cleanUp: function () {
                            (this.streamInfo =
                              this.generatedError =
                              this.extraStreamInfo =
                                null),
                              (this._listeners = []);
                          },
                          emit: function (t, e) {
                            if (this._listeners[t])
                              for (
                                var r = 0;
                                r < this._listeners[t].length;
                                r++
                              )
                                this._listeners[t][r].call(this, e);
                          },
                          pipe: function (t) {
                            return t.registerPrevious(this);
                          },
                          registerPrevious: function (t) {
                            if (this.isLocked)
                              throw new Error(
                                "The stream '" +
                                  this +
                                  "' has already been used."
                              );
                            (this.streamInfo = t.streamInfo),
                              this.mergeStreamInfo(),
                              (this.previous = t);
                            var e = this;
                            return (
                              t.on("data", function (t) {
                                e.processChunk(t);
                              }),
                              t.on("end", function () {
                                e.end();
                              }),
                              t.on("error", function (t) {
                                e.error(t);
                              }),
                              this
                            );
                          },
                          pause: function () {
                            return (
                              !this.isPaused &&
                              !this.isFinished &&
                              ((this.isPaused = !0),
                              this.previous && this.previous.pause(),
                              !0)
                            );
                          },
                          resume: function () {
                            if (!this.isPaused || this.isFinished) return !1;
                            var t = (this.isPaused = !1);
                            return (
                              this.generatedError &&
                                (this.error(this.generatedError), (t = !0)),
                              this.previous && this.previous.resume(),
                              !t
                            );
                          },
                          flush: function () {},
                          processChunk: function (t) {
                            this.push(t);
                          },
                          withStreamInfo: function (t, e) {
                            return (
                              (this.extraStreamInfo[t] = e),
                              this.mergeStreamInfo(),
                              this
                            );
                          },
                          mergeStreamInfo: function () {
                            for (var t in this.extraStreamInfo)
                              this.extraStreamInfo.hasOwnProperty(t) &&
                                (this.streamInfo[t] = this.extraStreamInfo[t]);
                          },
                          lock: function () {
                            if (this.isLocked)
                              throw new Error(
                                "The stream '" +
                                  this +
                                  "' has already been used."
                              );
                            (this.isLocked = !0),
                              this.previous && this.previous.lock();
                          },
                          toString: function () {
                            var t = "Worker " + this.name;
                            return this.previous
                              ? this.previous + " -> " + t
                              : t;
                          },
                        }),
                          (e.exports = n);
                      },
                      {},
                    ],
                    29: [
                      function (t, e, r) {
                        "use strict";
                        var l = t("../utils"),
                          i = t("./ConvertWorker"),
                          o = t("./GenericWorker"),
                          c = t("../base64"),
                          n = t("../support"),
                          a = t("../external"),
                          s = null;
                        if (n.nodestream)
                          try {
                            s = t("../nodejs/NodejsStreamOutputAdapter");
                          } catch (t) {}
                        function u(t, e, r) {
                          var n = e;
                          switch (e) {
                            case "blob":
                            case "arraybuffer":
                              n = "uint8array";
                              break;
                            case "base64":
                              n = "string";
                          }
                          try {
                            (this._internalType = n),
                              (this._outputType = e),
                              (this._mimeType = r),
                              l.checkSupport(n),
                              (this._worker = t.pipe(new i(n))),
                              t.lock();
                          } catch (t) {
                            (this._worker = new o("error")),
                              this._worker.error(t);
                          }
                        }
                        (u.prototype = {
                          accumulate: function (t) {
                            return (
                              (s = this),
                              (u = t),
                              new a.Promise(function (e, r) {
                                var n = [],
                                  i = s._internalType,
                                  o = s._outputType,
                                  a = s._mimeType;
                                s.on("data", function (t, e) {
                                  n.push(t), u && u(e);
                                })
                                  .on("error", function (t) {
                                    (n = []), r(t);
                                  })
                                  .on("end", function () {
                                    try {
                                      var t = (function (t, e, r) {
                                        switch (t) {
                                          case "blob":
                                            return l.newBlob(
                                              l.transformTo("arraybuffer", e),
                                              r
                                            );
                                          case "base64":
                                            return c.encode(e);
                                          default:
                                            return l.transformTo(t, e);
                                        }
                                      })(
                                        o,
                                        (function (t, e) {
                                          for (
                                            var r = 0, n = null, i = 0, o = 0;
                                            o < e.length;
                                            o++
                                          )
                                            i += e[o].length;
                                          switch (t) {
                                            case "string":
                                              return e.join("");
                                            case "array":
                                              return Array.prototype.concat.apply(
                                                [],
                                                e
                                              );
                                            case "uint8array":
                                              for (
                                                n = new Uint8Array(i), o = 0;
                                                o < e.length;
                                                o++
                                              )
                                                n.set(e[o], r),
                                                  (r += e[o].length);
                                              return n;
                                            case "nodebuffer":
                                              return f.concat(e);
                                            default:
                                              throw new Error(
                                                "concat : unsupported type '" +
                                                  t +
                                                  "'"
                                              );
                                          }
                                        })(i, n),
                                        a
                                      );
                                      e(t);
                                    } catch (t) {
                                      r(t);
                                    }
                                    n = [];
                                  })
                                  .resume();
                              })
                            );
                            var s, u;
                          },
                          on: function (t, e) {
                            var r = this;
                            return (
                              "data" === t
                                ? this._worker.on(t, function (t) {
                                    e.call(r, t.data, t.meta);
                                  })
                                : this._worker.on(t, function () {
                                    l.delay(e, arguments, r);
                                  }),
                              this
                            );
                          },
                          resume: function () {
                            return (
                              l.delay(this._worker.resume, [], this._worker),
                              this
                            );
                          },
                          pause: function () {
                            return this._worker.pause(), this;
                          },
                          toNodejsStream: function (t) {
                            if (
                              (l.checkSupport("nodestream"),
                              "nodebuffer" !== this._outputType)
                            )
                              throw new Error(
                                this._outputType +
                                  " is not supported by this method"
                              );
                            return new s(
                              this,
                              { objectMode: "nodebuffer" !== this._outputType },
                              t
                            );
                          },
                        }),
                          (e.exports = u);
                      },
                      {
                        "../base64": 1,
                        "../external": 6,
                        "../nodejs/NodejsStreamOutputAdapter": 13,
                        "../support": 30,
                        "../utils": 32,
                        "./ConvertWorker": 24,
                        "./GenericWorker": 28,
                      },
                    ],
                    30: [
                      function (t, e, r) {
                        "use strict";
                        if (
                          ((r.base64 = !0),
                          (r.array = !0),
                          (r.string = !0),
                          (r.arraybuffer =
                            "undefined" != typeof ArrayBuffer &&
                            "undefined" != typeof Uint8Array),
                          (r.nodebuffer = void 0 !== f),
                          (r.uint8array = "undefined" != typeof Uint8Array),
                          "undefined" == typeof ArrayBuffer)
                        )
                          r.blob = !1;
                        else {
                          var n = new ArrayBuffer(0);
                          try {
                            r.blob =
                              0 ===
                              new Blob([n], { type: "application/zip" }).size;
                          } catch (t) {
                            try {
                              var i = new (self.BlobBuilder ||
                                self.WebKitBlobBuilder ||
                                self.MozBlobBuilder ||
                                self.MSBlobBuilder)();
                              i.append(n),
                                (r.blob =
                                  0 === i.getBlob("application/zip").size);
                            } catch (t) {
                              r.blob = !1;
                            }
                          }
                        }
                        try {
                          r.nodestream = !!t("readable-stream").Readable;
                        } catch (t) {
                          r.nodestream = !1;
                        }
                      },
                      { "readable-stream": 16 },
                    ],
                    31: [
                      function (t, e, i) {
                        "use strict";
                        for (
                          var s = t("./utils"),
                            u = t("./support"),
                            r = t("./nodejsUtils"),
                            n = t("./stream/GenericWorker"),
                            l = new Array(256),
                            o = 0;
                          o < 256;
                          o++
                        )
                          l[o] =
                            252 <= o
                              ? 6
                              : 248 <= o
                              ? 5
                              : 240 <= o
                              ? 4
                              : 224 <= o
                              ? 3
                              : 192 <= o
                              ? 2
                              : 1;
                        function a() {
                          n.call(this, "utf-8 decode"), (this.leftOver = null);
                        }
                        function c() {
                          n.call(this, "utf-8 encode");
                        }
                        (l[254] = l[254] = 1),
                          (i.utf8encode = function (t) {
                            return u.nodebuffer
                              ? r.newBufferFrom(t, "utf-8")
                              : (function (t) {
                                  for (
                                    var e, r, n, i, o = t.length, a = 0, s = 0;
                                    s < o;
                                    s++
                                  )
                                    55296 == (64512 & (r = t.charCodeAt(s))) &&
                                      s + 1 < o &&
                                      56320 ==
                                        (64512 & (n = t.charCodeAt(s + 1))) &&
                                      ((r =
                                        65536 +
                                        ((r - 55296) << 10) +
                                        (n - 56320)),
                                      s++),
                                      (a +=
                                        r < 128
                                          ? 1
                                          : r < 2048
                                          ? 2
                                          : r < 65536
                                          ? 3
                                          : 4);
                                  for (
                                    e = new (u.uint8array ? Uint8Array : Array)(
                                      a
                                    ),
                                      s = i = 0;
                                    i < a;
                                    s++
                                  )
                                    55296 == (64512 & (r = t.charCodeAt(s))) &&
                                      s + 1 < o &&
                                      56320 ==
                                        (64512 & (n = t.charCodeAt(s + 1))) &&
                                      ((r =
                                        65536 +
                                        ((r - 55296) << 10) +
                                        (n - 56320)),
                                      s++),
                                      r < 128
                                        ? (e[i++] = r)
                                        : (r < 2048
                                            ? (e[i++] = 192 | (r >>> 6))
                                            : (r < 65536
                                                ? (e[i++] = 224 | (r >>> 12))
                                                : ((e[i++] = 240 | (r >>> 18)),
                                                  (e[i++] =
                                                    128 | ((r >>> 12) & 63))),
                                              (e[i++] =
                                                128 | ((r >>> 6) & 63))),
                                          (e[i++] = 128 | (63 & r)));
                                  return e;
                                })(t);
                          }),
                          (i.utf8decode = function (t) {
                            return u.nodebuffer
                              ? s.transformTo("nodebuffer", t).toString("utf-8")
                              : (function (t) {
                                  for (
                                    var e,
                                      r,
                                      n,
                                      i = t.length,
                                      o = new Array(2 * i),
                                      a = (e = 0);
                                    a < i;

                                  )
                                    if ((r = t[a++]) < 128) o[e++] = r;
                                    else if (4 < (n = l[r]))
                                      (o[e++] = 65533), (a += n - 1);
                                    else {
                                      for (
                                        r &= 2 === n ? 31 : 3 === n ? 15 : 7;
                                        1 < n && a < i;

                                      )
                                        (r = (r << 6) | (63 & t[a++])), n--;
                                      1 < n
                                        ? (o[e++] = 65533)
                                        : r < 65536
                                        ? (o[e++] = r)
                                        : ((r -= 65536),
                                          (o[e++] = 55296 | ((r >> 10) & 1023)),
                                          (o[e++] = 56320 | (1023 & r)));
                                    }
                                  return (
                                    o.length !== e &&
                                      (o.subarray
                                        ? (o = o.subarray(0, e))
                                        : (o.length = e)),
                                    s.applyFromCharCode(o)
                                  );
                                })(
                                  (t = s.transformTo(
                                    u.uint8array ? "uint8array" : "array",
                                    t
                                  ))
                                );
                          }),
                          s.inherits(a, n),
                          (a.prototype.processChunk = function (t) {
                            var e = s.transformTo(
                              u.uint8array ? "uint8array" : "array",
                              t.data
                            );
                            this.leftOver &&
                              this.leftOver.length &&
                              (u.uint8array
                                ? ((n = e),
                                  (e = new Uint8Array(
                                    n.length + this.leftOver.length
                                  )).set(this.leftOver, 0),
                                  e.set(n, this.leftOver.length))
                                : (e = this.leftOver.concat(e)),
                              (this.leftOver = null));
                            var r = (function (t, e) {
                                for (
                                  var r =
                                    (e =
                                      (e = e || t.length) > t.length
                                        ? t.length
                                        : e) - 1;
                                  0 <= r && 128 == (192 & t[r]);

                                )
                                  r--;
                                return !(r < 0) && 0 !== r && r + l[t[r]] > e
                                  ? r
                                  : e;
                              })(e),
                              n = e;
                            r !== e.length &&
                              (u.uint8array
                                ? ((n = e.subarray(0, r)),
                                  (this.leftOver = e.subarray(r, e.length)))
                                : ((n = e.slice(0, r)),
                                  (this.leftOver = e.slice(r, e.length)))),
                              this.push({
                                data: i.utf8decode(n),
                                meta: t.meta,
                              });
                          }),
                          (a.prototype.flush = function () {
                            this.leftOver &&
                              this.leftOver.length &&
                              (this.push({
                                data: i.utf8decode(this.leftOver),
                                meta: {},
                              }),
                              (this.leftOver = null));
                          }),
                          (i.Utf8DecodeWorker = a),
                          s.inherits(c, n),
                          (c.prototype.processChunk = function (t) {
                            this.push({
                              data: i.utf8encode(t.data),
                              meta: t.meta,
                            });
                          }),
                          (i.Utf8EncodeWorker = c);
                      },
                      {
                        "./nodejsUtils": 14,
                        "./stream/GenericWorker": 28,
                        "./support": 30,
                        "./utils": 32,
                      },
                    ],
                    32: [
                      function (t, e, a) {
                        "use strict";
                        var s = t("./support"),
                          u = t("./base64"),
                          r = t("./nodejsUtils"),
                          n = t("set-immediate-shim"),
                          l = t("./external");
                        function i(t) {
                          return t;
                        }
                        function c(t, e) {
                          for (var r = 0; r < t.length; ++r)
                            e[r] = 255 & t.charCodeAt(r);
                          return e;
                        }
                        a.newBlob = function (e, r) {
                          a.checkSupport("blob");
                          try {
                            return new Blob([e], { type: r });
                          } catch (t) {
                            try {
                              var n = new (self.BlobBuilder ||
                                self.WebKitBlobBuilder ||
                                self.MozBlobBuilder ||
                                self.MSBlobBuilder)();
                              return n.append(e), n.getBlob(r);
                            } catch (t) {
                              throw new Error(
                                "Bug : can't construct the Blob."
                              );
                            }
                          }
                        };
                        var o = {
                          stringifyByChunk: function (t, e, r) {
                            var n = [],
                              i = 0,
                              o = t.length;
                            if (o <= r)
                              return String.fromCharCode.apply(null, t);
                            for (; i < o; )
                              "array" === e || "nodebuffer" === e
                                ? n.push(
                                    String.fromCharCode.apply(
                                      null,
                                      t.slice(i, Math.min(i + r, o))
                                    )
                                  )
                                : n.push(
                                    String.fromCharCode.apply(
                                      null,
                                      t.subarray(i, Math.min(i + r, o))
                                    )
                                  ),
                                (i += r);
                            return n.join("");
                          },
                          stringifyByChar: function (t) {
                            for (var e = "", r = 0; r < t.length; r++)
                              e += String.fromCharCode(t[r]);
                            return e;
                          },
                          applyCanBeUsed: {
                            uint8array: (function () {
                              try {
                                return (
                                  s.uint8array &&
                                  1 ===
                                    String.fromCharCode.apply(
                                      null,
                                      new Uint8Array(1)
                                    ).length
                                );
                              } catch (t) {
                                return !1;
                              }
                            })(),
                            nodebuffer: (function () {
                              try {
                                return (
                                  s.nodebuffer &&
                                  1 ===
                                    String.fromCharCode.apply(
                                      null,
                                      r.allocBuffer(1)
                                    ).length
                                );
                              } catch (t) {
                                return !1;
                              }
                            })(),
                          },
                        };
                        function f(t) {
                          var e = 65536,
                            r = a.getTypeOf(t),
                            n = !0;
                          if (
                            ("uint8array" === r
                              ? (n = o.applyCanBeUsed.uint8array)
                              : "nodebuffer" === r &&
                                (n = o.applyCanBeUsed.nodebuffer),
                            n)
                          )
                            for (; 1 < e; )
                              try {
                                return o.stringifyByChunk(t, r, e);
                              } catch (t) {
                                e = Math.floor(e / 2);
                              }
                          return o.stringifyByChar(t);
                        }
                        function h(t, e) {
                          for (var r = 0; r < t.length; r++) e[r] = t[r];
                          return e;
                        }
                        a.applyFromCharCode = f;
                        var d = {};
                        (d.string = {
                          string: i,
                          array: function (t) {
                            return c(t, new Array(t.length));
                          },
                          arraybuffer: function (t) {
                            return d.string.uint8array(t).buffer;
                          },
                          uint8array: function (t) {
                            return c(t, new Uint8Array(t.length));
                          },
                          nodebuffer: function (t) {
                            return c(t, r.allocBuffer(t.length));
                          },
                        }),
                          (d.array = {
                            string: f,
                            array: i,
                            arraybuffer: function (t) {
                              return new Uint8Array(t).buffer;
                            },
                            uint8array: function (t) {
                              return new Uint8Array(t);
                            },
                            nodebuffer: function (t) {
                              return r.newBufferFrom(t);
                            },
                          }),
                          (d.arraybuffer = {
                            string: function (t) {
                              return f(new Uint8Array(t));
                            },
                            array: function (t) {
                              return h(
                                new Uint8Array(t),
                                new Array(t.byteLength)
                              );
                            },
                            arraybuffer: i,
                            uint8array: function (t) {
                              return new Uint8Array(t);
                            },
                            nodebuffer: function (t) {
                              return r.newBufferFrom(new Uint8Array(t));
                            },
                          }),
                          (d.uint8array = {
                            string: f,
                            array: function (t) {
                              return h(t, new Array(t.length));
                            },
                            arraybuffer: function (t) {
                              return t.buffer;
                            },
                            uint8array: i,
                            nodebuffer: function (t) {
                              return r.newBufferFrom(t);
                            },
                          }),
                          (d.nodebuffer = {
                            string: f,
                            array: function (t) {
                              return h(t, new Array(t.length));
                            },
                            arraybuffer: function (t) {
                              return d.nodebuffer.uint8array(t).buffer;
                            },
                            uint8array: function (t) {
                              return h(t, new Uint8Array(t.length));
                            },
                            nodebuffer: i,
                          }),
                          (a.transformTo = function (t, e) {
                            if (((e = e || ""), !t)) return e;
                            a.checkSupport(t);
                            var r = a.getTypeOf(e);
                            return d[r][t](e);
                          }),
                          (a.getTypeOf = function (t) {
                            return "string" == typeof t
                              ? "string"
                              : "[object Array]" ===
                                Object.prototype.toString.call(t)
                              ? "array"
                              : s.nodebuffer && r.isBuffer(t)
                              ? "nodebuffer"
                              : s.uint8array && t instanceof Uint8Array
                              ? "uint8array"
                              : s.arraybuffer && t instanceof ArrayBuffer
                              ? "arraybuffer"
                              : void 0;
                          }),
                          (a.checkSupport = function (t) {
                            if (!s[t.toLowerCase()])
                              throw new Error(
                                t + " is not supported by this platform"
                              );
                          }),
                          (a.MAX_VALUE_16BITS = 65535),
                          (a.MAX_VALUE_32BITS = -1),
                          (a.pretty = function (t) {
                            for (
                              var e, r = "", n = 0;
                              n < (t || "").length;
                              n++
                            )
                              r +=
                                "\\x" +
                                ((e = t.charCodeAt(n)) < 16 ? "0" : "") +
                                e.toString(16).toUpperCase();
                            return r;
                          }),
                          (a.delay = function (t, e, r) {
                            n(function () {
                              t.apply(r || null, e || []);
                            });
                          }),
                          (a.inherits = function (t, e) {
                            function r() {}
                            (r.prototype = e.prototype),
                              (t.prototype = new r());
                          }),
                          (a.extend = function () {
                            for (
                              var t, e = {}, r = 0;
                              r < arguments.length;
                              r++
                            )
                              for (t in arguments[r])
                                arguments[r].hasOwnProperty(t) &&
                                  void 0 === e[t] &&
                                  (e[t] = arguments[r][t]);
                            return e;
                          }),
                          (a.prepareContent = function (r, t, n, i, o) {
                            return l.Promise.resolve(t)
                              .then(function (n) {
                                return s.blob &&
                                  (n instanceof Blob ||
                                    -1 !==
                                      [
                                        "[object File]",
                                        "[object Blob]",
                                      ].indexOf(
                                        Object.prototype.toString.call(n)
                                      )) &&
                                  "undefined" != typeof FileReader
                                  ? new l.Promise(function (e, r) {
                                      var t = new FileReader();
                                      (t.onload = function (t) {
                                        e(t.target.result);
                                      }),
                                        (t.onerror = function (t) {
                                          r(t.target.error);
                                        }),
                                        t.readAsArrayBuffer(n);
                                    })
                                  : n;
                              })
                              .then(function (t) {
                                var e = a.getTypeOf(t);
                                return e
                                  ? ("arraybuffer" === e
                                      ? (t = a.transformTo("uint8array", t))
                                      : "string" === e &&
                                        (o
                                          ? (t = u.decode(t))
                                          : n &&
                                            !0 !== i &&
                                            (t = c(
                                              (e = t),
                                              new (s.uint8array
                                                ? Uint8Array
                                                : Array)(e.length)
                                            ))),
                                    t)
                                  : l.Promise.reject(
                                      new Error(
                                        "Can't read the data of '" +
                                          r +
                                          "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"
                                      )
                                    );
                              });
                          });
                      },
                      {
                        "./base64": 1,
                        "./external": 6,
                        "./nodejsUtils": 14,
                        "./support": 30,
                        "set-immediate-shim": 54,
                      },
                    ],
                    33: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./reader/readerFor"),
                          i = t("./utils"),
                          o = t("./signature"),
                          a = t("./zipEntry"),
                          s = (t("./utf8"), t("./support"));
                        function u(t) {
                          (this.files = []), (this.loadOptions = t);
                        }
                        (u.prototype = {
                          checkSignature: function (t) {
                            if (!this.reader.readAndCheckSignature(t)) {
                              this.reader.index -= 4;
                              var e = this.reader.readString(4);
                              throw new Error(
                                "Corrupted zip or bug: unexpected signature (" +
                                  i.pretty(e) +
                                  ", expected " +
                                  i.pretty(t) +
                                  ")"
                              );
                            }
                          },
                          isSignature: function (t, e) {
                            var r = this.reader.index;
                            this.reader.setIndex(t);
                            e = this.reader.readString(4) === e;
                            return this.reader.setIndex(r), e;
                          },
                          readBlockEndOfCentral: function () {
                            (this.diskNumber = this.reader.readInt(2)),
                              (this.diskWithCentralDirStart =
                                this.reader.readInt(2)),
                              (this.centralDirRecordsOnThisDisk =
                                this.reader.readInt(2)),
                              (this.centralDirRecords = this.reader.readInt(2)),
                              (this.centralDirSize = this.reader.readInt(4)),
                              (this.centralDirOffset = this.reader.readInt(4)),
                              (this.zipCommentLength = this.reader.readInt(2));
                            var t = this.reader.readData(this.zipCommentLength),
                              e = s.uint8array ? "uint8array" : "array",
                              t = i.transformTo(e, t);
                            this.zipComment =
                              this.loadOptions.decodeFileName(t);
                          },
                          readBlockZip64EndOfCentral: function () {
                            (this.zip64EndOfCentralSize =
                              this.reader.readInt(8)),
                              this.reader.skip(4),
                              (this.diskNumber = this.reader.readInt(4)),
                              (this.diskWithCentralDirStart =
                                this.reader.readInt(4)),
                              (this.centralDirRecordsOnThisDisk =
                                this.reader.readInt(8)),
                              (this.centralDirRecords = this.reader.readInt(8)),
                              (this.centralDirSize = this.reader.readInt(8)),
                              (this.centralDirOffset = this.reader.readInt(8)),
                              (this.zip64ExtensibleData = {});
                            for (
                              var t, e, r, n = this.zip64EndOfCentralSize - 44;
                              0 < n;

                            )
                              (t = this.reader.readInt(2)),
                                (e = this.reader.readInt(4)),
                                (r = this.reader.readData(e)),
                                (this.zip64ExtensibleData[t] = {
                                  id: t,
                                  length: e,
                                  value: r,
                                });
                          },
                          readBlockZip64EndOfCentralLocator: function () {
                            if (
                              ((this.diskWithZip64CentralDirStart =
                                this.reader.readInt(4)),
                              (this.relativeOffsetEndOfZip64CentralDir =
                                this.reader.readInt(8)),
                              (this.disksCount = this.reader.readInt(4)),
                              1 < this.disksCount)
                            )
                              throw new Error(
                                "Multi-volumes zip are not supported"
                              );
                          },
                          readLocalFiles: function () {
                            for (var t, e = 0; e < this.files.length; e++)
                              (t = this.files[e]),
                                this.reader.setIndex(t.localHeaderOffset),
                                this.checkSignature(o.LOCAL_FILE_HEADER),
                                t.readLocalPart(this.reader),
                                t.handleUTF8(),
                                t.processAttributes();
                          },
                          readCentralDir: function () {
                            var t;
                            for (
                              this.reader.setIndex(this.centralDirOffset);
                              this.reader.readAndCheckSignature(
                                o.CENTRAL_FILE_HEADER
                              );

                            )
                              (t = new a(
                                { zip64: this.zip64 },
                                this.loadOptions
                              )).readCentralPart(this.reader),
                                this.files.push(t);
                            if (
                              this.centralDirRecords !== this.files.length &&
                              0 !== this.centralDirRecords &&
                              0 === this.files.length
                            )
                              throw new Error(
                                "Corrupted zip or bug: expected " +
                                  this.centralDirRecords +
                                  " records in central dir, got " +
                                  this.files.length
                              );
                          },
                          readEndOfCentral: function () {
                            var t = this.reader.lastIndexOfSignature(
                              o.CENTRAL_DIRECTORY_END
                            );
                            if (t < 0)
                              throw this.isSignature(0, o.LOCAL_FILE_HEADER)
                                ? new Error(
                                    "Corrupted zip: can't find end of central directory"
                                  )
                                : new Error(
                                    "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
                                  );
                            this.reader.setIndex(t);
                            var e = t;
                            if (
                              (this.checkSignature(o.CENTRAL_DIRECTORY_END),
                              this.readBlockEndOfCentral(),
                              this.diskNumber === i.MAX_VALUE_16BITS ||
                                this.diskWithCentralDirStart ===
                                  i.MAX_VALUE_16BITS ||
                                this.centralDirRecordsOnThisDisk ===
                                  i.MAX_VALUE_16BITS ||
                                this.centralDirRecords === i.MAX_VALUE_16BITS ||
                                this.centralDirSize === i.MAX_VALUE_32BITS ||
                                this.centralDirOffset === i.MAX_VALUE_32BITS)
                            ) {
                              if (
                                ((this.zip64 = !0),
                                (t = this.reader.lastIndexOfSignature(
                                  o.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                                )) < 0)
                              )
                                throw new Error(
                                  "Corrupted zip: can't find the ZIP64 end of central directory locator"
                                );
                              if (
                                (this.reader.setIndex(t),
                                this.checkSignature(
                                  o.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                                ),
                                this.readBlockZip64EndOfCentralLocator(),
                                !this.isSignature(
                                  this.relativeOffsetEndOfZip64CentralDir,
                                  o.ZIP64_CENTRAL_DIRECTORY_END
                                ) &&
                                  ((this.relativeOffsetEndOfZip64CentralDir =
                                    this.reader.lastIndexOfSignature(
                                      o.ZIP64_CENTRAL_DIRECTORY_END
                                    )),
                                  this.relativeOffsetEndOfZip64CentralDir < 0))
                              )
                                throw new Error(
                                  "Corrupted zip: can't find the ZIP64 end of central directory"
                                );
                              this.reader.setIndex(
                                this.relativeOffsetEndOfZip64CentralDir
                              ),
                                this.checkSignature(
                                  o.ZIP64_CENTRAL_DIRECTORY_END
                                ),
                                this.readBlockZip64EndOfCentral();
                            }
                            t = this.centralDirOffset + this.centralDirSize;
                            this.zip64 &&
                              ((t += 20),
                              (t += 12 + this.zip64EndOfCentralSize));
                            t = e - t;
                            if (0 < t)
                              this.isSignature(e, o.CENTRAL_FILE_HEADER) ||
                                (this.reader.zero = t);
                            else if (t < 0)
                              throw new Error(
                                "Corrupted zip: missing " +
                                  Math.abs(t) +
                                  " bytes."
                              );
                          },
                          prepareReader: function (t) {
                            this.reader = n(t);
                          },
                          load: function (t) {
                            this.prepareReader(t),
                              this.readEndOfCentral(),
                              this.readCentralDir(),
                              this.readLocalFiles();
                          },
                        }),
                          (e.exports = u);
                      },
                      {
                        "./reader/readerFor": 22,
                        "./signature": 23,
                        "./support": 30,
                        "./utf8": 31,
                        "./utils": 32,
                        "./zipEntry": 34,
                      },
                    ],
                    34: [
                      function (t, e, r) {
                        "use strict";
                        var n = t("./reader/readerFor"),
                          i = t("./utils"),
                          o = t("./compressedObject"),
                          a = t("./crc32"),
                          s = t("./utf8"),
                          u = t("./compressions"),
                          l = t("./support");
                        function c(t, e) {
                          (this.options = t), (this.loadOptions = e);
                        }
                        (c.prototype = {
                          isEncrypted: function () {
                            return 1 == (1 & this.bitFlag);
                          },
                          useUTF8: function () {
                            return 2048 == (2048 & this.bitFlag);
                          },
                          readLocalPart: function (t) {
                            var e;
                            if (
                              (t.skip(22),
                              (this.fileNameLength = t.readInt(2)),
                              (e = t.readInt(2)),
                              (this.fileName = t.readData(this.fileNameLength)),
                              t.skip(e),
                              -1 === this.compressedSize ||
                                -1 === this.uncompressedSize)
                            )
                              throw new Error(
                                "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
                              );
                            if (
                              null ===
                              (e = (function (t) {
                                for (var e in u)
                                  if (u.hasOwnProperty(e) && u[e].magic === t)
                                    return u[e];
                                return null;
                              })(this.compressionMethod))
                            )
                              throw new Error(
                                "Corrupted zip : compression " +
                                  i.pretty(this.compressionMethod) +
                                  " unknown (inner file : " +
                                  i.transformTo("string", this.fileName) +
                                  ")"
                              );
                            this.decompressed = new o(
                              this.compressedSize,
                              this.uncompressedSize,
                              this.crc32,
                              e,
                              t.readData(this.compressedSize)
                            );
                          },
                          readCentralPart: function (t) {
                            (this.versionMadeBy = t.readInt(2)),
                              t.skip(2),
                              (this.bitFlag = t.readInt(2)),
                              (this.compressionMethod = t.readString(2)),
                              (this.date = t.readDate()),
                              (this.crc32 = t.readInt(4)),
                              (this.compressedSize = t.readInt(4)),
                              (this.uncompressedSize = t.readInt(4));
                            var e = t.readInt(2);
                            if (
                              ((this.extraFieldsLength = t.readInt(2)),
                              (this.fileCommentLength = t.readInt(2)),
                              (this.diskNumberStart = t.readInt(2)),
                              (this.internalFileAttributes = t.readInt(2)),
                              (this.externalFileAttributes = t.readInt(4)),
                              (this.localHeaderOffset = t.readInt(4)),
                              this.isEncrypted())
                            )
                              throw new Error(
                                "Encrypted zip are not supported"
                              );
                            t.skip(e),
                              this.readExtraFields(t),
                              this.parseZIP64ExtraField(t),
                              (this.fileComment = t.readData(
                                this.fileCommentLength
                              ));
                          },
                          processAttributes: function () {
                            (this.unixPermissions = null),
                              (this.dosPermissions = null);
                            var t = this.versionMadeBy >> 8;
                            (this.dir = !!(16 & this.externalFileAttributes)),
                              0 == t &&
                                (this.dosPermissions =
                                  63 & this.externalFileAttributes),
                              3 == t &&
                                (this.unixPermissions =
                                  (this.externalFileAttributes >> 16) & 65535),
                              this.dir ||
                                "/" !== this.fileNameStr.slice(-1) ||
                                (this.dir = !0);
                          },
                          parseZIP64ExtraField: function (t) {
                            var e;
                            this.extraFields[1] &&
                              ((e = n(this.extraFields[1].value)),
                              this.uncompressedSize === i.MAX_VALUE_32BITS &&
                                (this.uncompressedSize = e.readInt(8)),
                              this.compressedSize === i.MAX_VALUE_32BITS &&
                                (this.compressedSize = e.readInt(8)),
                              this.localHeaderOffset === i.MAX_VALUE_32BITS &&
                                (this.localHeaderOffset = e.readInt(8)),
                              this.diskNumberStart === i.MAX_VALUE_32BITS &&
                                (this.diskNumberStart = e.readInt(4)));
                          },
                          readExtraFields: function (t) {
                            var e,
                              r,
                              n,
                              i = t.index + this.extraFieldsLength;
                            for (
                              this.extraFields || (this.extraFields = {});
                              t.index + 4 < i;

                            )
                              (e = t.readInt(2)),
                                (r = t.readInt(2)),
                                (n = t.readData(r)),
                                (this.extraFields[e] = {
                                  id: e,
                                  length: r,
                                  value: n,
                                });
                            t.setIndex(i);
                          },
                          handleUTF8: function () {
                            var t,
                              e,
                              r = l.uint8array ? "uint8array" : "array";
                            this.useUTF8()
                              ? ((this.fileNameStr = s.utf8decode(
                                  this.fileName
                                )),
                                (this.fileCommentStr = s.utf8decode(
                                  this.fileComment
                                )))
                              : (null !== (t = this.findExtraFieldUnicodePath())
                                  ? (this.fileNameStr = t)
                                  : ((e = i.transformTo(r, this.fileName)),
                                    (this.fileNameStr =
                                      this.loadOptions.decodeFileName(e))),
                                null !==
                                (e = this.findExtraFieldUnicodeComment())
                                  ? (this.fileCommentStr = e)
                                  : ((r = i.transformTo(r, this.fileComment)),
                                    (this.fileCommentStr =
                                      this.loadOptions.decodeFileName(r))));
                          },
                          findExtraFieldUnicodePath: function () {
                            var t = this.extraFields[28789];
                            if (t) {
                              var e = n(t.value);
                              return 1 !== e.readInt(1) ||
                                a(this.fileName) !== e.readInt(4)
                                ? null
                                : s.utf8decode(e.readData(t.length - 5));
                            }
                            return null;
                          },
                          findExtraFieldUnicodeComment: function () {
                            var t = this.extraFields[25461];
                            if (t) {
                              var e = n(t.value);
                              return 1 !== e.readInt(1) ||
                                a(this.fileComment) !== e.readInt(4)
                                ? null
                                : s.utf8decode(e.readData(t.length - 5));
                            }
                            return null;
                          },
                        }),
                          (e.exports = c);
                      },
                      {
                        "./compressedObject": 2,
                        "./compressions": 3,
                        "./crc32": 4,
                        "./reader/readerFor": 22,
                        "./support": 30,
                        "./utf8": 31,
                        "./utils": 32,
                      },
                    ],
                    35: [
                      function (t, e, r) {
                        "use strict";
                        function n(t, e, r) {
                          (this.name = t),
                            (this.dir = r.dir),
                            (this.date = r.date),
                            (this.comment = r.comment),
                            (this.unixPermissions = r.unixPermissions),
                            (this.dosPermissions = r.dosPermissions),
                            (this._data = e),
                            (this._dataBinary = r.binary),
                            (this.options = {
                              compression: r.compression,
                              compressionOptions: r.compressionOptions,
                            });
                        }
                        var o = t("./stream/StreamHelper"),
                          i = t("./stream/DataWorker"),
                          a = t("./utf8"),
                          s = t("./compressedObject"),
                          u = t("./stream/GenericWorker");
                        n.prototype = {
                          internalStream: function (t) {
                            var e = null,
                              r = "string";
                            try {
                              if (!t)
                                throw new Error("No output type specified.");
                              var n =
                                "string" === (r = t.toLowerCase()) ||
                                "text" === r;
                              ("binarystring" !== r && "text" !== r) ||
                                (r = "string");
                              var e = this._decompressWorker(),
                                i = !this._dataBinary;
                              i && !n && (e = e.pipe(new a.Utf8EncodeWorker())),
                                !i &&
                                  n &&
                                  (e = e.pipe(new a.Utf8DecodeWorker()));
                            } catch (t) {
                              (e = new u("error")).error(t);
                            }
                            return new o(e, r, "");
                          },
                          async: function (t, e) {
                            return this.internalStream(t).accumulate(e);
                          },
                          nodeStream: function (t, e) {
                            return this.internalStream(
                              t || "nodebuffer"
                            ).toNodejsStream(e);
                          },
                          _compressWorker: function (t, e) {
                            if (
                              this._data instanceof s &&
                              this._data.compression.magic === t.magic
                            )
                              return this._data.getCompressedWorker();
                            var r = this._decompressWorker();
                            return (
                              this._dataBinary ||
                                (r = r.pipe(new a.Utf8EncodeWorker())),
                              s.createWorkerFrom(r, t, e)
                            );
                          },
                          _decompressWorker: function () {
                            return this._data instanceof s
                              ? this._data.getContentWorker()
                              : this._data instanceof u
                              ? this._data
                              : new i(this._data);
                          },
                        };
                        for (
                          var l = [
                              "asText",
                              "asBinary",
                              "asNodeBuffer",
                              "asUint8Array",
                              "asArrayBuffer",
                            ],
                            c = function () {
                              throw new Error(
                                "This method has been removed in JSZip 3.0, please check the upgrade guide."
                              );
                            },
                            f = 0;
                          f < l.length;
                          f++
                        )
                          n.prototype[l[f]] = c;
                        e.exports = n;
                      },
                      {
                        "./compressedObject": 2,
                        "./stream/DataWorker": 27,
                        "./stream/GenericWorker": 28,
                        "./stream/StreamHelper": 29,
                        "./utf8": 31,
                      },
                    ],
                    36: [
                      function (t, l, e) {
                        !function (e) {
                          "use strict";
                          var n,
                            t,
                            r,
                            i,
                            o = e.MutationObserver || e.WebKitMutationObserver,
                            a = o
                              ? ((t = 0),
                                (o = new o(u)),
                                (r = e.document.createTextNode("")),
                                o.observe(r, { characterData: !0 }),
                                function () {
                                  r.data = t = ++t % 2;
                                })
                              : e.setImmediate || void 0 === e.MessageChannel
                              ? "document" in e &&
                                "onreadystatechange" in
                                  e.document.createElement("script")
                                ? function () {
                                    var t = e.document.createElement("script");
                                    (t.onreadystatechange = function () {
                                      u(),
                                        (t.onreadystatechange = null),
                                        t.parentNode.removeChild(t),
                                        (t = null);
                                    }),
                                      e.document.documentElement.appendChild(t);
                                  }
                                : function () {
                                    setTimeout(u, 0);
                                  }
                              : (((i = new e.MessageChannel()).port1.onmessage =
                                  u),
                                function () {
                                  i.port2.postMessage(0);
                                }),
                            s = [];
                          function u() {
                            var t, e;
                            n = !0;
                            for (var r = s.length; r; ) {
                              for (e = s, s = [], t = -1; ++t < r; ) e[t]();
                              r = s.length;
                            }
                            n = !1;
                          }
                          l.exports = function (t) {
                            1 !== s.push(t) || n || a();
                          };
                        }.call(
                          this,
                          void 0 !== r
                            ? r
                            : "undefined" != typeof self
                            ? self
                            : "undefined" != typeof window
                            ? window
                            : {}
                        );
                      },
                      {},
                    ],
                    37: [
                      function (t, e, r) {
                        "use strict";
                        var i = t("immediate");
                        function u() {}
                        var l = {},
                          o = ["REJECTED"],
                          a = ["FULFILLED"],
                          n = ["PENDING"];
                        function s(t) {
                          if ("function" != typeof t)
                            throw new TypeError("resolver must be a function");
                          (this.state = n),
                            (this.queue = []),
                            (this.outcome = void 0),
                            t !== u && d(this, t);
                        }
                        function c(t, e, r) {
                          (this.promise = t),
                            "function" == typeof e &&
                              ((this.onFulfilled = e),
                              (this.callFulfilled = this.otherCallFulfilled)),
                            "function" == typeof r &&
                              ((this.onRejected = r),
                              (this.callRejected = this.otherCallRejected));
                        }
                        function f(e, r, n) {
                          i(function () {
                            var t;
                            try {
                              t = r(n);
                            } catch (t) {
                              return l.reject(e, t);
                            }
                            t === e
                              ? l.reject(
                                  e,
                                  new TypeError(
                                    "Cannot resolve promise with itself"
                                  )
                                )
                              : l.resolve(e, t);
                          });
                        }
                        function h(t) {
                          var e = t && t.then;
                          if (
                            t &&
                            ("object" == typeof t || "function" == typeof t) &&
                            "function" == typeof e
                          )
                            return function () {
                              e.apply(t, arguments);
                            };
                        }
                        function d(e, t) {
                          var r = !1;
                          function n(t) {
                            r || ((r = !0), l.reject(e, t));
                          }
                          function i(t) {
                            r || ((r = !0), l.resolve(e, t));
                          }
                          var o = p(function () {
                            t(i, n);
                          });
                          "error" === o.status && n(o.value);
                        }
                        function p(t, e) {
                          var r = {};
                          try {
                            (r.value = t(e)), (r.status = "success");
                          } catch (t) {
                            (r.status = "error"), (r.value = t);
                          }
                          return r;
                        }
                        ((e.exports = s).prototype.finally = function (e) {
                          if ("function" != typeof e) return this;
                          var r = this.constructor;
                          return this.then(
                            function (t) {
                              return r.resolve(e()).then(function () {
                                return t;
                              });
                            },
                            function (t) {
                              return r.resolve(e()).then(function () {
                                throw t;
                              });
                            }
                          );
                        }),
                          (s.prototype.catch = function (t) {
                            return this.then(null, t);
                          }),
                          (s.prototype.then = function (t, e) {
                            if (
                              ("function" != typeof t && this.state === a) ||
                              ("function" != typeof e && this.state === o)
                            )
                              return this;
                            var r = new this.constructor(u);
                            return (
                              this.state !== n
                                ? f(r, this.state === a ? t : e, this.outcome)
                                : this.queue.push(new c(r, t, e)),
                              r
                            );
                          }),
                          (c.prototype.callFulfilled = function (t) {
                            l.resolve(this.promise, t);
                          }),
                          (c.prototype.otherCallFulfilled = function (t) {
                            f(this.promise, this.onFulfilled, t);
                          }),
                          (c.prototype.callRejected = function (t) {
                            l.reject(this.promise, t);
                          }),
                          (c.prototype.otherCallRejected = function (t) {
                            f(this.promise, this.onRejected, t);
                          }),
                          (l.resolve = function (t, e) {
                            var r = p(h, e);
                            if ("error" === r.status)
                              return l.reject(t, r.value);
                            r = r.value;
                            if (r) d(t, r);
                            else {
                              (t.state = a), (t.outcome = e);
                              for (var n = -1, i = t.queue.length; ++n < i; )
                                t.queue[n].callFulfilled(e);
                            }
                            return t;
                          }),
                          (l.reject = function (t, e) {
                            (t.state = o), (t.outcome = e);
                            for (var r = -1, n = t.queue.length; ++r < n; )
                              t.queue[r].callRejected(e);
                            return t;
                          }),
                          (s.resolve = function (t) {
                            return t instanceof this
                              ? t
                              : l.resolve(new this(u), t);
                          }),
                          (s.reject = function (t) {
                            var e = new this(u);
                            return l.reject(e, t);
                          }),
                          (s.all = function (t) {
                            var r = this;
                            if (
                              "[object Array]" !==
                              Object.prototype.toString.call(t)
                            )
                              return this.reject(
                                new TypeError("must be an array")
                              );
                            var n = t.length,
                              i = !1;
                            if (!n) return this.resolve([]);
                            for (
                              var o = new Array(n),
                                a = 0,
                                e = -1,
                                s = new this(u);
                              ++e < n;

                            )
                              !(function (t, e) {
                                r.resolve(t).then(
                                  function (t) {
                                    (o[e] = t),
                                      ++a !== n ||
                                        i ||
                                        ((i = !0), l.resolve(s, o));
                                  },
                                  function (t) {
                                    i || ((i = !0), l.reject(s, t));
                                  }
                                );
                              })(t[e], e);
                            return s;
                          }),
                          (s.race = function (t) {
                            if (
                              "[object Array]" !==
                              Object.prototype.toString.call(t)
                            )
                              return this.reject(
                                new TypeError("must be an array")
                              );
                            var e = t.length,
                              r = !1;
                            if (!e) return this.resolve([]);
                            for (var n, i = -1, o = new this(u); ++i < e; )
                              (n = t[i]),
                                this.resolve(n).then(
                                  function (t) {
                                    r || ((r = !0), l.resolve(o, t));
                                  },
                                  function (t) {
                                    r || ((r = !0), l.reject(o, t));
                                  }
                                );
                            return o;
                          });
                      },
                      { immediate: 36 },
                    ],
                    38: [
                      function (t, e, r) {
                        "use strict";
                        var n = {};
                        (0, t("./lib/utils/common").assign)(
                          n,
                          t("./lib/deflate"),
                          t("./lib/inflate"),
                          t("./lib/zlib/constants")
                        ),
                          (e.exports = n);
                      },
                      {
                        "./lib/deflate": 39,
                        "./lib/inflate": 40,
                        "./lib/utils/common": 41,
                        "./lib/zlib/constants": 44,
                      },
                    ],
                    39: [
                      function (t, e, r) {
                        "use strict";
                        var a = t("./zlib/deflate"),
                          s = t("./utils/common"),
                          u = t("./utils/strings"),
                          n = t("./zlib/messages"),
                          i = t("./zlib/zstream"),
                          l = Object.prototype.toString;
                        function o(t) {
                          if (!(this instanceof o)) return new o(t);
                          this.options = s.assign(
                            {
                              level: -1,
                              method: 8,
                              chunkSize: 16384,
                              windowBits: 15,
                              memLevel: 8,
                              strategy: 0,
                              to: "",
                            },
                            t || {}
                          );
                          var e = this.options;
                          e.raw && 0 < e.windowBits
                            ? (e.windowBits = -e.windowBits)
                            : e.gzip &&
                              0 < e.windowBits &&
                              e.windowBits < 16 &&
                              (e.windowBits += 16),
                            (this.err = 0),
                            (this.msg = ""),
                            (this.ended = !1),
                            (this.chunks = []),
                            (this.strm = new i()),
                            (this.strm.avail_out = 0);
                          t = a.deflateInit2(
                            this.strm,
                            e.level,
                            e.method,
                            e.windowBits,
                            e.memLevel,
                            e.strategy
                          );
                          if (0 !== t) throw new Error(n[t]);
                          if (
                            (e.header &&
                              a.deflateSetHeader(this.strm, e.header),
                            e.dictionary)
                          ) {
                            e =
                              "string" == typeof e.dictionary
                                ? u.string2buf(e.dictionary)
                                : "[object ArrayBuffer]" ===
                                  l.call(e.dictionary)
                                ? new Uint8Array(e.dictionary)
                                : e.dictionary;
                            if (
                              0 !== (t = a.deflateSetDictionary(this.strm, e))
                            )
                              throw new Error(n[t]);
                            this._dict_set = !0;
                          }
                        }
                        function c(t, e) {
                          e = new o(e);
                          if ((e.push(t, !0), e.err)) throw e.msg || n[e.err];
                          return e.result;
                        }
                        (o.prototype.push = function (t, e) {
                          var r,
                            n,
                            i = this.strm,
                            o = this.options.chunkSize;
                          if (this.ended) return !1;
                          (n = e === ~~e ? e : !0 === e ? 4 : 0),
                            "string" == typeof t
                              ? (i.input = u.string2buf(t))
                              : "[object ArrayBuffer]" === l.call(t)
                              ? (i.input = new Uint8Array(t))
                              : (i.input = t),
                            (i.next_in = 0),
                            (i.avail_in = i.input.length);
                          do {
                            if (
                              (0 === i.avail_out &&
                                ((i.output = new s.Buf8(o)),
                                (i.next_out = 0),
                                (i.avail_out = o)),
                              1 !== (r = a.deflate(i, n)) && 0 !== r)
                            )
                              return this.onEnd(r), !(this.ended = !0);
                          } while (
                            ((0 !== i.avail_out &&
                              (0 !== i.avail_in || (4 !== n && 2 !== n))) ||
                              ("string" === this.options.to
                                ? this.onData(
                                    u.buf2binstring(
                                      s.shrinkBuf(i.output, i.next_out)
                                    )
                                  )
                                : this.onData(
                                    s.shrinkBuf(i.output, i.next_out)
                                  )),
                            (0 < i.avail_in || 0 === i.avail_out) && 1 !== r)
                          );
                          return 4 === n
                            ? ((r = a.deflateEnd(this.strm)),
                              this.onEnd(r),
                              (this.ended = !0),
                              0 === r)
                            : 2 !== n || (this.onEnd(0), !(i.avail_out = 0));
                        }),
                          (o.prototype.onData = function (t) {
                            this.chunks.push(t);
                          }),
                          (o.prototype.onEnd = function (t) {
                            0 === t &&
                              ("string" === this.options.to
                                ? (this.result = this.chunks.join(""))
                                : (this.result = s.flattenChunks(this.chunks))),
                              (this.chunks = []),
                              (this.err = t),
                              (this.msg = this.strm.msg);
                          }),
                          (r.Deflate = o),
                          (r.deflate = c),
                          (r.deflateRaw = function (t, e) {
                            return ((e = e || {}).raw = !0), c(t, e);
                          }),
                          (r.gzip = function (t, e) {
                            return ((e = e || {}).gzip = !0), c(t, e);
                          });
                      },
                      {
                        "./utils/common": 41,
                        "./utils/strings": 42,
                        "./zlib/deflate": 46,
                        "./zlib/messages": 51,
                        "./zlib/zstream": 53,
                      },
                    ],
                    40: [
                      function (t, e, r) {
                        "use strict";
                        var f = t("./zlib/inflate"),
                          h = t("./utils/common"),
                          d = t("./utils/strings"),
                          p = t("./zlib/constants"),
                          n = t("./zlib/messages"),
                          i = t("./zlib/zstream"),
                          o = t("./zlib/gzheader"),
                          _ = Object.prototype.toString;
                        function a(t) {
                          if (!(this instanceof a)) return new a(t);
                          this.options = h.assign(
                            { chunkSize: 16384, windowBits: 0, to: "" },
                            t || {}
                          );
                          var e = this.options;
                          e.raw &&
                            0 <= e.windowBits &&
                            e.windowBits < 16 &&
                            ((e.windowBits = -e.windowBits),
                            0 === e.windowBits && (e.windowBits = -15)),
                            !(0 <= e.windowBits && e.windowBits < 16) ||
                              (t && t.windowBits) ||
                              (e.windowBits += 32),
                            15 < e.windowBits &&
                              e.windowBits < 48 &&
                              0 == (15 & e.windowBits) &&
                              (e.windowBits |= 15),
                            (this.err = 0),
                            (this.msg = ""),
                            (this.ended = !1),
                            (this.chunks = []),
                            (this.strm = new i()),
                            (this.strm.avail_out = 0);
                          e = f.inflateInit2(this.strm, e.windowBits);
                          if (e !== p.Z_OK) throw new Error(n[e]);
                          (this.header = new o()),
                            f.inflateGetHeader(this.strm, this.header);
                        }
                        function s(t, e) {
                          e = new a(e);
                          if ((e.push(t, !0), e.err)) throw e.msg || n[e.err];
                          return e.result;
                        }
                        (a.prototype.push = function (t, e) {
                          var r,
                            n,
                            i,
                            o,
                            a,
                            s = this.strm,
                            u = this.options.chunkSize,
                            l = this.options.dictionary,
                            c = !1;
                          if (this.ended) return !1;
                          (n =
                            e === ~~e
                              ? e
                              : !0 === e
                              ? p.Z_FINISH
                              : p.Z_NO_FLUSH),
                            "string" == typeof t
                              ? (s.input = d.binstring2buf(t))
                              : "[object ArrayBuffer]" === _.call(t)
                              ? (s.input = new Uint8Array(t))
                              : (s.input = t),
                            (s.next_in = 0),
                            (s.avail_in = s.input.length);
                          do {
                            if (
                              (0 === s.avail_out &&
                                ((s.output = new h.Buf8(u)),
                                (s.next_out = 0),
                                (s.avail_out = u)),
                              (r = f.inflate(s, p.Z_NO_FLUSH)) ===
                                p.Z_NEED_DICT &&
                                l &&
                                ((a =
                                  "string" == typeof l
                                    ? d.string2buf(l)
                                    : "[object ArrayBuffer]" === _.call(l)
                                    ? new Uint8Array(l)
                                    : l),
                                (r = f.inflateSetDictionary(this.strm, a))),
                              r === p.Z_BUF_ERROR &&
                                !0 === c &&
                                ((r = p.Z_OK), (c = !1)),
                              r !== p.Z_STREAM_END && r !== p.Z_OK)
                            )
                              return this.onEnd(r), !(this.ended = !0);
                          } while (
                            (s.next_out &&
                              ((0 !== s.avail_out &&
                                r !== p.Z_STREAM_END &&
                                (0 !== s.avail_in ||
                                  (n !== p.Z_FINISH &&
                                    n !== p.Z_SYNC_FLUSH))) ||
                                ("string" === this.options.to
                                  ? ((i = d.utf8border(s.output, s.next_out)),
                                    (o = s.next_out - i),
                                    (a = d.buf2string(s.output, i)),
                                    (s.next_out = o),
                                    (s.avail_out = u - o),
                                    o &&
                                      h.arraySet(s.output, s.output, i, o, 0),
                                    this.onData(a))
                                  : this.onData(
                                      h.shrinkBuf(s.output, s.next_out)
                                    ))),
                            0 === s.avail_in && 0 === s.avail_out && (c = !0),
                            (0 < s.avail_in || 0 === s.avail_out) &&
                              r !== p.Z_STREAM_END)
                          );
                          return (n = r === p.Z_STREAM_END ? p.Z_FINISH : n) ===
                            p.Z_FINISH
                            ? ((r = f.inflateEnd(this.strm)),
                              this.onEnd(r),
                              (this.ended = !0),
                              r === p.Z_OK)
                            : n !== p.Z_SYNC_FLUSH ||
                                (this.onEnd(p.Z_OK), !(s.avail_out = 0));
                        }),
                          (a.prototype.onData = function (t) {
                            this.chunks.push(t);
                          }),
                          (a.prototype.onEnd = function (t) {
                            t === p.Z_OK &&
                              ("string" === this.options.to
                                ? (this.result = this.chunks.join(""))
                                : (this.result = h.flattenChunks(this.chunks))),
                              (this.chunks = []),
                              (this.err = t),
                              (this.msg = this.strm.msg);
                          }),
                          (r.Inflate = a),
                          (r.inflate = s),
                          (r.inflateRaw = function (t, e) {
                            return ((e = e || {}).raw = !0), s(t, e);
                          }),
                          (r.ungzip = s);
                      },
                      {
                        "./utils/common": 41,
                        "./utils/strings": 42,
                        "./zlib/constants": 44,
                        "./zlib/gzheader": 47,
                        "./zlib/inflate": 49,
                        "./zlib/messages": 51,
                        "./zlib/zstream": 53,
                      },
                    ],
                    41: [
                      function (t, e, r) {
                        "use strict";
                        var n =
                          "undefined" != typeof Uint8Array &&
                          "undefined" != typeof Uint16Array &&
                          "undefined" != typeof Int32Array;
                        (r.assign = function (t) {
                          for (
                            var e = Array.prototype.slice.call(arguments, 1);
                            e.length;

                          ) {
                            var r = e.shift();
                            if (r) {
                              if ("object" != typeof r)
                                throw new TypeError(r + "must be non-object");
                              for (var n in r)
                                r.hasOwnProperty(n) && (t[n] = r[n]);
                            }
                          }
                          return t;
                        }),
                          (r.shrinkBuf = function (t, e) {
                            return t.length === e
                              ? t
                              : t.subarray
                              ? t.subarray(0, e)
                              : ((t.length = e), t);
                          });
                        var i = {
                            arraySet: function (t, e, r, n, i) {
                              if (e.subarray && t.subarray)
                                t.set(e.subarray(r, r + n), i);
                              else
                                for (var o = 0; o < n; o++) t[i + o] = e[r + o];
                            },
                            flattenChunks: function (t) {
                              for (
                                var e, r, n, i, o = (e = 0), a = t.length;
                                o < a;
                                o++
                              )
                                e += t[o].length;
                              for (
                                i = new Uint8Array(e), o = r = 0, a = t.length;
                                o < a;
                                o++
                              )
                                (n = t[o]), i.set(n, r), (r += n.length);
                              return i;
                            },
                          },
                          o = {
                            arraySet: function (t, e, r, n, i) {
                              for (var o = 0; o < n; o++) t[i + o] = e[r + o];
                            },
                            flattenChunks: function (t) {
                              return [].concat.apply([], t);
                            },
                          };
                        (r.setTyped = function (t) {
                          t
                            ? ((r.Buf8 = Uint8Array),
                              (r.Buf16 = Uint16Array),
                              (r.Buf32 = Int32Array),
                              r.assign(r, i))
                            : ((r.Buf8 = Array),
                              (r.Buf16 = Array),
                              (r.Buf32 = Array),
                              r.assign(r, o));
                        }),
                          r.setTyped(n);
                      },
                      {},
                    ],
                    42: [
                      function (t, e, r) {
                        "use strict";
                        var u = t("./common"),
                          i = !0,
                          o = !0;
                        try {
                          String.fromCharCode.apply(null, [0]);
                        } catch (t) {
                          i = !1;
                        }
                        try {
                          String.fromCharCode.apply(null, new Uint8Array(1));
                        } catch (t) {
                          o = !1;
                        }
                        for (var l = new u.Buf8(256), n = 0; n < 256; n++)
                          l[n] =
                            252 <= n
                              ? 6
                              : 248 <= n
                              ? 5
                              : 240 <= n
                              ? 4
                              : 224 <= n
                              ? 3
                              : 192 <= n
                              ? 2
                              : 1;
                        function c(t, e) {
                          if (
                            e < 65537 &&
                            ((t.subarray && o) || (!t.subarray && i))
                          )
                            return String.fromCharCode.apply(
                              null,
                              u.shrinkBuf(t, e)
                            );
                          for (var r = "", n = 0; n < e; n++)
                            r += String.fromCharCode(t[n]);
                          return r;
                        }
                        (l[254] = l[254] = 1),
                          (r.string2buf = function (t) {
                            for (
                              var e, r, n, i, o = t.length, a = 0, s = 0;
                              s < o;
                              s++
                            )
                              55296 == (64512 & (r = t.charCodeAt(s))) &&
                                s + 1 < o &&
                                56320 == (64512 & (n = t.charCodeAt(s + 1))) &&
                                ((r =
                                  65536 + ((r - 55296) << 10) + (n - 56320)),
                                s++),
                                (a +=
                                  r < 128
                                    ? 1
                                    : r < 2048
                                    ? 2
                                    : r < 65536
                                    ? 3
                                    : 4);
                            for (e = new u.Buf8(a), s = i = 0; i < a; s++)
                              55296 == (64512 & (r = t.charCodeAt(s))) &&
                                s + 1 < o &&
                                56320 == (64512 & (n = t.charCodeAt(s + 1))) &&
                                ((r =
                                  65536 + ((r - 55296) << 10) + (n - 56320)),
                                s++),
                                r < 128
                                  ? (e[i++] = r)
                                  : (r < 2048
                                      ? (e[i++] = 192 | (r >>> 6))
                                      : (r < 65536
                                          ? (e[i++] = 224 | (r >>> 12))
                                          : ((e[i++] = 240 | (r >>> 18)),
                                            (e[i++] = 128 | ((r >>> 12) & 63))),
                                        (e[i++] = 128 | ((r >>> 6) & 63))),
                                    (e[i++] = 128 | (63 & r)));
                            return e;
                          }),
                          (r.buf2binstring = function (t) {
                            return c(t, t.length);
                          }),
                          (r.binstring2buf = function (t) {
                            for (
                              var e = new u.Buf8(t.length), r = 0, n = e.length;
                              r < n;
                              r++
                            )
                              e[r] = t.charCodeAt(r);
                            return e;
                          }),
                          (r.buf2string = function (t, e) {
                            for (
                              var r,
                                n,
                                i,
                                o = e || t.length,
                                a = new Array(2 * o),
                                s = (r = 0);
                              s < o;

                            )
                              if ((n = t[s++]) < 128) a[r++] = n;
                              else if (4 < (i = l[n]))
                                (a[r++] = 65533), (s += i - 1);
                              else {
                                for (
                                  n &= 2 === i ? 31 : 3 === i ? 15 : 7;
                                  1 < i && s < o;

                                )
                                  (n = (n << 6) | (63 & t[s++])), i--;
                                1 < i
                                  ? (a[r++] = 65533)
                                  : n < 65536
                                  ? (a[r++] = n)
                                  : ((n -= 65536),
                                    (a[r++] = 55296 | ((n >> 10) & 1023)),
                                    (a[r++] = 56320 | (1023 & n)));
                              }
                            return c(a, r);
                          }),
                          (r.utf8border = function (t, e) {
                            for (
                              var r =
                                (e =
                                  (e = e || t.length) > t.length
                                    ? t.length
                                    : e) - 1;
                              0 <= r && 128 == (192 & t[r]);

                            )
                              r--;
                            return !(r < 0) && 0 !== r && r + l[t[r]] > e
                              ? r
                              : e;
                          });
                      },
                      { "./common": 41 },
                    ],
                    43: [
                      function (t, e, r) {
                        "use strict";
                        e.exports = function (t, e, r, n) {
                          for (
                            var i = (65535 & t) | 0,
                              o = ((t >>> 16) & 65535) | 0,
                              a = 0;
                            0 !== r;

                          ) {
                            for (
                              r -= a = 2e3 < r ? 2e3 : r;
                              (o = (o + (i = (i + e[n++]) | 0)) | 0), --a;

                            );
                            (i %= 65521), (o %= 65521);
                          }
                          return i | (o << 16) | 0;
                        };
                      },
                      {},
                    ],
                    44: [
                      function (t, e, r) {
                        "use strict";
                        e.exports = {
                          Z_NO_FLUSH: 0,
                          Z_PARTIAL_FLUSH: 1,
                          Z_SYNC_FLUSH: 2,
                          Z_FULL_FLUSH: 3,
                          Z_FINISH: 4,
                          Z_BLOCK: 5,
                          Z_TREES: 6,
                          Z_OK: 0,
                          Z_STREAM_END: 1,
                          Z_NEED_DICT: 2,
                          Z_ERRNO: -1,
                          Z_STREAM_ERROR: -2,
                          Z_DATA_ERROR: -3,
                          Z_BUF_ERROR: -5,
                          Z_NO_COMPRESSION: 0,
                          Z_BEST_SPEED: 1,
                          Z_BEST_COMPRESSION: 9,
                          Z_DEFAULT_COMPRESSION: -1,
                          Z_FILTERED: 1,
                          Z_HUFFMAN_ONLY: 2,
                          Z_RLE: 3,
                          Z_FIXED: 4,
                          Z_DEFAULT_STRATEGY: 0,
                          Z_BINARY: 0,
                          Z_TEXT: 1,
                          Z_UNKNOWN: 2,
                          Z_DEFLATED: 8,
                        };
                      },
                      {},
                    ],
                    45: [
                      function (t, e, r) {
                        "use strict";
                        var s = (function () {
                          for (var t = [], e = 0; e < 256; e++) {
                            for (var r = e, n = 0; n < 8; n++)
                              r = 1 & r ? 3988292384 ^ (r >>> 1) : r >>> 1;
                            t[e] = r;
                          }
                          return t;
                        })();
                        e.exports = function (t, e, r, n) {
                          var i = s,
                            o = n + r;
                          t ^= -1;
                          for (var a = n; a < o; a++)
                            t = (t >>> 8) ^ i[255 & (t ^ e[a])];
                          return -1 ^ t;
                        };
                      },
                      {},
                    ],
                    46: [
                      function (t, e, r) {
                        "use strict";
                        var s,
                          f = t("../utils/common"),
                          u = t("./trees"),
                          h = t("./adler32"),
                          d = t("./crc32"),
                          n = t("./messages"),
                          l = 0,
                          c = 0,
                          p = -2,
                          i = 2,
                          _ = 8,
                          o = 286,
                          a = 30,
                          m = 19,
                          y = 2 * o + 1,
                          g = 15,
                          b = 3,
                          w = 258,
                          v = w + b + 1,
                          S = 42,
                          C = 113;
                        function I(t, e) {
                          return (t.msg = n[e]), e;
                        }
                        function O(t) {
                          return (t << 1) - (4 < t ? 9 : 0);
                        }
                        function E(t) {
                          for (var e = t.length; 0 <= --e; ) t[e] = 0;
                        }
                        function P(t) {
                          var e = t.state,
                            r = e.pending;
                          0 !== (r = r > t.avail_out ? t.avail_out : r) &&
                            (f.arraySet(
                              t.output,
                              e.pending_buf,
                              e.pending_out,
                              r,
                              t.next_out
                            ),
                            (t.next_out += r),
                            (e.pending_out += r),
                            (t.total_out += r),
                            (t.avail_out -= r),
                            (e.pending -= r),
                            0 === e.pending && (e.pending_out = 0));
                        }
                        function k(t, e) {
                          u._tr_flush_block(
                            t,
                            0 <= t.block_start ? t.block_start : -1,
                            t.strstart - t.block_start,
                            e
                          ),
                            (t.block_start = t.strstart),
                            P(t.strm);
                        }
                        function x(t, e) {
                          t.pending_buf[t.pending++] = e;
                        }
                        function B(t, e) {
                          (t.pending_buf[t.pending++] = (e >>> 8) & 255),
                            (t.pending_buf[t.pending++] = 255 & e);
                        }
                        function T(t, e) {
                          var r,
                            n,
                            i = t.max_chain_length,
                            o = t.strstart,
                            a = t.prev_length,
                            s = t.nice_match,
                            u =
                              t.strstart > t.w_size - v
                                ? t.strstart - (t.w_size - v)
                                : 0,
                            l = t.window,
                            c = t.w_mask,
                            f = t.prev,
                            h = t.strstart + w,
                            d = l[o + a - 1],
                            p = l[o + a];
                          t.prev_length >= t.good_match && (i >>= 2),
                            s > t.lookahead && (s = t.lookahead);
                          do {
                            if (
                              l[(r = e) + a] === p &&
                              l[r + a - 1] === d &&
                              l[r] === l[o] &&
                              l[++r] === l[o + 1]
                            ) {
                              for (
                                o += 2, r++;
                                l[++o] === l[++r] &&
                                l[++o] === l[++r] &&
                                l[++o] === l[++r] &&
                                l[++o] === l[++r] &&
                                l[++o] === l[++r] &&
                                l[++o] === l[++r] &&
                                l[++o] === l[++r] &&
                                l[++o] === l[++r] &&
                                o < h;

                              );
                              if (((n = w - (h - o)), (o = h - w), a < n)) {
                                if (((t.match_start = e), s <= (a = n))) break;
                                (d = l[o + a - 1]), (p = l[o + a]);
                              }
                            }
                          } while ((e = f[e & c]) > u && 0 != --i);
                          return a <= t.lookahead ? a : t.lookahead;
                        }
                        function A(t) {
                          var e,
                            r,
                            n,
                            i,
                            o,
                            a,
                            s,
                            u,
                            l,
                            c = t.w_size;
                          do {
                            if (
                              ((u = t.window_size - t.lookahead - t.strstart),
                              t.strstart >= c + (c - v))
                            ) {
                              for (
                                f.arraySet(t.window, t.window, c, c, 0),
                                  t.match_start -= c,
                                  t.strstart -= c,
                                  t.block_start -= c,
                                  e = r = t.hash_size;
                                (n = t.head[--e]),
                                  (t.head[e] = c <= n ? n - c : 0),
                                  --r;

                              );
                              for (
                                e = r = c;
                                (n = t.prev[--e]),
                                  (t.prev[e] = c <= n ? n - c : 0),
                                  --r;

                              );
                              u += c;
                            }
                            if (0 === t.strm.avail_in) break;
                            if (
                              ((o = t.strm),
                              (a = t.window),
                              (s = t.strstart + t.lookahead),
                              (l = void 0),
                              (r =
                                0 === (l = (u = u) < (l = o.avail_in) ? u : l)
                                  ? 0
                                  : ((o.avail_in -= l),
                                    f.arraySet(a, o.input, o.next_in, l, s),
                                    1 === o.state.wrap
                                      ? (o.adler = h(o.adler, a, l, s))
                                      : 2 === o.state.wrap &&
                                        (o.adler = d(o.adler, a, l, s)),
                                    (o.next_in += l),
                                    (o.total_in += l),
                                    l)),
                              (t.lookahead += r),
                              t.lookahead + t.insert >= b)
                            )
                              for (
                                i = t.strstart - t.insert,
                                  t.ins_h = t.window[i],
                                  t.ins_h =
                                    ((t.ins_h << t.hash_shift) ^
                                      t.window[i + 1]) &
                                    t.hash_mask;
                                t.insert &&
                                ((t.ins_h =
                                  ((t.ins_h << t.hash_shift) ^
                                    t.window[i + b - 1]) &
                                  t.hash_mask),
                                (t.prev[i & t.w_mask] = t.head[t.ins_h]),
                                (t.head[t.ins_h] = i),
                                i++,
                                t.insert--,
                                !(t.lookahead + t.insert < b));

                              );
                          } while (t.lookahead < v && 0 !== t.strm.avail_in);
                        }
                        function D(t, e) {
                          for (var r, n; ; ) {
                            if (t.lookahead < v) {
                              if ((A(t), t.lookahead < v && e === l)) return 1;
                              if (0 === t.lookahead) break;
                            }
                            if (
                              ((r = 0),
                              t.lookahead >= b &&
                                ((t.ins_h =
                                  ((t.ins_h << t.hash_shift) ^
                                    t.window[t.strstart + b - 1]) &
                                  t.hash_mask),
                                (r = t.prev[t.strstart & t.w_mask] =
                                  t.head[t.ins_h]),
                                (t.head[t.ins_h] = t.strstart)),
                              0 !== r &&
                                t.strstart - r <= t.w_size - v &&
                                (t.match_length = T(t, r)),
                              t.match_length >= b)
                            )
                              if (
                                ((n = u._tr_tally(
                                  t,
                                  t.strstart - t.match_start,
                                  t.match_length - b
                                )),
                                (t.lookahead -= t.match_length),
                                t.match_length <= t.max_lazy_match &&
                                  t.lookahead >= b)
                              ) {
                                for (
                                  t.match_length--;
                                  t.strstart++,
                                    (t.ins_h =
                                      ((t.ins_h << t.hash_shift) ^
                                        t.window[t.strstart + b - 1]) &
                                      t.hash_mask),
                                    (r = t.prev[t.strstart & t.w_mask] =
                                      t.head[t.ins_h]),
                                    (t.head[t.ins_h] = t.strstart),
                                    0 != --t.match_length;

                                );
                                t.strstart++;
                              } else
                                (t.strstart += t.match_length),
                                  (t.match_length = 0),
                                  (t.ins_h = t.window[t.strstart]),
                                  (t.ins_h =
                                    ((t.ins_h << t.hash_shift) ^
                                      t.window[t.strstart + 1]) &
                                    t.hash_mask);
                            else
                              (n = u._tr_tally(t, 0, t.window[t.strstart])),
                                t.lookahead--,
                                t.strstart++;
                            if (n && (k(t, !1), 0 === t.strm.avail_out))
                              return 1;
                          }
                          return (
                            (t.insert =
                              t.strstart < b - 1 ? t.strstart : b - 1),
                            4 === e
                              ? (k(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                              : t.last_lit && (k(t, !1), 0 === t.strm.avail_out)
                              ? 1
                              : 2
                          );
                        }
                        function M(t, e) {
                          for (var r, n, i; ; ) {
                            if (t.lookahead < v) {
                              if ((A(t), t.lookahead < v && e === l)) return 1;
                              if (0 === t.lookahead) break;
                            }
                            if (
                              ((r = 0),
                              t.lookahead >= b &&
                                ((t.ins_h =
                                  ((t.ins_h << t.hash_shift) ^
                                    t.window[t.strstart + b - 1]) &
                                  t.hash_mask),
                                (r = t.prev[t.strstart & t.w_mask] =
                                  t.head[t.ins_h]),
                                (t.head[t.ins_h] = t.strstart)),
                              (t.prev_length = t.match_length),
                              (t.prev_match = t.match_start),
                              (t.match_length = b - 1),
                              0 !== r &&
                                t.prev_length < t.max_lazy_match &&
                                t.strstart - r <= t.w_size - v &&
                                ((t.match_length = T(t, r)),
                                t.match_length <= 5 &&
                                  (1 === t.strategy ||
                                    (t.match_length === b &&
                                      4096 < t.strstart - t.match_start)) &&
                                  (t.match_length = b - 1)),
                              t.prev_length >= b &&
                                t.match_length <= t.prev_length)
                            ) {
                              for (
                                i = t.strstart + t.lookahead - b,
                                  n = u._tr_tally(
                                    t,
                                    t.strstart - 1 - t.prev_match,
                                    t.prev_length - b
                                  ),
                                  t.lookahead -= t.prev_length - 1,
                                  t.prev_length -= 2;
                                ++t.strstart <= i &&
                                  ((t.ins_h =
                                    ((t.ins_h << t.hash_shift) ^
                                      t.window[t.strstart + b - 1]) &
                                    t.hash_mask),
                                  (r = t.prev[t.strstart & t.w_mask] =
                                    t.head[t.ins_h]),
                                  (t.head[t.ins_h] = t.strstart)),
                                  0 != --t.prev_length;

                              );
                              if (
                                ((t.match_available = 0),
                                (t.match_length = b - 1),
                                t.strstart++,
                                n && (k(t, !1), 0 === t.strm.avail_out))
                              )
                                return 1;
                            } else if (t.match_available) {
                              if (
                                ((n = u._tr_tally(
                                  t,
                                  0,
                                  t.window[t.strstart - 1]
                                )) && k(t, !1),
                                t.strstart++,
                                t.lookahead--,
                                0 === t.strm.avail_out)
                              )
                                return 1;
                            } else
                              (t.match_available = 1),
                                t.strstart++,
                                t.lookahead--;
                          }
                          return (
                            t.match_available &&
                              ((n = u._tr_tally(
                                t,
                                0,
                                t.window[t.strstart - 1]
                              )),
                              (t.match_available = 0)),
                            (t.insert =
                              t.strstart < b - 1 ? t.strstart : b - 1),
                            4 === e
                              ? (k(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                              : t.last_lit && (k(t, !1), 0 === t.strm.avail_out)
                              ? 1
                              : 2
                          );
                        }
                        function F(t, e, r, n, i) {
                          (this.good_length = t),
                            (this.max_lazy = e),
                            (this.nice_length = r),
                            (this.max_chain = n),
                            (this.func = i);
                        }
                        function z() {
                          (this.strm = null),
                            (this.status = 0),
                            (this.pending_buf = null),
                            (this.pending_buf_size = 0),
                            (this.pending_out = 0),
                            (this.pending = 0),
                            (this.wrap = 0),
                            (this.gzhead = null),
                            (this.gzindex = 0),
                            (this.method = _),
                            (this.last_flush = -1),
                            (this.w_size = 0),
                            (this.w_bits = 0),
                            (this.w_mask = 0),
                            (this.window = null),
                            (this.window_size = 0),
                            (this.prev = null),
                            (this.head = null),
                            (this.ins_h = 0),
                            (this.hash_size = 0),
                            (this.hash_bits = 0),
                            (this.hash_mask = 0),
                            (this.hash_shift = 0),
                            (this.block_start = 0),
                            (this.match_length = 0),
                            (this.prev_match = 0),
                            (this.match_available = 0),
                            (this.strstart = 0),
                            (this.match_start = 0),
                            (this.lookahead = 0),
                            (this.prev_length = 0),
                            (this.max_chain_length = 0),
                            (this.max_lazy_match = 0),
                            (this.level = 0),
                            (this.strategy = 0),
                            (this.good_match = 0),
                            (this.nice_match = 0),
                            (this.dyn_ltree = new f.Buf16(2 * y)),
                            (this.dyn_dtree = new f.Buf16(2 * (2 * a + 1))),
                            (this.bl_tree = new f.Buf16(2 * (2 * m + 1))),
                            E(this.dyn_ltree),
                            E(this.dyn_dtree),
                            E(this.bl_tree),
                            (this.l_desc = null),
                            (this.d_desc = null),
                            (this.bl_desc = null),
                            (this.bl_count = new f.Buf16(g + 1)),
                            (this.heap = new f.Buf16(2 * o + 1)),
                            E(this.heap),
                            (this.heap_len = 0),
                            (this.heap_max = 0),
                            (this.depth = new f.Buf16(2 * o + 1)),
                            E(this.depth),
                            (this.l_buf = 0),
                            (this.lit_bufsize = 0),
                            (this.last_lit = 0),
                            (this.d_buf = 0),
                            (this.opt_len = 0),
                            (this.static_len = 0),
                            (this.matches = 0),
                            (this.insert = 0),
                            (this.bi_buf = 0),
                            (this.bi_valid = 0);
                        }
                        function R(t) {
                          var e;
                          return t && t.state
                            ? ((t.total_in = t.total_out = 0),
                              (t.data_type = i),
                              ((e = t.state).pending = 0),
                              (e.pending_out = 0),
                              e.wrap < 0 && (e.wrap = -e.wrap),
                              (e.status = e.wrap ? S : C),
                              (t.adler = 2 === e.wrap ? 0 : 1),
                              (e.last_flush = l),
                              u._tr_init(e),
                              c)
                            : I(t, p);
                        }
                        function N(t) {
                          var e = R(t);
                          return (
                            e === c &&
                              (((t = t.state).window_size = 2 * t.w_size),
                              E(t.head),
                              (t.max_lazy_match = s[t.level].max_lazy),
                              (t.good_match = s[t.level].good_length),
                              (t.nice_match = s[t.level].nice_length),
                              (t.max_chain_length = s[t.level].max_chain),
                              (t.strstart = 0),
                              (t.block_start = 0),
                              (t.lookahead = 0),
                              (t.insert = 0),
                              (t.match_length = t.prev_length = b - 1),
                              (t.match_available = 0),
                              (t.ins_h = 0)),
                            e
                          );
                        }
                        function U(t, e, r, n, i, o) {
                          if (!t) return p;
                          var a = 1;
                          if (
                            (-1 === e && (e = 6),
                            n < 0
                              ? ((a = 0), (n = -n))
                              : 15 < n && ((a = 2), (n -= 16)),
                            i < 1 ||
                              9 < i ||
                              r !== _ ||
                              n < 8 ||
                              15 < n ||
                              e < 0 ||
                              9 < e ||
                              o < 0 ||
                              4 < o)
                          )
                            return I(t, p);
                          8 === n && (n = 9);
                          var s = new z();
                          return (
                            ((t.state = s).strm = t),
                            (s.wrap = a),
                            (s.gzhead = null),
                            (s.w_bits = n),
                            (s.w_size = 1 << s.w_bits),
                            (s.w_mask = s.w_size - 1),
                            (s.hash_bits = i + 7),
                            (s.hash_size = 1 << s.hash_bits),
                            (s.hash_mask = s.hash_size - 1),
                            (s.hash_shift = ~~((s.hash_bits + b - 1) / b)),
                            (s.window = new f.Buf8(2 * s.w_size)),
                            (s.head = new f.Buf16(s.hash_size)),
                            (s.prev = new f.Buf16(s.w_size)),
                            (s.lit_bufsize = 1 << (i + 6)),
                            (s.pending_buf_size = 4 * s.lit_bufsize),
                            (s.pending_buf = new f.Buf8(s.pending_buf_size)),
                            (s.d_buf = +s.lit_bufsize),
                            (s.l_buf = 3 * s.lit_bufsize),
                            (s.level = e),
                            (s.strategy = o),
                            (s.method = r),
                            N(t)
                          );
                        }
                        (s = [
                          new F(0, 0, 0, 0, function (t, e) {
                            var r = 65535;
                            for (
                              r > t.pending_buf_size - 5 &&
                              (r = t.pending_buf_size - 5);
                              ;

                            ) {
                              if (t.lookahead <= 1) {
                                if ((A(t), 0 === t.lookahead && e === l))
                                  return 1;
                                if (0 === t.lookahead) break;
                              }
                              (t.strstart += t.lookahead), (t.lookahead = 0);
                              var n = t.block_start + r;
                              if (
                                (0 === t.strstart || t.strstart >= n) &&
                                ((t.lookahead = t.strstart - n),
                                (t.strstart = n),
                                k(t, !1),
                                0 === t.strm.avail_out)
                              )
                                return 1;
                              if (
                                t.strstart - t.block_start >= t.w_size - v &&
                                (k(t, !1), 0 === t.strm.avail_out)
                              )
                                return 1;
                            }
                            return (
                              (t.insert = 0),
                              4 === e
                                ? (k(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                                : (t.strstart > t.block_start &&
                                    (k(t, !1), t.strm.avail_out),
                                  1)
                            );
                          }),
                          new F(4, 4, 8, 4, D),
                          new F(4, 5, 16, 8, D),
                          new F(4, 6, 32, 32, D),
                          new F(4, 4, 16, 16, M),
                          new F(8, 16, 32, 32, M),
                          new F(8, 16, 128, 128, M),
                          new F(8, 32, 128, 256, M),
                          new F(32, 128, 258, 1024, M),
                          new F(32, 258, 258, 4096, M),
                        ]),
                          (r.deflateInit = function (t, e) {
                            return U(t, e, _, 15, 8, 0);
                          }),
                          (r.deflateInit2 = U),
                          (r.deflateReset = N),
                          (r.deflateResetKeep = R),
                          (r.deflateSetHeader = function (t, e) {
                            return !t || !t.state || 2 !== t.state.wrap
                              ? p
                              : ((t.state.gzhead = e), c);
                          }),
                          (r.deflate = function (t, e) {
                            var r, n, i, o;
                            if (!t || !t.state || 5 < e || e < 0)
                              return t ? I(t, p) : p;
                            if (
                              ((r = t.state),
                              !t.output ||
                                (!t.input && 0 !== t.avail_in) ||
                                (666 === r.status && 4 !== e))
                            )
                              return I(t, 0 === t.avail_out ? -5 : p);
                            if (
                              ((r.strm = t),
                              (a = r.last_flush),
                              (r.last_flush = e),
                              r.status === S &&
                                (2 === r.wrap
                                  ? ((t.adler = 0),
                                    x(r, 31),
                                    x(r, 139),
                                    x(r, 8),
                                    r.gzhead
                                      ? (x(
                                          r,
                                          (r.gzhead.text ? 1 : 0) +
                                            (r.gzhead.hcrc ? 2 : 0) +
                                            (r.gzhead.extra ? 4 : 0) +
                                            (r.gzhead.name ? 8 : 0) +
                                            (r.gzhead.comment ? 16 : 0)
                                        ),
                                        x(r, 255 & r.gzhead.time),
                                        x(r, (r.gzhead.time >> 8) & 255),
                                        x(r, (r.gzhead.time >> 16) & 255),
                                        x(r, (r.gzhead.time >> 24) & 255),
                                        x(
                                          r,
                                          9 === r.level
                                            ? 2
                                            : 2 <= r.strategy || r.level < 2
                                            ? 4
                                            : 0
                                        ),
                                        x(r, 255 & r.gzhead.os),
                                        r.gzhead.extra &&
                                          r.gzhead.extra.length &&
                                          (x(r, 255 & r.gzhead.extra.length),
                                          x(
                                            r,
                                            (r.gzhead.extra.length >> 8) & 255
                                          )),
                                        r.gzhead.hcrc &&
                                          (t.adler = d(
                                            t.adler,
                                            r.pending_buf,
                                            r.pending,
                                            0
                                          )),
                                        (r.gzindex = 0),
                                        (r.status = 69))
                                      : (x(r, 0),
                                        x(r, 0),
                                        x(r, 0),
                                        x(r, 0),
                                        x(r, 0),
                                        x(
                                          r,
                                          9 === r.level
                                            ? 2
                                            : 2 <= r.strategy || r.level < 2
                                            ? 4
                                            : 0
                                        ),
                                        x(r, 3),
                                        (r.status = C)))
                                  : ((o = (_ + ((r.w_bits - 8) << 4)) << 8),
                                    (o |=
                                      (2 <= r.strategy || r.level < 2
                                        ? 0
                                        : r.level < 6
                                        ? 1
                                        : 6 === r.level
                                        ? 2
                                        : 3) << 6),
                                    0 !== r.strstart && (o |= 32),
                                    (o += 31 - (o % 31)),
                                    (r.status = C),
                                    B(r, o),
                                    0 !== r.strstart &&
                                      (B(r, t.adler >>> 16),
                                      B(r, 65535 & t.adler)),
                                    (t.adler = 1))),
                              69 === r.status)
                            )
                              if (r.gzhead.extra) {
                                for (
                                  n = r.pending;
                                  r.gzindex < (65535 & r.gzhead.extra.length) &&
                                  (r.pending !== r.pending_buf_size ||
                                    (r.gzhead.hcrc &&
                                      r.pending > n &&
                                      (t.adler = d(
                                        t.adler,
                                        r.pending_buf,
                                        r.pending - n,
                                        n
                                      )),
                                    P(t),
                                    (n = r.pending),
                                    r.pending !== r.pending_buf_size));

                                )
                                  x(r, 255 & r.gzhead.extra[r.gzindex]),
                                    r.gzindex++;
                                r.gzhead.hcrc &&
                                  r.pending > n &&
                                  (t.adler = d(
                                    t.adler,
                                    r.pending_buf,
                                    r.pending - n,
                                    n
                                  )),
                                  r.gzindex === r.gzhead.extra.length &&
                                    ((r.gzindex = 0), (r.status = 73));
                              } else r.status = 73;
                            if (73 === r.status)
                              if (r.gzhead.name) {
                                n = r.pending;
                                do {
                                  if (
                                    r.pending === r.pending_buf_size &&
                                    (r.gzhead.hcrc &&
                                      r.pending > n &&
                                      (t.adler = d(
                                        t.adler,
                                        r.pending_buf,
                                        r.pending - n,
                                        n
                                      )),
                                    P(t),
                                    (n = r.pending),
                                    r.pending === r.pending_buf_size)
                                  ) {
                                    i = 1;
                                    break;
                                  }
                                } while (
                                  ((i =
                                    r.gzindex < r.gzhead.name.length
                                      ? 255 &
                                        r.gzhead.name.charCodeAt(r.gzindex++)
                                      : 0),
                                  x(r, i),
                                  0 !== i)
                                );
                                r.gzhead.hcrc &&
                                  r.pending > n &&
                                  (t.adler = d(
                                    t.adler,
                                    r.pending_buf,
                                    r.pending - n,
                                    n
                                  )),
                                  0 === i && ((r.gzindex = 0), (r.status = 91));
                              } else r.status = 91;
                            if (91 === r.status)
                              if (r.gzhead.comment) {
                                n = r.pending;
                                do {
                                  if (
                                    r.pending === r.pending_buf_size &&
                                    (r.gzhead.hcrc &&
                                      r.pending > n &&
                                      (t.adler = d(
                                        t.adler,
                                        r.pending_buf,
                                        r.pending - n,
                                        n
                                      )),
                                    P(t),
                                    (n = r.pending),
                                    r.pending === r.pending_buf_size)
                                  ) {
                                    i = 1;
                                    break;
                                  }
                                } while (
                                  ((i =
                                    r.gzindex < r.gzhead.comment.length
                                      ? 255 &
                                        r.gzhead.comment.charCodeAt(r.gzindex++)
                                      : 0),
                                  x(r, i),
                                  0 !== i)
                                );
                                r.gzhead.hcrc &&
                                  r.pending > n &&
                                  (t.adler = d(
                                    t.adler,
                                    r.pending_buf,
                                    r.pending - n,
                                    n
                                  )),
                                  0 === i && (r.status = 103);
                              } else r.status = 103;
                            if (
                              (103 === r.status &&
                                (r.gzhead.hcrc
                                  ? (r.pending + 2 > r.pending_buf_size && P(t),
                                    r.pending + 2 <= r.pending_buf_size &&
                                      (x(r, 255 & t.adler),
                                      x(r, (t.adler >> 8) & 255),
                                      (t.adler = 0),
                                      (r.status = C)))
                                  : (r.status = C)),
                              0 !== r.pending)
                            ) {
                              if ((P(t), 0 === t.avail_out))
                                return (r.last_flush = -1), c;
                            } else if (
                              0 === t.avail_in &&
                              O(e) <= O(a) &&
                              4 !== e
                            )
                              return I(t, -5);
                            if (666 === r.status && 0 !== t.avail_in)
                              return I(t, -5);
                            if (
                              0 !== t.avail_in ||
                              0 !== r.lookahead ||
                              (e !== l && 666 !== r.status)
                            ) {
                              var a =
                                2 === r.strategy
                                  ? (function (t, e) {
                                      for (var r; ; ) {
                                        if (
                                          0 === t.lookahead &&
                                          (A(t), 0 === t.lookahead)
                                        ) {
                                          if (e === l) return 1;
                                          break;
                                        }
                                        if (
                                          ((t.match_length = 0),
                                          (r = u._tr_tally(
                                            t,
                                            0,
                                            t.window[t.strstart]
                                          )),
                                          t.lookahead--,
                                          t.strstart++,
                                          r &&
                                            (k(t, !1), 0 === t.strm.avail_out))
                                        )
                                          return 1;
                                      }
                                      return (
                                        (t.insert = 0),
                                        4 === e
                                          ? (k(t, !0),
                                            0 === t.strm.avail_out ? 3 : 4)
                                          : t.last_lit &&
                                            (k(t, !1), 0 === t.strm.avail_out)
                                          ? 1
                                          : 2
                                      );
                                    })(r, e)
                                  : 3 === r.strategy
                                  ? (function (t, e) {
                                      for (var r, n, i, o, a = t.window; ; ) {
                                        if (t.lookahead <= w) {
                                          if (
                                            (A(t), t.lookahead <= w && e === l)
                                          )
                                            return 1;
                                          if (0 === t.lookahead) break;
                                        }
                                        if (
                                          ((t.match_length = 0),
                                          t.lookahead >= b &&
                                            0 < t.strstart &&
                                            (n = a[(i = t.strstart - 1)]) ===
                                              a[++i] &&
                                            n === a[++i] &&
                                            n === a[++i])
                                        ) {
                                          for (
                                            o = t.strstart + w;
                                            n === a[++i] &&
                                            n === a[++i] &&
                                            n === a[++i] &&
                                            n === a[++i] &&
                                            n === a[++i] &&
                                            n === a[++i] &&
                                            n === a[++i] &&
                                            n === a[++i] &&
                                            i < o;

                                          );
                                          (t.match_length = w - (o - i)),
                                            t.match_length > t.lookahead &&
                                              (t.match_length = t.lookahead);
                                        }
                                        if (
                                          (t.match_length >= b
                                            ? ((r = u._tr_tally(
                                                t,
                                                1,
                                                t.match_length - b
                                              )),
                                              (t.lookahead -= t.match_length),
                                              (t.strstart += t.match_length),
                                              (t.match_length = 0))
                                            : ((r = u._tr_tally(
                                                t,
                                                0,
                                                t.window[t.strstart]
                                              )),
                                              t.lookahead--,
                                              t.strstart++),
                                          r &&
                                            (k(t, !1), 0 === t.strm.avail_out))
                                        )
                                          return 1;
                                      }
                                      return (
                                        (t.insert = 0),
                                        4 === e
                                          ? (k(t, !0),
                                            0 === t.strm.avail_out ? 3 : 4)
                                          : t.last_lit &&
                                            (k(t, !1), 0 === t.strm.avail_out)
                                          ? 1
                                          : 2
                                      );
                                    })(r, e)
                                  : s[r.level].func(r, e);
                              if (
                                ((3 !== a && 4 !== a) || (r.status = 666),
                                1 === a || 3 === a)
                              )
                                return (
                                  0 === t.avail_out && (r.last_flush = -1), c
                                );
                              if (
                                2 === a &&
                                (1 === e
                                  ? u._tr_align(r)
                                  : 5 !== e &&
                                    (u._tr_stored_block(r, 0, 0, !1),
                                    3 === e &&
                                      (E(r.head),
                                      0 === r.lookahead &&
                                        ((r.strstart = 0),
                                        (r.block_start = 0),
                                        (r.insert = 0)))),
                                P(t),
                                0 === t.avail_out)
                              )
                                return (r.last_flush = -1), c;
                            }
                            return 4 !== e
                              ? c
                              : r.wrap <= 0
                              ? 1
                              : (2 === r.wrap
                                  ? (x(r, 255 & t.adler),
                                    x(r, (t.adler >> 8) & 255),
                                    x(r, (t.adler >> 16) & 255),
                                    x(r, (t.adler >> 24) & 255),
                                    x(r, 255 & t.total_in),
                                    x(r, (t.total_in >> 8) & 255),
                                    x(r, (t.total_in >> 16) & 255),
                                    x(r, (t.total_in >> 24) & 255))
                                  : (B(r, t.adler >>> 16),
                                    B(r, 65535 & t.adler)),
                                P(t),
                                0 < r.wrap && (r.wrap = -r.wrap),
                                0 !== r.pending ? c : 1);
                          }),
                          (r.deflateEnd = function (t) {
                            var e;
                            return t && t.state
                              ? (e = t.state.status) !== S &&
                                69 !== e &&
                                73 !== e &&
                                91 !== e &&
                                103 !== e &&
                                e !== C &&
                                666 !== e
                                ? I(t, p)
                                : ((t.state = null), e === C ? I(t, -3) : c)
                              : p;
                          }),
                          (r.deflateSetDictionary = function (t, e) {
                            var r,
                              n,
                              i,
                              o,
                              a,
                              s,
                              u,
                              l = e.length;
                            if (!t || !t.state) return p;
                            if (
                              2 === (o = (r = t.state).wrap) ||
                              (1 === o && r.status !== S) ||
                              r.lookahead
                            )
                              return p;
                            for (
                              1 === o && (t.adler = h(t.adler, e, l, 0)),
                                r.wrap = 0,
                                l >= r.w_size &&
                                  (0 === o &&
                                    (E(r.head),
                                    (r.strstart = 0),
                                    (r.block_start = 0),
                                    (r.insert = 0)),
                                  (u = new f.Buf8(r.w_size)),
                                  f.arraySet(u, e, l - r.w_size, r.w_size, 0),
                                  (e = u),
                                  (l = r.w_size)),
                                a = t.avail_in,
                                s = t.next_in,
                                u = t.input,
                                t.avail_in = l,
                                t.next_in = 0,
                                t.input = e,
                                A(r);
                              r.lookahead >= b;

                            ) {
                              for (
                                n = r.strstart, i = r.lookahead - (b - 1);
                                (r.ins_h =
                                  ((r.ins_h << r.hash_shift) ^
                                    r.window[n + b - 1]) &
                                  r.hash_mask),
                                  (r.prev[n & r.w_mask] = r.head[r.ins_h]),
                                  (r.head[r.ins_h] = n),
                                  n++,
                                  --i;

                              );
                              (r.strstart = n), (r.lookahead = b - 1), A(r);
                            }
                            return (
                              (r.strstart += r.lookahead),
                              (r.block_start = r.strstart),
                              (r.insert = r.lookahead),
                              (r.lookahead = 0),
                              (r.match_length = r.prev_length = b - 1),
                              (r.match_available = 0),
                              (t.next_in = s),
                              (t.input = u),
                              (t.avail_in = a),
                              (r.wrap = o),
                              c
                            );
                          }),
                          (r.deflateInfo =
                            "pako deflate (from Nodeca project)");
                      },
                      {
                        "../utils/common": 41,
                        "./adler32": 43,
                        "./crc32": 45,
                        "./messages": 51,
                        "./trees": 52,
                      },
                    ],
                    47: [
                      function (t, e, r) {
                        "use strict";
                        e.exports = function () {
                          (this.text = 0),
                            (this.time = 0),
                            (this.xflags = 0),
                            (this.os = 0),
                            (this.extra = null),
                            (this.extra_len = 0),
                            (this.name = ""),
                            (this.comment = ""),
                            (this.hcrc = 0),
                            (this.done = !1);
                        };
                      },
                      {},
                    ],
                    48: [
                      function (t, e, r) {
                        "use strict";
                        e.exports = function (t, e) {
                          var r,
                            n,
                            i,
                            o,
                            a,
                            s,
                            u = t.state,
                            l = t.next_in,
                            c = t.input,
                            f = l + (t.avail_in - 5),
                            h = t.next_out,
                            d = t.output,
                            p = h - (e - t.avail_out),
                            _ = h + (t.avail_out - 257),
                            m = u.dmax,
                            y = u.wsize,
                            g = u.whave,
                            b = u.wnext,
                            w = u.window,
                            v = u.hold,
                            S = u.bits,
                            C = u.lencode,
                            I = u.distcode,
                            O = (1 << u.lenbits) - 1,
                            E = (1 << u.distbits) - 1;
                          t: do {
                            for (
                              S < 15 &&
                                ((v += c[l++] << S),
                                (S += 8),
                                (v += c[l++] << S),
                                (S += 8)),
                                r = C[v & O];
                              ;

                            ) {
                              if (
                                ((v >>>= n = r >>> 24),
                                (S -= n),
                                0 == (n = (r >>> 16) & 255))
                              )
                                d[h++] = 65535 & r;
                              else {
                                if (!(16 & n)) {
                                  if (0 == (64 & n)) {
                                    r = C[(65535 & r) + (v & ((1 << n) - 1))];
                                    continue;
                                  }
                                  if (32 & n) {
                                    u.mode = 12;
                                    break t;
                                  }
                                  (t.msg = "invalid literal/length code"),
                                    (u.mode = 30);
                                  break t;
                                }
                                for (
                                  i = 65535 & r,
                                    (n &= 15) &&
                                      (S < n && ((v += c[l++] << S), (S += 8)),
                                      (i += v & ((1 << n) - 1)),
                                      (v >>>= n),
                                      (S -= n)),
                                    S < 15 &&
                                      ((v += c[l++] << S),
                                      (S += 8),
                                      (v += c[l++] << S),
                                      (S += 8)),
                                    r = I[v & E];
                                  ;

                                ) {
                                  if (
                                    ((v >>>= n = r >>> 24),
                                    (S -= n),
                                    !(16 & (n = (r >>> 16) & 255)))
                                  ) {
                                    if (0 == (64 & n)) {
                                      r = I[(65535 & r) + (v & ((1 << n) - 1))];
                                      continue;
                                    }
                                    (t.msg = "invalid distance code"),
                                      (u.mode = 30);
                                    break t;
                                  }
                                  if (
                                    ((o = 65535 & r),
                                    S < (n &= 15) &&
                                      ((v += c[l++] << S),
                                      (S += 8) < n &&
                                        ((v += c[l++] << S), (S += 8))),
                                    m < (o += v & ((1 << n) - 1)))
                                  ) {
                                    (t.msg = "invalid distance too far back"),
                                      (u.mode = 30);
                                    break t;
                                  }
                                  if (((v >>>= n), (S -= n), (n = h - p) < o)) {
                                    if (g < (n = o - n) && u.sane) {
                                      (t.msg = "invalid distance too far back"),
                                        (u.mode = 30);
                                      break t;
                                    }
                                    if (((s = w), (a = 0) === b)) {
                                      if (((a += y - n), n < i)) {
                                        for (i -= n; (d[h++] = w[a++]), --n; );
                                        (a = h - o), (s = d);
                                      }
                                    } else if (b < n) {
                                      if (((a += y + b - n), (n -= b) < i)) {
                                        for (i -= n; (d[h++] = w[a++]), --n; );
                                        if (((a = 0), b < i)) {
                                          for (
                                            i -= n = b;
                                            (d[h++] = w[a++]), --n;

                                          );
                                          (a = h - o), (s = d);
                                        }
                                      }
                                    } else if (((a += b - n), n < i)) {
                                      for (i -= n; (d[h++] = w[a++]), --n; );
                                      (a = h - o), (s = d);
                                    }
                                    for (; 2 < i; )
                                      (d[h++] = s[a++]),
                                        (d[h++] = s[a++]),
                                        (d[h++] = s[a++]),
                                        (i -= 3);
                                    i &&
                                      ((d[h++] = s[a++]),
                                      1 < i && (d[h++] = s[a++]));
                                  } else {
                                    for (
                                      a = h - o;
                                      (d[h++] = d[a++]),
                                        (d[h++] = d[a++]),
                                        (d[h++] = d[a++]),
                                        2 < (i -= 3);

                                    );
                                    i &&
                                      ((d[h++] = d[a++]),
                                      1 < i && (d[h++] = d[a++]));
                                  }
                                  break;
                                }
                              }
                              break;
                            }
                          } while (l < f && h < _);
                          (l -= i = S >> 3),
                            (v &= (1 << (S -= i << 3)) - 1),
                            (t.next_in = l),
                            (t.next_out = h),
                            (t.avail_in = l < f ? f - l + 5 : 5 - (l - f)),
                            (t.avail_out = h < _ ? _ - h + 257 : 257 - (h - _)),
                            (u.hold = v),
                            (u.bits = S);
                        };
                      },
                      {},
                    ],
                    49: [
                      function (t, e, r) {
                        "use strict";
                        var x = t("../utils/common"),
                          B = t("./adler32"),
                          T = t("./crc32"),
                          A = t("./inffast"),
                          D = t("./inftrees"),
                          M = 0,
                          F = -2,
                          z = 1,
                          n = 852,
                          i = 592;
                        function R(t) {
                          return (
                            ((t >>> 24) & 255) +
                            ((t >>> 8) & 65280) +
                            ((65280 & t) << 8) +
                            ((255 & t) << 24)
                          );
                        }
                        function o() {
                          (this.mode = 0),
                            (this.last = !1),
                            (this.wrap = 0),
                            (this.havedict = !1),
                            (this.flags = 0),
                            (this.dmax = 0),
                            (this.check = 0),
                            (this.total = 0),
                            (this.head = null),
                            (this.wbits = 0),
                            (this.wsize = 0),
                            (this.whave = 0),
                            (this.wnext = 0),
                            (this.window = null),
                            (this.hold = 0),
                            (this.bits = 0),
                            (this.length = 0),
                            (this.offset = 0),
                            (this.extra = 0),
                            (this.lencode = null),
                            (this.distcode = null),
                            (this.lenbits = 0),
                            (this.distbits = 0),
                            (this.ncode = 0),
                            (this.nlen = 0),
                            (this.ndist = 0),
                            (this.have = 0),
                            (this.next = null),
                            (this.lens = new x.Buf16(320)),
                            (this.work = new x.Buf16(288)),
                            (this.lendyn = null),
                            (this.distdyn = null),
                            (this.sane = 0),
                            (this.back = 0),
                            (this.was = 0);
                        }
                        function a(t) {
                          var e;
                          return t && t.state
                            ? ((e = t.state),
                              (t.total_in = t.total_out = e.total = 0),
                              (t.msg = ""),
                              e.wrap && (t.adler = 1 & e.wrap),
                              (e.mode = z),
                              (e.last = 0),
                              (e.havedict = 0),
                              (e.dmax = 32768),
                              (e.head = null),
                              (e.hold = 0),
                              (e.bits = 0),
                              (e.lencode = e.lendyn = new x.Buf32(n)),
                              (e.distcode = e.distdyn = new x.Buf32(i)),
                              (e.sane = 1),
                              (e.back = -1),
                              M)
                            : F;
                        }
                        function s(t) {
                          var e;
                          return t && t.state
                            ? (((e = t.state).wsize = 0),
                              (e.whave = 0),
                              (e.wnext = 0),
                              a(t))
                            : F;
                        }
                        function u(t, e) {
                          var r, n;
                          return t && t.state
                            ? ((n = t.state),
                              e < 0
                                ? ((r = 0), (e = -e))
                                : ((r = 1 + (e >> 4)), e < 48 && (e &= 15)),
                              e && (e < 8 || 15 < e)
                                ? F
                                : (null !== n.window &&
                                    n.wbits !== e &&
                                    (n.window = null),
                                  (n.wrap = r),
                                  (n.wbits = e),
                                  s(t)))
                            : F;
                        }
                        function l(t, e) {
                          var r;
                          return t
                            ? ((r = new o()),
                              ((t.state = r).window = null),
                              (e = u(t, e)) !== M && (t.state = null),
                              e)
                            : F;
                        }
                        var N,
                          U,
                          j = !0;
                        function L(t, e, r, n) {
                          var i = t.state;
                          return (
                            null === i.window &&
                              ((i.wsize = 1 << i.wbits),
                              (i.wnext = 0),
                              (i.whave = 0),
                              (i.window = new x.Buf8(i.wsize))),
                            n >= i.wsize
                              ? (x.arraySet(
                                  i.window,
                                  e,
                                  r - i.wsize,
                                  i.wsize,
                                  0
                                ),
                                (i.wnext = 0),
                                (i.whave = i.wsize))
                              : (n < (t = i.wsize - i.wnext) && (t = n),
                                x.arraySet(i.window, e, r - n, t, i.wnext),
                                (n -= t)
                                  ? (x.arraySet(i.window, e, r - n, n, 0),
                                    (i.wnext = n),
                                    (i.whave = i.wsize))
                                  : ((i.wnext += t),
                                    i.wnext === i.wsize && (i.wnext = 0),
                                    i.whave < i.wsize && (i.whave += t))),
                            0
                          );
                        }
                        (r.inflateReset = s),
                          (r.inflateReset2 = u),
                          (r.inflateResetKeep = a),
                          (r.inflateInit = function (t) {
                            return l(t, 15);
                          }),
                          (r.inflateInit2 = l),
                          (r.inflate = function (t, e) {
                            var r,
                              n,
                              i,
                              o,
                              a,
                              s,
                              u,
                              l,
                              c,
                              f,
                              h,
                              d,
                              p,
                              _,
                              m,
                              y,
                              g,
                              b,
                              w,
                              v,
                              S,
                              C,
                              I,
                              O,
                              E = 0,
                              P = new x.Buf8(4),
                              k = [
                                16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3,
                                13, 2, 14, 1, 15,
                              ];
                            if (
                              !t ||
                              !t.state ||
                              !t.output ||
                              (!t.input && 0 !== t.avail_in)
                            )
                              return F;
                            12 === (r = t.state).mode && (r.mode = 13),
                              (a = t.next_out),
                              (i = t.output),
                              (u = t.avail_out),
                              (o = t.next_in),
                              (n = t.input),
                              (s = t.avail_in),
                              (l = r.hold),
                              (c = r.bits),
                              (f = s),
                              (h = u),
                              (C = M);
                            t: for (;;)
                              switch (r.mode) {
                                case z:
                                  if (0 === r.wrap) {
                                    r.mode = 13;
                                    break;
                                  }
                                  for (; c < 16; ) {
                                    if (0 === s) break t;
                                    s--, (l += n[o++] << c), (c += 8);
                                  }
                                  if (2 & r.wrap && 35615 === l) {
                                    (P[(r.check = 0)] = 255 & l),
                                      (P[1] = (l >>> 8) & 255),
                                      (r.check = T(r.check, P, 2, 0)),
                                      (c = l = 0),
                                      (r.mode = 2);
                                    break;
                                  }
                                  if (
                                    ((r.flags = 0),
                                    r.head && (r.head.done = !1),
                                    !(1 & r.wrap) ||
                                      (((255 & l) << 8) + (l >> 8)) % 31)
                                  ) {
                                    (t.msg = "incorrect header check"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  if (8 != (15 & l)) {
                                    (t.msg = "unknown compression method"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  if (
                                    ((c -= 4),
                                    (S = 8 + (15 & (l >>>= 4))),
                                    0 === r.wbits)
                                  )
                                    r.wbits = S;
                                  else if (S > r.wbits) {
                                    (t.msg = "invalid window size"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  (r.dmax = 1 << S),
                                    (t.adler = r.check = 1),
                                    (r.mode = 512 & l ? 10 : 12),
                                    (c = l = 0);
                                  break;
                                case 2:
                                  for (; c < 16; ) {
                                    if (0 === s) break t;
                                    s--, (l += n[o++] << c), (c += 8);
                                  }
                                  if (((r.flags = l), 8 != (255 & r.flags))) {
                                    (t.msg = "unknown compression method"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  if (57344 & r.flags) {
                                    (t.msg = "unknown header flags set"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  r.head && (r.head.text = (l >> 8) & 1),
                                    512 & r.flags &&
                                      ((P[0] = 255 & l),
                                      (P[1] = (l >>> 8) & 255),
                                      (r.check = T(r.check, P, 2, 0))),
                                    (c = l = 0),
                                    (r.mode = 3);
                                case 3:
                                  for (; c < 32; ) {
                                    if (0 === s) break t;
                                    s--, (l += n[o++] << c), (c += 8);
                                  }
                                  r.head && (r.head.time = l),
                                    512 & r.flags &&
                                      ((P[0] = 255 & l),
                                      (P[1] = (l >>> 8) & 255),
                                      (P[2] = (l >>> 16) & 255),
                                      (P[3] = (l >>> 24) & 255),
                                      (r.check = T(r.check, P, 4, 0))),
                                    (c = l = 0),
                                    (r.mode = 4);
                                case 4:
                                  for (; c < 16; ) {
                                    if (0 === s) break t;
                                    s--, (l += n[o++] << c), (c += 8);
                                  }
                                  r.head &&
                                    ((r.head.xflags = 255 & l),
                                    (r.head.os = l >> 8)),
                                    512 & r.flags &&
                                      ((P[0] = 255 & l),
                                      (P[1] = (l >>> 8) & 255),
                                      (r.check = T(r.check, P, 2, 0))),
                                    (c = l = 0),
                                    (r.mode = 5);
                                case 5:
                                  if (1024 & r.flags) {
                                    for (; c < 16; ) {
                                      if (0 === s) break t;
                                      s--, (l += n[o++] << c), (c += 8);
                                    }
                                    (r.length = l),
                                      r.head && (r.head.extra_len = l),
                                      512 & r.flags &&
                                        ((P[0] = 255 & l),
                                        (P[1] = (l >>> 8) & 255),
                                        (r.check = T(r.check, P, 2, 0))),
                                      (c = l = 0);
                                  } else r.head && (r.head.extra = null);
                                  r.mode = 6;
                                case 6:
                                  if (
                                    1024 & r.flags &&
                                    ((d = s < (d = r.length) ? s : d) &&
                                      (r.head &&
                                        ((S = r.head.extra_len - r.length),
                                        r.head.extra ||
                                          (r.head.extra = new Array(
                                            r.head.extra_len
                                          )),
                                        x.arraySet(r.head.extra, n, o, d, S)),
                                      512 & r.flags &&
                                        (r.check = T(r.check, n, d, o)),
                                      (s -= d),
                                      (o += d),
                                      (r.length -= d)),
                                    r.length)
                                  )
                                    break t;
                                  (r.length = 0), (r.mode = 7);
                                case 7:
                                  if (2048 & r.flags) {
                                    if (0 === s) break t;
                                    for (
                                      d = 0;
                                      (S = n[o + d++]),
                                        r.head &&
                                          S &&
                                          r.length < 65536 &&
                                          (r.head.name +=
                                            String.fromCharCode(S)),
                                        S && d < s;

                                    );
                                    if (
                                      (512 & r.flags &&
                                        (r.check = T(r.check, n, d, o)),
                                      (s -= d),
                                      (o += d),
                                      S)
                                    )
                                      break t;
                                  } else r.head && (r.head.name = null);
                                  (r.length = 0), (r.mode = 8);
                                case 8:
                                  if (4096 & r.flags) {
                                    if (0 === s) break t;
                                    for (
                                      d = 0;
                                      (S = n[o + d++]),
                                        r.head &&
                                          S &&
                                          r.length < 65536 &&
                                          (r.head.comment +=
                                            String.fromCharCode(S)),
                                        S && d < s;

                                    );
                                    if (
                                      (512 & r.flags &&
                                        (r.check = T(r.check, n, d, o)),
                                      (s -= d),
                                      (o += d),
                                      S)
                                    )
                                      break t;
                                  } else r.head && (r.head.comment = null);
                                  r.mode = 9;
                                case 9:
                                  if (512 & r.flags) {
                                    for (; c < 16; ) {
                                      if (0 === s) break t;
                                      s--, (l += n[o++] << c), (c += 8);
                                    }
                                    if (l !== (65535 & r.check)) {
                                      (t.msg = "header crc mismatch"),
                                        (r.mode = 30);
                                      break;
                                    }
                                    c = l = 0;
                                  }
                                  r.head &&
                                    ((r.head.hcrc = (r.flags >> 9) & 1),
                                    (r.head.done = !0)),
                                    (t.adler = r.check = 0),
                                    (r.mode = 12);
                                  break;
                                case 10:
                                  for (; c < 32; ) {
                                    if (0 === s) break t;
                                    s--, (l += n[o++] << c), (c += 8);
                                  }
                                  (t.adler = r.check = R(l)),
                                    (c = l = 0),
                                    (r.mode = 11);
                                case 11:
                                  if (0 === r.havedict)
                                    return (
                                      (t.next_out = a),
                                      (t.avail_out = u),
                                      (t.next_in = o),
                                      (t.avail_in = s),
                                      (r.hold = l),
                                      (r.bits = c),
                                      2
                                    );
                                  (t.adler = r.check = 1), (r.mode = 12);
                                case 12:
                                  if (5 === e || 6 === e) break t;
                                case 13:
                                  if (r.last) {
                                    (l >>>= 7 & c), (c -= 7 & c), (r.mode = 27);
                                    break;
                                  }
                                  for (; c < 3; ) {
                                    if (0 === s) break t;
                                    s--, (l += n[o++] << c), (c += 8);
                                  }
                                  switch (
                                    ((r.last = 1 & l), --c, 3 & (l >>>= 1))
                                  ) {
                                    case 0:
                                      r.mode = 14;
                                      break;
                                    case 1:
                                      if (
                                        ((function (t) {
                                          if (j) {
                                            var e;
                                            for (
                                              N = new x.Buf32(512),
                                                U = new x.Buf32(32),
                                                e = 0;
                                              e < 144;

                                            )
                                              t.lens[e++] = 8;
                                            for (; e < 256; ) t.lens[e++] = 9;
                                            for (; e < 280; ) t.lens[e++] = 7;
                                            for (; e < 288; ) t.lens[e++] = 8;
                                            for (
                                              D(
                                                1,
                                                t.lens,
                                                0,
                                                288,
                                                N,
                                                0,
                                                t.work,
                                                { bits: 9 }
                                              ),
                                                e = 0;
                                              e < 32;

                                            )
                                              t.lens[e++] = 5;
                                            D(2, t.lens, 0, 32, U, 0, t.work, {
                                              bits: 5,
                                            }),
                                              (j = !1);
                                          }
                                          (t.lencode = N),
                                            (t.lenbits = 9),
                                            (t.distcode = U),
                                            (t.distbits = 5);
                                        })(r),
                                        (r.mode = 20),
                                        6 !== e)
                                      )
                                        break;
                                      (l >>>= 2), (c -= 2);
                                      break t;
                                    case 2:
                                      r.mode = 17;
                                      break;
                                    case 3:
                                      (t.msg = "invalid block type"),
                                        (r.mode = 30);
                                  }
                                  (l >>>= 2), (c -= 2);
                                  break;
                                case 14:
                                  for (l >>>= 7 & c, c -= 7 & c; c < 32; ) {
                                    if (0 === s) break t;
                                    s--, (l += n[o++] << c), (c += 8);
                                  }
                                  if ((65535 & l) != ((l >>> 16) ^ 65535)) {
                                    (t.msg = "invalid stored block lengths"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  if (
                                    ((r.length = 65535 & l),
                                    (c = l = 0),
                                    (r.mode = 15),
                                    6 === e)
                                  )
                                    break t;
                                case 15:
                                  r.mode = 16;
                                case 16:
                                  if ((d = r.length)) {
                                    if (
                                      0 ===
                                      (d = u < (d = s < d ? s : d) ? u : d)
                                    )
                                      break t;
                                    x.arraySet(i, n, o, d, a),
                                      (s -= d),
                                      (o += d),
                                      (u -= d),
                                      (a += d),
                                      (r.length -= d);
                                    break;
                                  }
                                  r.mode = 12;
                                  break;
                                case 17:
                                  for (; c < 14; ) {
                                    if (0 === s) break t;
                                    s--, (l += n[o++] << c), (c += 8);
                                  }
                                  if (
                                    ((r.nlen = 257 + (31 & l)),
                                    (l >>>= 5),
                                    (c -= 5),
                                    (r.ndist = 1 + (31 & l)),
                                    (l >>>= 5),
                                    (c -= 5),
                                    (r.ncode = 4 + (15 & l)),
                                    (l >>>= 4),
                                    (c -= 4),
                                    286 < r.nlen || 30 < r.ndist)
                                  ) {
                                    (t.msg =
                                      "too many length or distance symbols"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  (r.have = 0), (r.mode = 18);
                                case 18:
                                  for (; r.have < r.ncode; ) {
                                    for (; c < 3; ) {
                                      if (0 === s) break t;
                                      s--, (l += n[o++] << c), (c += 8);
                                    }
                                    (r.lens[k[r.have++]] = 7 & l),
                                      (l >>>= 3),
                                      (c -= 3);
                                  }
                                  for (; r.have < 19; ) r.lens[k[r.have++]] = 0;
                                  if (
                                    ((r.lencode = r.lendyn),
                                    (r.lenbits = 7),
                                    (I = { bits: r.lenbits }),
                                    (C = D(
                                      0,
                                      r.lens,
                                      0,
                                      19,
                                      r.lencode,
                                      0,
                                      r.work,
                                      I
                                    )),
                                    (r.lenbits = I.bits),
                                    C)
                                  ) {
                                    (t.msg = "invalid code lengths set"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  (r.have = 0), (r.mode = 19);
                                case 19:
                                  for (; r.have < r.nlen + r.ndist; ) {
                                    for (
                                      ;
                                      (y =
                                        ((E =
                                          r.lencode[
                                            l & ((1 << r.lenbits) - 1)
                                          ]) >>>
                                          16) &
                                        255),
                                        (g = 65535 & E),
                                        !((m = E >>> 24) <= c);

                                    ) {
                                      if (0 === s) break t;
                                      s--, (l += n[o++] << c), (c += 8);
                                    }
                                    if (g < 16)
                                      (l >>>= m),
                                        (c -= m),
                                        (r.lens[r.have++] = g);
                                    else {
                                      if (16 === g) {
                                        for (O = m + 2; c < O; ) {
                                          if (0 === s) break t;
                                          s--, (l += n[o++] << c), (c += 8);
                                        }
                                        if (
                                          ((l >>>= m), (c -= m), 0 === r.have)
                                        ) {
                                          (t.msg = "invalid bit length repeat"),
                                            (r.mode = 30);
                                          break;
                                        }
                                        (S = r.lens[r.have - 1]),
                                          (d = 3 + (3 & l)),
                                          (l >>>= 2),
                                          (c -= 2);
                                      } else if (17 === g) {
                                        for (O = m + 3; c < O; ) {
                                          if (0 === s) break t;
                                          s--, (l += n[o++] << c), (c += 8);
                                        }
                                        (c -= m),
                                          (S = 0),
                                          (d = 3 + (7 & (l >>>= m))),
                                          (l >>>= 3),
                                          (c -= 3);
                                      } else {
                                        for (O = m + 7; c < O; ) {
                                          if (0 === s) break t;
                                          s--, (l += n[o++] << c), (c += 8);
                                        }
                                        (c -= m),
                                          (S = 0),
                                          (d = 11 + (127 & (l >>>= m))),
                                          (l >>>= 7),
                                          (c -= 7);
                                      }
                                      if (r.have + d > r.nlen + r.ndist) {
                                        (t.msg = "invalid bit length repeat"),
                                          (r.mode = 30);
                                        break;
                                      }
                                      for (; d--; ) r.lens[r.have++] = S;
                                    }
                                  }
                                  if (30 === r.mode) break;
                                  if (0 === r.lens[256]) {
                                    (t.msg =
                                      "invalid code -- missing end-of-block"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  if (
                                    ((r.lenbits = 9),
                                    (I = { bits: r.lenbits }),
                                    (C = D(
                                      1,
                                      r.lens,
                                      0,
                                      r.nlen,
                                      r.lencode,
                                      0,
                                      r.work,
                                      I
                                    )),
                                    (r.lenbits = I.bits),
                                    C)
                                  ) {
                                    (t.msg = "invalid literal/lengths set"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  if (
                                    ((r.distbits = 6),
                                    (r.distcode = r.distdyn),
                                    (I = { bits: r.distbits }),
                                    (C = D(
                                      2,
                                      r.lens,
                                      r.nlen,
                                      r.ndist,
                                      r.distcode,
                                      0,
                                      r.work,
                                      I
                                    )),
                                    (r.distbits = I.bits),
                                    C)
                                  ) {
                                    (t.msg = "invalid distances set"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  if (((r.mode = 20), 6 === e)) break t;
                                case 20:
                                  r.mode = 21;
                                case 21:
                                  if (6 <= s && 258 <= u) {
                                    (t.next_out = a),
                                      (t.avail_out = u),
                                      (t.next_in = o),
                                      (t.avail_in = s),
                                      (r.hold = l),
                                      (r.bits = c),
                                      A(t, h),
                                      (a = t.next_out),
                                      (i = t.output),
                                      (u = t.avail_out),
                                      (o = t.next_in),
                                      (n = t.input),
                                      (s = t.avail_in),
                                      (l = r.hold),
                                      (c = r.bits),
                                      12 === r.mode && (r.back = -1);
                                    break;
                                  }
                                  for (
                                    r.back = 0;
                                    (y =
                                      ((E =
                                        r.lencode[
                                          l & ((1 << r.lenbits) - 1)
                                        ]) >>>
                                        16) &
                                      255),
                                      (g = 65535 & E),
                                      !((m = E >>> 24) <= c);

                                  ) {
                                    if (0 === s) break t;
                                    s--, (l += n[o++] << c), (c += 8);
                                  }
                                  if (y && 0 == (240 & y)) {
                                    for (
                                      b = m, w = y, v = g;
                                      (y =
                                        ((E =
                                          r.lencode[
                                            v +
                                              ((l & ((1 << (b + w)) - 1)) >> b)
                                          ]) >>>
                                          16) &
                                        255),
                                        (g = 65535 & E),
                                        !(b + (m = E >>> 24) <= c);

                                    ) {
                                      if (0 === s) break t;
                                      s--, (l += n[o++] << c), (c += 8);
                                    }
                                    (l >>>= b), (c -= b), (r.back += b);
                                  }
                                  if (
                                    ((l >>>= m),
                                    (c -= m),
                                    (r.back += m),
                                    (r.length = g),
                                    0 === y)
                                  ) {
                                    r.mode = 26;
                                    break;
                                  }
                                  if (32 & y) {
                                    (r.back = -1), (r.mode = 12);
                                    break;
                                  }
                                  if (64 & y) {
                                    (t.msg = "invalid literal/length code"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  (r.extra = 15 & y), (r.mode = 22);
                                case 22:
                                  if (r.extra) {
                                    for (O = r.extra; c < O; ) {
                                      if (0 === s) break t;
                                      s--, (l += n[o++] << c), (c += 8);
                                    }
                                    (r.length += l & ((1 << r.extra) - 1)),
                                      (l >>>= r.extra),
                                      (c -= r.extra),
                                      (r.back += r.extra);
                                  }
                                  (r.was = r.length), (r.mode = 23);
                                case 23:
                                  for (
                                    ;
                                    (y =
                                      ((E =
                                        r.distcode[
                                          l & ((1 << r.distbits) - 1)
                                        ]) >>>
                                        16) &
                                      255),
                                      (g = 65535 & E),
                                      !((m = E >>> 24) <= c);

                                  ) {
                                    if (0 === s) break t;
                                    s--, (l += n[o++] << c), (c += 8);
                                  }
                                  if (0 == (240 & y)) {
                                    for (
                                      b = m, w = y, v = g;
                                      (y =
                                        ((E =
                                          r.distcode[
                                            v +
                                              ((l & ((1 << (b + w)) - 1)) >> b)
                                          ]) >>>
                                          16) &
                                        255),
                                        (g = 65535 & E),
                                        !(b + (m = E >>> 24) <= c);

                                    ) {
                                      if (0 === s) break t;
                                      s--, (l += n[o++] << c), (c += 8);
                                    }
                                    (l >>>= b), (c -= b), (r.back += b);
                                  }
                                  if (
                                    ((l >>>= m),
                                    (c -= m),
                                    (r.back += m),
                                    64 & y)
                                  ) {
                                    (t.msg = "invalid distance code"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  (r.offset = g),
                                    (r.extra = 15 & y),
                                    (r.mode = 24);
                                case 24:
                                  if (r.extra) {
                                    for (O = r.extra; c < O; ) {
                                      if (0 === s) break t;
                                      s--, (l += n[o++] << c), (c += 8);
                                    }
                                    (r.offset += l & ((1 << r.extra) - 1)),
                                      (l >>>= r.extra),
                                      (c -= r.extra),
                                      (r.back += r.extra);
                                  }
                                  if (r.offset > r.dmax) {
                                    (t.msg = "invalid distance too far back"),
                                      (r.mode = 30);
                                    break;
                                  }
                                  r.mode = 25;
                                case 25:
                                  if (0 === u) break t;
                                  if (r.offset > (d = h - u)) {
                                    if (
                                      (d = r.offset - d) > r.whave &&
                                      r.sane
                                    ) {
                                      (t.msg = "invalid distance too far back"),
                                        (r.mode = 30);
                                      break;
                                    }
                                    (p =
                                      d > r.wnext
                                        ? ((d -= r.wnext), r.wsize - d)
                                        : r.wnext - d),
                                      d > r.length && (d = r.length),
                                      (_ = r.window);
                                  } else
                                    (_ = i), (p = a - r.offset), (d = r.length);
                                  for (
                                    u -= d = u < d ? u : d, r.length -= d;
                                    (i[a++] = _[p++]), --d;

                                  );
                                  0 === r.length && (r.mode = 21);
                                  break;
                                case 26:
                                  if (0 === u) break t;
                                  (i[a++] = r.length), u--, (r.mode = 21);
                                  break;
                                case 27:
                                  if (r.wrap) {
                                    for (; c < 32; ) {
                                      if (0 === s) break t;
                                      s--, (l |= n[o++] << c), (c += 8);
                                    }
                                    if (
                                      ((h -= u),
                                      (t.total_out += h),
                                      (r.total += h),
                                      h &&
                                        (t.adler = r.check =
                                          (r.flags ? T : B)(
                                            r.check,
                                            i,
                                            h,
                                            a - h
                                          )),
                                      (h = u),
                                      (r.flags ? l : R(l)) !== r.check)
                                    ) {
                                      (t.msg = "incorrect data check"),
                                        (r.mode = 30);
                                      break;
                                    }
                                    c = l = 0;
                                  }
                                  r.mode = 28;
                                case 28:
                                  if (r.wrap && r.flags) {
                                    for (; c < 32; ) {
                                      if (0 === s) break t;
                                      s--, (l += n[o++] << c), (c += 8);
                                    }
                                    if (l !== (4294967295 & r.total)) {
                                      (t.msg = "incorrect length check"),
                                        (r.mode = 30);
                                      break;
                                    }
                                    c = l = 0;
                                  }
                                  r.mode = 29;
                                case 29:
                                  C = 1;
                                  break t;
                                case 30:
                                  C = -3;
                                  break t;
                                case 31:
                                  return -4;
                                default:
                                  return F;
                              }
                            return (
                              (t.next_out = a),
                              (t.avail_out = u),
                              (t.next_in = o),
                              (t.avail_in = s),
                              (r.hold = l),
                              (r.bits = c),
                              (r.wsize ||
                                (h !== t.avail_out &&
                                  r.mode < 30 &&
                                  (r.mode < 27 || 4 !== e))) &&
                              L(t, t.output, t.next_out, h - t.avail_out)
                                ? ((r.mode = 31), -4)
                                : ((f -= t.avail_in),
                                  (h -= t.avail_out),
                                  (t.total_in += f),
                                  (t.total_out += h),
                                  (r.total += h),
                                  r.wrap &&
                                    h &&
                                    (t.adler = r.check =
                                      (r.flags ? T : B)(
                                        r.check,
                                        i,
                                        h,
                                        t.next_out - h
                                      )),
                                  (t.data_type =
                                    r.bits +
                                    (r.last ? 64 : 0) +
                                    (12 === r.mode ? 128 : 0) +
                                    (20 === r.mode || 15 === r.mode ? 256 : 0)),
                                  (C =
                                    ((0 == f && 0 === h) || 4 === e) && C === M
                                      ? -5
                                      : C))
                            );
                          }),
                          (r.inflateEnd = function (t) {
                            if (!t || !t.state) return F;
                            var e = t.state;
                            return (
                              e.window && (e.window = null), (t.state = null), M
                            );
                          }),
                          (r.inflateGetHeader = function (t, e) {
                            var r;
                            return !t ||
                              !t.state ||
                              0 == (2 & (r = t.state).wrap)
                              ? F
                              : (((r.head = e).done = !1), M);
                          }),
                          (r.inflateSetDictionary = function (t, e) {
                            var r,
                              n = e.length;
                            return !t ||
                              !t.state ||
                              (0 !== (r = t.state).wrap && 11 !== r.mode)
                              ? F
                              : 11 === r.mode && B(1, e, n, 0) !== r.check
                              ? -3
                              : L(t, e, n, n)
                              ? ((r.mode = 31), -4)
                              : ((r.havedict = 1), M);
                          }),
                          (r.inflateInfo =
                            "pako inflate (from Nodeca project)");
                      },
                      {
                        "../utils/common": 41,
                        "./adler32": 43,
                        "./crc32": 45,
                        "./inffast": 48,
                        "./inftrees": 50,
                      },
                    ],
                    50: [
                      function (t, e, r) {
                        "use strict";
                        var M = t("../utils/common"),
                          F = [
                            3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27,
                            31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195,
                            227, 258, 0, 0,
                          ],
                          z = [
                            16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18,
                            18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21,
                            21, 21, 16, 72, 78,
                          ],
                          R = [
                            1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97,
                            129, 193, 257, 385, 513, 769, 1025, 1537, 2049,
                            3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
                          ],
                          N = [
                            16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21,
                            21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
                            28, 28, 29, 29, 64, 64,
                          ];
                        e.exports = function (t, e, r, n, i, o, a, s) {
                          for (
                            var u,
                              l,
                              c,
                              f,
                              h,
                              d,
                              p,
                              _,
                              m,
                              y = s.bits,
                              g = 0,
                              b = 0,
                              w = 0,
                              v = 0,
                              S = 0,
                              C = 0,
                              I = 0,
                              O = 0,
                              E = 0,
                              P = 0,
                              k = null,
                              x = 0,
                              B = new M.Buf16(16),
                              T = new M.Buf16(16),
                              A = null,
                              D = 0,
                              g = 0;
                            g <= 15;
                            g++
                          )
                            B[g] = 0;
                          for (b = 0; b < n; b++) B[e[r + b]]++;
                          for (S = y, v = 15; 1 <= v && 0 === B[v]; v--);
                          if ((v < S && (S = v), 0 === v))
                            return (
                              (i[o++] = 20971520),
                              (i[o++] = 20971520),
                              (s.bits = 1),
                              0
                            );
                          for (w = 1; w < v && 0 === B[w]; w++);
                          for (S < w && (S = w), g = O = 1; g <= 15; g++)
                            if (((O <<= 1), (O -= B[g]) < 0)) return -1;
                          if (0 < O && (0 === t || 1 !== v)) return -1;
                          for (T[1] = 0, g = 1; g < 15; g++)
                            T[g + 1] = T[g] + B[g];
                          for (b = 0; b < n; b++)
                            0 !== e[r + b] && (a[T[e[r + b]]++] = b);
                          if (
                            ((d =
                              0 === t
                                ? ((k = A = a), 19)
                                : 1 === t
                                ? ((k = F),
                                  (x -= 257),
                                  (A = z),
                                  (D -= 257),
                                  256)
                                : ((k = R), (A = N), -1)),
                            (g = w),
                            (h = o),
                            (I = b = P = 0),
                            (c = -1),
                            (f = (E = 1 << (C = S)) - 1),
                            (1 === t && 852 < E) || (2 === t && 592 < E))
                          )
                            return 1;
                          for (;;) {
                            for (
                              m =
                                a[b] < d
                                  ? ((_ = 0), a[b])
                                  : a[b] > d
                                  ? ((_ = A[D + a[b]]), k[x + a[b]])
                                  : ((_ = 96), 0),
                                u = 1 << (p = g - I),
                                w = l = 1 << C;
                              (i[h + (P >> I) + (l -= u)] =
                                (p << 24) | (_ << 16) | m | 0),
                                0 !== l;

                            );
                            for (u = 1 << (g - 1); P & u; ) u >>= 1;
                            if (
                              (0 !== u ? ((P &= u - 1), (P += u)) : (P = 0),
                              b++,
                              0 == --B[g])
                            ) {
                              if (g === v) break;
                              g = e[r + a[b]];
                            }
                            if (S < g && (P & f) !== c) {
                              for (
                                h += w,
                                  O = 1 << (C = g - (I = 0 === I ? S : I));
                                C + I < v && !((O -= B[C + I]) <= 0);

                              )
                                C++, (O <<= 1);
                              if (
                                ((E += 1 << C),
                                (1 === t && 852 < E) || (2 === t && 592 < E))
                              )
                                return 1;
                              i[(c = P & f)] =
                                (S << 24) | (C << 16) | (h - o) | 0;
                            }
                          }
                          return (
                            0 !== P &&
                              (i[h + P] = ((g - I) << 24) | (64 << 16) | 0),
                            (s.bits = S),
                            0
                          );
                        };
                      },
                      { "../utils/common": 41 },
                    ],
                    51: [
                      function (t, e, r) {
                        "use strict";
                        e.exports = {
                          2: "need dictionary",
                          1: "stream end",
                          0: "",
                          "-1": "file error",
                          "-2": "stream error",
                          "-3": "data error",
                          "-4": "insufficient memory",
                          "-5": "buffer error",
                          "-6": "incompatible version",
                        };
                      },
                      {},
                    ],
                    52: [
                      function (t, e, r) {
                        "use strict";
                        var i = t("../utils/common");
                        function n(t) {
                          for (var e = t.length; 0 <= --e; ) t[e] = 0;
                        }
                        var o = 16,
                          u = [
                            0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3,
                            3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0,
                          ],
                          l = [
                            0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7,
                            7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13,
                          ],
                          a = [
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
                            3, 7,
                          ],
                          s = [
                            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13,
                            2, 14, 1, 15,
                          ],
                          c = new Array(576);
                        n(c);
                        var f = new Array(60);
                        n(f);
                        var h = new Array(512);
                        n(h);
                        var d = new Array(256);
                        n(d);
                        var p = new Array(29);
                        n(p);
                        var _,
                          m,
                          y,
                          g = new Array(30);
                        function b(t, e, r, n, i) {
                          (this.static_tree = t),
                            (this.extra_bits = e),
                            (this.extra_base = r),
                            (this.elems = n),
                            (this.max_length = i),
                            (this.has_stree = t && t.length);
                        }
                        function w(t, e) {
                          (this.dyn_tree = t),
                            (this.max_code = 0),
                            (this.stat_desc = e);
                        }
                        function v(t) {
                          return t < 256 ? h[t] : h[256 + (t >>> 7)];
                        }
                        function S(t, e) {
                          (t.pending_buf[t.pending++] = 255 & e),
                            (t.pending_buf[t.pending++] = (e >>> 8) & 255);
                        }
                        function C(t, e, r) {
                          t.bi_valid > o - r
                            ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
                              S(t, t.bi_buf),
                              (t.bi_buf = e >> (o - t.bi_valid)),
                              (t.bi_valid += r - o))
                            : ((t.bi_buf |= (e << t.bi_valid) & 65535),
                              (t.bi_valid += r));
                        }
                        function I(t, e, r) {
                          C(t, r[2 * e], r[2 * e + 1]);
                        }
                        function O(t, e) {
                          for (
                            var r = 0;
                            (r |= 1 & t), (t >>>= 1), (r <<= 1), 0 < --e;

                          );
                          return r >>> 1;
                        }
                        function E(t, e, r) {
                          for (
                            var n, i = new Array(16), o = 0, a = 1;
                            a <= 15;
                            a++
                          )
                            i[a] = o = (o + r[a - 1]) << 1;
                          for (n = 0; n <= e; n++) {
                            var s = t[2 * n + 1];
                            0 !== s && (t[2 * n] = O(i[s]++, s));
                          }
                        }
                        function P(t) {
                          for (var e = 0; e < 286; e++) t.dyn_ltree[2 * e] = 0;
                          for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
                          for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
                          (t.dyn_ltree[512] = 1),
                            (t.opt_len = t.static_len = 0),
                            (t.last_lit = t.matches = 0);
                        }
                        function k(t) {
                          8 < t.bi_valid
                            ? S(t, t.bi_buf)
                            : 0 < t.bi_valid &&
                              (t.pending_buf[t.pending++] = t.bi_buf),
                            (t.bi_buf = 0),
                            (t.bi_valid = 0);
                        }
                        function x(t, e, r, n) {
                          var i = 2 * e,
                            o = 2 * r;
                          return t[i] < t[o] || (t[i] === t[o] && n[e] <= n[r]);
                        }
                        function B(t, e, r) {
                          for (
                            var n = t.heap[r], i = r << 1;
                            i <= t.heap_len &&
                            (i < t.heap_len &&
                              x(e, t.heap[i + 1], t.heap[i], t.depth) &&
                              i++,
                            !x(e, n, t.heap[i], t.depth));

                          )
                            (t.heap[r] = t.heap[i]), (r = i), (i <<= 1);
                          t.heap[r] = n;
                        }
                        function T(t, e, r) {
                          var n,
                            i,
                            o,
                            a,
                            s = 0;
                          if (0 !== t.last_lit)
                            for (
                              ;
                              (n =
                                (t.pending_buf[t.d_buf + 2 * s] << 8) |
                                t.pending_buf[t.d_buf + 2 * s + 1]),
                                (i = t.pending_buf[t.l_buf + s]),
                                s++,
                                0 == n
                                  ? I(t, i, e)
                                  : (I(t, (o = d[i]) + 256 + 1, e),
                                    0 !== (a = u[o]) && C(t, (i -= p[o]), a),
                                    I(t, (o = v(--n)), r),
                                    0 !== (a = l[o]) && C(t, (n -= g[o]), a)),
                                s < t.last_lit;

                            );
                          I(t, 256, e);
                        }
                        function A(t, _) {
                          var e,
                            r,
                            n,
                            i = _.dyn_tree,
                            o = _.stat_desc.static_tree,
                            a = _.stat_desc.has_stree,
                            s = _.stat_desc.elems,
                            u = -1;
                          for (
                            t.heap_len = 0, t.heap_max = 573, e = 0;
                            e < s;
                            e++
                          )
                            0 !== i[2 * e]
                              ? ((t.heap[++t.heap_len] = u = e),
                                (t.depth[e] = 0))
                              : (i[2 * e + 1] = 0);
                          for (; t.heap_len < 2; )
                            (i[
                              2 * (n = t.heap[++t.heap_len] = u < 2 ? ++u : 0)
                            ] = 1),
                              (t.depth[n] = 0),
                              t.opt_len--,
                              a && (t.static_len -= o[2 * n + 1]);
                          for (_.max_code = u, e = t.heap_len >> 1; 1 <= e; e--)
                            B(t, i, e);
                          for (
                            n = s;
                            (e = t.heap[1]),
                              (t.heap[1] = t.heap[t.heap_len--]),
                              B(t, i, 1),
                              (r = t.heap[1]),
                              (t.heap[--t.heap_max] = e),
                              (t.heap[--t.heap_max] = r),
                              (i[2 * n] = i[2 * e] + i[2 * r]),
                              (t.depth[n] =
                                (t.depth[e] >= t.depth[r]
                                  ? t.depth[e]
                                  : t.depth[r]) + 1),
                              (i[2 * e + 1] = i[2 * r + 1] = n),
                              (t.heap[1] = n++),
                              B(t, i, 1),
                              2 <= t.heap_len;

                          );
                          (t.heap[--t.heap_max] = t.heap[1]),
                            (function (t) {
                              for (
                                var e,
                                  r,
                                  n,
                                  i,
                                  o,
                                  a = _.dyn_tree,
                                  s = _.max_code,
                                  u = _.stat_desc.static_tree,
                                  l = _.stat_desc.has_stree,
                                  c = _.stat_desc.extra_bits,
                                  f = _.stat_desc.extra_base,
                                  h = _.stat_desc.max_length,
                                  d = 0,
                                  p = 0;
                                p <= 15;
                                p++
                              )
                                t.bl_count[p] = 0;
                              for (
                                a[2 * t.heap[t.heap_max] + 1] = 0,
                                  e = t.heap_max + 1;
                                e < 573;
                                e++
                              )
                                h <
                                  (p =
                                    a[2 * a[2 * (r = t.heap[e]) + 1] + 1] +
                                    1) && ((p = h), d++),
                                  (a[2 * r + 1] = p),
                                  s < r ||
                                    (t.bl_count[p]++,
                                    (i = 0),
                                    f <= r && (i = c[r - f]),
                                    (o = a[2 * r]),
                                    (t.opt_len += o * (p + i)),
                                    l &&
                                      (t.static_len += o * (u[2 * r + 1] + i)));
                              if (0 !== d) {
                                do {
                                  for (p = h - 1; 0 === t.bl_count[p]; ) p--;
                                } while (
                                  (t.bl_count[p]--,
                                  (t.bl_count[p + 1] += 2),
                                  t.bl_count[h]--,
                                  0 < (d -= 2))
                                );
                                for (p = h; 0 !== p; p--)
                                  for (r = t.bl_count[p]; 0 !== r; )
                                    s < (n = t.heap[--e]) ||
                                      (a[2 * n + 1] !== p &&
                                        ((t.opt_len +=
                                          (p - a[2 * n + 1]) * a[2 * n]),
                                        (a[2 * n + 1] = p)),
                                      r--);
                              }
                            })(t),
                            E(i, u, t.bl_count);
                        }
                        function D(t, e, r) {
                          var n,
                            i,
                            o = -1,
                            a = e[1],
                            s = 0,
                            u = 7,
                            l = 4;
                          for (
                            0 === a && ((u = 138), (l = 3)),
                              e[2 * (r + 1) + 1] = 65535,
                              n = 0;
                            n <= r;
                            n++
                          )
                            (i = a),
                              (a = e[2 * (n + 1) + 1]),
                              (++s < u && i === a) ||
                                (s < l
                                  ? (t.bl_tree[2 * i] += s)
                                  : 0 !== i
                                  ? (i !== o && t.bl_tree[2 * i]++,
                                    t.bl_tree[32]++)
                                  : s <= 10
                                  ? t.bl_tree[34]++
                                  : t.bl_tree[36]++,
                                (o = i),
                                (l =
                                  (s = 0) === a
                                    ? ((u = 138), 3)
                                    : i === a
                                    ? ((u = 6), 3)
                                    : ((u = 7), 4)));
                        }
                        function M(t, e, r) {
                          var n,
                            i,
                            o = -1,
                            a = e[1],
                            s = 0,
                            u = 7,
                            l = 4;
                          for (
                            0 === a && ((u = 138), (l = 3)), n = 0;
                            n <= r;
                            n++
                          )
                            if (
                              ((i = a),
                              (a = e[2 * (n + 1) + 1]),
                              !(++s < u && i === a))
                            ) {
                              if (s < l) for (; I(t, i, t.bl_tree), 0 != --s; );
                              else
                                0 !== i
                                  ? (i !== o && (I(t, i, t.bl_tree), s--),
                                    I(t, 16, t.bl_tree),
                                    C(t, s - 3, 2))
                                  : s <= 10
                                  ? (I(t, 17, t.bl_tree), C(t, s - 3, 3))
                                  : (I(t, 18, t.bl_tree), C(t, s - 11, 7));
                              (o = i),
                                (l =
                                  (s = 0) === a
                                    ? ((u = 138), 3)
                                    : i === a
                                    ? ((u = 6), 3)
                                    : ((u = 7), 4));
                            }
                        }
                        n(g);
                        var F = !1;
                        function z(t, e, r, n) {
                          C(t, 0 + (n ? 1 : 0), 3),
                            (e = e),
                            (r = r),
                            k((t = t)),
                            S(t, r),
                            S(t, ~r),
                            i.arraySet(
                              t.pending_buf,
                              t.window,
                              e,
                              r,
                              t.pending
                            ),
                            (t.pending += r);
                        }
                        (r._tr_init = function (t) {
                          F ||
                            ((function () {
                              for (
                                var t, e, r, n, i = new Array(16), o = (r = 0);
                                o < 28;
                                o++
                              )
                                for (p[o] = r, t = 0; t < 1 << u[o]; t++)
                                  d[r++] = o;
                              for (d[r - 1] = o, o = n = 0; o < 16; o++)
                                for (g[o] = n, t = 0; t < 1 << l[o]; t++)
                                  h[n++] = o;
                              for (n >>= 7; o < 30; o++)
                                for (
                                  g[o] = n << 7, t = 0;
                                  t < 1 << (l[o] - 7);
                                  t++
                                )
                                  h[256 + n++] = o;
                              for (e = 0; e <= 15; e++) i[e] = 0;
                              for (t = 0; t <= 143; )
                                (c[2 * t + 1] = 8), t++, i[8]++;
                              for (; t <= 255; )
                                (c[2 * t + 1] = 9), t++, i[9]++;
                              for (; t <= 279; )
                                (c[2 * t + 1] = 7), t++, i[7]++;
                              for (; t <= 287; )
                                (c[2 * t + 1] = 8), t++, i[8]++;
                              for (E(c, 287, i), t = 0; t < 30; t++)
                                (f[2 * t + 1] = 5), (f[2 * t] = O(t, 5));
                              (_ = new b(c, u, 257, 286, 15)),
                                (m = new b(f, l, 0, 30, 15)),
                                (y = new b(new Array(0), a, 0, 19, 7));
                            })(),
                            (F = !0)),
                            (t.l_desc = new w(t.dyn_ltree, _)),
                            (t.d_desc = new w(t.dyn_dtree, m)),
                            (t.bl_desc = new w(t.bl_tree, y)),
                            (t.bi_buf = 0),
                            (t.bi_valid = 0),
                            P(t);
                        }),
                          (r._tr_stored_block = z),
                          (r._tr_flush_block = function (t, e, r, n) {
                            var i,
                              o,
                              a = 0;
                            0 < t.level
                              ? (2 === t.strm.data_type &&
                                  (t.strm.data_type = (function (t) {
                                    for (
                                      var e = 4093624447, r = 0;
                                      r <= 31;
                                      r++, e >>>= 1
                                    )
                                      if (1 & e && 0 !== t.dyn_ltree[2 * r])
                                        return 0;
                                    if (
                                      0 !== t.dyn_ltree[18] ||
                                      0 !== t.dyn_ltree[20] ||
                                      0 !== t.dyn_ltree[26]
                                    )
                                      return 1;
                                    for (r = 32; r < 256; r++)
                                      if (0 !== t.dyn_ltree[2 * r]) return 1;
                                    return 0;
                                  })(t)),
                                A(t, t.l_desc),
                                A(t, t.d_desc),
                                (a = (function (t) {
                                  var e;
                                  for (
                                    D(t, t.dyn_ltree, t.l_desc.max_code),
                                      D(t, t.dyn_dtree, t.d_desc.max_code),
                                      A(t, t.bl_desc),
                                      e = 18;
                                    3 <= e && 0 === t.bl_tree[2 * s[e] + 1];
                                    e--
                                  );
                                  return (
                                    (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e
                                  );
                                })(t)),
                                (i = (t.opt_len + 3 + 7) >>> 3),
                                (o = (t.static_len + 3 + 7) >>> 3) <= i &&
                                  (i = o))
                              : (i = o = r + 5),
                              r + 4 <= i && -1 !== e
                                ? z(t, e, r, n)
                                : 4 === t.strategy || o === i
                                ? (C(t, 2 + (n ? 1 : 0), 3), T(t, c, f))
                                : (C(t, 4 + (n ? 1 : 0), 3),
                                  (function (t, e, r, n) {
                                    var i;
                                    for (
                                      C(t, e - 257, 5),
                                        C(t, r - 1, 5),
                                        C(t, n - 4, 4),
                                        i = 0;
                                      i < n;
                                      i++
                                    )
                                      C(t, t.bl_tree[2 * s[i] + 1], 3);
                                    M(t, t.dyn_ltree, e - 1),
                                      M(t, t.dyn_dtree, r - 1);
                                  })(
                                    t,
                                    t.l_desc.max_code + 1,
                                    t.d_desc.max_code + 1,
                                    a + 1
                                  ),
                                  T(t, t.dyn_ltree, t.dyn_dtree)),
                              P(t),
                              n && k(t);
                          }),
                          (r._tr_tally = function (t, e, r) {
                            return (
                              (t.pending_buf[t.d_buf + 2 * t.last_lit] =
                                (e >>> 8) & 255),
                              (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] =
                                255 & e),
                              (t.pending_buf[t.l_buf + t.last_lit] = 255 & r),
                              t.last_lit++,
                              0 === e
                                ? t.dyn_ltree[2 * r]++
                                : (t.matches++,
                                  e--,
                                  t.dyn_ltree[2 * (d[r] + 256 + 1)]++,
                                  t.dyn_dtree[2 * v(e)]++),
                              t.last_lit === t.lit_bufsize - 1
                            );
                          }),
                          (r._tr_align = function (t) {
                            C(t, 2, 3),
                              I(t, 256, c),
                              16 === (t = t).bi_valid
                                ? (S(t, t.bi_buf),
                                  (t.bi_buf = 0),
                                  (t.bi_valid = 0))
                                : 8 <= t.bi_valid &&
                                  ((t.pending_buf[t.pending++] =
                                    255 & t.bi_buf),
                                  (t.bi_buf >>= 8),
                                  (t.bi_valid -= 8));
                          });
                      },
                      { "../utils/common": 41 },
                    ],
                    53: [
                      function (t, e, r) {
                        "use strict";
                        e.exports = function () {
                          (this.input = null),
                            (this.next_in = 0),
                            (this.avail_in = 0),
                            (this.total_in = 0),
                            (this.output = null),
                            (this.next_out = 0),
                            (this.avail_out = 0),
                            (this.total_out = 0),
                            (this.msg = ""),
                            (this.state = null),
                            (this.data_type = 2),
                            (this.adler = 0);
                        };
                      },
                      {},
                    ],
                    54: [
                      function (t, e, r) {
                        "use strict";
                        e.exports =
                          "function" == typeof n
                            ? n
                            : function () {
                                var t = [].slice.apply(arguments);
                                t.splice(1, 0, 0), setTimeout.apply(null, t);
                              };
                      },
                      {},
                    ],
                  },
                  {},
                  [10]
                )(10);
              });
            }.call(this);
          }.call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {},
            l("buffer").Buffer,
            l("timers").setImmediate
          );
        },
        { buffer: 21, timers: 25 },
      ],
      24: [
        function (t, e, r) {
          var n,
            i,
            e = (e.exports = {});
          function o() {
            throw new Error("setTimeout has not been defined");
          }
          function a() {
            throw new Error("clearTimeout has not been defined");
          }
          function s(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout)
              return (n = setTimeout), setTimeout(e, 0);
            try {
              return n(e, 0);
            } catch (t) {
              try {
                return n.call(null, e, 0);
              } catch (t) {
                return n.call(this, e, 0);
              }
            }
          }
          !(function () {
            try {
              n = "function" == typeof setTimeout ? setTimeout : o;
            } catch (t) {
              n = o;
            }
            try {
              i = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (t) {
              i = a;
            }
          })();
          var u,
            l = [],
            c = !1,
            f = -1;
          function h() {
            c &&
              u &&
              ((c = !1),
              u.length ? (l = u.concat(l)) : (f = -1),
              l.length && d());
          }
          function d() {
            if (!c) {
              var t = s(h);
              c = !0;
              for (var e = l.length; e; ) {
                for (u = l, l = []; ++f < e; ) u && u[f].run();
                (f = -1), (e = l.length);
              }
              (u = null),
                (c = !1),
                (function (e) {
                  if (i === clearTimeout) return clearTimeout(e);
                  if ((i === a || !i) && clearTimeout)
                    return (i = clearTimeout), clearTimeout(e);
                  try {
                    i(e);
                  } catch (t) {
                    try {
                      return i.call(null, e);
                    } catch (t) {
                      return i.call(this, e);
                    }
                  }
                })(t);
            }
          }
          function p(t, e) {
            (this.fun = t), (this.array = e);
          }
          function _() {}
          (e.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
              for (var r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
            l.push(new p(t, e)), 1 !== l.length || c || s(d);
          }),
            (p.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (e.title = "browser"),
            (e.browser = !0),
            (e.env = {}),
            (e.argv = []),
            (e.version = ""),
            (e.versions = {}),
            (e.on = _),
            (e.addListener = _),
            (e.once = _),
            (e.off = _),
            (e.removeListener = _),
            (e.removeAllListeners = _),
            (e.emit = _),
            (e.prependListener = _),
            (e.prependOnceListener = _),
            (e.listeners = function (t) {
              return [];
            }),
            (e.binding = function (t) {
              throw new Error("process.binding is not supported");
            }),
            (e.cwd = function () {
              return "/";
            }),
            (e.chdir = function (t) {
              throw new Error("process.chdir is not supported");
            }),
            (e.umask = function () {
              return 0;
            });
        },
        {},
      ],
      25: [
        function (u, t, l) {
          !function (r, s) {
            !function () {
              var n = u("process/browser.js").nextTick,
                t = Function.prototype.apply,
                i = Array.prototype.slice,
                o = {},
                a = 0;
              function e(t, e) {
                (this._id = t), (this._clearFn = e);
              }
              (l.setTimeout = function () {
                return new e(
                  t.call(setTimeout, window, arguments),
                  clearTimeout
                );
              }),
                (l.setInterval = function () {
                  return new e(
                    t.call(setInterval, window, arguments),
                    clearInterval
                  );
                }),
                (l.clearTimeout = l.clearInterval =
                  function (t) {
                    t.close();
                  }),
                (e.prototype.unref = e.prototype.ref = function () {}),
                (e.prototype.close = function () {
                  this._clearFn.call(window, this._id);
                }),
                (l.enroll = function (t, e) {
                  clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
                }),
                (l.unenroll = function (t) {
                  clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
                }),
                (l._unrefActive = l.active =
                  function (t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    0 <= e &&
                      (t._idleTimeoutId = setTimeout(function () {
                        t._onTimeout && t._onTimeout();
                      }, e));
                  }),
                (l.setImmediate =
                  "function" == typeof r
                    ? r
                    : function (t) {
                        var e = a++,
                          r = !(arguments.length < 2) && i.call(arguments, 1);
                        return (
                          (o[e] = !0),
                          n(function () {
                            o[e] &&
                              (r ? t.apply(null, r) : t.call(null),
                              l.clearImmediate(e));
                          }),
                          e
                        );
                      }),
                (l.clearImmediate =
                  "function" == typeof s
                    ? s
                    : function (t) {
                        delete o[t];
                      });
            }.call(this);
          }.call(this, u("timers").setImmediate, u("timers").clearImmediate);
        },
        { "process/browser.js": 24, timers: 25 },
      ],
    },
    {},
    [7]
  )(7);
});
