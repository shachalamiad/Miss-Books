'use strict'

export default {
    template: `
    <section class="book-filter">
        <h2>Filter Books</h2>
        <input type="text" placeholder="Enter book name" v-model="filterBy.name" />
        <input type="number" placeholder="from price (ILS)" v-model.number="filterBy.fromPrice"/>
        <input type="number" placeholder="To price (ILS)" v-model.number="filterBy.toPrice"/>
    </section>
    `,
    data() {
        return {
            filterBy: {
                name : '',
                fromPrice: '',
                toPrice: 500
            }
        }
    },
    
    created() {
        this.$emit('filtered', this.filterBy)
    }
}