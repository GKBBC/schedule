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
    //mover
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
    
    //mobile view :]
    let x = window.matchMedia("(max-width: 600px)");

    if(x.matches) {
        //check the date. hide alll columns. show 1st. show the day's. show the next day's. :)
        const dd = new Date().getDate();
        const columns = document.getElementById("schedule-grid").children;
        const grid = document.getElementById("schedule-grid");

        let column2 = [];
        let column3 = [];
        let column4 = [];
        let column5 = [];
        let column6 = [];
        let column7 = [];

        window.onload = function() {
            for (let i = 0; i < columns.length; i++) {

                let gridColumnStart = window.getComputedStyle(columns[i]).getPropertyValue("grid-column-start");

                if(gridColumnStart == 2) {
                    column2.push(columns[i]);
                } else if(gridColumnStart == 3) {
                    column3.push(columns[i]);
                } else if(gridColumnStart == 4) {
                    column4.push(columns[i]);
                } else if(gridColumnStart == 5) {
                    column5.push(columns[i]);
                } else if(gridColumnStart == 6) {
                    column6.push(columns[i]);
                } else if(gridColumnStart == 7) {
                    column7.push(columns[i]);
                }
            }

            function hideColumn(columnName) {
                for (let i = 0; i < columnName.length; i++) {
                    columnName[i].style.display = "none";
                }
            }

            if (dd <= 25) {
                hideColumn(column4);
                hideColumn(column5);
                hideColumn(column6);
                hideColumn(column7);
                grid.style.gridAutoColumns = ".5fr 1fr 1fr 0fr 0fr 0fr 0fr";
            } else if (dd == 26) {
                hideColumn(column2);
                hideColumn(column5);
                hideColumn(column6);
                hideColumn(column7);
                grid.style.gridAutoColumns = ".5fr 0fr 1fr 1fr 0fr 0fr 0fr";
            } else if (dd == 27) {
                hideColumn(column2);
                hideColumn(column3);
                hideColumn(column6);
                hideColumn(column7);
                grid.style.gridAutoColumns = ".5fr 0fr 0fr 1fr 1fr 0fr 0fr";
            } else if (dd == 28) {
                hideColumn(column2);
                hideColumn(column3);
                hideColumn(column4);
                hideColumn(column7);
                grid.style.gridAutoColumns = ".5fr 0fr 0fr 0fr 1fr 1fr 0fr";
            } else {
                hideColumn(column2);
                hideColumn(column3);
                hideColumn(column4);
                hideColumn(column5);
                grid.style.gridAutoColumns = ".5fr 0fr 0fr 0fr 0fr 1fr 1fr";
            }

            mover.style.display = "block";

            for (let i = 0; i < document.getElementsByClassName("rowgridline").length; i++) {
                document.getElementsByClassName("rowgridline")[i].style.display = "block";
            }
        }
    }
}