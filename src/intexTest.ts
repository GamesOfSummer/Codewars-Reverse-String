import { solution } from './intex';
import { strict as assert } from 'assert';


describe('Fxn', function () {
    describe('#summation()', function () {

        assert.equal(solution('world'), 'dlrow')
        assert.equal(solution('hello'), 'olleh')
        assert.equal(solution(''), '')
        assert.equal(solution('h'), 'h')


    });
});


