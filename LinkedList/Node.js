// 封装链表的类
class Node {
    constructor(ele){
        this.data = ele;
        this.next = null;
    }
};

class NodeLsit{
    constructor(props){
        this.head = null;
        this.length = 0;
    };
    // 向链表尾部 添加一个节点
    append(ele){
        const node = new Node(ele);
        let current = this.head;
        if(current==null){ // 判断 是不是第一个节点
            this.head  = node;
            this.length++;
            return true;
        }else{
            while(current.next){
                current = current.next;
            };
            current.next = node;
        }
       
        this.length++;
        return true;
    };
    // 在任意位置 插入节点
    insert(position,data){
        console.log(this.length);
        if(position<0 || position > this.length) return false; // 边界判断
        const node = new Node(data);
        if(position == 0){// 插入的位置是头部
            node.next = this.head;
            this.head = node;
        }else{
            let index = 0;
            let current = this.head;
            let pre = null;
            while (index++ < position) {
                pre = current;
                current = current.next;
            };
            node.next = current;
            pre.next = node;
        };
        this.length++;
    };
    // 根据位置信息 获取节点的值
    getEle(position){
        if (position < 0 || position >= this.length) return null; // 边界判断
        let current = this.head;
        let index = 0;
        while (index++ < position) {
            current = current.next;
        };
        return current.data;
    };
    // 返回元素的索引
    indexOf(data){
        let current = this.head;
        let index = 0;
        while (current) {
            if (data === current.data){
                console.log(index,'查找的位置');
                return index;
            };
            index++;
            current = current.next;
        };
        return -1;
    };
    // 更新指定位置的数据
    update(position,data){
        if (position < 0 || position >= this.length) return null; // 边界判断
        let current = this.head;
        let index = 0;
        while (index++ < position) {
            current = current.next;
        };
        current.data = data; 
        return true;
    };
    // 删除指定位置的数据
    removeAt(position){
        if (position < 0 || position >= this.length) return null; // 边界判断
        let current = this.head;
        if(position===0){
            this.head = this.head.next;
        }else{
            let index = 0;
            let pre = null;
            while (index++ < position) {
                pre = current;
                current = current.next;
            };
            pre.next = current.next;
        };
        this.length--;
        return current.data;
    };
    // 删除元素
    remove(data){
        const position = this.indexOf(data);
        this.removeAt(position);
    };
    // 判断是否为空
    isEmpty(){
        return this.length===0;
    };
    // 链表的大小
    size(){
        return this.length;
    }
    // 实现 逆序
    listReverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            let nextNode = current.next; // 保存下一个节点
            current.next = prev; //改变当前节点的指针
            prev = current; // 保存当前节点
            current = nextNode;
            if (!(current.next)) {
                current.next = prev;
                this.head = current;
                return;
            }
        };

    }
    // toString 实现
    toString(){
        let current = this.head;
        let str = '';
        while (current) {
            str += `${current.data} `;
            current = current.next;
        };
        console.log(str);
    }
};
const data = new NodeLsit();
data.append('1');
data.append('wqeqw');
data.insert(0,'1321');
data.insert(4,'898');
data.indexOf('1321')
data.toString();
data.listReverse();
data.toString();