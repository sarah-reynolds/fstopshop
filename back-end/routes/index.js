var express = require('express');
var router = express.Router();
var config = require('../custom_modules/config.js');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: config.host,
	user: config.username,
	password: config.password,
	database: config.database
});

connection.connect();



/* GET top 3 auctions page. */
router.get('/getHomeAuctions', (req, res, next)=> {
  var auctionsQuery = "SELECT * FROM auctions " +
  "INNER JOIN images ON images.auction_id = auctions.id "
  + " limit 3"
  connection.query(auctionsQuery, (error, results, fields) => {
  	if (error) throw error;
  	res.json(results);
  });
  // res.render('index', { title: 'Express' });
});

router.post('/register', (req, res, next)=>{
	console.log(req.body)
	checkDupeUserQuery = "SELECT * FROM users WHERE username = ?";
	connection.query(checkDupeUserQuery,[req.body.username],(error,results,fields)=>{
		console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		console.log(results);
		if(results.length === 0){
			
			//go ahead and register user
			var insertUserQuery = "INSERT INTO users (name, username, password, email) VALUES "+"(?, ?, ?, ?)";
				console.log(results);
				console.log(insertUserQuery)
			connection.query(insertUserQuery,[req.body.name,req.body.username,req.body.password,req.body.email],(error2,results2,fields2)=>{
				res.json({
					msg:"userInserted"
				});
			});
		}else{
			res.json({
				msg: "userNameTaken"
			})
		}
	})
	// res.json(req.body)
})

module.exports = router;
