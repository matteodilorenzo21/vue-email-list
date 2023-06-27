const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const display = document.querySelector('#display');

const app = Vue.createApp({
    data() {
        return {
            emails: [],
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
          axios.get(endpoint)
            .then((res) => {
              const resultEmail = res.data.response;
              this.emails.push(resultEmail);
            })
            .catch((error) => {
              alert('Errore nella pagina');
            });
        }
      },
    });

app.mount('#root');