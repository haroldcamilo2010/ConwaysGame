const {Router} = require('express');
const router = Router();
const fetch = require('node-fetch');
const battery = require('../models/ConwaysGame');

// const batteryBase = require('../testBattery/battery.json');//if you need join array from a file 

//This petition create a random grid   //ok
router.post('/createGrid', (req, res) =>{
	try{
		const{rows,cols} = req.body;
		if (cols && rows) {
			let grid = [
				{ "array":battery.randomGrid(rows, cols),
					"iterations": 0
				}
			];
			res.json(grid);
		}else{
			res.send('estructura de json incorrecta');
		}	
	}catch(e){
		res.status(500).json({error:e});
	}
});
//This petition calculate the new generation of array and return new array//ok
router.post('/conwaysIteration', (req, res)=>{
	const {array,iterations} = req.body[0];
	try{
		if (array && iterations !== undefined) {
			let grid = [
				{ "array":battery.iterations(array),
					"iterations": iterations+1
				}
			];
			res.json(grid);
		}else{
			res.send('estructura de json incorrecta');
		}
	}catch(e){
		res.status(500).json({error:e});
	}
});

//The request tries to carry out all the possible iterations until the array doesn`t changes and returns the resulting array and the iterations number , but it`s not possible coz it could stay in an infinite cycle and it would time out the requests and it would return an error, apart from that as it remains in an infinite cycle we would not have results
router.post('/result', async(req, res)=>{
	const{array, iterations} = req.body[0];

	try{
		if (array && iterations) {
			var json = array;
			var lastRes = [];
			var count = parseInt(iterations);
			//loops generations
			do{
				count++;
				lastRes = json;
				let body = [
					{ "array": json,
						"iterations": count
					}
				];
				const response = await fetch(req.protocol+req.get('host')+'/conwaysIteration', {
					method: 'POST',
					body: body,
					headers:{'Contetnt-Type': 'application/json'}
				});
				json = await response.json();
				;
			}while(!(battery.compareArray(lastRes.array, json.body[0].array)));
			res.json([
					{ "array": json,
						"iterations": count
					}
				]);
		}else{
			res.send('estructura de json incorrecta');
		}
	}catch(e){
		res.status(500).json({error:e});
	}
});


module.exports = router;