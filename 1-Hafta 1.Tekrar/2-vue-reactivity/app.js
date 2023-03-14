const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  mothods: {
    getResult() {
      return this.counter > 0 ? "Pozitif" : this.counter < 0 ? "Negatif" : "Sıfır";
    },
  },
}).mount("#app");
