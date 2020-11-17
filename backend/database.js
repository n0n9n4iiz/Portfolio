process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const pgp = require('pg-promise')();
const connectionString = 'postgres://mlsgjvlptcbjtn:86f8c2eaa9bda8894b3edfd1cc346cd603ad73ca205113aaa0e48b7aa737439f@ec2-3-216-89-250.compute-1.amazonaws.com:5432/d9s97j9m1nehaf?ssl=true';
const db = pgp(connectionString)
function getAll(req,res){
    var sql = "select * from naiportfolio";
    db.any("SELECT * FROM naiportfolio.naiportfolio;")
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(500).json({
            status:"Failed",
            data:err,
            message:"Failed to get data"
        })
    })
}
module.exports = {
    getAll
}