const dayNight = document.querySelector(".day-night");
    window.dayNight.addEventListener("click", () => {
        dayNight.querySelector("i").classList.toggle("bxs-sun");
        dayNight.querySelector("i").classList.toggle("bxs-moon");
        document.body.classList.toggle("dark");
    })
    window.addEventListener("load", () => {
        if(document.body.classList.contains("dark")){
            dayNight.querySelector("i").classList.add("bxs-sun");
        } else {
            dayNight.querySelector("i").classList.add("bxs-moon");
        }
    })