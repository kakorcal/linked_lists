function Node(val, next=null){
  this.val = val;
  this.next = next;
}

function LinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.clear = function(){
  this.head = null;
  this.tail = null;
  this.length = 0;
};

LinkedList.prototype.push = function(val){

};

LinkedList.prototype.pop = function(){

};

LinkedList.prototype.unshift = function(val){

};

LinkedList.prototype.shift = function(){

};

LinkedList.prototype.get = function(index){

};

LinkedList.prototype.set = function(index, val){

};

LinkedList.prototype.remove = function(index){

};

LinkedList.prototype.reverse = function(){

};

LinkedList.prototype.getNodeAt = function(index){

};

module.exports = LinkedList;