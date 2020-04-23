//Graph concepts
//Edge - shows different connections between nodes.
//Adjacent List - where index is the node and the value is the node neighbors.
class Graph {
    constructor(nodes) {
        this.edges = [];  // array holds nested array of node neighbors
        for (let node=1; node<=nodes; node++){
          this.addNode(node);
        }
    }

    //initialize each node with 
    //a placeholder array for all their node neighbors
    addNode(node){
        this.edges[node] = [];
    }

    // edge is the link between all node neighbors
    addEdge(node1, node2){
        //directed Graph - this node only goes in one direction not bidirectional
        this.edges[node1].push(node2)
    }

    // display the node and connections to help visualize how Graph works
    // showConnections(){
    //     this.edges.forEach( (currAdjacentNodes, currNode) => {
    //         const adjacentConnections = 
    //           currAdjacentNodes.reduce( (acc, currAdjacentNode) => {
    //             acc += currAdjacentNode + " ";
    //             return acc;
    //           },"")
    //         console.log( currNode + "-->" + adjacentConnections);
    //     })
        
    // }

}

function findJudge(numOfNeighbors, trustPairList){

    //initialize the graph with trust data
    const trustGraph = new Graph(numOfNeighbors);
    trustPairList.forEach(currTrustPair =>{
        trustGraph.addEdge(...currTrustPair);
    })

    //display connections onto screen for visualization
    // trustGraph.showConnections();

    // judge doesnt trust so no adjacent connections(or no trusted neighbors)
    // index is the neighbor and value is the node neighbors or adjacent neighbors
    const judgeNotFound = -1;
    return trustGraph.edges.reduce((acc,currAdjacentNeighbor) =>{
        if (trustGraph.edges[currAdjacentNeighbor] == ""){ // no trusted neighbors
            return currAdjacentNeighbor; // non trusting judge
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