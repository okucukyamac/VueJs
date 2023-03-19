<template>
  <ul>
    <!-- <li v-for="todoItem in todoList" :key="todoItem.id" class="d-flex justify-content-between align-items-center">
        <span>Todo Item #{{ todoItem.text }}</span>
        <button @click="deleteItem(todoItem)" class="sm red">Sil</button>
      </li> -->
    <TodoListItem @delete-todo-item="$emit('delete-todo-item', $event)" :item="todoItem" v-for="todoItem in myData" :key="todoItem.id" />
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";

export default {
  // props:["myData"],
  inject: ["todoList"],
  components: {
    TodoListItem,
  },
};
</script>
