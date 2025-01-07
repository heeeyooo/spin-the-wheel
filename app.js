addEventListener("touchstart", () => {}, true);

let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spin-btn");
let value = Math.floor(Math.random() * 3600);
const number = document.querySelectorAll(".number");
let isRotating = false;

let data = getData() || [
    {
        title: "1",
        bgColor: "",
    },
    {
        title: "2",
        bgColor: "",
    },
    {
        title: "3",
        bgColor: "",
    },
    {
        title: "4",
        bgColor: "",
    },
    {
        title: "5",
        bgColor: "",
    },
    {
        title: "6",
        bgColor: "",
    },
    {
        title: "7",
        bgColor: "",
    },
    {
        title: "8",
        bgColor: "",
    },
    {
        title: "9",
        bgColor: "",
    },
    {
        title: "10",
        bgColor: "",
    },
];

number.forEach((elem, index) => {
    elem.childNodes.forEach((child) => {
        child.textContent = data[index].title;
    });
});

number.forEach((elem, index) => {
    elem.style.backgroundColor = data[index].bgColor;
});

number.forEach((elem, index) => {
    elem.childNodes.forEach((child) => {
        child.addEventListener("input", () => {
            data[index].title = child.textContent;
            saveData();
        });
    });
});

function saveData() {
    localStorage.setItem("data", JSON.stringify(data));
}

function getData() {
    return JSON.parse(localStorage.getItem("data"));
}

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
