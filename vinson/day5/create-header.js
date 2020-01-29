function createHeader() {
   const el = document.createElement('h1');
   el.innerHTML = 'Hello World!';
   document.body.prepend(el);
    currentElement = el;
    el.addEventListener('click', function () {
        score++;
        updateScore();
    })
}

