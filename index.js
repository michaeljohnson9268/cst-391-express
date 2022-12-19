const { v4: uuidv4 } = require('uuid');
const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql')
const bp = require('body-parser')

var connection = mysql.createConnection({
    host: 'wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port:'3306',
    user: 'pn8k76r54wn68fgz',
    password: 'la0ugv974kp1eotf',
    database: 'mckrempm098x6ju2'
  })

connection.connect();

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


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    // Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
   });

app.get('/postmortems', function (req, res)
{
    var pmList = []
    connection.query('SELECT * FROM `postmortems`', function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
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
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

