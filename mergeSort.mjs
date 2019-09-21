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
    merge(arr,0,arr.length - 1)
    return arr
}
/**
 * 归并排序的递归函数
 *
 * @param {Array} arr
 * @param {Number} left
 * @param {Number} right
 * @return {void}
 * @private
 */
function merge(arr,left,right){

    let middle = Math.floor((left + right) / 2)
    if(left == right){
        return
    }
    merge(arr,left,middle)
    merge(arr,middle +  1,right)
    afterMerge(arr,left,middle,right)
}
/**
 * 归并排序的归并函数
 *
 * @param {Array} arr
 * @param {Number} left
 * @param {Number} middle
 * @param {Number} right
 * @return {void}
 * @private
 */
function afterMerge(arr,left,middle,right) {

    let temp = new Array(right - left + 1)
    let i = left
    let j = middle +1
    let k = 0

    while (i <= middle && j<= right){
        temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
    }
    while (i <= middle){
        temp[k++] = arr[i++]
    }
    while (j <= right){
        temp[k++] = arr[j++]
    }
    for(let a = 0 ; a < temp.length ; a++){
        arr[left + a] = temp[a]
    }
}
export {mergeSort}