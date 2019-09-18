/*!
 * 冒泡排序
 * Copyright(c) 2019 JonathanHe
 * 冒泡排序函数
 */

/**
 * 冒泡排序
 *
 * @param {Array} _arr
 * @return {Array}
 * @public
 */

function populSort(_arr){
    if(!Array.isArray(_arr)){
        throw new Error('Param is not fit type [Array].')
    }

    let arr = _arr.slice()
    let length = arr.length
    let i,j,temp

    if(length <= 1){
        return arr
    }

    for(i = 0 ; i < length ; i++){
        for(j = i +1 ; j < length ; j++){
            if(arr[i] > arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

export { populSort }