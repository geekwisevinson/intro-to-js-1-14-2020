class Log {
    intent(name, objective, more) {
        console.log(more);
        this.log(this.quotes(name), 'the INTENT:: ', objective, more ? more : '')
    }
    calls(name, second, reason, response){
        this.log(this.quotes(name), 'CALLS', this.quotes(second), reason, 'EXPECTS to be returned',response ? response: 'nothing')
    }
    resolves(name, second, response) {
        this.log(this.quotes(name), 'is done Waiting... NOW has the RESULT of the promise RESOLVED by', this.quotes(second), 'the value is ', response)
    }
    log(message) {
        console.log(...arguments);
    }

    quotes(phrase) {
        return `"${phrase}"`;
    }
}
