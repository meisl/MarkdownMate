'use strict';

(function () {

const expect = require('expect.js'),
	showdown = require('showdown');


describe('showdown', function () {
	it('should exist as global object', function() {
		expect(showdown).to.be.an(Object);
	});
	describe('.Converter', function () {
		it('should be a function', function () {
			expect(showdown.Converter).to.be.a(Function);
		});
		const conv = new showdown.Converter({ noHeaderId: true }),
			makeHtml = conv.makeHtml.bind(conv);
		describe('.makeHtml', function () {
			it('should render md headings 1..6', function () {
				expect(makeHtml('# Blah'		)).to.be('<h1>Blah</h1>');
				expect(makeHtml('## Blah'		)).to.be('<h2>Blah</h2>');
				expect(makeHtml('### Blah'		)).to.be('<h3>Blah</h3>');
				expect(makeHtml('#### Blah'		)).to.be('<h4>Blah</h4>');
				expect(makeHtml('##### Blah'	)).to.be('<h5>Blah</h5>');
				expect(makeHtml('###### Blah'	)).to.be('<h6>Blah</h6>');
				expect(makeHtml('####### Blah'	)).to.be('<h6># Blah</h6>');
			});
			
		});

	});
});

}());