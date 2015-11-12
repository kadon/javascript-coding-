/*
 * Tower of Hanoi
 * From Wikipedia, the free encyclopedia https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *   The Tower of Hanoi (also called the Tower of Brahma or Lucas' Tower,[1] and sometimes pluralized) 
 *   is a mathematical game or puzzle. It consists of three rods, and a number of disks of different sizes 
 *   which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of 
 *   size on one rod, the smallest at the top, thus making a conical shape.
 *
 *   The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
 *
 *   1 Only one disk can be moved at a time.
 *   2 Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack 
 *     i.e. a disk can only be moved if it is the uppermost disk on a stack.
 *   3 No disk may be placed on top of a smaller disk.
 *  
 *   With three disks, the puzzle can be solved in seven moves. The minimum number of moves required to solve a 
 *   Tower of Hanoi puzzle is (2^n - 1), where n is the number of disks.
 * */

var tower = [3,2,1];

function printTower(tower){
  for(var i=tower.length-1; i>=0; i-- ){
    if(tower[i]){
      console.log("(" + i +") -> " + tower[i]);
    }
  }
}

function buildDiscPosition(number_of_discs, disc){
  var disc_character          = "_",
      tower_character         = "|",
      max_length              = (number_of_discs * 2),
      spaces_before_disc      = number_of_discs - disc,
      number_disc_characters  = disc * 2,
      i                       = 0,
      str                     = "";
      
  while(i<max_length + 1){ //plus 1 because the pipe | character that we add
    if( (max_length/2) === i  ){
      str += tower_character;
      i++;
      continue;
    }
    if(i < spaces_before_disc ){
      str += " ";
      i++;
      continue;
    }

    if( i <= (spaces_before_disc + number_disc_characters)){
      str += disc_character;
      i++;
      continue;
    }

    str += " ";
    i++;
  }

  return str;
}

console.log(buildDiscPosition(4,1) + "    " + buildDiscPosition(4, 0) + "    " + buildDiscPosition(4, 0));
//     _|_ 
//    __|__
//   ___|___
