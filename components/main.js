Vue.Component('tasks', {
    template: '<li> <slots></slots></li>'
});

new Vue({
    el: '#root'
})
