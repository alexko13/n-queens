/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

  */

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  var board = new Board({"n":n});
  var i = 0;
  while (i < n){
    var row = Math.floor(Math.random()*n);
    var col = Math.floor(Math.random()*n);
    if (board.get(row)[col] !== 1){
      board.togglePiece(row,col);
      if (board.hasAnyRooksConflicts()){
        board.togglePiece(row,col);
      }else{
        i++; 
      }
    }
  }
  solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({"n":n});

  /*var recurse = function(row){
    if (row === n){
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++){
      board.togglePiece(row, i);
      if (!board.hasColConflictAt(i)){
        recurse(row+1);
      }
      board.togglePiece(row, i);
    }
  };

  recurse(0);*/
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  var solutionCount = 0;
  var board = new Board({'n': n});
  var temp = undefined;

  // for (var i = 0; i < n; i++){
  //   for (var j = 0; j < n; j++){
  //     board.togglePiece(i, j);
  //     if(board.hasAnyQueensConflicts()){
  //       board.togglePiece(i, j);
  //     }
  //   }
  // }

  var recurse = function(row){
    if (solution === undefined){
      if (row === n){
        solutionCount++;
        console.log(solution);
        solution = board.rows().slice();
        console.log(solution);
        //temp = JSON.stringify(board.rows());
        console.log('--------------------------------------------');
        console.log(JSON.stringify(board.rows()));
        return;
      }
      for (var i = 0; i < n; i++){
        board.togglePiece(row, i);

        if(!board.hasAnyQueensConflicts()){
          recurse(row+1);
        }
        board.togglePiece(row, i);
      }
    }
  };
  //solution = JSON.parse(temp);
  recurse(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n': n});

  /*var recurse = function(row){
    if (row === n){
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++){
      board.togglePiece(row, i);

      if(!board.hasAnyQueensConflicts()){
        recurse(row+1);
      }
      board.togglePiece(row, i);
    }
  };

  recurse(0);*/

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
