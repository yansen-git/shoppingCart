class Cart {
    constructor () {
        this.list = []
    }

    // 添加购物车
    add(data) {
        this.list.push(data)
    }

    // 删除购物车
    del(id) {
        this.list = this.list.filter(item=>{
            if (item.id == id) {
                return false
            }
            return true
        })
    }

    // 获取购物车信息
    getList() {
        return this.list.map(item=>{
            return item.name
        }).join('\n')
    }

}

// 返回单例

let getCart = (function(){
    let cart
    return function() {
        if (!cart) {
            cart = new Cart()
        }
        return cart
    }
})()

export default getCart
