$(document).ready(() => {

    dataTableFunctions();

});

function dataTableFunctions() {
    $('#myTable').DataTable();

    const obsazenostBudovy = document.querySelectorAll('.table__occupancy');
    const tableRowValues = document.querySelectorAll('.table__row');

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