' use strict'

import {bookService} from '../services/book-service.js'
import {googleBookService} from "../services/googlebooks-service.js"
import {eventBus} from '../services/event-bus-service.js'


export default {
    template: `
    <section class="google-books">
        <h1>Google Books</h1>
        <input type="text" placeholder="Enter book name"
          @change="searchBook"/>
        <ul v-if="books" v-for="book in books">
        <li><p>{{book.volumeInfo.title}}</p><button @click="addBook(book)">+</button></li>
        </ul>
    </section>
    `,
    data() {
        return {
                books: null,
                title: ''
            }
        },
    
    methods: {
    searchBook(event){
        var search = event.target.value;
        if(!search) return;
        else {
            googleBookService.getBooks(search)
                .then(books => {
                    console.log(books);
                        this.books = books;     
                    })
                }
            },
            // addBook(book){
            //     booksService.addNewBook(book);  
            //     const msg = {
            //         txt: `New book added!`,
            //         type: 'add'
            //         }
            //         eventBus.$emit('show-msg',msg)           
            //     } 
            }
        }
            

        // <p>Id: {{book.id}} </p>
        // <p>Title: {{book.title}} </p> 
        // <p>Author: {{book.authors.join('')}} </p> 
        // <p>Price: {{calcPrice}}</p>
        // <p>Currency: {{book.listPrice.currencyCode}}</p>
        // <p>On sale: {{book.listPrice.isOnSale}}</p> 

        // v-model="filterBy.name"