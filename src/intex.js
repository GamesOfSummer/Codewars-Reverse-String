"use strict";
exports.__esModule = true;
var str = 'World';
function solution(str) {
    var holder = str.split('').reduce(function (all, x) { return (x + all).toString(); }, '');
    console.log(holder);
    return holder;
}
exports.solution = solution;
