const express = require('express');
const greetMiddleware = require('./greet.js');
class GreetingService {
    constructor(greeting = 'Hello') {
        this.greeting = greeting;
    }
    createGreeting(name) {
        return `${this.greeting}, ${name}!`;
    }
}
express()
    .use('/api/v1/service1', express({ service: new GreetingService('Hello'), }))
    .use('/api/v1/service2', express({ service: new GreetingService('Hi'), }))
    .listen(8878);