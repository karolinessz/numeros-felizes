const assert = require('chai').assert
//const sayHello = require('../src/index').sayHello
const numFeliz = require('../src/index')
//const num = require('../src/index')

describe('números felizes', function() {
    it('deve retornar "é um número feliz" quando for 7', function() {
        assert.equal(numFeliz(7), 'é um número feliz')
    })
    it('deve retornar "é um número triste" quando for 0', function() {
        assert.equal(numFeliz(0), 'é um número triste')
    })
    it('deve retornar "não é um número" quando for "a"', function() {
        assert.equal(numFeliz("a"), 'não é um número')
    })
})