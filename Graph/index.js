class Graph{
    constructor(props) {
        this.vertexes = []; // 顶点
        this.edges = new Map(); // 边;
    };
    // 添加顶点的方法
    addVertex(v) {
        this.vertexes.push(v);
        this.edges.set(v, []);
    };
    addEdges(v1, v2) {
        this.edges.get(v1).push(v2);
        this.edges.get(v2).push(v1);
    };
    // 初始化状态颜色
    initailizeColer() {
        return this.vertexes.reduce((nex, current) => ({
            ...nex,
            [current]: 'white'
        }), {})
    };
    // 广度优先遍历 通过队列实现的 
    bfs(init,handler) {
        // 初始化颜色
        const colors = this.initailizeColer();
        const queue = [];
        // 将顶点 加入到队列中
        queue.push(init);
        while (queue.length>0) {
            const data = queue.shift();
            const vlist = this.edges.get(data);
            colors[data] = 'gray';
            vlist.forEach(v => {
                if (colors[v] === 'white') {
                    colors[v] = 'gray';
                    queue.push(v);
                }
            });
            handler(data);
            colors[data] = 'black';
        }
    };
    // 深度优先搜索
    dfs(init,handler) {
        const colors = this.initailizeColer();
        this.dfsVist(init,colors,handler)
    };
    dfsVist(v,colors,handler) {
        colors[v] = 'gray'; //访问到了
        handler(v);
        const vlist = this.edges.get(v);
        // 访问其他相连的顶点
        for (let index = 0; index < vlist.length; index++) {
            const element = vlist[index];
            if (colors[element] === 'white') { //没有访问过
                this.dfsVist(element, colors, handler);
            }
        }

        colors[v] = 'black'; // 访问结束
    }
    toString() {
        // 遍历所有的顶点
        let str = '';
        this.vertexes.forEach(v => {
            str += `${v}->`;
            const edge = this.edges.get(v);
            edge.forEach(d => {
                str += d + '';
            });
            str += '\n';
        });
        return str;
    }
};
const graph = new Graph();
const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
arr.forEach(v => {
    graph.addVertex(v);
});
graph.addEdges('A', "B");
graph.addEdges('A', "C");
graph.addEdges('A', "D");
graph.addEdges('C', "D");
graph.addEdges('C', "G");
graph.addEdges('D', "G");
graph.addEdges('D', "H");
graph.addEdges('B', "E");
graph.addEdges('B', "F");
graph.addEdges('E', "I");
let str = '';
// graph.bfs(graph.vertexes[0],function (data){
//     str += data;
// });
graph.dfs(graph.vertexes[0], function (data) {
    str += data;
});
console.log(str,'hahahah');
graph.toString();
// console.log(graph.initailizeColer()) ;