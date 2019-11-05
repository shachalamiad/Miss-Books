'use strict'


export default ('user-reviews',{ 
    props:['bookName'],
    template: `
        <section class="user-reviews">
            <h2>Your Book Review</h2>
            <form action="">
            <input type="text" placeholder="Please enter your name" v-model.trim="review.name"/>
            <select v-model.number="review.rate">
                <p> Book rate: </p>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type="date" v-model="review.date"/>
            <textarea v-model="review.text" cols="30" rows="5"></textarea>
            <button @click.prevent="handleReview">Add</button>
            </form>
        </section>
    
    `,
    data() {
        return {
            review: {
                book: this.bookName,
                name: '',
                rate: 0,
                date: '',
                text: ''
            }
        }
    },
    methods: {
        handleReview() {
            this.$emit('addReview', this.review)
            this.review = {
                book: this.bookName,
                name: 'Book Reader',
                rate: 0,
                date: '',
                text: ''
            }
        }
    }

})