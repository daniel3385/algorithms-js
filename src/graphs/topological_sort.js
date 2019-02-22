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

    DFS_TOPO(s, stack) {
	this.adjList[s].explored = true
	this.adjList[s].forEach(function (item, index) {
	    if(this.adjList[item].explored == false) {
		this.DFS_TOPO(item, stack)
	    }
	}, this)
	stack.push(s)
    }

    TopoSort() {
	let stack = new Array()

	for(let i=0; i<this.numOfVertices; i++) {
	    this.adjList[i].explored = false
	}

	for(let i=0; i<this.numOfVertices; i++) {
	    if(this.adjList[i].explored == false) {
		this.DFS_TOPO(i, stack)
	    }
	}

	while(stack.length > 0) {
	    console.log(' -> ' + stack[stack.length - 1])
	    stack.pop()
	}
    }
}

/*

input A:

    5   4
   / \ / \
  2   0   1
   \     /
    \   /
      3

output: 5 4 2 3 1 0

*/

let g = new Graph(6)
g.addEdge(5, 2)
g.addEdge(5, 0)
g.addEdge(4, 0)
g.addEdge(4, 1)
g.addEdge(2, 3)
g.addEdge(3, 1)

g.TopoSort()
