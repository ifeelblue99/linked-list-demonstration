/*
linked list demonstration
*/

// node object
function Node(data, next=null){
  this.data = data
  this.next = next 
}


//linked list object
function LinkedList(){
  this.head = null
  this.size = 0
  
  //methodes
  //head
  this.insertHead = function(data){
    this.head = new Node(data, this.head)
    this.size++
  }
  //last
  this.insertLast = function(data){
    let lastNode = new Node(data)
    
    let current
    if (!this.head) {
      this.head = lastNode
    }else{
      current = this.head
      while(current.next){
        current = current.next
      }
      current.next = lastNode
    }
    this.size++
  }
  //insert at index
  this.insertAt = function(data, index){
    if(index<0||index>this.size) return
    
    if(index == 0){
      this.insertHead(data)
      return
    }
    
    const node = new Node(data);
    
    let current, prev, count = 0;
    current = this.head
    
    while(count<index){
      prev = current
      current = current.next
      count++
    }
    
    node.next = current
    prev.next = node
    
    this.size++
  }
  //print
  this.printNodes = function(){
    let current = this.head
    
    let nodes = []
    while(current){
      nodes.push(current)
      current = current.next
    }
    
    return nodes
  }
  //clear
  this.clearList = function() {
    this.head = null;
    this.size = 0;
    return this
  }
}

linkedList = new LinkedList()
linkedList.insertHead(30)
linkedList.insertAt("insert at 2", 1)
linkedList.insertLast(20)
linkedList.insertHead(10)
linkedList.insertLast("last")

console.log("--print-->",linkedList.printNodes());
