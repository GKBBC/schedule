if (document.body.classList.contains("counter")) {
    const counter = document.getElementById("bignumber");

    const dd = new Date().getDate();

    const leave = 25; //for 25th of April

    const time = leave - dd;

    counter.innerHTML = time

    if (time == 0) {
        const counterbg = document.getElementById("home");
        const intervalID = window.setInterval(changeColor, 200);
        function changeColor() {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            counterbg.style.backgroundColor = "#"+randomColor;
        }
    } else if (time==1) {
        const capt = document.getElementById("caption");
        capt.innerHTML = "day until California"
    }
}

if (document.body.classList.contains("schedule")) {
    const hh = new Date().getHours();
    const mm = new Date().getMinutes();
    const total = (hh*60 + mm) - 360;
    const mathed = (total/60)*100

    const mover = document.getElementById("mover");

    if (mathed >= 0 && mathed <= 1700) {
        mover.style.top = mathed + "%";
    } else {
        mover.style.display = "none";
    }
}