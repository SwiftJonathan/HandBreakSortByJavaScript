/*!
 * 选择排序
 * Copyright(c) 2019 JonathanHe
 * 选择排序函数
 */

/**
 * 选择排序
 *
 * @param {Array} _arr
 * @return {Array}
 * @public
 */
function selectSort(_arr) {
    if(!Array.isArray(_arr)){
        throw new Error('Param is not fit type [Array].')
    }

    let arr = _arr.slice()
    let length = arr.length
    let i,j

    if(length <= 1){
        return arr
    }

    for(i = 0 ; i < length ; i++){
        let temp = arr[i]
        for(j = i + 1 ; j < length ; j++){

            if(arr[j] < temp){
                [temp,arr[j]] = [arr[j],temp]
            }
        }
        arr[i] = temp
    }
    return arr
}

export {selectSort}