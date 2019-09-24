function ready() {

    let videoPlayer = document.querySelector('.video');
    let videoOn = document.querySelector('.on');
    let playVideo = document.querySelector('.play');
    let pauseVideo = document.querySelector('.pause');
    let progress = document.querySelector('.rewind__line');
    let videoContainer = document.querySelector('.video__container');
    let videoPlayerControl = document.querySelector('.player__control');

    let videoFlag = false;

    let videOnContainer = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (!videoFlag) {                         
            videoPlayer.play();
            videoFlag = true;
            pauseVideo.classList.add('active');
            playVideo.classList.remove('active');
            videoContainer.classList.remove('off');
            videoPlayer.classList.remove('off');
        } else {
            videoPlayer.pause();
            videoFlag = false;
            pauseVideo.classList.remove('active');
            playVideo.classList.add('active');
            videoContainer.classList.add('off');
            videoPlayer.classList.add('off');

        }
    };

    videoOn.addEventListener('click', videOnContainer);
    videoContainer.addEventListener('click', videOnContainer);

    

    progress.addEventListener('input', (e) => { //перемотка видео по кликам на инпут
        e.stopPropagation();
        videoPlayer.currentTime = Math.floor((videoPlayer.duration / 100) * progress.value);
    });

    videoPlayer.addEventListener("timeupdate", () => { //обновление инпута относительно воспроизведения видео
        const percent = Math.floor((100 / videoPlayer.duration) * videoPlayer.currentTime);
        progress.value = percent;
    });

    let volumeVideoOff = document.querySelector('.control__btn-volume__off');
    let volumeLevel = document.querySelector('.volume__line');
    let volumeVideoOn = document.querySelector('.volume-on');

    let volumeFlag = false;

    volumeVideoOn.addEventListener('click', (e) => { // Событие по клику на кгопку звука
        e.stopPropagation();
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

    videoPlayerControl.addEventListener('click' , (e) => { 
        e.stopPropagation();
        console.log('!');
    });

    volumeLevel.addEventListener('input' , (e) => { // изменение уровня громкости
        e.stopPropagation();
        videoPlayer.volume = volumeLevel.value / 100;
    });
};
document.addEventListener("DOMContentLoaded", ready);