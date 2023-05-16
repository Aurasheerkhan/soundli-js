class Playlist {
    constructor(name, songs) {
        this.name = name;
        this.songs = songs;
        this.currentSongIndex = 0;
        this.isPlaying = false;
    }

    play() {
        this.isPlaying = true;
        console.log(`Playing ${this.songs[this.currentSongIndex]}`);
    }

    pause() {
        this.isPlaying = false;
        console.log(`Paused ${this.songs[this.currentSongIndex]}`);
    }

    next() {
        if (this.currentSongIndex === this.songs.length - 1) {
            this.currentSongIndex = 0;
        } else {
            this.currentSongIndex++;
        }
        console.log(`Playing ${this.songs[this.currentSongIndex]}`);
    }

    previous() {
        if (this.currentSongIndex === 0) {
            this.currentSongIndex = this.songs.length - 1;
        } else {
            this.currentSongIndex--;
        }
        console.log(`Playing ${this.songs[this.currentSongIndex]}`);
    }

    shuffle() {
        for (let i = this.songs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.songs[i], this.songs[j]] = [this.songs[j], this.songs[i]];
        }
        console.log(`Shuffled playlist: ${this.songs}`);
    }
}

const myPlaylist = new Playlist("My Favorite Songs", ["Song 1", "Song 2", "Song 3"]);

myPlaylist.play(); // Plays the first song in the playlist
myPlaylist.next(); // Skips to the next song in the playlist
myPlaylist.shuffle(); // Shuffles the playlist array
