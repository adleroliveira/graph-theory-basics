export class Edge<T> {
    public left: T
    public right: T
    public weight: number

    constructor(left: T, right: T, weight: number = 0) {
        this.left = left
        this.right = right
        this.weight = weight
    }
}

type GraphEntry<T> = { vertex: T, edges: Edge<T>[] }

export class Graph<T> {
    private _vertices: Set<T> = new Set()
    private _edges: Edge<T>[] = []

    public loadVertices(vertices: T[]): void {
        vertices.forEach(v => {
            this._vertices.add(v)
        })
    }

    public connect(a: T, b: T, weight = 0) {
        if (!this._vertices.has(a)) this._vertices.add(a)
        if (!this._vertices.has(b)) this._vertices.add(b)
        // Does graph edges have directions????????
        // Assuming they don't, let's check if the same edge already existis from both A, and B
        if (!this.edgeExists(a, b)) {
            this._edges.push(new Edge(a, b, weight))
        }
    }

    public edgeExists(a:T, b:T): boolean {
        this._edges.forEach(e => {
            //TODO: Make sure it also works with (===)
            if((e.left == a && e.right == b) || (e.left == b && e.right == a)) return true
        })
        return false
    }

    public edgeCount(): number {
        return this._edges.length
    }
    
    public vertexCount(): number {
        return this._vertices.size
    }
    
    public degree(vertex: T): number {
        if(!this._vertices.has(vertex)) throw new Error("Vertex not found")
        return this._edges.reduce((acc: number, e: Edge<T>) => {
            if (e.left == vertex || e.right == vertex) return acc + 1
            return acc
        }, 0)
    }

    public isConnected(): boolean {
        throw new Error("Not Implemented")
    }


    public pathBetween(a: T, b: T): Edge<T>[] {
        throw new Error("Not Implemented")
    }
}


type City = string
const flights = new Graph<City>()
// flights.loadVertices(["LA", "Seattle", "Dallas", "Chicago", "Atlanta"])
flights.connect("LA", "Seattle", 70)
flights.connect("LA", "Dallas", 150)
flights.connect("LA", "Atlanta", 170)
flights.connect("LA", "Chicago", 100)
flights.connect("Chicago", "Seattle", 145)
flights.connect("Chicago", "Dallas", 165)
flights.connect("Chicago", "Atlanta", 75)
flights.connect("Atlanta", "Seattle", 140)
flights.connect("Atlanta", "Dallas", 85)
flights.connect("Dallas", "Seattle", 120)

// How many vertices and edges does the graph have?
console.log("EdgeCount", flights.edgeCount())
console.log("VertexCount", flights.vertexCount())

// What is the degree of the vertex representing LA?
console.log("Degrees of LA", flights.degree("LA"))

// If you fly from Seattle to Dallas to Atlanta, is that a path or a circuit?

// Is the graph connected?

// If you fly from LA to Chicago to Dallas to LA, is that a path or a circuit.

