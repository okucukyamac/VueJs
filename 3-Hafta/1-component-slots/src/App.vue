<template>
  <ModalItem>
    <template #title>
      <h3>Slot ile gelen Title bilgisi</h3>

    </template>
  
    <template #content>
      <h3>Slot ile gelen Titasflajknfşlkajlkjfs alafjşlsfajşlfakjşlfdsk lsd fsl ajlsfdjle bilgisi</h3>

    </template>
  </ModalItem>
  <!-- <ModalItem :on-save="onSave" :title="'Modal Title'" :content="content" /> -->
</template>

<script>
import ModalItem from "@/components/ModalItem";
export default {
  components: {
    ModalItem,
  },
  data() {
    return {
      content: `<h3 class="text-red">title</h3>`,
    };
  },
  methods: {
    onSave() {
      alert("Saved!!");
    },
  },
};
</script>
