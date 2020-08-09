const videoPlayer = document.querySelector('.video-player');
const togglePlayBtn = document.querySelector('.toggle-play');

const progressBar = document.querySelector('.progress-bar');

const skipForward = document.querySelector('.skip-fwd');
const skipBack = document.querySelector('.skip-back');

const volumeSlider = document.querySelector(".volume");

const toggleVideo = () => {
    // console.log("before", videoPlayer.paused);

    // if (videoPlayer.paused) {
    //     videoPlayer.play();
    // } else {
    //     videoPlayer.pause();
    // }
    const method = videoPlayer.paused ? "play" : "pause";
    videoPlayer[method]();
    // console.log("after", videoPlayer.paused);
};

const updateBtn = () => {
    const icon = videoPlayer.paused ? '►' : '❚❚';
    togglePlayBtn.textContent = icon;
};

const handleProgress = () => {
    const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressBar.style.width = `${percent}%`;
}

const skipFwd = event => {
    console.log("before", videoPlayer.currentTime);
    console.log("event", event.target.dataset.skip);
    videoPlayer.currentTime += parseInt(event.target.dataset.skip, 10);
};

const skipB = event => {
    console.log("before", videoPlayer.currentTime);
    console.log("event", event.target.dataset.skip);
    videoPlayer.currentTime -= parseInt(event.target.dataset.skip, 10);
}

const handleVolume = event => {
    console.log("event", event.target.value);
    videoPlayer[event.target.name] = parseInt(event.target.value, 10); // videoPlayer.volume
}

// Event Listeners on Video
videoPlayer.addEventListener('click', () => {
    toggleVideo();
});

videoPlayer.addEventListener('play', () => updateBtn());
videoPlayer.addEventListener('paused', () => updateBtn());

// Event Listener on Toggle Button
togglePlayBtn.addEventListener('click', () => {
    toggleVideo();
});

// When Video is updated, update the progress bar
videoPlayer.addEventListener("timeupdate", () => handleProgress());

skipForward.addEventListener('click', skipFwd);
skipBack.addEventListener('click', skipB);

volumeSlider.addEventListener('change', handleVolume);

/*
https://codesandbox.io/s/intelligent-browser-66srn?file=/src/index.js
tommacfarlaine@gmail.com
https://codesandbox.io/s/intelligent-browser-66srn?file=/src/index.js
https://codesandbox.io/s/intelligent-browser-66srn?file=/src/index.js
https://www.w3schools.com/tags/ref_av_dom.asp

*/