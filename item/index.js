import getCart from '../cart'
import $ from 'jquery'
import StateMachine from 'javascript-state-machine'
import { log } from '../util'
export default class Item {
    constructor(list,data) {
        this.$el = $('<div>')
        this.list = list
        this.data = data
        this.cart = getCart()
    }

    init() {
        this.initContent()
        this.initBtn()
        this.render()
    }

    initContent() {
        this.$el.append($(`<p>名称：${this.data.name}</p>`))
        this.$el.append($(`<p>价格：${this.data.price}</p>`))
    }

    initBtn() {
        let self = this
        let btn = $('<button>')
        let fsm = new StateMachine({
            init: '加入购物车',
            transitions: [{
                name: 'addCart',
                from: '加入购物车',
                to: '从购物车删除'
            },{
                name: 'deleteCart',
                from: '从购物车删除',
                to: '加入购物车'
            }],
            methods: {
                // 加入购物车
                onAddCart: function() {
                    self.addCartHandle()
                    updateText()
                },
                // 从购物车删除
                onDeleteCart: function() {
                    self.deleteCartHandle()
                    updateText()
                }
            }
        })

        function updateText() {
            btn.html(fsm.state)
        }

        btn.click(e=>{
            if (fsm.is('加入购物车')) {
                fsm.addCart()
            } else {
                fsm.deleteCart()
            }
        })
        updateText()
        this.$el.append(btn)
    }

    // 添加到购物车
    @log('add')
    addCartHandle() {
        this.cart.add(this.data)
    }

    // 从购物车删除
    @log('del')
    deleteCartHandle() {
        this.cart.del(this.data.id)
    }

    render() {
        this.list.$el.append(this.$el)
    }

}
