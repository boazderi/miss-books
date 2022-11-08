export default {
    name: 'long text',
    props:['txt'],
    template:`
     <li> 
         <span class="book-detail-subject">Description:</span> {{ getDescription }} 
     <button v-if="txt.length > 100" :click="toggleReadMore">Read {{ isReadMore ? 'less' : 'More' }} </button>
     </li> 
    `,
    data(){
        return {
            isReadMore: false,
        }
    },
    created(){
        
    },
    methods:{
        toggleReadMore(){
            this.isReadMore = !this.isReadMore
        }
    },
    computed:{
        getDescription() {
            console.log('getDescription');
            let charsCounter = 0
            let descStr = ''
            this.txt.split(" ").forEach(word => {
                if ((charsCounter + word.length + 1) < 100) {
                    descStr += word + " "
                    charsCounter += word.length + 1
                }
            })
            console.log('charsCounter', charsCounter);
            return descStr
        },

    }
}