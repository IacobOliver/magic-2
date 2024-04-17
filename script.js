
// let videos = document.querySelectorAll(".video-trainer")

// for (const video of videos) {
//     video.addEventListener("click",(e) => controlVideo(e, "playVideo"))
// }

// function controlVideo(e, vidFunction) {
//     // Find the iframe element within the clicked video-trainer div
//     let iframe = e.currentTarget.querySelector("iframe");
//     console.log(iframe)

//     // Check if the iframe element exists
//     if (iframe) {
//         // Access the iframe's contentWindow to control the video
//         let iframeWindow = iframe.contentWindow;
//         iframeWindow.postMessage(
//             '{"event":"command","func":"' + vidFunction + '","args":""}',
//             "*"
//         );
//     }
// }
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".startVideo");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
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
});

