const events = require('events')

const eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', ()=>{
    console.log('event emitted');
})

eventEmitter.emit('scream');