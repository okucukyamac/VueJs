<template>
  <div class="container">
    <div class="header">
      <!-- <h1> {{ title }}</h1> -->
      <slot name="title" />
    </div>
    <div class="content" v-html="content"></div>
    <div>
      <slot name="content" />
    </div>
    <div class="footer text-right">
      <button>Kapat</button>
      <button @click="onSave" class="green">Kaydet</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "onSave"],
};
</script>
