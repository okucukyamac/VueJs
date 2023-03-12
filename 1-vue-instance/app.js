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
            coords: {
                x: 0,
                y: 0,
            },
        };
    },
    methods: {
        changeTitle(pTitle) {
            this.title = pTitle;
        },
        updateCoords(message) {
            this.changeTitle(`${event.x},${event.y}`);
            this.coords = {
                x: event.x,
                y: event.y,
            };
        },
    },
}).mount("#app");
