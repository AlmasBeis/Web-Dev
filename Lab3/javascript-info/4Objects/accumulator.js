function Accumulator(startingValue){
    this.val = startingValue;
    this.value = function (){
        alert(this.val);
    }
    this.read= function (){
        this.val += +prompt('value?', 0);
    }
}
acc = new Accumulator(5);
acc.value();
acc.read();
acc.value();