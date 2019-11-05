'use strict'

import bookPreview from '../cmps/book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
    <section class="books-list-container">
        <router-link  v-for="book in books" :to="'book/' + book.id">
            <book-preview :book="book" @click.native="bookClicked(book.id)"></book-preview>
        </router-link>
    </section>
    `,
    methods: {
        bookClicked(bookId) {
            this.$emit('selected', bookId)
        }
    },

    components: {
        bookPreview
    },
}

// 


