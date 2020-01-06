Vue.prototype.$http = axios;
new Vue({
    el: '#app',

    data() {
        return {
            skills: []
        }
    },

    mounted() {

        this.$http.get('/skills').then(response => this.skills = response.data);

    }

});
