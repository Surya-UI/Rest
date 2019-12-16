require('dotenv').config({
    path: 'variables.env'
});
const { Client } = require('pg');
const client = new Client();

client.connect();

const text = 'INSERT INTO usertable(name, age, married) VALUES($1, $2, $3) RETURNING *';
const values = ['brianc', 24, false];

const quering = async (req, res) => {

    try {
        const res = await client.query(text, values);
        console.log(res.rows[0]);
        // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
        console.log(err.stack);
    }
}

quering();

