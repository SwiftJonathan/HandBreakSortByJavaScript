/*!
 * 插入排序
 * Copyright(c) 2019 JonathanHe
 * Descriptions
 */


/**
 * 插入排序函数
 *
 * @param {Array} _arr
 * @return {Array}
 * @private
 */
function insertSort(_arr){

    if(!Array.isArray(_arr)){
        throw new Error('Param is not fit type [Array].')
    }

    let arr = _arr.slice()
    let length = arr.length
    let i,j

    if(length <= 1){
        return arr
    }

    for(i = 1 ; i < length ; i++){
        let temp = arr[i]
        for(j = i ; j > 0 && arr[j - 1] > temp; j--){
            arr[j] = arr[j -1]
        }
        arr[j] = temp
    }
    return arr
}

export {insertSort}