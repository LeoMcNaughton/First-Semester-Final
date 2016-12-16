class Cart{
  //What is the first part of every class? Type it below.
constructor (iL, iQ){
  this.itemList = iL;
  this.itemQuantity = iQ;

}


  //Type the instance functions below this comment
additem(i,q){
  this.itemList.push(i);
  this.itemQuantity.push(q);
}


totalCart(){
let total = 0;
for(a=0;a<this.itemList.length;a++){
  total += this.itemList[a].price*this.itemQuantity[a];
}
return total;
}
subCart(days){
let subCart = new Cart([],[]);
for(b=0;b>this.itemList.length;a++){
  if(this.itemList[b].shipping == days){
    subCart.push([b]);
  }
}
return subCart;
}

}
