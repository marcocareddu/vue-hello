console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Titolone megamagnifico ultrapower',
            image: 'https://picsum.photos/200',
            alt: 'Foto a caso'
        }
    }
});

// mount
app.mount('#root');