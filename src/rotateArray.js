/*
 * Rotate Array
 * Rotate an array of N elements to the right by K steps,
 * For example, with N = 7 and K = 3 the array [1,2,3,4,5,6,7]
 * is rotated to [5,6,7,1,2,3,4]
 *
 * Use example: [1,2,3,4,5,6,7].rotate(3) returns [5,6,7,1,2,3,4]
 * Also we can use [1,2,3].reverse(...)
 *
 * */


Array.prototype.reverse = function(left, right){
  left  = (left || left === 0) ? left : 0;
  right = (right || right === 0) ? right : this.length-1;

  if(left < 0 || right >= this.length){
    console.log("Error!");
    return this;
  }

  while( left < right ){
    var tmpValue = this[left];
    this[left] = this[right];
    this[right] = tmpValue;
    left++;
    right--;
  }

  return this;
};

Array.prototype.rotate = function (K){
  var N = this.length;

  if( N  < 1 || K < 1 || K > N ){
    return this;
  }
  
  this.reverse(0, N - K - 1);
  this.reverse(N-K, N-1);
  this.reverse();

  return this;

};

module.exports = {};

