export default {
    name: 'book filter',
    template: `
        <section class="book-filter flex flex-column">
        <label>Filter by name:            
            <input class="text-input"
            @input="filter"
            v-model="filterBy.name" 
            type="text" 
            placeholder="Search">
        </label>
        <label>Minimum price:
            <input 
            @input="filter"
            v-model="filterBy.fromPrice" 
            type="range">
        </label>
        <label>Maximum price:
            <input 
            @input="filter"
            v-model="filterBy.toPrice" 
            type="range">
        </label>
        </section>
    `,
    data() {
        return {
            filterBy: {
                name: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        }
    },
    methods: {
        filter() {
            console.log('this.filterBy', this.filterBy);
            this.$emit('filter', { ...this.filterBy })
        }
    }
}