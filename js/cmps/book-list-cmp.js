import bookPreview from "./book-preview-cmp.js"

export default {
    name: 'book-list',
    props: ['books'],
    template: `
    <ul class="book-list-container clear-list grid">
        <li class="book-in-lst flex flex-column justify-between" v-for="book in books " :key="book.id"  >
            <book-preview :book="book"/>
            <section class="actions flex justify-between">
                <button class="book-btn details-btn" @click="showDetails(book)">Details</button>
                <button class="book-btn x-btn" @click="remove(book.id)">x</button>
                <router-link :to="'/book/' + book.id">Details</router-link>
            </section>
        </li>
    </ul>
    `,
    methods: {
        showDetails(book) {
            this.$emit('selected', book)
        },
        remove(bookId){
            this.$emit('remove', bookId)
        }
    },
    components: {
        bookPreview,
    }
}