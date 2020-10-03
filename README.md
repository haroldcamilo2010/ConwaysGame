# ConwaysGame
to start app 
1.download repository
2.execute npm install
3.if you need test Unit => execute npm test
4.if you need run serve => execute npm run dev to turn on the serve and you can use this services
	a.
		url:http://localhost:3000/createGrid
		method:POST,
		body-example: {
						"rows":"5",
						"cols":"4"
					  }
	

	b.
		url:http://localhost:3000/conwaysIteration
		method:POST,
		body-example: 
		[
		    {
		        "array": [
		            [
		                {
		                    "x": 0,
		                    "y": 0,
		                    "status": 0,
		                    "nextStatus": 0
		                },
		                {
		                    "x": 1,
		                    "y": 0,
		                    "status": 1,
		                    "nextStatus": 1
		                },
		                {
		                    "x": 2,
		                    "y": 0,
		                    "status": 1,
		                    "nextStatus": 1
		                },
		                {
		                    "x": 3,
		                    "y": 0,
		                    "status": 0,
		                    "nextStatus": 0
		                }
		            ],
		            [
		                {
		                    "x": 0,
		                    "y": 1,
		                    "status": 1,
		                    "nextStatus": 1
		                },
		                {
		                    "x": 1,
		                    "y": 1,
		                    "status": 1,
		                    "nextStatus": 1
		                },
		                {
		                    "x": 2,
		                    "y": 1,
		                    "status": 1,
		                    "nextStatus": 1
		                },
		                {
		                    "x": 3,
		                    "y": 1,
		                    "status": 1,
		                    "nextStatus": 1
		                }
		            ],
		            [
		                {
		                    "x": 0,
		                    "y": 2,
		                    "status": 0,
		                    "nextStatus": 0
		                },
		                {
		                    "x": 1,
		                    "y": 2,
		                    "status": 0,
		                    "nextStatus": 0
		                },
		                {
		                    "x": 2,
		                    "y": 2,
		                    "status": 0,
		                    "nextStatus": 0
		                },
		                {
		                    "x": 3,
		                    "y": 2,
		                    "status": 0,
		                    "nextStatus": 0
		                }
		            ],
		            [
		                {
		                    "x": 0,
		                    "y": 3,
		                    "status": 0,
		                    "nextStatus": 0
		                },
		                {
		                    "x": 1,
		                    "y": 3,
		                    "status": 1,
		                    "nextStatus": 1
		                },
		                {
		                    "x": 2,
		                    "y": 3,
		                    "status": 1,
		                    "nextStatus": 1
		                },
		                {
		                    "x": 3,
		                    "y": 3,
		                    "status": 0,
		                    "nextStatus": 0
		                }
		            ],
		            [
		                {
		                    "x": 0,
		                    "y": 4,
		                    "status": 1,
		                    "nextStatus": 1
		                },
		                {
		                    "x": 1,
		                    "y": 4,
		                    "status": 0,
		                    "nextStatus": 0
		                },
		                {
		                    "x": 2,
		                    "y": 4,
		                    "status": 0,
		                    "nextStatus": 0
		                },
		                {
		                    "x": 3,
		                    "y": 4,
		                    "status": 1,
		                    "nextStatus": 1
		                }
		            ]
		        ],
		        "iterations": 0
		    }
		]

	]




