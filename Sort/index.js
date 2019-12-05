// 冒泡排序
function bubbleSort(array) {
    for (let index = array.length - 1; index >= 0;index--) {
        for (let i = 0; i < index; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
            };
        };
    };
    console.log(array);
};
// 选择排序 
function selectionSort(array) {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let min = i; //设置最小值的下标
        // 内层循环 就是找出最小值的小标
        for (let index = min + 1; index < len; index++) {
            if (array[min] > array[index]) {
                min = index;
            }
        }
        [array[min], array[i]] = [array[i], array[min]];
    };
    console.log(array);
}
/**
 * 冒泡排序和选择排序 比较的次数都是 n*n
 * 冒泡排序的交换次数 是n*n;
 * 选择排序的交换次数 是n
 * 
 */
// 插入排序  核心思想就是局部有序 最多的比较次数 是 n*n
function insertionSort(array) {
    const len = array.length;
    // 外层循环 从第一个位置拿数据 向局部有序 插入数据
    for (let index =1; index < len; index++) {
        let temp = array[index];
        let j = index;
        while ((array[j - 1] > temp)&&j>0) {
            array[j] = array[j - 1];
            j--;
        };
        array[j] = temp;
    };
    console.log(array);
}
// 希尔排序 是插入排序的改进版 
function shellSort(array) {
    const len = array.length;
    // 初始化增量
    let gap = Math.floor(len / 2);
    while (gap>=1) {
        for (let index = gap; index < len; index++){
            const element = array[index];
            let j = index;
            while ((array[j - gap] > element)&&j >(gap-1)) {
                array[j] = array[j - gap];
                j = j - gap;
            }
            array[j] = element;
        };
        gap = Math.floor(gap / 2);
    };
    console.log(array);
}
function middle(left, right, array) {
    // 取出中间的位置
    const center = Math.floor((left + right) / 2);
    // 判断大小 
    if (array[left] > array[center]) {
        [array[center], array[left]] = [array[left], array[center]];
    }
    if (array[left] > array[right]) {
        [array[left], array[right]] = [array[right], array[left]];
    };
    if (array[center] > array[right]) {
        [array[center], array[right]] = [array[right],array[center]];
    }
    // 将center 换到 right-1的位置
    [array[center], array[right - 1]] = [array[right - 1], array[center]];
    return array[right - 1]
}
// 快速排序 
function quickSort() {
    const array = [10, 20, 504, 34, 12, 8, 9,34,5,67,78,23,24];
    quick(0, array.length - 1, array);
    console.log(array);
};
function quick(left, right,array) {
    if (left >= right) {
        return;
    }
    // 定义变量 
    let i = left;
    let j = right - 1;
    let point = middle(left, right, array);
    while (i < j) {
        while (array[i]< point) {
            i++;
        };
        while (array[j] > point) { 
            j--;
        };
        if (i < j) { // 找到了 进行数据 交换
            [array[i], array[j]] = [array[j], array[i]]
        };
    };
    // 将枢纽 放到正确的位置
    [array[i], array[right - 1]] = [array[right - 1], array[i]];
    quick(left, i - 1, array);
    quick(i + 1, right, array);
};

// bubbleSort(array);
quickSort();