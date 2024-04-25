

const manageTraineriVideos = () => {
    let videoTrainers = document.querySelectorAll(".video-trainer")
    videoTrainers.forEach(function (videoTrainer) {
        let iframe = videoTrainer.querySelector("iframe").contentWindow.document
        let videoElement = iframe.querySelector("video")
        videoElement.autoplay = false
        videoElement.controls = false
    });


    //pause and play video the three videos on index
    let buttons = document.querySelectorAll(".start-video");
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


const manageCarrouselTraineriVideo = () => {
    let buttons = document.querySelectorAll(".carrousel-trainer-button")


    buttons.forEach((button) => {
        button.addEventListener(("click"), function (button) {
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

const registerExpectations = () => {
    const form = document.querySelector('#registery-form');

    if (form) {
        let warningNode = form.querySelector(".warningMessage")

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');

            let selectedOptions = []
            checkboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    selectedOptions.push(checkbox.value);
                }
            });

            if (selectedOptions.length == 0) {
                setWarningMessage("Vă rog selectați una sau mai multe opțiuni din cele mai sus!",warningNode)
                return;
            }

            console.log(selectedOptions);
            if (selectedOptions.length != 0) {
                window.location.href = `cursuri.html?asteptari=${selectedOptions.join("_")}`
            }

        });
    }
}

const registerCourse = () => {
    const cursuri = document.getElementById("cursuri")

    if (cursuri) {
        const cursuriOptions = cursuri.querySelectorAll("a")

        cursuriOptions.forEach(option => {
            option.addEventListener("click", () => {
                window.location.href = "/inscriere.html" + window.location.search + `&curs=${option.querySelector("p").id}`
            })
        })
    }
}

const registerUserInfo = () => {
    const trimitereFormular = document.getElementById("trimitere-formular")

    if (trimitereFormular) {
        const aproveCheckbox = trimitereFormular.querySelector('input[type="checkbox"]');
        let warningNode = trimitereFormular.querySelector(".warningMessage");

        trimitereFormular.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            if (aproveCheckbox.checked) {
                const firstName = trimitereFormular.querySelector("#fname").value;
                const lastName = trimitereFormular.querySelector("#lname").value;
                const email = trimitereFormular.querySelector("#email").value;

                if (email == "" || lastName == "" || firstName == "") {
                    setWarningMessage("Completați datale înainte de a continua", warningNode)
                    return;
                }

                let searchData = window.location.search.slice(1).split("&")


                let userData = {
                    firstName,
                    lastName,
                    email,
                    asteptari: searchData[0].split("=")[1].split("_"),
                    curs: searchData[1].split("=")[1]
                }

                // Log or use the query string as needed
                console.log(userData);
                window.location.href = "/succes.html"

            } else {
                setWarningMessage("Bifați căsuța de mai sus pentru a continua", warningNode);
            }
        });
    }
}

const setWarningMessage = (text, warningNode) => {
    warningNode.textContent = text;

    setTimeout(() => {
        warningNode.textContent = "";
    }, 2000)
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
    registerExpectations();
    registerCourse();
    registerUserInfo();

});





