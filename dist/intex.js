"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = 'World';
function solution(str) {
    return str.split('').reduce(function (all, x) { return x + all; });
}
exports.solution = solution;
//# sourceMappingURL=intex.js.map