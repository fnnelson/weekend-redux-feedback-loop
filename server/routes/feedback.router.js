const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST to DB
router.post('/', (req, res) => {
    console.log("POST received on server-side:", req.body)
    let queryParams = [req.body.feelingRating, req.body.understandingRating, req.body.supportedRating, req.body.comments];
    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, queryParams)
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log("error on POST!", error)
            res.sendStatus(500);
        })
})


module.exports = router;