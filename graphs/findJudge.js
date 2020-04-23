class Graph {
    constructor() {
        this.adjacentList = {};
    }

    addNode(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    // edge is the link betwen nodes
    addEdge(node1, node2){
        //directed Graph - node only goes in one direction
        this.adjacentList[node1].push(node2)
    }

    // judge doesnt have any adjacent connections
    findJudge(){
       return Object.keys(this.adjacentList).reduce((acc,currKey) =>{
            if (this.adjacentList[currKey] == ""){
                return currKey;
            }
            return acc;
        }, -1)
    }

    // display the node and connections
    showConnections(){
        console.log("adjacentList =",this.adjacentList)
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes){
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            for (let vertex of nodeConnections){
                connections += vertex + " ";
            }
            console.log(node+ "-->" + connections);
        }
    }



}

function findJudge(nodes, adjacencyArray){
    const myGraph = new Graph();
    for (let i=1; i<=nodes; i++){
        myGraph.addNode(i);
    }
    adjacencyArray.forEach ( currArr =>{
        myGraph.addEdge(...currArr);
    })
    myGraph.showConnections();
    return myGraph.findJudge();
}

console.log(findJudge(2,[[1,2]]));  //2
console.log(findJudge(3,[[1,3],[2,3]]));  //3
console.log(findJudge(3,[[1,3],[2,3],[3,1]]));  //-1
console.log(findJudge(3,[[1,2],[2,3]]));   //3
console.log(findJudge(4,[[1,3],[1,4],[2,3],[2,4],[4,3]])); //3

// myGraph = new Graph();
// myGraph.addVertex('1');
// myGraph.addVertex('2');
// myGraph.addVertex('3');
// myGraph.addVertex('4');
// myGraph.addVertex('5');
// myGraph.addVertex('6');
// myGraph.addEdge('3','1');
// myGraph.addEdge('3','4');
// myGraph.addEdge('4','2');
// myGraph.addEdge('4','5');
// myGraph.addEdge('1','2');
// myGraph.addEdge('1','0');
// myGraph.addEdge('0','2');
// myGraph.addEdge('6','5');
// myGraph.showConnections();