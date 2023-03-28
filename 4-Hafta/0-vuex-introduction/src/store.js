import { createStore } from "vuex";

const store = createStore({
    state:{
        person:{
            name:"Oğuz",
            lname:"Küçük",
            age:28
        },
        theme:"dark",
        permissions:[1,2,3,4,5]
    }
})

export default store;

