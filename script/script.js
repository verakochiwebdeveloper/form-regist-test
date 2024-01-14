const buttonMenu = document.querySelector('.header_burger'),
headerlist = document.querySelector('.header_list'),
html = document.querySelector('html'),
displayChange = () => {
    if (headerlist.style.display == 'none') {
        headerlist.style.display = 'flex';
    } else {
        headerlist.style.display = 'none';
    }
};

buttonMenu.addEventListener('click', displayChange)

