// 1. Создается загрузка api youtube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Создается объект player. This function creates an <iframe> (and YouTube player)
// где videoId - это идентификатор видео. 
// В любом месте можно изменить значение видео с помощью player.loadVideoById('новый_идентификатор_видео');
// Параметры плеера, такие как показать/скрыть controls, showinfo можно править в массиве playerVars
 var player;
 function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '320',
        width: '100%',
        videoId: '974CsH5Cumg',
        playerVars: { 
	       'autoplay': 0,
           'controls': 0, 
           'showinfo': 0
	   },
        events: {
        'onReady': onPlayerReady
      }
    });
}

//функция, которая останавливает проигрывание      
  
function stopVideo() {
    player.stopVideo();
}

//Эта простая функция парсит URL ссылки видео с youtube и возвращает идентификатор видео.
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
