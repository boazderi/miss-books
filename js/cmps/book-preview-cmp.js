import { bookService } from "../services/book.service.js"

export default {
    name: 'book preview',
    props: ['book'],
    template: `
    <section class="book-preview flex flex-column justify-between">
        <div class="book-title">{{ book.title }} </div>
        <div class="price"> {{ formatCurrency }} </div>
        <div> <img :src="book.thumbnail" width=110 height=160 alt="" /></div>
    </section>
    `,
    data() {
        return {
            currency: '',
            currNum: ''
        }
    },
    methods: {

    },
    computed: {
        formatCurrency() {
            console.log('start format');
            return new Intl.NumberFormat('en-US', { style: 'currency',
            currency: this.book.listPrice.currencyCode })
            .format(this.book.listPrice.amount)
        }
    }
}