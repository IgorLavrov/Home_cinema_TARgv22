const vue = Vue.createApp({
    data() {
        
        return { 
            theaters: [],
            films: [],
            screenings:[],
            screeningInModal:{},
            theatreInModal: {name: null}, 
            filmInModal: {}
        }
},
async created() {
    this.theaters = await (await fetch('http://localhost:8080/theaters')).json();
    this.films=await(await fetch('http://localhost:8080/films')).json();
    this.screenings=await(await fetch('http://localhost:8080/screenings')).json();
},
methods: {
    getTheatre: async function(id) {
        this.theatreInModal = await (await fetch(`http://localhost:8080/theaters/${id}`)).json();
        let theatreInfoModal = new bootstrap.Modal(document.getElementById('theatreInfoModal'), {})
        theatreInfoModal.show();
    },
    getFilm: async function(id) {
        this.filmInModal = await (await fetch(`http://localhost:8080/films/${id}`)).json();
        let filmInfoModal = new bootstrap.Modal(document.getElementById('filmInfoModal'), {})
        filmInfoModal.show();
    },
    getScreening: async function(id) {
        this.screeningInModal = await (await fetch(`http://localhost:8080/screenings/${id}`)).json();
        let screeningInfoModal = new bootstrap.Modal(document.getElementById('screeningInfoModal'), {})
        screeningInfoModal.show();
    }

}
}).mount('#app')