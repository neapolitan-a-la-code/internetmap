var srequest = require('supertest');
var should = require('should');
var http = require('http');
var expect = require('chai').expect;

//Functional Tests

describe ("When User sees website", function () {

	var neaprequest = srequest('http://neapolitan-a-la-code.github.io/cocaineforeveryone/'); 

		it("website should be return 200 ok", function (done) {
			neaprequest.get('/')
				.expect(200, done);
		});
		it("Page title should be NeapMap", function (done) {
			neaprequest.get('/')
				.expect(/<title>NeapMap<\/title>/, done);
		});
		it("Should have H1 title: Cocaine For Everyone" , function (done) {
			neaprequest.get('/')
				.expect(/<H1>Cocaine For Everyone<\/H1>/, done);
		});
		it("Retail button has right text", function (done) {
		neaprequest.get('/')
				.expect(retailButton.innerHTML).to.equal("Retail");
		});
		it("Wholesale button has right text", function (done) {
		neaprequest.get('/')
				.expect(wholesaleButton.innerHTML).to.equal("Wholesale");
		});
		it("SVG has been made", function (done) {
			this.timeout(5000);
			neaprequest.get('/')
				.expect(/<svg/);
			done();
		});
		it("SVG has child path", function (done) {
			this.timeout(5000);
			neaprequest.get('/')
				.expect(/<path/);
			done();
		});
		it("a form with the id back-button displays", function (done) {
        	neaprequest.get('/')
            	.expect(/<form.*id="back-button"[\s\S]*<\/form>/, done);
    });
/* 
		it("clicks on retailButton...", function retailB(done) {
			neaprequest.get('/')
				.expect(/.../, );
			setTimeout(retailB, 5000);
			done();
		});
		it("clicks on wholesaleButton...", function wholesaleB(done) {
			neaprequest.get('/')
				.expect(/.../);
			setTimeout(wholesaleB, 5000);
			done();
		});
		it("colors should be accurate...", function colours(done) {
			neaprequest.get('/')
				.expect(/<path d=/);
			setTimeout(colours, 5000);
			done();
		});
*/
});


// Unit Tests Below