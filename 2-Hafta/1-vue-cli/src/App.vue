<template>
  <app-header/>
  <div class="app">
    <h3>Bu benim ilk Vue CLI uygulamam</h3>
    <p>Bu benim ilk Vue CLI uygulamam</p>
  </div>

  <CounterItem></CounterItem>
  <CounterItem/>
  <counter-item/>
  <benim-sayacim></benim-sayacim>
</template>


<script>
import CounterItem from "@/components/CounterItem.vue";
export default{
  components:{
    CounterItem,
    "benim-sayacim":CounterItem
  }
}
</script>