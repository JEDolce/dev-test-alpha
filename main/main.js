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

// ********** FAQ menu ************