/*!
 * 归并排序
 * Copyright(c) 2019 JonathanHe
 * 归并排序函数
 */

/**
 * 归并排序
 *
 * @param {Array} _arr
 * @return {Array}
 * @public
 */

function mergeSort(_arr) {
    if(!Array.isArray(_arr)){
        throw new Error('Param is not fit type [Array].')
    }

    let arr = _arr.slice()
    let length = arr.length

    if(length <= 1){
        return arr
    }

    return merge(arr)
}

/**
 * 归并排序的递归函数
 *
 * @param {Array} _arr
 * @return {Array}
 * @private
 */
function merge(_arr){

    if(_arr.length == 1){
        return _arr
    }

    let boundary = Math.floor(_arr.length / 2)
    let left = _arr.slice(0,boundary)
    let right = _arr.slice(boundary)
    let leftReturn = merge(left)
    let rightReturn = merge(right)
    let temp = new Array(leftReturn.length + rightReturn.length)
    let i = 0,j = 0,k = 0

    while (i < leftReturn.length && j < rightReturn.length)
        temp[k++] = leftReturn[i] <= rightReturn[j] ? leftReturn[i++] : rightReturn[j++]
    while (i < leftReturn.length)
        temp[k++] = leftReturn[i++]
    while (j < rightReturn.length)
        temp[k++] = rightReturn[j++]

    return temp
}
export {mergeSort}