const form = document.getElementById("applicationForm");
const tableBody = document.querySelector("#applicationsTable tbody");
form.addEventListener("submit", function(event){
event.preventDefault();
clearErrors();
let valid = true;
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const position = document.getElementById("position");
const experience = document.getElementById("experience");
const cvLink = document.getElementById("cvLink");
const availableDate = document.getElementById("availableDate");
const photo = document.getElementById("photo");

if(fullName.value.trim().length < 3){
showError("nameError","Name is required!");
valid = false;
}

if(!email.value.includes("@")){
showError("emailError","Valid email required!");
valid = false;
}

if(phone.value.trim().length != 10){
showError("phoneError","Invalid phone number!");
valid = false;
}

if(position.value === ""){
showError("positionError","Select a position!");
valid = false;
}

if(experience.value.trim().length < 10){
showError("experienceError","Minimum 10 characters required!");
valid = false;
}

if(cvLink.value.trim() === ""){
showError("cvError","CV link required!");
valid = false;
}

if(availableDate.value === ""){
showError("dateError","Select a date!");
valid = false;
}

if(photo.files.length === 0){
showError("photoError","Upload a photo!");
valid = false;
}

if(!valid){
return;
}

const reader = new FileReader();
reader.onload = function(e){
const row = document.createElement("tr");

row.innerHTML = `
<td>${fullName.value}</td>
<td><a href="mailto:${email.value}">${email.value}</a></td>
<td>${phone.value}</td>
<td>${position.value}</td>
<td>${experience.value}</td>
<td><a href="${cvLink.value}" target="_blank">View CV</a></td>
<td><img src="${e.target.result}" alt="Candidate photo" loading="lazy"></td>
<td>${availableDate.value}</td>`;

tableBody.appendChild(row);
form.reset();
};

reader.readAsDataURL(photo.files[0]);

});

function showError(id,message){

document.getElementById(id).textContent = message;
}

function clearErrors(){

const errors = document.querySelectorAll(".error");
errors.forEach(error => {error.textContent = "";});
}