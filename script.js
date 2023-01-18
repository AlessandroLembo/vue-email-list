console.log('VUE JS', Vue);

/*
TRACCIA:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

Super Bonus
Riusciamo a gestire e mostrare un loader mentre le mail non sono ancora tutte pronte?
*/

const app = Vue.createApp({
    data(){
        return{ 
           emailList: [],
           emailNumbers: 10,
        }
    },

    methods:{
        getRandomEmails(){
            this.isLoading = true;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
              this.emailList.push(response.data.response);
         })
        }
    },

    created(){
       for(let i = 0; i < 10; i++){
        this.getRandomEmails();
       }
    }

});

app.mount('#root');




