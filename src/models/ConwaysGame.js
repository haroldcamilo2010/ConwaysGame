// Declaration of cell object
var cell = function (x, y, status)  {
	this.x = x;
	this.y = y;
	this.status = status;
	this.nextStatus = this.status;
}

//Return array of neighboring cells
function neighbours(cell,grid,rows,columns){
	var cells = [];
	var neighbourX, neighbourY;
	var tempCell = [];
	for (i = -1; i < 2; i++) {
		for (j = -1; j < 2; j++) {
			//prevent array overflow by sending the pointer to the beginning of the cell or column
			neighbourY = cell.x + j;
			neighbourX = cell.y + i;

			//avoid overflow positive
			neighbourY = (neighbourY > rows)?0: neighbourY;
			neighbourX = (neighbourX > columns)?0: neighbourX;

			//avoid overflow negative
			neighbourY = (neighbourY < 0)?rows: neighbourY;
			neighbourX = (neighbourX < 0)?columns: neighbourX;

			tempCell = grid[neighbourX][neighbourY];
			//avoid being add as a neighbor to array
			(i != 0 || j != 0)? cells.push(tempCell):false;
		}
	}
	return cells;
}

//Apply connway rules and search neighboring cells
function newGeneration(cell, grid, rows, columns){
	let neighboursCells = neighbours(cell,grid,rows,columns);	
	var sum = 0;
	for (i = 0; i < neighboursCells.length ; i++) {
		sum += neighboursCells[i].status;
	}
	//Conway`s Rules
	if (cell.status == 1) {
		if(sum <2 || sum>3)
		    cell.nextStatus = 0;
	}else{
	    if(sum==3)
	      cell.nextStatus = 1;
	}
	return cell;
}



//Export to route
module.exports = {
	
	//Create random cell in a Basic grid
	randomGrid : (rows,columns) =>{
		var status;
		var obj = new Array(rows);
		//Create Basic grid
		for( i=0; i<rows; i++){
			obj[i] = new Array(columns);
		}
		//Set ramdom status to cell
		for (i = 0; i < columns; i++) {
			for (j = 0; j < rows; j++) {
				status =Math.floor(Math.random()*2);
				obj[j][i] = new cell (i, j, status);
			}
		}
		return obj;
	},

	//Calculate and apply new generation
	iterations : (grid) =>{
		const rows = grid[0].length-1;
		const columns = grid.length-1;

		//calculate the new grid without update the principal state
		for (k = 0; k <= columns; k++) {
			for (l = 0; l <= rows ; l++) {
				grid[k][l] = newGeneration(grid[k][l], grid, rows, columns);
			}
		}
		//change state to all grid
		for (m = 0; m <= rows; m++) {
			for (n = 0; n <= columns ; n++) {
				grid[n][m].status = grid[n][m].nextStatus; 
			}
		}
		return grid;
	},

	//Compare two arrays
	compareArray: (array1, array2) =>{
		if(array1[0].length == array2[0].length && array1.length == array2.length){
			for (i = 0; i <= array1[0].length-1; i++) {
				for (j = 0; j <= array1.length-1; j++) {
					if(array1[j][i].status != array2[j][i].status || array1[j][i].nextStatus != array2[j][i].nextStatus || array1[j][i].x != array2[j][i].x || array1[j][i].y != array2[j][i].y){
						return false;
					}
				}
			}	
			return true;		
		}else{
			return false;
		}
	}
}


