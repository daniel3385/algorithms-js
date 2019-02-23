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

    BFS(s, numCC) {

	let queue = new Array()
	this.adjList[s].explored = true
	queue.push(s)

	while(queue.length > 0) {
	    s = queue.shift()
	    this.adjList[s].numCC = numCC
	    this.adjList[s].forEach(function (item, index) {
		if(this.adjList[item].explored == false) {
		    this.adjList[item].explored = true
		    queue.push(item)
		}
	    }, this)
	}
    }

    UCC() {
	for(let i=0; i<this.numOfVertices; i++)
	    this.adjList[i].explored = false

	let numCC = 0 // number of the connected component
	for(let i=0; i<this.numOfVertices; i++) {
	    if(this.adjList[i].explored == false) {
		numCC = numCC + 1
		this.BFS(i, numCC)
	    }
	}
	console.log('edge -> numCC')
	for(let i=0; i<this.numOfVertices; i++) {
	    console.log(i + ' -> ' + this.adjList[i].numCC)
	}
    }
}


/*

 0---2  1---3  5   
  \ /         / \
   4         7   9
  / \
 6   8

*/

let g = new Graph(10)
g.addEdge(0, 2)
g.addEdge(2, 0)
g.addEdge(0, 4)
g.addEdge(4, 0)
g.addEdge(2, 4)
g.addEdge(4, 2)
g.addEdge(4, 6)
g.addEdge(6, 4)
g.addEdge(4, 8)
g.addEdge(8, 4)

g.addEdge(1, 3)
g.addEdge(3, 1)

g.addEdge(5, 7)
g.addEdge(7, 5)
g.addEdge(5, 9)
g.addEdge(9, 5)

g.UCC()
