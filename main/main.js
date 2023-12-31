// ********** Hamburguer menu ************
const btn = document.querySelector("#nav-btn");
const nav = document.querySelector("nav");
const span = document.querySelector("span");
const listItem = document.querySelectorAll(".list li");

const onClickList = () => {
    listItem.forEach(i => {
        i.addEventListener("click", () => {
            nav.classList.remove("navChecked");
            document.body.style.overflow = "visible";
            btn.checked = false;
        })
    })
};

btn.addEventListener("click", () => {

    if (btn.checked) {
        document.body.style.overflow = "hidden";
        nav.classList.add("navChecked");
        onClickList();
    } else {
        document.body.style.overflow = "visible";
        nav.classList.remove("navChecked");
    }
});


// ********** Countdown ************
(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    countDown = new Date(2024, 1, 1, 18, 0, 0).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    section = document.getElementById("section"),
                    countdown = document.getElementById("countdown");

                headline.innerText = "HELLO !!!";
                section.style.height = "6rem"
                countdown.style.display = "none";

                clearInterval(x);
            }
        }, 0)
}());



// ********** FAQ menu ************
const titlesArr = Array.from(document.querySelectorAll('.quest-title'));
const paraArr = Array.from(document.querySelectorAll('.quest-cont'));


for (let i = 0; i < titlesArr.length; i++) {
    titlesArr[i].addEventListener('click', () => {

        if (paraArr[i].classList.contains('visible')) {
            paraArr[i].classList.remove('visible');
            titlesArr[i].classList.remove('rotate');
        } else {
            paraArr[i].classList.add('visible');
            titlesArr[i].classList.add('rotate');
        }
    })
}





