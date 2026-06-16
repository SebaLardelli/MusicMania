"use strict";

JuegoSonidos.reanudarContexto = function (ctx) {
    if (ctx && ctx.state === "suspended" && typeof ctx.resume === "function") {
        ctx.resume();
    }
};
