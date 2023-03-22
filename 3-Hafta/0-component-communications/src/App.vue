<template>
  <div class="container">
    <UserSection :userList="userList" @new-item="provideData.userList.push($event)" />
  </div>
</template>

<script>
import UserSection from "@/components/UserSection";

export default {
  components: {
    UserSection,
  },
  data() {
    return {
      provideData: {
        userList: ["Erhan", "Emre", "Fatih", "Furkan", "Murat"],
      },
    };
  },
  methods:{
    newItem(item){
      this.provideData.userList.push(item);
    }
  },
  provide() {
    return{
      userList:this.provideData.userList,
      newItem:this.newItem
    }
  },
};
</script>
