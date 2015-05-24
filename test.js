'use strict';

var expect = require('chai').expect;

describe('test suite', function() {
  before(function() {
    // Require cookies shim
    this.cookies = require('./index.js');
  });

  it('get cookie', function() {
    expect(this.cookies.get('name')).to.be.null;
  });

  it('set cookie', function() {
    expect(this.cookies.set('name', 'value', {expires: 2})).to.be.undefined;
  });

  it('erase cookie', function() {
    expect(this.cookies.erase('name')).to.be.undefined;
  });
});
