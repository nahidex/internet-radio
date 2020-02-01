export default {
    events: {},
    emit: function(event, data) {        
        if(!this.events[event]) return;
        this.events[event].forEach(cb => {
            cb(data);
        });
    },
    on: function(event, cb) {
        if(!this.events[event]) this.events[event] = [];
        this.events[event].push(cb);
    }
}

