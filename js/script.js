function signup(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

let users=JSON.parse(localStorage.getItem("users")) || [];

users.push({username,password});

localStorage.setItem("users",JSON.stringify(users));

alert("Account created!");

}

function login(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

let users=JSON.parse(localStorage.getItem("users")) || [];

let found=users.find(u=>u.username===username && u.password===password);

if(found){

localStorage.setItem("loggedUser",username);

document.getElementById("loginSection").style.display="none";
document.getElementById("confessionSection").style.display="block";

}else{

alert("Invalid login");

}

}

function sendConfession(){

let msg=document.getElementById("confessionInput").value;

let vault=JSON.parse(localStorage.getItem("vault")) || [];

vault.push(msg);

localStorage.setItem("vault",JSON.stringify(vault));

alert("Confession saved!");

document.getElementById("confessionInput").value="";

}

window.onload=function(){

let list=document.getElementById("vaultList");

if(!list) return;

let vault=JSON.parse(localStorage.getItem("vault")) || [];

vault.forEach(msg=>{

let li=document.createElement("li");
li.textContent=msg;

list.appendChild(li);

});

}
