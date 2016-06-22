const LinkedList = require('../linked_lists.js');
const expect = require('chai').expect;
let list;

describe("Singly Linked List", function() {
  beforeEach(function() {
    list = new LinkedList();
  });

  describe('clear', ()=>{
    it('List should have length 0', ()=>{
      list.clear();
      expect(list.length).to.equal(0);
    });
  });

  describe("push", function() {
    it("adds a value to the end of the list", function() {
      expect(list.length).to.equal(0);
      list.push(5);
      expect(list.length).to.equal(1);
    });

    it("returns self so chaining works", function() {
      expect(list.length).to.equal(0);
      list.push(1).push(2);
      expect(list.length).to.equal(2);
    });

    it("stores the correct values", function() {
      list.push(2).push(4)
      expect(list.pop()).to.equal(4);
      expect(list.length).to.equal(1);
      expect(list.pop()).to.equal(2);
      expect(list.length).to.equal(0);
    })
  });

  describe("pop", function() {
    it("returns undefined when called on an empty list", function() {
      expect(list.pop()).to.equal(undefined);
    });

    it("returns the value at the end of the list", function() {
      list.push(4).push(5).push(6);
      expect(list.length).to.equal(3);
      expect(list.pop()).to.equal(6);
      expect(list.length).to.equal(2);
    });
  });

  xdescribe("unshift", function() {
    it("adds a value to the front of the list", function() {
      list.push(4);
      list.unshift(1);
      expect(list.length).to.equal(2);
      expect(list.pop()).to.equal(4);
      expect(list.length).to.equal(1);
      expect(list.pop()).to.equal(1);
      expect(list.length).to.equal(0);
    });

  });

  xdescribe("shift", function() {
    it("removes a value from the front of the list", function() {
      list.push(4).push(2);
      expect(list.length).to.equal(2);
      expect(list.shift()).to.equal(4);
      expect(list.length).to.equal(1);
      expect(list.shift()).to.equal(2);
      expect(list.length).to.equal(0);
    });
  });

  xdescribe("get", function() {
    it("get a value from the list given an index", function() {
      list.push(0).push(1).push(2).push(3).push(4);
      expect(list.length).to.equal(5);
      expect(list.get(2)).to.equal(2);
      expect(list.get(0)).to.equal(0);
      expect(list.get(5)).to.equal(undefined);
      expect(list.get(4)).to.equal(4);
      expect(list.get(3)).to.equal(3);
    });
  });

  xdescribe("set", function() {
    it("set a value in the list given an index", function() {
      list.push(0).push(1).push(2).push(3).push(4);
      expect(list.length).to.equal(5);
      list.set(4,99);
      expect(list.pop()).to.equal(99);
      expect(list.length).to.equal(4);
      list.set(0, -99);
      expect(list.shift()).to.equal(-99);
      expect(list.length).to.equal(3);
    });
  });

  xdescribe("remove", function() {
    it("removes the first element in a list of size 1", function() {
      list.push(1);
      expect(list.length).to.equal(1);
      expect(list.remove(0)).to.equal(1);
      expect(list.length).to.equal(0);
    });

    it("removes the last element in a list of size 5", function() {
      list.push(1).push(2).push(3).push(4).push(5);
      expect(list.length).to.equal(5);
      expect(list.remove(4)).to.equal(5);
      expect(list.length).to.equal(4);
    });

    it("removes the second element in a list of size 5", function() {
      list.push(1).push(2).push(3).push(4).push(5);
      expect(list.length).to.equal(5);
      expect(list.remove(1)).to.equal(2);
      expect(list.length).to.equal(4);
    });

    it("removes the second to last element in a list of size 5", function() {
      list.push(1).push(2).push(3).push(4).push(5);
      expect(list.length).to.equal(5);
      expect(list.remove(3)).to.equal(4);
      expect(list.length).to.equal(4);
      expect(list.get(0)).to.equal(1);
      expect(list.get(1)).to.equal(2);
      expect(list.get(2)).to.equal(3);
      expect(list.get(3)).to.equal(5);
      expect(list.get(4)).to.equal(undefined);

    });
  });

  xdescribe("reverse", function(){
    it("should reverse the link list", function(){
      list.push(1).push(2).push(3).push(4).push(5);
      expect(list.length).to.equal(5);
      expect(list.reverse().get(1)).to.equal(4);
      list.clear();
      list.push(1).push(2).push(3).push(4).push(5).push(6).push(7);
      expect(list.reverse().get(1)).to.equal(6);      
    });
  });
});