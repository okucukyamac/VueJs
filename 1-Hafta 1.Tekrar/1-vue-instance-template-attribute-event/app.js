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
      fullName: "Oğuzhan Küçükyamaç",
    };
  },
  methods: {
    tikla(title) {
      this.title = title || "değişen title";
    },
    // updateValue(f,e) {
    //   console.log(f + e.target.value);
    //   this.fullName=e.target.value;
    // },
  },
}).mount("#app");
