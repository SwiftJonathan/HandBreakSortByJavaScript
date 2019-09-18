import {insertSort} from "./insertSort";
import {shellSort} from "./shellSort";
import {selectSort} from "./selectSort";
import {populSort} from "./populSort";
import {mergeSort} from "./mergeSort"

let arr = [
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0,
            9,7,5,3,1,2,4,6,8,0
]

//测试插入排序时间性能
console.time('insertSort')
let resultForInsertSort = insertSort(arr)
console.timeEnd('insertSort')

//测试希尔排序时间性能
console.time('shellSort')
let resultForShellSort = shellSort(arr)
console.timeEnd('shellSort')

//测试选择排序时间性能
console.time('selectSort')
let resultForSelectSort = selectSort(arr)
console.timeEnd('selectSort')

//测试冒泡排序时间性能
console.time('populSort')
let resultForPopulSort = populSort(arr)
console.timeEnd('populSort')

//测试归并排序时间性能
console.time('mergeSort')
let resultForMergeSort = mergeSort(arr)
console.timeEnd('mergeSort')

// console.log(translateArrayToString(resultForInsertSort))
// console.log(translateArrayToString(resultForShellSort))
// console.log(translateArrayToString(resultForSelectSort))
// console.log(translateArrayToString(resultForPopulSort))
// console.log(translateArrayToString(resultForMergeSort))
/**
 * 数组转换字符串函数
 *
 * @param {Array} _arr
 * @return {String}
 * @private
 */
function translateArrayToString(_arr) {
    if(!Array.isArray(_arr)){
        throw new TypeError()
    }

    let str = _arr.join(',')
    return str
}