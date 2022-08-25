const mysql = require('mysql2')
con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2137',
  database: 'cdwl'
})



function fillDB(){

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth()+1;
let day = d.getDate();
let hour = d.getHours()+2;
let minutes = d.getMinutes();

date = year+'.'+ month +'.'+ day+' '+hour+':'+minutes;

con.query("INSERT INTO newsteller (email, date) VALUES(?,?)",[email,date,],)}

export function emailExist(){con.query(`SELECT email FROM newsteller WHERE email= ?`,[email],);}

export function cum(){

if (emailExist()) {
     console.log("email already exists");
}
else {
    fillDB();
    console.log("OK");
}
}





