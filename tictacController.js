angular.module('tictacApp').controller('TictacController', TictacController);

function TictacController(){

  this.grid = new Array(9);

  this.player = 'X';
  this.winner = '';

  this.clickedBoxes = new Array(9);

  this.processClick = function(index) {
    
    // only perform if we never clicked here before and if no winner yet
    if (!this.clickedBoxes[index] && !this.winner) {
      // add to array of clicks
      this.clickedBoxes[index] = this.player;
      
      // check if winnnig combo      
      if (isWinning(this.player, this.clickedBoxes)) {
        this.winner = this.player;
        return
      };

      // if not winning, change the player
      this.player === 'X' ? this.player = 'O' : this.player = 'X';
    }


    function isWinning(player, array){

      function isItHere(id1, id2, id3, player, array) {
        return array[id1] === array[id2] && array[id1] === array[id3]
        && array[id1] === player
      }

      return isItHere(0,1,2, player, array) || isItHere(3,4,5, player, array) || isItHere(6,7,8, player, array) 
            || isItHere(0,3,6, player, array) || isItHere(1,4,7, player, array) || isItHere(2,5,8, player, array)
            || isItHere(0,4,8, player, array) ||  isItHere(2,4,6, player, array);
    }

  } // end this.processClick

} // end TictacController