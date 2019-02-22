"use strict"

class Graph {
    constructor(numOfVertices) {
	this.numOfVertices = numOfVertices
	this.adjList = new Array()
	for(let i=0; i<numOfVertices; i++) {
	    this.adjList[i] = new Array()
	    this.adjList[i].explored = false
	}
    }

    addEdge(v, w) {
	this.adjList[v].push(w)
    }

    DFS(s) {
	console.log(' -> ' + s)
	this.adjList[s].explored = true
	this.adjList[s].forEach(function (item, index) {
	    if(this.adjList[item].explored == false) {
		this.DFS(item)
	    }
	}, this)
    }
}


let g = new Graph(6)
g.addEdge(0, 1)
g.addEdge(1, 0)
g.addEdge(1, 3)
g.addEdge(3, 1)
g.addEdge(3, 4)
g.addEdge(4, 3)
g.addEdge(4, 5)
g.addEdge(5, 4)
g.addEdge(4, 2)
g.addEdge(2, 4)
g.addEdge(2, 0)
g.addEdge(0, 2)

g.DFS(0)
