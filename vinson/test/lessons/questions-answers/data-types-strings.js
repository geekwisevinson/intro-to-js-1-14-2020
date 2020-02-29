function getDataTypesStrings() {
    return {
        html: getHtml(),
        js: getJs(),
        jsStart: {line: 7, ch: 0, sticky: null},
        instructions : getInstructions(),
        name: 'data-types: strings',
    };

    function getHtml() {
        return `<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h1 class="test">Write a string.</h1>
        <${'script'}>

        <${'/script'}>
    </body>
</html>`.trim();
    }

    function getJs() {
        return `            'a string with single quotes.'
            "a string with double quotes."
            \`a string with backtick quotes.\`
            `.trimRight();
    }

    function getInstructions() {
        return `
            <h1>Data Types: Stings</h1>
            <p>Strings are written with quotes</p>
            <p>Strings can have a single quotes  'a string with single quotes.'</p>
            <p>Strings can be double quotes "a string with double quotes."</p>
            <p>Strings can have backtick quotes \`a string with backtick quotes.\` </p>
        `;
    }

}
