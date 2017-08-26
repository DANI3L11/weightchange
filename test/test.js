
const expect = require('mocha').expect
const conversorLibras = require('..')

describe('#conversorLibras', function () {

	it('Convierte a libras', function () {
		const result = conversorLibras(2)
		expect(result).to.equal(4.4)
	})

	it('Convierte a kilos', function () {
		
	})
})