console.log("hello");
var audio = new Audio("songs/.mp3");
//this is data of all the songs
var songslist = [
    { songName: "let-me-love-you", filepPath: "songs/0.mp3", coverPath: "images/ab67616d0000b27317c14cb78745888be48cef78.jpeg" },
    { songName: "Maroon_5_-_Maps_", filepPath: "songs/1.mp3", coverPath: "images/download (1).jpeg" },
    { songName: "darkside", filepPath: "songs/WhatsApp Audio memoryes PM.mpeg", coverPath: "images/download (2).jpeg" },
    { songName: "memories", filepPath: "songs/memories.mpeg", coverPath: "images/download (3).jpeg" },
    { songName:"i dont know",filepPath:"songs/05-08 at 7.27.09 PM.mpeg",coverPath:"images/download (4).jpeg"},
    { songName:"one direction",filepPath:"songs/onedirection.mov",coverPath:"images/download (5).jpeg"},
]
// it is updating all songname and coverimg in the websit
for (let i = 0; i < document.querySelectorAll(".lisongs").length; i++) {
    document.querySelectorAll(".lisongs img ")[i].src = songslist[i].coverPath;
    document.querySelectorAll(".lisongs .songname")[i].innerText = songslist[i].songName;
    }
//it will handel play in main song
function allplay() {
    for (let i = 0; i < document.querySelectorAll(".lisongs i").length; i++) {
        document.querySelectorAll(".lisongs i")[i].classList.remove("fa-circle-pause");
        document.querySelectorAll(".lisongs i")[i].classList.add("fa-circle-play");

    }
}
for(let i= 0; i < document.querySelectorAll(".lisongs i").length; i++){
audio.addEventListener("timeupdate", () => {
     //it is updating the range and is it changing
    let ranges = document.getElementsByClassName("ranges");
    let process = parseInt((audio.currentTime / audio.duration) * 100);
     console.log(process);
    document.querySelector(".ranges").value = process;
    
        console.log(audio.duration);
        if (process === 100) {
            //if process is ==100 then it will play next song
               i++;
               audio.src=songslist[i].filepPath;
               audio.play();
               audio.currentTime=0;
               document.querySelector(".songnam").innerHTML = songslist[i].songName;
           }
           });
}

// this is handling the play and pause in botton 
document.querySelector("#play").addEventListener("click", () => {
    if (audio.paused || audio.currentTime < 0) {

        audio.play();
         document.querySelector("#play").classList.add("fa-circle-pause");
        document.querySelector("#play").classList.remove("fa-circle-play");
    }

    else {

        audio.pause();
        document.querySelector("#play").classList.add("fa-circle-play");
        document.querySelector("#play").classList.remove("fa-circle-pause");
    }
});
//the song continuous where you click on the range
document.querySelector(".ranges").addEventListener("change", () => {
    audio.currentTime = document.querySelector(".ranges").value * audio.duration / 100;

});



for (let i = 0; i < document.querySelectorAll(".lisongs i").length; i++) {
    document.querySelectorAll(".lisongs i")[i].addEventListener("click", function (event) {
         allplay();//it is user difined function
        document.querySelectorAll(".lisongs i")[i].classList.remove("fa-circle-play");
        document.querySelectorAll(".lisongs i")[i].classList.add("fa-circle-pause");
        audio.src = songslist[i].filepPath;
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#play").classList.add("fa-circle-pause");
        document.querySelector("#play").classList.remove("fa-circle-play");
        document.querySelector(".songnam").innerHTML = songslist[i].songName;

    });
}

for (let i = 0; i < document.querySelectorAll(".lisongs i").length; i++) {


    document.querySelector("#next").addEventListener('click', function () {
        if (i >= document.querySelectorAll('.lisongs').length) {
            i = 0;
        }
        else {
            i = i + 1;
        }
        audio.src = songslist[i].filepPath;
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#play").classList.add("fa-circle-pause");
        document.querySelector("#play").classList.remove("fa-circle-play");
        document.querySelector(".songnam").innerHTML = songslist[i].songName;

    });
}
for (let i = 0; i < document.querySelectorAll(".lisongs i").length; i++) {

    document.querySelector("#back").addEventListener('click', function () {
        if (i >= document.querySelectorAll('.lisongs').length) {
            i = 0;
        }
        else {
            i = i - 1;
        }
        
        audio.src = songslist[i].filepPath;
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#play").classList.remove("fa-circle-pause");
        document.querySelector("#play").classList.add("fa-circle-play");
        document.querySelector(".songnam").innerHTML = songslist[i].songName;

    });
}

