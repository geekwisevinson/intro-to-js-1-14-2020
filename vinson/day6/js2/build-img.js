function buildImg(path) {
    const img = document.createElement('img');
    img.src = path;
    document.body.appendChild(img);
    console.log(img);
    return img;
}

