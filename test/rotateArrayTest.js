var rotateArray = require("./../src/rotateArray"),
    assert = require('assert');

describe(__filename, function(){

  describe("When there is only one element within the array",function(){
    describe("And we do not pass any argument", function(){
      it("Should not have changes", function(){
        assert.deepEqual([1].rotate(), [1]);
      });
    });

    describe("And we pass argument 0", function(){
      it("Should not have changes", function(){
        assert.deepEqual([1].rotate(0), [1]);
      });
    });
  });

  describe("When there is more than one element", function(){
    describe("And we revert the last element", function(){
      it("Should rotate the las element to the right", function(){
        assert.deepEqual([1,2].rotate(1), [2,1]);
      });
    });

    describe("And we revert the last 3 elements", function(){
      it("Should rotate the las 3 element to the right", function(){
        assert.deepEqual([1,2,3,4,5,6,7].rotate(3), [5,6,7,1,2,3,4]);
      });
    });
  });
});
