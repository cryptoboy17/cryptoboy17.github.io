const countDown = () => {
    const countDate = new Date('Nov 26, 2021, 00:00:00').getTime();
    const now = new Date().getTime()
    const gap = countDate - now;

    // How the fuck does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate the shit
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.countdown__day--day').innerHTML = textDay
    document.querySelector('.countdown__hour--hour').innerHTML = textHour
    document.querySelector('.countdown__minute--minute').innerHTML = textMinute
    document.querySelector('.countdown__second--second').innerHTML = textSecond

    console.log(gap)

    if (gap < 1000) {
        clearInterval(time)
        removeMain()
        birthday()
    }
}

const time = setInterval(countDown, 1000)

function removeMain() {
    document.querySelector('main').style.opacity = 0;
    document.querySelector('main').style.transition = '1s';
}

function birthday() {
    const comingSoon = document.querySelector('.coming-soon');
    const content = `
    <div class="greeting">
        <figure>
        <img class="cat1 animate__animated animate__bounce" src="./assets/img/kittie/cat7.png" alt="">
        <img class="cat2" src="./assets/img/kittie/cat9.png" alt="">
        <img class="cat3" src="./assets/img/kittie/cat10.png" alt="">
        <img class="balloon1" src="./assets/img/2.png" alt="">
        </figure>
        <div class="greet">
        <h2 id=greeting></h2>
        <h4 id=wish></h4> 
        </div>
        <button id ="btn" class="noselect">SURPRISES</button>
        <audio id="birth" controls>
        <source src="./assets/sounds/birth.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
        </audio>
    </div>
    `

    setTimeout(() => {
        comingSoon.innerHTML = content
        greeting()
        birth()
        animated()
    }, 1000)
    setTimeout(() => {
        wish()
    }, 4000)
}


function greeting() {
    const body = document.querySelector('body');
    body.style.background = "url(assets/img/bg.jpg) no-repeat";

    let greeting = new TypeIt("#greeting", {
        strings: "HAPPY BIRTHDAY LULUUU !",
        lifeLike: true,
        speed: 100,
        waitUntilVisible: true,

    }).go();
}

function wish() {
    let wish = new TypeIt("#wish", {
            speed: 50,
            waitUntilVisible: true,
        })
        .type("ngomong apa yak wkwkw", {
            delay: 1200
        })
        .pause(1000)
        .move(-5)
        .delete(30)
        .type("pibesdey riweuhh ")
        .move(null, {
            to: "END"
        })
        .type(" lancar yakkk apapun itu")
        .pause(300)
        .delete(3)
        .type("jan sedih mulu ah ")
        .move(-4)
        .move(null, {
            to: "END"
        })
        .type("pokonya harus semangat cewe keren.")
        .pause(500)
        .break({
            delay: 500
        })
        .break({
            delay: 500
        })
        .type("<em>- Rafly</em>")
        .go();
}

function birth() {
    const audio = document.getElementById('birth');
    const btn = document.getElementById('btn');
    audio.hidden = true;
    btn.addEventListener('click', () => {
        audio.play()
    })
}

function animated() {
    const cat1 = document.querySelector(".cat1");
    const cat2 = document.querySelector(".cat2");
    const cat3 = document.querySelector(".cat3");
    const balloon1 = document.querySelector(".balloon1");
    const xMax = 16;

    const tl = anime.timeline({
        targets: '.elastic-easing-demo .line:nth-child(1) .el',
        easing: 'easeInElastic(1, .6)'
    });

    tl.add({
        targets: cat1,
        scale: [{
                value: 1.5,
                duration: 1000
            },
            {
                value: 1,
                duration: 1000
            }
        ]
    });

    tl.add({
        targets: cat2,
        scale: [{
                value: 1.5,
                duration: 1000
            },
            {
                value: 1,
                duration: 1000
            }
        ]
    });

    tl.add({
        targets: cat3,
        translateX: [{
                value: xMax * -1,
            },
            {
                value: xMax,
            },
            {
                value: xMax / -2,
            },
            {
                value: xMax / 2,
            },
            {
                value: 0,
            }
        ],

    })

    tl.add({
        targets: balloon1,
        ease: 'linear',
        loop: true,
        translateY: [{
            value: -1200,
            duration: 12000,
        }, {
            value: -750,
            duration: 3000
        }],
        scale: [{
            value: 1.5,
            duration: 14000,
        }, {
            value: .5,
            duration: 3000
        }]

    })
}