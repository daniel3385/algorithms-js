"use strict"

class Graph {
    constructor(numOfVertices) {
	this.numOfVertices = numOfVertices
	this.adjList = new Array()
	for(let i=0; i<numOfVertices; i++)
	    this.adjList[i] = new Array()
    }

    addEdge(v, w) {
	this.adjList[v].push(w)
    }

    BFS(s) {
	for(let i=0; i<this.numOfVertices; i++)
	    this.adjList[i].visited = false

	let queue = new Array()
	this.adjList[s].visited = true
	this.adjList[s].layer = 0
	queue.push(s)

	console.log('edge -> layer')
	while(queue.length > 0) {
	    s = queue.shift()
	    this.adjList[s].forEach(function (item, index) {
		if(this.adjList[item].visited == false) {
		    this.adjList[item].visited = true
		    this.adjList[item].layer = this.adjList[s].layer + 1
		    queue.push(item)
		}
	    }, this)
	    console.log(s + ' -> ' + this.adjList[s].layer)
	}
	
    }
}


let g = new Graph(4)
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 2)
g.addEdge(2, 0)
g.addEdge(2, 3)
g.addEdge(3, 3)

g.BFS(2)
