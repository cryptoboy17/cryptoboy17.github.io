const countDown = () => {
    const countDate = new Date('Nov 22, 2021, 23:52:00').getTime();
    const now = new Date().getTime()
    const gap = countDate - now;
    let random = "Selamat Ulang tahun"

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
    }
}

const time = setInterval(countDown, 1000)