const app = Vue.createApp({
  data: function () {
    return {
      name: "Oğuzhan Küçükyamaç",
      age: "28",
      random: 0,
      imageUrl:"https://st1.myideasoft.com/idea/hn/08/myassets/blogs/en-saglam-agac.jpg?revision=1615379199"
    };
  },
  methods: {
    randomNum() {
      return Math.round(Math.random() * 100);
    },
  },
}).mount("#app");
