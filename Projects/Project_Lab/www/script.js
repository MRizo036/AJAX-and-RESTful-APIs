/*  Project 01_11_02

    Author: Maria De Jesus Rizo
    Date:   9.18.19 

    Filename: script.js
*/

"use strict";
var httpRequest = false;
var entry = "IXIC";

function getRequestObject(){
    try {
        httpRequest = new XMLHttpRequest();
    }
    catch (requestError) {
        return false;
    }
    alert(httpRequest);
    return httpRequest;
}