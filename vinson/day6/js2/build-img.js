function buildImg() {
    const img = document.createElement('img');
    img.src = 'img/sprite.png';
    document.body.appendChild(img);
    return img;
}
function buildImg2() {
    const img2 = document.createElement('img');
    img2.src = 'img/sprite.png';
    document.body.appendChild(img2);
    img.style.transform = 'scaleX(-1)';
    return img2;
}

