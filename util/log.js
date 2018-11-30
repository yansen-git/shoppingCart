export default function log(type) {
    return function(target, name, descriptor) {
        let oldValue = descriptor.value

        descriptor.value = function() {
            // 统一打印日志
            console.log(`日志上报${type}`)

            // 执行原有的方法
            return oldValue.call(this, arguments)
        }
        return descriptor
    }
}
