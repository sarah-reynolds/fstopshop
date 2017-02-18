var express = require('express');
var router = express.Router();
var config = require('../custom_modules/config.js');
var mysql = require('mysql');
var randtoken = require('rand-token');
var connection = mysql.createConnection({
	host: config.host,
	user: config.username,
	password: config.password,
	database: config.database
});

connection.connect();

var bcrypt = require('bcrypt-nodejs');

var hashedPassword = bcrypt.hashSync("x");
// console.log(hashedPassword)
var checkHash = bcrypt.compareSync("x", hashedPassword)
// console.log(checkHash)

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

router.get('/getAuctionDetail/:auctionId',(req,res,next)=>{
	
	var theAuctionId = req.params.auctionId;
	var getAuctionQuery = "SELECT * FROM auctions WHERE id = ?";
	connection.query(getAuctionQuery,[theAuctionId],(error,results,fields)=>{
		console.log(getAuctionQuery)
		res.json(results)
	})
})

router.post('/register', (req, res, next)=>{
	// console.log(req.body)
	checkDupeUserQuery = "SELECT * FROM users WHERE username = ?;";
	connection.query(checkDupeUserQuery,[req.body.username],(error,results,fields)=>{
		// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		// console.log(results);
		if(results.length === 0){
			
			//go ahead and register user
			var insertUserQuery = "INSERT INTO users (name, username, password, email) VALUES "+"(?, ?, ?, ?);";
				
				// console.log(insertUserQuery)
			connection.query(insertUserQuery,[req.body.name,req.body.username,bcrypt.hashSync(req.body.password),req.body.email],(error2,results2,fields2)=>{
				// console.log(results2);
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
})

router.post('/login', (req, res, next)=>{
	var username = req.body.username;
	var password = req.body.password;
	var findUserQuery = "SELECT * FROM users WHERE username = ?";
	connection.query(findUserQuery,[req.body.username],(error,results,fields)=>{
		if(error)throw error;
		if(results.length === 0){
			res.json({
				msg: "badUsername"
			})
		}else{
			// this is a valie username 
			checkHash = bcrypt.compareSync(password, results[0].password);
			// console.log("checkHash ",checkHash)
			if(checkHash === false){
				res.json({
					msg: "badPassword"
				})
			}else{
				var token = randtoken.uid(40);
				insertToken = "UPDATE users SET token=?, token_exp=DATE_ADD(NOW(), INTERVAL 1 HOUR) "+
                    "WHERE username=?";
                connection.query(insertToken,[token, username], (error, results)=>{
					// console.log(token);
					res.json({
						msg: "foundUser",
						token: token
					});
				});
			}
		}
	});
});


router.post('/submitBid', (req,res,next)=>{
	// res.json(req.body);
	var selectQuery = "SELECT current_bid, starting_bid FROM auctions WHERE id = ?";
	connection.query(selectQuery,[req.body.auctionItemId],(error,results,fields)=>{
		if((req.body.bidAmount < results[0].current_bid)||(req.body.bidAmount < results[0].starting_bid)){
			res.json({msg:"bidTooLow"})
		}else{

			var getUserId = "SELECT id FROM users WHERE token = ?";
			connection.query(getUserId,[req.body.userToken],(error2,results2,fields2)=>{
				if(results2.length > 0){
					var updateAuctionsQuery = "UPDATE auctions SET high_bidder_id=?, current_bid=?"+
					"WHERE id = ?"
					connection.query(updateAuctionsQuery,[results2[0].id,req.body.bidAmount,req.body.auctionItemId],(errors3,results3,fields3)=>{

						if(error)throw error;
						res.json({
							msg: "bidAccepted",
							newBid: req.body.bidAmount
						})
					})
						
				}else{
					results.json({msg:"badToken"})
				}
			})

			// res.json({msg:"bidHighEnough"})
			// var updateAuctionsQuery = "UPDATE auctions SET high_bidder_id =?, current_bid=?"+
			// "WHERE id = ?"
			// connection.query(updateAuctionsQuery,["",req.body.bidAmount,req.body.auctionItem],())
		}
	})
})

module.exports = router;
