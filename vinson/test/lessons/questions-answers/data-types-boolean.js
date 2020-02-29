function getDataTypesBoolean() {
    return {
        html: getHtml(),
        js: getJs(),
        jsStart: {line: 7, ch: 0, sticky: null},
        instructions : getInstructions(),
        name: 'data-types: boolean',
    };

    function getHtml() {
        return `<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h1 class="test">Write a boolean</h1>
        <${'script'}>

        <${'/script'}>
    </body>
</html>`.trim();
    }

    function getJs() {
        return `            true
            false
            `.trimRight();
    }

    function getInstructions() {
        return `
            <h1>Data Types: Boolean</h1>
            <p>Booleans are written without quotes either true or false.</p>
            <p>True or false are the only two values a boolean can be.</p>
            <p>write a boolean</p>
        `;
    }

}
