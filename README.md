# Frontend Mentor - Interactive Rating Component

This is a solution to the <a href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H">"Interactive Rating Component"</a> on Frontend Mentor.
<br>
Frontend Mentor challenges help ypu improve your coding skills by building realistic projects.

# 📖 Table of contents

- [Brief](#📋-brief);
- [Screenshot](#🖥-screenshot);
- [Technologies](#🔧-technologies);
- [Code](#💾-code);
- [Author](#🧔-author);

# 📋 Brief

Build out an interactive rating component and get it looking as close to the design as possible.
<br>
Use any tools to help the completion of the challenge.
<br>
Users should be able to:
<br>
- View the optimal layout depending on their device's screen size;
- See hover states for all interactive elements on the page;
- Select and submit a number rating;
- See the "Thank you" card state after submitting a rating;

# 🖥 Screenshot

![](images/screenshot.jpg)

# 🔧 Technologies

<img align="center" alt="Yann-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"><img align="center" alt="Yann-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"><img align="center" alt="Yann-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">

# 💾 Code

```html
    <body>
        <!-- // main container ===== start -->
        <div class="container-fluid">
            <!-- // card container ===== start -->
            <div class="card-container">
                <!-- // rating container ===== start -->
                <div class="rating-container">
                    <i class="fas fa-star"></i>
                    <div class="text-container">
                        <h1 id="r-title">How did we do?</h1>
                        <p id="r-description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    </div>
                    <div class="ratings">
                        <button class="btn">1</button>
                        <button class="btn">2</button>
                        <button class="btn">3</button>
                        <button class="btn">4</button>
                        <button class="btn">5</button>
                    </div>
                    <button id="submit">Submit</button>
                </div>
                <!-- // rating container ===== end -->
                <!-- // thank you container ===== start -->
                <div class="thankyou-container hidden">
                    <img class="image-fluid" src="images/illustration-thank-you.svg" alt="thankYou">
                    <div class="result-container">
                        <p id="rs-description">You selected <span id="rate">0</span> out of 5</p>
                    </div>
                    <div class="text-container">
                        <h1 id="t-title">Thank you!</h1>
                        <p id="t-description">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                    </div>
                </div>
                <!-- // thank you container ===== end -->
            </div>
            <!-- // card container ===== end -->
        </div>
        <!-- // main container ===== end -->
        <!-- // bootstrap js ===== start // -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        <!-- // bootstrap js ===== end // -->
        <!-- // master js ===== start // -->
        <script src="script.js"></script>
        <!-- // master js ===== end // -->
    </body>
```

```css
/* fonts */

@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');

/* color palette */

:root {
    --color-orange: #fc7613;
    --color-light-100: #ffffff;
    --color-light-200: #78818a;
    --color-dark-100: #262f38;
    --color-dark-200: #212832;
    --color-dark-300: #171e28;
    --color-dark-400: #141519;
    --color-dark-500: #151414;
}

/* default reset */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Overpass', sans-serif;
    background-color: var(--color-dark-400);
    overflow: hidden;
}

p {
    font-size: 15px;
}

/* main container */

.container-fluid {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-container {
    max-width: 26rem;
    max-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 30px;
    background: linear-gradient(180deg, var(--color-dark-200), var(--color-dark-300));
    box-shadow: 0 0.5rem 1.5rem var(--color-dark-500);
    overflow: hidden;
}

/* rating container */

.rating-container {
    display: inline;
    width: 100%;
}

.fas {
    padding: 1rem;
    margin-bottom: 1.5rem;
    color: var(--color-orange);
    border-radius: 50px;
    background: var(--color-dark-100);
}

.text-container {
    margin-top: 0.5rem;
}

#r-title,
#t-title {
    font-size: 28px;
    color: var(--color-light-100);
}

#r-description,
#t-description {
    font-weight: 400;
    color: var(--color-light-200);
}

/* ratings buttons */

.ratings {
    width: 100%;
    margin-top: 1.3rem;
    margin-left: 0.6rem;
    display: flex;
    justify-content: center;
}

.btn {
    width: 50px;
    height: 50px;
    margin-right: 1.3rem;
    font-size: 14px;
    text-align: center;
    line-height: 42px;
    color: var(--color-light-200);
    border: none;
    border-radius: 50px;
    background: var(--color-dark-100);
    transition: 0.2s ease-in-out;
}

.btn:hover {
    color: var(--color-light-100);
    background: var(--color-orange);
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.btn:focus {
    color: var(--color-light-100);
    background: var(--color-light-200);
}

/* submit button */

#submit {
    width: 100%;
    padding: 0.8rem;
    margin-top: 2rem;
    font-size: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-light-100);
    border: none;
    border-radius: 25px;
    background: var(--color-orange);
    transition: 0.2s ease-in-out;
}

#submit:hover {
    color: var(--color-orange);
    background: var(--color-light-100);
    cursor: pointer;
}

/* thank you container */

.thankyou-container {
    width: 100%;
    margin-top: 1.3rem;
    display: inline;
    text-align: center;
}

/* result container */

.result-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    margin: 1.3rem 0;
}

#rs-description {
    width: 60%;
    padding: 0.3rem 0;
    display: inline-block;
    line-height: 25px;
    color: var(--color-orange);
    border-radius: 25px;
    background: var(--color-dark-100);
}

#t-description {
    margin-top: 1rem;
}

/* hidden */

.hidden {
    display: none;
}

/* media query */
@media (max-width: 424px) {
    .card-container {
        max-width: 22rem;
    }

    .ratings {
        margin-left: 0.3rem;
    }

    .btn {
        width: 45px;
        height: 45px;
        margin-right: 0.8rem;
        line-height: 36px;
    }

    #rs-description {
        width: 70%;
    }
}


@media (max-width: 380px) {
    .card-container {
        max-width: 20rem;
    }

    .ratings {
        margin-left: 0;
    }

    .btn {
        width: 40px;
        height: 40px;
        margin-right: 0.8rem;
        line-height: 32px;
    }
}
```

```javascript
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
```

# 🧔 Author

- <a href="https://github.com/ynncstslv" target="_blank">GitHub</a>;
- <a href="https://linkedin.com/in/ynncstslv" target="_blank">LinkedIn</a>;
- <a href="https://codepen.io/ynncstslv" target="_blank">Codepen</a>;
- <a href="https://instagram.com/ynncstslv" target="_blank">Instagram</a>;
- <a href="https://twitter.com/ynncstslv" target="_blank">Twitter</a>;
