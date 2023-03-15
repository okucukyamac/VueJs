const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  computed: {
    getResult() {
      console.log("1 çalıştı");
      return this.counter > 0 ? "Pozitif" : this.counter < 0 ? "Negatif" : "Sıfır";
    },
    getResult2() {
      console.log("2 çalıştı");
      return this.counter2 > 0 ? "Pozitif" : this.counter2 < 0 ? "Negatif" : "Sıfır";
    },
  },
  watch: {
    counter(newValue, oldvalue) {
      console.log(newValue);
      console.log(oldvalue);
    },
    getResult2(){
        console.log("deneme");
    }
  },
}).mount("#app");
