(self.webpackChunkplytix_challenge =
  self.webpackChunkplytix_challenge || []).push([
  [179],
  {
    255: (t) => {
      function e(t) {
        return Promise.resolve().then(() => {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        });
      }
      (e.keys = () => []), (e.resolve = e), (e.id = 255), (t.exports = e);
    },
    501: function (t) {
      (t.exports = (function () {
        "use strict";
        const t = Object.freeze({
            cancel: "cancel",
            backdrop: "backdrop",
            close: "close",
            esc: "esc",
            timer: "timer",
          }),
          e = "SweetAlert2:",
          n = (t) => t.charAt(0).toUpperCase() + t.slice(1),
          r = (t) => Array.prototype.slice.call(t),
          s = (t) => {
            console.warn(
              "".concat(e, " ").concat("object" == typeof t ? t.join(" ") : t)
            );
          },
          i = (t) => {
            console.error("".concat(e, " ").concat(t));
          },
          o = [],
          a = (t) => ("function" == typeof t ? t() : t),
          l = (t) => t && "function" == typeof t.toPromise,
          u = (t) => (l(t) ? t.toPromise() : Promise.resolve(t)),
          c = (t) => t && Promise.resolve(t) === t,
          h = (t) =>
            t instanceof Element ||
            ((t) => "object" == typeof t && t.jquery)(t),
          d = (t) => {
            const e = {};
            for (const n in t) e[t[n]] = "swal2-" + t[n];
            return e;
          },
          p = d([
            "container",
            "shown",
            "height-auto",
            "iosfix",
            "popup",
            "modal",
            "no-backdrop",
            "no-transition",
            "toast",
            "toast-shown",
            "show",
            "hide",
            "close",
            "title",
            "html-container",
            "actions",
            "confirm",
            "deny",
            "cancel",
            "default-outline",
            "footer",
            "icon",
            "icon-content",
            "image",
            "input",
            "file",
            "range",
            "select",
            "radio",
            "checkbox",
            "label",
            "textarea",
            "inputerror",
            "input-label",
            "validation-message",
            "progress-steps",
            "active-progress-step",
            "progress-step",
            "progress-step-line",
            "loader",
            "loading",
            "styled",
            "top",
            "top-start",
            "top-end",
            "top-left",
            "top-right",
            "center",
            "center-start",
            "center-end",
            "center-left",
            "center-right",
            "bottom",
            "bottom-start",
            "bottom-end",
            "bottom-left",
            "bottom-right",
            "grow-row",
            "grow-column",
            "grow-fullscreen",
            "rtl",
            "timer-progress-bar",
            "timer-progress-bar-container",
            "scrollbar-measure",
            "icon-success",
            "icon-warning",
            "icon-info",
            "icon-question",
            "icon-error",
          ]),
          f = d(["success", "warning", "info", "question", "error"]),
          m = () => document.body.querySelector(".".concat(p.container)),
          g = (t) => {
            const e = m();
            return e ? e.querySelector(t) : null;
          },
          y = (t) => g(".".concat(t)),
          w = () => y(p.popup),
          v = () => y(p.icon),
          b = () => y(p.title),
          _ = () => y(p["html-container"]),
          C = () => y(p.image),
          E = () => y(p["progress-steps"]),
          S = () => y(p["validation-message"]),
          x = () => g(".".concat(p.actions, " .").concat(p.confirm)),
          A = () => g(".".concat(p.actions, " .").concat(p.deny)),
          D = () => g(".".concat(p.loader)),
          k = () => g(".".concat(p.actions, " .").concat(p.cancel)),
          T = () => y(p.actions),
          O = () => y(p.footer),
          F = () => y(p["timer-progress-bar"]),
          P = () => y(p.close),
          I = () => {
            const t = r(
                w().querySelectorAll(
                  '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
                )
              ).sort((t, e) =>
                (t = parseInt(t.getAttribute("tabindex"))) >
                (e = parseInt(e.getAttribute("tabindex")))
                  ? 1
                  : t < e
                  ? -1
                  : 0
              ),
              e = r(
                w().querySelectorAll(
                  '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
                )
              ).filter((t) => "-1" !== t.getAttribute("tabindex"));
            return ((t) => {
              const e = [];
              for (let n = 0; n < t.length; n++)
                -1 === e.indexOf(t[n]) && e.push(t[n]);
              return e;
            })(t.concat(e)).filter((t) => Y(t));
          },
          R = () => !N() && !document.body.classList.contains(p["no-backdrop"]),
          N = () => document.body.classList.contains(p["toast-shown"]),
          M = { previousBodyPadding: null },
          j = (t, e) => {
            if (((t.textContent = ""), e)) {
              const n = new DOMParser().parseFromString(e, "text/html");
              r(n.querySelector("head").childNodes).forEach((e) => {
                t.appendChild(e);
              }),
                r(n.querySelector("body").childNodes).forEach((e) => {
                  t.appendChild(e);
                });
            }
          },
          V = (t, e) => {
            if (!e) return !1;
            const n = e.split(/\s+/);
            for (let r = 0; r < n.length; r++)
              if (!t.classList.contains(n[r])) return !1;
            return !0;
          },
          B = (t, e, n) => {
            if (
              (((t, e) => {
                r(t.classList).forEach((n) => {
                  Object.values(p).includes(n) ||
                    Object.values(f).includes(n) ||
                    Object.values(e.showClass).includes(n) ||
                    t.classList.remove(n);
                });
              })(t, e),
              e.customClass && e.customClass[n])
            ) {
              if (
                "string" != typeof e.customClass[n] &&
                !e.customClass[n].forEach
              )
                return s(
                  "Invalid type of customClass."
                    .concat(n, '! Expected string or iterable object, got "')
                    .concat(typeof e.customClass[n], '"')
                );
              H(t, e.customClass[n]);
            }
          },
          L = (t, e) => {
            if (!e) return null;
            switch (e) {
              case "select":
              case "textarea":
              case "file":
                return q(t, p[e]);
              case "checkbox":
                return t.querySelector(".".concat(p.checkbox, " input"));
              case "radio":
                return (
                  t.querySelector(".".concat(p.radio, " input:checked")) ||
                  t.querySelector(".".concat(p.radio, " input:first-child"))
                );
              case "range":
                return t.querySelector(".".concat(p.range, " input"));
              default:
                return q(t, p.input);
            }
          },
          U = (t) => {
            if ((t.focus(), "file" !== t.type)) {
              const e = t.value;
              (t.value = ""), (t.value = e);
            }
          },
          z = (t, e, n) => {
            t &&
              e &&
              ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)),
              e.forEach((e) => {
                t.forEach
                  ? t.forEach((t) => {
                      n ? t.classList.add(e) : t.classList.remove(e);
                    })
                  : n
                  ? t.classList.add(e)
                  : t.classList.remove(e);
              }));
          },
          H = (t, e) => {
            z(t, e, !0);
          },
          $ = (t, e) => {
            z(t, e, !1);
          },
          q = (t, e) => {
            for (let n = 0; n < t.childNodes.length; n++)
              if (V(t.childNodes[n], e)) return t.childNodes[n];
          },
          W = (t, e, n) => {
            n === "".concat(parseInt(n)) && (n = parseInt(n)),
              n || 0 === parseInt(n)
                ? (t.style[e] = "number" == typeof n ? "".concat(n, "px") : n)
                : t.style.removeProperty(e);
          },
          Q = (t, e = "flex") => {
            t.style.display = e;
          },
          K = (t) => {
            t.style.display = "none";
          },
          G = (t, e, n, r) => {
            const s = t.querySelector(e);
            s && (s.style[n] = r);
          },
          Z = (t, e, n) => {
            e ? Q(t, n) : K(t);
          },
          Y = (t) =>
            !(
              !t ||
              !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            ),
          X = (t) => !!(t.scrollHeight > t.clientHeight),
          J = (t) => {
            const e = window.getComputedStyle(t),
              n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
              r = parseFloat(e.getPropertyValue("transition-duration") || "0");
            return n > 0 || r > 0;
          },
          tt = (t, e = !1) => {
            const n = F();
            Y(n) &&
              (e && ((n.style.transition = "none"), (n.style.width = "100%")),
              setTimeout(() => {
                (n.style.transition = "width ".concat(t / 1e3, "s linear")),
                  (n.style.width = "0%");
              }, 10));
          },
          et = () =>
            "undefined" == typeof window || "undefined" == typeof document,
          nt = '\n <div aria-labelledby="'
            .concat(p.title, '" aria-describedby="')
            .concat(p["html-container"], '" class="')
            .concat(
              p.popup,
              '" tabindex="-1">\n   <button type="button" class="'
            )
            .concat(p.close, '"></button>\n   <ul class="')
            .concat(p["progress-steps"], '"></ul>\n   <div class="')
            .concat(p.icon, '"></div>\n   <img class="')
            .concat(p.image, '" />\n   <h2 class="')
            .concat(p.title, '" id="')
            .concat(p.title, '"></h2>\n   <div class="')
            .concat(p["html-container"], '" id="')
            .concat(p["html-container"], '"></div>\n   <input class="')
            .concat(p.input, '" />\n   <input type="file" class="')
            .concat(p.file, '" />\n   <div class="')
            .concat(
              p.range,
              '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
            )
            .concat(p.select, '"></select>\n   <div class="')
            .concat(p.radio, '"></div>\n   <label for="')
            .concat(p.checkbox, '" class="')
            .concat(
              p.checkbox,
              '">\n     <input type="checkbox" />\n     <span class="'
            )
            .concat(p.label, '"></span>\n   </label>\n   <textarea class="')
            .concat(p.textarea, '"></textarea>\n   <div class="')
            .concat(p["validation-message"], '" id="')
            .concat(p["validation-message"], '"></div>\n   <div class="')
            .concat(p.actions, '">\n     <div class="')
            .concat(p.loader, '"></div>\n     <button type="button" class="')
            .concat(
              p.confirm,
              '"></button>\n     <button type="button" class="'
            )
            .concat(p.deny, '"></button>\n     <button type="button" class="')
            .concat(p.cancel, '"></button>\n   </div>\n   <div class="')
            .concat(p.footer, '"></div>\n   <div class="')
            .concat(p["timer-progress-bar-container"], '">\n     <div class="')
            .concat(p["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
            .replace(/(^|\n)\s*/g, ""),
          rt = () => {
            Me.isVisible() && Me.resetValidationMessage();
          },
          st = (t, e) => {
            t instanceof HTMLElement
              ? e.appendChild(t)
              : "object" == typeof t
              ? it(t, e)
              : t && j(e, t);
          },
          it = (t, e) => {
            t.jquery ? ot(e, t) : j(e, t.toString());
          },
          ot = (t, e) => {
            if (((t.textContent = ""), 0 in e))
              for (let n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
            else t.appendChild(e.cloneNode(!0));
          },
          at = (() => {
            if (et()) return !1;
            const t = document.createElement("div"),
              e = {
                WebkitAnimation: "webkitAnimationEnd",
                OAnimation: "oAnimationEnd oanimationend",
                animation: "animationend",
              };
            for (const n in e)
              if (
                Object.prototype.hasOwnProperty.call(e, n) &&
                void 0 !== t.style[n]
              )
                return e[n];
            return !1;
          })();
        function lt(t, e, r) {
          Z(t, r["show".concat(n(e), "Button")], "inline-block"),
            j(t, r["".concat(e, "ButtonText")]),
            t.setAttribute("aria-label", r["".concat(e, "ButtonAriaLabel")]),
            (t.className = p[e]),
            B(t, r, "".concat(e, "Button")),
            H(t, r["".concat(e, "ButtonClass")]);
        }
        var ut = {
          promise: new WeakMap(),
          innerParams: new WeakMap(),
          domCache: new WeakMap(),
        };
        const ct = [
            "input",
            "file",
            "range",
            "select",
            "radio",
            "checkbox",
            "textarea",
          ],
          ht = (t, e) => {
            (t.placeholder && !e.inputPlaceholder) ||
              (t.placeholder = e.inputPlaceholder);
          },
          dt = (t, e, n) => {
            if (n.inputLabel) {
              t.id = p.input;
              const r = document.createElement("label"),
                s = p["input-label"];
              r.setAttribute("for", t.id),
                (r.className = s),
                H(r, n.customClass.inputLabel),
                (r.innerText = n.inputLabel),
                e.insertAdjacentElement("beforebegin", r);
            }
          },
          pt = (t) => {
            const e = p[t] ? p[t] : p.input;
            return q(w(), e);
          },
          ft = {};
        (ft.text =
          ft.email =
          ft.password =
          ft.number =
          ft.tel =
          ft.url =
            (t, e) => (
              "string" == typeof e.inputValue || "number" == typeof e.inputValue
                ? (t.value = e.inputValue)
                : c(e.inputValue) ||
                  s(
                    'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                      typeof e.inputValue,
                      '"'
                    )
                  ),
              dt(t, t, e),
              ht(t, e),
              (t.type = e.input),
              t
            )),
          (ft.file = (t, e) => (dt(t, t, e), ht(t, e), t)),
          (ft.range = (t, e) => {
            const n = t.querySelector("input"),
              r = t.querySelector("output");
            return (
              (n.value = e.inputValue),
              (n.type = e.input),
              (r.value = e.inputValue),
              dt(n, t, e),
              t
            );
          }),
          (ft.select = (t, e) => {
            if (((t.textContent = ""), e.inputPlaceholder)) {
              const n = document.createElement("option");
              j(n, e.inputPlaceholder),
                (n.value = ""),
                (n.disabled = !0),
                (n.selected = !0),
                t.appendChild(n);
            }
            return dt(t, t, e), t;
          }),
          (ft.radio = (t) => ((t.textContent = ""), t)),
          (ft.checkbox = (t, e) => {
            const n = L(w(), "checkbox");
            (n.value = 1),
              (n.id = p.checkbox),
              (n.checked = Boolean(e.inputValue));
            const r = t.querySelector("span");
            return j(r, e.inputPlaceholder), t;
          }),
          (ft.textarea = (t, e) => {
            if (
              ((t.value = e.inputValue),
              ht(t, e),
              dt(t, t, e),
              "MutationObserver" in window)
            ) {
              const e = parseInt(window.getComputedStyle(w()).width);
              new MutationObserver(() => {
                const n =
                  t.offsetWidth +
                  ((r = t),
                  parseInt(window.getComputedStyle(r).marginLeft) +
                    parseInt(window.getComputedStyle(r).marginRight));
                var r;
                w().style.width = n > e ? "".concat(n, "px") : null;
              }).observe(t, { attributes: !0, attributeFilter: ["style"] });
            }
            return t;
          });
        const mt = (t, e) => {
            const n = _();
            B(n, e, "htmlContainer"),
              e.html
                ? (st(e.html, n), Q(n, "block"))
                : e.text
                ? ((n.textContent = e.text), Q(n, "block"))
                : K(n),
              ((t, e) => {
                const n = w(),
                  r = ut.innerParams.get(t),
                  s = !r || e.input !== r.input;
                ct.forEach((t) => {
                  const r = p[t],
                    i = q(n, r);
                  ((t, e) => {
                    const n = L(w(), t);
                    if (n) {
                      ((t) => {
                        for (let e = 0; e < t.attributes.length; e++) {
                          const n = t.attributes[e].name;
                          ["type", "value", "style"].includes(n) ||
                            t.removeAttribute(n);
                        }
                      })(n);
                      for (const t in e) n.setAttribute(t, e[t]);
                    }
                  })(t, e.inputAttributes),
                    (i.className = r),
                    s && K(i);
                }),
                  e.input &&
                    (s &&
                      ((t) => {
                        if (!ft[t.input])
                          return i(
                            'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
                              t.input,
                              '"'
                            )
                          );
                        const e = pt(t.input),
                          n = ft[t.input](e, t);
                        Q(n),
                          setTimeout(() => {
                            U(n);
                          });
                      })(e),
                    ((t) => {
                      const e = pt(t.input);
                      t.customClass && H(e, t.customClass.input);
                    })(e));
              })(t, e);
          },
          gt = (t, e) => {
            for (const n in f) e.icon !== n && $(t, f[n]);
            H(t, f[e.icon]), vt(t, e), yt(), B(t, e, "icon");
          },
          yt = () => {
            const t = w(),
              e = window
                .getComputedStyle(t)
                .getPropertyValue("background-color"),
              n = t.querySelectorAll(
                "[class^=swal2-success-circular-line], .swal2-success-fix"
              );
            for (let r = 0; r < n.length; r++) n[r].style.backgroundColor = e;
          },
          wt = (t, e) => {
            (t.textContent = ""),
              j(
                t,
                e.iconHtml
                  ? bt(e.iconHtml)
                  : "success" === e.icon
                  ? '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '
                  : "error" === e.icon
                  ? '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '
                  : bt({ question: "?", warning: "!", info: "i" }[e.icon])
              );
          },
          vt = (t, e) => {
            if (e.iconColor) {
              (t.style.color = e.iconColor),
                (t.style.borderColor = e.iconColor);
              for (const n of [
                ".swal2-success-line-tip",
                ".swal2-success-line-long",
                ".swal2-x-mark-line-left",
                ".swal2-x-mark-line-right",
              ])
                G(t, n, "backgroundColor", e.iconColor);
              G(t, ".swal2-success-ring", "borderColor", e.iconColor);
            }
          },
          bt = (t) =>
            '<div class="'.concat(p["icon-content"], '">').concat(t, "</div>"),
          _t = (t, e) => {
            ((t, e) => {
              const n = m(),
                r = w();
              e.toast
                ? (W(n, "width", e.width),
                  (r.style.width = "100%"),
                  r.insertBefore(D(), v()))
                : W(r, "width", e.width),
                W(r, "padding", e.padding),
                e.background && (r.style.background = e.background),
                K(S()),
                ((t, e) => {
                  (t.className = ""
                    .concat(p.popup, " ")
                    .concat(Y(t) ? e.showClass.popup : "")),
                    e.toast
                      ? (H(
                          [document.documentElement, document.body],
                          p["toast-shown"]
                        ),
                        H(t, p.toast))
                      : H(t, p.modal),
                    B(t, e, "popup"),
                    "string" == typeof e.customClass && H(t, e.customClass),
                    e.icon && H(t, p["icon-".concat(e.icon)]);
                })(r, e);
            })(0, e),
              ((t, e) => {
                const n = m();
                n &&
                  ((function (t, e) {
                    "string" == typeof e
                      ? (t.style.background = e)
                      : e ||
                        H(
                          [document.documentElement, document.body],
                          p["no-backdrop"]
                        );
                  })(n, e.backdrop),
                  (function (t, e) {
                    e in p
                      ? H(t, p[e])
                      : (s(
                          'The "position" parameter is not valid, defaulting to "center"'
                        ),
                        H(t, p.center));
                  })(n, e.position),
                  (function (t, e) {
                    if (e && "string" == typeof e) {
                      const n = "grow-".concat(e);
                      n in p && H(t, p[n]);
                    }
                  })(n, e.grow),
                  B(n, e, "container"));
              })(0, e),
              ((t, e) => {
                const n = E();
                if (!e.progressSteps || 0 === e.progressSteps.length)
                  return K(n);
                Q(n),
                  (n.textContent = ""),
                  e.currentProgressStep >= e.progressSteps.length &&
                    s(
                      "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
                    ),
                  e.progressSteps.forEach((t, r) => {
                    const s = ((t) => {
                      const e = document.createElement("li");
                      return H(e, p["progress-step"]), j(e, t), e;
                    })(t);
                    if (
                      (n.appendChild(s),
                      r === e.currentProgressStep &&
                        H(s, p["active-progress-step"]),
                      r !== e.progressSteps.length - 1)
                    ) {
                      const t = ((t) => {
                        const e = document.createElement("li");
                        return (
                          H(e, p["progress-step-line"]),
                          t.progressStepsDistance &&
                            (e.style.width = t.progressStepsDistance),
                          e
                        );
                      })(e);
                      n.appendChild(t);
                    }
                  });
              })(0, e),
              ((t, e) => {
                const n = ut.innerParams.get(t),
                  r = v();
                n && e.icon === n.icon
                  ? (wt(r, e), gt(r, e))
                  : e.icon || e.iconHtml
                  ? e.icon && -1 === Object.keys(f).indexOf(e.icon)
                    ? (i(
                        'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                          e.icon,
                          '"'
                        )
                      ),
                      K(r))
                    : (Q(r), wt(r, e), gt(r, e), H(r, e.showClass.icon))
                  : K(r);
              })(t, e),
              ((t, e) => {
                const n = C();
                if (!e.imageUrl) return K(n);
                Q(n, ""),
                  n.setAttribute("src", e.imageUrl),
                  n.setAttribute("alt", e.imageAlt),
                  W(n, "width", e.imageWidth),
                  W(n, "height", e.imageHeight),
                  (n.className = p.image),
                  B(n, e, "image");
              })(0, e),
              ((t, e) => {
                const n = b();
                Z(n, e.title || e.titleText, "block"),
                  e.title && st(e.title, n),
                  e.titleText && (n.innerText = e.titleText),
                  B(n, e, "title");
              })(0, e),
              ((t, e) => {
                const n = P();
                j(n, e.closeButtonHtml),
                  B(n, e, "closeButton"),
                  Z(n, e.showCloseButton),
                  n.setAttribute("aria-label", e.closeButtonAriaLabel);
              })(0, e),
              mt(t, e),
              ((t, e) => {
                const n = T(),
                  r = D(),
                  s = x(),
                  i = A(),
                  o = k();
                e.showConfirmButton ||
                  e.showDenyButton ||
                  e.showCancelButton ||
                  K(n),
                  B(n, e, "actions"),
                  lt(s, "confirm", e),
                  lt(i, "deny", e),
                  lt(o, "cancel", e),
                  (function (t, e, n, r) {
                    if (!r.buttonsStyling) return $([t, e, n], p.styled);
                    H([t, e, n], p.styled),
                      r.confirmButtonColor &&
                        ((t.style.backgroundColor = r.confirmButtonColor),
                        H(t, p["default-outline"])),
                      r.denyButtonColor &&
                        ((e.style.backgroundColor = r.denyButtonColor),
                        H(e, p["default-outline"])),
                      r.cancelButtonColor &&
                        ((n.style.backgroundColor = r.cancelButtonColor),
                        H(n, p["default-outline"]));
                  })(s, i, o, e),
                  e.reverseButtons &&
                    (n.insertBefore(o, r),
                    n.insertBefore(i, r),
                    n.insertBefore(s, r)),
                  j(r, e.loaderHtml),
                  B(r, e, "loader");
              })(0, e),
              ((t, e) => {
                const n = O();
                Z(n, e.footer), e.footer && st(e.footer, n), B(n, e, "footer");
              })(0, e),
              "function" == typeof e.didRender && e.didRender(w());
          },
          Ct = () => x() && x().click(),
          Et = (t) => {
            let e = w();
            e || Me.fire(), (e = w());
            const n = D();
            N() ? K(v()) : St(e, t),
              Q(n),
              e.setAttribute("data-loading", !0),
              e.setAttribute("aria-busy", !0),
              e.focus();
          },
          St = (t, e) => {
            const n = T(),
              r = D();
            !e && Y(x()) && (e = x()),
              Q(n),
              e &&
                (K(e), r.setAttribute("data-button-to-replace", e.className)),
              r.parentNode.insertBefore(r, e),
              H([t, n], p.loading);
          },
          xt = {},
          At = () => {
            if (xt.timeout)
              return (
                (() => {
                  const t = F(),
                    e = parseInt(window.getComputedStyle(t).width);
                  t.style.removeProperty("transition"),
                    (t.style.width = "100%");
                  const n = parseInt(window.getComputedStyle(t).width),
                    r = parseInt((e / n) * 100);
                  t.style.removeProperty("transition"),
                    (t.style.width = "".concat(r, "%"));
                })(),
                xt.timeout.stop()
              );
          },
          Dt = () => {
            if (xt.timeout) {
              const t = xt.timeout.start();
              return tt(t), t;
            }
          };
        let kt = !1;
        const Tt = {},
          Ot = (t) => {
            for (let e = t.target; e && e !== document; e = e.parentNode)
              for (const t in Tt) {
                const n = e.getAttribute(t);
                if (n) return void Tt[t].fire({ template: n });
              }
          },
          Ft = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            icon: void 0,
            iconColor: void 0,
            iconHtml: void 0,
            template: void 0,
            toast: !1,
            showClass: {
              popup: "swal2-show",
              backdrop: "swal2-backdrop-show",
              icon: "swal2-icon-show",
            },
            hideClass: {
              popup: "swal2-hide",
              backdrop: "swal2-backdrop-hide",
              icon: "swal2-icon-hide",
            },
            customClass: {},
            target: "body",
            backdrop: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showDenyButton: !1,
            showCancelButton: !1,
            preConfirm: void 0,
            preDeny: void 0,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: void 0,
            denyButtonText: "No",
            denyButtonAriaLabel: "",
            denyButtonColor: void 0,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: void 0,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusDeny: !1,
            focusCancel: !1,
            returnFocus: !0,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            loaderHtml: "",
            showLoaderOnConfirm: !1,
            showLoaderOnDeny: !1,
            imageUrl: void 0,
            imageWidth: void 0,
            imageHeight: void 0,
            imageAlt: "",
            timer: void 0,
            timerProgressBar: !1,
            width: void 0,
            padding: void 0,
            background: void 0,
            input: void 0,
            inputPlaceholder: "",
            inputLabel: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputAttributes: {},
            inputValidator: void 0,
            returnInputValueOnDeny: !1,
            validationMessage: void 0,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: void 0,
            progressStepsDistance: void 0,
            willOpen: void 0,
            didOpen: void 0,
            didRender: void 0,
            willClose: void 0,
            didClose: void 0,
            didDestroy: void 0,
            scrollbarPadding: !0,
          },
          Pt = [
            "allowEscapeKey",
            "allowOutsideClick",
            "background",
            "buttonsStyling",
            "cancelButtonAriaLabel",
            "cancelButtonColor",
            "cancelButtonText",
            "closeButtonAriaLabel",
            "closeButtonHtml",
            "confirmButtonAriaLabel",
            "confirmButtonColor",
            "confirmButtonText",
            "currentProgressStep",
            "customClass",
            "denyButtonAriaLabel",
            "denyButtonColor",
            "denyButtonText",
            "didClose",
            "didDestroy",
            "footer",
            "hideClass",
            "html",
            "icon",
            "iconColor",
            "iconHtml",
            "imageAlt",
            "imageHeight",
            "imageUrl",
            "imageWidth",
            "progressSteps",
            "returnFocus",
            "reverseButtons",
            "showCancelButton",
            "showCloseButton",
            "showConfirmButton",
            "showDenyButton",
            "text",
            "title",
            "titleText",
            "willClose",
          ],
          It = {},
          Rt = [
            "allowOutsideClick",
            "allowEnterKey",
            "backdrop",
            "focusConfirm",
            "focusDeny",
            "focusCancel",
            "returnFocus",
            "heightAuto",
            "keydownListenerCapture",
          ],
          Nt = (t) => Object.prototype.hasOwnProperty.call(Ft, t),
          Mt = (t) => It[t],
          jt = (t) => {
            Nt(t) || s('Unknown parameter "'.concat(t, '"'));
          },
          Vt = (t) => {
            Rt.includes(t) &&
              s('The parameter "'.concat(t, '" is incompatible with toasts'));
          },
          Bt = (t) => {
            var e, n, r;
            Mt(t) &&
              ((e = t),
              (n = Mt(t)),
              (r = '"'
                .concat(
                  e,
                  '" is deprecated and will be removed in the next major release. Please use "'
                )
                .concat(n, '" instead.')),
              o.includes(r) || (o.push(r), s(r)));
          };
        var Lt = Object.freeze({
          isValidParameter: Nt,
          isUpdatableParameter: (t) => -1 !== Pt.indexOf(t),
          isDeprecatedParameter: Mt,
          argsToParams: (t) => {
            const e = {};
            return (
              "object" != typeof t[0] || h(t[0])
                ? ["title", "html", "icon"].forEach((n, r) => {
                    const s = t[r];
                    "string" == typeof s || h(s)
                      ? (e[n] = s)
                      : void 0 !== s &&
                        i(
                          "Unexpected type of "
                            .concat(n, '! Expected "string" or "Element", got ')
                            .concat(typeof s)
                        );
                  })
                : Object.assign(e, t[0]),
              e
            );
          },
          isVisible: () => Y(w()),
          clickConfirm: Ct,
          clickDeny: () => A() && A().click(),
          clickCancel: () => k() && k().click(),
          getContainer: m,
          getPopup: w,
          getTitle: b,
          getHtmlContainer: _,
          getImage: C,
          getIcon: v,
          getInputLabel: () => y(p["input-label"]),
          getCloseButton: P,
          getActions: T,
          getConfirmButton: x,
          getDenyButton: A,
          getCancelButton: k,
          getLoader: D,
          getFooter: O,
          getTimerProgressBar: F,
          getFocusableElements: I,
          getValidationMessage: S,
          isLoading: () => w().hasAttribute("data-loading"),
          fire: function (...t) {
            return new this(...t);
          },
          mixin: function (t) {
            return class extends this {
              _main(e, n) {
                return super._main(e, Object.assign({}, t, n));
              }
            };
          },
          showLoading: Et,
          enableLoading: Et,
          getTimerLeft: () => xt.timeout && xt.timeout.getTimerLeft(),
          stopTimer: At,
          resumeTimer: Dt,
          toggleTimer: () => {
            const t = xt.timeout;
            return t && (t.running ? At() : Dt());
          },
          increaseTimer: (t) => {
            if (xt.timeout) {
              const e = xt.timeout.increase(t);
              return tt(e, !0), e;
            }
          },
          isTimerRunning: () => xt.timeout && xt.timeout.isRunning(),
          bindClickHandler: function (t = "data-swal-template") {
            (Tt[t] = this),
              kt || (document.body.addEventListener("click", Ot), (kt = !0));
          },
        });
        function Ut() {
          const t = ut.innerParams.get(this);
          if (!t) return;
          const e = ut.domCache.get(this);
          K(e.loader),
            N() ? t.icon && Q(v()) : zt(e),
            $([e.popup, e.actions], p.loading),
            e.popup.removeAttribute("aria-busy"),
            e.popup.removeAttribute("data-loading"),
            (e.confirmButton.disabled = !1),
            (e.denyButton.disabled = !1),
            (e.cancelButton.disabled = !1);
        }
        const zt = (t) => {
            const e = t.popup.getElementsByClassName(
              t.loader.getAttribute("data-button-to-replace")
            );
            e.length
              ? Q(e[0], "inline-block")
              : !Y(x()) && !Y(A()) && !Y(k()) && K(t.actions);
          },
          Ht = (t) => {
            const e = t.target,
              n = m();
            return !(
              $t(t) ||
              qt(t) ||
              (e !== n &&
                (X(n) ||
                  "INPUT" === e.tagName ||
                  "TEXTAREA" === e.tagName ||
                  (X(_()) && _().contains(e))))
            );
          },
          $t = (t) =>
            t.touches &&
            t.touches.length &&
            "stylus" === t.touches[0].touchType,
          qt = (t) => t.touches && t.touches.length > 1;
        var Wt = { swalPromiseResolve: new WeakMap() };
        function Qt(t, e, n, s) {
          N()
            ? Xt(t, s)
            : (((t) =>
                new Promise((e) => {
                  if (!t) return e();
                  const n = window.scrollX,
                    r = window.scrollY;
                  (xt.restoreFocusTimeout = setTimeout(() => {
                    xt.previousActiveElement && xt.previousActiveElement.focus
                      ? (xt.previousActiveElement.focus(),
                        (xt.previousActiveElement = null))
                      : document.body && document.body.focus(),
                      e();
                  }, 100)),
                    window.scrollTo(n, r);
                }))(n).then(() => Xt(t, s)),
              xt.keydownTarget.removeEventListener(
                "keydown",
                xt.keydownHandler,
                { capture: xt.keydownListenerCapture }
              ),
              (xt.keydownHandlerAdded = !1)),
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
              ? (e.setAttribute("style", "display:none !important"),
                e.removeAttribute("class"),
                (e.innerHTML = ""))
              : e.remove(),
            R() &&
              (null !== M.previousBodyPadding &&
                ((document.body.style.paddingRight = "".concat(
                  M.previousBodyPadding,
                  "px"
                )),
                (M.previousBodyPadding = null)),
              (() => {
                if (V(document.body, p.iosfix)) {
                  const t = parseInt(document.body.style.top, 10);
                  $(document.body, p.iosfix),
                    (document.body.style.top = ""),
                    (document.body.scrollTop = -1 * t);
                }
              })(),
              r(document.body.children).forEach((t) => {
                t.hasAttribute("data-previous-aria-hidden")
                  ? (t.setAttribute(
                      "aria-hidden",
                      t.getAttribute("data-previous-aria-hidden")
                    ),
                    t.removeAttribute("data-previous-aria-hidden"))
                  : t.removeAttribute("aria-hidden");
              })),
            $(
              [document.documentElement, document.body],
              [p.shown, p["height-auto"], p["no-backdrop"], p["toast-shown"]]
            );
        }
        function Kt(t) {
          const e = w();
          if (!e) return;
          t = Gt(t);
          const n = ut.innerParams.get(this);
          if (!n || V(e, n.hideClass.popup)) return;
          const r = Wt.swalPromiseResolve.get(this);
          $(e, n.showClass.popup), H(e, n.hideClass.popup);
          const s = m();
          $(s, n.showClass.backdrop),
            H(s, n.hideClass.backdrop),
            Zt(this, e, n),
            r(t);
        }
        const Gt = (t) =>
            void 0 === t
              ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
              : Object.assign(
                  { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
                  t
                ),
          Zt = (t, e, n) => {
            const r = m(),
              s = at && J(e);
            "function" == typeof n.willClose && n.willClose(e),
              s
                ? Yt(t, e, r, n.returnFocus, n.didClose)
                : Qt(t, r, n.returnFocus, n.didClose);
          },
          Yt = (t, e, n, r, s) => {
            (xt.swalCloseEventFinishedCallback = Qt.bind(null, t, n, r, s)),
              e.addEventListener(at, function (t) {
                t.target === e &&
                  (xt.swalCloseEventFinishedCallback(),
                  delete xt.swalCloseEventFinishedCallback);
              });
          },
          Xt = (t, e) => {
            setTimeout(() => {
              "function" == typeof e && e.bind(t.params)(), t._destroy();
            });
          };
        function Jt(t, e, n) {
          const r = ut.domCache.get(t);
          e.forEach((t) => {
            r[t].disabled = n;
          });
        }
        function te(t, e) {
          if (!t) return !1;
          if ("radio" === t.type) {
            const n = t.parentNode.parentNode.querySelectorAll("input");
            for (let t = 0; t < n.length; t++) n[t].disabled = e;
          } else t.disabled = e;
        }
        class ee {
          constructor(t, e) {
            (this.callback = t),
              (this.remaining = e),
              (this.running = !1),
              this.start();
          }
          start() {
            return (
              this.running ||
                ((this.running = !0),
                (this.started = new Date()),
                (this.id = setTimeout(this.callback, this.remaining))),
              this.remaining
            );
          }
          stop() {
            return (
              this.running &&
                ((this.running = !1),
                clearTimeout(this.id),
                (this.remaining -= new Date() - this.started)),
              this.remaining
            );
          }
          increase(t) {
            const e = this.running;
            return (
              e && this.stop(),
              (this.remaining += t),
              e && this.start(),
              this.remaining
            );
          }
          getTimerLeft() {
            return this.running && (this.stop(), this.start()), this.remaining;
          }
          isRunning() {
            return this.running;
          }
        }
        var ne = {
          email: (t, e) =>
            /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)
              ? Promise.resolve()
              : Promise.resolve(e || "Invalid email address"),
          url: (t, e) =>
            /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
              t
            )
              ? Promise.resolve()
              : Promise.resolve(e || "Invalid URL"),
        };
        function re(t) {
          (function (t) {
            t.inputValidator ||
              Object.keys(ne).forEach((e) => {
                t.input === e && (t.inputValidator = ne[e]);
              });
          })(t),
            t.showLoaderOnConfirm &&
              !t.preConfirm &&
              s(
                "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
              ),
            (function (t) {
              (!t.target ||
                ("string" == typeof t.target &&
                  !document.querySelector(t.target)) ||
                ("string" != typeof t.target && !t.target.appendChild)) &&
                (s('Target parameter is not valid, defaulting to "body"'),
                (t.target = "body"));
            })(t),
            "string" == typeof t.title &&
              (t.title = t.title.split("\n").join("<br />")),
            ((t) => {
              const e = (() => {
                const t = m();
                return (
                  !!t &&
                  (t.remove(),
                  $(
                    [document.documentElement, document.body],
                    [p["no-backdrop"], p["toast-shown"], p["has-column"]]
                  ),
                  !0)
                );
              })();
              if (et())
                return void i("SweetAlert2 requires document to initialize");
              const n = document.createElement("div");
              (n.className = p.container),
                e && H(n, p["no-transition"]),
                j(n, nt);
              const r =
                "string" == typeof (s = t.target)
                  ? document.querySelector(s)
                  : s;
              var s;
              r.appendChild(n),
                ((t) => {
                  const e = w();
                  e.setAttribute("role", t.toast ? "alert" : "dialog"),
                    e.setAttribute(
                      "aria-live",
                      t.toast ? "polite" : "assertive"
                    ),
                    t.toast || e.setAttribute("aria-modal", "true");
                })(t),
                ((t) => {
                  "rtl" === window.getComputedStyle(t).direction &&
                    H(m(), p.rtl);
                })(r),
                (() => {
                  const t = w(),
                    e = q(t, p.input),
                    n = q(t, p.file),
                    r = t.querySelector(".".concat(p.range, " input")),
                    s = t.querySelector(".".concat(p.range, " output")),
                    i = q(t, p.select),
                    o = t.querySelector(".".concat(p.checkbox, " input")),
                    a = q(t, p.textarea);
                  (e.oninput = rt),
                    (n.onchange = rt),
                    (i.onchange = rt),
                    (o.onchange = rt),
                    (a.oninput = rt),
                    (r.oninput = () => {
                      rt(), (s.value = r.value);
                    }),
                    (r.onchange = () => {
                      rt(), (r.nextSibling.value = r.value);
                    });
                })();
            })(t);
        }
        const se = ["swal-title", "swal-html", "swal-footer"],
          ie = (t, e) => {
            r(t.attributes).forEach((n) => {
              -1 === e.indexOf(n.name) &&
                s([
                  'Unrecognized attribute "'
                    .concat(n.name, '" on <')
                    .concat(t.tagName.toLowerCase(), ">."),
                  "".concat(
                    e.length
                      ? "Allowed attributes are: ".concat(e.join(", "))
                      : "To set the value, use HTML within the element."
                  ),
                ]);
            });
          },
          oe = (t) => {
            const e = w();
            if (t.target !== e) return;
            const n = m();
            e.removeEventListener(at, oe), (n.style.overflowY = "auto");
          },
          ae = (t, e) => {
            at && J(e)
              ? ((t.style.overflowY = "hidden"), e.addEventListener(at, oe))
              : (t.style.overflowY = "auto");
          },
          le = (t, e, n) => {
            (() => {
              if (
                ((/iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !window.MSStream) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1)) &&
                !V(document.body, p.iosfix)
              ) {
                const t = document.body.scrollTop;
                (document.body.style.top = "".concat(-1 * t, "px")),
                  H(document.body, p.iosfix),
                  (() => {
                    const t = m();
                    let e;
                    (t.ontouchstart = (t) => {
                      e = Ht(t);
                    }),
                      (t.ontouchmove = (t) => {
                        e && (t.preventDefault(), t.stopPropagation());
                      });
                  })(),
                  (() => {
                    if (
                      !navigator.userAgent.match(
                        /(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i
                      )
                    ) {
                      const t = 44;
                      w().scrollHeight > window.innerHeight - t &&
                        (m().style.paddingBottom = "".concat(t, "px"));
                    }
                  })();
              }
            })(),
              e &&
                "hidden" !== n &&
                null === M.previousBodyPadding &&
                document.body.scrollHeight > window.innerHeight &&
                ((M.previousBodyPadding = parseInt(
                  window
                    .getComputedStyle(document.body)
                    .getPropertyValue("padding-right")
                )),
                (document.body.style.paddingRight = "".concat(
                  M.previousBodyPadding +
                    (() => {
                      const t = document.createElement("div");
                      (t.className = p["scrollbar-measure"]),
                        document.body.appendChild(t);
                      const e = t.getBoundingClientRect().width - t.clientWidth;
                      return document.body.removeChild(t), e;
                    })(),
                  "px"
                ))),
              setTimeout(() => {
                t.scrollTop = 0;
              });
          },
          ue = (t, e, n) => {
            H(t, n.showClass.backdrop),
              e.style.setProperty("opacity", "0", "important"),
              Q(e, "grid"),
              setTimeout(() => {
                H(e, n.showClass.popup), e.style.removeProperty("opacity");
              }, 10),
              H([document.documentElement, document.body], p.shown),
              n.heightAuto &&
                n.backdrop &&
                !n.toast &&
                H([document.documentElement, document.body], p["height-auto"]);
          },
          ce = {
            select: (t, e, n) => {
              const r = q(t, p.select),
                s = (t, e, r) => {
                  const s = document.createElement("option");
                  (s.value = r),
                    j(s, e),
                    (s.selected = de(r, n.inputValue)),
                    t.appendChild(s);
                };
              e.forEach((t) => {
                const e = t[0],
                  n = t[1];
                if (Array.isArray(n)) {
                  const t = document.createElement("optgroup");
                  (t.label = e),
                    (t.disabled = !1),
                    r.appendChild(t),
                    n.forEach((e) => s(t, e[1], e[0]));
                } else s(r, n, e);
              }),
                r.focus();
            },
            radio: (t, e, n) => {
              const r = q(t, p.radio);
              e.forEach((t) => {
                const e = t[0],
                  s = t[1],
                  i = document.createElement("input"),
                  o = document.createElement("label");
                (i.type = "radio"),
                  (i.name = p.radio),
                  (i.value = e),
                  de(e, n.inputValue) && (i.checked = !0);
                const a = document.createElement("span");
                j(a, s),
                  (a.className = p.label),
                  o.appendChild(i),
                  o.appendChild(a),
                  r.appendChild(o);
              });
              const s = r.querySelectorAll("input");
              s.length && s[0].focus();
            },
          },
          he = (t) => {
            const e = [];
            return (
              "undefined" != typeof Map && t instanceof Map
                ? t.forEach((t, n) => {
                    let r = t;
                    "object" == typeof r && (r = he(r)), e.push([n, r]);
                  })
                : Object.keys(t).forEach((n) => {
                    let r = t[n];
                    "object" == typeof r && (r = he(r)), e.push([n, r]);
                  }),
              e
            );
          },
          de = (t, e) => e && e.toString() === t.toString(),
          pe = (t, e, n) => {
            const r = ((t, e) => {
              const n = t.getInput();
              if (!n) return null;
              switch (e.input) {
                case "checkbox":
                  return ((t) => (t.checked ? 1 : 0))(n);
                case "radio":
                  return ((t) => (t.checked ? t.value : null))(n);
                case "file":
                  return ((t) =>
                    t.files.length
                      ? null !== t.getAttribute("multiple")
                        ? t.files
                        : t.files[0]
                      : null)(n);
                default:
                  return e.inputAutoTrim ? n.value.trim() : n.value;
              }
            })(t, e);
            e.inputValidator
              ? fe(t, e, r, n)
              : t.getInput().checkValidity()
              ? "deny" === n
                ? me(t, e, r)
                : ye(t, e, r)
              : (t.enableButtons(),
                t.showValidationMessage(e.validationMessage));
          },
          fe = (t, e, n, r) => {
            t.disableInput(),
              Promise.resolve()
                .then(() => u(e.inputValidator(n, e.validationMessage)))
                .then((s) => {
                  t.enableButtons(),
                    t.enableInput(),
                    s
                      ? t.showValidationMessage(s)
                      : "deny" === r
                      ? me(t, e, n)
                      : ye(t, e, n);
                });
          },
          me = (t, e, n) => {
            e.showLoaderOnDeny && Et(A()),
              e.preDeny
                ? Promise.resolve()
                    .then(() => u(e.preDeny(n, e.validationMessage)))
                    .then((e) => {
                      !1 === e
                        ? t.hideLoading()
                        : t.closePopup({
                            isDenied: !0,
                            value: void 0 === e ? n : e,
                          });
                    })
                : t.closePopup({ isDenied: !0, value: n });
          },
          ge = (t, e) => {
            t.closePopup({ isConfirmed: !0, value: e });
          },
          ye = (t, e, n) => {
            e.showLoaderOnConfirm && Et(),
              e.preConfirm
                ? (t.resetValidationMessage(),
                  Promise.resolve()
                    .then(() => u(e.preConfirm(n, e.validationMessage)))
                    .then((e) => {
                      Y(S()) || !1 === e
                        ? t.hideLoading()
                        : ge(t, void 0 === e ? n : e);
                    }))
                : ge(t, n);
          },
          we = (t, e, n) => {
            const r = I();
            if (r.length)
              return (
                (e += n) === r.length
                  ? (e = 0)
                  : -1 === e && (e = r.length - 1),
                r[e].focus()
              );
            w().focus();
          },
          ve = ["ArrowRight", "ArrowDown"],
          be = ["ArrowLeft", "ArrowUp"],
          _e = (t, e, n) => {
            if (
              !e.isComposing &&
              e.target &&
              t.getInput() &&
              e.target.outerHTML === t.getInput().outerHTML
            ) {
              if (["textarea", "file"].includes(n.input)) return;
              Ct(), e.preventDefault();
            }
          },
          Ce = (t, e) => {
            const n = t.target,
              r = I();
            let s = -1;
            for (let i = 0; i < r.length; i++)
              if (n === r[i]) {
                s = i;
                break;
              }
            we(0, s, t.shiftKey ? -1 : 1),
              t.stopPropagation(),
              t.preventDefault();
          },
          Ee = (t) => {
            if (![x(), A(), k()].includes(document.activeElement)) return;
            const e = ve.includes(t)
                ? "nextElementSibling"
                : "previousElementSibling",
              n = document.activeElement[e];
            n && n.focus();
          },
          Se = (e, n, r) => {
            a(n.allowEscapeKey) && (e.preventDefault(), r(t.esc));
          };
        let xe = !1;
        const Ae = (t, e) => {
            const i = ((t) => {
                const e =
                  "string" == typeof t.template
                    ? document.querySelector(t.template)
                    : t.template;
                if (!e) return {};
                const i = e.content;
                return (
                  ((t) => {
                    const e = se.concat([
                      "swal-param",
                      "swal-button",
                      "swal-image",
                      "swal-icon",
                      "swal-input",
                      "swal-input-option",
                    ]);
                    r(t.children).forEach((t) => {
                      const n = t.tagName.toLowerCase();
                      -1 === e.indexOf(n) &&
                        s("Unrecognized element <".concat(n, ">"));
                    });
                  })(i),
                  Object.assign(
                    ((t) => {
                      const e = {};
                      return (
                        r(t.querySelectorAll("swal-param")).forEach((t) => {
                          ie(t, ["name", "value"]);
                          const n = t.getAttribute("name");
                          let r = t.getAttribute("value");
                          "boolean" == typeof Ft[n] &&
                            "false" === r &&
                            (r = !1),
                            "object" == typeof Ft[n] && (r = JSON.parse(r)),
                            (e[n] = r);
                        }),
                        e
                      );
                    })(i),
                    ((t) => {
                      const e = {};
                      return (
                        r(t.querySelectorAll("swal-button")).forEach((t) => {
                          ie(t, ["type", "color", "aria-label"]);
                          const r = t.getAttribute("type");
                          (e["".concat(r, "ButtonText")] = t.innerHTML),
                            (e["show".concat(n(r), "Button")] = !0),
                            t.hasAttribute("color") &&
                              (e["".concat(r, "ButtonColor")] =
                                t.getAttribute("color")),
                            t.hasAttribute("aria-label") &&
                              (e["".concat(r, "ButtonAriaLabel")] =
                                t.getAttribute("aria-label"));
                        }),
                        e
                      );
                    })(i),
                    ((t) => {
                      const e = {},
                        n = t.querySelector("swal-image");
                      return (
                        n &&
                          (ie(n, ["src", "width", "height", "alt"]),
                          n.hasAttribute("src") &&
                            (e.imageUrl = n.getAttribute("src")),
                          n.hasAttribute("width") &&
                            (e.imageWidth = n.getAttribute("width")),
                          n.hasAttribute("height") &&
                            (e.imageHeight = n.getAttribute("height")),
                          n.hasAttribute("alt") &&
                            (e.imageAlt = n.getAttribute("alt"))),
                        e
                      );
                    })(i),
                    ((t) => {
                      const e = {},
                        n = t.querySelector("swal-icon");
                      return (
                        n &&
                          (ie(n, ["type", "color"]),
                          n.hasAttribute("type") &&
                            (e.icon = n.getAttribute("type")),
                          n.hasAttribute("color") &&
                            (e.iconColor = n.getAttribute("color")),
                          (e.iconHtml = n.innerHTML)),
                        e
                      );
                    })(i),
                    ((t) => {
                      const e = {},
                        n = t.querySelector("swal-input");
                      n &&
                        (ie(n, ["type", "label", "placeholder", "value"]),
                        (e.input = n.getAttribute("type") || "text"),
                        n.hasAttribute("label") &&
                          (e.inputLabel = n.getAttribute("label")),
                        n.hasAttribute("placeholder") &&
                          (e.inputPlaceholder = n.getAttribute("placeholder")),
                        n.hasAttribute("value") &&
                          (e.inputValue = n.getAttribute("value")));
                      const s = t.querySelectorAll("swal-input-option");
                      return (
                        s.length &&
                          ((e.inputOptions = {}),
                          r(s).forEach((t) => {
                            ie(t, ["value"]);
                            const n = t.getAttribute("value");
                            e.inputOptions[n] = t.innerHTML;
                          })),
                        e
                      );
                    })(i),
                    ((t, e) => {
                      const n = {};
                      for (const r in e) {
                        const s = e[r],
                          i = t.querySelector(s);
                        i &&
                          (ie(i, []),
                          (n[s.replace(/^swal-/, "")] = i.innerHTML.trim()));
                      }
                      return n;
                    })(i, se)
                  )
                );
              })(t),
              o = Object.assign({}, Ft, e, i, t);
            return (
              (o.showClass = Object.assign({}, Ft.showClass, o.showClass)),
              (o.hideClass = Object.assign({}, Ft.hideClass, o.hideClass)),
              o
            );
          },
          De = (e, n, s) =>
            new Promise((o) => {
              const h = (t) => {
                e.closePopup({ isDismissed: !0, dismiss: t });
              };
              Wt.swalPromiseResolve.set(e, o),
                (n.confirmButton.onclick = () =>
                  ((t, e) => {
                    t.disableButtons(),
                      e.input ? pe(t, e, "confirm") : ye(t, e, !0);
                  })(e, s)),
                (n.denyButton.onclick = () =>
                  ((t, e) => {
                    t.disableButtons(),
                      e.returnInputValueOnDeny
                        ? pe(t, e, "deny")
                        : me(t, e, !1);
                  })(e, s)),
                (n.cancelButton.onclick = () =>
                  ((e, n) => {
                    e.disableButtons(), n(t.cancel);
                  })(e, h)),
                (n.closeButton.onclick = () => h(t.close)),
                ((e, n, r) => {
                  ut.innerParams.get(e).toast
                    ? ((e, n, r) => {
                        n.popup.onclick = () => {
                          const n = ut.innerParams.get(e);
                          n.showConfirmButton ||
                            n.showDenyButton ||
                            n.showCancelButton ||
                            n.showCloseButton ||
                            n.timer ||
                            n.input ||
                            r(t.close);
                        };
                      })(e, n, r)
                    : (((t) => {
                        t.popup.onmousedown = () => {
                          t.container.onmouseup = function (e) {
                            (t.container.onmouseup = void 0),
                              e.target === t.container && (xe = !0);
                          };
                        };
                      })(n),
                      ((t) => {
                        t.container.onmousedown = () => {
                          t.popup.onmouseup = function (e) {
                            (t.popup.onmouseup = void 0),
                              (e.target === t.popup ||
                                t.popup.contains(e.target)) &&
                                (xe = !0);
                          };
                        };
                      })(n),
                      ((e, n, r) => {
                        n.container.onclick = (s) => {
                          const i = ut.innerParams.get(e);
                          xe
                            ? (xe = !1)
                            : s.target === n.container &&
                              a(i.allowOutsideClick) &&
                              r(t.backdrop);
                        };
                      })(e, n, r));
                })(e, n, h),
                ((t, e, n, r) => {
                  e.keydownTarget &&
                    e.keydownHandlerAdded &&
                    (e.keydownTarget.removeEventListener(
                      "keydown",
                      e.keydownHandler,
                      { capture: e.keydownListenerCapture }
                    ),
                    (e.keydownHandlerAdded = !1)),
                    n.toast ||
                      ((e.keydownHandler = (e) =>
                        ((t, e, n) => {
                          const r = ut.innerParams.get(t);
                          r &&
                            (r.stopKeydownPropagation && e.stopPropagation(),
                            "Enter" === e.key
                              ? _e(t, e, r)
                              : "Tab" === e.key
                              ? Ce(e, r)
                              : [...ve, ...be].includes(e.key)
                              ? Ee(e.key)
                              : "Escape" === e.key && Se(e, r, n));
                        })(t, e, r)),
                      (e.keydownTarget = n.keydownListenerCapture
                        ? window
                        : w()),
                      (e.keydownListenerCapture = n.keydownListenerCapture),
                      e.keydownTarget.addEventListener(
                        "keydown",
                        e.keydownHandler,
                        { capture: e.keydownListenerCapture }
                      ),
                      (e.keydownHandlerAdded = !0));
                })(e, xt, s, h),
                ((t, e) => {
                  "select" === e.input || "radio" === e.input
                    ? ((t, e) => {
                        const n = w(),
                          r = (t) => ce[e.input](n, he(t), e);
                        l(e.inputOptions) || c(e.inputOptions)
                          ? (Et(x()),
                            u(e.inputOptions).then((e) => {
                              t.hideLoading(), r(e);
                            }))
                          : "object" == typeof e.inputOptions
                          ? r(e.inputOptions)
                          : i(
                              "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
                                typeof e.inputOptions
                              )
                            );
                      })(t, e)
                    : ["text", "email", "number", "tel", "textarea"].includes(
                        e.input
                      ) &&
                      (l(e.inputValue) || c(e.inputValue)) &&
                      (Et(x()),
                      ((t, e) => {
                        const n = t.getInput();
                        K(n),
                          u(e.inputValue)
                            .then((r) => {
                              (n.value =
                                "number" === e.input
                                  ? parseFloat(r) || 0
                                  : "".concat(r)),
                                Q(n),
                                n.focus(),
                                t.hideLoading();
                            })
                            .catch((e) => {
                              i("Error in inputValue promise: ".concat(e)),
                                (n.value = ""),
                                Q(n),
                                n.focus(),
                                t.hideLoading();
                            });
                      })(t, e));
                })(e, s),
                ((t) => {
                  const e = m(),
                    n = w();
                  "function" == typeof t.willOpen && t.willOpen(n);
                  const s = window.getComputedStyle(document.body).overflowY;
                  ue(e, n, t),
                    setTimeout(() => {
                      ae(e, n);
                    }, 10),
                    R() &&
                      (le(e, t.scrollbarPadding, s),
                      r(document.body.children).forEach((t) => {
                        t === m() ||
                          t.contains(m()) ||
                          (t.hasAttribute("aria-hidden") &&
                            t.setAttribute(
                              "data-previous-aria-hidden",
                              t.getAttribute("aria-hidden")
                            ),
                          t.setAttribute("aria-hidden", "true"));
                      })),
                    N() ||
                      xt.previousActiveElement ||
                      (xt.previousActiveElement = document.activeElement),
                    "function" == typeof t.didOpen &&
                      setTimeout(() => t.didOpen(n)),
                    $(e, p["no-transition"]);
                })(s),
                ke(xt, s, h),
                Te(n, s),
                setTimeout(() => {
                  n.container.scrollTop = 0;
                });
            }),
          ke = (t, e, n) => {
            const r = F();
            K(r),
              e.timer &&
                ((t.timeout = new ee(() => {
                  n("timer"), delete t.timeout;
                }, e.timer)),
                e.timerProgressBar &&
                  (Q(r),
                  setTimeout(() => {
                    t.timeout && t.timeout.running && tt(e.timer);
                  })));
          },
          Te = (t, e) => {
            if (!e.toast)
              return a(e.allowEnterKey)
                ? void (Oe(t, e) || we(0, -1, 1))
                : Fe();
          },
          Oe = (t, e) =>
            e.focusDeny && Y(t.denyButton)
              ? (t.denyButton.focus(), !0)
              : e.focusCancel && Y(t.cancelButton)
              ? (t.cancelButton.focus(), !0)
              : !(
                  !e.focusConfirm ||
                  !Y(t.confirmButton) ||
                  (t.confirmButton.focus(), 0)
                ),
          Fe = () => {
            document.activeElement &&
              "function" == typeof document.activeElement.blur &&
              document.activeElement.blur();
          },
          Pe = (t) => {
            for (const e in t) t[e] = new WeakMap();
          };
        var Ie = Object.freeze({
          hideLoading: Ut,
          disableLoading: Ut,
          getInput: function (t) {
            const e = ut.innerParams.get(t || this),
              n = ut.domCache.get(t || this);
            return n ? L(n.popup, e.input) : null;
          },
          close: Kt,
          closePopup: Kt,
          closeModal: Kt,
          closeToast: Kt,
          enableButtons: function () {
            Jt(this, ["confirmButton", "denyButton", "cancelButton"], !1);
          },
          disableButtons: function () {
            Jt(this, ["confirmButton", "denyButton", "cancelButton"], !0);
          },
          enableInput: function () {
            return te(this.getInput(), !1);
          },
          disableInput: function () {
            return te(this.getInput(), !0);
          },
          showValidationMessage: function (t) {
            const e = ut.domCache.get(this),
              n = ut.innerParams.get(this);
            j(e.validationMessage, t),
              (e.validationMessage.className = p["validation-message"]),
              n.customClass &&
                n.customClass.validationMessage &&
                H(e.validationMessage, n.customClass.validationMessage),
              Q(e.validationMessage);
            const r = this.getInput();
            r &&
              (r.setAttribute("aria-invalid", !0),
              r.setAttribute("aria-describedby", p["validation-message"]),
              U(r),
              H(r, p.inputerror));
          },
          resetValidationMessage: function () {
            const t = ut.domCache.get(this);
            t.validationMessage && K(t.validationMessage);
            const e = this.getInput();
            e &&
              (e.removeAttribute("aria-invalid"),
              e.removeAttribute("aria-describedby"),
              $(e, p.inputerror));
          },
          getProgressSteps: function () {
            return ut.domCache.get(this).progressSteps;
          },
          _main: function (t, e = {}) {
            ((t) => {
              !t.backdrop &&
                t.allowOutsideClick &&
                s(
                  '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
                );
              for (const e in t) jt(e), t.toast && Vt(e), Bt(e);
            })(Object.assign({}, e, t)),
              xt.currentInstance && xt.currentInstance._destroy(),
              (xt.currentInstance = this);
            const n = Ae(t, e);
            re(n),
              Object.freeze(n),
              xt.timeout && (xt.timeout.stop(), delete xt.timeout),
              clearTimeout(xt.restoreFocusTimeout);
            const r = ((t) => {
              const e = {
                popup: w(),
                container: m(),
                actions: T(),
                confirmButton: x(),
                denyButton: A(),
                cancelButton: k(),
                loader: D(),
                closeButton: P(),
                validationMessage: S(),
                progressSteps: E(),
              };
              return ut.domCache.set(t, e), e;
            })(this);
            return _t(this, n), ut.innerParams.set(this, n), De(this, r, n);
          },
          update: function (t) {
            const e = w(),
              n = ut.innerParams.get(this);
            if (!e || V(e, n.hideClass.popup))
              return s(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
              );
            const r = {};
            Object.keys(t).forEach((e) => {
              Me.isUpdatableParameter(e)
                ? (r[e] = t[e])
                : s(
                    'Invalid parameter to update: "'.concat(
                      e,
                      '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'
                    )
                  );
            });
            const i = Object.assign({}, n, r);
            _t(this, i),
              ut.innerParams.set(this, i),
              Object.defineProperties(this, {
                params: {
                  value: Object.assign({}, this.params, t),
                  writable: !1,
                  enumerable: !0,
                },
              });
          },
          _destroy: function () {
            const t = ut.domCache.get(this),
              e = ut.innerParams.get(this);
            e &&
              (t.popup &&
                xt.swalCloseEventFinishedCallback &&
                (xt.swalCloseEventFinishedCallback(),
                delete xt.swalCloseEventFinishedCallback),
              xt.deferDisposalTimer &&
                (clearTimeout(xt.deferDisposalTimer),
                delete xt.deferDisposalTimer),
              "function" == typeof e.didDestroy && e.didDestroy(),
              delete this.params,
              delete xt.keydownHandler,
              delete xt.keydownTarget,
              Pe(ut),
              Pe(Wt));
          },
        });
        let Re;
        class Ne {
          constructor(...t) {
            if ("undefined" == typeof window) return;
            Re = this;
            const e = Object.freeze(this.constructor.argsToParams(t));
            Object.defineProperties(this, {
              params: {
                value: e,
                writable: !1,
                enumerable: !0,
                configurable: !0,
              },
            });
            const n = this._main(this.params);
            ut.promise.set(this, n);
          }
          then(t) {
            return ut.promise.get(this).then(t);
          }
          finally(t) {
            return ut.promise.get(this).finally(t);
          }
        }
        Object.assign(Ne.prototype, Ie),
          Object.assign(Ne, Lt),
          Object.keys(Ie).forEach((t) => {
            Ne[t] = function (...e) {
              if (Re) return Re[t](...e);
            };
          }),
          (Ne.DismissReason = t),
          (Ne.version = "11.0.18");
        const Me = Ne;
        return (Me.default = Me), Me;
      })()),
        void 0 !== this &&
          this.Sweetalert2 &&
          (this.swal =
            this.sweetAlert =
            this.Swal =
            this.SweetAlert =
              this.Sweetalert2),
        "undefined" != typeof document &&
          (function (t, e) {
            var n = t.createElement("style");
            if (
              (t.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
            )
              n.styleSheet.disabled || (n.styleSheet.cssText = e);
            else
              try {
                n.innerHTML = e;
              } catch (t) {
                n.innerText = e;
              }
          })(
            document,
            '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9;pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end" "gap gap gap";grid-template-rows:auto auto auto .625em;height:100%;padding:.625em .625em 0;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container::after{content:"";grid-column:1/4;grid-row:4;height:.625em}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}'
          );
    },
    733: (t, e, n) => {
      "use strict";
      function r(t) {
        return "function" == typeof t;
      }
      let s = !1;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                t.stack
            );
          } else
            s &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          s = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
      function o(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      const a = {
          closed: !0,
          next(t) {},
          error(t) {
            if (i.useDeprecatedSynchronousErrorHandling) throw t;
            o(t);
          },
          complete() {},
        },
        l = (() =>
          Array.isArray || ((t) => t && "number" == typeof t.length))();
      function u(t) {
        return null !== t && "object" == typeof t;
      }
      const c = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let h = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _ctorUnsubscribe: s,
              _unsubscribe: i,
              _subscriptions: o,
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof t)
            )
              n.remove(this);
            else if (null !== n)
              for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (r(i)) {
              s && (this._unsubscribe = void 0);
              try {
                i.call(this);
              } catch (a) {
                e = a instanceof c ? d(a.errors) : [a];
              }
            }
            if (l(o)) {
              let t = -1,
                n = o.length;
              for (; ++t < n; ) {
                const n = o[t];
                if (u(n))
                  try {
                    n.unsubscribe();
                  } catch (a) {
                    (e = e || []),
                      a instanceof c ? (e = e.concat(d(a.errors))) : e.push(a);
                  }
              }
            }
            if (e) throw new c(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case "function":
                n = new t(e);
              case "object":
                if (
                  n === this ||
                  n.closed ||
                  "function" != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + e + " added to Subscription."
                );
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof t) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        return (
          (t.EMPTY = (function (t) {
            return (t.closed = !0), t;
          })(new t())),
          t
        );
      })();
      function d(t) {
        return t.reduce((t, e) => t.concat(e instanceof c ? e.errors : e), []);
      }
      const p = (() =>
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random())();
      class f extends h {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!t) {
                this.destination = a;
                break;
              }
              if ("object" == typeof t) {
                t instanceof f
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new m(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new m(this, t, e, n));
          }
        }
        [p]() {
          return this;
        }
        static create(t, e, n) {
          const r = new f(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class m extends f {
        constructor(t, e, n, s) {
          let i;
          super(), (this._parentSubscriber = t);
          let o = this;
          r(e)
            ? (i = e)
            : e &&
              ((i = e.next),
              (n = e.error),
              (s = e.complete),
              e !== a &&
                ((o = Object.create(e)),
                r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = i),
            (this._error = n),
            (this._complete = s);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = i;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : o(t),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              o(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!i.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            e.call(this._context, n);
          } catch (r) {
            return i.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (o(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            t.unsubscribe();
        }
      }
      const g = (() =>
        ("function" == typeof Symbol && Symbol.observable) || "@@observable")();
      function y(t) {
        return t;
      }
      let w = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: r } = this,
              s = (function (t, e, n) {
                if (t) {
                  if (t instanceof f) return t;
                  if (t[p]) return t[p]();
                }
                return t || e || n ? new f(t, e, n) : new f(a);
              })(t, e, n);
            if (
              (s.add(
                r
                  ? r.call(s, this.source)
                  : this.source ||
                    (i.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
              ),
              i.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              i.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: r } = t;
                    if (e || r) return !1;
                    t = n && n instanceof f ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = v(e))((e, n) => {
              let r;
              r = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [g]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length
              ? this
              : (0 === (e = t).length
                  ? y
                  : 1 === e.length
                  ? e[0]
                  : function (t) {
                      return e.reduce((t, e) => e(t), t);
                    })(this);
            var e;
          }
          toPromise(t) {
            return new (t = v(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function v(t) {
        if ((t || (t = i.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
      const b = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      class _ extends h {
        constructor(t, e) {
          super(),
            (this.subject = t),
            (this.subscriber = e),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (
            ((this.subject = null),
            !e || 0 === e.length || t.isStopped || t.closed)
          )
            return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
      class C extends f {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let E = (() => {
        class t extends w {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [p]() {
            return new C(this);
          }
          lift(t) {
            const e = new S(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new b();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let s = 0; s < n; s++) r[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new b();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let s = 0; s < n; s++) r[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new b();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new b();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new b();
            return this.hasError
              ? (t.error(this.thrownError), h.EMPTY)
              : this.isStopped
              ? (t.complete(), h.EMPTY)
              : (this.observers.push(t), new _(this, t));
          }
          asObservable() {
            const t = new w();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new S(t, e)), t;
      })();
      class S extends E {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : h.EMPTY;
        }
      }
      function x(t) {
        return t && "function" == typeof t.schedule;
      }
      function A(t, e) {
        return function (n) {
          if ("function" != typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new D(t, e));
        };
      }
      class D {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new k(t, this.project, this.thisArg));
        }
      }
      class k extends f {
        constructor(t, e, n) {
          super(t),
            (this.project = e),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const T = (t) => (e) => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
      function O() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      const F = O(),
        P = (t) => t && "number" == typeof t.length && "function" != typeof t;
      function I(t) {
        return (
          !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        );
      }
      const R = (t) => {
        if (t && "function" == typeof t[g])
          return (
            (n = t),
            (t) => {
              const e = n[g]();
              if ("function" != typeof e.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              return e.subscribe(t);
            }
          );
        if (P(t)) return T(t);
        if (I(t))
          return (
            (t) => (e) =>
              t
                .then(
                  (t) => {
                    e.closed || (e.next(t), e.complete());
                  },
                  (t) => e.error(t)
                )
                .then(null, o),
              e
          )(t);
        if (t && "function" == typeof t[F])
          return (
            (e = t),
            (t) => {
              const n = e[F]();
              for (;;) {
                let e;
                try {
                  e = n.next();
                } catch (r) {
                  return t.error(r), t;
                }
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                "function" == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = u(t) ? "an invalid object" : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var e, n;
      };
      function N(t, e) {
        return new w((n) => {
          const r = new h();
          let s = 0;
          return (
            r.add(
              e.schedule(function () {
                s !== t.length
                  ? (n.next(t[s++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function M(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && "function" == typeof t[g];
                  })(t)
                )
                  return (function (t, e) {
                    return new w((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() => {
                            const s = t[g]();
                            r.add(
                              s.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (I(t))
                  return (function (t, e) {
                    return new w((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t),
                                      r.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (t) => {
                                r.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (P(t)) return N(t, e);
                if (
                  (function (t) {
                    return t && "function" == typeof t[F];
                  })(t) ||
                  "string" == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error("Iterable cannot be null");
                    return new w((n) => {
                      const r = new h();
                      let s;
                      return (
                        r.add(() => {
                          s && "function" == typeof s.return && s.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (s = t[F]()),
                              r.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = s.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e
                                    ? n.complete()
                                    : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + " is not observable"
              );
            })(t, e)
          : t instanceof w
          ? t
          : new w(R(t));
      }
      class j extends f {
        constructor(t) {
          super(), (this.parent = t);
        }
        _next(t) {
          this.parent.notifyNext(t);
        }
        _error(t) {
          this.parent.notifyError(t), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class V extends f {
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyError(t) {
          this.destination.error(t);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function B(t, e) {
        if (e.closed) return;
        if (t instanceof w) return t.subscribe(e);
        let n;
        try {
          n = R(t)(e);
        } catch (r) {
          e.error(r);
        }
        return n;
      }
      function L(t, e, n = Number.POSITIVE_INFINITY) {
        return "function" == typeof e
          ? (r) =>
              r.pipe(
                L((n, r) => M(t(n, r)).pipe(A((t, s) => e(n, t, r, s))), n)
              )
          : ("number" == typeof e && (n = e), (e) => e.lift(new U(t, n)));
      }
      class U {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new z(t, this.project, this.concurrent));
        }
      }
      class z extends V {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent
            ? this._tryNext(t)
            : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e);
        }
        _innerSub(t) {
          const e = new j(this),
            n = this.destination;
          n.add(e);
          const r = B(t, e);
          r !== e && n.add(r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyComplete() {
          const t = this.buffer;
          this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function H(t = Number.POSITIVE_INFINITY) {
        return L(y, t);
      }
      function $(t, e) {
        return e ? N(t, e) : new w(T(t));
      }
      function q() {
        return function (t) {
          return t.lift(new W(t));
        };
      }
      class W {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new Q(t, n),
            s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class Q extends f {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      class K extends w {
        constructor(t, e) {
          super(),
            (this.source = t),
            (this.subjectFactory = e),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (t && !t.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new h()),
              t.add(this.source.subscribe(new Z(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = h.EMPTY))),
            t
          );
        }
        refCount() {
          return q()(this);
        }
      }
      const G = (() => {
        const t = K.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount },
        };
      })();
      class Z extends C {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0),
              (t._subject = null),
              (t._connection = null),
              e && e.unsubscribe();
          }
        }
      }
      function Y() {
        return new E();
      }
      function X(t) {
        for (let e in t) if (t[e] === X) return e;
        throw Error("Could not find renamed property on target object.");
      }
      function J(t, e) {
        for (const n in e)
          e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
      }
      function tt(t) {
        if ("string" == typeof t) return t;
        if (Array.isArray(t)) return "[" + t.map(tt).join(", ") + "]";
        if (null == t) return "" + t;
        if (t.overriddenName) return `${t.overriddenName}`;
        if (t.name) return `${t.name}`;
        const e = t.toString();
        if (null == e) return "" + e;
        const n = e.indexOf("\n");
        return -1 === n ? e : e.substring(0, n);
      }
      function et(t, e) {
        return null == t || "" === t
          ? null === e
            ? ""
            : e
          : null == e || "" === e
          ? t
          : t + " " + e;
      }
      const nt = X({ __forward_ref__: X });
      function rt(t) {
        return (
          (t.__forward_ref__ = rt),
          (t.toString = function () {
            return tt(this());
          }),
          t
        );
      }
      function st(t) {
        return it(t) ? t() : t;
      }
      function it(t) {
        return (
          "function" == typeof t &&
          t.hasOwnProperty(nt) &&
          t.__forward_ref__ === rt
        );
      }
      class ot extends Error {
        constructor(t, e) {
          super(
            (function (t, e) {
              return `${t ? `NG0${t}: ` : ""}${e}`;
            })(t, e)
          ),
            (this.code = t);
        }
      }
      function at(t) {
        return "string" == typeof t ? t : null == t ? "" : String(t);
      }
      function lt(t) {
        return "function" == typeof t
          ? t.name || t.toString()
          : "object" == typeof t && null != t && "function" == typeof t.type
          ? t.type.name || t.type.toString()
          : at(t);
      }
      function ut(t, e) {
        const n = e ? ` in ${e}` : "";
        throw new ot("201", `No provider for ${lt(t)} found${n}`);
      }
      function ct(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      function ht(t) {
        return { providers: t.providers || [], imports: t.imports || [] };
      }
      function dt(t) {
        return pt(t, mt) || pt(t, yt);
      }
      function pt(t, e) {
        return t.hasOwnProperty(e) ? t[e] : null;
      }
      function ft(t) {
        return t && (t.hasOwnProperty(gt) || t.hasOwnProperty(wt))
          ? t[gt]
          : null;
      }
      const mt = X({ "\u0275prov": X }),
        gt = X({ "\u0275inj": X }),
        yt = X({ ngInjectableDef: X }),
        wt = X({ ngInjectorDef: X });
      var vt = (function (t) {
        return (
          (t[(t.Default = 0)] = "Default"),
          (t[(t.Host = 1)] = "Host"),
          (t[(t.Self = 2)] = "Self"),
          (t[(t.SkipSelf = 4)] = "SkipSelf"),
          (t[(t.Optional = 8)] = "Optional"),
          t
        );
      })({});
      let bt;
      function _t(t) {
        const e = bt;
        return (bt = t), e;
      }
      function Ct(t, e, n) {
        const r = dt(t);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & vt.Optional
          ? null
          : void 0 !== e
          ? e
          : void ut(tt(t), "Injector");
      }
      function Et(t) {
        return { toString: t }.toString();
      }
      var St = (function (t) {
          return (
            (t[(t.OnPush = 0)] = "OnPush"), (t[(t.Default = 1)] = "Default"), t
          );
        })({}),
        xt = (function (t) {
          return (
            (t[(t.Emulated = 0)] = "Emulated"),
            (t[(t.None = 2)] = "None"),
            (t[(t.ShadowDom = 3)] = "ShadowDom"),
            t
          );
        })({});
      const At = "undefined" != typeof globalThis && globalThis,
        Dt = "undefined" != typeof window && window,
        kt =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Tt = "undefined" != typeof global && global,
        Ot = At || Tt || Dt || kt,
        Ft = {},
        Pt = [],
        It = X({ "\u0275cmp": X }),
        Rt = X({ "\u0275dir": X }),
        Nt = X({ "\u0275pipe": X }),
        Mt = X({ "\u0275mod": X }),
        jt = X({ "\u0275loc": X }),
        Vt = X({ "\u0275fac": X }),
        Bt = X({ __NG_ELEMENT_ID__: X });
      let Lt = 0;
      function Ut(t) {
        return Et(() => {
          const e = {},
            n = {
              type: t.type,
              providersResolver: null,
              decls: t.decls,
              vars: t.vars,
              factory: null,
              template: t.template || null,
              consts: t.consts || null,
              ngContentSelectors: t.ngContentSelectors,
              hostBindings: t.hostBindings || null,
              hostVars: t.hostVars || 0,
              hostAttrs: t.hostAttrs || null,
              contentQueries: t.contentQueries || null,
              declaredInputs: e,
              inputs: null,
              outputs: null,
              exportAs: t.exportAs || null,
              onPush: t.changeDetection === St.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: t.selectors || Pt,
              viewQuery: t.viewQuery || null,
              features: t.features || null,
              data: t.data || {},
              encapsulation: t.encapsulation || xt.Emulated,
              id: "c",
              styles: t.styles || Pt,
              _: null,
              setInput: null,
              schemas: t.schemas || null,
              tView: null,
            },
            r = t.directives,
            s = t.features,
            i = t.pipes;
          return (
            (n.id += Lt++),
            (n.inputs = Wt(t.inputs, e)),
            (n.outputs = Wt(t.outputs)),
            s && s.forEach((t) => t(n)),
            (n.directiveDefs = r
              ? () => ("function" == typeof r ? r() : r).map(zt)
              : null),
            (n.pipeDefs = i
              ? () => ("function" == typeof i ? i() : i).map(Ht)
              : null),
            n
          );
        });
      }
      function zt(t) {
        return (
          Gt(t) ||
          (function (t) {
            return t[Rt] || null;
          })(t)
        );
      }
      function Ht(t) {
        return (function (t) {
          return t[Nt] || null;
        })(t);
      }
      const $t = {};
      function qt(t) {
        return Et(() => {
          const e = {
            type: t.type,
            bootstrap: t.bootstrap || Pt,
            declarations: t.declarations || Pt,
            imports: t.imports || Pt,
            exports: t.exports || Pt,
            transitiveCompileScopes: null,
            schemas: t.schemas || null,
            id: t.id || null,
          };
          return null != t.id && ($t[t.id] = t.type), e;
        });
      }
      function Wt(t, e) {
        if (null == t) return Ft;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let s = t[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              e && (e[s] = i);
          }
        return n;
      }
      const Qt = Ut;
      function Kt(t) {
        return {
          type: t.type,
          name: t.name,
          factory: null,
          pure: !1 !== t.pure,
          onDestroy: t.type.prototype.ngOnDestroy || null,
        };
      }
      function Gt(t) {
        return t[It] || null;
      }
      function Zt(t, e) {
        const n = t[Mt] || null;
        if (!n && !0 === e)
          throw new Error(`Type ${tt(t)} does not have '\u0275mod' property.`);
        return n;
      }
      const Yt = 20,
        Xt = 10;
      function Jt(t) {
        return Array.isArray(t) && "object" == typeof t[1];
      }
      function te(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function ee(t) {
        return 0 != (8 & t.flags);
      }
      function ne(t) {
        return 2 == (2 & t.flags);
      }
      function re(t) {
        return 1 == (1 & t.flags);
      }
      function se(t) {
        return null !== t.template;
      }
      function ie(t, e) {
        return t.hasOwnProperty(Vt) ? t[Vt] : null;
      }
      class oe {
        constructor(t, e, n) {
          (this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function ae() {
        return le;
      }
      function le(t) {
        return t.type.prototype.ngOnChanges && (t.setInput = ce), ue;
      }
      function ue() {
        const t = he(this),
          e = null == t ? void 0 : t.current;
        if (e) {
          const n = t.previous;
          if (n === Ft) t.previous = e;
          else for (let t in e) n[t] = e[t];
          (t.current = null), this.ngOnChanges(e);
        }
      }
      function ce(t, e, n, r) {
        const s =
            he(t) ||
            (function (t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: Ft, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          l = o[a];
        (i[a] = new oe(l && l.currentValue, e, o === Ft)), (t[r] = e);
      }
      function he(t) {
        return t.__ngSimpleChanges__ || null;
      }
      let de;
      function pe() {
        return void 0 !== de
          ? de
          : "undefined" != typeof document
          ? document
          : void 0;
      }
      function fe(t) {
        return !!t.listen;
      }
      ae.ngInherit = !0;
      const me = { createRenderer: (t, e) => pe() };
      function ge(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function ye(t, e) {
        return ge(e[t]);
      }
      function we(t, e) {
        return ge(e[t.index]);
      }
      function ve(t, e) {
        return t.data[e];
      }
      function be(t, e) {
        return t[e];
      }
      function _e(t, e) {
        const n = e[t];
        return Jt(n) ? n : n[0];
      }
      function Ce(t) {
        return 4 == (4 & t[2]);
      }
      function Ee(t) {
        return 128 == (128 & t[2]);
      }
      function Se(t, e) {
        return null == e ? null : t[e];
      }
      function xe(t) {
        t[18] = 0;
      }
      function Ae(t, e) {
        t[5] += e;
        let n = t,
          r = t[3];
        for (
          ;
          null !== r && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5]));

        )
          (r[5] += e), (n = r), (r = r[3]);
      }
      const De = {
        lFrame: Ge(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      };
      function ke() {
        return De.bindingsEnabled;
      }
      function Te() {
        return De.lFrame.lView;
      }
      function Oe() {
        return De.lFrame.tView;
      }
      function Fe(t) {
        return (De.lFrame.contextLView = t), t[8];
      }
      function Pe() {
        let t = Ie();
        for (; null !== t && 64 === t.type; ) t = t.parent;
        return t;
      }
      function Ie() {
        return De.lFrame.currentTNode;
      }
      function Re(t, e) {
        const n = De.lFrame;
        (n.currentTNode = t), (n.isParent = e);
      }
      function Ne() {
        return De.lFrame.isParent;
      }
      function Me() {
        De.lFrame.isParent = !1;
      }
      function je() {
        return De.isInCheckNoChangesMode;
      }
      function Ve(t) {
        De.isInCheckNoChangesMode = t;
      }
      function Be() {
        const t = De.lFrame;
        let e = t.bindingRootIndex;
        return (
          -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
        );
      }
      function Le() {
        return De.lFrame.bindingIndex++;
      }
      function Ue(t, e) {
        const n = De.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t), ze(e);
      }
      function ze(t) {
        De.lFrame.currentDirectiveIndex = t;
      }
      function He() {
        return De.lFrame.currentQueryIndex;
      }
      function $e(t) {
        De.lFrame.currentQueryIndex = t;
      }
      function qe(t) {
        const e = t[1];
        return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null;
      }
      function We(t, e, n) {
        if (n & vt.SkipSelf) {
          let r = e,
            s = t;
          for (
            ;
            (r = r.parent),
              !(
                null !== r ||
                n & vt.Host ||
                ((r = qe(s)), null === r) ||
                ((s = s[15]), 10 & r.type)
              );

          );
          if (null === r) return !1;
          (e = r), (t = s);
        }
        const r = (De.lFrame = Ke());
        return (r.currentTNode = e), (r.lView = t), !0;
      }
      function Qe(t) {
        const e = Ke(),
          n = t[1];
        (De.lFrame = e),
          (e.currentTNode = n.firstChild),
          (e.lView = t),
          (e.tView = n),
          (e.contextLView = t),
          (e.bindingIndex = n.bindingStartIndex),
          (e.inI18n = !1);
      }
      function Ke() {
        const t = De.lFrame,
          e = null === t ? null : t.child;
        return null === e ? Ge(t) : e;
      }
      function Ge(t) {
        const e = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null,
          inI18n: !1,
        };
        return null !== t && (t.child = e), e;
      }
      function Ze() {
        const t = De.lFrame;
        return (
          (De.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t
        );
      }
      const Ye = Ze;
      function Xe() {
        const t = Ze();
        (t.isParent = !0),
          (t.tView = null),
          (t.selectedIndex = -1),
          (t.contextLView = null),
          (t.elementDepthCount = 0),
          (t.currentDirectiveIndex = -1),
          (t.currentNamespace = null),
          (t.bindingRootIndex = -1),
          (t.bindingIndex = -1),
          (t.currentQueryIndex = 0);
      }
      function Je() {
        return De.lFrame.selectedIndex;
      }
      function tn(t) {
        De.lFrame.selectedIndex = t;
      }
      function en() {
        const t = De.lFrame;
        return ve(t.tView, t.selectedIndex);
      }
      function nn(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n].type.prototype,
            {
              ngAfterContentInit: r,
              ngAfterContentChecked: s,
              ngAfterViewInit: i,
              ngAfterViewChecked: o,
              ngOnDestroy: a,
            } = e;
          r && (t.contentHooks || (t.contentHooks = [])).push(-n, r),
            s &&
              ((t.contentHooks || (t.contentHooks = [])).push(n, s),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, s)),
            i && (t.viewHooks || (t.viewHooks = [])).push(-n, i),
            o &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, o),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)),
            null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a);
        }
      }
      function rn(t, e, n) {
        an(t, e, 3, n);
      }
      function sn(t, e, n, r) {
        (3 & t[2]) === n && an(t, e, n, r);
      }
      function on(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n));
      }
      function an(t, e, n, r) {
        const s = null != r ? r : -1,
          i = e.length - 1;
        let o = 0;
        for (let a = void 0 !== r ? 65535 & t[18] : 0; a < i; a++)
          if ("number" == typeof e[a + 1]) {
            if (((o = e[a]), null != r && o >= r)) break;
          } else
            e[a] < 0 && (t[18] += 65536),
              (o < s || -1 == s) &&
                (ln(t, n, e, a), (t[18] = (4294901760 & t[18]) + a + 2)),
              a++;
      }
      function ln(t, e, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = t[s ? -n[r] : n[r]];
        if (s) {
          if (t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e) {
            t[2] += 2048;
            try {
              i.call(o);
            } finally {
            }
          }
        } else
          try {
            i.call(o);
          } finally {
          }
      }
      const un = -1;
      class cn {
        constructor(t, e, n) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = e),
            (this.injectImpl = n);
        }
      }
      function hn(t, e, n) {
        const r = fe(t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ("number" == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              l = n[s++];
            r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l);
          } else {
            const o = i,
              a = n[++s];
            pn(o)
              ? r && t.setProperty(e, o, a)
              : r
              ? t.setAttribute(e, o, a)
              : e.setAttribute(o, a),
              s++;
          }
        }
        return s;
      }
      function dn(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function pn(t) {
        return 64 === t.charCodeAt(0);
      }
      function fn(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            "number" == typeof s
              ? (n = s)
              : 0 === n ||
                mn(t, n, s, null, -1 === n || 2 === n ? e[++r] : null);
          }
        }
        return t;
      }
      function mn(t, e, n, r, s) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ("number" == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ("number" == typeof e) break;
          if (e === n) {
            if (null === r) return void (null !== s && (t[i + 1] = s));
            if (r === t[i + 1]) return void (t[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== r && t.splice(i++, 0, r),
          null !== s && t.splice(i++, 0, s);
      }
      function gn(t) {
        return t !== un;
      }
      function yn(t) {
        return 32767 & t;
      }
      function wn(t, e) {
        let n = t >> 16,
          r = e;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let vn = !0;
      function bn(t) {
        const e = vn;
        return (vn = t), e;
      }
      let _n = 0;
      function Cn(t, e) {
        const n = Sn(t, e);
        if (-1 !== n) return n;
        const r = e[1];
        r.firstCreatePass &&
          ((t.injectorIndex = e.length),
          En(r.data, t),
          En(e, null),
          En(r.blueprint, null));
        const s = xn(t, e),
          i = t.injectorIndex;
        if (gn(s)) {
          const t = yn(s),
            n = wn(s, e),
            r = n[1].data;
          for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s];
        }
        return (e[i + 8] = s), i;
      }
      function En(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function Sn(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null === e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function xn(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex;
        let n = 0,
          r = null,
          s = e;
        for (; null !== s; ) {
          const t = s[1],
            e = t.type;
          if (((r = 2 === e ? t.declTNode : 1 === e ? s[6] : null), null === r))
            return un;
          if ((n++, (s = s[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return un;
      }
      function An(t, e, n) {
        !(function (t, e, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Bt) && (r = n[Bt]),
            null == r && (r = n[Bt] = _n++);
          const s = 255 & r;
          e.data[t + (s >> 5)] |= 1 << s;
        })(t, e, n);
      }
      function Dn(t, e, n) {
        if (n & vt.Optional) return t;
        ut(e, "NodeInjector");
      }
      function kn(t, e, n, r) {
        if (
          (n & vt.Optional && void 0 === r && (r = null),
          0 == (n & (vt.Self | vt.Host)))
        ) {
          const s = t[9],
            i = _t(void 0);
          try {
            return s ? s.get(e, r, n & vt.Optional) : Ct(e, r, n & vt.Optional);
          } finally {
            _t(i);
          }
        }
        return Dn(r, e, n);
      }
      function Tn(t, e, n, r = vt.Default, s) {
        if (null !== t) {
          const i = (function (t) {
            if ("string" == typeof t) return t.charCodeAt(0) || 0;
            const e = t.hasOwnProperty(Bt) ? t[Bt] : void 0;
            return "number" == typeof e ? (e >= 0 ? 255 & e : Fn) : e;
          })(n);
          if ("function" == typeof i) {
            if (!We(e, t, r)) return r & vt.Host ? Dn(s, n, r) : kn(e, n, r, s);
            try {
              const t = i(r);
              if (null != t || r & vt.Optional) return t;
              ut(n);
            } finally {
              Ye();
            }
          } else if ("number" == typeof i) {
            let s = null,
              o = Sn(t, e),
              a = un,
              l = r & vt.Host ? e[16][6] : null;
            for (
              (-1 === o || r & vt.SkipSelf) &&
              ((a = -1 === o ? xn(t, e) : e[o + 8]),
              a !== un && Mn(r, !1)
                ? ((s = e[1]), (o = yn(a)), (e = wn(a, e)))
                : (o = -1));
              -1 !== o;

            ) {
              const t = e[1];
              if (Nn(i, o, t.data)) {
                const t = Pn(o, e, n, s, r, l);
                if (t !== On) return t;
              }
              (a = e[o + 8]),
                a !== un && Mn(r, e[1].data[o + 8] === l) && Nn(i, o, e)
                  ? ((s = t), (o = yn(a)), (e = wn(a, e)))
                  : (o = -1);
            }
          }
        }
        return kn(e, n, r, s);
      }
      const On = {};
      function Fn() {
        return new jn(Pe(), Te());
      }
      function Pn(t, e, n, r, s, i) {
        const o = e[1],
          a = o.data[t + 8],
          l = In(
            a,
            o,
            n,
            null == r ? ne(a) && vn : r != o && 0 != (3 & a.type),
            s & vt.Host && i === a
          );
        return null !== l ? Rn(e, o, l, a) : On;
      }
      function In(t, e, n, r, s) {
        const i = t.providerIndexes,
          o = e.data,
          a = 1048575 & i,
          l = t.directiveStart,
          u = i >> 20,
          c = s ? a + u : t.directiveEnd;
        for (let h = r ? a : a + u; h < c; h++) {
          const t = o[h];
          if ((h < l && n === t) || (h >= l && t.type === n)) return h;
        }
        if (s) {
          const t = o[l];
          if (t && se(t) && t.type === n) return l;
        }
        return null;
      }
      function Rn(t, e, n, r) {
        let s = t[n];
        const i = e.data;
        if (s instanceof cn) {
          const o = s;
          o.resolving &&
            (function (t, e) {
              throw new ot(
                "200",
                `Circular dependency in DI detected for ${t}`
              );
            })(lt(i[n]));
          const a = bn(o.canSeeViewProviders);
          o.resolving = !0;
          const l = o.injectImpl ? _t(o.injectImpl) : null;
          We(t, r, vt.Default);
          try {
            (s = t[n] = o.factory(void 0, i, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function (t, e, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: s,
                    ngDoCheck: i,
                  } = e.type.prototype;
                  if (r) {
                    const r = le(e);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, r);
                  }
                  s &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, i));
                })(n, i[n], e);
          } finally {
            null !== l && _t(l), bn(a), (o.resolving = !1), Ye();
          }
        }
        return s;
      }
      function Nn(t, e, n) {
        return !!(n[e + (t >> 5)] & (1 << t));
      }
      function Mn(t, e) {
        return !(t & vt.Self || (t & vt.Host && e));
      }
      class jn {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return Tn(this._tNode, this._lView, t, void 0, e);
        }
      }
      function Vn(t) {
        return Et(() => {
          const e = t.prototype.constructor,
            n = e[Vt] || Bn(e),
            r = Object.prototype;
          let s = Object.getPrototypeOf(t.prototype).constructor;
          for (; s && s !== r; ) {
            const t = s[Vt] || Bn(s);
            if (t && t !== n) return t;
            s = Object.getPrototypeOf(s);
          }
          return (t) => new t();
        });
      }
      function Bn(t) {
        return it(t)
          ? () => {
              const e = Bn(st(t));
              return e && e();
            }
          : ie(t);
      }
      const Ln = "__parameters__";
      function Un(t, e, n) {
        return Et(() => {
          const r = (function (t) {
            return function (...e) {
              if (t) {
                const n = t(...e);
                for (const t in n) this[t] = n[t];
              }
            };
          })(e);
          function s(...t) {
            if (this instanceof s) return r.apply(this, t), this;
            const e = new s(...t);
            return (n.annotation = e), n;
            function n(t, n, r) {
              const s = t.hasOwnProperty(Ln)
                ? t[Ln]
                : Object.defineProperty(t, Ln, { value: [] })[Ln];
              for (; s.length <= r; ) s.push(null);
              return (s[r] = s[r] || []).push(e), t;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = t),
            (s.annotationCls = s),
            s
          );
        });
      }
      class zn {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = ct({
                  token: this,
                  providedIn: e.providedIn || "root",
                  factory: e.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Hn = new zn("AnalyzeForEntryComponents"),
        $n = Function;
      function qn(t, e) {
        void 0 === e && (e = t);
        for (let n = 0; n < t.length; n++) {
          let r = t[n];
          Array.isArray(r)
            ? (e === t && (e = t.slice(0, n)), qn(r, e))
            : e !== t && e.push(r);
        }
        return e;
      }
      function Wn(t, e) {
        t.forEach((t) => (Array.isArray(t) ? Wn(t, e) : e(t)));
      }
      function Qn(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function Kn(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      function Gn(t, e) {
        const n = [];
        for (let r = 0; r < t; r++) n.push(e);
        return n;
      }
      function Zn(t, e, n) {
        let r = Xn(t, e);
        return (
          r >= 0
            ? (t[1 | r] = n)
            : ((r = ~r),
              (function (t, e, n, r) {
                let s = t.length;
                if (s == e) t.push(n, r);
                else if (1 === s) t.push(r, t[0]), (t[0] = n);
                else {
                  for (s--, t.push(t[s - 1], t[s]); s > e; )
                    (t[s] = t[s - 2]), s--;
                  (t[e] = n), (t[e + 1] = r);
                }
              })(t, r, e, n)),
          r
        );
      }
      function Yn(t, e) {
        const n = Xn(t, e);
        if (n >= 0) return t[1 | n];
      }
      function Xn(t, e) {
        return (function (t, e, n) {
          let r = 0,
            s = t.length >> 1;
          for (; s !== r; ) {
            const n = r + ((s - r) >> 1),
              i = t[n << 1];
            if (e === i) return n << 1;
            i > e ? (s = n) : (r = n + 1);
          }
          return ~(s << 1);
        })(t, e);
      }
      const Jn = {},
        tr = /\n/gm,
        er = "__source",
        nr = X({ provide: String, useValue: X });
      let rr;
      function sr(t) {
        const e = rr;
        return (rr = t), e;
      }
      function ir(t, e = vt.Default) {
        if (void 0 === rr)
          throw new Error("inject() must be called from an injection context");
        return null === rr
          ? Ct(t, void 0, e)
          : rr.get(t, e & vt.Optional ? null : void 0, e);
      }
      function or(t, e = vt.Default) {
        return (bt || ir)(st(t), e);
      }
      function ar(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const r = st(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            let t,
              n = vt.Default;
            for (let e = 0; e < r.length; e++) {
              const s = r[e],
                i = s.__NG_DI_FLAG__;
              "number" == typeof i
                ? -1 === i
                  ? (t = s.token)
                  : (n |= i)
                : (t = s);
            }
            e.push(or(t, n));
          } else e.push(or(r));
        }
        return e;
      }
      function lr(t, e) {
        return (t.__NG_DI_FLAG__ = e), (t.prototype.__NG_DI_FLAG__ = e), t;
      }
      const ur = lr(
          Un("Inject", (t) => ({ token: t })),
          -1
        ),
        cr = lr(Un("Optional"), 8),
        hr = lr(Un("SkipSelf"), 4);
      let dr, pr;
      function fr(t) {
        var e;
        return (
          (null ===
            (e = (function () {
              if (void 0 === dr && ((dr = null), Ot.trustedTypes))
                try {
                  dr = Ot.trustedTypes.createPolicy("angular", {
                    createHTML: (t) => t,
                    createScript: (t) => t,
                    createScriptURL: (t) => t,
                  });
                } catch (e) {}
              return dr;
            })()) || void 0 === e
            ? void 0
            : e.createHTML(t)) || t
        );
      }
      function mr(t) {
        var e;
        return (
          (null ===
            (e = (function () {
              if (void 0 === pr && ((pr = null), Ot.trustedTypes))
                try {
                  pr = Ot.trustedTypes.createPolicy("angular#unsafe-bypass", {
                    createHTML: (t) => t,
                    createScript: (t) => t,
                    createScriptURL: (t) => t,
                  });
                } catch (e) {}
              return pr;
            })()) || void 0 === e
            ? void 0
            : e.createHTML(t)) || t
        );
      }
      class gr {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      class yr extends gr {
        getTypeName() {
          return "HTML";
        }
      }
      class wr extends gr {
        getTypeName() {
          return "Style";
        }
      }
      class vr extends gr {
        getTypeName() {
          return "Script";
        }
      }
      class br extends gr {
        getTypeName() {
          return "URL";
        }
      }
      class _r extends gr {
        getTypeName() {
          return "ResourceURL";
        }
      }
      function Cr(t) {
        return t instanceof gr ? t.changingThisBreaksApplicationSecurity : t;
      }
      function Er(t, e) {
        const n = Sr(t);
        if (null != n && n !== e) {
          if ("ResourceURL" === n && "URL" === e) return !0;
          throw new Error(
            `Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`
          );
        }
        return n === e;
      }
      function Sr(t) {
        return (t instanceof gr && t.getTypeName()) || null;
      }
      class xr {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = "<body><remove></remove>" + t;
          try {
            const e = new window.DOMParser().parseFromString(
              fr(t),
              "text/html"
            ).body;
            return null === e
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (e.removeChild(e.firstChild), e);
          } catch (e) {
            return null;
          }
        }
      }
      class Ar {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                "sanitization-inert"
              )),
            null == this.inertDocument.body)
          ) {
            const t = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(t);
            const e = this.inertDocument.createElement("body");
            t.appendChild(e);
          }
        }
        getInertBodyElement(t) {
          const e = this.inertDocument.createElement("template");
          if ("content" in e) return (e.innerHTML = fr(t)), e;
          const n = this.inertDocument.createElement("body");
          return (
            (n.innerHTML = fr(t)),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(n),
            n
          );
        }
        stripCustomNsAttrs(t) {
          const e = t.attributes;
          for (let r = e.length - 1; 0 < r; r--) {
            const n = e.item(r).name;
            ("xmlns:ns1" !== n && 0 !== n.indexOf("ns1:")) ||
              t.removeAttribute(n);
          }
          let n = t.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling);
        }
      }
      const Dr =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        kr =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Tr(t) {
        return (t = String(t)).match(Dr) || t.match(kr) ? t : "unsafe:" + t;
      }
      function Or(t) {
        const e = {};
        for (const n of t.split(",")) e[n] = !0;
        return e;
      }
      function Fr(...t) {
        const e = {};
        for (const n of t)
          for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
        return e;
      }
      const Pr = Or("area,br,col,hr,img,wbr"),
        Ir = Or("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        Rr = Or("rp,rt"),
        Nr = Fr(Rr, Ir),
        Mr = Fr(
          Pr,
          Fr(
            Ir,
            Or(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          Fr(
            Rr,
            Or(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          Nr
        ),
        jr = Or("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        Vr = Or("srcset"),
        Br = Fr(
          jr,
          Vr,
          Or(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          ),
          Or(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
          )
        ),
        Lr = Or("script,style,template");
      class Ur {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let e = t.firstChild,
            n = !0;
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              n && e.firstChild)
            )
              e = e.firstChild;
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let t = this.checkClobberedElement(e, e.nextSibling);
                if (t) {
                  e = t;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
          return this.buf.join("");
        }
        startElement(t) {
          const e = t.nodeName.toLowerCase();
          if (!Mr.hasOwnProperty(e))
            return (this.sanitizedSomething = !0), !Lr.hasOwnProperty(e);
          this.buf.push("<"), this.buf.push(e);
          const n = t.attributes;
          for (let s = 0; s < n.length; s++) {
            const t = n.item(s),
              e = t.name,
              i = e.toLowerCase();
            if (!Br.hasOwnProperty(i)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let o = t.value;
            jr[i] && (o = Tr(o)),
              Vr[i] &&
                ((r = o),
                (o = (r = String(r))
                  .split(",")
                  .map((t) => Tr(t.trim()))
                  .join(", "))),
              this.buf.push(" ", e, '="', $r(o), '"');
          }
          var r;
          return this.buf.push(">"), !0;
        }
        endElement(t) {
          const e = t.nodeName.toLowerCase();
          Mr.hasOwnProperty(e) &&
            !Pr.hasOwnProperty(e) &&
            (this.buf.push("</"), this.buf.push(e), this.buf.push(">"));
        }
        chars(t) {
          this.buf.push($r(t));
        }
        checkClobberedElement(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`
            );
          return e;
        }
      }
      const zr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Hr = /([^\#-~ |!])/g;
      function $r(t) {
        return t
          .replace(/&/g, "&amp;")
          .replace(zr, function (t) {
            return (
              "&#" +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(Hr, function (t) {
            return "&#" + t.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      let qr;
      function Wr(t, e) {
        let n = null;
        try {
          qr =
            qr ||
            (function (t) {
              const e = new Ar(t);
              return (function () {
                try {
                  return !!new window.DOMParser().parseFromString(
                    fr(""),
                    "text/html"
                  );
                } catch (t) {
                  return !1;
                }
              })()
                ? new xr(e)
                : e;
            })(t);
          let r = e ? String(e) : "";
          n = qr.getInertBodyElement(r);
          let s = 5,
            i = r;
          do {
            if (0 === s)
              throw new Error(
                "Failed to sanitize html because the input is unstable"
              );
            s--, (r = i), (i = n.innerHTML), (n = qr.getInertBodyElement(r));
          } while (r !== i);
          return fr(new Ur().sanitizeChildren(Qr(n) || n));
        } finally {
          if (n) {
            const t = Qr(n) || n;
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
        }
      }
      function Qr(t) {
        return "content" in t &&
          (function (t) {
            return (
              t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
            );
          })(t)
          ? t.content
          : null;
      }
      var Kr = (function (t) {
        return (
          (t[(t.NONE = 0)] = "NONE"),
          (t[(t.HTML = 1)] = "HTML"),
          (t[(t.STYLE = 2)] = "STYLE"),
          (t[(t.SCRIPT = 3)] = "SCRIPT"),
          (t[(t.URL = 4)] = "URL"),
          (t[(t.RESOURCE_URL = 5)] = "RESOURCE_URL"),
          t
        );
      })({});
      function Gr(t) {
        const e = (function () {
          const t = Te();
          return t && t[12];
        })();
        return e
          ? mr(e.sanitize(Kr.HTML, t) || "")
          : Er(t, "HTML")
          ? mr(Cr(t))
          : Wr(pe(), at(t));
      }
      function Zr(t, e) {
        t.__ngContext__ = e;
      }
      function Yr(t) {
        const e = (function (t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function Xr(t) {
        return t.ngDebugContext;
      }
      function Jr(t) {
        return t.ngOriginalError;
      }
      function ts(t, ...e) {
        t.error(...e);
      }
      class es {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function (t) {
              return t.ngErrorLogger || ts;
            })(t);
          r(this._console, "ERROR", t),
            e && r(this._console, "ORIGINAL ERROR", e),
            n && r(this._console, "ERROR CONTEXT", n);
        }
        _findContext(t) {
          return t ? (Xr(t) ? Xr(t) : this._findContext(Jr(t))) : null;
        }
        _findOriginalError(t) {
          let e = Jr(t);
          for (; e && Jr(e); ) e = Jr(e);
          return e;
        }
      }
      const ns = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Ot))();
      function rs(t) {
        return t instanceof Function ? t() : t;
      }
      var ss = (function (t) {
        return (
          (t[(t.Important = 1)] = "Important"),
          (t[(t.DashCase = 2)] = "DashCase"),
          t
        );
      })({});
      function is(t, e) {
        return (void 0)(t, e);
      }
      function os(t) {
        const e = t[3];
        return te(e) ? e[3] : e;
      }
      function as(t) {
        return us(t[13]);
      }
      function ls(t) {
        return us(t[4]);
      }
      function us(t) {
        for (; null !== t && !te(t); ) t = t[4];
        return t;
      }
      function cs(t, e, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          te(r) ? (i = r) : Jt(r) && ((o = !0), (r = r[0]));
          const a = ge(r);
          0 === t && null !== n
            ? null == s
              ? ws(e, n, a)
              : ys(e, n, a, s || null, !0)
            : 1 === t && null !== n
            ? ys(e, n, a, s || null, !0)
            : 2 === t
            ? (function (t, e, n) {
                const r = bs(t, e);
                r &&
                  (function (t, e, n, r) {
                    fe(t) ? t.removeChild(e, n, r) : e.removeChild(n);
                  })(t, r, e, n);
              })(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != i &&
              (function (t, e, n, r, s) {
                const i = n[7];
                i !== ge(n) && cs(e, t, r, i, s);
                for (let o = Xt; o < n.length; o++) {
                  const s = n[o];
                  ks(s[1], s, t, e, r, i);
                }
              })(e, t, i, n, s);
        }
      }
      function hs(t, e, n) {
        return fe(t)
          ? t.createElement(e, n)
          : null === n
          ? t.createElement(e)
          : t.createElementNS(n, e);
      }
      function ds(t, e) {
        const n = t[9],
          r = n.indexOf(e),
          s = e[3];
        1024 & e[2] && ((e[2] &= -1025), Ae(s, -1)), n.splice(r, 1);
      }
      function ps(t, e) {
        if (t.length <= Xt) return;
        const n = Xt + e,
          r = t[n];
        if (r) {
          const i = r[17];
          null !== i && i !== t && ds(i, r), e > 0 && (t[n - 1][4] = r[4]);
          const o = Kn(t, Xt + e);
          ks(r[1], (s = r), s[11], 2, null, null), (s[0] = null), (s[6] = null);
          const a = o[19];
          null !== a && a.detachView(o[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        var s;
        return r;
      }
      function fs(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          fe(n) && n.destroyNode && ks(t, e, n, 3, null, null),
            (function (t) {
              let e = t[13];
              if (!e) return ms(t[1], t);
              for (; e; ) {
                let n = null;
                if (Jt(e)) n = e[13];
                else {
                  const t = e[10];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; )
                    Jt(e) && ms(e[1], e), (e = e[3]);
                  null === e && (e = t), Jt(e) && ms(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function ms(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]];
                  if (!(t instanceof cn)) {
                    const e = n[r + 1];
                    if (Array.isArray(e))
                      for (let n = 0; n < e.length; n += 2) {
                        const r = t[e[n]],
                          s = e[n + 1];
                        try {
                          s.call(r);
                        } finally {
                        }
                      }
                    else
                      try {
                        e.call(t);
                      } finally {
                      }
                  }
                }
            })(t, e),
            (function (t, e) {
              const n = t.cleanup,
                r = e[7];
              let s = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const t = n[i + 1],
                      o = "function" == typeof t ? t(e) : ge(e[t]),
                      a = r[(s = n[i + 2])],
                      l = n[i + 3];
                    "boolean" == typeof l
                      ? o.removeEventListener(n[i], a, l)
                      : l >= 0
                      ? r[(s = l)]()
                      : r[(s = -l)].unsubscribe(),
                      (i += 2);
                  } else {
                    const t = r[(s = n[i + 1])];
                    n[i].call(t);
                  }
              if (null !== r) {
                for (let t = s + 1; t < r.length; t++) (0, r[t])();
                e[7] = null;
              }
            })(t, e),
            1 === e[1].type && fe(e[11]) && e[11].destroy();
          const n = e[17];
          if (null !== n && te(e[3])) {
            n !== e[3] && ds(n, e);
            const r = e[19];
            null !== r && r.detachView(t);
          }
        }
      }
      function gs(t, e, n) {
        return (function (t, e, n) {
          let r = e;
          for (; null !== r && 40 & r.type; ) r = (e = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const e = t.data[r.directiveStart].encapsulation;
            if (e === xt.None || e === xt.Emulated) return null;
          }
          return we(r, n);
        })(t, e.parent, n);
      }
      function ys(t, e, n, r, s) {
        fe(t) ? t.insertBefore(e, n, r, s) : e.insertBefore(n, r, s);
      }
      function ws(t, e, n) {
        fe(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function vs(t, e, n, r, s) {
        null !== r ? ys(t, e, n, r, s) : ws(t, e, n);
      }
      function bs(t, e) {
        return fe(t) ? t.parentNode(e) : e.parentNode;
      }
      function _s(t, e, n) {
        return Cs(t, e, n);
      }
      let Cs = function (t, e, n) {
        return 40 & t.type ? we(t, n) : null;
      };
      function Es(t, e, n, r) {
        const s = gs(t, r, e),
          i = e[11],
          o = _s(r.parent || e[6], r, e);
        if (null != s)
          if (Array.isArray(n))
            for (let a = 0; a < n.length; a++) vs(i, s, n[a], o, !1);
          else vs(i, s, n, o, !1);
      }
      function Ss(t, e) {
        if (null !== e) {
          const n = e.type;
          if (3 & n) return we(e, t);
          if (4 & n) return As(-1, t[e.index]);
          if (8 & n) {
            const n = e.child;
            if (null !== n) return Ss(t, n);
            {
              const n = t[e.index];
              return te(n) ? As(-1, n) : ge(n);
            }
          }
          if (32 & n) return is(e, t)() || ge(t[e.index]);
          {
            const n = xs(t, e);
            return null !== n
              ? Array.isArray(n)
                ? n[0]
                : Ss(os(t[16]), n)
              : Ss(t, e.next);
          }
        }
        return null;
      }
      function xs(t, e) {
        return null !== e ? t[16][6].projection[e.projection] : null;
      }
      function As(t, e) {
        const n = Xt + t + 1;
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild;
          if (null !== r) return Ss(t, r);
        }
        return e[7];
      }
      function Ds(t, e, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type;
          if (
            (o && 0 === e && (a && Zr(ge(a), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & l) Ds(t, e, n.child, r, s, i, !1), cs(e, t, s, a, i);
            else if (32 & l) {
              const o = is(n, r);
              let l;
              for (; (l = o()); ) cs(e, t, s, l, i);
              cs(e, t, s, a, i);
            } else 16 & l ? Ts(t, e, r, n, s, i) : cs(e, t, s, a, i);
          n = o ? n.projectionNext : n.next;
        }
      }
      function ks(t, e, n, r, s, i) {
        Ds(n, r, t.firstChild, e, s, i, !1);
      }
      function Ts(t, e, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a))
          for (let l = 0; l < a.length; l++) cs(e, t, s, a[l], i);
        else Ds(t, e, a, o[3], s, i, !0);
      }
      function Os(t, e, n) {
        fe(t) ? t.setAttribute(e, "style", n) : (e.style.cssText = n);
      }
      function Fs(t, e, n) {
        fe(t)
          ? "" === n
            ? t.removeAttribute(e, "class")
            : t.setAttribute(e, "class", n)
          : (e.className = n);
      }
      function Ps(t, e, n) {
        let r = t.length;
        for (;;) {
          const s = t.indexOf(e, n);
          if (-1 === s) return s;
          if (0 === s || t.charCodeAt(s - 1) <= 32) {
            const n = e.length;
            if (s + n === r || t.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      const Is = "ng-template";
      function Rs(t, e, n) {
        let r = 0;
        for (; r < t.length; ) {
          let s = t[r++];
          if (n && "class" === s) {
            if (((s = t[r]), -1 !== Ps(s.toLowerCase(), e, 0))) return !0;
          } else if (1 === s) {
            for (; r < t.length && "string" == typeof (s = t[r++]); )
              if (s.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Ns(t) {
        return 4 === t.type && t.value !== Is;
      }
      function Ms(t, e, n) {
        return e === (4 !== t.type || n ? t.value : Is);
      }
      function js(t, e, n) {
        let r = 4;
        const s = t.attrs || [],
          i = (function (t) {
            for (let e = 0; e < t.length; e++) if (dn(t[e])) return e;
            return t.length;
          })(s);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const l = e[a];
          if ("number" != typeof l) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== l && !Ms(t, l, n)) || ("" === l && 1 === e.length))
                ) {
                  if (Vs(r)) return !1;
                  o = !0;
                }
              } else {
                const u = 8 & r ? l : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!Rs(t.attrs, u, n)) {
                    if (Vs(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const c = Bs(8 & r ? "class" : l, s, Ns(t), n);
                if (-1 === c) {
                  if (Vs(r)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== u) {
                  let t;
                  t = c > i ? "" : s[c + 1].toLowerCase();
                  const e = 8 & r ? t : null;
                  if ((e && -1 !== Ps(e, u, 0)) || (2 & r && u !== t)) {
                    if (Vs(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !Vs(r) && !Vs(l)) return !1;
            if (o && Vs(l)) continue;
            (o = !1), (r = l | (1 & r));
          }
        }
        return Vs(r) || o;
      }
      function Vs(t) {
        return 0 == (1 & t);
      }
      function Bs(t, e, n, r) {
        if (null === e) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < e.length; ) {
            const r = e[s];
            if (r === t) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let t = e[++s];
                for (; "string" == typeof t; ) t = e[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function (t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              const r = t[n];
              if ("number" == typeof r) return -1;
              if (r === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function Ls(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if (js(t, e[r], n)) return !0;
        return !1;
      }
      function Us(t, e) {
        t: for (let n = 0; n < e.length; n++) {
          const r = e[n];
          if (t.length === r.length) {
            for (let e = 0; e < t.length; e++) if (t[e] !== r[e]) continue t;
            return !0;
          }
        }
        return !1;
      }
      function zs(t, e) {
        return t ? ":not(" + e.trim() + ")" : e;
      }
      function Hs(t) {
        let e = t[0],
          n = 1,
          r = 2,
          s = "",
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ("string" == typeof o)
            if (2 & r) {
              const e = t[++n];
              s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]";
            } else 8 & r ? (s += "." + o) : 4 & r && (s += " " + o);
          else
            "" === s || Vs(o) || ((e += zs(i, s)), (s = "")),
              (r = o),
              (i = i || !Vs(r));
          n++;
        }
        return "" !== s && (e += zs(i, s)), e;
      }
      const $s = {};
      function qs(t) {
        Ws(Oe(), Te(), Je() + t, je());
      }
      function Ws(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks;
            null !== r && rn(e, r, n);
          } else {
            const r = t.preOrderHooks;
            null !== r && sn(e, r, 0, n);
          }
        tn(n);
      }
      function Qs(t, e) {
        return (t << 17) | (e << 2);
      }
      function Ks(t) {
        return (t >> 17) & 32767;
      }
      function Gs(t) {
        return 2 | t;
      }
      function Zs(t) {
        return (131068 & t) >> 2;
      }
      function Ys(t, e) {
        return (-131069 & t) | (e << 2);
      }
      function Xs(t) {
        return 1 | t;
      }
      function Js(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = t.data[i];
              $e(s), n.contentQueries(2, e[i], i);
            }
          }
      }
      function ti(t, e, n, r, s, i, o, a, l, u) {
        const c = e.blueprint.slice();
        return (
          (c[0] = s),
          (c[2] = 140 | r),
          xe(c),
          (c[3] = c[15] = t),
          (c[8] = n),
          (c[10] = o || (t && t[10])),
          (c[11] = a || (t && t[11])),
          (c[12] = l || (t && t[12]) || null),
          (c[9] = u || (t && t[9]) || null),
          (c[6] = i),
          (c[16] = 2 == e.type ? t[16] : c),
          c
        );
      }
      function ei(t, e, n, r, s) {
        let i = t.data[e];
        if (null === i)
          (i = (function (t, e, n, r, s) {
            const i = Ie(),
              o = Ne(),
              a = (t.data[e] = (function (t, e, n, r, s, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: e ? e.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: s,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: e,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, o ? i : i && i.parent, n, e, r, s));
            return (
              null === t.firstChild && (t.firstChild = a),
              null !== i &&
                (o
                  ? null == i.child && null !== a.parent && (i.child = a)
                  : null === i.next && (i.next = a)),
              a
            );
          })(t, e, n, r, s)),
            De.lFrame.inI18n && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = s);
          const t = (function () {
            const t = De.lFrame,
              e = t.currentTNode;
            return t.isParent ? e : e.parent;
          })();
          i.injectorIndex = null === t ? -1 : t.injectorIndex;
        }
        return Re(i, !0), i;
      }
      function ni(t, e, n, r) {
        if (0 === n) return -1;
        const s = e.length;
        for (let i = 0; i < n; i++)
          e.push(r), t.blueprint.push(r), t.data.push(null);
        return s;
      }
      function ri(t, e, n) {
        Qe(e);
        try {
          const r = t.viewQuery;
          null !== r && Pi(1, r, n);
          const s = t.template;
          null !== s && oi(t, e, s, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && Js(t, e),
            t.staticViewQueries && Pi(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) Di(t, e[n]);
            })(e, i);
        } catch (r) {
          throw (t.firstCreatePass && (t.incompleteFirstPass = !0), r);
        } finally {
          (e[2] &= -5), Xe();
        }
      }
      function si(t, e, n, r) {
        const s = e[2];
        if (256 == (256 & s)) return;
        Qe(e);
        const i = je();
        try {
          xe(e),
            (De.lFrame.bindingIndex = t.bindingStartIndex),
            null !== n && oi(t, e, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && rn(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && sn(e, n, 0, null), on(e, 0);
            }
          if (
            ((function (t) {
              for (let e = as(t); null !== e; e = ls(e)) {
                if (!e[2]) continue;
                const t = e[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e],
                    r = n[3];
                  0 == (1024 & n[2]) && Ae(r, 1), (n[2] |= 1024);
                }
              }
            })(e),
            (function (t) {
              for (let e = as(t); null !== e; e = ls(e))
                for (let t = Xt; t < e.length; t++) {
                  const n = e[t],
                    r = n[1];
                  Ee(n) && si(r, n, r.template, n[8]);
                }
            })(e),
            null !== t.contentQueries && Js(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && rn(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && sn(e, n, 1), on(e, 1);
            }
          !(function (t, e) {
            const n = t.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let t = 0; t < n.length; t++) {
                  const r = n[t];
                  if (r < 0) tn(~r);
                  else {
                    const s = r,
                      i = n[++t],
                      o = n[++t];
                    Ue(i, s), o(2, e[s]);
                  }
                }
              } finally {
                tn(-1);
              }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) xi(t, e[n]);
            })(e, a);
          const l = t.viewQuery;
          if ((null !== l && Pi(2, l, r), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && rn(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && sn(e, n, 2), on(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            i || (e[2] &= -73),
            1024 & e[2] && ((e[2] &= -1025), Ae(e[3], -1));
        } finally {
          Xe();
        }
      }
      function ii(t, e, n, r) {
        const s = e[10],
          i = !je(),
          o = Ce(e);
        try {
          i && !o && s.begin && s.begin(), o && ri(t, e, r), si(t, e, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function oi(t, e, n, r, s) {
        const i = Je(),
          o = 2 & r;
        try {
          tn(-1), o && e.length > Yt && Ws(t, e, Yt, je()), n(r, s);
        } finally {
          tn(i);
        }
      }
      function ai(t, e, n) {
        ke() &&
          ((function (t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || Cn(n, e), Zr(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = se(r);
              i && _i(e, n, r);
              const l = Rn(e, t, a, n);
              Zr(l, e),
                null !== o && Ci(0, a - s, l, r, 0, o),
                i && (_e(n.index, e)[8] = l);
            }
          })(t, e, n, we(n, e)),
          128 == (128 & n.flags) &&
            (function (t, e, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                i = n.index,
                o = De.lFrame.currentDirectiveIndex;
              try {
                tn(i);
                for (let n = r; n < s; n++) {
                  const r = t.data[n],
                    s = e[n];
                  ze(n),
                    (null === r.hostBindings &&
                      0 === r.hostVars &&
                      null === r.hostAttrs) ||
                      gi(r, s);
                }
              } finally {
                tn(-1), ze(o);
              }
            })(t, e, n));
      }
      function li(t, e, n = we) {
        const r = e.localNames;
        if (null !== r) {
          let s = e.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(e, t) : t[o];
            t[s++] = a;
          }
        }
      }
      function ui(t) {
        const e = t.tView;
        return null === e || e.incompleteFirstPass
          ? (t.tView = ci(
              1,
              null,
              t.template,
              t.decls,
              t.vars,
              t.directiveDefs,
              t.pipeDefs,
              t.viewQuery,
              t.schemas,
              t.consts
            ))
          : e;
      }
      function ci(t, e, n, r, s, i, o, a, l, u) {
        const c = Yt + r,
          h = c + s,
          d = (function (t, e) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(r < t ? null : $s);
            return n;
          })(c, h),
          p = "function" == typeof u ? u() : u;
        return (d[1] = {
          type: t,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: e,
          data: d.slice().fill(null, c),
          bindingStartIndex: c,
          expandoStartIndex: h,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: p,
          incompleteFirstPass: !1,
        });
      }
      function hi(t, e, n, r) {
        const s = Ri(e);
        null === n
          ? s.push(r)
          : (s.push(n), t.firstCreatePass && Ni(t).push(r, s.length - 1));
      }
      function di(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const s = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(e, s)
              : (n[r] = [e, s]);
          }
        return n;
      }
      function pi(t, e, n, r, s, i, o, a) {
        const l = we(e, n);
        let u,
          c = e.inputs;
        var h;
        !a && null != c && (u = c[r])
          ? (ji(t, n, u, r, s),
            ne(e) &&
              (function (t, e) {
                const n = _e(e, t);
                16 & n[2] || (n[2] |= 64);
              })(n, e.index))
          : 3 & e.type &&
            ((r =
              "class" === (h = r)
                ? "className"
                : "for" === h
                ? "htmlFor"
                : "formaction" === h
                ? "formAction"
                : "innerHtml" === h
                ? "innerHTML"
                : "readonly" === h
                ? "readOnly"
                : "tabindex" === h
                ? "tabIndex"
                : h),
            (s = null != o ? o(s, e.value || "", r) : s),
            fe(i)
              ? i.setProperty(l, r, s)
              : pn(r) || (l.setProperty ? l.setProperty(r, s) : (l[r] = s)));
      }
      function fi(t, e, n, r) {
        let s = !1;
        if (ke()) {
          const i = (function (t, e, n) {
              const r = t.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  Ls(n, o.selectors, !1) &&
                    (s || (s = []),
                    An(Cn(n, e), t, o.type),
                    se(o) ? (yi(t, n), s.unshift(o)) : s.push(o));
                }
              return s;
            })(t, e, n),
            o = null === r ? null : { "": -1 };
          if (null !== i) {
            (s = !0), vi(n, t.data.length, i.length);
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.providersResolver && e.providersResolver(e);
            }
            let r = !1,
              a = !1,
              l = ni(t, e, i.length, null);
            for (let s = 0; s < i.length; s++) {
              const u = i[s];
              (n.mergedAttrs = fn(n.mergedAttrs, u.hostAttrs)),
                bi(t, n, e, l, u),
                wi(l, u, o),
                null !== u.contentQueries && (n.flags |= 8),
                (null === u.hostBindings &&
                  null === u.hostAttrs &&
                  0 === u.hostVars) ||
                  (n.flags |= 128);
              const c = u.type.prototype;
              !r &&
                (c.ngOnChanges || c.ngOnInit || c.ngDoCheck) &&
                ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index),
                (r = !0)),
                a ||
                  (!c.ngOnChanges && !c.ngDoCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (a = !0)),
                l++;
            }
            !(function (t, e) {
              const n = e.directiveEnd,
                r = t.data,
                s = e.attrs,
                i = [];
              let o = null,
                a = null;
              for (let l = e.directiveStart; l < n; l++) {
                const t = r[l],
                  n = t.inputs,
                  u = null === s || Ns(e) ? null : Ei(n, s);
                i.push(u), (o = di(n, l, o)), (a = di(t.outputs, l, a));
              }
              null !== o &&
                (o.hasOwnProperty("class") && (e.flags |= 16),
                o.hasOwnProperty("style") && (e.flags |= 32)),
                (e.initialInputs = i),
                (e.inputs = o),
                (e.outputs = a);
            })(t, n);
          }
          o &&
            (function (t, e, n) {
              if (e) {
                const r = (t.localNames = []);
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s)
                    throw new ot(
                      "301",
                      `Export of name '${e[t + 1]}' not found!`
                    );
                  r.push(e[t], s);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = fn(n.mergedAttrs, n.attrs)), s;
      }
      function mi(t, e, n, r, s, i) {
        const o = i.hostBindings;
        if (o) {
          let n = t.hostBindingOpCodes;
          null === n && (n = t.hostBindingOpCodes = []);
          const i = ~e.index;
          (function (t) {
            let e = t.length;
            for (; e > 0; ) {
              const n = t[--e];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(n) != i && n.push(i),
            n.push(r, s, o);
        }
      }
      function gi(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function yi(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function wi(t, e, n) {
        if (n) {
          if (e.exportAs)
            for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          se(e) && (n[""] = t);
        }
      }
      function vi(t, e, n) {
        (t.flags |= 1),
          (t.directiveStart = e),
          (t.directiveEnd = e + n),
          (t.providerIndexes = e);
      }
      function bi(t, e, n, r, s) {
        t.data[r] = s;
        const i = s.factory || (s.factory = ie(s.type)),
          o = new cn(i, se(s), null);
        (t.blueprint[r] = o),
          (n[r] = o),
          mi(t, e, 0, r, ni(t, n, s.hostVars, $s), s);
      }
      function _i(t, e, n) {
        const r = we(e, t),
          s = ui(n),
          i = t[10],
          o = ki(
            t,
            ti(
              t,
              s,
              null,
              n.onPush ? 64 : 16,
              r,
              e,
              i,
              i.createRenderer(r, n),
              null,
              null
            )
          );
        t[e.index] = o;
      }
      function Ci(t, e, n, r, s, i) {
        const o = i[e];
        if (null !== o) {
          const t = r.setInput;
          for (let e = 0; e < o.length; ) {
            const s = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function Ei(t, e) {
        let n = null,
          r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if (0 !== s)
            if (5 !== s) {
              if ("number" == typeof s) break;
              t.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, t[s], e[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Si(t, e, n, r) {
        return new Array(t, !0, !1, e, null, 0, r, n, null, null);
      }
      function xi(t, e) {
        const n = _e(e, t);
        if (Ee(n)) {
          const t = n[1];
          80 & n[2] ? si(t, n, t.template, n[8]) : n[5] > 0 && Ai(n);
        }
      }
      function Ai(t) {
        for (let n = as(t); null !== n; n = ls(n))
          for (let t = Xt; t < n.length; t++) {
            const e = n[t];
            if (1024 & e[2]) {
              const t = e[1];
              si(t, e, t.template, e[8]);
            } else e[5] > 0 && Ai(e);
          }
        const e = t[1].components;
        if (null !== e)
          for (let n = 0; n < e.length; n++) {
            const r = _e(e[n], t);
            Ee(r) && r[5] > 0 && Ai(r);
          }
      }
      function Di(t, e) {
        const n = _e(e, t),
          r = n[1];
        !(function (t, e) {
          for (let n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n]);
        })(r, n),
          ri(r, n, n[8]);
      }
      function ki(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function Ti(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = os(t);
          if (0 != (512 & t[2]) && !e) return t;
          t = e;
        }
        return null;
      }
      function Oi(t, e, n) {
        const r = e[10];
        r.begin && r.begin();
        try {
          si(t, e, t.template, n);
        } catch (s) {
          throw (Mi(e, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function Fi(t) {
        !(function (t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = Yr(n),
              s = r[1];
            ii(s, r, s.template, n);
          }
        })(t[8]);
      }
      function Pi(t, e, n) {
        $e(0), e(t, n);
      }
      const Ii = (() => Promise.resolve(null))();
      function Ri(t) {
        return t[7] || (t[7] = []);
      }
      function Ni(t) {
        return t.cleanup || (t.cleanup = []);
      }
      function Mi(t, e) {
        const n = t[9],
          r = n ? n.get(es, null) : null;
        r && r.handleError(e);
      }
      function ji(t, e, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            l = e[o],
            u = t.data[o];
          null !== u.setInput ? u.setInput(l, s, r, a) : (l[a] = s);
        }
      }
      function Vi(t, e, n) {
        let r = n ? t.styles : null,
          s = n ? t.classes : null,
          i = 0;
        if (null !== e)
          for (let o = 0; o < e.length; o++) {
            const t = e[o];
            "number" == typeof t
              ? (i = t)
              : 1 == i
              ? (s = et(s, t))
              : 2 == i && (r = et(r, t + ": " + e[++o] + ";"));
          }
        n ? (t.styles = r) : (t.stylesWithoutHost = r),
          n ? (t.classes = s) : (t.classesWithoutHost = s);
      }
      const Bi = new zn("INJECTOR", -1);
      class Li {
        get(t, e = Jn) {
          if (e === Jn) {
            const e = new Error(`NullInjectorError: No provider for ${tt(t)}!`);
            throw ((e.name = "NullInjectorError"), e);
          }
          return e;
        }
      }
      const Ui = new zn("Set Injector scope."),
        zi = {},
        Hi = {};
      let $i;
      function qi() {
        return void 0 === $i && ($i = new Li()), $i;
      }
      function Wi(t, e = null, n = null, r) {
        return new Qi(t, n, e || qi(), r);
      }
      class Qi {
        constructor(t, e, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && Wn(e, (n) => this.processProvider(n, t, e)),
            Wn([t], (t) => this.processInjectorType(t, [], s)),
            this.records.set(Bi, Zi(void 0, this));
          const i = this.records.get(Ui);
          (this.scope = null != i ? i.value : null),
            (this.source = r || ("object" == typeof t ? null : tt(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, e = Jn, n = vt.Default) {
          this.assertNotDestroyed();
          const r = sr(this);
          try {
            if (!(n & vt.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n =
                  ("function" == typeof (s = t) ||
                    ("object" == typeof s && s instanceof zn)) &&
                  dt(t);
                (e = n && this.injectableDefInScope(n) ? Zi(Ki(t), zi) : null),
                  this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & vt.Self ? qi() : this.parent).get(
              t,
              (e = n & vt.Optional && e === Jn ? null : e)
            );
          } catch (i) {
            if ("NullInjectorError" === i.name) {
              if (
                ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(tt(t)),
                r)
              )
                throw i;
              return (function (t, e, n, r) {
                const s = t.ngTempTokenPath;
                throw (
                  (e[er] && s.unshift(e[er]),
                  (t.message = (function (t, e, n, r = null) {
                    t =
                      t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1)
                        ? t.substr(2)
                        : t;
                    let s = tt(e);
                    if (Array.isArray(e)) s = e.map(tt).join(" -> ");
                    else if ("object" == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n];
                          t.push(
                            n +
                              ":" +
                              ("string" == typeof r ? JSON.stringify(r) : tt(r))
                          );
                        }
                      s = `{${t.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${t.replace(
                      tr,
                      "\n  "
                    )}`;
                  })("\n" + t.message, s, n, r)),
                  (t.ngTokenPath = s),
                  (t.ngTempTokenPath = null),
                  t)
                );
              })(i, t, "R3InjectorError", this.source);
            }
            throw i;
          } finally {
            sr(r);
          }
          var s;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((e, n) => t.push(tt(n))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error("Injector has already been destroyed.");
        }
        processInjectorType(t, e, n) {
          if (!(t = st(t))) return !1;
          let r = ft(t);
          const s = (null == r && t.ngModule) || void 0,
            i = void 0 === s ? t : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = ft(s)), null == r)) return !1;
          if (null != r.imports && !o) {
            let t;
            n.push(i);
            try {
              Wn(r.imports, (r) => {
                this.processInjectorType(r, e, n) &&
                  (void 0 === t && (t = []), t.push(r));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e];
                Wn(r, (t) => this.processProvider(t, n, r || Pt));
              }
          }
          this.injectorDefTypes.add(i);
          const a = ie(i) || (() => new i());
          this.records.set(i, Zi(a, zi));
          const l = r.providers;
          if (null != l && !o) {
            const e = t;
            Wn(l, (t) => this.processProvider(t, e, l));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let r = Xi((t = st(t))) ? t : st(t && t.provide);
          const s = (function (t, e, n) {
            return Yi(t) ? Zi(void 0, t.useValue) : Zi(Gi(t), zi);
          })(t);
          if (Xi(t) || !0 !== t.multi) this.records.get(r);
          else {
            let e = this.records.get(r);
            e ||
              ((e = Zi(void 0, zi, !0)),
              (e.factory = () => ar(e.multi)),
              this.records.set(r, e)),
              (r = t),
              e.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === zi && ((e.value = Hi), (e.value = e.factory())),
            "object" == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              "object" == typeof n &&
              "function" == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const e = st(t.providedIn);
          return "string" == typeof e
            ? "any" === e || e === this.scope
            : this.injectorDefTypes.has(e);
        }
      }
      function Ki(t) {
        const e = dt(t),
          n = null !== e ? e.factory : ie(t);
        if (null !== n) return n;
        if (t instanceof zn)
          throw new Error(`Token ${tt(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function (t) {
            const e = t.length;
            if (e > 0) {
              const n = Gn(e, "?");
              throw new Error(
                `Can't resolve all parameters for ${tt(t)}: (${n.join(", ")}).`
              );
            }
            const n = (function (t) {
              const e = t && (t[mt] || t[yt]);
              if (e) {
                const n = (function (t) {
                  if (t.hasOwnProperty("name")) return t.name;
                  const e = ("" + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? "" : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error("unreachable");
      }
      function Gi(t, e, n) {
        let r;
        if (Xi(t)) {
          const e = st(t);
          return ie(e) || Ki(e);
        }
        if (Yi(t)) r = () => st(t.useValue);
        else if ((s = t) && s.useFactory)
          r = () => t.useFactory(...ar(t.deps || []));
        else if (
          (function (t) {
            return !(!t || !t.useExisting);
          })(t)
        )
          r = () => or(st(t.useExisting));
        else {
          const e = st(t && (t.useClass || t.provide));
          if (
            !(function (t) {
              return !!t.deps;
            })(t)
          )
            return ie(e) || Ki(e);
          r = () => new e(...ar(t.deps));
        }
        var s;
        return r;
      }
      function Zi(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function Yi(t) {
        return null !== t && "object" == typeof t && nr in t;
      }
      function Xi(t) {
        return "function" == typeof t;
      }
      const Ji = function (t, e, n) {
        return (function (t, e = null, n = null, r) {
          const s = Wi(t, e, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, e, t, n);
      };
      let to = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t)
              ? Ji(t, e, "")
              : Ji(t.providers, t.parent, t.name || "");
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = Jn),
          (t.NULL = new Li()),
          (t.ɵprov = ct({
            token: t,
            providedIn: "any",
            factory: () => or(Bi),
          })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      function eo(t, e) {
        nn(Yr(t)[1], Pe());
      }
      function no(t) {
        let e = Object.getPrototypeOf(t.type.prototype).constructor,
          n = !0;
        const r = [t];
        for (; e; ) {
          let s;
          if (se(t)) s = e.ɵcmp || e.ɵdir;
          else {
            if (e.ɵcmp) throw new Error("Directives cannot inherit Components");
            s = e.ɵdir;
          }
          if (s) {
            if (n) {
              r.push(s);
              const e = t;
              (e.inputs = ro(t.inputs)),
                (e.declaredInputs = ro(t.declaredInputs)),
                (e.outputs = ro(t.outputs));
              const n = s.hostBindings;
              n && oo(t, n);
              const i = s.viewQuery,
                o = s.contentQueries;
              if (
                (i && so(t, i),
                o && io(t, o),
                J(t.inputs, s.inputs),
                J(t.declaredInputs, s.declaredInputs),
                J(t.outputs, s.outputs),
                se(s) && s.data.animation)
              ) {
                const e = t.data;
                e.animation = (e.animation || []).concat(s.data.animation);
              }
            }
            const e = s.features;
            if (e)
              for (let r = 0; r < e.length; r++) {
                const s = e[r];
                s && s.ngInherit && s(t), s === no && (n = !1);
              }
          }
          e = Object.getPrototypeOf(e);
        }
        !(function (t) {
          let e = 0,
            n = null;
          for (let r = t.length - 1; r >= 0; r--) {
            const s = t[r];
            (s.hostVars = e += s.hostVars),
              (s.hostAttrs = fn(s.hostAttrs, (n = fn(n, s.hostAttrs))));
          }
        })(r);
      }
      function ro(t) {
        return t === Ft ? {} : t === Pt ? [] : t;
      }
      function so(t, e) {
        const n = t.viewQuery;
        t.viewQuery = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      function io(t, e) {
        const n = t.contentQueries;
        t.contentQueries = n
          ? (t, r, s) => {
              e(t, r, s), n(t, r, s);
            }
          : e;
      }
      function oo(t, e) {
        const n = t.hostBindings;
        t.hostBindings = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      let ao = null;
      function lo() {
        if (!ao) {
          const t = Ot.Symbol;
          if (t && t.iterator) ao = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              "entries" !== n &&
                "size" !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (ao = n);
            }
          }
        }
        return ao;
      }
      class uo {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new uo(t);
        }
        static unwrap(t) {
          return uo.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof uo;
        }
      }
      function co(t) {
        return (
          !!ho(t) && (Array.isArray(t) || (!(t instanceof Map) && lo() in t))
        );
      }
      function ho(t) {
        return null !== t && ("function" == typeof t || "object" == typeof t);
      }
      function po(t, e, n) {
        return (t[e] = n);
      }
      function fo(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function mo(t, e, n, r) {
        const s = fo(t, e, n);
        return fo(t, e + 1, r) || s;
      }
      function go(t, e, n, r) {
        const s = Te();
        return (
          fo(s, Le(), e) &&
            (Oe(),
            (function (t, e, n, r, s, i) {
              const o = we(t, e);
              !(function (t, e, n, r, s, i, o) {
                if (null == i)
                  fe(t) ? t.removeAttribute(e, s, n) : e.removeAttribute(s);
                else {
                  const a = null == o ? at(i) : o(i, r || "", s);
                  fe(t)
                    ? t.setAttribute(e, s, a, n)
                    : n
                    ? e.setAttributeNS(n, s, a)
                    : e.setAttribute(s, a);
                }
              })(e[11], o, i, t.value, n, r, s);
            })(en(), s, t, e, n, r)),
          go
        );
      }
      function yo(t, e, n, r) {
        return fo(t, Le(), n) ? e + at(n) + r : $s;
      }
      function wo(t, e, n, r, s, i, o, a) {
        const l = Te(),
          u = Oe(),
          c = t + Yt,
          h = u.firstCreatePass
            ? (function (t, e, n, r, s, i, o, a, l) {
                const u = e.consts,
                  c = ei(e, t, 4, o || null, Se(u, a));
                fi(e, n, c, Se(u, l)), nn(e, c);
                const h = (c.tViews = ci(
                  2,
                  c,
                  r,
                  s,
                  i,
                  e.directiveRegistry,
                  e.pipeRegistry,
                  null,
                  e.schemas,
                  u
                ));
                return (
                  null !== e.queries &&
                    (e.queries.template(e, c),
                    (h.queries = e.queries.embeddedTView(c))),
                  c
                );
              })(c, u, l, e, n, r, s, i, o)
            : u.data[c];
        Re(h, !1);
        const d = l[11].createComment("");
        Es(u, l, d, h),
          Zr(d, l),
          ki(l, (l[c] = Si(d, l, d, h))),
          re(h) && ai(u, l, h),
          null != o && li(l, h, a);
      }
      function vo(t) {
        return be(De.lFrame.contextLView, Yt + t);
      }
      function bo(t, e = vt.Default) {
        const n = Te();
        return null === n ? or(t, e) : Tn(Pe(), n, st(t), e);
      }
      function _o(t, e, n) {
        const r = Te();
        return fo(r, Le(), e) && pi(Oe(), en(), r, t, e, r[11], n, !1), _o;
      }
      function Co(t, e, n, r, s) {
        const i = s ? "class" : "style";
        ji(t, n, e.inputs[i], i, r);
      }
      function Eo(t, e, n, r) {
        const s = Te(),
          i = Oe(),
          o = Yt + t,
          a = s[11],
          l = (s[o] = hs(a, e, De.lFrame.currentNamespace)),
          u = i.firstCreatePass
            ? (function (t, e, n, r, s, i, o) {
                const a = e.consts,
                  l = ei(e, t, 2, s, Se(a, i));
                return (
                  fi(e, n, l, Se(a, o)),
                  null !== l.attrs && Vi(l, l.attrs, !1),
                  null !== l.mergedAttrs && Vi(l, l.mergedAttrs, !0),
                  null !== e.queries && e.queries.elementStart(e, l),
                  l
                );
              })(o, i, s, 0, e, n, r)
            : i.data[o];
        Re(u, !0);
        const c = u.mergedAttrs;
        null !== c && hn(a, l, c);
        const h = u.classes;
        null !== h && Fs(a, l, h);
        const d = u.styles;
        null !== d && Os(a, l, d),
          64 != (64 & u.flags) && Es(i, s, l, u),
          0 === De.lFrame.elementDepthCount && Zr(l, s),
          De.lFrame.elementDepthCount++,
          re(u) &&
            (ai(i, s, u),
            (function (t, e, n) {
              if (ee(e)) {
                const r = e.directiveEnd;
                for (let s = e.directiveStart; s < r; s++) {
                  const e = t.data[s];
                  e.contentQueries && e.contentQueries(1, n[s], s);
                }
              }
            })(i, u, s)),
          null !== r && li(s, u);
      }
      function So() {
        let t = Pe();
        Ne() ? Me() : ((t = t.parent), Re(t, !1));
        const e = t;
        De.lFrame.elementDepthCount--;
        const n = Oe();
        n.firstCreatePass && (nn(n, t), ee(t) && n.queries.elementEnd(t)),
          null != e.classesWithoutHost &&
            (function (t) {
              return 0 != (16 & t.flags);
            })(e) &&
            Co(n, e, Te(), e.classesWithoutHost, !0),
          null != e.stylesWithoutHost &&
            (function (t) {
              return 0 != (32 & t.flags);
            })(e) &&
            Co(n, e, Te(), e.stylesWithoutHost, !1);
      }
      function xo(t, e, n, r) {
        Eo(t, e, n, r), So();
      }
      function Ao() {
        return Te();
      }
      function Do(t) {
        return !!t && "function" == typeof t.then;
      }
      const ko = function (t) {
        return !!t && "function" == typeof t.subscribe;
      };
      function To(t, e, n, r) {
        const s = Te(),
          i = Oe(),
          o = Pe();
        return (
          (function (t, e, n, r, s, i, o, a) {
            const l = re(r),
              u = t.firstCreatePass && Ni(t),
              c = Ri(e);
            let h = !0;
            if (3 & r.type || a) {
              const d = we(r, e),
                p = a ? a(d) : d,
                f = c.length,
                m = a ? (t) => a(ge(t[r.index])) : r.index;
              if (fe(n)) {
                let o = null;
                if (
                  (!a &&
                    l &&
                    (o = (function (t, e, n, r) {
                      const s = t.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const t = s[i];
                          if (t === n && s[i + 1] === r) {
                            const t = e[7],
                              n = s[i + 2];
                            return t.length > n ? t[n] : null;
                          }
                          "string" == typeof t && (i += 2);
                        }
                      return null;
                    })(t, e, s, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i),
                    (o.__ngLastListenerFn__ = i),
                    (h = !1);
                else {
                  i = Fo(r, e, 0, i, !1);
                  const t = n.listen(p, s, i);
                  c.push(i, t), u && u.push(s, m, f, f + 1);
                }
              } else
                (i = Fo(r, e, 0, i, !0)),
                  p.addEventListener(s, i, o),
                  c.push(i),
                  u && u.push(s, m, f, o);
            } else i = Fo(r, e, 0, i, !1);
            const d = r.outputs;
            let p;
            if (h && null !== d && (p = d[s])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(i),
                    o = c.length;
                  c.push(i, t), u && u.push(s, r.index, o, -(o + 1));
                }
            }
          })(i, s, s[11], o, t, e, !!n, r),
          To
        );
      }
      function Oo(t, e, n, r) {
        try {
          return !1 !== n(r);
        } catch (s) {
          return Mi(t, s), !1;
        }
      }
      function Fo(t, e, n, r, s) {
        return function n(i) {
          if (i === Function) return r;
          const o = 2 & t.flags ? _e(t.index, e) : e;
          0 == (32 & e[2]) && Ti(o);
          let a = Oo(e, 0, r, i),
            l = n.__ngNextListenerFn__;
          for (; l; ) (a = Oo(e, 0, l, i) && a), (l = l.__ngNextListenerFn__);
          return s && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function Po(t = 1) {
        return (function (t) {
          return (De.lFrame.contextLView = (function (t, e) {
            for (; t > 0; ) (e = e[15]), t--;
            return e;
          })(t, De.lFrame.contextLView))[8];
        })(t);
      }
      function Io(t, e) {
        let n = null;
        const r = (function (t) {
          const e = t.attrs;
          if (null != e) {
            const t = e.indexOf(5);
            if (0 == (1 & t)) return e[t + 1];
          }
          return null;
        })(t);
        for (let s = 0; s < e.length; s++) {
          const i = e[s];
          if ("*" !== i) {
            if (null === r ? Ls(t, i, !0) : Us(r, i)) return s;
          } else n = s;
        }
        return n;
      }
      function Ro(t) {
        const e = Te()[16][6];
        if (!e.projection) {
          const n = (e.projection = Gn(t ? t.length : 1, null)),
            r = n.slice();
          let s = e.child;
          for (; null !== s; ) {
            const e = t ? Io(s, t) : 0;
            null !== e &&
              (r[e] ? (r[e].projectionNext = s) : (n[e] = s), (r[e] = s)),
              (s = s.next);
          }
        }
      }
      function No(t, e = 0, n) {
        const r = Te(),
          s = Oe(),
          i = ei(s, Yt + t, 16, null, n || null);
        null === i.projection && (i.projection = e),
          Me(),
          64 != (64 & i.flags) &&
            (function (t, e, n) {
              Ts(e[11], 0, e, n, gs(t, n, e), _s(n.parent || e[6], n, e));
            })(s, r, i);
      }
      function Mo(t, e, n) {
        return jo(t, "", e, "", n), Mo;
      }
      function jo(t, e, n, r, s) {
        const i = Te(),
          o = yo(i, e, n, r);
        return o !== $s && pi(Oe(), en(), i, t, o, i[11], s, !1), jo;
      }
      function Vo(t, e, n, r, s) {
        const i = t[n + 1],
          o = null === e;
        let a = r ? Ks(i) : Zs(i),
          l = !1;
        for (; 0 !== a && (!1 === l || o); ) {
          const n = t[a + 1];
          Bo(t[a], e) && ((l = !0), (t[a + 1] = r ? Xs(n) : Gs(n))),
            (a = r ? Ks(n) : Zs(n));
        }
        l && (t[n + 1] = r ? Gs(i) : Xs(i));
      }
      function Bo(t, e) {
        return (
          null === t ||
          null == e ||
          (Array.isArray(t) ? t[1] : t) === e ||
          (!(!Array.isArray(t) || "string" != typeof e) && Xn(t, e) >= 0)
        );
      }
      function Lo(t, e) {
        return (
          (function (t, e, n, r) {
            const s = Te(),
              i = Oe(),
              o = (function (t) {
                const e = De.lFrame,
                  n = e.bindingIndex;
                return (e.bindingIndex = e.bindingIndex + 2), n;
              })();
            i.firstUpdatePass &&
              (function (t, e, n, r) {
                const s = t.data;
                if (null === s[n + 1]) {
                  const i = s[Je()],
                    o = (function (t, e) {
                      return e >= t.expandoStartIndex;
                    })(t, n);
                  (function (t, e) {
                    return 0 != (16 & t.flags);
                  })(i) &&
                    null === e &&
                    !o &&
                    (e = !1),
                    (e = (function (t, e, n, r) {
                      const s = (function (t) {
                        const e = De.lFrame.currentDirectiveIndex;
                        return -1 === e ? null : t[e];
                      })(t);
                      let i = e.residualClasses;
                      if (null === s)
                        0 === e.classBindings &&
                          ((n = zo((n = Uo(null, t, e, n, r)), e.attrs, r)),
                          (i = null));
                      else {
                        const o = e.directiveStylingLast;
                        if (-1 === o || t[o] !== s)
                          if (((n = Uo(s, t, e, n, r)), null === i)) {
                            let n = (function (t, e, n) {
                              const r = e.classBindings;
                              if (0 !== Zs(r)) return t[Ks(r)];
                            })(t, e);
                            void 0 !== n &&
                              Array.isArray(n) &&
                              ((n = Uo(null, t, e, n[1], r)),
                              (n = zo(n, e.attrs, r)),
                              (function (t, e, n, r) {
                                t[Ks(e.classBindings)] = r;
                              })(t, e, 0, n));
                          } else
                            i = (function (t, e, n) {
                              let r;
                              const s = e.directiveEnd;
                              for (
                                let i = 1 + e.directiveStylingLast;
                                i < s;
                                i++
                              )
                                r = zo(r, t[i].hostAttrs, true);
                              return zo(r, e.attrs, true);
                            })(t, e);
                      }
                      return void 0 !== i && (e.residualClasses = i), n;
                    })(s, i, e, r)),
                    (function (t, e, n, r, s, i) {
                      let o = e.classBindings,
                        a = Ks(o),
                        l = Zs(o);
                      t[r] = n;
                      let u,
                        c = !1;
                      if (Array.isArray(n)) {
                        const t = n;
                        (u = t[1]), (null === u || Xn(t, u) > 0) && (c = !0);
                      } else u = n;
                      if (s)
                        if (0 !== l) {
                          const e = Ks(t[a + 1]);
                          (t[r + 1] = Qs(e, a)),
                            0 !== e && (t[e + 1] = Ys(t[e + 1], r)),
                            (t[a + 1] = (131071 & t[a + 1]) | (r << 17));
                        } else
                          (t[r + 1] = Qs(a, 0)),
                            0 !== a && (t[a + 1] = Ys(t[a + 1], r)),
                            (a = r);
                      else
                        (t[r + 1] = Qs(l, 0)),
                          0 === a ? (a = r) : (t[l + 1] = Ys(t[l + 1], r)),
                          (l = r);
                      c && (t[r + 1] = Gs(t[r + 1])),
                        Vo(t, u, r, !0),
                        Vo(t, u, r, !1),
                        (function (t, e, n, r, s) {
                          const i = t.residualClasses;
                          null != i &&
                            "string" == typeof e &&
                            Xn(i, e) >= 0 &&
                            (n[r + 1] = Xs(n[r + 1]));
                        })(e, u, t, r),
                        (o = Qs(a, l)),
                        (e.classBindings = o);
                    })(s, i, e, n, o);
                }
              })(i, t, o, true),
              e !== $s &&
                fo(s, o, e) &&
                (function (t, e, n, r, s, i, o, a) {
                  if (!(3 & e.type)) return;
                  const l = t.data,
                    u = l[a + 1];
                  $o(1 == (1 & u) ? Ho(l, e, n, s, Zs(u), o) : void 0) ||
                    ($o(i) ||
                      ((function (t) {
                        return 2 == (2 & t);
                      })(u) &&
                        (i = Ho(l, null, n, s, a, o))),
                    (function (t, e, n, r, s) {
                      const i = fe(t);
                      s
                        ? i
                          ? t.addClass(n, r)
                          : n.classList.add(r)
                        : i
                        ? t.removeClass(n, r)
                        : n.classList.remove(r);
                    })(r, 0, ye(Je(), n), s, i));
                })(
                  i,
                  i.data[Je()],
                  s,
                  s[11],
                  t,
                  (s[o + 1] = (function (t, e) {
                    return (
                      null == t || ("object" == typeof t && (t = tt(Cr(t)))), t
                    );
                  })(e)),
                  true,
                  o
                );
          })(t, e),
          Lo
        );
      }
      function Uo(t, e, n, r, s) {
        let i = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < o && ((i = e[a]), (r = zo(r, i.hostAttrs, s)), i !== t);

        )
          a++;
        return null !== t && (n.directiveStylingLast = a), r;
      }
      function zo(t, e, n) {
        const r = n ? 1 : 2;
        let s = -1;
        if (null !== e)
          for (let i = 0; i < e.length; i++) {
            const o = e[i];
            "number" == typeof o
              ? (s = o)
              : s === r &&
                (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]),
                Zn(t, o, !!n || e[++i]));
          }
        return void 0 === t ? null : t;
      }
      function Ho(t, e, n, r, s, i) {
        const o = null === e;
        let a;
        for (; s > 0; ) {
          const e = t[s],
            i = Array.isArray(e),
            l = i ? e[1] : e,
            u = null === l;
          let c = n[s + 1];
          c === $s && (c = u ? Pt : void 0);
          let h = u ? Yn(c, r) : l === r ? c : void 0;
          if ((i && !$o(h) && (h = Yn(e, r)), $o(h) && ((a = h), o))) return a;
          const d = t[s + 1];
          s = o ? Ks(d) : Zs(d);
        }
        if (null !== e) {
          let t = i ? e.residualClasses : e.residualStyles;
          null != t && (a = Yn(t, r));
        }
        return a;
      }
      function $o(t) {
        return void 0 !== t;
      }
      function qo(t, e = "") {
        const n = Te(),
          r = Oe(),
          s = t + Yt,
          i = r.firstCreatePass ? ei(r, s, 1, e, null) : r.data[s],
          o = (n[s] = (function (t, e) {
            return fe(t) ? t.createText(e) : t.createTextNode(e);
          })(n[11], e));
        Es(r, n, o, i), Re(i, !1);
      }
      function Wo(t) {
        return Qo("", t, ""), Wo;
      }
      function Qo(t, e, n) {
        const r = Te(),
          s = yo(r, t, e, n);
        return (
          s !== $s &&
            (function (t, e, n) {
              const r = ye(e, t);
              !(function (t, e, n) {
                fe(t) ? t.setValue(e, n) : (e.textContent = n);
              })(t[11], r, n);
            })(r, Je(), s),
          Qo
        );
      }
      function Ko(t, e, n) {
        const r = Te();
        return fo(r, Le(), e) && pi(Oe(), en(), r, t, e, r[11], n, !0), Ko;
      }
      const Go = void 0;
      var Zo = [
        "en",
        [["a", "p"], ["AM", "PM"], Go],
        [["AM", "PM"], Go, Go],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        Go,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        Go,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Go, "{1} 'at' {0}", Go],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === e && 0 === n ? 1 : 5;
        },
      ];
      let Yo = {};
      function Xo(t) {
        return (
          t in Yo ||
            (Yo[t] =
              Ot.ng &&
              Ot.ng.common &&
              Ot.ng.common.locales &&
              Ot.ng.common.locales[t]),
          Yo[t]
        );
      }
      var Jo = (function (t) {
        return (
          (t[(t.LocaleId = 0)] = "LocaleId"),
          (t[(t.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
          (t[(t.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
          (t[(t.DaysFormat = 3)] = "DaysFormat"),
          (t[(t.DaysStandalone = 4)] = "DaysStandalone"),
          (t[(t.MonthsFormat = 5)] = "MonthsFormat"),
          (t[(t.MonthsStandalone = 6)] = "MonthsStandalone"),
          (t[(t.Eras = 7)] = "Eras"),
          (t[(t.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
          (t[(t.WeekendRange = 9)] = "WeekendRange"),
          (t[(t.DateFormat = 10)] = "DateFormat"),
          (t[(t.TimeFormat = 11)] = "TimeFormat"),
          (t[(t.DateTimeFormat = 12)] = "DateTimeFormat"),
          (t[(t.NumberSymbols = 13)] = "NumberSymbols"),
          (t[(t.NumberFormats = 14)] = "NumberFormats"),
          (t[(t.CurrencyCode = 15)] = "CurrencyCode"),
          (t[(t.CurrencySymbol = 16)] = "CurrencySymbol"),
          (t[(t.CurrencyName = 17)] = "CurrencyName"),
          (t[(t.Currencies = 18)] = "Currencies"),
          (t[(t.Directionality = 19)] = "Directionality"),
          (t[(t.PluralCase = 20)] = "PluralCase"),
          (t[(t.ExtraData = 21)] = "ExtraData"),
          t
        );
      })({});
      const ta = "en-US";
      let ea = ta;
      function na(t) {
        var e, n;
        (n = "Expected localeId to be defined"),
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error(
                `ASSERTION ERROR: ${t} [Expected=> null != ${e} <=Actual]`
              );
            })(n, e),
          "string" == typeof t && (ea = t.toLowerCase().replace(/_/g, "-"));
      }
      function ra(t, e, n, r, s) {
        if (((t = st(t)), Array.isArray(t)))
          for (let i = 0; i < t.length; i++) ra(t[i], e, n, r, s);
        else {
          const i = Oe(),
            o = Te();
          let a = Xi(t) ? t : st(t.provide),
            l = Gi(t);
          const u = Pe(),
            c = 1048575 & u.providerIndexes,
            h = u.directiveStart,
            d = u.providerIndexes >> 20;
          if (Xi(t) || !t.multi) {
            const r = new cn(l, s, bo),
              p = oa(a, e, s ? c : c + d, h);
            -1 === p
              ? (An(Cn(u, o), i, a),
                sa(i, t, e.length),
                e.push(a),
                u.directiveStart++,
                u.directiveEnd++,
                s && (u.providerIndexes += 1048576),
                n.push(r),
                o.push(r))
              : ((n[p] = r), (o[p] = r));
          } else {
            const p = oa(a, e, c + d, h),
              f = oa(a, e, c, c + d),
              m = p >= 0 && n[p],
              g = f >= 0 && n[f];
            if ((s && !g) || (!s && !m)) {
              An(Cn(u, o), i, a);
              const c = (function (t, e, n, r, s) {
                const i = new cn(t, n, bo);
                return (
                  (i.multi = []),
                  (i.index = e),
                  (i.componentProviders = 0),
                  ia(i, s, r && !n),
                  i
                );
              })(s ? la : aa, n.length, s, r, l);
              !s && g && (n[f].providerFactory = c),
                sa(i, t, e.length, 0),
                e.push(a),
                u.directiveStart++,
                u.directiveEnd++,
                s && (u.providerIndexes += 1048576),
                n.push(c),
                o.push(c);
            } else sa(i, t, p > -1 ? p : f, ia(n[s ? f : p], l, !s && r));
            !s && r && g && n[f].componentProviders++;
          }
        }
      }
      function sa(t, e, n, r) {
        const s = Xi(e);
        if (s || e.useClass) {
          const i = (e.useClass || e).prototype.ngOnDestroy;
          if (i) {
            const o = t.destroyHooks || (t.destroyHooks = []);
            if (!s && e.multi) {
              const t = o.indexOf(n);
              -1 === t ? o.push(n, [r, i]) : o[t + 1].push(r, i);
            } else o.push(n, i);
          }
        }
      }
      function ia(t, e, n) {
        return n && t.componentProviders++, t.multi.push(e) - 1;
      }
      function oa(t, e, n, r) {
        for (let s = n; s < r; s++) if (e[s] === t) return s;
        return -1;
      }
      function aa(t, e, n, r) {
        return ua(this.multi, []);
      }
      function la(t, e, n, r) {
        const s = this.multi;
        let i;
        if (this.providerFactory) {
          const t = this.providerFactory.componentProviders,
            e = Rn(n, n[1], this.providerFactory.index, r);
          (i = e.slice(0, t)), ua(s, i);
          for (let n = t; n < e.length; n++) i.push(e[n]);
        } else (i = []), ua(s, i);
        return i;
      }
      function ua(t, e) {
        for (let n = 0; n < t.length; n++) e.push((0, t[n])());
        return e;
      }
      function ca(t, e = []) {
        return (n) => {
          n.providersResolver = (n, r) =>
            (function (t, e, n) {
              const r = Oe();
              if (r.firstCreatePass) {
                const s = se(t);
                ra(n, r.data, r.blueprint, s, !0),
                  ra(e, r.data, r.blueprint, s, !1);
              }
            })(n, r ? r(t) : t, e);
        };
      }
      class ha {}
      class da {
        resolveComponentFactory(t) {
          throw (function (t) {
            const e = Error(
              `No component factory found for ${tt(
                t
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let pa = (() => {
        class t {}
        return (t.NULL = new da()), t;
      })();
      function fa(...t) {}
      function ma(t, e) {
        return new ya(we(t, e));
      }
      const ga = function () {
        return ma(Pe(), Te());
      };
      let ya = (() => {
        class t {
          constructor(t) {
            this.nativeElement = t;
          }
        }
        return (t.__NG_ELEMENT_ID__ = ga), t;
      })();
      function wa(t) {
        return t instanceof ya ? t.nativeElement : t;
      }
      class va {}
      let ba = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => _a()), t;
      })();
      const _a = function () {
        const t = Te(),
          e = _e(Pe().index, t);
        return (function (t) {
          return t[11];
        })(Jt(e) ? e : t);
      };
      let Ca = (() => {
        class t {}
        return (
          (t.ɵprov = ct({ token: t, providedIn: "root", factory: () => null })),
          t
        );
      })();
      class Ea {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const Sa = new Ea("12.0.5");
      class xa {
        constructor() {}
        supports(t) {
          return co(t);
        }
        create(t) {
          return new Da(t);
        }
      }
      const Aa = (t, e) => e;
      class Da {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || Aa);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < Fa(n, r, s)) ? e : n,
              o = Fa(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const t = o - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  e <= i && i < t && (s[n] = r + 1);
                }
                s[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !co(t)))
            throw new Error(
              `Error trying to diff '${tt(
                t
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== s && Object.is(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, e)),
                    Object.is(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, e)), (i = !0)),
                (s = s._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[lo()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, (t) => {
                (r = this._trackByFn(e, t)),
                  null !== s && Object.is(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, t, r, e)),
                      Object.is(s.item, t) || this._addIdentityChange(s, t))
                    : ((s = this._mismatch(s, t, r, e)), (i = !0)),
                  (s = s._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(s), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(n, null))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, s, r))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(n, r))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, s, r))
              : (t = this._addAfter(new ka(e, n), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new Oa()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return (
            null === e ? (this._itHead = n) : (e._next = n),
            null === n ? (this._itTail = e) : (n._prev = e),
            t
          );
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Oa()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class ka {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class Ta {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if (
              (null === e || e <= n.currentIndex) &&
              Object.is(n.trackById, t)
            )
              return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class Oa {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new Ta()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Fa(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + e + s;
      }
      class Pa {
        constructor() {}
        supports(t) {
          return t instanceof Map || ho(t);
        }
        create() {
          return new Ia();
        }
      }
      class Ia {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || ho(t)))
              throw new Error(
                `Error trying to diff '${tt(
                  t
                )}'. Only maps and objects are allowed`
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n)
                this._maybeAddToChanges(e, t),
                  (this._appendAfter = e),
                  (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new Ra(t);
          return (
            this._records.set(t, n),
            (n.currentValue = e),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Object.is(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class Ra {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Na() {
        return new Ma([new xa()]);
      }
      let Ma = (() => {
        class t {
          constructor(t) {
            this.factories = t;
          }
          static create(e, n) {
            if (null != n) {
              const t = n.factories.slice();
              e = e.concat(t);
            }
            return new t(e);
          }
          static extend(e) {
            return {
              provide: t,
              useFactory: (n) => t.create(e, n || Na()),
              deps: [[t, new hr(), new cr()]],
            };
          }
          find(t) {
            const e = this.factories.find((e) => e.supports(t));
            if (null != e) return e;
            throw new Error(
              `Cannot find a differ supporting object '${t}' of type '${
                ((n = t), n.name || typeof n)
              }'`
            );
            var n;
          }
        }
        return (t.ɵprov = ct({ token: t, providedIn: "root", factory: Na })), t;
      })();
      function ja() {
        return new Va([new Pa()]);
      }
      let Va = (() => {
        class t {
          constructor(t) {
            this.factories = t;
          }
          static create(e, n) {
            if (n) {
              const t = n.factories.slice();
              e = e.concat(t);
            }
            return new t(e);
          }
          static extend(e) {
            return {
              provide: t,
              useFactory: (n) => t.create(e, n || ja()),
              deps: [[t, new hr(), new cr()]],
            };
          }
          find(t) {
            const e = this.factories.find((e) => e.supports(t));
            if (e) return e;
            throw new Error(`Cannot find a differ supporting object '${t}'`);
          }
        }
        return (t.ɵprov = ct({ token: t, providedIn: "root", factory: ja })), t;
      })();
      function Ba(t, e, n, r, s = !1) {
        for (; null !== n; ) {
          const i = e[n.index];
          if ((null !== i && r.push(ge(i)), te(i)))
            for (let t = Xt; t < i.length; t++) {
              const e = i[t],
                n = e[1].firstChild;
              null !== n && Ba(e[1], e, n, r);
            }
          const o = n.type;
          if (8 & o) Ba(t, e, n.child, r);
          else if (32 & o) {
            const t = is(n, e);
            let s;
            for (; (s = t()); ) r.push(s);
          } else if (16 & o) {
            const t = xs(e, n);
            if (Array.isArray(t)) r.push(...t);
            else {
              const n = os(e[16]);
              Ba(n[1], n, t, r, !0);
            }
          }
          n = s ? n.projectionNext : n.next;
        }
        return r;
      }
      class La {
        constructor(t, e) {
          (this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            e = t[1];
          return Ba(e, t, e.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (te(t)) {
              const e = t[8],
                n = e ? e.indexOf(this) : -1;
              n > -1 && (ps(t, n), Kn(e, n));
            }
            this._attachedToViewContainer = !1;
          }
          fs(this._lView[1], this._lView);
        }
        onDestroy(t) {
          hi(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Ti(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Oi(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (t, e, n) {
            Ve(!0);
            try {
              Oi(t, e, n);
            } finally {
              Ve(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null),
            ks(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = t;
        }
      }
      class Ua extends La {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Fi(this._view);
        }
        checkNoChanges() {
          !(function (t) {
            Ve(!0);
            try {
              Fi(t);
            } finally {
              Ve(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      const za = function (t) {
        return (function (t, e, n) {
          if (ne(t) && !n) {
            const n = _e(t.index, e);
            return new La(n, n);
          }
          return 47 & t.type ? new La(e[16], e) : null;
        })(Pe(), Te(), 16 == (16 & t));
      };
      let Ha = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = za), t;
      })();
      const $a = [new Pa()],
        qa = new Ma([new xa()]),
        Wa = new Va($a),
        Qa = function () {
          return Ya(Pe(), Te());
        };
      let Ka = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Qa), t;
      })();
      const Ga = Ka,
        Za = class extends Ga {
          constructor(t, e, n) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = e),
              (this.elementRef = n);
          }
          createEmbeddedView(t) {
            const e = this._declarationTContainer.tViews,
              n = ti(
                this._declarationLView,
                e,
                t,
                16,
                null,
                e.declTNode,
                null,
                null,
                null,
                null
              );
            n[17] = this._declarationLView[this._declarationTContainer.index];
            const r = this._declarationLView[19];
            return (
              null !== r && (n[19] = r.createEmbeddedView(e)),
              ri(e, n, t),
              new La(n)
            );
          }
        };
      function Ya(t, e) {
        return 4 & t.type ? new Za(e, t, ma(t, e)) : null;
      }
      class Xa {}
      class Ja {}
      const tl = function () {
        return ol(Pe(), Te());
      };
      let el = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = tl), t;
      })();
      const nl = el,
        rl = class extends nl {
          constructor(t, e, n) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = e),
              (this._hostLView = n);
          }
          get element() {
            return ma(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new jn(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = xn(this._hostTNode, this._hostLView);
            if (gn(t)) {
              const e = wn(t, this._hostLView),
                n = yn(t);
              return new jn(e[1].data[n + 8], e);
            }
            return new jn(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const e = sl(this._lContainer);
            return (null !== e && e[t]) || null;
          }
          get length() {
            return this._lContainer.length - Xt;
          }
          createEmbeddedView(t, e, n) {
            const r = t.createEmbeddedView(e || {});
            return this.insert(r, n), r;
          }
          createComponent(t, e, n, r, s) {
            const i = n || this.parentInjector;
            if (!s && null == t.ngModule && i) {
              const t = i.get(Xa, null);
              t && (s = t);
            }
            const o = t.create(i, r, void 0, s);
            return this.insert(o.hostView, e), o;
          }
          insert(t, e) {
            const n = t._lView,
              r = n[1];
            if (te(n[3])) {
              const e = this.indexOf(t);
              if (-1 !== e) this.detach(e);
              else {
                const e = n[3],
                  r = new rl(e, e[6], e[3]);
                r.detach(r.indexOf(t));
              }
            }
            const s = this._adjustIndex(e),
              i = this._lContainer;
            !(function (t, e, n, r) {
              const s = Xt + r,
                i = n.length;
              r > 0 && (n[s - 1][4] = e),
                r < i - Xt
                  ? ((e[4] = n[s]), Qn(n, Xt + r, e))
                  : (n.push(e), (e[4] = null)),
                (e[3] = n);
              const o = e[17];
              null !== o &&
                n !== o &&
                (function (t, e) {
                  const n = t[9];
                  e[16] !== e[3][3][16] && (t[2] = !0),
                    null === n ? (t[9] = [e]) : n.push(e);
                })(o, e);
              const a = e[19];
              null !== a && a.insertView(t), (e[2] |= 128);
            })(r, n, i, s);
            const o = As(s, i),
              a = n[11],
              l = bs(a, i[7]);
            return (
              null !== l &&
                (function (t, e, n, r, s, i) {
                  (r[0] = s), (r[6] = e), ks(t, r, n, 1, s, i);
                })(r, i[6], a, n, l, o),
              t.attachToViewContainerRef(),
              Qn(il(i), s, t),
              t
            );
          }
          move(t, e) {
            return this.insert(t, e);
          }
          indexOf(t) {
            const e = sl(this._lContainer);
            return null !== e ? e.indexOf(t) : -1;
          }
          remove(t) {
            const e = this._adjustIndex(t, -1),
              n = ps(this._lContainer, e);
            n && (Kn(il(this._lContainer), e), fs(n[1], n));
          }
          detach(t) {
            const e = this._adjustIndex(t, -1),
              n = ps(this._lContainer, e);
            return n && null != Kn(il(this._lContainer), e) ? new La(n) : null;
          }
          _adjustIndex(t, e = 0) {
            return null == t ? this.length + e : t;
          }
        };
      function sl(t) {
        return t[8];
      }
      function il(t) {
        return t[8] || (t[8] = []);
      }
      function ol(t, e) {
        let n;
        const r = e[t.index];
        if (te(r)) n = r;
        else {
          let s;
          if (8 & t.type) s = ge(r);
          else {
            const n = e[11];
            s = n.createComment("");
            const r = we(t, e);
            ys(
              n,
              bs(n, r),
              s,
              (function (t, e) {
                return fe(t) ? t.nextSibling(e) : e.nextSibling;
              })(n, r),
              !1
            );
          }
          (e[t.index] = n = Si(r, e, s, t)), ki(e, n);
        }
        return new rl(n, t, e);
      }
      const al = {};
      class ll extends pa {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const e = Gt(t);
          return new hl(e, this.ngModule);
        }
      }
      function ul(t) {
        const e = [];
        for (let n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const cl = new zn("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => ns,
      });
      class hl extends ha {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(Hs).join(",")),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return ul(this.componentDef.inputs);
        }
        get outputs() {
          return ul(this.componentDef.outputs);
        }
        create(t, e, n, r) {
          const s = (r = r || this.ngModule)
              ? (function (t, e) {
                  return {
                    get: (n, r, s) => {
                      const i = t.get(n, al, s);
                      return i !== al || r === al ? i : e.get(n, r, s);
                    },
                  };
                })(t, r.injector)
              : t,
            i = s.get(va, me),
            o = s.get(Ca, null),
            a = i.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || "div",
            u = n
              ? (function (t, e, n) {
                  if (fe(t)) return t.selectRootElement(e, n === xt.ShadowDom);
                  let r = "string" == typeof e ? t.querySelector(e) : e;
                  return (r.textContent = ""), r;
                })(a, n, this.componentDef.encapsulation)
              : hs(
                  i.createRenderer(null, this.componentDef),
                  l,
                  (function (t) {
                    const e = t.toLowerCase();
                    return "svg" === e
                      ? "http://www.w3.org/2000/svg"
                      : "math" === e
                      ? "http://www.w3.org/1998/MathML/"
                      : null;
                  })(l)
                ),
            c = this.componentDef.onPush ? 576 : 528,
            h = {
              components: [],
              scheduler: ns,
              clean: Ii,
              playerHandler: null,
              flags: 0,
            },
            d = ci(0, null, null, 1, 0, null, null, null, null, null),
            p = ti(null, d, h, c, null, null, i, a, o, s);
          let f, m;
          Qe(p);
          try {
            const t = (function (t, e, n, r, s, i) {
              const o = n[1];
              n[20] = t;
              const a = ei(o, 20, 2, "#host", null),
                l = (a.mergedAttrs = e.hostAttrs);
              null !== l &&
                (Vi(a, l, !0),
                null !== t &&
                  (hn(s, t, l),
                  null !== a.classes && Fs(s, t, a.classes),
                  null !== a.styles && Os(s, t, a.styles)));
              const u = r.createRenderer(t, e),
                c = ti(
                  n,
                  ui(e),
                  null,
                  e.onPush ? 64 : 16,
                  n[20],
                  a,
                  r,
                  u,
                  null,
                  null
                );
              return (
                o.firstCreatePass &&
                  (An(Cn(a, n), o, e.type), yi(o, a), vi(a, n.length, 1)),
                ki(n, c),
                (n[20] = c)
              );
            })(u, this.componentDef, p, i, a);
            if (u)
              if (n) hn(a, u, ["ng-version", Sa.full]);
              else {
                const { attrs: t, classes: e } = (function (t) {
                  const e = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < t.length; ) {
                    let i = t[r];
                    if ("string" == typeof i)
                      2 === s
                        ? "" !== i && e.push(i, t[++r])
                        : 8 === s && n.push(i);
                    else {
                      if (!Vs(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: e, classes: n };
                })(this.componentDef.selectors[0]);
                t && hn(a, u, t), e && e.length > 0 && Fs(a, u, e.join(" "));
              }
            if (((m = ve(d, Yt)), void 0 !== e)) {
              const t = (m.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = e[n];
                t.push(null != r ? Array.from(r) : null);
              }
            }
            (f = (function (t, e, n, r, s) {
              const i = n[1],
                o = (function (t, e, n) {
                  const r = Pe();
                  t.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    bi(t, r, e, ni(t, e, 1, null), n));
                  const s = Rn(e, t, r.directiveStart, r);
                  Zr(s, e);
                  const i = we(r, e);
                  return i && Zr(i, e), s;
                })(i, n, e);
              if (
                (r.components.push(o),
                (t[8] = o),
                s && s.forEach((t) => t(o, e)),
                e.contentQueries)
              ) {
                const t = Pe();
                e.contentQueries(1, o, t.directiveStart);
              }
              const a = Pe();
              return (
                !i.firstCreatePass ||
                  (null === e.hostBindings && null === e.hostAttrs) ||
                  (tn(a.index),
                  mi(n[1], a, 0, a.directiveStart, a.directiveEnd, e),
                  gi(e, o)),
                o
              );
            })(t, this.componentDef, p, h, [eo])),
              ri(d, p, null);
          } finally {
            Xe();
          }
          return new dl(this.componentType, f, ma(m, p), p, m);
        }
      }
      class dl extends class {} {
        constructor(t, e, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new Ua(r)),
            (this.componentType = t);
        }
        get injector() {
          return new jn(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      const pl = new Map();
      class fl extends Xa {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new ll(this));
          const n = Zt(t),
            r = t[jt] || null;
          r && na(r),
            (this._bootstrapComponents = rs(n.bootstrap)),
            (this._r3Injector = Wi(
              t,
              e,
              [
                { provide: Xa, useValue: this },
                { provide: pa, useValue: this.componentFactoryResolver },
              ],
              tt(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, e = to.THROW_IF_NOT_FOUND, n = vt.Default) {
          return t === to || t === Xa || t === Bi
            ? this
            : this._r3Injector.get(t, e, n);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class ml extends Ja {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== Zt(t) &&
              (function (t) {
                const e = new Set();
                !(function t(n) {
                  const r = Zt(n, !0),
                    s = r.id;
                  null !== s &&
                    ((function (t, e, n) {
                      if (e && e !== n)
                        throw new Error(
                          `Duplicate module registered for ${t} - ${tt(
                            e
                          )} vs ${tt(e.name)}`
                        );
                    })(s, pl.get(s), n),
                    pl.set(s, n));
                  const i = rs(r.imports);
                  for (const o of i) e.has(o) || (e.add(o), t(o));
                })(t);
              })(t);
        }
        create(t) {
          return new fl(this.moduleType, t);
        }
      }
      function gl(t, e, n) {
        const r = Be() + t,
          s = Te();
        return s[r] === $s
          ? po(s, r, n ? e.call(n) : e())
          : (function (t, e) {
              return t[e];
            })(s, r);
      }
      function yl(t, e, n, r, s, i, o) {
        return (function (t, e, n, r, s, i, o, a, l) {
          const u = e + n;
          return (function (t, e, n, r, s, i) {
            const o = mo(t, e, n, r);
            return mo(t, e + 2, s, i) || o;
          })(t, u, s, i, o, a)
            ? po(t, u + 4, l ? r.call(l, s, i, o, a) : r(s, i, o, a))
            : wl(t, u + 4);
        })(Te(), Be(), t, e, n, r, s, i, o);
      }
      function wl(t, e) {
        const n = t[e];
        return n === $s ? void 0 : n;
      }
      function vl(t, e) {
        const n = Oe();
        let r;
        const s = t + Yt;
        n.firstCreatePass
          ? ((r = (function (t, e) {
              if (e)
                for (let n = e.length - 1; n >= 0; n--) {
                  const r = e[n];
                  if (t === r.name) return r;
                }
              throw new ot("302", `The pipe '${t}' could not be found!`);
            })(e, n.pipeRegistry)),
            (n.data[s] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy))
          : (r = n.data[s]);
        const i = r.factory || (r.factory = ie(r.type)),
          o = _t(bo);
        try {
          const t = bn(!1),
            e = i();
          return (
            bn(t),
            (function (t, e, n, r) {
              n >= t.data.length &&
                ((t.data[n] = null), (t.blueprint[n] = null)),
                (e[n] = r);
            })(n, Te(), s, e),
            e
          );
        } finally {
          _t(o);
        }
      }
      function bl(t, e, n) {
        const r = t + Yt,
          s = Te(),
          i = be(s, r);
        return El(
          s,
          Cl(s, r)
            ? (function (t, e, n, r, s, i) {
                const o = e + n;
                return fo(t, o, s)
                  ? po(t, o + 1, i ? r.call(i, s) : r(s))
                  : wl(t, o + 1);
              })(s, Be(), e, i.transform, n, i)
            : i.transform(n)
        );
      }
      function _l(t, e, n, r) {
        const s = t + Yt,
          i = Te(),
          o = be(i, s);
        return El(
          i,
          Cl(i, s)
            ? (function (t, e, n, r, s, i, o) {
                const a = e + n;
                return mo(t, a, s, i)
                  ? po(t, a + 2, o ? r.call(o, s, i) : r(s, i))
                  : wl(t, a + 2);
              })(i, Be(), e, o.transform, n, r, o)
            : o.transform(n, r)
        );
      }
      function Cl(t, e) {
        return t[1].data[e].pure;
      }
      function El(t, e) {
        return (
          uo.isWrapped(e) &&
            ((e = uo.unwrap(e)), (t[De.lFrame.bindingIndex] = $s)),
          e
        );
      }
      function Sl(t) {
        return (e) => {
          setTimeout(t, void 0, e);
        };
      }
      const xl = class extends E {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          var r, s, i;
          let o = t,
            a = e || (() => null),
            l = n;
          if (t && "object" == typeof t) {
            const e = t;
            (o = null === (r = e.next) || void 0 === r ? void 0 : r.bind(e)),
              (a = null === (s = e.error) || void 0 === s ? void 0 : s.bind(e)),
              (l =
                null === (i = e.complete) || void 0 === i ? void 0 : i.bind(e));
          }
          this.__isAsync && ((a = Sl(a)), o && (o = Sl(o)), l && (l = Sl(l)));
          const u = super.subscribe({ next: o, error: a, complete: l });
          return t instanceof h && t.add(u), u;
        }
      };
      function Al() {
        return this._results[lo()]();
      }
      class Dl {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const e = lo(),
            n = Dl.prototype;
          n[e] || (n[e] = Al);
        }
        get changes() {
          return this._changes || (this._changes = new xl());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, e) {
          const n = this;
          n.dirty = !1;
          const r = qn(t);
          (this._changesDetected = !(function (t, e, n) {
            if (t.length !== e.length) return !1;
            for (let r = 0; r < t.length; r++) {
              let s = t[r],
                i = e[r];
              if ((n && ((s = n(s)), (i = n(i))), i !== s)) return !1;
            }
            return !0;
          })(n._results, r, e)) &&
            ((n._results = r),
            (n.length = r.length),
            (n.last = r[this.length - 1]),
            (n.first = r[0]));
        }
        notifyOnChanges() {
          !this._changes ||
            (!this._changesDetected && this._emitDistinctChangesOnly) ||
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class kl {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new kl(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Tl {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const e = t.queries;
          if (null !== e) {
            const n =
                null !== t.contentQueries ? t.contentQueries[0] : e.length,
              r = [];
            for (let t = 0; t < n; t++) {
              const n = e.getByIndex(t);
              r.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new Tl(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++)
            null !== Ll(t, e).matches && this.queries[e].setDirty();
        }
      }
      class Ol {
        constructor(t, e, n = null) {
          (this.predicate = t), (this.flags = e), (this.read = n);
        }
      }
      class Fl {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementStart(t, e);
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++)
            this.queries[e].elementEnd(t);
        }
        embeddedTView(t) {
          let e = null;
          for (let n = 0; n < this.length; n++) {
            const r = null !== e ? e.length : 0,
              s = this.getByIndex(n).embeddedTView(t, r);
            s &&
              ((s.indexInDeclarationView = n),
              null !== e ? e.push(s) : (e = [s]));
          }
          return null !== e ? new Fl(e) : null;
        }
        template(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].template(t, e);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Pl {
        constructor(t, e = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e);
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, e) {
          this.elementStart(t, e);
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, e),
              new Pl(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const e = this._declarationNodeIndex;
            let n = t.parent;
            for (; null !== n && 8 & n.type && n.index !== e; ) n = n.parent;
            return e === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, e) {
          const n = this.metadata.predicate;
          if (Array.isArray(n))
            for (let r = 0; r < n.length; r++) {
              const s = n[r];
              this.matchTNodeWithReadOption(t, e, Il(e, s)),
                this.matchTNodeWithReadOption(t, e, In(e, t, s, !1, !1));
            }
          else
            n === Ka
              ? 4 & e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, In(e, t, n, !1, !1));
        }
        matchTNodeWithReadOption(t, e, n) {
          if (null !== n) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === ya || r === el || (r === Ka && 4 & e.type))
                this.addMatch(e.index, -2);
              else {
                const n = In(e, t, r, !1, !1);
                null !== n && this.addMatch(e.index, n);
              }
            else this.addMatch(e.index, n);
          }
        }
        addMatch(t, e) {
          null === this.matches
            ? (this.matches = [t, e])
            : this.matches.push(t, e);
        }
      }
      function Il(t, e) {
        const n = t.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
        return null;
      }
      function Rl(t, e, n, r) {
        return -1 === n
          ? (function (t, e) {
              return 11 & t.type ? ma(t, e) : 4 & t.type ? Ya(t, e) : null;
            })(e, t)
          : -2 === n
          ? (function (t, e, n) {
              return n === ya
                ? ma(e, t)
                : n === Ka
                ? Ya(e, t)
                : n === el
                ? ol(e, t)
                : void 0;
            })(t, e, r)
          : Rn(t, t[1], n, e);
      }
      function Nl(t, e, n, r) {
        const s = e[19].queries[r];
        if (null === s.matches) {
          const r = t.data,
            i = n.matches,
            o = [];
          for (let t = 0; t < i.length; t += 2) {
            const s = i[t];
            o.push(s < 0 ? null : Rl(e, r[s], i[t + 1], n.metadata.read));
          }
          s.matches = o;
        }
        return s.matches;
      }
      function Ml(t, e, n, r) {
        const s = t.queries.getByIndex(n),
          i = s.matches;
        if (null !== i) {
          const o = Nl(t, e, s, n);
          for (let t = 0; t < i.length; t += 2) {
            const n = i[t];
            if (n > 0) r.push(o[t / 2]);
            else {
              const s = i[t + 1],
                o = e[-n];
              for (let t = Xt; t < o.length; t++) {
                const e = o[t];
                e[17] === e[3] && Ml(e[1], e, s, r);
              }
              if (null !== o[9]) {
                const t = o[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e];
                  Ml(n[1], n, s, r);
                }
              }
            }
          }
        }
        return r;
      }
      function jl(t) {
        const e = Te(),
          n = Oe(),
          r = He();
        $e(r + 1);
        const s = Ll(n, r);
        if (t.dirty && Ce(e) === (2 == (2 & s.metadata.flags))) {
          if (null === s.matches) t.reset([]);
          else {
            const i = s.crossesNgTemplate ? Ml(n, e, r, []) : Nl(n, e, s, r);
            t.reset(i, wa), t.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Vl(t, e, n) {
        const r = Oe();
        r.firstCreatePass &&
          ((function (t, e, n) {
            null === t.queries && (t.queries = new Fl()),
              t.queries.track(new Pl(e, -1));
          })(r, new Ol(t, e, n)),
          2 == (2 & e) && (r.staticViewQueries = !0)),
          (function (t, e, n) {
            const r = new Dl(4 == (4 & n));
            hi(t, e, r, r.destroy),
              null === e[19] && (e[19] = new Tl()),
              e[19].queries.push(new kl(r));
          })(r, Te(), e);
      }
      function Bl() {
        return (t = Te()), (e = He()), t[19].queries[e].queryList;
        var t, e;
      }
      function Ll(t, e) {
        return t.queries.getByIndex(e);
      }
      function Ul(t, e) {
        return Ya(t, e);
      }
      const zl = new zn("Application Initializer");
      let Hl = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.resolve = fa),
              (this.reject = fa),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                if (Do(e)) t.push(e);
                else if (ko(e)) {
                  const n = new Promise((t, n) => {
                    e.subscribe({ complete: t, error: n });
                  });
                  t.push(n);
                }
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch((t) => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(zl, 8));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const $l = new zn("AppId"),
        ql = {
          provide: $l,
          useFactory: function () {
            return `${Wl()}${Wl()}${Wl()}`;
          },
          deps: [],
        };
      function Wl() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Ql = new zn("Platform Initializer"),
        Kl = new zn("Platform ID"),
        Gl = new zn("appBootstrapListener");
      let Zl = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Yl = new zn("LocaleId"),
        Xl = new zn("DefaultCurrencyCode");
      class Jl {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const tu = function (t) {
          return new ml(t);
        },
        eu = tu,
        nu = function (t) {
          return Promise.resolve(tu(t));
        },
        ru = function (t) {
          const e = tu(t),
            n = rs(Zt(t).declarations).reduce((t, e) => {
              const n = Gt(e);
              return n && t.push(new hl(n)), t;
            }, []);
          return new Jl(e, n);
        },
        su = ru,
        iu = function (t) {
          return Promise.resolve(ru(t));
        };
      let ou = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = eu),
              (this.compileModuleAsync = nu),
              (this.compileModuleAndAllComponentsSync = su),
              (this.compileModuleAndAllComponentsAsync = iu);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const au = (() => Promise.resolve(0))();
      function lu(t) {
        "undefined" == typeof Zone
          ? au.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
      }
      class uu {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: e = !1,
          shouldCoalesceRunChangeDetection: n = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new xl(!1)),
            (this.onMicrotaskEmpty = new xl(!1)),
            (this.onStable = new xl(!1)),
            (this.onError = new xl(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched();
          const r = this;
          (r._nesting = 0),
            (r._outer = r._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)),
            (r.shouldCoalesceEventChangeDetection = !n && e),
            (r.shouldCoalesceRunChangeDetection = n),
            (r.lastRequestAnimationFrameId = -1),
            (r.nativeRequestAnimationFrame = (function () {
              let t = Ot.requestAnimationFrame,
                e = Ot.cancelAnimationFrame;
              if ("undefined" != typeof Zone && t && e) {
                const n = t[Zone.__symbol__("OriginalDelegate")];
                n && (t = n);
                const r = e[Zone.__symbol__("OriginalDelegate")];
                r && (e = r);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: e,
              };
            })().nativeRequestAnimationFrame),
            (function (t) {
              const e = () => {
                !(function (t) {
                  t.isCheckStableRunning ||
                    -1 !== t.lastRequestAnimationFrameId ||
                    ((t.lastRequestAnimationFrameId =
                      t.nativeRequestAnimationFrame.call(Ot, () => {
                        t.fakeTopEventTask ||
                          (t.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (t.lastRequestAnimationFrameId = -1),
                                du(t),
                                (t.isCheckStableRunning = !0),
                                hu(t),
                                (t.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          t.fakeTopEventTask.invoke();
                      })),
                    du(t));
                })(t);
              };
              t._inner = t._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return pu(t), n.invokeTask(s, i, o, a);
                  } finally {
                    ((t.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      t.shouldCoalesceRunChangeDetection) &&
                      e(),
                      fu(t);
                  }
                },
                onInvoke: (n, r, s, i, o, a, l) => {
                  try {
                    return pu(t), n.invoke(s, i, o, a, l);
                  } finally {
                    t.shouldCoalesceRunChangeDetection && e(), fu(t);
                  }
                },
                onHasTask: (e, n, r, s) => {
                  e.hasTask(r, s),
                    n === r &&
                      ("microTask" == s.change
                        ? ((t._hasPendingMicrotasks = s.microTask),
                          du(t),
                          hu(t))
                        : "macroTask" == s.change &&
                          (t.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, n, r, s) => (
                  e.handleError(r, s),
                  t.runOutsideAngular(() => t.onError.emit(s)),
                  !1
                ),
              });
            })(r);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!uu.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (uu.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask("NgZoneEvent: " + r, t, cu, fa, fa);
          try {
            return s.runTask(i, e, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const cu = {};
      function hu(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function du(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          ((t.shouldCoalesceEventChangeDetection ||
            t.shouldCoalesceRunChangeDetection) &&
            -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function pu(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function fu(t) {
        t._nesting--, hu(t);
      }
      class mu {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new xl()),
            (this.onMicrotaskEmpty = new xl()),
            (this.onStable = new xl()),
            (this.onError = new xl());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }
      let gu = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      uu.assertNotInAngularZone(),
                        lu(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                lu(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (e) =>
                    !e.updateCb ||
                    !e.updateCb(t) ||
                    (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let r = -1;
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (t) => t.timeoutId !== r
                  )),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(uu));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        yu = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), bu.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return bu.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class wu {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      let vu,
        bu = new wu(),
        _u = !0,
        Cu = !1;
      const Eu = new zn("AllowMultipleToken");
      class Su {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function xu(t, e, n = []) {
        const r = `Platform: ${e}`,
          s = new zn(r);
        return (e = []) => {
          let i = Au();
          if (!i || i.injector.get(Eu, !1))
            if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
            else {
              const t = n
                .concat(e)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: Ui, useValue: "platform" }
                );
              !(function (t) {
                if (vu && !vu.destroyed && !vu.injector.get(Eu, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                vu = t.get(Du);
                const e = t.get(Ql, null);
                e && e.forEach((t) => t());
              })(to.create({ providers: t, name: r }));
            }
          return (function (t) {
            const e = Au();
            if (!e) throw new Error("No platform exists!");
            if (!e.injector.get(t, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return e;
          })(s);
        };
      }
      function Au() {
        return vu && !vu.destroyed ? vu : null;
      }
      let Du = (() => {
        class t {
          constructor(t) {
            (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function (t, e) {
                let n;
                return (
                  (n =
                    "noop" === t
                      ? new mu()
                      : ("zone.js" === t ? void 0 : t) ||
                        new uu({
                          enableLongStackTrace: ((Cu = !0), _u),
                          shouldCoalesceEventChangeDetection: !!(null == e
                            ? void 0
                            : e.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == e
                            ? void 0
                            : e.ngZoneRunCoalescing),
                        })),
                  n
                );
              })(e ? e.ngZone : void 0, {
                ngZoneEventCoalescing: (e && e.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (e && e.ngZoneRunCoalescing) || !1,
              }),
              r = [{ provide: uu, useValue: n }];
            return n.run(() => {
              const e = to.create({
                  providers: r,
                  parent: this.injector,
                  name: t.moduleType.name,
                }),
                s = t.create(e),
                i = s.injector.get(es, null);
              if (!i)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                n.runOutsideAngular(() => {
                  const t = n.onError.subscribe({
                    next: (t) => {
                      i.handleError(t);
                    },
                  });
                  s.onDestroy(() => {
                    Ou(this._modules, s), t.unsubscribe();
                  });
                }),
                (function (t, e, n) {
                  try {
                    const r = n();
                    return Do(r)
                      ? r.catch((n) => {
                          throw (
                            (e.runOutsideAngular(() => t.handleError(n)), n)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r);
                  }
                })(i, n, () => {
                  const t = s.injector.get(Hl);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (
                        na(s.injector.get(Yl, ta) || ta),
                        this._moduleDoBootstrap(s),
                        s
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = ku({}, e);
            return (function (t, e, n) {
              const r = new ml(n);
              return Promise.resolve(r);
            })(0, 0, t).then((t) => this.bootstrapModuleFactory(t, n));
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(Tu);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach((t) => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${tt(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(to));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function ku(t, e) {
        return Array.isArray(e)
          ? e.reduce(ku, t)
          : Object.assign(Object.assign({}, t), e);
      }
      let Tu = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this._zone = t),
              (this._injector = e),
              (this._exceptionHandler = n),
              (this._componentFactoryResolver = r),
              (this._initStatus = s),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const i = new w((t) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              o = new w((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    uu.assertNotInAngularZone(),
                      lu(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  uu.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = (function (...t) {
              let e = Number.POSITIVE_INFINITY,
                n = null,
                r = t[t.length - 1];
              return (
                x(r)
                  ? ((n = t.pop()),
                    t.length > 1 &&
                      "number" == typeof t[t.length - 1] &&
                      (e = t.pop()))
                  : "number" == typeof r && (e = t.pop()),
                null === n && 1 === t.length && t[0] instanceof w
                  ? t[0]
                  : H(e)($(t, n))
              );
            })(
              i,
              o.pipe((t) => {
                return q()(
                  ((e = Y),
                  function (t) {
                    let n;
                    n =
                      "function" == typeof e
                        ? e
                        : function () {
                            return e;
                          };
                    const r = Object.create(t, G);
                    return (r.source = t), (r.subjectFactory = n), r;
                  })(t)
                );
                var e;
              })
            );
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let n;
            (n =
              t instanceof ha
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(Xa),
              s = n.create(to.NULL, [], e || n.selector, r),
              i = s.location.nativeElement,
              o = s.injector.get(gu, null),
              a = o && s.injector.get(yu);
            return (
              o && a && a.registerApplication(i, o),
              s.onDestroy(() => {
                this.detachView(s.hostView),
                  Ou(this.components, s),
                  a && a.unregisterApplication(i);
              }),
              this._loadComponent(s),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(t)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            Ou(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(Gl, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(uu), or(to), or(es), or(pa), or(Hl));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Ou(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class Fu {}
      class Pu {}
      const Iu = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
      let Ru = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || Iu);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, r] = t.split("#");
            return (
              void 0 === r && (r = "default"),
              n(255)(e)
                .then((t) => t[r])
                .then((t) => Nu(t, e, r))
                .then((t) => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, r] = t.split("#"),
              s = "NgFactory";
            return (
              void 0 === r && ((r = "default"), (s = "")),
              n(255)(
                this._config.factoryPathPrefix +
                  e +
                  this._config.factoryPathSuffix
              )
                .then((t) => t[r + s])
                .then((t) => Nu(t, e, r))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(ou), or(Pu, 8));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Nu(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const Mu = xu(null, "core", [
          { provide: Kl, useValue: "unknown" },
          { provide: Du, deps: [to] },
          { provide: yu, deps: [] },
          { provide: Zl, deps: [] },
        ]),
        ju = [
          { provide: Tu, useClass: Tu, deps: [uu, to, es, pa, Hl] },
          {
            provide: cl,
            deps: [uu],
            useFactory: function (t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function (t) {
                  e.push(t);
                }
              );
            },
          },
          { provide: Hl, useClass: Hl, deps: [[new cr(), zl]] },
          { provide: ou, useClass: ou, deps: [] },
          ql,
          {
            provide: Ma,
            useFactory: function () {
              return qa;
            },
            deps: [],
          },
          {
            provide: Va,
            useFactory: function () {
              return Wa;
            },
            deps: [],
          },
          {
            provide: Yl,
            useFactory: function (t) {
              return (
                na(
                  (t =
                    t ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    ta)
                ),
                t
              );
            },
            deps: [[new ur(Yl), new cr(), new hr()]],
          },
          { provide: Xl, useValue: "USD" },
        ];
      let Vu = (() => {
          class t {
            constructor(t) {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Tu));
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({ providers: ju })),
            t
          );
        })(),
        Bu = null;
      function Lu() {
        return Bu;
      }
      const Uu = new zn("DocumentToken");
      let zu = (() => {
        class t {
          historyGo(t) {
            throw new Error("Not implemented");
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = ct({ factory: Hu, token: t, providedIn: "platform" })),
          t
        );
      })();
      function Hu() {
        return or(qu);
      }
      const $u = new zn("Location Initialized");
      let qu = (() => {
        class t extends zu {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return Lu().getBaseHref(this._doc);
          }
          onPopState(t) {
            const e = Lu().getGlobalEventTarget(this._doc, "window");
            return (
              e.addEventListener("popstate", t, !1),
              () => e.removeEventListener("popstate", t)
            );
          }
          onHashChange(t) {
            const e = Lu().getGlobalEventTarget(this._doc, "window");
            return (
              e.addEventListener("hashchange", t, !1),
              () => e.removeEventListener("hashchange", t)
            );
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            Wu() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            Wu()
              ? this._history.replaceState(t, e, n)
              : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(t = 0) {
            this._history.go(t);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Uu));
          }),
          (t.ɵprov = ct({ factory: Qu, token: t, providedIn: "platform" })),
          t
        );
      })();
      function Wu() {
        return !!window.history.pushState;
      }
      function Qu() {
        return new qu(or(Uu));
      }
      function Ku(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith("/") && n++,
          e.startsWith("/") && n++,
          2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        );
      }
      function Gu(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function Zu(t) {
        return t && "?" !== t[0] ? "?" + t : t;
      }
      let Yu = (() => {
        class t {
          historyGo(t) {
            throw new Error("Not implemented");
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = ct({ factory: Xu, token: t, providedIn: "root" })),
          t
        );
      })();
      function Xu(t) {
        const e = or(Uu).location;
        return new tc(or(zu), (e && e.origin) || "");
      }
      const Ju = new zn("appBaseHref");
      let tc = (() => {
          class t extends Yu {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                (this._removeListenerFns = []),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = e;
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return Ku(this._baseHref, t);
            }
            path(t = !1) {
              const e =
                  this._platformLocation.pathname +
                  Zu(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + Zu(r));
              this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + Zu(r));
              this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(t = 0) {
              var e, n;
              null === (n = (e = this._platformLocation).historyGo) ||
                void 0 === n ||
                n.call(e, t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(zu), or(Ju, 8));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        ec = (() => {
          class t extends Yu {
            constructor(t, e) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != e && (this._baseHref = e);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = Ku(this._baseHref, t);
              return e.length > 0 ? "#" + e : e;
            }
            pushState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + Zu(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + Zu(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(t = 0) {
              var e, n;
              null === (n = (e = this._platformLocation).historyGo) ||
                void 0 === n ||
                n.call(e, t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(zu), or(Ju, 8));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        nc = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new xl()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = Gu(sc(n))),
                this._platformStrategy.onPopState((t) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type,
                  });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = "") {
              return this.path() == this.normalize(t + Zu(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, sc(e))
              );
            }
            prepareExternalUrl(t) {
              return (
                t && "/" !== t[0] && (t = "/" + t),
                this._platformStrategy.prepareExternalUrl(t)
              );
            }
            go(t, e = "", n = null) {
              this._platformStrategy.pushState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Zu(e)),
                  n
                );
            }
            replaceState(t, e = "", n = null) {
              this._platformStrategy.replaceState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Zu(e)),
                  n
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            historyGo(t = 0) {
              var e, n;
              null === (n = (e = this._platformStrategy).historyGo) ||
                void 0 === n ||
                n.call(e, t);
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((t) => {
                    this._notifyUrlChangeListeners(t.url, t.state);
                  }));
            }
            _notifyUrlChangeListeners(t = "", e) {
              this._urlChangeListeners.forEach((n) => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({
                next: t,
                error: e,
                complete: n,
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Yu), or(zu));
            }),
            (t.normalizeQueryParams = Zu),
            (t.joinWithSlash = Ku),
            (t.stripTrailingSlash = Gu),
            (t.ɵprov = ct({ factory: rc, token: t, providedIn: "root" })),
            t
          );
        })();
      function rc() {
        return new nc(or(Yu), or(zu));
      }
      function sc(t) {
        return t.replace(/\/index.html$/, "");
      }
      var ic = (function (t) {
        return (
          (t[(t.Zero = 0)] = "Zero"),
          (t[(t.One = 1)] = "One"),
          (t[(t.Two = 2)] = "Two"),
          (t[(t.Few = 3)] = "Few"),
          (t[(t.Many = 4)] = "Many"),
          (t[(t.Other = 5)] = "Other"),
          t
        );
      })({});
      class oc {}
      let ac = (() => {
        class t extends oc {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, e) {
            switch (
              (function (t) {
                return (function (t) {
                  const e = (function (t) {
                    return t.toLowerCase().replace(/_/g, "-");
                  })(t);
                  let n = Xo(e);
                  if (n) return n;
                  const r = e.split("-")[0];
                  if (((n = Xo(r)), n)) return n;
                  if ("en" === r) return Zo;
                  throw new Error(`Missing locale data for the locale "${t}".`);
                })(t)[Jo.PluralCase];
              })(e || this.locale)(t)
            ) {
              case ic.Zero:
                return "zero";
              case ic.One:
                return "one";
              case ic.Two:
                return "two";
              case ic.Few:
                return "few";
              case ic.Many:
                return "many";
              default:
                return "other";
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Yl));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function lc(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(";")) {
          const t = n.indexOf("="),
            [r, s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
          if (r.trim() === e) return decodeURIComponent(s);
        }
        return null;
      }
      let uc = (() => {
        class t {
          constructor(t, e, n, r) {
            (this._iterableDiffers = t),
              (this._keyValueDiffers = e),
              (this._ngEl = n),
              (this._renderer = r),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(t) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                "string" == typeof t ? t.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(t) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = "string" == typeof t ? t.split(/\s+/) : t),
              this._rawClass &&
                (co(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const t = this._iterableDiffer.diff(this._rawClass);
              t && this._applyIterableChanges(t);
            } else if (this._keyValueDiffer) {
              const t = this._keyValueDiffer.diff(this._rawClass);
              t && this._applyKeyValueChanges(t);
            }
          }
          _applyKeyValueChanges(t) {
            t.forEachAddedItem((t) => this._toggleClass(t.key, t.currentValue)),
              t.forEachChangedItem((t) =>
                this._toggleClass(t.key, t.currentValue)
              ),
              t.forEachRemovedItem((t) => {
                t.previousValue && this._toggleClass(t.key, !1);
              });
          }
          _applyIterableChanges(t) {
            t.forEachAddedItem((t) => {
              if ("string" != typeof t.item)
                throw new Error(
                  `NgClass can only toggle CSS classes expressed as strings, got ${tt(
                    t.item
                  )}`
                );
              this._toggleClass(t.item, !0);
            }),
              t.forEachRemovedItem((t) => this._toggleClass(t.item, !1));
          }
          _applyClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach((t) => this._toggleClass(t, !0))
                : Object.keys(t).forEach((e) => this._toggleClass(e, !!t[e])));
          }
          _removeClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach((t) => this._toggleClass(t, !1))
                : Object.keys(t).forEach((t) => this._toggleClass(t, !1)));
          }
          _toggleClass(t, e) {
            (t = t.trim()) &&
              t.split(/\s+/g).forEach((t) => {
                e
                  ? this._renderer.addClass(this._ngEl.nativeElement, t)
                  : this._renderer.removeClass(this._ngEl.nativeElement, t);
              });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bo(Ma), bo(Va), bo(ya), bo(ba));
          }),
          (t.ɵdir = Qt({
            type: t,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
          })),
          t
        );
      })();
      class cc {
        constructor(t, e, n, r) {
          (this.$implicit = t),
            (this.ngForOf = e),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let hc = (() => {
        class t {
          constructor(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            this._trackByFn = t;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs
                    .find(n)
                    .create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${
                      ((t = n), t.name || typeof t)
                    }'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var t;
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const e = [];
            t.forEachOperation((t, n, r) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new cc(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  s = new dc(t, n);
                e.push(s);
              } else if (null == r)
                this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new dc(t, s);
                e.push(i);
              }
            });
            for (let n = 0; n < e.length; n++)
              this._perViewChange(e[n].view, e[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const t = this._viewContainer.get(n);
              (t.context.index = n),
                (t.context.count = r),
                (t.context.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((t) => {
              this._viewContainer.get(t.currentIndex).context.$implicit =
                t.item;
            });
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bo(el), bo(Ka), bo(Ma));
          }),
          (t.ɵdir = Qt({
            type: t,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          t
        );
      })();
      class dc {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      let pc = (() => {
        class t {
          constructor(t, e) {
            (this._viewContainer = t),
              (this._context = new fc()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t),
              this._updateView();
          }
          set ngIfThen(t) {
            mc("ngIfThen", t),
              (this._thenTemplateRef = t),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(t) {
            mc("ngIfElse", t),
              (this._elseTemplateRef = t),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bo(el), bo(Ka));
          }),
          (t.ɵdir = Qt({
            type: t,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          t
        );
      })();
      class fc {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function mc(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(
            `${t} must be a TemplateRef, but received '${tt(e)}'.`
          );
      }
      const gc =
        /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g;
      let yc = (() => {
          class t {
            transform(e) {
              if (null == e) return null;
              if ("string" != typeof e)
                throw (function (t, e) {
                  return Error(
                    `InvalidPipeArgument: '${e}' for pipe '${tt(t)}'`
                  );
                })(t, e);
              return e.replace(
                gc,
                (t) => t[0].toUpperCase() + t.substr(1).toLowerCase()
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵpipe = Kt({ name: "titlecase", type: t, pure: !0 })),
            t
          );
        })(),
        wc = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({ providers: [{ provide: oc, useClass: ac }] })),
            t
          );
        })(),
        vc = (() => {
          class t {}
          return (
            (t.ɵprov = ct({
              token: t,
              providedIn: "root",
              factory: () => new bc(or(Uu), window),
            })),
            t
          );
        })();
      class bc {
        constructor(t, e) {
          (this.document = t), (this.window = e), (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportsScrolling() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (!this.supportsScrolling()) return;
          const e = (function (t, e) {
            const n = t.getElementById(e) || t.getElementsByName(e)[0];
            if (n) return n;
            if (
              "function" == typeof t.createTreeWalker &&
              t.body &&
              (t.body.createShadowRoot || t.body.attachShadow)
            ) {
              const n = t.createTreeWalker(t.body, NodeFilter.SHOW_ELEMENT);
              let r = n.currentNode;
              for (; r; ) {
                const t = r.shadowRoot;
                if (t) {
                  const n =
                    t.getElementById(e) || t.querySelector(`[name="${e}"]`);
                  if (n) return n;
                }
                r = n.nextNode();
              }
            }
            return null;
          })(this.document, t);
          e && (this.scrollToElement(e), this.attemptFocus(e));
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        attemptFocus(t) {
          return t.focus(), this.document.activeElement === t;
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const t =
              _c(this.window.history) ||
              _c(Object.getPrototypeOf(this.window.history));
            return !(!t || (!t.writable && !t.set));
          } catch (t) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch (t) {
            return !1;
          }
        }
      }
      function _c(t) {
        return Object.getOwnPropertyDescriptor(t, "scrollRestoration");
      }
      class Cc {}
      class Ec extends class extends class {} {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      } {
        static makeCurrent() {
          var t;
          (t = new Ec()), Bu || (Bu = t);
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          t.parentNode && t.parentNode.removeChild(t);
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return "window" === e
            ? window
            : "document" === e
            ? t
            : "body" === e
            ? t.body
            : null;
        }
        getBaseHref(t) {
          const e =
            ((xc = xc || document.querySelector("base")),
            xc ? xc.getAttribute("href") : null);
          return null == e
            ? null
            : (function (t) {
                (Sc = Sc || document.createElement("a")),
                  Sc.setAttribute("href", t);
                const e = Sc.pathname;
                return "/" === e.charAt(0) ? e : `/${e}`;
              })(e);
        }
        resetBaseElement() {
          xc = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(t) {
          return lc(document.cookie, t);
        }
      }
      let Sc,
        xc = null;
      const Ac = new zn("TRANSITION_ID"),
        Dc = [
          {
            provide: zl,
            useFactory: function (t, e, n) {
              return () => {
                n.get(Hl).donePromise.then(() => {
                  const n = Lu();
                  Array.prototype.slice
                    .apply(e.querySelectorAll("style[ng-transition]"))
                    .filter((e) => e.getAttribute("ng-transition") === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [Ac, Uu, to],
            multi: !0,
          },
        ];
      class kc {
        static init() {
          var t;
          (t = new kc()), (bu = t);
        }
        addToWindow(t) {
          (Ot.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r)
              throw new Error("Could not find testability for element.");
            return r;
          }),
            (Ot.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (Ot.getAllAngularRootElements = () => t.getAllRootElements()),
            Ot.frameworkStabilizers || (Ot.frameworkStabilizers = []),
            Ot.frameworkStabilizers.push((t) => {
              const e = Ot.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const s = function (e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function (t) {
                t.whenStable(s);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const r = t.getTestability(e);
          return null != r
            ? r
            : n
            ? Lu().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      let Tc = (() => {
        class t {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Oc = new zn("EventManagerPlugins");
      let Fc = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach((t) => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const e = n[r];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error(`No event manager plugin found for event ${t}`);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Oc), or(uu));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class Pc {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const r = Lu().getGlobalEventTarget(this._doc, t);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${e}`);
          return this.addEventListener(r, e, n);
        }
      }
      let Ic = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach((t) => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Rc = (() => {
          class t extends Ic {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Map()),
                this._hostNodes.set(t.head, []);
            }
            _addStylesToHost(t, e, n) {
              t.forEach((t) => {
                const r = this._doc.createElement("style");
                (r.textContent = t), n.push(e.appendChild(r));
              });
            }
            addHost(t) {
              const e = [];
              this._addStylesToHost(this._stylesSet, t, e),
                this._hostNodes.set(t, e);
            }
            removeHost(t) {
              const e = this._hostNodes.get(t);
              e && e.forEach(Nc), this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((e, n) => {
                this._addStylesToHost(t, n, e);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((t) => t.forEach(Nc));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Uu));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      function Nc(t) {
        Lu().remove(t);
      }
      const Mc = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        jc = /%COMP%/g;
      function Vc(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          Array.isArray(s) ? Vc(t, s, n) : ((s = s.replace(jc, t)), n.push(s));
        }
        return n;
      }
      function Bc(t) {
        return (e) => {
          if ("__ngUnwrap__" === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let Lc = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Uc(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case xt.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new zc(
                      this.eventManager,
                      this.sharedStylesHost,
                      e,
                      this.appId
                    )),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case 1:
              case xt.ShadowDom:
                return new Hc(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = Vc(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t),
                    this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Fc), or(Rc), or($l));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class Uc {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(Mc[e] || e, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = "string" == typeof t ? document.querySelector(t) : t;
          if (!n)
            throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ""), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ":" + e;
            const s = Mc[r];
            s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = Mc[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & (ss.DashCase | ss.Important)
            ? t.style.setProperty(e, n, r & ss.Important ? "important" : "")
            : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & ss.DashCase ? t.style.removeProperty(e) : (t.style[e] = "");
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return "string" == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, Bc(n))
            : this.eventManager.addEventListener(t, e, Bc(n));
        }
      }
      class zc extends Uc {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const s = Vc(r + "-" + n.id, n.styles, []);
          e.addStyles(s),
            (this.contentAttr = "_ngcontent-%COMP%".replace(
              jc,
              r + "-" + n.id
            )),
            (this.hostAttr = "_nghost-%COMP%".replace(jc, r + "-" + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, "");
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ""), n;
        }
      }
      class Hc extends Uc {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.shadowRoot = n.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = Vc(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const t = document.createElement("style");
            (t.textContent = s[i]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          );
        }
      }
      let $c = (() => {
        class t extends Pc {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return (
              t.addEventListener(e, n, !1),
              () => this.removeEventListener(t, e, n)
            );
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Uu));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const qc = ["alt", "control", "meta", "shift"],
        Wc = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        Qc = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        Kc = {
          alt: (t) => t.altKey,
          control: (t) => t.ctrlKey,
          meta: (t) => t.metaKey,
          shift: (t) => t.shiftKey,
        };
      let Gc = (() => {
          class t extends Pc {
            constructor(t) {
              super(t);
            }
            supports(e) {
              return null != t.parseEventName(e);
            }
            addEventListener(e, n, r) {
              const s = t.parseEventName(n),
                i = t.eventCallback(s.fullKey, r, this.manager.getZone());
              return this.manager
                .getZone()
                .runOutsideAngular(() =>
                  Lu().onAndCancel(e, s.domEventName, i)
                );
            }
            static parseEventName(e) {
              const n = e.toLowerCase().split("."),
                r = n.shift();
              if (0 === n.length || ("keydown" !== r && "keyup" !== r))
                return null;
              const s = t._normalizeKey(n.pop());
              let i = "";
              if (
                (qc.forEach((t) => {
                  const e = n.indexOf(t);
                  e > -1 && (n.splice(e, 1), (i += t + "."));
                }),
                (i += s),
                0 != n.length || 0 === s.length)
              )
                return null;
              const o = {};
              return (o.domEventName = r), (o.fullKey = i), o;
            }
            static getEventFullKey(t) {
              let e = "",
                n = (function (t) {
                  let e = t.key;
                  if (null == e) {
                    if (((e = t.keyIdentifier), null == e))
                      return "Unidentified";
                    e.startsWith("U+") &&
                      ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                      3 === t.location && Qc.hasOwnProperty(e) && (e = Qc[e]));
                  }
                  return Wc[e] || e;
                })(t);
              return (
                (n = n.toLowerCase()),
                " " === n ? (n = "space") : "." === n && (n = "dot"),
                qc.forEach((r) => {
                  r != n && (0, Kc[r])(t) && (e += r + ".");
                }),
                (e += n),
                e
              );
            }
            static eventCallback(e, n, r) {
              return (s) => {
                t.getEventFullKey(s) === e && r.runGuarded(() => n(s));
              };
            }
            static _normalizeKey(t) {
              switch (t) {
                case "esc":
                  return "escape";
                default:
                  return t;
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Uu));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Zc = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = ct({
              factory: function () {
                return or(Xc);
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })();
      function Yc(t) {
        return new Xc(t.get(Uu));
      }
      let Xc = (() => {
        class t extends Zc {
          constructor(t) {
            super(), (this._doc = t);
          }
          sanitize(t, e) {
            if (null == e) return null;
            switch (t) {
              case Kr.NONE:
                return e;
              case Kr.HTML:
                return Er(e, "HTML")
                  ? Cr(e)
                  : Wr(this._doc, String(e)).toString();
              case Kr.STYLE:
                return Er(e, "Style") ? Cr(e) : e;
              case Kr.SCRIPT:
                if (Er(e, "Script")) return Cr(e);
                throw new Error("unsafe value used in a script context");
              case Kr.URL:
                return Sr(e), Er(e, "URL") ? Cr(e) : Tr(String(e));
              case Kr.RESOURCE_URL:
                if (Er(e, "ResourceURL")) return Cr(e);
                throw new Error(
                  "unsafe value used in a resource URL context (see https://g.co/ng/security#xss)"
                );
              default:
                throw new Error(
                  `Unexpected SecurityContext ${t} (see https://g.co/ng/security#xss)`
                );
            }
          }
          bypassSecurityTrustHtml(t) {
            return new yr(t);
          }
          bypassSecurityTrustStyle(t) {
            return new wr(t);
          }
          bypassSecurityTrustScript(t) {
            return new vr(t);
          }
          bypassSecurityTrustUrl(t) {
            return new br(t);
          }
          bypassSecurityTrustResourceUrl(t) {
            return new _r(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Uu));
          }),
          (t.ɵprov = ct({
            factory: function () {
              return Yc(or(Bi));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      const Jc = xu(Mu, "browser", [
          { provide: Kl, useValue: "browser" },
          {
            provide: Ql,
            useValue: function () {
              Ec.makeCurrent(), kc.init();
            },
            multi: !0,
          },
          {
            provide: Uu,
            useFactory: function () {
              return (
                (function (t) {
                  de = t;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        th = [
          [],
          { provide: Ui, useValue: "root" },
          {
            provide: es,
            useFactory: function () {
              return new es();
            },
            deps: [],
          },
          { provide: Oc, useClass: $c, multi: !0, deps: [Uu, uu, Kl] },
          { provide: Oc, useClass: Gc, multi: !0, deps: [Uu] },
          [],
          { provide: Lc, useClass: Lc, deps: [Fc, Rc, $l] },
          { provide: va, useExisting: Lc },
          { provide: Ic, useExisting: Rc },
          { provide: Rc, useClass: Rc, deps: [Uu] },
          { provide: gu, useClass: gu, deps: [uu] },
          { provide: Fc, useClass: Fc, deps: [Oc, uu] },
          { provide: Cc, useClass: Tc, deps: [] },
          [],
        ];
      let eh = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [
                { provide: $l, useValue: e.appId },
                { provide: Ac, useExisting: $l },
                Dc,
              ],
            };
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(t, 12));
          }),
          (t.ɵmod = qt({ type: t })),
          (t.ɵinj = ht({ providers: th, imports: [wc, Vu] })),
          t
        );
      })();
      function nh(...t) {
        let e = t[t.length - 1];
        return x(e) ? (t.pop(), N(t, e)) : $(t);
      }
      "undefined" != typeof window && window;
      class rh extends E {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new b();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      class sh extends f {
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
      class ih extends f {
        constructor(t, e, n) {
          super(),
            (this.parent = t),
            (this.outerValue = e),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      function oh(t, e, n, r, s = new ih(t, n, r)) {
        if (!s.closed) return e instanceof w ? e.subscribe(s) : R(e)(s);
      }
      const ah = {};
      class lh {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new uh(t, this.resultSelector));
        }
      }
      class uh extends sh {
        constructor(t, e) {
          super(t),
            (this.resultSelector = e),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(t) {
          this.values.push(ah), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) this.add(oh(this, t[n], void 0, n));
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n) {
          const r = this.values,
            s = this.toRespond
              ? r[n] === ah
                ? --this.toRespond
                : this.toRespond
              : 0;
          (r[n] = e),
            0 === s &&
              (this.resultSelector
                ? this._tryResultSelector(r)
                : this.destination.next(r.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const ch = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "no elements in sequence"),
            (this.name = "EmptyError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function hh(...t) {
        return H(1)(nh(...t));
      }
      const dh = new w((t) => t.complete());
      function ph(t) {
        return t
          ? (function (t) {
              return new w((e) => t.schedule(() => e.complete()));
            })(t)
          : dh;
      }
      function fh(t) {
        return new w((e) => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? M(n) : ph()).subscribe(e);
        });
      }
      function mh(t, e) {
        return "function" == typeof e
          ? (n) =>
              n.pipe(mh((n, r) => M(t(n, r)).pipe(A((t, s) => e(n, t, r, s)))))
          : (e) => e.lift(new gh(t));
      }
      class gh {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new yh(t, this.project));
        }
      }
      class yh extends V {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e);
        }
        _innerSub(t) {
          const e = this.innerSubscription;
          e && e.unsubscribe();
          const n = new j(this),
            r = this.destination;
          r.add(n),
            (this.innerSubscription = B(t, n)),
            this.innerSubscription !== n && r.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
      }
      const wh = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function vh(t) {
        return (e) => (0 === t ? ph() : e.lift(new bh(t)));
      }
      class bh {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new wh();
        }
        call(t, e) {
          return e.subscribe(new _h(t, this.total));
        }
      }
      class _h extends f {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e &&
            (this.destination.next(t),
            n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Ch(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Eh(t, e, n));
          }
        );
      }
      class Eh {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(
            new Sh(t, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class Sh extends f {
        constructor(t, e, n, r) {
          super(t),
            (this.accumulator = e),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function xh(t, e) {
        return function (n) {
          return n.lift(new Ah(t, e));
        };
      }
      class Ah {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new Dh(t, this.predicate, this.thisArg));
        }
      }
      class Dh extends f {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
      function kh(t) {
        return function (e) {
          const n = new Th(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class Th {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new Oh(t, this.selector, this.caught));
        }
      }
      class Oh extends V {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new j(this);
            this.add(r);
            const s = B(n, r);
            s !== r && this.add(s);
          }
        }
      }
      function Fh(t, e) {
        return L(t, e, 1);
      }
      function Ph(t) {
        return function (e) {
          return 0 === t ? ph() : e.lift(new Ih(t));
        };
      }
      class Ih {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new wh();
        }
        call(t, e) {
          return e.subscribe(new Rh(t, this.total));
        }
      }
      class Rh extends f {
        constructor(t, e) {
          super(t),
            (this.total = e),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = e++ % n;
              t.next(r[s]);
            }
          }
          t.complete();
        }
      }
      function Nh(t = Vh) {
        return (e) => e.lift(new Mh(t));
      }
      class Mh {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new jh(t, this.errorFactory));
        }
      }
      class jh extends f {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function Vh() {
        return new ch();
      }
      function Bh(t = null) {
        return (e) => e.lift(new Lh(t));
      }
      class Lh {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new Uh(t, this.defaultValue));
        }
      }
      class Uh extends f {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function zh(t, e) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            t ? xh((e, n) => t(e, n, r)) : y,
            vh(1),
            n ? Bh(e) : Nh(() => new ch())
          );
      }
      function Hh() {}
      function $h(t, e, n) {
        return function (r) {
          return r.lift(new qh(t, e, n));
        };
      }
      class qh {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(
            new Wh(t, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class Wh extends f {
        constructor(t, e, n, s) {
          super(t),
            (this._tapNext = Hh),
            (this._tapError = Hh),
            (this._tapComplete = Hh),
            (this._tapError = n || Hh),
            (this._tapComplete = s || Hh),
            r(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || Hh),
                (this._tapError = e.error || Hh),
                (this._tapComplete = e.complete || Hh));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      class Qh {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new Kh(t, this.callback));
        }
      }
      class Kh extends f {
        constructor(t, e) {
          super(t), this.add(new h(e));
        }
      }
      class Gh {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class Zh extends Gh {
        constructor(t, e, n = "imperative", r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Yh extends Gh {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Xh extends Gh {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Jh extends Gh {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class td extends Gh {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ed extends Gh {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class nd extends Gh {
        constructor(t, e, n, r, s) {
          super(t, e),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class rd extends Gh {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class sd extends Gh {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class id {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class od {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class ad {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class ld {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class ud {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class cd {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class hd {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      const dd = "primary";
      class pd {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return Object.prototype.hasOwnProperty.call(this.params, t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function fd(t) {
        return new pd(t);
      }
      function md(t) {
        const e = Error("NavigationCancelingError: " + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function gd(t, e, n) {
        const r = n.path.split("/");
        if (r.length > t.length) return null;
        if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length))
          return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const e = r[i],
            n = t[i];
          if (e.startsWith(":")) s[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: s };
      }
      function yd(t, e) {
        const n = t ? Object.keys(t) : void 0,
          r = e ? Object.keys(e) : void 0;
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++)
          if (((s = n[i]), !wd(t[s], e[s]))) return !1;
        return !0;
      }
      function wd(t, e) {
        if (Array.isArray(t) && Array.isArray(e)) {
          if (t.length !== e.length) return !1;
          const n = [...t].sort(),
            r = [...e].sort();
          return n.every((t, e) => r[e] === t);
        }
        return t === e;
      }
      function vd(t) {
        return Array.prototype.concat.apply([], t);
      }
      function bd(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function _d(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function Cd(t) {
        return ko(t) ? t : Do(t) ? M(Promise.resolve(t)) : nh(t);
      }
      const Ed = {
          exact: function t(e, n, r) {
            if (!Pd(e.segments, n.segments)) return !1;
            if (!kd(e.segments, n.segments, r)) return !1;
            if (e.numberOfChildren !== n.numberOfChildren) return !1;
            for (const s in n.children) {
              if (!e.children[s]) return !1;
              if (!t(e.children[s], n.children[s], r)) return !1;
            }
            return !0;
          },
          subset: Ad,
        },
        Sd = {
          exact: function (t, e) {
            return yd(t, e);
          },
          subset: function (t, e) {
            return (
              Object.keys(e).length <= Object.keys(t).length &&
              Object.keys(e).every((n) => wd(t[n], e[n]))
            );
          },
          ignored: () => !0,
        };
      function xd(t, e, n) {
        return (
          Ed[n.paths](t.root, e.root, n.matrixParams) &&
          Sd[n.queryParams](t.queryParams, e.queryParams) &&
          !("exact" === n.fragment && t.fragment !== e.fragment)
        );
      }
      function Ad(t, e, n) {
        return Dd(t, e, e.segments, n);
      }
      function Dd(t, e, n, r) {
        if (t.segments.length > n.length) {
          const s = t.segments.slice(0, n.length);
          return !!Pd(s, n) && !e.hasChildren() && !!kd(s, n, r);
        }
        if (t.segments.length === n.length) {
          if (!Pd(t.segments, n)) return !1;
          if (!kd(t.segments, n, r)) return !1;
          for (const n in e.children) {
            if (!t.children[n]) return !1;
            if (!Ad(t.children[n], e.children[n], r)) return !1;
          }
          return !0;
        }
        {
          const s = n.slice(0, t.segments.length),
            i = n.slice(t.segments.length);
          return (
            !!Pd(t.segments, s) &&
            !!kd(t.segments, s, r) &&
            !!t.children.primary &&
            Dd(t.children.primary, e, i, r)
          );
        }
      }
      function kd(t, e, n) {
        return e.every((e, r) => Sd[n](t[r].parameters, e.parameters));
      }
      class Td {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = fd(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Nd.serialize(this);
        }
      }
      class Od {
        constructor(t, e) {
          (this.segments = t),
            (this.children = e),
            (this.parent = null),
            _d(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Md(this);
        }
      }
      class Fd {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = fd(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Hd(this);
        }
      }
      function Pd(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      class Id {}
      class Rd {
        parse(t) {
          const e = new Kd(t);
          return new Td(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment()
          );
        }
        serialize(t) {
          var e;
          return `/${jd(t.root, !0)}${(function (t) {
            const e = Object.keys(t)
              .map((e) => {
                const n = t[e];
                return Array.isArray(n)
                  ? n.map((t) => `${Bd(e)}=${Bd(t)}`).join("&")
                  : `${Bd(e)}=${Bd(n)}`;
              })
              .filter((t) => !!t);
            return e.length ? `?${e.join("&")}` : "";
          })(t.queryParams)}${
            "string" == typeof t.fragment
              ? `#${((e = t.fragment), encodeURI(e))}`
              : ""
          }`;
        }
      }
      const Nd = new Rd();
      function Md(t) {
        return t.segments.map((t) => Hd(t)).join("/");
      }
      function jd(t, e) {
        if (!t.hasChildren()) return Md(t);
        if (e) {
          const e = t.children.primary ? jd(t.children.primary, !1) : "",
            n = [];
          return (
            _d(t.children, (t, e) => {
              e !== dd && n.push(`${e}:${jd(t, !1)}`);
            }),
            n.length > 0 ? `${e}(${n.join("//")})` : e
          );
        }
        {
          const e = (function (t, e) {
            let n = [];
            return (
              _d(t.children, (t, r) => {
                r === dd && (n = n.concat(e(t, r)));
              }),
              _d(t.children, (t, r) => {
                r !== dd && (n = n.concat(e(t, r)));
              }),
              n
            );
          })(t, (e, n) =>
            n === dd ? [jd(t.children.primary, !1)] : [`${n}:${jd(e, !1)}`]
          );
          return 1 === Object.keys(t.children).length &&
            null != t.children.primary
            ? `${Md(t)}/${e[0]}`
            : `${Md(t)}/(${e.join("//")})`;
        }
      }
      function Vd(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Bd(t) {
        return Vd(t).replace(/%3B/gi, ";");
      }
      function Ld(t) {
        return Vd(t)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Ud(t) {
        return decodeURIComponent(t);
      }
      function zd(t) {
        return Ud(t.replace(/\+/g, "%20"));
      }
      function Hd(t) {
        return `${Ld(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${Ld(t)}=${Ld(e[t])}`)
            .join(""))
        }`;
        var e;
      }
      const $d = /^[^\/()?;=#]+/;
      function qd(t) {
        const e = t.match($d);
        return e ? e[0] : "";
      }
      const Wd = /^[^=?&#]+/,
        Qd = /^[^?&#]+/;
      class Kd {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new Od([], {})
              : new Od([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional("&"));
          return t;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const t = [];
          for (
            this.peekStartsWith("(") || t.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith("(") && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) &&
              (n.primary = new Od(t, e)),
            n
          );
        }
        parseSegment() {
          const t = qd(this.remaining);
          if ("" === t && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(t), new Fd(Ud(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(";"); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = qd(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = qd(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[Ud(e)] = Ud(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(Wd);
            return e ? e[0] : "";
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = (function (t) {
              const e = t.match(Qd);
              return e ? e[0] : "";
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = zd(e),
            s = zd(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(s);
          } else t[r] = s;
        }
        parseParens(t) {
          const e = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const n = qd(this.remaining),
              r = this.remaining[n.length];
            if ("/" !== r && ")" !== r && ";" !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s;
            n.indexOf(":") > -1
              ? ((s = n.substr(0, n.indexOf(":"))),
                this.capture(s),
                this.capture(":"))
              : t && (s = dd);
            const i = this.parseChildren();
            (e[s] = 1 === Object.keys(i).length ? i.primary : new Od([], i)),
              this.consumeOptional("//");
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class Gd {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = Zd(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = Zd(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = Yd(t, this._root);
          return e.length < 2
            ? []
            : e[e.length - 2].children
                .map((t) => t.value)
                .filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return Yd(t, this._root).map((t) => t.value);
        }
      }
      function Zd(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = Zd(t, n);
          if (e) return e;
        }
        return null;
      }
      function Yd(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = Yd(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class Xd {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Jd(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class tp extends Gd {
        constructor(t, e) {
          super(t), (this.snapshot = e), op(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function ep(t, e) {
        const n = (function (t, e) {
            const n = new sp([], {}, {}, "", {}, dd, e, null, t.root, -1, {});
            return new ip("", new Xd(n, []));
          })(t, e),
          r = new rh([new Fd("", {})]),
          s = new rh({}),
          i = new rh({}),
          o = new rh({}),
          a = new rh(""),
          l = new np(r, s, o, a, i, dd, e, n.root);
        return (l.snapshot = n.root), new tp(new Xd(l, []), n);
      }
      class np {
        constructor(t, e, n, r, s, i, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(A((t) => fd(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(A((t) => fd(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function rp(t, e = "emptyOnly") {
        const n = t.pathFromRoot;
        let r = 0;
        if ("always" !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && "" === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(
                Object.assign({}, t.resolve),
                e._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class sp {
        constructor(t, e, n, r, s, i, o, a, l, u, c) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = u),
            (this._resolve = c);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = fd(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = fd(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((t) => t.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class ip extends Gd {
        constructor(t, e) {
          super(e), (this.url = t), op(this, e);
        }
        toString() {
          return ap(this._root);
        }
      }
      function op(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => op(t, e));
      }
      function ap(t) {
        const e =
          t.children.length > 0 ? ` { ${t.children.map(ap).join(", ")} } ` : "";
        return `${t.value}${e}`;
      }
      function lp(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            yd(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            yd(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!yd(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            yd(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function up(t, e) {
        var n, r;
        return (
          yd(t.params, e.params) &&
          Pd((n = t.url), (r = e.url)) &&
          n.every((t, e) => yd(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || up(t.parent, e.parent))
        );
      }
      function cp(t, e, n) {
        if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = e.value;
          const s = (function (t, e, n) {
            return e.children.map((e) => {
              for (const r of n.children)
                if (t.shouldReuseRoute(e.value, r.value.snapshot))
                  return cp(t, e, r);
              return cp(t, e);
            });
          })(t, e, n);
          return new Xd(r, s);
        }
        {
          if (t.shouldAttach(e.value)) {
            const n = t.retrieve(e.value);
            if (null !== n) {
              const t = n.route;
              return hp(e, t), t;
            }
          }
          const n = new np(
              new rh((r = e.value).url),
              new rh(r.params),
              new rh(r.queryParams),
              new rh(r.fragment),
              new rh(r.data),
              r.outlet,
              r.component,
              r
            ),
            s = e.children.map((e) => cp(t, e));
          return new Xd(n, s);
        }
        var r;
      }
      function hp(t, e) {
        if (t.value.routeConfig !== e.value.routeConfig)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot created from a different route"
          );
        if (t.children.length !== e.children.length)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot with a different number of children"
          );
        e.value._futureSnapshot = t.value;
        for (let n = 0; n < t.children.length; ++n)
          hp(t.children[n], e.children[n]);
      }
      function dp(t) {
        return (
          "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function pp(t) {
        return "object" == typeof t && null != t && t.outlets;
      }
      function fp(t, e, n, r, s) {
        let i = {};
        return (
          r &&
            _d(r, (t, e) => {
              i[e] = Array.isArray(t) ? t.map((t) => `${t}`) : `${t}`;
            }),
          new Td(n.root === t ? e : mp(n.root, t, e), i, s)
        );
      }
      function mp(t, e, n) {
        const r = {};
        return (
          _d(t.children, (t, s) => {
            r[s] = t === e ? n : mp(t, e, n);
          }),
          new Od(t.segments, r)
        );
      }
      class gp {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = n),
            t && n.length > 0 && dp(n[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const r = n.find(pp);
          if (r && r !== bd(n))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class yp {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function wp(t, e, n) {
        if (
          (t || (t = new Od([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return vp(t, e, n);
        const r = (function (t, e, n) {
            let r = 0,
              s = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < t.segments.length; ) {
              if (r >= n.length) return i;
              const e = t.segments[s],
                o = n[r];
              if (pp(o)) break;
              const a = `${o}`,
                l = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === a) break;
              if (a && l && "object" == typeof l && void 0 === l.outlets) {
                if (!Ep(a, l, e)) return i;
                r += 2;
              } else {
                if (!Ep(a, {}, e)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(t, e, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new Od(t.segments.slice(0, r.pathIndex), {});
          return (
            (e.children.primary = new Od(
              t.segments.slice(r.pathIndex),
              t.children
            )),
            vp(e, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new Od(t.segments, {})
          : r.match && !t.hasChildren()
          ? bp(t, e, n)
          : r.match
          ? vp(t, 0, s)
          : bp(t, e, n);
      }
      function vp(t, e, n) {
        if (0 === n.length) return new Od(t.segments, {});
        {
          const r = (function (t) {
              return pp(t[0]) ? t[0].outlets : { [dd]: t };
            })(n),
            s = {};
          return (
            _d(r, (n, r) => {
              "string" == typeof n && (n = [n]),
                null !== n && (s[r] = wp(t.children[r], e, n));
            }),
            _d(t.children, (t, e) => {
              void 0 === r[e] && (s[e] = t);
            }),
            new Od(t.segments, s)
          );
        }
      }
      function bp(t, e, n) {
        const r = t.segments.slice(0, e);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if (pp(i)) {
            const t = _p(i.outlets);
            return new Od(r, t);
          }
          if (0 === s && dp(n[0])) {
            r.push(new Fd(t.segments[e].path, Cp(n[0]))), s++;
            continue;
          }
          const o = pp(i) ? i.outlets.primary : `${i}`,
            a = s < n.length - 1 ? n[s + 1] : null;
          o && a && dp(a)
            ? (r.push(new Fd(o, Cp(a))), (s += 2))
            : (r.push(new Fd(o, {})), s++);
        }
        return new Od(r, {});
      }
      function _p(t) {
        const e = {};
        return (
          _d(t, (t, n) => {
            "string" == typeof t && (t = [t]),
              null !== t && (e[n] = bp(new Od([], {}), 0, t));
          }),
          e
        );
      }
      function Cp(t) {
        const e = {};
        return _d(t, (t, n) => (e[n] = `${t}`)), e;
      }
      function Ep(t, e, n) {
        return t == n.path && yd(e, n.parameters);
      }
      class Sp {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t),
            lp(this.futureState.root),
            this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = Jd(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            _d(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(t, e, s.children);
            } else this.deactivateChildRoutes(t, e, n);
          else s && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: e,
              route: t,
              contexts: r,
            });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet),
            r = n && t.value.component ? n.children : e,
            s = Jd(t);
          for (const i of Object.keys(s))
            this.deactivateRouteAndItsChildren(s[i], r);
          n &&
            n.outlet &&
            (n.outlet.deactivate(),
            n.children.onOutletDeactivated(),
            (n.attachRef = null),
            (n.resolver = null),
            (n.route = null));
        }
        activateChildRoutes(t, e, n) {
          const r = Jd(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, r[t.value.outlet], n),
              this.forwardEvent(new cd(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new ld(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if ((lp(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, s.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                xp(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = s),
                e.outlet && e.outlet.activateWith(r, s),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function xp(t) {
        lp(t.value), t.children.forEach(xp);
      }
      class Ap {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function Dp(t) {
        return "function" == typeof t;
      }
      function kp(t) {
        return t instanceof Td;
      }
      const Tp = Symbol("INITIAL_VALUE");
      function Op() {
        return mh((t) =>
          (function (...t) {
            let e, n;
            return (
              x(t[t.length - 1]) && (n = t.pop()),
              "function" == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && l(t[0]) && (t = t[0]),
              $(t, n).lift(new lh(e))
            );
          })(
            t.map((t) =>
              t.pipe(
                vh(1),
                (function (...t) {
                  const e = t[t.length - 1];
                  return x(e) ? (t.pop(), (n) => hh(t, n, e)) : (e) => hh(t, e);
                })(Tp)
              )
            )
          ).pipe(
            Ch((t, e) => {
              let n = !1;
              return e.reduce((t, r, s) => {
                if (t !== Tp) return t;
                if ((r === Tp && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === e.length - 1 || kp(r)) return r;
                }
                return t;
              }, t);
            }, Tp),
            xh((t) => t !== Tp),
            A((t) => (kp(t) ? t : !0 === t)),
            vh(1)
          )
        );
      }
      let Fp = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = Ut({
            type: t,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && xo(0, "router-outlet");
            },
            directives: function () {
              return [Af];
            },
            encapsulation: 2,
          })),
          t
        );
      })();
      function Pp(t, e = "") {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          Ip(r, Rp(e, r));
        }
      }
      function Ip(t, e) {
        t.children && Pp(t.children, e);
      }
      function Rp(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? `${t}/`
              : !t && e.path
              ? e.path
              : `${t}/${e.path}`
            : ""
          : t;
      }
      function Np(t) {
        const e = t.children && t.children.map(Np),
          n = e
            ? Object.assign(Object.assign({}, t), { children: e })
            : Object.assign({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            n.outlet !== dd &&
            (n.component = Fp),
          n
        );
      }
      function Mp(t) {
        return t.outlet || dd;
      }
      function jp(t, e) {
        const n = t.filter((t) => Mp(t) === e);
        return n.push(...t.filter((t) => Mp(t) !== e)), n;
      }
      const Vp = {
        matched: !1,
        consumedSegments: [],
        lastChild: 0,
        parameters: {},
        positionalParamSegments: {},
      };
      function Bp(t, e, n) {
        var r;
        if ("" === e.path)
          return "full" === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? Object.assign({}, Vp)
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {},
              };
        const s = (e.matcher || gd)(n, t, e);
        if (!s) return Object.assign({}, Vp);
        const i = {};
        _d(s.posParams, (t, e) => {
          i[e] = t.path;
        });
        const o =
          s.consumed.length > 0
            ? Object.assign(
                Object.assign({}, i),
                s.consumed[s.consumed.length - 1].parameters
              )
            : i;
        return {
          matched: !0,
          consumedSegments: s.consumed,
          lastChild: s.consumed.length,
          parameters: o,
          positionalParamSegments:
            null !== (r = s.posParams) && void 0 !== r ? r : {},
        };
      }
      function Lp(t, e, n, r, s = "corrected") {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => Up(t, e, n) && Mp(n) !== dd);
          })(t, n, r)
        ) {
          const s = new Od(
            e,
            (function (t, e, n, r) {
              const s = {};
              (s.primary = r),
                (r._sourceSegment = t),
                (r._segmentIndexShift = e.length);
              for (const i of n)
                if ("" === i.path && Mp(i) !== dd) {
                  const n = new Od([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = e.length),
                    (s[Mp(i)] = n);
                }
              return s;
            })(t, e, r, new Od(n, t.children))
          );
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = e.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => Up(t, e, n));
          })(t, n, r)
        ) {
          const i = new Od(
            t.segments,
            (function (t, e, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (Up(t, n, a) && !s[Mp(a)]) {
                  const n = new Od([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift =
                      "legacy" === i ? t.segments.length : e.length),
                    (o[Mp(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(t, e, n, r, t.children, s)
          );
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new Od(t.segments, t.children);
        return (
          (i._sourceSegment = t),
          (i._segmentIndexShift = e.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function Up(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path
        );
      }
      function zp(t, e, n, r) {
        return (
          !!(Mp(t) === r || (r !== dd && Up(e, n, t))) &&
          ("**" === t.path || Bp(e, t, n).matched)
        );
      }
      function Hp(t, e, n) {
        return 0 === e.length && !t.children[n];
      }
      class $p {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class qp {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function Wp(t) {
        return new w((e) => e.error(new $p(t)));
      }
      function Qp(t) {
        return new w((e) => e.error(new qp(t)));
      }
      function Kp(t) {
        return new w((e) =>
          e.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${t}'`
            )
          )
        );
      }
      class Gp {
        constructor(t, e, n, r, s) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = s),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(Xa));
        }
        apply() {
          const t = Lp(this.urlTree.root, [], [], this.config).segmentGroup,
            e = new Od(t.segments, t.children);
          return this.expandSegmentGroup(this.ngModule, this.config, e, dd)
            .pipe(
              A((t) =>
                this.createUrlTree(
                  Zp(t),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              kh((t) => {
                if (t instanceof qp)
                  return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof $p) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, dd)
            .pipe(
              A((e) => this.createUrlTree(Zp(e), t.queryParams, t.fragment))
            )
            .pipe(
              kh((t) => {
                if (t instanceof $p) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`
          );
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new Od([], { [dd]: t }) : t;
          return new Td(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(A((t) => new Od([], t)))
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          const r = [];
          for (const s of Object.keys(n.children))
            "primary" === s ? r.unshift(s) : r.push(s);
          return M(r).pipe(
            Fh((r) => {
              const s = n.children[r],
                i = jp(e, r);
              return this.expandSegmentGroup(t, i, s, r).pipe(
                A((t) => ({ segment: t, outlet: r }))
              );
            }),
            Ch((t, e) => ((t[e.outlet] = e.segment), t), {}),
            (function (t, e) {
              const n = arguments.length >= 2;
              return (r) =>
                r.pipe(
                  t ? xh((e, n) => t(e, n, r)) : y,
                  Ph(1),
                  n ? Bh(e) : Nh(() => new ch())
                );
            })()
          );
        }
        expandSegment(t, e, n, r, s, i) {
          return M(n).pipe(
            Fh((o) =>
              this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(
                kh((t) => {
                  if (t instanceof $p) return nh(null);
                  throw t;
                })
              )
            ),
            zh((t) => !!t),
            kh((t, n) => {
              if (t instanceof ch || "EmptyError" === t.name) {
                if (Hp(e, r, s)) return nh(new Od([], {}));
                throw new $p(e);
              }
              throw t;
            })
          );
        }
        expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
          return zp(r, e, s, i)
            ? void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(t, e, r, s, i)
              : o && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
              : Wp(e)
            : Wp(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          return "**" === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                r,
                s,
                i
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/")
            ? Qp(s)
            : this.lineralizeSegments(n, s).pipe(
                L((n) => {
                  const s = new Od(n, {});
                  return this.expandSegment(t, s, e, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: l,
            positionalParamSegments: u,
          } = Bp(e, r, s);
          if (!o) return Wp(e);
          const c = this.applyRedirectCommands(a, r.redirectTo, u);
          return r.redirectTo.startsWith("/")
            ? Qp(c)
            : this.lineralizeSegments(r, c).pipe(
                L((r) =>
                  this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1)
                )
              );
        }
        matchSegmentAgainstRoute(t, e, n, r, s) {
          if ("**" === n.path)
            return n.loadChildren
              ? (n._loadedConfig
                  ? nh(n._loadedConfig)
                  : this.configLoader.load(t.injector, n)
                ).pipe(A((t) => ((n._loadedConfig = t), new Od(r, {}))))
              : nh(new Od(r, {}));
          const { matched: i, consumedSegments: o, lastChild: a } = Bp(e, n, r);
          if (!i) return Wp(e);
          const l = r.slice(a);
          return this.getChildConfig(t, n, r).pipe(
            L((t) => {
              const r = t.module,
                i = t.routes,
                { segmentGroup: a, slicedSegments: u } = Lp(e, o, l, i),
                c = new Od(a.segments, a.children);
              if (0 === u.length && c.hasChildren())
                return this.expandChildren(r, i, c).pipe(
                  A((t) => new Od(o, t))
                );
              if (0 === i.length && 0 === u.length) return nh(new Od(o, {}));
              const h = Mp(n) === s;
              return this.expandSegment(r, c, i, u, h ? dd : s, !0).pipe(
                A((t) => new Od(o.concat(t.segments), t.children))
              );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? nh(new Ap(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? nh(e._loadedConfig)
              : this.runCanLoadGuards(t.injector, e, n).pipe(
                  L((n) =>
                    n
                      ? this.configLoader
                          .load(t.injector, e)
                          .pipe(A((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new w((e) =>
                            e.error(
                              md(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : nh(new Ap([], t));
        }
        runCanLoadGuards(t, e, n) {
          const r = e.canLoad;
          return r && 0 !== r.length
            ? nh(
                r.map((r) => {
                  const s = t.get(r);
                  let i;
                  if (
                    (function (t) {
                      return t && Dp(t.canLoad);
                    })(s)
                  )
                    i = s.canLoad(e, n);
                  else {
                    if (!Dp(s)) throw new Error("Invalid CanLoad guard");
                    i = s(e, n);
                  }
                  return Cd(i);
                })
              ).pipe(
                Op(),
                $h((t) => {
                  if (!kp(t)) return;
                  const e = md(
                    `Redirecting to "${this.urlSerializer.serialize(t)}"`
                  );
                  throw ((e.url = t), e);
                }),
                A((t) => !0 === t)
              )
            : nh(!0);
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return nh(n);
            if (r.numberOfChildren > 1 || !r.children.primary)
              return Kp(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n
          );
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const s = this.createSegmentGroup(t, e.root, n, r);
          return new Td(
            s,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment
          );
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            _d(t, (t, r) => {
              if ("string" == typeof t && t.startsWith(":")) {
                const s = t.substring(1);
                n[r] = e[s];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const s = this.createSegments(t, e.segments, n, r);
          let i = {};
          return (
            _d(e.children, (e, s) => {
              i[s] = this.createSegmentGroup(t, e, n, r);
            }),
            new Od(s, i)
          );
        }
        createSegments(t, e, n, r) {
          return e.map((e) =>
            e.path.startsWith(":")
              ? this.findPosParam(t, e, r)
              : this.findOrReturn(e, n)
          );
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${e.path}'.`
            );
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function Zp(t) {
        const e = {};
        for (const n of Object.keys(t.children)) {
          const r = Zp(t.children[n]);
          (r.segments.length > 0 || r.hasChildren()) && (e[n] = r);
        }
        return (function (t) {
          if (1 === t.numberOfChildren && t.children.primary) {
            const e = t.children.primary;
            return new Od(t.segments.concat(e.segments), e.children);
          }
          return t;
        })(new Od(t.segments, e));
      }
      class Yp {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Xp {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function Jp(t, e, n) {
        const r = t._root;
        return ef(r, e ? e._root : null, n, [r.value]);
      }
      function tf(t, e, n) {
        const r = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function ef(
        t,
        e,
        n,
        r,
        s = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const i = Jd(e);
        return (
          t.children.forEach((t) => {
            !(function (
              t,
              e,
              n,
              r,
              s = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const i = t.value,
                o = e ? e.value : null,
                a = n ? n.getContext(t.value.outlet) : null;
              if (o && i.routeConfig === o.routeConfig) {
                const l = (function (t, e, n) {
                  if ("function" == typeof n) return n(t, e);
                  switch (n) {
                    case "pathParamsChange":
                      return !Pd(t.url, e.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !Pd(t.url, e.url) || !yd(t.queryParams, e.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !up(t, e) || !yd(t.queryParams, e.queryParams);
                    case "paramsChange":
                    default:
                      return !up(t, e);
                  }
                })(o, i, i.routeConfig.runGuardsAndResolvers);
                l
                  ? s.canActivateChecks.push(new Yp(r))
                  : ((i.data = o.data), (i._resolvedData = o._resolvedData)),
                  ef(t, e, i.component ? (a ? a.children : null) : n, r, s),
                  l &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    s.canDeactivateChecks.push(new Xp(a.outlet.component, o));
              } else
                o && nf(e, a, s),
                  s.canActivateChecks.push(new Yp(r)),
                  ef(t, null, i.component ? (a ? a.children : null) : n, r, s);
            })(t, i[t.value.outlet], n, r.concat([t.value]), s),
              delete i[t.value.outlet];
          }),
          _d(i, (t, e) => nf(t, n.getContext(e), s)),
          s
        );
      }
      function nf(t, e, n) {
        const r = Jd(t),
          s = t.value;
        _d(r, (t, r) => {
          nf(t, s.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new Xp(
              s.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              s
            )
          );
      }
      class rf {}
      function sf(t) {
        return new w((e) => e.error(t));
      }
      class of {
        constructor(t, e, n, r, s, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          const t = Lp(
              this.urlTree.root,
              [],
              [],
              this.config.filter((t) => void 0 === t.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            e = this.processSegmentGroup(this.config, t, dd);
          if (null === e) return null;
          const n = new sp(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              dd,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            r = new Xd(n, e),
            s = new ip(this.url, r);
          return this.inheritParamsAndData(s._root), s;
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = rp(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = [];
          for (const s of Object.keys(e.children)) {
            const r = e.children[s],
              i = jp(t, s),
              o = this.processSegmentGroup(i, r, s);
            if (null === o) return null;
            n.push(...o);
          }
          const r = lf(n);
          return (
            r.sort((t, e) =>
              t.value.outlet === dd
                ? -1
                : e.value.outlet === dd
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            r
          );
        }
        processSegment(t, e, n, r) {
          for (const s of t) {
            const t = this.processSegmentAgainstRoute(s, e, n, r);
            if (null !== t) return t;
          }
          return Hp(e, n, r) ? [] : null;
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo || !zp(t, e, n, r)) return null;
          let s,
            i = [],
            o = [];
          if ("**" === t.path) {
            const r = n.length > 0 ? bd(n).parameters : {};
            s = new sp(
              n,
              r,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              hf(t),
              Mp(t),
              t.component,
              t,
              uf(e),
              cf(e) + n.length,
              df(t)
            );
          } else {
            const r = Bp(e, t, n);
            if (!r.matched) return null;
            (i = r.consumedSegments),
              (o = n.slice(r.lastChild)),
              (s = new sp(
                i,
                r.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                hf(t),
                Mp(t),
                t.component,
                t,
                uf(e),
                cf(e) + i.length,
                df(t)
              ));
          }
          const a = (function (t) {
              return t.children
                ? t.children
                : t.loadChildren
                ? t._loadedConfig.routes
                : [];
            })(t),
            { segmentGroup: l, slicedSegments: u } = Lp(
              e,
              i,
              o,
              a.filter((t) => void 0 === t.redirectTo),
              this.relativeLinkResolution
            );
          if (0 === u.length && l.hasChildren()) {
            const t = this.processChildren(a, l);
            return null === t ? null : [new Xd(s, t)];
          }
          if (0 === a.length && 0 === u.length) return [new Xd(s, [])];
          const c = Mp(t) === r,
            h = this.processSegment(a, l, u, c ? dd : r);
          return null === h ? null : [new Xd(s, h)];
        }
      }
      function af(t) {
        const e = t.value.routeConfig;
        return e && "" === e.path && void 0 === e.redirectTo;
      }
      function lf(t) {
        const e = [],
          n = new Set();
        for (const r of t) {
          if (!af(r)) {
            e.push(r);
            continue;
          }
          const t = e.find((t) => r.value.routeConfig === t.value.routeConfig);
          void 0 !== t ? (t.children.push(...r.children), n.add(t)) : e.push(r);
        }
        for (const r of n) {
          const t = lf(r.children);
          e.push(new Xd(r.value, t));
        }
        return e.filter((t) => !n.has(t));
      }
      function uf(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function cf(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; )
          (e = e._sourceSegment),
            (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function hf(t) {
        return t.data || {};
      }
      function df(t) {
        return t.resolve || {};
      }
      function pf(t) {
        return mh((e) => {
          const n = t(e);
          return n ? M(n).pipe(A(() => e)) : nh(e);
        });
      }
      class ff extends class {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      } {}
      const mf = new zn("ROUTES");
      class gf {
        constructor(t, e, n, r) {
          (this.loader = t),
            (this.compiler = e),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(t, e) {
          if (e._loader$) return e._loader$;
          this.onLoadStartListener && this.onLoadStartListener(e);
          const n = this.loadModuleFactory(e.loadChildren).pipe(
            A((n) => {
              this.onLoadEndListener && this.onLoadEndListener(e);
              const r = n.create(t);
              return new Ap(
                vd(r.injector.get(mf, void 0, vt.Self | vt.Optional)).map(Np),
                r
              );
            }),
            kh((t) => {
              throw ((e._loader$ = void 0), t);
            })
          );
          return (e._loader$ = new K(n, () => new E()).pipe(q())), e._loader$;
        }
        loadModuleFactory(t) {
          return "string" == typeof t
            ? M(this.loader.load(t))
            : Cd(t()).pipe(
                L((t) =>
                  t instanceof Ja
                    ? nh(t)
                    : M(this.compiler.compileModuleAsync(t))
                )
              );
        }
      }
      class yf {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new wf()),
            (this.attachRef = null);
        }
      }
      class wf {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new yf()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      class vf {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function bf(t) {
        throw t;
      }
      function _f(t, e, n) {
        return e.parse("/");
      }
      function Cf(t, e) {
        return nh(null);
      }
      const Ef = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        Sf = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      let xf = (() => {
          class t {
            constructor(t, e, n, r, s, i, o, a) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = a),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.disposed = !1),
                (this.lastLocationChangeInfo = null),
                (this.navigationId = 0),
                (this.currentPageId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new E()),
                (this.errorHandler = bf),
                (this.malformedUriErrorHandler = _f),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: Cf,
                  afterPreactivation: Cf,
                }),
                (this.urlHandlingStrategy = new vf()),
                (this.routeReuseStrategy = new ff()),
                (this.onSameUrlNavigation = "ignore"),
                (this.paramsInheritanceStrategy = "emptyOnly"),
                (this.urlUpdateStrategy = "deferred"),
                (this.relativeLinkResolution = "corrected"),
                (this.canceledNavigationResolution = "replace"),
                (this.ngModule = s.get(Xa)),
                (this.console = s.get(Zl));
              const l = s.get(uu);
              (this.isNgZoneEnabled = l instanceof uu && uu.isInAngularZone()),
                this.resetConfig(a),
                (this.currentUrlTree = new Td(new Od([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new gf(
                  i,
                  o,
                  (t) => this.triggerEvent(new id(t)),
                  (t) => this.triggerEvent(new od(t))
                )),
                (this.routerState = ep(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new rh({
                  id: 0,
                  targetPageId: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: "imperative",
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null,
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                xh((t) => 0 !== t.id),
                A((t) =>
                  Object.assign(Object.assign({}, t), {
                    extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl),
                  })
                ),
                mh((t) => {
                  let n = !1,
                    r = !1;
                  return nh(t).pipe(
                    $h((t) => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(
                              Object.assign({}, this.lastSuccessfulNavigation),
                              { previousNavigation: null }
                            )
                          : null,
                      };
                    }),
                    mh((t) => {
                      const n =
                        !this.navigated ||
                        t.extractedUrl.toString() !==
                          this.browserUrlTree.toString();
                      if (
                        ("reload" === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return nh(t).pipe(
                          mh((t) => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(
                                new Zh(
                                  t.id,
                                  this.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState
                                )
                              ),
                              n !== this.transitions.getValue()
                                ? dh
                                : Promise.resolve(t)
                            );
                          }),
                          (function (t, e, n, r) {
                            return mh((s) =>
                              (function (t, e, n, r, s) {
                                return new Gp(t, e, n, r, s).apply();
                              })(t, e, n, s.extractedUrl, r).pipe(
                                A((t) =>
                                  Object.assign(Object.assign({}, s), {
                                    urlAfterRedirects: t,
                                  })
                                )
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config
                          ),
                          $h((t) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: t.urlAfterRedirects }
                            );
                          }),
                          (function (t, e, n, r, s) {
                            return L((i) =>
                              (function (
                                t,
                                e,
                                n,
                                r,
                                s = "emptyOnly",
                                i = "legacy"
                              ) {
                                try {
                                  const o = new of(
                                    t,
                                    e,
                                    n,
                                    r,
                                    s,
                                    i
                                  ).recognize();
                                  return null === o ? sf(new rf()) : nh(o);
                                } catch (o) {
                                  return sf(o);
                                }
                              })(
                                t,
                                e,
                                i.urlAfterRedirects,
                                n(i.urlAfterRedirects),
                                r,
                                s
                              ).pipe(
                                A((t) =>
                                  Object.assign(Object.assign({}, i), {
                                    targetSnapshot: t,
                                  })
                                )
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (t) => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          $h((t) => {
                            "eager" === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(t.urlAfterRedirects, t),
                              (this.browserUrlTree = t.urlAfterRedirects));
                            const n = new td(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.next(n);
                          })
                        );
                      if (
                        n &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          this.rawUrlTree
                        )
                      ) {
                        const {
                            id: n,
                            extractedUrl: r,
                            source: s,
                            restoredState: i,
                            extras: o,
                          } = t,
                          a = new Zh(n, this.serializeUrl(r), s, i);
                        e.next(a);
                        const l = ep(r, this.rootComponentType).snapshot;
                        return nh(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, o), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl),
                        (this.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        dh
                      );
                    }),
                    pf((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    $h((t) => {
                      const e = new ed(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      this.triggerEvent(e);
                    }),
                    A((t) =>
                      Object.assign(Object.assign({}, t), {
                        guards: Jp(
                          t.targetSnapshot,
                          t.currentSnapshot,
                          this.rootContexts
                        ),
                      })
                    ),
                    (function (t, e) {
                      return L((n) => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: s,
                          guards: {
                            canActivateChecks: i,
                            canDeactivateChecks: o,
                          },
                        } = n;
                        return 0 === o.length && 0 === i.length
                          ? nh(
                              Object.assign(Object.assign({}, n), {
                                guardsResult: !0,
                              })
                            )
                          : (function (t, e, n, r) {
                              return M(t).pipe(
                                L((t) =>
                                  (function (t, e, n, r, s) {
                                    const i =
                                      e && e.routeConfig
                                        ? e.routeConfig.canDeactivate
                                        : null;
                                    return i && 0 !== i.length
                                      ? nh(
                                          i.map((i) => {
                                            const o = tf(i, e, s);
                                            let a;
                                            if (
                                              (function (t) {
                                                return t && Dp(t.canDeactivate);
                                              })(o)
                                            )
                                              a = Cd(
                                                o.canDeactivate(t, e, n, r)
                                              );
                                            else {
                                              if (!Dp(o))
                                                throw new Error(
                                                  "Invalid CanDeactivate guard"
                                                );
                                              a = Cd(o(t, e, n, r));
                                            }
                                            return a.pipe(zh());
                                          })
                                        ).pipe(Op())
                                      : nh(!0);
                                  })(t.component, t.route, n, e, r)
                                ),
                                zh((t) => !0 !== t, !0)
                              );
                            })(o, r, s, t).pipe(
                              L((n) =>
                                n && "boolean" == typeof n
                                  ? (function (t, e, n, r) {
                                      return M(e).pipe(
                                        Fh((e) =>
                                          hh(
                                            (function (t, e) {
                                              return (
                                                null !== t && e && e(new ad(t)),
                                                nh(!0)
                                              );
                                            })(e.route.parent, r),
                                            (function (t, e) {
                                              return (
                                                null !== t && e && e(new ud(t)),
                                                nh(!0)
                                              );
                                            })(e.route, r),
                                            (function (t, e, n) {
                                              const r = e[e.length - 1],
                                                s = e
                                                  .slice(0, e.length - 1)
                                                  .reverse()
                                                  .map((t) =>
                                                    (function (t) {
                                                      const e = t.routeConfig
                                                        ? t.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return e && 0 !== e.length
                                                        ? { node: t, guards: e }
                                                        : null;
                                                    })(t)
                                                  )
                                                  .filter((t) => null !== t)
                                                  .map((e) =>
                                                    fh(() =>
                                                      nh(
                                                        e.guards.map((s) => {
                                                          const i = tf(
                                                            s,
                                                            e.node,
                                                            n
                                                          );
                                                          let o;
                                                          if (
                                                            (function (t) {
                                                              return (
                                                                t &&
                                                                Dp(
                                                                  t.canActivateChild
                                                                )
                                                              );
                                                            })(i)
                                                          )
                                                            o = Cd(
                                                              i.canActivateChild(
                                                                r,
                                                                t
                                                              )
                                                            );
                                                          else {
                                                            if (!Dp(i))
                                                              throw new Error(
                                                                "Invalid CanActivateChild guard"
                                                              );
                                                            o = Cd(i(r, t));
                                                          }
                                                          return o.pipe(zh());
                                                        })
                                                      ).pipe(Op())
                                                    )
                                                  );
                                              return nh(s).pipe(Op());
                                            })(t, e.path, n),
                                            (function (t, e, n) {
                                              const r = e.routeConfig
                                                ? e.routeConfig.canActivate
                                                : null;
                                              return r && 0 !== r.length
                                                ? nh(
                                                    r.map((r) =>
                                                      fh(() => {
                                                        const s = tf(r, e, n);
                                                        let i;
                                                        if (
                                                          (function (t) {
                                                            return (
                                                              t &&
                                                              Dp(t.canActivate)
                                                            );
                                                          })(s)
                                                        )
                                                          i = Cd(
                                                            s.canActivate(e, t)
                                                          );
                                                        else {
                                                          if (!Dp(s))
                                                            throw new Error(
                                                              "Invalid CanActivate guard"
                                                            );
                                                          i = Cd(s(e, t));
                                                        }
                                                        return i.pipe(zh());
                                                      })
                                                    )
                                                  ).pipe(Op())
                                                : nh(!0);
                                            })(t, e.route, n)
                                          )
                                        ),
                                        zh((t) => !0 !== t, !0)
                                      );
                                    })(r, i, t, e)
                                  : nh(n)
                              ),
                              A((t) =>
                                Object.assign(Object.assign({}, n), {
                                  guardsResult: t,
                                })
                              )
                            );
                      });
                    })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                    $h((t) => {
                      if (kp(t.guardsResult)) {
                        const e = md(
                          `Redirecting to "${this.serializeUrl(
                            t.guardsResult
                          )}"`
                        );
                        throw ((e.url = t.guardsResult), e);
                      }
                      const e = new nd(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      this.triggerEvent(e);
                    }),
                    xh(
                      (t) =>
                        !!t.guardsResult ||
                        (this.cancelNavigationTransition(t, ""), !1)
                    ),
                    pf((t) => {
                      if (t.guards.canActivateChecks.length)
                        return nh(t).pipe(
                          $h((t) => {
                            const e = new rd(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          }),
                          mh((t) => {
                            let e = !1;
                            return nh(t).pipe(
                              ((n = this.paramsInheritanceStrategy),
                              (r = this.ngModule.injector),
                              L((t) => {
                                const {
                                  targetSnapshot: e,
                                  guards: { canActivateChecks: s },
                                } = t;
                                if (!s.length) return nh(t);
                                let i = 0;
                                return M(s).pipe(
                                  Fh((t) =>
                                    (function (t, e, n, r) {
                                      return (function (t, e, n, r) {
                                        const s = Object.keys(t);
                                        if (0 === s.length) return nh({});
                                        const i = {};
                                        return M(s).pipe(
                                          L((s) =>
                                            (function (t, e, n, r) {
                                              const s = tf(t, e, r);
                                              return Cd(
                                                s.resolve
                                                  ? s.resolve(e, n)
                                                  : s(e, n)
                                              );
                                            })(t[s], e, n, r).pipe(
                                              $h((t) => {
                                                i[s] = t;
                                              })
                                            )
                                          ),
                                          Ph(1),
                                          L(() =>
                                            Object.keys(i).length === s.length
                                              ? nh(i)
                                              : dh
                                          )
                                        );
                                      })(t._resolve, t, e, r).pipe(
                                        A(
                                          (e) => (
                                            (t._resolvedData = e),
                                            (t.data = Object.assign(
                                              Object.assign({}, t.data),
                                              rp(t, n).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(t.route, e, n, r)
                                  ),
                                  $h(() => i++),
                                  Ph(1),
                                  L((e) => (i === s.length ? nh(t) : dh))
                                );
                              })),
                              $h({
                                next: () => (e = !0),
                                complete: () => {
                                  e ||
                                    this.cancelNavigationTransition(
                                      t,
                                      "At least one route resolver didn't emit any value."
                                    );
                                },
                              })
                            );
                            var n, r;
                          }),
                          $h((t) => {
                            const e = new sd(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          })
                        );
                    }),
                    pf((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    A((t) => {
                      const e = (function (t, e, n) {
                        const r = cp(t, e._root, n ? n._root : void 0);
                        return new tp(r, e);
                      })(
                        this.routeReuseStrategy,
                        t.targetSnapshot,
                        t.currentRouterState
                      );
                      return Object.assign(Object.assign({}, t), {
                        targetRouterState: e,
                      });
                    }),
                    $h((t) => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          t.rawUrl
                        )),
                        (this.routerState = t.targetRouterState),
                        "deferred" === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(this.rawUrlTree, t),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((i = this.rootContexts),
                    (o = this.routeReuseStrategy),
                    (a = (t) => this.triggerEvent(t)),
                    A(
                      (t) => (
                        new Sp(
                          o,
                          t.targetRouterState,
                          t.currentRouterState,
                          a
                        ).activate(i),
                        t
                      )
                    )),
                    $h({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      },
                    }),
                    ((s = () => {
                      n ||
                        r ||
                        this.cancelNavigationTransition(
                          t,
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        ),
                        (this.currentNavigation = null);
                    }),
                    (t) => t.lift(new Qh(s))),
                    kh((n) => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = kp(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl
                          ));
                        const s = new Xh(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n.message
                        );
                        e.next(s),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(
                                  n.url,
                                  this.rawUrlTree
                                );
                                this.scheduleNavigation(
                                  e,
                                  "imperative",
                                  null,
                                  {
                                    skipLocationChange:
                                      t.extras.skipLocationChange,
                                    replaceUrl:
                                      "eager" === this.urlUpdateStrategy,
                                  },
                                  {
                                    resolve: t.resolve,
                                    reject: t.reject,
                                    promise: t.promise,
                                  }
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        this.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl
                        );
                        const r = new Jh(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n
                        );
                        e.next(r);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var s;
                      return dh;
                    })
                  );
                  var s, i, o, a;
                })
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(
                Object.assign(Object.assign({}, this.getTransition()), t)
              );
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0,
                  });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  const e = this.extractLocationChangeInfoFromEvent(t);
                  this.shouldScheduleNavigation(
                    this.lastLocationChangeInfo,
                    e
                  ) &&
                    setTimeout(() => {
                      const { source: t, state: n, urlTree: r } = e,
                        s = { replaceUrl: !0 };
                      if (n) {
                        const t = Object.assign({}, n);
                        delete t.navigationId,
                          delete t.ɵrouterPageId,
                          0 !== Object.keys(t).length && (s.state = t);
                      }
                      this.scheduleNavigation(r, t, n, s);
                    }, 0),
                    (this.lastLocationChangeInfo = e);
                }));
            }
            extractLocationChangeInfoFromEvent(t) {
              var e;
              return {
                source: "popstate" === t.type ? "popstate" : "hashchange",
                urlTree: this.parseUrl(t.url),
                state: (
                  null === (e = t.state) || void 0 === e
                    ? void 0
                    : e.navigationId
                )
                  ? t.state
                  : null,
                transitionId: this.getTransition().id,
              };
            }
            shouldScheduleNavigation(t, e) {
              if (!t) return !0;
              const n = e.urlTree.toString() === t.urlTree.toString();
              return !(
                e.transitionId === t.transitionId &&
                n &&
                (("hashchange" === e.source && "popstate" === t.source) ||
                  ("popstate" === e.source && "hashchange" === t.source))
              );
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              Pp(t),
                (this.config = t.map(Np)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.transitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(),
                  (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(t, e = {}) {
              const {
                  relativeTo: n,
                  queryParams: r,
                  fragment: s,
                  queryParamsHandling: i,
                  preserveFragment: o,
                } = e,
                a = n || this.routerState.root,
                l = o ? this.currentUrlTree.fragment : s;
              let u = null;
              switch (i) {
                case "merge":
                  u = Object.assign(
                    Object.assign({}, this.currentUrlTree.queryParams),
                    r
                  );
                  break;
                case "preserve":
                  u = this.currentUrlTree.queryParams;
                  break;
                default:
                  u = r || null;
              }
              return (
                null !== u && (u = this.removeEmptyProps(u)),
                (function (t, e, n, r, s) {
                  if (0 === n.length) return fp(e.root, e.root, e, r, s);
                  const i = (function (t) {
                    if (
                      "string" == typeof t[0] &&
                      1 === t.length &&
                      "/" === t[0]
                    )
                      return new gp(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const r = t.reduce((t, r, s) => {
                      if ("object" == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {};
                          return (
                            _d(r.outlets, (t, n) => {
                              e[n] = "string" == typeof t ? t.split("/") : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (r.segmentPath) return [...t, r.segmentPath];
                      }
                      return "string" != typeof r
                        ? [...t, r]
                        : 0 === s
                        ? (r.split("/").forEach((r, s) => {
                            (0 == s && "." === r) ||
                              (0 == s && "" === r
                                ? (n = !0)
                                : ".." === r
                                ? e++
                                : "" != r && t.push(r));
                          }),
                          t)
                        : [...t, r];
                    }, []);
                    return new gp(n, e, r);
                  })(n);
                  if (i.toRoot()) return fp(e.root, new Od([], {}), e, r, s);
                  const o = (function (t, e, n) {
                      if (t.isAbsolute) return new yp(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) {
                        const t = n.snapshot._urlSegment;
                        return new yp(t, t === e.root, 0);
                      }
                      const r = dp(t.commands[0]) ? 0 : 1;
                      return (function (t, e, n) {
                        let r = t,
                          s = e,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r))
                            throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new yp(r, !1, s - i);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        t.numberOfDoubleDots
                      );
                    })(i, e, t),
                    a = o.processChildren
                      ? vp(o.segmentGroup, o.index, i.commands)
                      : wp(o.segmentGroup, o.index, i.commands);
                  return fp(o.segmentGroup, a, e, r, s);
                })(a, this.currentUrlTree, t, u, null != l ? l : null)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              const n = kp(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              let s = null;
              return (
                "computed" === this.canceledNavigationResolution &&
                  (0 === this.currentPageId ||
                    e.skipLocationChange ||
                    e.replaceUrl) &&
                  (s = this.location.getState()),
                this.scheduleNavigation(r, "imperative", s, e)
              );
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function (t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n)
                      throw new Error(
                        `The requested path contains ${n} segment at index ${e}`
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              let n;
              if (
                ((n =
                  !0 === e
                    ? Object.assign({}, Ef)
                    : !1 === e
                    ? Object.assign({}, Sf)
                    : e),
                kp(t))
              )
                return xd(this.currentUrlTree, t, n);
              const r = this.parseUrl(t);
              return xd(this.currentUrlTree, r, n);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (t) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    (this.currentPageId = t.targetPageId),
                    this.events.next(
                      new Yh(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(this.currentUrlTree)
                      )
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    t.resolve(!0);
                },
                (t) => {
                  this.console.warn("Unhandled Navigation Error: ");
                }
              );
            }
            scheduleNavigation(t, e, n, r, s) {
              if (this.disposed) return Promise.resolve(!1);
              const i = this.getTransition(),
                o =
                  "imperative" !== e &&
                  "imperative" === (null == i ? void 0 : i.source),
                a =
                  (this.lastSuccessfulId === i.id || this.currentNavigation
                    ? i.rawUrl
                    : i.urlAfterRedirects
                  ).toString() === t.toString();
              if (o && a) return Promise.resolve(!0);
              let l, u, c;
              s
                ? ((l = s.resolve), (u = s.reject), (c = s.promise))
                : (c = new Promise((t, e) => {
                    (l = t), (u = e);
                  }));
              const h = ++this.navigationId;
              let d;
              return (
                (d =
                  "computed" === this.canceledNavigationResolution
                    ? n && n.ɵrouterPageId
                      ? n.ɵrouterPageId
                      : this.currentPageId + 1
                    : 0),
                this.setTransition({
                  id: h,
                  targetPageId: d,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: l,
                  reject: u,
                  promise: c,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                c.catch((t) => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e) {
              const n = this.urlSerializer.serialize(t),
                r = Object.assign(
                  Object.assign({}, e.extras.state),
                  this.generateNgRouterState(e.id, e.targetPageId)
                );
              this.location.isCurrentPathEqualTo(n) || e.extras.replaceUrl
                ? this.location.replaceState(n, "", r)
                : this.location.go(n, "", r);
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                this.generateNgRouterState(
                  this.lastSuccessfulId,
                  this.currentPageId
                )
              );
            }
            cancelNavigationTransition(t, e) {
              "computed" === this.canceledNavigationResolution
                ? ("popstate" !== t.source &&
                    "eager" !== this.urlUpdateStrategy) ||
                  this.location.historyGo(this.currentPageId - t.targetPageId)
                : this.resetUrlToCurrentUrlTree();
              const n = new Xh(t.id, this.serializeUrl(t.extractedUrl), e);
              this.triggerEvent(n), t.resolve(!1);
            }
            generateNgRouterState(t, e) {
              return "computed" === this.canceledNavigationResolution
                ? { navigationId: t, "\u0275routerPageId": e }
                : { navigationId: t };
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                or($n),
                or(Id),
                or(wf),
                or(nc),
                or(to),
                or(Fu),
                or(ou),
                or(void 0)
              );
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Af = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.parentContexts = t),
                (this.location = e),
                (this.resolver = n),
                (this.changeDetector = s),
                (this.activated = null),
                (this._activatedRoute = null),
                (this.activateEvents = new xl()),
                (this.deactivateEvents = new xl()),
                (this.name = r || dd),
                t.onChildOutletCreated(this.name, this);
            }
            ngOnDestroy() {
              this.parentContexts.onChildOutletDestroyed(this.name);
            }
            ngOnInit() {
              if (!this.activated) {
                const t = this.parentContexts.getContext(this.name);
                t &&
                  t.route &&
                  (t.attachRef
                    ? this.attach(t.attachRef, t.route)
                    : this.activateWith(t.route, t.resolver || null));
              }
            }
            get isActivated() {
              return !!this.activated;
            }
            get component() {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this.activated.instance;
            }
            get activatedRoute() {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this._activatedRoute;
            }
            get activatedRouteData() {
              return this._activatedRoute
                ? this._activatedRoute.snapshot.data
                : {};
            }
            detach() {
              if (!this.activated) throw new Error("Outlet is not activated");
              this.location.detach();
              const t = this.activated;
              return (this.activated = null), (this._activatedRoute = null), t;
            }
            attach(t, e) {
              (this.activated = t),
                (this._activatedRoute = e),
                this.location.insert(t.hostView);
            }
            deactivate() {
              if (this.activated) {
                const t = this.component;
                this.activated.destroy(),
                  (this.activated = null),
                  (this._activatedRoute = null),
                  this.deactivateEvents.emit(t);
              }
            }
            activateWith(t, e) {
              if (this.isActivated)
                throw new Error("Cannot activate an already activated outlet");
              this._activatedRoute = t;
              const n = (e = e || this.resolver).resolveComponentFactory(
                  t._futureSnapshot.routeConfig.component
                ),
                r = this.parentContexts.getOrCreateContext(this.name).children,
                s = new Df(t, r, this.location.injector);
              (this.activated = this.location.createComponent(
                n,
                this.location.length,
                s
              )),
                this.changeDetector.markForCheck(),
                this.activateEvents.emit(this.activated.instance);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                bo(wf),
                bo(el),
                bo(pa),
                ("name",
                (function (t, e) {
                  const n = t.attrs;
                  if (n) {
                    const t = n.length;
                    let r = 0;
                    for (; r < t; ) {
                      const s = n[r];
                      if (dn(s)) break;
                      if (0 === s) r += 2;
                      else if ("number" == typeof s)
                        for (r++; r < t && "string" == typeof n[r]; ) r++;
                      else {
                        if (s === e) return n[r + 1];
                        r += 2;
                      }
                    }
                  }
                  return null;
                })(Pe(), "name")),
                bo(Ha)
              );
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [["router-outlet"]],
              outputs: {
                activateEvents: "activate",
                deactivateEvents: "deactivate",
              },
              exportAs: ["outlet"],
            })),
            t
          );
        })();
      class Df {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === np
            ? this.route
            : t === wf
            ? this.childContexts
            : this.parent.get(t, e);
        }
      }
      class kf {}
      class Tf {
        preload(t, e) {
          return nh(null);
        }
      }
      let Of = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new gf(
                  e,
                  n,
                  (e) => t.triggerEvent(new id(e)),
                  (e) => t.triggerEvent(new od(e))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  xh((t) => t instanceof Yh),
                  Fh(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(Xa);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children));
              return M(n).pipe(
                H(),
                A((t) => {})
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                (e._loadedConfig
                  ? nh(e._loadedConfig)
                  : this.loader.load(t.injector, e)
                ).pipe(
                  L(
                    (t) => (
                      (e._loadedConfig = t),
                      this.processRoutes(t.module, t.routes)
                    )
                  )
                )
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(xf), or(Fu), or(ou), or(to), or(kf));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Ff = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration =
                  n.scrollPositionRestoration || "disabled"),
                (n.anchorScrolling = n.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Zh
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState
                      ? t.restoredState.navigationId
                      : 0))
                  : t instanceof Yh &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(
                      t,
                      this.router.parseUrl(t.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof hd &&
                  (t.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new hd(
                  t,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(xf), or(vc), or(void 0));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const Pf = new zn("ROUTER_CONFIGURATION"),
        If = new zn("ROUTER_FORROOT_GUARD"),
        Rf = [
          nc,
          { provide: Id, useClass: Rd },
          {
            provide: xf,
            useFactory: function (t, e, n, r, s, i, o, a = {}, l, u) {
              const c = new xf(null, t, e, n, r, s, i, vd(o));
              return (
                l && (c.urlHandlingStrategy = l),
                u && (c.routeReuseStrategy = u),
                (function (t, e) {
                  t.errorHandler && (e.errorHandler = t.errorHandler),
                    t.malformedUriErrorHandler &&
                      (e.malformedUriErrorHandler = t.malformedUriErrorHandler),
                    t.onSameUrlNavigation &&
                      (e.onSameUrlNavigation = t.onSameUrlNavigation),
                    t.paramsInheritanceStrategy &&
                      (e.paramsInheritanceStrategy =
                        t.paramsInheritanceStrategy),
                    t.relativeLinkResolution &&
                      (e.relativeLinkResolution = t.relativeLinkResolution),
                    t.urlUpdateStrategy &&
                      (e.urlUpdateStrategy = t.urlUpdateStrategy);
                })(a, c),
                a.enableTracing &&
                  c.events.subscribe((t) => {
                    var e, n;
                    null === (e = console.group) ||
                      void 0 === e ||
                      e.call(console, `Router Event: ${t.constructor.name}`),
                      console.log(t.toString()),
                      console.log(t),
                      null === (n = console.groupEnd) ||
                        void 0 === n ||
                        n.call(console);
                  }),
                c
              );
            },
            deps: [
              Id,
              wf,
              nc,
              to,
              Fu,
              ou,
              mf,
              Pf,
              [class {}, new cr()],
              [class {}, new cr()],
            ],
          },
          wf,
          {
            provide: np,
            useFactory: function (t) {
              return t.routerState.root;
            },
            deps: [xf],
          },
          { provide: Fu, useClass: Ru },
          Of,
          Tf,
          class {
            preload(t, e) {
              return e().pipe(kh(() => nh(null)));
            }
          },
          { provide: Pf, useValue: { enableTracing: !1 } },
        ];
      function Nf() {
        return new Su("Router", xf);
      }
      let Mf = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                Rf,
                Lf(e),
                {
                  provide: If,
                  useFactory: Bf,
                  deps: [[xf, new cr(), new hr()]],
                },
                { provide: Pf, useValue: n || {} },
                {
                  provide: Yu,
                  useFactory: Vf,
                  deps: [zu, [new ur(Ju), new cr()], Pf],
                },
                { provide: Ff, useFactory: jf, deps: [xf, vc, Pf] },
                {
                  provide: kf,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : Tf,
                },
                { provide: Su, multi: !0, useFactory: Nf },
                [
                  Uf,
                  { provide: zl, multi: !0, useFactory: zf, deps: [Uf] },
                  { provide: $f, useFactory: Hf, deps: [Uf] },
                  { provide: Gl, multi: !0, useExisting: $f },
                ],
              ],
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [Lf(e)] };
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(If, 8), or(xf, 8));
          }),
          (t.ɵmod = qt({ type: t })),
          (t.ɵinj = ht({})),
          t
        );
      })();
      function jf(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new Ff(t, e, n);
      }
      function Vf(t, e, n = {}) {
        return n.useHash ? new ec(t, e) : new tc(t, e);
      }
      function Bf(t) {
        return "guarded";
      }
      function Lf(t) {
        return [
          { provide: Hn, multi: !0, useValue: t },
          { provide: mf, multi: !0, useValue: t },
        ];
      }
      let Uf = (() => {
        class t {
          constructor(t) {
            (this.injector = t),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new E());
          }
          appInitializer() {
            return this.injector.get($u, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise((e) => (t = e)),
                n = this.injector.get(xf),
                r = this.injector.get(Pf);
              return (
                "disabled" === r.initialNavigation
                  ? (n.setUpLocationChangeListener(), t(!0))
                  : "enabled" === r.initialNavigation ||
                    "enabledBlocking" === r.initialNavigation
                  ? ((n.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? nh(null)
                        : ((this.initNavigation = !0),
                          t(!0),
                          this.resultOfPreactivationDone)),
                    n.initialNavigation())
                  : t(!0),
                e
              );
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get(Pf),
              n = this.injector.get(Of),
              r = this.injector.get(Ff),
              s = this.injector.get(xf),
              i = this.injector.get(Tu);
            t === i.components[0] &&
              (("enabledNonBlocking" !== e.initialNavigation &&
                void 0 !== e.initialNavigation) ||
                s.initialNavigation(),
              n.setUpPreloading(),
              r.init(),
              s.resetRootComponentType(i.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(to));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function zf(t) {
        return t.appInitializer.bind(t);
      }
      function Hf(t) {
        return t.bootstrapListener.bind(t);
      }
      const $f = new zn("Router Initializer");
      var qf = {
          prefix: "fas",
          iconName: "check",
          icon: [
            512,
            512,
            [],
            "f00c",
            "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",
          ],
        },
        Wf = {
          prefix: "fas",
          iconName: "columns",
          icon: [
            512,
            512,
            [],
            "f0db",
            "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z",
          ],
        },
        Qf = {
          prefix: "fas",
          iconName: "pencil-alt",
          icon: [
            512,
            512,
            [],
            "f303",
            "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z",
          ],
        },
        Kf = {
          prefix: "fas",
          iconName: "table",
          icon: [
            512,
            512,
            [],
            "f0ce",
            "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z",
          ],
        },
        Gf = {
          prefix: "fas",
          iconName: "times",
          icon: [
            352,
            512,
            [],
            "f00d",
            "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
          ],
        },
        Zf = {
          prefix: "fas",
          iconName: "trash-alt",
          icon: [
            448,
            512,
            [],
            "f2ed",
            "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",
          ],
        },
        Yf = {
          prefix: "fas",
          iconName: "user",
          icon: [
            448,
            512,
            [],
            "f007",
            "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
          ],
        };
      function Xf(t) {
        return (Xf =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Jf(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function tm(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              Jf(t, e, n[e]);
            });
        }
        return t;
      }
      function em(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n = [],
              r = !0,
              s = !1,
              i = void 0;
            try {
              for (
                var o, a = t[Symbol.iterator]();
                !(r = (o = a.next()).done) &&
                (n.push(o.value), !e || n.length !== e);
                r = !0
              );
            } catch (l) {
              (s = !0), (i = l);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (s) throw i;
              }
            }
            return n;
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var nm = {},
        rm = {};
      try {
        "undefined" != typeof window && (nm = window),
          "undefined" != typeof document && (rm = document),
          "undefined" != typeof MutationObserver && MutationObserver,
          "undefined" != typeof performance && performance;
      } catch (mC) {}
      var sm = (nm.navigator || {}).userAgent,
        im = void 0 === sm ? "" : sm,
        om = nm,
        am = rm,
        lm =
          !!am.documentElement &&
          !!am.head &&
          "function" == typeof am.addEventListener &&
          "function" == typeof am.createElement,
        um = (~im.indexOf("MSIE") || im.indexOf("Trident/"), "svg-inline--fa"),
        cm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        hm = cm.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        dm = {
          GROUP: "group",
          SWAP_OPACITY: "swap-opacity",
          PRIMARY: "primary",
          SECONDARY: "secondary",
        },
        pm =
          ([
            "xs",
            "sm",
            "lg",
            "fw",
            "ul",
            "li",
            "border",
            "pull-left",
            "pull-right",
            "spin",
            "pulse",
            "rotate-90",
            "rotate-180",
            "rotate-270",
            "flip-horizontal",
            "flip-vertical",
            "flip-both",
            "stack",
            "stack-1x",
            "stack-2x",
            "inverse",
            "layers",
            "layers-text",
            "layers-counter",
            dm.GROUP,
            dm.SWAP_OPACITY,
            dm.PRIMARY,
            dm.SECONDARY,
          ]
            .concat(
              cm.map(function (t) {
                return "".concat(t, "x");
              })
            )
            .concat(
              hm.map(function (t) {
                return "w-".concat(t);
              })
            ),
          om.FontAwesomeConfig || {});
      am &&
        "function" == typeof am.querySelector &&
        [
          ["data-family-prefix", "familyPrefix"],
          ["data-replacement-class", "replacementClass"],
          ["data-auto-replace-svg", "autoReplaceSvg"],
          ["data-auto-add-css", "autoAddCss"],
          ["data-auto-a11y", "autoA11y"],
          ["data-search-pseudo-elements", "searchPseudoElements"],
          ["data-observe-mutations", "observeMutations"],
          ["data-mutate-approach", "mutateApproach"],
          ["data-keep-original-source", "keepOriginalSource"],
          ["data-measure-performance", "measurePerformance"],
          ["data-show-missing-icons", "showMissingIcons"],
        ].forEach(function (t) {
          var e = em(t, 2),
            n = e[1],
            r = (function (t) {
              return "" === t || ("false" !== t && ("true" === t || t));
            })(
              (function (t) {
                var e = am.querySelector("script[" + t + "]");
                if (e) return e.getAttribute(t);
              })(e[0])
            );
          null != r && (pm[n] = r);
        });
      var fm = tm(
        {},
        {
          familyPrefix: "fa",
          replacementClass: um,
          autoReplaceSvg: !0,
          autoAddCss: !0,
          autoA11y: !0,
          searchPseudoElements: !1,
          observeMutations: !0,
          mutateApproach: "async",
          keepOriginalSource: !0,
          measurePerformance: !1,
          showMissingIcons: !0,
        },
        pm
      );
      fm.autoReplaceSvg || (fm.observeMutations = !1);
      var mm = tm({}, fm);
      om.FontAwesomeConfig = mm;
      var gm = om || {};
      gm.___FONT_AWESOME___ || (gm.___FONT_AWESOME___ = {}),
        gm.___FONT_AWESOME___.styles || (gm.___FONT_AWESOME___.styles = {}),
        gm.___FONT_AWESOME___.hooks || (gm.___FONT_AWESOME___.hooks = {}),
        gm.___FONT_AWESOME___.shims || (gm.___FONT_AWESOME___.shims = []);
      var ym = gm.___FONT_AWESOME___,
        wm = [];
      lm &&
        ((am.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
          am.readyState
        ) ||
          am.addEventListener("DOMContentLoaded", function t() {
            am.removeEventListener("DOMContentLoaded", t),
              wm.map(function (t) {
                return t();
              });
          }));
      var vm,
        bm = "pending",
        _m = "settled",
        Cm = "fulfilled",
        Em = "rejected",
        Sm = function () {},
        xm =
          "undefined" != typeof global &&
          void 0 !== global.process &&
          "function" == typeof global.process.emit,
        Am = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
        Dm = [];
      function km() {
        for (var t = 0; t < Dm.length; t++) Dm[t][0](Dm[t][1]);
        (Dm = []), (vm = !1);
      }
      function Tm(t, e) {
        Dm.push([t, e]), vm || ((vm = !0), Am(km, 0));
      }
      function Om(t) {
        var e = t.owner,
          n = e._state,
          r = e._data,
          s = t[n],
          i = t.then;
        if ("function" == typeof s) {
          n = Cm;
          try {
            r = s(r);
          } catch (mC) {
            Rm(i, mC);
          }
        }
        Fm(i, r) || (n === Cm && Pm(i, r), n === Em && Rm(i, r));
      }
      function Fm(t, e) {
        var n;
        try {
          if (t === e)
            throw new TypeError(
              "A promises callback cannot return that same promise."
            );
          if (e && ("function" == typeof e || "object" === Xf(e))) {
            var r = e.then;
            if ("function" == typeof r)
              return (
                r.call(
                  e,
                  function (r) {
                    n || ((n = !0), e === r ? Im(t, r) : Pm(t, r));
                  },
                  function (e) {
                    n || ((n = !0), Rm(t, e));
                  }
                ),
                !0
              );
          }
        } catch (mC) {
          return n || Rm(t, mC), !0;
        }
        return !1;
      }
      function Pm(t, e) {
        (t !== e && Fm(t, e)) || Im(t, e);
      }
      function Im(t, e) {
        t._state === bm && ((t._state = _m), (t._data = e), Tm(Mm, t));
      }
      function Rm(t, e) {
        t._state === bm && ((t._state = _m), (t._data = e), Tm(jm, t));
      }
      function Nm(t) {
        t._then = t._then.forEach(Om);
      }
      function Mm(t) {
        (t._state = Cm), Nm(t);
      }
      function jm(t) {
        (t._state = Em),
          Nm(t),
          !t._handled &&
            xm &&
            global.process.emit("unhandledRejection", t._data, t);
      }
      function Vm(t) {
        global.process.emit("rejectionHandled", t);
      }
      function Bm(t) {
        if ("function" != typeof t)
          throw new TypeError("Promise resolver " + t + " is not a function");
        if (this instanceof Bm == 0)
          throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
          );
        (this._then = []),
          (function (t, e) {
            function n(t) {
              Rm(e, t);
            }
            try {
              t(function (t) {
                Pm(e, t);
              }, n);
            } catch (mC) {
              n(mC);
            }
          })(t, this);
      }
      (Bm.prototype = {
        constructor: Bm,
        _state: bm,
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function (t, e) {
          var n = {
            owner: this,
            then: new this.constructor(Sm),
            fulfilled: t,
            rejected: e,
          };
          return (
            (!e && !t) ||
              this._handled ||
              ((this._handled = !0), this._state === Em && xm && Tm(Vm, this)),
            this._state === Cm || this._state === Em
              ? Tm(Om, n)
              : this._then.push(n),
            n.then
          );
        },
        catch: function (t) {
          return this.then(null, t);
        },
      }),
        (Bm.all = function (t) {
          if (!Array.isArray(t))
            throw new TypeError("You must pass an array to Promise.all().");
          return new Bm(function (e, n) {
            var r = [],
              s = 0;
            function i(t) {
              return (
                s++,
                function (n) {
                  (r[t] = n), --s || e(r);
                }
              );
            }
            for (var o, a = 0; a < t.length; a++)
              (o = t[a]) && "function" == typeof o.then
                ? o.then(i(a), n)
                : (r[a] = o);
            s || e(r);
          });
        }),
        (Bm.race = function (t) {
          if (!Array.isArray(t))
            throw new TypeError("You must pass an array to Promise.race().");
          return new Bm(function (e, n) {
            for (var r, s = 0; s < t.length; s++)
              (r = t[s]) && "function" == typeof r.then ? r.then(e, n) : e(r);
          });
        }),
        (Bm.resolve = function (t) {
          return t && "object" === Xf(t) && t.constructor === Bm
            ? t
            : new Bm(function (e) {
                e(t);
              });
        }),
        (Bm.reject = function (t) {
          return new Bm(function (e, n) {
            n(t);
          });
        });
      var Lm = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      function Um() {
        for (var t = 12, e = ""; t-- > 0; )
          e += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
            (62 * Math.random()) | 0
          ];
        return e;
      }
      function zm(t) {
        return ""
          .concat(t)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function Hm(t) {
        return Object.keys(t || {}).reduce(function (e, n) {
          return e + "".concat(n, ": ").concat(t[n], ";");
        }, "");
      }
      function $m(t) {
        return (
          t.size !== Lm.size ||
          t.x !== Lm.x ||
          t.y !== Lm.y ||
          t.rotate !== Lm.rotate ||
          t.flipX ||
          t.flipY
        );
      }
      function qm(t) {
        var e = t.transform,
          n = t.iconWidth,
          r = { transform: "translate(".concat(t.containerWidth / 2, " 256)") },
          s = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
          i = "scale("
            .concat((e.size / 16) * (e.flipX ? -1 : 1), ", ")
            .concat((e.size / 16) * (e.flipY ? -1 : 1), ") "),
          o = "rotate(".concat(e.rotate, " 0 0)");
        return {
          outer: r,
          inner: { transform: "".concat(s, " ").concat(i, " ").concat(o) },
          path: { transform: "translate(".concat((n / 2) * -1, " -256)") },
        };
      }
      var Wm = { x: 0, y: 0, width: "100%", height: "100%" };
      function Qm(t) {
        var e =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          t.attributes &&
            (t.attributes.fill || e) &&
            (t.attributes.fill = "black"),
          t
        );
      }
      function Km(t) {
        var e = t.icons,
          n = e.main,
          r = e.mask,
          s = t.prefix,
          i = t.iconName,
          o = t.transform,
          a = t.symbol,
          l = t.title,
          u = t.maskId,
          c = t.titleId,
          h = t.extra,
          d = t.watchable,
          p = void 0 !== d && d,
          f = r.found ? r : n,
          m = f.width,
          g = f.height,
          y = "fak" === s,
          w = y ? "" : "fa-w-".concat(Math.ceil((m / g) * 16)),
          v = [
            mm.replacementClass,
            i ? "".concat(mm.familyPrefix, "-").concat(i) : "",
            w,
          ]
            .filter(function (t) {
              return -1 === h.classes.indexOf(t);
            })
            .filter(function (t) {
              return "" !== t || !!t;
            })
            .concat(h.classes)
            .join(" "),
          b = {
            children: [],
            attributes: tm({}, h.attributes, {
              "data-prefix": s,
              "data-icon": i,
              class: v,
              role: h.attributes.role || "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 ".concat(m, " ").concat(g),
            }),
          },
          _ =
            y && !~h.classes.indexOf("fa-fw")
              ? { width: "".concat((m / g) * 16 * 0.0625, "em") }
              : {};
        p && (b.attributes["data-fa-i2svg"] = ""),
          l &&
            b.children.push({
              tag: "title",
              attributes: {
                id:
                  b.attributes["aria-labelledby"] || "title-".concat(c || Um()),
              },
              children: [l],
            });
        var C = tm({}, b, {
            prefix: s,
            iconName: i,
            main: n,
            mask: r,
            maskId: u,
            transform: o,
            symbol: a,
            styles: tm({}, _, h.styles),
          }),
          E =
            r.found && n.found
              ? (function (t) {
                  var e,
                    n = t.children,
                    r = t.attributes,
                    s = t.main,
                    i = t.mask,
                    o = t.maskId,
                    a = s.icon,
                    l = i.icon,
                    u = qm({
                      transform: t.transform,
                      containerWidth: i.width,
                      iconWidth: s.width,
                    }),
                    c = {
                      tag: "rect",
                      attributes: tm({}, Wm, { fill: "white" }),
                    },
                    h = a.children ? { children: a.children.map(Qm) } : {},
                    d = {
                      tag: "g",
                      attributes: tm({}, u.inner),
                      children: [
                        Qm(
                          tm(
                            {
                              tag: a.tag,
                              attributes: tm({}, a.attributes, u.path),
                            },
                            h
                          )
                        ),
                      ],
                    },
                    p = {
                      tag: "g",
                      attributes: tm({}, u.outer),
                      children: [d],
                    },
                    f = "mask-".concat(o || Um()),
                    m = "clip-".concat(o || Um()),
                    g = {
                      tag: "mask",
                      attributes: tm({}, Wm, {
                        id: f,
                        maskUnits: "userSpaceOnUse",
                        maskContentUnits: "userSpaceOnUse",
                      }),
                      children: [c, p],
                    },
                    y = {
                      tag: "defs",
                      children: [
                        {
                          tag: "clipPath",
                          attributes: { id: m },
                          children: ((e = l), "g" === e.tag ? e.children : [e]),
                        },
                        g,
                      ],
                    };
                  return (
                    n.push(y, {
                      tag: "rect",
                      attributes: tm(
                        {
                          fill: "currentColor",
                          "clip-path": "url(#".concat(m, ")"),
                          mask: "url(#".concat(f, ")"),
                        },
                        Wm
                      ),
                    }),
                    { children: n, attributes: r }
                  );
                })(C)
              : (function (t) {
                  var e = t.children,
                    n = t.attributes,
                    r = t.main,
                    s = t.transform,
                    i = Hm(t.styles);
                  if ((i.length > 0 && (n.style = i), $m(s))) {
                    var o = qm({
                      transform: s,
                      containerWidth: r.width,
                      iconWidth: r.width,
                    });
                    e.push({
                      tag: "g",
                      attributes: tm({}, o.outer),
                      children: [
                        {
                          tag: "g",
                          attributes: tm({}, o.inner),
                          children: [
                            {
                              tag: r.icon.tag,
                              children: r.icon.children,
                              attributes: tm({}, r.icon.attributes, o.path),
                            },
                          ],
                        },
                      ],
                    });
                  } else e.push(r.icon);
                  return { children: e, attributes: n };
                })(C),
          S = E.attributes;
        return (
          (C.children = E.children),
          (C.attributes = S),
          a
            ? (function (t) {
                var e = t.iconName,
                  n = t.children,
                  r = t.symbol;
                return [
                  {
                    tag: "svg",
                    attributes: { style: "display: none;" },
                    children: [
                      {
                        tag: "symbol",
                        attributes: tm({}, t.attributes, {
                          id:
                            !0 === r
                              ? ""
                                  .concat(t.prefix, "-")
                                  .concat(mm.familyPrefix, "-")
                                  .concat(e)
                              : r,
                        }),
                        children: n,
                      },
                    ],
                  },
                ];
              })(C)
            : (function (t) {
                var e = t.children,
                  n = t.main,
                  r = t.mask,
                  s = t.attributes,
                  i = t.styles,
                  o = t.transform;
                if ($m(o) && n.found && !r.found) {
                  var a = { x: n.width / n.height / 2, y: 0.5 };
                  s.style = Hm(
                    tm({}, i, {
                      "transform-origin": ""
                        .concat(a.x + o.x / 16, "em ")
                        .concat(a.y + o.y / 16, "em"),
                    })
                  );
                }
                return [{ tag: "svg", attributes: s, children: e }];
              })(C)
        );
      }
      var Gm = function (t, e, n, r) {
        var s,
          i,
          o,
          a = Object.keys(t),
          l = a.length,
          u =
            void 0 !== r
              ? (function (t, e) {
                  return function (n, r, s, i) {
                    return t.call(e, n, r, s, i);
                  };
                })(e, r)
              : e;
        for (
          void 0 === n ? ((s = 1), (o = t[a[0]])) : ((s = 0), (o = n));
          s < l;
          s++
        )
          o = u(o, t[(i = a[s])], i, t);
        return o;
      };
      function Zm(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.skipHooks,
          s = void 0 !== r && r,
          i = Object.keys(e).reduce(function (t, n) {
            var r = e[n];
            return r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
          }, {});
        "function" != typeof ym.hooks.addPack || s
          ? (ym.styles[t] = tm({}, ym.styles[t] || {}, i))
          : ym.hooks.addPack(t, i),
          "fas" === t && Zm("fa", e);
      }
      var Ym = ym.styles,
        Xm = ym.shims,
        Jm = function () {
          var t = function (t) {
            return Gm(
              Ym,
              function (e, n, r) {
                return (e[r] = Gm(n, t, {})), e;
              },
              {}
            );
          };
          t(function (t, e, n) {
            return e[3] && (t[e[3]] = n), t;
          }),
            t(function (t, e, n) {
              var r = e[2];
              return (
                (t[n] = n),
                r.forEach(function (e) {
                  t[e] = n;
                }),
                t
              );
            });
          var e = "far" in Ym;
          Gm(
            Xm,
            function (t, n) {
              var r = n[1];
              return (
                "far" !== r || e || (r = "fas"),
                (t[n[0]] = { prefix: r, iconName: n[2] }),
                t
              );
            },
            {}
          );
        };
      function tg(t, e, n) {
        if (t && t[e] && t[e][n])
          return { prefix: e, iconName: n, icon: t[e][n] };
      }
      function eg(t) {
        var e = t.tag,
          n = t.attributes,
          r = void 0 === n ? {} : n,
          s = t.children,
          i = void 0 === s ? [] : s;
        return "string" == typeof t
          ? zm(t)
          : "<"
              .concat(e, " ")
              .concat(
                (function (t) {
                  return Object.keys(t || {})
                    .reduce(function (e, n) {
                      return e + "".concat(n, '="').concat(zm(t[n]), '" ');
                    }, "")
                    .trim();
                })(r),
                ">"
              )
              .concat(i.map(eg).join(""), "</")
              .concat(e, ">");
      }
      function ng(t) {
        (this.name = "MissingIcon"),
          (this.message = t || "Icon unavailable"),
          (this.stack = new Error().stack);
      }
      Jm(), ((ng.prototype = Object.create(Error.prototype)).constructor = ng);
      var rg = { fill: "currentColor" },
        sg = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" },
        ig =
          (tm({}, rg, {
            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
          }),
          tm({}, sg, { attributeName: "opacity" }));
      function og(t) {
        var e = t[0],
          n = t[1],
          r = em(t.slice(4), 1)[0];
        return {
          found: !0,
          width: e,
          height: n,
          icon: Array.isArray(r)
            ? {
                tag: "g",
                attributes: {
                  class: "".concat(mm.familyPrefix, "-").concat(dm.GROUP),
                },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: ""
                        .concat(mm.familyPrefix, "-")
                        .concat(dm.SECONDARY),
                      fill: "currentColor",
                      d: r[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(mm.familyPrefix, "-").concat(dm.PRIMARY),
                      fill: "currentColor",
                      d: r[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: r } },
        };
      }
      function ag() {
        mm.autoAddCss &&
          !dg &&
          ((function (t) {
            if (t && lm) {
              var e = am.createElement("style");
              e.setAttribute("type", "text/css"), (e.innerHTML = t);
              for (
                var n = am.head.childNodes, r = null, s = n.length - 1;
                s > -1;
                s--
              ) {
                var i = n[s],
                  o = (i.tagName || "").toUpperCase();
                ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
              }
              am.head.insertBefore(e, r);
            }
          })(
            (function () {
              var t = "fa",
                e = um,
                n = mm.familyPrefix,
                r = mm.replacementClass,
                s =
                  'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
              if (n !== t || r !== e) {
                var i = new RegExp("\\.".concat(t, "\\-"), "g"),
                  o = new RegExp("\\--".concat(t, "\\-"), "g"),
                  a = new RegExp("\\.".concat(e), "g");
                s = s
                  .replace(i, ".".concat(n, "-"))
                  .replace(o, "--".concat(n, "-"))
                  .replace(a, ".".concat(r));
              }
              return s;
            })()
          ),
          (dg = !0));
      }
      function lg(t, e) {
        return (
          Object.defineProperty(t, "abstract", { get: e }),
          Object.defineProperty(t, "html", {
            get: function () {
              return t.abstract.map(function (t) {
                return eg(t);
              });
            },
          }),
          Object.defineProperty(t, "node", {
            get: function () {
              if (lm) {
                var e = am.createElement("div");
                return (e.innerHTML = t.html), e.children;
              }
            },
          }),
          t
        );
      }
      function ug(t) {
        var e = t.prefix,
          n = void 0 === e ? "fa" : e,
          r = t.iconName;
        if (r) return tg(hg.definitions, n, r) || tg(ym.styles, n, r);
      }
      tm({}, rg, { cx: "256", cy: "364", r: "28" }),
        tm({}, sg, { attributeName: "r", values: "28;14;28;28;14;28;" }),
        tm({}, ig, { values: "1;0;1;1;0;1;" }),
        tm({}, rg, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
        }),
        tm({}, ig, { values: "1;0;0;0;0;1;" }),
        tm({}, rg, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
        }),
        tm({}, ig, { values: "0;0;1;1;0;0;" });
      var cg,
        hg = new ((function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.definitions = {});
          }
          var e;
          return (
            (e = [
              {
                key: "add",
                value: function () {
                  for (
                    var t = this, e = arguments.length, n = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  var s = n.reduce(this._pullDefinitions, {});
                  Object.keys(s).forEach(function (e) {
                    (t.definitions[e] = tm({}, t.definitions[e] || {}, s[e])),
                      Zm(e, s[e]),
                      Jm();
                  });
                },
              },
              {
                key: "reset",
                value: function () {
                  this.definitions = {};
                },
              },
              {
                key: "_pullDefinitions",
                value: function (t, e) {
                  var n = e.prefix && e.iconName && e.icon ? { 0: e } : e;
                  return (
                    Object.keys(n).map(function (e) {
                      var r = n[e],
                        s = r.prefix,
                        i = r.iconName,
                        o = r.icon;
                      t[s] || (t[s] = {}), (t[s][i] = o);
                    }),
                    t
                  );
                },
              },
            ]) &&
              (function (t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              })(t.prototype, e),
            t
          );
        })())(),
        dg = !1,
        pg =
          ((cg = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.transform,
              r = void 0 === n ? Lm : n,
              s = e.symbol,
              i = void 0 !== s && s,
              o = e.mask,
              a = void 0 === o ? null : o,
              l = e.maskId,
              u = void 0 === l ? null : l,
              c = e.title,
              h = void 0 === c ? null : c,
              d = e.titleId,
              p = void 0 === d ? null : d,
              f = e.classes,
              m = void 0 === f ? [] : f,
              g = e.attributes,
              y = void 0 === g ? {} : g,
              w = e.styles,
              v = void 0 === w ? {} : w;
            if (t) {
              var b = t.prefix,
                _ = t.iconName,
                C = t.icon;
              return lg(tm({ type: "icon" }, t), function () {
                return (
                  ag(),
                  mm.autoA11y &&
                    (h
                      ? (y["aria-labelledby"] = ""
                          .concat(mm.replacementClass, "-title-")
                          .concat(p || Um()))
                      : ((y["aria-hidden"] = "true"), (y.focusable = "false"))),
                  Km({
                    icons: {
                      main: og(C),
                      mask: a
                        ? og(a.icon)
                        : { found: !1, width: null, height: null, icon: {} },
                    },
                    prefix: b,
                    iconName: _,
                    transform: tm({}, Lm, r),
                    symbol: i,
                    title: h,
                    maskId: u,
                    titleId: p,
                    extra: { attributes: y, styles: v, classes: m },
                  })
                );
              });
            }
          }),
          function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = (t || {}).icon ? t : ug(t || {}),
              r = e.mask;
            return (
              r && (r = (r || {}).icon ? r : ug(r || {})),
              cg(n, tm({}, e, { mask: r }))
            );
          });
      const fg = ["*"];
      let mg = (() => {
          class t {
            constructor() {
              (this.defaultPrefix = "fas"),
                (this.fallbackIcon = null),
                (this.globalLibrary = !1);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = ct({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })(),
        gg = (() => {
          class t {
            constructor() {
              this.definitions = {};
            }
            addIcons(...t) {
              for (const e of t)
                e.prefix in this.definitions ||
                  (this.definitions[e.prefix] = {}),
                  (this.definitions[e.prefix][e.iconName] = e);
            }
            addIconPacks(...t) {
              for (const e of t) {
                const t = Object.keys(e).map((t) => e[t]);
                this.addIcons(...t);
              }
            }
            getIconDefinition(t, e) {
              return t in this.definitions && e in this.definitions[t]
                ? this.definitions[t][e]
                : null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = ct({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })();
      const yg = (t) => {
        const e = {
          "fa-spin": t.spin,
          "fa-pulse": t.pulse,
          "fa-fw": t.fixedWidth,
          "fa-border": t.border,
          "fa-inverse": t.inverse,
          "fa-layers-counter": t.counter,
          "fa-flip-horizontal": "horizontal" === t.flip || "both" === t.flip,
          "fa-flip-vertical": "vertical" === t.flip || "both" === t.flip,
          [`fa-${t.size}`]: null !== t.size,
          [`fa-rotate-${t.rotate}`]: null !== t.rotate,
          [`fa-pull-${t.pull}`]: null !== t.pull,
          [`fa-stack-${t.stackItemSize}`]: null != t.stackItemSize,
        };
        return Object.keys(e)
          .map((t) => (e[t] ? t : null))
          .filter((t) => t);
      };
      let wg = (() => {
          class t {
            constructor() {
              this.stackItemSize = "1x";
            }
            ngOnChanges(t) {
              if ("size" in t)
                throw new Error(
                  'fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.'
                );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [
                ["fa-icon", "stackItemSize", ""],
                ["fa-duotone-icon", "stackItemSize", ""],
              ],
              inputs: { stackItemSize: "stackItemSize", size: "size" },
              features: [ae],
            })),
            t
          );
        })(),
        vg = (() => {
          class t {
            constructor(t, e) {
              (this.renderer = t), (this.elementRef = e);
            }
            ngOnInit() {
              this.renderer.addClass(this.elementRef.nativeElement, "fa-stack");
            }
            ngOnChanges(t) {
              "size" in t &&
                (null != t.size.currentValue &&
                  this.renderer.addClass(
                    this.elementRef.nativeElement,
                    `fa-${t.size.currentValue}`
                  ),
                null != t.size.previousValue &&
                  this.renderer.removeClass(
                    this.elementRef.nativeElement,
                    `fa-${t.size.previousValue}`
                  ));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(bo(ba), bo(ya));
            }),
            (t.ɵcmp = Ut({
              type: t,
              selectors: [["fa-stack"]],
              inputs: { size: "size" },
              features: [ae],
              ngContentSelectors: fg,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (Ro(), No(0));
              },
              encapsulation: 2,
            })),
            t
          );
        })(),
        bg = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.sanitizer = t),
                (this.config = e),
                (this.iconLibrary = n),
                (this.stackItem = r),
                (this.classes = []),
                null != s &&
                  null == r &&
                  console.error(
                    'FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.'
                  );
            }
            ngOnChanges(t) {
              if (null == this.icon && null == this.config.fallbackIcon)
                return (() => {
                  throw new Error(
                    "Property `icon` is required for `fa-icon`/`fa-duotone-icon` components."
                  );
                })();
              let e = null;
              if (
                ((e = null == this.icon ? this.config.fallbackIcon : this.icon),
                t)
              ) {
                const t = this.findIconDefinition(e);
                if (null != t) {
                  const e = this.buildParams();
                  this.renderIcon(t, e);
                }
              }
            }
            render() {
              this.ngOnChanges({});
            }
            findIconDefinition(t) {
              const e = ((t, e) => {
                return void 0 !== (n = t).prefix && void 0 !== n.iconName
                  ? t
                  : Array.isArray(t) && 2 === t.length
                  ? { prefix: t[0], iconName: t[1] }
                  : "string" == typeof t
                  ? { prefix: e, iconName: t }
                  : void 0;
                var n;
              })(t, this.config.defaultPrefix);
              if ("icon" in e) return e;
              const n = this.iconLibrary.getIconDefinition(
                e.prefix,
                e.iconName
              );
              if (null != n) return n;
              const r = ug(e);
              if (null != r) {
                const t =
                  "Global icon library is deprecated. Consult https://github.com/FortAwesome/angular-fontawesome/blob/master/UPGRADING.md for the migration instructions.";
                if ("unset" === this.config.globalLibrary)
                  console.error("FontAwesome: " + t);
                else if (!this.config.globalLibrary) throw new Error(t);
                return r;
              }
              return (
                ((t) => {
                  throw new Error(
                    `Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`
                  );
                })(e),
                null
              );
            }
            buildParams() {
              const t = {
                  flip: this.flip,
                  spin: this.spin,
                  pulse: this.pulse,
                  border: this.border,
                  inverse: this.inverse,
                  size: this.size || null,
                  pull: this.pull || null,
                  rotate: this.rotate || null,
                  fixedWidth:
                    "boolean" == typeof this.fixedWidth
                      ? this.fixedWidth
                      : this.config.fixedWidth,
                  stackItemSize:
                    null != this.stackItem
                      ? this.stackItem.stackItemSize
                      : null,
                },
                e =
                  "string" == typeof this.transform
                    ? (function (t) {
                        var e = {
                          size: 16,
                          x: 0,
                          y: 0,
                          flipX: !1,
                          flipY: !1,
                          rotate: 0,
                        };
                        return t
                          ? t
                              .toLowerCase()
                              .split(" ")
                              .reduce(function (t, e) {
                                var n = e.toLowerCase().split("-"),
                                  r = n[0],
                                  s = n.slice(1).join("-");
                                if (r && "h" === s) return (t.flipX = !0), t;
                                if (r && "v" === s) return (t.flipY = !0), t;
                                if (((s = parseFloat(s)), isNaN(s))) return t;
                                switch (r) {
                                  case "grow":
                                    t.size = t.size + s;
                                    break;
                                  case "shrink":
                                    t.size = t.size - s;
                                    break;
                                  case "left":
                                    t.x = t.x - s;
                                    break;
                                  case "right":
                                    t.x = t.x + s;
                                    break;
                                  case "up":
                                    t.y = t.y - s;
                                    break;
                                  case "down":
                                    t.y = t.y + s;
                                    break;
                                  case "rotate":
                                    t.rotate = t.rotate + s;
                                }
                                return t;
                              }, e)
                          : e;
                      })(this.transform)
                    : this.transform;
              return {
                title: this.title,
                transform: e,
                classes: [...yg(t), ...this.classes],
                mask:
                  null != this.mask ? this.findIconDefinition(this.mask) : null,
                styles: null != this.styles ? this.styles : {},
                symbol: this.symbol,
                attributes: { role: this.a11yRole },
              };
            }
            renderIcon(t, e) {
              const n = pg(t, e);
              this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(
                n.html.join("\n")
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(bo(Zc), bo(mg), bo(gg), bo(wg, 8), bo(vg, 8));
            }),
            (t.ɵcmp = Ut({
              type: t,
              selectors: [["fa-icon"]],
              hostAttrs: [1, "ng-fa-icon"],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t &&
                  (Ko("innerHTML", e.renderedIconHTML, Gr),
                  go("title", e.title));
              },
              inputs: {
                classes: "classes",
                icon: "icon",
                title: "title",
                spin: "spin",
                pulse: "pulse",
                mask: "mask",
                styles: "styles",
                flip: "flip",
                size: "size",
                pull: "pull",
                border: "border",
                inverse: "inverse",
                symbol: "symbol",
                rotate: "rotate",
                fixedWidth: "fixedWidth",
                transform: "transform",
                a11yRole: "a11yRole",
              },
              features: [ae],
              decls: 0,
              vars: 0,
              template: function (t, e) {},
              encapsulation: 2,
            })),
            t
          );
        })(),
        _g = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({})),
            t
          );
        })();
      var Cg = n(501),
        Eg = n.n(Cg);
      function Sg(t, e) {
        return new w((n) => {
          const r = t.length;
          if (0 === r) return void n.complete();
          const s = new Array(r);
          let i = 0,
            o = 0;
          for (let a = 0; a < r; a++) {
            const l = M(t[a]);
            let u = !1;
            n.add(
              l.subscribe({
                next: (t) => {
                  u || ((u = !0), o++), (s[a] = t);
                },
                error: (t) => n.error(t),
                complete: () => {
                  i++,
                    (i !== r && u) ||
                      (o === r &&
                        n.next(
                          e ? e.reduce((t, e, n) => ((t[e] = s[n]), t), {}) : s
                        ),
                      n.complete());
                },
              })
            );
          }
        });
      }
      let xg = (() => {
          class t {
            constructor(t, e) {
              (this._renderer = t),
                (this._elementRef = e),
                (this.onChange = (t) => {}),
                (this.onTouched = () => {});
            }
            setProperty(t, e) {
              this._renderer.setProperty(this._elementRef.nativeElement, t, e);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            registerOnChange(t) {
              this.onChange = t;
            }
            setDisabledState(t) {
              this.setProperty("disabled", t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(bo(ba), bo(ya));
            }),
            (t.ɵdir = Qt({ type: t })),
            t
          );
        })(),
        Ag = (() => {
          class t extends xg {}
          return (
            (t.ɵfac = (function () {
              let e;
              return function (n) {
                return (e || (e = Vn(t)))(n || t);
              };
            })()),
            (t.ɵdir = Qt({ type: t, features: [no] })),
            t
          );
        })();
      const Dg = new zn("NgValueAccessor"),
        kg = { provide: Dg, useExisting: rt(() => Og), multi: !0 },
        Tg = new zn("CompositionEventMode");
      let Og = (() => {
        class t extends xg {
          constructor(t, e, n) {
            super(t, e),
              (this._compositionMode = n),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function () {
                  const t = Lu() ? Lu().getUserAgent() : "";
                  return /android (\d+)/.test(t.toLowerCase());
                })());
          }
          writeValue(t) {
            this.setProperty("value", null == t ? "" : t);
          }
          _handleInput(t) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(t);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(t) {
            (this._composing = !1), this._compositionMode && this.onChange(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bo(ba), bo(ya), bo(Tg, 8));
          }),
          (t.ɵdir = Qt({
            type: t,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                To("input", function (t) {
                  return e._handleInput(t.target.value);
                })("blur", function () {
                  return e.onTouched();
                })("compositionstart", function () {
                  return e._compositionStart();
                })("compositionend", function (t) {
                  return e._compositionEnd(t.target.value);
                });
            },
            features: [ca([kg]), no],
          })),
          t
        );
      })();
      function Fg(t) {
        return null == t || 0 === t.length;
      }
      function Pg(t) {
        return null != t && "number" == typeof t.length;
      }
      const Ig = new zn("NgValidators"),
        Rg = new zn("NgAsyncValidators"),
        Ng =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class Mg {
        static min(t) {
          return (function (t) {
            return (e) => {
              if (Fg(e.value) || Fg(t)) return null;
              const n = parseFloat(e.value);
              return !isNaN(n) && n < t
                ? { min: { min: t, actual: e.value } }
                : null;
            };
          })(t);
        }
        static max(t) {
          return (function (t) {
            return (e) => {
              if (Fg(e.value) || Fg(t)) return null;
              const n = parseFloat(e.value);
              return !isNaN(n) && n > t
                ? { max: { max: t, actual: e.value } }
                : null;
            };
          })(t);
        }
        static required(t) {
          return (function (t) {
            return Fg(t.value) ? { required: !0 } : null;
          })(t);
        }
        static requiredTrue(t) {
          return (function (t) {
            return !0 === t.value ? null : { required: !0 };
          })(t);
        }
        static email(t) {
          return (function (t) {
            return Fg(t.value) || Ng.test(t.value) ? null : { email: !0 };
          })(t);
        }
        static minLength(t) {
          return (function (t) {
            return (e) =>
              Fg(e.value) || !Pg(e.value)
                ? null
                : e.value.length < t
                ? {
                    minlength: {
                      requiredLength: t,
                      actualLength: e.value.length,
                    },
                  }
                : null;
          })(t);
        }
        static maxLength(t) {
          return (function (t) {
            return (e) =>
              Pg(e.value) && e.value.length > t
                ? {
                    maxlength: {
                      requiredLength: t,
                      actualLength: e.value.length,
                    },
                  }
                : null;
          })(t);
        }
        static pattern(t) {
          return (function (t) {
            if (!t) return jg;
            let e, n;
            return (
              "string" == typeof t
                ? ((n = ""),
                  "^" !== t.charAt(0) && (n += "^"),
                  (n += t),
                  "$" !== t.charAt(t.length - 1) && (n += "$"),
                  (e = new RegExp(n)))
                : ((n = t.toString()), (e = t)),
              (t) => {
                if (Fg(t.value)) return null;
                const r = t.value;
                return e.test(r)
                  ? null
                  : { pattern: { requiredPattern: n, actualValue: r } };
              }
            );
          })(t);
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          return Hg(t);
        }
        static composeAsync(t) {
          return qg(t);
        }
      }
      function jg(t) {
        return null;
      }
      function Vg(t) {
        return null != t;
      }
      function Bg(t) {
        const e = Do(t) ? M(t) : t;
        return ko(e), e;
      }
      function Lg(t) {
        let e = {};
        return (
          t.forEach((t) => {
            e = null != t ? Object.assign(Object.assign({}, e), t) : e;
          }),
          0 === Object.keys(e).length ? null : e
        );
      }
      function Ug(t, e) {
        return e.map((e) => e(t));
      }
      function zg(t) {
        return t.map((t) =>
          (function (t) {
            return !t.validate;
          })(t)
            ? t
            : (e) => t.validate(e)
        );
      }
      function Hg(t) {
        if (!t) return null;
        const e = t.filter(Vg);
        return 0 == e.length
          ? null
          : function (t) {
              return Lg(Ug(t, e));
            };
      }
      function $g(t) {
        return null != t ? Hg(zg(t)) : null;
      }
      function qg(t) {
        if (!t) return null;
        const e = t.filter(Vg);
        return 0 == e.length
          ? null
          : function (t) {
              return (function (...t) {
                if (1 === t.length) {
                  const e = t[0];
                  if (l(e)) return Sg(e, null);
                  if (u(e) && Object.getPrototypeOf(e) === Object.prototype) {
                    const t = Object.keys(e);
                    return Sg(
                      t.map((t) => e[t]),
                      t
                    );
                  }
                }
                if ("function" == typeof t[t.length - 1]) {
                  const e = t.pop();
                  return Sg(
                    (t = 1 === t.length && l(t[0]) ? t[0] : t),
                    null
                  ).pipe(A((t) => e(...t)));
                }
                return Sg(t, null);
              })(Ug(t, e).map(Bg)).pipe(A(Lg));
            };
      }
      function Wg(t) {
        return null != t ? qg(zg(t)) : null;
      }
      function Qg(t, e) {
        return null === t ? [e] : Array.isArray(t) ? [...t, e] : [t, e];
      }
      function Kg(t) {
        return t._rawValidators;
      }
      function Gg(t) {
        return t._rawAsyncValidators;
      }
      let Zg = (() => {
          class t {
            constructor() {
              (this._rawValidators = []),
                (this._rawAsyncValidators = []),
                (this._onDestroyCallbacks = []);
            }
            get value() {
              return this.control ? this.control.value : null;
            }
            get valid() {
              return this.control ? this.control.valid : null;
            }
            get invalid() {
              return this.control ? this.control.invalid : null;
            }
            get pending() {
              return this.control ? this.control.pending : null;
            }
            get disabled() {
              return this.control ? this.control.disabled : null;
            }
            get enabled() {
              return this.control ? this.control.enabled : null;
            }
            get errors() {
              return this.control ? this.control.errors : null;
            }
            get pristine() {
              return this.control ? this.control.pristine : null;
            }
            get dirty() {
              return this.control ? this.control.dirty : null;
            }
            get touched() {
              return this.control ? this.control.touched : null;
            }
            get status() {
              return this.control ? this.control.status : null;
            }
            get untouched() {
              return this.control ? this.control.untouched : null;
            }
            get statusChanges() {
              return this.control ? this.control.statusChanges : null;
            }
            get valueChanges() {
              return this.control ? this.control.valueChanges : null;
            }
            get path() {
              return null;
            }
            _setValidators(t) {
              (this._rawValidators = t || []),
                (this._composedValidatorFn = $g(this._rawValidators));
            }
            _setAsyncValidators(t) {
              (this._rawAsyncValidators = t || []),
                (this._composedAsyncValidatorFn = Wg(this._rawAsyncValidators));
            }
            get validator() {
              return this._composedValidatorFn || null;
            }
            get asyncValidator() {
              return this._composedAsyncValidatorFn || null;
            }
            _registerOnDestroy(t) {
              this._onDestroyCallbacks.push(t);
            }
            _invokeOnDestroyCallbacks() {
              this._onDestroyCallbacks.forEach((t) => t()),
                (this._onDestroyCallbacks = []);
            }
            reset(t) {
              this.control && this.control.reset(t);
            }
            hasError(t, e) {
              return !!this.control && this.control.hasError(t, e);
            }
            getError(t, e) {
              return this.control ? this.control.getError(t, e) : null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = Qt({ type: t })),
            t
          );
        })(),
        Yg = (() => {
          class t extends Zg {
            get formDirective() {
              return null;
            }
            get path() {
              return null;
            }
          }
          return (
            (t.ɵfac = (function () {
              let e;
              return function (n) {
                return (e || (e = Vn(t)))(n || t);
              };
            })()),
            (t.ɵdir = Qt({ type: t, features: [no] })),
            t
          );
        })();
      class Xg extends Zg {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class Jg {
        constructor(t) {
          this._cd = t;
        }
        is(t) {
          var e, n;
          return !!(null ===
            (n =
              null === (e = this._cd) || void 0 === e ? void 0 : e.control) ||
          void 0 === n
            ? void 0
            : n[t]);
        }
      }
      let ty = (() => {
          class t extends Jg {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(bo(Xg, 2));
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""],
              ],
              hostVars: 14,
              hostBindings: function (t, e) {
                2 & t &&
                  Lo("ng-untouched", e.is("untouched"))(
                    "ng-touched",
                    e.is("touched")
                  )("ng-pristine", e.is("pristine"))("ng-dirty", e.is("dirty"))(
                    "ng-valid",
                    e.is("valid")
                  )("ng-invalid", e.is("invalid"))(
                    "ng-pending",
                    e.is("pending")
                  );
              },
              features: [no],
            })),
            t
          );
        })(),
        ey = (() => {
          class t extends Jg {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(bo(Yg, 10));
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""],
              ],
              hostVars: 14,
              hostBindings: function (t, e) {
                2 & t &&
                  Lo("ng-untouched", e.is("untouched"))(
                    "ng-touched",
                    e.is("touched")
                  )("ng-pristine", e.is("pristine"))("ng-dirty", e.is("dirty"))(
                    "ng-valid",
                    e.is("valid")
                  )("ng-invalid", e.is("invalid"))(
                    "ng-pending",
                    e.is("pending")
                  );
              },
              features: [no],
            })),
            t
          );
        })();
      function ny(t, e) {
        return [...e.path, t];
      }
      function ry(t, e) {
        oy(t, e),
          e.valueAccessor.writeValue(t.value),
          (function (t, e) {
            e.valueAccessor.registerOnChange((n) => {
              (t._pendingValue = n),
                (t._pendingChange = !0),
                (t._pendingDirty = !0),
                "change" === t.updateOn && ly(t, e);
            });
          })(t, e),
          (function (t, e) {
            const n = (t, n) => {
              e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
            };
            t.registerOnChange(n),
              e._registerOnDestroy(() => {
                t._unregisterOnChange(n);
              });
          })(t, e),
          (function (t, e) {
            e.valueAccessor.registerOnTouched(() => {
              (t._pendingTouched = !0),
                "blur" === t.updateOn && t._pendingChange && ly(t, e),
                "submit" !== t.updateOn && t.markAsTouched();
            });
          })(t, e),
          (function (t, e) {
            if (e.valueAccessor.setDisabledState) {
              const n = (t) => {
                e.valueAccessor.setDisabledState(t);
              };
              t.registerOnDisabledChange(n),
                e._registerOnDestroy(() => {
                  t._unregisterOnDisabledChange(n);
                });
            }
          })(t, e);
      }
      function sy(t, e, n = !0) {
        const r = () => {};
        e.valueAccessor &&
          (e.valueAccessor.registerOnChange(r),
          e.valueAccessor.registerOnTouched(r)),
          ay(t, e),
          t &&
            (e._invokeOnDestroyCallbacks(),
            t._registerOnCollectionChange(() => {}));
      }
      function iy(t, e) {
        t.forEach((t) => {
          t.registerOnValidatorChange && t.registerOnValidatorChange(e);
        });
      }
      function oy(t, e) {
        const n = Kg(t);
        null !== e.validator
          ? t.setValidators(Qg(n, e.validator))
          : "function" == typeof n && t.setValidators([n]);
        const r = Gg(t);
        null !== e.asyncValidator
          ? t.setAsyncValidators(Qg(r, e.asyncValidator))
          : "function" == typeof r && t.setAsyncValidators([r]);
        const s = () => t.updateValueAndValidity();
        iy(e._rawValidators, s), iy(e._rawAsyncValidators, s);
      }
      function ay(t, e) {
        let n = !1;
        if (null !== t) {
          if (null !== e.validator) {
            const r = Kg(t);
            if (Array.isArray(r) && r.length > 0) {
              const s = r.filter((t) => t !== e.validator);
              s.length !== r.length && ((n = !0), t.setValidators(s));
            }
          }
          if (null !== e.asyncValidator) {
            const r = Gg(t);
            if (Array.isArray(r) && r.length > 0) {
              const s = r.filter((t) => t !== e.asyncValidator);
              s.length !== r.length && ((n = !0), t.setAsyncValidators(s));
            }
          }
        }
        const r = () => {};
        return iy(e._rawValidators, r), iy(e._rawAsyncValidators, r), n;
      }
      function ly(t, e) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function uy(t, e) {
        oy(t, e);
      }
      function cy(t, e) {
        if (!t.hasOwnProperty("model")) return !1;
        const n = t.model;
        return !!n.isFirstChange() || !Object.is(e, n.currentValue);
      }
      function hy(t, e) {
        t._syncPendingControls(),
          e.forEach((t) => {
            const e = t.control;
            "submit" === e.updateOn &&
              e._pendingChange &&
              (t.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
          });
      }
      function dy(t, e) {
        if (!e) return null;
        let n, r, s;
        return (
          Array.isArray(e),
          e.forEach((t) => {
            t.constructor === Og
              ? (n = t)
              : Object.getPrototypeOf(t.constructor) === Ag
              ? (r = t)
              : (s = t);
          }),
          s || r || n || null
        );
      }
      function py(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      const fy = "VALID",
        my = "INVALID",
        gy = "PENDING",
        yy = "DISABLED";
      function wy(t) {
        return (Cy(t) ? t.validators : t) || null;
      }
      function vy(t) {
        return Array.isArray(t) ? $g(t) : t || null;
      }
      function by(t, e) {
        return (Cy(e) ? e.asyncValidators : t) || null;
      }
      function _y(t) {
        return Array.isArray(t) ? Wg(t) : t || null;
      }
      function Cy(t) {
        return null != t && !Array.isArray(t) && "object" == typeof t;
      }
      class Ey {
        constructor(t, e) {
          (this._hasOwnPendingAsyncValidator = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = t),
            (this._rawAsyncValidators = e),
            (this._composedValidatorFn = vy(this._rawValidators)),
            (this._composedAsyncValidatorFn = _y(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(t) {
          this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === fy;
        }
        get invalid() {
          return this.status === my;
        }
        get pending() {
          return this.status == gy;
        }
        get disabled() {
          return this.status === yy;
        }
        get enabled() {
          return this.status !== yy;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(t) {
          (this._rawValidators = t), (this._composedValidatorFn = vy(t));
        }
        setAsyncValidators(t) {
          (this._rawAsyncValidators = t),
            (this._composedAsyncValidatorFn = _y(t));
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0),
            this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((t) => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1),
            this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = gy),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = yy),
            (this.errors = null),
            this._forEachChild((e) => {
              e.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = fy),
            this._forEachChild((e) => {
              e.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            }),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status !== fy && this.status !== gy) ||
                this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild((e) => e._updateTreeValidity(t)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? yy : fy;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            (this.status = gy), (this._hasOwnPendingAsyncValidator = !0);
            const e = Bg(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe((e) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(e, { emitEvent: t });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function (t, e, n) {
            if (null == e) return null;
            if (
              (Array.isArray(e) || (e = e.split(".")),
              Array.isArray(e) && 0 === e.length)
            )
              return null;
            let r = t;
            return (
              e.forEach((t) => {
                r =
                  r instanceof xy
                    ? r.controls.hasOwnProperty(t)
                      ? r.controls[t]
                      : null
                    : (r instanceof Ay && r.at(t)) || null;
              }),
              r
            );
          })(this, t);
        }
        getError(t, e) {
          const n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new xl()), (this.statusChanges = new xl());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? yy
            : this.errors
            ? my
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(gy)
            ? gy
            : this._anyControlsHaveStatus(my)
            ? my
            : fy;
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls((e) => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((t) => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return (
            "object" == typeof t &&
            null !== t &&
            2 === Object.keys(t).length &&
            "value" in t &&
            "disabled" in t
          );
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          Cy(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return (
            !t &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class Sy extends Ey {
        constructor(t = null, e, n) {
          super(wy(e), by(n, e)),
            (this._onChange = []),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach((t) =>
                t(this.value, !1 !== e.emitViewToModelChange)
              ),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = null, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _unregisterOnChange(t) {
          py(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          py(this._onDisabledChange, t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            "submit" !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class xy extends Ey {
        constructor(t, e, n) {
          super(wy(e), by(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e),
              e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange),
              e);
        }
        addControl(t, e, n = {}) {
          this.registerControl(t, e),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(t, e = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity({ emitEvent: e.emitEvent }),
            this._onCollectionChange();
        }
        setControl(t, e, n = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            Object.keys(t).forEach((n) => {
              this._throwIfControlMissing(n),
                this.controls[n].setValue(t[n], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          null != t &&
            (Object.keys(t).forEach((n) => {
              this.controls[n] &&
                this.controls[n].patchValue(t[n], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e));
        }
        reset(t = {}, e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => (
              (t[n] = e instanceof Sy ? e.value : e.getRawValue()), t
            )
          );
        }
        _syncPendingControls() {
          let t = this._reduceChildren(
            !1,
            (t, e) => !!e._syncPendingControls() || t
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[t])
            throw new Error(`Cannot find form control with name: ${t}.`);
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach((e) => {
            const n = this.controls[e];
            n && t(n, e);
          });
        }
        _setUpControls() {
          this._forEachChild((t) => {
            t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          for (const e of Object.keys(this.controls)) {
            const n = this.controls[e];
            if (this.contains(e) && t(n)) return !0;
          }
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t)
          );
        }
        _reduceChildren(t, e) {
          let n = t;
          return (
            this._forEachChild((t, r) => {
              n = e(n, t, r);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls))
            if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control with name: '${n}'.`
              );
          });
        }
      }
      class Ay extends Ey {
        constructor(t, e, n) {
          super(wy(e), by(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(t) {
          return this.controls[t];
        }
        push(t, e = {}) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity({ emitEvent: e.emitEvent }),
            this._onCollectionChange();
        }
        insert(t, e, n = {}) {
          this.controls.splice(t, 0, e),
            this._registerControl(e),
            this.updateValueAndValidity({ emitEvent: n.emitEvent });
        }
        removeAt(t, e = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity({ emitEvent: e.emitEvent });
        }
        setControl(t, e, n = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            t.forEach((t, n) => {
              this._throwIfControlMissing(n),
                this.at(n).setValue(t, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          null != t &&
            (t.forEach((t, n) => {
              this.at(n) &&
                this.at(n).patchValue(t, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e));
        }
        reset(t = [], e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map((t) =>
            t instanceof Sy ? t.value : t.getRawValue()
          );
        }
        clear(t = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: t.emitEvent }));
        }
        _syncPendingControls() {
          let t = this.controls.reduce(
            (t, e) => !!e._syncPendingControls() || t,
            !1
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(t))
            throw new Error(`Cannot find form control at index ${t}`);
        }
        _forEachChild(t) {
          this.controls.forEach((e, n) => {
            t(e, n);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((t) => t.enabled || this.disabled)
            .map((t) => t.value);
        }
        _anyControls(t) {
          return this.controls.some((e) => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild((t) => this._registerControl(t));
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control at index: ${n}.`
              );
          });
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const Dy = { provide: Yg, useExisting: rt(() => Ty) },
        ky = (() => Promise.resolve(null))();
      let Ty = (() => {
        class t extends Yg {
          constructor(t, e) {
            super(),
              (this.submitted = !1),
              (this._directives = []),
              (this.ngSubmit = new xl()),
              (this.form = new xy({}, $g(t), Wg(e)));
          }
          ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          get controls() {
            return this.form.controls;
          }
          addControl(t) {
            ky.then(() => {
              const e = this._findContainer(t.path);
              (t.control = e.registerControl(t.name, t.control)),
                ry(t.control, t),
                t.control.updateValueAndValidity({ emitEvent: !1 }),
                this._directives.push(t);
            });
          }
          getControl(t) {
            return this.form.get(t.path);
          }
          removeControl(t) {
            ky.then(() => {
              const e = this._findContainer(t.path);
              e && e.removeControl(t.name), py(this._directives, t);
            });
          }
          addFormGroup(t) {
            ky.then(() => {
              const e = this._findContainer(t.path),
                n = new xy({});
              uy(n, t),
                e.registerControl(t.name, n),
                n.updateValueAndValidity({ emitEvent: !1 });
            });
          }
          removeFormGroup(t) {
            ky.then(() => {
              const e = this._findContainer(t.path);
              e && e.removeControl(t.name);
            });
          }
          getFormGroup(t) {
            return this.form.get(t.path);
          }
          updateModel(t, e) {
            ky.then(() => {
              this.form.get(t.path).setValue(e);
            });
          }
          setValue(t) {
            this.control.setValue(t);
          }
          onSubmit(t) {
            return (
              (this.submitted = !0),
              hy(this.form, this._directives),
              this.ngSubmit.emit(t),
              !1
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(t) {
            this.form.reset(t), (this.submitted = !1);
          }
          _setUpdateStrategy() {
            this.options &&
              null != this.options.updateOn &&
              (this.form._updateOn = this.options.updateOn);
          }
          _findContainer(t) {
            return t.pop(), t.length ? this.form.get(t) : this.form;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bo(Ig, 10), bo(Rg, 10));
          }),
          (t.ɵdir = Qt({
            type: t,
            selectors: [
              ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
              ["ng-form"],
              ["", "ngForm", ""],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                To("submit", function (t) {
                  return e.onSubmit(t);
                })("reset", function () {
                  return e.onReset();
                });
            },
            inputs: { options: ["ngFormOptions", "options"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [ca([Dy]), no],
          })),
          t
        );
      })();
      const Oy = { provide: Xg, useExisting: rt(() => Py) },
        Fy = (() => Promise.resolve(null))();
      let Py = (() => {
          class t extends Xg {
            constructor(t, e, n, r) {
              super(),
                (this.control = new Sy()),
                (this._registered = !1),
                (this.update = new xl()),
                (this._parent = t),
                this._setValidators(e),
                this._setAsyncValidators(n),
                (this.valueAccessor = dy(0, r));
            }
            ngOnChanges(t) {
              this._checkForErrors(),
                this._registered || this._setUpControl(),
                "isDisabled" in t && this._updateDisabled(t),
                cy(t, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._parent ? ny(this.name, this._parent) : [this.name];
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(t) {
              (this.viewModel = t), this.update.emit(t);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone()
                  ? this._setUpStandalone()
                  : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return (
                !this._parent || !(!this.options || !this.options.standalone)
              );
            }
            _setUpStandalone() {
              ry(this.control, this),
                this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone();
            }
            _updateValue(t) {
              Fy.then(() => {
                this.control.setValue(t, { emitViewToModelChange: !1 });
              });
            }
            _updateDisabled(t) {
              const e = t.isDisabled.currentValue,
                n = "" === e || (e && "false" !== e);
              Fy.then(() => {
                n && !this.control.disabled
                  ? this.control.disable()
                  : !n && this.control.disabled && this.control.enable();
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                bo(Yg, 9),
                bo(Ig, 10),
                bo(Rg, 10),
                bo(Dg, 10)
              );
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [
                [
                  "",
                  "ngModel",
                  "",
                  3,
                  "formControlName",
                  "",
                  3,
                  "formControl",
                  "",
                ],
              ],
              inputs: {
                name: "name",
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
                options: ["ngModelOptions", "options"],
              },
              outputs: { update: "ngModelChange" },
              exportAs: ["ngModel"],
              features: [ca([Oy]), no, ae],
            })),
            t
          );
        })(),
        Iy = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
              ],
              hostAttrs: ["novalidate", ""],
            })),
            t
          );
        })(),
        Ry = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({})),
            t
          );
        })();
      const Ny = new zn("NgModelWithFormControlWarning"),
        My = { provide: Yg, useExisting: rt(() => jy) };
      let jy = (() => {
        class t extends Yg {
          constructor(t, e) {
            super(),
              (this.validators = t),
              (this.asyncValidators = e),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new xl()),
              this._setValidators(t),
              this._setAsyncValidators(e);
          }
          ngOnChanges(t) {
            this._checkFormPresent(),
              t.hasOwnProperty("form") &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (ay(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(t) {
            const e = this.form.get(t.path);
            return (
              ry(e, t),
              e.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(t),
              e
            );
          }
          getControl(t) {
            return this.form.get(t.path);
          }
          removeControl(t) {
            sy(t.control || null, t, !1), py(this.directives, t);
          }
          addFormGroup(t) {
            this._setUpFormContainer(t);
          }
          removeFormGroup(t) {
            this._cleanUpFormContainer(t);
          }
          getFormGroup(t) {
            return this.form.get(t.path);
          }
          addFormArray(t) {
            this._setUpFormContainer(t);
          }
          removeFormArray(t) {
            this._cleanUpFormContainer(t);
          }
          getFormArray(t) {
            return this.form.get(t.path);
          }
          updateModel(t, e) {
            this.form.get(t.path).setValue(e);
          }
          onSubmit(t) {
            return (
              (this.submitted = !0),
              hy(this.form, this.directives),
              this.ngSubmit.emit(t),
              !1
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(t) {
            this.form.reset(t), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((t) => {
              const e = t.control,
                n = this.form.get(t.path);
              e !== n &&
                (sy(e || null, t),
                n instanceof Sy && (ry(n, t), (t.control = n)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(t) {
            const e = this.form.get(t.path);
            uy(e, t), e.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(t) {
            if (this.form) {
              const e = this.form.get(t.path);
              e &&
                (function (t, e) {
                  return ay(t, e);
                })(e, t) &&
                e.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            oy(this.form, this), this._oldForm && ay(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bo(Ig, 10), bo(Rg, 10));
          }),
          (t.ɵdir = Qt({
            type: t,
            selectors: [["", "formGroup", ""]],
            hostBindings: function (t, e) {
              1 & t &&
                To("submit", function (t) {
                  return e.onSubmit(t);
                })("reset", function () {
                  return e.onReset();
                });
            },
            inputs: { form: ["formGroup", "form"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [ca([My]), no, ae],
          })),
          t
        );
      })();
      const Vy = { provide: Xg, useExisting: rt(() => By) };
      let By = (() => {
        class t extends Xg {
          constructor(t, e, n, r, s) {
            super(),
              (this._ngModelWarningConfig = s),
              (this._added = !1),
              (this.update = new xl()),
              (this._ngModelWarningSent = !1),
              (this._parent = t),
              this._setValidators(e),
              this._setAsyncValidators(n),
              (this.valueAccessor = dy(0, r));
          }
          set isDisabled(t) {}
          ngOnChanges(t) {
            this._added || this._setUpControl(),
              cy(t, this.viewModel) &&
                ((this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(t) {
            (this.viewModel = t), this.update.emit(t);
          }
          get path() {
            return ny(
              null == this.name ? this.name : this.name.toString(),
              this._parent
            );
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          _checkParentType() {}
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              this.control.disabled &&
                this.valueAccessor.setDisabledState &&
                this.valueAccessor.setDisabledState(!0),
              (this._added = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              bo(Yg, 13),
              bo(Ig, 10),
              bo(Rg, 10),
              bo(Dg, 10),
              bo(Ny, 8)
            );
          }),
          (t.ɵdir = Qt({
            type: t,
            selectors: [["", "formControlName", ""]],
            inputs: {
              isDisabled: ["disabled", "isDisabled"],
              name: ["formControlName", "name"],
              model: ["ngModel", "model"],
            },
            outputs: { update: "ngModelChange" },
            features: [ca([Vy]), no, ae],
          })),
          (t._ngModelWarningSentOnce = !1),
          t
        );
      })();
      const Ly = { provide: Dg, useExisting: rt(() => zy), multi: !0 };
      function Uy(t, e) {
        return null == t
          ? `${e}`
          : (e && "object" == typeof e && (e = "Object"),
            `${t}: ${e}`.slice(0, 50));
      }
      let zy = (() => {
          class t extends Ag {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(t) {
              this._compareWith = t;
            }
            writeValue(t) {
              this.value = t;
              const e = this._getOptionId(t);
              null == e && this.setProperty("selectedIndex", -1);
              const n = Uy(e, t);
              this.setProperty("value", n);
            }
            registerOnChange(t) {
              this.onChange = (e) => {
                (this.value = this._getOptionValue(e)), t(this.value);
              };
            }
            _registerOption() {
              return (this._idCounter++).toString();
            }
            _getOptionId(t) {
              for (const e of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(e), t)) return e;
              return null;
            }
            _getOptionValue(t) {
              const e = (function (t) {
                return t.split(":")[0];
              })(t);
              return this._optionMap.has(e) ? this._optionMap.get(e) : t;
            }
          }
          return (
            (t.ɵfac = (function () {
              let e;
              return function (n) {
                return (e || (e = Vn(t)))(n || t);
              };
            })()),
            (t.ɵdir = Qt({
              type: t,
              selectors: [
                ["select", "formControlName", "", 3, "multiple", ""],
                ["select", "formControl", "", 3, "multiple", ""],
                ["select", "ngModel", "", 3, "multiple", ""],
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  To("change", function (t) {
                    return e.onChange(t.target.value);
                  })("blur", function () {
                    return e.onTouched();
                  });
              },
              inputs: { compareWith: "compareWith" },
              features: [ca([Ly]), no],
            })),
            t
          );
        })(),
        Hy = (() => {
          class t {
            constructor(t, e, n) {
              (this._element = t),
                (this._renderer = e),
                (this._select = n),
                this._select && (this.id = this._select._registerOption());
            }
            set ngValue(t) {
              null != this._select &&
                (this._select._optionMap.set(this.id, t),
                this._setElementValue(Uy(this.id, t)),
                this._select.writeValue(this._select.value));
            }
            set value(t) {
              this._setElementValue(t),
                this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(t) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "value",
                t
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(bo(ya), bo(ba), bo(zy, 9));
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [["option"]],
              inputs: { ngValue: "ngValue", value: "value" },
            })),
            t
          );
        })();
      const $y = { provide: Dg, useExisting: rt(() => Wy), multi: !0 };
      function qy(t, e) {
        return null == t
          ? `${e}`
          : ("string" == typeof e && (e = `'${e}'`),
            e && "object" == typeof e && (e = "Object"),
            `${t}: ${e}`.slice(0, 50));
      }
      let Wy = (() => {
          class t extends Ag {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(t) {
              this._compareWith = t;
            }
            writeValue(t) {
              let e;
              if (((this.value = t), Array.isArray(t))) {
                const n = t.map((t) => this._getOptionId(t));
                e = (t, e) => {
                  t._setSelected(n.indexOf(e.toString()) > -1);
                };
              } else
                e = (t, e) => {
                  t._setSelected(!1);
                };
              this._optionMap.forEach(e);
            }
            registerOnChange(t) {
              this.onChange = (e) => {
                const n = [];
                if (void 0 !== e.selectedOptions) {
                  const t = e.selectedOptions;
                  for (let e = 0; e < t.length; e++) {
                    const r = t.item(e),
                      s = this._getOptionValue(r.value);
                    n.push(s);
                  }
                } else {
                  const t = e.options;
                  for (let e = 0; e < t.length; e++) {
                    const r = t.item(e);
                    if (r.selected) {
                      const t = this._getOptionValue(r.value);
                      n.push(t);
                    }
                  }
                }
                (this.value = n), t(n);
              };
            }
            _registerOption(t) {
              const e = (this._idCounter++).toString();
              return this._optionMap.set(e, t), e;
            }
            _getOptionId(t) {
              for (const e of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(e)._value, t))
                  return e;
              return null;
            }
            _getOptionValue(t) {
              const e = (function (t) {
                return t.split(":")[0];
              })(t);
              return this._optionMap.has(e) ? this._optionMap.get(e)._value : t;
            }
          }
          return (
            (t.ɵfac = (function () {
              let e;
              return function (n) {
                return (e || (e = Vn(t)))(n || t);
              };
            })()),
            (t.ɵdir = Qt({
              type: t,
              selectors: [
                ["select", "multiple", "", "formControlName", ""],
                ["select", "multiple", "", "formControl", ""],
                ["select", "multiple", "", "ngModel", ""],
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  To("change", function (t) {
                    return e.onChange(t.target);
                  })("blur", function () {
                    return e.onTouched();
                  });
              },
              inputs: { compareWith: "compareWith" },
              features: [ca([$y]), no],
            })),
            t
          );
        })(),
        Qy = (() => {
          class t {
            constructor(t, e, n) {
              (this._element = t),
                (this._renderer = e),
                (this._select = n),
                this._select && (this.id = this._select._registerOption(this));
            }
            set ngValue(t) {
              null != this._select &&
                ((this._value = t),
                this._setElementValue(qy(this.id, t)),
                this._select.writeValue(this._select.value));
            }
            set value(t) {
              this._select
                ? ((this._value = t),
                  this._setElementValue(qy(this.id, t)),
                  this._select.writeValue(this._select.value))
                : this._setElementValue(t);
            }
            _setElementValue(t) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "value",
                t
              );
            }
            _setSelected(t) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "selected",
                t
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(bo(ya), bo(ba), bo(Wy, 9));
            }),
            (t.ɵdir = Qt({
              type: t,
              selectors: [["option"]],
              inputs: { ngValue: "ngValue", value: "value" },
            })),
            t
          );
        })(),
        Ky = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({ imports: [[Ry]] })),
            t
          );
        })(),
        Gy = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({ imports: [Ky] })),
            t
          );
        })(),
        Zy = (() => {
          class t {
            static withConfig(e) {
              return {
                ngModule: t,
                providers: [
                  { provide: Ny, useValue: e.warnOnNgModelWithFormControl },
                ],
              };
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({ imports: [Ky] })),
            t
          );
        })(),
        Yy = (() => {
          class t {
            group(t, e = null) {
              const n = this._reduceControls(t);
              let r,
                s = null,
                i = null;
              return (
                null != e &&
                  ((function (t) {
                    return (
                      void 0 !== t.asyncValidators ||
                      void 0 !== t.validators ||
                      void 0 !== t.updateOn
                    );
                  })(e)
                    ? ((s = null != e.validators ? e.validators : null),
                      (i =
                        null != e.asyncValidators ? e.asyncValidators : null),
                      (r = null != e.updateOn ? e.updateOn : void 0))
                    : ((s = null != e.validator ? e.validator : null),
                      (i =
                        null != e.asyncValidator ? e.asyncValidator : null))),
                new xy(n, { asyncValidators: i, updateOn: r, validators: s })
              );
            }
            control(t, e, n) {
              return new Sy(t, e, n);
            }
            array(t, e, n) {
              const r = t.map((t) => this._createControl(t));
              return new Ay(r, e, n);
            }
            _reduceControls(t) {
              const e = {};
              return (
                Object.keys(t).forEach((n) => {
                  e[n] = this._createControl(t[n]);
                }),
                e
              );
            }
            _createControl(t) {
              return t instanceof Sy || t instanceof xy || t instanceof Ay
                ? t
                : Array.isArray(t)
                ? this.control(
                    t[0],
                    t.length > 1 ? t[1] : null,
                    t.length > 2 ? t[2] : null
                  )
                : this.control(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = ct({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: Zy,
            })),
            t
          );
        })();
      function Xy(t, e, n, r, s, i, o) {
        try {
          var a = t[i](o),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? e(l) : Promise.resolve(l).then(r, s);
      }
      class Jy {
        constructor(t, e, n, r, s, i) {
          (this.id = t),
            (this.name = e),
            (this.email = n),
            (this.department = r),
            (this.created = s),
            (this.expertise = i);
        }
      }
      class tw {}
      class ew {}
      class nw {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  "string" == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split("\n").forEach((t) => {
                            const e = t.indexOf(":");
                            if (e > 0) {
                              const n = t.slice(0, e),
                                r = n.toLowerCase(),
                                s = t.slice(e + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r)
                                  ? this.headers.get(r).push(s)
                                  : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach((e) => {
                            let n = t[e];
                            const r = e.toLowerCase();
                            "string" == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(e, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: "a" });
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: "d" });
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof nw
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
              (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((e) => {
              this.headers.set(e, t.headers.get(e)),
                this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new nw();
          return (
            (e.lazyInit =
              this.lazyInit && this.lazyInit instanceof nw
                ? this.lazyInit
                : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case "a":
            case "s":
              let n = t.value;
              if (("string" == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
              r.push(...n), this.headers.set(e, r);
              break;
            case "d":
              const s = t.value;
              if (s) {
                let t = this.headers.get(e);
                if (!t) return;
                (t = t.filter((t) => -1 === s.indexOf(t))),
                  0 === t.length
                    ? (this.headers.delete(e), this.normalizedNames.delete(e))
                    : this.headers.set(e, t);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((e) =>
              t(this.normalizedNames.get(e), this.headers.get(e))
            );
        }
      }
      class rw {
        encodeKey(t) {
          return sw(t);
        }
        encodeValue(t) {
          return sw(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      function sw(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/gi, "$")
          .replace(/%2C/gi, ",")
          .replace(/%3B/gi, ";")
          .replace(/%2B/gi, "+")
          .replace(/%3D/gi, "=")
          .replace(/%3F/gi, "?")
          .replace(/%2F/gi, "/");
      }
      function iw(t) {
        return `${t}`;
      }
      class ow {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new rw()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function (t, e) {
              const n = new Map();
              return (
                t.length > 0 &&
                  t
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((t) => {
                      const r = t.indexOf("="),
                        [s, i] =
                          -1 == r
                            ? [e.decodeKey(t), ""]
                            : [
                                e.decodeKey(t.slice(0, r)),
                                e.decodeValue(t.slice(r + 1)),
                              ],
                        o = n.get(s) || [];
                      o.push(i), n.set(s, o);
                    }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((e) => {
                  const n = t.fromObject[e];
                  this.map.set(e, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: "a" });
        }
        appendAll(t) {
          const e = [];
          return (
            Object.keys(t).forEach((n) => {
              const r = t[n];
              Array.isArray(r)
                ? r.forEach((t) => {
                    e.push({ param: n, value: t, op: "a" });
                  })
                : e.push({ param: n, value: r, op: "a" });
            }),
            this.clone(e)
          );
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map((t) => e + "=" + this.encoder.encodeValue(t))
                  .join("&");
              })
              .filter((t) => "" !== t)
              .join("&")
          );
        }
        clone(t) {
          const e = new ow({ encoder: this.encoder });
          return (
            (e.cloneFrom = this.cloneFrom || this),
            (e.updates = (this.updates || []).concat(t)),
            e
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case "a":
                  case "s":
                    const e =
                      ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(iw(t.value)), this.map.set(t.param, e);
                    break;
                  case "d":
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let e = this.map.get(t.param) || [];
                      const n = e.indexOf(iw(t.value));
                      -1 !== n && e.splice(n, 1),
                        e.length > 0
                          ? this.map.set(t.param, e)
                          : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class aw {
        constructor() {
          this.map = new Map();
        }
        set(t, e) {
          return this.map.set(t, e), this;
        }
        get(t) {
          return (
            this.map.has(t) || this.map.set(t, t.defaultValue()),
            this.map.get(t)
          );
        }
        delete(t) {
          return this.map.delete(t), this;
        }
        keys() {
          return this.map.keys();
        }
      }
      function lw(t) {
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer;
      }
      function uw(t) {
        return "undefined" != typeof Blob && t instanceof Blob;
      }
      function cw(t) {
        return "undefined" != typeof FormData && t instanceof FormData;
      }
      class hw {
        constructor(t, e, n, r) {
          let s;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = t.toUpperCase()),
            (function (t) {
              switch (t) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.context && (this.context = s.context),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new nw()),
            this.context || (this.context = new aw()),
            this.params)
          ) {
            const t = this.params.toString();
            if (0 === t.length) this.urlWithParams = e;
            else {
              const n = e.indexOf("?");
              this.urlWithParams =
                e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t;
            }
          } else (this.params = new ow()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : lw(this.body) ||
              uw(this.body) ||
              cw(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof ow
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || cw(this.body)
            ? null
            : uw(this.body)
            ? this.body.type || null
            : lw(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof ow
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(t = {}) {
          var e;
          const n = t.method || this.method,
            r = t.url || this.url,
            s = t.responseType || this.responseType,
            i = void 0 !== t.body ? t.body : this.body,
            o =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            a =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress;
          let l = t.headers || this.headers,
            u = t.params || this.params;
          const c = null !== (e = t.context) && void 0 !== e ? e : this.context;
          return (
            void 0 !== t.setHeaders &&
              (l = Object.keys(t.setHeaders).reduce(
                (e, n) => e.set(n, t.setHeaders[n]),
                l
              )),
            t.setParams &&
              (u = Object.keys(t.setParams).reduce(
                (e, n) => e.set(n, t.setParams[n]),
                u
              )),
            new hw(n, r, i, {
              params: u,
              headers: l,
              context: c,
              reportProgress: a,
              responseType: s,
              withCredentials: o,
            })
          );
        }
      }
      var dw = (function (t) {
        return (
          (t[(t.Sent = 0)] = "Sent"),
          (t[(t.UploadProgress = 1)] = "UploadProgress"),
          (t[(t.ResponseHeader = 2)] = "ResponseHeader"),
          (t[(t.DownloadProgress = 3)] = "DownloadProgress"),
          (t[(t.Response = 4)] = "Response"),
          (t[(t.User = 5)] = "User"),
          t
        );
      })({});
      class pw {
        constructor(t, e = 200, n = "OK") {
          (this.headers = t.headers || new nw()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class fw extends pw {
        constructor(t = {}) {
          super(t), (this.type = dw.ResponseHeader);
        }
        clone(t = {}) {
          return new fw({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class mw extends pw {
        constructor(t = {}) {
          super(t),
            (this.type = dw.Response),
            (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new mw({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class gw extends pw {
        constructor(t) {
          super(t, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${t.url || "(unknown url)"}`
                : `Http failure response for ${t.url || "(unknown url)"}: ${
                    t.status
                  } ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function yw(t, e) {
        return {
          body: e,
          headers: t.headers,
          context: t.context,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials,
        };
      }
      let ww = (() => {
        class t {
          constructor(t) {
            this.handler = t;
          }
          request(t, e, n = {}) {
            let r;
            if (t instanceof hw) r = t;
            else {
              let s, i;
              (s = n.headers instanceof nw ? n.headers : new nw(n.headers)),
                n.params &&
                  (i =
                    n.params instanceof ow
                      ? n.params
                      : new ow({ fromObject: n.params })),
                (r = new hw(t, e, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  context: n.context,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || "json",
                  withCredentials: n.withCredentials,
                }));
            }
            const s = nh(r).pipe(Fh((t) => this.handler.handle(t)));
            if (t instanceof hw || "events" === n.observe) return s;
            const i = s.pipe(xh((t) => t instanceof mw));
            switch (n.observe || "body") {
              case "body":
                switch (r.responseType) {
                  case "arraybuffer":
                    return i.pipe(
                      A((t) => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return t.body;
                      })
                    );
                  case "blob":
                    return i.pipe(
                      A((t) => {
                        if (null !== t.body && !(t.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return t.body;
                      })
                    );
                  case "text":
                    return i.pipe(
                      A((t) => {
                        if (null !== t.body && "string" != typeof t.body)
                          throw new Error("Response is not a string.");
                        return t.body;
                      })
                    );
                  case "json":
                  default:
                    return i.pipe(A((t) => t.body));
                }
              case "response":
                return i;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${n.observe}}`
                );
            }
          }
          delete(t, e = {}) {
            return this.request("DELETE", t, e);
          }
          get(t, e = {}) {
            return this.request("GET", t, e);
          }
          head(t, e = {}) {
            return this.request("HEAD", t, e);
          }
          jsonp(t, e) {
            return this.request("JSONP", t, {
              params: new ow().append(e, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(t, e = {}) {
            return this.request("OPTIONS", t, e);
          }
          patch(t, e, n = {}) {
            return this.request("PATCH", t, yw(n, e));
          }
          post(t, e, n = {}) {
            return this.request("POST", t, yw(n, e));
          }
          put(t, e, n = {}) {
            return this.request("PUT", t, yw(n, e));
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(tw));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class vw {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const bw = new zn("HTTP_INTERCEPTORS");
      let _w = (() => {
        class t {
          intercept(t, e) {
            return e.handle(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Cw = /^\)\]\}',?\n/;
      let Ew = (() => {
        class t {
          constructor(t) {
            this.xhrFactory = t;
          }
          handle(t) {
            if ("JSONP" === t.method)
              throw new Error(
                "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
              );
            return new w((e) => {
              const n = this.xhrFactory.build();
              if (
                (n.open(t.method, t.urlWithParams),
                t.withCredentials && (n.withCredentials = !0),
                t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(","))),
                t.headers.has("Accept") ||
                  n.setRequestHeader(
                    "Accept",
                    "application/json, text/plain, */*"
                  ),
                !t.headers.has("Content-Type"))
              ) {
                const e = t.detectContentTypeHeader();
                null !== e && n.setRequestHeader("Content-Type", e);
              }
              if (t.responseType) {
                const e = t.responseType.toLowerCase();
                n.responseType = "json" !== e ? e : "text";
              }
              const r = t.serializeBody();
              let s = null;
              const i = () => {
                  if (null !== s) return s;
                  const e = 1223 === n.status ? 204 : n.status,
                    r = n.statusText || "OK",
                    i = new nw(n.getAllResponseHeaders()),
                    o =
                      (function (t) {
                        return "responseURL" in t && t.responseURL
                          ? t.responseURL
                          : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
                          ? t.getResponseHeader("X-Request-URL")
                          : null;
                      })(n) || t.url;
                  return (
                    (s = new fw({
                      headers: i,
                      status: e,
                      statusText: r,
                      url: o,
                    })),
                    s
                  );
                },
                o = () => {
                  let { headers: r, status: s, statusText: o, url: a } = i(),
                    l = null;
                  204 !== s &&
                    (l = void 0 === n.response ? n.responseText : n.response),
                    0 === s && (s = l ? 200 : 0);
                  let u = s >= 200 && s < 300;
                  if ("json" === t.responseType && "string" == typeof l) {
                    const t = l;
                    l = l.replace(Cw, "");
                    try {
                      l = "" !== l ? JSON.parse(l) : null;
                    } catch (c) {
                      (l = t), u && ((u = !1), (l = { error: c, text: l }));
                    }
                  }
                  u
                    ? (e.next(
                        new mw({
                          body: l,
                          headers: r,
                          status: s,
                          statusText: o,
                          url: a || void 0,
                        })
                      ),
                      e.complete())
                    : e.error(
                        new gw({
                          error: l,
                          headers: r,
                          status: s,
                          statusText: o,
                          url: a || void 0,
                        })
                      );
                },
                a = (t) => {
                  const { url: r } = i(),
                    s = new gw({
                      error: t,
                      status: n.status || 0,
                      statusText: n.statusText || "Unknown Error",
                      url: r || void 0,
                    });
                  e.error(s);
                };
              let l = !1;
              const u = (r) => {
                  l || (e.next(i()), (l = !0));
                  let s = { type: dw.DownloadProgress, loaded: r.loaded };
                  r.lengthComputable && (s.total = r.total),
                    "text" === t.responseType &&
                      n.responseText &&
                      (s.partialText = n.responseText),
                    e.next(s);
                },
                c = (t) => {
                  let n = { type: dw.UploadProgress, loaded: t.loaded };
                  t.lengthComputable && (n.total = t.total), e.next(n);
                };
              return (
                n.addEventListener("load", o),
                n.addEventListener("error", a),
                n.addEventListener("timeout", a),
                n.addEventListener("abort", a),
                t.reportProgress &&
                  (n.addEventListener("progress", u),
                  null !== r &&
                    n.upload &&
                    n.upload.addEventListener("progress", c)),
                n.send(r),
                e.next({ type: dw.Sent }),
                () => {
                  n.removeEventListener("error", a),
                    n.removeEventListener("abort", a),
                    n.removeEventListener("load", o),
                    n.removeEventListener("timeout", a),
                    t.reportProgress &&
                      (n.removeEventListener("progress", u),
                      null !== r &&
                        n.upload &&
                        n.upload.removeEventListener("progress", c)),
                    n.readyState !== n.DONE && n.abort();
                }
              );
            });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Cc));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Sw = new zn("XSRF_COOKIE_NAME"),
        xw = new zn("XSRF_HEADER_NAME");
      class Aw {}
      let Dw = (() => {
          class t {
            constructor(t, e, n) {
              (this.doc = t),
                (this.platform = e),
                (this.cookieName = n),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const t = this.doc.cookie || "";
              return (
                t !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = lc(t, this.cookieName)),
                  (this.lastCookieString = t)),
                this.lastToken
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Uu), or(Kl), or(Sw));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        kw = (() => {
          class t {
            constructor(t, e) {
              (this.tokenService = t), (this.headerName = e);
            }
            intercept(t, e) {
              const n = t.url.toLowerCase();
              if (
                "GET" === t.method ||
                "HEAD" === t.method ||
                n.startsWith("http://") ||
                n.startsWith("https://")
              )
                return e.handle(t);
              const r = this.tokenService.getToken();
              return (
                null === r ||
                  t.headers.has(this.headerName) ||
                  (t = t.clone({ headers: t.headers.set(this.headerName, r) })),
                e.handle(t)
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Aw), or(xw));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Tw = (() => {
          class t {
            constructor(t, e) {
              (this.backend = t), (this.injector = e), (this.chain = null);
            }
            handle(t) {
              if (null === this.chain) {
                const t = this.injector.get(bw, []);
                this.chain = t.reduceRight(
                  (t, e) => new vw(t, e),
                  this.backend
                );
              }
              return this.chain.handle(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(ew), or(to));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Ow = (() => {
          class t {
            static disable() {
              return {
                ngModule: t,
                providers: [{ provide: kw, useClass: _w }],
              };
            }
            static withOptions(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.cookieName ? { provide: Sw, useValue: e.cookieName } : [],
                  e.headerName ? { provide: xw, useValue: e.headerName } : [],
                ],
              };
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({
              providers: [
                kw,
                { provide: bw, useExisting: kw, multi: !0 },
                { provide: Aw, useClass: Dw },
                { provide: Sw, useValue: "XSRF-TOKEN" },
                { provide: xw, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            t
          );
        })(),
        Fw = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({
              providers: [
                ww,
                { provide: tw, useClass: Tw },
                Ew,
                { provide: ew, useExisting: Ew },
              ],
              imports: [
                [
                  Ow.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN",
                  }),
                ],
              ],
            })),
            t
          );
        })();
      const Pw =
        "https://cors-anywhere.herokuapp.com/http://34.241.217.201/users_ARF/";
      let Iw = (() => {
          class t {
            constructor(t) {
              (this.http = t), (this.$userCreated = new E());
            }
            transformUsers(t) {
              return t.map((t) => {
                const {
                  id: e,
                  name: n,
                  email: r,
                  department: s,
                  created: i,
                } = t;
                return new Jy(e, n, r, s, i);
              });
            }
            getUsers() {
              return this.http.get(`${Pw}`).pipe(
                A(
                  (t) => ({ ok: !0, users: this.transformUsers(t) }),
                  kh(
                    (function () {
                      var t,
                        e =
                          ((t = function* (t) {
                            return { ok: !1, error: t };
                          }),
                          function () {
                            var e = this,
                              n = arguments;
                            return new Promise(function (r, s) {
                              var i = t.apply(e, n);
                              function o(t) {
                                Xy(i, r, s, o, a, "next", t);
                              }
                              function a(t) {
                                Xy(i, r, s, o, a, "throw", t);
                              }
                              o(void 0);
                            });
                          });
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                )
              );
            }
            createUser(t) {
              const e = new Date();
              return this.http.post(
                `${Pw}`,
                Object.assign(Object.assign({}, t), { created: e })
              );
            }
            updateUser(t) {
              return this.http.put(`${Pw}/${t.id}`, Object.assign({}, t));
            }
            deleteUser(t) {
              return this.http.delete(`${Pw}/${t.id}`);
            }
            getUserCreatedSubsription() {
              return this.$userCreated.asObservable();
            }
            emitUserCreated(t) {
              this.$userCreated.next(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(ww));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac, providedIn: "root" })),
            t
          );
        })(),
        Rw = (() => {
          class t {
            constructor() {
              (this.modalId = ""), (this.show = !1);
            }
            getShowModal(t) {
              return this.show && this.modalId === t;
            }
            setShowModal(t) {
              !0 !== this.show && ((this.show = !0), (this.modalId = t));
            }
            hideModal() {
              (this.show = !1), (this.modalId = "");
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac, providedIn: "root" })),
            t
          );
        })();
      const Nw = [[["", "modal-body", ""]], [["", "modal-footer", ""]]],
        Mw = ["[modal-body]", "[modal-footer]"];
      let jw = (() => {
          class t {
            constructor(t) {
              (this.modalService = t), (this.title = ""), (this.modalId = "");
            }
            ngOnInit() {}
            showModal() {
              this.modalService.setShowModal(this.modalId);
            }
            closeModal() {
              this.resetForm && this.resetForm(), this.modalService.hideModal();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(bo(Rw));
            }),
            (t.ɵcmp = Ut({
              type: t,
              selectors: [["app-modal"]],
              inputs: {
                title: "title",
                modalId: "modalId",
                resetForm: "resetForm",
              },
              ngContentSelectors: Mw,
              decls: 13,
              vars: 5,
              consts: [
                [1, "background-modal-image", "animated", "fadeIn", "fast"],
                [
                  "id",
                  "modal",
                  "tabindex",
                  "-1",
                  "role",
                  "dialog",
                  1,
                  "modal",
                  "fade",
                  2,
                  "display",
                  "block",
                ],
                ["role", "dialog", "tabindex", "-1", 1, "modal-dialog"],
                [1, "modal-content"],
                [1, "modal-header"],
                ["id", "modalLabel", 1, "modal-title"],
                [1, "modal-body"],
                [1, "modal-footer"],
                [
                  "type",
                  "button",
                  "data-dismiss",
                  "modal",
                  1,
                  "btn",
                  "btn-secondary",
                  3,
                  "click",
                ],
              ],
              template: function (t, e) {
                1 & t &&
                  (Ro(Nw),
                  Eo(0, "div", 0),
                  Eo(1, "div", 1),
                  Eo(2, "div", 2),
                  Eo(3, "div", 3),
                  Eo(4, "div", 4),
                  Eo(5, "h5", 5),
                  qo(6),
                  So(),
                  So(),
                  Eo(7, "div", 6),
                  No(8),
                  So(),
                  Eo(9, "div", 7),
                  Eo(10, "button", 8),
                  To("click", function () {
                    return e.closeModal();
                  }),
                  qo(11, " Cancel "),
                  So(),
                  No(12, 1),
                  So(),
                  So(),
                  So(),
                  So(),
                  So()),
                  2 & t &&
                    (Lo("hidden", !e.modalService.getShowModal(e.modalId)),
                    qs(1),
                    Lo("show", e.modalService.getShowModal(e.modalId)),
                    qs(5),
                    Wo(e.title));
              },
              styles: [
                ".hidden[_ngcontent-%COMP%]{display:none}.background-modal-image[_ngcontent-%COMP%]{background-color:#0006;position:fixed;left:0;top:0;width:100%;height:100%;z-index:9999}",
              ],
            })),
            t
          );
        })(),
        Vw = (() => {
          class t {
            transform(t, ...e) {
              return t;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵpipe = Kt({ name: "as", type: t, pure: !0 })),
            t
          );
        })();
      const Bw = ["addRowModal"];
      function Lw(t, e) {
        if ((1 & t && xo(0, "input", 11), 2 & t)) {
          const t = Po().$implicit;
          Lo("is-invalid", Po().checkValidInput(t.label)),
            jo("id", "input-", t.label, ""),
            _o("formControlName", t.label);
        }
      }
      function Uw(t, e) {
        if (
          (1 & t && (Eo(0, "option", 13), qo(1), vl(2, "titlecase"), So()),
          2 & t)
        ) {
          const t = e.$implicit;
          _o("value", t), qs(1), Qo(" ", bl(2, 2, t), " ");
        }
      }
      function zw(t, e) {
        if (
          (1 & t &&
            (Eo(0, "select", 11),
            wo(1, Uw, 3, 4, "option", 12),
            vl(2, "as"),
            So()),
          2 & t)
        ) {
          const t = Po().$implicit;
          Lo("is-invalid", Po().checkValidInput(t.label)),
            jo("id", "select-", t.label, ""),
            _o("formControlName", t.label),
            qs(1),
            _o("ngForOf", bl(2, 5, t.value));
        }
      }
      function Hw(t, e) {
        1 & t &&
          (Eo(0, "div", 14), qo(1, " Please introduce a valid value. "), So());
      }
      function $w(t, e) {
        if (
          (1 & t &&
            (Eo(0, "div"),
            Eo(1, "div", 7),
            Eo(2, "label", 8),
            qo(3),
            vl(4, "titlecase"),
            So(),
            wo(5, Lw, 1, 4, "input", 9),
            wo(6, zw, 3, 7, "select", 9),
            wo(7, Hw, 2, 0, "div", 10),
            So(),
            So()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = Po();
          qs(2),
            Mo("for", t.label),
            qs(1),
            Qo("", bl(4, 5, t.label), ":"),
            qs(2),
            _o("ngIf", "text" === t.type),
            qs(1),
            _o("ngIf", "select" === t.type),
            qs(1),
            _o("ngIf", n.checkValidInput(t.label));
        }
      }
      let qw = (() => {
        class t {
          constructor(t, e) {
            (this.formBuidler = t),
              (this.usersService = e),
              (this.addRowFields = [
                { label: "name", type: "text", value: "" },
                { label: "email", type: "text", value: "" },
                {
                  label: "department",
                  type: "select",
                  value: ["Marketing", "Development"],
                },
              ]),
              (this.resetForm = () => {
                this.userForm.reset();
              });
          }
          ngOnInit() {
            this.userForm = this.formBuidler.group({
              name: ["", Mg.required],
              email: ["", [Mg.required, Mg.email]],
              department: ["", [Mg.required]],
            });
          }
          checkValidInput(t) {
            return (
              this.userForm.controls[t].invalid &&
              (this.userForm.controls[t].touched ||
                this.userForm.controls[t].dirty)
            );
          }
          saveUser() {
            this.userForm.invalid ||
              this.usersService
                .createUser(this.userForm.value)
                .subscribe((t) => {
                  this.addModalRow.closeModal(),
                    this.userForm.reset(),
                    this.usersService.emitUserCreated(t),
                    Eg().fire("Row added", `User ${t.name} added`, "success");
                });
          }
          showAddRowModal() {
            this.addModalRow.showModal();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bo(Yy), bo(Iw));
          }),
          (t.ɵcmp = Ut({
            type: t,
            selectors: [["app-add-row"]],
            viewQuery: function (t, e) {
              if ((1 & t && Vl(Bw, 5), 2 & t)) {
                let t;
                jl((t = Bl())) && (e.addModalRow = t.first);
              }
            },
            decls: 9,
            vars: 6,
            consts: [
              [1, "btn", "button-green", 3, "click"],
              [3, "resetForm", "modalId", "title"],
              ["addRowModal", ""],
              ["modal-body", "", 3, "formGroup"],
              [4, "ngFor", "ngForOf"],
              ["modal-footer", ""],
              [
                "type",
                "button",
                "id",
                "button-submit",
                1,
                "btn",
                "btn-primary",
                3,
                "disabled",
                "click",
              ],
              [1, "form-group"],
              [1, "col-form-label", 3, "for"],
              [
                "type",
                "text",
                "class",
                "form-control",
                3,
                "id",
                "formControlName",
                "is-invalid",
                4,
                "ngIf",
              ],
              ["class", "invalid-feedback", 4, "ngIf"],
              ["type", "text", 1, "form-control", 3, "id", "formControlName"],
              [3, "value", 4, "ngFor", "ngForOf"],
              [3, "value"],
              [1, "invalid-feedback"],
            ],
            template: function (t, e) {
              1 & t &&
                (Eo(0, "button", 0),
                To("click", function () {
                  return e.showAddRowModal();
                }),
                qo(1, "Add Row"),
                So(),
                Eo(2, "app-modal", 1, 2),
                Eo(4, "form", 3),
                wo(5, $w, 8, 7, "div", 4),
                So(),
                Eo(6, "div", 5),
                Eo(7, "button", 6),
                To("click", function () {
                  return e.saveUser();
                }),
                qo(8, " Save "),
                So(),
                So(),
                So()),
                2 & t &&
                  (qs(2),
                  _o("resetForm", e.resetForm)("modalId", "addrow")(
                    "title",
                    "Add row"
                  ),
                  qs(2),
                  _o("formGroup", e.userForm),
                  qs(1),
                  _o("ngForOf", e.addRowFields),
                  qs(2),
                  _o("disabled", e.userForm.invalid));
            },
            directives: [jw, Iy, ey, jy, hc, pc, Og, ty, By, zy, Hy, Qy],
            pipes: [yc, Vw],
            styles: ["label[_ngcontent-%COMP%]{float:left}"],
          })),
          t
        );
      })();
      class Ww {}
      const Qw = "*";
      function Kw(t, e = null) {
        return { type: 4, styles: e, timings: t };
      }
      function Gw(t, e = null) {
        return { type: 2, steps: t, options: e };
      }
      function Zw(t) {
        return { type: 6, styles: t, offset: null };
      }
      function Yw(t, e, n = null) {
        return { type: 1, expr: t, animation: e, options: n };
      }
      function Xw(t) {
        Promise.resolve(null).then(t);
      }
      class Jw {
        constructor(t = 0, e = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = t + e);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          Xw(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {
          this._started = !1;
        }
        setPosition(t) {
          this._position = this.totalTime ? t * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class tv {
        constructor(t) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = t);
          let e = 0,
            n = 0,
            r = 0;
          const s = this.players.length;
          0 == s
            ? Xw(() => this._onFinish())
            : this.players.forEach((t) => {
                t.onDone(() => {
                  ++e == s && this._onFinish();
                }),
                  t.onDestroy(() => {
                    ++n == s && this._onDestroy();
                  }),
                  t.onStart(() => {
                    ++r == s && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (t, e) => Math.max(t, e.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((t) => t.init());
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((t) => t()),
            (this._onStartFns = []));
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((t) => t.play());
        }
        pause() {
          this.players.forEach((t) => t.pause());
        }
        restart() {
          this.players.forEach((t) => t.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((t) => t.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((t) => t.destroy()),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((t) => t.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(t) {
          const e = t * this.totalTime;
          this.players.forEach((t) => {
            const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
            t.setPosition(n);
          });
        }
        getPosition() {
          const t = this.players.reduce(
            (t, e) => (null === t || e.totalTime > t.totalTime ? e : t),
            null
          );
          return null != t ? t.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach((t) => {
            t.beforeDestroy && t.beforeDestroy();
          });
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      const ev = () => ({
        type: 7,
        name: "loading",
        definitions: [Yw("void => *", [Zw({ opacity: 0 }), Kw(500)])],
        options: {},
      });
      let nv = (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = Ut({
            type: t,
            selectors: [["app-spinner"]],
            decls: 1,
            vars: 0,
            consts: [[1, "spinner"]],
            template: function (t, e) {
              1 & t && xo(0, "div", 0);
            },
            styles: [
              '.spinner[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%}.spinner[_ngcontent-%COMP%]:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border-color:#4fba92 #0000;border-style:solid;border-width:6px;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',
            ],
          })),
          t
        );
      })();
      const rv = ["removeRowModal"];
      function sv(t, e) {
        1 & t && xo(0, "app-spinner");
      }
      function iv(t, e) {
        if (1 & t) {
          const t = Ao();
          Eo(0, "input", 30),
            To("ngModelChange", function (e) {
              return Fe(t), (Po().$implicit.name = e);
            }),
            So();
        }
        if (2 & t) {
          const t = Po().$implicit;
          Lo("is-invalid", !t.name), _o("ngModel", t.name);
        }
      }
      function ov(t, e) {
        1 & t && qo(0), 2 & t && Wo(Po().$implicit.name);
      }
      function av(t, e) {
        if (1 & t) {
          const t = Ao();
          Eo(0, "input", 30),
            To("ngModelChange", function (e) {
              return Fe(t), (Po().$implicit.email = e);
            }),
            So();
        }
        if (2 & t) {
          const t = Po().$implicit;
          Lo("is-invalid", !Po(2).validateEmail(t.email)),
            _o("ngModel", t.email);
        }
      }
      function lv(t, e) {
        1 & t && qo(0), 2 & t && Wo(Po().$implicit.email);
      }
      function uv(t, e) {
        if (1 & t) {
          const t = Ao();
          Eo(0, "select", 31),
            To("ngModelChange", function (e) {
              return Fe(t), (Po().$implicit.department = e);
            }),
            Eo(1, "option", 32),
            qo(2, "Marketing"),
            So(),
            qo(3, " User "),
            Eo(4, "option", 33),
            qo(5, "Development"),
            So(),
            So();
        }
        if (2 & t) {
          const t = Po().$implicit;
          Lo("is-invalid", !t.department), _o("ngModel", t.department);
        }
      }
      function cv(t, e) {
        1 & t && qo(0), 2 & t && Wo(Po().$implicit.department);
      }
      const hv = function () {
        return ["text-success"];
      };
      function dv(t, e) {
        if (1 & t) {
          const t = Ao();
          Eo(0, "a", 34),
            To("click", function () {
              Fe(t);
              const e = Po(),
                n = e.$implicit,
                r = e.index;
              return Po(2).editUser(n, r);
            }),
            xo(1, "fa-icon", 35),
            So();
        }
        if (2 & t) {
          const t = Po().$implicit,
            e = Po(2);
          Lo("disabled", !t.name || !e.validateEmail(t.email) || !t.department),
            qs(1),
            _o("classes", gl(4, hv))("icon", e.faCheck);
        }
      }
      function pv(t, e) {
        if (1 & t) {
          const t = Ao();
          Eo(0, "a", 36),
            To("click", function () {
              Fe(t);
              const e = Po().index;
              return Po(2).setEditRow(e);
            }),
            xo(1, "fa-icon", 35),
            So();
        }
        if (2 & t) {
          const t = Po(3);
          qs(1), _o("classes", gl(2, hv))("icon", t.faPencilAlt);
        }
      }
      const fv = function () {
        return ["text-danger"];
      };
      function mv(t, e) {
        if (1 & t) {
          const t = Ao();
          Eo(0, "a", 37),
            To("click", function () {
              return Fe(t), Po(3).cancelEditRow();
            }),
            xo(1, "fa-icon", 35),
            So();
        }
        if (2 & t) {
          const t = Po(3);
          qs(1), _o("classes", gl(2, fv))("icon", t.faCancel);
        }
      }
      function gv(t, e) {
        if (1 & t) {
          const t = Ao();
          Eo(0, "a", 37),
            To("click", function () {
              Fe(t);
              const e = Po().$implicit;
              return Po(2).showRemoveUserModal(e);
            }),
            xo(1, "fa-icon", 35),
            So();
        }
        if (2 & t) {
          const t = Po(3);
          qs(1), _o("classes", gl(2, fv))("icon", t.faTrashAlt);
        }
      }
      function yv(t, e) {
        if (
          (1 & t &&
            (Eo(0, "tr", 17),
            Eo(1, "td", 18),
            wo(2, iv, 1, 3, "input", 19),
            wo(3, ov, 1, 1, "ng-template", null, 20, Ul),
            So(),
            Eo(5, "td", 21),
            wo(6, av, 1, 3, "input", 19),
            wo(7, lv, 1, 1, "ng-template", null, 22, Ul),
            So(),
            Eo(9, "td", 21),
            wo(10, uv, 6, 3, "select", 23),
            wo(11, cv, 1, 1, "ng-template", null, 24, Ul),
            So(),
            Eo(13, "td", 25),
            wo(14, dv, 2, 5, "a", 26),
            wo(15, pv, 2, 3, "ng-template", null, 27, Ul),
            wo(17, mv, 2, 3, "a", 28),
            wo(18, gv, 2, 3, "ng-template", null, 29, Ul),
            So(),
            So()),
          2 & t)
        ) {
          const t = e.index,
            n = vo(4),
            r = vo(8),
            s = vo(12),
            i = vo(16),
            o = vo(19),
            a = Po(2);
          qs(2),
            _o("ngIf", a.rowIndexEdit === t)("ngIfElse", n),
            qs(4),
            _o("ngIf", a.rowIndexEdit === t)("ngIfElse", r),
            qs(4),
            _o("ngIf", a.rowIndexEdit === t)("ngIfElse", s),
            qs(4),
            _o("ngIf", a.rowIndexEdit === t)("ngIfElse", i),
            qs(3),
            _o("ngIf", a.rowIndexEdit === t)("ngIfElse", o);
        }
      }
      function wv(t, e) {
        if (
          (1 & t &&
            (Eo(0, "div", 8),
            Eo(1, "div", 9),
            Eo(2, "div", 10),
            Eo(3, "div", 11),
            Eo(4, "div", 12),
            Eo(5, "table", 13),
            Eo(6, "thead"),
            Eo(7, "tr"),
            Eo(8, "th"),
            qo(9, "Name"),
            So(),
            Eo(10, "th"),
            qo(11, "Email"),
            So(),
            Eo(12, "th", 14),
            qo(13, "Department"),
            So(),
            Eo(14, "th", 15),
            qo(15, "Actions"),
            So(),
            So(),
            So(),
            Eo(16, "tbody"),
            wo(17, yv, 20, 10, "tr", 16),
            So(),
            So(),
            So(),
            So(),
            So(),
            So(),
            So()),
          2 & t)
        ) {
          const t = Po();
          _o("@loading", !t.users.length), qs(17), _o("ngForOf", t.users);
        }
      }
      function vv(t, e) {
        1 & t && xo(0, "input", 41), 2 & t && _o("value", Po().$implicit.value);
      }
      function bv(t, e) {
        if (
          (1 & t && (Eo(0, "option", 43), qo(1), vl(2, "titlecase"), So()),
          2 & t)
        ) {
          const t = e.$implicit;
          _o("value", t), qs(1), Qo(" ", bl(2, 2, t), " ");
        }
      }
      function _v(t, e) {
        if (
          (1 & t &&
            (Eo(0, "select", 41),
            wo(1, bv, 3, 4, "option", 42),
            vl(2, "as"),
            So()),
          2 & t)
        ) {
          const t = Po().$implicit;
          _o("value", t.selectedValue), qs(1), _o("ngForOf", bl(2, 2, t.value));
        }
      }
      function Cv(t, e) {
        if (
          (1 & t &&
            (Eo(0, "div"),
            Eo(1, "div", 38),
            Eo(2, "label", 39),
            qo(3),
            vl(4, "titlecase"),
            So(),
            wo(5, vv, 1, 1, "input", 40),
            wo(6, _v, 3, 4, "select", 40),
            So(),
            So()),
          2 & t)
        ) {
          const t = e.$implicit;
          qs(2),
            Mo("for", t.label),
            qs(1),
            Qo("", bl(4, 4, t.label), ":"),
            qs(2),
            _o("ngIf", "text" === t.type),
            qs(1),
            _o("ngIf", "select" === t.type);
        }
      }
      let Ev = (() => {
          class t {
            constructor(t) {
              (this.usersService = t),
                (this.addRowFields = [
                  { label: "name", type: "text", value: "" },
                  { label: "email", type: "text", value: "" },
                  {
                    label: "department",
                    type: "select",
                    value: ["Marketing", "Development"],
                  },
                ]),
                (this.removeRowFieldsDisplay = []),
                (this.faCheck = qf),
                (this.faCancel = Gf),
                (this.faPencilAlt = Qf),
                (this.faTrashAlt = Zf),
                (this.loading = !1),
                (this.pendingDeleteUser = null),
                (this.rowIndexEdit = -1),
                (this.users = []);
            }
            ngOnInit() {
              (this.usersSubscription = this.getUsers().subscribe(
                ({ users: t, ok: e }) => {
                  e && (this.users = [...t]);
                }
              )),
                (this.userCreatedSubscription = this.usersService
                  .getUserCreatedSubsription()
                  .subscribe((t) => {
                    this.users = [...this.users, t];
                  }));
            }
            ngOnDestroy() {
              this.userCreatedSubscription.unsubscribe(),
                this.usersSubscription.unsubscribe();
            }
            getUsers() {
              return this.usersService.getUsers();
            }
            deleteUser() {
              this.pendingDeleteUser &&
                this.usersService
                  .deleteUser(this.pendingDeleteUser)
                  .subscribe(() => {
                    var t;
                    Eg().fire(
                      "Row removed",
                      `User ${
                        null === (t = this.pendingDeleteUser) || void 0 === t
                          ? void 0
                          : t.name
                      } added`,
                      "success"
                    ),
                      this.ngOnInit(),
                      (this.pendingDeleteUser = null),
                      this.removeModalRow.closeModal();
                  });
            }
            editUser(t, e) {
              this.usersService.updateUser(t).subscribe(
                (n) => {
                  console.log(n),
                    (this.users[e] = n),
                    this.cancelEditRow(),
                    Eg().fire(
                      "Changes saved",
                      `User ${t.name} edited`,
                      "success"
                    );
                },
                (t) => {
                  Eg().fire(
                    "Error",
                    "There was an error editing the user",
                    "error"
                  );
                }
              );
            }
            setEditRow(t) {
              this.rowIndexEdit = t;
            }
            cancelEditRow() {
              this.rowIndexEdit = -1;
            }
            showRemoveRowModal() {
              this.removeModalRow.showModal();
            }
            showRemoveUserModal(t) {
              this.removeRowFieldsDisplay = [...this.addRowFields];
              const e = Object.keys(t);
              this.removeRowFieldsDisplay.forEach((n) => {
                e.find((e) => {
                  e === n.label && "department" !== e && (n.value = t[e]);
                });
              }),
                (this.removeRowFieldsDisplay[2].selectedValue = t.department),
                (this.pendingDeleteUser = t),
                this.showRemoveRowModal();
            }
            validateEmail(t) {
              return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                String(t).toLowerCase()
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(bo(Iw));
            }),
            (t.ɵcmp = Ut({
              type: t,
              selectors: [["app-users"]],
              viewQuery: function (t, e) {
                if ((1 & t && Vl(rv, 5), 2 & t)) {
                  let t;
                  jl((t = Bl())) && (e.removeModalRow = t.first);
                }
              },
              decls: 9,
              vars: 5,
              consts: [
                [4, "ngIf"],
                ["class", "row animated fadeIn fast", 4, "ngIf"],
                [3, "modalId", "title"],
                ["removeRowModal", ""],
                ["modal-body", ""],
                [4, "ngFor", "ngForOf"],
                ["modal-footer", ""],
                [
                  "footer",
                  "",
                  "type",
                  "button",
                  1,
                  "btn",
                  "btn-danger",
                  3,
                  "click",
                ],
                [1, "row", "animated", "fadeIn", "fast"],
                [1, "col-12"],
                [1, "card"],
                [1, "card-body"],
                [1, "table-responsive"],
                [1, "table", "table-bordered"],
                [1, "w100"],
                [1, "text-nowrap", "w100"],
                ["style", "height: 65px", 4, "ngFor", "ngForOf"],
                [2, "height", "65px"],
                [1, "w20", "align-middle"],
                [
                  "type",
                  "text",
                  "class",
                  "form-control",
                  3,
                  "is-invalid",
                  "ngModel",
                  "ngModelChange",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                ["showName", ""],
                [1, "w30", "align-middle"],
                ["showEmail", ""],
                [
                  "class",
                  "form-control",
                  3,
                  "ngModel",
                  "is-invalid",
                  "ngModelChange",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                ["showDepartment", ""],
                [1, "align-actions", "text-nowrap", "text-center"],
                [
                  "class",
                  "cursor space-td",
                  "data-toggle",
                  "tooltip",
                  "data-original-title",
                  "Edit User",
                  3,
                  "disabled",
                  "click",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                ["showEditAction", ""],
                [
                  "class",
                  "cursor space-td",
                  "data-toggle",
                  "tooltip",
                  "data-original-title",
                  "Delete",
                  3,
                  "click",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                ["showDeleteAction", ""],
                [
                  "type",
                  "text",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [1, "form-control", 3, "ngModel", "ngModelChange"],
                ["value", "Marketing"],
                ["value", "Development"],
                [
                  "data-toggle",
                  "tooltip",
                  "data-original-title",
                  "Edit User",
                  1,
                  "cursor",
                  "space-td",
                  3,
                  "click",
                ],
                [3, "classes", "icon"],
                [
                  "data-toggle",
                  "tooltip",
                  "data-original-title",
                  "Edit Action",
                  1,
                  "cursor",
                  "space-td",
                  3,
                  "click",
                ],
                [
                  "data-toggle",
                  "tooltip",
                  "data-original-title",
                  "Delete",
                  1,
                  "cursor",
                  "space-td",
                  3,
                  "click",
                ],
                [1, "form-group"],
                [1, "col-form-label", 3, "for"],
                [
                  "disabled",
                  "true",
                  "type",
                  "text",
                  "class",
                  "form-control",
                  3,
                  "value",
                  4,
                  "ngIf",
                ],
                [
                  "disabled",
                  "true",
                  "type",
                  "text",
                  1,
                  "form-control",
                  3,
                  "value",
                ],
                [3, "value", 4, "ngFor", "ngForOf"],
                [3, "value"],
              ],
              template: function (t, e) {
                1 & t &&
                  (wo(0, sv, 1, 0, "app-spinner", 0),
                  wo(1, wv, 18, 2, "div", 1),
                  Eo(2, "app-modal", 2, 3),
                  Eo(4, "form", 4),
                  wo(5, Cv, 7, 6, "div", 5),
                  So(),
                  Eo(6, "div", 6),
                  Eo(7, "button", 7),
                  To("click", function () {
                    return e.deleteUser();
                  }),
                  qo(8, " Delete "),
                  So(),
                  So(),
                  So()),
                  2 & t &&
                    (_o("ngIf", !e.users.length),
                    qs(1),
                    _o("ngIf", e.users.length),
                    qs(1),
                    _o("modalId", "removerow")("title", "Remove row"),
                    qs(3),
                    _o("ngForOf", e.removeRowFieldsDisplay));
              },
              directives: [
                pc,
                jw,
                Iy,
                ey,
                Ty,
                hc,
                nv,
                Og,
                ty,
                Py,
                zy,
                Hy,
                Qy,
                bg,
              ],
              pipes: [yc, Vw],
              styles: [
                "a.disabled[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed;opacity:.5}.align-actions[_ngcontent-%COMP%]{vertical-align:inherit}.space-td[_ngcontent-%COMP%]{padding:.5em}.w20[_ngcontent-%COMP%]{width:20%}.w30[_ngcontent-%COMP%]{width:30%}",
              ],
              data: { animation: [ev()] },
            })),
            t
          );
        })(),
        Sv = (() => {
          class t {
            transform(t, e) {
              return "" !== e
                ? t.filter((t) => t.name.includes(e) || t.email.includes(e))
                : t;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵpipe = Kt({ name: "filterByNameEmail", type: t, pure: !0 })),
            t
          );
        })(),
        xv = (() => {
          class t {
            transform(t, e) {
              return t.filter((t) => t.department === e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵpipe = Kt({ name: "department", type: t, pure: !0 })),
            t
          );
        })();
      function Av(t, e) {
        1 & t && xo(0, "app-spinner");
      }
      const Dv = function (t, e, n, r) {
        return {
          "bg-experienced": t,
          "bg-advanced": e,
          "bg-senior": n,
          "bg-expert": r,
        };
      };
      function kv(t, e) {
        if (
          (1 & t &&
            (Eo(0, "div", 13),
            Eo(1, "div", 14),
            Eo(2, "div", 5),
            xo(3, "fa-icon", 15),
            Eo(4, "p"),
            Eo(5, "span", 16),
            qo(6),
            So(),
            So(),
            Eo(7, "h5", 6),
            qo(8),
            So(),
            Eo(9, "p", 17),
            qo(10),
            So(),
            So(),
            So(),
            So()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = Po(2);
          qs(3),
            _o("icon", n.faUser),
            qs(2),
            _o(
              "ngClass",
              yl(
                5,
                Dv,
                "Experienced" === t.expertise,
                "Advanced" === t.expertise,
                "Senior" === t.expertise,
                "Expert" === t.expertise
              )
            ),
            qs(1),
            Wo(t.expertise),
            qs(2),
            Wo(t.name),
            qs(2),
            Qo(" ", t.email, " ");
        }
      }
      function Tv(t, e) {
        if (
          (1 & t &&
            (Eo(0, "div", 13),
            Eo(1, "div", 14),
            Eo(2, "div", 5),
            xo(3, "fa-icon", 15),
            Eo(4, "p"),
            Eo(5, "span", 16),
            qo(6),
            So(),
            So(),
            Eo(7, "h5", 6),
            qo(8),
            So(),
            Eo(9, "p", 17),
            qo(10),
            So(),
            So(),
            So(),
            So()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = Po(2);
          qs(3),
            _o("icon", n.faUser),
            qs(2),
            _o(
              "ngClass",
              yl(
                5,
                Dv,
                "Experienced" === t.expertise,
                "Advanced" === t.expertise,
                "Senior" === t.expertise,
                "Expert" === t.expertise
              )
            ),
            qs(1),
            Wo(t.expertise),
            qs(2),
            Wo(t.name),
            qs(2),
            Qo(" ", t.email, " ");
        }
      }
      function Ov(t, e) {
        if (1 & t) {
          const t = Ao();
          Eo(0, "div", 2),
            Eo(1, "div", 3),
            Eo(2, "div", 4),
            Eo(3, "div", 5),
            Eo(4, "h5", 6),
            qo(5, "Marketing"),
            So(),
            Eo(6, "input", 7, 8),
            To("keyup", function () {
              Fe(t);
              const e = vo(7);
              return Po().searchUsers(e.value, "Marketing");
            }),
            So(),
            Eo(8, "div", 9),
            wo(9, kv, 11, 10, "div", 10),
            vl(10, "filterByNameEmail"),
            vl(11, "department"),
            So(),
            So(),
            So(),
            So(),
            Eo(12, "div", 11),
            Eo(13, "div", 4),
            Eo(14, "div", 5),
            Eo(15, "h5", 6),
            qo(16, "Development"),
            So(),
            Eo(17, "input", 7, 12),
            To("keyup", function () {
              Fe(t);
              const e = vo(18);
              return Po().searchUsers(e.value, "Development");
            }),
            So(),
            Eo(19, "div", 9),
            wo(20, Tv, 11, 10, "div", 10),
            vl(21, "filterByNameEmail"),
            vl(22, "department"),
            So(),
            So(),
            So(),
            So(),
            So();
        }
        if (2 & t) {
          const t = Po();
          _o("@loading", !t.users.length),
            qs(9),
            _o(
              "ngForOf",
              _l(
                10,
                3,
                _l(11, 6, t.users, "Marketing"),
                t.searchMarketingKeyWord
              )
            ),
            qs(11),
            _o(
              "ngForOf",
              _l(
                21,
                9,
                _l(22, 12, t.users, "Development"),
                t.searchDevelopmentKeyWord
              )
            );
        }
      }
      let Fv = (() => {
        class t {
          constructor(t) {
            (this.usersService = t),
              (this.faUser = Yf),
              (this.searchDevelopmentKeyWord = ""),
              (this.searchMarketingKeyWord = ""),
              (this.users = []);
          }
          ngOnInit() {
            (this.usersSubscription = this.getUsers().subscribe(
              ({ users: t, ok: e }) => {
                e && (this.users = t.map(this.setUserExpertise));
              }
            )),
              (this.userCreatedSubscription = this.usersService
                .getUserCreatedSubsription()
                .subscribe((t) => {
                  this.users = [...this.users, this.setUserExpertise(t)];
                }));
          }
          ngOnDestroy() {
            this.usersSubscription.unsubscribe(),
              this.userCreatedSubscription.unsubscribe();
          }
          setUserExpertise(t) {
            let e = "Experienced";
            const n = ((t) => {
              const e = new Date(t),
                n = new Date(),
                r = Math.abs(n.getTime() - e.getTime());
              return Math.ceil(r / 864e5);
            })(t.created);
            return (
              n > 1 && n <= 2
                ? (e = "Advanced")
                : n > 2 && n <= 3
                ? (e = "Senior")
                : n >= 4 && (e = "Expert"),
              Object.assign(Object.assign({}, t), { expertise: e })
            );
          }
          getUsers() {
            return this.usersService.getUsers();
          }
          searchUsers(t, e) {
            "Marketing" === e
              ? (this.searchMarketingKeyWord = t)
              : (this.searchDevelopmentKeyWord = t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(bo(Iw));
          }),
          (t.ɵcmp = Ut({
            type: t,
            selectors: [["app-departments"]],
            decls: 2,
            vars: 2,
            consts: [
              [4, "ngIf"],
              ["class", "row", 4, "ngIf"],
              [1, "row"],
              ["id", "marketing", 1, "col-md-6"],
              [1, "card"],
              [1, "card-body"],
              [1, "card-title"],
              [
                "type",
                "text",
                "placeholder",
                "Search user...",
                1,
                "form-control",
                3,
                "keyup",
              ],
              ["inputMarketingSearch", ""],
              [1, "row", "row-cols-1", "row-cols-md-3", "g-4"],
              ["class", "col", 4, "ngFor", "ngForOf"],
              ["id", "development", 1, "col-md-6"],
              ["inputDevelopmentSearch", ""],
              [1, "col"],
              [1, "card", "h-100"],
              ["size", "6x", 1, "fa-card-user", 3, "icon"],
              [1, "badge", "rounded-pill", 3, "ngClass"],
              [1, "card-text"],
            ],
            template: function (t, e) {
              1 & t &&
                (wo(0, Av, 1, 0, "app-spinner", 0),
                wo(1, Ov, 23, 15, "div", 1)),
                2 & t &&
                  (_o("ngIf", !e.users.length),
                  qs(1),
                  _o("ngIf", e.users.length));
            },
            directives: [pc, nv, hc, bg, uc],
            pipes: [Sv, xv],
            styles: [
              ".badge[_ngcontent-%COMP%]{color:#fff}.bg-experienced[_ngcontent-%COMP%]{background-color:#58dcad}.bg-advanced[_ngcontent-%COMP%]{background-color:#66a5ed}.bg-senior[_ngcontent-%COMP%]{background-color:#9775e5}.bg-expert[_ngcontent-%COMP%]{background-color:#efa651}.card-body[_ngcontent-%COMP%]{text-align:center}.card-img-top[_ngcontent-%COMP%]{padding:20px}.col[_ngcontent-%COMP%]{margin-top:1em;margin-bottom:1em}.fa-card-user[_ngcontent-%COMP%]{color:grey;text-align:center;margin-top:1em}",
            ],
            data: { animation: [ev()] },
          })),
          t
        );
      })();
      function Pv(t, e) {
        1 & t && xo(0, "app-users");
      }
      function Iv(t, e) {
        1 & t && xo(0, "app-departments");
      }
      const Rv = [
        {
          path: "users",
          component: (() => {
            class t {
              constructor() {
                (this.faColumns = Wf),
                  (this.faTable = Kf),
                  (this.showTable = !0);
              }
              ngOnInit() {}
              toggleView() {
                this.showTable = !this.showTable;
              }
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)();
              }),
              (t.ɵcmp = Ut({
                type: t,
                selectors: [["app-toggle-view"]],
                decls: 15,
                vars: 4,
                consts: [
                  [1, "row", "gy-2"],
                  [1, "col-md-2"],
                  [1, "switch-button"],
                  [1, "switch-button-columns", 3, "icon"],
                  ["type", "checkbox", 1, "switch-button-checkbox", 3, "click"],
                  ["for", "", 1, "switch-button-label"],
                  [1, "switch-button-label-span"],
                  [3, "icon"],
                  [1, "col-md-10", "text-right"],
                  [1, "col-md-12"],
                  [4, "ngIf"],
                ],
                template: function (t, e) {
                  1 & t &&
                    (Eo(0, "div"),
                    Eo(1, "div", 0),
                    Eo(2, "div", 1),
                    Eo(3, "div", 2),
                    xo(4, "fa-icon", 3),
                    Eo(5, "input", 4),
                    To("click", function () {
                      return e.toggleView();
                    }),
                    So(),
                    Eo(6, "label", 5),
                    Eo(7, "span", 6),
                    xo(8, "fa-icon", 7),
                    So(),
                    So(),
                    So(),
                    So(),
                    Eo(9, "div", 8),
                    xo(10, "app-add-row"),
                    So(),
                    So(),
                    Eo(11, "div", 0),
                    Eo(12, "div", 9),
                    wo(13, Pv, 1, 0, "app-users", 10),
                    wo(14, Iv, 1, 0, "app-departments", 10),
                    So(),
                    So(),
                    So()),
                    2 & t &&
                      (qs(4),
                      _o("icon", e.faColumns),
                      qs(4),
                      _o("icon", e.faTable),
                      qs(5),
                      _o("ngIf", e.showTable),
                      qs(1),
                      _o("ngIf", !e.showTable));
                },
                directives: [bg, qw, pc, Ev, Fv],
                styles: [
                  '*[_ngcontent-%COMP%]{box-sizing:border-box;padding:0;margin:0}.switch-button[_ngcontent-%COMP%]{background:#d3d8d6;border-radius:30px;overflow:hidden;width:121px;height:35px;text-align:center;font-size:18px;letter-spacing:1px;color:#fff;padding-right:55px;position:relative}.switch-button-columns[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;width:175px;display:flex;align-items:center;justify-content:center;z-index:3;pointer-events:none}.switch-button-checkbox[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:0;left:0;bottom:0;width:100%;height:100%;opacity:0;z-index:2}.switch-button-checkbox[_ngcontent-%COMP%]:checked + .switch-button-label[_ngcontent-%COMP%]:before{transform:translateX(0);transition:transform .3s linear}.switch-button-checkbox[_ngcontent-%COMP%] + .switch-button-label[_ngcontent-%COMP%]{position:relative;padding:15px 0;display:block;-webkit-user-select:none;user-select:none;pointer-events:none}.switch-button-checkbox[_ngcontent-%COMP%] + .switch-button-label[_ngcontent-%COMP%]:before{content:"";background:#4fba92;height:35px;width:100%;position:absolute;left:0;top:0;border-radius:30px;transform:translateX(55px);transition:transform .3s}.switch-button-checkbox[_ngcontent-%COMP%] + .switch-button-label[_ngcontent-%COMP%]   .switch-button-label-span[_ngcontent-%COMP%]{position:relative;top:-10px;left:80%;width:65px}',
                ],
              })),
              t
            );
          })(),
        },
        { path: "**", redirectTo: "users", pathMatch: "full" },
      ];
      let Nv = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({ imports: [[Mf.forRoot(Rv)], Mf] })),
            t
          );
        })(),
        Mv = (() => {
          class t {
            constructor() {
              this.title = "Plytix Code Challenge";
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = Ut({
              type: t,
              selectors: [["app-root"]],
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && xo(0, "router-outlet");
              },
              directives: [Af],
              styles: [""],
            })),
            t
          );
        })();
      function jv() {
        return "undefined" != typeof window && void 0 !== window.document;
      }
      function Vv() {
        return (
          "undefined" != typeof process &&
          "[object process]" === {}.toString.call(process)
        );
      }
      function Bv(t) {
        switch (t.length) {
          case 0:
            return new Jw();
          case 1:
            return t[0];
          default:
            return new tv(t);
        }
      }
      function Lv(t, e, n, r, s = {}, i = {}) {
        const o = [],
          a = [];
        let l = -1,
          u = null;
        if (
          (r.forEach((t) => {
            const n = t.offset,
              r = n == l,
              c = (r && u) || {};
            Object.keys(t).forEach((n) => {
              let r = n,
                a = t[n];
              if ("offset" !== n)
                switch (((r = e.normalizePropertyName(r, o)), a)) {
                  case "!":
                    a = s[n];
                    break;
                  case Qw:
                    a = i[n];
                    break;
                  default:
                    a = e.normalizeStyleValue(n, r, a, o);
                }
              c[r] = a;
            }),
              r || a.push(c),
              (u = c),
              (l = n);
          }),
          o.length)
        ) {
          const t = "\n - ";
          throw new Error(
            `Unable to animate due to the following errors:${t}${o.join(t)}`
          );
        }
        return a;
      }
      function Uv(t, e, n, r) {
        switch (e) {
          case "start":
            t.onStart(() => r(n && zv(n, "start", t)));
            break;
          case "done":
            t.onDone(() => r(n && zv(n, "done", t)));
            break;
          case "destroy":
            t.onDestroy(() => r(n && zv(n, "destroy", t)));
        }
      }
      function zv(t, e, n) {
        const r = n.totalTime,
          s = Hv(
            t.element,
            t.triggerName,
            t.fromState,
            t.toState,
            e || t.phaseName,
            null == r ? t.totalTime : r,
            !!n.disabled
          ),
          i = t._data;
        return null != i && (s._data = i), s;
      }
      function Hv(t, e, n, r, s = "", i = 0, o) {
        return {
          element: t,
          triggerName: e,
          fromState: n,
          toState: r,
          phaseName: s,
          totalTime: i,
          disabled: !!o,
        };
      }
      function $v(t, e, n) {
        let r;
        return (
          t instanceof Map
            ? ((r = t.get(e)), r || t.set(e, (r = n)))
            : ((r = t[e]), r || (r = t[e] = n)),
          r
        );
      }
      function qv(t) {
        const e = t.indexOf(":");
        return [t.substring(1, e), t.substr(e + 1)];
      }
      let Wv = (t, e) => !1,
        Qv = (t, e) => !1,
        Kv = (t, e, n) => [];
      const Gv = Vv();
      (Gv || "undefined" != typeof Element) &&
        ((Wv = jv()
          ? (t, e) => {
              for (; e && e !== document.documentElement; ) {
                if (e === t) return !0;
                e = e.parentNode || e.host;
              }
              return !1;
            }
          : (t, e) => t.contains(e)),
        (Qv = (() => {
          if (Gv || Element.prototype.matches) return (t, e) => t.matches(e);
          {
            const t = Element.prototype,
              e =
                t.matchesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector ||
                t.webkitMatchesSelector;
            return e ? (t, n) => e.apply(t, [n]) : Qv;
          }
        })()),
        (Kv = (t, e, n) => {
          let r = [];
          if (n) {
            const n = t.querySelectorAll(e);
            for (let t = 0; t < n.length; t++) r.push(n[t]);
          } else {
            const n = t.querySelector(e);
            n && r.push(n);
          }
          return r;
        }));
      let Zv = null,
        Yv = !1;
      function Xv(t) {
        Zv ||
          ((Zv = ("undefined" != typeof document ? document.body : null) || {}),
          (Yv = !!Zv.style && "WebkitAppearance" in Zv.style));
        let e = !0;
        return (
          Zv.style &&
            !(function (t) {
              return "ebkit" == t.substring(1, 6);
            })(t) &&
            ((e = t in Zv.style), !e && Yv) &&
            (e =
              "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in Zv.style),
          e
        );
      }
      const Jv = Qv,
        tb = Wv,
        eb = Kv;
      function nb(t) {
        const e = {};
        return (
          Object.keys(t).forEach((n) => {
            const r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
            e[r] = t[n];
          }),
          e
        );
      }
      let rb = (() => {
          class t {
            validateStyleProperty(t) {
              return Xv(t);
            }
            matchesElement(t, e) {
              return Jv(t, e);
            }
            containsElement(t, e) {
              return tb(t, e);
            }
            query(t, e, n) {
              return eb(t, e, n);
            }
            computeStyle(t, e, n) {
              return n || "";
            }
            animate(t, e, n, r, s, i = [], o) {
              return new Jw(n, r);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        sb = (() => {
          class t {}
          return (t.NOOP = new rb()), t;
        })();
      const ib = "ng-enter",
        ob = "ng-leave",
        ab = "ng-trigger",
        lb = ".ng-trigger",
        ub = "ng-animating",
        cb = ".ng-animating";
      function hb(t) {
        if ("number" == typeof t) return t;
        const e = t.match(/^(-?[\.\d]+)(m?s)/);
        return !e || e.length < 2 ? 0 : db(parseFloat(e[1]), e[2]);
      }
      function db(t, e) {
        switch (e) {
          case "s":
            return 1e3 * t;
          default:
            return t;
        }
      }
      function pb(t, e, n) {
        return t.hasOwnProperty("duration")
          ? t
          : (function (t, e, n) {
              let r,
                s = 0,
                i = "";
              if ("string" == typeof t) {
                const n = t.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === n)
                  return (
                    e.push(`The provided timing value "${t}" is invalid.`),
                    { duration: 0, delay: 0, easing: "" }
                  );
                r = db(parseFloat(n[1]), n[2]);
                const o = n[3];
                null != o && (s = db(parseFloat(o), n[4]));
                const a = n[5];
                a && (i = a);
              } else r = t;
              if (!n) {
                let n = !1,
                  i = e.length;
                r < 0 &&
                  (e.push(
                    "Duration values below 0 are not allowed for this animation step."
                  ),
                  (n = !0)),
                  s < 0 &&
                    (e.push(
                      "Delay values below 0 are not allowed for this animation step."
                    ),
                    (n = !0)),
                  n &&
                    e.splice(
                      i,
                      0,
                      `The provided timing value "${t}" is invalid.`
                    );
              }
              return { duration: r, delay: s, easing: i };
            })(t, e, n);
      }
      function fb(t, e = {}) {
        return (
          Object.keys(t).forEach((n) => {
            e[n] = t[n];
          }),
          e
        );
      }
      function mb(t, e, n = {}) {
        if (e) for (let r in t) n[r] = t[r];
        else fb(t, n);
        return n;
      }
      function gb(t, e, n) {
        return n ? e + ":" + n + ";" : "";
      }
      function yb(t) {
        let e = "";
        for (let n = 0; n < t.style.length; n++) {
          const r = t.style.item(n);
          e += gb(0, r, t.style.getPropertyValue(r));
        }
        for (const n in t.style)
          t.style.hasOwnProperty(n) &&
            !n.startsWith("_") &&
            (e += gb(
              0,
              n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              t.style[n]
            ));
        t.setAttribute("style", e);
      }
      function wb(t, e, n) {
        t.style &&
          (Object.keys(e).forEach((r) => {
            const s = Ab(r);
            n && !n.hasOwnProperty(r) && (n[r] = t.style[s]),
              (t.style[s] = e[r]);
          }),
          Vv() && yb(t));
      }
      function vb(t, e) {
        t.style &&
          (Object.keys(e).forEach((e) => {
            const n = Ab(e);
            t.style[n] = "";
          }),
          Vv() && yb(t));
      }
      function bb(t) {
        return Array.isArray(t) ? (1 == t.length ? t[0] : Gw(t)) : t;
      }
      const _b = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function Cb(t) {
        let e = [];
        if ("string" == typeof t) {
          let n;
          for (; (n = _b.exec(t)); ) e.push(n[1]);
          _b.lastIndex = 0;
        }
        return e;
      }
      function Eb(t, e, n) {
        const r = t.toString(),
          s = r.replace(_b, (t, r) => {
            let s = e[r];
            return (
              e.hasOwnProperty(r) ||
                (n.push(`Please provide a value for the animation param ${r}`),
                (s = "")),
              s.toString()
            );
          });
        return s == r ? t : s;
      }
      function Sb(t) {
        const e = [];
        let n = t.next();
        for (; !n.done; ) e.push(n.value), (n = t.next());
        return e;
      }
      const xb = /-+([a-z0-9])/g;
      function Ab(t) {
        return t.replace(xb, (...t) => t[1].toUpperCase());
      }
      function Db(t, e) {
        return 0 === t || 0 === e;
      }
      function kb(t, e, n) {
        const r = Object.keys(n);
        if (r.length && e.length) {
          let i = e[0],
            o = [];
          if (
            (r.forEach((t) => {
              i.hasOwnProperty(t) || o.push(t), (i[t] = n[t]);
            }),
            o.length)
          )
            for (var s = 1; s < e.length; s++) {
              let n = e[s];
              o.forEach(function (e) {
                n[e] = Ob(t, e);
              });
            }
        }
        return e;
      }
      function Tb(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n);
          case 0:
            return t.visitState(e, n);
          case 1:
            return t.visitTransition(e, n);
          case 2:
            return t.visitSequence(e, n);
          case 3:
            return t.visitGroup(e, n);
          case 4:
            return t.visitAnimate(e, n);
          case 5:
            return t.visitKeyframes(e, n);
          case 6:
            return t.visitStyle(e, n);
          case 8:
            return t.visitReference(e, n);
          case 9:
            return t.visitAnimateChild(e, n);
          case 10:
            return t.visitAnimateRef(e, n);
          case 11:
            return t.visitQuery(e, n);
          case 12:
            return t.visitStagger(e, n);
          default:
            throw new Error(
              `Unable to resolve animation metadata node #${e.type}`
            );
        }
      }
      function Ob(t, e) {
        return window.getComputedStyle(t)[e];
      }
      const Fb = "*";
      function Pb(t, e) {
        const n = [];
        return (
          "string" == typeof t
            ? t.split(/\s*,\s*/).forEach((t) =>
                (function (t, e, n) {
                  if (":" == t[0]) {
                    const r = (function (t, e) {
                      switch (t) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (t, e) => parseFloat(e) > parseFloat(t);
                        case ":decrement":
                          return (t, e) => parseFloat(e) < parseFloat(t);
                        default:
                          return (
                            e.push(
                              `The transition alias value "${t}" is not supported`
                            ),
                            "* => *"
                          );
                      }
                    })(t, n);
                    if ("function" == typeof r) return void e.push(r);
                    t = r;
                  }
                  const r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == r || r.length < 4)
                    return (
                      n.push(
                        `The provided transition expression "${t}" is not supported`
                      ),
                      e
                    );
                  const s = r[1],
                    i = r[2],
                    o = r[3];
                  e.push(Nb(s, o)),
                    "<" != i[0] || (s == Fb && o == Fb) || e.push(Nb(o, s));
                })(t, n, e)
              )
            : n.push(t),
          n
        );
      }
      const Ib = new Set(["true", "1"]),
        Rb = new Set(["false", "0"]);
      function Nb(t, e) {
        const n = Ib.has(t) || Rb.has(t),
          r = Ib.has(e) || Rb.has(e);
        return (s, i) => {
          let o = t == Fb || t == s,
            a = e == Fb || e == i;
          return (
            !o && n && "boolean" == typeof s && (o = s ? Ib.has(t) : Rb.has(t)),
            !a && r && "boolean" == typeof i && (a = i ? Ib.has(e) : Rb.has(e)),
            o && a
          );
        };
      }
      const Mb = new RegExp("s*:selfs*,?", "g");
      function jb(t, e, n) {
        return new Vb(t).build(e, n);
      }
      class Vb {
        constructor(t) {
          this._driver = t;
        }
        build(t, e) {
          const n = new Bb(e);
          return this._resetContextStyleTimingState(n), Tb(this, bb(t), n);
        }
        _resetContextStyleTimingState(t) {
          (t.currentQuerySelector = ""),
            (t.collectedStyles = {}),
            (t.collectedStyles[""] = {}),
            (t.currentTime = 0);
        }
        visitTrigger(t, e) {
          let n = (e.queryCount = 0),
            r = (e.depCount = 0);
          const s = [],
            i = [];
          return (
            "@" == t.name.charAt(0) &&
              e.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            t.definitions.forEach((t) => {
              if ((this._resetContextStyleTimingState(e), 0 == t.type)) {
                const n = t,
                  r = n.name;
                r
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((t) => {
                    (n.name = t), s.push(this.visitState(n, e));
                  }),
                  (n.name = r);
              } else if (1 == t.type) {
                const s = this.visitTransition(t, e);
                (n += s.queryCount), (r += s.depCount), i.push(s);
              } else
                e.errors.push(
                  "only state() and transition() definitions can sit inside of a trigger()"
                );
            }),
            {
              type: 7,
              name: t.name,
              states: s,
              transitions: i,
              queryCount: n,
              depCount: r,
              options: null,
            }
          );
        }
        visitState(t, e) {
          const n = this.visitStyle(t.styles, e),
            r = (t.options && t.options.params) || null;
          if (n.containsDynamicStyles) {
            const s = new Set(),
              i = r || {};
            if (
              (n.styles.forEach((t) => {
                if (Lb(t)) {
                  const e = t;
                  Object.keys(e).forEach((t) => {
                    Cb(e[t]).forEach((t) => {
                      i.hasOwnProperty(t) || s.add(t);
                    });
                  });
                }
              }),
              s.size)
            ) {
              const n = Sb(s.values());
              e.errors.push(
                `state("${
                  t.name
                }", ...) must define default values for all the following style substitutions: ${n.join(
                  ", "
                )}`
              );
            }
          }
          return {
            type: 0,
            name: t.name,
            style: n,
            options: r ? { params: r } : null,
          };
        }
        visitTransition(t, e) {
          (e.queryCount = 0), (e.depCount = 0);
          const n = Tb(this, bb(t.animation), e);
          return {
            type: 1,
            matchers: Pb(t.expr, e.errors),
            animation: n,
            queryCount: e.queryCount,
            depCount: e.depCount,
            options: Ub(t.options),
          };
        }
        visitSequence(t, e) {
          return {
            type: 2,
            steps: t.steps.map((t) => Tb(this, t, e)),
            options: Ub(t.options),
          };
        }
        visitGroup(t, e) {
          const n = e.currentTime;
          let r = 0;
          const s = t.steps.map((t) => {
            e.currentTime = n;
            const s = Tb(this, t, e);
            return (r = Math.max(r, e.currentTime)), s;
          });
          return (
            (e.currentTime = r), { type: 3, steps: s, options: Ub(t.options) }
          );
        }
        visitAnimate(t, e) {
          const n = (function (t, e) {
            let n = null;
            if (t.hasOwnProperty("duration")) n = t;
            else if ("number" == typeof t) return zb(pb(t, e).duration, 0, "");
            const r = t;
            if (
              r
                .split(/\s+/)
                .some((t) => "{" == t.charAt(0) && "{" == t.charAt(1))
            ) {
              const t = zb(0, 0, "");
              return (t.dynamic = !0), (t.strValue = r), t;
            }
            return (n = n || pb(r, e)), zb(n.duration, n.delay, n.easing);
          })(t.timings, e.errors);
          let r;
          e.currentAnimateTimings = n;
          let s = t.styles ? t.styles : Zw({});
          if (5 == s.type) r = this.visitKeyframes(s, e);
          else {
            let s = t.styles,
              i = !1;
            if (!s) {
              i = !0;
              const t = {};
              n.easing && (t.easing = n.easing), (s = Zw(t));
            }
            e.currentTime += n.duration + n.delay;
            const o = this.visitStyle(s, e);
            (o.isEmptyStep = i), (r = o);
          }
          return (
            (e.currentAnimateTimings = null),
            { type: 4, timings: n, style: r, options: null }
          );
        }
        visitStyle(t, e) {
          const n = this._makeStyleAst(t, e);
          return this._validateStyleAst(n, e), n;
        }
        _makeStyleAst(t, e) {
          const n = [];
          Array.isArray(t.styles)
            ? t.styles.forEach((t) => {
                "string" == typeof t
                  ? t == Qw
                    ? n.push(t)
                    : e.errors.push(
                        `The provided style string value ${t} is not allowed.`
                      )
                  : n.push(t);
              })
            : n.push(t.styles);
          let r = !1,
            s = null;
          return (
            n.forEach((t) => {
              if (Lb(t)) {
                const e = t,
                  n = e.easing;
                if ((n && ((s = n), delete e.easing), !r))
                  for (let t in e)
                    if (e[t].toString().indexOf("{{") >= 0) {
                      r = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: n,
              easing: s,
              offset: t.offset,
              containsDynamicStyles: r,
              options: null,
            }
          );
        }
        _validateStyleAst(t, e) {
          const n = e.currentAnimateTimings;
          let r = e.currentTime,
            s = e.currentTime;
          n && s > 0 && (s -= n.duration + n.delay),
            t.styles.forEach((t) => {
              "string" != typeof t &&
                Object.keys(t).forEach((n) => {
                  if (!this._driver.validateStyleProperty(n))
                    return void e.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    );
                  const i = e.collectedStyles[e.currentQuerySelector],
                    o = i[n];
                  let a = !0;
                  o &&
                    (s != r &&
                      s >= o.startTime &&
                      r <= o.endTime &&
                      (e.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${s}ms" and "${r}ms"`
                      ),
                      (a = !1)),
                    (s = o.startTime)),
                    a && (i[n] = { startTime: s, endTime: r }),
                    e.options &&
                      (function (t, e, n) {
                        const r = e.params || {},
                          s = Cb(t);
                        s.length &&
                          s.forEach((t) => {
                            r.hasOwnProperty(t) ||
                              n.push(
                                `Unable to resolve the local animation param ${t} in the given list of values`
                              );
                          });
                      })(t[n], e.options, e.errors);
                });
            });
        }
        visitKeyframes(t, e) {
          const n = { type: 5, styles: [], options: null };
          if (!e.currentAnimateTimings)
            return (
              e.errors.push(
                "keyframes() must be placed inside of a call to animate()"
              ),
              n
            );
          let r = 0;
          const s = [];
          let i = !1,
            o = !1,
            a = 0;
          const l = t.steps.map((t) => {
            const n = this._makeStyleAst(t, e);
            let l =
                null != n.offset
                  ? n.offset
                  : (function (t) {
                      if ("string" == typeof t) return null;
                      let e = null;
                      if (Array.isArray(t))
                        t.forEach((t) => {
                          if (Lb(t) && t.hasOwnProperty("offset")) {
                            const n = t;
                            (e = parseFloat(n.offset)), delete n.offset;
                          }
                        });
                      else if (Lb(t) && t.hasOwnProperty("offset")) {
                        const n = t;
                        (e = parseFloat(n.offset)), delete n.offset;
                      }
                      return e;
                    })(n.styles),
              u = 0;
            return (
              null != l && (r++, (u = n.offset = l)),
              (o = o || u < 0 || u > 1),
              (i = i || u < a),
              (a = u),
              s.push(u),
              n
            );
          });
          o &&
            e.errors.push(
              "Please ensure that all keyframe offsets are between 0 and 1"
            ),
            i &&
              e.errors.push(
                "Please ensure that all keyframe offsets are in order"
              );
          const u = t.steps.length;
          let c = 0;
          r > 0 && r < u
            ? e.errors.push(
                "Not all style() steps within the declared keyframes() contain offsets"
              )
            : 0 == r && (c = 1 / (u - 1));
          const h = u - 1,
            d = e.currentTime,
            p = e.currentAnimateTimings,
            f = p.duration;
          return (
            l.forEach((t, r) => {
              const i = c > 0 ? (r == h ? 1 : c * r) : s[r],
                o = i * f;
              (e.currentTime = d + p.delay + o),
                (p.duration = o),
                this._validateStyleAst(t, e),
                (t.offset = i),
                n.styles.push(t);
            }),
            n
          );
        }
        visitReference(t, e) {
          return {
            type: 8,
            animation: Tb(this, bb(t.animation), e),
            options: Ub(t.options),
          };
        }
        visitAnimateChild(t, e) {
          return e.depCount++, { type: 9, options: Ub(t.options) };
        }
        visitAnimateRef(t, e) {
          return {
            type: 10,
            animation: this.visitReference(t.animation, e),
            options: Ub(t.options),
          };
        }
        visitQuery(t, e) {
          const n = e.currentQuerySelector,
            r = t.options || {};
          e.queryCount++, (e.currentQuery = t);
          const [s, i] = (function (t) {
            const e = !!t.split(/\s*,\s*/).find((t) => ":self" == t);
            return (
              e && (t = t.replace(Mb, "")),
              [
                (t = t
                  .replace(/@\*/g, lb)
                  .replace(/@\w+/g, (t) => ".ng-trigger-" + t.substr(1))
                  .replace(/:animating/g, cb)),
                e,
              ]
            );
          })(t.selector);
          (e.currentQuerySelector = n.length ? n + " " + s : s),
            $v(e.collectedStyles, e.currentQuerySelector, {});
          const o = Tb(this, bb(t.animation), e);
          return (
            (e.currentQuery = null),
            (e.currentQuerySelector = n),
            {
              type: 11,
              selector: s,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: i,
              animation: o,
              originalSelector: t.selector,
              options: Ub(t.options),
            }
          );
        }
        visitStagger(t, e) {
          e.currentQuery ||
            e.errors.push("stagger() can only be used inside of query()");
          const n =
            "full" === t.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : pb(t.timings, e.errors, !0);
          return {
            type: 12,
            animation: Tb(this, bb(t.animation), e),
            timings: n,
            options: null,
          };
        }
      }
      class Bb {
        constructor(t) {
          (this.errors = t),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function Lb(t) {
        return !Array.isArray(t) && "object" == typeof t;
      }
      function Ub(t) {
        var e;
        return (
          t
            ? (t = fb(t)).params && (t.params = (e = t.params) ? fb(e) : null)
            : (t = {}),
          t
        );
      }
      function zb(t, e, n) {
        return { duration: t, delay: e, easing: n };
      }
      function Hb(t, e, n, r, s, i, o = null, a = !1) {
        return {
          type: 1,
          element: t,
          keyframes: e,
          preStyleProps: n,
          postStyleProps: r,
          duration: s,
          delay: i,
          totalTime: s + i,
          easing: o,
          subTimeline: a,
        };
      }
      class $b {
        constructor() {
          this._map = new Map();
        }
        consume(t) {
          let e = this._map.get(t);
          return e ? this._map.delete(t) : (e = []), e;
        }
        append(t, e) {
          let n = this._map.get(t);
          n || this._map.set(t, (n = [])), n.push(...e);
        }
        has(t) {
          return this._map.has(t);
        }
        clear() {
          this._map.clear();
        }
      }
      const qb = new RegExp(":enter", "g"),
        Wb = new RegExp(":leave", "g");
      function Qb(t, e, n, r, s, i = {}, o = {}, a, l, u = []) {
        return new Kb().buildKeyframes(t, e, n, r, s, i, o, a, l, u);
      }
      class Kb {
        buildKeyframes(t, e, n, r, s, i, o, a, l, u = []) {
          l = l || new $b();
          const c = new Zb(t, e, l, r, s, u, []);
          (c.options = a),
            c.currentTimeline.setStyles([i], null, c.errors, a),
            Tb(this, n, c);
          const h = c.timelines.filter((t) => t.containsAnimation());
          if (h.length && Object.keys(o).length) {
            const t = h[h.length - 1];
            t.allowOnlyTimelineStyles() || t.setStyles([o], null, c.errors, a);
          }
          return h.length
            ? h.map((t) => t.buildKeyframes())
            : [Hb(e, [], [], [], 0, 0, "", !1)];
        }
        visitTrigger(t, e) {}
        visitState(t, e) {}
        visitTransition(t, e) {}
        visitAnimateChild(t, e) {
          const n = e.subInstructions.consume(e.element);
          if (n) {
            const r = e.createSubContext(t.options),
              s = e.currentTimeline.currentTime,
              i = this._visitSubInstructions(n, r, r.options);
            s != i && e.transformIntoNewTimeline(i);
          }
          e.previousNode = t;
        }
        visitAnimateRef(t, e) {
          const n = e.createSubContext(t.options);
          n.transformIntoNewTimeline(),
            this.visitReference(t.animation, n),
            e.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (e.previousNode = t);
        }
        _visitSubInstructions(t, e, n) {
          let r = e.currentTimeline.currentTime;
          const s = null != n.duration ? hb(n.duration) : null,
            i = null != n.delay ? hb(n.delay) : null;
          return (
            0 !== s &&
              t.forEach((t) => {
                const n = e.appendInstructionToTimeline(t, s, i);
                r = Math.max(r, n.duration + n.delay);
              }),
            r
          );
        }
        visitReference(t, e) {
          e.updateOptions(t.options, !0),
            Tb(this, t.animation, e),
            (e.previousNode = t);
        }
        visitSequence(t, e) {
          const n = e.subContextCount;
          let r = e;
          const s = t.options;
          if (
            s &&
            (s.params || s.delay) &&
            ((r = e.createSubContext(s)),
            r.transformIntoNewTimeline(),
            null != s.delay)
          ) {
            6 == r.previousNode.type &&
              (r.currentTimeline.snapshotCurrentStyles(),
              (r.previousNode = Gb));
            const t = hb(s.delay);
            r.delayNextStep(t);
          }
          t.steps.length &&
            (t.steps.forEach((t) => Tb(this, t, r)),
            r.currentTimeline.applyStylesToKeyframe(),
            r.subContextCount > n && r.transformIntoNewTimeline()),
            (e.previousNode = t);
        }
        visitGroup(t, e) {
          const n = [];
          let r = e.currentTimeline.currentTime;
          const s = t.options && t.options.delay ? hb(t.options.delay) : 0;
          t.steps.forEach((i) => {
            const o = e.createSubContext(t.options);
            s && o.delayNextStep(s),
              Tb(this, i, o),
              (r = Math.max(r, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline);
          }),
            n.forEach((t) => e.currentTimeline.mergeTimelineCollectedStyles(t)),
            e.transformIntoNewTimeline(r),
            (e.previousNode = t);
        }
        _visitTiming(t, e) {
          if (t.dynamic) {
            const n = t.strValue;
            return pb(e.params ? Eb(n, e.params, e.errors) : n, e.errors);
          }
          return { duration: t.duration, delay: t.delay, easing: t.easing };
        }
        visitAnimate(t, e) {
          const n = (e.currentAnimateTimings = this._visitTiming(t.timings, e)),
            r = e.currentTimeline;
          n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
          const s = t.style;
          5 == s.type
            ? this.visitKeyframes(s, e)
            : (e.incrementTime(n.duration),
              this.visitStyle(s, e),
              r.applyStylesToKeyframe()),
            (e.currentAnimateTimings = null),
            (e.previousNode = t);
        }
        visitStyle(t, e) {
          const n = e.currentTimeline,
            r = e.currentAnimateTimings;
          !r && n.getCurrentStyleProperties().length && n.forwardFrame();
          const s = (r && r.easing) || t.easing;
          t.isEmptyStep
            ? n.applyEmptyStep(s)
            : n.setStyles(t.styles, s, e.errors, e.options),
            (e.previousNode = t);
        }
        visitKeyframes(t, e) {
          const n = e.currentAnimateTimings,
            r = e.currentTimeline.duration,
            s = n.duration,
            i = e.createSubContext().currentTimeline;
          (i.easing = n.easing),
            t.styles.forEach((t) => {
              i.forwardTime((t.offset || 0) * s),
                i.setStyles(t.styles, t.easing, e.errors, e.options),
                i.applyStylesToKeyframe();
            }),
            e.currentTimeline.mergeTimelineCollectedStyles(i),
            e.transformIntoNewTimeline(r + s),
            (e.previousNode = t);
        }
        visitQuery(t, e) {
          const n = e.currentTimeline.currentTime,
            r = t.options || {},
            s = r.delay ? hb(r.delay) : 0;
          s &&
            (6 === e.previousNode.type ||
              (0 == n &&
                e.currentTimeline.getCurrentStyleProperties().length)) &&
            (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = Gb));
          let i = n;
          const o = e.invokeQuery(
            t.selector,
            t.originalSelector,
            t.limit,
            t.includeSelf,
            !!r.optional,
            e.errors
          );
          e.currentQueryTotal = o.length;
          let a = null;
          o.forEach((n, r) => {
            e.currentQueryIndex = r;
            const o = e.createSubContext(t.options, n);
            s && o.delayNextStep(s),
              n === e.element && (a = o.currentTimeline),
              Tb(this, t.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (i = Math.max(i, o.currentTimeline.currentTime));
          }),
            (e.currentQueryIndex = 0),
            (e.currentQueryTotal = 0),
            e.transformIntoNewTimeline(i),
            a &&
              (e.currentTimeline.mergeTimelineCollectedStyles(a),
              e.currentTimeline.snapshotCurrentStyles()),
            (e.previousNode = t);
        }
        visitStagger(t, e) {
          const n = e.parentContext,
            r = e.currentTimeline,
            s = t.timings,
            i = Math.abs(s.duration),
            o = i * (e.currentQueryTotal - 1);
          let a = i * e.currentQueryIndex;
          switch (s.duration < 0 ? "reverse" : s.easing) {
            case "reverse":
              a = o - a;
              break;
            case "full":
              a = n.currentStaggerTime;
          }
          const l = e.currentTimeline;
          a && l.delayNextStep(a);
          const u = l.currentTime;
          Tb(this, t.animation, e),
            (e.previousNode = t),
            (n.currentStaggerTime =
              r.currentTime - u + (r.startTime - n.currentTimeline.startTime));
        }
      }
      const Gb = {};
      class Zb {
        constructor(t, e, n, r, s, i, o, a) {
          (this._driver = t),
            (this.element = e),
            (this.subInstructions = n),
            (this._enterClassName = r),
            (this._leaveClassName = s),
            (this.errors = i),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = Gb),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = a || new Yb(this._driver, e, 0)),
            o.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(t, e) {
          if (!t) return;
          const n = t;
          let r = this.options;
          null != n.duration && (r.duration = hb(n.duration)),
            null != n.delay && (r.delay = hb(n.delay));
          const s = n.params;
          if (s) {
            let t = r.params;
            t || (t = this.options.params = {}),
              Object.keys(s).forEach((n) => {
                (e && t.hasOwnProperty(n)) || (t[n] = Eb(s[n], t, this.errors));
              });
          }
        }
        _copyOptions() {
          const t = {};
          if (this.options) {
            const e = this.options.params;
            if (e) {
              const n = (t.params = {});
              Object.keys(e).forEach((t) => {
                n[t] = e[t];
              });
            }
          }
          return t;
        }
        createSubContext(t = null, e, n) {
          const r = e || this.element,
            s = new Zb(
              this._driver,
              r,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(r, n || 0)
            );
          return (
            (s.previousNode = this.previousNode),
            (s.currentAnimateTimings = this.currentAnimateTimings),
            (s.options = this._copyOptions()),
            s.updateOptions(t),
            (s.currentQueryIndex = this.currentQueryIndex),
            (s.currentQueryTotal = this.currentQueryTotal),
            (s.parentContext = this),
            this.subContextCount++,
            s
          );
        }
        transformIntoNewTimeline(t) {
          return (
            (this.previousNode = Gb),
            (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(t, e, n) {
          const r = {
              duration: null != e ? e : t.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != n ? n : 0) +
                t.delay,
              easing: "",
            },
            s = new Xb(
              this._driver,
              t.element,
              t.keyframes,
              t.preStyleProps,
              t.postStyleProps,
              r,
              t.stretchStartingKeyframe
            );
          return this.timelines.push(s), r;
        }
        incrementTime(t) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
        }
        delayNextStep(t) {
          t > 0 && this.currentTimeline.delayNextStep(t);
        }
        invokeQuery(t, e, n, r, s, i) {
          let o = [];
          if ((r && o.push(this.element), t.length > 0)) {
            t = (t = t.replace(qb, "." + this._enterClassName)).replace(
              Wb,
              "." + this._leaveClassName
            );
            let e = this._driver.query(this.element, t, 1 != n);
            0 !== n &&
              (e = n < 0 ? e.slice(e.length + n, e.length) : e.slice(0, n)),
              o.push(...e);
          }
          return (
            s ||
              0 != o.length ||
              i.push(
                `\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          );
        }
      }
      class Yb {
        constructor(t, e, n, r) {
          (this._driver = t),
            (this.element = e),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = r),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles =
              this._elementTimelineStylesLookup.get(e)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                e,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(t) {
          const e =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || e
            ? (this.forwardTime(this.currentTime + t),
              e && this.snapshotCurrentStyles())
            : (this.startTime += t);
        }
        fork(t, e) {
          return (
            this.applyStylesToKeyframe(),
            new Yb(
              this._driver,
              t,
              e || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(t) {
          this.applyStylesToKeyframe(),
            (this.duration = t),
            this._loadKeyframe();
        }
        _updateStyle(t, e) {
          (this._localTimelineStyles[t] = e),
            (this._globalTimelineStyles[t] = e),
            (this._styleSummary[t] = { time: this.currentTime, value: e });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(t) {
          t && (this._previousKeyframe.easing = t),
            Object.keys(this._globalTimelineStyles).forEach((t) => {
              (this._backFill[t] = this._globalTimelineStyles[t] || Qw),
                (this._currentKeyframe[t] = Qw);
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(t, e, n, r) {
          e && (this._previousKeyframe.easing = e);
          const s = (r && r.params) || {},
            i = (function (t, e) {
              const n = {};
              let r;
              return (
                t.forEach((t) => {
                  "*" === t
                    ? ((r = r || Object.keys(e)),
                      r.forEach((t) => {
                        n[t] = Qw;
                      }))
                    : mb(t, !1, n);
                }),
                n
              );
            })(t, this._globalTimelineStyles);
          Object.keys(i).forEach((t) => {
            const e = Eb(i[t], s, n);
            (this._pendingStyles[t] = e),
              this._localTimelineStyles.hasOwnProperty(t) ||
                (this._backFill[t] = this._globalTimelineStyles.hasOwnProperty(
                  t
                )
                  ? this._globalTimelineStyles[t]
                  : Qw),
              this._updateStyle(t, e);
          });
        }
        applyStylesToKeyframe() {
          const t = this._pendingStyles,
            e = Object.keys(t);
          0 != e.length &&
            ((this._pendingStyles = {}),
            e.forEach((e) => {
              this._currentKeyframe[e] = t[e];
            }),
            Object.keys(this._localTimelineStyles).forEach((t) => {
              this._currentKeyframe.hasOwnProperty(t) ||
                (this._currentKeyframe[t] = this._localTimelineStyles[t]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((t) => {
            const e = this._localTimelineStyles[t];
            (this._pendingStyles[t] = e), this._updateStyle(t, e);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const t = [];
          for (let e in this._currentKeyframe) t.push(e);
          return t;
        }
        mergeTimelineCollectedStyles(t) {
          Object.keys(t._styleSummary).forEach((e) => {
            const n = this._styleSummary[e],
              r = t._styleSummary[e];
            (!n || r.time > n.time) && this._updateStyle(e, r.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const t = new Set(),
            e = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration;
          let r = [];
          this._keyframes.forEach((s, i) => {
            const o = mb(s, !0);
            Object.keys(o).forEach((n) => {
              const r = o[n];
              "!" == r ? t.add(n) : r == Qw && e.add(n);
            }),
              n || (o.offset = i / this.duration),
              r.push(o);
          });
          const s = t.size ? Sb(t.values()) : [],
            i = e.size ? Sb(e.values()) : [];
          if (n) {
            const t = r[0],
              e = fb(t);
            (t.offset = 0), (e.offset = 1), (r = [t, e]);
          }
          return Hb(
            this.element,
            r,
            s,
            i,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class Xb extends Yb {
        constructor(t, e, n, r, s, i, o = !1) {
          super(t, e, i.delay),
            (this.element = e),
            (this.keyframes = n),
            (this.preStyleProps = r),
            (this.postStyleProps = s),
            (this._stretchStartingKeyframe = o),
            (this.timings = {
              duration: i.duration,
              delay: i.delay,
              easing: i.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let t = this.keyframes,
            { delay: e, duration: n, easing: r } = this.timings;
          if (this._stretchStartingKeyframe && e) {
            const s = [],
              i = n + e,
              o = e / i,
              a = mb(t[0], !1);
            (a.offset = 0), s.push(a);
            const l = mb(t[0], !1);
            (l.offset = Jb(o)), s.push(l);
            const u = t.length - 1;
            for (let r = 1; r <= u; r++) {
              let o = mb(t[r], !1);
              (o.offset = Jb((e + o.offset * n) / i)), s.push(o);
            }
            (n = i), (e = 0), (r = ""), (t = s);
          }
          return Hb(
            this.element,
            t,
            this.preStyleProps,
            this.postStyleProps,
            n,
            e,
            r,
            !0
          );
        }
      }
      function Jb(t, e = 3) {
        const n = Math.pow(10, e - 1);
        return Math.round(t * n) / n;
      }
      class t_ {}
      class e_ extends t_ {
        normalizePropertyName(t, e) {
          return Ab(t);
        }
        normalizeStyleValue(t, e, n, r) {
          let s = "";
          const i = n.toString().trim();
          if (n_[e] && 0 !== n && "0" !== n)
            if ("number" == typeof n) s = "px";
            else {
              const e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              e &&
                0 == e[1].length &&
                r.push(`Please provide a CSS unit value for ${t}:${n}`);
            }
          return i + s;
        }
      }
      const n_ = (() =>
        (function (t) {
          const e = {};
          return t.forEach((t) => (e[t] = !0)), e;
        })(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        ))();
      function r_(t, e, n, r, s, i, o, a, l, u, c, h, d) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: s,
          fromState: n,
          fromStyles: i,
          toState: r,
          toStyles: o,
          timelines: a,
          queriedElements: l,
          preStyleProps: u,
          postStyleProps: c,
          totalTime: h,
          errors: d,
        };
      }
      const s_ = {};
      class i_ {
        constructor(t, e, n) {
          (this._triggerName = t), (this.ast = e), (this._stateStyles = n);
        }
        match(t, e, n, r) {
          return (function (t, e, n, r, s) {
            return t.some((t) => t(e, n, r, s));
          })(this.ast.matchers, t, e, n, r);
        }
        buildStyles(t, e, n) {
          const r = this._stateStyles["*"],
            s = this._stateStyles[t],
            i = r ? r.buildStyles(e, n) : {};
          return s ? s.buildStyles(e, n) : i;
        }
        build(t, e, n, r, s, i, o, a, l, u) {
          const c = [],
            h = (this.ast.options && this.ast.options.params) || s_,
            d = this.buildStyles(n, (o && o.params) || s_, c),
            p = (a && a.params) || s_,
            f = this.buildStyles(r, p, c),
            m = new Set(),
            g = new Map(),
            y = new Map(),
            w = "void" === r,
            v = { params: Object.assign(Object.assign({}, h), p) },
            b = u ? [] : Qb(t, e, this.ast.animation, s, i, d, f, v, l, c);
          let _ = 0;
          if (
            (b.forEach((t) => {
              _ = Math.max(t.duration + t.delay, _);
            }),
            c.length)
          )
            return r_(e, this._triggerName, n, r, w, d, f, [], [], g, y, _, c);
          b.forEach((t) => {
            const n = t.element,
              r = $v(g, n, {});
            t.preStyleProps.forEach((t) => (r[t] = !0));
            const s = $v(y, n, {});
            t.postStyleProps.forEach((t) => (s[t] = !0)), n !== e && m.add(n);
          });
          const C = Sb(m.values());
          return r_(e, this._triggerName, n, r, w, d, f, b, C, g, y, _);
        }
      }
      class o_ {
        constructor(t, e) {
          (this.styles = t), (this.defaultParams = e);
        }
        buildStyles(t, e) {
          const n = {},
            r = fb(this.defaultParams);
          return (
            Object.keys(t).forEach((e) => {
              const n = t[e];
              null != n && (r[e] = n);
            }),
            this.styles.styles.forEach((t) => {
              if ("string" != typeof t) {
                const s = t;
                Object.keys(s).forEach((t) => {
                  let i = s[t];
                  i.length > 1 && (i = Eb(i, r, e)), (n[t] = i);
                });
              }
            }),
            n
          );
        }
      }
      class a_ {
        constructor(t, e) {
          (this.name = t),
            (this.ast = e),
            (this.transitionFactories = []),
            (this.states = {}),
            e.states.forEach((t) => {
              this.states[t.name] = new o_(
                t.style,
                (t.options && t.options.params) || {}
              );
            }),
            l_(this.states, "true", "1"),
            l_(this.states, "false", "0"),
            e.transitions.forEach((e) => {
              this.transitionFactories.push(new i_(t, e, this.states));
            }),
            (this.fallbackTransition = new i_(
              t,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(t, e) => !0],
                options: null,
                queryCount: 0,
                depCount: 0,
              },
              this.states
            ));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(t, e, n, r) {
          return (
            this.transitionFactories.find((s) => s.match(t, e, n, r)) || null
          );
        }
        matchStyles(t, e, n) {
          return this.fallbackTransition.buildStyles(t, e, n);
        }
      }
      function l_(t, e, n) {
        t.hasOwnProperty(e)
          ? t.hasOwnProperty(n) || (t[n] = t[e])
          : t.hasOwnProperty(n) && (t[e] = t[n]);
      }
      const u_ = new $b();
      class c_ {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(t, e) {
          const n = [],
            r = jb(this._driver, e, n);
          if (n.length)
            throw new Error(
              `Unable to build the animation due to the following errors: ${n.join(
                "\n"
              )}`
            );
          this._animations[t] = r;
        }
        _buildPlayer(t, e, n) {
          const r = t.element,
            s = Lv(0, this._normalizer, 0, t.keyframes, e, n);
          return this._driver.animate(
            r,
            s,
            t.duration,
            t.delay,
            t.easing,
            [],
            !0
          );
        }
        create(t, e, n = {}) {
          const r = [],
            s = this._animations[t];
          let i;
          const o = new Map();
          if (
            (s
              ? ((i = Qb(this._driver, e, s, ib, ob, {}, {}, n, u_, r)),
                i.forEach((t) => {
                  const e = $v(o, t.element, {});
                  t.postStyleProps.forEach((t) => (e[t] = null));
                }))
              : (r.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (i = [])),
            r.length)
          )
            throw new Error(
              `Unable to create the animation due to the following errors: ${r.join(
                "\n"
              )}`
            );
          o.forEach((t, e) => {
            Object.keys(t).forEach((n) => {
              t[n] = this._driver.computeStyle(e, n, Qw);
            });
          });
          const a = Bv(
            i.map((t) => {
              const e = o.get(t.element);
              return this._buildPlayer(t, {}, e);
            })
          );
          return (
            (this._playersById[t] = a),
            a.onDestroy(() => this.destroy(t)),
            this.players.push(a),
            a
          );
        }
        destroy(t) {
          const e = this._getPlayer(t);
          e.destroy(), delete this._playersById[t];
          const n = this.players.indexOf(e);
          n >= 0 && this.players.splice(n, 1);
        }
        _getPlayer(t) {
          const e = this._playersById[t];
          if (!e)
            throw new Error(
              `Unable to find the timeline player referenced by ${t}`
            );
          return e;
        }
        listen(t, e, n, r) {
          const s = Hv(e, "", "", "");
          return Uv(this._getPlayer(t), n, s, r), () => {};
        }
        command(t, e, n, r) {
          if ("register" == n) return void this.register(t, r[0]);
          if ("create" == n) return void this.create(t, e, r[0] || {});
          const s = this._getPlayer(t);
          switch (n) {
            case "play":
              s.play();
              break;
            case "pause":
              s.pause();
              break;
            case "reset":
              s.reset();
              break;
            case "restart":
              s.restart();
              break;
            case "finish":
              s.finish();
              break;
            case "init":
              s.init();
              break;
            case "setPosition":
              s.setPosition(parseFloat(r[0]));
              break;
            case "destroy":
              this.destroy(t);
          }
        }
      }
      const h_ = "ng-animate-queued",
        d_ = "ng-animate-disabled",
        p_ = ".ng-animate-disabled",
        f_ = [],
        m_ = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        g_ = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        };
      class y_ {
        constructor(t, e = "") {
          this.namespaceId = e;
          const n = t && t.hasOwnProperty("value");
          if (((this.value = null != (r = n ? t.value : t) ? r : null), n)) {
            const e = fb(t);
            delete e.value, (this.options = e);
          } else this.options = {};
          var r;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(t) {
          const e = t.params;
          if (e) {
            const t = this.options.params;
            Object.keys(e).forEach((n) => {
              null == t[n] && (t[n] = e[n]);
            });
          }
        }
      }
      const w_ = "void",
        v_ = new y_(w_);
      class b_ {
        constructor(t, e, n) {
          (this.id = t),
            (this.hostElement = e),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + t),
            D_(e, this._hostClassName);
        }
        listen(t, e, n, r) {
          if (!this._triggers.hasOwnProperty(e))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`
            );
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${e}" because the provided event is undefined!`
            );
          if ("start" != (s = n) && "done" != s)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`
            );
          var s;
          const i = $v(this._elementListeners, t, []),
            o = { name: e, phase: n, callback: r };
          i.push(o);
          const a = $v(this._engine.statesByElement, t, {});
          return (
            a.hasOwnProperty(e) ||
              (D_(t, ab), D_(t, "ng-trigger-" + e), (a[e] = v_)),
            () => {
              this._engine.afterFlush(() => {
                const t = i.indexOf(o);
                t >= 0 && i.splice(t, 1), this._triggers[e] || delete a[e];
              });
            }
          );
        }
        register(t, e) {
          return !this._triggers[t] && ((this._triggers[t] = e), !0);
        }
        _getTrigger(t) {
          const e = this._triggers[t];
          if (!e)
            throw new Error(
              `The provided animation trigger "${t}" has not been registered!`
            );
          return e;
        }
        trigger(t, e, n, r = !0) {
          const s = this._getTrigger(e),
            i = new C_(this.id, e, t);
          let o = this._engine.statesByElement.get(t);
          o ||
            (D_(t, ab),
            D_(t, "ng-trigger-" + e),
            this._engine.statesByElement.set(t, (o = {})));
          let a = o[e];
          const l = new y_(n, this.id);
          if (
            (!(n && n.hasOwnProperty("value")) &&
              a &&
              l.absorbOptions(a.options),
            (o[e] = l),
            a || (a = v_),
            l.value !== w_ && a.value === l.value)
          ) {
            if (
              !(function (t, e) {
                const n = Object.keys(t),
                  r = Object.keys(e);
                if (n.length != r.length) return !1;
                for (let s = 0; s < n.length; s++) {
                  const r = n[s];
                  if (!e.hasOwnProperty(r) || t[r] !== e[r]) return !1;
                }
                return !0;
              })(a.params, l.params)
            ) {
              const e = [],
                n = s.matchStyles(a.value, a.params, e),
                r = s.matchStyles(l.value, l.params, e);
              e.length
                ? this._engine.reportError(e)
                : this._engine.afterFlush(() => {
                    vb(t, n), wb(t, r);
                  });
            }
            return;
          }
          const u = $v(this._engine.playersByElement, t, []);
          u.forEach((t) => {
            t.namespaceId == this.id &&
              t.triggerName == e &&
              t.queued &&
              t.destroy();
          });
          let c = s.matchTransition(a.value, l.value, t, l.params),
            h = !1;
          if (!c) {
            if (!r) return;
            (c = s.fallbackTransition), (h = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: e,
              transition: c,
              fromState: a,
              toState: l,
              player: i,
              isFallbackTransition: h,
            }),
            h ||
              (D_(t, h_),
              i.onStart(() => {
                k_(t, h_);
              })),
            i.onDone(() => {
              let e = this.players.indexOf(i);
              e >= 0 && this.players.splice(e, 1);
              const n = this._engine.playersByElement.get(t);
              if (n) {
                let t = n.indexOf(i);
                t >= 0 && n.splice(t, 1);
              }
            }),
            this.players.push(i),
            u.push(i),
            i
          );
        }
        deregister(t) {
          delete this._triggers[t],
            this._engine.statesByElement.forEach((e, n) => {
              delete e[t];
            }),
            this._elementListeners.forEach((e, n) => {
              this._elementListeners.set(
                n,
                e.filter((e) => e.name != t)
              );
            });
        }
        clearElementCache(t) {
          this._engine.statesByElement.delete(t),
            this._elementListeners.delete(t);
          const e = this._engine.playersByElement.get(t);
          e &&
            (e.forEach((t) => t.destroy()),
            this._engine.playersByElement.delete(t));
        }
        _signalRemovalForInnerTriggers(t, e) {
          const n = this._engine.driver.query(t, lb, !0);
          n.forEach((t) => {
            if (t.__ng_removed) return;
            const n = this._engine.fetchNamespacesByElement(t);
            n.size
              ? n.forEach((n) => n.triggerLeaveAnimation(t, e, !1, !0))
              : this.clearElementCache(t);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              n.forEach((t) => this.clearElementCache(t))
            );
        }
        triggerLeaveAnimation(t, e, n, r) {
          const s = this._engine.statesByElement.get(t);
          if (s) {
            const i = [];
            if (
              (Object.keys(s).forEach((e) => {
                if (this._triggers[e]) {
                  const n = this.trigger(t, e, w_, r);
                  n && i.push(n);
                }
              }),
              i.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, t, !0, e),
                n && Bv(i).onDone(() => this._engine.processLeaveNode(t)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(t) {
          const e = this._elementListeners.get(t),
            n = this._engine.statesByElement.get(t);
          if (e && n) {
            const r = new Set();
            e.forEach((e) => {
              const s = e.name;
              if (r.has(s)) return;
              r.add(s);
              const i = this._triggers[s].fallbackTransition,
                o = n[s] || v_,
                a = new y_(w_),
                l = new C_(this.id, s, t);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: t,
                  triggerName: s,
                  transition: i,
                  fromState: o,
                  toState: a,
                  player: l,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(t, e) {
          const n = this._engine;
          if (
            (t.childElementCount && this._signalRemovalForInnerTriggers(t, e),
            this.triggerLeaveAnimation(t, e, !0))
          )
            return;
          let r = !1;
          if (n.totalAnimations) {
            const e = n.players.length ? n.playersByQueriedElement.get(t) : [];
            if (e && e.length) r = !0;
            else {
              let e = t;
              for (; (e = e.parentNode); )
                if (n.statesByElement.get(e)) {
                  r = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(t), r))
            n.markElementAsRemoved(this.id, t, !1, e);
          else {
            const r = t.__ng_removed;
            (r && r !== m_) ||
              (n.afterFlush(() => this.clearElementCache(t)),
              n.destroyInnerAnimations(t),
              n._onRemovalComplete(t, e));
          }
        }
        insertNode(t, e) {
          D_(t, this._hostClassName);
        }
        drainQueuedTransitions(t) {
          const e = [];
          return (
            this._queue.forEach((n) => {
              const r = n.player;
              if (r.destroyed) return;
              const s = n.element,
                i = this._elementListeners.get(s);
              i &&
                i.forEach((e) => {
                  if (e.name == n.triggerName) {
                    const r = Hv(
                      s,
                      n.triggerName,
                      n.fromState.value,
                      n.toState.value
                    );
                    (r._data = t), Uv(n.player, e.phase, r, e.callback);
                  }
                }),
                r.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      r.destroy();
                    })
                  : e.push(n);
            }),
            (this._queue = []),
            e.sort((t, e) => {
              const n = t.transition.ast.depCount,
                r = e.transition.ast.depCount;
              return 0 == n || 0 == r
                ? n - r
                : this._engine.driver.containsElement(t.element, e.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(t) {
          this.players.forEach((t) => t.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, t);
        }
        elementContainsData(t) {
          let e = !1;
          return (
            this._elementListeners.has(t) && (e = !0),
            (e = !!this._queue.find((e) => e.element === t) || e),
            e
          );
        }
      }
      class __ {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this.driver = e),
            (this._normalizer = n),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (t, e) => {});
        }
        _onRemovalComplete(t, e) {
          this.onRemovalComplete(t, e);
        }
        get queuedPlayers() {
          const t = [];
          return (
            this._namespaceList.forEach((e) => {
              e.players.forEach((e) => {
                e.queued && t.push(e);
              });
            }),
            t
          );
        }
        createNamespace(t, e) {
          const n = new b_(t, e, this);
          return (
            this.bodyNode && this.driver.containsElement(this.bodyNode, e)
              ? this._balanceNamespaceList(n, e)
              : (this.newHostElements.set(e, n), this.collectEnterElement(e)),
            (this._namespaceLookup[t] = n)
          );
        }
        _balanceNamespaceList(t, e) {
          const n = this._namespaceList.length - 1;
          if (n >= 0) {
            let r = !1;
            for (let s = n; s >= 0; s--)
              if (
                this.driver.containsElement(
                  this._namespaceList[s].hostElement,
                  e
                )
              ) {
                this._namespaceList.splice(s + 1, 0, t), (r = !0);
                break;
              }
            r || this._namespaceList.splice(0, 0, t);
          } else this._namespaceList.push(t);
          return this.namespacesByHostElement.set(e, t), t;
        }
        register(t, e) {
          let n = this._namespaceLookup[t];
          return n || (n = this.createNamespace(t, e)), n;
        }
        registerTrigger(t, e, n) {
          let r = this._namespaceLookup[t];
          r && r.register(e, n) && this.totalAnimations++;
        }
        destroy(t, e) {
          if (!t) return;
          const n = this._fetchNamespace(t);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement),
              delete this._namespaceLookup[t];
            const e = this._namespaceList.indexOf(n);
            e >= 0 && this._namespaceList.splice(e, 1);
          }),
            this.afterFlushAnimationsDone(() => n.destroy(e));
        }
        _fetchNamespace(t) {
          return this._namespaceLookup[t];
        }
        fetchNamespacesByElement(t) {
          const e = new Set(),
            n = this.statesByElement.get(t);
          if (n) {
            const t = Object.keys(n);
            for (let r = 0; r < t.length; r++) {
              const s = n[t[r]].namespaceId;
              if (s) {
                const t = this._fetchNamespace(s);
                t && e.add(t);
              }
            }
          }
          return e;
        }
        trigger(t, e, n, r) {
          if (E_(e)) {
            const s = this._fetchNamespace(t);
            if (s) return s.trigger(e, n, r), !0;
          }
          return !1;
        }
        insertNode(t, e, n, r) {
          if (!E_(e)) return;
          const s = e.__ng_removed;
          if (s && s.setForRemoval) {
            (s.setForRemoval = !1), (s.setForMove = !0);
            const t = this.collectedLeaveElements.indexOf(e);
            t >= 0 && this.collectedLeaveElements.splice(t, 1);
          }
          if (t) {
            const r = this._fetchNamespace(t);
            r && r.insertNode(e, n);
          }
          r && this.collectEnterElement(e);
        }
        collectEnterElement(t) {
          this.collectedEnterElements.push(t);
        }
        markElementAsDisabled(t, e) {
          e
            ? this.disabledNodes.has(t) ||
              (this.disabledNodes.add(t), D_(t, d_))
            : this.disabledNodes.has(t) &&
              (this.disabledNodes.delete(t), k_(t, d_));
        }
        removeNode(t, e, n, r) {
          if (E_(e)) {
            const s = t ? this._fetchNamespace(t) : null;
            if (
              (s ? s.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r),
              n)
            ) {
              const n = this.namespacesByHostElement.get(e);
              n && n.id !== t && n.removeNode(e, r);
            }
          } else this._onRemovalComplete(e, r);
        }
        markElementAsRemoved(t, e, n, r) {
          this.collectedLeaveElements.push(e),
            (e.__ng_removed = {
              namespaceId: t,
              setForRemoval: r,
              hasAnimation: n,
              removedBeforeQueried: !1,
            });
        }
        listen(t, e, n, r, s) {
          return E_(e) ? this._fetchNamespace(t).listen(e, n, r, s) : () => {};
        }
        _buildInstruction(t, e, n, r, s) {
          return t.transition.build(
            this.driver,
            t.element,
            t.fromState.value,
            t.toState.value,
            n,
            r,
            t.fromState.options,
            t.toState.options,
            e,
            s
          );
        }
        destroyInnerAnimations(t) {
          let e = this.driver.query(t, lb, !0);
          e.forEach((t) => this.destroyActiveAnimationsForElement(t)),
            0 != this.playersByQueriedElement.size &&
              ((e = this.driver.query(t, cb, !0)),
              e.forEach((t) => this.finishActiveQueriedAnimationOnElement(t)));
        }
        destroyActiveAnimationsForElement(t) {
          const e = this.playersByElement.get(t);
          e &&
            e.forEach((t) => {
              t.queued ? (t.markedForDestroy = !0) : t.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(t) {
          const e = this.playersByQueriedElement.get(t);
          e && e.forEach((t) => t.finish());
        }
        whenRenderingDone() {
          return new Promise((t) => {
            if (this.players.length) return Bv(this.players).onDone(() => t());
            t();
          });
        }
        processLeaveNode(t) {
          const e = t.__ng_removed;
          if (e && e.setForRemoval) {
            if (((t.__ng_removed = m_), e.namespaceId)) {
              this.destroyInnerAnimations(t);
              const n = this._fetchNamespace(e.namespaceId);
              n && n.clearElementCache(t);
            }
            this._onRemovalComplete(t, e.setForRemoval);
          }
          this.driver.matchesElement(t, p_) &&
            this.markElementAsDisabled(t, !1),
            this.driver.query(t, p_, !0).forEach((t) => {
              this.markElementAsDisabled(t, !1);
            });
        }
        flush(t = -1) {
          let e = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((t, e) =>
                this._balanceNamespaceList(t, e)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              D_(this.collectedEnterElements[n], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const n = [];
            try {
              e = this._flushAnimations(n, t);
            } finally {
              for (let t = 0; t < n.length; t++) n[t]();
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((t) => t()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const t = this._whenQuietFns;
            (this._whenQuietFns = []),
              e.length
                ? Bv(e).onDone(() => {
                    t.forEach((t) => t());
                  })
                : t.forEach((t) => t());
          }
        }
        reportError(t) {
          throw new Error(
            `Unable to process animations due to the following failed trigger transitions\n ${t.join(
              "\n"
            )}`
          );
        }
        _flushAnimations(t, e) {
          const n = new $b(),
            r = [],
            s = new Map(),
            i = [],
            o = new Map(),
            a = new Map(),
            l = new Map(),
            u = new Set();
          this.disabledNodes.forEach((t) => {
            u.add(t);
            const e = this.driver.query(t, ".ng-animate-queued", !0);
            for (let n = 0; n < e.length; n++) u.add(e[n]);
          });
          const c = this.bodyNode,
            h = Array.from(this.statesByElement.keys()),
            d = A_(h, this.collectedEnterElements),
            p = new Map();
          let f = 0;
          d.forEach((t, e) => {
            const n = ib + f++;
            p.set(e, n), t.forEach((t) => D_(t, n));
          });
          const m = [],
            g = new Set(),
            y = new Set();
          for (let O = 0; O < this.collectedLeaveElements.length; O++) {
            const t = this.collectedLeaveElements[O],
              e = t.__ng_removed;
            e &&
              e.setForRemoval &&
              (m.push(t),
              g.add(t),
              e.hasAnimation
                ? this.driver
                    .query(t, ".ng-star-inserted", !0)
                    .forEach((t) => g.add(t))
                : y.add(t));
          }
          const w = new Map(),
            v = A_(h, Array.from(g));
          v.forEach((t, e) => {
            const n = ob + f++;
            w.set(e, n), t.forEach((t) => D_(t, n));
          }),
            t.push(() => {
              d.forEach((t, e) => {
                const n = p.get(e);
                t.forEach((t) => k_(t, n));
              }),
                v.forEach((t, e) => {
                  const n = w.get(e);
                  t.forEach((t) => k_(t, n));
                }),
                m.forEach((t) => {
                  this.processLeaveNode(t);
                });
            });
          const b = [],
            _ = [];
          for (let O = this._namespaceList.length - 1; O >= 0; O--)
            this._namespaceList[O].drainQueuedTransitions(e).forEach((t) => {
              const e = t.player,
                s = t.element;
              if ((b.push(e), this.collectedEnterElements.length)) {
                const t = s.__ng_removed;
                if (t && t.setForMove) return void e.destroy();
              }
              const u = !c || !this.driver.containsElement(c, s),
                h = w.get(s),
                d = p.get(s),
                f = this._buildInstruction(t, n, d, h, u);
              if (f.errors && f.errors.length) _.push(f);
              else {
                if (u)
                  return (
                    e.onStart(() => vb(s, f.fromStyles)),
                    e.onDestroy(() => wb(s, f.toStyles)),
                    void r.push(e)
                  );
                if (t.isFallbackTransition)
                  return (
                    e.onStart(() => vb(s, f.fromStyles)),
                    e.onDestroy(() => wb(s, f.toStyles)),
                    void r.push(e)
                  );
                f.timelines.forEach((t) => (t.stretchStartingKeyframe = !0)),
                  n.append(s, f.timelines),
                  i.push({ instruction: f, player: e, element: s }),
                  f.queriedElements.forEach((t) => $v(o, t, []).push(e)),
                  f.preStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    if (n.length) {
                      let t = a.get(e);
                      t || a.set(e, (t = new Set())),
                        n.forEach((e) => t.add(e));
                    }
                  }),
                  f.postStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    let r = l.get(e);
                    r || l.set(e, (r = new Set())), n.forEach((t) => r.add(t));
                  });
              }
            });
          if (_.length) {
            const t = [];
            _.forEach((e) => {
              t.push(`@${e.triggerName} has failed due to:\n`),
                e.errors.forEach((e) => t.push(`- ${e}\n`));
            }),
              b.forEach((t) => t.destroy()),
              this.reportError(t);
          }
          const C = new Map(),
            E = new Map();
          i.forEach((t) => {
            const e = t.element;
            n.has(e) &&
              (E.set(e, e),
              this._beforeAnimationBuild(
                t.player.namespaceId,
                t.instruction,
                C
              ));
          }),
            r.forEach((t) => {
              const e = t.element;
              this._getPreviousPlayers(
                e,
                !1,
                t.namespaceId,
                t.triggerName,
                null
              ).forEach((t) => {
                $v(C, e, []).push(t), t.destroy();
              });
            });
          const S = m.filter((t) => F_(t, a, l)),
            x = new Map();
          x_(x, this.driver, y, l, Qw).forEach((t) => {
            F_(t, a, l) && S.push(t);
          });
          const A = new Map();
          d.forEach((t, e) => {
            x_(A, this.driver, new Set(t), a, "!");
          }),
            S.forEach((t) => {
              const e = x.get(t),
                n = A.get(t);
              x.set(t, Object.assign(Object.assign({}, e), n));
            });
          const D = [],
            k = [],
            T = {};
          i.forEach((t) => {
            const { element: e, player: i, instruction: o } = t;
            if (n.has(e)) {
              if (u.has(e))
                return (
                  i.onDestroy(() => wb(e, o.toStyles)),
                  (i.disabled = !0),
                  i.overrideTotalTime(o.totalTime),
                  void r.push(i)
                );
              let t = T;
              if (E.size > 1) {
                let n = e;
                const r = [];
                for (; (n = n.parentNode); ) {
                  const e = E.get(n);
                  if (e) {
                    t = e;
                    break;
                  }
                  r.push(n);
                }
                r.forEach((e) => E.set(e, t));
              }
              const n = this._buildAnimation(i.namespaceId, o, C, s, A, x);
              if ((i.setRealPlayer(n), t === T)) D.push(i);
              else {
                const e = this.playersByElement.get(t);
                e && e.length && (i.parentPlayer = Bv(e)), r.push(i);
              }
            } else
              vb(e, o.fromStyles),
                i.onDestroy(() => wb(e, o.toStyles)),
                k.push(i),
                u.has(e) && r.push(i);
          }),
            k.forEach((t) => {
              const e = s.get(t.element);
              if (e && e.length) {
                const n = Bv(e);
                t.setRealPlayer(n);
              }
            }),
            r.forEach((t) => {
              t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy();
            });
          for (let O = 0; O < m.length; O++) {
            const t = m[O],
              e = t.__ng_removed;
            if ((k_(t, ob), e && e.hasAnimation)) continue;
            let n = [];
            if (o.size) {
              let e = o.get(t);
              e && e.length && n.push(...e);
              let r = this.driver.query(t, cb, !0);
              for (let t = 0; t < r.length; t++) {
                let e = o.get(r[t]);
                e && e.length && n.push(...e);
              }
            }
            const r = n.filter((t) => !t.destroyed);
            r.length ? T_(this, t, r) : this.processLeaveNode(t);
          }
          return (
            (m.length = 0),
            D.forEach((t) => {
              this.players.push(t),
                t.onDone(() => {
                  t.destroy();
                  const e = this.players.indexOf(t);
                  this.players.splice(e, 1);
                }),
                t.play();
            }),
            D
          );
        }
        elementContainsData(t, e) {
          let n = !1;
          const r = e.__ng_removed;
          return (
            r && r.setForRemoval && (n = !0),
            this.playersByElement.has(e) && (n = !0),
            this.playersByQueriedElement.has(e) && (n = !0),
            this.statesByElement.has(e) && (n = !0),
            this._fetchNamespace(t).elementContainsData(e) || n
          );
        }
        afterFlush(t) {
          this._flushFns.push(t);
        }
        afterFlushAnimationsDone(t) {
          this._whenQuietFns.push(t);
        }
        _getPreviousPlayers(t, e, n, r, s) {
          let i = [];
          if (e) {
            const e = this.playersByQueriedElement.get(t);
            e && (i = e);
          } else {
            const e = this.playersByElement.get(t);
            if (e) {
              const t = !s || s == w_;
              e.forEach((e) => {
                e.queued || ((t || e.triggerName == r) && i.push(e));
              });
            }
          }
          return (
            (n || r) &&
              (i = i.filter(
                (t) => !((n && n != t.namespaceId) || (r && r != t.triggerName))
              )),
            i
          );
        }
        _beforeAnimationBuild(t, e, n) {
          const r = e.element,
            s = e.isRemovalTransition ? void 0 : t,
            i = e.isRemovalTransition ? void 0 : e.triggerName;
          for (const o of e.timelines) {
            const t = o.element,
              a = t !== r,
              l = $v(n, t, []);
            this._getPreviousPlayers(t, a, s, i, e.toState).forEach((t) => {
              const e = t.getRealPlayer();
              e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t);
            });
          }
          vb(r, e.fromStyles);
        }
        _buildAnimation(t, e, n, r, s, i) {
          const o = e.triggerName,
            a = e.element,
            l = [],
            u = new Set(),
            c = new Set(),
            h = e.timelines.map((e) => {
              const h = e.element;
              u.add(h);
              const d = h.__ng_removed;
              if (d && d.removedBeforeQueried)
                return new Jw(e.duration, e.delay);
              const p = h !== a,
                f = (function (t) {
                  const e = [];
                  return O_(t, e), e;
                })((n.get(h) || f_).map((t) => t.getRealPlayer())).filter(
                  (t) => !!t.element && t.element === h
                ),
                m = s.get(h),
                g = i.get(h),
                y = Lv(0, this._normalizer, 0, e.keyframes, m, g),
                w = this._buildPlayer(e, y, f);
              if ((e.subTimeline && r && c.add(h), p)) {
                const e = new C_(t, o, h);
                e.setRealPlayer(w), l.push(e);
              }
              return w;
            });
          l.forEach((t) => {
            $v(this.playersByQueriedElement, t.element, []).push(t),
              t.onDone(() =>
                (function (t, e, n) {
                  let r;
                  if (t instanceof Map) {
                    if (((r = t.get(e)), r)) {
                      if (r.length) {
                        const t = r.indexOf(n);
                        r.splice(t, 1);
                      }
                      0 == r.length && t.delete(e);
                    }
                  } else if (((r = t[e]), r)) {
                    if (r.length) {
                      const t = r.indexOf(n);
                      r.splice(t, 1);
                    }
                    0 == r.length && delete t[e];
                  }
                  return r;
                })(this.playersByQueriedElement, t.element, t)
              );
          }),
            u.forEach((t) => D_(t, ub));
          const d = Bv(h);
          return (
            d.onDestroy(() => {
              u.forEach((t) => k_(t, ub)), wb(a, e.toStyles);
            }),
            c.forEach((t) => {
              $v(r, t, []).push(d);
            }),
            d
          );
        }
        _buildPlayer(t, e, n) {
          return e.length > 0
            ? this.driver.animate(
                t.element,
                e,
                t.duration,
                t.delay,
                t.easing,
                n
              )
            : new Jw(t.duration, t.delay);
        }
      }
      class C_ {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.triggerName = e),
            (this.element = n),
            (this._player = new Jw()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(t) {
          this._containsRealPlayer ||
            ((this._player = t),
            Object.keys(this._queuedCallbacks).forEach((e) => {
              this._queuedCallbacks[e].forEach((n) => Uv(t, e, void 0, n));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(t.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(t) {
          this.totalTime = t;
        }
        syncPlayerEvents(t) {
          const e = this._player;
          e.triggerCallback && t.onStart(() => e.triggerCallback("start")),
            t.onDone(() => this.finish()),
            t.onDestroy(() => this.destroy());
        }
        _queueEvent(t, e) {
          $v(this._queuedCallbacks, t, []).push(e);
        }
        onDone(t) {
          this.queued && this._queueEvent("done", t), this._player.onDone(t);
        }
        onStart(t) {
          this.queued && this._queueEvent("start", t), this._player.onStart(t);
        }
        onDestroy(t) {
          this.queued && this._queueEvent("destroy", t),
            this._player.onDestroy(t);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(t) {
          this.queued || this._player.setPosition(t);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(t) {
          const e = this._player;
          e.triggerCallback && e.triggerCallback(t);
        }
      }
      function E_(t) {
        return t && 1 === t.nodeType;
      }
      function S_(t, e) {
        const n = t.style.display;
        return (t.style.display = null != e ? e : "none"), n;
      }
      function x_(t, e, n, r, s) {
        const i = [];
        n.forEach((t) => i.push(S_(t)));
        const o = [];
        r.forEach((n, r) => {
          const i = {};
          n.forEach((t) => {
            const n = (i[t] = e.computeStyle(r, t, s));
            (n && 0 != n.length) || ((r.__ng_removed = g_), o.push(r));
          }),
            t.set(r, i);
        });
        let a = 0;
        return n.forEach((t) => S_(t, i[a++])), o;
      }
      function A_(t, e) {
        const n = new Map();
        if ((t.forEach((t) => n.set(t, [])), 0 == e.length)) return n;
        const r = new Set(e),
          s = new Map();
        function i(t) {
          if (!t) return 1;
          let e = s.get(t);
          if (e) return e;
          const o = t.parentNode;
          return (e = n.has(o) ? o : r.has(o) ? 1 : i(o)), s.set(t, e), e;
        }
        return (
          e.forEach((t) => {
            const e = i(t);
            1 !== e && n.get(e).push(t);
          }),
          n
        );
      }
      function D_(t, e) {
        if (t.classList) t.classList.add(e);
        else {
          let n = t.$$classes;
          n || (n = t.$$classes = {}), (n[e] = !0);
        }
      }
      function k_(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
          let n = t.$$classes;
          n && delete n[e];
        }
      }
      function T_(t, e, n) {
        Bv(n).onDone(() => t.processLeaveNode(e));
      }
      function O_(t, e) {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          r instanceof tv ? O_(r.players, e) : e.push(r);
        }
      }
      function F_(t, e, n) {
        const r = n.get(t);
        if (!r) return !1;
        let s = e.get(t);
        return s ? r.forEach((t) => s.add(t)) : e.set(t, r), n.delete(t), !0;
      }
      class P_ {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (t, e) => {}),
            (this._transitionEngine = new __(t, e, n)),
            (this._timelineEngine = new c_(t, e, n)),
            (this._transitionEngine.onRemovalComplete = (t, e) =>
              this.onRemovalComplete(t, e));
        }
        registerTrigger(t, e, n, r, s) {
          const i = t + "-" + r;
          let o = this._triggerCache[i];
          if (!o) {
            const t = [],
              e = jb(this._driver, s, t);
            if (t.length)
              throw new Error(
                `The animation trigger "${r}" has failed to build due to the following errors:\n - ${t.join(
                  "\n - "
                )}`
              );
            (o = (function (t, e) {
              return new a_(t, e);
            })(r, e)),
              (this._triggerCache[i] = o);
          }
          this._transitionEngine.registerTrigger(e, r, o);
        }
        register(t, e) {
          this._transitionEngine.register(t, e);
        }
        destroy(t, e) {
          this._transitionEngine.destroy(t, e);
        }
        onInsert(t, e, n, r) {
          this._transitionEngine.insertNode(t, e, n, r);
        }
        onRemove(t, e, n, r) {
          this._transitionEngine.removeNode(t, e, r || !1, n);
        }
        disableAnimations(t, e) {
          this._transitionEngine.markElementAsDisabled(t, e);
        }
        process(t, e, n, r) {
          if ("@" == n.charAt(0)) {
            const [t, s] = qv(n);
            this._timelineEngine.command(t, e, s, r);
          } else this._transitionEngine.trigger(t, e, n, r);
        }
        listen(t, e, n, r, s) {
          if ("@" == n.charAt(0)) {
            const [t, r] = qv(n);
            return this._timelineEngine.listen(t, e, r, s);
          }
          return this._transitionEngine.listen(t, e, n, r, s);
        }
        flush(t = -1) {
          this._transitionEngine.flush(t);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function I_(t, e) {
        let n = null,
          r = null;
        return (
          Array.isArray(e) && e.length
            ? ((n = N_(e[0])), e.length > 1 && (r = N_(e[e.length - 1])))
            : e && (n = N_(e)),
          n || r ? new R_(t, n, r) : null
        );
      }
      let R_ = (() => {
        class t {
          constructor(e, n, r) {
            (this._element = e),
              (this._startStyles = n),
              (this._endStyles = r),
              (this._state = 0);
            let s = t.initialStylesByElement.get(e);
            s || t.initialStylesByElement.set(e, (s = {})),
              (this._initialStyles = s);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                wb(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (wb(this._element, this._initialStyles),
                this._endStyles &&
                  (wb(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (t.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (vb(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (vb(this._element, this._endStyles),
                  (this._endStyles = null)),
                wb(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (t.initialStylesByElement = new WeakMap()), t;
      })();
      function N_(t) {
        let e = null;
        const n = Object.keys(t);
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          M_(s) && ((e = e || {}), (e[s] = t[s]));
        }
        return e;
      }
      function M_(t) {
        return "display" === t || "position" === t;
      }
      const j_ = "animation",
        V_ = "animationend";
      class B_ {
        constructor(t, e, n, r, s, i, o) {
          (this._element = t),
            (this._name = e),
            (this._duration = n),
            (this._delay = r),
            (this._easing = s),
            (this._fillMode = i),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = (t) => this._handleCallback(t));
        }
        apply() {
          !(function (t, e) {
            const n = q_(t, "").trim();
            n.length &&
              ((function (t, e) {
                let n = 0;
                for (let r = 0; r < t.length; r++) "," === t.charAt(r) && n++;
              })(n),
              (e = `${n}, ${e}`)),
              $_(t, "", e);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            H_(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          L_(this._element, this._name, "paused");
        }
        resume() {
          L_(this._element, this._name, "running");
        }
        setPosition(t) {
          const e = U_(this._element, this._name);
          (this._position = t * this._duration),
            $_(this._element, "Delay", `-${this._position}ms`, e);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(t) {
          const e = t._ngTestManualTimestamp || Date.now(),
            n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
          t.animationName == this._name &&
            Math.max(e - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            H_(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (t, e) {
              const n = q_(t, "").split(","),
                r = z_(n, e);
              r >= 0 && (n.splice(r, 1), $_(t, "", n.join(",")));
            })(this._element, this._name));
        }
      }
      function L_(t, e, n) {
        $_(t, "PlayState", n, U_(t, e));
      }
      function U_(t, e) {
        const n = q_(t, "");
        return n.indexOf(",") > 0 ? z_(n.split(","), e) : z_([n], e);
      }
      function z_(t, e) {
        for (let n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
        return -1;
      }
      function H_(t, e, n) {
        n ? t.removeEventListener(V_, e) : t.addEventListener(V_, e);
      }
      function $_(t, e, n, r) {
        const s = j_ + e;
        if (null != r) {
          const e = t.style[s];
          if (e.length) {
            const t = e.split(",");
            (t[r] = n), (n = t.join(","));
          }
        }
        t.style[s] = n;
      }
      function q_(t, e) {
        return t.style[j_ + e] || "";
      }
      class W_ {
        constructor(t, e, n, r, s, i, o, a) {
          (this.element = t),
            (this.keyframes = e),
            (this.animationName = n),
            (this._duration = r),
            (this._delay = s),
            (this._finalStyles = o),
            (this._specialStyles = a),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = i || "linear"),
            (this.totalTime = r + s),
            this._buildStyler();
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach((t) => t()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach((t) => t()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(t) {
          this._styler.setPosition(t);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          (this._state = 0),
            this._styler.destroy(),
            this._buildStyler(),
            this._styler.apply();
        }
        _buildStyler() {
          this._styler = new B_(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            "forwards",
            () => this.finish()
          );
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
        beforeDestroy() {
          this.init();
          const t = {};
          if (this.hasStarted()) {
            const e = this._state >= 3;
            Object.keys(this._finalStyles).forEach((n) => {
              "offset" != n &&
                (t[n] = e ? this._finalStyles[n] : Ob(this.element, n));
            });
          }
          this.currentSnapshot = t;
        }
      }
      class Q_ extends Jw {
        constructor(t, e) {
          super(),
            (this.element = t),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = nb(e));
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach((t) => {
              this._startingStyles[t] = this.element.style[t];
            }),
            super.init());
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach((t) =>
              this.element.style.setProperty(t, this._styles[t])
            ),
            super.play());
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach((t) => {
              const e = this._startingStyles[t];
              e
                ? this.element.style.setProperty(t, e)
                : this.element.style.removeProperty(t);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      class K_ {
        constructor() {
          this._count = 0;
        }
        validateStyleProperty(t) {
          return Xv(t);
        }
        matchesElement(t, e) {
          return Jv(t, e);
        }
        containsElement(t, e) {
          return tb(t, e);
        }
        query(t, e, n) {
          return eb(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        buildKeyframeElement(t, e, n) {
          n = n.map((t) => nb(t));
          let r = `@keyframes ${e} {\n`,
            s = "";
          n.forEach((t) => {
            s = " ";
            const e = parseFloat(t.offset);
            (r += `${s}${100 * e}% {\n`),
              (s += " "),
              Object.keys(t).forEach((e) => {
                const n = t[e];
                switch (e) {
                  case "offset":
                    return;
                  case "easing":
                    return void (
                      n && (r += `${s}animation-timing-function: ${n};\n`)
                    );
                  default:
                    return void (r += `${s}${e}: ${n};\n`);
                }
              }),
              (r += `${s}}\n`);
          }),
            (r += "}\n");
          const i = document.createElement("style");
          return (i.textContent = r), i;
        }
        animate(t, e, n, r, s, i = [], o) {
          const a = i.filter((t) => t instanceof W_),
            l = {};
          Db(n, r) &&
            a.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (l[t] = e[t]));
            });
          const u = (function (t) {
            let e = {};
            return (
              t &&
                (Array.isArray(t) ? t : [t]).forEach((t) => {
                  Object.keys(t).forEach((n) => {
                    "offset" != n && "easing" != n && (e[n] = t[n]);
                  });
                }),
              e
            );
          })((e = kb(t, e, l)));
          if (0 == n) return new Q_(t, u);
          const c = "gen_css_kf_" + this._count++,
            h = this.buildKeyframeElement(t, c, e);
          (function (t) {
            var e;
            const n =
              null === (e = t.getRootNode) || void 0 === e ? void 0 : e.call(t);
            return "undefined" != typeof ShadowRoot && n instanceof ShadowRoot
              ? n
              : document.head;
          })(t).appendChild(h);
          const d = I_(t, e),
            p = new W_(t, e, c, n, r, s, u, d);
          return (
            p.onDestroy(() => {
              var t;
              (t = h).parentNode.removeChild(t);
            }),
            p
          );
        }
      }
      class G_ {
        constructor(t, e, n, r) {
          (this.element = t),
            (this.keyframes = e),
            (this.options = n),
            (this._specialStyles = r),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const t = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            t,
            this.options
          )),
            (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(t, e, n) {
          return t.animate(e, n);
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((t) => t()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        setPosition(t) {
          void 0 === this.domPlayer && this.init(),
            (this.domPlayer.currentTime = t * this.time);
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const t = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach((e) => {
              "offset" != e &&
                (t[e] = this._finished
                  ? this._finalKeyframe[e]
                  : Ob(this.element, e));
            }),
            (this.currentSnapshot = t);
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class Z_ {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            Y_().toString()
          )),
            (this._cssKeyframesDriver = new K_());
        }
        validateStyleProperty(t) {
          return Xv(t);
        }
        matchesElement(t, e) {
          return Jv(t, e);
        }
        containsElement(t, e) {
          return tb(t, e);
        }
        query(t, e, n) {
          return eb(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        overrideWebAnimationsSupport(t) {
          this._isNativeImpl = t;
        }
        animate(t, e, n, r, s, i = [], o) {
          if (!o && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(t, e, n, r, s, i);
          const a = {
            duration: n,
            delay: r,
            fill: 0 == r ? "both" : "forwards",
          };
          s && (a.easing = s);
          const l = {},
            u = i.filter((t) => t instanceof G_);
          Db(n, r) &&
            u.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (l[t] = e[t]));
            });
          const c = I_(t, (e = kb(t, (e = e.map((t) => mb(t, !1))), l)));
          return new G_(t, e, a, c);
        }
      }
      function Y_() {
        return (jv() && Element.prototype.animate) || {};
      }
      let X_ = (() => {
        class t extends Ww {
          constructor(t, e) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = t.createRenderer(e.body, {
                id: "0",
                encapsulation: xt.None,
                styles: [],
                data: { animation: [] },
              }));
          }
          build(t) {
            const e = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const n = Array.isArray(t) ? Gw(t) : t;
            return (
              eC(this._renderer, null, e, "register", [n]),
              new J_(e, this._renderer)
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(va), or(Uu));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class J_ extends class {} {
        constructor(t, e) {
          super(), (this._id = t), (this._renderer = e);
        }
        create(t, e) {
          return new tC(this._id, t, e || {}, this._renderer);
        }
      }
      class tC {
        constructor(t, e, n, r) {
          (this.id = t),
            (this.element = e),
            (this._renderer = r),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", n);
        }
        _listen(t, e) {
          return this._renderer.listen(this.element, `@@${this.id}:${t}`, e);
        }
        _command(t, ...e) {
          return eC(this._renderer, this.element, this.id, t, e);
        }
        onDone(t) {
          this._listen("done", t);
        }
        onStart(t) {
          this._listen("start", t);
        }
        onDestroy(t) {
          this._listen("destroy", t);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset"), (this._started = !1);
        }
        setPosition(t) {
          this._command("setPosition", t);
        }
        getPosition() {
          var t, e;
          return null !==
            (e =
              null === (t = this._renderer.engine.players[+this.id]) ||
              void 0 === t
                ? void 0
                : t.getPosition()) && void 0 !== e
            ? e
            : 0;
        }
      }
      function eC(t, e, n, r, s) {
        return t.setProperty(e, `@@${n}:${r}`, s);
      }
      const nC = "@",
        rC = "@.disabled";
      let sC = (() => {
        class t {
          constructor(t, e, n) {
            (this.delegate = t),
              (this.engine = e),
              (this._zone = n),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (e.onRemovalComplete = (t, e) => {
                e && e.parentNode(t) && e.removeChild(t.parentNode, t);
              });
          }
          createRenderer(t, e) {
            const n = this.delegate.createRenderer(t, e);
            if (!(t && e && e.data && e.data.animation)) {
              let t = this._rendererCache.get(n);
              return (
                t ||
                  ((t = new iC("", n, this.engine)),
                  this._rendererCache.set(n, t)),
                t
              );
            }
            const r = e.id,
              s = e.id + "-" + this._currentId;
            this._currentId++, this.engine.register(s, t);
            const i = (e) => {
              Array.isArray(e)
                ? e.forEach(i)
                : this.engine.registerTrigger(r, s, t, e.name, e);
            };
            return e.data.animation.forEach(i), new oC(this, s, n, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(t, e, n) {
            t >= 0 && t < this._microtaskId
              ? this._zone.run(() => e(n))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((t) => {
                        const [e, n] = t;
                        e(n);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([e, n]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(va), or(P_), or(uu));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class iC {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.delegate = e),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode
              ? (t) => e.destroyNode(t)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(t, e) {
          return this.delegate.createElement(t, e);
        }
        createComment(t) {
          return this.delegate.createComment(t);
        }
        createText(t) {
          return this.delegate.createText(t);
        }
        appendChild(t, e) {
          this.delegate.appendChild(t, e),
            this.engine.onInsert(this.namespaceId, e, t, !1);
        }
        insertBefore(t, e, n, r = !0) {
          this.delegate.insertBefore(t, e, n),
            this.engine.onInsert(this.namespaceId, e, t, r);
        }
        removeChild(t, e, n) {
          this.engine.onRemove(this.namespaceId, e, this.delegate, n);
        }
        selectRootElement(t, e) {
          return this.delegate.selectRootElement(t, e);
        }
        parentNode(t) {
          return this.delegate.parentNode(t);
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t);
        }
        setAttribute(t, e, n, r) {
          this.delegate.setAttribute(t, e, n, r);
        }
        removeAttribute(t, e, n) {
          this.delegate.removeAttribute(t, e, n);
        }
        addClass(t, e) {
          this.delegate.addClass(t, e);
        }
        removeClass(t, e) {
          this.delegate.removeClass(t, e);
        }
        setStyle(t, e, n, r) {
          this.delegate.setStyle(t, e, n, r);
        }
        removeStyle(t, e, n) {
          this.delegate.removeStyle(t, e, n);
        }
        setProperty(t, e, n) {
          e.charAt(0) == nC && e == rC
            ? this.disableAnimations(t, !!n)
            : this.delegate.setProperty(t, e, n);
        }
        setValue(t, e) {
          this.delegate.setValue(t, e);
        }
        listen(t, e, n) {
          return this.delegate.listen(t, e, n);
        }
        disableAnimations(t, e) {
          this.engine.disableAnimations(t, e);
        }
      }
      class oC extends iC {
        constructor(t, e, n, r) {
          super(e, n, r), (this.factory = t), (this.namespaceId = e);
        }
        setProperty(t, e, n) {
          e.charAt(0) == nC
            ? "." == e.charAt(1) && e == rC
              ? this.disableAnimations(t, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, t, e.substr(1), n)
            : this.delegate.setProperty(t, e, n);
        }
        listen(t, e, n) {
          if (e.charAt(0) == nC) {
            const r = (function (t) {
              switch (t) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return t;
              }
            })(t);
            let s = e.substr(1),
              i = "";
            return (
              s.charAt(0) != nC &&
                ([s, i] = (function (t) {
                  const e = t.indexOf(".");
                  return [t.substring(0, e), t.substr(e + 1)];
                })(s)),
              this.engine.listen(this.namespaceId, r, s, i, (t) => {
                this.factory.scheduleListenerCallback(t._data || -1, n, t);
              })
            );
          }
          return this.delegate.listen(t, e, n);
        }
      }
      let aC = (() => {
        class t extends P_ {
          constructor(t, e, n) {
            super(t.body, e, n);
          }
          ngOnDestroy() {
            this.flush();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Uu), or(sb), or(t_));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const lC = new zn("AnimationModuleType"),
        uC = [
          { provide: Ww, useClass: X_ },
          {
            provide: t_,
            useFactory: function () {
              return new e_();
            },
          },
          { provide: P_, useClass: aC },
          {
            provide: va,
            useFactory: function (t, e, n) {
              return new sC(t, e, n);
            },
            deps: [Lc, P_, uu],
          },
        ],
        cC = [
          {
            provide: sb,
            useFactory: function () {
              return "function" == typeof Y_() ? new Z_() : new K_();
            },
          },
          { provide: lC, useValue: "BrowserAnimations" },
          ...uC,
        ],
        hC = [
          { provide: sb, useClass: rb },
          { provide: lC, useValue: "NoopAnimations" },
          ...uC,
        ];
      let dC = (() => {
          class t {
            static withConfig(e) {
              return { ngModule: t, providers: e.disableAnimations ? hC : cC };
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({ providers: cC, imports: [eh] })),
            t
          );
        })(),
        pC = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t })),
            (t.ɵinj = ht({ imports: [[dC, wc, _g, Gy, Zy]] })),
            t
          );
        })(),
        fC = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = qt({ type: t, bootstrap: [Mv] })),
            (t.ɵinj = ht({ providers: [], imports: [[Nv, eh, pC, _g, Fw]] })),
            t
          );
        })();
      (function () {
        if (Cu)
          throw new Error("Cannot enable prod mode after platform setup.");
        _u = !1;
      })(),
        Jc()
          .bootstrapModule(fC)
          .catch((t) => console.error(t));
    },
  },
  (t) => {
    "use strict";
    t((t.s = 733));
  },
]);
