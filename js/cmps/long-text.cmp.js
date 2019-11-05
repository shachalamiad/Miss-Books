'use strict'

export default{
    props: ['text'],
    template: `
    <section :class="{'long-text': isBiggerThan100}">
        <div @click="toggleText">{{textDescription}}</div>
    </section>
    `,
    data() {
        return {
            textDescription: this.text,
            isBiggerThan100: false
        }
    },
    methods: {
        toggleText() {
            this.textDescription = this.text;
        }
    },
    created() {
        if (this.text.length > 100) {
            this.textDescription = this.text.substring(0,100) + '...';
            this.isBiggerThan100 = true;
        }
    }
    
}