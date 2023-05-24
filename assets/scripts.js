function showPreloader(_show = true, _container = false){
    if (
        !_container
        || (_container && !document.querySelector(_container))
    ) {
        _container = 'body';
    }
    let container = document.querySelector(_container),
        className = 'preloader';
        
    let preloader = document.querySelector(_container + ' > .' + className);
    if (_show && !preloader) {
        preloader = document.createElement('div');
        preloader.classList.add(className);
        if (_container == 'body') {
            preloader.classList.add('preloader--fixed');
        }
        preloader.innerHTML = '<div class="preloader__ring"><div></div><div></div><div></div><div></div></div>';
        container.appendChild(preloader);

    } else if (!_show && preloader) {
        preloader.remove();
    }
}
