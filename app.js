const app = Vue.createApp({
    data() {
        return {
            firstName: 'Valentin',
            lastName: 'Labat',
            email: 'vl@vl.vl',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        //async = utilisation d'une api
        async getUser() {
            const res = await fetch("https://randomuser.me/api")
            const {results} = await res.json()
            
            //console.log(results)
            // this pour que cela affecte les données de la page
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender =  results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')