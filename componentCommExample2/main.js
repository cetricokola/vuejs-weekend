window.Event = new class {
    constructor() {
        this.vue = new Vue()
    }

    fire(event, data = null) {
        this.vue.$emit('applied')
    }
    listen(event, callback) {
        this.vue.$on(event)
    }
}

Vue.component('coupon', {
    template: `<input placeholder="Enter Coupon Code" @blur="onCouponApplied">`,
    methods: {

        onCouponApplied() {
            Event.fire('applied')
        }
    }

});
new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    created() {
        Event.listen('applied', () => alert('applied'))
    }

});
