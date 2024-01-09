const vue = Vue.createApp({
    data() {
       
        return { 
            theaters:[],
            theatreInModal:{name: null},

        };
    },
    async created() {
        this.theaters = await (await fetch('http://localhost:8080/theaters')).json();
    },
    method:{
        getTheatre:async function(id){
            this.theatreInModal=await(await fetch(`http://localhost:8080/theatres/${id}`)).json()
            let theatreInModal= new bootstrap.Modal(document.getElementById('theatreInModal'),{})
            theatreInModal.show()
        }
    }
}).mount('#app');