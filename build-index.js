const fs = require('fs');
const index = getInfo(['.']);
build();
console.log(JSON.stringify(index, null, 4));
function build() {
    index.root = getInfo(['.'])
}
function getInfo(pathSrc) {
    return fs.readdirSync(pathSrc.join('/'), { withFileTypes: true })
        .map(item => ({
            name: item.name,
            isDirectory: item.isDirectory(),
            isFile: item.isFile(),
            level: pathSrc.length,
        })).filter(item => (item.name[0] !== '.'))
        .map( item => {
            item.path = [...pathSrc, item.name].join('/');
            if (item.isFile) {
                item.type = item.path.split('.')[2];
                return item;
            }
            if (item.isDirectory) {
                const newPathSource = [...pathSrc, item.name];
                item.folders = getInfo(newPathSource);
                item.type = 'folder';
                return item;
            }
        }).sort(reOrder).sort(reOrder);
}
fs.writeFileSync('./test.json', JSON.stringify(index.root, null, 4) );
fs.writeFileSync('./index.html', whatToWrite(index.root));

function whatToWrite(arr) {
    let html = getStartHtml();

    arr.forEach(item => {
        html += testItem(item, 'root');
    });

    html += getEndHtml();
    return html;
}


function testItem(item, loc) {
    if (item.isDirectory) {
        return createHTMLFolder(item, loc)
    }
    if (item.isFile) {
        return createHTMLFile(item)
    }
}

function createHTMLFolder(item, name) {
    return `
<div>
<li>
   <h${item.level}>${item.name[0].toUpperCase() + item.name.slice(1)}</h${item.level}>
   <ul>
   ${testDirectory(item)}
</ul>
</li>

</div>
     
    `
}

function createHTMLFile(item) {
    console.log(item);
    return `<a class="${item.type}" href="${item.path}">${item.name}</a>`;
}

function testDirectory(item) {
    let html = '';

    item.folders.forEach(item => {
        html += testItem(item, item.name)
    });
    return html;
}

function reOrder( a, b ) {
    const good = -1;
    const bad = -good;
    const idk = 0;
    if (a.type === 'folder' && b.type !== 'folder' ) {
        return good;
    }
    if (a.type === 'html' && ( b.type !== 'folder' && b.type !== 'html'  )) {
        return good;
    }
    if (a.type === 'js' && ( b.type !== 'folder' && b.type !== 'html' && b.type !== 'js'  )) {
        return good;
    }
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return good;
    }
    return 0;
}


function getStartHtml() {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Intro to js</title>
    <link href="https://fonts.googleapis.com/css?family=Lemonada&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Patua+One&display=swap" rel="stylesheet">
    <style>
    body {
        /*font-family: 'Lemonada', cursive;*/
        font-family: 'Patua One', cursive;
      background: 
    linear-gradient(
            hsla(0, 10%, 90%, .7),
       hsla(0, 10%, 90%, .7)
    ),
    url(./rocks-tile.jpg);
  background-size: cover;
  height: 100vh;
    }
    
    h1 {
        padding-left: 20px;
        user-select: none;
 
    }
    
    li {
        border: 1px solid black;
        box-shadow: 8px 7px #888888;
        list-style: none;
        background-color: ${getHsla(0, 10, 90, .9)};
        margin-bottom: 7px;
        padding-bottom: 4px;
    }
    
    h1 + * {
         background-image: url("./rocks-tile.jpg");
    }
    
    a {
        margin: 0 20px;
        padding-bottom: 10px;
        display: inline-block;
    }
    
   
    
    h1 + ul {
        height: 0;
        overflow: hidden;
            background-color: ${getHsla(0, 10, 90, .9)};
     margin: 0;
     padding: 0;
         linear-gradient(
            hsla(0, 10%, 90%, .7),
       hsla(0, 10%, 90%, .7)
    ),
    url(./rocks-tile.jpg);
    }
    
    ul {
     background-color: ${getHsla(0, 10, 90, .9)};
     margin: 0 !important;
     padding: 0 !important;
    }
    
    h1.show + ul {
        height: auto;
        background-color: ${getHsla(0, 10, 90, .9)};
     margin: 0;
     padding: 0;
    }
    h1.show + ul li{
        background-color: ${getHsla(0, 10, 90, .9)};
        padding: 0 20px;;
    }
     h1.show + ul > a{
        background-color: ${getHsla(0, 10, 90, .9)};
        padding: 0 20px;;
    }
    .html{
        font-size: xx-large;
        color: green;
        font-weight: bolder;
    }
    .js {
       font-size: x-large;
       font-weight: bolder;
       color: darkred;  
    }
</style>


</head>
<body>
    <h1></h1>
    `
}


function getEndHtml() {
 return `
    <script >
        document.querySelectorAll('h1').forEach(function() {
          this.addEventListener('click', show);
        });
    
        function show(event) {
            console.log( event);
            // document.querySelectorAll('.show').forEach( item => {
            //     item.classList.remove('show');
            // });
          event.target.classList.contains('show') ? 
          event.target.classList.remove('show') :
          event.target.classList.add('show');
          
        }
    </script>
</body>
 `
}

function getHsla(h,s,l, a) {
    return `hsla(${h}, ${s}%, ${l}%, ${a})`
}
