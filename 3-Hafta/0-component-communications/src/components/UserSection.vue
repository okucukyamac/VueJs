<template>

  <ListSection/>
  <button @click="$emit('new-item',new Date().getTime())">Set Data</button>
  <button @click="newItem(new Date().getTime())">Set Data</button>
</template>
<script>
import ListSection from "@/components/ListSection"; 
export default {
  components: {
    ListSection,
  },
  inject:["newItem"],
  props: (Array, ["userList"]),
};
</script>
