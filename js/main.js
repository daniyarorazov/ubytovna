$(document).ready(() => {
    dataTableFunctions();
    calendarFunction();
    chartFunction();
});

function dataTableFunctions() {
    $('#myTable').DataTable();
    $('#myTableNajemnici').DataTable();
    $('#myTableDluznici').DataTable();

    const obsazenostBudovy = document.querySelectorAll('.table__occupancy');
    const tableRowValues = document.querySelectorAll("#myTable > tbody > tr.table__row")

    for (let [index, obsazenost] of Array.from(obsazenostBudovy).entries()) {
        let occupancy = ($(obsazenost).text()).split('/');
        let currentlyOccupancy = +occupancy[0];
        let maxOccupancy = +occupancy[1];
        let resultInPercents = currentlyOccupancy * 100 / maxOccupancy;
        console.log(resultInPercents);
        if (resultInPercents > 0 && resultInPercents < 51) {
            // Yellow
            tableRowValues[index].style.background = "#FFE690";
        }
        if(resultInPercents > 50 && resultInPercents < 100) {
            // Orange
            tableRowValues[index].style.background = "#FFC47F";
        }
        if(resultInPercents == 0) {
            // Green
            tableRowValues[index].style.background = "#C6F3BD";
        }
        if(resultInPercents == 100) {
            // Red
            tableRowValues[index].style.background = "#FFB6B6";
        }
    }
}

function calendarFunction() {
    const currentDate = new Date(Date.now());
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const options = {
        dayNames: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota',],
        monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
        dayBegin: 1,


    }
    let calendar = $("#calendar").calendarGC(options);

    calendar.setDate(formattedDate);
    let obsazenost = "0/30";
    let obsazenostSplit = obsazenost.split('/');
    console.log(+obsazenostSplit[0])
    const td = document.querySelector("#calendar > div > table > tbody > tr:nth-child(1) > td:nth-child(3)")
    if (+obsazenostSplit[0] == 0) {
        $(td).css('background', 'linear-gradient(90deg, #C6F3BD 90%, transparent 50%)');
    }
}

function chartFunction() {
    const data = {
        labels: ['Le', 'Ún', 'Bř', 'Du', 'Kv', 'Črv', 'Črvc', 'Sr', 'Zá', 'Ří', 'Li', 'Pr'],
        datasets: [{
            label: 'Sales',
            data: [0, 200, 100, 400, 500, 600, 700, 1000, 800, 120, 920, 800],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15,
            pointBackgroundColor: 'rgba(255, 99, 132, 0.5)', // set point background color
            pointBorderColor: '#fff', // set point border color
            pointBorderWidth: 2 // set point border width
        }]
    };

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    const chart = new Chart(document.getElementById('myChart'), {
        type: 'line',
        data: data,
        options: options
    });

}

// function sidebarFunction() {
//     const sidebarItems = document.querySelectorAll('.sidebar-list__item');
//     const sidebarLinks = document.querySelectorAll('.sidebar-list__link');
//     const sidebarSvgs = document.querySelectorAll('.sidebar-list__item svg');
//     for (let key in sidebarItems) {
//         $(sidebarItems[key]).click(function () {
//             for (let [index, item] of Array.from(sidebarItems).entries()) {
//                 if (item.classList.contains('sidebar-list__item-active')) {
//                     $(item).removeClass('sidebar-list__item-active');
//                     $(sidebarLinks[index]).css('color', '#262626');
//
//                     for (let item of $(sidebarSvgs[index]).children()) {
//                         $(item).attr('fill', '#262626');
//                     }
//                 }
//             }
//
//             $(sidebarItems[key]).addClass('sidebar-list__item-active');
//             $(sidebarLinks[key]).css('color', '#fff');
//
//             for (let item of $(sidebarSvgs[key]).children()) {
//                 $(item).attr('fill', '#fff');
//             }
//         })
//
//
//     }
// }