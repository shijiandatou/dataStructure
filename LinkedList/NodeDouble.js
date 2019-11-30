class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DoubleNodeList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };
    // 在链表 末端 添加节点
    append(data){
        const node = new Node(data);
        if(this.length==0){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.length+=1;
        }
    };
    // 
    insert(position,data){
        if(position<0 || position > this.length) return false;
        const node = new Node(data);
        if(this.length === 0 ){
            this.head = node;
            this.tail = node;
        }else{
            // 有节点 但是插入的位置是0；
            if(position === 0){
                this.head.prev = node;
                node.next = this.head;
                this.head = node;
            }else if(position===this.length){ // position 是最后的节点
                node.prev = this.tail;
                this.tail.next = node;
                this.tail = node;
            }else{ // 其他情况
                let current = this.head;
                let index = 0;
                while(index++ < position){
                    current = current.next;
                };
                current.prev.next = node;
                node.next = current;
                node.prev = current.prev;
                current.prev = node;
            }

        };
        this.length++;
        return true;
    };
    get(position){
        if(position<0 || position >=this.length) return null;
        let current = this.head;
        let index = 0;
        while(index++ < current){
            current =current.next;
        };
        return current.data;
    };
    indexOf(data){
        let current = this.head;
        let index = 0;
        while (current) {
            if(current.data === data){
                return index;
            };
            index++;
            current = current.next;
        };
        return -1;
    };
    update(position,data){
        if (position < 0 || position >= this.length) return false;
        let current = this.head;
        let index =0;
        while(index++ < position){
            current = current.next;
        };
        current.data =data;
        return true;
    };
    removeAt(position){
        if (position < 0 || position >= this.length) return null;
        let current = this.head;
        if(this.length==1){
            this.head = null;
            this.tail = null;
        }else {
            if (position === 0) { //第一个
                this.head.next.prev = null;
                this.head = this.head.next;
            } else if (position == this.length-1) { //最后一个
                current = this.tail;
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            } else {
                let index = 0;
                while (index++ < position) {
                    current = current.next;
                };
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
        }
        this.length++;
        return current.data;
    };
    remove(data){
        const position = this.indexOf(data);
        return this.removeAt(position);
    }
}