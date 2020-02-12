function buildImg(path) {
    const img = document.createElement('img');
    img.src = path;
    img.width = 100;
    document.body.appendChild(img);
    console.log(img);
    return img;
}

