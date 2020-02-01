function buildCanvas() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = 360;
    canvas.height = 640;
    return canvas;
}
