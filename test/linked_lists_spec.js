const LinkedList = require('../linked_lists.js');
const expect = require('chai').expect;
let list;

describe('Singly Linked List', ()=>{
  beforeEach(()=>{
    list = new LinkedList();
  });

  describe('clear', ()=>{
    it('List should have length 0', ()=>{
      list.clear();
      expect(list.length).to.equal(0);
    });
  });
});