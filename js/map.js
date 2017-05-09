
ymaps.ready(init);
var myMap, 
myPlacemark;

function init(){ 
	myMap = new ymaps.Map("map", {
		center: [55.75430171942093,37.762623379623356],
		zoom: 16,
		controls: []
	},
	{suppressMapOpenBlock: true}); 
	
	myPlacemark = new ymaps.Placemark([55.75430171942093,37.762623379623356], {
		hintContent: '',
		balloonContent: ''
	}, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-ic.png',
      // Размеры метки.
      iconImageSize: [30, 35],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
  }
  );
	myMap.behaviors.disable('scrollZoom');
	myMap.geoObjects.add(myPlacemark);
}