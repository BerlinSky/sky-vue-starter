import Vue from 'vue';
import App from './App.vue';

import User from './components/User.vue';

Vue.component('app-user', User);

new Vue({
  el: '#app',
  render: h => h(App)
})
// const main = () => {
//   new Vue({
//     el: '#app',
//     data: {
//       todos: [],
//       userInput: ''
//     },
//     methods: {
//       addTodo: function() {
//         if (this.userInput.trim() == '') {
//           return;
//         }
//         var newTodo = {
//           id: Math.floor(Math.random() * Math.floor(3500)),
//           value: this.userInput
//         };
//         this.todos.push(newTodo);
//         console.log(this.todos);
//       },
//       removeTodo(todo) {
//         var id = todo.id;
//         for (var i = 0; i < this.todos.length; i++) {
//           if (this.todos[i].id == id) {
//             this.todos.splice(i, 1);
//             break;
//           }
//         }
//       }
//     }
//   });
// }

// (function(){
//   main();
// })()
