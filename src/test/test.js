//import function
const conwaysGame = require('../models/ConwaysGame');


// Create array, check the array is not undefined and before check structure
describe('Create Basic Array,use it to generate random array, check structure and length', () =>{

	//create constants
	const rows = 3;
	const cols = 4;
	const randomGrid = conwaysGame.randomGrid(rows,cols);
	it('create Random array(grid) and check length', () =>{
		expect(randomGrid).toBeDefined();//check variable is not undefined
		//check array length
		expect(randomGrid).toHaveLength(rows);
		expect(randomGrid[0]).toHaveLength(cols);
	});
	//Verify that the structure of the cells have the property x, y, status, nextStatus

	for ( i = 0; i < randomGrid.length; i++) {
		for ( j = 0; j < randomGrid[0].length; j++) {
			const cell = randomGrid[i][j];
			
			it('check structure cell', () =>{
				expect(cell).toHaveProperty('x');
				expect(cell).toHaveProperty('y');
				expect(cell).toHaveProperty('status');
				expect(cell).toHaveProperty('nextStatus');
				
			});
		}
	}
});


//import 3 files json to use in the comparation between it
const array1=require('../testBattery/array.json');
const array2=require('../testBattery/array2.json');
const array3=require('../testBattery/array3.json');

describe('Compare two Arrays', () =>{
	it('compare => true', () =>{
		expect(
			conwaysGame.compareArray(array1,array2)
		).toBeTruthy();
	});

	it('compare => false', () =>{
		expect(
			conwaysGame.compareArray(array1,array3)
		).toBeFalsy();
	});
});


//apply conway's rule and compare, the arrays used have already been validated
	
// import 2 files with arrays
const testBattery=require('../testBattery/battery.json');
const resultBattery=require('../testBattery/resultBattery.json');

describe('Conway`s Rules', () =>{
	it('Iteration Conways`s Game Life', () =>{
		expect(conwaysGame.iterations(testBattery[0].array)).toEqual(resultBattery[0].array);
	});
});