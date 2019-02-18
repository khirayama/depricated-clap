// tslint:disable:no-string-literal
import * as assert from 'power-assert';

import { Item } from 'utils/document/Item';

let item: Item | null = null;

describe('Item', () => {
  beforeEach(() => {
    item = new Item();
  });

  describe('indent', () => {
    it('1 time', () => {
      assert.equal(item['depth'], 0);
      item.indent();
      assert.equal(item['depth'], 1);
    });

    it('3 times', () => {
      assert.equal(item['depth'], 0);
      item.indent();
      item.indent();
      item.indent();
      assert.equal(item['depth'], 3);
    });

    it('8 times', () => {
      assert.equal(item['depth'], 0);
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      assert.equal(item['depth'], 8);
    });

    it('10 times', () => {
      assert.equal(item['depth'], 0);
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      item.indent();
      assert.equal(item['depth'], 8);
    });
  });

  describe('unindent', () => {
    it('1 time from 0', () => {
      assert.equal(item['depth'], 0);
      item.unindent();
      assert.equal(item['depth'], 0);
    });

    it('1 time', () => {
      assert.equal(item['depth'], 0);
      item.indent();
      assert.equal(item['depth'], 1);
      item.unindent();
      assert.equal(item['depth'], 0);
    });
  });
});
