import bookDetails from "../view/book-details-cmp.js";

export default {
    name: 'review-add',
    template: `
    <h2>Add review:</h2>
    <form @submit.prevent="submitRating">
        <label  class="flex flex-column">
            Name:
            <input v-model="review.fullname" placeholder="full name"/>
        </label>
        <label>
            Rate:
            <select v-model.number="review.rate">
                <option v-for="i in 5"> {{i}} </option>
            </select>
        </label>
        <label>
            Date:
            <input default=now type="date"/>
        </label>
        <textarea cols="30" rows="5"></textarea>
        <button>Send</button>
    </form>
    `,
    data() {
        return {
            review: {
                fullName: 'Books Reader',
                rate: 1,
                date: Date.now(),
                text: ''
            }
        }
    },
    methods: {
        submitRating() {
            console.log('review', { ...this.review });
            this.$emit('saveReview', { ...this.review })
            this.review = { fullName: 'Books Reader', rate: 1, date: Date.now(), text: '' }
        }
    },
    computed: {

    }
}