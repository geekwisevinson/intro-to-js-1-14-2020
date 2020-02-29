function getQuerySelectorQA() {
    return {
        html: getHtml(),
        js: getJs(),
        jsStart: {line: 7, ch: 0, sticky: null},
        instructions : getInstructions(),
        name: 'targeting: querySelectorAll',
    };

    function getHtml() {
        return `<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h1 class="test">Can you please turn me red?</h1>
        <${'script'}>

        <${'/script'}>
    </body>
</html>`.trim();
    }

    function getJs() {
        return `         document.querySelector('.test').style.color = 'red';
            `.trimRight();
    }

    function getInstructions() {
        return `
            <h1>Targeting: QuerySelector</h1>
            <p>document has a METHOD called querySelector. it takes a PARAMETER of type STRING. The STRING should be a valid "css" selector.</p>
            <p>It "returns" an ELEMENT-NODE</p>
            <p>use query selector to get the h1 then turn it red</p>
        `;
    }

}
