import User from "./User";

function login() {
console.log ("login")

const id = document.getElementById('id').value
const password = document.getElementById('password').value

const users = localStorage.getItem("users");

const usersJson = JSON.parse(users);

const found = usersJson.find (element => element.id === id && element.password === password);

if (found) {
    console.log("found")
} else {
    const newUser = new User(password, id);
    usersJson.push (newUser);
    console.log("Added");
}

}


