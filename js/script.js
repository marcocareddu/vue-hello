console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Titolone megamagnifico',
            image: 'https://picsum.photos/200',
            alt: 'Foto a caso',
            text: `Roba a caso giusto per vedere se funziona`
        }
    }
});

// mount
app.mount('#root');