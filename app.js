const countDown = () => {
    const countDate = new Date('Nov 26, 2021, 23:59:00').getTime();
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
    const content = `<div class="greeting">
        <h2 id=greeting></h2>
        <h3 id=wish></h3> 
    </div>`

    setTimeout(() => {
        comingSoon.innerHTML = content
        greeting()
    }, 1000)
    setTimeout(() => {
        wish()
    }, 6000)
}


function greeting() {
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
            delay: 600
        })
        .move(-10)
        .delete(20)
        .type("selamat ulang tasdasd")
        .move(null, {
            to: "END"
        })
        .type(" let yees")
        .pause(300)
        .delete(2)
        .type("sterday use up to muc")
        .move(-4)
        .type("o")
        .move(null, {
            to: "END"
        })
        .type("h of today.")
        .pause(500)
        .break({
            delay: 500
        })
        .break({
            delay: 500
        })
        .type("<em>- R</em>")
        .go();
}