<template>
  <TodoList :myData="todoList" @delete-todo-item="deleteItem($event)" />
  <ResultBar :itemCount="todoList.length" />
</template>

<script>
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar";

export default {
    props:{
        todoList:{
            type:Array,
            required:true
        }
    },
  components: {
    TodoList,
    ResultBar,
  },
};
</script>
