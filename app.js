addEventListener("touchstart", () => {}, true);

let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spin-btn");
let value = Math.floor(Math.random() * 3600);
const number = document.querySelectorAll(".cell");
let isRotating = false;

let data = getData() || [
    {
        title: "",
        bgColor: "",
    },
    {
        title: "",
        bgColor: "",
    },
    {
        title: "",
        bgColor: "",
    },
    {
        title: "",
        bgColor: "",
    },
    {
        title: "",
        bgColor: "",
    },
    {
        title: "",
        bgColor: "",
    },
    {
        title: "",
        bgColor: "",
    },
    {
        title: "",
        bgColor: "",
    },
    {
        title: "",
        bgColor: "",
    },
    {
        title: "",
        bgColor: "",
    },
];

function refreshData() {
    number.forEach((elem, index) => {
        elem.childNodes.forEach((child) => {
            child.value = data[index].title;
        });
    });
    document.querySelectorAll(".input").forEach((elem, index) => {
        elem.value = data[index].title;
    });
    number.forEach((elem, index) => {
        elem.style.backgroundColor = data[index].bgColor;
    });
}

refreshData();

spinBtn.addEventListener("click", () => {
    if (!isRotating) {
        wheel.style.transform = `rotate(${value}deg)`;
        // Maybe Math.ceil()
        value += Math.floor(Math.random() * 3600);
        isRotating = true;
    } else if (isRotating) {
        return;
    }
    setTimeout(() => {
        isRotating = false;
    }, 5000);
});

document.querySelectorAll(".input").forEach((elem, index) => {
    elem.addEventListener("input", () => {
        data[index].title = elem.value;
        saveData();
        refreshData();
    });
});

document.querySelector(".js-change-clr-btn").addEventListener("click", () => {
    for (i = 0; i < number.length; i++) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        number[i].style.backgroundColor = `rgb(${r},${g},${b})`;
        number.forEach((elem, index) => {
            data[index].bgColor = elem.style.backgroundColor;
            saveData();
        });
    }
});

function saveData() {
    localStorage.setItem("data", JSON.stringify(data));
}

function getData() {
    return JSON.parse(localStorage.getItem("data"));
}
