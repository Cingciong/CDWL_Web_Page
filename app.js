//modules
const express = require("express")
const app = express()

//imported

//veriables
const port = 3000;

const path = require("path")

let email;
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    console.log( req.url );
    res.render("index.ejs")
})

app.listen(port, (err)=>{
    if(err){
        console.log("error", err)
        return;
    }
    console.log("listening on port ", port)
})

app.post('/email', (req, res) => {
    console.log(req.body.email) 
    let email=req.body.email;
  })


