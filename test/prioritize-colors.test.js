'use strict';

var expect = require('chai').expect;
var ansiColors = require('ansi-colors');

var colors = require('..');
var noColor = require('ansi-colors-nestable').noColor;

describe('ansi-color-prioritize', function() {

  describe('prioritize colors', function() {
    it('Should choose valid nestable color function from arg color names',
    function() {
      expect(colors('red', 'blue', 'green')('abc')).to.equal(
        ansiColors.red('abc'));
      expect(colors('', 'blue', 'green')('abc')).to.equal(
        ansiColors.blue('abc'));
      expect(colors('', '', 'green')('abc')).to.equal(
        ansiColors.green('abc'));
      expect(colors('', '', '')('abc')).to.equal(
        'abc');
    });

    it('Should choose valid nestable color function from arg color functions',
    function() {
      var candidate1 = ansiColors.red;
      var candidate2 = ansiColors.blue;
      var candidate3 = ansiColors.green;

      expect(colors(candidate1, candidate2, candidate3)('abc')).to.equal(
        ansiColors.red('abc'));

      candidate1 = null;
      expect(colors(candidate1, candidate2, candidate3)('abc')).to.equal(
        ansiColors.blue('abc'));

      candidate2 = undefined;
      expect(colors(candidate1, candidate2, candidate3)('abc')).to.equal(
        ansiColors.green('abc'));

      candidate3 = 0;
      expect(colors(candidate1, candidate2, candidate3)('abc')).to.equal(
        'abc');
    });
  });

  describe('nestable color', function() {
    it('Should return a nestable color function', function() {
      var color1 = colors('red', 'blue', 'green');
      var color2 = ansiColors.yellow;
      expect(color1('abc', color2('def'), 'ghi')).to.equal(
        ansiColors.red('abc') +
        ansiColors.red(ansiColors.yellow('def')) +
        ansiColors.red('ghi'));
    });
  });

  describe('no color', function() {
    it('Should return a nestable no-color function', function() {
      var color1 = colors('RED', 'BLUE', 'GREEN');
      var color2 = ansiColors.yellow;
      expect(color1('abc', color2('def'), 'ghi')).to.equal(
        'abc' +
        ansiColors.yellow('def') +
        'ghi');
    });
  });

  describe('illegal argument', function() {
    it('Should return noColor when an arg type is neither a string, ' +
    'a function\n\tnor nullish', function() {
      expect(colors(true)).to.equal(noColor);
      expect(colors(false)).to.equal(noColor);
      expect(colors(0)).to.equal(noColor);
      expect(colors(123)).to.equal(noColor);
      expect(colors([])).to.equal(noColor);
      expect(colors({})).to.equal(noColor);
    });

    it('Should return noColor when arg types is neither a string, ' +
    'a function\n\tnor nullish', function() {
      expect(colors(true, false)).to.equal(noColor);
      expect(colors(0, 123)).to.equal(noColor);
      expect(colors([], {})).to.equal(noColor);
    });
  });
});
