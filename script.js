var video = document.querySelector(".video");

function play(){
    video.play();
}

function pause(){
    video.pause();
}

function stop(){
    video.currentTime = 0;
    video.pause();
}

function retroceder(){
    video.currentTime -= 15;
}

function avancar(){
    video.currentTime += 15;
}

function acelerar(){
    video.playbackRate += 0.1;
}

function desacelerar(){
    video.playbackRate -= 0.1;
}

/*
Controles de vídeo

video.play()
video.pause()
video.currentTime
video.playbackRate


*/