'use strict'

import bookDetails from '../cmps/book-details.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';
import appHeader from '../cmps/app-header.cmp.js';
import userMsg from '../cmps/user-msg.cmp.js';

import {bookService} from '../services/book-service.js';

Vue.config.productionTip = false


export default {
    // el: '#my-app',
    template: `
    <div class="books-handler">
        <book-filter @filtered="setFilter"></book-filter>
        <book-list :books="booksToShow" @selected="selectBook"></book-list>
        <book-details v-if="isSelected" :book="selectedBook" @closeModal="closeModal"></book-details>      
        <user-msg></user-msg>
    </div>
    `,

    data() {
        return {  
        books: [],
        filterBy: null,
        isSelected: false,
        selectedBook: null

        }
    },
    
    methods: {
        selectBook(Id) {
            this.isSelected = true;
            // let book = bookService.findBook(Id);
            let book = '';
            bookService.findBook(Id)
            .then(book => this.selectedBook = book)

            // this.selectedBook = book
            console.log(book)
            },

            closeModal() {
                console.log('hiiiiiiiii')
                this.isSelected = false;
            },
            
        setFilter(filter) {
            this.filterBy = filter
        }
    },

    computed: {

        booksToShow() {
            return this.books;
        },

        booksToShow() {
            if (!this.filterBy) return this.books;

            var regex = new RegExp(`${this.filterBy.name}`, 'i');

            return this.books.filter(book => 
              
            regex.test(book.title) && book.listPrice.amount >= this.filterBy.fromPrice 
            && book.listPrice.amount <= this.filterBy.toPrice
            )
        }
    },
    components: {
        bookDetails,
        bookFilter,
        bookList,
        appHeader,
        userMsg
    },
    
    created() {
        bookService.getBooks()
        .then(books => this.books = books);
    },
}
