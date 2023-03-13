const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
        };
    },
    methods: {
        // getCounterResult() {
        //     console.log("c1");
        //     return this.counter > 5 ? "Büyük" : "Küçük";
        // },

        // getCounter2Result() {
        //     console.log("c2");

        //     return this.counter2 > 5 ? "Büyük" : "Küçük";
        // },
        // inc() {
        //     this.counter += 1;
        // },
        // denc() {
        //     this.counter -= 1;
        // },
    },
    computed: {
        getCounterResult() {
            console.log("c1");
            return this.counter > 5 ? "Büyük" : "Küçük";
        },

        getCounter2Result() {
            console.log("c2");

            return this.counter2 > 5 ? "Büyük" : "Küçük";
        },
    },
    watch:{
        counter(newValue,oldValue){
            console.log(oldValue,"=>",newValue)
        }
    }
}).mount("#app");
