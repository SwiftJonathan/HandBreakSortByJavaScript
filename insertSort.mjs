/*!
 * 插入排序(insertSort)
 * Copyright(c) 2019 JonathanHe
 * Descriptions
 */


/**
 * 插入排序函数(insertSort function)
 *
 * @param {Array} _arr
 * @return {Array}
 * @private
 */
function insertSort(_arr){

    //检查传入的参数是否为数组类型
    if(!Array.isArray(_arr)){
        throw new Error('Param is not fit type [Array].')
    }

    //声明内部变量,arr拷贝数组,length数组长度,i,j循环标质量
    let arr = _arr.slice()
    let length = arr.length
    let i,j

    //如果数组长度小于1，直接返回数组
    if(length <= 1){
        return arr
    }

    //从1开始遍历整个数组，向前遍历，将数字插在有序数组对应元素的后边
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