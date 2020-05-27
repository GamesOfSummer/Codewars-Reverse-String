"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intex_1 = require("./intex");
var assert_1 = require("assert");
describe('Fxn', function () {
    describe('#summation()', function () {
        assert_1.strict.equal(intex_1.solution('world'), 'dlrow');
        assert_1.strict.equal(intex_1.solution('hello'), 'olleh');
        assert_1.strict.equal(intex_1.solution(''), '');
        assert_1.strict.equal(intex_1.solution('h'), 'h');
    });
});
//# sourceMappingURL=intexTest.js.map