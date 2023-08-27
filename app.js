const monthDe = document.getElementById('month');
const dayDe = document.getElementById('day');
const numberDe = document.getElementById('number');
const yearDe = document.getElementById('year');

// console.log(monthDe);
// console.log(dayDe);
// console.log(numberDe);
// console.log(yearDe);


const date = new Date()

const month = date.getMonth()
monthDe.innerHTML = date.toLocaleDateString("en", {
    month: "long",
});

dayDe.innerHTML = date.toLocaleDateString("en", {
    weekday: "long",
});

numberDe.innerHTML = date.getDate();
yearDe.innerHTML = date.getFullYear();