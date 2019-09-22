/*!
 * 桶排序
 * Copyright(c) 2019 JonathanHe
 * Descriptions
 */
/**
 * 桶排序函数
 *
 * @param {Array} _arr
 * @return {Array}
 * @private
 */
function bucketSort(_arr) {

    if (!Array.isArray(_arr)) {
        throw new Error('Param is not fit type [Array].')
    }

    let arr = _arr.slice()
    let length = arr.length
    let i,j
    let listArray = new Array()
    let result = []
    let jump = Math.floor(Math.pow(length,1 / 2))


    if (length <= 1) {
        return arr
    }

    for(i = 0 ; i < length ; i++){
        let group = Math.floor(arr[i] / jump)
        if(!(listArray[group] instanceof Node)){
            let bus = new Node(0)
            let node = new Node(arr[i])
            bus.next = node
            listArray[group] = bus
        }
        else{

            let point = listArray[group]
            while(true){

                if(point.next){
                    if(point.value <= arr[i] && point.next.value > arr[i]){
                        let node = new Node(arr[i])
                        node.next = point.next
                        point.next = node
                        break
                    }
                    else {
                        point = point.next
                    }
                }
                else {
                    let node = new Node(arr[i])
                    point.next = node
                    break
                }
            }
        }
    }

    for(j = 0 ; j < listArray.length ; j++){
        let point = listArray[j].next
        while(point != null){
            result.push(point.value)
            point = point.next
        }
    }
    return result
}

/**
 * 桶排序结点类
 *
 * @param {Number} _value
 * @return {void}
 * @private
 */
function Node(_value) {
    this.value = _value
    this.next = null
}
export {bucketSort}

