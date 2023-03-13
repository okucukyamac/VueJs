const app = Vue.createApp({
    data() {
        return {
            showBorder: false,
            redBG: false,
            boxClass: "border red",
        };
    },
    methods:{
        deneme(){
            console.log(this.showBorder);
        }
    },
    computed: {
        boxClasses() {
            this.deneme()

            return { border: this.showBorder, red: this.redBG };
        },
    },
}).mount("#app");
