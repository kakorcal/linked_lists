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
  // check if index is valid
  if(!Number.isInteger(index) || index < 0 || index > this.length - 1) return;
  // loop until you reach index
  let currNode = this.head;
  let counter = 0;

  while(counter < index){
      currNode = currNode.next;
      counter++;
  }
  // return node;
  return currNode;
};

LinkedList.prototype.unshift = function(val){
  // add node to the head, return the list
  let node = new Node(val);
  node.next = this.head;
  this.head = node;
  this.length++;
  return this;
};

LinkedList.prototype.shift = function(){
  // remove node from the head, return head value
  // if list is empty, return undefined
  if(!this.length) return;
  let val = this.head.val;
  this.head = this.head.next;
  this.length--;
  return val;
};

LinkedList.prototype.get = function(index){
  // returns the value of the node at index
  // check if valid index
  if(!Number.isInteger(index) || index < 0 || index > this.length - 1) return;
  let currNode = this.head;
  let counter = 0;

  while(counter < index){
    currNode = currNode.next;
    counter++;
  }

  return currNode.val;
};

LinkedList.prototype.set = function(index, val){
  // change value at given index
  let node = this.getNodeAt(index);
  if(!node) return;
  node.val = val;
  // return the list
  return this;
};

LinkedList.prototype.remove = function(index){
  // return the value of the removed node
  let node = this.getNodeAt(index - 1);
  // empty list
  if(!this.length) return;
  // removing head
  if(!node) return this.shift();
  // removing tail
  if(!node.next.next) return this.pop();
  // generic node
  let val = node.next.val;
  node.next = node.next.next;
  this.length--;
  return val;
};

LinkedList.prototype.reverse = function(){
  // return the reversed list
  // empty list
  if(!this.length) return;
  // loop until node before tail
  let currNode = this.head.next;
  let prevNode = this.head;
  this.head.next = null;
  this.tail = this.head;
  while(currNode){
    // create temporary var to store next node
    let next = currNode.next;
    // pointer is now on prevNode
    currNode.next = prevNode;
    // 'increment' the prevNode
    prevNode = currNode;
    // 'increment' the currNode 
    currNode = next;
  }
  this.head = prevNode;
  return this;
};

LinkedList.prototype.reverseRecursive = function(){
  // empty list
  if(!this.length) return;
  let currNode = this.head.next;
  let prevNode = this.head;
  let nextNode = currNode.next;
  this.head.next = null;
  this.tail = this.head;
  // internal recursive function.
  function reverse(prev, curr, next){
    // base case. if next is null, set head to be curr
    if(!next){
      curr.next = prev;
      this.head = curr;
      return this;
    }else{
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
      nextNode = currNode.next;
      return reverse.call(this, prevNode, currNode, nextNode);
    }
  }

  return reverse.call(this, prevNode, currNode, nextNode);
};


// SinglyLinkedList.prototype.reverseRecursivelyUtility = function(current,previous){
//   if(!current.next){
//     this.tail = this.head
//     this.head = current;
//     current.next = previous;
//     return this;
//   }
//   next = current.next
//   current.next = previous;
//   return this.reverseRecursivelyUtility(next,current)
// }

// SinglyLinkedList.prototype.reverseRecursively = function() {
//   if(!this.head) return this;  
//   return this.reverseRecursivelyUtility(this.head,null)
// };

module.exports = LinkedList;