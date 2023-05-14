// import User from "./User";

function login() {
    console.log("login")

    const id = document.getElementById('id').value
    const password = document.getElementById('password').value

    const users = localStorage.getItem("users");

    if (!users) {
        const newUser = new User(password, id);
        const initUsers = [newUser] 
        localStorage.setItem ("users", JSON.stringify(initUsers))
        window.location.href = "homepage.html";
        return;
    } 

    const usersJson = JSON.parse(users);

    const found = usersJson.find(element => element.id === id && element.password === password);

    if (found) {
        console.log("found")
        window.location.href = "homepage.html";
    } else {
        const newUser = new User(password, id);
        usersJson.push(newUser);
        localStorage.setItem ("users", JSON.stringify(usersJson))
        console.log("Added");
        window.location.href = "homepage.html";
    }

}

class User {

    #password = "";
    #id = "";

    constructor(password, id) {
        this.password = password
        this.id = id
    }

}


