const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns one line if only one word', () => {
    expect(wrap("Dogs", 3)).to.equal("Dogs");
  });
  it('Does not make a new line in a word', () => {
    expect(wrap("Fixie viral fingerstache dog selfies", 20)).to.equal(`Fixie viral\nfingerstache dog\nselfies`);
  });

});