console.log('ciao')
const { createApp } = Vue

createApp({
  data() {
    return {
      todoList:[
        {
            text:'fare le prove col gruppo',
            done: true
        },
        {
            text:'riunione condominiale',
            done: false
        },
        {
            text:'fare esercizi di Boolean',
            done: true
        },
        {
            text:'uscire con gli amici',
            done: true
        },
        {
            text:'andare al  concerto dei Pixies',
            done: true
        },
      ]
    };

  },
  methods: {
    removeTodo(index) {
      this.todoList.splice(index, 1);
    }
  }
}).mount('#app')