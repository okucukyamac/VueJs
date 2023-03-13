const app = Vue.createApp({
  data() {
    return {
      title: "Bu Vue tarafından gelen bir bilgidir..",
      content: "lorem ipsum dolor sit amet",
      hobbies: [1, 2, 3, 4, 5],
      personal: {
        name: "Oğuzhan",
        lname: "Küçükyamaç",
        phone: "xxx",
      },
      details: `<a href="https://www.google.com">Tıklayınıc</a>`,
      url: "https://www.google.com",
    };
  },
  methods: {
    tikla(title) {
      this.title = title||"değişen title";
    },
  },
}).mount("#app");
