const fs = require('fs');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/book',(req, res) => {

    const book = req.body;
    fs.writeFile('example.json',JSON.stringify(book),(err)=>{

        if(err){
            console.error(error)
            res.send("Book not found")
        }
        else{
            res.send('Book added successfully');
        }
    })
    
    
    
})

app.get('/book',(req, res) => {
    fs.readFile('example.json',(err,data)=>{
        if(err){
            console.error(err)
            res.send("Book not found")
        }
        else{
            res.json(JSON.parse(data))
        }
    })
})
    app.listen(3000 , ()=>{
        console.log('Server started on port 3000');
})