function createHeader() {
    const el = document.createElement('h1');
    el.innerHTML = 'Begin!';
    document.body.prepend(el);
     currentElement = el;
 }

// function createUl() {
//     const el = document.createElement('div');
//     el.innerHTML = 'part 1';
//     document.body.insertBefore(el, currentElement.nextSibling);
//     currentElement = el;
// }

// function createHeaderPure(el, color) {
//     el.style.backgroundColor = color;

// }