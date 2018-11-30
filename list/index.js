import { GETLIST } from '../config'
import createItem from '../ createItem'
import $ from 'jquery'

export default class List {
    constructor(app) {
        this.$el = $('<div>')
        this.app = app
    }

    init() {
        this.loadData().then(data=>{
            this.initItemList(data)
        }).then(res=>{
            this.render()
        })
    }

    // 返回promise实例
    loadData() {
        return fetch(GETLIST).then(res=>{
            return res.json()
        })
    }

    initItemList(data) {
        data.forEach(item=>{
            let ite = createItem(this,item)
            ite.init()
        })
    }

    render() {
        this.app.$el.append(this.$el)
    }
}
