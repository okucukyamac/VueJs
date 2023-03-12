const app = Vue.createApp({
    data() {
        return {
            title: "Vue.js Bootcamp 1.gün",
            eduflow: {
                title: "Mufredat için tıklayınız",
                target: "_blank",
                url: "https://www.google.com",
                alt: "google-tarayıcı",
            },
            owner: "pogaca",
        };
    },
}).mount("#app");
