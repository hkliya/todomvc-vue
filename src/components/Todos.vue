<template>
  <div class="todos">
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
      todos: [
        {
          title: 'buy milk',
          completed: false
        },
        {
          title: 'buy salt',
          completed: true
        }
      ]
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
