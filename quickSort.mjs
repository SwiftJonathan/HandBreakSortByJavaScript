/*!
 * 快速排序
 * Copyright(c) 2019 JonathanHe
 * 快速排序函数
 */

/**
 * 快速排序
 *
 * @param {Array} _arr
 * @return {Array}
 * @public
 */

function quickSort(_arr) {
    if(!Array.isArray(_arr)){
        throw new Error('Param is not fit type [Array].')
    }
    let arr = _arr.slice()
    let length = arr.length
    if(length <= 1){
        return arr
    }
    return quick(arr)
}
/**
 * 快速排序的递归函数
 *
 * @param {Array} arr
 * @return {Array}
 * @private
 */
function quick(arr){
    let length = arr.length
    let left = []
    let right = []
    if(length <= 1){
        return arr
    }
    let flag = arr[0]
    for(let i = 1 ; i < length ; i++){
        if(arr[i] <= flag)
            left.push(arr[i])
        if(arr[i] > flag)
            right.push(arr[i])
    }
    let leftReturn = quick(left)
    let rightReturn = quick(right)
    return [...leftReturn,flag,...rightReturn]
}
export {quickSort}

