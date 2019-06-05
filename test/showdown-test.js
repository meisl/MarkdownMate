'use strict';

(function () {

const expect = require('expect.js'),
	showdown = require('showdown');
	
if (typeof module !== 'undefined') { // we're in Node
	// see https://github.com/showdownjs/showdown/issues/691
	let dom = new (require('jsdom')).JSDOM();
	let ctor = showdown.Converter;
	showdown.Converter = function (a, b, c, d) {
		const instance = new ctor(a, b, c, d);
		const _makeMarkdown = instance.makeMarkdown.bind(instance);
		instance.makeMarkdown = function (html, doc) {
			return _makeMarkdown(html, doc || dom.window.document);
		};
		return instance;
	}
}


describe('showdown', function () {
	it('should exist as global object', function() {
		expect(showdown).to.be.an(Object);
	});
	describe('.Converter', function () {
		it('should be a function', function () {
			expect(showdown.Converter).to.be.a(Function);
		});
		
		const conv = new showdown.Converter({ noHeaderId: true }),
			makeHtml = conv.makeHtml.bind(conv),
			makeMarkdown = conv.makeMarkdown.bind(conv);
			/*
			function (html) {
				const dom = new jsdom.JSDOM();

				return conv.makeMarkdown(html, dom.window.document);
			};
			*/
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
		
		describe('.makeMarkdown', function () {
			it('should render html headings 1..6', function () {
				expect(makeMarkdown('<h1>Blah</h1>'		)).to.be('# Blah\n\n');
				expect(makeMarkdown('<h2>Blah</h2>'		)).to.be('## Blah\n\n');
				expect(makeMarkdown('<h3>Blah</h3>'		)).to.be('### Blah\n\n');
				expect(makeMarkdown('<h4>Blah</h4>'		)).to.be('#### Blah\n\n');
				expect(makeMarkdown('<h5>Blah</h5>'		)).to.be('##### Blah\n\n');
				expect(makeMarkdown('<h6>Blah</h6>'		)).to.be('###### Blah\n\n');
			});
			
		});

	});
});

}());