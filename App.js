url = 'http://laravel_vue.test/'

const main = new Vue({
    el: '#main',
    created: function(){
        this.getUsers()
    },
    data:{
        lists: []
    },
    methods: {
        getUsers: function(){
            axios.get(url).then(response => {
                this.lists  = response.data
            })
        }
    }
})