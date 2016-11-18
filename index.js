window.onload = function(){
    document.getElementsByClassName('main-title')[0].innerHTML = [5,6,0].indexOf((new Date()).getDay()) > -1 ? 'NO' : 'maybe (but probably not)';
}
