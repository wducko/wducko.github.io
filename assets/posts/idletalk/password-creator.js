// 21-09-24

let l_a = [ "q","w","e","r","a","s","d","f","z","x","c","v" ];
let r_a = [ "u","i","o","p","j","k","l","m" ];

let l_n = [ "1","2","3","4" ];
let r_n = [ "7","8","9","0" ];

let tt = [ "^" ];


function Queue() {
  this.data = [];
}
Queue.prototype.enqueue_array = function(arr) {
  arr.forEach(item => {
    this.data.push(item);
  });
}
Queue.prototype.enqueue = function(v) {
  this.data.push(v);
}
Queue.prototype.dequeue = function() {
  return this.data.shift() || null;
}
Queue.prototype.size = function() {
  return this.data.length;
}

const shuffle = (buffer) => { var j, x, i; for (i = buffer.length; i; i -= 1) { j = Math.floor(Math.random() * i); x = buffer[i - 1]; buffer[i - 1] = buffer[j]; buffer[j] = x; } return buffer; }

function password_creator() {
  var l_a_q = new Queue();
  l_a_q.enqueue_array(shuffle(l_a));

  var r_a_q = new Queue();
  r_a_q.enqueue_array(shuffle(r_a));

  var l_n_q = new Queue();
  l_n_q.enqueue_array(shuffle(l_n));

  var r_n_q = new Queue();
  r_n_q.enqueue_array(shuffle(r_n));

  var tt_q = new Queue();
  tt_q.enqueue_array(shuffle(tt));


  return l_a_q.dequeue().toUpperCase()+
  r_a_q.dequeue().toUpperCase()+

  l_n_q.dequeue()+
  r_n_q.dequeue()+

  l_a_q.dequeue()+
  r_a_q.dequeue()+

  l_n_q.dequeue()+
  r_n_q.dequeue()+

  l_a_q.dequeue()+
  r_a_q.dequeue()+

  l_n_q.dequeue()+
  r_n_q.dequeue()+
  
  tt_q.dequeue();
}
