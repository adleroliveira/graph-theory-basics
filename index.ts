import {BasicGraph} from './Graph'

type City = string
const flights = new BasicGraph<City>()
// flights.loadVertices(["LA", "Seattle", "Dallas", "Chicago", "Atlanta"])
flights.connect("LA", "Seattle", 70)
flights.connect("LA", "Dallas", 150)
flights.connect("LA", "Atlanta", 170)
flights.connect("NY", "Austin", 200)
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
console.log("Neighbours of LA", flights.neighbours("LA"))
console.log("DFS Ordering from Seattle", flights.dfs_order("Seattle"))
console.log("DFS Ordering from NY", flights.dfs_order("NY"))

console.log(flights)


const components: BasicGraph<City>[] = flights.components()
console.log("Graph Components", components)
console.log("Graph Component[1] Neighbours of NY", components[1].neighbours("NY"))


// If you fly from Seattle to Dallas to Atlanta, is that a path or a circuit?

// Is the graph connected?

// If you fly from LA to Chicago to Dallas to LA, is that a path or a circuit.
