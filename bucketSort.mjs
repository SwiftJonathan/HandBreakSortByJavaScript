/*!
 * 桶排序(bucketSort)
 * Copyright(c) 2019 JonathanHe
 * Descriptions
 */

/**
 * 桶排序函数(bucketSort function)
 *
 * @param {Array} _arr
 * @return {Array}
 * @private
 */
function bucketSort(_arr) {
    //检查传入的参数是否为数组类型
    if (!Array.isArray(_arr)) {
        throw new Error('Param is not fit type [Array].')
    }

    //声明内部变量,arr为数组副本,length为数组长度,i,j为循环换标志量,listArray用于模拟桶,result用于储存完成排序的数组
    //jump表示每一个桶的容量(数组长度的平方根)
    let arr = _arr.slice()
    let length = arr.length
    let i,j
    let listArray = new Array()
    let result = []
    let jump = Math.floor(Math.pow(length,1 / 2))

    //如果数组长度小于1，直接返回数组
    if (length <= 1) {
        return arr
    }

    //循环length次，将所有数组放入桶中
    for(i = 0 ; i < length ; i++){
        //group表示数字应该进入那个桶中，如果桶不存在则生成新的桶，如果存在，则将数据放入桶中正确的位置
        let group = Math.floor(arr[i] / jump)
        if(!(listArray[group] instanceof Node)){
            let bus = new Node(0)
            let node = new Node(arr[i])
            bus.next = node
            listArray[group] = bus
        }
        else{
            //将point指向桶中的bus根节点，如果point有下一个节点则判断是否应该插入到point节点后。如果
            //point没有下一个节点则插入到point节点后
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
    //循环桶数组,依次从桶中取出数字放在result中
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

