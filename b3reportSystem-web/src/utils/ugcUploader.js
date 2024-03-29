!(function() {
  var $ = (function() {
      function e(e) {
        var t = e.length,
          n = D.type(e);
        return (
          'function' !== n &&
          !D.isWindow(e) &&
          (!(1 !== e.nodeType || !t) ||
            'array' === n ||
            0 === t ||
            ('number' == typeof t && t > 0 && t - 1 in e))
        );
      }
      function t(e) {
        var t = (M[e] = {});
        return (
          D.each(e.match(P) || [], function(e, n) {
            t[n] = !0;
          }),
          t
        );
      }
      function n() {
        q.addEventListener
          ? (q.removeEventListener('DOMContentLoaded', r, !1),
            window.removeEventListener('load', r, !1))
          : (q.detachEvent('onreadystatechange', r), window.detachEvent('onload', r));
      }
      function r() {
        (q.addEventListener || 'load' === event.type || 'complete' === q.readyState) &&
          (n(), D.ready());
      }
      function a(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
          var r = 'data-' + t.replace(B, '-$1').toLowerCase();
          if ('string' == typeof (n = e.getAttribute(r))) {
            try {
              n =
                'true' === n ||
                ('false' !== n &&
                  ('null' === n ? null : +n + '' === n ? +n : $.test(n) ? D.parseJSON(n) : n));
            } catch (a) {}
            D.data(e, t, n);
          } else n = void 0;
        }
        return n;
      }
      function i(e) {
        var t;
        for (t in e) if (('data' !== t || !D.isEmptyObject(e[t])) && 'toJSON' !== t) return !1;
        return !0;
      }
      function o(e, t, n, r) {
        if (D.acceptData(e)) {
          var a,
            i,
            o = D.expando,
            s = e.nodeType,
            c = s ? D.cache : e,
            u = s ? e[o] : e[o] && o;
          if ((u && c[u] && (r || c[u].data)) || void 0 !== n || 'string' != typeof t)
            return (
              u || (u = s ? (e[o] = g.pop() || D.guid++) : o),
              c[u] || (c[u] = s ? {} : { toJSON: D.noop }),
              ('object' != typeof t && 'function' != typeof t) ||
                (r ? (c[u] = D.extend(c[u], t)) : (c[u].data = D.extend(c[u].data, t))),
              (i = c[u]),
              r || (i.data || (i.data = {}), (i = i.data)),
              void 0 !== n && (i[D.camelCase(t)] = n),
              'string' == typeof t ? null == (a = i[t]) && (a = i[D.camelCase(t)]) : (a = i),
              a
            );
        }
      }
      function s(e, t, n) {
        if (D.acceptData(e)) {
          var r,
            a,
            o = e.nodeType,
            s = o ? D.cache : e,
            c = o ? e[D.expando] : D.expando;
          if (s[c]) {
            if (t && (r = n ? s[c] : s[c].data)) {
              D.isArray(t)
                ? (t = t.concat(D.map(t, D.camelCase)))
                : t in r ? (t = [t]) : ((t = D.camelCase(t)), (t = t in r ? [t] : t.split(' '))),
                (a = t.length);
              for (; a--; ) delete r[t[a]];
              if (n ? !i(r) : !D.isEmptyObject(r)) return;
            }
            (n || (delete s[c].data, i(s[c]))) &&
              (o
                ? D.cleanData([e], !0)
                : C.deleteExpando || s != s.window ? delete s[c] : (s[c] = null));
          }
        }
      }
      function c() {
        return !0;
      }
      function u() {
        return !1;
      }
      function l(e) {
        return function(t, n) {
          'string' != typeof t && ((n = t), (t = '*'));
          var r,
            a = 0,
            i = t.toLowerCase().match(P) || [];
          if (D.isFunction(n))
            for (; (r = i[a++]); )
              '+' === r.charAt(0)
                ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function d(e, t, n, r) {
        function a(s) {
          var c;
          return (
            (i[s] = !0),
            D.each(e[s] || [], function(e, s) {
              var u = s(t, n, r);
              return 'string' != typeof u || o || i[u]
                ? o ? !(c = u) : void 0
                : (t.dataTypes.unshift(u), a(u), !1);
            }),
            c
          );
        }
        var i = {},
          o = e === ce;
        return a(t.dataTypes[0]) || (!i['*'] && a('*'));
      }
      function f(e, t) {
        var n,
          r,
          a = D.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((a[r] ? e : n || (n = {}))[r] = t[r]);
        return n && D.extend(!0, e, n), e;
      }
      function p(e, t, n) {
        for (var r, a, i, o, s = e.contents, c = e.dataTypes; '*' === c[0]; )
          c.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader('Content-Type'));
        if (a)
          for (o in s)
            if (s[o] && s[o].test(a)) {
              c.unshift(o);
              break;
            }
        if (c[0] in n) i = c[0];
        else {
          for (o in n) {
            if (!c[0] || e.converters[o + ' ' + c[0]]) {
              i = o;
              break;
            }
            r || (r = o);
          }
          i = i || r;
        }
        if (i) return i !== c[0] && c.unshift(i), n[i];
      }
      function h(e, t, n, r) {
        var a,
          i,
          o,
          s,
          c,
          u = {},
          l = e.dataTypes.slice();
        if (l[1]) for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
        for (i = l.shift(); i; )
          if (
            (e.responseFields[i] && (n[e.responseFields[i]] = t),
            !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (c = i),
            (i = l.shift()))
          )
            if ('*' === i) i = c;
            else if ('*' !== c && c !== i) {
              if (!(o = u[c + ' ' + i] || u['* ' + i]))
                for (a in u)
                  if (
                    ((s = a.split(' ')), s[1] === i && (o = u[c + ' ' + s[0]] || u['* ' + s[0]]))
                  ) {
                    !0 === o ? (o = u[a]) : !0 !== u[a] && ((i = s[0]), l.unshift(s[1]));
                    break;
                  }
              if (!0 !== o)
                if (o && e.throws) t = o(t);
                else
                  try {
                    t = o(t);
                  } catch (d) {
                    return {
                      state: 'parsererror',
                      error: o ? d : 'No conversion from ' + c + ' to ' + i,
                    };
                  }
            }
        return { state: 'success', data: t };
      }
      function v(e, t, n, r) {
        var a;
        if (D.isArray(t))
          D.each(t, function(t, a) {
            n || fe.test(e) ? r(e, a) : v(e + '[' + ('object' == typeof a ? t : '') + ']', a, n, r);
          });
        else if (n || 'object' !== D.type(t)) r(e, t);
        else for (a in t) v(e + '[' + a + ']', t[a], n, r);
      }
      function y() {
        try {
          return new window.XMLHttpRequest();
        } catch (e) {}
      }
      function m() {
        try {
          return new window.ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {}
      }
      var g = [],
        x = g.slice,
        b = g.concat,
        w = g.push,
        j = g.indexOf,
        T = {},
        E = T.toString,
        S = T.hasOwnProperty,
        C = {},
        k =
          '1.11.1 -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-deprecated,-event-alias,-wrap',
        D = function(e, t) {
          return new D.fn.init(e, t);
        },
        _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        L = /^-ms-/,
        A = /-([\da-z])/gi,
        N = function(e, t) {
          return t.toUpperCase();
        };
      (D.fn = D.prototype = {
        jquery: k,
        constructor: D,
        selector: '',
        length: 0,
        toArray: function() {
          return x.call(this);
        },
        get: function(e) {
          return null != e ? (e < 0 ? this[e + this.length] : this[e]) : x.call(this);
        },
        pushStack: function(e) {
          var t = D.merge(this.constructor(), e);
          return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function(e, t) {
          return D.each(this, e, t);
        },
        map: function(e) {
          return this.pushStack(
            D.map(this, function(t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function() {
          return this.pushStack(x.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor(null);
        },
        push: w,
        sort: g.sort,
        splice: g.splice,
      }),
        (D.extend = D.fn.extend = function() {
          var e,
            t,
            n,
            r,
            a,
            i,
            o = arguments[0] || {},
            s = 1,
            c = arguments.length,
            u = !1;
          for (
            'boolean' == typeof o && ((u = o), (o = arguments[s] || {}), s++),
              'object' == typeof o || D.isFunction(o) || (o = {}),
              s === c && ((o = this), s--);
            s < c;
            s++
          )
            if (null != (a = arguments[s]))
              for (r in a)
                (e = o[r]),
                  (n = a[r]),
                  o !== n &&
                    (u && n && (D.isPlainObject(n) || (t = D.isArray(n)))
                      ? (t
                          ? ((t = !1), (i = e && D.isArray(e) ? e : []))
                          : (i = e && D.isPlainObject(e) ? e : {}),
                        (o[r] = D.extend(u, i, n)))
                      : void 0 !== n && (o[r] = n));
          return o;
        }),
        D.extend({
          expando: 'jQuery' + (k + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function(e) {
            throw new Error(e);
          },
          noop: function() {},
          isFunction: function(e) {
            return 'function' === D.type(e);
          },
          isArray:
            Array.isArray ||
            function(e) {
              return 'array' === D.type(e);
            },
          isWindow: function(e) {
            return null != e && e == e.window;
          },
          isNumeric: function(e) {
            return !D.isArray(e) && e - parseFloat(e) >= 0;
          },
          isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          isPlainObject: function(e) {
            var t;
            if (!e || 'object' !== D.type(e) || e.nodeType || D.isWindow(e)) return !1;
            try {
              if (
                e.constructor &&
                !S.call(e, 'constructor') &&
                !S.call(e.constructor.prototype, 'isPrototypeOf')
              )
                return !1;
            } catch (n) {
              return !1;
            }
            if (C.ownLast) for (t in e) return S.call(e, t);
            for (t in e);
            return void 0 === t || S.call(e, t);
          },
          type: function(e) {
            return null == e
              ? e + ''
              : 'object' == typeof e || 'function' == typeof e
                ? T[E.call(e)] || 'object'
                : typeof e;
          },
          globalEval: function(e) {
            e &&
              D.trim(e) &&
              (window.execScript ||
                function(e) {
                  window.eval.call(window, e);
                })(e);
          },
          camelCase: function(e) {
            return e.replace(L, 'ms-').replace(A, N);
          },
          nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          each: function(t, n, r) {
            var i = 0,
              o = t.length,
              s = e(t);
            if (r) {
              if (s) for (; i < o && !1 !== n.apply(t[i], r); i++);
              else for (i in t) if (!1 === n.apply(t[i], r)) break;
            } else if (s) for (; i < o && !1 !== n.call(t[i], i, t[i]); i++);
            else for (i in t) if (!1 === n.call(t[i], i, t[i])) break;
            return t;
          },
          trim: function(e) {
            return null == e ? '' : (e + '').replace(_, '');
          },
          makeArray: function(t, n) {
            var r = n || [];
            return (
              null != t &&
                (e(Object(t)) ? D.merge(r, 'string' == typeof t ? [t] : t) : w.call(r, t)),
              r
            );
          },
          inArray: function(e, t, n) {
            var r;
            if (t) {
              if (j) return j.call(t, e, n);
              for (r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0; n < r; n++)
                if (n in t && t[n] === e) return n;
            }
            return -1;
          },
          merge: function(e, t) {
            for (var n = +t.length, r = 0, a = e.length; r < n; ) e[a++] = t[r++];
            if (n !== n) for (; void 0 !== t[r]; ) e[a++] = t[r++];
            return (e.length = a), e;
          },
          grep: function(e, t, n) {
            for (var a = [], i = 0, o = e.length, s = !n; i < o; i++)
              !t(e[i], i) !== s && a.push(e[i]);
            return a;
          },
          map: function(t, n, r) {
            var a,
              i = 0,
              o = t.length,
              s = e(t),
              c = [];
            if (s) for (; i < o; i++) null != (a = n(t[i], i, r)) && c.push(a);
            else for (i in t) null != (a = n(t[i], i, r)) && c.push(a);
            return b.apply([], c);
          },
          guid: 1,
          proxy: function(e, t) {
            var n, r, a;
            if (('string' == typeof t && ((a = e[t]), (t = e), (e = a)), D.isFunction(e)))
              return (
                (n = x.call(arguments, 2)),
                (r = function() {
                  return e.apply(t || this, n.concat(x.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || D.guid++),
                r
              );
          },
          now: function() {
            return +new Date();
          },
          support: C,
        }),
        D.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function(
          e,
          t
        ) {
          T['[object ' + t + ']'] = t.toLowerCase();
        });
      var O,
        q = window.document,
        H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
      ((D.fn.init = function(e, t) {
        var n, r;
        if (!e) return this;
        if ('string' == typeof e) {
          if (
            !(n =
              '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && e.length >= 3
                ? [null, e, null]
                : H.exec(e)) ||
            (!n[1] && t)
          )
            return !t || t.jquery ? (t || O).find(e) : this.constructor(t).find(e);
          if (n[1]) {
            if (
              ((t = t instanceof D ? t[0] : t),
              D.merge(this, D.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : q, !0)),
              rsingleTag.test(n[1]) && D.isPlainObject(t))
            )
              for (n in t) D.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this;
          }
          if ((r = q.getElementById(n[2])) && r.parentNode) {
            if (r.id !== n[2]) return O.find(e);
            (this.length = 1), (this[0] = r);
          }
          return (this.context = q), (this.selector = e), this;
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : D.isFunction(e)
            ? void 0 !== O.ready ? O.ready(e) : e(D)
            : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)),
              D.makeArray(e, this));
      }).prototype =
        D.fn),
        (O = D(q));
      var P = /\S+/g,
        M = {};
      (D.Callbacks = function(e) {
        e = 'string' == typeof e ? M[e] || t(e) : D.extend({}, e);
        var n,
          r,
          a,
          i,
          o,
          s,
          c = [],
          u = !e.once && [],
          l = function(t) {
            for (
              r = e.memory && t, a = !0, o = s || 0, s = 0, i = c.length, n = !0;
              c && o < i;
              o++
            )
              if (!1 === c[o].apply(t[0], t[1]) && e.stopOnFalse) {
                r = !1;
                break;
              }
            (n = !1), c && (u ? u.length && l(u.shift()) : r ? (c = []) : d.disable());
          },
          d = {
            add: function() {
              if (c) {
                var t = c.length;
                !(function a(t) {
                  D.each(t, function(t, n) {
                    var r = D.type(n);
                    'function' === r
                      ? (e.unique && d.has(n)) || c.push(n)
                      : n && n.length && 'string' !== r && a(n);
                  });
                })(arguments),
                  n ? (i = c.length) : r && ((s = t), l(r));
              }
              return this;
            },
            remove: function() {
              return (
                c &&
                  D.each(arguments, function(e, t) {
                    for (var r; (r = D.inArray(t, c, r)) > -1; )
                      c.splice(r, 1), n && (r <= i && i--, r <= o && o--);
                  }),
                this
              );
            },
            has: function(e) {
              return e ? D.inArray(e, c) > -1 : !(!c || !c.length);
            },
            empty: function() {
              return (c = []), (i = 0), this;
            },
            disable: function() {
              return (c = u = r = void 0), this;
            },
            disabled: function() {
              return !c;
            },
            lock: function() {
              return (u = void 0), r || d.disable(), this;
            },
            locked: function() {
              return !u;
            },
            fireWith: function(e, t) {
              return (
                !c ||
                  (a && !u) ||
                  ((t = t || []), (t = [e, t.slice ? t.slice() : t]), n ? u.push(t) : l(t)),
                this
              );
            },
            fire: function() {
              return d.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!a;
            },
          };
        return d;
      }),
        D.extend({
          Deferred: function(e) {
            var t = [
                ['resolve', 'done', D.Callbacks('once memory'), 'resolved'],
                ['reject', 'fail', D.Callbacks('once memory'), 'rejected'],
                ['notify', 'progress', D.Callbacks('memory')],
              ],
              n = 'pending',
              r = {
                state: function() {
                  return n;
                },
                always: function() {
                  return a.done(arguments).fail(arguments), this;
                },
                then: function() {
                  var e = arguments;
                  return D.Deferred(function(n) {
                    D.each(t, function(t, i) {
                      var o = D.isFunction(e[t]) && e[t];
                      a[i[1]](function() {
                        var e = o && o.apply(this, arguments);
                        e && D.isFunction(e.promise)
                          ? e
                              .promise()
                              .done(n.resolve)
                              .fail(n.reject)
                              .progress(n.notify)
                          : n[i[0] + 'With'](this === r ? n.promise() : this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                promise: function(e) {
                  return null != e ? D.extend(e, r) : r;
                },
              },
              a = {};
            return (
              (r.pipe = r.then),
              D.each(t, function(e, i) {
                var o = i[2],
                  s = i[3];
                (r[i[1]] = o.add),
                  s &&
                    o.add(
                      function() {
                        n = s;
                      },
                      t[1 ^ e][2].disable,
                      t[2][2].lock
                    ),
                  (a[i[0]] = function() {
                    return a[i[0] + 'With'](this === a ? r : this, arguments), this;
                  }),
                  (a[i[0] + 'With'] = o.fireWith);
              }),
              r.promise(a),
              e && e.call(a, a),
              a
            );
          },
          when: function(e) {
            var t,
              n,
              r,
              a = 0,
              i = x.call(arguments),
              o = i.length,
              s = 1 !== o || (e && D.isFunction(e.promise)) ? o : 0,
              c = 1 === s ? e : D.Deferred(),
              u = function(e, n, r) {
                return function(a) {
                  (n[e] = this),
                    (r[e] = arguments.length > 1 ? x.call(arguments) : a),
                    r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r);
                };
              };
            if (o > 1)
              for (t = new Array(o), n = new Array(o), r = new Array(o); a < o; a++)
                i[a] && D.isFunction(i[a].promise)
                  ? i[a]
                      .promise()
                      .done(u(a, r, i))
                      .fail(c.reject)
                      .progress(u(a, n, t))
                  : --s;
            return s || c.resolveWith(r, i), c.promise();
          },
        });
      var W;
      (D.fn.ready = function(e) {
        return D.ready.promise().done(e), this;
      }),
        D.extend({
          isReady: !1,
          readyWait: 1,
          holdReady: function(e) {
            e ? D.readyWait++ : D.ready(!0);
          },
          ready: function(e) {
            if (!0 === e ? !--D.readyWait : !D.isReady) {
              if (!q.body) return setTimeout(D.ready);
              (D.isReady = !0),
                (!0 !== e && --D.readyWait > 0) ||
                  (W.resolveWith(q, [D]),
                  D.fn.triggerHandler && (D(q).triggerHandler('ready'), D(q).off('ready')));
            }
          },
        }),
        (D.ready.promise = function(e) {
          if (!W)
            if (((W = D.Deferred()), 'complete' === q.readyState)) setTimeout(D.ready);
            else if (q.addEventListener)
              q.addEventListener('DOMContentLoaded', r, !1), window.addEventListener('load', r, !1);
            else {
              q.attachEvent('onreadystatechange', r), window.attachEvent('onload', r);
              var t = !1;
              try {
                t = null == window.frameElement && q.documentElement;
              } catch (a) {}
              t &&
                t.doScroll &&
                (function i() {
                  if (!D.isReady) {
                    try {
                      t.doScroll('left');
                    } catch (e) {
                      return setTimeout(i, 50);
                    }
                    n(), D.ready();
                  }
                })();
            }
          return W.promise(e);
        });
      var R,
        X = 'undefined';
      for (R in D(C)) break;
      (C.ownLast = '0' !== R),
        (C.inlineBlockNeedsLayout = !1),
        D(function() {
          var e, t, n, r;
          (n = q.getElementsByTagName('body')[0]) &&
            n.style &&
            ((t = q.createElement('div')),
            (r = q.createElement('div')),
            (r.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
            n.appendChild(r).appendChild(t),
            typeof t.style.zoom !== X &&
              ((t.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1'),
              (C.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
              e && (n.style.zoom = 1)),
            n.removeChild(r));
        }),
        (function() {
          var e = q.createElement('div');
          if (null == C.deleteExpando) {
            C.deleteExpando = !0;
            try {
              delete e.test;
            } catch (t) {
              C.deleteExpando = !1;
            }
          }
          e = null;
        })(),
        (D.acceptData = function(e) {
          var t = D.noData[(e.nodeName + ' ').toLowerCase()],
            n = +e.nodeType || 1;
          return (1 === n || 9 === n) && (!t || (!0 !== t && e.getAttribute('classid') === t));
        });
      var $ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        B = /([A-Z])/g;
      D.extend({
        cache: {},
        noData: {
          'applet ': !0,
          'embed ': !0,
          'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
        },
        hasData: function(e) {
          return !!(e = e.nodeType ? D.cache[e[D.expando]] : e[D.expando]) && !i(e);
        },
        data: function(e, t, n) {
          return o(e, t, n);
        },
        removeData: function(e, t) {
          return s(e, t);
        },
        _data: function(e, t, n) {
          return o(e, t, n, !0);
        },
        _removeData: function(e, t) {
          return s(e, t, !0);
        },
      }),
        D.fn.extend({
          data: function(e, t) {
            var n,
              r,
              i,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = D.data(o)), 1 === o.nodeType && !D._data(o, 'parsedAttrs'))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    ((r = s[n].name),
                    0 === r.indexOf('data-') && ((r = D.camelCase(r.slice(5))), a(o, r, i[r])));
                D._data(o, 'parsedAttrs', !0);
              }
              return i;
            }
            return 'object' == typeof e
              ? this.each(function() {
                  D.data(this, e);
                })
              : arguments.length > 1
                ? this.each(function() {
                    D.data(this, e, t);
                  })
                : o ? a(o, e, D.data(o, e)) : void 0;
          },
          removeData: function(e) {
            return this.each(function() {
              D.removeData(this, e);
            });
          },
        }),
        D.extend({
          queue: function(e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || 'fx') + 'queue'),
                (r = D._data(e, t)),
                n && (!r || D.isArray(n) ? (r = D._data(e, t, D.makeArray(n))) : r.push(n)),
                r || []
              );
          },
          dequeue: function(e, t) {
            t = t || 'fx';
            var n = D.queue(e, t),
              r = n.length,
              a = n.shift(),
              i = D._queueHooks(e, t),
              o = function() {
                D.dequeue(e, t);
              };
            'inprogress' === a && ((a = n.shift()), r--),
              a && ('fx' === t && n.unshift('inprogress'), delete i.stop, a.call(e, o, i)),
              !r && i && i.empty.fire();
          },
          _queueHooks: function(e, t) {
            var n = t + 'queueHooks';
            return (
              D._data(e, n) ||
              D._data(e, n, {
                empty: D.Callbacks('once memory').add(function() {
                  D._removeData(e, t + 'queue'), D._removeData(e, n);
                }),
              })
            );
          },
        }),
        D.fn.extend({
          queue: function(e, t) {
            var n = 2;
            return (
              'string' != typeof e && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? D.queue(this[0], e)
                : void 0 === t
                  ? this
                  : this.each(function() {
                      var n = D.queue(this, e, t);
                      D._queueHooks(this, e),
                        'fx' === e && 'inprogress' !== n[0] && D.dequeue(this, e);
                    })
            );
          },
          dequeue: function(e) {
            return this.each(function() {
              D.dequeue(this, e);
            });
          },
          clearQueue: function(e) {
            return this.queue(e || 'fx', []);
          },
          promise: function(e, t) {
            var n,
              r = 1,
              a = D.Deferred(),
              i = this,
              o = this.length,
              s = function() {
                --r || a.resolveWith(i, [i]);
              };
            for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; o--; )
              (n = D._data(i[o], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
            return s(), a.promise(t);
          },
        }),
        (D.event = {
          global: {},
          add: function(e, t, n, r, a) {
            var i,
              o,
              s,
              c,
              u,
              l,
              d,
              f,
              p,
              h,
              v,
              y = D._data(e);
            if (y) {
              for (
                n.handler && ((c = n), (n = c.handler), (a = c.selector)),
                  n.guid || (n.guid = D.guid++),
                  (o = y.events) || (o = y.events = {}),
                  (l = y.handle) ||
                    ((l = y.handle = function(e) {
                      return typeof D === X || (e && D.event.triggered === e.type)
                        ? void 0
                        : D.event.dispatch.apply(l.elem, arguments);
                    }),
                    (l.elem = e)),
                  t = (t || '').match(P) || [''],
                  s = t.length;
                s--;

              )
                (i = U.exec(t[s]) || []),
                  (p = v = i[1]),
                  (h = (i[2] || '').split('.').sort()),
                  p &&
                    ((u = D.event.special[p] || {}),
                    (p = (a ? u.delegateType : u.bindType) || p),
                    (u = D.event.special[p] || {}),
                    (d = D.extend(
                      {
                        type: p,
                        origType: v,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: a,
                        needsContext: a && D.expr.match.needsContext.test(a),
                        namespace: h.join('.'),
                      },
                      c
                    )),
                    (f = o[p]) ||
                      ((f = o[p] = []),
                      (f.delegateCount = 0),
                      (u.setup && !1 !== u.setup.call(e, r, h, l)) ||
                        (e.addEventListener
                          ? e.addEventListener(p, l, !1)
                          : e.attachEvent && e.attachEvent('on' + p, l))),
                    u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
                    a ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    (D.event.global[p] = !0));
              e = null;
            }
          },
          remove: function(e, t, n, r, a) {
            var i,
              o,
              s,
              c,
              u,
              l,
              d,
              f,
              p,
              h,
              v,
              y = D.hasData(e) && D._data(e);
            if (y && (l = y.events)) {
              for (t = (t || '').match(P) || [''], u = t.length; u--; )
                if (
                  ((s = U.exec(t[u]) || []),
                  (p = v = s[1]),
                  (h = (s[2] || '').split('.').sort()),
                  p)
                ) {
                  for (
                    d = D.event.special[p] || {},
                      p = (r ? d.delegateType : d.bindType) || p,
                      f = l[p] || [],
                      s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                      c = i = f.length;
                    i--;

                  )
                    (o = f[i]),
                      (!a && v !== o.origType) ||
                        (n && n.guid !== o.guid) ||
                        (s && !s.test(o.namespace)) ||
                        (r && r !== o.selector && ('**' !== r || !o.selector)) ||
                        (f.splice(i, 1),
                        o.selector && f.delegateCount--,
                        d.remove && d.remove.call(e, o));
                  c &&
                    !f.length &&
                    ((d.teardown && !1 !== d.teardown.call(e, h, y.handle)) ||
                      D.removeEvent(e, p, y.handle),
                    delete l[p]);
                } else for (p in l) D.event.remove(e, p + t[u], n, r, !0);
              D.isEmptyObject(l) && (delete y.handle, D._removeData(e, 'events'));
            }
          },
          trigger: function(e, t, n, r) {
            var a,
              i,
              o,
              s,
              c,
              u,
              l,
              d = [n || q],
              f = S.call(e, 'type') ? e.type : e,
              p = S.call(e, 'namespace') ? e.namespace.split('.') : [];
            if (
              ((o = u = n = n || q),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !K.test(f + D.event.triggered) &&
                (f.indexOf('.') >= 0 && ((p = f.split('.')), (f = p.shift()), p.sort()),
                (i = f.indexOf(':') < 0 && 'on' + f),
                (e = e[D.expando] ? e : new D.Event(f, 'object' == typeof e && e)),
                (e.isTrigger = r ? 2 : 3),
                (e.namespace = p.join('.')),
                (e.namespace_re = e.namespace
                  ? new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)')
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : D.makeArray(t, [e])),
                (c = D.event.special[f] || {}),
                r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
              if (!r && !c.noBubble && !D.isWindow(n)) {
                for (
                  s = c.delegateType || f, K.test(s + f) || (o = o.parentNode);
                  o;
                  o = o.parentNode
                )
                  d.push(o), (u = o);
                u === (n.ownerDocument || q) && d.push(u.defaultView || u.parentWindow || window);
              }
              for (l = 0; (o = d[l++]) && !e.isPropagationStopped(); )
                (e.type = l > 1 ? s : c.bindType || f),
                  (a = (D._data(o, 'events') || {})[e.type] && D._data(o, 'handle')),
                  a && a.apply(o, t),
                  (a = i && o[i]) &&
                    a.apply &&
                    D.acceptData(o) &&
                    ((e.result = a.apply(o, t)), !1 === e.result && e.preventDefault());
              if (
                ((e.type = f),
                !r &&
                  !e.isDefaultPrevented() &&
                  (!c._default || !1 === c._default.apply(d.pop(), t)) &&
                  D.acceptData(n) &&
                  i &&
                  n[f] &&
                  !D.isWindow(n))
              ) {
                (u = n[i]), u && (n[i] = null), (D.event.triggered = f);
                try {
                  n[f]();
                } catch (h) {}
                (D.event.triggered = void 0), u && (n[i] = u);
              }
              return e.result;
            }
          },
          dispatch: function(e) {
            e = D.event.fix(e);
            var t,
              n,
              r,
              a,
              i,
              o = [],
              s = x.call(arguments),
              c = (D._data(this, 'events') || {})[e.type] || [],
              u = D.event.special[e.type] || {};
            if (
              ((s[0] = e),
              (e.delegateTarget = this),
              !u.preDispatch || !1 !== u.preDispatch.call(this, e))
            ) {
              for (
                o = D.event.handlers.call(this, e, c), t = 0;
                (a = o[t++]) && !e.isPropagationStopped();

              )
                for (
                  e.currentTarget = a.elem, i = 0;
                  (r = a.handlers[i++]) && !e.isImmediatePropagationStopped();

                )
                  (e.namespace_re && !e.namespace_re.test(r.namespace)) ||
                    ((e.handleObj = r),
                    (e.data = r.data),
                    void 0 !==
                      (n = ((D.event.special[r.origType] || {}).handle || r.handler).apply(
                        a.elem,
                        s
                      )) &&
                      !1 === (e.result = n) &&
                      (e.preventDefault(), e.stopPropagation()));
              return u.postDispatch && u.postDispatch.call(this, e), e.result;
            }
          },
          handlers: function(e, t) {
            var n,
              r,
              a,
              i,
              o = [],
              s = t.delegateCount,
              c = e.target;
            if (s && c.nodeType && (!e.button || 'click' !== e.type))
              for (; c != this; c = c.parentNode || this)
                if (1 === c.nodeType && (!0 !== c.disabled || 'click' !== e.type)) {
                  for (a = [], i = 0; i < s; i++)
                    (r = t[i]),
                      (n = r.selector + ' '),
                      void 0 === a[n] &&
                        (a[n] = r.needsContext
                          ? D(n, this).index(c) >= 0
                          : D.find(n, this, null, [c]).length),
                      a[n] && a.push(r);
                  a.length && o.push({ elem: c, handlers: a });
                }
            return s < t.length && o.push({ elem: this, handlers: t.slice(s) }), o;
          },
          fix: function(e) {
            if (e[D.expando]) return e;
            var t,
              n,
              r,
              a = e.type,
              i = e,
              o = this.fixHooks[a];
            for (
              o ||
                (this.fixHooks[a] = o = z.test(a)
                  ? this.mouseHooks
                  : J.test(a) ? this.keyHooks : {}),
                r = o.props ? this.props.concat(o.props) : this.props,
                e = new D.Event(i),
                t = r.length;
              t--;

            )
              (n = r[t]), (e[n] = i[n]);
            return (
              e.target || (e.target = i.srcElement || q),
              3 === e.target.nodeType && (e.target = e.target.parentNode),
              (e.metaKey = !!e.metaKey),
              o.filter ? o.filter(e, i) : e
            );
          },
          props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
            ' '
          ),
          fixHooks: {},
          keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function(e, t) {
              return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
            },
          },
          mouseHooks: {
            props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
              ' '
            ),
            filter: function(e, t) {
              var n,
                r,
                a,
                i = t.button,
                o = t.fromElement;
              return (
                null == e.pageX &&
                  null != t.clientX &&
                  ((r = e.target.ownerDocument || q),
                  (a = r.documentElement),
                  (n = r.body),
                  (e.pageX =
                    t.clientX +
                    ((a && a.scrollLeft) || (n && n.scrollLeft) || 0) -
                    ((a && a.clientLeft) || (n && n.clientLeft) || 0)),
                  (e.pageY =
                    t.clientY +
                    ((a && a.scrollTop) || (n && n.scrollTop) || 0) -
                    ((a && a.clientTop) || (n && n.clientTop) || 0))),
                !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o),
                e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
                e
              );
            },
          },
          special: {
            load: { noBubble: !0 },
            focus: {
              trigger: function() {
                if (this !== safeActiveElement() && this.focus)
                  try {
                    return this.focus(), !1;
                  } catch (e) {}
              },
              delegateType: 'focusin',
            },
            blur: {
              trigger: function() {
                if (this === safeActiveElement() && this.blur) return this.blur(), !1;
              },
              delegateType: 'focusout',
            },
            click: {
              trigger: function() {
                if (D.nodeName(this, 'input') && 'checkbox' === this.type && this.click)
                  return this.click(), !1;
              },
              _default: function(e) {
                return D.nodeName(e.target, 'a');
              },
            },
            beforeunload: {
              postDispatch: function(e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
              },
            },
          },
          simulate: function(e, t, n, r) {
            var a = D.extend(new D.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });
            r ? D.event.trigger(a, null, t) : D.event.dispatch.call(t, a),
              a.isDefaultPrevented() && n.preventDefault();
          },
        }),
        (D.removeEvent = q.removeEventListener
          ? function(e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n, !1);
            }
          : function(e, t, n) {
              var r = 'on' + t;
              e.detachEvent && (typeof e[r] === X && (e[r] = null), e.detachEvent(r, n));
            }),
        (D.Event = function(e, t) {
          return this instanceof D.Event
            ? (e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? c
                      : u))
                : (this.type = e),
              t && D.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || D.now()),
              void (this[D.expando] = !0))
            : new D.Event(e, t);
        });
      var I = /^(?:input|select|textarea)$/i,
        J = /^key/,
        z = /^(?:mouse|pointer|contextmenu)|click/,
        K = /^(?:focusinfocus|focusoutblur)$/,
        U = /^([^.]*)(?:\.(.+)|)$/;
      (D.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
          var e = this.originalEvent;
          (this.isDefaultPrevented = c),
            e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          (this.isPropagationStopped = c),
            e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = c),
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
        C.submitBubbles ||
          (D.event.special.submit = {
            setup: function() {
              return (
                !D.nodeName(this, 'form') &&
                void D.event.add(this, 'click._submit keypress._submit', function(e) {
                  var t = e.target,
                    n = D.nodeName(t, 'input') || D.nodeName(t, 'button') ? t.form : void 0;
                  n &&
                    !D._data(n, 'submitBubbles') &&
                    (D.event.add(n, 'submit._submit', function(e) {
                      e._submit_bubble = !0;
                    }),
                    D._data(n, 'submitBubbles', !0));
                })
              );
            },
            postDispatch: function(e) {
              e._submit_bubble &&
                (delete e._submit_bubble,
                this.parentNode &&
                  !e.isTrigger &&
                  D.event.simulate('submit', this.parentNode, e, !0));
            },
            teardown: function() {
              return !D.nodeName(this, 'form') && void D.event.remove(this, '._submit');
            },
          }),
        C.changeBubbles ||
          (D.event.special.change = {
            setup: function() {
              return I.test(this.nodeName)
                ? (('checkbox' !== this.type && 'radio' !== this.type) ||
                    (D.event.add(this, 'propertychange._change', function(e) {
                      'checked' === e.originalEvent.propertyName && (this._just_changed = !0);
                    }),
                    D.event.add(this, 'click._change', function(e) {
                      this._just_changed && !e.isTrigger && (this._just_changed = !1),
                        D.event.simulate('change', this, e, !0);
                    })),
                  !1)
                : void D.event.add(this, 'beforeactivate._change', function(e) {
                    var t = e.target;
                    I.test(t.nodeName) &&
                      !D._data(t, 'changeBubbles') &&
                      (D.event.add(t, 'change._change', function(e) {
                        !this.parentNode ||
                          e.isSimulated ||
                          e.isTrigger ||
                          D.event.simulate('change', this.parentNode, e, !0);
                      }),
                      D._data(t, 'changeBubbles', !0));
                  });
            },
            handle: function(e) {
              var t = e.target;
              if (
                this !== t ||
                e.isSimulated ||
                e.isTrigger ||
                ('radio' !== t.type && 'checkbox' !== t.type)
              )
                return e.handleObj.handler.apply(this, arguments);
            },
            teardown: function() {
              return D.event.remove(this, '._change'), !I.test(this.nodeName);
            },
          }),
        C.focusinBubbles ||
          D.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
            var n = function(e) {
              D.event.simulate(t, e.target, D.event.fix(e), !0);
            };
            D.event.special[t] = {
              setup: function() {
                var r = this.ownerDocument || this,
                  a = D._data(r, t);
                a || r.addEventListener(e, n, !0), D._data(r, t, (a || 0) + 1);
              },
              teardown: function() {
                var r = this.ownerDocument || this,
                  a = D._data(r, t) - 1;
                a ? D._data(r, t, a) : (r.removeEventListener(e, n, !0), D._removeData(r, t));
              },
            };
          }),
        D.fn.extend({
          on: function(e, t, n, r, a) {
            var i, o;
            if ('object' == typeof e) {
              'string' != typeof t && ((n = n || t), (t = void 0));
              for (i in e) this.on(i, t, n, e[i], a);
              return this;
            }
            if (
              (null == n && null == r
                ? ((r = t), (n = t = void 0))
                : null == r &&
                  ('string' == typeof t
                    ? ((r = n), (n = void 0))
                    : ((r = n), (n = t), (t = void 0))),
              !1 === r)
            )
              r = u;
            else if (!r) return this;
            return (
              1 === a &&
                ((o = r),
                (r = function(e) {
                  return D().off(e), o.apply(this, arguments);
                }),
                (r.guid = o.guid || (o.guid = D.guid++))),
              this.each(function() {
                D.event.add(this, e, r, n, t);
              })
            );
          },
          one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
          },
          off: function(e, t, n) {
            var r, a;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                D(e.delegateTarget).off(
                  r.namespace ? r.origType + '.' + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ('object' == typeof e) {
              for (a in e) this.off(a, t, e[a]);
              return this;
            }
            return (
              (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = u),
              this.each(function() {
                D.event.remove(this, e, n, t);
              })
            );
          },
          trigger: function(e, t) {
            return this.each(function() {
              D.event.trigger(e, t, this);
            });
          },
          triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return D.event.trigger(e, t, n, !0);
          },
        }),
        (D.fn.delay = function(e, t) {
          return (
            (e = D.fx ? D.fx.speeds[e] || e : e),
            (t = t || 'fx'),
            this.queue(t, function(t, n) {
              var r = setTimeout(t, e);
              n.stop = function() {
                clearTimeout(r);
              };
            })
          );
        });
      var Y = D.now(),
        G = /\?/,
        V = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
      (D.parseJSON = function(e) {
        if (window.JSON && window.JSON.parse) return window.JSON.parse(e + '');
        var t,
          n = null,
          r = D.trim(e + '');
        return r &&
          !D.trim(
            r.replace(V, function(e, r, a, i) {
              return t && r && (n = 0), 0 === n ? e : ((t = a || r), (n += !i - !a), '');
            })
          )
          ? Function('return ' + r)()
          : D.error('Invalid JSON: ' + e);
      }),
        (D.parseXML = function(e) {
          var t, n;
          if (!e || 'string' != typeof e) return null;
          try {
            window.DOMParser
              ? ((n = new DOMParser()), (t = n.parseFromString(e, 'text/xml')))
              : ((t = new ActiveXObject('Microsoft.XMLDOM')), (t.async = 'false'), t.loadXML(e));
          } catch (r) {
            t = void 0;
          }
          return (
            (t && t.documentElement && !t.getElementsByTagName('parsererror').length) ||
              D.error('Invalid XML: ' + e),
            t
          );
        });
      var Q,
        Z,
        ee = /#.*$/,
        te = /([?&])_=[^&]*/,
        ne = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        re = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ae = /^(?:GET|HEAD)$/,
        ie = /^\/\//,
        oe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        se = {},
        ce = {},
        ue = '*/'.concat('*');
      try {
        Z = location.href;
      } catch (le) {
        (Z = q.createElement('a')), (Z.href = ''), (Z = Z.href);
      }
      (Q = oe.exec(Z.toLowerCase()) || []),
        D.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Z,
            type: 'GET',
            isLocal: re.test(Q[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': ue,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript',
            },
            contents: { xml: /xml/, html: /html/, json: /json/ },
            responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
            converters: {
              '* text': String,
              'text html': !0,
              'text json': D.parseJSON,
              'text xml': D.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function(e, t) {
            return t ? f(f(e, D.ajaxSettings), t) : f(D.ajaxSettings, e);
          },
          ajaxPrefilter: l(se),
          ajaxTransport: l(ce),
          ajax: function(e, t) {
            function n(e, t, n, r) {
              var a,
                l,
                d,
                b,
                w,
                T = t;
              2 !== j &&
                ((j = 2),
                s && clearTimeout(s),
                (u = void 0),
                (o = r || ''),
                (E.readyState = e > 0 ? 4 : 0),
                (a = (e >= 200 && e < 300) || 304 === e),
                n && (b = p(f, E, n)),
                (b = h(f, b, E, a)),
                a
                  ? (f.ifModified &&
                      ((w = E.getResponseHeader('Last-Modified')),
                      w && (D.lastModified[i] = w),
                      (w = E.getResponseHeader('etag')) && (D.etag[i] = w)),
                    204 === e || 'HEAD' === f.type
                      ? (T = 'nocontent')
                      : 304 === e
                        ? (T = 'notmodified')
                        : ((T = b.state), (l = b.data), (d = b.error), (a = !d)))
                  : ((d = T), (!e && T) || ((T = 'error'), e < 0 && (e = 0))),
                (E.status = e),
                (E.statusText = (t || T) + ''),
                a ? m.resolveWith(v, [l, T, E]) : m.rejectWith(v, [E, T, d]),
                E.statusCode(x),
                (x = void 0),
                c && y.trigger(a ? 'ajaxSuccess' : 'ajaxError', [E, f, a ? l : d]),
                g.fireWith(v, [E, T]),
                c &&
                  (y.trigger('ajaxComplete', [E, f]), --D.active || D.event.trigger('ajaxStop')));
            }
            'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              a,
              i,
              o,
              s,
              c,
              u,
              l,
              f = D.ajaxSetup({}, t),
              v = f.context || f,
              y = f.context && (v.nodeType || v.jquery) ? D(v) : D.event,
              m = D.Deferred(),
              g = D.Callbacks('once memory'),
              x = f.statusCode || {},
              b = {},
              w = {},
              j = 0,
              T = 'canceled',
              E = {
                readyState: 0,
                getResponseHeader: function(e) {
                  var t;
                  if (2 === j) {
                    if (!l) for (l = {}; (t = ne.exec(o)); ) l[t[1].toLowerCase()] = t[2];
                    t = l[e.toLowerCase()];
                  }
                  return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                  return 2 === j ? o : null;
                },
                setRequestHeader: function(e, t) {
                  var n = e.toLowerCase();
                  return j || ((e = w[n] = w[n] || e), (b[e] = t)), this;
                },
                overrideMimeType: function(e) {
                  return j || (f.mimeType = e), this;
                },
                statusCode: function(e) {
                  var t;
                  if (e)
                    if (j < 2) for (t in e) x[t] = [x[t], e[t]];
                    else E.always(e[E.status]);
                  return this;
                },
                abort: function(e) {
                  var t = e || T;
                  return u && u.abort(t), n(0, t), this;
                },
              };
            if (
              ((m.promise(E).complete = g.add),
              (E.success = E.done),
              (E.error = E.fail),
              (f.url = ((e || f.url || Z) + '').replace(ee, '').replace(ie, Q[1] + '//')),
              (f.type = t.method || t.type || f.method || f.type),
              (f.dataTypes = D.trim(f.dataType || '*')
                .toLowerCase()
                .match(P) || ['']),
              null == f.crossDomain &&
                ((r = oe.exec(f.url.toLowerCase())),
                (f.crossDomain = !(
                  !r ||
                  (r[1] === Q[1] &&
                    r[2] === Q[2] &&
                    (r[3] || ('http:' === r[1] ? '80' : '443')) ===
                      (Q[3] || ('http:' === Q[1] ? '80' : '443')))
                ))),
              f.data &&
                f.processData &&
                'string' != typeof f.data &&
                (f.data = D.param(f.data, f.traditional)),
              d(se, f, t, E),
              2 === j)
            )
              return E;
            (c = f.global),
              c && 0 == D.active++ && D.event.trigger('ajaxStart'),
              (f.type = f.type.toUpperCase()),
              (f.hasContent = !ae.test(f.type)),
              (i = f.url),
              f.hasContent ||
                (f.data && ((i = f.url += (G.test(i) ? '&' : '?') + f.data), delete f.data),
                !1 === f.cache &&
                  (f.url = te.test(i)
                    ? i.replace(te, '$1_=' + Y++)
                    : i + (G.test(i) ? '&' : '?') + '_=' + Y++)),
              f.ifModified &&
                (D.lastModified[i] && E.setRequestHeader('If-Modified-Since', D.lastModified[i]),
                D.etag[i] && E.setRequestHeader('If-None-Match', D.etag[i])),
              ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) &&
                E.setRequestHeader('Content-Type', f.contentType),
              E.setRequestHeader(
                'Accept',
                f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                  ? f.accepts[f.dataTypes[0]] +
                    ('*' !== f.dataTypes[0] ? ', ' + ue + '; q=0.01' : '')
                  : f.accepts['*']
              );
            for (a in f.headers) E.setRequestHeader(a, f.headers[a]);
            if (f.beforeSend && (!1 === f.beforeSend.call(v, E, f) || 2 === j)) return E.abort();
            T = 'abort';
            for (a in { success: 1, error: 1, complete: 1 }) E[a](f[a]);
            if ((u = d(ce, f, t, E))) {
              (E.readyState = 1),
                c && y.trigger('ajaxSend', [E, f]),
                f.async &&
                  f.timeout > 0 &&
                  (s = setTimeout(function() {
                    E.abort('timeout');
                  }, f.timeout));
              try {
                (j = 1), u.send(b, n);
              } catch (S) {
                if (!(j < 2)) throw S;
                n(-1, S);
              }
            } else n(-1, 'No Transport');
            return E;
          },
          getJSON: function(e, t, n) {
            return D.get(e, t, n, 'json');
          },
          getScript: function(e, t) {
            return D.get(e, void 0, t, 'script');
          },
        }),
        D.each(['get', 'post'], function(e, t) {
          D[t] = function(e, n, r, a) {
            return (
              D.isFunction(n) && ((a = a || r), (r = n), (n = void 0)),
              D.ajax({ url: e, type: t, dataType: a, data: n, success: r })
            );
          };
        }),
        D.each(
          ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
          function(e, t) {
            D.fn[t] = function(e) {
              return this.on(t, e);
            };
          }
        ),
        (D._evalUrl = function(e) {
          return D.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            async: !1,
            global: !1,
            throws: !0,
          });
        });
      var de = /%20/g,
        fe = /\[\]$/,
        pe = /\r?\n/g,
        he = /^(?:submit|button|image|reset|file)$/i,
        ve = /^(?:input|select|textarea|keygen)/i;
      (D.param = function(e, t) {
        var n,
          r = [],
          a = function(e, t) {
            (t = D.isFunction(t) ? t() : null == t ? '' : t),
              (r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t));
          };
        if (
          (void 0 === t && (t = D.ajaxSettings && D.ajaxSettings.traditional),
          D.isArray(e) || (e.jquery && !D.isPlainObject(e)))
        )
          D.each(e, function() {
            a(this.name, this.value);
          });
        else for (n in e) v(n, e[n], t, a);
        return r.join('&').replace(de, '+');
      }),
        D.fn.extend({
          serialize: function() {
            return D.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var e = D.prop(this, 'elements');
              return e ? D.makeArray(e) : this;
            })
              .filter(function() {
                var e = this.type;
                return (
                  this.name &&
                  !D(this).is(':disabled') &&
                  ve.test(this.nodeName) &&
                  !he.test(e) &&
                  (this.checked || !rcheckableType.test(e))
                );
              })
              .map(function(e, t) {
                var n = D(this).val();
                return null == n
                  ? null
                  : D.isArray(n)
                    ? D.map(n, function(e) {
                        return { name: t.name, value: e.replace(pe, '\r\n') };
                      })
                    : { name: t.name, value: n.replace(pe, '\r\n') };
              })
              .get();
          },
        }),
        (D.ajaxSettings.xhr =
          void 0 !== window.ActiveXObject
            ? function() {
                return (
                  (!this.isLocal &&
                    /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                    y()) ||
                  m()
                );
              }
            : y);
      var ye = 0,
        me = {},
        ge = D.ajaxSettings.xhr();
      window.ActiveXObject &&
        D(window).on('unload', function() {
          for (var e in me) me[e](void 0, !0);
        }),
        (C.cors = !!ge && 'withCredentials' in ge),
        (ge = C.ajax = !!ge),
        ge &&
          D.ajaxTransport(function(e) {
            if (!e.crossDomain || C.cors) {
              var t;
              return {
                send: function(n, r) {
                  var a,
                    i = e.xhr(),
                    o = ++ye;
                  if ((i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
                    for (a in e.xhrFields) i[a] = e.xhrFields[a];
                  e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      n['X-Requested-With'] ||
                      (n['X-Requested-With'] = 'XMLHttpRequest');
                  for (a in n) void 0 !== n[a] && i.setRequestHeader(a, n[a] + '');
                  i.send((e.hasContent && e.data) || null),
                    (t = function(n, a) {
                      var s, c, u;
                      if (t && (a || 4 === i.readyState))
                        if ((delete me[o], (t = void 0), (i.onreadystatechange = D.noop), a))
                          4 !== i.readyState && i.abort();
                        else {
                          (u = {}),
                            (s = i.status),
                            'string' == typeof i.responseText && (u.text = i.responseText);
                          try {
                            c = i.statusText;
                          } catch (l) {
                            c = '';
                          }
                          s || !e.isLocal || e.crossDomain
                            ? 1223 === s && (s = 204)
                            : (s = u.text ? 200 : 404);
                        }
                      u && r(s, c, u, i.getAllResponseHeaders());
                    }),
                    e.async
                      ? 4 === i.readyState ? setTimeout(t) : (i.onreadystatechange = me[o] = t)
                      : t();
                },
                abort: function() {
                  t && t(void 0, !0);
                },
              };
            }
          }),
        D.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /(?:java|ecma)script/ },
          converters: {
            'text script': function(e) {
              return D.globalEval(e), e;
            },
          },
        }),
        D.ajaxPrefilter('script', function(e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && ((e.type = 'GET'), (e.global = !1));
        }),
        D.ajaxTransport('script', function(e) {
          if (e.crossDomain) {
            var t,
              n = q.head || D('head')[0] || q.documentElement;
            return {
              send: function(r, a) {
                (t = q.createElement('script')),
                  (t.async = !0),
                  e.scriptCharset && (t.charset = e.scriptCharset),
                  (t.src = e.url),
                  (t.onload = t.onreadystatechange = function(e, n) {
                    (n || !t.readyState || /loaded|complete/.test(t.readyState)) &&
                      ((t.onload = t.onreadystatechange = null),
                      t.parentNode && t.parentNode.removeChild(t),
                      (t = null),
                      n || a(200, 'success'));
                  }),
                  n.insertBefore(t, n.firstChild);
              },
              abort: function() {
                t && t.onload(void 0, !0);
              },
            };
          }
        });
      var xe = [],
        be = /(=)\?(?=&|$)|\?\?/;
      return (
        D.ajaxSetup({
          jsonp: 'callback',
          jsonpCallback: function() {
            var e = xe.pop() || D.expando + '_' + Y++;
            return (this[e] = !0), e;
          },
        }),
        D.ajaxPrefilter('json jsonp', function(e, t, n) {
          var r,
            a,
            i,
            o =
              !1 !== e.jsonp &&
              (be.test(e.url)
                ? 'url'
                : 'string' == typeof e.data &&
                  !(e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                  be.test(e.data) &&
                  'data');
          if (o || 'jsonp' === e.dataTypes[0])
            return (
              (r = e.jsonpCallback = D.isFunction(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              o
                ? (e[o] = e[o].replace(be, '$1' + r))
                : !1 !== e.jsonp && (e.url += (G.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
              (e.converters['script json'] = function() {
                return i || D.error(r + ' was not called'), i[0];
              }),
              (e.dataTypes[0] = 'json'),
              (a = window[r]),
              (window[r] = function() {
                i = arguments;
              }),
              n.always(function() {
                (window[r] = a),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), xe.push(r)),
                  i && D.isFunction(a) && a(i[0]),
                  (i = a = void 0);
              }),
              'script'
            );
        }),
        (D.parseHTML = function(e, t, n) {
          if (!e || 'string' != typeof e) return null;
          'boolean' == typeof t && ((n = t), (t = !1)), (t = t || q);
          var r = rsingleTag.exec(e),
            a = !n && [];
          return r
            ? [t.createElement(r[1])]
            : ((r = D.buildFragment([e], t, a)),
              a && a.length && D(a).remove(),
              D.merge([], r.childNodes));
        }),
        D
      );
    })(),
    jsSHA = (function() {
      function r(r, i, f) {
        var s,
          l,
          E,
          b,
          v,
          g,
          A,
          d,
          F,
          w = 0,
          R = [],
          B = 0,
          U = !1,
          y = [],
          H = [],
          T = !1;
        if (
          ((f = f || {}),
          (s = f.encoding || 'UTF8'),
          (F = f.numRounds || 1) !== parseInt(F, 10) || 1 > F)
        )
          throw Error('numRounds must a integer >= 1');
        if ('SHA-1' !== r) throw Error('Chosen SHA variant is not supported');
        (v = 512),
          (g = h),
          (A = p),
          (b = 160),
          (d = function(r) {
            return r.slice();
          }),
          (E = u(i, s)),
          (l = c(r)),
          (this.setHMACKey = function(t, n, e) {
            var o;
            if (!0 === U) throw Error('HMAC key already set');
            if (!0 === T) throw Error('Cannot set HMAC key after calling update');
            if (
              ((s = (e || {}).encoding || 'UTF8'),
              (n = u(n, s)(t)),
              (t = n.binLen),
              (n = n.value),
              (o = v >>> 3),
              (e = o / 4 - 1),
              o < t / 8)
            ) {
              for (n = A(n, t, 0, c(r), b); n.length <= e; ) n.push(0);
              n[e] &= 4294967040;
            } else if (o > t / 8) {
              for (; n.length <= e; ) n.push(0);
              n[e] &= 4294967040;
            }
            for (t = 0; t <= e; t += 1) (y[t] = 909522486 ^ n[t]), (H[t] = 1549556828 ^ n[t]);
            (l = g(y, l)), (w = v), (U = !0);
          }),
          (this.update = function(r) {
            var t,
              n,
              e,
              o = 0,
              a = v >>> 5;
            for (t = E(r, R, B), r = t.binLen, n = t.value, t = r >>> 5, e = 0; e < t; e += a)
              o + v <= r && ((l = g(n.slice(e, e + a), l)), (o += v));
            (w += o), (R = n.slice(o >>> 5)), (B = r % v), (T = !0);
            return (function(r) {
              for (var t = '', n = 0; n < 5; n++)
                for (var e = 0; e < 4; e++) {
                  var o = r[n] >>> (8 * e);
                  o &= 255;
                  var a = Number(o).toString(16);
                  (a = a.length < 2 ? '0' + a : a), (t += a);
                }
              return t;
            })(l);
          }),
          (this.getHash = function(u, i) {
            var f, s, h, p;
            if (!0 === U) throw Error('Cannot call getHash after setting HMAC key');
            switch (((h = a(i)), u)) {
              case 'HEX':
                f = function(r) {
                  return t(r, b, h);
                };
                break;
              case 'B64':
                f = function(r) {
                  return n(r, b, h);
                };
                break;
              case 'BYTES':
                f = function(r) {
                  return e(r, b);
                };
                break;
              case 'ARRAYBUFFER':
                try {
                  s = new ArrayBuffer(0);
                } catch (E) {
                  throw Error('ARRAYBUFFER not supported by this environment');
                }
                f = function(r) {
                  return o(r, b);
                };
                break;
              default:
                throw Error('format must be HEX, B64, BYTES, or ARRAYBUFFER');
            }
            for (p = A(R.slice(), B, w, d(l), b), s = 1; s < F; s += 1) p = A(p, b, 0, c(r), b);
            return f(p);
          }),
          (this.getHMAC = function(u, i) {
            var f, s, h, p;
            if (!1 === U) throw Error('Cannot call getHMAC without first setting HMAC key');
            switch (((h = a(i)), u)) {
              case 'HEX':
                f = function(r) {
                  return t(r, b, h);
                };
                break;
              case 'B64':
                f = function(r) {
                  return n(r, b, h);
                };
                break;
              case 'BYTES':
                f = function(r) {
                  return e(r, b);
                };
                break;
              case 'ARRAYBUFFER':
                try {
                  f = new ArrayBuffer(0);
                } catch (E) {
                  throw Error('ARRAYBUFFER not supported by this environment');
                }
                f = function(r) {
                  return o(r, b);
                };
                break;
              default:
                throw Error('outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER');
            }
            return (
              (s = A(R.slice(), B, w, d(l), b)), (p = g(H, c(r))), (p = A(s, b, v, p, b)), f(p)
            );
          });
      }
      function t(r, t, n) {
        var e = '';
        t /= 8;
        var o, a;
        for (o = 0; o < t; o += 1)
          (a = r[o >>> 2] >>> (8 * (3 + (o % 4) * -1))),
            (e += '0123456789abcdef'.charAt((a >>> 4) & 15) + '0123456789abcdef'.charAt(15 & a));
        return n.outputUpper ? e.toUpperCase() : e;
      }
      function n(r, t, n) {
        var e,
          o,
          a,
          u = '',
          i = t / 8;
        for (e = 0; e < i; e += 3)
          for (
            o = e + 1 < i ? r[(e + 1) >>> 2] : 0,
              a = e + 2 < i ? r[(e + 2) >>> 2] : 0,
              a =
                (((r[e >>> 2] >>> (8 * (3 + (e % 4) * -1))) & 255) << 16) |
                (((o >>> (8 * (3 + ((e + 1) % 4) * -1))) & 255) << 8) |
                ((a >>> (8 * (3 + ((e + 2) % 4) * -1))) & 255),
              o = 0;
            4 > o;
            o += 1
          )
            u +=
              8 * e + 6 * o <= t
                ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                    (a >>> (6 * (3 - o))) & 63
                  )
                : n.b64Pad;
        return u;
      }
      function e(r, t) {
        var n,
          e,
          o = '',
          a = t / 8;
        for (n = 0; n < a; n += 1)
          (e = (r[n >>> 2] >>> (8 * (3 + (n % 4) * -1))) & 255), (o += String.fromCharCode(e));
        return o;
      }
      function o(r, t) {
        var n,
          e = t / 8,
          o = new ArrayBuffer(e);
        for (n = 0; n < e; n += 1) o[n] = (r[n >>> 2] >>> (8 * (3 + (n % 4) * -1))) & 255;
        return o;
      }
      function a(r) {
        var t = { outputUpper: !1, b64Pad: '=', shakeLen: -1 };
        if (
          ((r = r || {}),
          (t.outputUpper = r.outputUpper || !1),
          !0 === r.hasOwnProperty('b64Pad') && (t.b64Pad = r.b64Pad),
          'boolean' != typeof t.outputUpper)
        )
          throw Error('Invalid outputUpper formatting option');
        if ('string' != typeof t.b64Pad) throw Error('Invalid b64Pad formatting option');
        return t;
      }
      function u(r, t) {
        var n;
        switch (t) {
          case 'UTF8':
          case 'UTF16BE':
          case 'UTF16LE':
            break;
          default:
            throw Error('encoding must be UTF8, UTF16BE, or UTF16LE');
        }
        switch (r) {
          case 'HEX':
            n = function(r, t, n) {
              var e,
                o,
                a,
                u,
                i,
                f = r.length;
              if (0 != f % 2) throw Error('String of HEX type must be in byte increments');
              for (t = t || [0], n = n || 0, i = n >>> 3, e = 0; e < f; e += 2) {
                if (((o = parseInt(r.substr(e, 2), 16)), isNaN(o)))
                  throw Error('String of HEX type contains invalid characters');
                for (u = (e >>> 1) + i, a = u >>> 2; t.length <= a; ) t.push(0);
                t[a] |= o << (8 * (3 + (u % 4) * -1));
              }
              return { value: t, binLen: 4 * f + n };
            };
            break;
          case 'TEXT':
            n = function(r, n, e) {
              var o,
                a,
                u,
                i,
                f,
                s,
                c,
                h,
                p = 0;
              if (((n = n || [0]), (e = e || 0), (f = e >>> 3), 'UTF8' === t))
                for (h = 3, u = 0; u < r.length; u += 1)
                  for (
                    o = r.charCodeAt(u),
                      a = [],
                      128 > o
                        ? a.push(o)
                        : 2048 > o
                          ? (a.push(192 | (o >>> 6)), a.push(128 | (63 & o)))
                          : 55296 > o || 57344 <= o
                            ? a.push(224 | (o >>> 12), 128 | ((o >>> 6) & 63), 128 | (63 & o))
                            : ((u += 1),
                              (o = 65536 + (((1023 & o) << 10) | (1023 & r.charCodeAt(u)))),
                              a.push(
                                240 | (o >>> 18),
                                128 | ((o >>> 12) & 63),
                                128 | ((o >>> 6) & 63),
                                128 | (63 & o)
                              )),
                      i = 0;
                    i < a.length;
                    i += 1
                  ) {
                    for (c = p + f, s = c >>> 2; n.length <= s; ) n.push(0);
                    (n[s] |= a[i] << (8 * (h + (c % 4) * -1))), (p += 1);
                  }
              else if ('UTF16BE' === t || 'UTF16LE' === t)
                for (h = 2, u = 0; u < r.length; u += 1) {
                  for (
                    o = r.charCodeAt(u),
                      'UTF16LE' === t && ((i = 255 & o), (o = (i << 8) | (o >>> 8))),
                      c = p + f,
                      s = c >>> 2;
                    n.length <= s;

                  )
                    n.push(0);
                  (n[s] |= o << (8 * (h + (c % 4) * -1))), (p += 2);
                }
              return { value: n, binLen: 8 * p + e };
            };
            break;
          case 'B64':
            n = function(r, t, n) {
              var e,
                o,
                a,
                u,
                i,
                f,
                s,
                c = 0;
              if (-1 === r.search(/^[a-zA-Z0-9=+\/]+$/))
                throw Error('Invalid character in base-64 string');
              if (((o = r.indexOf('=')), (r = r.replace(/\=/g, '')), -1 !== o && o < r.length))
                throw Error("Invalid '=' found in base-64 string");
              for (t = t || [0], n = n || 0, f = n >>> 3, o = 0; o < r.length; o += 4) {
                for (i = r.substr(o, 4), a = u = 0; a < i.length; a += 1)
                  (e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(
                    i[a]
                  )),
                    (u |= e << (18 - 6 * a));
                for (a = 0; a < i.length - 1; a += 1) {
                  for (s = c + f, e = s >>> 2; t.length <= e; ) t.push(0);
                  (t[e] |= ((u >>> (16 - 8 * a)) & 255) << (8 * (3 + (s % 4) * -1))), (c += 1);
                }
              }
              return { value: t, binLen: 8 * c + n };
            };
            break;
          case 'BYTES':
            n = function(r, t, n) {
              var e, o, a, u, i;
              for (t = t || [0], n = n || 0, a = n >>> 3, o = 0; o < r.length; o += 1)
                (e = r.charCodeAt(o)),
                  (i = o + a),
                  (u = i >>> 2),
                  t.length <= u && t.push(0),
                  (t[u] |= e << (8 * (3 + (i % 4) * -1)));
              return { value: t, binLen: 8 * r.length + n };
            };
            break;
          case 'ARRAYBUFFER':
            try {
              n = new ArrayBuffer(0);
            } catch (e) {
              throw Error('ARRAYBUFFER not supported by this environment');
            }
            n = function(r, t, n) {
              var e, o, a, u;
              for (t = t || [0], n = n || 0, o = n >>> 3, e = 0; e < r.byteLength; e += 1)
                (u = e + o),
                  (a = u >>> 2),
                  t.length <= a && t.push(0),
                  (t[a] |= r[e] << (8 * (3 + (u % 4) * -1)));
              return { value: t, binLen: 8 * r.byteLength + n };
            };
            break;
          default:
            throw Error('format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER');
        }
        return n;
      }
      function i(r, t) {
        return (r << t) | (r >>> (32 - t));
      }
      function f(r, t) {
        var n = (65535 & r) + (65535 & t);
        return ((((r >>> 16) + (t >>> 16) + (n >>> 16)) & 65535) << 16) | (65535 & n);
      }
      function s(r, t, n, e, o) {
        var a = (65535 & r) + (65535 & t) + (65535 & n) + (65535 & e) + (65535 & o);
        return (
          ((((r >>> 16) + (t >>> 16) + (n >>> 16) + (e >>> 16) + (o >>> 16) + (a >>> 16)) &
            65535) <<
            16) |
          (65535 & a)
        );
      }
      function c(r) {
        if ('SHA-1' !== r) throw Error('No SHA variants supported');
        return [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      }
      function h(r, t) {
        var n,
          e,
          o,
          a,
          u,
          c,
          h,
          p = [];
        for (n = t[0], e = t[1], o = t[2], a = t[3], u = t[4], h = 0; 80 > h; h += 1)
          (p[h] = 16 > h ? r[h] : i(p[h - 3] ^ p[h - 8] ^ p[h - 14] ^ p[h - 16], 1)),
            (c =
              20 > h
                ? s(i(n, 5), (e & o) ^ (~e & a), u, 1518500249, p[h])
                : 40 > h
                  ? s(i(n, 5), e ^ o ^ a, u, 1859775393, p[h])
                  : 60 > h
                    ? s(i(n, 5), (e & o) ^ (e & a) ^ (o & a), u, 2400959708, p[h])
                    : s(i(n, 5), e ^ o ^ a, u, 3395469782, p[h])),
            (u = a),
            (a = o),
            (o = i(e, 30)),
            (e = n),
            (n = c);
        return (
          (t[0] = f(n, t[0])),
          (t[1] = f(e, t[1])),
          (t[2] = f(o, t[2])),
          (t[3] = f(a, t[3])),
          (t[4] = f(u, t[4])),
          t
        );
      }
      function p(r, t, n, e) {
        var o;
        for (o = 15 + (((t + 65) >>> 9) << 4); r.length <= o; ) r.push(0);
        for (
          r[t >>> 5] |= 128 << (24 - t % 32),
            t += n,
            r[o] = 4294967295 & t,
            r[o - 1] = (t / 4294967296) | 0,
            t = r.length,
            o = 0;
          o < t;
          o += 16
        )
          e = h(r.slice(o, o + 16), e);
        return e;
      }
      return r;
    })();
  !(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = t())
      : 'function' == typeof define && (define.amd || define.cmd) ? define(t) : (e.CosCloud = t());
  })(this, function() {
    'use strict';
    function e(e) {
      (this.appid = e.appid),
        (this.bucket = e.bucket),
        (this.region = e.region),
        (this.sha1CacheExpired = 259200),
        (this.uploadMaxThread = 5),
        (this.uploadMaxRetryTimes = 3),
        (this._uploadingThreadCount = 0),
        (this.tasks = []),
        e.getAppSign && (this.getAppSign = t(e.getAppSign, this)),
        e.getAppSignOnce && (this.getAppSignOnce = t(e.getAppSignOnce, this));
    }
    function t(e, t) {
      return function(a) {
        e.call(t, function(e) {
          decodeURIComponent(e) === e && (e = encodeURIComponent(e)), a(e);
        });
      };
    }
    function a() {
      function e() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      return e() + e() + '-' + e() + '-' + e() + '-' + e() + '-' + e() + e() + e();
    }
    function n(e, t) {
      if (!e) return '';
      var a = this;
      return (
        (e = e.replace(/(^\/*)/g, '')),
        (e =
          'folder' == t
            ? encodeURIComponent(e + '/').replace(/%2F/g, '/')
            : encodeURIComponent(e).replace(/%2F/g, '/')),
        a && (a.path = '/' + a.appid + '/' + a.bucket + '/' + e),
        e
      );
    }
    function o(e) {
      var t,
        a = $.Deferred(),
        n = new jsSHA('SHA-1', 'BYTES'),
        o = 0,
        r = e.sliceSize,
        i = new FileReader(),
        s = [],
        p = e.file,
        l = p.size;
      e.session && (t = y(e.session));
      var u = function(e) {
        s.push(e);
        var a = e.offset + '-' + e.datalen;
        return !t || !t[a] || e.datasha === t[a];
      };
      return (
        (i.onload = function(t) {
          if ('cancel' !== e.globalTask.state && p && !(p.length < 1)) {
            var d = n.update(this.content || this.result),
              f = o + r > l ? l - o : r,
              g = o + f < l,
              h = g ? d : n.getHash('HEX');
            if (!u({ offset: o, datalen: f, datasha: h })) return void a.reject('sha1 not match');
            (o += f),
              e.onprogress(0, o / l),
              g ? c.call(i, p.slice(o, Math.min(o + r, l))) : a.resolve(s);
          }
        }),
        c.call(i, p.slice(o, o + r)),
        (i.onerror = function() {
          a.reject();
        }),
        a.promise()
      );
    }
    function r(e) {
      var t = $.Deferred(),
        a = e.file,
        n = this,
        o = this.getCgiUrl(e.path, e.sign),
        r = new FormData(),
        s = e.uploadparts;
      return (
        r.append('uploadparts', JSON.stringify(s)),
        r.append('sha', e.sha),
        r.append('op', 'upload_slice_init'),
        r.append('filesize', a.size),
        r.append('slice_size', e.sliceSize),
        r.append('biz_attr', e.biz_attr),
        r.append('insertOnly', e.insertOnly),
        $.ajax({
          type: 'POST',
          dataType: 'JSON',
          url: o,
          data: r,
          success: function(a) {
            if ('cancel' !== e.globalTask.state)
              if (((a = a || {}), 0 == a.code)) {
                if (a.data.access_url) return void t.resolve(a);
                var o = a.data.session,
                  r = parseInt(a.data.slice_size),
                  s = a.data.offset || 0;
                (e.session = o),
                  (e.slice_size = r),
                  (e.offset = s),
                  i
                    .call(n, e)
                    .done(function(e) {
                      t.resolve(e);
                    })
                    .fail(function(e) {
                      t.reject(e);
                    });
                for (var p, c = {}, l = 1; l < e.uploadparts.length; l *= 2)
                  (p = e.uploadparts[l - 1]), (c[p.offset + '-' + p.datalen] = p.datasha);
                (p = e.uploadparts[e.uploadparts.length - 1]),
                  (c[p.offset + '-' + p.datalen] = p.datasha),
                  v(e.session, c, n.sha1CacheExpired);
              } else t.reject(a);
          },
          error: function() {
            t.reject();
          },
          processData: !1,
          contentType: !1,
        }),
        t.promise()
      );
    }
    function i(e) {
      var t,
        a = this,
        n = e.file,
        o = $.Deferred(),
        r = {
          opt: e,
          uploadingAjax: [],
          uploadingCount: 0,
          currentIndex: 0,
          chunkCount: Math.ceil(n.size / e.slice_size),
          chunks: [],
          loadedSize: 0,
          uploadError: !1,
          onTaskProgress: function(a) {
            var o = function() {
              (t = 0), e.onprogress && e.onprogress(r.loadedSize / n.size, 1);
            };
            if (a) clearTimeout(t), o();
            else {
              if (t) return;
              t = setTimeout(o, 100);
            }
          },
        };
      !(function() {
        var t,
          a = {};
        if (e.listparts)
          for (t = 0; t < e.listparts.length; t++) a[e.listparts[t].offset] = e.listparts[t];
        for (t = 0; t < r.chunkCount; t++) {
          var o = t * e.slice_size,
            i = Math.min(o + e.slice_size, n.size),
            s = { start: o, end: i, size: i - o };
          a[o] ? ((r.loadedSize += s.size), (s.state = 'online')) : (s.state = 'waiting'),
            r.chunks.push(s);
        }
      })();
      var i = function() {
          r.onTaskProgress(!0), o.resolve();
        },
        s = function(e, t) {
          r.uploadError = 'error';
          for (var a = r.uploadingAjax.length - 1; a >= 0; a--) {
            var n = r.uploadingAjax[a];
            n && n.abort();
          }
          r.onTaskProgress(!0), o.reject(t);
        };
      e.globalTask.cancelRequests = function() {
        for (var e = r.uploadingAjax.length - 1; e >= 0; e--) {
          var t = r.uploadingAjax[e];
          t && t.abort();
        }
      };
      var p = function() {
        if ('cancel' !== e.globalTask.state) {
          for (
            ;
            a._uploadingThreadCount < a.uploadMaxThread && r.currentIndex < r.chunkCount;
            r.currentIndex++
          ) {
            var t = r.chunks[r.currentIndex];
            'waiting' === t.state &&
              (function(e) {
                (e.state = 'uploading'),
                  r.uploadingCount++,
                  a._uploadingThreadCount++,
                  S.call(a, r, e, function(t, n) {
                    r.uploadingCount--,
                      a._uploadingThreadCount--,
                      t
                        ? ((e.state = 'error'), s(0, n))
                        : ((e.state = 'success'),
                          r.uploadingCount <= 0 && r.currentIndex >= r.chunkCount ? i() : p());
                  });
              })(t);
          }
          0 === r.uploadingCount && r.currentIndex === r.chunks.length && i();
        }
      };
      return p(), o.promise();
    }
    function s(e) {
      var t = this,
        a = $.Deferred(),
        n = e.file;
      return (
        t.getAppSign(function(o) {
          e.sign = o;
          var r = t.getCgiUrl(e.path, e.sign),
            i = new FormData();
          i.append('op', 'upload_slice_list'),
            $.ajax({
              type: 'POST',
              dataType: 'JSON',
              url: r,
              data: i,
              success: function(t) {
                if (((t = t || {}), 0 == t.code)) {
                  (e.session = t.data.session), (e.slice_size = t.data.slice_size);
                  var o = t.data.listparts || [];
                  e.listparts = o;
                  var r = o.length;
                  if (r) {
                    var i = e.listparts[r - 1],
                      s = i.offset;
                    if (s + i.datalen > n.size) return a.resolve(), a.promise();
                    e.offset = s;
                  }
                  a.resolve(t);
                } else a.reject(t);
              },
              error: function() {
                a.reject();
              },
              processData: !1,
              contentType: !1,
            });
        }),
        a.promise()
      );
    }
    function p(e) {
      var t = this,
        a = $.Deferred(),
        n = e.file;
      return (
        t.getAppSign(function(o) {
          e.sign = o;
          var r = e.session,
            i = t.getCgiUrl(e.path, e.sign),
            s = new FormData();
          e.sha && s.append('sha', e.sha),
            s.append('op', 'upload_slice_finish'),
            s.append('filesize', n.size),
            s.append('session', r),
            $.ajax({
              type: 'POST',
              dataType: 'JSON',
              url: i,
              data: s,
              success: function(e) {
                (e = e || {}), 0 == e.code ? a.resolve(e) : a.reject(e);
              },
              error: function() {
                a.reject();
              },
              processData: !1,
              contentType: !1,
            });
        }),
        a.promise()
      );
    }
    function c(e) {
      var t;
      FileReader.prototype.readAsBinaryString
        ? (t = FileReader.prototype.readAsBinaryString)
        : FileReader.prototype.readAsArrayBuffer
          ? (t = function(e) {
              var t = '',
                a = this,
                n = new FileReader();
              (n.onload = function(e) {
                for (var o = new Uint8Array(n.result), r = o.byteLength, i = 0; i < r; i++)
                  t += String.fromCharCode(o[i]);
                (a.content = t), a.onload();
              }),
                n.readAsArrayBuffer(e);
            })
          : console.error('FileReader not support readAsBinaryString'),
        t.call(this, e);
    }
    var l = (function() {
        var e = function(e, t) {
          (e = e.split('.')), (t = t.split('.'));
          for (var a = 0; a < t.length; a++)
            if (e[a] !== t[a]) return parseInt(e[a]) > parseInt(t[a]) ? 1 : -1;
          return 0;
        };
        return (function(t) {
          var a = (t.match(/Chrome\/([.\d]+)/) || [])[1],
            n = (t.match(/QBCore\/([.\d]+)/) || [])[1],
            o = (t.match(/QQBrowser\/([.\d]+)/) || [])[1];
          return (
            (a &&
              e(a, '53.0.2785.116') < 0 &&
              n &&
              e(n, '3.53.991.400') < 0 &&
              o &&
              e(o, '9.0.2524.400') <= 0) ||
            !1
          );
        })(navigator.userAgent);
      })(),
      u = function(e, t, a, n) {
        var o;
        if (
          (e.slice
            ? (o = e.slice(t, a))
            : e.mozSlice ? (o = e.mozSlice(t, a)) : e.webkitSlice && (o = e.webkitSlice(t, a)),
          l)
        ) {
          var r = new FileReader();
          (r.onload = function(e) {
            n(new Blob([r.result]));
          }),
            r.readAsArrayBuffer(o);
        } else n(o);
      },
      d = 524288,
      f = 1048576;
    (e.version = '1.2.0'),
      (e.prototype.cosapi_cgi_url =
        ('https:' === location.protocol ? 'https:' : 'http:') +
        '//REGION.file.myqcloud.com/files/v2/'),
      (e.prototype.slice =
        File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice),
      (e.prototype.sliceSize = 3145728),
      (e.prototype.getExpired = function(e) {
        return new Date().getTime() / 1e3 + (e || 60);
      }),
      (e.prototype.getSliceSize = function(e) {
        return e <= d ? d : f;
      }),
      (e.prototype.set = function(e) {
        e &&
          ((this.appid = e.appid),
          (this.bucket = e.bucket),
          (this.region = e.region),
          e.getAppSign && (this.getAppSign = e.getAppSign),
          e.getAppSignOnce && (this.getAppSignOnce = e.getAppSignOnce));
      }),
      (e.prototype.getCgiUrl = function(e, t) {
        var a = this.region,
          n = this.bucket,
          o = this.cosapi_cgi_url;
        return (o = o.replace('REGION', a)) + this.appid + '/' + n + '/' + e + '?sign=' + t;
      }),
      (e.prototype.getAppSign = function(e, t, a) {
        var n = this.getExpired(),
          o = this.sign_url + '?sign_type=appSign&expired=' + n + '&bucketName=' + a;
        $.ajax({ url: o, type: 'GET', success: e, error: t });
      }),
      (e.prototype.getAppSignOnce = function(e, t, a, n) {
        var o =
          this.sign_url +
          '?sign_type=appSign_once&path=' +
          encodeURIComponent(a) +
          '&bucketName=' +
          n;
        $.ajax({ url: o, type: 'GET', success: e, error: t });
      }),
      (e.prototype.updateFolder = function(e, t, a, o, r) {
        (o = n.call(this, o, 'folder')), this.updateBase(e, t, a, o, r);
      }),
      (e.prototype.updateFile = function(e, t, a, o, r) {
        (o = n.call(this, o)), this.updateBase(e, t, a, o, r);
      }),
      (e.prototype.updateBase = function(e, t, a, n, o, r, i) {
        var s = this;
        s.getAppSignOnce(function(a) {
          var p = s.getCgiUrl(n, a),
            c = new FormData();
          c.append('op', 'update'),
            o && c.append('biz_attr', o),
            r && c.append('authority', r),
            i && ((i = JSON.stringify(i)), c.append('customHeaders', i)),
            $.ajax({
              type: 'POST',
              url: p,
              processData: !1,
              contentType: !1,
              data: c,
              success: e,
              error: t,
            });
        });
      }),
      (e.prototype.deleteFolder = function(e, t, a, o) {
        (o = n.call(this, o, 'folder')), this.deleteBase(e, t, a, o);
      }),
      (e.prototype.deleteFile = function(e, t, a, o) {
        (o = n.call(this, o)), this.deleteBase(e, t, a, o);
      }),
      (e.prototype.deleteBase = function(e, t, a, n) {
        if ('/' == n) return void t({ code: 10003, message: '不能删除Bucket' });
        var o = this;
        this.getAppSignOnce(function(a) {
          var r = o.getCgiUrl(n, a),
            i = new FormData();
          i.append('op', 'delete'),
            $.ajax({
              type: 'POST',
              url: r,
              data: i,
              processData: !1,
              contentType: !1,
              success: e,
              error: t,
            });
        });
      }),
      (e.prototype.getFolderStat = function(e, t, a, o) {
        (o = n(o, 'folder')), this.statBase(e, t, a, o);
      }),
      (e.prototype.getFileStat = function(e, t, a, o) {
        (o = n(o)), this.statBase(e, t, a, o);
      }),
      (e.prototype.statBase = function(e, t, a, n) {
        var o = this;
        this.getAppSign.call(o, function(a) {
          var r = o.getCgiUrl(n, a),
            i = { op: 'stat' };
          $.ajax({ url: r, type: 'GET', data: i, success: e, error: t });
        });
      }),
      (e.prototype.createFolder = function(e, t, a, o, r) {
        var i = this;
        this.getAppSign(function(a) {
          o = n(o, 'folder');
          var s = i.getCgiUrl(o, a),
            p = new FormData();
          p.append('op', 'create'),
            p.append('biz_attr', r || ''),
            $.ajax({
              type: 'POST',
              url: s,
              data: p,
              processData: !1,
              contentType: !1,
              success: e,
              error: t,
            });
        });
      }),
      (e.prototype.copyFile = function(e, t, a, o, r, i) {
        var s = this;
        this.getAppSign(function(a) {
          o = n(o);
          var p = s.getCgiUrl(o, a),
            c = new FormData();
          c.append('op', 'copy'),
            c.append('dest_fileid', r),
            c.append('to_over_write', i),
            $.ajax({
              type: 'POST',
              url: p,
              data: c,
              processData: !1,
              contentType: !1,
              success: e,
              error: t,
            });
        });
      }),
      (e.prototype.moveFile = function(e, t, a, o, r, i) {
        var s = this;
        this.getAppSign(function(a) {
          o = n(o);
          var p = s.getCgiUrl(o, a),
            c = new FormData();
          c.append('op', 'move'),
            c.append('dest_fileid', r),
            c.append('to_over_write', i),
            $.ajax({
              type: 'POST',
              url: p,
              data: c,
              processData: !1,
              contentType: !1,
              success: e,
              error: t,
            });
        });
      }),
      (e.prototype.getFolderList = function(e, t, a, o, r, i, s, p, c) {
        var l = this;
        (o = n(o, 'folder')), l.listBase(e, t, a, o, r, i, s, p);
      }),
      (e.prototype.listBase = function(e, t, a, n, o, r, i, s, p) {
        var c = this;
        c.getAppSign(function(a) {
          var p = c.getCgiUrl(n, a);
          (o = o || 20), (i = i || 0), (s = s || 'eListBoth');
          var l = { op: 'list', num: o, context: r, order: i, pattern: s };
          $.ajax({ url: p, type: 'GET', data: l, success: e, error: t });
        });
      }),
      (e.prototype.uploadFile = function(e, t, o, r, i, s, p, c) {
        var l = this;
        if (s.size > 20971520)
          return void l.sliceUploadFile(e, t, o, r, i, s, p, void 0, void 0, c);
        if ('/' === i.substr(i.length - 1))
          return void t({ code: -1, message: 'path not allow end with "/"' });
        i = n(i);
        var u,
          d = a(),
          f = {
            id: d,
            state: 'uploading',
            cancel: function() {
              u && u.abort();
            },
          };
        (this.tasks[d] = f),
          c && 'function' == typeof c && c(d),
          l.getAppSign(function(t) {
            var a = l.getCgiUrl(i, t),
              n = new FormData();
            (p = 0 === p ? 0 : 1),
              n.append('op', 'upload'),
              n.append('fileContent', s),
              n.append('insertOnly', p),
              (u = $.ajax({
                type: 'POST',
                url: a,
                data: n,
                processData: !1,
                contentType: !1,
                xhr: function() {
                  var e = $.ajaxSettings.xhr();
                  return (
                    (e.upload.onprogress = function(e) {
                      var t = e.loaded / e.total;
                      'function' == typeof o && o(t, 0);
                    }),
                    e
                  );
                },
                success: function() {
                  'cancel' !== f.state && e.apply(this, arguments);
                },
                error: function() {
                  'cancel' !== f.state && e.apply(this, arguments);
                },
              }));
          });
      }),
      (e.prototype.sliceUploadFile = function(e, t, c, l, u, d, f, g, h, v) {
        if ('/' === u.substr(u.length - 1))
          return void t({ code: -1, message: 'path not allow end with "/"' });
        var y = a(),
          S = {
            id: y,
            state: 'uploading',
            cancelRequests: null,
            cancel: function() {
              S.cancelRequests && S.cancelRequests();
            },
          };
        (this.tasks[y] = S), v && 'function' == typeof v && v(y);
        var m = this;
        (u = n(u)),
          m.getAppSign(function(a) {
            var n = {};
            (n.globalTask = S),
              'cancel' !== n.globalTask.state &&
                ((g = m.getSliceSize(g)),
                (n.bucket = l),
                (n.path = u),
                (n.file = d),
                (n.insertOnly = 0 === f ? 0 : 1),
                (n.sliceSize = g || 1048576),
                (n.appid = m.appid),
                (n.sign = a),
                (n.biz_attr = h || ''),
                (n.onprogress = function(e, t) {
                  void 0 === t && (t = 1), c(e, t);
                }),
                s.call(m, n).always(function(a) {
                  if ('cancel' !== n.globalTask.state) {
                    a = a || {};
                    var s = a.data;
                    if (s && s.session) {
                      if (s.filesize !== n.file.size)
                        return t({ code: -1, message: 'filesize not match' });
                      var c = n.listparts || [];
                      if (((n.session = s.session), (n.listparts = c), c && c.length)) {
                        var l = c.length;
                        n.offset = c[l - 1].offset;
                      }
                      s.sha && (n.onlineSha = s.sha.split('_')[0]),
                        o
                          .call(m, n)
                          .done(function(a) {
                            if ('cancel' !== n.globalTask.state) {
                              n.uploadparts = a;
                              var o = a.length;
                              (n.sha = a[o - 1].datasha),
                                i
                                  .call(m, n)
                                  .done(function() {
                                    p
                                      .call(m, n)
                                      .done(function(t) {
                                        e(t);
                                      })
                                      .fail(function(e) {
                                        t({
                                          code: -1,
                                          message: (e && e.message) || 'slice finish error',
                                        });
                                      });
                                  })
                                  .fail(function(e) {
                                    t({
                                      code: -1,
                                      message: (e && e.message) || 'slice upload file error',
                                    });
                                  });
                            }
                          })
                          .fail(function(e) {
                            t({ code: -1, message: e || 'get slice sha1 error' });
                          });
                    } else
                      s && s.access_url && 0 !== f
                        ? ('function' == typeof n.onprogress && n.onprogress(1, 0), e(a))
                        : o
                            .call(m, n)
                            .done(function(a) {
                              if ('cancel' !== n.globalTask.state) {
                                n.uploadparts = a;
                                var o = a.length;
                                (n.sha = a[o - 1].datasha),
                                  r
                                    .call(m, n)
                                    .done(function(a) {
                                      if ('cancel' !== n.globalTask.state) {
                                        a = a || {};
                                        var o = a.data || {};
                                        o && o.access_url
                                          ? ('function' == typeof n.onprogress &&
                                              n.onprogress(1, 0),
                                            e(a))
                                          : p
                                              .call(m, n)
                                              .done(function(t) {
                                                e(t);
                                              })
                                              .fail(function(e) {
                                                t({
                                                  code: -1,
                                                  message: e.message || 'slice finish error',
                                                });
                                              });
                                      }
                                    })
                                    .fail(function(e) {
                                      (e = e || {}),
                                        t({
                                          code: e.code || -1,
                                          message: e.message || 'upload slice file error',
                                        });
                                    });
                              }
                            })
                            .fail(function() {
                              t({ code: -1, message: 'get slice sha1 error' });
                            });
                  }
                }));
          });
      }),
      (e.prototype.cancelTask = function(e) {
        var t = this.tasks[e];
        t && ((t.state = 'cancel'), t.cancel());
      });
    var h = '_cos_sdk_sha1_',
      v = function(e, t, a) {
        try {
          var n = JSON.parse(localStorage.getItem(h)) || {};
        } catch (o) {}
        var r = Date.now();
        (t.update_time = r), (n[e] = t);
        for (var i = localStorage.length - 1; i >= 0; i--) {
          var s = localStorage.key(i);
          r - localStorage.getItem(s).update_time > a && localStorage.removeItem(s);
        }
        localStorage.setItem(h, JSON.stringify(n));
      },
      y = function(e) {
        try {
          var t = JSON.parse(localStorage.getItem(h)) || {};
        } catch (a) {}
        return t[e];
      },
      S = function(e, t, a) {
        var n = this,
          o = new FormData(),
          r = e.opt,
          i = r.file,
          s = r.slice_size,
          p = r.session,
          c = i.size,
          l = t.start,
          d = Math.min(l + s, c),
          f = n.slice.call(i, l, d),
          g = f.size,
          h = function(t) {
            for (var a = e.uploadingAjax.length - 1; a >= 0; a--)
              t === e.uploadingAjax[a] && e.uploadingAjax.splice(a, 1);
          },
          v = 0,
          y = function(t, a) {
            (e.loadedSize += t - v), (v = t), e.onTaskProgress && e.onTaskProgress(a);
          },
          S = function(t) {
            o.append('sliceSize', s),
              o.append('op', 'upload_slice_data'),
              o.append('session', p),
              o.append('offset', l),
              r.sha && o.append('sha', r.sha),
              o.append('fileContent', f),
              n.getAppSign(function(a) {
                r.sign = a;
                var i = n.getCgiUrl(r.path, r.sign),
                  s = $.ajax({
                    type: 'POST',
                    dataType: 'JSON',
                    url: i,
                    data: o,
                    xhr: function() {
                      var t = $.ajaxSettings.xhr();
                      return (
                        (t.upload.onprogress = function(t) {
                          y(t.loaded), e.onTaskProgress && e.onTaskProgress();
                        }),
                        t
                      );
                    },
                    success: function(e) {
                      y(g, !0), (e = e || {}), 0 === e.code ? t(null, e) : t('error', e);
                    },
                    error: function() {
                      y(0, !0), t('error');
                    },
                    complete: function() {
                      h(s);
                    },
                    processData: !1,
                    contentType: !1,
                  });
                e.uploadingAjax.push(s);
              });
          },
          m = function(t) {
            'cancel' !== r.globalTask.state &&
              S(function(o, i) {
                o
                  ? t >= n.uploadMaxRetryTimes || e.uploadError || 'cancel' === r.globalTask.state
                    ? a(o, i)
                    : m(t + 1)
                  : a(o, i);
              });
          };
        u(i, l, d, function(e) {
          (f = e), (g = f.size), m(1);
        });
      };
    return e;
  });
})();
var CryptoJS =
  CryptoJS ||
  (function(g, l) {
    var e = {},
      d = (e.lib = {}),
      m = function() {},
      k = (d.Base = {
        extend: function(a) {
          m.prototype = this;
          var c = new m();
          return (
            a && c.mixIn(a),
            c.hasOwnProperty('init') ||
              (c.init = function() {
                c.$super.init.apply(this, arguments);
              }),
            (c.init.prototype = c),
            (c.$super = this),
            c
          );
        },
        create: function() {
          var a = this.extend();
          return a.init.apply(a, arguments), a;
        },
        init: function() {},
        mixIn: function(a) {
          for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
          a.hasOwnProperty('toString') && (this.toString = a.toString);
        },
        clone: function() {
          return this.init.prototype.extend(this);
        },
      }),
      p = (d.WordArray = k.extend({
        init: function(a, c) {
          (a = this.words = a || []), (this.sigBytes = void 0 != c ? c : 4 * a.length);
        },
        toString: function(a) {
          return (a || n).stringify(this);
        },
        concat: function(a) {
          var c = this.words,
            q = a.words,
            f = this.sigBytes;
          if (((a = a.sigBytes), this.clamp(), f % 4))
            for (var b = 0; b < a; b++)
              c[(f + b) >>> 2] |=
                ((q[b >>> 2] >>> (24 - (b % 4) * 8)) & 255) << (24 - ((f + b) % 4) * 8);
          else if (65535 < q.length) for (b = 0; b < a; b += 4) c[(f + b) >>> 2] = q[b >>> 2];
          else c.push.apply(c, q);
          return (this.sigBytes += a), this;
        },
        clamp: function() {
          var a = this.words,
            c = this.sigBytes;
          (a[c >>> 2] &= 4294967295 << (32 - (c % 4) * 8)), (a.length = g.ceil(c / 4));
        },
        clone: function() {
          var a = k.clone.call(this);
          return (a.words = this.words.slice(0)), a;
        },
        random: function(a) {
          for (var c = [], b = 0; b < a; b += 4) c.push((4294967296 * g.random()) | 0);
          return new p.init(c, a);
        },
      })),
      b = (e.enc = {}),
      n = (b.Hex = {
        stringify: function(a) {
          var c = a.words;
          a = a.sigBytes;
          for (var b = [], f = 0; f < a; f++) {
            var d = (c[f >>> 2] >>> (24 - (f % 4) * 8)) & 255;
            b.push((d >>> 4).toString(16)), b.push((15 & d).toString(16));
          }
          return b.join('');
        },
        parse: function(a) {
          for (var c = a.length, b = [], f = 0; f < c; f += 2)
            b[f >>> 3] |= parseInt(a.substr(f, 2), 16) << (24 - (f % 8) * 4);
          return new p.init(b, c / 2);
        },
      }),
      j = (b.Latin1 = {
        stringify: function(a) {
          var c = a.words;
          a = a.sigBytes;
          for (var b = [], f = 0; f < a; f++)
            b.push(String.fromCharCode((c[f >>> 2] >>> (24 - (f % 4) * 8)) & 255));
          return b.join('');
        },
        parse: function(a) {
          for (var c = a.length, b = [], f = 0; f < c; f++)
            b[f >>> 2] |= (255 & a.charCodeAt(f)) << (24 - (f % 4) * 8);
          return new p.init(b, c);
        },
      }),
      h = (b.Utf8 = {
        stringify: function(a) {
          try {
            return decodeURIComponent(escape(j.stringify(a)));
          } catch (c) {
            throw Error('Malformed UTF-8 data');
          }
        },
        parse: function(a) {
          return j.parse(unescape(encodeURIComponent(a)));
        },
      }),
      r = (d.BufferedBlockAlgorithm = k.extend({
        reset: function() {
          (this._data = new p.init()), (this._nDataBytes = 0);
        },
        _append: function(a) {
          'string' == typeof a && (a = h.parse(a)),
            this._data.concat(a),
            (this._nDataBytes += a.sigBytes);
        },
        _process: function(a) {
          var c = this._data,
            b = c.words,
            f = c.sigBytes,
            d = this.blockSize,
            e = f / (4 * d),
            e = a ? g.ceil(e) : g.max((0 | e) - this._minBufferSize, 0);
          if (((a = e * d), (f = g.min(4 * a, f)), a)) {
            for (var k = 0; k < a; k += d) this._doProcessBlock(b, k);
            (k = b.splice(0, a)), (c.sigBytes -= f);
          }
          return new p.init(k, f);
        },
        clone: function() {
          var a = k.clone.call(this);
          return (a._data = this._data.clone()), a;
        },
        _minBufferSize: 0,
      }));
    d.Hasher = r.extend({
      cfg: k.extend(),
      init: function(a) {
        (this.cfg = this.cfg.extend(a)), this.reset();
      },
      reset: function() {
        r.reset.call(this), this._doReset();
      },
      update: function(a) {
        return this._append(a), this._process(), this;
      },
      finalize: function(a) {
        return a && this._append(a), this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function(a) {
        return function(b, d) {
          return new a.init(d).finalize(b);
        };
      },
      _createHmacHelper: function(a) {
        return function(b, d) {
          return new s.HMAC.init(a, d).finalize(b);
        };
      },
    });
    var s = (e.algo = {});
    return e;
  })(Math);
!(function() {
  var g = CryptoJS,
    l = g.lib,
    e = l.WordArray,
    d = l.Hasher,
    m = [],
    l = (g.algo.SHA1 = d.extend({
      _doReset: function() {
        this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function(d, e) {
        for (
          var b = this._hash.words, n = b[0], j = b[1], h = b[2], g = b[3], l = b[4], a = 0;
          80 > a;
          a++
        ) {
          if (16 > a) m[a] = 0 | d[e + a];
          else {
            var c = m[a - 3] ^ m[a - 8] ^ m[a - 14] ^ m[a - 16];
            m[a] = (c << 1) | (c >>> 31);
          }
          (c = ((n << 5) | (n >>> 27)) + l + m[a]),
            (c =
              20 > a
                ? c + (1518500249 + ((j & h) | (~j & g)))
                : 40 > a
                  ? c + (1859775393 + (j ^ h ^ g))
                  : 60 > a
                    ? c + (((j & h) | (j & g) | (h & g)) - 1894007588)
                    : c + ((j ^ h ^ g) - 899497514)),
            (l = g),
            (g = h),
            (h = (j << 30) | (j >>> 2)),
            (j = n),
            (n = c);
        }
        (b[0] = (b[0] + n) | 0),
          (b[1] = (b[1] + j) | 0),
          (b[2] = (b[2] + h) | 0),
          (b[3] = (b[3] + g) | 0),
          (b[4] = (b[4] + l) | 0);
      },
      _doFinalize: function() {
        var d = this._data,
          e = d.words,
          b = 8 * this._nDataBytes,
          g = 8 * d.sigBytes;
        return (
          (e[g >>> 5] |= 128 << (24 - g % 32)),
          (e[14 + (((g + 64) >>> 9) << 4)] = Math.floor(b / 4294967296)),
          (e[15 + (((g + 64) >>> 9) << 4)] = b),
          (d.sigBytes = 4 * e.length),
          this._process(),
          this._hash
        );
      },
      clone: function() {
        var e = d.clone.call(this);
        return (e._hash = this._hash.clone()), e;
      },
    }));
  (g.SHA1 = d._createHelper(l)), (g.HmacSHA1 = d._createHmacHelper(l));
})(),
  (function() {
    var g = CryptoJS,
      l = g.enc.Utf8;
    g.algo.HMAC = g.lib.Base.extend({
      init: function(e, d) {
        (e = this._hasher = new e.init()), 'string' == typeof d && (d = l.parse(d));
        var g = e.blockSize,
          k = 4 * g;
        d.sigBytes > k && (d = e.finalize(d)), d.clamp();
        for (
          var p = (this._oKey = d.clone()),
            b = (this._iKey = d.clone()),
            n = p.words,
            j = b.words,
            h = 0;
          h < g;
          h++
        )
          (n[h] ^= 1549556828), (j[h] ^= 909522486);
        (p.sigBytes = b.sigBytes = k), this.reset();
      },
      reset: function() {
        var e = this._hasher;
        e.reset(), e.update(this._iKey);
      },
      update: function(e) {
        return this._hasher.update(e), this;
      },
      finalize: function(e) {
        var d = this._hasher;
        return (e = d.finalize(e)), d.reset(), d.finalize(this._oKey.clone().concat(e));
      },
    });
  })(),
  (window.CryptoJS = CryptoJS),
  (function() {
    var C = CryptoJS,
      C_lib = C.lib,
      WordArray = C_lib.WordArray,
      C_enc = C.enc;
    C_enc.Base64 = {
      stringify: function(wordArray) {
        var words = wordArray.words,
          sigBytes = wordArray.sigBytes,
          map = this._map;
        wordArray.clamp();
        for (var base64Chars = [], i = 0; i < sigBytes; i += 3)
          for (
            var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 255,
              byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255,
              byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255,
              triplet = (byte1 << 16) | (byte2 << 8) | byte3,
              j = 0;
            j < 4 && i + 0.75 * j < sigBytes;
            j++
          )
            base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 63));
        var paddingChar = map.charAt(64);
        if (paddingChar) for (; base64Chars.length % 4; ) base64Chars.push(paddingChar);
        return base64Chars.join('');
      },
      parse: function(base64Str) {
        var base64StrLength = base64Str.length,
          map = this._map,
          paddingChar = map.charAt(64);
        if (paddingChar) {
          var paddingIndex = base64Str.indexOf(paddingChar);
          -1 != paddingIndex && (base64StrLength = paddingIndex);
        }
        for (var words = [], nBytes = 0, i = 0; i < base64StrLength; i++)
          if (i % 4) {
            var bits1 = map.indexOf(base64Str.charAt(i - 1)) << ((i % 4) * 2),
              bits2 = map.indexOf(base64Str.charAt(i)) >>> (6 - (i % 4) * 2);
            (words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8)), nBytes++;
          }
        return WordArray.create(words, nBytes);
      },
      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    };
  })(),
  'object' == typeof module ? (module.exports = CryptoJS) : (window.CryptoJS = CryptoJS),
  (function() {
    function getType(a) {
      return null === a
        ? 'null'
        : void 0 === a
          ? 'undefined'
          : Object.prototype.toString
              .call(a)
              .slice(8, -1)
              .toLowerCase();
    }
    function setCookie(name, value, hour, domain, path) {
      if (!(getUgcCookieNum() > 5)) {
        if (hour) {
          var expire = new Date();
          expire.setTime(expire.getTime() + 36e5 * hour);
        }
        var cname = 'webugc_' + CryptoJS.SHA1(name).toString(CryptoJS.enc.Hex),
          expiresStr = hour ? 'expires=' + expire.toGMTString() + '; ' : '',
          pathStr = 'path=' + (path || '/') + '; ',
          domainStr = 'domain=' + (domain || document.domain) + ';';
        document.cookie = cname + '=' + value + '; ' + expiresStr + pathStr + domainStr;
      }
    }
    function getCookie(name) {
      var cname = 'webugc_' + CryptoJS.SHA1(name).toString(CryptoJS.enc.Hex),
        r = new RegExp('(?:^|;+|\\s+)' + cname + '=([^;]*)'),
        m = document.cookie.match(r);
      return m ? m[1] : '';
    }
    function delCookie(name, domain, path) {
      var cname = 'webugc_' + CryptoJS.SHA1(name).toString(CryptoJS.enc.Hex),
        pathStr = 'path=' + (path || '/') + '; ',
        domainStr = 'domain=' + (domain || document.domain) + ';';
      document.cookie = cname + '=; expires=Mon, 26 Jul 1997 05:00:00 GMT; ' + pathStr + domainStr;
    }
    function getUgcCookieNum() {
      var r = new RegExp('(?:^|;+|\\s+)webugc_[0-9a-fA-F]{40}=', 'g'),
        m = document.cookie.match(r);
      return m ? m.length : 0;
    }
    function taskCallback(opts) {
      return function(taskId) {
        opts.taskId = taskId;
      };
    }
    function cancelUpload(opts) {
      return 'object' != getType(opts)
        ? '参数必须为对象类型'
        : opts.cos && opts.taskId
          ? 'string' != getType(opts.taskId)
            ? 'taskId格式错误'
            : opts.cos && 'function' != getType(opts.cos.cancelTask)
              ? 'cos格式错误'
              : void opts.cos.cancelTask(opts.taskId)
          : 'cos/taskId不能为空';
    }
    (window.qcVideo = window.qcVideo || {}), (qcVideo.ugcUploader = qcVideo.ugcUploader || {});
    var videoTypes = [
        'WMV',
        'WM',
        'ASF',
        'ASX',
        'RM',
        'RMVB',
        'RA',
        'RAM',
        'MPG',
        'MPEG',
        'MPE',
        'VOB',
        'DAT',
        'MOV',
        '3GP',
        'MP4',
        'MP4V',
        'M4V',
        'MKV',
        'AVI',
        'FLV',
        'F4V',
      ],
      audioTypes = ['MP3', 'WMA', 'WAV', 'ASF', 'AU', 'SND', 'RAW', 'AFC', 'ACC'],
      imageTypes = ['JPG', 'JPEG', 'JPE', 'PSD', 'SVG', 'SVGZ', 'TIFF', 'TIF', 'BMP', 'GIF', 'PNG'],
      AllowVideoTypes = videoTypes,
      successCallBack = function(opts, type, applyResult, signature) {
        return function(result) {
          opts.success && opts.success({ type: type }),
            opts.videoFile && delCookie(opts.videoFile.name),
            applyResult && signature && finishUpload(opts, applyResult, signature);
        };
      },
      errorCallBack = function(opts, type, errmsg) {
        return function(result) {
          (result = result || {}),
            opts.error &&
              opts.error({
                type: type,
                msg: result.message || errmsg || '',
                responseText: result.responseText || '',
              });
        };
      },
      progressCallBack = function(opts, type) {
        return function(curr, shacurr) {
          var name = '';
          (name = 'video' == type ? opts.videoFile.name : opts.coverFile.name),
            opts.progress &&
              opts.progress({
                type: type,
                name: name,
                curr: curr,
                shacurr: shacurr || 1,
                cos: opts.cos,
                taskId: opts.taskId || '',
              });
        };
      },
      getFileMessage = function(file, newname) {
        var fileMsg = {};
        return (
          (fileMsg.type = file.name.slice(file.name.match(/\.[^\.]+$/).index + 1)),
          (fileMsg.name = newname || file.name.slice(0, file.name.match(/\.[^\.]+$/).index)),
          (fileMsg.size = file.size),
          (fileMsg.error = ''),
          (void 0 == fileMsg.name || '' == fileMsg.name || /[:*?,<>\'\"\\]/g.test(fileMsg.name)) &&
            (fileMsg.error = '文件名不得包含 / : * ? "  < > 等字符'),
          fileMsg
        );
      },
      isFunction = function(para) {
        return !para || 'function' == getType(para);
      },
      startUpload = function(opts) {
        if ('object' != getType(opts)) return '参数必须为对象类型';
        if (!opts.videoFile && !opts.fileId) return '需要videoFile或者fileId字段';
        if (!opts.getSignature) return '需要getSignature字段';
        if (opts.fileId) {
          if ('string' != getType(opts.fileId)) return 'fileId格式错误';
          if (!opts.coverFile) return '需要coverFile字段';
        }
        if (
          !(
            isFunction(opts.getSignature) &&
            isFunction(opts.success) &&
            isFunction(opts.error) &&
            isFunction(opts.progress) &&
            isFunction(opts.finish)
          )
        )
          return 'getSignature必须为函数，如果有success、error、progress、finish，也必须为函数';
        if (opts.videoFile) {
          if (
            (opts.allowAudio && (AllowVideoTypes = videoTypes.concat(audioTypes)),
            'file' != getType(opts.videoFile))
          )
            return 'videoFile必须为视频文件';
          if (-1 == AllowVideoTypes.indexOf(getFileMessage(opts.videoFile).type.toUpperCase()))
            return 'videoFile必须为视频文件';
        }
        if (opts.coverFile) {
          if ('file' != getType(opts.coverFile)) return 'coverFile必须为图片文件';
          if (-1 == imageTypes.indexOf(getFileMessage(opts.coverFile).type.toUpperCase()))
            return 'coverFile必须为图片文件';
        }
        'undefined' == getType(opts.retryStartNum) && (opts.retryStartNum = 3);
        var timeouts;
        timeouts = 3 == opts.retryStartNum ? 3e3 : 2 == opts.retryStartNum ? 5e3 : 1e4;
        var fileMessage = {};
        return opts.videoFile &&
          ((fileMessage.videoMsg = getFileMessage(opts.videoFile, opts.videoName)),
          fileMessage.videoMsg.error)
          ? fileMessage.videoMsg.error
          : opts.coverFile &&
            ((fileMessage.coverMsg = getFileMessage(opts.coverFile, opts.coverName)),
            fileMessage.coverMsg.error)
            ? fileMessage.coverMsg.error
            : void opts.getSignature(function(signature) {
                var sendParam = {};
                opts.videoFile && getCookie(opts.videoFile.name)
                  ? (sendParam = {
                      signature: signature,
                      vodSessionKey: getCookie(opts.videoFile.name),
                    })
                  : opts.videoFile
                    ? (sendParam = {
                        signature: signature,
                        videoName: fileMessage.videoMsg.name,
                        videoType: fileMessage.videoMsg.type,
                        videoSize: fileMessage.videoMsg.size,
                        coverName: fileMessage.coverMsg && fileMessage.coverMsg.name,
                        coverType: fileMessage.coverMsg && fileMessage.coverMsg.type,
                        coverSize: fileMessage.coverMsg && fileMessage.coverMsg.size,
                      })
                    : opts.fileId &&
                      (sendParam = {
                        signature: signature,
                        fileId: opts.fileId,
                        coverName: fileMessage.coverMsg.name,
                        coverType: fileMessage.coverMsg.type,
                        coverSize: fileMessage.coverMsg.size,
                      }),
                  $.ajax({
                    url: 'https://vod2.qcloud.com/v3/index.php?Action=ApplyUploadUGC',
                    data: JSON.stringify(sendParam),
                    type: 'POST',
                    dataType: 'json',
                    timeout: timeouts,
                    success: function(result, status, xhr) {
                      0 == result.code
                        ? (opts.videoFile &&
                            setCookie(opts.videoFile.name, result.data.vodSessionKey, 24),
                          uploadFile(opts, result, signature))
                        : 10005 == result.code
                          ? (opts.videoFile && delCookie(opts.videoFile.name), startUpload(opts))
                          : result.code >= 2e4 && result.code <= 29999 && opts.retryStartNum > 0
                            ? (opts.retryStartNum--, startUpload(opts))
                            : errorCallBack(opts, '', result.message)();
                    },
                    error: function(xhr, status, error) {
                      opts.retryStartNum > 0
                        ? (opts.retryStartNum--, startUpload(opts))
                        : errorCallBack(opts, '', error)();
                    },
                  });
              });
      },
      uploadFile = function(opts, result, signature) {
        if (result.data.video) {
          var cos1 = new CosCloud({
            appid: result.data.storageAppId,
            bucket: result.data.storageBucket,
            region: result.data.storageRegion,
            getAppSign: function(callback) {
              callback(result.data.video.storageSignature);
            },
            getAppSignOnce: function(callback) {
              setTimeout(function() {
                callback(result.data.video.storageSignature);
              }, 1e3);
            },
          });
          (opts.cos = cos1),
            cos1.uploadFile(
              successCallBack(opts, 'video', result, signature),
              errorCallBack(opts, 'video'),
              progressCallBack(opts, 'video'),
              result.data.storageBucket,
              result.data.video.storagePath,
              opts.videoFile,
              1,
              taskCallback(opts)
            );
        } else console.log('您没有上传视频视频');
        if (result.data.cover) {
          var cos2 = new CosCloud({
            appid: result.data.storageAppId,
            bucket: result.data.storageBucket,
            region: result.data.storageRegion,
            getAppSign: function(callback) {
              callback(result.data.cover.storageSignature);
            },
            getAppSignOnce: function(callback) {
              setTimeout(function() {
                callback(result.data.cover.storageSignature);
              }, 1e3);
            },
          });
          result.data.video
            ? cos2.uploadFile(
                successCallBack(opts, 'cover'),
                errorCallBack(opts, 'cover'),
                progressCallBack(opts, 'cover'),
                result.data.storageBucket,
                result.data.cover.storagePath,
                opts.coverFile,
                1
              )
            : cos2.uploadFile(
                successCallBack(opts, 'cover', result, signature),
                errorCallBack(opts, 'cover'),
                progressCallBack(opts, 'cover'),
                result.data.storageBucket,
                result.data.cover.storagePath,
                opts.coverFile,
                1
              );
        } else console.log('您没有上传视频封面');
      },
      finishUpload = function(opts, result, signature) {
        'undefined' == getType(opts.retryFinishNum) && (opts.retryFinishNum = 3);
        var timeouts;
        (timeouts = 3 == opts.retryFinishNum ? 3e3 : 2 == opts.retryFinishNum ? 5e3 : 1e4),
          $.ajax({
            url: 'https://vod2.qcloud.com/v3/index.php?Action=CommitUploadUGC',
            data: JSON.stringify({
              signature: signature,
              vodSessionKey: result.data.vodSessionKey,
            }),
            type: 'POST',
            dataType: 'json',
            timeout: timeouts,
            success: function(result, status, xhr) {
              0 == result.code
                ? opts.finish &&
                  opts.finish({
                    fileId: result.data.fileId,
                    videoName: opts.videoFile && opts.videoFile.name,
                    videoUrl: result.data.video && result.data.video.url,
                    coverName: opts.coverFile && opts.coverFile.name,
                    coverUrl: result.data.cover && result.data.cover.url,
                  })
                : result.code >= 2e4 && result.code <= 29999 && opts.retryFinishNum > 0
                  ? (opts.retryFinishNum--, finishUpload(opts, result, signature))
                  : errorCallBack(opts, '', result.message)();
            },
            error: function(xhr, status, error) {
              opts.retryFinishNum > 0
                ? (opts.retryFinishNum--, finishUpload(opts, result, signature))
                : errorCallBack(opts, '', error)();
            },
          });
      };
    (qcVideo.ugcUploader.start = startUpload), (qcVideo.ugcUploader.cancel = cancelUpload);
  })();
