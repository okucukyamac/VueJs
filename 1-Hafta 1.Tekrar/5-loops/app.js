const app = Vue.createApp({
  data: function () {
    return {
    memberList:[
      {id:1,name:"Erhan Aydoğdu"},
      {id:2,name:"Şafak Şenel"},
      {id:3,name:"Muhammed Öztürk"},
      {id:4,name:"Oğuzhan Küçükyamaç"},
      {id:5,name:"Onur Şen"},
      "Erhan Aydoğdu",
      "Şafak Şenel",
      "Muhammed Öztürk",
      "Oğuzhan Küçükyamaç",
      "Onur Şen"
    ]
    };

  },
  methods: {

  },
}).mount("#app");
