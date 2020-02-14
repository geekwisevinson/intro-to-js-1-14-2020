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
                return item;
            }
        }).sort((item, b )=> item.isFile ?
            1 :
            item.name.toLowerCase() > b.name.toLowerCase()? 1 : -1);
}
fs.writeFileSync('./test.json', JSON.stringify(index.root, null, 4) );
fs.writeFileSync('./test.html', whatToWrite(index.root));

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
   <h${item.level}>${item.name}</h${item.level}>
   <ul>
   ${testDirectory(item)}
</ul>
</li>

</div>
     
    `
}

function createHTMLFile(item) {
    console.log(item);
    return item.type !== 'html' ? `
     <a href="${item.path}">${item.name}</a>
            ` :  `
     <a href="${item.path}" class="html">${item.name}</a>
            `
}

function testDirectory(item) {
    let html = '';

    item.folders.forEach(item => {
        html += testItem(item, item.name)
    });
    return html;
}


function getStartHtml() {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Intro to js</title>
    <style>
    li {
        border: 1px solid black;
        list-style: none;
        padding-left: 1em;
        padding-bottom: 1em;
    }
    a {
        margin: 20px;
    }
    
    h1 + ul {
        height: 0;
        overflow: hidden;
    }
    
    h1.show + ul {
        height: auto;
    }
    .html{
        font-size: xx-large;
    }
</style>


</head>
<body>
    `
}


function getEndHtml() {
 return `
    <script >
        document.querySelectorAll('h1').forEach(function() {
          this.addEventListener('click', show)
        })
    
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
