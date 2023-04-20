const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const create_table = () => { 
    connection.query("CREATE TABLE IF NOT EXISTS people ( \
                    id INT NOT NULL AUTO_INCREMENT, \
                    name varchar(250) NOT NULL,\
                    PRIMARY KEY (id) ); ")
    connection.query("INSERT INTO people (name) VALUES ('João Henrique'), ('Full Cycle Rocks')")
}


const query_users = async () => {

    let result;
    
    await connection.promise().query('SELECT * FROM people')
        .then(([rows, fields]) => {
            result = rows
        })
     
    return result;              
}

app.get('/', async (req, res) => { 
    const users = await query_users();
    res.send(`<h1>Full Cycle Rocks! </h1><h3> ${JSON.stringify(users)} </h3>`);
})

app.listen(port,() => {
    console.log('Rodando na port ' + port)
    create_table();
});