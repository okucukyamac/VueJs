<template>
  <div class="container">
    <h3>Todo App</h3>
    <hr class="mt-2 mb-2" />
    <AddSection @add-todo="addNewTodo" :addNewTodo="addNewTodo" />
    <ListSection @delete-todo-item="deleteItem" :todoList="todoList" />
  </div>
</template>

<script>
import AddSection from "@/components/AddSection";
import ListSection from "@/components/ListSection";

export default {
  components: {
    AddSection,
    ListSection,
  },
  data() {
    return {
      todoList: [
        { id: 1, text: "Bootcamp #2" },
        { id: 2, text: "Bootcamp #2.1" },
        { id: 3, text: "Bootcamp #2.2" },
        { id: 4, text: "Bootcamp #2.3" },
        { id: 5, text: "Bootcamp #2.4" },
        { id: 6, text: "Bootcamp #2.5" },
      ],
    };
  },
  provide() {
    return {
      todoList: this.todoList,
    };
  },
  created() {
    // setTimeout(() => {
    //   this.todoList = [ { id: 1, text: "Bootcamp #2" },
    //     { id: 2, text: "Bootcamp #2.1" },
    //     { id: 3, text: "Bootcamp #2.2" },
    //     { id: 4, text: "Bootcamp #2.3" },
    //     { id: 5, text: "Bootcamp #2.4" },
    //     { id: 6, text: "Bootcamp #2.5" },];
    // }, 2000);
  },
  methods: {
    deleteItem(todoItem) {
      this.todoList = this.todoList.filter((t) => t !== todoItem);
    },
    addNewTodo(todo) {
      this.todoList.push({
        id: new Date().getTime(),
        text: todo,
      });
    },
  },
};
</script>
