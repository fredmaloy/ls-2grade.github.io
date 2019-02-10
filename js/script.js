
function ready() {
    ymaps.ready(function () {

        var button = document.getElementById('drop');
        var close = document.getElementById('close-mobile');

        button.addEventListener('click',function (event) {
           
            event.preventDefault();
            var menuMobile = document.getElementById('menuDrop');
            menuMobile.classList.add('active');
        })

        close.addEventListener('click',function (event) {
            event.preventDefault();
            let menuMobile = document.getElementById('menuDrop');
            menuMobile.classList.remove('active');
        });

    });
};