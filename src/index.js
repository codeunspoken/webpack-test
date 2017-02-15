var messages = require("./messages");
//window.onload = function () {
//    'use strict';

    var app = document.getElementById("app");
    app.innerHTML = "message: " + messages.msg;

    if (module.hot){
        module.hot.accept();
    }
//};
//
