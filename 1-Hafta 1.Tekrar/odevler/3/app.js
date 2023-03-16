const app = Vue.createApp({
  data() {
    return {
      styles: {
        backgroundColor: false,
        border: false,
        color: false,
        borderRadius: false,
        fontBold: false,
        fontItalic: false,
      },
    };
  },
  computed:{
    colorr(){
        return {"text-bg-danger" : this.styles.color }
    }
  }
}).mount("#app");
