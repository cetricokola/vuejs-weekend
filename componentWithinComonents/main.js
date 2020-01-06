Vue.Component('animals', {
    template: '<li> <slots></slots></li>'
});

Vue.Component('animal-list', {
    template: `<div>
        <animals v-for="animal in animals">{{animal.name}}</animals>
        </div>`,
    data: function () {
        return {
            animals: [
                {name: 'Hen', mammal: true},

                {name: 'Man', mammal: true},

                {name: 'Lizard', mammal: false},

                {name: 'Cat', mammal: true},

                {name: 'Snake', mammal: false},

                {name: 'Flee', mammal: false}

            ]
        }
    }
});

new Vue({
    el: '#root'
})
