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
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes){
            let adjacentNodes = this.adjacentList[node];
            let connections = "";
            for (let adjacentNode of adjacentNodes){
                connections += adjacentNode + " ";
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

console.log(`nonAdjacent Judge is ${findJudge(2,[[1,2]])}\n`);  //2
console.log(`nonAdjacent Judge is ${findJudge(3,[[1,3],[2,3]])}\n`);  //3
console.log(`nonAdjacent Judge is ${findJudge(3,[[1,3],[2,3],[3,1]])}\n`);  //-1
console.log(`nonAdjacent Judge is ${findJudge(3,[[1,2],[2,3]])}\n`);   //3
console.log(`nonAdjacent Judge is ${findJudge(4,[[1,3],[1,4],[2,3],[2,4],[4,3]])}\n`); //3