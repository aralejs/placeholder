define(function(require) {

    var expect = require('expect');
    var $ = require('$');
    var placeholder = require('placeholder');
    var input;

    describe('placeholder', function() {

        beforeEach(function() {
            input = $('<input placeholder="placeholder" value="">');
            input.appendTo('body'); 
        });

        afterEach(function() {
            input.remove();
        });

        if ('placeholder' in document.createElement('input')) {
            it('placeholder value', function() {
                expect(input.attr('placeholder')).to.be('placeholder');
                
                expect(input.attr('value')).to.be('');
                expect(input.val()).to.be('');

                placeholder(input);
                expect(input.attr('value')).to.be('');
                expect(input.val()).to.be('');

                input.focus();
                expect(input.attr('value')).to.be('');
                expect(input.val()).to.be('');
            });

            it('placeholder multible', function() {
                placeholder(input);
                expect(input.attr('value')).to.be('');
                expect(input.val()).to.be('');

                input.attr('placeholder', '再次更换');        
                placeholder(input);
                expect(input.attr('value')).to.be('');
                expect(input.val()).to.be('');
            });
        } else {
            it('placeholder value', function() {
                expect(input.attr('placeholder')).to.be('placeholder');
                
                expect(input.attr('value')).to.be('');
                expect(input.val()).to.be('');

                placeholder(input);
                expect(input.attr('value')).to.be('placeholder');
                expect(input.val()).to.be('');

                input.focus();
                expect(input.attr('value')).to.be('');
                expect(input.val()).to.be('');            
            });

            it('placeholder multible', function() {
                placeholder(input);
                expect(input.attr('value')).to.be('placeholder');
                expect(input.val()).to.be('');

                input.attr('placeholder', '再次更换');        
                placeholder(input);
                expect(input.attr('value')).to.be('再次更换');
                expect(input.val()).to.be('');
            });
        }

    });

});
