//Graph concepts
//Edge - shows different connections between nodes.
//Adjacent List - where index is the node and the value is the node neighbors.
class Graph {
    constructor(nodes) {
        this.edgeObj = {};  // object with node key and holds array of node neighbors
        for (let node=1; node<=nodes; node++){
          this.addNode(node);
        }
    }

    //initialize each node with 
    //a placeholder array for all their node neighbors
    addNode(node){
        this.edgeObj[node] = [];
    }

    // edge is the link between all node neighbors
    addEdge(node1, node2){
        //directed Graph - this node only goes in one direction not bidirectional
        this.edgeObj[node1].push(node2)
    }

    // display the node and connections to help visualize how Graph works
    showConnections(){
        const nodes = Object.keys(this.edgeObj);
        for (let node of nodes){
            let adjacentNodes = this.edgeObj[node];
            let adjacentConnections = "";
            for (let adjacentNode of adjacentNodes){
                adjacentConnections += adjacentNode + " ";
            }
            console.log( node + "-->" + adjacentConnections);
        }
    }

}

function findJudge(numOfNeighbors, trustPairList){
    const trustGraph = new Graph(numOfNeighbors);

    trustPairList.forEach(currTrustPair =>{
        trustGraph.addEdge(...currTrustPair);
    })

    //display connections onto screen for visualization
    trustGraph.showConnections();

    // judge doesnt trust so no adjacent connections(or no trusted neighbors)
    // index is the neighbor and value is the node neighbors
    const judgeNotFound = -1;
    return Object.keys(trustGraph.edgeObj).reduce((acc,currNeighbor) =>{
        if (trustGraph.edgeObj[currNeighbor] == ""){ // no trusted neighbors
            return currNeighbor; // non trusting judge
        }
        return acc;
    }, judgeNotFound)

}

// Judge doesnt trust so he is the onle one who doesnt have any adjacent links
console.log(`nonTrusting Judge is ${findJudge(2,[[1,2]])}\n`);  //2
console.log(`nonTrusting Judge is ${findJudge(3,[[1,3],[2,3]])}\n`);  //3
console.log(`nonTrusting Judge is ${findJudge(3,[[1,3],[2,3],[3,1]])}\n`);  //-1
console.log(`nonTrusting Judge is ${findJudge(3,[[1,2],[2,3]])}\n`);   //3
console.log(`nonTrusting Judge is ${findJudge(4,[[1,3],[1,4],[2,3],[2,4],[4,3]])}\n`); //3