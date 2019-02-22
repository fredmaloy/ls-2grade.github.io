function ready() {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [61.265924, 73.373046],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([61.264574, 73.371905], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя',
                iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '../icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-10, 0],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [13, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

            myPlacemarkWithContent2 = new ymaps.Placemark([61.265847, 73.370440], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя',
                iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '../icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-10, -30],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [13, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
            

            myMap.behaviors.disable('scrollZoom'); 
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent)
            .add(myPlacemarkWithContent2);
    });
}

document.addEventListener("DOMContentLoaded", ready);