'use strict'

export default{
    props: ['book'],
    template: `
    <section class="books-container">
        <li class="book">
        <img :src="book.thumbnail" class="img"/>
        <p>Id: {{book.id}} </p>
        <p>Title: {{book.title}} </p> 
        <p>Author: {{book.authors.join('')}} </p> 
        <p>Price: {{calcPrice}}</p>
        <p>Currency: {{book.listPrice.currencyCode}}</p>
        <p>On sale: {{book.listPrice.isOnSale}}</p> 
</li>
</section>
    `,
    computed: {
        calcPrice() {
        if (this.book.listPrice.currencyCode === "EUR") {
            this.book.listPrice.currencyCode = "ILS"
            return `${this.book.listPrice.amount *= 4}`
        } else if (this.book.listPrice.currencyCode === "USD") {
            this.book.listPrice.currencyCode = "ILS"
            return `${this.book.listPrice.amount *= 3.6}`
        }
    }
    }

}