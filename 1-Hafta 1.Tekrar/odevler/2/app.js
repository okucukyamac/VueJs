const app = Vue.createApp({
data(){
return{
deneme:"deneme",
value:""
}
},
methods:{
    alrt(){
        alert("denemedir");
        this.deneme="ddd";
    },
    random(){
        return Math.random();
    },
    valueUpdate(e){
        console.log(e.target.value);
    }
}
}).mount("#app");