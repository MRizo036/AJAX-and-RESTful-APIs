/*  Project 01_11_02

    Author: Maria De Jesus Rizo
      Date:   9.18.19 

    Filename: script.js
*/

"use strict";
var httpRequest = false;
var entry = "^IXIC";

function getRequestObject(){
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", stopSubmission, false);
        window.addEventListener("load", getQuote, false);
    } 
    else if (form.attachEvent) {
        form.attachEvent("onsubmit", stopSubmission);
        window.attachEvent("onload", getQuote);
    }
}

function stopSubmission(evt){
    alert("stopSubmission()");
    if (evt.preventDefault) {
        evt.preventDefault();
    }
    else {
        evt.returnValue = false;
    }
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", stopSubmission, false);
        window.addEventListener("load", getRequestObject, false);
    } 
    else if (form.attachEvent) {
        form.attachEvent("onsubmit", stopSubmission);
        window.attachEvent("onload", getRequestObject);
    }
    getQuote();
}

function getQuote() {
    alert("getQuote()");
    if (document.getElementsByTagName("input")[0].value) {
        entry = document.getElementsByTagName("input")[0].value;
    }
    if (!httpRequest) {
        httpRequest = getRequestObject();
    }
    httpRequest.abort();
    httpRequest.open("get", "StockCheck.php?t=" + entry, true);
    httpRequest.send(null);

    httpRequest.onreadystatechange = displayData;
}

function displayData(){
    if (httpRequest.readtState === 4 && httpRequest.status === 200){
        var stockResults = httpRequest.responseText;
        console.log(stockResults);
    }
}

if(window.addEventListener){
    window.addEventListener("load", getRequestObject, false);
}else if(window.attachEvent){
    window.attachEvent("onload", getRequestObject);
}