//creates the ids for the database using UUID
const { v4: uuidv4 } = require('uuid');
const port = 3000;
//setting up expresss
const express = require('express')
const app = express()
//sets up sql and body parser
var mysql = require('mysql')
const bp = require('body-parser')
//creates a database connect
var connection = mysql.createConnection({
    host: 'wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port:'3306',
    user: 'pn8k76r54wn68fgz',
    password: 'la0ugv974kp1eotf',
    database: 'mckrempm098x6ju2'
  })

//this connects to the database
connection.connect();


//these are strings used in our queries
var sqlInsert = `INSERT INTO postmortems 
            (
                id, name, subName, team, cause
            )
            VALUES
            (
                ?, ?, ?, ?, ?
            )`;
var sqlUpdate = `UPDATE postmortems SET name=?,subName=?,team=?,cause=? WHERE id = ?`;
var sqlDelete = `DELETE FROM Postmortems WHERE id=?`;

//setting the body parser
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

//sets up cors
app.use(function (req, res, next) {
    // Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
   });
//basic function for getting the postmortems
app.get('/postmortems', function (req, res)
{
    //makes a blank list
    var pmList = []
    connection.query('SELECT * FROM `postmortems`', function (error, results, fields) {
        // for each resut is adds to the list
        results.forEach(pm => {
            pmList.push(pm)
        });
        res.send(pmList);
      });
      
})
app.post('/create', function(req, res){
    console.log(req.body);
    let id = uuidv4()
    console.log(id)
    connection.query(sqlInsert, [id,req.body.name , req.body.subName, req.body.team, req.body.cause], function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log("success")
        }
    });
    
});
app.put('/update', function(req, res){
    console.log(req.body);
    connection.query(sqlUpdate, [req.body.name , req.body.subName, req.body.team, req.body.cause, req.body.id], function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log("success")
        }
    });
    
});
app.delete('/delete/:id', function(req, res){
    console.log(req.params);
    connection.query(sqlDelete, [req.params.id], function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log("success")
        }
    });
    
    
});

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))