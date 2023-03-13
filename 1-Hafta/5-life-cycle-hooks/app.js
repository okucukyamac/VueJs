const app = Vue.createApp({
    data() {
        return {
            title: "Test Başlığı",
            itemList: [],
        };
    },
    beforeCreate() {
        //sayfa yüklendiğinde çalışır
        console.log("beforeCreated Çalıştı..");
    },
    created() {
        //sayfa yüklendiğinde çalışır
        console.log("created Çalıştı..");
        setTimeout(() => {
            this.itemList=[1,2,3,4,5,6,7,8]
        }, 2000);

        setTimeout(() => {
            this.title="Bu yeni başlık"
        }, 3000);
    },
    beforeMount() {
        //sayfa yüklendiğinde çalışır
        console.log("beforeMount Çalıştı..");
    },
    mounted() {
        //sayfa yüklendiğinde çalışır
        console.log("mounted Çalıştı..");
    },
    updated() {
        //sayfada değişiklik olduğunda çalışır
        console.log("updated Çalıştı..");
    },
    beforeUpdate() {
        //sayfada değişiklik olmadan önce çalışır
        console.log("beforeUpdate Çalıştı..");
    },
   
    beforeUnmount() {
        //unmount öncesi çalışır
        console.log("beforeUnmount Çalıştı..");
    },
    unmounted() {
        //unmount sonrası çalışır
        console.log("unmounted Çalıştı..");
    },
});



app.mount("#app");


setTimeout(() => {
    app.unmount();
}, 5000);