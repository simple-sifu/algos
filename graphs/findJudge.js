//Graph concepts
//Edge - shows different connections between nodes.
//Adjacent List - where index is the node and the value is the node neighbors.
class Graph {
    constructor() {
        this.adjacentList = {};  // object with node key and holds array of node neighbors
    }

    //initialize each node with 
    //a placeholder array for all their node neighbors
    addNode(node){
        this.adjacentList[node] = [];
    }

    // edge is the link between all node neighbors
    addEdge(node1, node2){
        //directed Graph - this node only goes in one direction not bidirectional
        this.adjacentList[node1].push(node2)
    }

    // judge doesnt trust so no adjacent connections(or no trusted neighbors)
    // index is the neighbor and value is the node neighbors
    findJudge(){
       const judgeNotFound = -1;
       return Object.keys(this.adjacentList).reduce((acc,currNeighbor) =>{
            if (this.adjacentList[currNeighbor] == ""){ // no trusted neighbors
                return currNeighbor; // non trusting judge
            }
            return acc;
        }, judgeNotFound)
    }

    // display the node and connections to help visualize how Graph works
    showConnections(){
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes){
            let adjacentNodes = this.adjacentList[node];
            let connections = "";
            for (let adjacentNode of adjacentNodes){
                connections += adjacentNode + " ";
            }
            console.log( node + "-->" + connections);
        }
    }


}

function findJudge(numOfNeighbors, trustPairList){
    const trustGraph = new Graph();
    for (let neighbor=1; neighbor<=numOfNeighbors; neighbor++){
        trustGraph.addNode(neighbor);
    }
    trustPairList.forEach(currTrustPair =>{
        trustGraph.addEdge(...currTrustPair);
    })
    trustGraph.showConnections();
    return trustGraph.findJudge();
}

// Judge doesnt trust so he is the onle one who doesnt have any adjacent links
console.log(`nonTrusting Judge is ${findJudge(2,[[1,2]])}\n`);  //2
console.log(`nonTrusting Judge is ${findJudge(3,[[1,3],[2,3]])}\n`);  //3
console.log(`nonTrusting Judge is ${findJudge(3,[[1,3],[2,3],[3,1]])}\n`);  //-1
console.log(`nonTrusting Judge is ${findJudge(3,[[1,2],[2,3]])}\n`);   //3
console.log(`nonTrusting Judge is ${findJudge(4,[[1,3],[1,4],[2,3],[2,4],[4,3]])}\n`); //3