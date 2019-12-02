// 封装 二叉树

class Node{
    constructor(value) {
        this.key = value;
        this.left = null;
        this.right = null;
    }
};
class NodeTree {
    constructor(props) {
        this.root = null;
    };
    insert(value){
        const node = new Node(value);
        let current = this.root;
        // 判断根节点 是否有值
        if (current === null) {
            this.root = node;
        } else {
            insertNode(this.root, node);
        }
    };
    insertNode(node,newNode) {
        if (newNode.key < node.key) { // 向左查找
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
           }
        } else { // 向右查找
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    // 先序遍历
    preOrderTraversal() {
        this.preOrderTraversalNode(this.root);
    };
    preOrderTraversalNode(node) {
        if (node === null) return;
        console.log(node.key); // 先处理节点
        // 处理经过的左子节点
        this.preOrderTraversalNode(node.left);
        // 处理经过的右子节点
        this.preOrderTraversalNode(node.right);
    };
    // 中序遍历
    middleOrderTraversal() {
        this.middleOrderTraversalNode(this.root);
    };
    middleOrderTraversalNode(node) {
        if (node === null) return;
        // 处理经过的左子节点
        this.middleOrderTraversalNode(node.left);
        console.log(node.key); // 先遍历左节点 再处理函数
        // 处理经过的右子节点
        this.middleOrderTraversalNode(node.right);
    };
    // 后序遍历
    bindOrderTraversal() {
        this.bindOrderTraversalNode(this.root);
    };
    bindOrderTraversalNode(node) {
        if (node === null) return;
        // 处理经过的左子节点
        this.bindOrderTraversalNode(node.left);
        // 处理经过的右子节点
        this.bindOrderTraversalNode(node.right);
        console.log(node.key); // 先遍历左节点和右节点 再处理函数
    };
    max() {
        let current = this.root;
        while (current!==null) {
            current = current.right;
        }
        return current.key;
    };
    min() {
        let current = this.root;
        while (current) {
            current = current.left;
        };
        return current.key;
    };
    search(key) {
        if (!key) return false;
        let current = this.root;
        // 迭代的方法
        while (current!==null) {
            if (key > current.key) {
                current = current.right;
            } else if(key < current.key) {
                current = current.left;
            } else {
                return true
            }
        };
        return false;
    }
    // 查找 递归的方法
    searchNode(node,key) {
        if (node === null) return false;
        if (key < node.key) {
            this.searchNode(node.left, key);
        } else if(key > node.key) {
            this.searchNode(node.right, key);
        } else {
            return true;
        }
    };
    // 删除节点
    remove(key) {
        // 寻找要删除的节点
        let parent = null;
        let current = this.root;
        let isLeft = true;
        while (key!== current.key) {
            parent = current;
            if (key < current.key) {
                current = current.left;
                isLeft = true;
            } else {
                current = current.right;
                isLeft = false;
            }
            if (current === null) return false;
        };
        // 判断位置 
        if (current.left === null && current.right === null) { // 叶节点
            if (current === this.root) {
                this.root = null;
            }else if (isLeft) { // 左子叶
                parent.left = null;
            } else { // 右子叶
                parent.right = null;
            }
        } else if (current.right === null) { // 右节点没有
            if (current === this.root) {
                this.root = current.left;
            } else if (isLeft) {
                parent.left = current.left;
            } else {
                parent.right = current.left
            }
        } else if (current.left === null) {
            if (current === this.root) {
                this.root = current.left;
            } else if (isLeft) {
                parent.left = current.right;
            } else {
                parent.right = current.right
            }
        } else {
            let cuss = this.getSuccessor(current);
            if (current === this.root) {
                this.root = cuss;
            } else if (isLeft) {
                parent.left = cuss
            } else {
                parent.right = cuss
            }
            cuss.left = current.left;
        }
    };
    // 找后继的方法
    getSuccessor(node) {
        let current = node;
        let nextNode = node.right;
        let parent = node;
        while (nextNode != null) {
            parent = current;
            current = nextNode;
            nextNode = nextNode.left;
        }
        // 
        if (current !== nextNode.right) {
            parent.left = current.right;
            current.right = nextNode.right;
        }
        return current;
    }
}