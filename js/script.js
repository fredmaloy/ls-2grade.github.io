
function ready() {

     //-------------Hamburger Menu--------------//

    var button = document.getElementById('drop');
    var close = document.getElementById('close-mobile');


    button.addEventListener('click', function (event) {
        event.preventDefault();
        var menuMobile = document.getElementById('menuDrop');
        menuMobile.classList.add('active');
    })

    close.addEventListener('click', function (event) {
        event.preventDefault();
        menuMobile = document.getElementById('menuDrop');
        menuMobile.classList.remove('active');
    });

   //-------------Аккардион горизонтальный--------------//

    const accirdionMenu = document.querySelectorAll(".accirdion__menu-list__elem");


    for (const item of accirdionMenu) {

        item.addEventListener('click', event => {

            let curItem = event.currentTarget;

            if (curItem.classList.contains('active')) {
                closeAccirdionMenuAll(accirdionMenu);
            } else {
                closeAccirdionMenuAll(accirdionMenu);
                curItem.classList.add('active');
            }

            function closeAccirdionMenuAll(accirdionMenu) {
                for (elem of accirdionMenu) {
                    elem.classList.remove('active');
                }

            }

        });


    }

    //-------------Аккордион вертикальный--------------//

    const teamMenu = document.querySelectorAll(".accirdion__team-list__elem");


    for (const item of teamMenu) {

        item.addEventListener('click', event => {

            let curItem = event.currentTarget;

            if (curItem.classList.contains('team__elem-active')) {
                closeTeamMenuAll(teamMenu);
            } else {
                closeTeamMenuAll(teamMenu);
                curItem.classList.add('team__elem-active');
            }

            function closeTeamMenuAll(teamMenu) {
                for (elem of teamMenu) {
                    elem.classList.remove('team__elem-active');
                }

            }

        });

        //-------------Слайдер--------------//

        var leftBtn = document.querySelector('.section__slider-arrow__left');
        var rightBtn = document.querySelector('.section__slider-arrow__right');
        const sliders = document.querySelector('.section__slider-list');
        var rightBtnColor = document.querySelector('.section__slider-arrow__right__svg');
        var leftBtnColor = document.querySelector('.section__slider-arrow__left__svg');

       /*  rightBtn.addEventListener('click', function() {
            loop('right'); 
        });
        
        function loop(direction) {
            if (direction === 'right') {
                sliders.appendChild(sliders.firstElementChild);
            }else{
                sliders.insertBefore(sliders.lastElementChild,sliders.firstElementChild);
            }
        }


        leftBtn.addEventListener('click', function() {
            loop('left'); 
        });
        
        function loop(direction) {
            if (direction === 'left') {
                sliders.appendChild(sliders.firstElementChild);
            }else{
                sliders.insertBefore(sliders.lastElementChild,sliders.firstElementChild);
            }
        }  */ /* слайдер петля */


        /* let slidesView = 1;
        var maxRight = (sliders.children.length - slidesView) * stepRight;
        var stepRight = sliders.firstElementChild.getBoundingClientRect().width;
        var minRight = 0;
        let currentRight = 0;


        rightBtn.addEventListener('click', e => {
            if (currentRight < maxRight) {
                e.preventDefault();
                currentRight += stepRight;
                sliders.style.right = `${currentRight}px`;
                leftBtnColor.style.fill = `#ffff`;
            } else if (currentRight = maxRight) {
                sliders.style.right = maxRight + 'px';
                rightBtnColor.style.fill = `rgb(46, 49, 51)`;

            }
        })

        leftBtn.addEventListener('click', e => {
            if (currentRight > minRight) {
                e.preventDefault();
                currentRight -= stepRight;
                sliders.style.right = `${currentRight}px`;
                rightBtnColor.style.fill = `#ffff`;

            } else {
                currentRight = minRight;
                sliders.style.right = minRight + 'px';
                leftBtnColor.style.fill = `rgb(46, 49, 51)`;
            }
        }) */

    }

    //-------------POPUP--------------//

    var popupReviews = document.querySelectorAll('.coment__more');
    var popupWindow = document.querySelector('.reviews__popup');
    var closePopupReview = document.querySelector('.popup__close-link');
    //Назначили переменные


    for (const itemReview of popupReviews) {  //перебираем список
        itemReview.addEventListener('click', function (event) { //навешиваем событие
            event.preventDefault();
            popupWindow.style.top = '0'; //добавляем стили
            popupWindow.style.opacity = '1'; //добавляем стили   
            // Получили всплывающую Модалку
            const reviewsItem = event.target.closest('.section__reviews--coments');
            let reviewsName = reviewsItem.querySelector('.coment__name').textContent;
            let reviewsComent = reviewsItem.querySelector('.coment__text').textContent;
            let popupName = document.querySelector('.coment__name-popup');
            let popupComent = document.querySelector('.popup__text');
            popupName.innerHTML = reviewsName;
            popupComent.innerHTML = reviewsComent;
        })
    }



    closePopupReview.addEventListener('click', e=> {
        e.preventDefault();
        popupWindow.style.top = '-10000px';
        popupWindow.style.opacity = '0';
    })

    //--------------POPUP Delivery & Send Form----------------//

    var popupForm = document.querySelector('.btn__deliver');
    var popupFormWindow = document.querySelector('.form__popup');
    var closePopupForm = document.querySelector('.btn__popup-form-close'); 
    var deliveryForm = document.querySelector('.delivery__form');
      
    //Назначили переменные


    popupForm.addEventListener('click', function(event) {  //Навешиваем событие
            event.preventDefault();

            let popupFormText = document.querySelector('.popup__text-form');
            
            if (validateForm(deliveryForm)) {

                var formSend = new FormData(deliveryForm);
                formSend.append('to','fredmaloy@mail.ru');
                
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');        /* https://webdev-api.loftschool.com/sendmail/fail */
                xhr.send(formSend);
                xhr.addEventListener('load', () => {
                    console.log(xhr.status);
                    if (xhr.status) {
                        console.log('все ок на сервере');
                        popupFormWindow.style.top = '0'; //добавляем стили
                        popupFormWindow.style.opacity = '1'; //добавляем стили 
                        popupFormText.innerHTML = 'Ваш заказ принят!!!';                        
                    }else{
                        popupFormText.innerHTML = 'Произошла ошибка!!! Попробуйте позже...';
                        popupFormWindow.style.top = '0'; //добавляем стили
                        popupFormWindow.style.opacity = '1';
                    };
                });
                console.log("все ок");
            }else{
                console.log("заполните все поля!!!");
                popupFormText.innerHTML = 'Пожалуйста, заполните все поля!!!';
                popupFormWindow.style.top = '0'; //добавляем стили
                popupFormWindow.style.opacity = '1';
            };

        });
    
        function validateForm(form) {
            
            var valid = true;

            if (!validateField(form.elements.name)) {
                valid = false;
                console.log('поле имя ошибка');
            }

            if (!validateField(form.elements.phone)) {
                valid = false;
                console.log('поле тел ошибка');
            }

            if (!validateField(form.elements.street)) {
                valid = false;
                console.log('поле улица ошибка');
            }

            if (!validateField(form.elements.house)) {
                valid = false;
                console.log('поле дом ошибка');
            }
            
            if (!validateField(form.elements.floor)) {
                valid = false;
                console.log('поле этаж ошибка');
            }

            return valid;
        };

        function validateField(field) {
            if (!field.checkValidity()) {
            return false;
        } else {
            return true;
        };

        
    };

    closePopupForm.addEventListener('click', e=> {
        e.preventDefault();
        popupFormWindow.style.top = '-10000px';
        popupFormWindow.style.opacity = '0';
    })
   

    $('.section__slider-list').slick({
        nextArrow: $('.section__slider-arrow__right'),
        prevArrow: $('.section__slider-arrow__left')
    });

    $('#fullpage').fullpage({
        menu: '#menu'
    });

};

document.addEventListener("DOMContentLoaded", ready);