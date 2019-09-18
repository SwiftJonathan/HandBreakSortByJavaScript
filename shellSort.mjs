/*!
 * 希尔排序
 * Copyright(c) 2019 JonathanHe
 * 希尔排序函数，
 */


/**
 * 希尔排序函数
 *
 * @param {Array} _arr
 * @return {Array}
 * @public
 */
function shellSort(_arr){

    if(!Array.isArray(_arr)){
        throw new Error('Param is not fit type [Array].')
    }

    let arr = _arr.slice()
    let length = arr.length
    let gap,i,j,temp

    for(gap = Math.floor(length / 2) ; gap > 1 ; gap = Math.floor(gap / 2)){

        for(i = gap ; i < length ; i++){

            for(j = i ; j - gap >= 0 && arr[j] < arr[j - gap]; j = j - gap){

                temp = arr[j]
                arr[j] = arr[j - gap]
                arr[j - gap] = temp

            }
        }
    }

    // 低性能
    // for(gap = Math.floor(length / 2) ; gap > 1 ; gap = Math.floor(gap / 2)){
    //
    //     for(i = gap ; i < length ; i++){
    //         for(j = i ; j - gap >= 0 ; j -= gap){
    //             if(arr[j] < arr[j - gap]){
    //                 temp = arr[j]
    //                 arr[j] = arr[j - gap]
    //                 arr[j - gap] = temp
    //             }
    //         }
    //     }
    // }

    return arr
}

export {shellSort}
