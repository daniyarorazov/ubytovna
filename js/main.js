$(document).ready(() => {
    const sidebarItems = document.querySelectorAll('.sidebar-list__item');
    const sidebarLinks = document.querySelectorAll('.sidebar-list__link');
    const sidebarSvgs = document.querySelectorAll('.sidebar-list__item svg');
    for (let key in sidebarItems) {
        sidebarItems[key].addEventListener('click', () => {

            for (let [index, item] of Array.from(sidebarItems).entries()) {
                if (item.classList.contains('sidebar-list__item-active')) {
                    $(item).removeClass('sidebar-list__item-active');
                    $(sidebarLinks[index]).css('color', '#262626');

                    for (let item of $(sidebarSvgs[index]).children()) {
                        $(item).attr('fill', '#262626');
                    }
                }
            }

            // if ($(sidebarItems[key].classList.contains('sidebar-list__item-active')) && key > 0) {
            //     $(sidebarItems[key-1]).css('margin-bottom', '23px');
            // } else {
            //     $(sidebarItems[key]).css('margin-bottom', '41px');
            // }

            $(sidebarItems[key]).addClass('sidebar-list__item-active');
            $(sidebarLinks[key]).css('color', '#fff');

            for (let item of $(sidebarSvgs[key]).children()) {
                $(item).attr('fill', '#fff');
            }
        })
    }
});