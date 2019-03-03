"use strict"

class Graph {
    constructor(numOfVertices) {
	this.numOfVertices = numOfVertices
	this.adjList = new Array()
	for(let i=0; i<numOfVertices; i++)
	    this.adjList[i] = new Array()
    }

    addEdge(v, w, weight) {
	let path = [w, weight]
	this.adjList[v].push(path)
    }

    dijkstra(s, v) {
	let weight = new Array()
	for(let i=0; i<this.numOfVertices; i++) {
	    this.adjList[i].explored = false
	    weight[i] = 1000000 // infinity
	}
	weight[s] = 0

	for(let i=0; i<this.numOfVertices; i++) {
	    let minDistance = 100000000000000
	    let indexChoosen
	    this.adjList[i].forEach(function (item, index) {
		if(this.adjList[index].explored == false) {
		    if(item[1] < minDistance) {
			indexChoosen = item[0]
			minDistance = item[1]
		    }
		}
	    }, this)
	    if(typeof indexChoosen !== "undefined") {
		weight[indexChoosen] = weight[i] + minDistance
		this.adjList[indexChoosen].explored = true
	    }
	}

	console.log(weight)
	return weight[v]
    }
}


let g = new Graph(4)

g.addEdge(0, 1, 1);
g.addEdge(0, 2, 4);
g.addEdge(0, 3, 5);
g.addEdge(1, 2, 2);
g.addEdge(1, 3, 6);
g.addEdge(2, 3, 3);

console.log(g.dijkstra(0,3))
