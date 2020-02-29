function getQuerySelectorAllQA() {
    return {
        html: getHtml(),
        js: getJs(),
        jsStart: {line: 8, ch: 0, sticky: null},
        instructions : getInstructions(),
        name: 'targeting: querySelectorAll',
    };

    function getHtml() {
        return `<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h1 class="test">Please don't turn me red!</h1>
        <h1 class="test">Can you please turn me red?</h1>
        <${'script'}>

        <${'/script'}>
    </body>
</html>`.trim();
    }

    function getJs() {
        return `         document.querySelectorAll('.test')[1].style.color = 'red';
            `.trimRight();
    }

    function getInstructions() {
        return `
            <h1>Targeting: QuerySelectorAll</h1>
            <p>document has a METHOD called querySelectorAll. it takes a PARAMETER of type STRING. The STRING should be a valid "css" selector.</p>
            <p>It "returns" an HTML-COLLECTION of ELEMENT-NODES. Something like an ARRAY</p>
            <p>use querySelectorAll to get the second h1 then turn it red</p>
        `;
    }

}
