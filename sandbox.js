 window.findNQueensSolution = function(n) {
  console.log('-----------------------', n);
  var solution = undefined; //fixme
  var board = new Board({'n': n});

  var recurse = function(row){
    if (row === n) {
      solution = board.rows();
      return;
    }
    for (var i = 0; i < n; i++){
      board.togglePiece(row, i);

      if(!board.hasAnyQueensConflicts()){
        recurse(row+1);
      }
      if(!solution) {
        board.togglePiece(row, i);
      }
    }
  };

  recurse(0);
  console.log(JSON.stringify(solution));
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


















//var recurse = function(row){
    /*if (row === n){
      //if (solution === undefined){
        solution = JSON.stringify(board.rows());
      //}
      console.log(JSON.stringify(board.rows()));
      return;
    }

    for (var i = 0; i < n; i++){
      board.togglePiece(row, i);
      if(!board.hasAnyQueensConflicts()){
        recurse(row+1);
      }
      /*else //if (solution === undefined){
        board.togglePiece(row, i);
      //}
    }
  }; */


































  /*
  [1,0,0]             [0 1 0]         [0 0 1]           
  [0,0,0]             [0 0 0]         [0 0 0]
  [0,0,0]             
  
  >recurse(zerothRow)
  >>recurse(1stRow)  
  [1,0,0]       [1 0 0]
  [0,1,0]       [0 0 1]
  [0,0,0]       [0 0 0]

  >>>recurse(nth-1Row)
  [1,0,0]
  [0,1,0]
  [0,0,1]
  SOLUTION

  */

  //for n
  //call rec -> 1,2,3,4 
  /*

  var recurse = function(x,y){
    if (x === n){
      return false;
    }
    
    board.togglePiece(x,y);
    onTheBoard++;

    //should check if conflicts
    //if conflicts toggle and decrement onTheBoard

    if (onTheBoard === n){
      sols.push(JSON.stringify(board.rows()));
      //go back up a level and move a piece
      return true;
    }else{
      return recurse(x+1,y+1);

      call recurse(x, y) for each y that doesnt have conflict


        //if col conflic call recurse(x, y+1) // if there is a next y


      //if there isnt any next y call recurse(x+1, 0);

    }
  }

//recurse on row






/*var recurse = function(x,y,message){
    console.log(message);
    console.log(JSON.stringify(board.rows()));
    if (x === n || y === n || x === -1 || y === -1){
      return false;
    }
    console.log("boop!");
    if (board.get(x)[y] === 1){
      onTheBoard--;  
    }
    board.togglePiece(x,y);
    console.log(JSON.stringify(board.rows()));
    onTheBoard++;

    if (board.hasAnyRooksConflicts()){
      board.togglePiece(x,y);
      console.log(JSON.stringify(board.rows()));
      onTheBoard--;
      return false;
    }

    
    console.log(JSON.stringify(board.rows()));
    console.log("onTheBoard: "+onTheBoard);

    if (onTheBoard < n){
      console.log("INSIDE");
      console.log("    x: " +x+ "  y: "+y);
      return (recurse(x+1, y+1, "first") || recurse(x-1, y-1, "second"))  || (recurse(x+1, y, "third") || recurse(x-1, y+1, "fourth")) || (recurse(x, y-1, "fifth") || recurse(x, y+1, "sixth")) || (recurse(x+1, y-1, "seventh") || recurse(x-1, y+1, "eigth"));
    }


    if (onTheBoard === n){
      var isThere = false;
      sols.forEach(function(element){
        if (JSON.stringify(board.rows()) === element){
          isThere = true;
        }
      });
      if (!isThere){
        sols.push(JSON.stringify(board.rows()));
        console.log(JSON.stringify(sols));
      }
      board.togglePiece(x,y);
      onTheBoard--;
      return false;
    }
  }*/



  /*var recurse = function(row){
    console.log('------------- ' + n);
    if (row === n){
      solutionCount++;
      //sol++
      return;
    }
    for (var i = 0; i < n; i++){
      // if (board.get(row)[i] === 1){

      // }
      board.togglePiece(row, i);
      //console.log(JSON.stringify(sols));
      if (!board.hasColConflictAt(i)){
        /*if(row === n-1) {
          //we have a solution
          sols.push(JSON.stringify(board.rows()));
          console.log(JSON.stringify(board.rows()));
          return;
        } else { 
          //row = row +1;
          // console.log("n: " + n);
          // console.log("row: " + row);
          // console.log("1st else");
          recurse(row+1);
        }
        board.togglePiece(row, i);
      }   
  };
  */






  // while (startingX < n){
  //   while (startingY < n){
  //     for (var i = startingX; i < n; i++){
  //       for (var j = 0; j < n; j++){
  //         if (board.get(i)[j] !== 1){
  //           board.togglePiece(i,j); 
  //           if (board.hasAnyRooksConflicts()){
  //             board.togglePiece(i,j);
  //           }
  //         }
  //       }
  //     }
  //     startingY++;
  //   sols.push(JSON.stringify(board.rows()));
  //   }
  //   startingX++;
  // }
  
  // console.log(sols);

  // solutionCount = sols.length;
  // // add first rook to (0,0)
  //   // find all solutions for initial rook at (0,0)
  //   // log to solution array
  // // add rook to position through (0, n) 
