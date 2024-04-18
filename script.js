const manageTraineriVideos = () =>{
    let videoTrainers = document.querySelectorAll(".video-trainer")
    videoTrainers.forEach(function(videoTrainer) {
        let iframe = videoTrainer.querySelector("iframe").contentWindow.document
        let videoElement = iframe.querySelector("video")
        videoElement.autoplay = false
        videoElement.controls = false
    });
 

    //pause and play video from carrousel
    let buttons = document.querySelectorAll(".startVideo");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            let videoIndex = parseInt(this.getAttribute("data-video"));
            // Select the corresponding iframe based on the index
            let iframe = document.querySelectorAll(".video-trainer iframe")[videoIndex];


            let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

            let videoElement = iframeDocument.querySelector("video");
            console.log(videoElement.paused)
            // Check if the video element exists
            if (videoElement.paused) {
                // Play the video
                videoElement.play();
            } else {
                videoElement.pause();
            }

        });
    });
}


const slider = document.querySelector('.slide-track');
slider.addEventListener('animationiteration', () => {
  slider.style.animation = 'none';  // Temporarily disable the animation
  requestAnimationFrame(() => {
    slider.style.transform = 'translateX(0)';  // Reset the transform
    requestAnimationFrame(() => {
      slider.style.animation = '';  // Re-enable the animation
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
    manageTraineriVideos();

});





