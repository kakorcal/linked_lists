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
  // add node to the end of the list
  let node = new Node(val);
  // if list is empty, head and tail are equal
  if(!this.head){
    this.head = node;
    this.tail = this.head;
  }else{
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
  return this;
};

LinkedList.prototype.pop = function(){
  // return the node that has been popped off
  // remove node at the end of the list
  // if list is empty, return undefined
  if(!this.head) return;
  // set current node to head
  let currNode = this.head;
  let val = this.tail.val;
  let counter = 1;
  while(counter < this.length - 1){
    // before tail
    currNode = currNode.next;
    counter++;
  }
  // set tail to be currNode
  this.tail = currNode;
  this.tail.next = null;
  this.length--;
  return val;
};

LinkedList.prototype.getNodeAt = function(index){

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

module.exports = LinkedList;