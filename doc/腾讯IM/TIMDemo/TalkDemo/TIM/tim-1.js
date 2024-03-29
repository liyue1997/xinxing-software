!
function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).TIM = t()
}(this, function() {
	var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

	function t(e, t) {
		return e(t = {
			exports: {}
		}, t.exports), t.exports
	}
	var n, r, o, i = "object",
		a = function(e) {
			return e && e.Math == Math && e
		},
		s = a(typeof globalThis == i && globalThis) || a(typeof window == i && window) || a(typeof self == i && self) || a(typeof e == i && e) || Function("return this")(),
		u = function(e) {
			try {
				return !!e()
			} catch (t) {
				return 1
			}
		},
		c = !u(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		}),
		l = {}.propertyIsEnumerable,
		p = Object.getOwnPropertyDescriptor,
		f = {
			f: p && !l.call({
				1: 2
			}, 1) ?
			function(e) {
				var t = p(this, e);
				return !!t && t.enumerable
			} : l
		},
		h = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		},
		g = {}.toString,
		d = function(e) {
			return g.call(e).slice(8, -1)
		},
		m = "".split,
		_ = u(function() {
			return !Object("z").propertyIsEnumerable(0)
		}) ?
	function(e) {
		return "String" == d(e) ? m.call(e, "") : Object(e)
	} : Object, v = function(e) {
		if (null == e) throw TypeError("Can't call method on " + e);
		return e
	}, E = function(e) {
		return _(v(e))
	}, y = function(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e
	}, S = function(e, t) {
		if (!y(e)) return e;
		var n, r;
		if (t && "function" == typeof(n = e.toString) && !y(r = n.call(e))) return r;
		if ("function" == typeof(n = e.valueOf) && !y(r = n.call(e))) return r;
		if (!t && "function" == typeof(n = e.toString) && !y(r = n.call(e))) return r;
		throw TypeError("Can't convert object to primitive value")
	}, I = {}.hasOwnProperty, T = function(e, t) {
		return I.call(e, t)
	}, C = s.document, M = y(C) && y(C.createElement), A = function(e) {
		return M ? C.createElement(e) : {}
	}, D = !c && !u(function() {
		return 7 != Object.defineProperty(A("div"), "a", {
			get: function() {
				return 7
			}
		}).a
	}), O = Object.getOwnPropertyDescriptor, N = {
		f: c ? O : function(e, t) {
			if (e = E(e), t = S(t, 1), D) try {
				return O(e, t)
			} catch (n) {}
			if (T(e, t)) return h(!f.f.call(e, t), e[t])
		}
	}, L = function(e) {
		if (!y(e)) throw TypeError(String(e) + " is not an object");
		return e
	}, R = Object.defineProperty, P = {
		f: c ? R : function(e, t, n) {
			if (L(e), t = S(t, 1), L(n), D) try {
				return R(e, t, n)
			} catch (r) {}
			if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
			return "value" in n && (e[t] = n.value), e
		}
	}, k = c ?
	function(e, t, n) {
		return P.f(e, t, h(1, n))
	} : function(e, t, n) {
		return e[t] = n, e
	}, G = function(e, t) {
		try {
			k(s, e, t)
		} catch (n) {
			s[e] = t
		}
		return t
	}, b = t(function(e) {
		var t = s["__core-js_shared__"] || G("__core-js_shared__", {});
		(e.exports = function(e, n) {
			return t[e] || (t[e] = void 0 !== n ? n : {})
		})("versions", []).push({
			version: "3.2.1",
			mode: "global",
			copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
		})
	}), w = b("native-function-to-string", Function.toString), U = s.WeakMap, F = "function" == typeof U && /native code/.test(w.call(U)), x = 0, q = Math.random(), j = function(e) {
		return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++x + q).toString(36)
	}, B = b("keys"), H = function(e) {
		return B[e] || (B[e] = j(e))
	}, K = {}, Y = s.WeakMap;
	if (F) {
		var V = new Y,
			z = V.get,
			W = V.has,
			X = V.set;
		n = function(e, t) {
			return X.call(V, e, t), t
		}, r = function(e) {
			return z.call(V, e) || {}
		}, o = function(e) {
			return W.call(V, e)
		}
	} else {
		var J = H("state");
		K[J] = 1, n = function(e, t) {
			return k(e, J, t), t
		}, r = function(e) {
			return T(e, J) ? e[J] : {}
		}, o = function(e) {
			return T(e, J)
		}
	}
	var Q = {
		set: n,
		get: r,
		has: o,
		enforce: function(e) {
			return o(e) ? r(e) : n(e, {})
		},
		getterFor: function(e) {
			return function(t) {
				var n;
				if (!y(t) || (n = r(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
				return n
			}
		}
	},
		$ = t(function(e) {
			var t = Q.get,
				n = Q.enforce,
				r = String(w).split("toString");
			b("inspectSource", function(e) {
				return w.call(e)
			}), (e.exports = function(e, t, o, i) {
				var a = i ? !! i.unsafe : 0,
					u = i ? !! i.enumerable : 0,
					c = i ? !! i.noTargetGet : 0;
				"function" == typeof o && ("string" != typeof t || T(o, "name") || k(o, "name", t), n(o).source = r.join("string" == typeof t ? t : "")), e !== s ? (a ? !c && e[t] && (u = 1) : delete e[t], u ? e[t] = o : k(e, t, o)) : u ? e[t] = o : G(t, o)
			})(Function.prototype, "toString", function() {
				return "function" == typeof this && t(this).source || w.call(this)
			})
		}),
		Z = s,
		ee = function(e) {
			return "function" == typeof e ? e : void 0
		},
		te = function(e, t) {
			return arguments.length < 2 ? ee(Z[e]) || ee(s[e]) : Z[e] && Z[e][t] || s[e] && s[e][t]
		},
		ne = Math.ceil,
		re = Math.floor,
		oe = function(e) {
			return isNaN(e = +e) ? 0 : (e > 0 ? re : ne)(e)
		},
		ie = Math.min,
		ae = function(e) {
			return e > 0 ? ie(oe(e), 9007199254740991) : 0
		},
		se = Math.max,
		ue = Math.min,
		ce = function(e, t) {
			var n = oe(e);
			return n < 0 ? se(n + t, 0) : ue(n, t)
		},
		le = function(e) {
			return function(t, n, r) {
				var o, i = E(t),
					a = ae(i.length),
					s = ce(r, a);
				if (e && n != n) {
					for (; a > s;) if ((o = i[s++]) != o) return 1
				} else for (; a > s; s++) if ((e || s in i) && i[s] === n) return e || s || 0;
				return !e && -1
			}
		},
		pe = {
			includes: le(1),
			indexOf: le(0)
		},
		fe = pe.indexOf,
		he = function(e, t) {
			var n, r = E(e),
				o = 0,
				i = [];
			for (n in r)!T(K, n) && T(r, n) && i.push(n);
			for (; t.length > o;) T(r, n = t[o++]) && (~fe(i, n) || i.push(n));
			return i
		},
		ge = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
		de = ge.concat("length", "prototype"),
		me = {
			f: Object.getOwnPropertyNames ||
			function(e) {
				return he(e, de)
			}
		},
		_e = {
			f: Object.getOwnPropertySymbols
		},
		ve = te("Reflect", "ownKeys") ||
	function(e) {
		var t = me.f(L(e)),
			n = _e.f;
		return n ? t.concat(n(e)) : t
	}, Ee = function(e, t) {
		for (var n = ve(t), r = P.f, o = N.f, i = 0; i < n.length; i++) {
			var a = n[i];
			T(e, a) || r(e, a, o(t, a))
		}
	}, ye = /#|\.prototype\./, Se = function(e, t) {
		var n = Te[Ie(e)];
		return n == Me ? 1 : n == Ce ? 0 : "function" == typeof t ? u(t) : !! t
	}, Ie = Se.normalize = function(e) {
		return String(e).replace(ye, ".").toLowerCase()
	}, Te = Se.data = {}, Ce = Se.NATIVE = "N", Me = Se.POLYFILL = "P", Ae = Se, De = N.f, Oe = function(e, t) {
		var n, r, o, i, a, u = e.target,
			c = e.global,
			l = e.stat;
		if (n = c ? s : l ? s[u] || G(u, {}) : (s[u] || {}).prototype) for (r in t) {
			if (i = t[r], o = e.noTargetGet ? (a = De(n, r)) && a.value : n[r], !Ae(c ? r : u + (l ? "." : "#") + r, e.forced) && void 0 !== o) {
				if (typeof i == typeof o) continue;
				Ee(i, o)
			}(e.sham || o && o.sham) && k(i, "sham", 1), $(n, r, i, e)
		}
	}, Ne = function(e) {
		if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
		return e
	}, Le = function(e, t, n) {
		if (Ne(e), void 0 === t) return e;
		switch (n) {
		case 0:
			return function() {
				return e.call(t)
			};
		case 1:
			return function(n) {
				return e.call(t, n)
			};
		case 2:
			return function(n, r) {
				return e.call(t, n, r)
			};
		case 3:
			return function(n, r, o) {
				return e.call(t, n, r, o)
			}
		}
		return function() {
			return e.apply(t, arguments)
		}
	}, Re = function(e) {
		return Object(v(e))
	}, Pe = Array.isArray ||
	function(e) {
		return "Array" == d(e)
	}, ke = !! Object.getOwnPropertySymbols && !u(function() {
		return !String(Symbol())
	}), Ge = s.Symbol, be = b("wks"), we = function(e) {
		return be[e] || (be[e] = ke && Ge[e] || (ke ? Ge : j)("Symbol." + e))
	}, Ue = we("species"), Fe = function(e, t) {
		var n;
		return Pe(e) && ("function" != typeof(n = e.constructor) || n !== Array && !Pe(n.prototype) ? y(n) && null === (n = n[Ue]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
	}, xe = [].push, qe = function(e) {
		var t = 1 == e,
			n = 2 == e,
			r = 3 == e,
			o = 4 == e,
			i = 6 == e,
			a = 5 == e || i;
		return function(s, u, c, l) {
			for (var p, f, h = Re(s), g = _(h), d = Le(u, c, 3), m = ae(g.length), v = 0, E = l || Fe, y = t ? E(s, m) : n ? E(s, 0) : void 0; m > v; v++) if ((a || v in g) && (f = d(p = g[v], v, h), e)) if (t) y[v] = f;
			else if (f) switch (e) {
			case 3:
				return 1;
			case 5:
				return p;
			case 6:
				return v;
			case 2:
				xe.call(y, p)
			} else if (o) return 0;
			return i ? -1 : r || o ? o : y
		}
	}, je = {
		forEach: qe(0),
		map: qe(1),
		filter: qe(2),
		some: qe(3),
		every: qe(4),
		find: qe(5),
		findIndex: qe(6)
	}, Be = function(e, t) {
		var n = [][e];
		return !n || !u(function() {
			n.call(null, t ||
			function() {
				throw 1
			}, 1)
		})
	}, He = je.forEach, Ke = Be("forEach") ?
	function(e) {
		return He(this, e, arguments.length > 1 ? arguments[1] : void 0)
	} : [].forEach;
	Oe({
		target: "Array",
		proto: 1,
		forced: [].forEach != Ke
	}, {
		forEach: Ke
	});
	var Ye = function(e, t, n, r) {
			try {
				return r ? t(L(n)[0], n[1]) : t(n)
			} catch (i) {
				var o = e.
				return;
				throw void 0 !== o && L(o.call(e)), i
			}
		},
		Ve = {},
		ze = we("iterator"),
		We = Array.prototype,
		Xe = function(e) {
			return void 0 !== e && (Ve.Array === e || We[ze] === e)
		},
		Je = function(e, t, n) {
			var r = S(t);
			r in e ? P.f(e, r, h(0, n)) : e[r] = n
		},
		Qe = we("toStringTag"),
		$e = "Arguments" == d(function() {
			return arguments
		}()),
		Ze = function(e) {
			var t, n, r;
			return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
				try {
					return e[t]
				} catch (n) {}
			}(t = Object(e), Qe)) ? n : $e ? d(t) : "Object" == (r = d(t)) && "function" == typeof t.callee ? "Arguments" : r
		},
		et = we("iterator"),
		tt = function(e) {
			if (null != e) return e[et] || e["@@iterator"] || Ve[Ze(e)]
		},
		nt = function(e) {
			var t, n, r, o, i = Re(e),
				a = "function" == typeof this ? this : Array,
				s = arguments.length,
				u = s > 1 ? arguments[1] : void 0,
				c = void 0 !== u,
				l = 0,
				p = tt(i);
			if (c && (u = Le(u, s > 2 ? arguments[2] : void 0, 2)), null == p || a == Array && Xe(p)) for (n = new a(t = ae(i.length)); t > l; l++) Je(n, l, c ? u(i[l], l) : i[l]);
			else for (o = p.call(i), n = new a; !(r = o.next()).done; l++) Je(n, l, c ? Ye(o, u, [r.value, l], 1) : r.value);
			return n.length = l, n
		},
		rt = we("iterator"),
		ot = 0;
	try {
		var it = 0,
			at = {
				next: function() {
					return {
						done: !! it++
					}
				},
				return :function() {
					ot = 1
				}
			};
		at[rt] = function() {
			return this
		}, Array.from(at, function() {
			throw 2
		})
	} catch (Ug) {}
	var st = function(e, t) {
			if (!t && !ot) return 0;
			var n = 0;
			try {
				var r = {};
				r[rt] = function() {
					return {
						next: function() {
							return {
								done: n = 1
							}
						}
					}
				}, e(r)
			} catch (Ug) {}
			return n
		},
		ut = !st(function(e) {
			Array.from(e)
		});
	Oe({
		target: "Array",
		stat: 1,
		forced: ut
	}, {
		from: nt
	});
	var ct = Object.keys ||
	function(e) {
		return he(e, ge)
	}, lt = c ? Object.defineProperties : function(e, t) {
		L(e);
		for (var n, r = ct(t), o = r.length, i = 0; o > i;) P.f(e, n = r[i++], t[n]);
		return e
	}, pt = te("document", "documentElement"), ft = H("IE_PROTO"), ht = function() {}, gt = function() {
		var e, t = A("iframe"),
			n = ge.length;
		for (t.style.display = "none", pt.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), gt = e.F; n--;) delete gt.prototype[ge[n]];
		return gt()
	}, dt = Object.create ||
	function(e, t) {
		var n;
		return null !== e ? (ht.prototype = L(e), n = new ht, ht.prototype = null, n[ft] = e) : n = gt(), void 0 === t ? n : lt(n, t)
	};
	K[ft] = 1, Oe({
		target: "Object",
		stat: 1,
		sham: !c
	}, {
		create: dt
	});
	var mt = u(function() {
		ct(1)
	});
	Oe({
		target: "Object",
		stat: 1,
		forced: mt
	}, {
		keys: function(e) {
			return ct(Re(e))
		}
	});
	var _t, vt, Et, yt = function(e) {
			return function(t, n) {
				var r, o, i = String(v(t)),
					a = oe(n),
					s = i.length;
				return a < 0 || a >= s ? e ? "" : void 0 : (r = i.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === s || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? e ? i.charAt(a) : r : e ? i.slice(a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536
			}
		},
		St = {
			codeAt: yt(0),
			charAt: yt(1)
		},
		It = !u(function() {
			function e() {}
			return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
		}),
		Tt = H("IE_PROTO"),
		Ct = Object.prototype,
		Mt = It ? Object.getPrototypeOf : function(e) {
			return e = Re(e), T(e, Tt) ? e[Tt] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Ct : null
		},
		At = we("iterator"),
		Dt = 0;
	[].keys && ("next" in (Et = [].keys()) ? (vt = Mt(Mt(Et))) !== Object.prototype && (_t = vt) : Dt = 1), null == _t && (_t = {}), T(_t, At) || k(_t, At, function() {
		return this
	});
	var Ot = {
		IteratorPrototype: _t,
		BUGGY_SAFARI_ITERATORS: Dt
	},
		Nt = P.f,
		Lt = we("toStringTag"),
		Rt = function(e, t, n) {
			e && !T(e = n ? e : e.prototype, Lt) && Nt(e, Lt, {
				configurable: 1,
				value: t
			})
		},
		Pt = Ot.IteratorPrototype,
		kt = function() {
			return this
		},
		Gt = function(e, t, n) {
			var r = t + " Iterator";
			return e.prototype = dt(Pt, {
				next: h(1, n)
			}), Rt(e, r, 0), Ve[r] = kt, e
		},
		bt = Object.setPrototypeOf || ("__proto__" in {} ?
		function() {
			var e, t = 0,
				n = {};
			try {
				(e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
			} catch (Ug) {}
			return function(n, r) {
				return L(n), function(e) {
					if (!y(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
				}(r), t ? e.call(n, r) : n.__proto__ = r, n
			}
		}() : void 0),
		wt = Ot.IteratorPrototype,
		Ut = Ot.BUGGY_SAFARI_ITERATORS,
		Ft = we("iterator"),
		xt = function() {
			return this
		},
		qt = function(e, t, n, r, o, i, a) {
			Gt(n, t, r);
			var s, u, c, l = function(e) {
					if (e === o && d) return d;
					if (!Ut && e in h) return h[e];
					switch (e) {
					case "keys":
					case "values":
					case "entries":
						return function() {
							return new n(this, e)
						}
					}
					return function() {
						return new n(this)
					}
				},
				p = t + " Iterator",
				f = 0,
				h = e.prototype,
				g = h[Ft] || h["@@iterator"] || o && h[o],
				d = !Ut && g || l(o),
				m = "Array" == t && h.entries || g;
			if (m && (s = Mt(m.call(new e)), wt !== Object.prototype && s.next && (Mt(s) !== wt && (bt ? bt(s, wt) : "function" != typeof s[Ft] && k(s, Ft, xt)), Rt(s, p, 1))), "values" == o && g && "values" !== g.name && (f = 1, d = function() {
				return g.call(this)
			}), h[Ft] !== d && k(h, Ft, d), Ve[t] = d, o) if (u = {
				values: l("values"),
				keys: i ? d : l("keys"),
				entries: l("entries")
			}, a) for (c in u)!Ut && !f && c in h || $(h, c, u[c]);
			else Oe({
				target: t,
				proto: 1,
				forced: Ut || f
			}, u);
			return u
		},
		jt = St.charAt,
		Bt = Q.set,
		Ht = Q.getterFor("String Iterator");
	qt(String, "String", function(e) {
		Bt(this, {
			type: "String Iterator",
			string: String(e),
			index: 0
		})
	}, function() {
		var e, t = Ht(this),
			n = t.string,
			r = t.index;
		return r >= n.length ? {
			value: void 0,
			done: 1
		} : (e = jt(n, r), t.index += e.length, {
			value: e,
			done: 0
		})
	});
	var Kt = {
		CSSRuleList: 0,
		CSSStyleDeclaration: 0,
		CSSValueList: 0,
		ClientRectList: 0,
		DOMRectList: 0,
		DOMStringList: 0,
		DOMTokenList: 1,
		DataTransferItemList: 0,
		FileList: 0,
		HTMLAllCollection: 0,
		HTMLCollection: 0,
		HTMLFormElement: 0,
		HTMLSelectElement: 0,
		MediaList: 0,
		MimeTypeArray: 0,
		NamedNodeMap: 0,
		NodeList: 1,
		PaintRequestList: 0,
		Plugin: 0,
		PluginArray: 0,
		SVGLengthList: 0,
		SVGNumberList: 0,
		SVGPathSegList: 0,
		SVGPointList: 0,
		SVGStringList: 0,
		SVGTransformList: 0,
		SourceBufferList: 0,
		StyleSheetList: 0,
		TextTrackCueList: 0,
		TextTrackList: 0,
		TouchList: 0
	};
	for (var Yt in Kt) {
		var Vt = s[Yt],
			zt = Vt && Vt.prototype;
		if (zt && zt.forEach !== Ke) try {
			k(zt, "forEach", Ke)
		} catch (Ug) {
			zt.forEach = Ke
		}
	}
	var Wt = {
		SDK_READY: "sdkStateReady",
		SDK_NOT_READY: "sdkStateNotReady",
		SDK_DESTROY: "sdkDestroy",
		MESSAGE_SENDING: "onMessageSending",
		MESSAGE_SEND_SUCCESS: "onMessageSendSuccess",
		MESSAGE_SEND_FAIL: "onMessageSendFail",
		MESSAGE_RECEIVED: "onMessageReceived",
		APPLY_ADD_FRIEND_SUCCESS: "addFriendApplySendSuccess",
		APPLY_ADD_FRIEND_FAIL: "addFriendApplySendFail",
		GET_PENDENCY_SUCCESS: "getPendencySuccess",
		GET_PENDENCY_FAIL: "getPendencyFail",
		DELETE_PENDENCY_SUCCESS: "deletePendencySuccess",
		DELETE_PENDENCY_FAIL: "deletePendencyFail",
		REPLY_PENDENCY_SUCCESS: "replyPendencySuccess",
		REPLY_PENDENCY_FAIL: "replyPendencyFail",
		CONVERSATION_LIST_UPDATED: "onConversationListUpdated",
		GROUP_LIST_UPDATED: "onGroupListUpdated",
		GROUP_SYSTEM_NOTICE_RECERIVED: "receiveGroupSystemNotice",
		LOGIN_CHANGE: "loginStatusChange",
		LOGOUT_SUCCESS: "logoutSuccess",
		PROFILE_GET_SUCCESS: "getProfileSuccess",
		PROFILE_GET_FAIL: "getProfileFail",
		PROFILE_UPDATED: "onProfileUpdated",
		PROFILE_UPDATE_MY_PROFILE_FAIL: "updateMyProfileFail",
		FRIENDLIST_GET_SUCCESS: "getFriendListSuccess",
		FRIENDLIST_GET_FAIL: "getFriendsFail",
		FRIEND_DELETE_SUCCESS: "deleteFriendSuccess",
		FRIEND_DELETE_FAIL: "deleteFriendFail",
		BLACKLIST_ADD_SUCCESS: "addBlacklistSuccess",
		BLACKLIST_ADD_FAIL: "addBlacklistFail",
		BLACKLIST_GET_SUCCESS: "getBlacklistSuccess",
		BLACKLIST_GET_FAIL: "getBlacklistFail",
		BLACKLIST_UPDATED: "blacklistUpdated",
		BLACKLIST_DELETE_FAIL: "deleteBlacklistFail",
		KICKED_OUT: "kickedOut",
		ERROR: "error"
	},
		Xt = {
			JSON: {
				TYPE: {
					C2C: {
						NOTICE: 1,
						COMMON: 9,
						EVENT: 10
					},
					GROUP: {
						COMMON: 3,
						TIP: 4,
						SYSTEM: 5,
						TIP2: 6
					},
					FRIEND: {
						NOTICE: 7
					},
					PROFILE: {
						NOTICE: 8
					}
				},
				SUBTYPE: {
					C2C: {
						COMMON: 0,
						READED: 92,
						KICKEDOUT: 96
					},
					GROUP: {
						COMMON: 0,
						LOVEMESSAGE: 1,
						TIP: 2,
						REDPACKET: 3
					}
				},
				OPTIONS: {
					GROUP: {
						JOIN: 1,
						QUIT: 2,
						KICK: 3,
						SET_ADMIN: 4,
						CANCEL_ADMIN: 5,
						MODIFY_GROUP_INFO: 6,
						MODIFY_MEMBER_INFO: 7
					}
				}
			},
			PROTOBUF: {},
			ELEMENT_TYPES: {
				TEXT: "TIMTextElem",
				FACE: "TIMFaceElem",
				SOUND: "TIMSoundElem",
				FILE: "TIMFileElem",
				VIDEO: "TIMVideoFileElem",
				IMAGE: "TIMImageElem",
				GEO: "TIMLocationElem",
				GROUP_TIP: "TIMGroupTipElem",
				GROUP_SYSTEM_NOTICE: "TIMGroupSystemNoticeElem",
				CUSTOM: "TIMCustomElem"
			},
			IMAGE_TYPES: {
				ORIGIN: 1,
				LARGE: 2,
				SMALL: 3
			},
			IMAGE_FORMAT: {
				JPG: 1,
				JPEG: 1,
				GIF: 2,
				PNG: 3,
				BMP: 4,
				UNKNOWN: 255
			}
		},
		Jt = {
			C2C: "C2C",
			GROUP: "GROUP",
			SYSTEM: "@TIM#SYSTEM"
		},
		Qt = {
			PRIVATE: "Private",
			PUBLIC: "Public",
			CHATROOM: "ChatRoom",
			AVCHATROOM: "AVChatRoom"
		},
		$t = {
			OWNER: "Owner",
			ADMIN: "Admin",
			MEMBER: "Member"
		},
		Zt = 1,
		en = 2,
		tn = 3,
		nn = 4,
		rn = 5,
		on = 7,
		an = 8,
		sn = 9,
		un = 10,
		cn = 15,
		ln = 255,
		pn = "mutipleAccount",
		fn = "mutipleDevice",
		hn = {
			AUTO: 0,
			SOCKET: 1,
			XHR: 2
		},
		gn = 0,
		dn = 1,
		mn = {
			UNKNOWN: "Gender_Type_Unknown",
			FEMALE: "Gender_Type_Female",
			MALE: "Gender_Type_Male"
		},
		_n = {
			NEED_CONFIRM: "AllowType_Type_NeedConfirm",
			ALLOW_ANY: "AllowType_Type_AllowAny",
			DENY_ANY: "AllowType_Type_DenyAny"
		},
		vn = {
			NONE: "AdminForbid_Type_None",
			SEND_OUT: "AdminForbid_Type_SendOut"
		},
		En = {
			NICK: "Tag_Profile_IM_Nick",
			GENDER: "Tag_Profile_IM_Gender",
			BIRTHDAY: "Tag_Profile_IM_BirthDay",
			LOCATION: "Tag_Profile_IM_Location",
			SELFSIGNATURE: "Tag_Profile_IM_SelfSignature",
			ALLOWTYPE: "Tag_Profile_IM_AllowType",
			LANGUAGE: "Tag_Profile_IM_Language",
			AVATAR: "Tag_Profile_IM_Image",
			MESSAGESETTINGS: "Tag_Profile_IM_MsgSettings",
			ADMINFORBIDTYPE: "Tag_Profile_IM_AdminForbidType",
			LEVEL: "Tag_Profile_IM_Level",
			ROLE: "Tag_Profile_IM_Role"
		},
		yn = {
			MSG_TEXT: "TIMTextElem",
			MSG_IMAGE: "TIMImageElem",
			MSG_SOUND: "TIMSoundElem",
			MSG_FILE: "TIMFileElem",
			MSG_FACE: "TIMFaceElem",
			MSG_VIDEO: "TIMVideoElem",
			MSG_GEO: "TIMLocationElem",
			MSG_GRP_TIP: "TIMGroupTipElem",
			MSG_GRP_SYS_NOTICE: "TIMGroupSystemNoticeElem",
			MSG_CUSTOM: "TIMCustomElem",
			CONV_C2C: "C2C",
			CONV_GROUP: "GROUP",
			CONV_SYSTEM: "@TIM#SYSTEM",
			GRP_PRIVATE: "Private",
			GRP_PUBLIC: "Public",
			GRP_CHATROOM: "ChatRoom",
			GRP_AVCHATROOM: "AVChatRoom",
			GRP_MBR_ROLE_OWNER: "Owner",
			GRP_MBR_ROLE_ADMIN: "Admin",
			GRP_MBR_ROLE_MEMBER: "Member",
			GRP_TIP_MBR_JOIN: 1,
			GRP_TIP_MBR_QUIT: 2,
			GRP_TIP_MBR_KICKED_OUT: 3,
			GRP_TIP_MBR_SET_ADMIN: 4,
			GRP_TIP_MBR_CANCELED_ADMIN: 5,
			GRP_TIP_GRP_PROFILE_UPDATED: 6,
			GRP_TIP_MBR_PROFILE_UPDATED: 7,
			MSG_REMIND_ACPT_AND_NOTE: "AcceptAndNotify",
			MSG_REMIND_ACPT_NOT_NOTE: "AcceptNotNotify",
			MSG_REMIND_DISCARD: "Discard",
			GENDER_UNKNOWN: "Gender_Type_Unknown",
			GENDER_FEMALE: "Gender_Type_Female",
			GENDER_MALE: "Gender_Type_Male",
			KICKED_OUT_MULT_ACCOUNT: "mutipleAccount",
			KICKED_OUT_MULT_DEVICE: "mutipleDevice",
			ALLOW_TYPE_ALLOW_ANY: "AllowType_Type_AllowAny",
			ALLOW_TYPE_NEED_CONFIRM: "AllowType_Type_NeedConfirm",
			ALLOW_TYPE_DENY_ANY: "AllowType_Type_DenyAny",
			FORBID_TYPE_NONE: "AdminForbid_Type_None",
			FORBID_TYPE_SEND_OUT: "AdminForbid_Type_SendOut",
			JOIN_OPTIONS_FREE_ACCESS: "FreeAccess",
			JOIN_OPTIONS_NEED_PERMISSION: "NeedPermission",
			JOIN_OPTIONS_DISABLE_APPLY: "DisableApply",
			JOIN_STATUS_SUCCESS: "JoinedSuccess",
			JOIN_STATUS_WAIT_APPROVAL: "WaitAdminApproval"
		},
		Sn = we("species"),
		In = function(e) {
			return !u(function() {
				var t = [];
				return (t.constructor = {})[Sn] = function() {
					return {
						foo: 1
					}
				}, 1 !== t[e](Boolean).foo
			})
		},
		Tn = je.map;
	Oe({
		target: "Array",
		proto: 1,
		forced: !In("map")
	}, {
		map: function(e) {
			return Tn(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var Cn = [].slice,
		Mn = {},
		An = function(e, t, n) {
			if (!(t in Mn)) {
				for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
				Mn[t] = Function("C,a", "return new C(" + r.join(",") + ")")
			}
			return Mn[t](e, n)
		},
		Dn = Function.bind ||
	function(e) {
		var t = Ne(this),
			n = Cn.call(arguments, 1),
			r = function() {
				var o = n.concat(Cn.call(arguments));
				return this instanceof r ? An(t, o.length, o) : t.apply(e, o)
			};
		return y(t.prototype) && (r.prototype = t.prototype), r
	};

	function On(e) {
		return (On = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}
	function Nn(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function Ln(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || 0, r.configurable = 1, "value" in r && (r.writable = 1), Object.defineProperty(e, r.key, r)
		}
	}
	function Rn(e, t, n) {
		return t && Ln(e.prototype, t), n && Ln(e, n), e
	}
	function Pn(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: 1,
			configurable: 1,
			writable: 1
		}) : e[t] = n, e
	}
	function kn(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {},
				r = Object.keys(n);
			"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
				return Object.getOwnPropertyDescriptor(n, e).enumerable
			}))), r.forEach(function(t) {
				Pn(e, t, n[t])
			})
		}
		return e
	}
	function Gn(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: 1,
				configurable: 1
			}
		}), t && wn(e, t)
	}
	function bn(e) {
		return (bn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	function wn(e, t) {
		return (wn = Object.setPrototypeOf ||
		function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}
	function Un(e, t, n) {
		return (Un = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return 0;
			if (Reflect.construct.sham) return 0;
			if ("function" == typeof Proxy) return 1;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
			} catch (e) {
				return 0
			}
		}() ? Reflect.construct : function(e, t, n) {
			var r = [null];
			r.push.apply(r, t);
			var o = new(Function.bind.apply(e, r));
			return n && wn(o, n.prototype), o
		}).apply(null, arguments)
	}
	function Fn(e) {
		var t = "function" == typeof Map ? new Map : void 0;
		return (Fn = function(e) {
			if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
			var n;
			if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
			if (void 0 !== t) {
				if (t.has(e)) return t.get(e);
				t.set(e, r)
			}
			function r() {
				return Un(e, arguments, bn(this).constructor)
			}
			return r.prototype = Object.create(e.prototype, {
				constructor: {
					value: r,
					enumerable: 0,
					writable: 1,
					configurable: 1
				}
			}), wn(r, e)
		})(e)
	}
	function xn(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}
	function qn(e, t) {
		return !t || "object" != typeof t && "function" != typeof t ? xn(e) : t
	}
	function jn(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) ||
		function(e, t) {
			var n = [],
				r = 1,
				o = 0,
				i = void 0;
			try {
				for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = 1);
			} catch (u) {
				o = 1, i = u
			} finally {
				try {
					r || null == s.
					return ||s.
					return ()
				} finally {
					if (o) throw i
				}
			}
			return n
		}(e, t) ||
		function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}
	function Bn(e) {
		return function(e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
		}(e) ||
		function(e) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
		}(e) ||
		function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()
	}
	Oe({
		target: "Function",
		proto: 1
	}, {
		bind: Dn
	});
	var Hn = function() {
			function e() {
				Nn(this, e), this.cache = [], this.options = null
			}
			return Rn(e, [{
				key: "use",
				value: function(e) {
					if ("function" != typeof e) throw "middleware must be a function";
					return this.cache.push(e), this
				}
			}, {
				key: "next",
				value: function(e) {
					if (this.middlewares && this.middlewares.length > 0) return this.middlewares.shift().call(this, this.options, this.next.bind(this))
				}
			}, {
				key: "run",
				value: function(e) {
					return this.middlewares = this.cache.map(function(e) {
						return e
					}), this.options = e, this.next()
				}
			}]), e
		}(),
		Kn = we("isConcatSpreadable"),
		Yn = !u(function() {
			var e = [];
			return e[Kn] = 0, e.concat()[0] !== e
		}),
		Vn = In("concat"),
		zn = function(e) {
			if (!y(e)) return 0;
			var t = e[Kn];
			return void 0 !== t ? !! t : Pe(e)
		};
	Oe({
		target: "Array",
		proto: 1,
		forced: !Yn || !Vn
	}, {
		concat: function(e) {
			var t, n, r, o, i, a = Re(this),
				s = Fe(a, 0),
				u = 0;
			for (t = -1, r = arguments.length; t < r; t++) if (i = -1 === t ? a : arguments[t], zn(i)) {
				if (u + (o = ae(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
				for (n = 0; n < o; n++, u++) n in i && Je(s, u, i[n])
			} else {
				if (u >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
				Je(s, u++, i)
			}
			return s.length = u, s
		}
	});
	var Wn = P.f,
		Xn = Function.prototype,
		Jn = Xn.toString,
		Qn = /^\s*function ([^ (]*)/;
	!c || "name" in Xn || Wn(Xn, "name", {
		configurable: 1,
		get: function() {
			try {
				return Jn.call(this).match(Qn)[1]
			} catch (Ug) {
				return ""
			}
		}
	});
	var $n = t(function(t, n) {
		var r, o, i, a, s, u, c, l, p, f, h, g, d, m, _, v, E, y, S, I;
		t.exports = (r = "function" == typeof Promise, o = "object" == typeof self ? self : e, i = "undefined" != typeof Symbol, a = "undefined" != typeof Map, s = "undefined" != typeof Set, u = "undefined" != typeof WeakMap, c = "undefined" != typeof WeakSet, l = "undefined" != typeof DataView, p = i && void 0 !== Symbol.iterator, f = i && void 0 !== Symbol.toStringTag, h = s && "function" == typeof Set.prototype.entries, g = a && "function" == typeof Map.prototype.entries, d = h && Object.getPrototypeOf((new Set).entries()), m = g && Object.getPrototypeOf((new Map).entries()), _ = p && "function" == typeof Array.prototype[Symbol.iterator], v = _ && Object.getPrototypeOf([][Symbol.iterator]()), E = p && "function" == typeof String.prototype[Symbol.iterator], y = E && Object.getPrototypeOf("" [Symbol.iterator]()), S = 8, I = -1, function(e) {
			var t = typeof e;
			if ("object" !== t) return t;
			if (null === e) return "null";
			if (e === o) return "global";
			if (Array.isArray(e) && (0 == f || !(Symbol.toStringTag in e))) return "Array";
			if ("object" == typeof window && null !== window) {
				if ("object" == typeof window.location && e === window.location) return "Location";
				if ("object" == typeof window.document && e === window.document) return "Document";
				if ("object" == typeof window.navigator) {
					if ("object" == typeof window.navigator.mimeTypes && e === window.navigator.mimeTypes) return "MimeTypeArray";
					if ("object" == typeof window.navigator.plugins && e === window.navigator.plugins) return "PluginArray"
				}
				if (("function" == typeof window.HTMLElement || "object" == typeof window.HTMLElement) && e instanceof window.HTMLElement) {
					if ("BLOCKQUOTE" === e.tagName) return "HTMLQuoteElement";
					if ("TD" === e.tagName) return "HTMLTableDataCellElement";
					if ("TH" === e.tagName) return "HTMLTableHeaderCellElement"
				}
			}
			var n = f && e[Symbol.toStringTag];
			if ("string" == typeof n) return n;
			var i = Object.getPrototypeOf(e);
			return i === RegExp.prototype ? "RegExp" : i === Date.prototype ? "Date" : r && i === Promise.prototype ? "Promise" : s && i === Set.prototype ? "Set" : a && i === Map.prototype ? "Map" : c && i === WeakSet.prototype ? "WeakSet" : u && i === WeakMap.prototype ? "WeakMap" : l && i === DataView.prototype ? "DataView" : a && i === m ? "Map Iterator" : s && i === d ? "Set Iterator" : _ && i === v ? "Array Iterator" : E && i === y ? "String Iterator" : null === i ? "Object" : Object.prototype.toString.call(e).slice(S, I)
		})
	});
	Oe({
		target: "Array",
		stat: 1
	}, {
		isArray: Pe
	});
	var Zn = Date.prototype,
		er = Zn.toString,
		tr = Zn.getTime;
	new Date(NaN) + "" != "Invalid Date" && $(Zn, "toString", function() {
		var e = tr.call(this);
		return e == e ? er.call(this) : "Invalid Date"
	});
	var nr = {};
	nr[we("toStringTag")] = "z";
	var rr = "[object z]" !== String(nr) ?
	function() {
		return "[object " + Ze(this) + "]"
	} : nr.toString, or = Object.prototype;
	rr !== or.toString && $(or, "toString", rr, {
		unsafe: 1
	});
	var ir = function() {
			var e = L(this),
				t = "";
			return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
		},
		ar = RegExp.prototype,
		sr = ar.toString,
		ur = u(function() {
			return "/a/b" != sr.call({
				source: "a",
				flags: "b"
			})
		}),
		cr = "toString" != sr.name;
	(ur || cr) && $(RegExp.prototype, "toString", function() {
		var e = L(this),
			t = String(e.source),
			n = e.flags;
		return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in ar) ? ir.call(e) : n)
	}, {
		unsafe: 1
	});
	var lr = Object.prototype.hasOwnProperty,
		pr = Object.prototype.toString;

	function fr(e) {
		if (null == e) return 1;
		if ("boolean" == typeof e) return 0;
		if ("number" == typeof e) return 0 === e;
		if ("string" == typeof e) return 0 === e.length;
		if ("function" == typeof e) return 0 === e.length;
		if (Array.isArray(e)) return 0 === e.length;
		if (e instanceof Error) return "" === e.message;
		if (e.toString == pr) switch (e.toString()) {
		case "[object File]":
		case "[object Map]":
		case "[object Set]":
			return 0 === e.size;
		case "[object Object]":
			for (var t in e) if (lr.call(e, t)) return 0;
			return 1
		}
		return 0
	}
	var hr, gr, dr = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
	hr = "undefined" != typeof console ? console : void 0 !== dr && dr.console ? dr.console : "undefined" != typeof window && window.console ? window.console : {};
	for (var mr = function() {}, _r = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], vr = _r.length; vr--;) gr = _r[vr], console[gr] || (hr[gr] = mr);
	hr.methods = _r;
	var Er = hr;

	function yr(e, t, n) {
		if (void 0 === t) return 1;
		var r = 1;
		if ("object" === $n(t).toLowerCase()) Object.keys(t).forEach(function(o) {
			var i = 1 == e.length ? e[0][o] : void 0;
			r = Sr(i, t[o], n, o) ? r : 0
		});
		else if ("array" === $n(t).toLowerCase()) for (var o = 0; o < t.length; o++) r = Sr(e[o], t[o], n, t[o].name) ? r : 0;
		if (r) return r;
		throw new Error("Params validate failed.")
	}
	function Sr(e, t, n, r) {
		if (void 0 === t) return 1;
		var o = 1;
		return t.required && fr(e) && (Er.error("TIM [".concat(n, '] Missing required params: "').concat(r, '".')), o = 0), fr(e) || $n(e).toLowerCase() === t.type.toLowerCase() || (Er.error("TIM [".concat(n, '] Invalid params: type check failed for "').concat(r, '".Expected ').concat(t.type, ".")), o = 0), t.validator && !t.validator(e) && (Er.error("TIM [".concat(n, "] Invalid params: custom validator check failed for params.")), o = 0), o
	}
	var Ir = {
		login: {
			userID: {
				type: "String",
				required: 1
			},
			userSig: {
				type: "String",
				required: 1
			}
		},
		addToBlacklist: {
			userIDList: {
				type: "Array",
				required: 1
			}
		},
		mutilParam: [{
			name: "paramName",
			type: "Number",
			required: 1
		}, {
			name: "paramName",
			type: "String",
			required: 1
		}],
		on: [{
			name: "eventName",
			type: "String",
			required: 1
		}, {
			name: "listener",
			type: "Function",
			required: 0
		}],
		sendMessage: [{
			name: "message",
			type: "Object",
			required: 1
		}],
		getConversationProfile: [{
			name: "conversationID",
			type: "String",
			required: 1
		}],
		deleteConversation: [{
			name: "conversationID",
			type: "String",
			required: 1
		}],
		getGroupProfile: {
			groupID: {
				type: "String",
				required: 1
			},
			groupCustomFieldFilter: {
				type: "Array"
			},
			memberCustomFieldFilter: {
				type: "Array"
			}
		},
		getGroupProfileAdvance: {
			groupIDList: {
				type: "Array",
				required: 1
			}
		},
		createGroup: {
			name: {
				type: "String",
				required: 1
			}
		},
		joinGroup: {
			groupID: {
				type: "String",
				required: 1
			},
			type: {
				type: "String"
			},
			applyMessage: {
				type: "String"
			}
		},
		quitGroup: [{
			name: "groupID",
			type: "String",
			required: 1
		}],
		handleApplication: {
			message: {
				type: "Object",
				required: 1
			},
			handleAction: {
				type: "String",
				required: 1
			},
			handleMessage: {
				type: "String"
			}
		},
		changeGroupOwner: {
			groupID: {
				type: "String",
				required: 1
			},
			newOwnerID: {
				type: "String",
				required: 1
			}
		},
		updateGroupProfile: {
			groupID: {
				type: "String",
				required: 1
			}
		},
		dismissGroup: [{
			name: "groupID",
			type: "String",
			required: 1
		}],
		searchGroupByID: [{
			name: "groupID",
			type: "String",
			required: 1
		}],
		getGroupMemberList: {
			groupID: {
				type: "String",
				required: 1
			},
			offset: {
				type: "Number"
			},
			count: {
				type: "Number"
			}
		},
		addGroupMemeber: {
			groupID: {
				type: "String",
				required: 1
			},
			userIDList: {
				type: "Array",
				required: 1
			}
		},
		setGroupMemberRole: {
			groupID: {
				type: "String",
				required: 1
			},
			userID: {
				type: "String",
				required: 1
			},
			role: {
				type: "String",
				required: 1
			}
		},
		setGroupMemberMuteTime: {
			groupID: {
				type: "String",
				required: 1
			},
			userID: {
				type: "String"
			},
			muteTime: {
				type: "Number",
				validator: function(e) {
					return e >= 0
				}
			}
		},
		setGroupMemberNameCard: {
			groupID: {
				type: "String",
				required: 1
			},
			userID: {
				type: "String"
			},
			nameCard: {
				type: "String",
				required: 1,
				validator: function(e) {
					return 1 == /^\s+$/.test(e) ? 0 : 1
				}
			}
		},
		setMessageRemindType: {
			groupID: {
				type: "String",
				required: 1
			},
			messageRemindType: {
				type: "String",
				required: 1
			}
		},
		setMemberCustomField: {
			groupID: {
				type: "String",
				required: 1
			},
			userID: {
				type: "String"
			},
			memberCustomField: {
				type: "Array",
				required: 1
			}
		},
		deleteGroupMember: {
			groupID: {
				type: "String",
				required: 1
			}
		},
		createTextMessage: {
			to: {
				type: "String",
				required: 1
			},
			conversationType: {
				type: "String",
				required: 1
			},
			payload: {
				type: "Object",
				required: 1
			}
		},
		createCustomMessage: {
			to: {
				type: "String",
				required: 1
			},
			conversationType: {
				type: "String",
				required: 1
			},
			payload: {
				type: "Object",
				required: 1
			}
		},
		createImageMessage: {
			to: {
				type: "String",
				required: 1
			},
			conversationType: {
				type: "String",
				required: 1
			},
			payload: {
				type: "Object",
				required: 1
			}
		},
		createFileMessage: {
			to: {
				type: "String",
				required: 1
			},
			conversationType: {
				type: "String",
				required: 1
			},
			payload: {
				type: "Object",
				required: 1
			}
		}
	},
		Tr = {
			login: "login",
			logout: "logout",
			on: "on",
			once: "once",
			off: "off",
			setLogLevel: "setLogLevel",
			downloadLog: "downloadLog",
			registerPlugin: "registerPlugin",
			ready: "ready",
			destroy: "destroy",
			createTextMessage: "createTextMessage",
			createFileMessage: "createFileMessage",
			createImageMessage: "createImageMessage",
			createCustomMessage: "createCustomMessage",
			sendMessage: "sendMessage",
			sendTextMessage: "sendTextMessage",
			sendImageMessage: "sendImageMessage",
			sendCustomMessage: "sendCustomMessage",
			sendFileMessage: "sendFileMessage",
			resendMessage: "resendMessage",
			getMessageList: "getMessageList",
			setMessageRead: "setMessageRead",
			getConversationList: "getConversationList",
			getConversationProfile: "getConversationProfile",
			deleteConversation: "deleteConversation",
			getGroupList: "getGroupList",
			getGroupProfile: "getGroupProfile",
			getGroupProfileAdvance: "getGroupProfileAdvance",
			createGroup: "createGroup",
			joinGroup: "joinGroup",
			updateGroupProfile: "updateGroupProfile",
			quitGroup: "quitGroup",
			dismissGroup: "dismissGroup",
			changeGroupOwner: "changeGroupOwner",
			searchGroupByID: "searchGroupByID",
			setMessageRemindType: "setMessageRemindType",
			handleGroupApplication: "handleGroupApplication",
			getGroupMemberList: "getGroupMemberList",
			addGroupMember: "addGroupMember",
			deleteGroupMember: "deleteGroupMember",
			setGroupMemberNameCard: "setGroupMemberNameCard",
			setGroupMemberMuteTime: "setGroupMemberMuteTime",
			setGroupMemberRole: "setGroupMemberRole",
			setGroupMemberCustomField: "setGroupMemberCustomField",
			getMyProfile: "getMyProfile",
			getUserProfile: "getUserProfile",
			updateMyProfile: "updateMyProfile",
			addToBlacklist: "addToBlacklist",
			applyAddFriend: "applyAddFriend",
			removeFromBlacklist: "removeFromBlacklist",
			deleteFriend: "deleteFriend",
			deletePendency: "deletePendency",
			getBlacklist: "getBlacklist",
			getFriendList: "getFriendList",
			getPendency: "getPendency",
			getPendencyReport: "getPendencyReport",
			replyPendency: "replyPendency"
		},
		Cr = we("unscopables"),
		Mr = Array.prototype;
	null == Mr[Cr] && k(Mr, Cr, dt(null));
	var Ar = function(e) {
			Mr[Cr][e] = 1
		},
		Dr = Q.set,
		Or = Q.getterFor("Array Iterator"),
		Nr = qt(Array, "Array", function(e, t) {
			Dr(this, {
				type: "Array Iterator",
				target: E(e),
				index: 0,
				kind: t
			})
		}, function() {
			var e = Or(this),
				t = e.target,
				n = e.kind,
				r = e.index++;
			return !t || r >= t.length ? (e.target = void 0, {
				value: void 0,
				done: 1
			}) : "keys" == n ? {
				value: r,
				done: 0
			} : "values" == n ? {
				value: t[r],
				done: 0
			} : {
				value: [r, t[r]],
				done: 0
			}
		}, "values");
	Ve.Arguments = Ve.Array, Ar("keys"), Ar("values"), Ar("entries");
	var Lr, Rr, Pr, kr = s.Promise,
		Gr = function(e, t, n) {
			for (var r in t) $(e, r, t[r], n);
			return e
		},
		br = we("species"),
		wr = function(e) {
			var t = te(e),
				n = P.f;
			c && t && !t[br] && n(t, br, {
				configurable: 1,
				get: function() {
					return this
				}
			})
		},
		Ur = function(e, t, n) {
			if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
			return e
		},
		Fr = t(function(e) {
			var t = function(e, t) {
					this.stopped = e, this.result = t
				};
			(e.exports = function(e, n, r, o, i) {
				var a, s, u, c, l, p, f = Le(n, r, o ? 2 : 1);
				if (i) a = e;
				else {
					if ("function" != typeof(s = tt(e))) throw TypeError("Target is not iterable");
					if (Xe(s)) {
						for (u = 0, c = ae(e.length); c > u; u++) if ((l = o ? f(L(p = e[u])[0], p[1]) : f(e[u])) && l instanceof t) return l;
						return new t(0)
					}
					a = s.call(e)
				}
				for (; !(p = a.next()).done;) if ((l = Ye(a, f, p.value, o)) && l instanceof t) return l;
				return new t(0)
			}).stop = function(e) {
				return new t(1, e)
			}
		}),
		xr = we("species"),
		qr = function(e, t) {
			var n, r = L(e).constructor;
			return void 0 === r || null == (n = L(r)[xr]) ? t : Ne(n)
		},
		jr = s.location,
		Br = s.setImmediate,
		Hr = s.clearImmediate,
		Kr = s.process,
		Yr = s.MessageChannel,
		Vr = s.Dispatch,
		zr = 0,
		Wr = {},
		Xr = function(e) {
			if (Wr.hasOwnProperty(e)) {
				var t = Wr[e];
				delete Wr[e], t()
			}
		},
		Jr = function(e) {
			return function() {
				Xr(e)
			}
		},
		Qr = function(e) {
			Xr(e.data)
		},
		$r = function(e) {
			s.postMessage(e + "", jr.protocol + "//" + jr.host)
		};
	Br && Hr || (Br = function(e) {
		for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
		return Wr[++zr] = function() {
			("function" == typeof e ? e : Function(e)).apply(void 0, t)
		}, Lr(zr), zr
	}, Hr = function(e) {
		delete Wr[e]
	}, "process" == d(Kr) ? Lr = function(e) {
		Kr.nextTick(Jr(e))
	} : Vr && Vr.now ? Lr = function(e) {
		Vr.now(Jr(e))
	} : Yr ? (Pr = (Rr = new Yr).port2, Rr.port1.onmessage = Qr, Lr = Le(Pr.postMessage, Pr, 1)) : !s.addEventListener || "function" != typeof postMessage || s.importScripts || u($r) ? Lr = "onreadystatechange" in A("script") ?
	function(e) {
		pt.appendChild(A("script")).onreadystatechange = function() {
			pt.removeChild(this), Xr(e)
		}
	} : function(e) {
		setTimeout(Jr(e), 0)
	} : (Lr = $r, s.addEventListener("message", Qr, 0)));
	var Zr, eo, to, no, ro, oo, io, ao, so = {
		set: Br,
		clear: Hr
	},
		uo = te("navigator", "userAgent") || "",
		co = N.f,
		lo = so.set,
		po = s.MutationObserver || s.WebKitMutationObserver,
		fo = s.process,
		ho = s.Promise,
		go = "process" == d(fo),
		mo = co(s, "queueMicrotask"),
		_o = mo && mo.value;
	_o || (Zr = function() {
		var e, t;
		for (go && (e = fo.domain) && e.exit(); eo;) {
			t = eo.fn, eo = eo.next;
			try {
				t()
			} catch (Ug) {
				throw eo ? no() : to = void 0, Ug
			}
		}
		to = void 0, e && e.enter()
	}, go ? no = function() {
		fo.nextTick(Zr)
	} : po && !/(iphone|ipod|ipad).*applewebkit/i.test(uo) ? (ro = 1, oo = document.createTextNode(""), new po(Zr).observe(oo, {
		characterData: 1
	}), no = function() {
		oo.data = ro = !ro
	}) : ho && ho.resolve ? (io = ho.resolve(void 0), ao = io.then, no = function() {
		ao.call(io, Zr)
	}) : no = function() {
		lo.call(s, Zr)
	});
	var vo, Eo, yo, So, Io = _o ||
	function(e) {
		var t = {
			fn: e,
			next: void 0
		};
		to && (to.next = t), eo || (eo = t, no()), to = t
	}, To = function(e) {
		var t, n;
		this.promise = new e(function(e, r) {
			if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
			t = e, n = r
		}), this.resolve = Ne(t), this.reject = Ne(n)
	}, Co = {
		f: function(e) {
			return new To(e)
		}
	}, Mo = function(e, t) {
		if (L(e), y(t) && t.constructor === e) return t;
		var n = Co.f(e);
		return (0, n.resolve)(t), n.promise
	}, Ao = function(e) {
		try {
			return {
				error: 0,
				value: e()
			}
		} catch (Ug) {
			return {
				error: 1,
				value: Ug
			}
		}
	}, Do = so.set, Oo = we("species"), No = "Promise", Lo = Q.get, Ro = Q.set, Po = Q.getterFor(No), ko = kr, Go = s.TypeError, bo = s.document, wo = s.process, Uo = s.fetch, Fo = wo && wo.versions, xo = Fo && Fo.v8 || "", qo = Co.f, jo = qo, Bo = "process" == d(wo), Ho = !! (bo && bo.createEvent && s.dispatchEvent), Ko = Ae(No, function() {
		var e = ko.resolve(1),
			t = function() {},
			n = (e.constructor = {})[Oo] = function(e) {
				e(t, t)
			};
		return !((Bo || "function" == typeof PromiseRejectionEvent) && e.then(t) instanceof n && 0 !== xo.indexOf("6.6") && -1 === uo.indexOf("Chrome/66"))
	}), Yo = Ko || !st(function(e) {
		ko.all(e).
		catch (function() {})
	}), Vo = function(e) {
		var t;
		return y(e) && "function" == typeof(t = e.then) ? t : 0
	}, zo = function(e, t, n) {
		if (!t.notified) {
			t.notified = 1;
			var r = t.reactions;
			Io(function() {
				for (var o = t.value, i = 1 == t.state, a = 0; r.length > a;) {
					var s, u, c, l = r[a++],
						p = i ? l.ok : l.fail,
						f = l.resolve,
						h = l.reject,
						g = l.domain;
					try {
						p ? (i || (2 === t.rejection && Qo(e, t), t.rejection = 1), 1 == p ? s = o : (g && g.enter(), s = p(o), g && (g.exit(), c = 1)), s === l.promise ? h(Go("Promise-chain cycle")) : (u = Vo(s)) ? u.call(s, f, h) : f(s)) : h(o)
					} catch (Ug) {
						g && !c && g.exit(), h(Ug)
					}
				}
				t.reactions = [], t.notified = 0, n && !t.rejection && Xo(e, t)
			})
		}
	}, Wo = function(e, t, n) {
		var r, o;
		Ho ? ((r = bo.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, 0, 1), s.dispatchEvent(r)) : r = {
			promise: t,
			reason: n
		}, (o = s["on" + e]) ? o(r) : "unhandledrejection" === e &&
		function(e, t) {
			var n = s.console;
			n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
		}("Unhandled promise rejection", n)
	}, Xo = function(e, t) {
		Do.call(s, function() {
			var n, r = t.value;
			if (Jo(t) && (n = Ao(function() {
				Bo ? wo.emit("unhandledRejection", r, e) : Wo("unhandledrejection", e, r)
			}), t.rejection = Bo || Jo(t) ? 2 : 1, n.error)) throw n.value
		})
	}, Jo = function(e) {
		return 1 !== e.rejection && !e.parent
	}, Qo = function(e, t) {
		Do.call(s, function() {
			Bo ? wo.emit("rejectionHandled", e) : Wo("rejectionhandled", e, t.value)
		})
	}, $o = function(e, t, n, r) {
		return function(o) {
			e(t, n, o, r)
		}
	}, Zo = function(e, t, n, r) {
		t.done || (t.done = 1, r && (t = r), t.value = n, t.state = 2, zo(e, t, 1))
	}, ei = function(e, t, n, r) {
		if (!t.done) {
			t.done = 1, r && (t = r);
			try {
				if (e === n) throw Go("Promise can't be resolved itself");
				var o = Vo(n);
				o ? Io(function() {
					var r = {
						done: 0
					};
					try {
						o.call(n, $o(ei, e, r, t), $o(Zo, e, r, t))
					} catch (Ug) {
						Zo(e, r, Ug, t)
					}
				}) : (t.value = n, t.state = 1, zo(e, t, 0))
			} catch (Ug) {
				Zo(e, {
					done: 0
				}, Ug, t)
			}
		}
	};
	Ko && (ko = function(e) {
		Ur(this, ko, No), Ne(e), vo.call(this);
		var t = Lo(this);
		try {
			e($o(ei, this, t), $o(Zo, this, t))
		} catch (Ug) {
			Zo(this, t, Ug)
		}
	}, (vo = function(e) {
		Ro(this, {
			type: No,
			done: 0,
			notified: 0,
			parent: 0,
			reactions: [],
			rejection: 0,
			state: 0,
			value: void 0
		})
	}).prototype = Gr(ko.prototype, {
		then: function(e, t) {
			var n = Po(this),
				r = qo(qr(this, ko));
			return r.ok = "function" == typeof e ? e : 1, r.fail = "function" == typeof t && t, r.domain = Bo ? wo.domain : void 0, n.parent = 1, n.reactions.push(r), 0 != n.state && zo(this, n, 0), r.promise
		},
		catch: function(e) {
			return this.then(void 0, e)
		}
	}), Eo = function() {
		var e = new vo,
			t = Lo(e);
		this.promise = e, this.resolve = $o(ei, e, t), this.reject = $o(Zo, e, t)
	}, Co.f = qo = function(e) {
		return e === ko || e === yo ? new Eo(e) : jo(e)
	}, "function" == typeof kr && (So = kr.prototype.then, $(kr.prototype, "then", function(e, t) {
		var n = this;
		return new ko(function(e, t) {
			So.call(n, e, t)
		}).then(e, t)
	}), "function" == typeof Uo && Oe({
		global: 1,
		enumerable: 1,
		forced: 1
	}, {
		fetch: function(e) {
			return Mo(ko, Uo.apply(s, arguments))
		}
	}))), Oe({
		global: 1,
		wrap: 1,
		forced: Ko
	}, {
		Promise: ko
	}), Rt(ko, No, 0), wr(No), yo = Z.Promise, Oe({
		target: No,
		stat: 1,
		forced: Ko
	}, {
		reject: function(e) {
			var t = qo(this);
			return t.reject.call(void 0, e), t.promise
		}
	}), Oe({
		target: No,
		stat: 1,
		forced: Ko
	}, {
		resolve: function(e) {
			return Mo(this, e)
		}
	}), Oe({
		target: No,
		stat: 1,
		forced: Yo
	}, {
		all: function(e) {
			var t = this,
				n = qo(t),
				r = n.resolve,
				o = n.reject,
				i = Ao(function() {
					var n = Ne(t.resolve),
						i = [],
						a = 0,
						s = 1;
					Fr(e, function(e) {
						var u = a++,
							c = 0;
						i.push(void 0), s++, n.call(t, e).then(function(e) {
							c || (c = 1, i[u] = e, --s || r(i))
						}, o)
					}), --s || r(i)
				});
			return i.error && o(i.value), n.promise
		},
		race: function(e) {
			var t = this,
				n = qo(t),
				r = n.reject,
				o = Ao(function() {
					var o = Ne(t.resolve);
					Fr(e, function(e) {
						o.call(t, e).then(n.resolve, r)
					})
				});
			return o.error && r(o.value), n.promise
		}
	});
	var ti = we("iterator"),
		ni = we("toStringTag"),
		ri = Nr.values;
	for (var oi in Kt) {
		var ii = s[oi],
			ai = ii && ii.prototype;
		if (ai) {
			if (ai[ti] !== ri) try {
				k(ai, ti, ri)
			} catch (Ug) {
				ai[ti] = ri
			}
			if (ai[ni] || k(ai, ni, oi), Kt[oi]) for (var si in Nr) if (ai[si] !== Nr[si]) try {
				k(ai, si, Nr[si])
			} catch (Ug) {
				ai[si] = Nr[si]
			}
		}
	}
	var ui = we("iterator"),
		ci = !u(function() {
			var e = new URL("b?e=1", "http://a"),
				t = e.searchParams;
			return e.pathname = "c%20d", !t.sort || "http://a/c%20d?e=1" !== e.href || "1" !== t.get("e") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[ui] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash
		}),
		li = Object.assign,
		pi = !li || u(function() {
			var e = {},
				t = {},
				n = Symbol();
			return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function(e) {
				t[e] = e
			}), 7 != li({}, e)[n] || "abcdefghijklmnopqrst" != ct(li({}, t)).join("")
		}) ?
	function(e, t) {
		for (var n = Re(e), r = arguments.length, o = 1, i = _e.f, a = f.f; r > o;) for (var s, u = _(arguments[o++]), l = i ? ct(u).concat(i(u)) : ct(u), p = l.length, h = 0; p > h;) s = l[h++], c && !a.call(u, s) || (n[s] = u[s]);
		return n
	} : li, fi = /[^\0-\u007E]/, hi = /[.\u3002\uFF0E\uFF61]/g, gi = "Overflow: input needs wider integers to process", di = Math.floor, mi = String.fromCharCode, _i = function(e) {
		return e + 22 + 75 * (e < 26)
	}, vi = function(e, t, n) {
		var r = 0;
		for (e = n ? di(e / 700) : e >> 1, e += di(e / t); e > 455; r += 36) e = di(e / 35);
		return di(r + 36 * e / (e + 38))
	}, Ei = function(e) {
		var t, n, r = [],
			o = (e = function(e) {
				for (var t = [], n = 0, r = e.length; n < r;) {
					var o = e.charCodeAt(n++);
					if (o >= 55296 && o <= 56319 && n < r) {
						var i = e.charCodeAt(n++);
						56320 == (64512 & i) ? t.push(((1023 & o) << 10) + (1023 & i) + 65536) : (t.push(o), n--)
					} else t.push(o)
				}
				return t
			}(e)).length,
			i = 128,
			a = 0,
			s = 72;
		for (t = 0; t < e.length; t++)(n = e[t]) < 128 && r.push(mi(n));
		var u = r.length,
			c = u;
		for (u && r.push("-"); c < o;) {
			var l = 2147483647;
			for (t = 0; t < e.length; t++)(n = e[t]) >= i && n < l && (l = n);
			var p = c + 1;
			if (l - i > di((2147483647 - a) / p)) throw RangeError(gi);
			for (a += (l - i) * p, i = l, t = 0; t < e.length; t++) {
				if ((n = e[t]) < i && ++a > 2147483647) throw RangeError(gi);
				if (n == i) {
					for (var f = a, h = 36;; h += 36) {
						var g = h <= s ? 1 : h >= s + 26 ? 26 : h - s;
						if (f < g) break;
						var d = f - g,
							m = 36 - g;
						r.push(mi(_i(g + d % m))), f = di(d / m)
					}
					r.push(mi(_i(f))), s = vi(a, p, c == u), a = 0, ++c
				}
			}++a, ++i
		}
		return r.join("")
	}, yi = function(e) {
		var t = tt(e);
		if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
		return L(t.call(e))
	}, Si = we("iterator"), Ii = Q.set, Ti = Q.getterFor("URLSearchParams"), Ci = Q.getterFor("URLSearchParamsIterator"), Mi = /\+/g, Ai = Array(4), Di = function(e) {
		return Ai[e - 1] || (Ai[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
	}, Oi = function(e) {
		try {
			return decodeURIComponent(e)
		} catch (Ug) {
			return e
		}
	}, Ni = function(e) {
		var t = e.replace(Mi, " "),
			n = 4;
		try {
			return decodeURIComponent(t)
		} catch (Ug) {
			for (; n;) t = t.replace(Di(n--), Oi);
			return t
		}
	}, Li = /[!'()~]|%20/g, Ri = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+"
	}, Pi = function(e) {
		return Ri[e]
	}, ki = function(e) {
		return encodeURIComponent(e).replace(Li, Pi)
	}, Gi = function(e, t) {
		if (t) for (var n, r, o = t.split("&"), i = 0; i < o.length;)(n = o[i++]).length && (r = n.split("="), e.push({
			key: Ni(r.shift()),
			value: Ni(r.join("="))
		}))
	}, bi = function(e) {
		this.entries.length = 0, Gi(this.entries, e)
	}, wi = function(e, t) {
		if (e < t) throw TypeError("Not enough arguments")
	}, Ui = Gt(function(e, t) {
		Ii(this, {
			type: "URLSearchParamsIterator",
			iterator: yi(Ti(e).entries),
			kind: t
		})
	}, "Iterator", function() {
		var e = Ci(this),
			t = e.kind,
			n = e.iterator.next(),
			r = n.value;
		return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
	}), Fi = function() {
		Ur(this, Fi, "URLSearchParams");
		var e, t, n, r, o, i, a, s = arguments.length > 0 ? arguments[0] : void 0,
			u = this,
			c = [];
		if (Ii(u, {
			type: "URLSearchParams",
			entries: c,
			updateURL: function() {},
			updateSearchParams: bi
		}), void 0 !== s) if (y(s)) if ("function" == typeof(e = tt(s))) for (t = e.call(s); !(n = t.next()).done;) {
			if ((o = (r = yi(L(n.value))).next()).done || (i = r.next()).done || !r.next().done) throw TypeError("Expected sequence with length 2");
			c.push({
				key: o.value + "",
				value: i.value + ""
			})
		} else for (a in s) T(s, a) && c.push({
			key: a,
			value: s[a] + ""
		});
		else Gi(c, "string" == typeof s ? "?" === s.charAt(0) ? s.slice(1) : s : s + "")
	}, xi = Fi.prototype;
	Gr(xi, {
		append: function(e, t) {
			wi(arguments.length, 2);
			var n = Ti(this);
			n.entries.push({
				key: e + "",
				value: t + ""
			}), n.updateURL()
		},
		delete: function(e) {
			wi(arguments.length, 1);
			for (var t = Ti(this), n = t.entries, r = e + "", o = 0; o < n.length;) n[o].key === r ? n.splice(o, 1) : o++;
			t.updateURL()
		},
		get: function(e) {
			wi(arguments.length, 1);
			for (var t = Ti(this).entries, n = e + "", r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
			return null
		},
		getAll: function(e) {
			wi(arguments.length, 1);
			for (var t = Ti(this).entries, n = e + "", r = [], o = 0; o < t.length; o++) t[o].key === n && r.push(t[o].value);
			return r
		},
		has: function(e) {
			wi(arguments.length, 1);
			for (var t = Ti(this).entries, n = e + "", r = 0; r < t.length;) if (t[r++].key === n) return 1;
			return 0
		},
		set: function(e, t) {
			wi(arguments.length, 1);
			for (var n, r = Ti(this), o = r.entries, i = 0, a = e + "", s = t + "", u = 0; u < o.length; u++)(n = o[u]).key === a && (i ? o.splice(u--, 1) : (i = 1, n.value = s));
			i || o.push({
				key: a,
				value: s
			}), r.updateURL()
		},
		sort: function() {
			var e, t, n, r = Ti(this),
				o = r.entries,
				i = o.slice();
			for (o.length = 0, n = 0; n < i.length; n++) {
				for (e = i[n], t = 0; t < n; t++) if (o[t].key > e.key) {
					o.splice(t, 0, e);
					break
				}
				t === n && o.push(e)
			}
			r.updateURL()
		},
		forEach: function(e) {
			for (var t, n = Ti(this).entries, r = Le(e, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < n.length;) r((t = n[o++]).value, t.key, this)
		},
		keys: function() {
			return new Ui(this, "keys")
		},
		values: function() {
			return new Ui(this, "values")
		},
		entries: function() {
			return new Ui(this, "entries")
		}
	}, {
		enumerable: 1
	}), $(xi, Si, xi.entries), $(xi, "toString", function() {
		for (var e, t = Ti(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(ki(e.key) + "=" + ki(e.value));
		return n.join("&")
	}, {
		enumerable: 1
	}), Rt(Fi, "URLSearchParams"), Oe({
		global: 1,
		forced: !ci
	}, {
		URLSearchParams: Fi
	});
	var qi, ji = {
		URLSearchParams: Fi,
		getState: Ti
	},
		Bi = St.codeAt,
		Hi = s.URL,
		Ki = ji.URLSearchParams,
		Yi = ji.getState,
		Vi = Q.set,
		zi = Q.getterFor("URL"),
		Wi = Math.floor,
		Xi = Math.pow,
		Ji = /[A-Za-z]/,
		Qi = /[\d+\-.A-Za-z]/,
		$i = /\d/,
		Zi = /^(0x|0X)/,
		ea = /^[0-7]+$/,
		ta = /^\d+$/,
		na = /^[\dA-Fa-f]+$/,
		ra = /[\u0000\u0009\u000A\u000D #%\/:?@[\\]]/,
		oa = /[\u0000\u0009\u000A\u000D #\/:?@[\\]]/,
		ia = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
		aa = /[\u0009\u000A\u000D]/g,
		sa = function(e, t) {
			var n, r, o;
			if ("[" == t.charAt(0)) {
				if ("]" != t.charAt(t.length - 1)) return "Invalid host";
				if (!(n = ca(t.slice(1, -1)))) return "Invalid host";
				e.host = n
			} else if (_a(e)) {
				if (t = function(e) {
					var t, n, r = [],
						o = e.toLowerCase().replace(hi, ".").split(".");
					for (t = 0; t < o.length; t++) n = o[t], r.push(fi.test(n) ? "xn--" + Ei(n) : n);
					return r.join(".")
				}(t), ra.test(t)) return "Invalid host";
				if (null === (n = ua(t))) return "Invalid host";
				e.host = n
			} else {
				if (oa.test(t)) return "Invalid host";
				for (n = "", r = nt(t), o = 0; o < r.length; o++) n += da(r[o], pa);
				e.host = n
			}
		},
		ua = function(e) {
			var t, n, r, o, i, a, s, u = e.split(".");
			if (u.length && "" == u[u.length - 1] && u.pop(), (t = u.length) > 4) return e;
			for (n = [], r = 0; r < t; r++) {
				if ("" == (o = u[r])) return e;
				if (i = 10, o.length > 1 && "0" == o.charAt(0) && (i = Zi.test(o) ? 16 : 8, o = o.slice(8 == i ? 1 : 2)), "" === o) a = 0;
				else {
					if (!(10 == i ? ta : 8 == i ? ea : na).test(o)) return e;
					a = parseInt(o, i)
				}
				n.push(a)
			}
			for (r = 0; r < t; r++) if (a = n[r], r == t - 1) {
				if (a >= Xi(256, 5 - t)) return null
			} else if (a > 255) return null;
			for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * Xi(256, 3 - r);
			return s
		},
		ca = function(e) {
			var t, n, r, o, i, a, s, u = [0, 0, 0, 0, 0, 0, 0, 0],
				c = 0,
				l = null,
				p = 0,
				f = function() {
					return e.charAt(p)
				};
			if (":" == f()) {
				if (":" != e.charAt(1)) return;
				p += 2, l = ++c
			}
			for (; f();) {
				if (8 == c) return;
				if (":" != f()) {
					for (t = n = 0; n < 4 && na.test(f());) t = 16 * t + parseInt(f(), 16), p++, n++;
					if ("." == f()) {
						if (0 == n) return;
						if (p -= n, c > 6) return;
						for (r = 0; f();) {
							if (o = null, r > 0) {
								if (!("." == f() && r < 4)) return;
								p++
							}
							if (!$i.test(f())) return;
							for (; $i.test(f());) {
								if (i = parseInt(f(), 10), null === o) o = i;
								else {
									if (0 == o) return;
									o = 10 * o + i
								}
								if (o > 255) return;
								p++
							}
							u[c] = 256 * u[c] + o, 2 != ++r && 4 != r || c++
						}
						if (4 != r) return;
						break
					}
					if (":" == f()) {
						if (p++, !f()) return
					} else if (f()) return;
					u[c++] = t
				} else {
					if (null !== l) return;
					p++, l = ++c
				}
			}
			if (null !== l) for (a = c - l, c = 7; 0 != c && a > 0;) s = u[c], u[c--] = u[l + a - 1], u[l + --a] = s;
			else if (8 != c) return;
			return u
		},
		la = function(e) {
			var t, n, r, o;
			if ("number" == typeof e) {
				for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = Wi(e / 256);
				return t.join(".")
			}
			if ("object" == typeof e) {
				for (t = "", r = function(e) {
					for (var t = null, n = 1, r = null, o = 0, i = 0; i < 8; i++) 0 !== e[i] ? (o > n && (t = r, n = o), r = null, o = 0) : (null === r && (r = i), ++o);
					return o > n && (t = r, n = o), t
				}(e), n = 0; n < 8; n++) o && 0 === e[n] || (o && (o = 0), r === n ? (t += n ? ":" : "::", o = 1) : (t += e[n].toString(16), n < 7 && (t += ":")));
				return "[" + t + "]"
			}
			return e
		},
		pa = {},
		fa = pi({}, pa, {
			" ": 1,
			'"': 1,
			"<": 1,
			">": 1,
			"`": 1
		}),
		ha = pi({}, fa, {
			"#": 1,
			"?": 1,
			"{": 1,
			"}": 1
		}),
		ga = pi({}, ha, {
			"/": 1,
			":": 1,
			";": 1,
			"=": 1,
			"@": 1,
			"[": 1,
			"\\": 1,
			"]": 1,
			"^": 1,
			"|": 1
		}),
		da = function(e, t) {
			var n = Bi(e, 0);
			return n > 32 && n < 127 && !T(t, e) ? e : encodeURIComponent(e)
		},
		ma = {
			ftp: 21,
			file: null,
			gopher: 70,
			http: 80,
			https: 443,
			ws: 80,
			wss: 443
		},
		_a = function(e) {
			return T(ma, e.scheme)
		},
		va = function(e) {
			return "" != e.username || "" != e.password
		},
		Ea = function(e) {
			return !e.host || e.cannotBeABaseURL || "file" == e.scheme
		},
		ya = function(e, t) {
			var n;
			return 2 == e.length && Ji.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
		},
		Sa = function(e) {
			var t;
			return e.length > 1 && ya(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
		},
		Ia = function(e) {
			var t = e.path,
				n = t.length;
			!n || "file" == e.scheme && 1 == n && ya(t[0], 1) || t.pop()
		},
		Ta = function(e) {
			return "." === e || "%2e" === e.toLowerCase()
		},
		Ca = {},
		Ma = {},
		Aa = {},
		Da = {},
		Oa = {},
		Na = {},
		La = {},
		Ra = {},
		Pa = {},
		ka = {},
		Ga = {},
		ba = {},
		wa = {},
		Ua = {},
		Fa = {},
		xa = {},
		qa = {},
		ja = {},
		Ba = {},
		Ha = {},
		Ka = {},
		Ya = function(e, t, n, r) {
			var o, i, a, s, u, c = n || Ca,
				l = 0,
				p = "",
				f = 0,
				h = 0,
				g = 0;
			for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = 0, t = t.replace(ia, "")), t = t.replace(aa, ""), o = nt(t); l <= o.length;) {
				switch (i = o[l], c) {
				case Ca:
					if (!i || !Ji.test(i)) {
						if (n) return "Invalid scheme";
						c = Aa;
						continue
					}
					p += i.toLowerCase(), c = Ma;
					break;
				case Ma:
					if (i && (Qi.test(i) || "+" == i || "-" == i || "." == i)) p += i.toLowerCase();
					else {
						if (":" != i) {
							if (n) return "Invalid scheme";
							p = "", c = Aa, l = 0;
							continue
						}
						if (n && (_a(e) != T(ma, p) || "file" == p && (va(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
						if (e.scheme = p, n) return void(_a(e) && ma[e.scheme] == e.port && (e.port = null));
						p = "", "file" == e.scheme ? c = Ua : _a(e) && r && r.scheme == e.scheme ? c = Da : _a(e) ? c = Ra : "/" == o[l + 1] ? (c = Oa, l++) : (e.cannotBeABaseURL = 1, e.path.push(""), c = Ba)
					}
					break;
				case Aa:
					if (!r || r.cannotBeABaseURL && "#" != i) return "Invalid scheme";
					if (r.cannotBeABaseURL && "#" == i) {
						e.scheme = r.scheme, e.path = r.path.slice(), e.query = r.query, e.fragment = "", e.cannotBeABaseURL = 1, c = Ka;
						break
					}
					c = "file" == r.scheme ? Ua : Na;
					continue;
				case Da:
					if ("/" != i || "/" != o[l + 1]) {
						c = Na;
						continue
					}
					c = Pa, l++;
					break;
				case Oa:
					if ("/" == i) {
						c = ka;
						break
					}
					c = ja;
					continue;
				case Na:
					if (e.scheme = r.scheme, i == qi) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query;
					else if ("/" == i || "\\" == i && _a(e)) c = La;
					else if ("?" == i) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = "", c = Ha;
					else {
						if ("#" != i) {
							e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.path.pop(), c = ja;
							continue
						}
						e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query, e.fragment = "", c = Ka
					}
					break;
				case La:
					if (!_a(e) || "/" != i && "\\" != i) {
						if ("/" != i) {
							e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, c = ja;
							continue
						}
						c = ka
					} else c = Pa;
					break;
				case Ra:
					if (c = Pa, "/" != i || "/" != p.charAt(l + 1)) continue;
					l++;
					break;
				case Pa:
					if ("/" != i && "\\" != i) {
						c = ka;
						continue
					}
					break;
				case ka:
					if ("@" == i) {
						f && (p = "%40" + p), f = 1, a = nt(p);
						for (var d = 0; d < a.length; d++) {
							var m = a[d];
							if (":" != m || g) {
								var _ = da(m, ga);
								g ? e.password += _ : e.username += _
							} else g = 1
						}
						p = ""
					} else if (i == qi || "/" == i || "?" == i || "#" == i || "\\" == i && _a(e)) {
						if (f && "" == p) return "Invalid authority";
						l -= nt(p).length + 1, p = "", c = Ga
					} else p += i;
					break;
				case Ga:
				case ba:
					if (n && "file" == e.scheme) {
						c = xa;
						continue
					}
					if (":" != i || h) {
						if (i == qi || "/" == i || "?" == i || "#" == i || "\\" == i && _a(e)) {
							if (_a(e) && "" == p) return "Invalid host";
							if (n && "" == p && (va(e) || null !== e.port)) return;
							if (s = sa(e, p)) return s;
							if (p = "", c = qa, n) return;
							continue
						}
						"[" == i ? h = 1 : "]" == i && (h = 0), p += i
					} else {
						if ("" == p) return "Invalid host";
						if (s = sa(e, p)) return s;
						if (p = "", c = wa, n == ba) return
					}
					break;
				case wa:
					if (!$i.test(i)) {
						if (i == qi || "/" == i || "?" == i || "#" == i || "\\" == i && _a(e) || n) {
							if ("" != p) {
								var v = parseInt(p, 10);
								if (v > 65535) return "Invalid port";
								e.port = _a(e) && v === ma[e.scheme] ? null : v, p = ""
							}
							if (n) return;
							c = qa;
							continue
						}
						return "Invalid port"
					}
					p += i;
					break;
				case Ua:
					if (e.scheme = "file", "/" == i || "\\" == i) c = Fa;
					else {
						if (!r || "file" != r.scheme) {
							c = ja;
							continue
						}
						if (i == qi) e.host = r.host, e.path = r.path.slice(), e.query = r.query;
						else if ("?" == i) e.host = r.host, e.path = r.path.slice(), e.query = "", c = Ha;
						else {
							if ("#" != i) {
								Sa(o.slice(l).join("")) || (e.host = r.host, e.path = r.path.slice(), Ia(e)), c = ja;
								continue
							}
							e.host = r.host, e.path = r.path.slice(), e.query = r.query, e.fragment = "", c = Ka
						}
					}
					break;
				case Fa:
					if ("/" == i || "\\" == i) {
						c = xa;
						break
					}
					r && "file" == r.scheme && !Sa(o.slice(l).join("")) && (ya(r.path[0], 1) ? e.path.push(r.path[0]) : e.host = r.host), c = ja;
					continue;
				case xa:
					if (i == qi || "/" == i || "\\" == i || "?" == i || "#" == i) {
						if (!n && ya(p)) c = ja;
						else if ("" == p) {
							if (e.host = "", n) return;
							c = qa
						} else {
							if (s = sa(e, p)) return s;
							if ("localhost" == e.host && (e.host = ""), n) return;
							p = "", c = qa
						}
						continue
					}
					p += i;
					break;
				case qa:
					if (_a(e)) {
						if (c = ja, "/" != i && "\\" != i) continue
					} else if (n || "?" != i) if (n || "#" != i) {
						if (i != qi && (c = ja, "/" != i)) continue
					} else e.fragment = "", c = Ka;
					else e.query = "", c = Ha;
					break;
				case ja:
					if (i == qi || "/" == i || "\\" == i && _a(e) || !n && ("?" == i || "#" == i)) {
						if (".." === (u = (u = p).toLowerCase()) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (Ia(e), "/" == i || "\\" == i && _a(e) || e.path.push("")) : Ta(p) ? "/" == i || "\\" == i && _a(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && ya(p) && (e.host && (e.host = ""), p = p.charAt(0) + ":"), e.path.push(p)), p = "", "file" == e.scheme && (i == qi || "?" == i || "#" == i)) for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
						"?" == i ? (e.query = "", c = Ha) : "#" == i && (e.fragment = "", c = Ka)
					} else p += da(i, ha);
					break;
				case Ba:
					"?" == i ? (e.query = "", c = Ha) : "#" == i ? (e.fragment = "", c = Ka) : i != qi && (e.path[0] += da(i, pa));
					break;
				case Ha:
					n || "#" != i ? i != qi && ("'" == i && _a(e) ? e.query += "%27" : e.query += "#" == i ? "%23" : da(i, pa)) : (e.fragment = "", c = Ka);
					break;
				case Ka:
					i != qi && (e.fragment += da(i, fa))
				}
				l++
			}
		},
		Va = function(e) {
			var t, n, r = Ur(this, Va, "URL"),
				o = arguments.length > 1 ? arguments[1] : void 0,
				i = String(e),
				a = Vi(r, {
					type: "URL"
				});
			if (void 0 !== o) if (o instanceof Va) t = zi(o);
			else if (n = Ya(t = {}, String(o))) throw TypeError(n);
			if (n = Ya(a, i, null, t)) throw TypeError(n);
			var s = a.searchParams = new Ki,
				u = Yi(s);
			u.updateSearchParams(a.query), u.updateURL = function() {
				a.query = String(s) || null
			}, c || (r.href = Wa.call(r), r.origin = Xa.call(r), r.protocol = Ja.call(r), r.username = Qa.call(r), r.password = $a.call(r), r.host = Za.call(r), r.hostname = es.call(r), r.port = ts.call(r), r.pathname = ns.call(r), r.search = rs.call(r), r.searchParams = os.call(r), r.hash = is.call(r))
		},
		za = Va.prototype,
		Wa = function() {
			var e = zi(this),
				t = e.scheme,
				n = e.username,
				r = e.password,
				o = e.host,
				i = e.port,
				a = e.path,
				s = e.query,
				u = e.fragment,
				c = t + ":";
			return null !== o ? (c += "//", va(e) && (c += n + (r ? ":" + r : "") + "@"), c += la(o), null !== i && (c += ":" + i)) : "file" == t && (c += "//"), c += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (c += "?" + s), null !== u && (c += "#" + u), c
		},
		Xa = function() {
			var e = zi(this),
				t = e.scheme,
				n = e.port;
			if ("blob" == t) try {
				return new URL(t.path[0]).origin
			} catch (Ug) {
				return "null"
			}
			return "file" != t && _a(e) ? t + "://" + la(e.host) + (null !== n ? ":" + n : "") : "null"
		},
		Ja = function() {
			return zi(this).scheme + ":"
		},
		Qa = function() {
			return zi(this).username
		},
		$a = function() {
			return zi(this).password
		},
		Za = function() {
			var e = zi(this),
				t = e.host,
				n = e.port;
			return null === t ? "" : null === n ? la(t) : la(t) + ":" + n
		},
		es = function() {
			var e = zi(this).host;
			return null === e ? "" : la(e)
		},
		ts = function() {
			var e = zi(this).port;
			return null === e ? "" : String(e)
		},
		ns = function() {
			var e = zi(this),
				t = e.path;
			return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
		},
		rs = function() {
			var e = zi(this).query;
			return e ? "?" + e : ""
		},
		os = function() {
			return zi(this).searchParams
		},
		is = function() {
			var e = zi(this).fragment;
			return e ? "#" + e : ""
		},
		as = function(e, t) {
			return {
				get: e,
				set: t,
				configurable: 1,
				enumerable: 1
			}
		};
	if (c && lt(za, {
		href: as(Wa, function(e) {
			var t = zi(this),
				n = String(e),
				r = Ya(t, n);
			if (r) throw TypeError(r);
			Yi(t.searchParams).updateSearchParams(t.query)
		}),
		origin: as(Xa),
		protocol: as(Ja, function(e) {
			var t = zi(this);
			Ya(t, String(e) + ":", Ca)
		}),
		username: as(Qa, function(e) {
			var t = zi(this),
				n = nt(String(e));
			if (!Ea(t)) {
				t.username = "";
				for (var r = 0; r < n.length; r++) t.username += da(n[r], ga)
			}
		}),
		password: as($a, function(e) {
			var t = zi(this),
				n = nt(String(e));
			if (!Ea(t)) {
				t.password = "";
				for (var r = 0; r < n.length; r++) t.password += da(n[r], ga)
			}
		}),
		host: as(Za, function(e) {
			var t = zi(this);
			t.cannotBeABaseURL || Ya(t, String(e), Ga)
		}),
		hostname: as(es, function(e) {
			var t = zi(this);
			t.cannotBeABaseURL || Ya(t, String(e), ba)
		}),
		port: as(ts, function(e) {
			var t = zi(this);
			Ea(t) || ("" == (e = String(e)) ? t.port = null : Ya(t, e, wa))
		}),
		pathname: as(ns, function(e) {
			var t = zi(this);
			t.cannotBeABaseURL || (t.path = [], Ya(t, e + "", qa))
		}),
		search: as(rs, function(e) {
			var t = zi(this);
			"" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Ya(t, e, Ha)), Yi(t.searchParams).updateSearchParams(t.query)
		}),
		searchParams: as(os),
		hash: as(is, function(e) {
			var t = zi(this);
			"" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Ya(t, e, Ka)) : t.fragment = null
		})
	}), $(za, "toJSON", function() {
		return Wa.call(this)
	}, {
		enumerable: 1
	}), $(za, "toString", function() {
		return Wa.call(this)
	}, {
		enumerable: 1
	}), Hi) {
		var ss = Hi.createObjectURL,
			us = Hi.revokeObjectURL;
		ss && $(Va, "createObjectURL", function(e) {
			return ss.apply(Hi, arguments)
		}), us && $(Va, "revokeObjectURL", function(e) {
			return us.apply(Hi, arguments)
		})
	}
	Rt(Va, "URL"), Oe({
		global: 1,
		forced: !ci,
		sham: !c
	}, {
		URL: Va
	});
	var cs = [].join,
		ls = _ != Object,
		ps = Be("join", ",");
	Oe({
		target: "Array",
		proto: 1,
		forced: ls || ps
	}, {
		join: function(e) {
			return cs.call(E(this), void 0 === e ? "," : e)
		}
	});
	var fs = {
		NO_SDKAPPID: 2e3,
		NO_ACCOUNT_TYPE: 2001,
		NO_IDENTIFIER: 2002,
		NO_USERSIG: 2003,
		NO_SDK_INSTANCE: 2004,
		REQ_GET_ACCESS_LAYER_FAILED: 2020,
		REQ_LOGIN_FAILED: 2021,
		NO_TINYID: 2022,
		NO_A2KEY: 2023,
		MESSAGE_SEND_FAIL: 2100,
		MESSAGE_UNKNOW_ROMA_LIST_END_FLAG_FIELD: 2101,
		MESSAGE_ELEMENT_METHOD_UNDEFINED: 2102,
		MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS: 2103,
		MESSAGE_PARAMETER_MISSING_TO_ACCOUNT: 2104,
		MESSAGE_SEND_NEED_MESSAGE_INSTANCE: 2105,
		MESSAGE_SEND_INVALID_CONVERSATION_TYPE: 2106,
		MESSAGE_RESEND_FILE_UNSUPPORTED: 2107,
		MESSAGE_IMAGE_UPLOAD_FAIL: 2250,
		MESSAGE_IMAGE_SELECT_FILE_FIRST: 2251,
		MESSAGE_IMAGE_TYPES_LIMIT: 2252,
		MESSAGE_IMAGE_SIZE_LIMIT: 2253,
		MESSAGE_FILE_SELECT_FILE_FIRST: 2401,
		MESSAGE_FILE_SIZE_LIMIT: 2402,
		MESSAGE_FILE_URL_IS_EMPTY: 2403,
		MESSAGE_FILE_WECHAT_MINIAPP_NOT_SUPPORT: 2404,
		CONVERSATION_NOT_FOUND: 2500,
		USER_OR_GROUP_NOT_FOUND: 2501,
		CONVERSATION_UN_RECORDED_TYPE: 2502,
		ILLEGAL_GROUP_TYPE: 2600,
		CANNOT_JOIN_PRIVATE: 2601,
		CANNOT_CHANGE_OWNER_IN_AVCHATROOM: 2620,
		CANNOT_CHANGE_OWNER_TO_SELF: 2621,
		CANNOT_DISMISS_PRIVATE: 2622,
		JOIN_GROUP_FAIL: 2660,
		CANNOT_ADD_MEMBER_IN_AVCHATROOM: 2661,
		CANNOT_KICK_MEMBER_IN_AVCHATROOM: 2680,
		NOT_OWNER: 2681,
		CANNOT_SET_MEMBER_ROLE_IN_PRIVATE_AND_AVCHATROOM: 2682,
		INVALID_MEMBER_ROLE: 2683,
		CANNOT_SET_SELF_MEMBER_ROLE: 2684,
		DEL_FRIEND_INVALID_PARAM: 2700,
		GET_PROFILE_INVALID_PARAM: 2720,
		UPDATE_PROFILE_INVALID_PARAM: 2721,
		ADD_BLACKLIST_INVALID_PARAM: 2740,
		DEL_BLACKLIST_INVALID_PARAM: 2741,
		CANNOT_ADD_SELF_TO_BLACKLIST: 2742,
		NETWORK_ERROR: 2800,
		NETWORK_TIMEOUT: 2801,
		NETWORK_BASE_OPTIONS_NO_URL: 2802,
		NETWORK_UNDEFINED_SERVER_NAME: 2803,
		NETWORK_PACKAGE_UNDEFINED: 2804,
		SOCKET_NOT_SUPPORTED: 2850,
		CONVERTOR_IRREGULAR_PARAMS: 2900,
		NOTICE_RUNLOOP_UNEXPECTED_CONDITION: 2901,
		NOTICE_RUNLOOP_OFFSET_LOST: 2902,
		UNCAUGHT_ERROR: 2903,
		SDK_IS_NOT_READY: 2999,
		LONG_POLL_KICK_OUT: 91101
	},
		hs = {
			NO_SDKAPPID: "无 SDKAppID",
			NO_ACCOUNT_TYPE: "无 accountType",
			NO_IDENTIFIER: "无 userID",
			NO_USERSIG: "无 usersig",
			NO_SDK_INSTANCE: "无 SDK 实例",
			REQ_GET_ACCESS_LAYER_FAILED: "获取沙箱请求失败",
			REQ_LOGIN_FAILED: "登录请求失败",
			NO_TINYID: "无tinyid",
			NO_A2KEY: "无a2key",
			MESSAGE_SEND_FAIL: "消息发送失败",
			MESSAGE_UNKNOW_ROMA_LIST_END_FLAG_FIELD: "未知的漫游消息结束字段",
			MESSAGE_ELEMENT_METHOD_UNDEFINED: "消息元素未创建，因为方法未定义",
			MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS: "MessageController.constructor() 需要参数 options",
			MESSAGE_PARAMETER_MISSING_TO_ACCOUNT: "需要 toAccount 参数",
			MESSAGE_SEND_NEED_MESSAGE_INSTANCE: "需要 Message 的实例",
			MESSAGE_SEND_INVALID_CONVERSATION_TYPE: 'Message.conversationType 只能为 "C2C"或"GROUP" ',
			MESSAGE_RESEND_FILE_UNSUPPORTED: "文件类消息不能使用 SDK.resendMessage() 函数重发",
			MESSAGE_IMAGE_UPLOAD_FAIL: "图片上传失败",
			MESSAGE_IMAGE_SELECT_FILE_FIRST: "请先选择一个图片",
			MESSAGE_IMAGE_TYPES_LIMIT: "图片类型受限",
			MESSAGE_IMAGE_SIZE_LIMIT: "图片大小受限",
			MESSAGE_FILE_SELECT_FILE_FIRST: "请先选择一个文件",
			MESSAGE_FILE_SIZE_LIMIT: "文件大小受限 ",
			MESSAGE_FILE_URL_IS_EMPTY: "缺少必要的参数文件 URL",
			MESSAGE_FILE_WECHAT_MINIAPP_NOT_SUPPORT: "微信小程序暂时不支持文件选择功能",
			CONVERSATION_NOT_FOUND: "没有找到相应的会话，请检查传入参数",
			USER_OR_GROUP_NOT_FOUND: "没有找到相应的用户或群主，请检查传入参数",
			CONVERSATION_UN_RECORDED_TYPE: "未记录的会话类型",
			ILLEGAL_GROUP_TYPE: "非法的群类型，请检查传入参数",
			CANNOT_JOIN_PRIVATE: "不能加入 Private 类型的群组",
			CANNOT_CHANGE_OWNER_IN_AVCHATROOM: "AVChatRoom 类型的群组不能转让群主",
			CANNOT_CHANGE_OWNER_TO_SELF: "不能把群主转让给自己",
			CANNOT_DISMISS_PRIVATE: "不能解散 Private 类型的群组",
			JOIN_GROUP_FAIL: "加群失败，请检查传入参数或重试",
			CANNOT_ADD_MEMBER_IN_AVCHATROOM: "AVChatRoom 类型的群不支持邀请群成员",
			CANNOT_KICK_MEMBER_IN_AVCHATROOM: "不能在 AVChatRoom 类型的群组踢人",
			NOT_OWNER: "你不是群主，只有群主才有权限操作",
			CANNOT_SET_MEMBER_ROLE_IN_PRIVATE_AND_AVCHATROOM: "不能在 Private / AVChatRoom 类型的群中设置群成员身份",
			INVALID_MEMBER_ROLE: "不合法的群成员身份，请检查传入参数",
			CANNOT_SET_SELF_MEMBER_ROLE: "不能设置自己的群成员身份，请检查传入参数",
			DEL_FRIEND_INVALID_PARAM: "传入 deleteFriend 接口的参数无效",
			GET_PROFILE_INVALID_PARAM: "传入 getUserProfile 接口的参数无效",
			UPDATE_PROFILE_INVALID_PARAM: "传入 updateMyProfile 接口的参数无效",
			ADD_BLACKLIST_INVALID_PARAM: "传入 addToBlacklist 接口的参数无效",
			DEL_BLACKLIST_INVALID_PARAM: "传入 removeFromBlacklist 接口的参数无效",
			CANNOT_ADD_SELF_TO_BLACKLIST: "不能拉黑自己",
			NETWORK_ERROR: "网络错误",
			NETWORK_TIMEOUT: "请求超时",
			NETWORK_BASE_OPTIONS_NO_URL: "网络层初始化错误，缺少 URL 参数",
			NETWORK_UNDEFINED_SERVER_NAME: "打包错误，未定义的 serverName",
			NETWORK_PACKAGE_UNDEFINED: "未定义的 packageConfig",
			SOCKET_NOT_SUPPORTED: "当前浏览器不支持 WebSocket",
			CONVERTOR_IRREGULAR_PARAMS: "不规范的参数名称",
			NOTICE_RUNLOOP_UNEXPECTED_CONDITION: "意料外的通知条件",
			NOTICE_RUNLOOP_OFFSET_LOST: "_syncOffset 丢失",
			UNCAUGHT_ERROR: "未经明确定义的错误",
			SDK_IS_NOT_READY: "接口调用时机不合理，等待 SDK 处于 ready 状态后再调用（监听 TIM.EVENT.SDK_READY 事件）"
		},
		gs = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this))).code = e.code, n.message = e.message, n.data = e.data || {}, n
			}
			return Gn(t, Fn(Error)), t
		}(),
		ds = N.f,
		ms = u(function() {
			ds(1)
		});
	Oe({
		target: "Object",
		stat: 1,
		forced: !c || ms,
		sham: !c
	}, {
		getOwnPropertyDescriptor: function(e, t) {
			return ds(E(e), t)
		}
	});
	var _s, vs, Es = RegExp.prototype.exec,
		ys = String.prototype.replace,
		Ss = Es,
		Is = (_s = /a/, vs = /b*/g, Es.call(_s, "a"), Es.call(vs, "a"), 0 !== _s.lastIndex || 0 !== vs.lastIndex),
		Ts = void 0 !== /()??/.exec("")[1];
	(Is || Ts) && (Ss = function(e) {
		var t, n, r, o, i = this;
		return Ts && (n = new RegExp("^" + i.source + "$(?!\\s)", ir.call(i))), Is && (t = i.lastIndex), r = Es.call(i, e), Is && r && (i.lastIndex = i.global ? r.index + r[0].length : t), Ts && r && r.length > 1 && ys.call(r[0], n, function() {
			for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
		}), r
	});
	var Cs = Ss;
	Oe({
		target: "RegExp",
		proto: 1,
		forced: /./.exec !== Cs
	}, {
		exec: Cs
	});
	var Ms = we("species"),
		As = !u(function() {
			var e = /./;
			return e.exec = function() {
				var e = [];
				return e.groups = {
					a: "7"
				}, e
			}, "7" !== "".replace(e, "$<a>")
		}),
		Ds = !u(function() {
			var e = /(?:)/,
				t = e.exec;
			e.exec = function() {
				return t.apply(this, arguments)
			};
			var n = "ab".split(e);
			return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
		}),
		Os = function(e, t, n, r) {
			var o = we(e),
				i = !u(function() {
					var t = {};
					return t[o] = function() {
						return 7
					}, 7 != "" [e](t)
				}),
				a = i && !u(function() {
					var t = 0,
						n = /a/;
					return n.exec = function() {
						return t = 1, null
					}, "split" === e && (n.constructor = {}, n.constructor[Ms] = function() {
						return n
					}), n[o](""), !t
				});
			if (!i || !a || "replace" === e && !As || "split" === e && !Ds) {
				var s = /./ [o],
					c = n(o, "" [e], function(e, t, n, r, o) {
						return t.exec === Cs ? i && !o ? {
							done: 1,
							value: s.call(t, n, r)
						} : {
							done: 1,
							value: e.call(n, t, r)
						} : {
							done: 0
						}
					}),
					l = c[0],
					p = c[1];
				$(String.prototype, e, l), $(RegExp.prototype, o, 2 == t ?
				function(e, t) {
					return p.call(e, this, t)
				} : function(e) {
					return p.call(e, this)
				}), r && k(RegExp.prototype[o], "sham", 1)
			}
		},
		Ns = St.charAt,
		Ls = function(e, t, n) {
			return t + (n ? Ns(e, t).length : 1)
		},
		Rs = function(e, t) {
			var n = e.exec;
			if ("function" == typeof n) {
				var r = n.call(e, t);
				if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
				return r
			}
			if ("RegExp" !== d(e)) throw TypeError("RegExp#exec called on incompatible receiver");
			return Cs.call(e, t)
		},
		Ps = Math.max,
		ks = Math.min,
		Gs = Math.floor,
		bs = /\$([$&'`]|\d\d?|<[^>]*>)/g,
		ws = /\$([$&'`]|\d\d?)/g;
	Os("replace", 2, function(e, t, n) {
		return [function(n, r) {
			var o = v(this),
				i = null == n ? void 0 : n[e];
			return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r)
		}, function(e, o) {
			var i = n(t, e, this, o);
			if (i.done) return i.value;
			var a = L(e),
				s = String(this),
				u = "function" == typeof o;
			u || (o = String(o));
			var c = a.global;
			if (c) {
				var l = a.unicode;
				a.lastIndex = 0
			}
			for (var p = [];;) {
				var f = Rs(a, s);
				if (null === f) break;
				if (p.push(f), !c) break;
				"" === String(f[0]) && (a.lastIndex = Ls(s, ae(a.lastIndex), l))
			}
			for (var h, g = "", d = 0, m = 0; m < p.length; m++) {
				f = p[m];
				for (var _ = String(f[0]), v = Ps(ks(oe(f.index), s.length), 0), E = [], y = 1; y < f.length; y++) E.push(void 0 === (h = f[y]) ? h : String(h));
				var S = f.groups;
				if (u) {
					var I = [_].concat(E, v, s);
					void 0 !== S && I.push(S);
					var T = String(o.apply(void 0, I))
				} else T = r(_, s, v, E, S, o);
				v >= d && (g += s.slice(d, v) + T, d = v + _.length)
			}
			return g + s.slice(d)
		}];

		function r(e, n, r, o, i, a) {
			var s = r + e.length,
				u = o.length,
				c = ws;
			return void 0 !== i && (i = Re(i), c = bs), t.call(a, c, function(t, a) {
				var c;
				switch (a.charAt(0)) {
				case "$":
					return "$";
				case "&":
					return e;
				case "`":
					return n.slice(0, r);
				case "'":
					return n.slice(s);
				case "<":
					c = i[a.slice(1, -1)];
					break;
				default:
					var l = +a;
					if (0 === l) return t;
					if (l > u) {
						var p = Gs(l / 10);
						return 0 === p ? t : p <= u ? void 0 === o[p - 1] ? a.charAt(1) : o[p - 1] + a.charAt(1) : t
					}
					c = o[l - 1]
				}
				return void 0 === c ? "" : c
			})
		}
	});
	var Us = "1.7.3",
		Fs = "537048168",
		xs = "10",
		qs = "protobuf",
		js = "json",
		Bs = {
			HOST: {
				TYPE: 3,
				ACCESS_LAYER_TYPES: {
					SANDBOX: 1,
					TEST: 2,
					PRODUCTION: 3
				},
				CURRENT: {
					COMMON: "https://webim.tim.qq.com",
					PIC: "https://pic.tim.qq.com",
					COS: "https://yun.tim.qq.com"
				},
				PRODUCTION: {
					COMMON: "https://webim.tim.qq.com",
					PIC: "https://pic.tim.qq.com",
					COS: "https://yun.tim.qq.com"
				},
				SANDBOX: {
					COMMON: "https://events.tim.qq.com",
					PIC: "https://pic.tim.qq.com",
					COS: "https://yun.tim.qq.com"
				},
				TEST: {
					COMMON: "https://test.tim.qq.com",
					PIC: "https://pic.tim.qq.com",
					COS: "https://yun.tim.qq.com"
				},
				setCurrent: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
					switch (e) {
					case this.ACCESS_LAYER_TYPES.SANDBOX:
						this.CURRENT = this.SANDBOX, this.TYPE = this.ACCESS_LAYER_TYPES.SANDBOX;
						break;
					case this.ACCESS_LAYER_TYPES.TEST:
						this.CURRENT = this.TEST, this.TYPE = this.ACCESS_LAYER_TYPES.TEST;
						break;
					default:
						this.CURRENT = this.PRODUCTION, this.TYPE = this.ACCESS_LAYER_TYPES.PRODUCTION
					}
				}
			},
			NAME: {
				OPEN_IM: "openim",
				GROUP: "group_open_http_svc",
				FRIEND: "sns",
				PROFILE: "profile",
				RECENT_CONTACT: "recentcontact",
				PIC: "openpic",
				BIG_GROUP_NO_AUTH: "group_open_http_noauth_svc",
				BIG_GROUP_LONG_POLLING_NO_AUTH: "group_open_long_polling_http_noauth_svc",
				IM_OPEN_STAT: "imopenstat",
				WEB_IM: "webim",
				IM_COS_SIGN: "im_cos_sign_svr"
			},
			CMD: {
				ACCESS_LAYER: "accesslayer",
				LOGIN: "login",
				LOGOUT_LONG_POLL: "longpollinglogout",
				LOGOUT_ALL: "logout",
				PORTRAIT_GET: "portrait_get",
				PORTRAIT_SET: "portrait_set",
				GET_LONG_POLL_ID: "getlongpollingid",
				LONG_POLL: "longpolling",
				AVCHATROOM_LONG_POLL: "get_msg",
				FRIEND_ADD: "friend_add",
				FRIEND_GET_ALL: "friend_get_all",
				FRIEND_DELETE: "friend_delete",
				RESPONSE_PENDENCY: "friend_response",
				GET_PENDENCY: "pendency_get",
				DELETE_PENDENCY: "pendency_delete",
				GET_BLACKLIST: "black_list_get",
				ADD_BLACKLIST: "black_list_add",
				DELETE_BLACKLIST: "black_list_delete",
				CREATE_GROUP: "create_group",
				GET_JOINED_GROUPS: "get_joined_group_list",
				SEND_MESSAGE: "sendmsg",
				SEND_GROUP_MESSAGE: "send_group_msg",
				GET_GROUP_INFO: "get_group_info",
				GET_GROUP_MEMBER_INFO: "get_group_member_info",
				QUIT_GROUP: "quit_group",
				CHANGE_GROUP_OWNER: "change_group_owner",
				DESTROY_GROUP: "destroy_group",
				ADD_GROUP_MEMBER: "add_group_member",
				DELETE_GROUP_MEMBER: "delete_group_member",
				SEARCH_GROUP_BY_ID: "get_group_public_info",
				APPLY_JOIN_GROUP: "apply_join_group",
				HANDLE_APPLY_JOIN_GROUP: "handle_apply_join_group",
				MODIFY_GROUP_INFO: "modify_group_base_info",
				MODIFY_GROUP_MEMBER_INFO: "modify_group_member_info",
				DELETE_GROUP_SYSTEM_MESSAGE: "deletemsg",
				GET_CONVERSATION_LIST: "get",
				DELETE_CONVERSATION: "delete",
				GET_MESSAGES: "getmsg",
				GET_C2C_ROAM_MESSAGES: "getroammsg",
				GET_GROUP_ROAM_MESSAGES: "group_msg_get",
				SET_C2C_MESSAGE_READ: "msgreaded",
				SET_GROUP_MESSAGE_READ: "msg_read_report",
				FILE_READ_AND_WRITE_AUTHKEY: "authkey",
				FILE_UPLOAD: "pic_up",
				COS_SIGN: "cos"
			},
			CHANNEL: {
				SOCKET: 1,
				XHR: 2,
				AUTO: 0
			},
			NAME_VERSION: {
				openim: "v4",
				group_open_http_svc: "v4",
				sns: "v4",
				profile: "v4",
				recentcontact: "v4",
				openpic: "v4",
				group_open_http_noauth_svc: "v1",
				group_open_long_polling_http_noauth_svc: "v1",
				imopenstat: "v4",
				im_cos_sign_svr: "v4",
				webim: "v3"
			}
		};
	Bs.HOST.setCurrent(Bs.HOST.ACCESS_LAYER_TYPES.PRODUCTION);
	var Hs = pe.includes;
	Oe({
		target: "Array",
		proto: 1
	}, {
		includes: function(e) {
			return Hs(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), Ar("includes");
	var Ks = we("species"),
		Ys = [].slice,
		Vs = Math.max;
	Oe({
		target: "Array",
		proto: 1,
		forced: !In("slice")
	}, {
		slice: function(e, t) {
			var n, r, o, i = E(this),
				a = ae(i.length),
				s = ce(e, a),
				u = ce(void 0 === t ? a : t, a);
			if (Pe(i) && ("function" != typeof(n = i.constructor) || n !== Array && !Pe(n.prototype) ? y(n) && null === (n = n[Ks]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return Ys.call(i, s, u);
			for (r = new(void 0 === n ? Array : n)(Vs(u - s, 0)), o = 0; s < u; s++, o++) s in i && Je(r, o, i[s]);
			return r.length = o, r
		}
	});
	var zs = we("match"),
		Ws = function(e) {
			var t;
			return y(e) && (void 0 !== (t = e[zs]) ? !! t : "RegExp" == d(e))
		},
		Xs = function(e) {
			if (Ws(e)) throw TypeError("The method doesn't accept regular expressions");
			return e
		},
		Js = we("match");
	Oe({
		target: "String",
		proto: 1,
		forced: !
		function(e) {
			var t = /./;
			try {
				"/./" [e](t)
			} catch (n) {
				try {
					return t[Js] = 0, "/./" [e](t)
				} catch (r) {}
			}
			return 0
		}("includes")
	}, {
		includes: function(e) {
			return !!~String(v(this)).indexOf(Xs(e), arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var Qs = {
		request: {
			toAccount: "To_Account",
			fromAccount: "From_Account",
			to: "To_Account",
			from: "From_Account",
			groupID: "GroupId",
			avatar: "FaceUrl"
		},
		response: {
			GroupId: "groupID",
			Member_Account: "userID",
			MsgList: "messageList",
			SyncFlag: "syncFlag",
			To_Account: "to",
			From_Account: "from",
			MsgSeq: "sequence",
			MsgRandom: "random",
			MsgTimeStamp: "time",
			MsgContent: "content",
			MsgBody: "elements",
			MsgType: "type",
			MsgShow: "messageShow",
			NextMsgSeq: "nextMessageSeq",
			FaceUrl: "avatar",
			ProfileDataMod: "profileModify",
			Profile_Account: "userID",
			ValueBytes: "value",
			ValueNum: "value",
			NoticeSeq: "noticeSequence",
			NotifySeq: "notifySequence",
			Operator_Account: "operatorID",
			OpType: "operationType",
			ReportType: "operationType",
			UserId: "userID",
			User_Account: "userID",
			List_Account: "userIDList",
			MsgOperatorMemberExtraInfo: "operatorInfo",
			MsgMemberExtraInfo: "memberInfoList",
			ImageUrl: "avatar",
			NickName: "nick",
			MsgGroupNewInfo: "newGroupProfile",
			Owner_Account: "ownerID",
			GroupName: "name",
			GroupFaceUrl: "avatar",
			GroupIntroduction: "introduction",
			GroupNotification: "notification",
			GroupApplyJoinOption: "joinOption",
			MsgKey: "messageKey",
			GroupInfo: "groupProfile",
			Desc: "description",
			Ext: "extension"
		},
		ignoreKeyWord: ["C2C", "ID", "USP"]
	},
		$s = {
			CONTEXT_UPDATED: "_contextWasUpdated",
			CONTEXT_RESET: "_contextWasReset",
			CONTEXT_A2KEY_AND_TINYID_UPDATED: "_a2KeyAndTinyIDUpdated",
			RUNNING_STATE_CHANGE: "_runningStateChange",
			SYNC_MESSAGE_C2C_START: "_noticeSynchronizationStart",
			SYNC_MESSAGE_C2C_PROCESSING: "_noticeIsSynchronizing",
			SYNC_MESSAGE_C2C_FINISHED: "_noticeIsSynchronized",
			SYNC_MESSAGE_GROUP_SYSTEM_NOTICE_FINISHED: "_groupSystemNoticeSyncFinished",
			MESSAGE_SENDING: "_sendingMessage",
			MESSAGE_C2C_SEND_SUCCESS: "_sendC2CMessageSuccess",
			MESSAGE_C2C_SEND_FAIL: "_sendC2CMessageFail",
			MESSAGE_C2C_INSTANT_RECEIVED: "_receiveInstantMessage",
			MESSAGE_C2C_RECEIVE_ROAMING_SUCCESS: "_receiveC2CRoamingMessageSuccess",
			MESSAGE_C2C_RECEIVE_ROAMING_FAIL: "_receiveC2CRoamingMessageFail",
			MESSAGE_GROUP_SEND_SUCCESS: "_sendGroupMessageSuccess",
			MESSAGE_GROUP_SEND_FAIL: "_sendGroupMessageFail",
			MESSAGE_GROUP_RECEIVE_ROAMING_SUCCESS: "_receiveGroupRoamingMessageSuccess",
			MESSAGE_GROUP_RECEIVE_ROAMING_FAIL: "_receiveGroupRoamingMessageFail",
			MESSAGE_GROUP_INSTANT_RECEIVED: "_receiveGroupInstantMessage",
			MESSAGE_GROUP_SYSTEM_NOTICE_RECEIVED: "_receveGroupSystemNotice",
			NOTICE_LONGPOLL_GETID_SUCCESS: "_getLongPollIDSuccess",
			NOTICE_LONGPOLL_GETID_FAIL: "_getLongPollIDFail",
			NOTICE_LONGPOLL_START: "_longPollStart",
			NOTICE_LONGPOLL_IN_POLLING: "_longPollInPolling",
			NOTICE_LONGPOLL_REQUEST_ARRIVED: "_longPollInArrived",
			NOTICE_LONGPOLL_REQUEST_NOT_ARRIVED: "_longPollInNotArrived",
			NOTICE_LONGPOLL_JITTER: "_longPollJitter",
			NOTICE_LONGPOLL_SOON_RECONNECT: "_longPollSoonReconnect",
			NOTICE_LONGPOLL_LONG_RECONNECT: "_longPollLongReconnect",
			NOTICE_LONGPOLL_DISCONNECT: "_longpollChannelDisconnect",
			NOTICE_LONGPOLL_STOPPED: "_longPollStopped",
			NOTICE_LONGPOLL_KICKED_OUT: "_longPollKickedOut",
			NOTICE_LONGPOLL_MUTIPLE_DEVICE_KICKED_OUT: "_longPollMitipuleDeviceKickedOut",
			NOTICE_LONGPOLL_NEW_C2C_NOTICE: "_longPollGetNewC2CNotice",
			NOTICE_LONGPOLL_NEW_C2C_MESSAGES: "_longPollGetNewC2CMessages",
			NOTICE_LONGPOLL_NEW_GROUP_MESSAGES: "_longPollGetNewGroupMessages",
			NOTICE_LONGPOLL_NEW_GROUP_TIPS: "_longPollGetNewGroupTips",
			NOTICE_LONGPOLL_NEW_GROUP_NOTICE: "_longPollGetNewGroupNotice",
			NOTICE_LONGPOLL_NEW_FRIEND_MESSAGES: "_longPollGetNewFriendMessages",
			NOTICE_LONGPOLL_SEQUENCE_UPDATE: "_longPollNoticeSequenceUpdate",
			NOTICE_LONGPOLL_PROFILE_MODIFIED: "_longPollProfileModified",
			APPLY_ADD_FRIEND_SUCCESS: "_addFriendApplySendSucess",
			APPLY_ADD_FRIEND_FAIL: "_addFriendApplySendFail",
			APPLY_GET_PENDENCY_SUCCESS: "_applyGetPendenciesSucess",
			APPLY_GET_PENDENCY_FAIL: "_applyGetPendenciesFail",
			APPLY_DELETE_SUCCESS: "_applyDeletedSucess",
			APPLY_DELETE_FAIL: "_applyDeletedFail",
			GROUP_CREATE_SUCCESS: "_createGroupSuccess",
			GROUP_CREATE_FAIL: "_createGroupFail",
			GROUP_LIST_UPDATED: "_onGroupListUpdated",
			SIGN_LOGIN_CHANGE: "_loginStatusChange",
			SIGN_LOGIN: "_login",
			SIGN_LOGIN_SUCCESS: "_loginSuccess",
			SIGN_LOGIN_FAIL: "_loginFail",
			SIGN_LOGININFO_UPDATED: "_signLoginInfoUpdated",
			SIGN_LOGOUT_EXECUTING: "_signLogoutExcuting",
			SIGN_LOGOUT_SUCCESS: "_logoutSuccess",
			SIGN_GET_ACCESS_LAYER_CHANGE: "_getAccessLayerStatusChange",
			SIGN_GET_ACCESS_LAYER_SUCCESS: "_getAccessLayerSuccess",
			SIGN_GET_ACCESS_LAYER_FAIL: "_getAccessLayerFail",
			ERROR_DETECTED: "_errorHasBeenDetected",
			CONVERSATION_LIST_UPDATED: "_onConversationListUpdated",
			CONVERSATION_LIST_PROFILE_UPDATED: "_onConversationListProfileUpdated",
			CONVERSATION_DELETED: "_conversationDeleted",
			PROFILE_UPDATED: "onProfileUpdated",
			FRIEND_GET_SUCCESS: "_getFriendsSuccess",
			FRIEND_GET_FAIL: "_getFriendsFail",
			FRIEND_DELETE_SUCCESS: "_deleteFriendSuccess",
			FRIEND_DELETE_FAIL: "_deleteFriendFail",
			BLACKLIST_ADD_SUCCESS: "_addBlacklistSuccess",
			BLACKLIST_ADD_FAIL: "_addBlacklistFail",
			BLACKLIST_GET_SUCCESS: "_getBlacklistSuccess",
			BLACKLIST_GET_FAIL: "_getBlacklistFail",
			AVCHATROOM_OPTIONS_UPDATED: "_AVChatRoomOptionsUpdated",
			AVCHATROOM_JOIN_SUCCESS: "joinAVChatRoomSuccess",
			SDK_MEMORY_STATUS_UPDATE: "_sdkMemoryStatusUpdate",
			SDK_READY: "_sdkStateReady"
		},
		Zs = me.f,
		eu = {}.toString,
		tu = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
		nu = {
			f: function(e) {
				return tu && "[object Window]" == eu.call(e) ?
				function(e) {
					try {
						return Zs(e)
					} catch (Ug) {
						return tu.slice()
					}
				}(e) : Zs(E(e))
			}
		},
		ru = {
			f: we
		},
		ou = P.f,
		iu = function(e) {
			var t = Z.Symbol || (Z.Symbol = {});
			T(t, e) || ou(t, e, {
				value: ru.f(e)
			})
		},
		au = je.forEach,
		su = H("hidden"),
		uu = we("toPrimitive"),
		cu = Q.set,
		lu = Q.getterFor("Symbol"),
		pu = Object.prototype,
		fu = s.Symbol,
		hu = s.JSON,
		gu = hu && hu.stringify,
		du = N.f,
		mu = P.f,
		_u = nu.f,
		vu = f.f,
		Eu = b("symbols"),
		yu = b("op-symbols"),
		Su = b("string-to-symbol-registry"),
		Iu = b("symbol-to-string-registry"),
		Tu = b("wks"),
		Cu = s.QObject,
		Mu = !Cu || !Cu.prototype || !Cu.prototype.findChild,
		Au = c && u(function() {
			return 7 != dt(mu({}, "a", {
				get: function() {
					return mu(this, "a", {
						value: 7
					}).a
				}
			})).a
		}) ?
	function(e, t, n) {
		var r = du(pu, t);
		r && delete pu[t], mu(e, t, n), r && e !== pu && mu(pu, t, r)
	} : mu, Du = function(e, t) {
		var n = Eu[e] = dt(fu.prototype);
		return cu(n, {
			type: "Symbol",
			tag: e,
			description: t
		}), c || (n.description = t), n
	}, Ou = ke && "symbol" == typeof fu.iterator ?
	function(e) {
		return "symbol" == typeof e
	} : function(e) {
		return Object(e) instanceof fu
	}, Nu = function(e, t, n) {
		e === pu && Nu(yu, t, n), L(e);
		var r = S(t, 1);
		return L(n), T(Eu, r) ? (n.enumerable ? (T(e, su) && e[su][r] && (e[su][r] = 0), n = dt(n, {
			enumerable: h(0, 0)
		})) : (T(e, su) || mu(e, su, h(1, {})), e[su][r] = 1), Au(e, r, n)) : mu(e, r, n)
	}, Lu = function(e, t) {
		L(e);
		var n = E(t),
			r = ct(n).concat(Gu(n));
		return au(r, function(t) {
			c && !Ru.call(n, t) || Nu(e, t, n[t])
		}), e
	}, Ru = function(e) {
		var t = S(e, 1),
			n = vu.call(this, t);
		return this === pu && T(Eu, t) && !T(yu, t) ? 0 : n || !T(this, t) || !T(Eu, t) || T(this, su) && this[su][t] ? n : 1
	}, Pu = function(e, t) {
		var n = E(e),
			r = S(t, 1);
		if (n !== pu || !T(Eu, r) || T(yu, r)) {
			var o = du(n, r);
			return !o || !T(Eu, r) || T(n, su) && n[su][r] || (o.enumerable = 1), o
		}
	}, ku = function(e) {
		var t = _u(E(e)),
			n = [];
		return au(t, function(e) {
			T(Eu, e) || T(K, e) || n.push(e)
		}), n
	}, Gu = function(e) {
		var t = e === pu,
			n = _u(t ? yu : E(e)),
			r = [];
		return au(n, function(e) {
			!T(Eu, e) || t && !T(pu, e) || r.push(Eu[e])
		}), r
	};
	ke || ($((fu = function() {
		if (this instanceof fu) throw TypeError("Symbol is not a constructor");
		var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
			t = j(e),
			n = function(e) {
				this === pu && n.call(yu, e), T(this, su) && T(this[su], t) && (this[su][t] = 0), Au(this, t, h(1, e))
			};
		return c && Mu && Au(pu, t, {
			configurable: 1,
			set: n
		}), Du(t, e)
	}).prototype, "toString", function() {
		return lu(this).tag
	}), f.f = Ru, P.f = Nu, N.f = Pu, me.f = nu.f = ku, _e.f = Gu, c && (mu(fu.prototype, "description", {
		configurable: 1,
		get: function() {
			return lu(this).description
		}
	}), $(pu, "propertyIsEnumerable", Ru, {
		unsafe: 1
	})), ru.f = function(e) {
		return Du(we(e), e)
	}), Oe({
		global: 1,
		wrap: 1,
		forced: !ke,
		sham: !ke
	}, {
		Symbol: fu
	}), au(ct(Tu), function(e) {
		iu(e)
	}), Oe({
		target: "Symbol",
		stat: 1,
		forced: !ke
	}, {
		for :function(e) {
			var t = String(e);
			if (T(Su, t)) return Su[t];
			var n = fu(t);
			return Su[t] = n, Iu[n] = t, n
		}, keyFor: function(e) {
			if (!Ou(e)) throw TypeError(e + " is not a symbol");
			if (T(Iu, e)) return Iu[e]
		},
		useSetter: function() {
			Mu = 1
		},
		useSimple: function() {
			Mu = 0
		}
	}), Oe({
		target: "Object",
		stat: 1,
		forced: !ke,
		sham: !c
	}, {
		create: function(e, t) {
			return void 0 === t ? dt(e) : Lu(dt(e), t)
		},
		defineProperty: Nu,
		defineProperties: Lu,
		getOwnPropertyDescriptor: Pu
	}), Oe({
		target: "Object",
		stat: 1,
		forced: !ke
	}, {
		getOwnPropertyNames: ku,
		getOwnPropertySymbols: Gu
	}), Oe({
		target: "Object",
		stat: 1,
		forced: u(function() {
			_e.f(1)
		})
	}, {
		getOwnPropertySymbols: function(e) {
			return _e.f(Re(e))
		}
	}), hu && Oe({
		target: "JSON",
		stat: 1,
		forced: !ke || u(function() {
			var e = fu();
			return "[null]" != gu([e]) || "{}" != gu({
				a: e
			}) || "{}" != gu(Object(e))
		})
	}, {
		stringify: function(e) {
			for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
			if (n = t = r[1], (y(t) || void 0 !== e) && !Ou(e)) return Pe(t) || (t = function(e, t) {
				if ("function" == typeof n && (t = n.call(this, e, t)), !Ou(t)) return t
			}), r[1] = t, gu.apply(hu, r)
		}
	}), fu.prototype[uu] || k(fu.prototype, uu, fu.prototype.valueOf), Rt(fu, "Symbol"), K[su] = 1;
	var bu = P.f,
		wu = s.Symbol;
	if (c && "function" == typeof wu && (!("description" in wu.prototype) || void 0 !== wu().description)) {
		var Uu = {},
			Fu = function() {
				var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
					t = this instanceof Fu ? new wu(e) : void 0 === e ? wu() : wu(e);
				return "" === e && (Uu[t] = 1), t
			};
		Ee(Fu, wu);
		var xu = Fu.prototype = wu.prototype;
		xu.constructor = Fu;
		var qu = xu.toString,
			ju = "Symbol(test)" == String(wu("test")),
			Bu = /^Symbol\((.*)\)[^)]+$/;
		bu(xu, "description", {
			configurable: 1,
			get: function() {
				var e = y(this) ? this.valueOf() : this,
					t = qu.call(e);
				if (T(Uu, e)) return "";
				var n = ju ? t.slice(7, -1) : t.replace(Bu, "$1");
				return "" === n ? void 0 : n
			}
		}), Oe({
			global: 1,
			forced: 1
		}, {
			Symbol: Fu
		})
	}
	iu("iterator");
	var Hu = pe.indexOf,
		Ku = [].indexOf,
		Yu = !! Ku && 1 / [1].indexOf(1, -0) < 0,
		Vu = Be("indexOf");
	Oe({
		target: "Array",
		proto: 1,
		forced: Yu || Vu
	}, {
		indexOf: function(e) {
			return Yu ? Ku.apply(this, arguments) || 0 : Hu(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), Oe({
		target: "Date",
		stat: 1
	}, {
		now: function() {
			return (new Date).getTime()
		}
	});
	var zu = function(e, t, n) {
			var r, o;
			return bt && "function" == typeof(r = t.constructor) && r !== n && y(o = r.prototype) && o !== n.prototype && bt(e, o), e
		},
		Wu = "\t\n\v\f\r                　\u2028\u2029\ufeff",
		Xu = "[" + Wu + "]",
		Ju = RegExp("^" + Xu + Xu + "*"),
		Qu = RegExp(Xu + Xu + "*$"),
		$u = function(e) {
			return function(t) {
				var n = String(v(t));
				return 1 & e && (n = n.replace(Ju, "")), 2 & e && (n = n.replace(Qu, "")), n
			}
		},
		Zu = {
			start: $u(1),
			end: $u(2),
			trim: $u(3)
		},
		ec = me.f,
		tc = N.f,
		nc = P.f,
		rc = Zu.trim,
		oc = s.Number,
		ic = oc.prototype,
		ac = "Number" == d(dt(ic)),
		sc = function(e) {
			var t, n, r, o, i, a, s, u, c = S(e, 0);
			if ("string" == typeof c && c.length > 2) if (43 === (t = (c = rc(c)).charCodeAt(0)) || 45 === t) {
				if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN
			} else if (48 === t) {
				switch (c.charCodeAt(1)) {
				case 66:
				case 98:
					r = 2, o = 49;
					break;
				case 79:
				case 111:
					r = 8, o = 55;
					break;
				default:
					return +c
				}
				for (a = (i = c.slice(2)).length, s = 0; s < a; s++) if ((u = i.charCodeAt(s)) < 48 || u > o) return NaN;
				return parseInt(i, r)
			}
			return +c
		};
	if (Ae("Number", !oc(" 0o1") || !oc("0b1") || oc("+0x1"))) {
		for (var uc, cc = function(e) {
				var t = arguments.length < 1 ? 0 : e,
					n = this;
				return n instanceof cc && (ac ? u(function() {
					ic.valueOf.call(n)
				}) : "Number" != d(n)) ? zu(new oc(sc(t)), n, cc) : sc(t)
			}, lc = c ? ec(oc) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), pc = 0; lc.length > pc; pc++) T(oc, uc = lc[pc]) && !T(cc, uc) && nc(cc, uc, tc(oc, uc));
		cc.prototype = ic, ic.constructor = cc, $(s, "Number", cc)
	}
	var fc = nu.f,
		hc = u(function() {
			return !Object.getOwnPropertyNames(1)
		});
	Oe({
		target: "Object",
		stat: 1,
		forced: hc
	}, {
		getOwnPropertyNames: fc
	});
	var gc = Zu.trim,
		dc = s.parseInt,
		mc = /^[+-]?0[Xx]/,
		_c = 8 !== dc(Wu + "08") || 22 !== dc(Wu + "0x16") ?
	function(e, t) {
		var n = gc(String(e));
		return dc(n, t >>> 0 || (mc.test(n) ? 16 : 10))
	} : dc;
	Oe({
		global: 1,
		forced: parseInt != _c
	}, {
		parseInt: _c
	}), Os("match", 1, function(e, t, n) {
		return [function(t) {
			var n = v(this),
				r = null == t ? void 0 : t[e];
			return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
		}, function(e) {
			var r = n(t, e, this);
			if (r.done) return r.value;
			var o = L(e),
				i = String(this);
			if (!o.global) return Rs(o, i);
			var a = o.unicode;
			o.lastIndex = 0;
			for (var s, u = [], c = 0; null !== (s = Rs(o, i));) {
				var l = String(s[0]);
				u[c] = l, "" === l && (o.lastIndex = Ls(i, ae(o.lastIndex), a)), c++
			}
			return 0 === c ? null : u
		}]
	});
	var vc = Zu.trim,
		Ec = s.parseFloat,
		yc = 1 / Ec(Wu + "-0") != -Infinity ?
	function(e) {
		var t = vc(String(e)),
			n = Ec(t);
		return 0 === n && "-" == t.charAt(0) ? -0 : n
	} : Ec;
	Oe({
		global: 1,
		forced: parseFloat != yc
	}, {
		parseFloat: yc
	});
	var Sc, Ic = "undefined" != typeof window,
		Tc = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync && "function" == typeof wx.canIUse,
		Cc = Ic && window.navigator && window.navigator.userAgent || "",
		Mc = /AppleWebKit\/([\d.]+)/i.exec(Cc),
		Ac = (Mc && parseFloat(Mc.pop()), /iPad/i.test(Cc)),
		Dc = (/iPhone/i.test(Cc), /iPod/i.test(Cc), (Sc = Cc.match(/OS (\d+)_/i)) && Sc[1] && Sc[1], /Android/i.test(Cc)),
		Oc = function() {
			var e = Cc.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
			if (!e) return null;
			var t = e[1] && parseFloat(e[1]),
				n = e[2] && parseFloat(e[2]);
			return t && n ? parseFloat(e[1] + "." + e[2]) : t || null
		}(),
		Nc = (Dc && /webkit/i.test(Cc), /Firefox/i.test(Cc), /Edge/i.test(Cc)),
		Lc = !Nc && /Chrome/i.test(Cc),
		Rc = (function() {
			var e = Cc.match(/Chrome\/(\d+)/);
			e && e[1] && parseFloat(e[1])
		}(), /MSIE/.test(Cc), /MSIE\s8\.0/.test(Cc), function() {
			var e = /MSIE\s(\d+)\.\d/.exec(Cc),
				t = e && parseFloat(e[1]);
			!t && /Trident\/7.0/i.test(Cc) && /rv:11.0/.test(Cc) && (t = 11)
		}(), /Safari/i.test(Cc), /TBS\/\d+/i.test(Cc)),
		Pc = (function() {
			var e = Cc.match(/TBS\/(\d+)/i);
			if (e && e[1]) e[1]
		}(), !Rc && /MQQBrowser\/\d+/i.test(Cc), !Rc && / QQBrowser\/\d+/i.test(Cc), /(micromessenger|webbrowser)/i.test(Cc), /Windows/i.test(Cc), /MAC OS X/i.test(Cc), /MicroMessenger/i.test(Cc), Math.max),
		kc = Math.min;
	Oe({
		target: "Array",
		proto: 1,
		forced: !In("splice")
	}, {
		splice: function(e, t) {
			var n, r, o, i, a, s, u = Re(this),
				c = ae(u.length),
				l = ce(e, c),
				p = arguments.length;
			if (0 === p ? n = r = 0 : 1 === p ? (n = 0, r = c - l) : (n = p - 2, r = kc(Pc(oe(t), 0), c - l)), c + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
			for (o = Fe(u, r), i = 0; i < r; i++)(a = l + i) in u && Je(o, i, u[a]);
			if (o.length = r, n < r) {
				for (i = l; i < c - r; i++) s = i + n, (a = i + r) in u ? u[s] = u[a] : delete u[s];
				for (i = c; i > c - r + n; i--) delete u[i - 1]
			} else if (n > r) for (i = c - r; i > l; i--) s = i + n - 1, (a = i + r - 1) in u ? u[s] = u[a] : delete u[s];
			for (i = 0; i < n; i++) u[i + l] = arguments[i + 2];
			return u.length = c - r + n, o
		}
	});
	var Gc = !u(function() {
		return Object.isExtensible(Object.preventExtensions({}))
	}),
		bc = t(function(e) {
			var t = P.f,
				n = j("meta"),
				r = 0,
				o = Object.isExtensible ||
			function() {
				return 1
			}, i = function(e) {
				t(e, n, {
					value: {
						objectID: "O" + ++r,
						weakData: {}
					}
				})
			}, a = e.exports = {
				REQUIRED: 0,
				fastKey: function(e, t) {
					if (!y(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
					if (!T(e, n)) {
						if (!o(e)) return "F";
						if (!t) return "E";
						i(e)
					}
					return e[n].objectID
				},
				getWeakData: function(e, t) {
					if (!T(e, n)) {
						if (!o(e)) return 1;
						if (!t) return 0;
						i(e)
					}
					return e[n].weakData
				},
				onFreeze: function(e) {
					return Gc && a.REQUIRED && o(e) && !T(e, n) && i(e), e
				}
			};
			K[n] = 1
		}),
		wc = (bc.REQUIRED, bc.fastKey, bc.getWeakData, bc.onFreeze, P.f),
		Uc = bc.fastKey,
		Fc = Q.set,
		xc = Q.getterFor,
		qc = (function(e, t, n, r, o) {
			var i = s[e],
				a = i && i.prototype,
				c = i,
				l = r ? "set" : "add",
				p = {},
				f = function(e) {
					var t = a[e];
					$(a, e, "add" == e ?
					function(e) {
						return t.call(this, 0 === e ? 0 : e), this
					} : "delete" == e ?
					function(e) {
						return o && !y(e) ? 0 : t.call(this, 0 === e ? 0 : e)
					} : "get" == e ?
					function(e) {
						return o && !y(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
					} : "has" == e ?
					function(e) {
						return o && !y(e) ? 0 : t.call(this, 0 === e ? 0 : e)
					} : function(e, n) {
						return t.call(this, 0 === e ? 0 : e, n), this
					})
				};
			if (Ae(e, "function" != typeof i || !(o || a.forEach && !u(function() {
				(new i).entries().next()
			})))) c = n.getConstructor(t, e, r, l), bc.REQUIRED = 1;
			else if (Ae(e, 1)) {
				var h = new c,
					g = h[l](o ? {} : -0, 1) != h,
					d = u(function() {
						h.has(1)
					}),
					m = st(function(e) {
						new i(e)
					}),
					_ = !o && u(function() {
						for (var e = new i, t = 5; t--;) e[l](t, t);
						return !e.has(-0)
					});
				m || ((c = t(function(t, n) {
					Ur(t, c, e);
					var o = zu(new i, t, c);
					return null != n && Fr(n, o[l], o, r), o
				})).prototype = a, a.constructor = c), (d || _) && (f("delete"), f("has"), r && f("get")), (_ || g) && f(l), o && a.clear && delete a.clear
			}
			p[e] = c, Oe({
				global: 1,
				forced: c != i
			}, p), Rt(c, e), o || n.setStrong(c, e, r)
		}("Map", function(e) {
			return function() {
				return e(this, arguments.length ? arguments[0] : void 0)
			}
		}, {
			getConstructor: function(e, t, n, r) {
				var o = e(function(e, i) {
					Ur(e, o, t), Fc(e, {
						type: t,
						index: dt(null),
						first: void 0,
						last: void 0,
						size: 0
					}), c || (e.size = 0), null != i && Fr(i, e[r], e, n)
				}),
					i = xc(t),
					a = function(e, t, n) {
						var r, o, a = i(e),
							u = s(e, t);
						return u ? u.value = n : (a.last = u = {
							index: o = Uc(t, 1),
							key: t,
							value: n,
							previous: r = a.last,
							next: void 0,
							removed: 0
						}, a.first || (a.first = u), r && (r.next = u), c ? a.size++ : e.size++, "F" !== o && (a.index[o] = u)), e
					},
					s = function(e, t) {
						var n, r = i(e),
							o = Uc(t);
						if ("F" !== o) return r.index[o];
						for (n = r.first; n; n = n.next) if (n.key == t) return n
					};
				return Gr(o.prototype, {
					clear: function() {
						for (var e = i(this), t = e.index, n = e.first; n;) n.removed = 1, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
						e.first = e.last = void 0, c ? e.size = 0 : this.size = 0
					},
					delete: function(e) {
						var t = i(this),
							n = s(this, e);
						if (n) {
							var r = n.next,
								o = n.previous;
							delete t.index[n.index], n.removed = 1, o && (o.next = r), r && (r.previous = o), t.first == n && (t.first = r), t.last == n && (t.last = o), c ? t.size-- : this.size--
						}
						return !!n
					},
					forEach: function(e) {
						for (var t, n = i(this), r = Le(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;) for (r(t.value, t.key, this); t && t.removed;) t = t.previous
					},
					has: function(e) {
						return !!s(this, e)
					}
				}), Gr(o.prototype, n ? {
					get: function(e) {
						var t = s(this, e);
						return t && t.value
					},
					set: function(e, t) {
						return a(this, 0 === e ? 0 : e, t)
					}
				} : {
					add: function(e) {
						return a(this, e = 0 === e ? 0 : e, e)
					}
				}), c && wc(o.prototype, "size", {
					get: function() {
						return i(this).size
					}
				}), o
			},
			setStrong: function(e, t, n) {
				var r = t + " Iterator",
					o = xc(t),
					i = xc(r);
				qt(e, t, function(e, t) {
					Fc(this, {
						type: r,
						target: e,
						state: o(e),
						kind: t,
						last: void 0
					})
				}, function() {
					for (var e = i(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
					return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
						value: n.key,
						done: 0
					} : "values" == t ? {
						value: n.value,
						done: 0
					} : {
						value: [n.key, n.value],
						done: 0
					} : (e.target = void 0, {
						value: void 0,
						done: 1
					})
				}, n ? "entries" : "values", !n, 1), wr(t)
			}
		}, 1), [].push),
		jc = Math.min,
		Bc = !u(function() {
			return !RegExp(4294967295, "y")
		});
	Os("split", 2, function(e, t, n) {
		var r;
		return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ?
		function(e, n) {
			var r = String(v(this)),
				o = void 0 === n ? 4294967295 : n >>> 0;
			if (0 === o) return [];
			if (void 0 === e) return [r];
			if (!Ws(e)) return t.call(r, e, o);
			for (var i, a, s, u = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), l = 0, p = new RegExp(e.source, c + "g");
			(i = Cs.call(p, r)) && !((a = p.lastIndex) > l && (u.push(r.slice(l, i.index)), i.length > 1 && i.index < r.length && qc.apply(u, i.slice(1)), s = i[0].length, l = a, u.length >= o));) p.lastIndex === i.index && p.lastIndex++;
			return l === r.length ? !s && p.test("") || u.push("") : u.push(r.slice(l)), u.length > o ? u.slice(0, o) : u
		} : "0".split(void 0, 0).length ?
		function(e, n) {
			return void 0 === e && 0 === n ? [] : t.call(this, e, n)
		} : t, [function(t, n) {
			var o = v(this),
				i = null == t ? void 0 : t[e];
			return void 0 !== i ? i.call(t, o, n) : r.call(String(o), t, n)
		}, function(e, o) {
			var i = n(r, e, this, o, r !== t);
			if (i.done) return i.value;
			var a = L(e),
				s = String(this),
				u = qr(a, RegExp),
				c = a.unicode,
				l = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (Bc ? "y" : "g"),
				p = new u(Bc ? a : "^(?:" + a.source + ")", l),
				f = void 0 === o ? 4294967295 : o >>> 0;
			if (0 === f) return [];
			if (0 === s.length) return null === Rs(p, s) ? [s] : [];
			for (var h = 0, g = 0, d = []; g < s.length;) {
				p.lastIndex = Bc ? g : 0;
				var m, _ = Rs(p, Bc ? s : s.slice(g));
				if (null === _ || (m = jc(ae(p.lastIndex + (Bc ? 0 : g)), s.length)) === h) g = Ls(s, g, c);
				else {
					if (d.push(s.slice(h, g)), d.length === f) return d;
					for (var v = 1; v <= _.length - 1; v++) if (d.push(_[v]), d.length === f) return d;
					g = h = m
				}
			}
			return d.push(s.slice(h)), d
		}]
	}, !Bc);
	var Hc = -1,
		Kc = function() {
			if (Tc) {
				var e = wx.getSystemInfoSync().SDKVersion;
				if (void 0 === e || void 0 === wx.getLogManager) return 0;
				if (function(e, t) {
					e = e.split("."), t = t.split(".");
					var n = Math.max(e.length, t.length);
					for (; e.length < n;) e.push("0");
					for (; t.length < n;) t.push("0");
					for (var r = 0; r < n; r++) {
						var o = parseInt(e[r]),
							i = parseInt(t[r]);
						if (o > i) return 1;
						if (o < i) return -1
					}
					return 0
				}(e, "2.1.0") >= 0) return wx.getLogManager().log("I can use wx log. SDKVersion=" + e), 1
			}
			return 0
		}(),
		Yc = new Map;

	function Vc() {
		var e = new Date;
		return "TIM " + e.toLocaleTimeString("en-US", {
			hour12: 0
		}) + "." +
		function(e) {
			var t;
			switch (e.toString().length) {
			case 1:
				t = "00" + e;
				break;
			case 2:
				t = "0" + e;
				break;
			default:
				t = e
			}
			return t
		}(e.getMilliseconds()) + ":"
	}
	var zc = {
		_data: [],
		_length: 0,
		_visible: 0,
		arguments2String: function(e) {
			var t;
			if (1 === e.length) t = Vc() + e[0];
			else {
				t = Vc();
				for (var n = 0, r = e.length; n < r; n++) Zc(e[n]) ? t += JSON.stringify(e[n]) + " " : t += e[n] + " "
			}
			return t
		},
		debug: function() {
			if (Hc <= -1) {
				var e = this.arguments2String(arguments);
				zc.record(e, "debug"), Er.debug(e), Kc && wx.getLogManager().debug(e)
			}
		},
		log: function() {
			if (Hc <= 0) {
				var e = this.arguments2String(arguments);
				zc.record(e, "log"), Er.log(e), Kc && wx.getLogManager().log(e)
			}
		},
		info: function() {
			if (Hc <= 1) {
				var e = this.arguments2String(arguments);
				zc.record(e, "info"), Er.info(e), Kc && wx.getLogManager().info(e)
			}
		},
		warn: function() {
			if (Hc <= 2) {
				var e = this.arguments2String(arguments);
				zc.record(e, "warn"), Er.warn(e), Kc && wx.getLogManager().warn(e)
			}
		},
		error: function() {
			if (Hc <= 3) {
				var e = this.arguments2String(arguments);
				zc.record(e, "error"), Er.error(e), Kc && wx.getLogManager().warn(e)
			}
		},
		time: function(e) {
			Yc.set(e, tl.now())
		},
		timeEnd: function(e) {
			if (Yc.has(e)) {
				var t = tl.now() - Yc.get(e);
				return Yc.delete(e), t
			}
			return Er.warn("未找到对应label: ".concat(e, ", 请在调用 logger.timeEnd 前，调用 logger.time")), 0
		},
		setLevel: function(e) {
			e < 4 && Er.log(Vc() + "set level from " + Hc + " to " + e), Hc = e
		},
		record: function(e, t) {
			Kc || (1100 === zc._length && (zc._data.splice(0, 100), zc._length = 1e3), zc._length++, zc._data.push("".concat(e, " [").concat(t, "] \n")))
		},
		getLog: function() {
			return zc._data
		}
	},
		Wc = function(e) {
			return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" === On(e) && e.constructor === Number)
		},
		Xc = function(e) {
			return "string" == typeof e
		},
		Jc = function(e) {
			return null !== e && "object" === On(e)
		},
		Qc = function(e) {
			return "function" == typeof Array.isArray ? Array.isArray(e) : "array" === this.getType(e)
		},
		$c = function(e) {
			return void 0 === e
		},
		Zc = function(e) {
			return Qc(e) || Jc(e)
		},
		el = 0;
	Date.now || (Date.now = function() {
		return (new Date).getTime()
	});
	var tl = {
		now: function() {
			0 === el && (el = Date.now() - 1);
			var e = Date.now() - el;
			return e > 4294967295 ? (el += 4294967295, Date.now() - el) : e
		},
		utc: function() {
			return Math.round(Date.now() / 1e3)
		}
	},
		nl = function e(t, n, r, o) {
			if (!Zc(t) || !Zc(n)) return 0;
			for (var i, a = 0, s = Object.keys(n), u = 0, c = s.length; u < c; u++) if (i = s[u], !($c(n[i]) || r && r.includes(i))) if (Zc(t[i]) && Zc(n[i])) a += e(t[i], n[i], r, o);
			else {
				if (o && o.includes(n[i])) continue;
				t[i] !== n[i] && (t[i] = n[i], a += 1)
			}
			return a
		},
		rl = function(e) {
			if (0 === e.length) return 0;
			for (var t = 0, n = 0, r = "undefined" != typeof document && void 0 !== document.characterSet ? document.characterSet : "UTF-8"; void 0 !== e[t];) n += e[t++].charCodeAt[t] <= 255 ? 1 : 0 == r ? 3 : 2;
			return n
		},
		ol = function(e) {
			var t = e || 99999999;
			return Math.round(Math.random() * t)
		},
		il = function(e, t) {
			for (var n in e) if (e[n] === t) return 1;
			return 0
		},
		al = {},
		sl = function(e) {
			return e === yn.GRP_PUBLIC
		},
		ul = function(e) {
			return e === yn.GRP_AVCHATROOM
		};

	function cl(e, t) {
		var n = {};
		return Object.keys(e).forEach(function(r) {
			n[t(e[r], r)] = e[r]
		}), n
	}
	function ll(e, t) {
		var n = {};
		return Object.keys(e).forEach(function(r) {
			n[r] = t(e[r])
		}), n
	}
	var pl = je.filter;
	Oe({
		target: "Array",
		proto: 1,
		forced: !In("filter")
	}, {
		filter: function(e) {
			return pl(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), Oe({
		target: "Object",
		stat: 1,
		forced: Object.assign !== pi
	}, {
		assign: pi
	});
	var fl = Zu.trim;

	function hl(e, t) {
		if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
		t = Object.assign({
			pascalCase: 0
		}, t);
		var n;
		return 0 === (e = Array.isArray(e) ? e.map(function(e) {
			return e.trim()
		}).filter(function(e) {
			return e.length
		}).join("-") : e.trim()).length ? "" : 1 === e.length ? t.pascalCase ? e.toUpperCase() : e.toLowerCase() : (e !== e.toLowerCase() && (e = gl(e)), e = e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, function(e, t) {
			return t.toUpperCase()
		}).replace(/\d+(\w|$)/g, function(e) {
			return e.toUpperCase()
		}), n = e, t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
	}
	Oe({
		target: "String",
		proto: 1,
		forced: function(e) {
			return u(function() {
				return !!Wu[e]() || "​᠎" != "​᠎" [e]() || Wu[e].name !== e
			})
		}("trim")
	}, {
		trim: function() {
			return fl(this)
		}
	});
	var gl = function(e) {
			for (var t = 0, n = 0, r = 0, o = 0; o < e.length; o++) {
				var i = e[o];
				t && /[a-zA-Z]/.test(i) && i.toUpperCase() === i ? (e = e.slice(0, o) + "-" + e.slice(o), t = 0, r = n, n = 1, o++) : n && r && /[a-zA-Z]/.test(i) && i.toLowerCase() === i ? (e = e.slice(0, o - 1) + "-" + e.slice(o - 1), r = n, n = 0, t = 1) : (t = i.toLowerCase() === i && i.toUpperCase() !== i, r = n, n = i.toUpperCase() === i && i.toLowerCase() !== i)
			}
			return e
		};

	function dl(e, t, n) {
		var r = [],
			o = function e(t, n) {
				if (Qc(t)) return t.map(function(t) {
					return Jc(t) ? e(t, n) : t
				});
				if (Jc(t)) {
					var o = cl(t, function(e, t) {
						if ("_" === t[0]) return t;
						if ((a = t) !== hl(a)) {
							for (var o = 1, i = 0; i < Qs.ignoreKeyWord.length; i++) if (t.includes(Qs.ignoreKeyWord[i])) {
								o = 0;
								break
							}
							o && r.push(t)
						}
						var a;
						return $c(n[t]) ?
						function(e) {
							return e[0].toUpperCase() + hl(e).slice(1)
						}(t) : n[t]
					});
					return o = ll(o, function(t) {
						return Qc(t) || Jc(t) ? e(t, n) : t
					})
				}
			}(e, t = kn({}, Qs.request, t));
		return r.length > 0 && n.innerEmitter.emit($s.ERROR_DETECTED, {
			code: fs.CONVERTOR_IRREGULAR_PARAMS,
			message: fs.CONVERTOR_IRREGULAR_PARAMS
		}), o
	}
	var ml = function() {
			function e(t, n) {
				var r = this;
				if (Nn(this, e), void 0 === n) throw new gs({
					code: fs.NO_SDK_INSTANCE,
					message: hs.NO_SDK_INSTANCE
				});
				this.tim = n, this.method = t.method || "POST", this._initializeServerMap(), this._initializeURL(t), this._initializeRequestData(t), this.callback = function(e) {
					return function e(t, n) {
						if (n = kn({}, Qs.response, n), Qc(t)) return t.map(function(t) {
							return Jc(t) ? e(t, n) : t
						});
						if (Jc(t)) {
							var r = cl(t, function(e, t) {
								return $c(n[t]) ? hl(t) : n[t]
							});
							return r = ll(r, function(t) {
								return Qc(t) || Jc(t) ? e(t, n) : t
							})
						}
					}(e = t.decode(e), r._getResponseMap(t))
				}
			}
			return Rn(e, [{
				key: "_initializeServerMap",
				value: function() {
					this._serverMap = Object.create(null);
					var e = "";
					for (var t in Bs.NAME) switch (e = Bs.NAME[t]) {
					case Bs.NAME.PIC:
						this._serverMap[e] = Bs.HOST.CURRENT.PIC;
						break;
					case Bs.NAME.IM_COS_SIGN:
						this._serverMap[e] = Bs.HOST.CURRENT.COS;
						break;
					default:
						this._serverMap[e] = Bs.HOST.CURRENT.COMMON
					}
				}
			}, {
				key: "_getHost",
				value: function(e) {
					if (void 0 !== this._serverMap[e]) return this._serverMap[e];
					throw new gs({
						code: fs.NETWORK_UNDEFINED_SERVER_NAME,
						message: hs.NETWORK_UNDEFINED_SERVER_NAME
					})
				}
			}, {
				key: "_initializeURL",
				value: function(e) {
					var t = e.serverName,
						n = e.cmd,
						r = this._getHost(t),
						o = "".concat(r, "/").concat(Bs.NAME_VERSION[t], "/").concat(t, "/").concat(n);
					o += "?".concat(this._getQueryString(e.queryString)), this.url = o
				}
			}, {
				key: "getUrl",
				value: function() {
					return this.url.replace(/&reqtime=(\d+)/, "&reqtime=".concat(Math.ceil(+new Date / 1e3)))
				}
			}, {
				key: "_initializeRequestData",
				value: function(e) {
					var t, n = e.requestData;
					t = this._requestDataCleaner(n), this.requestData = e.encode(t)
				}
			}, {
				key: "_requestDataCleaner",
				value: function(e) {
					var t = Array.isArray(e) ? [] : Object.create(null);
					for (var n in e)"_" !== n[0] && null !== e[n] && 1 != this._isGetterProperty(e, n) && ("object" !== On(e[n]) ? t[n] = e[n] : t[n] = this._requestDataCleaner.bind(this)(e[n]));
					return t
				}
			}, {
				key: "_isGetterProperty",
				value: function(e, t) {
					return "function" == typeof Object.getOwnPropertyDescriptor(e, t).get ? 1 : 0
				}
			}, {
				key: "_getQueryString",
				value: function(e) {
					var t = [];
					for (var n in e)"function" != typeof e[n] ? t.push("".concat(n, "=").concat(e[n])) : t.push("".concat(n, "=").concat(e[n]()));
					return t.join("&")
				}
			}, {
				key: "_getResponseMap",
				value: function(e) {
					if (e.keyMaps && e.keyMaps.response && Object.keys(e.keyMaps.response).length > 0) return e.keyMaps.response
				}
			}]), e
		}(),
		_l = [].slice,
		vl = /MSIE .\./.test(uo),
		El = function(e) {
			return function(t, n) {
				var r = arguments.length > 2,
					o = r ? _l.call(arguments, 2) : void 0;
				return e(r ?
				function() {
					("function" == typeof t ? t : Function(t)).apply(this, o)
				} : t, n)
			}
		};

	function yl(e) {
		this.mixin(e)
	}
	Oe({
		global: 1,
		bind: 1,
		forced: vl
	}, {
		setTimeout: El(s.setTimeout),
		setInterval: El(s.setInterval)
	}), yl.mixin = function(e) {
		var t = e.prototype || e;
		t._isReady = 0, t.ready = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
			if (e) return this._isReady ? void(t ? e.call(this) : setTimeout(e, 1)) : (this._readyQueue = this._readyQueue || [], void this._readyQueue.push(e))
		}, t.triggerReady = function() {
			var e = this;
			this._isReady = 1, setTimeout(function() {
				var t = e._readyQueue;
				e._readyQueue = [], t && t.length > 0 && t.forEach(function(e) {
					e.call(this)
				}, e)
			}, 1)
		}, t.resetReady = function() {
			this._isReady = 0, this._readyQueue = []
		}, t.isReady = function() {
			return this._isReady
		}
	};
	var Sl = function() {
			function e(t) {
				if (Nn(this, e), 0 == !! t) throw new gs({
					code: fs.NO_SDK_INSTANCE,
					message: hs.NO_SDK_INSTANCE
				});
				yl.mixin(this), this.tim = t, this.innerEmitter = t.innerEmitter, this.connectionController = t.connectionController, this.packageConfig = t.packageConfig, this.packageConfig.update(t)
			}
			return Rn(e, [{
				key: "createPackage",
				value: function(e) {
					var t = this.packageConfig.get(e);
					return t ? new ml(t, this.tim) : 0
				}
			}, {
				key: "reset",
				value: function() {
					zc.warn(["method: IMController.reset() method must be implemented"].join())
				}
			}, {
				key: "destroy",
				value: function() {
					zc.warn("destory")
				}
			}]), e
		}();
	Oe({
		target: "Object",
		stat: 1,
		forced: !c,
		sham: !c
	}, {
		defineProperty: P.f
	});
	var Il = function() {
			function e(t, n) {
				Nn(this, e), this.data = t, this.tim = n, this.defaultData = {}, Object.assign(this.defaultData, t), this.initGetterAndSetter()
			}
			return Rn(e, [{
				key: "initGetterAndSetter",
				value: function() {
					var e = this,
						t = this.tim,
						n = function(n, r) {
							Object.defineProperty(e, n, {
								enumerable: 1,
								configurable: 1,
								get: function() {
									return e.data[n]
								},
								set: function(r) {
									e.data[n] = r, e.onChange.bind(e)(t.context, n, r)
								}
							})
						};
					for (var r in e.data) n(r, e.data[r])
				}
			}, {
				key: "onChange",
				value: function(e, t, n) {
					this.tim.innerEmitter.emit($s.CONTEXT_UPDATED, {
						data: {
							context: e,
							key: t,
							value: n
						}
					})
				}
			}, {
				key: "reset",
				value: function() {
					var e = this.tim;
					for (var t in this.data) this.data[t] = this.defaultData.hasOwnProperty(t) ? this.defaultData[t] : null;
					this.tim.innerEmitter.emit($s.CONTEXT_RESET, {
						data: e.context
					})
				}
			}]), e
		}(),
		Tl = {
			SUCCESS: "JoinedSuccess",
			WAIT_APPROVAL: "WaitAdminApproval"
		},
		Cl = {
			COMMON: {
				SUCCESS: "OK",
				FAIL: "FAIL"
			},
			REQUEST: {
				SUCCESS: 0
			},
			ACCESS_LAYER: {
				PRODUCTION: 0,
				TEST: 1
			},
			LOGIN: {
				IS_LOGIN: 1,
				IS_NOT_LOGIN: 0
			},
			SYNC_MESSAGE: {
				SYNCHRONIZATION_START: 0,
				SYNCHRONIZING: 1,
				SYNCHRONIZED: 2
			},
			MESSAGE_STATUS: {
				UNSEND: "unSend",
				SUCCESS: "success",
				FAIL: "fail"
			},
			GET_HISTORY_MESSAGE_STATUS: {
				C2C_IS_FINISHED: 1,
				C2C_IS_NOT_FINISHED: 0,
				GROUP_IS_FINISHED: 1,
				GROUP_IS_NOT_FINISHED: 0
			},
			ACCOUNT_STATUS: {
				SIGN_IN: 1,
				SIGN_OUT: 0
			},
			CHANNEL_STATUS: {
				ONLINE: 1,
				OFFLINE: 0
			},
			JOIN_GROUP_STATUS: Tl,
			UPLOAD: {
				FINISHED: 1,
				UPLOADING: 0
			}
		},
		Ml = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this, e)))._initContext(), n._initListener(), n
			}
			return Gn(t, Sl), Rn(t, [{
				key: "reset",
				value: function() {
					this.tim.context.reset()
				}
			}, {
				key: "_IAmReady",
				value: function() {
					this.triggerReady()
				}
			}, {
				key: "_initListener",
				value: function() {
					this.tim.innerEmitter.on($s.SIGN_LOGIN_SUCCESS, this._updateA2KeyAndTinyID, this)
				}
			}, {
				key: "_updateA2KeyAndTinyID",
				value: function(e) {
					var t = e.data,
						n = t.a2Key,
						r = t.tinyID;
					this.set("a2Key", n), this.set("tinyID", r), this.tim.innerEmitter.emit($s.CONTEXT_A2KEY_AND_TINYID_UPDATED, {
						data: {
							context: this.tim.context
						}
					}), this._IAmReady()
				}
			}, {
				key: "get",
				value: function(e) {
					return this.tim.context[e]
				}
			}, {
				key: "set",
				value: function(e, t) {
					this.tim.context[e] = t
				}
			}, {
				key: "_initContext",
				value: function() {
					var e = this.tim.loginInfo;
					this.tim.context = new Il({
						login: Cl.LOGIN.IS_NOT_LOGIN,
						SDKAppID: e.SDKAppID,
						appIDAt3rd: null,
						accountType: e.accountType,
						identifier: e.identifier,
						tinyID: null,
						identifierNick: e.identifierNick,
						userSig: e.userSig,
						a2Key: null,
						contentType: "json",
						apn: 1
					}, this.tim), this.tim.innerEmitter.on($s.CONTEXT_UPDATED, this._onContextMemberChange.bind(this))
				}
			}, {
				key: "_onContextMemberChange",
				value: function(e) {
					var t = e.data,
						n = t.key,
						r = t.value;
					switch (n) {
					case "tinyID":
						r.length <= 0 ? this.tim.context.login = Cl.LOGIN.IS_NOT_LOGIN : this.tim.context.login = null != this.tim.context.a2Key ? Cl.LOGIN.IS_LOGIN : Cl.LOGIN.IS_NOT_LOGIN;
						break;
					case "a2Key":
						r.length <= 0 ? this.tim.context.login = Cl.LOGIN.IS_NOT_LOGIN : this.tim.context.login = null != this.tim.context.tinyID ? Cl.LOGIN.IS_LOGIN : Cl.LOGIN.IS_NOT_LOGIN
					}
				}
			}]), t
		}(),
		Al = function e(t) {
			Nn(this, e), this.code = 0, this.data = t || {}
		},
		Dl = null,
		Ol = function(e) {
			Dl = e
		},
		Nl = function(e) {
			return e instanceof Al ? (zc.warn("IMPromise.resolve 此函数会自动用options创建IMResponse实例，调用侧不需创建，建议修改！"), Promise.resolve(e)) : Promise.resolve(new Al(e))
		},
		Ll = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
			if (e instanceof gs) return t && null != Dl && Dl.emit(Wt.ERROR, e), Promise.reject(e);
			if (e instanceof Error) {
				zc.warn("IMPromise.reject options not instanceof IMError! details:", e);
				var n = new gs({
					code: fs.UNCAUGHT_ERROR,
					message: e.message
				});
				return t && null != Dl && Dl.emit(Wt.ERROR, n), Promise.reject(n)
			}
			if ($c(e) || $c(e.code) || $c(e.message)) zc.error("IMPromise.reject 必须指定code(错误码)和message(错误信息)!!!");
			else {
				if (Wc(e.code) && Xc(e.message)) {
					var r = new gs(e);
					return t && null != Dl && Dl.emit(Wt.ERROR, r), Promise.reject(r)
				}
				zc.error("IMPromise.reject code(错误码)必须为数字，message(错误信息)必须为字符串!!!")
			}
		},
		Rl = "sdkReady",
		Pl = "login",
		kl = "sendMessage",
		Gl = "initConversationList",
		bl = "initGroupList",
		wl = "upload",
		Ul = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this, e))).devLoginTips = 'new TIM({\n      SDKAppID: "必填",\n      accountType: "必填",\n      identifier: "必填",\n      userSig: "必填",\n      identifierNick: "可选"\n    })\n    ', n._initListener(), n
			}
			return Gn(t, Sl), Rn(t, [{
				key: "login",
				value: function(e) {
					zc.log("SignController.login userID=", e.identifier), zc.time(Pl);
					var t = this._checkLoginInfo(e);
					return fr(t) ? (this.tim.context.identifier = e.identifier, this.tim.context.userSig = e.userSig, this.tim.context.SDKAppID = e.SDKAppID, this.tim.context.accountType = e.accountType, this.tim.context.identifier && this.tim.context.userSig ? (this.tim.innerEmitter.emit($s.SIGN_LOGIN), this._accessLayer()) : void 0) : Ll(t)
				}
			}, {
				key: "_initListener",
				value: function() {
					this.innerEmitter.on($s.NOTICE_LONGPOLL_KICKED_OUT, this._onKickedOut, this), this.innerEmitter.on($s.NOTICE_LONGPOLL_MUTIPLE_DEVICE_KICKED_OUT, this._onMultipleDeviceKickedOut, this)
				}
			}, {
				key: "_accessLayer",
				value: function() {
					var e = this;
					zc.log("SignController._accessLayer.");
					var t = this.createPackage({
						name: "accessLayer",
						action: "query"
					});
					return this.tim.connectionController.request(t).then(function(t) {
						return zc.log("SignController._accessLayer ok. webImAccessLayer=", t.data.webImAccessLayer), 1 === t.data.webImAccessLayer && Bs.HOST.setCurrent(t.data.webImAccessLayer), e._login()
					}).
					catch (function(e) {
						return zc.error("SignController._accessLayer error:", e), Ll(e, 1)
					})
				}
			}, {
				key: "_login",
				value: function() {
					var e = this,
						t = this.createPackage({
							name: "login",
							action: "query"
						});
					return this.connectionController.request(t).then(function(t) {
						if (0 == !! t.data.tinyID) throw new gs({
							code: fs.NO_TINYID,
							message: hs.NO_TINYID
						});
						if (0 == !! t.data.a2Key) throw new gs({
							code: fs.NO_A2KEY,
							message: hs.NO_A2KEY
						});
						return zc.log("SignController.login ok. userID=".concat(e.tim.loginInfo.identifier, " loginCost=").concat(zc.timeEnd(Pl), "ms")), e.tim.innerEmitter.emit($s.SIGN_LOGIN_SUCCESS, {
							data: {
								a2Key: t.data.a2Key,
								tinyID: t.data.tinyID
							}
						}), e.tim.outerEmitter.emit(Wt.LOGIN_SUCCESS), Nl(t.data)
					}).
					catch (function(e) {
						return zc.error("SignController.login error:", e), Ll(e)
					})
				}
			}, {
				key: "logout",
				value: function() {
					return zc.info("SignController.logout"), this.tim.innerEmitter.emit($s.SIGN_LOGOUT_EXECUTING), Promise.all(this._logout(dn), this._logout(gn)).then(this._emitLogoutSuccess.bind(this)).
					catch (this._emitLogoutSuccess.bind(this))
				}
			}, {
				key: "_logout",
				value: function(e) {
					var t = this.tim.notificationController,
						n = e === gn ? "logout" : "longPollLogout",
						r = e === gn ? {
							name: n,
							action: "query"
						} : {
							name: n,
							action: "query",
							param: {
								longPollID: t.getLongPollID()
							}
						},
						o = this.createPackage(r);
					return this.connectionController.request(o).
					catch (function(e) {
						return zc.error("SignController._logout error:", e), Ll(e)
					})
				}
			}, {
				key: "_checkLoginInfo",
				value: function(e) {
					var t = 0,
						n = "";
					return null === e.SDKAppID ? (t = fs.NO_SDKAPPID, n = hs.NO_SDKAPPID) : null === e.accountType ? (t = fs.NO_ACCOUNT_TYPE, n = hs.NO_ACCOUNT_TYPE) : null === e.identifier ? (t = fs.NO_IDENTIFIER, n = hs.NO_IDENTIFIER) : null === e.userSig && (t = fs.NO_USERSIG, n = hs.NO_USERSIG), fr(t) || fr(n) ? {} : {
						code: t,
						message: n
					}
				}
			}, {
				key: "_emitLogoutSuccess",
				value: function() {
					return this.tim.innerEmitter.emit($s.SIGN_LOGOUT_SUCCESS), Nl({})
				}
			}, {
				key: "_onKickedOut",
				value: function() {
					var e = this;
					this.tim.logout().then(function() {
						zc.warn("SignController._onKickedOut kicked out.       userID=".concat(e.tim.loginInfo.identifier)), e.tim.outerEmitter.emit(Wt.KICKED_OUT, {
							type: pn
						})
					})
				}
			}, {
				key: "_onMultipleDeviceKickedOut",
				value: function() {
					var e = this;
					this.tim.logout().then(function() {
						zc.warn("SignController._onKickedOut kicked out.       userID=".concat(e.tim.loginInfo.identifier)), e.tim.outerEmitter.emit(Wt.KICKED_OUT, {
							type: fn
						})
					})
				}
			}, {
				key: "reset",
				value: function() {}
			}]), t
		}(),
		Fl = function(e, t) {
			return function() {
				for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
				return e.apply(t, n)
			}
		},
		xl = Object.prototype.toString;

	function ql(e) {
		return "[object Array]" === xl.call(e)
	}
	function jl(e) {
		return null !== e && "object" == typeof e
	}
	function Bl(e) {
		return "[object Function]" === xl.call(e)
	}
	function Hl(e, t) {
		if (null != e) if ("object" != typeof e && (e = [e]), ql(e)) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
		else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
	}
	var Kl = {
		isArray: ql,
		isArrayBuffer: function(e) {
			return "[object ArrayBuffer]" === xl.call(e)
		},
		isBuffer: function(e) {
			return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
		},
		isFormData: function(e) {
			return "undefined" != typeof FormData && e instanceof FormData
		},
		isArrayBufferView: function(e) {
			return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
		},
		isString: function(e) {
			return "string" == typeof e
		},
		isNumber: function(e) {
			return "number" == typeof e
		},
		isObject: jl,
		isUndefined: function(e) {
			return void 0 === e
		},
		isDate: function(e) {
			return "[object Date]" === xl.call(e)
		},
		isFile: function(e) {
			return "[object File]" === xl.call(e)
		},
		isBlob: function(e) {
			return "[object Blob]" === xl.call(e)
		},
		isFunction: Bl,
		isStream: function(e) {
			return jl(e) && Bl(e.pipe)
		},
		isURLSearchParams: function(e) {
			return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
		},
		isStandardBrowserEnv: function() {
			return "undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product ? "undefined" != typeof window && "undefined" != typeof document : 0
		},
		forEach: Hl,
		merge: function e() {
			var t = {};

			function n(n, r) {
				"object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
			}
			for (var r = 0, o = arguments.length; r < o; r++) Hl(arguments[r], n);
			return t
		},
		deepMerge: function e() {
			var t = {};

			function n(n, r) {
				"object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n
			}
			for (var r = 0, o = arguments.length; r < o; r++) Hl(arguments[r], n);
			return t
		},
		extend: function(e, t, n) {
			return Hl(t, function(t, r) {
				e[r] = n && "function" == typeof t ? Fl(t, n) : t
			}), e
		},
		trim: function(e) {
			return e.replace(/^\s*/, "").replace(/\s*$/, "")
		}
	};

	function Yl(e) {
		return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
	}
	var Vl = function(e, t, n) {
			if (!t) return e;
			var r;
			if (n) r = n(t);
			else if (Kl.isURLSearchParams(t)) r = t.toString();
			else {
				var o = [];
				Kl.forEach(t, function(e, t) {
					null != e && (Kl.isArray(e) ? t += "[]" : e = [e], Kl.forEach(e, function(e) {
						Kl.isDate(e) ? e = e.toISOString() : Kl.isObject(e) && (e = JSON.stringify(e)), o.push(Yl(t) + "=" + Yl(e))
					}))
				}), r = o.join("&")
			}
			if (r) {
				var i = e.indexOf("#"); - 1 !== i && (e = e.slice(0, i)), e += (-1 === e.indexOf("?") ? "?" : "&") + r
			}
			return e
		};

	function zl() {
		this.handlers = []
	}
	zl.prototype.use = function(e, t) {
		return this.handlers.push({
			fulfilled: e,
			rejected: t
		}), this.handlers.length - 1
	}, zl.prototype.eject = function(e) {
		this.handlers[e] && (this.handlers[e] = null)
	}, zl.prototype.forEach = function(e) {
		Kl.forEach(this.handlers, function(t) {
			null !== t && e(t)
		})
	};
	var Wl = zl,
		Xl = function(e, t, n) {
			return Kl.forEach(n, function(n) {
				e = n(e, t)
			}), e
		},
		Jl = function(e) {
			return !(!e || !e.__CANCEL__)
		};

	function Ql() {
		throw new Error("setTimeout has not been defined")
	}
	function $l() {
		throw new Error("clearTimeout has not been defined")
	}
	var Zl = Ql,
		ep = $l;

	function tp(e) {
		if (Zl === setTimeout) return setTimeout(e, 0);
		if ((Zl === Ql || !Zl) && setTimeout) return Zl = setTimeout, setTimeout(e, 0);
		try {
			return Zl(e, 0)
		} catch (t) {
			try {
				return Zl.call(null, e, 0)
			} catch (t) {
				return Zl.call(this, e, 0)
			}
		}
	}
	"function" == typeof dr.setTimeout && (Zl = setTimeout), "function" == typeof dr.clearTimeout && (ep = clearTimeout);
	var np, rp = [],
		op = 0,
		ip = -1;

	function ap() {
		op && np && (op = 0, np.length ? rp = np.concat(rp) : ip = -1, rp.length && sp())
	}
	function sp() {
		if (!op) {
			var e = tp(ap);
			op = 1;
			for (var t = rp.length; t;) {
				for (np = rp, rp = []; ++ip < t;) np && np[ip].run();
				ip = -1, t = rp.length
			}
			np = null, op = 0, function(e) {
				if (ep === clearTimeout) return clearTimeout(e);
				if ((ep === $l || !ep) && clearTimeout) return ep = clearTimeout, clearTimeout(e);
				try {
					ep(e)
				} catch (t) {
					try {
						return ep.call(null, e)
					} catch (t) {
						return ep.call(this, e)
					}
				}
			}(e)
		}
	}
	function up(e, t) {
		this.fun = e, this.array = t
	}
	up.prototype.run = function() {
		this.fun.apply(null, this.array)
	};

	function cp() {}
	var lp = cp,
		pp = cp,
		fp = cp,
		hp = cp,
		gp = cp,
		dp = cp,
		mp = cp;
	var _p = dr.performance || {},
		vp = _p.now || _p.mozNow || _p.msNow || _p.oNow || _p.webkitNow ||
	function() {
		return (new Date).getTime()
	};
	var Ep = new Date;
	var yp = {
		nextTick: function(e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			rp.push(new up(e, t)), 1 !== rp.length || op || tp(sp)
		},
		title: "browser",
		browser: 1,
		env: {},
		argv: [],
		version: "",
		versions: {},
		on: lp,
		addListener: pp,
		once: fp,
		off: hp,
		removeListener: gp,
		removeAllListeners: dp,
		emit: mp,
		binding: function(e) {
			throw new Error("process.binding is not supported")
		},
		cwd: function() {
			return "/"
		},
		chdir: function(e) {
			throw new Error("process.chdir is not supported")
		},
		umask: function() {
			return 0
		},
		hrtime: function(e) {
			var t = .001 * vp.call(_p),
				n = Math.floor(t),
				r = Math.floor(t % 1 * 1e9);
			return e && (n -= e[0], (r -= e[1]) < 0 && (n--, r += 1e9)), [n, r]
		},
		platform: "browser",
		release: {},
		config: {},
		uptime: function() {
			return (new Date - Ep) / 1e3
		}
	},
		Sp = function(e, t) {
			Kl.forEach(e, function(n, r) {
				r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
			})
		},
		Ip = function(e, t, n, r, o) {
			return function(e, t, n, r, o) {
				return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = 1, e.toJSON = function() {
					return {
						message: this.message,
						name: this.name,
						description: this.description,
						number: this.number,
						fileName: this.fileName,
						lineNumber: this.lineNumber,
						columnNumber: this.columnNumber,
						stack: this.stack,
						config: this.config,
						code: this.code
					}
				}, e
			}(new Error(e), t, n, r, o)
		},
		Tp = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
		Cp = Kl.isStandardBrowserEnv() ?
	function() {
		var e, t = /(msie|trident)/i.test(navigator.userAgent),
			n = document.createElement("a");

		function r(e) {
			var r = e;
			return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
				href: n.href,
				protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
				host: n.host,
				search: n.search ? n.search.replace(/^\?/, "") : "",
				hash: n.hash ? n.hash.replace(/^#/, "") : "",
				hostname: n.hostname,
				port: n.port,
				pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
			}
		}
		return e = r(window.location.href), function(t) {
			var n = Kl.isString(t) ? r(t) : t;
			return n.protocol === e.protocol && n.host === e.host
		}
	}() : function() {
		return 1
	}, Mp = Kl.isStandardBrowserEnv() ? {
		write: function(e, t, n, r, o, i) {
			var a = [];
			a.push(e + "=" + encodeURIComponent(t)), Kl.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), Kl.isString(r) && a.push("path=" + r), Kl.isString(o) && a.push("domain=" + o), 1 == i && a.push("secure"), document.cookie = a.join("; ")
		},
		read: function(e) {
			var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
			return t ? decodeURIComponent(t[3]) : null
		},
		remove: function(e) {
			this.write(e, "", Date.now() - 864e5)
		}
	} : {
		write: function() {},
		read: function() {
			return null
		},
		remove: function() {}
	}, Ap = function(e) {
		return new Promise(function(t, n) {
			var r = e.data,
				o = e.headers;
			Kl.isFormData(r) && delete o["Content-Type"];
			var i = new XMLHttpRequest;
			if (e.auth) {
				var a = e.auth.username || "",
					s = e.auth.password || "";
				o.Authorization = "Basic " + btoa(a + ":" + s)
			}
			if (i.open(e.method.toUpperCase(), Vl(e.url, e.params, e.paramsSerializer), 1), i.timeout = e.timeout, i.onreadystatechange = function() {
				if (i && 4 === i.readyState && (0 !== i.status || i.responseURL && 0 === i.responseURL.indexOf("file:"))) {
					var r = "getAllResponseHeaders" in i ?
					function(e) {
						var t, n, r, o = {};
						return e ? (Kl.forEach(e.split("\n"), function(e) {
							if (r = e.indexOf(":"), t = Kl.trim(e.substr(0, r)).toLowerCase(), n = Kl.trim(e.substr(r + 1)), t) {
								if (o[t] && Tp.indexOf(t) >= 0) return;
								o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n
							}
						}), o) : o
					}(i.getAllResponseHeaders()) : null, o = {
						data: e.responseType && "text" !== e.responseType ? i.response : i.responseText,
						status: i.status,
						statusText: i.statusText,
						headers: r,
						config: e,
						request: i
					};
					!
					function(e, t, n) {
						var r = n.config.validateStatus;
						!r || r(n.status) ? e(n) : t(Ip("Request failed with status code " + n.status, n.config, null, n.request, n))
					}(t, n, o), i = null
				}
			}, i.onabort = function() {
				i && (n(Ip("Request aborted", e, "ECONNABORTED", i)), i = null)
			}, i.onerror = function() {
				n(Ip("Network Error", e, null, i)), i = null
			}, i.ontimeout = function() {
				n(Ip("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", i)), i = null
			}, Kl.isStandardBrowserEnv()) {
				var u = Mp,
					c = (e.withCredentials || Cp(e.url)) && e.xsrfCookieName ? u.read(e.xsrfCookieName) : void 0;
				c && (o[e.xsrfHeaderName] = c)
			}
			if ("setRequestHeader" in i && Kl.forEach(o, function(e, t) {
				void 0 === r && "content-type" === t.toLowerCase() ? delete o[t] : i.setRequestHeader(t, e)
			}), e.withCredentials && (i.withCredentials = 1), e.responseType) try {
				i.responseType = e.responseType
			} catch (l) {
				if ("json" !== e.responseType) throw l
			}
			"function" == typeof e.onDownloadProgress && i.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && i.upload && i.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
				i && (i.abort(), n(e), i = null)
			}), void 0 === r && (r = null), i.send(r)
		})
	}, Dp = {
		"Content-Type": "application/x-www-form-urlencoded"
	};

	function Op(e, t) {
		!Kl.isUndefined(e) && Kl.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
	}
	var Np, Lp = {
		adapter: (void 0 !== yp && "[object process]" === Object.prototype.toString.call(yp) ? Np = Ap : "undefined" != typeof XMLHttpRequest && (Np = Ap), Np),
		transformRequest: [function(e, t) {
			return Sp(t, "Accept"), Sp(t, "Content-Type"), Kl.isFormData(e) || Kl.isArrayBuffer(e) || Kl.isBuffer(e) || Kl.isStream(e) || Kl.isFile(e) || Kl.isBlob(e) ? e : Kl.isArrayBufferView(e) ? e.buffer : Kl.isURLSearchParams(e) ? (Op(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : Kl.isObject(e) ? (Op(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
		}],
		transformResponse: [function(e) {
			if ("string" == typeof e) try {
				e = JSON.parse(e)
			} catch (t) {}
			return e
		}],
		timeout: 0,
		xsrfCookieName: "XSRF-TOKEN",
		xsrfHeaderName: "X-XSRF-TOKEN",
		maxContentLength: -1,
		validateStatus: function(e) {
			return e >= 200 && e < 300
		}
	};
	Lp.headers = {
		common: {
			Accept: "application/json, text/plain, */*"
		}
	}, Kl.forEach(["delete", "get", "head"], function(e) {
		Lp.headers[e] = {}
	}), Kl.forEach(["post", "put", "patch"], function(e) {
		Lp.headers[e] = Kl.merge(Dp)
	});
	var Rp = Lp;

	function Pp(e) {
		e.cancelToken && e.cancelToken.throwIfRequested()
	}
	var kp = function(e) {
			var t, n, r;
			return Pp(e), e.baseURL && (r = e.url, !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(r)) && (e.url = (t = e.baseURL, (n = e.url) ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t)), e.headers = e.headers || {}, e.data = Xl(e.data, e.headers, e.transformRequest), e.headers = Kl.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), Kl.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
				delete e.headers[t]
			}), (e.adapter || Rp.adapter)(e).then(function(t) {
				return Pp(e), t.data = Xl(t.data, t.headers, e.transformResponse), t
			}, function(t) {
				return Jl(t) || (Pp(e), t && t.response && (t.response.data = Xl(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
			})
		},
		Gp = function(e, t) {
			t = t || {};
			var n = {};
			return Kl.forEach(["url", "method", "params", "data"], function(e) {
				void 0 !== t[e] && (n[e] = t[e])
			}), Kl.forEach(["headers", "auth", "proxy"], function(r) {
				Kl.isObject(t[r]) ? n[r] = Kl.deepMerge(e[r], t[r]) : void 0 !== t[r] ? n[r] = t[r] : Kl.isObject(e[r]) ? n[r] = Kl.deepMerge(e[r]) : void 0 !== e[r] && (n[r] = e[r])
			}), Kl.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function(r) {
				void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
			}), n
		};

	function bp(e) {
		this.defaults = e, this.interceptors = {
			request: new Wl,
			response: new Wl
		}
	}
	bp.prototype.request = function(e) {
		"string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = Gp(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get";
		var t = [kp, void 0],
			n = Promise.resolve(e);
		for (this.interceptors.request.forEach(function(e) {
			t.unshift(e.fulfilled, e.rejected)
		}), this.interceptors.response.forEach(function(e) {
			t.push(e.fulfilled, e.rejected)
		}); t.length;) n = n.then(t.shift(), t.shift());
		return n
	}, bp.prototype.getUri = function(e) {
		return e = Gp(this.defaults, e), Vl(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
	}, Kl.forEach(["delete", "get", "head", "options"], function(e) {
		bp.prototype[e] = function(t, n) {
			return this.request(Kl.merge(n || {}, {
				method: e,
				url: t
			}))
		}
	}), Kl.forEach(["post", "put", "patch"], function(e) {
		bp.prototype[e] = function(t, n, r) {
			return this.request(Kl.merge(r || {}, {
				method: e,
				url: t,
				data: n
			}))
		}
	});
	var wp = bp;

	function Up(e) {
		this.message = e
	}
	Up.prototype.toString = function() {
		return "Cancel" + (this.message ? ": " + this.message : "")
	}, Up.prototype.__CANCEL__ = 1;
	var Fp = Up;

	function xp(e) {
		if ("function" != typeof e) throw new TypeError("executor must be a function.");
		var t;
		this.promise = new Promise(function(e) {
			t = e
		});
		var n = this;
		e(function(e) {
			n.reason || (n.reason = new Fp(e), t(n.reason))
		})
	}
	xp.prototype.throwIfRequested = function() {
		if (this.reason) throw this.reason
	}, xp.source = function() {
		var e;
		return {
			token: new xp(function(t) {
				e = t
			}),
			cancel: e
		}
	};
	var qp = xp;

	function jp(e) {
		var t = new wp(e),
			n = Fl(wp.prototype.request, t);
		return Kl.extend(n, wp.prototype, t), Kl.extend(n, t), n
	}
	var Bp = jp(Rp);
	Bp.Axios = wp, Bp.create = function(e) {
		return jp(Gp(Bp.defaults, e))
	}, Bp.Cancel = Fp, Bp.CancelToken = qp, Bp.isCancel = Jl, Bp.all = function(e) {
		return Promise.all(e)
	}, Bp.spread = function(e) {
		return function(t) {
			return e.apply(null, t)
		}
	};
	var Hp = Bp,
		Kp = Bp;
	Hp.
default = Kp;
	var Yp = Hp,
		Vp = Yp.create({
			timeout: 6e3,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
			}
		});
	Vp.interceptors.response.use(function(e) {
		var t = e.data,
			n = t.error_code,
			r = t.ErrorCode;
		return Wc(n) && (r = n), r != Cl.REQUEST.SUCCESS && (e.data.ErrorCode = Number(r)), e
	}, function(e) {
		return "Network Error" === e.message && (1 == Vp.defaults.withCredentials && zc.warn("Network Error, try to close `IMAxios.defaults.withCredentials` to false. (IMAxios.js)"), Vp.defaults.withCredentials = 0), Promise.reject(e)
	});
	var zp = function() {
			function e() {
				Nn(this, e)
			}
			return Rn(e, [{
				key: "request",
				value: function(e) {
					console.warn("请注意： ConnectionBase.request() 方法必须被派生类重写:"), console.log("参数如下：\n    * @param {String}options.url\tstring\t\t是\t开发者服务器接口地址\t\n    * @param {Any}options.data\t- string/object/ArrayBuffer\t\t否\t请求的参数\t\n    * @param {Object}options.header\tObject\t\t否\t设置请求的 header，\n    * @param {String}options.method\tstring\tGET\t否\tHTTP 请求方法\t\n    * @param {String}options.dataType\tstring\tjson\t否\t返回的数据格式\t\n    * @param {String}options.responseType\tstring\ttext\t否\t响应的数据类型\t\n    * @param {Boolean}isRetry\tstring\ttext\tfalse\t是否为重试的请求\t\n   ")
				}
			}, {
				key: "_checkOptions",
				value: function(e) {
					if (0 == !! e.url) throw new gs({
						code: fs.NETWORK_BASE_OPTIONS_NO_URL,
						message: hs.NETWORK_BASE_OPTIONS_NO_URL
					})
				}
			}, {
				key: "_initOptions",
				value: function(e) {
					e.method = ["POST", "GET", "PUT", "DELETE", "OPTION"].indexOf(e.method) >= 0 ? e.method : "POST", e.dataType = e.dataType || "json", e.responseType = e.responseType || "json"
				}
			}]), e
		}(),
		Wp = function(e) {
			function t() {
				var e;
				return Nn(this, t), (e = qn(this, bn(t).call(this))).retry = 1, e
			}
			return Gn(t, zp), Rn(t, [{
				key: "request",
				value: function(e) {
					return this._checkOptions(e), this._initOptions(e), this._requestWithRetry({
						url: e.url,
						data: e.data,
						method: e.method
					})
				}
			}, {
				key: "_requestWithRetry",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Vp(e).
					catch (function(r) {
						return t.retry && n < t.retry ? t._requestWithRetry(e, ++n) : Ll(r)
					})
				}
			}]), t
		}(),
		Xp = [],
		Jp = [],
		Qp = "undefined" != typeof Uint8Array ? Uint8Array:
		Array,
		$p = 0;

	function Zp() {
		$p = 1;
		for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, n = e.length; t < n; ++t) Xp[t] = e[t], Jp[e.charCodeAt(t)] = t;
		Jp["-".charCodeAt(0)] = 62, Jp["_".charCodeAt(0)] = 63
	}
	function ef(e, t, n) {
		for (var r, o, i = [], a = t; a < n; a += 3) r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], i.push(Xp[(o = r) >> 18 & 63] + Xp[o >> 12 & 63] + Xp[o >> 6 & 63] + Xp[63 & o]);
		return i.join("")
	}
	function tf(e) {
		var t;
		$p || Zp();
		for (var n = e.length, r = n % 3, o = "", i = [], a = 0, s = n - r; a < s; a += 16383) i.push(ef(e, a, a + 16383 > s ? s : a + 16383));
		return 1 === r ? (t = e[n - 1], o += Xp[t >> 2], o += Xp[t << 4 & 63], o += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o += Xp[t >> 10], o += Xp[t >> 4 & 63], o += Xp[t << 2 & 63], o += "="), i.push(o), i.join("")
	}
	function nf(e, t, n, r, o) {
		var i, a, s = 8 * o - r - 1,
			u = (1 << s) - 1,
			c = u >> 1,
			l = -7,
			p = n ? o - 1 : 0,
			f = n ? -1 : 1,
			h = e[t + p];
		for (p += f, i = h & (1 << -l) - 1, h >>= -l, l += s; l > 0; i = 256 * i + e[t + p], p += f, l -= 8);
		for (a = i & (1 << -l) - 1, i >>= -l, l += r; l > 0; a = 256 * a + e[t + p], p += f, l -= 8);
		if (0 === i) i = 1 - c;
		else {
			if (i === u) return a ? NaN : Infinity * (h ? -1 : 1);
			a += Math.pow(2, r), i -= c
		}
		return (h ? -1 : 1) * a * Math.pow(2, i - r)
	}
	function rf(e, t, n, r, o, i) {
		var a, s, u, c = 8 * i - o - 1,
			l = (1 << c) - 1,
			p = l >> 1,
			f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
			h = r ? 0 : i - 1,
			g = r ? 1 : -1,
			d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
		for (t = Math.abs(t), isNaN(t) || Infinity === t ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (t += a + p >= 1 ? f / u : f * Math.pow(2, 1 - p)) * u >= 2 && (a++, u /= 2), a + p >= l ? (s = 0, a = l) : a + p >= 1 ? (s = (t * u - 1) * Math.pow(2, o), a += p) : (s = t * Math.pow(2, p - 1) * Math.pow(2, o), a = 0)); o >= 8; e[n + h] = 255 & s, h += g, s /= 256, o -= 8);
		for (a = a << o | s, c += o; c > 0; e[n + h] = 255 & a, h += g, a /= 256, c -= 8);
		e[n + h - g] |= 128 * d
	}
	var of = {}.toString,
		af = Array.isArray ||
	function(e) {
		return "[object Array]" == of.call(e)
	};

	function sf() {
		return cf.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
	}
	function uf(e, t) {
		if (sf() < t) throw new RangeError("Invalid typed array length");
		return cf.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = cf.prototype : (null === e && (e = new cf(t)), e.length = t), e
	}
	function cf(e, t, n) {
		if (!(cf.TYPED_ARRAY_SUPPORT || this instanceof cf)) return new cf(e, t, n);
		if ("number" == typeof e) {
			if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
			return ff(this, e)
		}
		return lf(this, e, t, n)
	}
	function lf(e, t, n, r) {
		if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
		return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ?
		function(e, t, n, r) {
			if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
			if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
			t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
			cf.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = cf.prototype : e = hf(e, t);
			return e
		}(e, t, n, r) : "string" == typeof t ?
		function(e, t, n) {
			"string" == typeof n && "" !== n || (n = "utf8");
			if (!cf.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
			var r = 0 | mf(t, n),
				o = (e = uf(e, r)).write(t, n);
			o !== r && (e = e.slice(0, o));
			return e
		}(e, t, n) : function(e, t) {
			if (df(t)) {
				var n = 0 | gf(t.length);
				return 0 === (e = uf(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
			}
			if (t) {
				if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? uf(e, 0) : hf(e, t);
				if ("Buffer" === t.type && af(t.data)) return hf(e, t.data)
			}
			var r;
			throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
		}(e, t)
	}
	function pf(e) {
		if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
		if (e < 0) throw new RangeError('"size" argument must not be negative')
	}
	function ff(e, t) {
		if (pf(t), e = uf(e, t < 0 ? 0 : 0 | gf(t)), !cf.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
		return e
	}
	function hf(e, t) {
		var n = t.length < 0 ? 0 : 0 | gf(t.length);
		e = uf(e, n);
		for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
		return e
	}
	function gf(e) {
		if (e >= sf()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + sf().toString(16) + " bytes");
		return 0 | e
	}
	function df(e) {
		return !(null == e || !e._isBuffer)
	}
	function mf(e, t) {
		if (df(e)) return e.length;
		if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
		"string" != typeof e && (e = "" + e);
		var n = e.length;
		if (0 === n) return 0;
		for (var r = 0;;) switch (t) {
		case "ascii":
		case "latin1":
		case "binary":
			return n;
		case "utf8":
		case "utf-8":
		case void 0:
			return Hf(e).length;
		case "ucs2":
		case "ucs-2":
		case "utf16le":
		case "utf-16le":
			return 2 * n;
		case "hex":
			return n >>> 1;
		case "base64":
			return Kf(e).length;
		default:
			if (r) return Hf(e).length;
			t = ("" + t).toLowerCase(), r = 1
		}
	}
	function _f(e, t, n) {
		var r = 0;
		if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
		if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
		if ((n >>>= 0) <= (t >>>= 0)) return "";
		for (e || (e = "utf8");;) switch (e) {
		case "hex":
			return Pf(this, t, n);
		case "utf8":
		case "utf-8":
			return Of(this, t, n);
		case "ascii":
			return Lf(this, t, n);
		case "latin1":
		case "binary":
			return Rf(this, t, n);
		case "base64":
			return Df(this, t, n);
		case "ucs2":
		case "ucs-2":
		case "utf16le":
		case "utf-16le":
			return kf(this, t, n);
		default:
			if (r) throw new TypeError("Unknown encoding: " + e);
			e = (e + "").toLowerCase(), r = 1
		}
	}
	function vf(e, t, n) {
		var r = e[t];
		e[t] = e[n], e[n] = r
	}
	function Ef(e, t, n, r, o) {
		if (0 === e.length) return -1;
		if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
			if (o) return -1;
			n = e.length - 1
		} else if (n < 0) {
			if (!o) return -1;
			n = 0
		}
		if ("string" == typeof t && (t = cf.from(t, r)), df(t)) return 0 === t.length ? -1 : yf(e, t, n, r, o);
		if ("number" == typeof t) return t &= 255, cf.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : yf(e, [t], n, r, o);
		throw new TypeError("val must be string, number or Buffer")
	}
	function yf(e, t, n, r, o) {
		var i, a = 1,
			s = e.length,
			u = t.length;
		if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
			if (e.length < 2 || t.length < 2) return -1;
			a = 2, s /= 2, u /= 2, n /= 2
		}
		function c(e, t) {
			return 1 === a ? e[t] : e.readUInt16BE(t * a)
		}
		if (o) {
			var l = -1;
			for (i = n; i < s; i++) if (c(e, i) === c(t, -1 === l ? 0 : i - l)) {
				if (-1 === l && (l = i), i - l + 1 === u) return l * a
			} else - 1 !== l && (i -= i - l), l = -1
		} else for (n + u > s && (n = s - u), i = n; i >= 0; i--) {
			for (var p = 1, f = 0; f < u; f++) if (c(e, i + f) !== c(t, f)) {
				p = 0;
				break
			}
			if (p) return i
		}
		return -1
	}
	function Sf(e, t, n, r) {
		n = Number(n) || 0;
		var o = e.length - n;
		r ? (r = Number(r)) > o && (r = o) : r = o;
		var i = t.length;
		if (i % 2 != 0) throw new TypeError("Invalid hex string");
		r > i / 2 && (r = i / 2);
		for (var a = 0; a < r; ++a) {
			var s = parseInt(t.substr(2 * a, 2), 16);
			if (isNaN(s)) return a;
			e[n + a] = s
		}
		return a
	}
	function If(e, t, n, r) {
		return Yf(Hf(t, e.length - n), e, n, r)
	}
	function Tf(e, t, n, r) {
		return Yf(function(e) {
			for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
			return t
		}(t), e, n, r)
	}
	function Cf(e, t, n, r) {
		return Tf(e, t, n, r)
	}
	function Mf(e, t, n, r) {
		return Yf(Kf(t), e, n, r)
	}
	function Af(e, t, n, r) {
		return Yf(function(e, t) {
			for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, o = n % 256, i.push(o), i.push(r);
			return i
		}(t, e.length - n), e, n, r)
	}
	function Df(e, t, n) {
		return 0 === t && n === e.length ? tf(e) : tf(e.slice(t, n))
	}
	function Of(e, t, n) {
		n = Math.min(e.length, n);
		for (var r = [], o = t; o < n;) {
			var i, a, s, u, c = e[o],
				l = null,
				p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
			if (o + p <= n) switch (p) {
			case 1:
				c < 128 && (l = c);
				break;
			case 2:
				128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (l = u);
				break;
			case 3:
				i = e[o + 1], a = e[o + 2], 128 == (192 & i) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (l = u);
				break;
			case 4:
				i = e[o + 1], a = e[o + 2], s = e[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u)
			}
			null === l ? (l = 65533, p = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += p
		}
		return function(e) {
			var t = e.length;
			if (t <= Nf) return String.fromCharCode.apply(String, e);
			var n = "",
				r = 0;
			for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += Nf));
			return n
		}(r)
	}
	cf.TYPED_ARRAY_SUPPORT = void 0 !== dr.TYPED_ARRAY_SUPPORT ? dr.TYPED_ARRAY_SUPPORT : 1, cf.poolSize = 8192, cf._augment = function(e) {
		return e.__proto__ = cf.prototype, e
	}, cf.from = function(e, t, n) {
		return lf(null, e, t, n)
	}, cf.TYPED_ARRAY_SUPPORT && (cf.prototype.__proto__ = Uint8Array.prototype, cf.__proto__ = Uint8Array), cf.alloc = function(e, t, n) {
		return function(e, t, n, r) {
			return pf(t), t <= 0 ? uf(e, t) : void 0 !== n ? "string" == typeof r ? uf(e, t).fill(n, r) : uf(e, t).fill(n) : uf(e, t)
		}(null, e, t, n)
	}, cf.allocUnsafe = function(e) {
		return ff(null, e)
	}, cf.allocUnsafeSlow = function(e) {
		return ff(null, e)
	}, cf.isBuffer = function(e) {
		return null != e && ( !! e._isBuffer || Vf(e) ||
		function(e) {
			return "function" == typeof e.readFloatLE && "function" == typeof e.slice && Vf(e.slice(0, 0))
		}(e))
	}, cf.compare = function(e, t) {
		if (!df(e) || !df(t)) throw new TypeError("Arguments must be Buffers");
		if (e === t) return 0;
		for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o) if (e[o] !== t[o]) {
			n = e[o], r = t[o];
			break
		}
		return n < r ? -1 : r < n ? 1 : 0
	}, cf.isEncoding = function(e) {
		switch (String(e).toLowerCase()) {
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
			return 1;
		default:
			return 0
		}
	}, cf.concat = function(e, t) {
		if (!af(e)) throw new TypeError('"list" argument must be an Array of Buffers');
		if (0 === e.length) return cf.alloc(0);
		var n;
		if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
		var r = cf.allocUnsafe(t),
			o = 0;
		for (n = 0; n < e.length; ++n) {
			var i = e[n];
			if (!df(i)) throw new TypeError('"list" argument must be an Array of Buffers');
			i.copy(r, o), o += i.length
		}
		return r
	}, cf.byteLength = mf, cf.prototype._isBuffer = 1, cf.prototype.swap16 = function() {
		var e = this.length;
		if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
		for (var t = 0; t < e; t += 2) vf(this, t, t + 1);
		return this
	}, cf.prototype.swap32 = function() {
		var e = this.length;
		if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
		for (var t = 0; t < e; t += 4) vf(this, t, t + 3), vf(this, t + 1, t + 2);
		return this
	}, cf.prototype.swap64 = function() {
		var e = this.length;
		if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
		for (var t = 0; t < e; t += 8) vf(this, t, t + 7), vf(this, t + 1, t + 6), vf(this, t + 2, t + 5), vf(this, t + 3, t + 4);
		return this
	}, cf.prototype.toString = function() {
		var e = 0 | this.length;
		return 0 === e ? "" : 0 === arguments.length ? Of(this, 0, e) : _f.apply(this, arguments)
	}, cf.prototype.equals = function(e) {
		if (!df(e)) throw new TypeError("Argument must be a Buffer");
		return this === e ? 1 : 0 === cf.compare(this, e)
	}, cf.prototype.inspect = function() {
		var e = "";
		return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">"
	}, cf.prototype.compare = function(e, t, n, r, o) {
		if (!df(e)) throw new TypeError("Argument must be a Buffer");
		if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
		if (r >= o && t >= n) return 0;
		if (r >= o) return -1;
		if (t >= n) return 1;
		if (this === e) return 0;
		for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(i, a), u = this.slice(r, o), c = e.slice(t, n), l = 0; l < s; ++l) if (u[l] !== c[l]) {
			i = u[l], a = c[l];
			break
		}
		return i < a ? -1 : a < i ? 1 : 0
	}, cf.prototype.includes = function(e, t, n) {
		return -1 !== this.indexOf(e, t, n)
	}, cf.prototype.indexOf = function(e, t, n) {
		return Ef(this, e, t, n, 1)
	}, cf.prototype.lastIndexOf = function(e, t, n) {
		return Ef(this, e, t, n, 0)
	}, cf.prototype.write = function(e, t, n, r) {
		if (void 0 === t) r = "utf8", n = this.length, t = 0;
		else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
		else {
			if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
			t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
		}
		var o = this.length - t;
		if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
		r || (r = "utf8");
		for (var i = 0;;) switch (r) {
		case "hex":
			return Sf(this, e, t, n);
		case "utf8":
		case "utf-8":
			return If(this, e, t, n);
		case "ascii":
			return Tf(this, e, t, n);
		case "latin1":
		case "binary":
			return Cf(this, e, t, n);
		case "base64":
			return Mf(this, e, t, n);
		case "ucs2":
		case "ucs-2":
		case "utf16le":
		case "utf-16le":
			return Af(this, e, t, n);
		default:
			if (i) throw new TypeError("Unknown encoding: " + r);
			r = ("" + r).toLowerCase(), i = 1
		}
	}, cf.prototype.toJSON = function() {
		return {
			type: "Buffer",
			data: Array.prototype.slice.call(this._arr || this, 0)
		}
	};
	var Nf = 4096;

	function Lf(e, t, n) {
		var r = "";
		n = Math.min(e.length, n);
		for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
		return r
	}
	function Rf(e, t, n) {
		var r = "";
		n = Math.min(e.length, n);
		for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
		return r
	}
	function Pf(e, t, n) {
		var r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		for (var o = "", i = t; i < n; ++i) o += Bf(e[i]);
		return o
	}
	function kf(e, t, n) {
		for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
		return o
	}
	function Gf(e, t, n) {
		if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
		if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
	}
	function bf(e, t, n, r, o, i) {
		if (!df(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
		if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
		if (n + r > e.length) throw new RangeError("Index out of range")
	}
	function wf(e, t, n, r) {
		t < 0 && (t = 65535 + t + 1);
		for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o) e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
	}
	function Uf(e, t, n, r) {
		t < 0 && (t = 4294967295 + t + 1);
		for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o) e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255
	}
	function Ff(e, t, n, r, o, i) {
		if (n + r > e.length) throw new RangeError("Index out of range");
		if (n < 0) throw new RangeError("Index out of range")
	}
	function xf(e, t, n, r, o) {
		return o || Ff(e, 0, n, 4), rf(e, t, n, r, 23, 4), n + 4
	}
	function qf(e, t, n, r, o) {
		return o || Ff(e, 0, n, 8), rf(e, t, n, r, 52, 8), n + 8
	}
	cf.prototype.slice = function(e, t) {
		var n, r = this.length;
		if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), cf.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = cf.prototype;
		else {
			var o = t - e;
			n = new cf(o, void 0);
			for (var i = 0; i < o; ++i) n[i] = this[i + e]
		}
		return n
	}, cf.prototype.readUIntLE = function(e, t, n) {
		e |= 0, t |= 0, n || Gf(e, t, this.length);
		for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
		return r
	}, cf.prototype.readUIntBE = function(e, t, n) {
		e |= 0, t |= 0, n || Gf(e, t, this.length);
		for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o;
		return r
	}, cf.prototype.readUInt8 = function(e, t) {
		return t || Gf(e, 1, this.length), this[e]
	}, cf.prototype.readUInt16LE = function(e, t) {
		return t || Gf(e, 2, this.length), this[e] | this[e + 1] << 8
	}, cf.prototype.readUInt16BE = function(e, t) {
		return t || Gf(e, 2, this.length), this[e] << 8 | this[e + 1]
	}, cf.prototype.readUInt32LE = function(e, t) {
		return t || Gf(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
	}, cf.prototype.readUInt32BE = function(e, t) {
		return t || Gf(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
	}, cf.prototype.readIntLE = function(e, t, n) {
		e |= 0, t |= 0, n || Gf(e, t, this.length);
		for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
		return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
	}, cf.prototype.readIntBE = function(e, t, n) {
		e |= 0, t |= 0, n || Gf(e, t, this.length);
		for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o;
		return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
	}, cf.prototype.readInt8 = function(e, t) {
		return t || Gf(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
	}, cf.prototype.readInt16LE = function(e, t) {
		t || Gf(e, 2, this.length);
		var n = this[e] | this[e + 1] << 8;
		return 32768 & n ? 4294901760 | n : n
	}, cf.prototype.readInt16BE = function(e, t) {
		t || Gf(e, 2, this.length);
		var n = this[e + 1] | this[e] << 8;
		return 32768 & n ? 4294901760 | n : n
	}, cf.prototype.readInt32LE = function(e, t) {
		return t || Gf(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
	}, cf.prototype.readInt32BE = function(e, t) {
		return t || Gf(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
	}, cf.prototype.readFloatLE = function(e, t) {
		return t || Gf(e, 4, this.length), nf(this, e, 1, 23, 4)
	}, cf.prototype.readFloatBE = function(e, t) {
		return t || Gf(e, 4, this.length), nf(this, e, 0, 23, 4)
	}, cf.prototype.readDoubleLE = function(e, t) {
		return t || Gf(e, 8, this.length), nf(this, e, 1, 52, 8)
	}, cf.prototype.readDoubleBE = function(e, t) {
		return t || Gf(e, 8, this.length), nf(this, e, 0, 52, 8)
	}, cf.prototype.writeUIntLE = function(e, t, n, r) {
		(e = +e, t |= 0, n |= 0, r) || bf(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
		var o = 1,
			i = 0;
		for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
		return t + n
	}, cf.prototype.writeUIntBE = function(e, t, n, r) {
		(e = +e, t |= 0, n |= 0, r) || bf(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
		var o = n - 1,
			i = 1;
		for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
		return t + n
	}, cf.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t |= 0, n || bf(this, e, t, 1, 255, 0), cf.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
	}, cf.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t |= 0, n || bf(this, e, t, 2, 65535, 0), cf.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : wf(this, e, t, 1), t + 2
	}, cf.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t |= 0, n || bf(this, e, t, 2, 65535, 0), cf.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : wf(this, e, t, 0), t + 2
	}, cf.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t |= 0, n || bf(this, e, t, 4, 4294967295, 0), cf.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : Uf(this, e, t, 1), t + 4
	}, cf.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t |= 0, n || bf(this, e, t, 4, 4294967295, 0), cf.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : Uf(this, e, t, 0), t + 4
	}, cf.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t |= 0, !r) {
			var o = Math.pow(2, 8 * n - 1);
			bf(this, e, t, n, o - 1, -o)
		}
		var i = 0,
			a = 1,
			s = 0;
		for (this[t] = 255 & e; ++i < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
		return t + n
	}, cf.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t |= 0, !r) {
			var o = Math.pow(2, 8 * n - 1);
			bf(this, e, t, n, o - 1, -o)
		}
		var i = n - 1,
			a = 1,
			s = 0;
		for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
		return t + n
	}, cf.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t |= 0, n || bf(this, e, t, 1, 127, -128), cf.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
	}, cf.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t |= 0, n || bf(this, e, t, 2, 32767, -32768), cf.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : wf(this, e, t, 1), t + 2
	}, cf.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t |= 0, n || bf(this, e, t, 2, 32767, -32768), cf.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : wf(this, e, t, 0), t + 2
	}, cf.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t |= 0, n || bf(this, e, t, 4, 2147483647, -2147483648), cf.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : Uf(this, e, t, 1), t + 4
	}, cf.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t |= 0, n || bf(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), cf.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : Uf(this, e, t, 0), t + 4
	}, cf.prototype.writeFloatLE = function(e, t, n) {
		return xf(this, e, t, 1, n)
	}, cf.prototype.writeFloatBE = function(e, t, n) {
		return xf(this, e, t, 0, n)
	}, cf.prototype.writeDoubleLE = function(e, t, n) {
		return qf(this, e, t, 1, n)
	}, cf.prototype.writeDoubleBE = function(e, t, n) {
		return qf(this, e, t, 0, n)
	}, cf.prototype.copy = function(e, t, n, r) {
		if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
		if (0 === e.length || 0 === this.length) return 0;
		if (t < 0) throw new RangeError("targetStart out of bounds");
		if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
		if (r < 0) throw new RangeError("sourceEnd out of bounds");
		r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
		var o, i = r - n;
		if (this === e && n < t && t < r) for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
		else if (i < 1e3 || !cf.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) e[o + t] = this[o + n];
		else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
		return i
	}, cf.prototype.fill = function(e, t, n, r) {
		if ("string" == typeof e) {
			if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
				var o = e.charCodeAt(0);
				o < 256 && (e = o)
			}
			if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
			if ("string" == typeof r && !cf.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
		} else "number" == typeof e && (e &= 255);
		if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
		if (n <= t) return this;
		var i;
		if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (i = t; i < n; ++i) this[i] = e;
		else {
			var a = df(e) ? e : Hf(new cf(e, r).toString()),
				s = a.length;
			for (i = 0; i < n - t; ++i) this[i + t] = a[i % s]
		}
		return this
	};
	var jf = /[^+\/0-9A-Za-z-_]/g;

	function Bf(e) {
		return e < 16 ? "0" + e.toString(16) : e.toString(16)
	}
	function Hf(e, t) {
		var n;
		t = t || Infinity;
		for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
			if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
				if (!o) {
					if (n > 56319) {
						(t -= 3) > -1 && i.push(239, 191, 189);
						continue
					}
					if (a + 1 === r) {
						(t -= 3) > -1 && i.push(239, 191, 189);
						continue
					}
					o = n;
					continue
				}
				if (n < 56320) {
					(t -= 3) > -1 && i.push(239, 191, 189), o = n;
					continue
				}
				n = 65536 + (o - 55296 << 10 | n - 56320)
			} else o && (t -= 3) > -1 && i.push(239, 191, 189);
			if (o = null, n < 128) {
				if ((t -= 1) < 0) break;
				i.push(n)
			} else if (n < 2048) {
				if ((t -= 2) < 0) break;
				i.push(n >> 6 | 192, 63 & n | 128)
			} else if (n < 65536) {
				if ((t -= 3) < 0) break;
				i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
			} else {
				if (!(n < 1114112)) throw new Error("Invalid code point");
				if ((t -= 4) < 0) break;
				i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
			}
		}
		return i
	}
	function Kf(e) {
		return function(e) {
			var t, n, r, o, i, a;
			$p || Zp();
			var s = e.length;
			if (s % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			i = "=" === e[s - 2] ? 2 : "=" === e[s - 1] ? 1 : 0, a = new Qp(3 * s / 4 - i), r = i > 0 ? s - 4 : s;
			var u = 0;
			for (t = 0, n = 0; t < r; t += 4, n += 3) o = Jp[e.charCodeAt(t)] << 18 | Jp[e.charCodeAt(t + 1)] << 12 | Jp[e.charCodeAt(t + 2)] << 6 | Jp[e.charCodeAt(t + 3)], a[u++] = o >> 16 & 255, a[u++] = o >> 8 & 255, a[u++] = 255 & o;
			return 2 === i ? (o = Jp[e.charCodeAt(t)] << 2 | Jp[e.charCodeAt(t + 1)] >> 4, a[u++] = 255 & o) : 1 === i && (o = Jp[e.charCodeAt(t)] << 10 | Jp[e.charCodeAt(t + 1)] << 4 | Jp[e.charCodeAt(t + 2)] >> 2, a[u++] = o >> 8 & 255, a[u++] = 255 & o), a
		}(function(e) {
			if ((e = function(e) {
				return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
			}(e).replace(jf, "")).length < 2) return "";
			for (; e.length % 4 != 0;) e += "=";
			return e
		}(e))
	}
	function Yf(e, t, n, r) {
		for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
		return o
	}
	function Vf(e) {
		return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
	}
	var zf = function(e) {
			function t() {
				var e;
				return Nn(this, t), (e = qn(this, bn(t).call(this)))._request = e.promisify(wx.request), e
			}
			return Gn(t, zp), Rn(t, [{
				key: "request",
				value: function(e) {
					return this._checkOptions(e), this._initOptions(e), e = kn({}, e, {
						responseType: "text"
					}), this._request(e).then(this._handleResolve).
					catch (this._handleReject)
				}
			}, {
				key: "_handleResolve",
				value: function(e) {
					var t = e.data,
						n = t.error_code,
						r = t.ErrorCode;
					return "number" == typeof n && (r = n), r !== Cl.REQUEST.SUCCESS && (e.data.ErrorCode = Number("".concat(r))), e
				}
			}, {
				key: "_handleReject",
				value: function(e) {
					if (Xc(e.errMsg)) {
						if (e.errMsg.includes("abort")) return Nl({});
						if (e.errMsg.includes("timeout")) return Ll(new gs({
							code: fs.NETWORK_TIMEOUT,
							message: e.errMsg
						}));
						if (e.errMsg.includes("fail")) return Ll(new gs({
							code: fs.NETWORK_ERROR,
							message: e.errMsg
						}))
					}
					return Ll(new gs(kn({
						code: fs.UNCAUGHT_ERROR,
						message: e.message
					}, e)))
				}
			}, {
				key: "promisify",
				value: function(e) {
					return function(t) {
						return new Promise(function(n, r) {
							var o = e(Object.assign({}, t, {
								success: n,
								fail: r
							}));
							t.updateAbort && t.updateAbort(function() {
								return o.abort()
							})
						})
					}
				}
			}]), t
		}(),
		Wf = function() {
			function e() {
				Nn(this, e), this.request = 0, this.success = 0, this.fail = 0, this.reportRate = 10, this.requestTimeCost = []
			}
			return Rn(e, [{
				key: "report",
				value: function() {
					if (1 !== this.request) {
						if (this.request % this.reportRate != 0) return null;
						var e = this.avgRequestTime(),
							t = "runLoop reports: success=".concat(this.success, ",fail=").concat(this.fail, ",total=").concat(this.request, ",avg=").concat(e, ",cur=").concat(this.requestTimeCost[this.requestTimeCost.length - 1], ",max=").concat(Math.max.apply(null, this.requestTimeCost), ",min=").concat(Math.min.apply(null, this.requestTimeCost));
						zc.log(t)
					}
				}
			}, {
				key: "setRequestTime",
				value: function(e, t) {
					var n = Math.abs(t - e);
					100 === this.requestTimeCost.length && this.requestTimeCost.shift(), this.requestTimeCost.push(n)
				}
			}, {
				key: "avgRequestTime",
				value: function() {
					for (var e, t = this.requestTimeCost.length, n = 0, r = 0; r < t; r++) n += this.requestTimeCost[r];
					return e = n / t, Math.round(100 * e) / 100
				}
			}]), e
		}(),
		Xf = Yp.CancelToken,
		Jf = function() {
			function e(t) {
				Nn(this, e), this._initializeOptions(t), this._initializeMembers(), this.status = new Wf
			}
			return Rn(e, [{
				key: "destructor",
				value: function() {
					clearTimeout(this._seedID);
					var e = this._index();
					for (var t in this) this[t] = null;
					return e
				}
			}, {
				key: "setIndex",
				value: function(e) {
					this._index = e
				}
			}, {
				key: "getIndex",
				value: function() {
					return this._index
				}
			}, {
				key: "isRunning",
				value: function() {
					return !this._stoped
				}
			}, {
				key: "_initializeOptions",
				value: function(e) {
					this.options = e
				}
			}, {
				key: "_initializeMembers",
				value: function() {
					this._index = -1, this._seedID = 0, this._requestStatus = 0, this._stoped = 0, this._intervalTime = 0, this._intervalIncreaseStep = 1e3, this._intervalDecreaseStep = 1e3, this._intervalTimeMax = 5e3, this._protectTimeout = 3e3, this._getNoticeSeq = this.options.getNoticeSeq, this._retryCount = 0, this._responseTime = Date.now(), this._responseTimeThreshold = 2e3, this.requestor = Vp, this.abort = null
				}
			}, {
				key: "start",
				value: function() {
					0 == this._seedID ? (this._stoped = 0, this._send()) : zc.log('XHRRunLoop.start(), XHRRunLoop is running now, if you want to restart runLoop , please run "stop()" first.')
				}
			}, {
				key: "_reset",
				value: function() {
					zc.log("XHRRunLoop._reset(), reset long poll _intervalTime", this._intervalTime), this.stop(), this.start()
				}
			}, {
				key: "_intervalTimeIncrease",
				value: function() {
					this._intervalTime !== this._responseTimeThreshold && (this._intervalTime < this._responseTimeThreshold && (this._intervalTime += this._intervalIncreaseStep), this._intervalTime > this._responseTimeThreshold && (this._intervalTime = this._responseTimeThreshold))
				}
			}, {
				key: "_intervalTimeDecrease",
				value: function() {
					0 !== this._intervalTime && (this._intervalTime > 0 && (this._intervalTime -= this._intervalDecreaseStep), this._intervalTime < 0 && (this._intervalTime = 0))
				}
			}, {
				key: "_intervalTimeAdjustment",
				value: function() {
					var e = Date.now();
					100 * Math.floor((e - this._responseTime) / 100) <= this._responseTimeThreshold ? this._intervalTimeIncrease() : this._intervalTimeDecrease(), this._responseTime = e
				}
			}, {
				key: "_intervalTimeAdjustmentBaseOnResponseData",
				value: function(e) {
					e.ErrorCode === Cl.REQUEST.SUCCESS ? this._intervalTimeDecrease() : this._intervalTimeIncrease()
				}
			}, {
				key: "_send",
				value: function() {
					var e = this;
					if (1 != this._requestStatus) {
						this._requestStatus = 1, this.status.request++, "function" == typeof this.options.before && this.options.before(this.options.pack.requestData);
						var t = Date.now(),
							n = 0;
						this.requestor.request({
							url: this.options.pack.getUrl(),
							data: this.options.pack.requestData,
							method: this.options.pack.method,
							cancelToken: new Xf(function(t) {
								e.abort = t
							})
						}).then(function(r) {
							if (e._intervalTimeAdjustmentBaseOnResponseData.bind(e)(r.data), e._retryCount > 0 && (e._retryCount = 0), e.status.success++, "function" == typeof e.options.success) try {
								e.options.success({
									pack: e.options.pack,
									error: 0,
									data: e.options.pack.callback(r.data)
								})
							} catch (o) {
								zc.warn("XHRRunLoop._send(), success callback error:"), zc.error(o)
							}
							e._requestStatus = 0, 0 == e._stoped && (e._seedID = setTimeout(e._send.bind(e), e._intervalTime)), n = Date.now(), e.status.setRequestTime(t, n), e.status.report()
						}).
						catch (function(r) {
							if (e.status.fail++, e._retryCount++, e._intervalTimeAdjustment.bind(e)(), 0 == e._stoped && (e._seedID = setTimeout(e._send.bind(e), e._intervalTime)), e._requestStatus = 0, "function" == typeof e.options.fail && void 0 !== r.request) try {
								e.options.fail({
									pack: e.options.pack,
									error: r,
									data: 0
								})
							} catch (o) {
								zc.warn("XHRRunLoop._send(), fail callback error:"), zc.error(o)
							}
							n = Date.now(), e.status.setRequestTime(t, n), e.status.report()
						})
					}
				}
			}, {
				key: "stop",
				value: function() {
					this._clearAllTimeOut(), this._stoped = 1
				}
			}, {
				key: "_clearAllTimeOut",
				value: function() {
					clearTimeout(this._seedID), this._seedID = 0
				}
			}]), e
		}(),
		Qf = function() {
			function e(t) {
				Nn(this, e), this._initializeOptions(t), this._initializeMembers(), this.status = new Wf
			}
			return Rn(e, [{
				key: "destructor",
				value: function() {
					clearTimeout(this._seedID);
					var e = this._index();
					for (var t in this) this[t] = null;
					return e
				}
			}, {
				key: "setIndex",
				value: function(e) {
					this._index = e
				}
			}, {
				key: "isRunning",
				value: function() {
					return !this._stoped
				}
			}, {
				key: "getIndex",
				value: function() {
					return this._index
				}
			}, {
				key: "_initializeOptions",
				value: function(e) {
					this.options = e
				}
			}, {
				key: "_initializeMembers",
				value: function() {
					this._index = -1, this._seedID = 0, this._requestStatus = 0, this._stoped = 0, this._intervalTime = 0, this._intervalIncreaseStep = 1e3, this._intervalDecreaseStep = 1e3, this._intervalTimeMax = 5e3, this._protectTimeout = 3e3, this._getNoticeSeq = this.options.getNoticeSeq, this._retryCount = 0, this._responseTime = Date.now(), this._responseTimeThreshold = 2e3, this.requestor = new zf, this.abort = null
				}
			}, {
				key: "start",
				value: function() {
					0 === this._seedID ? (this._stoped = 0, this._send()) : zc.log('WXRunLoop.start(): WXRunLoop is running now, if you want to restart runLoop , please run "stop()" first.')
				}
			}, {
				key: "_reset",
				value: function() {
					zc.log("WXRunLoop.reset(), long poll _intervalMaxRate", this._intervalMaxRate), this.stop(), this.start()
				}
			}, {
				key: "_intervalTimeIncrease",
				value: function() {
					this._intervalTime !== this._responseTimeThreshold && (this._intervalTime < this._responseTimeThreshold && (this._intervalTime += this._intervalIncreaseStep), this._intervalTime > this._responseTimeThreshold && (this._intervalTime = this._responseTimeThreshold))
				}
			}, {
				key: "_intervalTimeDecrease",
				value: function() {
					0 !== this._intervalTime && (this._intervalTime > 0 && (this._intervalTime -= this._intervalDecreaseStep), this._intervalTime < 0 && (this._intervalTime = 0))
				}
			}, {
				key: "_intervalTimeAdjustment",
				value: function() {
					var e = Date.now();
					100 * Math.floor((e - this._responseTime) / 100) <= this._responseTimeThreshold ? this._intervalTimeIncrease() : this._intervalTimeDecrease(), this._responseTime = e
				}
			}, {
				key: "_intervalTimeAdjustmentBaseOnResponseData",
				value: function(e) {
					e.ErrorCode === Cl.REQUEST.SUCCESS ? this._intervalTimeDecrease() : this._intervalTimeIncrease()
				}
			}, {
				key: "_send",
				value: function() {
					var e = this;
					if (1 != this._requestStatus) {
						var t = this;
						this._requestStatus = 1, this.status.request++, "function" == typeof this.options.before && this.options.before(t.options.pack.requestData);
						var n = Date.now(),
							r = 0;
						this.requestor.request({
							url: t.options.pack.getUrl(),
							data: t.options.pack.requestData,
							method: t.options.pack.method,
							updateAbort: function(t) {
								e.abort = t
							}
						}).then(function(o) {
							if (t._intervalTimeAdjustmentBaseOnResponseData.bind(e)(o.data), t._retryCount > 0 && (t._retryCount = 0), e.status.success++, "function" == typeof t.options.success) try {
								e.options.success({
									pack: e.options.pack,
									error: 0,
									data: e.options.pack.callback(o.data)
								})
							} catch (i) {
								zc.warn("WXRunLoop._send(),success callback error:"), zc.error(i)
							}
							t._requestStatus = 0, 0 == t._stoped && (t._seedID = setTimeout(t._send.bind(t), t._intervalTime)), r = Date.now(), e.status.setRequestTime(n, r), e.status.report()
						}).
						catch (function(o) {
							if (e.status.fail++, t._retryCount++, t._intervalTimeAdjustment.bind(e)(), 0 == t._stoped && (t._seedID = setTimeout(t._send.bind(t), t._intervalTime)), t._requestStatus = 0, "function" == typeof t.options.fail) try {
								e.options.fail({
									pack: e.options.pack,
									error: o,
									data: 0
								})
							} catch (i) {
								zc.warn("WXRunLoop._send(), fail callback error:"), zc.error(i)
							}
							r = Date.now(), e.status.setRequestTime(n, r), e.status.report()
						})
					}
				}
			}, {
				key: "stop",
				value: function() {
					this._clearAllTimeOut(), this._stoped = 1
				}
			}, {
				key: "_clearAllTimeOut",
				value: function() {
					clearTimeout(this._seedID), this._seedID = 0
				}
			}]), e
		}(),
		$f = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this, e))).context = e.context, n.httpConnection = n._getHttpconnection(), n.keepAliveConnections = [], n
			}
			return Gn(t, Sl), Rn(t, [{
				key: "initializeListener",
				value: function() {
					this.tim.innerEmitter.on($s.SIGN_LOGOUT_EXECUTING, this._stopAllRunLoop, this)
				}
			}, {
				key: "request",
				value: function(e) {
					var t = {
						url: e.url,
						data: e.requestData,
						method: e.method,
						callback: e.callback
					};
					return this.httpConnection.request(t).then(function(t) {
						return t.data = e.callback(t.data), t.data.errorCode !== Cl.REQUEST.SUCCESS ? Ll(new gs({
							code: t.data.errorCode,
							message: t.data.errorInfo
						})) : t
					})
				}
			}, {
				key: "createRunLoop",
				value: function(e) {
					var t = this.createKeepAliveConnection(e);
					return t.setIndex(this.keepAliveConnections.push(t) - 1), t
				}
			}, {
				key: "stopRunLoop",
				value: function(e) {
					e.stop()
				}
			}, {
				key: "_stopAllRunLoop",
				value: function() {
					for (var e = this.keepAliveConnections.length, t = 0; t < e; t++) this.keepAliveConnections[t].stop()
				}
			}, {
				key: "destroyRunLoop",
				value: function(e) {
					e.stop();
					var t = e.destructor();
					this.keepAliveConnections.slice(t, 1)
				}
			}, {
				key: "startRunLoopExclusive",
				value: function(e) {
					for (var t = e.getIndex(), n = 0; n < this.keepAliveConnections.length; n++) n != t && this.keepAliveConnections[n].stop();
					e.start()
				}
			}, {
				key: "_getHttpconnection",
				value: function() {
					return Tc ? new zf : new Wp
				}
			}, {
				key: "createKeepAliveConnection",
				value: function(e) {
					return Tc ? new Qf(e) : this.tim.options.runLoopNetType === hn.XHR ? new Jf(e) : (this.tim.options.runLoopNetType, "function" == typeof window.WebSocket && window.WebSocket.prototype.send, new Jf(e))
				}
			}, {
				key: "clearAll",
				value: function() {
					this.conn.cancelAll()
				}
			}, {
				key: "reset",
				value: function() {
					this.keepAliveConnections = []
				}
			}]), t
		}(),
		Zf = "https://cloud.tencent.com/document/product/269/1671";
	void 0 === console.table && (console.table = console.log);
	var eh = {
		"-1": "Unknow error level",
		1: "Note",
		2: "Warn",
		3: "Error",
		4: "Fatal error"
	},
		th = function(e, t) {
			var n = eh[e.level];
			zc.warn("".concat(n, " - Code: [").concat(e.code, "]; message: ").concat(e.message)), zc.warn("Stack\n", e.stack);
			var r = [e.tips || "", "\n", t].join("");
			0 == !! r && (r = 0), r && zc.log("About IMError ".concat(e.code, ": ").concat(r))
		},
		nh = {
			f9999998: function(e) {
				th(e)
			},
			f9999999: function(e) {
				th(e, "在errorCode.js文件中为此错误创建一个错误码")
			},
			f: function(e) {
				th(e), "未定义的错误:".concat(e.code, " , ").concat(e.message)
			},
			f20000: function(e) {
				th(e)
			},
			f20001: function(e) {
				th(e)
			},
			f20002: function(e) {
				th(e)
			},
			f30000: function(e) {
				th(e)
			},
			f40004: function(e) {
				th(e, "new Controller(TIMSDK instance)")
			},
			f40005: function(e) {
				th(e)
			},
			f40006: function(e) {
				th(e)
			},
			f40007: function(e) {
				th(e)
			},
			f40008: function(e) {
				th(e)
			},
			f50070003: function(e) {
				var t = e.code.replace("500", "");
				th(e, "Information about error code [".concat(t, "] : ").concat(Zf))
			},
			f50030001: function(e) {
				th(e)
			},
			f50070221: function(e) {
				th(e)
			}
		};
	nh.echo = th;
	var rh = function() {
			function e(t) {
				Nn(this, e), this.methods = nh, this.tim = t, this._initielizeListener()
			}
			return Rn(e, [{
				key: "_initielizeListener",
				value: function() {
					this.tim.innerEmitter.on($s.ERROR_DETECTED, this._onErrorDetected, this)
				}
			}, {
				key: "ask",
				value: function(e) {
					var t = ["f", e.code].join(""),
						n = nh.echo;
					this.methods.hasOwnProperty(t) ? this.methods[t](e) : n(e)
				}
			}, {
				key: "_onErrorDetected",
				value: function(e) {
					this.ask(e), this.tim.outerEmitter.emit(Wt.ERROR, e)
				}
			}]), e
		}(),
		oh = ["jpg", "jpeg", "gif", "png"],
		ih = function() {
			function e(t) {
				Nn(this, e), fr(t) || (this.userID = t.userID || "", this.nick = t.nick || "", this.gender = t.gender || "", this.birthday = t.birthday || 0, this.location = t.location || "", this.selfSignature = t.selfSignature || "", this.allowType = t.allowType || yn.ALLOW_TYPE_ALLOW_ANY, this.language = t.language || 0, this.avatar = t.avatar || "", this.messageSettings = t.messageSettings || 0, this.adminForbidType = t.adminForbidType || yn.FORBID_TYPE_NONE, this.level = t.level || 0, this.role = t.role || 0, this.lastUpdatedTime = 0)
			}
			return Rn(e, [{
				key: "validate",
				value: function(e) {
					var t = 1,
						n = "";
					for (var r in fr(e) && (t = 0, n = "empty options"), e) if (!fr(e[r]) || Xc(e[r]) || Wc(e[r])) switch (r) {
					case "nick":
						Xc(e[r]) || (n = "nick should be a string", t = 0), rl(e[r]) > 500 && (n = "nick name limited: must less than or equal to ".concat(500, " bytes, current size: ").concat(rl(e[r]), " bytes"), t = 0);
						break;
					case "gender":
						il(mn, e.gender) || (n = "key:gender, invalid value:" + e.gender, t = 0);
						break;
					case "birthday":
						Wc(e.birthday) || (n = "birthday should be a number", t = 0);
						break;
					case "location":
						Xc(e.location) || (n = "location should be a string", t = 0);
						break;
					case "selfSignature":
						Xc(e.selfSignature) || (n = "selfSignature should be a string", t = 0);
						break;
					case "allowType":
						il(_n, e.allowType) || (n = "key:allowType, invalid value:" + e.allowType, t = 0);
						break;
					case "language":
						Wc(e.language) || (n = "language should be a number", t = 0);
						break;
					case "avatar":
						Xc(e.avatar) || (n = "avatar should be a string", t = 0);
						break;
					case "messageSettings":
						0 !== e.messageSettings && 1 !== e.messageSettings && (n = "messageSettings should be 0 or 1", t = 0);
						break;
					case "adminForbidType":
						il(vn, e.adminForbidType) || (n = "key:adminForbidType, invalid value:" + e.adminForbidType, t = 0);
						break;
					case "level":
						Wc(e.level) || (n = "level should be a number", t = 0);
						break;
					case "role":
						Wc(e.role) || (n = "role should be a number", t = 0);
						break;
					default:
						n = "unknown key:" + r, t = 0
					} else n = "key:" + r + ", invalid value:" + e[r], t = 0;
					return {
						valid: t,
						tips: n
					}
				}
			}]), e
		}(),
		ah = function() {
			function e(t) {
				Nn(this, e), this.uc = t, this.TAG = "profile", this.Actions = {
					Q: "query",
					U: "update"
				}, this.accountProfileMap = new Map, this.expirationTime = 864e5
			}
			return Rn(e, [{
				key: "setExpirationTime",
				value: function(e) {
					this.expirationTime = e
				}
			}, {
				key: "getUserProfile",
				value: function(e) {
					var t = this,
						n = this.uc.tim,
						r = n.connectionController,
						o = n.outerEmitter,
						i = e.userIDList;
					if (!Qc(i)) return zc.error("ProfileHandler.getUserProfile options.userIDList 必需是数组"), Ll({
						code: fs.GET_PROFILE_INVALID_PARAM,
						message: hs.GET_PROFILE_INVALID_PARAM
					});
					e.fromAccount = this.uc.getMyAccount(), i.length > 100 && (zc.warn("ProfileHandler.getUserProfile 获取用户资料人数不能超过100人"), i.length = 100);
					for (var a, s = [], u = [], c = 0, l = i.length; c < l; c++) a = i[c], this.uc.isMyFriend(a) && this._containsAccount(a) ? u.push(this._getProfileFromMap(a)) : s.push(a);
					if (0 == s.length) return o.emit(Wt.PROFILE_GET_SUCCESS, u), Nl(u);
					e.toAccount = s;
					var p = e.bFromGetMyProfile || 0,
						f = this.uc.makeCapsule(this.TAG, this.Actions.Q, e);
					return r.request(f).then(function(e) {
						zc.info("ProfileHandler.getUserProfile ok");
						var n = t._handleResponse(e).concat(u);
						return o.emit(Wt.PROFILE_GET_SUCCESS, n), p ? (t.uc.onGotMyProfile(), new Al(n[0])) : new Al(n)
					}).
					catch (function(e) {
						return zc.error("ProfileHandler.getUserProfile error:", e), Ll(e, 1)
					})
				}
			}, {
				key: "getMyProfile",
				value: function() {
					var e = this.uc.getMyAccount();
					if (zc.log("ProfileHandler.getMyProfile myAccount=" + e), this._fillMap(), this._containsAccount(e)) {
						var t = this._getProfileFromMap(e);
						return zc.debug("ProfileHandler.getMyProfile from cache, myProfile:" + JSON.stringify(t)), this.uc.tim.outerEmitter.emit(Wt.PROFILE_GET_SUCCESS, [t]), this.uc.onGotMyProfile(), Nl(t)
					}
					return this.getUserProfile({
						fromAccount: e,
						userIDList: [e],
						bFromGetMyProfile: 1
					})
				}
			}, {
				key: "_handleResponse",
				value: function(e) {
					for (var t, n, r = tl.now(), o = e.data.userProfileItem, i = [], a = 0, s = o.length; a < s; a++)"@TLS#NOT_FOUND" != o[a].to && "" != o[a].to && (t = o[a].to, n = this._updateMap(t, this._getLatestProfileFromResponse(t, o[a].profileItem)), i.push(n));
					return zc.log("ProfileHandler._handleResponse cost " + (tl.now() - r) + " ms"), i
				}
			}, {
				key: "_getLatestProfileFromResponse",
				value: function(e, t) {
					var n = {};
					if (n.userID = e, !fr(t)) for (var r = 0, o = t.length; r < o; r++) switch (t[r].tag) {
					case En.NICK:
						n.nick = t[r].value;
						break;
					case En.GENDER:
						n.gender = t[r].value;
						break;
					case En.BIRTHDAY:
						n.birthday = t[r].value;
						break;
					case En.LOCATION:
						n.location = t[r].value;
						break;
					case En.SELFSIGNATURE:
						n.selfSignature = t[r].value;
						break;
					case En.ALLOWTYPE:
						n.allowType = t[r].value;
						break;
					case En.LANGUAGE:
						n.language = t[r].value;
						break;
					case En.AVATAR:
						n.avatar = t[r].value;
						break;
					case En.MESSAGESETTINGS:
						n.messageSettings = t[r].value;
						break;
					case En.ADMINFORBIDTYPE:
						n.adminForbidType = t[r].value;
						break;
					case En.LEVEL:
						n.level = t[r].value;
						break;
					case En.ROLE:
						n.role = t[r].value;
						break;
					default:
						zc.warn("ProfileHandler._handleResponse unkown tag->", t[r].tag)
					}
					return n
				}
			}, {
				key: "updateMyProfile",
				value: function(e) {
					var t = this,
						n = this.uc.tim,
						r = n.connectionController,
						o = n.outerEmitter,
						i = (new ih).validate(e);
					if (!i.valid) return zc.error("ProfileHandler.updateMyProfile info:" + i.tips), Ll({
						code: fs.UPDATE_PROFILE_INVALID_PARAM,
						message: hs.UPDATE_PROFILE_INVALID_PARAM
					});
					var a = [];
					for (var s in e) a.push({
						tag: En[s.toUpperCase()],
						value: e[s]
					});
					var u = this.uc.makeCapsule(this.TAG, this.Actions.U, {
						fromAccount: this.uc.getMyAccount(),
						profileItem: a
					});
					return r.request(u).then(function(n) {
						zc.info("ProfileHandler.updateMyProfile ok");
						var r = t._updateMap(t.uc.getMyAccount(), e);
						return o.emit(Wt.PROFILE_UPDATED, [r]), Nl(r)
					}).
					catch (function(e) {
						return zc.error("ProfileHandler.updateMyProfile error:", e), Ll(e, 1)
					})
				}
			}, {
				key: "onProfileModified",
				value: function(e) {
					var t = e.data;
					if (!fr(t)) {
						var n, r, o = t.length;
						zc.info("ProfileHandler.onProfileModified length=" + o);
						for (var i = [], a = 0; a < o; a++) n = t[a].userID, r = this._updateMap(n, this._getLatestProfileFromResponse(n, t[a].profileList)), i.push(r);
						var s = this.uc.tim,
							u = s.innerEmitter,
							c = s.outerEmitter;
						u.emit($s.PROFILE_UPDATED, {
							data: i
						}), c.emit(Wt.PROFILE_UPDATED, i)
					}
				}
			}, {
				key: "_fillMap",
				value: function() {
					if (0 == this.accountProfileMap.size) {
						for (var e = this._getCachedProfiles(), t = Date.now(), n = 0, r = e.length; n < r; n++) t - e[n].lastUpdatedTime < this.expirationTime && this.accountProfileMap.set(e[n].userID, e[n]);
						zc.log("ProfileHandler._fillMap from chache, map.size=" + this.accountProfileMap.size)
					}
				}
			}, {
				key: "_updateMap",
				value: function(e, t) {
					var n, r = Date.now();
					return this._containsAccount(e) ? (n = this._getProfileFromMap(e), nl(n, t), n.lastUpdatedTime = r) : (n = new ih(t), (this.uc.isMyFriend(e) || e == this.uc.getMyAccount()) && (n.lastUpdatedTime = r, this.accountProfileMap.set(e, n))), this._flushMap(), n
				}
			}, {
				key: "_flushMap",
				value: function() {
					this._cacheProfiles(Bn(this.accountProfileMap.values()))
				}
			}, {
				key: "_containsAccount",
				value: function(e) {
					return this.accountProfileMap.has(e)
				}
			}, {
				key: "_getProfileFromMap",
				value: function(e) {
					return this.accountProfileMap.get(e)
				}
			}, {
				key: "_getCachedProfiles",
				value: function() {
					var e = this.uc.tim.storage.getItem(this.TAG);
					return fr(e) ? [] : e
				}
			}, {
				key: "_cacheProfiles",
				value: function(e) {
					var t = this.uc.tim.storage;
					zc.debug("ProfileHandler._cacheProfiles length=" + e.length), t.setItem(this.TAG, e)
				}
			}, {
				key: "onConversationsProfileUpdated",
				value: function(e) {
					for (var t, n, r, o = [], i = 0, a = e.length; i < a; i++) n = (t = e[i]).userID, this._containsAccount(n) ? (r = this._getProfileFromMap(n), nl(r, t) > 0 && o.push(n)) : o.push(t.userID);
					0 != o.length && (zc.info("ProfileHandler.onConversationsProfileUpdated toAccount:", o), this.getUserProfile({
						userIDList: o
					}))
				}
			}, {
				key: "reset",
				value: function() {
					this._flushMap(), this.accountProfileMap.clear()
				}
			}]), e
		}(),
		sh = "".repeat ||
	function(e) {
		var t = String(v(this)),
			n = "",
			r = oe(e);
		if (r < 0 || Infinity == r) throw RangeError("Wrong number of repetitions");
		for (; r > 0;
		(r >>>= 1) && (t += t)) 1 & r && (n += t);
		return n
	};
	Oe({
		target: "String",
		proto: 1
	}, {
		repeat: sh
	});
	var uh = function() {
			function e(t) {
				Nn(this, e), this.options = t ? t.options : {
					enablePointer: 1
				}, this.pointsList = {}, this.reportText = {}, this.maxNameLen = 0, this.gapChar = "-", this.log = console.log, this.currentTask = ""
			}
			return Rn(e, [{
				key: "newTask",
				value: function(e) {
					0 != this.options.enablePointer && (e || (e = ["task", this._timeFormat()].join("-")), this.pointsList[e] = [], this.currentTask = e, console.log("Pointer new Task : ".concat(this.currentTask)))
				}
			}, {
				key: "deleteTask",
				value: function(e) {
					0 != this.options.enablePointer && (e || (e = this.currentTask), this.pointsList[e].length = 0, delete this.pointsList[e])
				}
			}, {
				key: "dot",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					if (0 != this.options.enablePointer) {
						t = t || this.currentTask;
						var n = +new Date;
						this.maxNameLen = this.maxNameLen < e.length ? e.length : this.maxNameLen, this.flen = this.maxNameLen + 10, this.pointsList[t].push({
							pointerName: e,
							time: n
						})
					}
				}
			}, {
				key: "_analisys",
				value: function(e) {
					if (0 != this.options.enablePointer) {
						e = e || this.currentTask;
						for (var t = this.pointsList[e], n = t.length, r = [], o = [], i = 0; i < n; i++) 0 !== i && (o = this._analisysTowPoints(t[i - 1], t[i]), r.push(o.join("")));
						return o = this._analisysTowPoints(t[0], t[n - 1], 1), r.push(o.join("")), r.join("")
					}
				}
			}, {
				key: "_analisysTowPoints",
				value: function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
					if (0 != this.options.enablePointer) {
						var r = this.flen,
							o = t.time - e.time,
							i = o.toString(),
							a = e.pointerName + this.gapChar.repeat(r - e.pointerName.length),
							s = t.pointerName + this.gapChar.repeat(r - t.pointerName.length),
							u = this.gapChar.repeat(4 - i.length) + i,
							c = n ? ["%c", a, s, u, "ms\n%c"] : [a, s, u, "ms\n"];
						return c
					}
				}
			}, {
				key: "report",
				value: function(e) {
					if (0 != this.options.enablePointer) {
						e = e || this.currentTask;
						var t = this._analisys(e);
						this.pointsList = [];
						var n = this._timeFormat(),
							r = "Pointer[".concat(e, "(").concat(n, ")]"),
							o = 4 * this.maxNameLen,
							i = (o - r.length) / 2;
						console.log(["-".repeat(i), r, "-".repeat(i)].join("")), console.log("%c" + t, "color:#66a", "color:red", "color:#66a"), console.log("-".repeat(o))
					}
				}
			}, {
				key: "_timeFormat",
				value: function() {
					var e = new Date,
						t = this.zeroFix(e.getMonth() + 1, 2),
						n = this.zeroFix(e.getDate(), 2);
					return "".concat(t, "-").concat(n, " ").concat(e.getHours(), ":").concat(e.getSeconds(), ":").concat(e.getMinutes(), "~").concat(e.getMilliseconds())
				}
			}, {
				key: "zeroFix",
				value: function(e, t) {
					return ("000000000" + e).slice(-t)
				}
			}, {
				key: "reportAll",
				value: function() {
					if (0 != this.options.enablePointer) for (var e in this.pointsList) this.eport(e)
				}
			}]), e
		}(),
		ch = function e(t, n) {
			Nn(this, e), this.userID = t;
			var r = {};
			if (r.userID = t, !fr(n)) for (var o = 0, i = n.length; o < i; o++) switch (n[o].tag) {
			case En.NICK:
				r.nick = n[o].value;
				break;
			case En.GENDER:
				r.gender = n[o].value;
				break;
			case En.BIRTHDAY:
				r.birthday = n[o].value;
				break;
			case En.LOCATION:
				r.location = n[o].value;
				break;
			case En.SELFSIGNATURE:
				r.selfSignature = n[o].value;
				break;
			case En.ALLOWTYPE:
				r.allowType = n[o].value;
				break;
			case En.LANGUAGE:
				r.language = n[o].value;
				break;
			case En.AVATAR:
				r.avatar = n[o].value;
				break;
			case En.MESSAGESETTINGS:
				r.messageSettings = n[o].value;
				break;
			case En.ADMINFORBIDTYPE:
				r.adminForbidType = n[o].value;
				break;
			case En.LEVEL:
				r.level = n[o].value;
				break;
			case En.ROLE:
				r.role = n[o].value;
				break;
			default:
				zc.warn("snsProfileItem unkown tag->", n[o].tag)
			}
			this.profile = new ih(r)
		},
		lh = function() {
			function e(t) {
				Nn(this, e), this.uc = t, this.TAG = "friend", this.Actions = {
					G: "get",
					D: "delete"
				}, this.friends = new Map, this.pointer = new uh
			}
			return Rn(e, [{
				key: "isMyFriend",
				value: function(e) {
					var t = this.friends.has(e);
					return t || zc.debug("FriendHandler.isMyFriend " + e + " is not my friend"), t
				}
			}, {
				key: "_transformFriendList",
				value: function(e) {
					if (!fr(e) && !fr(e.infoItem)) {
						zc.info("FriendHandler._transformFriendList friendNum=" + e.friendNum);
						for (var t, n, r = e.infoItem, o = 0, i = r.length; o < i; o++) n = r[o].infoAccount, t = new ch(n, r[o].snsProfileItem), this.friends.set(n, t)
					}
				}
			}, {
				key: "_friends2map",
				value: function(e) {
					var t = new Map;
					for (var n in e) t.set(n, e[n]);
					return t
				}
			}, {
				key: "getFriendList",
				value: function() {
					var e = this,
						t = this.uc.tim,
						n = t.connectionController,
						r = t.outerEmitter,
						o = {};
					o.fromAccount = this.uc.getMyAccount(), zc.info("FriendHandler.getFriendList myAccount=" + o.fromAccount);
					var i = this.uc.makeCapsule(this.TAG, this.Actions.G, o);
					return n.request(i).then(function(t) {
						zc.info("FriendHandler.getFriendList ok"), e._transformFriendList(t.data);
						var n = Bn(e.friends.values());
						return r.emit(Wt.FRIENDLIST_GET_SUCCESS, n), Nl(n)
					}).
					catch (function(e) {
						return zc.error("FriendHandler.getFriendList error:", e), Ll(e, 1)
					})
				}
			}, {
				key: "deleteFriend",
				value: function(e) {
					if (!Array.isArray(e.toAccount)) return zc.error("FriendHandler.deleteFriend options.toAccount 必需是数组"), Ll({
						code: fs.DEL_FRIEND_INVALID_PARAM,
						message: hs.DEL_FRIEND_INVALID_PARAM
					});
					e.toAccount.length > 1e3 && (zc.warn("FriendHandler.deleteFriend 删除好友人数不能超过1000人"), e.toAccount.length = 1e3);
					var t = this.uc.tim,
						n = t.connectionController,
						r = t.outerEmitter,
						o = this.uc.makeCapsule(this.TAG, this.Actions.D, e);
					return n.request(o).then(function(e) {
						return zc.info("FriendHandler.deleteFriend ok"), r.emit(Wt.FRIEND_DELETE_SUCCESS), Nl()
					}).
					catch (function(e) {
						return zc.error("FriendHandler.deleteFriend error:", e), Ll(e, 1)
					})
				}
			}]), e
		}(),
		ph = function e(t) {
			Nn(this, e), fr || (this.userID = t.userID || "", this.timeStamp = t.timeStamp || 0)
		},
		fh = function() {
			function e(t) {
				Nn(this, e), this.uc = t, this.TAG = "blacklist", this.Actions = {
					G: "get",
					C: "create",
					D: "delete"
				}, this.blacklistMap = new Map, this.startIndex = 0, this.maxLimited = 100, this.curruentSequence = 0
			}
			return Rn(e, [{
				key: "getBlacklist",
				value: function() {
					var e = this,
						t = this.uc.tim.connectionController,
						n = {};
					n.fromAccount = this.uc.getMyAccount(), n.maxLimited = this.maxLimited, n.startIndex = 0, n.lastSequence = this.curruentSequence;
					var r = this.uc.makeCapsule(this.TAG, this.Actions.G, n);
					return t.request(r).then(function(t) {
						return zc.info("BlacklistHandler.getBlacklist ok"), e.curruentSequence = t.data.curruentSequence, e._handleResponse(t.data.blackListItem, 1), e._onBlacklistUpdated()
					}).
					catch (function(e) {
						return zc.error("BlacklistHandler.getBlacklist error:", e), Ll(e, 1)
					})
				}
			}, {
				key: "addBlacklist",
				value: function(e) {
					var t = this;
					if (!Qc(e.userIDList)) return zc.error("BlacklistHandler.addBlacklist options.userIDList 必需是数组"), Ll({
						code: fs.ADD_BLACKLIST_INVALID_PARAM,
						message: hs.ADD_BLACKLIST_INVALID_PARAM
					});
					var n = this.uc.tim.loginInfo.identifier;
					if (1 === e.userIDList.length && e.userIDList[0] === n) return zc.error("BlacklistHandler.addBlacklist 不能把自己拉黑"), Ll({
						code: fs.CANNOT_ADD_SELF_TO_BLACKLIST,
						message: hs.CANNOT_ADD_SELF_TO_BLACKLIST
					});
					e.userIDList.includes(n) && (e.userIDList = e.userIDList.filter(function(e) {
						return e !== n
					}), zc.warn("BlacklistHandler.addBlacklist 不能把自己拉黑，已过滤"));
					var r = this.uc.tim.connectionController;
					e.fromAccount = this.uc.getMyAccount(), e.toAccount = e.userIDList;
					var o = this.uc.makeCapsule(this.TAG, this.Actions.C, e);
					return r.request(o).then(function(e) {
						return zc.info("BlacklistHandler.addBlacklist ok"), t._handleResponse(e.data.resultItem, 1), t._onBlacklistUpdated()
					}).
					catch (function(e) {
						return zc.error("BlacklistHandler.addBlacklist error:", e), Ll(e, 1)
					})
				}
			}, {
				key: "_handleResponse",
				value: function(e, t) {
					if (!fr(e)) for (var n, r, o, i = 0, a = e.length; i < a; i++) r = e[i].to, o = e[i].resultCode, ($c(o) || 0 == o) && (t ? ((n = this.blacklistMap.has(r) ? this.blacklistMap.get(r) : new ph).userID = r, !fr(e[i].addBlackTimeStamp) && (n.timeStamp = e[i].addBlackTimeStamp), this.blacklistMap.set(r, n)) : this.blacklistMap.has(r) && (n = this.blacklistMap.get(r), this.blacklistMap.delete(r)));
					zc.log("BlacklistHandler._handleResponse total=" + this.blacklistMap.size + " bAdd=" + t)
				}
			}, {
				key: "deleteBlacklist",
				value: function(e) {
					var t = this;
					if (!Qc(e.userIDList)) return zc.error("BlacklistHandler.deleteBlacklist options.userIDList 必需是数组"), Ll({
						code: fs.DEL_BLACKLIST_INVALID_PARAM,
						message: hs.DEL_BLACKLIST_INVALID_PARAM
					});
					var n = this.uc.tim.connectionController;
					e.fromAccount = this.uc.getMyAccount(), e.toAccount = e.userIDList;
					var r = this.uc.makeCapsule(this.TAG, this.Actions.D, e);
					return n.request(r).then(function(e) {
						return zc.info("BlacklistHandler.deleteBlacklist ok"), t._handleResponse(e.data.resultItem, 0), t._onBlacklistUpdated()
					}).
					catch (function(e) {
						return zc.error("BlacklistHandler.deleteBlacklist error:", e), Ll(e, 1)
					})
				}
			}, {
				key: "_onBlacklistUpdated",
				value: function() {
					var e = this.uc.tim.outerEmitter,
						t = Bn(this.blacklistMap.keys());
					return e.emit(Wt.BLACKLIST_UPDATED, t), Nl(t)
				}
			}, {
				key: "handleBlackListDelAccount",
				value: function(e) {
					for (var t, n = [], r = 0, o = e.length; r < o; r++) t = e[r], this.blacklistMap.has(t) && (this.blacklistMap.delete(t), n.push(t));
					n.length > 0 && (zc.log("BlacklistHandler.handleBlackListDelAccount delCount=" + n.length + " : " + n.join(",")), this.tim.outerEmitter.emit(Wt.BLACKLIST_UPDATED, Bn(this.blacklistMap.keys())))
				}
			}, {
				key: "handleBlackListAddAccount",
				value: function(e) {
					for (var t, n = [], r = 0, o = e.length; r < o; r++) t = e[r], this.blacklistMap.has(t) || (this.blacklistMap.set(t, new ph({
						userID: t
					})), n.push(t));
					n.length > 0 && (zc.log("BlacklistHandler.handleBlackListAddAccount addCount=" + n.length + " : " + n.join(",")), this.tim.outerEmitter.emit(Wt.BLACKLIST_UPDATED, Bn(this.blacklistMap.keys())))
				}
			}, {
				key: "reset",
				value: function() {
					this.blacklistMap.clear(), this.startIndex = 0, this.maxLimited = 100, this.curruentSequence = 0
				}
			}]), e
		}(),
		hh = function() {
			function e(t) {
				Nn(this, e), this.uc = t, this.TAG = "applyC2C", this.Actions = {
					C: "create",
					G: "get",
					D: "delete",
					U: "update"
				}
			}
			return Rn(e, [{
				key: "applyAddFriend",
				value: function(e) {
					var t = this,
						n = this.uc.tim,
						r = n.outerEmitter,
						o = n.connectionController,
						i = this.uc.makeCapsule(this.TAG, this.Actions.C, e),
						a = o.request(i);
					return a.then(function(e) {
						t.uc.isActionSuccessful("applyAddFriend", t.Actions.C, e) ? r.emit(Wt.APPLY_ADD_FRIEND_SUCCESS, {
							data: e.data
						}) : r.emit(Wt.APPLY_ADD_FRIEND_FAIL, {
							data: e.data
						})
					}).
					catch (function(e) {
						r.emit(Wt.APPLY_ADD_FRIEND_FAIL, {
							data: e
						})
					}), a
				}
			}, {
				key: "getPendency",
				value: function(e) {
					var t = this,
						n = this.tim,
						r = n.connectionController,
						o = n.outerEmitter,
						i = this.uc.makeCapsule(this.TAG, this.Actions.G, e),
						a = r.request(i);
					return a.then(function(e) {
						t.uc.isActionSuccessful("getPendency", t.Actions.G, e) ? o.emit(Wt.GET_PENDENCY_SUCCESS, {
							data: e.data
						}) : o.emit(Wt.GET_PENDENCY_FAIL, {
							data: e.data
						})
					}).
					catch (function(e) {
						o.emit(Wt.GET_PENDENCY_FAIL, {
							data: e
						})
					}), a
				}
			}, {
				key: "deletePendency",
				value: function(e) {
					var t = this,
						n = this.tim,
						r = n.connectionController,
						o = n.outerEmitter,
						i = this.uc.makeCapsule(this.TAG, this.Actions.D, e),
						a = r.request(i);
					return a.then(function(e) {
						t.uc.isActionSuccessful("deletePendency", t.Actions.D, e) ? o.emit(Wt.DELETE_PENDENCY_SUCCESS, {
							data: e.data
						}) : o.emit(Wt.DELETE_PENDENCY_FAIL, {
							data: e.data
						})
					}).
					catch (function(e) {
						o.emit(Wt.DELETE_PENDENCY_FAIL, {
							data: e
						})
					}), a
				}
			}, {
				key: "replyPendency",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						n = this.tim,
						r = n.connectionController,
						o = n.outerEmitter,
						i = this.uc.makeCapsule(this.TAG, this.Actions.U, t),
						a = r.request(i);
					return a.then(function(t) {
						e.uc.isActionSuccessful("replyPendency", e.Actions.U, t) ? o.emit(Wt.REPLY_PENDENCY_SUCCESS, {
							data: t.data
						}) : o.emit(Wt.REPLY_PENDENCY_FAIL, {
							data: t.data
						})
					}).
					catch (function(e) {
						o.emit(Wt.REPLY_PENDENCY_FAIL, {
							data: e
						})
					}), a
				}
			}]), e
		}(),
		gh = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this, e))).profileHandler = new ah(xn(n)), n.friendHandler = new lh(xn(n)), n.blacklistHandler = new fh(xn(n)), n.applyC2CHandler = new hh(xn(n)), n._initializeListener(), n
			}
			return Gn(t, Sl), Rn(t, [{
				key: "_initializeListener",
				value: function(e) {
					var t = this.tim.innerEmitter;
					t.on($s.CONTEXT_A2KEY_AND_TINYID_UPDATED, this.onContextUpdated, this), t.on($s.NOTICE_LONGPOLL_PROFILE_MODIFIED, this.onProfileModified, this), t.on($s.NOTICE_LONGPOLL_NEW_FRIEND_MESSAGES, this.onNewFriendMessages, this), t.on($s.CONVERSATION_LIST_PROFILE_UPDATED, this.onConversationsProfileUpdated, this)
				}
			}, {
				key: "onContextUpdated",
				value: function(e) {
					var t = e.data.context;
					0 != !! t.a2Key && 0 != !! t.tinyID && (this.profileHandler.getMyProfile(), this.friendHandler.getFriendList(), this.blacklistHandler.getBlacklist())
				}
			}, {
				key: "onGotMyProfile",
				value: function() {
					this.triggerReady()
				}
			}, {
				key: "onProfileModified",
				value: function(e) {
					this.profileHandler.onProfileModified(e)
				}
			}, {
				key: "onNewFriendMessages",
				value: function(e) {
					zc.debug("onNewFriendMessages", JSON.stringify(e.data)), fr(e.data.blackListDelAccount) || this.blacklistHandler.handleBlackListDelAccount(e.data.blackListDelAccount), fr(e.data.blackListAddAccount) || this.blacklistHandler.handleBlackListAddAccount(e.data.blackListAddAccount)
				}
			}, {
				key: "onConversationsProfileUpdated",
				value: function(e) {
					this.profileHandler.onConversationsProfileUpdated(e.data)
				}
			}, {
				key: "getMyAccount",
				value: function() {
					return this.tim.context.identifier
				}
			}, {
				key: "isMyFriend",
				value: function(e) {
					return this.friendHandler.isMyFriend(e)
				}
			}, {
				key: "makeCapsule",
				value: function(e, t, n) {
					return this.createPackage({
						name: e,
						action: t,
						param: n
					})
				}
			}, {
				key: "getMyProfile",
				value: function() {
					return this.profileHandler.getMyProfile()
				}
			}, {
				key: "getUserProfile",
				value: function(e) {
					return this.profileHandler.getUserProfile(e)
				}
			}, {
				key: "updateMyProfile",
				value: function(e) {
					return this.profileHandler.updateMyProfile(e)
				}
			}, {
				key: "getFriendList",
				value: function() {
					return this.friendHandler.getFriendList()
				}
			}, {
				key: "deleteFriend",
				value: function(e) {
					return this.friendHandler.deleteFriend(e)
				}
			}, {
				key: "getBlacklist",
				value: function() {
					return this.blacklistHandler.getBlacklist()
				}
			}, {
				key: "addBlacklist",
				value: function(e) {
					return this.blacklistHandler.addBlacklist(e)
				}
			}, {
				key: "deleteBlacklist",
				value: function(e) {
					return this.blacklistHandler.deleteBlacklist(e)
				}
			}, {
				key: "applyAddFriend",
				value: function(e) {
					return this.applyC2CHandler.applyAddFriend(e)
				}
			}, {
				key: "getPendency",
				value: function(e) {
					return this.applyC2CHandler.getPendency(e)
				}
			}, {
				key: "deletePendency",
				value: function(e) {
					return this.applyC2CHandler.deletePendency(e)
				}
			}, {
				key: "replyPendency",
				value: function(e) {
					return this.applyC2CHandler.replyPendency(e)
				}
			}, {
				key: "reset",
				value: function() {
					zc.warn("UserController.reset"), this.resetReady(), this.profileHandler.reset(), this.blacklistHandler.reset(), this.checkTimes = 0
				}
			}]), t
		}(),
		dh = [].sort,
		mh = [1, 2, 3],
		_h = u(function() {
			mh.sort(void 0)
		}),
		vh = u(function() {
			mh.sort(null)
		}),
		Eh = Be("sort");
	Oe({
		target: "Array",
		proto: 1,
		forced: _h || !vh || Eh
	}, {
		sort: function(e) {
			return void 0 === e ? dh.call(Re(this)) : dh.call(Re(this), Ne(e))
		}
	});
	var yh = function() {
			function e(t) {
				Nn(this, e), this.type = Xt.ELEMENT_TYPES.TEXT, this.content = {
					text: t.text || ""
				}
			}
			return Rn(e, [{
				key: "setText",
				value: function(e) {
					this.content.text = e
				}
			}, {
				key: "isEmpty",
				value: function() {
					return 0 === this.content.text.length ? 1 : 0
				}
			}]), e
		}(),
		Sh = function() {
			function e(t) {
				Nn(this, e), this._imageMemoryURL = "", this._file = t.file, Tc ? this.createImageDataASURLInWXMiniApp(t.file) : this.createImageDataASURLInWeb(t.file), this._initImageInfoModel(), this.type = Xt.ELEMENT_TYPES.IMAGE, this._percent = 0, this.content = {
					imageFormat: Xt.IMAGE_FORMAT[t.imageFormat] || Xt.IMAGE_FORMAT.UNKNOWN,
					uuid: t.uuid,
					imageInfoArray: []
				}, this.initImageInfoArray(t.imageInfoArray), this._defaultImage = "http://imgcache.qq.com/open/qcloud/video/act/webim-images/default.jpg", this._autoFixUrl()
			}
			return Rn(e, [{
				key: "_initImageInfoModel",
				value: function() {
					var e = this;
					this._ImageInfoModel = function(t) {
						this.instanceID = ol(9999999), this.sizeType = t.type || 0, this.size = t.size || 0, this.width = t.width || 1024, this.height = t.height || 800, this.imageUrl = t.url || "", this.url = t.url || e._imageMemoryURL || e._defaultImage
					}, this._ImageInfoModel.prototype = {
						setSizeType: function(e) {
							this.sizeType = e
						},
						setImageUrl: function(e) {
							e && (this.imageUrl = e, Tc && (this.url = e))
						},
						getImageUrl: function() {
							return this.imageUrl
						}
					}
				}
			}, {
				key: "initImageInfoArray",
				value: function(e) {
					for (var t = 2, n = null, r = null; t >= 0;) r = void 0 === e || void 0 === e[t] ? {
						type: 0,
						size: 0,
						width: 0,
						height: 0,
						url: ""
					} : e[t], (n = new this._ImageInfoModel(r)).setSizeType(t + 1), this.addImageInfo(n), t--
				}
			}, {
				key: "updateImageInfoArray",
				value: function(e) {
					for (var t = this.content.imageInfoArray.length, n = 0; n < t; n++) e.size && (this.content.imageInfoArray[n].size = e.size), e.url && this.content.imageInfoArray[n].setImageUrl(e.url)
				}
			}, {
				key: "_autoFixUrl",
				value: function() {
					for (var e = this.content.imageInfoArray.length, t = "", n = "", r = ["http", "https"], o = null, i = 0; i < e; i++) this.content.imageInfoArray[i].url && "" !== (o = this.content.imageInfoArray[i]).imageUrl && (n = o.imageUrl.slice(0, o.imageUrl.indexOf("://") + 1), t = o.imageUrl.slice(o.imageUrl.indexOf("://") + 1), r.indexOf(n) < 0 && (n = "http:"), this.content.imageInfoArray[i].setImageUrl([n, t].join("")))
				}
			}, {
				key: "updatePercent",
				value: function(e) {
					this._percent = e, this._percent > 1 && (this._percent = 1)
				}
			}, {
				key: "updateImageFormat",
				value: function(e) {
					this.content.imageFormat = e
				}
			}, {
				key: "createImageDataASURLInWeb",
				value: function(e) {
					void 0 !== e && e.files.length > 0 && (this._imageMemoryURL = window.URL.createObjectURL(e.files[0]))
				}
			}, {
				key: "createImageDataASURLInWXMiniApp",
				value: function(e) {
					e && e.tempFilePaths[0] && (this._imageMemoryURL = e.tempFilePaths[0])
				}
			}, {
				key: "replaceImageInfo",
				value: function(e, t) {
					this.content.imageInfoArray[t] instanceof this._ImageInfoModel || (this.content.imageInfoArray[t] = e)
				}
			}, {
				key: "addImageInfo",
				value: function(e) {
					this.content.imageInfoArray.length >= 3 || this.content.imageInfoArray.push(e)
				}
			}, {
				key: "isEmpty",
				value: function() {
					return 0 === this.content.imageInfoArray.length ? 1 : "" === this.content.imageInfoArray[0].imageUrl ? 1 : 0
				}
			}]), e
		}(),
		Ih = function() {
			function e(t) {
				Nn(this, e), this.type = Xt.ELEMENT_TYPES.FACE, this.content = t || null
			}
			return Rn(e, [{
				key: "isEmpty",
				value: function() {
					return null === this.content ? 1 : 0
				}
			}]), e
		}(),
		Th = function() {
			function e(t) {
				Nn(this, e), this.type = Xt.ELEMENT_TYPES.SOUND, this.content = {
					downloadFlag: t.downloadFlag,
					second: t.second,
					size: t.size,
					url: t.url,
					uuid: t.uuid
				}
			}
			return Rn(e, [{
				key: "isEmpty",
				value: function() {
					return "" === this.content.url ? 1 : 0
				}
			}]), e
		}(),
		Ch = {
			from: 1,
			groupID: 1,
			groupName: 1,
			to: 1
		},
		Mh = function() {
			function e(t) {
				Nn(this, e), this.type = Xt.ELEMENT_TYPES.GROUP_TIP, this.content = {}, this._initContent(t)
			}
			return Rn(e, [{
				key: "_initContent",
				value: function(e) {
					var t = this;
					Object.keys(e).forEach(function(n) {
						switch (n) {
						case "remarkInfo":
							break;
						case "groupProfile":
							t.content.groupProfile = {}, t._initGroupProfile(e[n]);
							break;
						case "operatorInfo":
						case "memberInfoList":
							break;
						default:
							t.content[n] = e[n]
						}
					}), this.content.userIDList || (this.content.userIDList = [this.content.operatorID])
				}
			}, {
				key: "_initGroupProfile",
				value: function(e) {
					for (var t = Object.keys(e), n = 0; n < t.length; n++) {
						var r = t[n];
						Ch[r] && (this.content.groupProfile[r] = e[r])
					}
				}
			}]), e
		}(),
		Ah = {
			from: 1,
			groupID: 1,
			groupName: 1,
			to: 1
		},
		Dh = function() {
			function e(t) {
				Nn(this, e), this.type = Xt.ELEMENT_TYPES.GROUP_SYSTEM_NOTICE, this.content = {}, this._initContent(t)
			}
			return Rn(e, [{
				key: "_initContent",
				value: function(e) {
					var t = this;
					Object.keys(e).forEach(function(n) {
						switch (n) {
						case "memberInfoList":
							break;
						case "remarkInfo":
							t.content.handleMessage = e[n];
							break;
						case "groupProfile":
							t.content.groupProfile = {}, t._initGroupProfile(e[n]);
							break;
						default:
							t.content[n] = e[n]
						}
					})
				}
			}, {
				key: "_initGroupProfile",
				value: function(e) {
					for (var t = Object.keys(e), n = 0; n < t.length; n++) {
						var r = t[n];
						Ah[r] && (this.content.groupProfile[r] = e[r])
					}
				}
			}]), e
		}(),
		Oh = Math.min,
		Nh = [].lastIndexOf,
		Lh = !! Nh && 1 / [1].lastIndexOf(1, -0) < 0,
		Rh = Be("lastIndexOf"),
		Ph = Lh || Rh ?
	function(e) {
		if (Lh) return Nh.apply(this, arguments) || 0;
		var t = E(this),
			n = ae(t.length),
			r = n - 1;
		for (arguments.length > 1 && (r = Oh(r, oe(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--) if (r in t && t[r] === e) return r || 0;
		return -1
	} : Nh;
	Oe({
		target: "Array",
		proto: 1,
		forced: Ph !== [].lastIndexOf
	}, {
		lastIndexOf: Ph
	});
	var kh = function() {
			function e(t) {
				Nn(this, e);
				var n = this._check(t);
				if (n instanceof gs) throw n;
				this.type = Xt.ELEMENT_TYPES.FILE, this._percent = 0;
				var r = this._getFileInfo(t);
				this.content = {
					downloadFlag: 2,
					fileUrl: t.url || "",
					uuid: ["fake", ol(999), ol(9999)].join("-"),
					fileName: r.name || "",
					fileSize: r.size || 0
				}
			}
			return Rn(e, [{
				key: "_getFileInfo",
				value: function(e) {
					if (e.fileName && e.fileSize) return {
						size: e.fileSize,
						name: e.fileName
					};
					if (Tc) return {};
					var t = e.file.files[0];
					return {
						size: t.size,
						name: t.name,
						type: t.type.slice(t.type.lastIndexOf("/") + 1).toUpperCase()
					}
				}
			}, {
				key: "updatePercent",
				value: function(e) {
					this._percent = e, this._percent > 1 && (this._percent = 1)
				}
			}, {
				key: "updateFileUrl",
				value: function(e) {
					this.content.fileUrl = e
				}
			}, {
				key: "_check",
				value: function(e) {
					if (e.size > 20971520) return new gs({
						code: fs.MESSAGE_FILE_SIZE_LIMIT,
						message: "".concat(hs.MESSAGE_FILE_SIZE_LIMIT, ": ").concat(20971520, " bytes")
					})
				}
			}, {
				key: "isEmpty",
				value: function() {
					return "" === this.content.fileUrl ? 1 : "" === this.content.fileName ? 1 : 0 === this.content.fileSize ? 1 : 0
				}
			}]), e
		}(),
		Gh = function() {
			function e(t) {
				Nn(this, e), this.type = Xt.ELEMENT_TYPES.CUSTOM, this.content = {
					data: t.data || "",
					description: t.description || "",
					extension: t.extension || ""
				}
			}
			return Rn(e, [{
				key: "setData",
				value: function(e) {
					return this.content.data = e, this
				}
			}, {
				key: "setDescription",
				value: function(e) {
					return this.content.description = e, this
				}
			}, {
				key: "setExtension",
				value: function(e) {
					return this.content.extension = e, this
				}
			}, {
				key: "isEmpty",
				value: function() {
					return 0 === this.content.data.length && 0 === this.content.description.length && 0 === this.content.extension.length ? 1 : 0
				}
			}]), e
		}(),
		bh = function e(t) {
			Nn(this, e), this.type = Xt.ELEMENT_TYPES.VIDEO, this.content = {
				videoFormat: t.videoFormat,
				videoUrl: t.url,
				downloadFlag: t.downloadFlag,
				UUID: t.uuid
			}
		},
		wh = function() {
			function e(t) {
				Nn(this, e), this.ID = "", this.conversationID = t.conversationID || null, this.conversationType = t.conversationType || Jt.C2C, this.conversationSubType = t.conversationSubType, this.time = t.time || Math.ceil(Date.now() / 1e3), this.sequence = t.sequence || 0, this.clientSequence = t.clientSequence || t.sequence || 0, this.random = t.random || ol(), this.messagePriority = t.messagePriority || 0, this.elements = t.elements || null, this.isPlaceMessage = 0, this.geo = {}, this.from = t.from || null, this.to = t.to || null, this.flow = "", this.isSystemMessage = t.isSystemMessage || 0, this.protocol = t.protocol || "JSON", this.isResend = 0, this.isRead = 0, this.status = t.status || Cl.MESSAGE_STATUS.SUCCESS, this._error = 0, this._errorInfo = "", this.reInitialize(t.currentUser), this.extractGroupInfo(t.groupProfile || null)
			}
			return Rn(e, [{
				key: "setError",
				value: function(e, t) {
					"number" == typeof e && (this._error = e), this._errorInfo = t || "message elements error!"
				}
			}, {
				key: "extractGroupInfo",
				value: function(e) {
					if (null !== e) {
						var t = e.messageFromAccountExtraInformation;
						this.nick = "", "string" == typeof e.fromAccountNick && (this.nick = e.fromAccountNick), this.avatar = "", "string" == typeof e.fromAccountHeadurl && (this.avatar = e.fromAccountHeadurl), this.nameCard = "", "object" === On(t) && t.hasOwnProperty("nameCard") && (this.nameCard = t.nameCard)
					}
				}
			}, {
				key: "isError",
				value: function() {
					return 0 === this._error ? 0 : 1
				}
			}, {
				key: "getIMError",
				value: function() {
					return new gs({
						code: this._error,
						message: this._errorInfo
					})
				}
			}, {
				key: "_initProxy",
				value: function() {
					if (Tc) return this.payload = this.elements[0].content, void(this.type = this.elements[0].type);
					var e = this;
					Object.defineProperty(this, "type", {
						get: function() {
							return e.elements[0].type
						}
					}), Object.defineProperty(this, "payload", {
						get: function() {
							return e.elements[0].content
						}
					})
				}
			}, {
				key: "afterOperated",
				value: function(e) {
					this._onOperatedHandle = null, "function" == typeof e && (this._onOperatedHandle = e), 1 == this.isSendable() && this.triggerOperated()
				}
			}, {
				key: "triggerOperated",
				value: function() {
					null !== this._onOperatedHandle && "function" == typeof this._onOperatedHandle && this._onOperatedHandle(this)
				}
			}, {
				key: "reInitialize",
				value: function(e) {
					e && (this.status = this.from ? Cl.MESSAGE_STATUS.SUCCESS : Cl.MESSAGE_STATUS.UNSEND, !this.from && (this.from = e), this.isRead = 1), this._initFlow(e), this._initielizeSequence(e), this._concactConversationID(e), this._concactMessageID(e)
				}
			}, {
				key: "isSendable",
				value: function() {
					return 0 === this.elements.length ? 0 : "function" != typeof this.elements[0].isEmpty ? (zc.warn("".concat(this.elements[0].type, ' need "booleam : isEmpty()" method')), 0) : 1 == this.elements[0].isEmpty() ? 0 : 1
				}
			}, {
				key: "_initTo",
				value: function(e) {
					this.conversationType === Jt.GROUP && (this.to = e.groupID)
				}
			}, {
				key: "_initielizeSequence",
				value: function(e) {
					0 === this.clientSequence && e && (this.clientSequence = function(e) {
						if (!e) return zc.error("autoincrementIndex(string: key) need key parameter"), 0;
						if (void 0 === al[e]) {
							var t = new Date,
								n = "3".concat(t.getHours()).slice(-2),
								r = "0".concat(t.getMinutes()).slice(-2),
								o = "0".concat(t.getSeconds()).slice(-2);
							al[e] = parseInt([n, r, o, "0001"].join("")), n = null, r = null, o = null, zc.warn("utils.autoincrementIndex() create new sequence : ".concat(e, " = ").concat(al[e]))
						}
						return al[e]++
					}(e)), 0 === this.sequence && this.conversationType === Jt.C2C && (this.sequence = this.clientSequence)
				}
			}, {
				key: "_concactMessageID",
				value: function(e) {
					var t = e === this.from ? 1 : 0,
						n = this.clientSequence > 0 ? this.clientSequence : this.sequence;
					this.ID = "".concat(this.conversationID, "-").concat(n, "-").concat(this.random, "-").concat(t)
				}
			}, {
				key: "_initFlow",
				value: function(e) {
					"" !== e && (this.flow = e === this.from ? "out" : "in")
				}
			}, {
				key: "_concactConversationID",
				value: function(e) {
					var t = this.to,
						n = Jt,
						r = "",
						o = this.conversationType;
					o !== n.SYSTEM ? (r = o === n.C2C ? e === this.from ? t : this.from : this.to, this.conversationID = "".concat(o).concat(r)) : this.conversationID = n.SYSTEM
				}
			}, {
				key: "isElement",
				value: function(e) {
					return e instanceof yh || e instanceof Sh || e instanceof Ih || e instanceof Th || e instanceof kh || e instanceof Mh || e instanceof Dh || e instanceof Gh
				}
			}, {
				key: "setElement",
				value: function(e) {
					var t = this;
					if (this.isElement(e)) return this.elements = [e], void this._initProxy();
					var n = function(e) {
							switch (e.type) {
							case Xt.ELEMENT_TYPES.TEXT:
								t.setTextElement(e.content);
								break;
							case Xt.ELEMENT_TYPES.IMAGE:
								t.setImageElement(e.content);
								break;
							case Xt.ELEMENT_TYPES.SOUND:
								t.setSoundElement(e.content);
								break;
							case Xt.ELEMENT_TYPES.FILE:
								t.setFileElement(e.content);
								break;
							case Xt.ELEMENT_TYPES.VIDEO:
								t.setVideoElement(e.content);
								break;
							case Xt.ELEMENT_TYPES.CUSTOM:
								t.setCustomElement(e.content);
								break;
							case Xt.ELEMENT_TYPES.GEO:
								t.setGEOElement(e.content);
								break;
							case Xt.ELEMENT_TYPES.GROUP_TIP:
								t.setGroupTipElement(e.content);
								break;
							case Xt.ELEMENT_TYPES.GROUP_SYSTEM_NOTICE:
								t.setGroupSystemNoticeElement(e.content);
								break;
							case Xt.ELEMENT_TYPES.FACE:
								t.setFaceElement(e.content);
								break;
							default:
								zc.warn(e.type, e.content, "no operation......")
							}
						};
					if (Array.isArray(e)) for (var r = 0; r < e.length; r++) n(e[r]);
					else n(e);
					this._initProxy()
				}
			}, {
				key: "setTextElement",
				value: function(e) {
					var t = "string" == typeof e ? e : e.text,
						n = new yh({
							text: t
						});
					this.elements = [n]
				}
			}, {
				key: "setImageElement",
				value: function(e) {
					var t = new Sh(e);
					this.elements = [t]
				}
			}, {
				key: "setSoundElement",
				value: function(e) {
					var t = new Th(e);
					this.elements = [t]
				}
			}, {
				key: "setFileElement",
				value: function(e) {
					var t = new kh(e);
					this.elements = [t]
				}
			}, {
				key: "setVideoElement",
				value: function(e) {
					var t = new bh(e);
					this.elements = [t]
				}
			}, {
				key: "setGEOElement",
				value: function(e) {}
			}, {
				key: "setCustomElement",
				value: function(e) {
					var t = new Gh(e);
					this.elements = [t]
				}
			}, {
				key: "setGroupTipElement",
				value: function(e) {
					var t = new Mh(e);
					this.elements = [t]
				}
			}, {
				key: "setGroupSystemNoticeElement",
				value: function(e) {
					var t = new Dh(e);
					this.elements = [t]
				}
			}, {
				key: "setFaceElement",
				value: function(e) {
					var t = new Ih(e);
					this.elements = [t]
				}
			}]), e
		}(),
		Uh = ["groupID", "name", "avatar", "type", "introduction", "notification", "ownerID", "selfInfo", "createTime", "infoSequence", "lastInfoTime", "lastMessage", "nextMessageSeq", "memberNum", "maxMemberNum", "memberList", "joinOption", "groupCustomField"],
		Fh = function() {
			function e(t) {
				Nn(this, e), this.groupID = "", this.name = "", this.avatar = "", this.type = "", this.introduction = "", this.notification = "", this.ownerID = "", this.createTime = "", this.infoSequence = "", this.lastInfoTime = "", this.selfInfo = {
					messageRemindType: "",
					joinTime: "",
					nameCard: "",
					role: ""
				}, this.lastMessage = {}, this.nextMessageSeq = "", this.memberNum = "", this.maxMemberNum = "", this.joinOption = "", this.groupCustomField = [], this._initGroup(t)
			}
			return Rn(e, [{
				key: "_initGroup",
				value: function(e) {
					for (var t in e) Uh.indexOf(t) < 0 || (this[t] = e[t])
				}
			}, {
				key: "updateGroup",
				value: function(e) {
					nl(this, e, ["members", "errorCode"])
				}
			}]), e
		}(),
		xh = function(e) {
			var t = e[0];
			if ($c(t)) return "";
			switch (t.type) {
			case Xt.ELEMENT_TYPES.TEXT:
				return t.content.text;
			case Xt.ELEMENT_TYPES.IMAGE:
				return "[图片]";
			case Xt.ELEMENT_TYPES.GEO:
				return "[位置]";
			case Xt.ELEMENT_TYPES.SOUND:
				return "[语音]";
			case Xt.ELEMENT_TYPES.FILE:
				return "[文件]";
			case Xt.ELEMENT_TYPES.CUSTOM:
				return "[其他]";
			case Xt.ELEMENT_TYPES.GROUP_TIP:
				return "[群提示消息]";
			case Xt.ELEMENT_TYPES.GROUP_SYSTEM_NOTICE:
				return "[群系统通知]";
			default:
				return ""
			}
		},
		qh = function(e) {
			return $c(e) ? {
				lastTime: 0,
				lastSequence: 0,
				fromAccount: 0,
				messageForShow: "",
				payload: null,
				type: ""
			} : e instanceof wh ? {
				lastTime: e.time || 0,
				lastSequence: e.sequence || 0,
				fromAccount: e.from || "",
				messageForShow: xh(e.elements) || "",
				payload: e.elements[0] ? e.elements[0].content : null,
				type: e.elements[0] ? e.elements[0].type : ""
			} : e
		},
		jh = function() {
			function e(t) {
				Nn(this, e), this.conversationID = t.conversationID || "", this.unreadCount = t.unreadCount || 0, this.type = t.type || "", this.subType = t.subType || "", this.lastMessage = qh(t.lastMessage), this._isInfoCompleted = 0, this._initProfile(t)
			}
			return Rn(e, [{
				key: "_initProfile",
				value: function(e) {
					var t = this;
					Object.keys(e).forEach(function(n) {
						switch (n) {
						case "userProfile":
							t.userProfile = e.userProfile;
							break;
						case "groupProfile":
							t.groupProfile = e.groupProfile
						}
					}), $c(this.userProfile) && this.type === Jt.C2C ? this.userProfile = new ih({
						userID: e.conversationID.replace("C2C", "")
					}) : $c(this.groupProfile) && this.type === Jt.GROUP && (this.groupProfile = new Fh({
						groupID: e.conversationID.replace("GROUP", "")
					}))
				}
			}, {
				key: "toAccount",
				get: function() {
					return this.conversationID.replace("C2C", "").replace("GROUP", "")
				}
			}, {
				key: "hasProfile",
				get: function() {
					return !$c(this.userProfile) || !$c(this.groupProfile)
				}
			}]), e
		}(),
		Bh = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this, e))).conversationMap = new Map, n.hasLocalConversationList = 0, n.tempGroupList = [], n._initListeners(), n
			}
			return Gn(t, Sl), Rn(t, [{
				key: "createLocalConversation",
				value: function(e) {
					return this.conversationMap.has(e) ? this.conversationMap.get(e) : new jh({
						conversationID: e,
						type: e.slice(0, 3) === Jt.C2C ? Jt.C2C : Jt.GROUP
					})
				}
			}, {
				key: "hasLocalConversation",
				value: function(e) {
					return this.conversationMap.has(e)
				}
			}, {
				key: "getConversationList",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						n = !t,
						r = this.createPackage({
							name: "conversation",
							action: "query"
						});
					return zc.log("ConversationController.getConversationList."), this.tim.connectionController.request(r).then(function(r) {
						var o = r.data.conversations,
							i = void 0 === o ? [] : o,
							a = e._getConversationOptions(i);
						return t && e._conversationMapTreeShaking(a), e._updateLocalConversationList(a, 1), e._setStorageConversationList(), e.tempGroupList.length > 0 && (e._onUpdateConversationGroupProfile(e.tempGroupList), e.tempGroupList = []), e._isReady && e._emitConversationUpdate(n), e.triggerReady(), zc.log("ConversationController.getConversationList ok."), Nl({
							conversationList: e.getLocalConversationList()
						})
					}).
					catch (function(e) {
						return zc.error("ConversationController.getConversationList error:", e), Ll(e)
					})
				}
			}, {
				key: "getConversationProfile",
				value: function(e) {
					var t = this.conversationMap.has(e) ? this.conversationMap.get(e) : this.createLocalConversation(e);
					return t._isInfoCompleted || t.type === Jt.SYSTEM ? Nl({
						conversation: t
					}) : (zc.log("ConversationController.getConversationProfile. conversationID:", e), this._updateUserOrGroupProfileCompletely(t).then(function(t) {
						return zc.log("ConversationController.getConversationProfile ok. conversationID:", e), t
					}).
					catch (function(e) {
						return zc.error("ConversationController.getConversationProfile error:", e), Ll(e, 1)
					}))
				}
			}, {
				key: "deleteConversation",
				value: function(e) {
					var t = this,
						n = {};
					if (!this.conversationMap.has(e)) {
						var r = new gs({
							code: fs.CONVERSATION_NOT_FOUND,
							message: hs.CONVERSATION_NOT_FOUND
						});
						return Ll(r)
					}
					switch (this.conversationMap.get(e).type) {
					case Jt.C2C:
						n.type = 1, n.toAccount = e.slice(3);
						break;
					case Jt.GROUP:
						n.type = 2, n.toGroupID = e.slice(5);
						break;
					case Jt.SYSTEM:
						return this.tim.deleteGroupSystemNotice({
							messageList: this.tim.messageController.getLocalMessageList(e)
						}), this._deleteLocalConversation(e), Nl({
							conversationID: e
						});
					default:
						var o = new gs({
							code: fs.CONVERSATION_UN_RECORDED_TYPE,
							message: hs.CONVERSATION_UN_RECORDED_TYPE
						});
						return Ll(o)
					}
					zc.log("ConversationController.deleteConversation. conversationID:", e);
					var i = this.createPackage({
						name: "conversation",
						action: "delete",
						param: n
					});
					return this.tim.setMessageRead({
						conversationID: e
					}).then(function() {
						return t.connectionController.request(i)
					}).then(function() {
						return zc.log("ConversationController.deleteConversation ok. conversationID:", e), t._deleteLocalConversation(e), Nl({
							conversationID: e
						})
					}).
					catch (function(e) {
						return zc.error("ConversationController.deleteConversation error:", e), Ll(e, 1)
					})
				}
			}, {
				key: "getLocalConversationLastSequence",
				value: function(e) {
					if (!this.hasLocalConversation(e)) return 0;
					var t = this.conversationMap.get(e);
					return !!t.lastMessage.lastSequence || t.type !== yn.CONV_GROUP ? t.lastMessage.lastSequence : t.groupProfile.nextMessageSeq - 1
				}
			}, {
				key: "getLocalConversationList",
				value: function() {
					return Bn(this.conversationMap.values())
				}
			}, {
				key: "getLocalConversation",
				value: function(e) {
					return this.conversationMap.get(e)
				}
			}, {
				key: "_initLocalConversationList",
				value: function() {
					zc.time(Gl), zc.log("ConversationController._initLocalConversationList init");
					var e = this._getStorageConversationList();
					if (this.hasLocalConversationList = null !== e && 0 !== e.length, this.hasLocalConversationList) {
						for (var t = 0, n = e.length; t < n; t++) this.conversationMap.set(e[t].conversationID, new jh(e[t]));
						this._emitConversationUpdate(1, 0)
					}
					this.getConversationList(1).then(function() {
						zc.log("ConversationController._initLocalConversationList init ok. initCost=".concat(zc.timeEnd(Gl), "ms"))
					})
				}
			}, {
				key: "_getStorageConversationList",
				value: function() {
					return this.tim.storage.getItem("conversationMap")
				}
			}, {
				key: "_setStorageConversationList",
				value: function() {
					var e = [];
					this.conversationMap.forEach(function(t) {
						var n = t.conversationID,
							r = t.type,
							o = t.subType,
							i = t.lastMessage,
							a = t.groupProfile,
							s = t.userProfile;
						e.push({
							conversationID: n,
							type: r,
							subType: o,
							lastMessage: i,
							groupProfile: a,
							userProfile: s
						})
					}), this.tim.storage.setItem("conversationMap", e)
				}
			}, {
				key: "_initListeners",
				value: function() {
					this.tim.innerEmitter.once($s.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initLocalConversationList, this), this.tim.innerEmitter.on($s.MESSAGE_SENDING, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on($s.MESSAGE_SENDINGSEND_SUCCESS, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on($s.MESSAGE_GROUP_SEND_SUCCESS, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on($s.MESSAGE_C2C_INSTANT_RECEIVED, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on($s.MESSAGE_GROUP_INSTANT_RECEIVED, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on($s.MESSAGE_GROUP_SYSTEM_NOTICE_RECEIVED, this._onSendOrReceiveMessage, this), this.tim.innerEmitter.on($s.GROUP_LIST_UPDATED, this._onUpdateConversationGroupProfile, this), this.tim.innerEmitter.on($s.PROFILE_UPDATED, this._onUpdateConversationUserProfile, this)
				}
			}, {
				key: "_onUpdateConversationGroupProfile",
				value: function(e) {
					var t = this;
					this.hasLocalConversationList || (this.tempGroupList = e), e.forEach(function(e) {
						var n = "GROUP".concat(e.groupID);
						if (t.conversationMap.has(n)) {
							var r = t.conversationMap.get(n);
							r.groupProfile = e, r.lastMessage.lastSequence = e.nextMessageSeq - 1, r.subType || (r.subType = e.type)
						}
					}), this._emitConversationUpdate(1, 0)
				}
			}, {
				key: "_onUpdateConversationUserProfile",
				value: function(e) {
					var t = this;
					e.data.forEach(function(e) {
						var n = "C2C".concat(e.userID);
						t.conversationMap.has(n) && (t.conversationMap.get(n).userProfile = e)
					}), this._emitConversationUpdate(1, 0)
				}
			}, {
				key: "_onSendOrReceiveMessage",
				value: function(e) {
					var t = this,
						n = e.data.eventDataList;
					this._isReady ? 0 !== n.length && (this._updateLocalConversationList(n, 0), this._setStorageConversationList(), this._emitConversationUpdate()) : this.ready(function() {
						t._onSendOrReceiveMessage(e)
					})
				}
			}, {
				key: "_updateLocalConversationList",
				value: function(e, t) {
					var n;
					n = this._updateTempConversations(e, t), this.conversationMap = new Map(this._sortConversations([].concat(Bn(n.conversations), Bn(this.conversationMap)))), this._updateUserOrGroupProfile(n.newerConversations)
				}
			}, {
				key: "_updateTempConversations",
				value: function(e, t) {
					for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
						var a = new jh(e[o]),
							s = this.conversationMap.get(a.conversationID);
						if (this.conversationMap.has(a.conversationID)) {
							nl(s, a, ["unreadCount", "allowType", "adminForbidType", "payload"], [null, void 0, "", 0, NaN]), s.unreadCount = this._updateUnreadCount(s, a, t), s.lastMessage.payload = e[o].lastMessage.payload, this.conversationMap.delete(s.conversationID), n.push([s.conversationID, s])
						} else r.push(a), n.push([a.conversationID, a])
					}
					return {
						conversations: n,
						newerConversations: r
					}
				}
			}, {
				key: "_updateUnreadCount",
				value: function(e, t, n) {
					if ([Qt.CHATROOM, Qt.AVCHATROOM].includes(e.subType)) return 0;
					if (n) {
						if (e.type === Jt.C2C) return e.unreadCount;
						if (e.type === Jt.GROUP) return t.unreadCount
					}
					return t.unreadCount + e.unreadCount
				}
			}, {
				key: "_sortConversations",
				value: function(e) {
					return e.sort(function(e, t) {
						return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
					})
				}
			}, {
				key: "_updateUserOrGroupProfile",
				value: function(e) {
					var t = this,
						n = [],
						r = [];
					return e.forEach(function(e) {
						if (!e.hasProfile) if (e.type === Jt.C2C) n.push(e.toAccount);
						else if (e.type === Jt.GROUP) {
							var o = e.toAccount;
							t.tim.groupController.getLocalGroupProfile(o) ? e.groupProfile = t.tim.groupController.getLocalGroupProfile(o) : r.push(e.toAccount)
						}
					}), n.length > 0 ? this.tim.getUserProfile({
						userIDList: n
					}).then(function(e) {
						var n = e.data;
						Qc(n) ? n.forEach(function(e) {
							t.conversationMap.get("C2C".concat(e.userID)).userProfile = e
						}) : t.conversationMap.get("C2C".concat(n.userID)).userProfile = n
					}) : r.length > 0 ? this.tim.getGroupProfileAdvance({
						groupIDList: r,
						responseFilter: {
							groupBaseInfoFilter: ["Type", "Name", "FaceUrl"]
						}
					}).then(function(e) {
						e.data.successGroupList.forEach(function(e) {
							var n = "GROUP".concat(e.groupID);
							if (t.conversationMap.has(n)) {
								var r = t.conversationMap.get(n);
								nl(r.groupProfile, e, [], [null, void 0, "", 0, NaN]), !r.subType && e.type && (r.subType = e.type)
							}
						})
					}) : void 0
				}
			}, {
				key: "_updateUserOrGroupProfileCompletely",
				value: function(e) {
					var t = this;
					return e.type === Jt.C2C ? this.tim.getUserProfile({
						userIDList: [e.toAccount]
					}).then(function(n) {
						var r = n.data;
						return 0 === r.length ? Ll(new gs({
							code: fs.USER_OR_GROUP_NOT_FOUND,
							message: hs.USER_OR_GROUP_NOT_FOUND
						})) : (e.userProfile = r[0], e._isInfoCompleted = 1, t._unshiftConversation(e), Nl({
							conversation: e
						}))
					}) : this.tim.getGroupProfile({
						groupID: e.toAccount
					}).then(function(n) {
						return e.groupProfile = n.data.group, e._isInfoCompleted = 1, t._unshiftConversation(e), Nl({
							conversation: e
						})
					})
				}
			}, {
				key: "_unshiftConversation",
				value: function(e) {
					e instanceof jh && !this.conversationMap.has(e.conversationID) && (this.conversationMap = new Map([
						[e.conversationID, e]
					].concat(Bn(this.conversationMap))), this._setStorageConversationList(), this._emitConversationUpdate(1, 0))
				}
			}, {
				key: "_deleteLocalConversation",
				value: function(e) {
					return this.conversationMap.delete(e), this._setStorageConversationList(), this._emitConversationUpdate(1, 0), this.conversationMap.has(e)
				}
			}, {
				key: "_getConversationOptions",
				value: function(e) {
					var t = [],
						n = e.map(function(e) {
							if (1 === e.type) {
								var n = {
									userID: e.userID,
									nick: e.c2CNick,
									avatar: e.c2CImage
								};
								return t.push(n), {
									conversationID: "C2C".concat(e.userID),
									type: "C2C",
									lastMessage: {
										lastTime: e.time,
										lastSequence: e.sequence,
										fromAccount: e.lastC2CMsgFromAccount,
										messageForShow: e.messageShow,
										type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null,
										payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null
									},
									userProfile: new ih(n)
								}
							}
							return {
								conversationID: "GROUP".concat(e.groupID),
								type: "GROUP",
								lastMessage: {
									lastTime: e.time,
									lastSequence: e.messageReadSeq + e.unreadCount,
									fromAccount: e.msgGroupFromAccount,
									messageForShow: e.messageShow,
									type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null,
									payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null
								},
								groupProfile: new Fh({
									groupID: e.groupID,
									name: e.groupNick,
									avatar: e.groupImage
								}),
								unreadCount: e.unreadCount
							}
						});
					return t.length > 0 && this.tim.innerEmitter.emit($s.CONVERSATION_LIST_PROFILE_UPDATED, {
						data: t
					}), n
				}
			}, {
				key: "_emitConversationUpdate",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
						n = Bn(this.conversationMap.values());
					t && this.tim.innerEmitter.emit($s.CONVERSATION_LIST_UPDATED, n), e && this.tim.outerEmitter.emit(Wt.CONVERSATION_LIST_UPDATED, n)
				}
			}, {
				key: "_conversationMapTreeShaking",
				value: function(e) {
					var t = this,
						n = new Map(Bn(this.conversationMap));
					e.forEach(function(e) {
						return n.delete(e.conversationID)
					}), n.has("@TIM#SYSTEM") && n.delete("@TIM#SYSTEM"), this.tim.groupController.AVChatRoomHandler.isJoined && n.delete("".concat(Jt.GROUP).concat(this.tim.groupController.AVChatRoomHandler.group.groupID)), Bn(n.keys()).forEach(function(e) {
						return t.conversationMap.delete(e)
					})
				}
			}, {
				key: "reset",
				value: function() {
					this.conversationMap.clear(), this.hasLocalConversationList = 0, this.resetReady(), this.tim.innerEmitter.once($s.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initLocalConversationList, this)
				}
			}]), t
		}(),
		Hh = function() {
			function e(t) {
				if (Nn(this, e), void 0 === t) throw new gs({
					code: fs.MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS,
					message: hs.MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS
				});
				if (void 0 === t.tim) throw new gs({
					code: fs.MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS,
					message: "".concat(hs.MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS, ".tim")
				});
				this.list = new Map, this.tim = t.tim, this._initializeOptions(t)
			}
			return Rn(e, [{
				key: "getLocalOldestMessageByConversationID",
				value: function(e) {
					if (!e) return null;
					if (!this.list.has(e)) return null;
					var t = this.list.get(e).values();
					return t ? t.next().value : null
				}
			}, {
				key: "_initializeOptions",
				value: function(e) {
					this.options = {};
					var t = {
						memory: {
							maxDatasPerKey: 100,
							maxBytesPerData: 256,
							maxKeys: 0
						},
						cache: {
							maxDatasPerKey: 10,
							maxBytesPerData: 256,
							maxKeys: 0
						}
					};
					for (var n in t) if (void 0 !== e[n]) {
						var r = t[n];
						for (var o in r) void 0 !== e[n][o] ? this.options[n][o] = e[n][o] : this.options[n][o] = r[o]
					} else this.options[n] = t[n]
				}
			}, {
				key: "_parseMessageFormLikeKeyValue",
				value: function(e) {
					return [e.conversationID, e]
				}
			}, {
				key: "pushIn",
				value: function(e) {
					var t = this._parseMessageFormLikeKeyValue(e),
						n = 0;
					if (void 0 === this.list.get(t[0]) && this.list.set(t[0], new Map), this.list.has(e.conversationID) && this.list.get(e.conversationID).has(t[1].ID) && (n = 1), this.list.get(t[0]).set(t[1].ID, t[1]), !n) return e
				}
			}, {
				key: "shiftIn",
				value: function(e) {
					return Array.isArray(e) ? 0 === e.length ? this : (this._shiftInMultipleMessages(e), this) : (this._shiftSingleMessage(e), this)
				}
			}, {
				key: "_shiftSingleMessage",
				value: function(e) {
					var t = this._parseMessageFormLikeKeyValue(e);
					if (void 0 === this.list.get(t[0])) return this.list.set(t[0], new Map), void this.list.get(t[0]).set(t[1].ID, t[1]);
					var n = Array.from(this.list.get(t[0]));
					n.unshift([t[1].ID, t[1]]), this.list.set(t[0], new Map(n))
				}
			}, {
				key: "_shiftInMultipleMessages",
				value: function(e) {
					for (var t = e.length, n = [], r = e[0].conversationID, o = this.list.has(r) ? Array.from(this.list.get(r)) : [], i = 0; i < t; i++) n.push([e[i].ID, e[i]]);
					this.list.set(r, new Map(n.concat(o)))
				}
			}, {
				key: "remove",
				value: function(e) {
					var t = e.conversationID,
						n = e.ID;
					return this.list.get(t).delete(n), this
				}
			}]), e
		}(),
		Kh = function() {
			function e(t) {
				Nn(this, e), this.tim = t
			}
			return Rn(e, [{
				key: "setMessageRead",
				value: function(e) {
					var t = e.conversationID,
						n = e.messageID,
						r = this.tim.conversationController.getLocalConversation(t);
					if (!r || 0 === r.unreadCount) return Nl();
					var o = n ? this.tim.messageController.getLocalMessage(t, n) : null;
					switch (r.type) {
					case Jt.C2C:
						return this._setC2CMessageRead({
							conversationID: t,
							lastMessageTime: o ? o.time : r.lastMessage.lastTime
						});
					case Jt.GROUP:
						return this._setGroupMessageRead({
							conversationID: t,
							lastMessageSeq: o ? o.sequence : r.lastMessage.lastSequence
						});
					case Jt.SYSTEM:
						return r.unreadCount = 0, Nl();
					default:
						return Nl()
					}
				}
			}, {
				key: "_setC2CMessageRead",
				value: function(e) {
					var t = this,
						n = e.conversationID,
						r = e.lastMessageTime,
						o = this.tim.messageController.createPackage({
							name: "conversation",
							action: "setC2CMessageRead",
							param: {
								C2CMsgReaded: {
									cookie: "",
									C2CMsgReadedItem: [{
										toAccount: n.replace("C2C", ""),
										lastMessageTime: r
									}]
								}
							}
						});
					return this._updateIsReadAfterReadReport({
						conversationID: n,
						lastMessageTime: r
					}), this._updateUnreadCount(n), this.tim.connectionController.request(o).then(function() {
						return new Al
					}).
					catch (function(e) {
						return t.tim.innerEmitter.emit($s.ERROR_DETECTED, e), Promise.reject(new Al(e))
					})
				}
			}, {
				key: "_setGroupMessageRead",
				value: function(e) {
					var t = this,
						n = e.conversationID,
						r = e.lastMessageSeq,
						o = this.tim.messageController.createPackage({
							name: "conversation",
							action: "setGroupMessageRead",
							param: {
								groupID: n.replace("GROUP", ""),
								messageReadSeq: r
							}
						});
					return this._updateIsReadAfterReadReport({
						conversationID: n,
						lastMessageSeq: r
					}), this._updateUnreadCount(n), this.tim.connectionController.request(o).then(function() {
						return new Al
					}).
					catch (function(e) {
						return t.tim.innerEmitter.emit($s.ERROR_DETECTED, e), Promise.reject(new Al(e))
					})
				}
			}, {
				key: "_updateUnreadCount",
				value: function(e) {
					var t = this.tim,
						n = t.conversationController,
						r = t.messageController,
						o = n.getLocalConversation(e),
						i = r.getLocalMessageList(e);
					o && (o.unreadCount = i.filter(function(e) {
						return !e.isRead
					}).length)
				}
			}, {
				key: "_updateIsReadAfterReadReport",
				value: function(e) {
					var t = e.conversationID,
						n = e.lastMessageSeq,
						r = e.lastMessageTime,
						o = this.tim.messageController.getLocalMessageList(t);
					if (0 !== o.length) for (var i = o.length - 1; i >= 0; i--) {
						var a = o[i];
						if (!(r && a.time > r || n && a.sequence > n)) {
							if ("in" === a.flow && a.isRead) break;
							a.isRead = 1
						}
					}
				}
			}, {
				key: "updateIsRead",
				value: function(e) {
					var t = this.tim,
						n = t.conversationController,
						r = t.messageController,
						o = n.getLocalConversation(e),
						i = r.getLocalMessageList(e);
					if (o && 0 !== i.length && [Jt.C2C, Jt.GROUP].includes(o.type)) for (var a = 0; a < i.length - o.unreadCount && !i[a].isRead; a++) i[a].isRead = 1
				}
			}]), e
		}(),
		Yh = je.findIndex,
		Vh = 1;
	"findIndex" in [] && Array(1).findIndex(function() {
		Vh = 0
	}), Oe({
		target: "Array",
		proto: 1,
		forced: Vh
	}, {
		findIndex: function(e) {
			return Yh(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), Ar("findIndex");
	var zh = function() {
			function e(t) {
				var n = t.tim,
					r = t.messageController;
				Nn(this, e), this.tim = n, this.messageController = r, this.completedMap = new Map, this._initListener()
			}
			return Rn(e, [{
				key: "getMessageList",
				value: function(e) {
					var t = this,
						n = e.conversationID,
						r = e.nextReqMessageID,
						o = e.count,
						i = void 0 === o ? 15 : o,
						a = this._computeLeftCount({
							conversationID: n,
							nextReqMessageID: r
						});
					return this._needGetHistory({
						conversationID: n,
						leftCount: a,
						count: i
					}) ? this.messageController.getHistoryMessages({
						conversationID: n,
						count: 20
					}).then(function() {
						return a = t._computeLeftCount({
							conversationID: n,
							nextReqMessageID: r
						}), new Al(t._computeResult({
							conversationID: n,
							nextReqMessageID: r,
							count: i,
							leftCount: a
						}))
					}) : Nl(this._computeResult({
						conversationID: n,
						nextReqMessageID: r,
						count: i,
						leftCount: a
					}))
				}
			}, {
				key: "setCompleted",
				value: function(e) {
					this.completedMap.set(e, 1)
				}
			}, {
				key: "_initListener",
				value: function() {
					var e = this;
					this.tim.innerEmitter.on($s.SDK_READY, function() {
						e.completedMap.set(Jt.SYSTEM, 1)
					}), this.tim.innerEmitter.on($s.AVCHATROOM_JOIN_SUCCESS, function(t) {
						var n = t.data;
						e.completedMap.set("".concat(Jt.GROUP).concat(n))
					})
				}
			}, {
				key: "_hasMessageList",
				value: function(e) {
					return this.messageController.messagesList.list.has(e)
				}
			}, {
				key: "_getMessageListSize",
				value: function(e) {
					var t = this.messageController.messagesList.list.get(e);
					return t ? t.size : 0
				}
			}, {
				key: "_needGetHistory",
				value: function(e) {
					var t = e.conversationID,
						n = e.leftCount,
						r = e.count,
						o = this.tim.conversationController.getLocalConversation(t),
						i = o ? o.type === Jt.SYSTEM : 0,
						a = o ? o.subType === Qt.AVCHATROOM : 0;
					return i || a ? 0 : n < r && !this.completedMap.has(t)
				}
			}, {
				key: "_computeResult",
				value: function(e) {
					var t = e.conversationID,
						n = e.nextReqMessageID,
						r = e.count,
						o = e.leftCount,
						i = this._computeMessageList({
							conversationID: t,
							nextReqMessageID: n,
							count: r
						}),
						a = this._computeIsCompleted({
							conversationID: t,
							leftCount: o,
							count: r
						});
					return {
						messageList: i,
						nextReqMessageID: this._computeNextReqMessageID({
							messageList: i,
							isCompleted: a,
							conversationID: t
						}),
						isCompleted: a
					}
				}
			}, {
				key: "_computeNextReqMessageID",
				value: function(e) {
					var t = e.messageList,
						n = e.isCompleted,
						r = e.conversationID;
					if (!n) return 0 === t.length ? "" : t[0].ID;
					var o = this.messageController.getLocalMessageList(r);
					return 0 === o.length ? "" : o[0].ID
				}
			}, {
				key: "_computeMessageList",
				value: function(e) {
					var t = e.conversationID,
						n = e.nextReqMessageID,
						r = e.count,
						o = this.messageController.getLocalMessageList(t),
						i = this._computeIndexEnd({
							nextReqMessageID: n,
							messageList: o
						}),
						a = this._computeIndexStart({
							indexEnd: i,
							count: r
						});
					return o.slice(a, i)
				}
			}, {
				key: "_computeIndexEnd",
				value: function(e) {
					var t = e.messageList,
						n = void 0 === t ? [] : t,
						r = e.nextReqMessageID;
					return r ? n.findIndex(function(e) {
						return e.ID === r
					}) : n.length
				}
			}, {
				key: "_computeIndexStart",
				value: function(e) {
					var t = e.indexEnd,
						n = e.count;
					return t > n ? t - n : 0
				}
			}, {
				key: "_computeLeftCount",
				value: function(e) {
					var t = e.conversationID,
						n = e.nextReqMessageID;
					return n ? this.messageController.getLocalMessageList(t).findIndex(function(e) {
						return e.ID === n
					}) : this._getMessageListSize(t)
				}
			}, {
				key: "_computeIsCompleted",
				value: function(e) {
					var t = e.conversationID;
					return e.leftCount <= e.count && this.completedMap.has(t) ? 1 : 0
				}
			}, {
				key: "reset",
				value: function() {
					this.completedMap.clear()
				}
			}]), e
		}(),
		Wh = function(e) {
			return function(t, n, r, o) {
				Ne(n);
				var i = Re(t),
					a = _(i),
					s = ae(i.length),
					u = e ? s - 1 : 0,
					c = e ? -1 : 1;
				if (r < 2) for (;;) {
					if (u in a) {
						o = a[u], u += c;
						break
					}
					if (u += c, e ? u < 0 : s <= u) throw TypeError("Reduce of empty array with no initial value")
				}
				for (; e ? u >= 0 : s > u; u += c) u in a && (o = n(o, a[u], u, i));
				return o
			}
		},
		Xh = {
			left: Wh(0),
			right: Wh(1)
		}.left;
	Oe({
		target: "Array",
		proto: 1,
		forced: Be("reduce")
	}, {
		reduce: function(e) {
			return Xh(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var Jh = new(function() {
		function e() {
			Nn(this, e), this.map = new Map, this.thresholdValue = 10
		}
		return Rn(e, [{
			key: "push",
			value: function(e, t) {
				if (this.map.has(e)) {
					var n = this.map.get(e);
					n.push(t), this.needReport(n) && (this.report(n, e), this.map.delete(e))
				} else this.map.set(e, [t])
			}
		}, {
			key: "needReport",
			value: function(e) {
				return e.length === this.thresholdValue
			}
		}, {
			key: "report",
			value: function(e, t) {
				var n = e.reduce(function(e, t) {
					return e + t
				}) / e.length,
					r = Math.min.apply(null, e),
					o = Math.max.apply(null, e);
				zc.log("AverageCalculator.report ".concat(t, " count=").concat(e.length, " average=").concat(n, "ms max=").concat(o, "ms min=").concat(r, "ms"))
			}
		}, {
			key: "reset",
			value: function() {
				this.map.clear()
			}
		}]), e
	}()),
		Qh = function() {
			function e(t, n) {
				Nn(this, e), this.options = n || {
					enablePointer: 1
				}, this.taskName = t || ["task", this._timeFormat()].join("-"), this.pointsList = [], this.reportText = {}, this.maxNameLen = 0, this.gapChar = "…", this.log = console.log, this.currentTask = ""
			}
			return Rn(e, [{
				key: "dot",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
					if (0 != this.options.enablePointer) {
						var t = Date.now();
						this.maxNameLen = this.maxNameLen < e.length ? e.length : this.maxNameLen, this.flen = this.maxNameLen + 10, this.pointsList.push({
							pointerName: e,
							time: t
						})
					}
				}
			}, {
				key: "_analisys",
				value: function() {
					if (0 != this.options.enablePointer) {
						for (var e = this.pointsList, t = e.length, n = [], r = [], o = 0; o < t; o++) 0 !== o && (r = this._analisysTowPoints(e[o - 1], e[o]), n.push(r.join("")));
						return r = this._analisysTowPoints(e[0], e[t - 1], 1), n.push(r.join("")), n.join("")
					}
				}
			}, {
				key: "_analisysTowPoints",
				value: function(e, t) {
					if (0 != this.options.enablePointer) {
						var n = (t.time - e.time).toString();
						return ["(", e.pointerName, ")->(", t.pointerName, ")=", n, "ms;"]
					}
				}
			}, {
				key: "report",
				value: function() {
					0 != this.options.enablePointer && zc.log(this.reportString())
				}
			}, {
				key: "reportString",
				value: function() {
					var e = this._analisys();
					this.pointsList = [];
					var t = "".concat(this.taskName);
					return "".concat(t, " report：").concat(e)
				}
			}, {
				key: "_timeFormat",
				value: function() {
					var e = new Date,
						t = this.zeroFix(e.getMonth() + 1, 2),
						n = this.zeroFix(e.getDate(), 2);
					return "".concat(t, "-").concat(n, " ").concat(e.getHours(), ":").concat(e.getSeconds(), ":").concat(e.getMinutes(), ".").concat(e.getMilliseconds())
				}
			}, {
				key: "zeroFix",
				value: function(e, t) {
					return ("000000000" + e).slice(-t)
				}
			}]), e
		}(),
		$h = function(e, t) {
			return new Qh(e, t)
		},
		Zh = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this, e)))._initializeMembers(), n._initializeListener(), n._initialzeHandlers(), n._IAmReady(), n
			}
			return Gn(t, Sl), Rn(t, [{
				key: "_IAmReady",
				value: function() {
					this.triggerReady()
				}
			}, {
				key: "_initializeMembers",
				value: function() {
					this.messagesList = new Hh({
						tim: this.tim
					}), this.currentMessageKey = {}
				}
			}, {
				key: "_initialzeHandlers",
				value: function() {
					this.readReportHandler = new Kh(this.tim), this.getMessageHandler = new zh({
						messageController: this,
						tim: this.tim
					})
				}
			}, {
				key: "reset",
				value: function() {
					this.messagesList = null, this.messagesList = new Hh({
						tim: this.tim
					}), this.currentMessageKey = {}, this.getMessageHandler.reset()
				}
			}, {
				key: "_initializeListener",
				value: function() {
					var e = this.tim.innerEmitter;
					e.on($s.NOTICE_LONGPOLL_NEW_C2C_NOTICE, this._onReceiveC2CMessage, this), e.on($s.SYNC_MESSAGE_C2C_PROCESSING, this._onReceiveC2CMessage, this), e.on($s.SYNC_MESSAGE_C2C_FINISHED, this._onReceiveC2CMessage, this), e.on($s.NOTICE_LONGPOLL_NEW_GROUP_MESSAGES, this._onReceiveGroupMessage, this), e.on($s.NOTICE_LONGPOLL_NEW_GROUP_TIPS, this._onReceiveGroupTips, this), e.on($s.NOTICE_LONGPOLL_NEW_GROUP_NOTICE, this._onReceiveSystemNotice, this)
				}
			}, {
				key: "sendMessageInstance",
				value: function(e) {
					var t = $h("MessageController.sendMessageInstance(), ".concat(e.ID), this.tim.options);
					zc.time(kl + e.ID);
					var n = this.tim,
						r = n.innerEmitter,
						o = n.outerEmitter;
					if (1 == e.isError()) return t.dot("message error"), t.report(), Ll(e.getIMError());
					if (0 == e.isSendable()) return t.dot("message unsendable"), t.report(), Ll({
						code: fs.MESSAGE_FILE_URL_IS_EMPTY,
						message: hs.MESSAGE_FILE_URL_IS_EMPTY
					});
					var i = null,
						a = null,
						s = null,
						u = this.messagesList.pushIn(e);
					switch (t.dot("messagesList.pushIn"), u && (t.dot("innerEmitter ".concat($s.MESSAGE_SENDING)), r.emit($s.MESSAGE_SENDING, {
						data: {
							eventDataList: [{
								conversationID: e.conversationID,
								unreadCount: 0,
								type: e.conversationType,
								subType: e.conversationSubType,
								lastMessage: e
							}]
						}
					}), t.dot("outerEmitter ".concat($s.MESSAGE_SENDING)), o.emit(Wt.MESSAGE_SENDING, e)), t.dot("init handles ".concat(e.conversationType)), e.conversationType) {
					case Jt.C2C:
						i = this._createC2CMessagePack(e), a = this._handleOnSendC2CMessageSuccess.bind(this), s = this._handleOnSendC2CMessageFail.bind(this);
						break;
					case Jt.GROUP:
						i = this._createGroupMessagePack(e), a = this._handleOnSendGroupMessageSuccess.bind(this), s = this._handleOnSendGroupMessageFail.bind(this);
						break;
					default:
						return t.dot("error ".concat(e.conversationType)), t.report(), Ll(new gs({
							code: fs.MESSAGE_SEND_INVALID_CONVERSATION_TYPE,
							message: hs.MESSAGE_SEND_INVALID_CONVERSATION_TYPE
						}))
					}
					return this.tim.connectionController.request(i).then(function(n) {
						return t.dot("send success"), a(e, n.data), Jh.push(kl, zc.timeEnd(kl + e.ID)), t.report(), new Al({
							message: e
						})
					}).
					catch (function(n) {
						return s(e, n), t.dot("send fail"), zc.error("MessageController.sendMessageInstance() error:", n), t.report(), Ll(new gs({
							code: fs.MESSAGE_SEND_FAIL,
							message: hs.MESSAGE_SEND_FAIL,
							data: {
								message: e
							}
						}))
					})
				}
			}, {
				key: "resendMessage",
				value: function(e) {
					return 1 == this._isFileLikeMessage(e) ? (zc.warn("MessageController.resendMessage(), file like message can not resendBy SDK.resendMessage()"), Ll(new gs({
						code: fs.MESSAGE_RESEND_FILE_UNSUPPORTED,
						message: hs.MESSAGE_RESEND_FILE_UNSUPPORTED
					}))) : (e.isResend = 1, e.status = Cl.MESSAGE_STATUS.UNSEND, this.sendMessageInstance(e))
				}
			}, {
				key: "_isFileLikeMessage",
				value: function(e) {
					var t = Xt.ELEMENT_TYPES,
						n = [t.IMAGE, t.FILE, t.SOUND, t.VIDEO],
						r = e.elements[0];
					return n.indexOf(r.type) >= 0 ? 1 : 0
				}
			}, {
				key: "_resendBinaryTypeMessage",
				value: function() {}
			}, {
				key: "sendC2CMessage",
				value: function(e) {
					var t = this,
						n = this.tim.outerEmitter;
					e.currentUser = this.tim.context.identifier, e.from = this.tim.context.identifier;
					var r = new wh(e);
					this.messagesList.pushIn(r), r.status = Cl.MESSAGE_STATUS.UNSEND, n.emit(Wt.MESSAGE_SENDING, r);
					var o = this._createC2CMessagePack(r);
					return this.tim.connectionController.request(o).then(function(e) {
						t._handleOnSendC2CMessageSuccess(r, e.data)
					}).
					catch (function(e) {
						t._handleOnSendC2CMessageFail(r, e)
					})
				}
			}, {
				key: "_createC2CMessagePack",
				value: function(e) {
					return this.createPackage({
						name: "c2cMessage",
						action: "create",
						param: {
							toAccount: e.to,
							msgBody: e.elements,
							msgSeq: e.sequence,
							msgRandom: e.random,
							offlinePushInfo: {
								desc: "offline message push",
								ext: "offline message push"
							}
						}
					})
				}
			}, {
				key: "_handleOnSendC2CMessageSuccess",
				value: function(e, t) {
					var n = this.tim,
						r = n.innerEmitter,
						o = n.outerEmitter;
					e.status = Cl.MESSAGE_STATUS.SUCCESS, e.time = t.time, r.emit($s.MESSAGE_C2C_SEND_SUCCESS, {
						data: {
							eventDataList: [{
								conversationID: e.conversationID,
								unreadCount: 0,
								type: e.conversationType,
								subType: e.conversationSubType,
								lastMessage: e
							}]
						}
					}), o.emit(Wt.MESSAGE_SEND_SUCCESS, e)
				}
			}, {
				key: "_handleOnSendC2CMessageFail",
				value: function(e, t) {
					var n = this.tim,
						r = n.innerEmitter,
						o = n.outerEmitter;
					e.status = Cl.MESSAGE_STATUS.FAIL, r.emit($s.ERROR_DETECTED, t), o.emit(Wt.MESSAGE_SEND_FAIL, e)
				}
			}, {
				key: "sendGroupMessage",
				value: function(e) {
					var t = this,
						n = this.tim.outerEmitter;
					e.currentUser = this.tim.context.identifier, e.from = this.tim.context.identifier;
					var r = new wh(e);
					this.messagesList.pushIn(r), r.status = Cl.MESSAGE_STATUS.UNSEND, n.emit(Wt.MESSAGE_SENDING, r);
					var o = this._createGroupMessagePack(e.groupID, r.elements);
					return this.tim.connectionController.request(o).then(function(e) {
						t._handleOnSendGroupMessageSuccess(r, e.data)
					}).
					catch (function(e) {
						t._handleOnSendGroupMessageFail(e, r)
					})
				}
			}, {
				key: "_createGroupMessagePack",
				value: function(e) {
					return this.createPackage({
						name: "groupMessage",
						action: "create",
						param: {
							groupID: e.to,
							msgBody: e.elements,
							random: e.random,
							offlinePushInfo: {
								desc: "offline message push",
								ext: "offline message push"
							}
						}
					})
				}
			}, {
				key: "_handleOnSendGroupMessageSuccess",
				value: function(e, t) {
					var n = this.tim,
						r = n.innerEmitter,
						o = n.outerEmitter;
					e.sequence = t.sequence, e.time = t.time, e.status = Cl.MESSAGE_STATUS.SUCCESS, r.emit($s.MESSAGE_GROUP_SEND_SUCCESS, {
						data: {
							eventDataList: [{
								conversationID: e.conversationID,
								unreadCount: 0,
								type: e.conversationType,
								subType: e.conversationSubType,
								lastMessage: e
							}]
						}
					}), o.emit(Wt.MESSAGE_SEND_SUCCESS, e)
				}
			}, {
				key: "_handleOnSendGroupMessageFail",
				value: function(e, t) {
					var n = this.tim,
						r = n.innerEmitter,
						o = n.outerEmitter;
					e.status = Cl.MESSAGE_STATUS.FAIL, r.emit($s.ERROR_DETECTED, t), o.emit(Wt.MESSAGE_SEND_FAIL, e)
				}
			}, {
				key: "_onReceiveC2CMessage",
				value: function(e) {
					var t = this.tim,
						n = t.innerEmitter,
						r = t.outerEmitter;
					zc.log("MessageController._onReceiveC2CMessage(), get new messages");
					var o = this._newC2CMessageStoredAndSummary(e.data, Jt.C2C),
						i = o.eventDataList,
						a = o.result;
					n.emit($s.MESSAGE_C2C_INSTANT_RECEIVED, {
						data: {
							eventDataList: i,
							result: a
						},
						resource: this
					}), a.length > 0 && r.emit(Wt.MESSAGE_RECEIVED, a)
				}
			}, {
				key: "_onReceiveGroupMessage",
				value: function(e) {
					var t = this.tim,
						n = t.outerEmitter,
						r = t.innerEmitter,
						o = this._newGroupMessageStoredAndSummary(e.data),
						i = o.eventDataList,
						a = o.result;
					i.length > 0 && (zc.log("MessageController._onReceiveGroupMessage()"), r.emit($s.MESSAGE_GROUP_INSTANT_RECEIVED, {
						data: {
							eventDataList: i,
							result: a,
							isGroupTip: 0
						}
					})), a.length > 0 && n.emit(Wt.MESSAGE_RECEIVED, a)
				}
			}, {
				key: "_onReceiveGroupTips",
				value: function(e) {
					var t = this.tim,
						n = t.outerEmitter,
						r = t.innerEmitter,
						o = e.data,
						i = this._newGroupTipsStoredAndSummary(o, Jt.GROUP),
						a = i.eventDataList,
						s = i.result;
					zc.log("MessageController._onReceiveGroupTips()"), r.emit($s.MESSAGE_GROUP_INSTANT_RECEIVED, {
						data: {
							eventDataList: a,
							result: s,
							isGroupTip: 1
						}
					}), s.length > 0 && n.emit(Wt.MESSAGE_RECEIVED, s)
				}
			}, {
				key: "_onReceiveSystemNotice",
				value: function(e) {
					var t = this.tim,
						n = t.outerEmitter,
						r = t.innerEmitter,
						o = e.data,
						i = o.groupSystemNotices,
						a = o.type,
						s = this._newSystemNoticeStoredAndSummary({
							notifiesList: i,
							type: a
						}),
						u = s.eventDataList,
						c = s.result;
					r.emit($s.MESSAGE_GROUP_SYSTEM_NOTICE_RECEIVED, {
						data: {
							eventDataList: u,
							result: c,
							type: a
						}
					}), c.length > 0 && n.emit(Wt.MESSAGE_RECEIVED, c)
				}
			}, {
				key: "_newC2CMessageStoredAndSummary",
				value: function(e, t) {
					for (var n = null, r = [], o = [], i = {}, a = 0, s = e.length; a < s; a++) {
						var u = e[a];
						u.currentUser = this.tim.context.identifier, u.conversationType = t, u.isSystemMessage = !! u.isSystemMessage, (n = new wh(u)).setElement(u.elements[0]);
						var c = this.messagesList.pushIn(n);
						void 0 === i[n.conversationID] ? i[n.conversationID] = r.push({
							conversationID: n.conversationID,
							unreadCount: "out" === n.flow ? 0 : 1,
							type: n.conversationType,
							subType: n.conversationSubType,
							lastMessage: n
						}) - 1 : (r[i[n.conversationID]].type = n.conversationType, r[i[n.conversationID]].subType = n.conversationSubType, r[i[n.conversationID]].lastMessage = n, "in" === n.flow && r[i[n.conversationID]].unreadCount++), c && o.push(c)
					}
					return {
						eventDataList: r,
						result: o
					}
				}
			}, {
				key: "_newGroupMessageStoredAndSummary",
				value: function(e) {
					for (var t = null, n = [], r = {}, o = [], i = Jt.GROUP, a = 0, s = e.length; a < s; a++) {
						var u = e[a];
						if (u.currentUser = this.tim.context.identifier, u.conversationType = i, u.isSystemMessage = !! u.isSystemMessage, (t = new wh(u)).setElement(u.elements[0]), t.from !== this.tim.context.identifier) {
							var c = this.messagesList.pushIn(t);
							c && o.push(c), void 0 === r[t.conversationID] ? r[t.conversationID] = n.push({
								conversationID: t.conversationID,
								unreadCount: "out" === t.flow ? 0 : 1,
								type: t.conversationType,
								subType: t.conversationSubType,
								lastMessage: t
							}) - 1 : (n[r[t.conversationID]].type = t.conversationType, n[r[t.conversationID]].subType = t.conversationSubType, n[r[t.conversationID]].lastMessage = t, "in" === t.flow && n[r[t.conversationID]].unreadCount++)
						}
					}
					return {
						eventDataList: n,
						result: o
					}
				}
			}, {
				key: "_newGroupTipsStoredAndSummary",
				value: function(e, t) {
					for (var n = null, r = [], o = [], i = {}, a = 0, s = e.length; a < s; a++) {
						var u = e[a];
						u.currentUser = this.tim.context.identifier, u.conversationType = t, (n = new wh(u)).setElement({
							type: Xt.ELEMENT_TYPES.GROUP_TIP,
							content: kn({}, u.elements, {
								groupProfile: u.groupProfile
							})
						}), n.isSystemMessage = 0;
						var c = this.messagesList.pushIn(n);
						c && o.push(c), void 0 === i[n.conversationID] ? i[n.conversationID] = r.push({
							conversationID: n.conversationID,
							unreadCount: "out" === n.flow ? 0 : 1,
							type: n.conversationType,
							subType: n.conversationSubType,
							lastMessage: n
						}) - 1 : (r[i[n.conversationID]].type = n.conversationType, r[i[n.conversationID]].subType = n.conversationSubType, r[i[n.conversationID]].lastMessage = n, "in" === n.flow && r[i[n.conversationID]].unreadCount++)
					}
					return {
						eventDataList: r,
						result: o
					}
				}
			}, {
				key: "_newSystemNoticeStoredAndSummary",
				value: function(e) {
					var t = e.notifiesList,
						n = e.type,
						r = null,
						o = t.length,
						i = 0,
						a = [],
						s = {
							conversationID: Jt.SYSTEM,
							unreadCount: 0,
							type: Jt.SYSTEM,
							subType: null,
							lastMessage: null
						};
					for (i = 0; i < o; i++) {
						var u = t[i];
						if (u.elements.operationType !== cn) {
							u.currentUser = this.tim.context.identifier, u.conversationType = Jt.SYSTEM, u.conversationID = Jt.SYSTEM, (r = new wh(u)).setElement({
								type: Xt.ELEMENT_TYPES.GROUP_SYSTEM_NOTICE,
								content: kn({}, u.elements, {
									groupProfile: u.groupProfile
								})
							}), r.isRead = 1, r.isSystemMessage = 1;
							var c = this.messagesList.pushIn(r);
							c && (a.push(c), "poll" === n && s.unreadCount++), s.subType = r.conversationSubType
						}
					}
					return s.lastMessage = a[a.length - 1], {
						eventDataList: a.length > 0 ? [s] : [],
						result: a
					}
				}
			}, {
				key: "_onSyncMessagesFinished",
				value: function(e) {
					for (var t = e.data, n = null, r = null, o = 0; o < t.length; o++)(r = t[o]).currentUser = this.tim.context.identifier, (n = new wh(r)).setElement(r.elements[0]), this.messagesList.pushIn(n), n = null;
					zc.log("_onSyncMessagesFinished")
				}
			}, {
				key: "getHistoryMessages",
				value: function(e) {
					if (e.conversationID === Jt.SYSTEM) return Nl();
					!e.count && (e.count = 15), e.count > 20 && (e.count = 20);
					var t = this.messagesList.getLocalOldestMessageByConversationID(e.conversationID);
					t || ((t = {}).time = 0, t.sequence = 0, 0 === e.conversationID.indexOf(Jt.C2C) ? (t.to = e.conversationID.replace(Jt.C2C, ""), t.conversationType = Jt.C2C) : 0 === e.conversationID.indexOf(Jt.GROUP) && (t.to = e.conversationID.replace(Jt.GROUP, ""), t.conversationType = Jt.GROUP));
					var n = "";
					switch (t.conversationType) {
					case Jt.C2C:
						return n = e.conversationID.replace(Jt.C2C, ""), this.getC2CRoamMessages({
							conversationID: e.conversationID,
							peerAccount: n,
							count: e.count,
							lastMessageTime: void 0 === this.currentMessageKey[e.conversationID] ? 0 : t.time
						});
					case Jt.GROUP:
						return this.getGroupRoamMessages({
							conversationID: e.conversationID,
							groupID: t.to,
							count: e.count,
							sequence: t.sequence - 1
						});
					default:
						return Nl()
					}
				}
			}, {
				key: "getC2CRoamMessages",
				value: function(e) {
					var t = this,
						n = this.tim,
						r = n.connectionController,
						o = n.innerEmitter,
						i = void 0 !== this.currentMessageKey[e.conversationID] ? this.currentMessageKey[e.conversationID] : "",
						a = this.createPackage({
							name: "c2cMessage",
							action: "query",
							param: {
								peerAccount: e.peerAccount,
								count: e.count || 15,
								lastMessageTime: e.lastMessageTime || 0,
								messageKey: i
							}
						});
					return r.request(a).then(function(n) {
						var r = n.data,
							o = r.complete,
							i = r.messageList;
						1 === o && t.getMessageHandler.setCompleted(e.conversationID);
						var a = t._roamMessageStore(i, Jt.C2C, e.conversationID);
						return t.readReportHandler.updateIsRead(e.conversationID), t.currentMessageKey[e.conversationID] = n.data.messageKey, a
					}).
					catch (function(e) {
						return o.emit($s.ERROR_DETECTED, e), Promise.reject(e)
					})
				}
			}, {
				key: "getC2CRoamMessagesSliced",
				value: function(e) {
					var t = this.tim.connectionController,
						n = this;
					return function(e) {
						return new Promise(function(r, o) {
							!
							function e(r, o, i) {
								var a = this,
									s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
									u = n.createPackage({
										name: "c2cMessage",
										action: "query",
										param: {
											peerAccount: r.peerAccount,
											count: r.count || 15,
											lastMessageTime: r.lastMessageTime || 0,
											messageKey: r.messageKey || ""
										}
									}),
									c = t.request(u).then(function(t) {
										var n = t.data.messageList,
											u = a._roamMessageStore(n, Jt.C2C);
										s.push.apply(s, Bn(u)), t.data.complete === Cl.GET_HISTORY_MESSAGE_STATUS.C2C_IS_NOT_FINISHED ? (r.messageKey = t.data.messageKey, e(r, o, s)) : t.data.complete === Cl.GET_HISTORY_MESSAGE_STATUS.C2C_IS_FINISHED ? (zc.log("getC2CRoamMessages finised..."), o(new Al(s))) : i(new gs({
											code: fs.MESSAGE_UNKNOW_ROMA_LIST_END_FLAG_FIELD,
											message: hs.MESSAGE_UNKNOW_ROMA_LIST_END_FLAG_FIELD
										}))
									}).reject(function(e) {
										zc.log("getC2CRoamMessages fail..."), i(e)
									});
								return c
							}(e, r, o, [])
						})
					}(e)
				}
			}, {
				key: "getGroupRoamMessages",
				value: function(e) {
					var t = this,
						n = this.tim,
						r = n.connectionController,
						o = n.conversationController,
						i = e.conversationID,
						a = e.sequence >= 0 ? e.sequence : o.getLocalConversationLastSequence(i);
					if (a < 0) return Nl([]);
					var s = this.createPackage({
						name: "groupMessage",
						action: "query",
						param: {
							groupID: e.groupID,
							count: e.count,
							sequence: a
						}
					});
					return r.request(s).then(function(n) {
						var r = n.data.messagesList,
							o = "GROUP".concat(e.groupID);
						Array.isArray(r) && r.length < e.count && t.getMessageHandler.setCompleted(o);
						var i = t._roamMessageStore(r, Jt.GROUP, o);
						return t.readReportHandler.updateIsRead(o), zc.log("getGroupRoamMessages fnished..."), i
					}).
					catch (function(e) {
						return t.tim.exceptionController.ask(e), zc.log("getGroupRoamMessages error..."), Promise.reject(e)
					})
				}
			}, {
				key: "_roamMessageStore",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0,
						n = arguments.length > 2 ? arguments[2] : void 0,
						r = null,
						o = [],
						i = 0,
						a = e.length,
						s = null,
						u = t === Jt.GROUP,
						c = function() {
							i = t === Jt.GROUP ? e.length - 1 : 0, a = t === Jt.GROUP ? 0 : e.length
						},
						l = function() {
							t === Jt.GROUP ? --i : ++i
						},
						p = function() {
							return t === Jt.GROUP ? i >= a : i < a
						};
					for (u && 0 === e.length && this.getMessageHandler.setCompleted(n), c(); p(); l()) 0 !== e[i].elements.length || 0 !== e[i].time ? (u && 1 === e[i].sequence && this.getMessageHandler.setCompleted(n), (r = new wh(e[i])).to = e[i].to, r.isSystemMessage = !! e[i].isSystemMessage, r.conversationType = t, s = e[i].event === Xt.JSON.TYPE.GROUP.TIP ? {
						type: Xt.ELEMENT_TYPES.GROUP_TIP,
						content: kn({}, e[i].elements, {
							groupProfile: e[i].groupProfile
						})
					} : e[i].elements[0], r.setElement(s), r.reInitialize(this.tim.context.identifier), o.push(r)) : this.getMessageHandler.setCompleted(n);
					return this.messagesList.shiftIn(o), c = l = p = null, o
				}
			}, {
				key: "getLocalMessageList",
				value: function(e) {
					return this.messagesList.list.has(e) ? Bn(this.messagesList.list.get(e).values()) : []
				}
			}, {
				key: "getLocalMessage",
				value: function(e, t) {
					var n = this.messagesList.list.get(e);
					if (!n) return null;
					var r = n.get(t);
					return r || null
				}
			}, {
				key: "setMessageRead",
				value: function(e) {
					return this.readReportHandler.setMessageRead(e)
				}
			}, {
				key: "getMessageList",
				value: function(e) {
					return this.getMessageHandler.getMessageList(e)
				}
			}, {
				key: "createTextMessage",
				value: function(e) {
					e.currentUser = this.tim.context.identifier;
					var t = new wh(e),
						n = "string" == typeof e.payload ? e.payload : e.payload.text,
						r = new yh({
							text: n
						});
					return t.setElement(r), t
				}
			}, {
				key: "createCustomMessage",
				value: function(e) {
					e.currentUser = this.tim.context.identifier;
					var t = new wh(e),
						n = new Gh({
							data: e.payload.data,
							description: e.payload.description,
							extension: e.payload.extension
						});
					return t.setElement(n), t
				}
			}, {
				key: "createImageMessage",
				value: function(e) {
                    debugger;
					var t = this.tim.uploadController;
					e.currentUser = this.tim.context.identifier;
					var n = new wh(e),
						r = new Sh({
							imageFormat: "UNKNOWN",
							uuid: ["fake", ol(), ol()].join("-"),
							file: e.payload.file
						});
					return t.uploadImage({
						file: e.payload.file,
						to: e.to,
						onProgress: function(t) {
							r.updatePercent.bind(r)(t), "function" == typeof e.onProgress && e.onProgress(t)
						}
					}).then(function(e) {
						var t = ["https://", e.location].join("");
						r.updateImageFormat(e.fileType), r.updateImageInfoArray({
							size: e.fileSize,
							url: t
						}), n.triggerOperated()
					}).
					catch (function(e) {
						n.status = Cl.MESSAGE_STATUS.FAIL, zc.warn("MessageController.createImageMessage(), error:", e)
					}), n.setElement(r), n
				}
			}, {
				key: "createFileMessage",
				value: function(e) {
					if (Tc) return Ll({
						code: fs.MESSAGE_FILE_WECHAT_MINIAPP_NOT_SUPPORT,
						message: hs.MESSAGE_FILE_WECHAT_MINIAPP_NOT_SUPPORT
					});
					var t = this.tim.uploadController;
					e.currentUser = this.tim.context.identifier;
					var n = new wh(e),
						r = new kh({
							uuid: ["fake", ol(), ol()].join("-"),
							file: e.payload.file
						});
					return t.uploadFile({
						file: e.payload.file,
						to: e.to,
						onProgress: function(t) {
							r.updatePercent.bind(r)(t), "function" == typeof e.onProgress && e.onProgress(t)
						}
					}).then(function(e) {
						var t = ["https://", e.location].join("");
						r.updateFileUrl(t), zc.log("MessageController.createFileMessage(), file upload success, URL: ".concat(t)), n.triggerOperated()
					}).
					catch (function(e) {
						n.status = Cl.MESSAGE_STATUS.FAIL, e.code === fs.MESSAGE_FILE_SIZE_LIMIT && n.setError(e.code, e.message), zc.warn("MessageController.createFileMessage(), file upload fail, error response: ", e), n.triggerOperated()
					}), n.setElement(r), n
				}
			}, {
				key: "createFaceMessage",
				value: function(e) {
					e.currentUser = this.tim.context.identifier;
					var t = new wh(e),
						n = "string" == typeof e.payload ? e.payload : e.payload.text,
						r = new yh({
							text: n
						});
					return t.setElement(r), t
				}
			}]), t
		}(),
		eg = function() {
			function e(t) {
				Nn(this, e), this.userID = "", this.avatar = "", this.nick = "", this.role = "", this.joinTime = "", this.lastSendMsgTime = "", this.nameCard = "", this.muteUntil = 0, this.memberCustomField = [], this._initMember(t)
			}
			return Rn(e, [{
				key: "_initMember",
				value: function(e) {
					this.updateMember(e)
				}
			}, {
				key: "updateMember",
				value: function(e) {
					nl(this, e, [], [null, void 0, "", 0, NaN])
				}
			}, {
				key: "updateRole",
				value: function(e) {
					["Owner", "Admin", "Member"].indexOf(e) < 0 || (this.role = e)
				}
			}, {
				key: "updateMemberCustomField",
				value: function(e) {
					nl(this.memberCustomField, e)
				}
			}]), e
		}(),
		tg = function() {
			function e(t) {
				Nn(this, e), this.tim = t.tim, this.groupController = t.groupController, this._initListeners()
			}
			return Rn(e, [{
				key: "_initListeners",
				value: function() {
					this.tim.innerEmitter.on($s.MESSAGE_GROUP_INSTANT_RECEIVED, this._onReceivedGroupTips, this)
				}
			}, {
				key: "_onReceivedGroupTips",
				value: function(e) {
					var t = this,
						n = e.data,
						r = n.result;
					n.isGroupTip && r.forEach(function(e) {
						switch (e.elements[0].content.operationType) {
						case 1:
							t._onNewMemberComeIn(e);
							break;
						case 2:
							t._onMemberQuit(e);
							break;
						case 3:
							t._onMemberKickedOut(e);
							break;
						case 4:
							t._onMemberSetAdmin(e);
							break;
						case 5:
							t._onMemberCancelledAdmin(e);
							break;
						case 6:
							t._onGroupProfileModified(e);
							break;
						case 7:
							t._onMemberInfoModified(e);
							break;
						default:
							zc.warn("GroupTipsHandler._onReceivedGroupTips Unhandled groupTips. operationType=", e.elements[0].content.operationType)
						}
					})
				}
			}, {
				key: "_onNewMemberComeIn",
				value: function(e) {
					var t = 0,
						n = e.elements[0].content.groupProfile.groupID,
						r = e.elements[0].content.userIDList;
					if (this.groupController.hasLocalGroupMemberMap(n)) for (var o = 0; o < r.length; o++) {
						var i = r[0];
						if (!this.groupController.getLocalGroupMemberInfo(n, i)) {
							t = 1;
							break
						}
					}
					t && this.groupController.updateGroupMemberList({
						groupID: n
					})
				}
			}, {
				key: "_onMemberQuit",
				value: function(e) {
					var t = e.elements[0].content.groupProfile.groupID;
					this.groupController._deleteLocalGroupMembers(t, e.elements[0].content.userIDList)
				}
			}, {
				key: "_onMemberKickedOut",
				value: function(e) {
					var t = e.elements[0].content.groupProfile.groupID;
					this.groupController._deleteLocalGroupMembers(t, e.elements[0].content.userIDList)
				}
			}, {
				key: "_onMemberSetAdmin",
				value: function(e) {
					var t = this,
						n = e.elements[0].content.groupProfile.groupID;
					e.elements[0].content.userIDList.forEach(function(e) {
						var r = t.groupController.getLocalGroupMemberInfo(n, e);
						r && r.updateRole($t.ADMIN)
					})
				}
			}, {
				key: "_onMemberCancelledAdmin",
				value: function(e) {
					var t = this,
						n = e.elements[0].content.groupProfile.groupID;
					e.elements[0].content.userIDList.forEach(function(e) {
						var r = t.groupController.getLocalGroupMemberInfo(n, e);
						r && r.updateRole($t.MEMBER)
					})
				}
			}, {
				key: "_onGroupProfileModified",
				value: function(e) {
					var t = this,
						n = e.elements[0].content.newGroupProfile,
						r = e.elements[0].content.groupProfile.groupID,
						o = this.groupController.getLocalGroupProfile(r);
					Object.keys(n).forEach(function(e) {
						switch (e) {
						case "ownerID":
							t._ownerChaged(o, n);
							break;
						default:
							o[e] = n[e]
						}
					}), this.groupController._emitGroupUpdate(1, 1)
				}
			}, {
				key: "_ownerChaged",
				value: function(e, t) {
					var n = e.groupID,
						r = this.groupController.getLocalGroupProfile(n),
						o = this.tim.context.identifier;
					if (o === t.ownerID) {
						r.updateGroup({
							selfInfo: {
								role: $t.OWNER
							}
						});
						var i = this.groupController.getLocalGroupMemberInfo(n, o),
							a = this.groupController.getLocalGroupProfile(n).ownerID,
							s = this.groupController.getLocalGroupMemberInfo(n, a);
						i && i.updateRole($t.OWNER), s && s.updateRole($t.MEMBER)
					}
				}
			}, {
				key: "_onMemberInfoModified",
				value: function(e) {
					var t = this,
						n = e.elements[0].content.groupProfile.groupID;
					e.elements[0].content.msgMemberInfo.forEach(function(e) {
						var r = t.groupController.getLocalGroupMemberInfo(n, e.userAccount);
						r && e.shutupTime && (r.shutUpUntil = (Date.now() + 1e3 * e.shutupTime) / 1e3)
					})
				}
			}]), e
		}(),
		ng = function() {
			function e(t) {
				Nn(this, e), this.groupController = t.groupController, this.tim = t.tim, this._initLiceners()
			}
			return Rn(e, [{
				key: "_initLiceners",
				value: function() {
					this.tim.innerEmitter.on($s.MESSAGE_GROUP_SYSTEM_NOTICE_RECEIVED, this._onReceivedGroupSystemNotice, this)
				}
			}, {
				key: "_onReceivedGroupSystemNotice",
				value: function(e) {
					var t = this,
						n = e.data,
						r = n.result;
					"sync" !== n.type && r.forEach(function(e) {
						switch (e.elements[0].content.operationType) {
						case 1:
							t._onApplyGroupRequest(e);
							break;
						case 2:
							t._onApplyGroupRequestAgreed(e);
							break;
						case 3:
							t._onApplyGroupRequestRefused(e);
							break;
						case 4:
							t._onMemberKicked(e);
							break;
						case 5:
							t._onGroupDismissed(e);
							break;
						case 6:
							break;
						case 7:
							t._onInviteGroup(e);
							break;
						case 8:
							t._onQuitGroup(e);
							break;
						case 9:
							t._onSetManager(e);
							break;
						case 10:
							t._onDeleteManager(e);
							break;
						case 11:
						case 12:
						case 15:
							break;
						case 255:
							t.tim.outerEmitter.emit(Wt.GROUP_SYSTEM_NOTICE_RECERIVED, {
								groupSystemNotice: e,
								type: ln
							})
						}
					})
				}
			}, {
				key: "_onApplyGroupRequest",
				value: function(e) {
					this.tim.outerEmitter.emit(Wt.GROUP_SYSTEM_NOTICE_RECERIVED, {
						message: e,
						type: Zt
					})
				}
			}, {
				key: "_onApplyGroupRequestAgreed",
				value: function(e) {
					var t = e.elements[0].content.groupProfile.groupID;
					this.groupController.hasLocalGroup(t) || this.groupController.getGroupList(), this.tim.outerEmitter.emit(Wt.GROUP_SYSTEM_NOTICE_RECERIVED, {
						message: e,
						tyep: en
					})
				}
			}, {
				key: "_onApplyGroupRequestRefused",
				value: function(e) {
					this.tim.outerEmitter.emit(Wt.GROUP_SYSTEM_NOTICE_RECERIVED, {
						message: e,
						type: tn
					})
				}
			}, {
				key: "_onMemberKicked",
				value: function(e) {
					var t = e.elements[0].content.groupProfile.groupID;
					this.groupController.hasLocalGroup(t) && (this.groupController._deleteLocalGroup(t), this.tim.conversationController._deleteLocalConversation("GROUP".concat(t))), this.groupController._emitGroupUpdate(1, 0), this.tim.outerEmitter.emit(Wt.GROUP_SYSTEM_NOTICE_RECERIVED, {
						message: e,
						type: nn
					})
				}
			}, {
				key: "_onGroupDismissed",
				value: function(e) {
					var t = e.elements[0].content.groupProfile.groupID;
					this.groupController._deleteLocalGroup(t), this.tim.conversationController._deleteLocalConversation("GROUP".concat(t)), this.groupController._emitGroupUpdate(1, 0), this.tim.outerEmitter.emit(Wt.GROUP_SYSTEM_NOTICE_RECERIVED, {
						message: e,
						type: rn
					})
				}
			}, {
				key: "_onInviteGroup",
				value: function(e) {
					var t = e.elements[0].content.groupProfile.groupID;
					this.groupController.hasLocalGroup(t) || this.groupController.getGroupList(), this.tim.outerEmitter.emit(Wt.GROUP_SYSTEM_NOTICE_RECERIVED, {
						message: e,
						type: on
					})
				}
			}, {
				key: "_onQuitGroup",
				value: function(e) {
					var t = e.elements[0].content.groupProfile.groupID;
					this.groupController.hasLocalGroup(t) && (this.groupController._deleteLocalGroup(t), this.tim.conversationController._deleteLocalConversation("GROUP".concat(t)), this.groupController._emitGroupUpdate(1, 0)), this.tim.outerEmitter.emit(Wt.GROUP_SYSTEM_NOTICE_RECERIVED, {
						message: e,
						type: an
					})
				}
			}, {
				key: "_onSetManager",
				value: function(e) {
					var t = e.elements[0].content.groupProfile,
						n = t.to,
						r = t.groupID,
						o = this.groupController.getLocalGroupMemberInfo(r, n);
					o && o.updateRole($t.ADMIN), this.tim.outerEmitter.emit(Wt.GROUP_SYSTEM_NOTICE_RECERIVED, {
						message: e,
						type: sn
					})
				}
			}, {
				key: "_onDeleteManager",
				value: function(e) {
					var t = e.elements[0].content.groupProfile,
						n = t.to,
						r = t.groupID,
						o = this.groupController.getLocalGroupMemberInfo(r, n);
					o && o.updateRole($t.MEMBER), this.tim.outerEmitter.emit(Wt.GROUP_SYSTEM_NOTICE_RECERIVED, {
						message: e,
						type: un
					})
				}
			}]), e
		}(),
		rg = function() {
			function e(t) {
				var n = t.tim,
					r = t.groupController;
				Nn(this, e), this.tim = n, this.groupController = r, this.AVChatRoomLoop = null, this.key = "", this.startSeq = 1, this.errorCount = 0, this.group = {}
			}
			return Rn(e, [{
				key: "_updateProperties",
				value: function(e) {
					var t = this;
					Object.keys(e).forEach(function(n) {
						t[n] = e[n]
					})
				}
			}, {
				key: "start",
				value: function() {
					var e = {
						key: this.key,
						startSeq: this.startSeq
					};
					if (null === this.AVChatRoomLoop) {
						var t = this.tim.notificationController.createPackage({
							name: "AVChatRoom",
							action: "startLongPoll",
							param: e
						});
						this.AVChatRoomLoop = this.tim.connectionController.createRunLoop({
							pack: t,
							before: this._updateRequestData.bind(this),
							success: this._handleSuccess.bind(this),
							fail: this._handleFailure.bind(this)
						}), this.AVChatRoomLoop.start()
					} else this.AVChatRoomLoop._stoped && this.AVChatRoomLoop.start()
				}
			}, {
				key: "stop",
				value: function() {
					null === this.AVChatRoomLoop || this.AVChatRoomLoop._stoped || (this.AVChatRoomLoop.abort(), this.AVChatRoomLoop.stop(), this.group = {})
				}
			}, {
				key: "applyJoinAVChatRoom",
				value: function(e) {
					return this._checkBeforeJoinGroup(e), this.tim.context.a2Key && this.tim.context.tinyID ? this._joinWithAuth(e) : this._joinWithoutAuth(e)
				}
			}, {
				key: "_joinWithAuth",
				value: function(e) {
					var t = this;
					return this.groupController.applyJoinGroup(e).then(function(n) {
						return t.tim.innerEmitter.emit($s.AVCHATROOM_JOIN_SUCCESS, {
							data: e.groupID
						}), t._updateProperties({
							key: n.data.longPollingKey,
							startSeq: 1,
							group: t.groupController.groupMap.get(e.groupID)
						}), t.start(), n
					})
				}
			}, {
				key: "_joinWithoutAuth",
				value: function(e) {
					var t = this,
						n = this.groupController.createPackage({
							name: "group",
							action: "applyJoinAVChatRoom",
							param: e
						});
					return this.tim.connectionController.request(n).then(function(n) {
						var r = n.data.longPollingKey;
						return zc.log("AVChatRoomHandler.applyJoinAVChatRoom ok. groupID:", e.groupID), t.tim.innerEmitter.emit($s.AVCHATROOM_JOIN_SUCCESS, {
							data: e.groupID
						}), t._updateProperties({
							key: r,
							startSeq: 1,
							group: t.groupController.getLocalGroupProfile(e.groupID)
						}), t.start(), new Al({
							status: Tl.SUCCESS,
							group: t.groupController.getLocalGroupProfile(e.groupID)
						})
					}).
					catch (function(t) {
						return zc.error("AVChatRoomHandler.applyJoinAVChatRoom error:".concat(t.message, ". groupID:").concat(e.groupID)), Ll(t, 1)
					})
				}
			}, {
				key: "_checkBeforeJoinGroup",
				value: function(e) {
					if (this.isJoined) {
						if (e.groupID === this.group.groupID) return;
						this.group.selfInfo.role === $t.OWNER ? (this.groupController._deleteLocalGroup(this.group.groupID), this.tim.conversationController._deleteLocalConversation("GROUP".concat(this.group.groupID)), this.groupController._emitGroupUpdate(1, 0)) : this.groupController.quitGroup(this.group.groupID)
					}
					null !== this.AVChatRoomLoop && !this.AVChatRoomLoop._stoped && this.stop()
				}
			}, {
				key: "_updateRequestData",
				value: function(e) {
					e.StartSeq = this.startSeq, e.Key = this.key
				}
			}, {
				key: "_handleSuccess",
				value: function(e) {
					this.startSeq = e.data.nextSeq, this.key = e.data.key, Array.isArray(e.data.rspMsgList) && e.data.rspMsgList.forEach(function(e) {
						e.to = e.groupID
					}), e.data.rspMsgList && e.data.rspMsgList.length > 0 && this.tim.notificationController._eachEventArray(e.data.rspMsgList)
				}
			}, {
				key: "_handleFailure",
				value: function(e) {
					e.error && (this.errorCount++, this.errorCount >= 5 && (this.stop(), this.errorCount = 0), this.tim.innerEmitter.emit($s.ERROR_DETECTED, e.error))
				}
			}, {
				key: "isJoined",
				get: function() {
					return !$c(this.group.groupID)
				}
			}]), e
		}(),
		og = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this, e))).groupMap = new Map, n.groupMemberListMap = new Map, n.hasLocalGroupList = 0, n.groupNoticeHandler = new ng({
					tim: e,
					groupController: xn(n)
				}), n.groupTipsHandler = new tg({
					tim: e,
					groupController: xn(n)
				}), n.AVChatRoomHandler = new rg({
					tim: e,
					groupController: xn(n)
				}), n._initListeners(), n
			}
			return Gn(t, Sl), Rn(t, [{
				key: "createGroup",
				value: function(e) {
					var t = this;
					if (!["Public", "Private", "ChatRoom", "AVChatRoom"].includes(e.type)) {
						var n = new gs({
							code: fs.ILLEGAL_GROUP_TYPE,
							message: hs.ILLEGAL_GROUP_TYPE
						});
						return Ll(n, 1)
					}
					ul(e.type) && !$c(e.memberList) && e.memberList.length > 0 && (zc.warn("GroupController.createGroup 创建AVChatRoom时不能添加群成员，自动忽略该字段"), e.memberList = void 0), sl(e.type) || $c(e.joinOption) || (zc.warn("GroupController.createGroup 创建Private/ChatRoom/AVChatRoom群时不能设置字段：joinOption，自动忽略该字段"), e.joinOption = void 0);
					var r = this.createPackage({
						name: "group",
						action: "create",
						param: e
					});
					return zc.log("GroupController.createGroup."), this.tim.connectionController.request(r).then(function(n) {
						if (zc.log("GroupController.createGroup ok. groupID:", n.data.groupID), t._updateLocalGroupListAndGroupMemberList([kn({}, e, {
							groupID: n.data.groupID
						})]), e.type !== Qt.AVCHATROOM) {
							var r = t.tim.createCustomMessage({
								to: n.data.groupID,
								conversationType: Jt.GROUP,
								payload: {
									data: "group_create",
									extension: "".concat(t.tim.context.identifier, "创建群组")
								}
							});
							t.tim.sendMessage(r)
						}
						return t._emitGroupUpdate(), t.getGroupProfile({
							groupID: n.data.groupID
						})
					}).then(function(e) {
						var n = e.data.group.groupID;
						return t.getLocalGroupProfile(n).selfInfo.messageRemindType = yn.MSG_REMIND_ACPT_AND_NOTE, e
					}).
					catch (function(e) {
						return zc.error("GroupController.createGroup error:", e), Ll(e, 1)
					})
				}
			}, {
				key: "joinGroup",
				value: function(e) {
					if (e.type === Qt.PRIVATE) {
						var t = new gs({
							code: fs.CANNOT_JOIN_PRIVATE,
							message: hs.CANNOT_JOIN_PRIVATE
						});
						return this.tim.innerEmitter.emit($s.ERROR_DETECTED, t), Ll(t, 1)
					}
					return zc.log("GroupController.joinGroup. groupID:", e.groupID), e.type === Qt.AVCHATROOM ? this.applyJoinAVChatRoom(e) : this.applyJoinGroup(e)
				}
			}, {
				key: "quitGroup",
				value: function(e) {
					var t = this;
					this.AVChatRoomHandler.group.groupID === e && this.AVChatRoomHandler.stop();
					var n = this.createPackage({
						name: "group",
						action: "quitGroup",
						param: {
							groupID: e
						}
					});
					return zc.log("GroupController.quitGroup. groupID:", e), this.tim.connectionController.request(n).then(function() {
						return zc.log("GroupController.quitGroup ok. groupID:", e), t._deleteLocalGroup(e), t.tim.conversationController._deleteLocalConversation("GROUP".concat(e)), t._emitGroupUpdate(1, 0), new Al({
							groupID: e
						})
					}).
					catch (function(t) {
						return zc.error("GroupController.quitGroup error.  error:".concat(t, ". groupID:").concat(e)), Ll(t, 1)
					})
				}
			}, {
				key: "changeGroupOwner",
				value: function(e) {
					var t = this;
					if (this.hasLocalGroup(e.groupID) && this.getLocalGroupProfile(e.groupID).type === Qt.AVCHATROOM) return Ll(new gs({
						code: fs.CANNOT_CHANGE_OWNER_IN_AVCHATROOM,
						message: hs.CANNOT_CHANGE_OWNER_IN_AVCHATROOM
					}), 1);
					if (e.newOwnerID === this.tim.loginInfo.identifier) return Ll(new gs({
						code: fs.CANNOT_CHANGE_OWNER_TO_SELF,
						message: hs.CANNOT_CHANGE_OWNER_TO_SELF
					}), 1);
					var n = this.createPackage({
						name: "group",
						action: "changeGroupOwner",
						param: e
					});
					return zc.log("GroupController.changeGroupOwner. groupID:", e.groupID), this.tim.connectionController.request(n).then(function() {
						zc.log("GroupController.changeGroupOwner ok. groupID:", e.groupID);
						var n = e.groupID,
							r = e.newOwnerID;
						t.groupMap.get(n).ownerID = r;
						var o = t.groupMemberListMap.get(n);
						if (o instanceof Map) {
							var i = o.get(t.tim.loginInfo.identifier);
							$c(i) || (i.updateRole("Member"), t.groupMap.get(n).selfInfo.role = "Member");
							var a = o.get(r);
							$c(a) || a.updateRole("Owner")
						}
						return t._emitGroupUpdate(1, 0), new Al({
							group: t.groupMap.get(n)
						})
					}).
					catch (function(t) {
						return zc.error("GroupController.changeGroupOwner error:".concat(t, ". groupID:").concat(e.groupID)), Ll(t, 1)
					})
				}
			}, {
				key: "dismissGroup",
				value: function(e) {
					var t = this;
					if (this.hasLocalGroup(e) && this.getLocalGroupProfile(e).type === Qt.PRIVATE) return Ll(new gs({
						code: fs.CANNOT_DISMISS_PRIVATE,
						message: hs.CANNOT_DISMISS_PRIVATE
					}), 1);
					var n = this.createPackage({
						name: "group",
						action: "destroyGroup",
						param: {
							groupID: e
						}
					});
					return zc.log("GroupController.dismissGroup. groupID:".concat(e)), this.tim.connectionController.request(n).then(function() {
						return zc.log("GroupController.dismissGroup ok. groupID:".concat(e)), t._deleteLocalGroup(e), t.tim.conversationController._deleteLocalConversation("GROUP".concat(e)), t._emitGroupUpdate(1, 0), new Al({
							groupID: e
						})
					}).
					catch (function(t) {
						return zc.error("GroupController.dismissGroup error:".concat(t, ". groupID:").concat(e)), Ll(t, 1)
					})
				}
			}, {
				key: "updateGroupProfile",
				value: function(e) {
					var t = this;
					!this.hasLocalGroup(e.groupID) || sl(this.getLocalGroupProfile(e.groupID).type) || $c(e.joinOption) || (zc.warn("GroupController.modifyGroup: Private/ChatRoom/AVChatRoom群不能设置字段：joinOption，自动忽略该字段"), e.joinOption = void 0);
					var n = this.createPackage({
						name: "group",
						action: "updateGroupProfile",
						param: e
					});
					return zc.log("GroupController.modifyGroup. groupID:", e.groupID), this.tim.connectionController.request(n).then(function() {
						(zc.log("GroupController.modifyGroup ok. groupID:", e.groupID), t.hasLocalGroup(e.groupID)) && (t.groupMap.get(e.groupID).updateGroup(e), t._setLocalGroupList(t.groupMap));
						return new Al({
							group: t.groupMap.get(e.groupID)
						})
					}).
					catch (function(t) {
						return zc.log("GroupController.modifyGroup error. error:".concat(t, " groupID:").concat(e.groupID)), Ll(t, 1)
					})
				}
			}, {
				key: "setGroupMemberRole",
				value: function(e) {
					var t = this,
						n = this.groupMap.get(e.groupID);
					if (n.selfInfo.role !== $t.OWNER) return Ll(new gs({
						code: fs.NOT_OWNER,
						message: hs.NOT_OWNER
					}), 1);
					if ([Qt.PRIVATE, Qt.AVCHATROOM].includes(n.type)) return Ll(new gs({
						code: fs.CANNOT_SET_MEMBER_ROLE_IN_PRIVATE_AND_AVCHATROOM,
						message: hs.CANNOT_SET_MEMBER_ROLE_IN_PRIVATE_AND_AVCHATROOM
					}), 1);
					if ([$t.ADMIN, $t.MEMBER].indexOf(e.role) < 0) return Ll(new gs({
						code: fs.INVALID_MEMBER_ROLE,
						message: hs.INVALID_MEMBER_ROLE
					}), 1);
					if (e.userID === this.tim.loginInfo.identifier) return Ll(new gs({
						code: fs.CANNOT_SET_SELF_MEMBER_ROLE,
						message: hs.CANNOT_SET_SELF_MEMBER_ROLE
					}), 1);
					zc.log("GroupController.setGroupMemberRole. groupID:".concat(e.groupID, ". userID: ").concat(e.userID));
					var r = e.groupID,
						o = e.userID,
						i = e.role;
					return this._modifyGroupMemberInfo({
						groupID: r,
						userID: o,
						role: i
					}).then(function() {
						zc.log("GroupController.setGroupMemberRole ok. groupID:".concat(e.groupID, ". userID: ").concat(e.userID));
						var n = t.groupMemberListMap.get(e.groupID);
						return void 0 !== n && void 0 !== n.get(e.userID) && n.get(e.userID).updateRole(e.role), new Al({
							group: t.groupMap.get(e.groupID)
						})
					}).
					catch (function(t) {
						return zc.error("GroupController.setGroupMemberRole error:".concat(t, ". groupID:").concat(e.groupID, ". userID:").concat(e.userID)), Ll(t, 1)
					})
				}
			}, {
				key: "setGroupMemberMuteTime",
				value: function(e) {
					var t = this;
					zc.log("GroupController.setGroupMemberMuteTime. groupID:".concat(e.groupID, ". userID: ").concat(e.userID));
					var n = e.groupID,
						r = e.userID,
						o = e.muteTime;
					return this._modifyGroupMemberInfo({
						groupID: n,
						userID: r,
						muteTime: o
					}).then(function() {
						return zc.log("GroupController.setGroupMemberMuteTime ok. groupID:".concat(e.groupID, ". userID: ").concat(e.userID)), t.updateGroupMemberList({
							groupID: n
						})
					}).then(function() {
						return new Al({
							group: t.groupMap.get(e.groupID)
						})
					}).
					catch (function(t) {
						return zc.error("GroupController.setGroupMemberMuteTime error:".concat(t, ". groupID:").concat(e.groupID, ". userID:").concat(e.userID)), Ll(t, 1)
					})
				}
			}, {
				key: "setMessageRemindType",
				value: function(e) {
					var t = this;
					zc.log("GroupController.setMessageRemindType. groupID:".concat(e.groupID, ". userID: ").concat(e.userID || this.tim.loginInfo.identifier));
					var n = e.groupID,
						r = e.messageRemindType;
					return this._modifyGroupMemberInfo({
						groupID: n,
						messageRemindType: r,
						userID: this.tim.loginInfo.identifier
					}).then(function() {
						zc.log("GroupController.setMessageRemindType ok. groupID:".concat(e.groupID, ". userID: ").concat(e.userID || t.tim.loginInfo.identifier));
						var n = t.groupMap.get(e.groupID);
						return n.selfInfo.messageRemindType = r, new Al({
							group: n
						})
					}).
					catch (function(n) {
						return zc.error("GroupController.setMessageRemindType error:".concat(n, ". groupID:").concat(e.groupID, ". userID:").concat(e.userID || t.tim.loginInfo.identifier)), Ll(n, 1)
					})
				}
			}, {
				key: "setGroupMemberNameCard",
				value: function(e) {
					var t = this;
					zc.log("GroupController.setGroupMemberNameCard. groupID:".concat(e.groupID, ". userID: ").concat(e.userID || this.tim.loginInfo.identifier));
					var n = e.groupID,
						r = e.userID,
						o = void 0 === r ? this.tim.loginInfo.identifier : r,
						i = e.nameCard;
					return this._modifyGroupMemberInfo({
						groupID: n,
						userID: o,
						nameCard: i
					}).then(function() {
						zc.log("GroupController.setGroupMemberNameCard ok. groupID:".concat(e.groupID, ". userID: ").concat(e.userID || t.tim.loginInfo.identifier));
						var r = t.groupMemberListMap.get(n);
						return void 0 !== r && void 0 !== r.get(o) && r.get(o).updateMember({
							nameCard: i
						}), o === t.tim.loginInfo.identifier && t.hasLocalGroup(n) && (t.getLocalGroupProfile(n).selfInfo.nameCard = i), new Al({
							group: t.groupMap.get(n)
						})
					}).
					catch (function(n) {
						return zc.error("GroupController.setGroupMemberNameCard error:".concat(n, ". groupID:").concat(e.groupID, ". userID:").concat(e.userID || t.tim.loginInfo.identifier)), Ll(n, 1)
					})
				}
			}, {
				key: "setGroupMemberCustomField",
				value: function(e) {
					var t = this;
					zc.log("GroupController.setGroupMemberCustomField. groupID:".concat(e.groupID, ". userID: ").concat(e.userID || this.tim.loginInfo.identifier));
					var n = e.groupID,
						r = e.userID,
						o = e.memberCustomField;
					return this._modifyGroupMemberInfo({
						groupID: n,
						userID: r,
						memberCustomField: o
					}).then(function() {
						return zc.log("GroupController.setGroupMemberCustomField ok. groupID:".concat(e.groupID, ". userID: ").concat(e.userID || t.tim.loginInfo.identifier)), t.groupMemberListMap.has(n) && t.groupMemberListMap.get(n).has(r) && t.groupMemberListMap.get(n).get(r).updateMemberCustomField(o), new Al({
							group: t.groupMap.get(n)
						})
					}).
					catch (function(n) {
						return zc.error("GroupController.setGroupMemberCustomField error:".concat(n, ". groupID:").concat(e.groupID, ". userID:").concat(e.userID || t.tim.loginInfo.identifier)), Ll(n, 1)
					})
				}
			}, {
				key: "getGroupList",
				value: function() {
					var e = this;
					zc.log("GroupController.getGroupList");
					var t = this.createPackage({
						name: "group",
						action: "list",
						param: {
							responseFilter: {
								groupBaseInfoFilter: ["Type", "Name", "FaceUrl", "NextMsgSeq"],
								selfInfoFilter: ["Role", "JoinTime", "MsgFlag"]
							}
						}
					});
					return this.tim.connectionController.request(t).then(function(t) {
						var n = t.data.groups;
						return zc.log("GroupController.getGroupList ok"), e._groupListTreeShaking(n), e._updateLocalGroupListAndGroupMemberList(n), e.hasLocalGroupList = 1, e.tempConversationList && (e._handleUpdateGroupLastMessage(e.tempConversationList), e.tempConversationList = null), e._emitGroupUpdate(), new Al({
							groupList: e.getLocalGroups()
						})
					}).
					catch (function(e) {
						return zc.error("GroupController.getGroupList error: ", e), Ll(e, 1)
					})
				}
			}, {
				key: "getGroupMemberList",
				value: function(e) {
					var t = this,
						n = e.groupID,
						r = e.offset,
						o = void 0 === r ? 0 : r,
						i = e.count,
						a = void 0 === i ? 15 : i;
					zc.log("GroupController.getGroupMemberList groupID: ".concat(n, " offset: ").concat(o, " count: ").concat(a));
					var s = this.createPackage({
						name: "group",
						action: "getGroupMemberList",
						param: {
							groupID: n,
							offset: o,
							limit: a > 100 ? 100 : a,
							memberInfoFilter: ["Account", "Role", "JoinTime", "LastSendMsgTime", "NameCard", "ShutUpUntil"]
						}
					}),
						u = [];
					return this.connectionController.request(s).then(function(e) {
						var r = e.data,
							o = r.members,
							i = r.memberNum;
						return t.hasLocalGroup(n) && (t.getLocalGroupProfile(n).memberNum = i), u = t._updateLocalGroupMemberList(n, o), t.tim.getUserProfile({
							userIDList: o.map(function(e) {
								return e.userID
							})
						})
					}).then(function(e) {
						var r = e.data.map(function(e) {
							return {
								userID: e.userID,
								nick: e.nick,
								avatar: e.avatar
							}
						});
						return t._updateLocalGroupMemberList(n, r), zc.log("GroupController.getGroupMemberList ok."), new Al({
							memberList: u
						})
					}).
					catch (function(e) {
						return zc.error("GroupController.getGroupMemberList error: ", e), Ll(e)
					})
				}
			}, {
				key: "getLocalGroups",
				value: function() {
					return Bn(this.groupMap.values())
				}
			}, {
				key: "getLocalGroupProfile",
				value: function(e) {
					return this.groupMap.get(e)
				}
			}, {
				key: "hasLocalGroup",
				value: function(e) {
					return this.groupMap.has(e)
				}
			}, {
				key: "getLocalGroupMemberInfo",
				value: function(e, t) {
					return this.groupMemberListMap.has(e) ? this.groupMemberListMap.get(e).get(t) : 0
				}
			}, {
				key: "hasLocalGroupMember",
				value: function(e, t) {
					return this.groupMemberListMap.has(e) && this.groupMemberListMap.get(e).has(t)
				}
			}, {
				key: "hasLocalGroupMemberMap",
				value: function(e) {
					return this.groupMemberListMap.has(e)
				}
			}, {
				key: "getGroupProfile",
				value: function(e) {
					var t = this;
					zc.log("GroupController.getGroupProfile. groupID:", e.groupID);
					var n = e.groupID,
						r = e.groupCustomFieldFilter,
						o = e.memberCustomFieldFilter,
						i = {
							groupIDList: [n],
							responseFilter: {
								groupBaseInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq"],
								groupCustomFieldFilter: r,
								memberCustomFieldFilter: o
							}
						};
					return this.getGroupProfileAdvance(i).then(function(r) {
						var o = r.data,
							i = o.successGroupList,
							a = o.failureGroupList;
						if (zc.log("GroupController.getGroupProfile ok. groupID:", e.groupID), a.length > 0) return Ll(a[0], 1);
						var s = [];
						return t._updateLocalGroupListAndGroupMemberList(i, 1), t.groupMemberListMap.has(n) && t.groupMemberListMap.get(n).forEach(function(e) {
							var t = e.userID;
							s.push(t)
						}), t._emitGroupUpdate(), t.tim.getUserProfile({
							userIDList: s,
							tagList: ["Tag_Profile_IM_Nick", "Tag_Profile_IM_Image"]
						})
					}).then(function(e) {
						return e.data.forEach(function(e) {
							var r = t.getLocalGroupMemberInfo(n, e.userID);
							r && r.updateMember({
								nick: e.nick,
								avatar: e.avatar
							})
						}), new Al({
							group: t.groupMap.get(n)
						})
					}).
					catch (function(t) {
						return zc.error("GroupController.getGroupProfile error.  error:".concat(t, ". groupID:").concat(e.groupID)), Ll(t, 1)
					})
				}
			}, {
				key: "addGroupMember",
				value: function(e) {
					var t = this,
						n = this.getLocalGroupProfile(e.groupID);
					if (ul(n.type)) {
						var r = new gs({
							code: fs.CANNOT_ADD_MEMBER_IN_AVCHATROOM,
							message: hs.CANNOT_ADD_MEMBER_IN_AVCHATROOM
						});
						return Ll(r, 1)
					}
					e.userIDList = e.userIDList.map(function(e) {
						return {
							userID: e
						}
					});
					var o = this.createPackage({
						name: "group",
						action: "addGroupMember",
						param: e
					});
					return zc.log("GroupController.addGroupMember. groupID:", e.groupID), this.connectionController.request(o).then(function(r) {
						var o = r.data.members;
						zc.log("GroupController.addGroupMember ok. groupID:", e.groupID);
						var i = o.filter(function(e) {
							return 1 === e.result
						}).map(function(e) {
							return e.userID
						}),
							a = o.filter(function(e) {
								return 0 === e.result
							}).map(function(e) {
								return e.userID
							}),
							s = o.filter(function(e) {
								return 2 === e.result
							}).map(function(e) {
								return e.userID
							});
						return 0 === i.length ? new Al({
							successUserIDList: i,
							failureUserIDList: a,
							existedUserIDList: s
						}) : (t.updateGroupMemberList(e), new Al({
							successUserIDList: i,
							failureUserIDList: a,
							existedUserIDList: s,
							group: n
						}))
					}).
					catch (function(t) {
						return zc.error("GroupController.addGroupMember error.  error:".concat(t, ". groupID:").concat(e.groupID)), Ll(t, 1)
					})
				}
			}, {
				key: "deleteGroupMember",
				value: function(e) {
					var t = this,
						n = this.groupMap.get(e.groupID);
					if (n.type === Qt.AVCHATROOM) return Ll(new gs({
						code: fs.CANNOT_KICK_MEMBER_IN_AVCHATROOM,
						message: hs.CANNOT_KICK_MEMBER_IN_AVCHATROOM
					}), 1);
					var r = this.createPackage({
						name: "group",
						action: "deleteGroupMember",
						param: e
					});
					return this.connectionController.request(r).then(function() {
						return t._deleteLocalGroupMembers(e.groupID, e.userIDList), t._emitGroupUpdate(), new Al({
							group: n,
							userIDList: e.userIDList
						})
					}).
					catch (this._promiseCatch.bind(this))
				}
			}, {
				key: "searchGroupByID",
				value: function(e) {
					var t = {
						groupIDList: [e]
					},
						n = this.createPackage({
							name: "group",
							action: "searchGroupByID",
							param: t
						});
					return zc.log("GroupController.searchGroupByID. groupID:".concat(e)), this.connectionController.request(n).then(function(t) {
						var n = t.data.groupProfile;
						if (zc.log("GroupController.searchGroupByID ok. groupID:".concat(e)), n[0].errorCode !== Cl.REQUEST.SUCCESS) throw new gs({
							code: n[0].errorCode,
							message: n[0].errorInfo
						});
						return new Al({
							group: new Fh(n[0])
						})
					}).
					catch (function(t) {
						return zc.error("GroupController.searchGroupByID ok. error:".concat(t, " groupID:").concat(e)), Ll(t, 1)
					})
				}
			}, {
				key: "applyJoinGroup",
				value: function(e) {
					var t = this,
						n = this.createPackage({
							name: "group",
							action: "applyJoinGroup",
							param: e
						});
					return this.connectionController.request(n).then(function(n) {
						var r = n.data,
							o = r.joinedStatus,
							i = r.longPollingKey;
						switch (zc.log("GroupController.joinGroup ok. groupID:", e.groupID), o) {
						case Tl.WAIT_APPROVAL:
							return new Al({
								status: Tl.WAIT_APPROVAL
							});
						case Tl.SUCCESS:
							return t.getGroupProfile({
								groupID: e.groupID
							}).then(function(e) {
								var t = {
									status: Tl.SUCCESS,
									group: e.data.group
								};
								return $c(i) || (t.longPollingKey = i), new Al(t)
							});
						default:
							var a = new gs({
								code: fs.JOIN_GROUP_FAIL,
								message: hs.JOIN_GROUP_FAIL
							});
							return zc.error("GroupController.joinGroup error:".concat(a, ". groupID:").concat(e.groupID)), Ll(a, 1)
						}
					}).
					catch (function(t) {
						return zc.error("GroupController.joinGroup error:".concat(t, ". groupID:").concat(e.groupID)), Ll(t, 1)
					})
				}
			}, {
				key: "applyJoinAVChatRoom",
				value: function(e) {
					return this.AVChatRoomHandler.applyJoinAVChatRoom(e)
				}
			}, {
				key: "handleGroupApplication",
				value: function(e) {
					var t = this,
						n = e.message.elements[0].content,
						r = n.groupProfile.groupID,
						o = n.authentication,
						i = n.messageKey,
						a = n.operatorID,
						s = this.createPackage({
							name: "group",
							action: "handleApplyJoinGroup",
							param: kn({}, e, {
								applicant: a,
								groupID: r,
								authentication: o,
								messageKey: i
							})
						});
					return zc.log("GroupController.handleApplication. groupID:", r), this.connectionController.request(s).then(function() {
						return zc.log("GroupController.handleApplication ok. groupID:", r), t.updateGroupMemberList({
							groupID: r
						})
					}).then(function(e) {
						return new Al({
							group: e
						})
					}).
					catch (function(e) {
						return zc.error("GroupController.handleApplication error.  error:".concat(e, ". groupID:").concat(r)), Ll(e, 1)
					})
				}
			}, {
				key: "deleteGroupSystemNotice",
				value: function(e) {
					var t = this.createPackage({
						name: "group",
						action: "deleteGroupSystemNotice",
						param: {
							messageListToDelete: e.messageList.map(function(e) {
								return {
									from: Jt.SYSTEM,
									messageSeq: e.clientSequence,
									messageRandom: e.random
								}
							})
						}
					});
					return this.connectionController.request(t).then(function() {
						return new Al
					}).
					catch (this._promiseCatch.bind(this))
				}
			}, {
				key: "updateGroupMemberList",
				value: function(e) {
					var t = this,
						n = e.groupID,
						r = e.memberCustomFieldFilter,
						o = e.memberInfoFilter,
						i = {
							groupIDList: [n],
							responseFilter: {
								memberInfoFilter: o || ["Account", "Role", "JoinTime", "LastSendMsgTime", "NameCard", "ShutUpUntil"],
								memberCustomFieldFilter: r
							}
						};
					return this.getGroupProfileAdvance(i).then(function(e) {
						var r = e.data,
							o = r.successGroupList,
							i = r.failureGroupList;
						if (i.length > 0) return Ll(i[0], 1);
						var a = [];
						return t._updateLocalGroupMemberList(o[0].groupID, o[0].members), t.groupMemberListMap.get(n).forEach(function(e) {
							var t = e.userID;
							a.push(t)
						}), t.tim.getUserProfile({
							userIDList: a,
							tagList: ["Tag_Profile_IM_Nick", "Tag_Profile_IM_Image"]
						})
					}).then(function(e) {
						var r = e.data.map(function(e) {
							return {
								userID: e.userID,
								nick: e.nick,
								avatar: e.avatar
							}
						});
						return t._updateLocalGroupMemberList(n, r), t._emitGroupUpdate(), t.groupMap.get(n)
					})
				}
			}, {
				key: "_promiseCatch",
				value: function(e) {
					return Ll(e, 1)
				}
			}, {
				key: "getGroupProfileAdvance",
				value: function(e) {
					zc.log("GroupController.getGroupProfileAdvance. groupIDList:", e.groupIDList);
					var t = this.createPackage({
						name: "group",
						action: "query",
						param: e
					});
					return this.tim.connectionController.request(t).then(function(e) {
						zc.log("GroupController.getGroupProfileAdvance ok.");
						var t = e.data.groups,
							n = t.filter(function(e) {
								return $c(e.errorCode) || e.errorCode === Cl.REQUEST.SUCCESS
							}),
							r = t.filter(function(e) {
								return e.errorCode && e.errorCode !== Cl.REQUEST.SUCCESS
							}).map(function(e) {
								return new gs({
									code: Number("500".concat(e.errorCode)),
									message: e.errorInfo,
									data: {
										groupID: e.groupID
									}
								})
							});
						return new Al({
							successGroupList: n,
							failureGroupList: r
						})
					}).
					catch (function(t) {
						return zc.error("GroupController.getGroupProfile error. groupID:".concat(e.groupID, " error:").concat(t)), Ll(t, 1)
					})
				}
			}, {
				key: "_deleteLocalGroup",
				value: function(e) {
					return this.groupMap.delete(e), this.groupMemberListMap.delete(e), this._setLocalGroupList(this.groupMap), this.groupMap.has(e) && this.groupMemberListMap.has(e)
				}
			}, {
				key: "_initGroupList",
				value: function() {
					var e = this;
					(zc.time(bl), zc.log("GroupController._initGroupList"), this.hasLocalGroupList = this._hasLocalGroupList(), this.hasLocalGroupList) && (this._getLocalGroups().forEach(function(t) {
						e.groupMap.set(t[0], new Fh(t[1]))
					}), this._emitGroupUpdate(1, 0));
					this.triggerReady(), zc.log("GroupController._initGroupList ok. initCost=".concat(zc.timeEnd(bl), "ms")), this.getGroupList()
				}
			}, {
				key: "_initListeners",
				value: function() {
					var e = this.tim.innerEmitter;
					e.once($s.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initGroupList, this), e.on($s.CONVERSATION_LIST_UPDATED, this._handleUpdateGroupLastMessage, this), e.on($s.MESSAGE_GROUP_INSTANT_RECEIVED, this._handleReceivedGroupMessage, this), e.on($s.PROFILE_UPDATED, this._handleProfileUpdated, this)
				}
			}, {
				key: "_emitGroupUpdate",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
						n = this.getLocalGroups();
					t && this.tim.innerEmitter.emit($s.GROUP_LIST_UPDATED, n), e && this.tim.outerEmitter.emit(Wt.GROUP_LIST_UPDATED, n)
				}
			}, {
				key: "_handleReceivedGroupMessage",
				value: function(e) {
					var t = this,
						n = e.data.eventDataList;
					Array.isArray(n) && n.forEach(function(e) {
						var n = e.conversationID.replace(Jt.GROUP, "");
						t.groupMap.has(n) && (t.groupMap.get(n).nextMessageSeq = e.lastMessage.sequence + 1)
					})
				}
			}, {
				key: "_onReceivedGroupSystemNotice",
				value: function(e) {
					var t = e.data;
					this.groupNoticeHandler._onReceivedGroupNotice(t)
				}
			}, {
				key: "_handleUpdateGroupLastMessage",
				value: function(e) {
					if (this.hasLocalGroupList) {
						for (var t = 0, n = 0; n < e.length; n++) {
							var r = e[n],
								o = r.type === yn.CONV_GROUP;
							if (r.conversationID && o) {
								var i = r.conversationID.split(/^GROUP/)[1],
									a = this.getLocalGroupProfile(i);
								a && (a.lastMessage = r.lastMessage, t = 1)
							}
						}
						t && (this.groupMap = this._sortLocalGroupList(this.groupMap), this._emitGroupUpdate(1, 0))
					} else this.tempConversationList = e
				}
			}, {
				key: "_sortLocalGroupList",
				value: function(e) {
					var t = Bn(e).filter(function(e) {
						var t = jn(e, 2);
						t[0];
						return !fr(t[1].lastMessage)
					});
					return t.sort(function(e, t) {
						return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
					}), new Map([].concat(Bn(t), Bn(e)))
				}
			}, {
				key: "_getLocalGroups",
				value: function() {
					return this.tim.storage.getItem("groupMap")
				}
			}, {
				key: "_hasLocalGroupList",
				value: function() {
					var e = this.tim.storage.getItem("groupMap");
					return null !== e && 0 !== e.length
				}
			}, {
				key: "_setLocalGroupList",
				value: function(e) {
					var t = [];
					e.forEach(function(e, n) {
						var r = e.name,
							o = e.avatar,
							i = e.type;
						t.push([n,
						{
							groupID: n,
							name: r,
							avatar: o,
							type: i
						}])
					}), this.tim.storage.setItem("groupMap", t)
				}
			}, {
				key: "_updateLocalGroupListAndGroupMemberList",
				value: function(e, t) {
					var n = this;
					e.forEach(function(e) {
						n.groupMap.has(e.groupID) ? n.groupMap.get(e.groupID).updateGroup(e) : n.groupMap.set(e.groupID, new Fh(e)), n._updateLocalGroupMemberList(e.groupID, e.members || e.memberList, t)
					}), this._setLocalGroupList(this.groupMap)
				}
			}, {
				key: "_updateLocalGroupMemberList",
				value: function(e, t) {
					var n = this,
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
					if (!t) return [];
					var o = this.groupMemberListMap.has(e) && 0 == r ? this.groupMemberListMap.get(e) : new Map,
						i = t.map(function(t) {
							if (t.userID === n.tim.context.identifier) {
								var r = [null, void 0, "", 0, NaN],
									i = {
										role: t.role,
										joinTime: t.joinTime,
										nameCard: t.nameCard
									};
								nl(n.groupMap.get(e).selfInfo, i, [], r)
							}
							return o.has(t.userID) ? o.get(t.userID).updateMember(t) : o.set(t.userID, new eg(t)), o.get(t.userID)
						});
					return this.groupMemberListMap.set(e, o), i
				}
			}, {
				key: "_deleteLocalGroupMembers",
				value: function(e, t) {
					var n = this.groupMemberListMap.get(e);
					void 0 !== n && (t.forEach(function(e) {
						n.delete(e)
					}), this.groupMap.get(e).memberList = Bn(n.values()))
				}
			}, {
				key: "_modifyGroupMemberInfo",
				value: function(e) {
					var t = this.createPackage({
						name: "group",
						action: "modifyGroupMemberInfo",
						param: e
					});
					return this.tim.connectionController.request(t)
				}
			}, {
				key: "_groupListTreeShaking",
				value: function(e) {
					for (var t = new Map(Bn(this.groupMap)), n = 0, r = e.length; n < r; n++) t.delete(e[n].groupID);
					this.AVChatRoomHandler.isJoined && t.delete(this.AVChatRoomHandler.group.groupID);
					for (var o = Bn(t.keys()), i = 0, a = o.length; i < a; i++) this.groupMap.delete(o[i])
				}
			}, {
				key: "_handleProfileUpdated",
				value: function(e) {
					for (var t = this, n = e.data, r = function(e) {
							var r = n[e];
							t.groupMemberListMap.forEach(function(e) {
								e.has(r.userID) && e.get(r.userID).updateMember({
									nick: r.nick,
									avatar: r.avatar
								})
							})
						}, o = 0; o < n.length; o++) r(o)
				}
			}, {
				key: "reset",
				value: function() {
					this.groupMap.clear(), this.groupMemberListMap.clear(), this.hasLocalGroupList = 0, this.resetReady(), this.tim.innerEmitter.once($s.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initGroupList, this)
				}
			}]), t
		}(),
		ig = Math.floor;
	Oe({
		target: "Number",
		stat: 1
	}, {
		isInteger: function(e) {
			return !y(e) && isFinite(e) && ig(e) === e
		}
	});
	var ag = function() {
			for (var e = [], t = sg(arguments), n = 0; n < arguments.length; n++) Number.isInteger(arguments[n]) ? e.push(arguments[n]) : e.push(1 == !! arguments[n] ? "1" : "0");
			return e.join(t)
		},
		sg = function(e) {
			var t = e.length,
				n = e[t - 1];
			if ("string" != typeof n) return "";
			if (n.length > 1) return "";
			var r = e[t - 1];
			return delete e[t - 1], e.length -= t == e.length ? 1 : 0, r
		},
		ug = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this, e)))._initializeMembers(), n._initializeStatus(), n._initializeListener(), n
			}
			return Gn(t, Sl), Rn(t, [{
				key: "_initializeMembers",
				value: function() {
					this.normalTimeout = 300, this.realtimeNoticeTimeout = 11e4, this.channelMaxTimeout = 3e5, this._memoryUsed = 0, this._memoryUsedThreshold = .9, this._onMemoryWarning = null
				}
			}, {
				key: "_initializeStatus",
				value: function() {
					this._initializeAccountStatus(), this._initializeChannelStatus()
				}
			}, {
				key: "_initializeAccountStatus",
				value: function() {
					this.accountStatus = {
						lastSignInTime: 0,
						status: Cl.ACCOUNT_STATUS.SIGN_OUT
					}
				}
			}, {
				key: "_initializeChannelStatus",
				value: function() {
					this.channelStatus = {
						startTime: 0,
						offlineTime: 0,
						failCount: 0,
						lastRequestTime: 0,
						lastJitterTime: 0,
						jitterCount: 0,
						jitters: [],
						status: Cl.CHANNEL_STATUS.OFFLINE
					}
				}
			}, {
				key: "_onMemoryRunningLow",
				value: function(e) {
					zc.warn("memory running low : ", e)
				}
			}, {
				key: "getChannelStatus",
				value: function() {
					return this.channelStatus.status
				}
			}, {
				key: "_channelStatusJittersUpdate",
				value: function(e) {
					this.channelStatus.jitterCount++, this.channelStatus.lastJitterTime = e, this.channelStatus.jitters.push(e), this.channelStatus.jitters.length > 5 && this.channelStatus.jitters.pop()
				}
			}, {
				key: "_initializeListener",
				value: function() {
					var e = this.tim.innerEmitter;
					e.on($s.NOTICE_LONGPOLL_START, this._onChannelStart, this), e.on($s.NOTICE_LONGPOLL_REQUEST_ARRIVED, this._onChannelRequestSuccess, this), e.on($s.NOTICE_LONGPOLL_REQUEST_NOT_ARRIVED, this._onChannelFail, this)
				}
			}, {
				key: "_onChannelStart",
				value: function() {
					this.channelStatus.startTime = +new Date, this.channelStatus.status = Cl.CHANNEL_STATUS.ONLINE
				}
			}, {
				key: "_getMemoryUsed",
				value: function() {
					var e = "disabled",
						t = 0;
					return "undefined" != typeof window && void 0 !== window.performance && (t = window.performance.memory.usedJSHeapSize / window.performance.memory.jsHeapSizeLimit, this._memoryUsed = t, e = [Math.round(1e5 * this._memoryUsed) / 1e3, "%"].join("")), e
				}
			}, {
				key: "_onChannelRequestSuccess",
				value: function() {
					var e = this.tim,
						t = e.innerEmitter,
						n = e.outerEmitter,
						r = Date.now(),
						o = r - (this.channelStatus.lastRequestTime > 0 ? this.channelStatus.lastRequestTime : Date.now() + 100),
						i = ag(o < this.realtimeNoticeTimeout, o < this.channelMaxTimeout);
					switch (this.channelStatus.status = Cl.CHANNEL_STATUS.ONLINE, this.channelStatus.failCount = 0, i) {
					case "11":
						break;
					case "01":
						t.emit($s.NOTICE_LONGPOLL_SOON_RECONNECT), n.emit(Wt.NOTICE_LONGPOLL_RECONNECT);
						break;
					case "00":
						t.emit($s.NOTICE_LONGPOLL_LONG_RECONNECT)
					}
					this.channelStatus.lastRequestTime = r
				}
			}, {
				key: "_onChannelFail",
				value: function(e) {
					var t = this.tim.innerEmitter,
						n = Date.now();
					this.channelStatus.status = Cl.CHANNEL_STATUS.OFFLINE;
					var r = n - (0 === this.channelStatus.offlineTime ? this.channelStatus.lastRequestTime : this.channelStatus.offlineTime);
					this.channelStatus.offlineTime = n, this.channelStatus.failCount++, zc.log("_onChannelFail count : ".concat(this.channelStatus.failCount, "  time diff: ").concat(r, ";")), this.channelStatus.failCount > 5 && r < 5e3 && (t.emit($s.NOTICE_LONGPOLL_DISCONNECT), zc.error("Detected notice channel offline, please check your network!"))
				}
			}]), t
		}();

	function cg() {
		return null
	}
	var lg = function() {
			function e(t) {
				Nn(this, e), this.tim = t, this.isWX = Tc, this.storageQueue = new Map, this.checkTimes = 0, this.checkTimer = setInterval(this._onCheckTimer.bind(this), 1e3), this._prefix = "", this._initListeners(), this._errorTolerantHandle()
			}
			return Rn(e, [{
				key: "_errorTolerantHandle",
				value: function() {
					!this.isWX && $c(window.localStorage) && (this.getItem = cg, this.setItem = cg, this.removeItem = cg, this.clear = cg)
				}
			}, {
				key: "_onCheckTimer",
				value: function() {
					if (this.checkTimes++, this.checkTimes % 20 == 0) {
						if (0 == this.storageQueue.size) return;
						this._doFlush()
					}
				}
			}, {
				key: "_doFlush",
				value: function() {
					try {
						var e = 1,
							t = 0,
							n = void 0;
						try {
							for (var r, o = this.storageQueue[Symbol.iterator](); !(e = (r = o.next()).done); e = 1) {
								var i = jn(r.value, 2),
									a = i[0],
									s = i[1];
								this.isWX ? wx.setStorageSync(this._getKey(a), s) : localStorage.setItem(this._getKey(a), JSON.stringify(s))
							}
						} catch (u) {
							t = 1, n = u
						} finally {
							try {
								e || null == o.
								return ||o.
								return ()
							} finally {
								if (t) throw n
							}
						}
						this.storageQueue.clear()
					} catch (Ug) {
						zc.error("Storage._doFlush error", Ug)
					}
				}
			}, {
				key: "_initListeners",
				value: function() {
					this.tim.innerEmitter.once($s.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._updatePrefix, this)
				}
			}, {
				key: "_updatePrefix",
				value: function() {
					var e = this.tim.loginInfo,
						t = e.SDKAppID,
						n = e.identifier;
					this._prefix = "TIM_".concat(t, "_").concat(n, "_")
				}
			}, {
				key: "getItem",
				value: function(e) {
					try {
						return this.isWX ? wx.getStorageSync(this._getKey(e)) : JSON.parse(localStorage.getItem(this._getKey(e)))
					} catch (Ug) {
						zc.error("Storage.getItem error:", Ug)
					}
				}
			}, {
				key: "setItem",
				value: function(e, t) {
					this.storageQueue.set(e, t)
				}
			}, {
				key: "clear",
				value: function() {
					try {
						this.isWX ? wx.clearStorageSync() : localStorage.clear()
					} catch (Ug) {
						zc.error("Storage.clear error:", Ug)
					}
				}
			}, {
				key: "removeItem",
				value: function(e) {
					try {
						this.isWX ? wx.removeStorageSync(this._getKey(e)) : localStorage.removeItem(this._getKey(e))
					} catch (Ug) {
						zc.error("Storage.removeItem error:", Ug)
					}
				}
			}, {
				key: "getSize",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "b";
					try {
						var r = {
							size: 0,
							limitSize: 5242880,
							unit: n
						};
						if (Object.defineProperty(r, "leftSize", {
							enumerable: 1,
							get: function() {
								return r.limitSize - r.size
							}
						}), this.isWX && (r.limitSize = 1024 * wx.getStorageInfoSync().limitSize), e) r.size = JSON.stringify(this.getItem(e)).length + this._getKey(e).length;
						else if (this.isWX) {
							var o = wx.getStorageInfoSync(),
								i = o.keys;
							i.forEach(function(e) {
								r.size += JSON.stringify(wx.getStorageSync(e)).length + t._getKey(e).length
							})
						} else for (var a in localStorage) localStorage.hasOwnProperty(a) && (r.size += localStorage.getItem(a).length + a.length);
						return this._convertUnit(r)
					} catch (Ug) {
						zc.error("Storage.getSize error:", Ug)
					}
				}
			}, {
				key: "_convertUnit",
				value: function(e) {
					var t = {},
						n = e.unit;
					for (var r in t.unit = n, e)"number" == typeof e[r] && ("kb" === n.toLowerCase() ? t[r] = Math.round(e[r] / 1024) : "mb" === n.toLowerCase() ? t[r] = Math.round(e[r] / 1024 / 1024) : t[r] = e[r]);
					return t
				}
			}, {
				key: "_getKey",
				value: function(e) {
					return "".concat(this._prefix).concat(e)
				}
			}, {
				key: "reset",
				value: function() {
					this._doFlush(), this.checkTimes = 0, this._prefix = "", this.tim.innerEmitter.once($s.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._updatePrefix, this)
				}
			}]), e
		}(),
		pg = t(function(e) {
			var t = Object.prototype.hasOwnProperty,
				n = "~";

			function r() {}
			function o(e, t, n) {
				this.fn = e, this.context = t, this.once = n || 0
			}
			function i(e, t, r, i, a) {
				if ("function" != typeof r) throw new TypeError("The listener must be a function");
				var s = new o(r, i || e, a),
					u = n ? n + t : t;
				return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], s] : e._events[u].push(s) : (e._events[u] = s, e._eventsCount++), e
			}
			function a(e, t) {
				0 == --e._eventsCount ? e._events = new r : delete e._events[t]
			}
			function s() {
				this._events = new r, this._eventsCount = 0
			}
			Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (n = 0)), s.prototype.eventNames = function() {
				var e, r, o = [];
				if (0 === this._eventsCount) return o;
				for (r in e = this._events) t.call(e, r) && o.push(n ? r.slice(1) : r);
				return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o
			}, s.prototype.listeners = function(e) {
				var t = n ? n + e : e,
					r = this._events[t];
				if (!r) return [];
				if (r.fn) return [r.fn];
				for (var o = 0, i = r.length, a = new Array(i); o < i; o++) a[o] = r[o].fn;
				return a
			}, s.prototype.listenerCount = function(e) {
				var t = n ? n + e : e,
					r = this._events[t];
				return r ? r.fn ? 1 : r.length : 0
			}, s.prototype.emit = function(e, t, r, o, i, a) {
				var s = n ? n + e : e;
				if (!this._events[s]) return 0;
				var u, c, l = this._events[s],
					p = arguments.length;
				if (l.fn) {
					switch (l.once && this.removeListener(e, l.fn, void 0, 1), p) {
					case 1:
						return l.fn.call(l.context), 1;
					case 2:
						return l.fn.call(l.context, t), 1;
					case 3:
						return l.fn.call(l.context, t, r), 1;
					case 4:
						return l.fn.call(l.context, t, r, o), 1;
					case 5:
						return l.fn.call(l.context, t, r, o, i), 1;
					case 6:
						return l.fn.call(l.context, t, r, o, i, a), 1
					}
					for (c = 1, u = new Array(p - 1); c < p; c++) u[c - 1] = arguments[c];
					l.fn.apply(l.context, u)
				} else {
					var f, h = l.length;
					for (c = 0; c < h; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, 1), p) {
					case 1:
						l[c].fn.call(l[c].context);
						break;
					case 2:
						l[c].fn.call(l[c].context, t);
						break;
					case 3:
						l[c].fn.call(l[c].context, t, r);
						break;
					case 4:
						l[c].fn.call(l[c].context, t, r, o);
						break;
					default:
						if (!u) for (f = 1, u = new Array(p - 1); f < p; f++) u[f - 1] = arguments[f];
						l[c].fn.apply(l[c].context, u)
					}
				}
				return 1
			}, s.prototype.on = function(e, t, n) {
				return i(this, e, t, n, 0)
			}, s.prototype.once = function(e, t, n) {
				return i(this, e, t, n, 1)
			}, s.prototype.removeListener = function(e, t, r, o) {
				var i = n ? n + e : e;
				if (!this._events[i]) return this;
				if (!t) return a(this, i), this;
				var s = this._events[i];
				if (s.fn) s.fn !== t || o && !s.once || r && s.context !== r || a(this, i);
				else {
					for (var u = 0, c = [], l = s.length; u < l; u++)(s[u].fn !== t || o && !s[u].once || r && s[u].context !== r) && c.push(s[u]);
					c.length ? this._events[i] = 1 === c.length ? c[0] : c : a(this, i)
				}
				return this
			}, s.prototype.removeAllListeners = function(e) {
				var t;
				return e ? (t = n ? n + e : e, this._events[t] && a(this, t)) : (this._events = new r, this._eventsCount = 0), this
			}, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, e.exports = s
		}),
		fg = function(e) {
			var t, n, r, o, i;
			return fr(e.context) ? (t = "", n = 0, r = 0, o = 0, i = 1) : (t = e.context.a2Key, n = e.context.tinyID, r = e.context.SDKAppID, o = e.context.contentType, i = e.context.apn), {
				platform: xs,
				websdkappid: Fs,
				v: Us,
				a2: t,
				tinyid: n,
				sdkappid: r,
				contentType: o,
				apn: i,
				reqtime: function() {
					return +new Date
				}
			}
		},
		hg = function() {
			function e(t) {
				Nn(this, e), this.isReady = 0, this.tim = t, this.context = t.context, this._initList(), this._updateWhenCTXIsReady()
			}
			return Rn(e, [{
				key: "_updateWhenCTXIsReady",
				value: function() {
					this.tim.innerEmitter.on($s.CONTEXT_UPDATED, this.update, this), this.tim.innerEmitter.on($s.CONTEXT_RESET, this.reset, this)
				}
			}, {
				key: "update",
				value: function(e) {
					var t = e.context;
					this.context = t, this._initList()
				}
			}, {
				key: "reset",
				value: function(e) {
					this.context = e.data, this._initList()
				}
			}, {
				key: "get",
				value: function(e) {
					var t = e.name,
						n = e.action,
						r = e.param;
					if (void 0 === this.config[t]) throw new gs({
						code: fs.NETWORK_PACKAGE_UNDEFINED,
						message: "".concat(hs.NETWORK_PACKAGE_UNDEFINED, ": PackageConfig.").concat(t)
					});
					if (void 0 === this.config[t][n]) throw new gs({
						code: fs.NETWORK_PACKAGE_UNDEFINED,
						message: "".concat(hs.NETWORK_PACKAGE_UNDEFINED, ": PackageConfig.").concat(t, ".").concat(n)
					});
					var o = function e(t) {
							if (0 === Object.getOwnPropertyNames(t).length) return Object.create(null);
							var n = Array.isArray(t) ? [] : Object.create(null),
								r = "";
							for (var o in t) null !== t[o] ? void 0 !== t[o] ? (r = On(t[o]), ["string", "number", "function", "boolean"].indexOf(r) >= 0 ? n[o] = t[o] : n[o] = e(t[o])) : n[o] = void 0 : n[o] = null;
							return n
						}(this.config[t][n]);
					return o.requestData = this._initRequestData(r, o), o.encode = this._initEncoder(o), o.decode = this._initDecoder(o), o
				}
			}, {
				key: "set",
				value: function(e) {
					var t = e.key,
						n = e.value;
					if (0 != !! t) {
						var r = t.split(".");
						if (!(r.length <= 0)) {
							!
							function e(t, n, r, o) {
								var i = n[r];
								"object" === On(t[i]) ? e(t[i], n, r + 1, o) : t[i] = o
							}(this.config, r, 0, n)
						}
					}
				}
			}, {
				key: "_initList",
				value: function() {
					var e;
					this.config = {}, this.config.accessLayer = (e = this.tim, {
						create: null,
						query: {
							serverName: Bs.NAME.WEB_IM,
							cmd: Bs.CMD.ACCESS_LAYER,
							channel: Bs.CHANNEL.XHR,
							protocol: js,
							method: "POST",
							queryString: {
								platform: xs,
								identifier: e.loginInfo.identifier,
								usersig: e.loginInfo.userSig,
								contentType: e.loginInfo.contentType,
								apn: null != e.context ? e.context.apn : 1,
								websdkappid: Fs,
								v: Us
							},
							requestData: {}
						},
						update: null,
						delete: null
					}), this.config.login = function(e) {
						return {
							create: null,
							query: {
								serverName: Bs.NAME.OPEN_IM,
								cmd: Bs.CMD.LOGIN,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: {
									websdkappid: Fs,
									v: Us,
									platform: xs,
									identifier: e.loginInfo.identifier,
									usersig: e.loginInfo.userSig,
									sdkappid: e.loginInfo.SDKAppID,
									accounttype: e.loginInfo.accountType,
									contentType: null != e.context ? e.context.contentType : 0,
									apn: null != e.context ? e.context.apn : 1,
									reqtime: +new Date / 1e3
								},
								requestData: {
									state: "Online"
								},
								keyMaps: {
									request: {
										tinyID: "tinyId"
									},
									response: {
										TinyId: "tinyID"
									}
								}
							},
							update: null,
							delete: null
						}
					}(this.tim), this.config.logout = function(e) {
						return {
							create: null,
							query: {
								serverName: Bs.NAME.OPEN_IM,
								cmd: Bs.CMD.LOGOUT_ALL,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: {
									websdkappid: Fs,
									v: Us,
									platform: xs,
									a2: null != e.context ? e.context.a2Key : "",
									tinyid: null != e.context ? e.context.tinyID : "",
									sdkappid: null != e.loginInfo ? e.loginInfo.SDKAppID : 0,
									contentType: null != e.context ? e.context.contentType : 0,
									apn: null != e.context ? e.context.apn : "",
									reqtime: +new Date / 1e3
								},
								requestData: {}
							},
							update: null,
							delete: null
						}
					}(this.tim), this.config.longPollLogout = function(e) {
						return {
							create: null,
							query: {
								serverName: Bs.NAME.OPEN_IM,
								cmd: Bs.CMD.LOGOUT_LONG_POLL,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: {
									websdkappid: Fs,
									v: Us,
									platform: xs,
									a2: null != e.context ? e.context.a2Key : "",
									tinyid: null != e.context ? e.context.tinyID : 0,
									sdkappid: null != e.context ? e.context.SDKAppID : 0,
									contentType: null != e.context ? e.context.contentType : 0,
									apn: null != e.context ? e.context.apn : 1,
									reqtime: function() {
										return Date.now()
									}
								},
								requestData: {
									longPollID: ""
								},
								keyMaps: {
									request: {
										longPollID: "LongPollingId"
									}
								}
							},
							update: null,
							delete: null
						}
					}(this.tim), this.config.profile = function(e) {
						var t = fg(e),
							n = Bs.NAME.PROFILE,
							r = Bs.CHANNEL.XHR,
							o = js,
							i = [];
						for (var a in En) i.push(En[a]);
						return {
							query: {
								serverName: n,
								cmd: Bs.CMD.PORTRAIT_GET,
								channel: r,
								protocol: o,
								method: "POST",
								queryString: t,
								requestData: {
									fromAccount: "",
									toAccount: [],
									tagList: i
								}
							},
							update: {
								serverName: n,
								cmd: Bs.CMD.PORTRAIT_SET,
								channel: r,
								protocol: o,
								method: "POST",
								queryString: t,
								requestData: {
									fromAccount: "",
									profileItem: [{
										tag: En.NICK,
										value: ""
									}, {
										tag: En.GENDER,
										value: ""
									}, {
										tag: En.ALLOWTYPE,
										value: ""
									}, {
										tag: En.AVATAR,
										value: ""
									}]
								}
							}
						}
					}(this.tim), this.config.group = function(e) {
						var t = {
							websdkappid: Fs,
							v: Us,
							platform: xs,
							a2: null != e.context && e.context.a2Key ? e.context.a2Key : void 0,
							tinyid: null != e.context && e.context.tinyID ? e.context.tinyID : void 0,
							sdkappid: null != e.context ? e.context.SDKAppID : 0,
							contentType: null != e.context ? e.context.contentType : 0,
							accounttype: null != e.context ? e.context.accountType : 0
						},
							n = {
								request: {
									ownerID: "Owner_Account",
									userID: "Member_Account",
									newOwnerID: "NewOwner_Account",
									maxMemberNum: "MaxMemberCount",
									groupCustomField: "AppDefinedData",
									memberCustomField: "AppMemberDefinedData",
									groupCustomFieldFilter: "AppDefinedDataFilter_Group",
									memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember",
									messageRemindType: "MsgFlag",
									userIDList: "MemberList",
									groupIDList: "GroupIdList",
									applyMessage: "ApplyMsg",
									muteTime: "ShutUpTime",
									joinOption: "ApplyJoinOption"
								},
								response: {
									GroupIdList: "groups",
									MsgFlag: "messageRemindType",
									AppDefinedData: "groupCustomField",
									AppMemberDefinedData: "memberCustomField",
									AppDefinedDataFilter_Group: "groupCustomFieldFilter",
									AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
									InfoSeq: "infoSequence",
									MemberList: "members",
									GroupInfo: "groups",
									ShutUpUntil: "muteUntil",
									ApplyJoinOption: "joinOption"
								}
							};
						return {
							create: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.CREATE_GROUP,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									type: Qt.PRIVATE,
									name: void 0,
									groupID: void 0,
									ownerID: e.loginInfo.identifier,
									introduction: void 0,
									notification: void 0,
									avatar: void 0,
									maxMemberNum: void 0,
									joinOption: void 0,
									memberList: void 0,
									groupCustomField: void 0
								},
								keyMaps: n
							},
							list: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.GET_JOINED_GROUPS,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									userID: e.loginInfo.identifier,
									limit: void 0,
									offset: void 0,
									groupType: void 0,
									responseFilter: void 0
								},
								keyMaps: n
							},
							query: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.GET_GROUP_INFO,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupIDList: void 0,
									responseFilter: void 0
								},
								keyMaps: n
							},
							getGroupMemberList: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.GET_GROUP_MEMBER_INFO,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupID: void 0,
									limit: 0,
									offset: 0,
									memberRoleFilter: void 0,
									memberInfoFilter: void 0
								},
								keyMaps: n
							},
							quitGroup: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.QUIT_GROUP,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupID: void 0
								}
							},
							changeGroupOwner: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.CHANGE_GROUP_OWNER,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupID: void 0,
									newOwnerID: void 0
								},
								keyMaps: n
							},
							destroyGroup: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.DESTROY_GROUP,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupID: void 0
								}
							},
							updateGroupProfile: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.MODIFY_GROUP_INFO,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupID: void 0,
									name: void 0,
									introduction: void 0,
									notification: void 0,
									avatar: void 0,
									maxMemberNum: void 0,
									joinOption: void 0,
									groupCustomField: void 0
								},
								keyMaps: {
									request: kn({}, n.request, {
										groupCustomField: "AppDefinedData"
									}),
									response: n.response
								}
							},
							modifyGroupMemberInfo: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.MODIFY_GROUP_MEMBER_INFO,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupID: void 0,
									userID: void 0,
									messageRemindType: void 0,
									nameCard: void 0,
									role: void 0,
									memberCustomField: void 0,
									muteTime: void 0
								},
								keyMaps: n
							},
							addGroupMember: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.ADD_GROUP_MEMBER,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupID: void 0,
									silence: void 0,
									userIDList: void 0
								},
								keyMaps: n
							},
							deleteGroupMember: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.DELETE_GROUP_MEMBER,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupID: void 0,
									userIDList: void 0,
									reason: void 0
								},
								keyMaps: {
									request: {
										userIDList: "MemberToDel_Account"
									}
								}
							},
							searchGroupByID: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.SEARCH_GROUP_BY_ID,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupIDList: void 0,
									responseFilter: {
										groupBasePublicInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "CreateTime", "Owner_Account", "LastInfoTime", "LastMsgTime", "NextMsgSeq", "MemberNum", "MaxMemberNum", "ApplyJoinOption"]
									}
								},
								keyMaps: {
									request: {
										groupIDList: "GroupIdList"
									}
								}
							},
							applyJoinGroup: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.APPLY_JOIN_GROUP,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupID: void 0,
									applyMessage: void 0,
									userDefinedField: void 0
								},
								keyMaps: n
							},
							applyJoinAVChatRoom: {
								serverName: Bs.NAME.BIG_GROUP_NO_AUTH,
								cmd: Bs.CMD.APPLY_JOIN_GROUP,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: {
									websdkappid: Fs,
									v: Us,
									platform: xs,
									sdkappid: null != e.context ? e.context.SDKAppID : 0,
									contentType: null != e.context ? e.context.contentType : 0,
									accounttype: null != e.context ? e.context.accountType : 0
								},
								requestData: {
									groupID: void 0,
									applyMessage: void 0,
									userDefinedField: void 0
								},
								keyMaps: n
							},
							handleApplyJoinGroup: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.HANDLE_APPLY_JOIN_GROUP,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									groupID: void 0,
									applicant: void 0,
									handleAction: void 0,
									handleMessage: void 0,
									authentication: void 0,
									messageKey: void 0,
									userDefinedField: void 0
								},
								keyMaps: {
									request: {
										applicant: "Applicant_Account",
										handleAction: "HandleMsg",
										handleMessage: "ApprovalMsg",
										messageKey: "MsgKey"
									},
									response: {
										MsgKey: "messageKey"
									}
								}
							},
							deleteGroupSystemNotice: {
								serverName: Bs.NAME.OPEN_IM,
								cmd: Bs.CMD.DELETE_GROUP_SYSTEM_MESSAGE,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: t,
								requestData: {
									messageListToDelete: void 0
								},
								keyMaps: {
									request: {
										messageListToDelete: "DelMsgList",
										messageSeq: "MsgSeq",
										messageRandom: "MsgRandom"
									}
								}
							}
						}
					}(this.tim), this.config.longPollID = function(e) {
						return {
							create: {},
							query: {
								serverName: Bs.NAME.OPEN_IM,
								cmd: Bs.CMD.GET_LONG_POLL_ID,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								queryString: {
									websdkappid: Fs,
									v: Us,
									platform: xs,
									a2: null != e.context ? e.context.a2Key : "",
									tinyid: null != e.context ? e.context.tinyID : 0,
									sdkappid: null != e.context ? e.context.SDKAppID : 0,
									contentType: null != e.context ? e.context.contentType : 0,
									apn: null != e.context ? e.context.apn : 1,
									reqtime: +new Date / 1e3
								},
								requestData: {},
								keyMaps: {
									response: {
										LongPollingId: "longPollingID"
									}
								}
							},
							update: {},
							delete: {}
						}
					}(this.tim), this.config.longPoll = function(e) {
						var t = {
							websdkappid: Fs,
							v: Us,
							platform: xs,
							a2: null != e.context ? e.context.a2Key : "",
							tinyid: null != e.context ? e.context.tinyID : 0,
							sdkappid: null != e.context ? e.context.SDKAppID : 0,
							contentType: null != e.context ? e.context.contentType : 0,
							accounttype: null != e.context ? e.loginInfo.accountType : 0,
							apn: null != e.context ? e.context.apn : 1,
							reqtime: Math.ceil(+new Date / 1e3)
						};
						return {
							create: {},
							query: {
								serverName: Bs.NAME.OPEN_IM,
								cmd: Bs.CMD.LONG_POLL,
								channel: Bs.CHANNEL.AUTO,
								protocol: js,
								queryString: t,
								requestData: {
									timeout: null,
									cookie: {
										notifySeq: 0,
										noticeSeq: 0,
										longPollingID: 0
									}
								},
								keyMaps: {
									response: {
										C2cMsgArray: "C2CMessageArray",
										GroupMsgArray: "groupMessageArray",
										GroupTips: "groupTips",
										C2cNotifyMsgArray: "C2CNotifyMessageArray",
										ClientSeq: "clientSequence",
										MsgPriority: "messagePriority",
										NoticeSeq: "noticeSequence",
										MsgContent: "content",
										MsgType: "type",
										MsgBody: "elements",
										ToGroupId: "to",
										Desc: "description",
										Ext: "extension",
										MsgFrom_AccountExtraInfo: "messageFromAccountExtraInformation"
									}
								}
							},
							update: {},
							delete: {}
						}
					}(this.tim), this.config.applyC2C = function(e) {
						var t = fg(e),
							n = Bs.NAME.FRIEND,
							r = Bs.CHANNEL.XHR,
							o = js;
						return {
							create: {
								serverName: n,
								cmd: Bs.CMD.FRIEND_ADD,
								channel: r,
								protocol: o,
								queryString: t,
								requestData: {
									fromAccount: "",
									addFriendItem: []
								}
							},
							get: {
								serverName: n,
								cmd: Bs.CMD.GET_PENDENCY,
								channel: r,
								protocol: o,
								queryString: t,
								requestData: {
									fromAccount: "",
									pendencyType: "Pendency_Type_ComeIn"
								}
							},
							update: {
								serverName: n,
								cmd: Bs.CMD.RESPONSE_PENDENCY,
								channel: r,
								protocol: o,
								queryString: t,
								requestData: {
									fromAccount: "",
									responseFriendItem: []
								}
							},
							delete: {
								serverName: n,
								cmd: Bs.CMD.DELETE_PENDENCY,
								channel: r,
								protocol: o,
								queryString: t,
								requestData: {
									fromAccount: "",
									toAccount: [],
									pendencyType: "Pendency_Type_ComeIn"
								}
							}
						}
					}(this.tim), this.config.friend = function(e) {
						var t = fg(e),
							n = Bs.NAME.FRIEND,
							r = Bs.CHANNEL.XHR,
							o = js;
						return {
							get: {
								serverName: n,
								cmd: Bs.CMD.FRIEND_GET_ALL,
								channel: r,
								protocol: o,
								method: "POST",
								queryString: t,
								requestData: {
									fromAccount: "",
									timeStamp: 0,
									startIndex: 0,
									getCount: 100,
									lastStandardSequence: 0,
									tagList: ["Tag_Profile_IM_Nick", "Tag_SNS_IM_Remark"]
								},
								keyMaps: {
									request: {},
									response: {}
								}
							},
							delete: {
								serverName: n,
								cmd: Bs.CMD.FRIEND_DELETE,
								channel: r,
								protocol: o,
								method: "POST",
								queryString: t,
								requestData: {
									fromAccount: "",
									toAccount: [],
									deleteType: "Delete_Type_Single"
								}
							}
						}
					}(this.tim), this.config.blacklist = function(e) {
						var t = fg(e);
						return {
							create: {
								serverName: Bs.NAME.FRIEND,
								cmd: Bs.CMD.ADD_BLACKLIST,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									fromAccount: "",
									toAccount: []
								}
							},
							get: {
								serverName: Bs.NAME.FRIEND,
								cmd: Bs.CMD.GET_BLACKLIST,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									fromAccount: "",
									startIndex: 0,
									maxLimited: 30,
									lastSequence: 0
								}
							},
							delete: {
								serverName: Bs.NAME.FRIEND,
								cmd: Bs.CMD.DELETE_BLACKLIST,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									fromAccount: "",
									toAccount: []
								}
							},
							update: {}
						}
					}(this.tim), this.config.c2cMessage = function(e) {
						var t = {
							platform: xs,
							websdkappid: Fs,
							v: Us,
							a2: null !== e.context ? e.context.a2Key : "",
							tinyid: null !== e.context ? e.context.tinyID : 0,
							sdkappid: null !== e.context ? e.context.SDKAppID : 0,
							contentType: null !== e.context ? e.context.contentType : 0,
							apn: null !== e.context ? e.context.apn : 1,
							reqtime: function() {
								return +new Date
							}
						},
							n = {
								request: {
									fromAccount: "From_Account",
									toAccount: "To_Account",
									msgTimeStamp: "MsgTimeStamp",
									msgSeq: "MsgSeq",
									msgRandom: "MsgRandom",
									msgBody: "MsgBody",
									count: "MaxCnt",
									lastMessageTime: "LastMsgTime",
									messageKey: "MsgKey",
									peerAccount: "Peer_Account",
									data: "Data",
									description: "Desc",
									extension: "Ext",
									type: "MsgType",
									content: "MsgContent",
									sizeType: "Type",
									uuid: "UUID",
									imageUrl: "URL",
									fileUrl: "Url",
									downloadFlag: "Download_Flag"
								},
								response: {
									MsgContent: "content",
									MsgTime: "time",
									Data: "data",
									Desc: "description",
									Ext: "extension",
									MsgKey: "messageKey",
									MsgType: "type",
									MsgBody: "elements",
									Download_Flag: "downloadFlag"
								}
							};
						return {
							create: {
								serverName: Bs.NAME.OPEN_IM,
								cmd: Bs.CMD.SEND_MESSAGE,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									fromAccount: e.loginInfo.identifier,
									toAccount: "",
									msgTimeStamp: Math.ceil(+new Date / 1e3),
									msgSeq: 0,
									msgRandom: 0,
									msgBody: []
								},
								keyMaps: n
							},
							query: {
								serverName: Bs.NAME.OPEN_IM,
								cmd: Bs.CMD.GET_C2C_ROAM_MESSAGES,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									peerAccount: "",
									count: 15,
									lastMessageTime: 0,
									messageKey: ""
								},
								keyMaps: n
							},
							update: null,
							delete: null
						}
					}(this.tim), this.config.groupMessage = function(e) {
						var t = {
							platform: xs,
							websdkappid: Fs,
							v: Us,
							a2: null !== e.context ? e.context.a2Key : "",
							tinyid: null !== e.context ? e.context.tinyID : 0,
							sdkappid: null !== e.context ? e.context.SDKAppID : 0,
							contentType: null !== e.context ? e.context.contentType : 0,
							apn: null !== e.context ? e.context.apn : 1,
							reqtime: function() {
								return +new Date
							}
						},
							n = {
								request: {
									to: "GroupId",
									extension: "Ext",
									data: "Data",
									description: "Desc",
									random: "Random",
									sequence: "ReqMsgSeq",
									count: "ReqMsgNumber",
									type: "MsgType",
									content: "MsgContent",
									elements: "MsgBody",
									sizeType: "Type",
									uuid: "UUID",
									imageUrl: "URL",
									fileUrl: "Url",
									downloadFlag: "Download_Flag"
								},
								response: {
									Random: "random",
									MsgTime: "time",
									MsgSeq: "sequence",
									ReqMsgSeq: "sequence",
									RspMsgList: "messagesList",
									IsPlaceMsg: "isPlaceMessage",
									IsSystemMsg: "isSystemMessage",
									ToGroupId: "to",
									MsgFrom_AccountExtraInfo: "messageFromAccountExtraInformation",
									EnumFrom_AccountType: "fromAccountType",
									EnumTo_AccountType: "toAccountType",
									GroupCode: "groupCode",
									MsgFlag: "messageRemindType",
									MsgPriority: "messagePriority",
									MsgBody: "elements",
									MsgType: "type",
									MsgContent: "content",
									IsFinished: "complete",
									Download_Flag: "downloadFlag"
								}
							};
						return {
							create: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.SEND_GROUP_MESSAGE,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									groupID: "",
									fromAccount: e.loginInfo.identifier,
									random: 0,
									msgBody: []
								},
								keyMaps: n
							},
							query: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.GET_GROUP_ROAM_MESSAGES,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									groupID: "",
									count: 15,
									sequence: ""
								},
								keyMaps: n
							},
							update: null,
							delete: null
						}
					}(this.tim), this.config.conversation = function(e) {
						var t = {
							platform: xs,
							websdkappid: Fs,
							v: Us,
							a2: null !== e.context ? e.context.a2Key : "",
							tinyid: null !== e.context ? e.context.tinyID : 0,
							sdkappid: null !== e.context ? e.context.SDKAppID : 0,
							contentType: null !== e.context ? e.context.contentType : 0,
							apn: null !== e.context ? e.context.apn : 1
						};
						return {
							query: {
								serverName: Bs.NAME.RECENT_CONTACT,
								cmd: Bs.CMD.GET_CONVERSATION_LIST,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									fromAccount: e.loginInfo.identifier,
									count: 0
								},
								keyMaps: {
									request: {},
									response: {
										SessionItem: "conversations",
										ToAccount: "groupID",
										To_Account: "userID",
										UnreadMsgCount: "unreadCount",
										MsgGroupReadedSeq: "messageReadSeq"
									}
								}
							},
							delete: {
								serverName: Bs.NAME.RECENT_CONTACT,
								cmd: Bs.CMD.DELETE_CONVERSATION,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									fromAccount: e.loginInfo.identifier,
									toAccount: void 0,
									type: 1,
									toGroupID: void 0
								},
								keyMaps: {
									request: {
										toGroupID: "ToGroupid"
									}
								}
							},
							setC2CMessageRead: {
								serverName: Bs.NAME.OPEN_IM,
								cmd: Bs.CMD.SET_C2C_MESSAGE_READ,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									C2CMsgReaded: void 0
								},
								keyMaps: {
									request: {
										lastMessageTime: "LastedMsgTime"
									}
								}
							},
							setGroupMessageRead: {
								serverName: Bs.NAME.GROUP,
								cmd: Bs.CMD.SET_GROUP_MESSAGE_READ,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									groupID: void 0,
									messageReadSeq: void 0
								},
								keyMaps: {
									request: {
										messageReadSeq: "MsgReadedSeq"
									}
								}
							}
						}
					}(this.tim), this.config.syncMessage = function(e) {
						var t = {
							platform: xs,
							websdkappid: Fs,
							v: Us,
							a2: null !== e.context ? e.context.a2Key : "",
							tinyid: null !== e.context ? e.context.tinyID : 0,
							sdkappid: null !== e.context ? e.context.SDKAppID : 0,
							contentType: null !== e.context ? e.context.contentType : 0,
							apn: null !== e.context ? e.context.apn : 1,
							reqtime: function() {
								return [Math.ceil(+new Date), Math.random()].join("")
							}
						};
						return {
							create: null,
							query: {
								serverName: Bs.NAME.OPEN_IM,
								cmd: Bs.CMD.GET_MESSAGES,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									cookie: "",
									syncFlag: 0
								},
								keyMaps: {
									request: {
										fromAccount: "From_Account",
										toAccount: "To_Account",
										from: "From_Account",
										to: "To_Account",
										time: "MsgTimeStamp",
										sequence: "MsgSeq",
										random: "MsgRandom",
										elements: "MsgBody"
									},
									response: {
										MsgList: "messageList",
										SyncFlag: "syncFlag",
										To_Account: "to",
										From_Account: "from",
										ClientSeq: "clientSequence",
										MsgSeq: "sequence",
										NoticeSeq: "noticeSequence",
										NotifySeq: "notifySequence",
										MsgRandom: "random",
										MsgTimeStamp: "time",
										MsgContent: "content",
										ToGroupId: "groupID",
										MsgKey: "messageKey",
										GroupTips: "groupTips",
										MsgBody: "elements",
										MsgType: "type"
									}
								}
							},
							update: null,
							delete: null
						}
					}(this.tim), this.config.AVChatRoom = function(e) {
						return {
							startLongPoll: {
								serverName: Bs.NAME.BIG_GROUP_LONG_POLLING_NO_AUTH,
								cmd: Bs.CMD.AVCHATROOM_LONG_POLL,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: {
									websdkappid: Fs,
									v: Us,
									platform: xs,
									sdkappid: e.loginInfo.SDKAppID,
									accounttype: "792",
									apn: null != e.context ? e.context.apn : 1,
									reqtime: function() {
										return +new Date
									}
								},
								requestData: {
									USP: 1,
									startSeq: 1,
									holdTime: 90,
									key: void 0
								},
								keyMaps: {
									request: {
										USP: "USP"
									},
									response: {
										ToGroupId: "groupID"
									}
								}
							}
						}
					}(this.tim), this.config.cosUpload = function(e) {
						var t = {
							platform: xs,
							websdkappid: Fs,
							v: Us,
							a2: null !== e.context ? e.context.a2Key : "",
							tinyid: null !== e.context ? e.context.tinyID : 0,
							sdkappid: null !== e.context ? e.context.SDKAppID : 0,
							contentType: null !== e.context ? e.context.contentType : 0,
							apn: null !== e.context ? e.context.apn : 1,
							reqtime: function() {
								return Date.now()
							}
						};
						return {
							create: {
								serverName: Bs.NAME.OPEN_IM,
								cmd: Bs.CMD.FILE_UPLOAD,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									appVersion: "2.1",
									fromAccount: "",
									toAccount: "",
									sequence: 0,
									time: function() {
										return Math.ceil(Date.now() / 1e3)
									},
									random: function() {
										return ol()
									},
									fileStrMd5: "",
									fileSize: "",
									serverVer: 1,
									authKey: "",
									busiId: 1,
									pkgFlag: 1,
									sliceOffset: 0,
									sliceSize: 0,
									sliceData: "",
									contentType: "application/x-www-form-urlencoded"
								},
								keyMaps: {
									request: {},
									response: {}
								}
							},
							update: null,
							delete: null
						}
					}(this.tim), this.config.cosSig = function(e) {
						var t = {
							sdkappid: function() {
								return e.loginInfo.SDKAppID
							},
							identifier: function() {
								return e.loginInfo.identifier
							},
							userSig: function() {
								return e.context.userSig
							}
						};
						return {
							create: null,
							query: {
								serverName: Bs.NAME.IM_COS_SIGN,
								cmd: Bs.CMD.COS_SIGN,
								channel: Bs.CHANNEL.XHR,
								protocol: js,
								method: "POST",
								queryString: t,
								requestData: {
									cmd: "open_im_cos_svc",
									subCmd: "get_cos_token",
									duration: 300,
									version: 1
								},
								keyMaps: {
									request: {
										userSig: "usersig",
										subCmd: "sub_cmd",
										cmd: "cmd",
										duration: "duration",
										version: "version"
									},
									response: {
										expired_time: "expiredTime",
										bucket_name: "bucketName",
										session_token: "sessionToken",
										tmp_secret_id: "secretId",
										tmp_secret_key: "secretKey"
									}
								}
							},
							update: null,
							delete: null
						}
					}(this.tim)
				}
			}, {
				key: "_initRequestData",
				value: function(e, t) {
					if (void 0 === e) return dl(t.requestData, this._getRequestMap(t), this.tim);
					var n = t.requestData,
						r = Object.create(null);
					for (var o in n) r[o] = "function" == typeof n[o] ? n[o]() : n[o], void 0 !== e[o] && (r[o] = e[o]);
					return r = dl(r, this._getRequestMap(t), this.tim)
				}
			}, {
				key: "_getRequestMap",
				value: function(e) {
					if (e.keyMaps && e.keyMaps.request && Object.keys(e.keyMaps.request).length > 0) return e.keyMaps.request
				}
			}, {
				key: "_initEncoder",
				value: function(e) {
					switch (e.protocol) {
					case js:
						return function(e) {
							if ("string" === On(e)) try {
								return JSON.parse(e)
							} catch (Ug) {
								return e
							}
							return e
						}.bind(e);
					case qs:
						return function(e) {
							return e
						}.bind(e);
					default:
						return function(e) {
							return zc.warn("PackageConfig._initEncoder(), unknow response type, data: ", JSON.stringify(e)), e
						}.bind(e)
					}
				}
			}, {
				key: "_initDecoder",
				value: function(e) {
					switch (e.protocol) {
					case js:
						return function(e) {
							if ("string" === On(e)) try {
								return JSON.parse(e)
							} catch (Ug) {
								return e
							}
							return e
						}.bind(e);
					case qs:
						return function(e) {
							return e
						}.bind(e);
					default:
						return function(e) {
							return zc.warn("PackageConfig._initDecoder(), unknow response type, data: ", e), e
						}.bind(e)
					}
				}
			}]), e
		}(),
		gg = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this, e)))._initialization(), n
			}
			return Gn(t, Sl), Rn(t, [{
				key: "_initialization",
				value: function() {
					this._syncOffset = "", this._syncNoticeList = [], this._syncEventArray = [], this._syncMessagesIsRunning = 0, this._syncMessagesFinished = 0, this._isLongPoll = 0, this._longPollID = 0, this._noticeSequence = 0, this._initializeListener(), this._runLoop = null
				}
			}, {
				key: "getLongPollID",
				value: function() {
					return this._longPollID
				}
			}, {
				key: "_IAmReady",
				value: function() {
					this.triggerReady()
				}
			}, {
				key: "reset",
				value: function() {
					this._noticeSequence = 0, this._resetSync(), this._resetLongpoll()
				}
			}, {
				key: "_resetSync",
				value: function() {
					this._syncOffset = "", this._syncNoticeList = [], this._syncEventArray = [], this._syncMessagesIsRunning = 0, this._syncMessagesFinished = 0
				}
			}, {
				key: "_resetLongpoll",
				value: function() {
					this._longPollID = 0, this._isLongPoll = 0
				}
			}, {
				key: "_setNoticeSeqInRequestData",
				value: function(e) {
					e.Cookie.NoticeSeq = this._noticeSequence
				}
			}, {
				key: "_updatenoticeSequence",
				value: function(e) {
					e || this._noticeSequence++;
					var t = e[e.length - 1].noticeSequence;
					t || this._noticeSequence++, "number" != typeof t && this._noticeSequence++, t < this._noticeSequence && this._noticeSequence++, this._noticeSequence = t
				}
			}, {
				key: "_initializeListener",
				value: function() {
					var e = this.tim.innerEmitter;
					e.on($s.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._startSyncMessages, this), e.on($s.SYNC_MESSAGE_C2C_FINISHED, this._realTimeNotice, this), e.on($s.NOTICE_LONGPOLL_GETID_SUCCESS, this._onGetLongPollIDSuccess, this), e.on($s.SIGN_LOGOUT_SUCCESS, this.stopLongPoll, this), e.on($s.NOTICE_LONGPOLL_SOON_RECONNECT, this._onChannelReconnect, this), e.on($s.NOTICE_LONGPOLL_DISCONNECT, this._onChannelDisconnected, this)
				}
			}, {
				key: "_realTimeNotice",
				value: function() {
					zc.log("NotificationController._realTimeNotice start..."), this._getLongPollID()
				}
			}, {
				key: "_getLongPollID",
				value: function() {
					var e = this.tim,
						t = e.innerEmitter,
						n = e.connectionController;
					if (0 === this._longPollID) {
						var r = this.createPackage({
							name: "longPollID",
							action: "query"
						});
						n.request(r).then(function(e) {
							e.data.errorCode == Cl.REQUEST.SUCCESS ? t.emit($s.NOTICE_LONGPOLL_GETID_SUCCESS, {
								data: e.data.longPollingID
							}) : t.emit($s.NOTICE_LONGPOLL_GETID_FAIL, {
								data: e.data
							})
						}).
						catch (function(e) {
							t.emit($s.NOTICE_LONGPOLL_GETID_FAIL, e)
						})
					} else t.emit($s.NOTICE_LONGPOLL_GETID_SUCCESS, {
						data: this._longPollID
					})
				}
			}, {
				key: "_onGetLongPollIDSuccess",
				value: function(e) {
					this.tim.packageConfig.set({
						key: "long_poll_logout.query.requestData.longPollingID",
						value: e.data
					}), this.tim.packageConfig.set({
						key: "longPoll.query.requestData.cookie.longPollingID",
						value: e.data
					}), this._longPollID = e.data, this._startLongPoll(), this._IAmReady()
				}
			}, {
				key: "_startLongPoll",
				value: function() {
					if (1 != this._isLongPoll) {
						zc.log("NotificationController._startLongPoll...");
						var e = this.tim,
							t = e.connectionController,
							n = e.innerEmitter,
							r = this.createPackage({
								name: "longPoll",
								action: "query"
							});
						this._isLongPoll = 1, n.emit($s.NOTICE_LONGPOLL_START, {
							data: Date.now()
						}), this._runLoop = t.createRunLoop({
							pack: r,
							before: this._setNoticeSeqInRequestData.bind(this),
							success: this._onNoticeReceived.bind(this),
							fail: this._onNoticeFail.bind(this)
						}), this._runLoop.start()
					}
				}
			}, {
				key: "_onChannelReconnect",
				value: function(e) {
					this.stopLongPoll(), this.syncMessage()
				}
			}, {
				key: "_onChannelDisconnected",
				value: function() {}
			}, {
				key: "stopLongPoll",
				value: function() {
					zc.log("NotificationController.stopLongPoll()"), this._runLoop.stop(), this._longPollID = 0, this._isLongPoll = 0, this.tim.innerEmitter.emit($s.NOTICE_LONGPOLL_STOPPED), this.tim.outerEmitter.emit(Wt.NOTICE_LONGPOLL_STOPPED)
				}
			}, {
				key: "_onNoticeReceived",
				value: function(e) {
					var t = this.tim,
						n = t.innerEmitter,
						r = t.statusController,
						o = e.data,
						i = !r.getChannelStatus();
					if (n.emit($s.NOTICE_LONGPOLL_REQUEST_ARRIVED, {
						data: Date.now()
					}), o.errorCode !== Cl.REQUEST.SUCCESS) {
						if (o.errorCode === fs.LONG_POLL_KICK_OUT) return n.emit($s.NOTICE_LONGPOLL_KICKED_OUT), zc.log("NotificationController._onNoticeReceived(), longPollingID was kicked"), void this.stopLongPoll();
						zc.log("NotificationController._onNoticeReceived(), error: ".concat(o.errorCode, ", errorInfo: ").concat(o.errorInfo)), n.emit($s.ERROR_DETECTED, {
							code: o.errorCode,
							message: o.errorInfo
						})
					}
					null != e.data.eventArray && 1 != i && this._eachEventArray(e.data.eventArray)
				}
			}, {
				key: "_onNoticeFail",
				value: function(e) {
					this.tim.innerEmitter.emit($s.ERROR_DETECTED, e.error), this.tim.innerEmitter.emit($s.NOTICE_LONGPOLL_REQUEST_NOT_ARRIVED, {
						data: Date.now()
					})
				}
			}, {
				key: "_eachEventArray",
				value: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "poll",
						n = $h("NotificationController._eachEventArray()");
					n.dot("start");
					for (var r = this.tim.innerEmitter, o = null, i = 0, a = e.length; i < a; i++) {
						o = e[i];
						var s = this._confirmCarrierType(o);
						n.dot("type ".concat(s));
						var u = ag(o.event, s, ",");
						switch (n.dot("condition ".concat(u)), u) {
						case "9,1":
							this._updatenoticeSequence(o.C2CMessageArray), r.emit($s.NOTICE_LONGPOLL_NEW_C2C_NOTICE, {
								data: o.C2CMessageArray,
								type: t
							}), n.dot("emit ".concat($s.NOTICE_LONGPOLL_NEW_C2C_NOTICE));
							break;
						case "3,2":
							this._updatenoticeSequence(o.groupMessageArray), r.emit($s.NOTICE_LONGPOLL_NEW_GROUP_MESSAGES, {
								data: o.groupMessageArray
							}), n.dot("emit ".concat($s.NOTICE_LONGPOLL_NEW_GROUP_MESSAGES));
							break;
						case "4,3":
							this._updatenoticeSequence(o.groupTips), r.emit($s.NOTICE_LONGPOLL_NEW_GROUP_TIPS, {
								data: o.groupTips
							}), n.dot("emit ".concat($s.NOTICE_LONGPOLL_NEW_GROUP_TIPS));
							break;
						case "5,3":
							this._updatenoticeSequence(o.groupTips), r.emit($s.NOTICE_LONGPOLL_NEW_GROUP_NOTICE, {
								data: {
									groupSystemNotices: o.groupTips,
									type: t
								}
							}), n.dot("emit ".concat($s.NOTICE_LONGPOLL_NEW_GROUP_NOTICE));
							break;
						case "7,7":
							this._updatenoticeSequence(o.friendListMod), r.emit($s.NOTICE_LONGPOLL_NEW_FRIEND_MESSAGES, {
								data: o.friendListMod
							}), n.dot("emit ".concat($s.NOTICE_LONGPOLL_NEW_FRIEND_MESSAGES));
							break;
						case "8,6":
							this._updatenoticeSequence(o.profileModify), r.emit($s.NOTICE_LONGPOLL_PROFILE_MODIFIED, {
								data: o.profileModify
							}), n.dot("emit ".concat($s.NOTICE_LONGPOLL_PROFILE_MODIFIED));
							break;
						case "10,5":
							if (this._updatenoticeSequence(o.C2CNotifyMessageArray), this._isKickedoutNotice(o.C2CNotifyMessageArray)) return void r.emit($s.NOTICE_LONGPOLL_MUTIPLE_DEVICE_KICKED_OUT);
							zc.warn("NotificationController._eachEventArray() get Event condition : ".concat(u, ", only increase noticeSequence"));
							break;
						case "3,0":
							r.emit($s.NOTICE_LONGPOLL_NEW_GROUP_MESSAGES, {
								data: [o]
							}), n.dot("emit ".concat($s.NOTICE_LONGPOLL_NEW_GROUP_MESSAGES));
							break;
						case "6,0":
							r.emit($s.NOTICE_LONGPOLL_NEW_GROUP_TIPS, {
								data: [o]
							}), n.dot("emit ".concat($s.NOTICE_LONGPOLL_NEW_GROUP_TIPS));
							break;
						default:
							this._updatenoticeSequence(), r.emit($s.ERROR_DETECTED, {
								code: fs.NOTICE_RUNLOOP_UNEXPECTED_CONDITION,
								message: "".concat(hs.NOTICE_RUNLOOP_UNEXPECTED_CONDITION, " : ").concat(u, ", data: ").concat(JSON.stringify(o))
							}), n.dot("".concat($s.ERROR_DETECTED, ":").concat(fs.NOTICE_RUNLOOP_UNEXPECTED_CONDITION))
						}
						n.report()
					}
				}
			}, {
				key: "_confirmCarrierType",
				value: function(e) {
					var t = {
						C2CMessageArray: 1,
						groupMessageArray: 2,
						groupTips: 3,
						messageList: 4,
						C2CNotifyMessageArray: 5,
						profileModify: 6,
						friendListMod: 7
					},
						n = "";
					for (var r in e) if (t.hasOwnProperty(r)) {
						n = r;
						break
					}
					return "" === n ? 0 : t.hasOwnProperty(n) ? t[n] : 0
				}
			}, {
				key: "_isKickedoutNotice",
				value: function(e) {
					return e[0].hasOwnProperty("kickoutMsgNotify") ? 1 : 0
				}
			}, {
				key: "_startSyncMessages",
				value: function(e) {
					1 != this._syncMessagesFinished && this.syncMessage()
				}
			}, {
				key: "syncMessage",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
						r = this.tim,
						o = r.connectionController,
						i = r.innerEmitter;
					this._syncMessagesIsRunning = 1;
					var a = this.createPackage({
						name: "syncMessage",
						action: "query",
						param: {
							cookie: t,
							syncFlag: n
						}
					});
					o.request(a).then(function(t) {
						var n = t.data;
						switch (ag(n.cookie, n.syncFlag)) {
						case "00":
						case "01":
							i.emit($s.ERROR_DETECTED, {
								code: fs.NOTICE_RUNLOOP_OFFSET_LOST,
								message: hs.NOTICE_RUNLOOP_OFFSET_LOST
							});
							break;
						case "10":
						case "11":
							n.eventArray && e._eachEventArray(n.eventArray, "sync"), e._syncNoticeList = e._syncNoticeList.concat(n.messageList), i.emit($s.SYNC_MESSAGE_C2C_PROCESSING, {
								data: n.messageList
							}), e._syncOffset = n.cookie, e.syncMessage(n.cookie, n.syncFlag);
							break;
						case "12":
							n.eventArray && e._eachEventArray(n.eventArray, "sync"), e._syncNoticeList = e._syncNoticeList.concat(n.messageList), i.emit($s.SYNC_MESSAGE_C2C_FINISHED, {
								data: n.messageList
							}), e._syncOffset = n.cookie, e._syncNoticeList = [], e._syncMessagesIsRunning = 0, e._syncMessagesFinished = 1
						}
					}).
					catch (function(t) {
						e._syncMessagesIsRunning = 0, zc.error("NotificationController.syncMessage() failed, error:", JSON.stringify(t))
					})
				}
			}]), t
		}(),
		dg = 1..toFixed,
		mg = Math.floor,
		_g = function(e, t, n) {
			return 0 === t ? n : t % 2 == 1 ? _g(e, t - 1, n * e) : _g(e * e, t / 2, n)
		},
		vg = dg && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !u(function() {
			dg.call({})
		});
	Oe({
		target: "Number",
		proto: 1,
		forced: vg
	}, {
		toFixed: function(e) {
			var t, n, r, o, i = function(e) {
					if ("number" != typeof e && "Number" != d(e)) throw TypeError("Incorrect invocation");
					return +e
				}(this),
				a = oe(e),
				s = [0, 0, 0, 0, 0, 0],
				u = "",
				c = "0",
				l = function(e, t) {
					for (var n = -1, r = t; ++n < 6;) r += e * s[n], s[n] = r % 1e7, r = mg(r / 1e7)
				},
				p = function(e) {
					for (var t = 6, n = 0; --t >= 0;) n += s[t], s[t] = mg(n / e), n = n % e * 1e7
				},
				f = function() {
					for (var e = 6, t = ""; --e >= 0;) if ("" !== t || 0 === e || 0 !== s[e]) {
						var n = String(s[e]);
						t = "" === t ? n : t + sh.call("0", 7 - n.length) + n
					}
					return t
				};
			if (a < 0 || a > 20) throw RangeError("Incorrect fraction digits");
			if (i != i) return "NaN";
			if (i <= -1e21 || i >= 1e21) return String(i);
			if (i < 0 && (u = "-", i = -i), i > 1e-21) if (n = (t = function(e) {
				for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
				for (; n >= 2;) t += 1, n /= 2;
				return t
			}(i * _g(2, 69, 1)) - 69) < 0 ? i * _g(2, -t, 1) : i / _g(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
				for (l(0, n), r = a; r >= 7;) l(1e7, 0), r -= 7;
				for (l(_g(10, r, 1), 0), r = t - 1; r >= 23;) p(1 << 23), r -= 23;
				p(1 << r), l(1, 1), p(2), c = f()
			} else l(0, n), l(1 << -t, 0), c = f() + sh.call("0", a);
			return c = a > 0 ? u + ((o = c.length) <= a ? "0." + sh.call("0", a - o) + c : c.slice(0, o - a) + "." + c.slice(o - a)) : u + c
		}
	});
	var Eg = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this, e)))._initializeListener(), n
			}
			return Gn(t, Sl), Rn(t, [{
				key: "_initializeMembers",
				value: function(e) {
					this.expiredTimeLimit = 300, this.appid = e.appid || "", this.bucketName = e.bucketName || "", this.expiredTimeOut = e.expiredTimeOut || this.expiredTimeLimit, this.region = "ap-shanghai", this.cos = null, this.cosOptions = {
						secretId: e.secretId,
						secretKey: e.secretKey,
						sessionToken: e.sessionToken,
						expiredTime: e.expiredTime
					}, this._initUploaderMethod()
				}
			}, {
				key: "_expiredTimer",
				value: function() {
					var e = this,
						t = setInterval(function() {
							Math.ceil(Date.now() / 1e3) >= e.cosOptions.expiredTime - 20 && (e._isReady = 0, e._getAuthorizationKey(), clearInterval(t))
						}, 1e4)
				}
			}, {
				key: "_initializeListener",
				value: function() {
					this.tim.innerEmitter.on($s.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initialization, this)
				}
			}, {
				key: "_initialization",
				value: function() {
					this._initCOSSDKPlugin(), this.COSSDK ? (this._initializeMembers({}), this._getAuthorizationKey()) : zc.warn("UploadController 没有检测到上传插件，文件上传功能将无法使用")
				}
			}, {
				key: "_getAuthorizationKey",
				value: function() {
					var e = this,
						t = Math.ceil(Date.now() / 1e3),
						n = this.createPackage({
							name: "cosSig",
							action: "query",
							param: {
								duration: this.expiredTimeLimit
							}
						});
					this.tim.connectionController.request(n).then(function(n) {
						n.data.expiredTimeOut = n.data.expiredTime - t, zc.log("UploadController._getAuthorizationKey timeout=".concat(n.data.expiredTimeOut, "s")), e._initializeMembers(n.data), e._expiredTimer(), e._initUploaderMethod()
					}).
					catch (function(e) {
						zc.warn(e)
					})
				}
			}, {
				key: "_initCOSSDKPlugin",
				value: function() {
					var e = Tc ? "cos-wx-sdk" : "cos-js-sdk";
					this.COSSDK = this.tim.getPlugin(e)
				}
			}, {
				key: "_initUploaderMethod",
				value: function() {
					var e = this;
					this.appid && (this.cos = Tc ? new this.COSSDK({
						ForcePathStyle: 1,
						getAuthorization: this._getAuthorization.bind(this)
					}) : new this.COSSDK({
						getAuthorization: this._getAuthorization.bind(this)
					}), this._cosUploadMethod = Tc ?
					function(t, n) {
						e.cos.postObject(t, n)
					} : function(t, n) {
						e.cos.uploadFiles(t, n)
					}, this._IAmReady())
				}
			}, {
				key: "_getAuthorization",
				value: function(e, t) {
					t({
						TmpSecretId: this.cosOptions.secretId,
						TmpSecretKey: this.cosOptions.secretKey,
						XCosSecurityToken: this.cosOptions.sessionToken,
						ExpiredTime: this.cosOptions.expiredTime
					})
				}
			}, {
				key: "_IAmReady",
				value: function() {
					this.triggerReady()
				}
			}, {
				key: "uploadImage",
				value: function(e) {
					if (!e.file) return Ll(new gs({
						code: fs.MESSAGE_IMAGE_SELECT_FILE_FIRST,
						message: hs.MESSAGE_IMAGE_SELECT_FILE_FIRST
					}));
					var t = this._checkImageType(e.file);
					if (1 != t) return t;
					var n = this._checkImageMime(e.file);
					if (1 != n) return n;
					var r = this._checkImageSize(e.file);
					return 1 != r ? r : this.upload(e)
				}
			}, {
				key: "_checkImageType",
				value: function(e) {
					var t = "";
					return t = Tc ? e.tempFiles[0].path.slice(e.tempFiles[0].path.lastIndexOf(".") + 1) : e.files[0].name.slice(e.files[0].name.lastIndexOf(".") + 1), oh.indexOf(t) >= 0 ? 1 : Ll(new gs({
						coe: fs.MESSAGE_IMAGE_TYPES_LIMIT,
						message: hs.MESSAGE_IMAGE_TYPES_LIMIT
					}))
				}
			}, {
				key: "_checkImageMime",
				value: function(e) {
					return 1
				}
			}, {
				key: "_checkImageSize",
				value: function(e) {
					return (Tc ? e.tempFiles[0].size : e.files[0].size) < 20971520 ? 1 : Ll(new gs({
						coe: fs.MESSAGE_IMAGE_SIZE_LIMIT,
						message: "".concat(hs.MESSAGE_IMAGE_SIZE_LIMIT, ": ").concat(20971520, " bytes")
					}))
				}
			}, {
				key: "uploadFile",
				value: function(e) {
					var t = null;
					return e.file ? e.file.files[0].size > 20971520 ? (t = new gs({
						code: fs.MESSAGE_FILE_SIZE_LIMIT,
						message: "".concat(hs.MESSAGE_FILE_SIZE_LIMIT, ": ").concat(20971520, " bytes")
					}), Ll(t)) : this.upload(e) : (t = new gs({
						code: fs.MESSAGE_FILE_SELECT_FILE_FIRST,
						message: hs.MESSAGE_FILE_SELECT_FILE_FIRST
					}), Ll(t))
				}
			}, {
				key: "uploadVideo",
				value: function(e) {
					return e.file ? this.upload(e) : Ll()
				}
			}, {
				key: "uploadSound",
				value: function(e) {
					return e.file ? this.upload(e) : Ll()
				}
			}, {
				key: "upload",
				value: function(e) {
					var t = this;
					zc.time(wl);
					var n = Tc ? e.file : e.file.files[0];
					return this._iniFileObjectMembersForWXMiniApp(n), new Promise(function(r, o) {
						var i = Tc ? t._createCosOptionsWXMiniApp(e) : t._createCosOptionsWeb(e),
							a = t;
						t._cosUploadMethod(i, function(e, i) {
							var s = Object.create(null);
							if (i) {
								if (t._isUploadError(i, e)) return o(i.files[0].error), void zc.warn("UploadController.upload failed, network error:".concat(i.files[0].error.error));
								s.fileName = n.name, s.fileSize = n.size, s.fileType = n.type.slice(n.type.indexOf("/") + 1).toUpperCase(), s.location = Tc ? i.Location : i.files[0].data.Location;
								var u = zc.timeEnd(wl),
									c = a._formatFileSize(n.size),
									l = a._formatSpeed(1e3 * n.size / u);
								return zc.log("UploadController.upload success name=".concat(n.name, ",size=").concat(c, ",time=").concat(u, "ms,speed=").concat(l)), void r(s)
							}
							zc.warn("UploadController.upload failed, error:".concat(e)), o(e)
						})
					})
				}
			}, {
				key: "_isUploadError",
				value: function(e, t) {
					return Tc ? t ? 1 : 0 : null !== e.files[0].error ? 1 : 0
				}
			}, {
				key: "_formatFileSize",
				value: function(e) {
					return e < 1024 ? e + "B" : e < 1048576 ? Math.floor(e / 1024) + "KB" : Math.floor(e / 1048576) + "MB"
				}
			}, {
				key: "_formatSpeed",
				value: function(e) {
					return e <= 1048576 ? (e / 1024).toFixed(1) + "KB/s" : (e / 1048576).toFixed(1) + "MB/s"
				}
			}, {
				key: "_iniFileObjectMembersForWXMiniApp",
				value: function(e) {
					Tc && (e.name = e.name ? e.name : e.tempFilePaths[0].slice(e.tempFilePaths[0].lastIndexOf("/") + 1), e.size = e.tempFiles[0].size, e.type = e.name.slice(e.name.lastIndexOf(".") + 1).toUpperCase())
				}
			}, {
				key: "_createCosOptionsWeb",
				value: function(e) {
					var t = this.tim.context.identifier;
					return {
						files: [{
							Bucket: "".concat(this.bucketName, "-").concat(this.appid),
							Region: this.region,
							Key: "imfiles/".concat(t, "/").concat(e.to, "-").concat(ol(9999999), "-").concat(e.file.files[0].name),
							Body: e.file.files[0]
						}],
						SliceSize: 1048576,
						onProgress: function(t) {
							if ("function" == typeof e.onProgress) try {
								e.onProgress(t.percent)
							} catch (n) {
								zc.warn("onProgress callback error:"), zc.error(n)
							}
						},
						onFileFinish: function(e, t, n) {}
					}
				}
			}, {
				key: "_createCosOptionsWXMiniApp",
				value: function(e) {
					var t = this.tim.context.identifier;
					return {
						Bucket: "".concat(this.bucketName, "-").concat(this.appid),
						Region: this.region,
						Key: "imfiles/".concat(t, "/").concat(e.to, "-").concat(e.file.name),
						FilePath: e.file.tempFiles[0].path,
						onProgress: function(t) {
							if (zc.log(JSON.stringify(t)), "function" == typeof e.onProgress) try {
								e.onProgress(t.percent)
							} catch (n) {
								zc.warn("onProgress callback error:"), zc.error(n)
							}
						}
					}
				}
			}]), t
		}();
	var yg = {
		app_id: "",
		event_id: "",
		api_base: "https://pingtas.qq.com/pingd",
		prefix: "_mta_",
		version: "1.3.9",
		stat_share_app: 0,
		stat_pull_down_fresh: 0,
		stat_reach_bottom: 0,
		stat_param: 1
	};

	function Sg() {
		try {
			var e = "s" + Ig();
			return wx.setStorageSync(yg.prefix + "ssid", e), e
		} catch (t) {}
	}
	function Ig(e) {
		for (var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n = 10; 1 < n; n--) {
			var r = Math.floor(10 * Math.random()),
				o = t[r];
			t[r] = t[n - 1], t[n - 1] = o
		}
		for (n = r = 0; 5 > n; n++) r = 10 * r + t[n];
		return (e || "") + (r + "") + +new Date
	}
	function Tg() {
		try {
			var e = getCurrentPages(),
				t = "/";
			return 0 < e.length && (t = e.pop().__route__), t
		} catch (n) {
			console.log("get current page path error:" + n)
		}
	}
	function Cg() {
		var e, t = {
			dm: "wechat.apps.xx",
			url: encodeURIComponent(Tg() + Dg(Og.Data.pageQuery)),
			pvi: "",
			si: "",
			ty: 0
		};
		return t.pvi = ((e = function() {
			try {
				return wx.getStorageSync(yg.prefix + "auid")
			} catch (t) {}
		}()) || (e = function() {
			try {
				var t = Ig();
				return wx.setStorageSync(yg.prefix + "auid", t), t
			} catch (e) {}
		}(), t.ty = 1), e), t.si = function() {
			var e = function() {
					try {
						return wx.getStorageSync(yg.prefix + "ssid")
					} catch (e) {}
				}();
			return e || (e = Sg()), e
		}(), t
	}
	function Mg() {
		var e = function() {
				var e = wx.getSystemInfoSync();
				return {
					adt: encodeURIComponent(e.model),
					scl: e.pixelRatio,
					scr: e.windowWidth + "x" + e.windowHeight,
					lg: e.language,
					fl: e.version,
					jv: encodeURIComponent(e.system),
					tz: encodeURIComponent(e.platform)
				}
			}();
		return function(e) {
			wx.getNetworkType({
				success: function(t) {
					e(t.networkType)
				}
			})
		}(function(e) {
			try {
				wx.setStorageSync(yg.prefix + "ntdata", e)
			} catch (t) {}
		}), e.ct = wx.getStorageSync(yg.prefix + "ntdata") || "4g", e
	}
	function Ag() {
		var e, t = Og.Data.userInfo,
			n = [];
		for (e in t) t.hasOwnProperty(e) && n.push(e + "=" + t[e]);
		return t = n.join(";"), {
			r2: yg.app_id,
			r4: "wx",
			ext: "v=" + yg.version + (null !== t && "" !== t ? ";ui=" + encodeURIComponent(t) : "")
		}
	}
	function Dg(e) {
		if (!yg.stat_param || !e) return "";
		e = function(e) {
			if (1 > yg.ignore_params.length) return e;
			var t, n = {};
			for (t in e) 0 <= yg.ignore_params.indexOf(t) || (n[t] = e[t]);
			return n
		}(e);
		var t, n = [];
		for (t in e) n.push(t + "=" + e[t]);
		return 0 < n.length ? "?" + n.join("&") : ""
	}
	var Og = {
		App: {
			init: function(e) {
				"appID" in e && (yg.app_id = e.appID), "eventID" in e && (yg.event_id = e.eventID), "statShareApp" in e && (yg.stat_share_app = e.statShareApp), "statPullDownFresh" in e && (yg.stat_pull_down_fresh = e.statPullDownFresh), "statReachBottom" in e && (yg.stat_reach_bottom = e.statReachBottom), "ignoreParams" in e && (yg.ignore_params = e.ignoreParams), "statParam" in e && (yg.stat_param = e.statParam), Sg();
				try {
					"lauchOpts" in e && (Og.Data.lanchInfo = e.lauchOpts, Og.Data.lanchInfo.landing = 1)
				} catch (t) {}
				"autoReport" in e && e.autoReport &&
				function() {
					var e = Page;
					Page = function(t) {
						var n = t.onLoad;
						t.onLoad = function(e) {
							n && n.call(this, e), Og.Data.lastPageQuery = Og.Data.pageQuery, Og.Data.pageQuery = e, Og.Data.lastPageUrl = Og.Data.pageUrl, Og.Data.pageUrl = Tg(), Og.Data.show = 0, Og.Page.init()
						}, e(t)
					}
				}()
			}
		},
		Page: {
			init: function() {
				var e, t = getCurrentPages()[getCurrentPages().length - 1];
				t.onShow && (e = t.onShow, t.onShow = function() {
					if (1 == Og.Data.show) {
						var t = Og.Data.lastPageQuery;
						Og.Data.lastPageQuery = Og.Data.pageQuery, Og.Data.pageQuery = t, Og.Data.lastPageUrl = Og.Data.pageUrl, Og.Data.pageUrl = Tg()
					}
					Og.Data.show = 1, Og.Page.stat(), e.apply(this, arguments)
				}), yg.stat_pull_down_fresh && t.onPullDownRefresh &&
				function() {
					var e = t.onPullDownRefresh;
					t.onPullDownRefresh = function() {
						Og.Event.stat(yg.prefix + "pulldownfresh", {
							url: t.__route__
						}), e.apply(this, arguments)
					}
				}(), yg.stat_reach_bottom && t.onReachBottom &&
				function() {
					var e = t.onReachBottom;
					t.onReachBottom = function() {
						Og.Event.stat(yg.prefix + "reachbottom", {
							url: t.__route__
						}), e.apply(this, arguments)
					}
				}(), yg.stat_share_app && t.onShareAppMessage &&
				function() {
					var e = t.onShareAppMessage;
					t.onShareAppMessage = function() {
						return Og.Event.stat(yg.prefix + "shareapp", {
							url: t.__route__
						}), e.apply(this, arguments)
					}
				}()
			},
			multiStat: function(e, t) {
				if (1 == t) Og.Page.stat(e);
				else {
					var n = getCurrentPages()[getCurrentPages().length - 1];
					n.onShow &&
					function() {
						var t = n.onShow;
						n.onShow = function() {
							Og.Page.stat(e), t.call(this, arguments)
						}
					}()
				}
			},
			stat: function(e) {
				if ("" != yg.app_id) {
					var t = [],
						n = Ag();
					if (e && (n.r2 = e), e = [Cg(), n, Mg()], Og.Data.lanchInfo) {
						e.push({
							ht: Og.Data.lanchInfo.scene
						}), Og.Data.pageQuery && Og.Data.pageQuery._mta_ref_id && e.push({
							rarg: Og.Data.pageQuery._mta_ref_id
						});
						try {
							1 == Og.Data.lanchInfo.landing && (n.ext += ";lp=1", Og.Data.lanchInfo.landing = 0)
						} catch (i) {}
					}
					e.push({
						rdm: "/",
						rurl: 0 >= Og.Data.lastPageUrl.length ? Og.Data.pageUrl + Dg(Og.Data.lastPageQuery) : encodeURIComponent(Og.Data.lastPageUrl + Dg(Og.Data.lastPageQuery))
					}), e.push({
						rand: +new Date
					}), n = 0;
					for (var r = e.length; n < r; n++) for (var o in e[n]) e[n].hasOwnProperty(o) && t.push(o + "=" + (void 0 === e[n][o] ? "" : e[n][o]));
					wx.request({
						url: yg.api_base + "?" + t.join("&").toLowerCase()
					})
				}
			}
		},
		Event: {
			stat: function(e, t) {
				if ("" != yg.event_id) {
					var n = [],
						r = Cg(),
						o = Ag();
					r.dm = "wxapps.click", r.url = e, o.r2 = yg.event_id;
					var i, a = void 0 === t ? {} : t,
						s = [];
					for (i in a) a.hasOwnProperty(i) && s.push(encodeURIComponent(i) + "=" + encodeURIComponent(a[i]));
					for (a = s.join(";"), o.r5 = a, a = 0, o = (r = [r, o, Mg(),
					{
						rand: +new Date
					}]).length; a < o; a++) for (var u in r[a]) r[a].hasOwnProperty(u) && n.push(u + "=" + (void 0 === r[a][u] ? "" : r[a][u]));
					wx.request({
						url: yg.api_base + "?" + n.join("&").toLowerCase()
					})
				}
			}
		},
		Data: {
			userInfo: null,
			lanchInfo: null,
			pageQuery: null,
			lastPageQuery: null,
			pageUrl: "",
			lastPageUrl: "",
			show: 0
		}
	},
		Ng = Og,
		Lg = function() {
			function e() {
				Nn(this, e), this.cache = [], this.MtaWX = null, this._init()
			}
			return Rn(e, [{
				key: "report",
				value: function(e, t) {
					var n = this;
					try {
						Ic ? window.MtaH5 ? (window.MtaH5.clickStat(e, t), this.cache.forEach(function(e) {
							var t = e.name,
								r = e.param;
							window.MtaH5.clickStat(t, r), n.cache.shift()
						})) : this.cache.push({
							name: e,
							param: t
						}) : Tc && (this.MtaWX ? (this.MtaWX.Event.stat(e, t), this.cache.forEach(function(e) {
							var t = e.name,
								r = e.param;
							n.MtaWX.stat(t, r), n.cache.shift()
						})) : this.cache.push({
							name: e,
							param: t
						}))
					} catch (Ug) {}
				}
			}, {
				key: "stat",
				value: function() {
					try {
						Ic && window.MtaH5 ? window.MtaH5.pgv() : Tc && this.MtaWX && this.MtaWX.Page.stat()
					} catch (Ug) {}
				}
			}, {
				key: "_init",
				value: function() {
					try {
						if (Ic) {
							window._mtac = {
								autoReport: 0
							};
							var e = document.createElement("script"),
								t = function() {
									if (Tc) return "https:";
									var e = window.location.protocol;
									return ["http:", "https:"].indexOf(e) < 0 && (e = "http:"), e
								}();
							e.src = "".concat(t, "//pingjs.qq.com/h5/stats.js?v2.0.4"), e.setAttribute("name", "MTAH5"), e.setAttribute("sid", "500690998"), e.setAttribute("cid", "500691017");
							var n = document.getElementsByTagName("script")[0];
							n.parentNode.insertBefore(e, n)
						} else Tc && (this.MtaWX = Ng, this.MtaWX.App.init({
							appID: "500690995",
							eventID: "500691014",
							autoReport: 0,
							statParam: 1
						}))
					} catch (Ug) {}
				}
			}]), e
		}(),
		Rg = function(e) {
			function t(e) {
				var n;
				return Nn(this, t), (n = qn(this, bn(t).call(this, e))).tim = e, n.MTA = new Lg, n._initListener(), n
			}
			return Gn(t, Sl), Rn(t, [{
				key: "_initListener",
				value: function() {
					var e = this,
						t = this.tim.innerEmitter;
					this._sendMessageSuccessRateReport(), this._loginSuccessRateReport(), t.on($s.SDK_READY, function() {
						e.MTA.report("sdkappid", {
							value: e.tim.context.SDKAppID
						}), e.MTA.report("version", {
							value: wg.VERSION
						}), e.MTA.stat()
					})
				}
			}, {
				key: "_sendMessageSuccessRateReport",
				value: function() {
					var e = this,
						t = this.tim.innerEmitter;
					t.on($s.MESSAGE_SENDING, function() {
						e.MTA.report("sendmessage", {
							send: 1
						})
					}), t.on($s.MESSAGE_C2C_SEND_SUCCESS, function() {
						e.MTA.report("sendmessage", {
							success: 1
						})
					}), t.on($s.MESSAGE_C2C_SEND_FAIL, function() {
						e.MTA.report("sendmessage", {
							fail: 1
						})
					}), t.on($s.MESSAGE_GROUP_SEND_SUCCESS, function() {
						e.MTA.report("sendmessage", {
							success: 1
						})
					}), t.on($s.MESSAGE_GROUP_SEND_FAIL, function() {
						e.MTA.report("sendmessage", {
							fail: 1
						})
					})
				}
			}, {
				key: "_loginSuccessRateReport",
				value: function() {
					var e = this,
						t = this.tim.innerEmitter;
					t.on($s.SIGN_LOGIN, function() {
						e.MTA.report("login", {
							login: 1
						})
					}), t.on($s.SIGN_LOGIN_SUCCESS, function() {
						e.MTA.report("login", {
							success: 1
						})
					}), t.on($s.SIGN_LOGIN_FAIL, function() {
						e.MTA.report("login", {
							fail: 1
						})
					})
				}
			}]), t
		}(),
		Pg = function() {
			function e(t) {
				Nn(this, e), yl.mixin(this), this.setLogLevel(0), zc.warn("SDK inWxMiniApp:".concat(Tc, ", SDKAppID:").concat(t.SDKAppID)), zc.warn("UserAgent:".concat(Cc)), this._initOptions(t), this._initMemberVariables(), this._initControllers(), this._initListener()
			}
			return Rn(e, [{
				key: "login",
				value: function(e) {
					return zc.time(Rl), this.loginInfo.identifier = e.identifier || e.userID, this.loginInfo.userSig = e.userSig, this.signController.login(this.loginInfo)
				}
			}, {
				key: "logout",
				value: function() {
					var e = this.signController.logout();
					return this.resetSDK(), e
				}
			}, {
				key: "on",
				value: function(e, t, n) {
					zc.debug("on", "eventName:".concat(e)), this.outerEmitter.on(e, t, n || this)
				}
			}, {
				key: "once",
				value: function(e, t, n) {
					zc.debug("once", "eventName:".concat(e)), this.outerEmitter.once(e, t, n || this)
				}
			}, {
				key: "off",
				value: function(e, t, n, r) {
					zc.debug("off", "eventName:".concat(e)), this.outerEmitter.off(e, t, n, r)
				}
			}, {
				key: "registerPlugin",
				value: function(e) {
					var t = this;
					this.plugins || (this.plugins = {}), Object.keys(e).forEach(function(n) {
						t.plugins[n] = e[n]
					})
				}
			}, {
				key: "getPlugin",
				value: function(e) {
					return this.plugins[e] || void 0
				}
			}, {
				key: "mergeMessageList",
				value: function(e, t) {
					return function(e, t) {
						for (var n = new Map, r = [].concat(Bn(e), Bn(t)), o = 0; o < r.length; o++) {
							var i = r[o];
							n.set(i.ID, i)
						}
						return Bn(n.values())
					}(e, t)
				}
			}, {
				key: "setLogLevel",
				value: function(e) {
					zc.setLevel(e)
				}
			}, {
				key: "getLog",
				value: function() {
					return zc.getLog()
				}
			}, {
				key: "downloadLog",
				value: function() {
					var e = document.createElement("a"),
						t = new Date,
						n = new Blob(this.getLog());
					e.download = "TIM-" + t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + "-" + this.loginInfo.SDKAppID + "-" + this.context.identifier + ".txt", e.href = URL.createObjectURL(n), e.click(), URL.revokeObjectURL(n)
				}
			}, {
				key: "destroy",
				value: function() {
					this.logout(), this.outerEmitter.emit(Wt.SDK_DESTROY, {
						SDKAppID: this.loginInfo.SDKAppID
					})
				}
			}, {
				key: "createTextMessage",
				value: function(e) {
					return this.messageController.createTextMessage(e)
				}
			}, {
				key: "createImageMessage",
				value: function(e) {
					return this.messageController.createImageMessage(e)
				}
			}, {
				key: "createFileMessage",
				value: function(e) {
					return Tc ? Ll({
						code: fs.MESSAGE_FILE_WECHAT_MINIAPP_NOT_SUPPORT,
						message: hs.MESSAGE_FILE_WECHAT_MINIAPP_NOT_SUPPORT
					}) : this.messageController.createFileMessage(e)
				}
			}, {
				key: "createFaceMessage",
				value: function(e) {
					return this.messageController.createFaceMessage(e)
				}
			}, {
				key: "createCustomMessage",
				value: function(e) {
					return this.messageController.createCustomMessage(e)
				}
			}, {
				key: "sendMessage",
				value: function(e) {
					var t = this;
					return e instanceof wh ? new Promise(function(n, r) {
						e.afterOperated(function(e) {
							t.messageController.sendMessageInstance(e).then(function(e) {
								n(e)
							}).
							catch (function(e) {
								r(e)
							})
						})
					}) : Ll(new gs({
						code: fs.MESSAGE_SEND_NEED_MESSAGE_INSTANCE,
						message: hs.MESSAGE_SEND_NEED_MESSAGE_INSTANCE
					}))
				}
			}, {
				key: "resendMessage",
				value: function(e) {
					return this.messageController.resendMessage(e)
				}
			}, {
				key: "getMessageList",
				value: function(e) {
					return this.messageController.getMessageList(e)
				}
			}, {
				key: "setMessageRead",
				value: function(e) {
					return this.messageController.setMessageRead(e)
				}
			}, {
				key: "uploadImage",
				value: function(e) {}
			}, {
				key: "getConversationList",
				value: function() {
					return this.conversationController.getConversationList()
				}
			}, {
				key: "getConversationProfile",
				value: function(e) {
					return this.conversationController.getConversationProfile(e)
				}
			}, {
				key: "deleteConversation",
				value: function(e) {
					return this.conversationController.deleteConversation(e)
				}
			}, {
				key: "getPendencyReport",
				value: function(e) {
					return new Promise
				}
			}, {
				key: "getMyProfile",
				value: function() {
					return this.userController.getMyProfile()
				}
			}, {
				key: "getUserProfile",
				value: function(e) {
					return this.userController.getUserProfile(e)
				}
			}, {
				key: "updateMyProfile",
				value: function(e) {
					return this.userController.updateMyProfile(e)
				}
			}, {
				key: "applyAddFriend",
				value: function(e) {
					return this.userController.applyAddFriend(e)
				}
			}, {
				key: "getPendency",
				value: function(e) {
					return this.userController.getPendency(e)
				}
			}, {
				key: "deletePendency",
				value: function(e) {
					return this.userController.deletePendency(e)
				}
			}, {
				key: "replyPendency",
				value: function(e) {
					return this.userController.replyPendency(e)
				}
			}, {
				key: "getFriendList",
				value: function() {
					return this.userController.getFriendList()
				}
			}, {
				key: "deleteFriend",
				value: function(e) {
					return this.userController.deleteFriend(e)
				}
			}, {
				key: "getBlacklist",
				value: function() {
					return this.userController.getBlacklist()
				}
			}, {
				key: "addToBlacklist",
				value: function(e) {
					return this.userController.addBlacklist(e)
				}
			}, {
				key: "removeFromBlacklist",
				value: function(e) {
					return this.userController.deleteBlacklist(e)
				}
			}, {
				key: "getGroupProfileAdvance",
				value: function(e) {
					return this.groupController.getGroupProfileAdvance(e)
				}
			}, {
				key: "getGroupList",
				value: function() {
					return this.groupController.getGroupList()
				}
			}, {
				key: "getGroupProfile",
				value: function(e) {
					return this.groupController.getGroupProfile(e)
				}
			}, {
				key: "createGroup",
				value: function(e) {
					return this.groupController.createGroup(e)
				}
			}, {
				key: "dismissGroup",
				value: function(e) {
					return this.groupController.dismissGroup(e)
				}
			}, {
				key: "updateGroupProfile",
				value: function(e) {
					return this.groupController.updateGroupProfile(e)
				}
			}, {
				key: "joinGroup",
				value: function(e) {
					return this.groupController.joinGroup(e)
				}
			}, {
				key: "quitGroup",
				value: function(e) {
					return this.groupController.quitGroup(e)
				}
			}, {
				key: "searchGroupByID",
				value: function(e) {
					return this.groupController.searchGroupByID(e)
				}
			}, {
				key: "changeGroupOwner",
				value: function(e) {
					return this.groupController.changeGroupOwner(e)
				}
			}, {
				key: "handleGroupApplication",
				value: function(e) {
					return this.groupController.handleGroupApplication(e)
				}
			}, {
				key: "setMessageRemindType",
				value: function(e) {
					return this.groupController.setMessageRemindType(e)
				}
			}, {
				key: "getGroupMemberList",
				value: function(e) {
					return this.groupController.getGroupMemberList(e)
				}
			}, {
				key: "addGroupMember",
				value: function(e) {
					return this.groupController.addGroupMember(e)
				}
			}, {
				key: "deleteGroupMember",
				value: function(e) {
					return this.groupController.deleteGroupMember(e)
				}
			}, {
				key: "setGroupMemberMuteTime",
				value: function(e) {
					return this.groupController.setGroupMemberMuteTime(e)
				}
			}, {
				key: "setGroupMemberRole",
				value: function(e) {
					return this.groupController.setGroupMemberRole(e)
				}
			}, {
				key: "setGroupMemberNameCard",
				value: function(e) {
					return this.groupController.setGroupMemberNameCard(e)
				}
			}, {
				key: "setGroupMemberCustomField",
				value: function(e) {
					return this.groupController.setGroupMemberCustomField(e)
				}
			}, {
				key: "deleteGroupSystemNotice",
				value: function(e) {
					return this.groupController.deleteGroupSystemNotice(e)
				}
			}, {
				key: "_initOptions",
				value: function(e) {
					this.plugins = {}, this.loginInfo = {
						SDKAppID: e.SDKAppID || null,
						accountType: ol(),
						identifier: null,
						userSig: null
					};
					var t = hn;
					this.options = {
						runLoopNetType: e.runLoopNetType || t.XHR,
						enablePointer: e.enablePointer || 0
					}
				}
			}, {
				key: "_initMemberVariables",
				value: function() {
					this.context = null, this.innerEmitter = new pg, this.outerEmitter = new pg, Ol(this.outerEmitter), this.packageConfig = new hg(this), this.storage = new lg(this), this.outerEmitter._emit = this.outerEmitter.emit, this.outerEmitter.emit = function(e, t) {
						var n = arguments[0],
							r = [n,
							{
								name: arguments[0],
								data: arguments[1]
							}];
						zc.debug("emit ".concat(n), r[1]), this.outerEmitter._emit.apply(this.outerEmitter, r)
					}.bind(this)
				}
			}, {
				key: "_initControllers",
				value: function() {
					this.exceptionController = new rh(this), this.connectionController = new $f(this), this.contextController = new Ml(this), this.signController = new Ul(this), this.messageController = new Zh(this), this.conversationController = new Bh(this), this.userController = new gh(this), this.groupController = new og(this), this.notificationController = new gg(this), this.statusController = new ug(this), this.uploadController = new Eg(this), this.reporterController = new Rg(this), this._initReadyListener()
				}
			}, {
				key: "_initListener",
				value: function() {
					this.innerEmitter.on($s.NOTICE_LONGPOLL_LONG_RECONNECT, this._onNoticeChannelReconnectedAfterLongTime, this)
				}
			}, {
				key: "_initReadyListener",
				value: function() {
					for (var e = this, t = this.readyList, n = 0, r = t.length; n < r; n++) this[t[n]].ready(function() {
						return e._readyHandle()
					})
				}
			}, {
				key: "_onNoticeChannelReconnectedAfterLongTime",
				value: function(e) {
					zc.log("reconnect after long time...", e), this.notificationController.stopLongPoll(), this.resetSDK(), this.login(this.loginInfo)
				}
			}, {
				key: "resetSDK",
				value: function() {
					var e = this;
					this.initList.forEach(function(t) {
						e[t].reset && e[t].reset()
					}), this.storage.reset(), Jh.reset(), this.resetReady(), this._initReadyListener(), this.outerEmitter.emit(Wt.SDK_NOT_READY)
				}
			}, {
				key: "_readyHandle",
				value: function() {
					for (var e = this.readyList, t = 1, n = 0, r = e.length; n < r; n++) if (!this[e[n]].isReady) {
						t = 0;
						break
					}
					t && (zc.warn("SDK is ready. cost=".concat(zc.timeEnd(Rl), "ms")), this.triggerReady(), this.innerEmitter.emit($s.SDK_READY), this.outerEmitter.emit(Wt.SDK_READY))
				}
			}]), e
		}();
	Pg.prototype.readyList = ["conversationController"], Pg.prototype.initList = ["exceptionController", "connectionController", "signController", "contextController", "messageController", "conversationController", "userController", "groupController", "notificationController"];
	var kg = {
		login: "login",
		on: "on",
		off: "off",
		ready: "ready",
		setLogLevel: "setLogLevel",
		joinGroup: "joinGroup",
		registerPlugin: "registerPlugin"
	};

	function Gg(e, t, n) {
		if (e || void 0 !== kg[t]) return 1;
		n.innerEmitter.emit($s.ERROR_DETECTED, new gs({
			code: fs.SDK_IS_NOT_READY,
			message: "".concat(hs.SDK_IS_NOT_READY, " ").concat(t)
		}))
	}
	var bg = {},
		wg = {};
	return wg.create = function(e) {
		if (e.SDKAppID && bg[e.SDKAppID]) return bg[e.SDKAppID];
		zc.log("TIM.create");
		var t = new Pg(e);
		t.on(Wt.SDK_DESTROY, function(e) {
			bg[e.data.SDKAppID] = null, delete bg[e.data.SDKAppID]
		});
		var n = function(e) {
				var t = Object.create(null);
				return Object.keys(Tr).forEach(function(n) {
					if (e[n]) {
						var r = Tr[n],
							o = new Hn;
						t[r] = function() {
							var t = Array.from(arguments);
							return o.use(function(t, r) {
								if (Gg(e.isReady(), n, e)) return r()
							}).use(function(e, t) {
								if (1 == yr(e, Ir[n], r)) return t()
							}).use(function(t, r) {
								return e[n].apply(e, t)
							}), o.run(t)
						}
					}
				}), t
			}(t);
		return bg[e.SDKAppID] = n, zc.log("TIM.create ok"), n
	}, wg.TYPES = yn, wg.EVENT = Wt, wg.VERSION = "2.0.8", zc.log("TIM.VERSION: ".concat(wg.VERSION)), wg
});