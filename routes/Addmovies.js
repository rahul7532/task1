
var express = require('express');
const Connection = require('mysql2/typings/mysql/lib/Connection');
const Pool = require('mysql2/typings/mysql/lib/Pool');
const dbConnection = require('../database');
var router = express.Router();

var db=require('../database');

router.post('/Addmovies',(req,res)=>{

    dbConnection.getConnection((err,connection)=>{

        if(err) throw err

        const params=req.body
   
          dbConnection.query('INSERT INTO movies SET ?',params,(err,rows)=>{

         connection.release()

         if(!err){
             res.render('Addmovies', { name: 'Addmovies', movieData: data});
         }else{
             console.log(err)
         }

         console.log('movies are:' )
          })
          
        })

    })




module.exports = router;