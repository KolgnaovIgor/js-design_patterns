function networkFetch(url) {
    return `${url} - response from the server`
}

const cache = new Set()

const proxiedFecth = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]
        if (cache.has(url)){
            return `${url} - response from cache`
        }else{
            cache.add(url)
            return Reflect.apply(target,thisArg, args)
        }
    }
})

console.log(proxiedFecth('angular.io'))
console.log(proxiedFecth('react.io'))
console.log(proxiedFecth('angular.io'))