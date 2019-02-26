
function ready() {

    let videoPlayer = document.querySelector('.video');
    let playVideo = document.querySelector('.play');
    let pauseVideo = document.querySelector('.pause');
    let progress = document.querySelector('.rewind__line');
    let comletedTime = videoPlayer.currentTime;
    let durationTime = videoPlayer.duration; 

    let videoFlag = false;

    playVideo.addEventListener('click', e => {
        e.preventDefault();
        if (!videoFlag) {
            videoPlayer.play();
            videoFlag = true;
            pauseVideo.classList.add('active');
            playVideo.classList.remove('active');
        } else {
            videoPlayer.pause();
            videoFlag = false;
            pauseVideo.classList.remove('active');
            playVideo.classList.add('active');
        }
    });

    progress.addEventListener('input', function (event) {
        event.preventDefault();
        comletedTime = Math.floor((100 / durationTime) * progress.value); 
        console.log(comletedTime);    
    });
    

    

    let volumeVideo = document.querySelector('.volume');
    let volumeVideoOff = document.querySelector('.control__btn-volume__off');

    let volumeFlag = false;

    volumeVideo.addEventListener('click', e => {
        e.preventDefault();
        if (!volumeFlag) {
            videoPlayer.volume = 0;
            volumeFlag = true;
            volumeVideoOff.classList.add('active');
        } else {
            videoPlayer.volume = 1;
            volumeFlag = false;
            volumeVideoOff.classList.remove('active');
        }
    });

    

};
document.addEventListener("DOMContentLoaded", ready);