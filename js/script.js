console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Titolone megamagnifico',
            image: 'https://picsum.photos/200',
            alt: 'Foto a caso',
            text: `Roba a caso giusto per vedere se funziona`,
            classColor: 'text-danger'
        }
    },
    methods: {
        toggleClassColor() {
            this.classColor === 'text-danger' ? this.classColor = 'text-success' : this.classColor = 'text-danger';
        }
    }
});

// mount
app.mount('#root');