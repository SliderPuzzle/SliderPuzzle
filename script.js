var tileArray2 = ["https://bit.ly/3qadZ74","https://bit.ly/2XqAR5B","https://bit.ly/3hYwjx3",
                 "https://bit.ly/38urlET", "https://bit.ly/2LhXp68" ,"https://bit.ly/3sbSKmS",
                 "https://bit.ly/3q7bd27" , "https://bit.ly/3nwr9cA", "https://bit.ly/39mlalt"]
//var differentTile = tileArray2;
var i = 0;
/*function differentPic(){
  if(i == 0){
    differentTile = tileArray2;
     i=1;
  }
  else{
      i=0;
    differentTile = tileArray;
  }
  randomTiles();
}*/
var counter; // number of counts taken to win
function randomTiles() {// gets tiles arranged in a random order
  var tileIndex = [1,2,3,4,5,6,7,8,9]// array to choose a random index from

 for (var i = 1; i <10 ; i++ ){// for loop to randomly assign tileIndex to each image
   var randArrayIndex = Math.floor(Math.random() * (9-i)) ;    //get a random array index from tileIndex
   var randDiv =tileIndex[randArrayIndex];                    // set the random index to the random div
   tileIndex[randArrayIndex] = tileIndex[0];                // changes the value of elmt at randArrayIndex to elmt at index 0             
   tileIndex.shift();                                        // deletes elmt at index 0 and shifts the array(changes length)
   document.getElementById(randDiv).src = tileArray2[i-1]; // assigns a random tile index to each tile
  counter = 0;
  }
}
function swapTiles(){// function to swap the two selected tiles
  counter+=1;
  var multichecked = false ; //more than 3 checked
  var checks = document.getElementsByName('check'); // gets all the checkbox variables
  var lastNum;// the index i after the firstCheck
	for(var i=0; i<checks.length; i++){// gets the value of first checked box
			if(checks[i].checked==true){
          var firstCheck = checks[i].value;
            lastNum=i+1;
            break;
            }
          }
  checks[lastNum-1].checked=false;
  for(var i = lastNum; i<checks.length;i++ ){// gets the value of second checked box
      if(checks[i].checked==true){
          var secondCheck = checks[i].value;
          lastNum=i+1;
          break;
            }
          }
    checks[lastNum-1].checked=false;
  for(var i=lastNum ; i<checks.length; i++){
    if(checks[i].checked==true){
      multichecked = true;
      break;         
    }
  }
  if(multichecked==true){
    alert("Please only check 2 boxes.")
    uncheckAll(lastNum , checks);
  }
  else{
  var tempCheck = document.getElementById(parseInt(firstCheck)).src;// sets a temporary check for firstcheck val
  document.getElementById(parseInt(firstCheck)).src = document.getElementById(parseInt(secondCheck)).src;//makes first check=second check
  document.getElementById(parseInt(secondCheck)).src = tempCheck;  // makes second check= temp check(original first check)
  
  winner();
  }
}
function uncheckAll(lastNum, checks){
  for(i=lastNum; i<checks.length;i++){
    if(checks[i].checked==true){
      checks[i].checked=false;
    }
  }
}
function winner(){// checks if it all tiles are placed correctly
  if(document.getElementById("1").src == tileArray2[8]){
    if(document.getElementById("2").src == tileArray2[7]){
      if(document.getElementById("3").src == tileArray2[6]){
        if(document.getElementById("4").src == tileArray2[5]){
          if(document.getElementById("5").src == tileArray2[4]){
            if(document.getElementById("6").src == tileArray2[3]){
              if(document.getElementById("7").src == tileArray2[2]){
                if(document.getElementById("8").src == tileArray2[1]){
                  if(document.getElementById("9").src == tileArray2[0]){
                      alert("You win! You completed the puzzle in "+counter+" swaps.");

                  }
            }
            }
          }
            
          }
        }
      }
    }
    
  }
}

