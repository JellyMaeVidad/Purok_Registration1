//dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

//run server
app.listen(3002, () => {
    console.log('Server is running on port 3002.')
})

//database(mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'purokreg',
})

//router to the server that will register a user
app.post('/register', (req, res)=>{
    //variables sent from forms
    const sentLastName = req.body.Lastname
    const sentFirstName = req.body.FirstName
    const sentMiddleName = req.body.MiddleName
    const sentBirthDate = req.body.BirthDate
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    //SQL statement to insert the users to the database table users
    const SQL = 'INSERT INTO user (lastname, firstname, middlename, birthdate, email, username, password) VALUES(?,?,?,?,?,?,?)'
    //enter this values thru a variable
    const Values = [sentLastName, sentFirstName, sentMiddleName, sentBirthDate, sentEmail, sentUserName, sentPassword]

    //query to execute sql statement stated above
    db.query(SQL, Values, (err, results)=> {
        if(err){
            res.send(err)
        }else{
            console.log('User inserted successfully!')
            res.send({message: 'User added!'})
        }
    })
})

//login with these credentials from a registered user
app.post('/login', (req, res)=>{
    const sentloginUserName = req.body.LoginUserName
    const sentloginPassword = req.body.LoginPassword

    //SQL statement to insert the users to the database table users
    const SQL = 'SELECT * FROM user WHERE username = ? && password = ?'
    //enter this values thru a variable
    const Values = [sentloginUserName, sentloginPassword]

    db.query(SQL, Values, (err, results)=> {
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
        }
        else{
            res.send({message: 'Credentials do not match!'})
        }
    })
})