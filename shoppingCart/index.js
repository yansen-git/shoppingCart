import getCart from '../cart'
import $ from 'jquery'

export default class ShoppingCart {
    constructor(app) {
        this.$el = $('<div>')
        this.app = app
        this.cart = getCart()
    }

    init() {
        this.initBtn()
        this.render()
    }

    initBtn() {
        let btn = $('<button>购物车</button>')
        btn.click(e=>{
            alert(this.showCart())
        })
        this.$el.append(btn)
    }

    showCart() {
        return this.cart.getList()
    }

    render() {
        this.app.$el.append(this.$el)
    }

}
