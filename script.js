// declare variables

const btn = document.querySelectorAll('.btn');
const ratings = document.querySelector('.rating-container');
const thanks = document.querySelector('.thankyou-container');
const rate = document.getElementById('rate');
const submit = document.getElementById('submit');

// show thank you page on click

submit.addEventListener("click", () => {
    thanks.classList.remove("hidden");
    ratings.style.display = "none";
});

// results on thank you

btn.forEach(element => {
    element.addEventListener("click", () => {
        rate.innerHTML = element.innerHTML;
    });
});