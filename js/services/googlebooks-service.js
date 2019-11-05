'use strict'

// import {storageService} from './storage-service.js'
// const STORAGE_KEY = 'GoogleBooks'

export const googleBookService = {
    getBooks
}

getBooks('dogs');

function getBooks(bookName) {
    console.log(bookName)
    if(bookName==='') return;
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=AIzaSyBRlIc69ZUXikcJIRvGi0IasRrUqVqcW0c`)
        .then(books => {
        console.log('google Books', books.data.items)
            return books.data.items 
        });
}
