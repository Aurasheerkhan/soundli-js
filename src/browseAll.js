function changeVisibility() {
    const playlistName = document.getElementById("playlistName");
    const sendBtn = document.getElementById("sendBtn");

    // playlistName.style.visibility = 'visible';
    // sendBtn.style.visibility = 'visible';

    if (playlistName.style.visibility !== "visible") {
        sendBtn.style.visibility = "visible";
        playlistName.style.visibility = "visible";
    } else {
        playlistName.style.visibility = "hidden";
        sendBtn.style.visibility = "hidden";
    }
}

function addPlaylist() {
    const inputPlaylist = document.getElementById('playlistName').value;
    console.log(inputPlaylist)

    const playlists = localStorage.getItem("playlists");

    if (!addPlaylist) {
        const newUser = new User(password, id);
        const initUsers = [newUser]
        localStorage.setItem("users", JSON.stringify(initUsers))
        window.location.href = "homepage.html";
        return;
    }
}