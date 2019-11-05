'use strict'
import longText from '../cmps/long-text.cmp.js'
import {bookService} from '../services/book-service.js'
import userReviews from '../cmps/user-reviews.cmp.js'
import userMsg from '../cmps/user-msg.cmp.js'
import {eventBus} from '../services/event-bus-service.js'


export default {
    
    template: `
    <section v-if="book" class="books-details-container">
    <div> {{review}} </div>
        <div class="book-details" :class="{expensive:book.listPrice.amount > 150, 
            cheap:book.listPrice.amount < 20}" v-if="book">
            <h3>{{book.title}}</h3>
            <div>Authors: {{book.authors.join('')}}</div>
            <div><long-text :text="getDesc"></long-text></div>
            <div>Publish Year: {{book.publishedDate}}</div> <span>{{bookSeniority}}</span>
            <div>{{readingLength}}</div>

            
            <div v-for="review in book.review" :key="review.date">
                User :{{review.name}}
                Date: {{review.date}}
                Rating:{{review.rate}}
                Review: {{review.text}}
                <button @click="handleDeleteReview(review.id)">Delete Review</button>
            </div>
            <button class="close-modal" @click="closeModal">X</button>
            <user-reviews @addReview="addReview"></user-reviews>
        </div>
    </section>
    `,
    data() {
        return {
            book: null,
            review: null,
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },
        addReview(review){
            bookService.addReview(review, this.book.id)
            eventBus.$emit('show-msg', 'Review Added Successfully')
        },
        handleDeleteReview(reviewId){
            bookService.deleteReview(reviewId, this.book.id)
            eventBus.$emit('show-msg', 'Review Deleted Successfully')
        }
    },
    computed: {
        readingLength() {
            if (this.book.pageCount > 500) return 'Long Reading';
            else if (this.book.pageCount > 200 && this.book.pageCount < 500) return 'Decent Reading'
            return 'Light Reading'
        },
        bookSeniority() {
            if (this.book.publishedDate < 2009) return 'A Veteran Book'
            else if(this.book.publishedDate > 2017) return 'New!'
        },
        getDesc() {
            return this.book.description
        }
    },
    components: {
        longText,
        userReviews,
        userMsg
    },
    created(){
        const bookId = this.$route.params.id;
        bookService.findBook(bookId)
            .then(book =>{
                this.book = book
        })
    }
}