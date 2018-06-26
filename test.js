"use strict";
! function(Bt, Xt) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = Bt.document ? Xt(Bt, !0) : function(Gt) {
        if (!Gt.document) throw new Error("jQuery requires a window with a document");
        return Xt(Gt)
    } : Xt(Bt)
}(myFunction())

function myFunction () {
	return "undefined" == typeof window ? this : window, function(Bt, Xt) {

    function Gt(Cr, Pr) {
        var Ar = (Pr = Pr || kn).createElement("script");
        Ar.text = Cr, Pr.head.appendChild(Ar).parentNode.removeChild(Ar)
    }
}

function() {
	window.UI = {};
}();

UI.addChatLine = function(On, Ln, kn, Nn = !0) {};

let UI_addChatLine = UI.addChatLine;
UI.addChatLine = function(Bt, Xt, Gt) {
	console.log(Bt, Xt, Gt)
};

UI.addChatLine(1, 2, 3)

