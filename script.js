new Vue({
    el: '#app',
    data: {
        message: 'Hello Mate.js!'
    }
})

const app2 = new Vue({
    el: '#app-2',
    data: {
        message: `You loaded this on ${new Date().toLocaleString()}`
    }
})

const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})

const app4 = new Vue({
    el: '#app-4',
    data: {
    todos: [
        { text: 'learn JS' },
        { text: 'learn Vue' },
        { text: 'Build something cool' }
    ]
    }
})

const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello mate'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
            console.log(this.message)
        }
    }
})

const app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hey mate'
    }
})

Vue.component('todo-item', {
    prop: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

const app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'veges'},
            {id: 1, text: 'cheese'},
            {id: 2, text: 'other'}
        ]
    }
})