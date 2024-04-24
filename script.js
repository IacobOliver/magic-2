const manageTraineriVideos = () =>{
    let videoTrainers = document.querySelectorAll(".video-trainer")
    videoTrainers.forEach(function(videoTrainer) {
        let iframe = videoTrainer.querySelector("iframe").contentWindow.document
        let videoElement = iframe.querySelector("video")
        videoElement.autoplay = false
        videoElement.controls = false
    });
 

    //pause and play video the three videos on index
    let buttons = document.querySelectorAll(".start-video");
    console.log(buttons)
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("clikc on it")
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


const manageCarrouselTraineriVideo = () =>{
    let buttons = document.querySelectorAll(".carrousel-trainer-button")
    

    buttons.forEach((button) =>{
        button.addEventListener(("click"), function(button){
            button.target.parentElement.querySelector("img").style.display = "none"
            button.target.parentElement.querySelector(".trainer-info").style.display = "none"

            let iframe = button.target.parentElement.parentElement.querySelector("iframe");
            if (iframe && iframe.src.includes("youtube.com")) {
                // Extract video ID from the src attribute
                let videoId = iframe.src.split("embed/")[1].split("?")[0];
                // Construct the YouTube player URL
                let playerUrl = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
                // Update the src attribute to start the video playback
                iframe.setAttribute("src", playerUrl);
            }
          
        })
    })
    
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
    manageCarrouselTraineriVideo();

});





