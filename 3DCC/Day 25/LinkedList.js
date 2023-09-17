class Node{
  data = '';
  nextNode;
  constructor(data,nextNode){
    this.data = data;
    this.nextNode = nextNode;
  }
  next(){
    return this.nextNode;
  }
  setNext(node){
    this.nextNode = node;
  }
}
class LinkedList{
  head;
  tail;
  constructor(node){
    this.head = node;
    this.tail = node;
  }
  getHead(){
    return this.head;
  }
  countItems(){
    let count = 0;
    let node = this.getHead();
    while(node){
      count++;
      node = node.next();
    }
    return count;
  }
  reverse(){
    let reversed = new LinkedList();
    let node = this.getHead();
    while(node){
      let temp = node.next();
      reversed.pushFront(node);
      node = temp;
    }
    return reversed;
  }
  pushEnd(node){
    this.tail.nextNode = node;
    this.tail = node;
  }
  pushFront(node){
    node.nextNode = this.head;
    this.head = node;
  }
  popFront(){
    this.head = this.head.next();
  }
  remove(val){
    let previous = null;
    let node = this.head;
    while(node){
      if(node.data === val){
        if (previous === null){
          node = node.next();
          this.head = node;
        }
        else{
          previous.setNext(node.next());
          node = node.next();
        }
      }
      else{
        previous = node;
        node = node.next();
      }
    }
  }
}
function showLinkedList(link){
  let node = link.getHead();
  while(node){
    console.log(node.data);
    node = node.next();
  }
}
let link = new LinkedList(new Node(5));
link.pushFront(new Node(4));
link.pushFront(new Node(3));
link.pushEnd(new Node(6));
link.pushEnd(new Node(7));
link.pushFront(new Node(2));
link.pushEnd(new Node(8));
showLinkedList(link);
console.log(`the size of link is ${link.countItems()}`);
link.popFront();
console.log('New linkedList after remove first element');
showLinkedList(link);
console.log(`the size of link is ${link.countItems()}`);
console.log('New linkedList after remove 4');
link.remove(4);
showLinkedList(link);
console.log(`the size of link is ${link.countItems()}`);
console.log('Actual link');
showLinkedList(link);
console.log('Reversed link');
showLinkedList(link.reverse());
