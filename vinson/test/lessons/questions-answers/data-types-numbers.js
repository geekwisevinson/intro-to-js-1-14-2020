function getDataTypesNumbers() {
    return {
        html: getHtml(),
        js: getJs(),
        jsStart: {line: 7, ch: 0, sticky: null},
        instructions : getInstructions(),
        name: 'data-types: numbers',
    };

    function getHtml() {
        return `<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h1 class="test">Write a number</h1>
        <${'script'}>

        <${'/script'}>
    </body>
</html>`.trim();
    }

    function getJs() {
        return `            127
            1.27
            -12.7
            `.trimRight();
    }

    function getInstructions() {
        return `
            <h1>Data Types: Numbers</h1>
            <p>Numbers are written without quotes 127</p>
            <p>Numbers can have a decimal 1.27</p>
            <p>Numbers can be negative -12.7</p>
            <p>write a number</p>
        `;
    }

}
