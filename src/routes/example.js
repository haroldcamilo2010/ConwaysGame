const {Router} = require('express');
const router = Router();
const conwaysGame = require('../models/ConwaysGame');

//routes
//Basic GET
router.get('/test',(req, res) =>{
	const array1=require('../testBattery/array.json');
	const array2=require('../testBattery/array2.json');
	const array3=require('../testBattery/array3.json');
	conwaysGame.compareArray(array1,array2);

	var arr = require('../testBattery/battery.json');
	// console.log(arr[0].array);
	var temp2 = conwaysGame.iterations(arr[0].array);
	// console.log(temp2);
	// res.json(temp2);
	res.json("Servicio funcionando");

});

router.get('/test2',(req, res) =>{
	const data = {
		"name": "test2",
		"website": "prueba"
	};
	res.json(data);
});
//Basic POST
router.post('/test2',(req, res) =>{
	const{val1,val2} = req.body;
	// const{val1,val2} = req.body[0];
	const data = {
		"name": val1,
		"website": val2
	};
	res.json(data);
});

module.exports = router;	