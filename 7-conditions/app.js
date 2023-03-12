const app = Vue.createApp({
    data() {
        return {
            showContainer: false,
            counter:0
        };
    },
    methods: {},
    computed:{
        counterBoxClass(){
            return {'bg-success': this.counter>0,'bg-danger':this.counter<0}
        }
    }
}).mount("#app");
