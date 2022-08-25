
let d = new Date();

let year = d.getFullYear();
let month = d.getMonth()+1;
let day = d.getDate();
let hour = d.getHours();
let minutes = d.getMinutes();

let date = year+'.'+ month +'.'+ day+' '+hour+':'+minutes;

console.log(date);