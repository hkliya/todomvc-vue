<template>
  <div class="todos">
    <input type="text" autofocus placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
    <ul>
      <li v-for="todo in todos">
        <div class="view">
          <input type="checkbox" v-model="todo.completed">
          <label>{{ todo.title }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todos',
  data () {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo () {
      let value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.todos.push({title: value, completed: false})
      this.newTodo = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}
</style>
