
# Graph Theory Learning

This is my attempt to learn some **aspects** of grapth theory for practical reasons. In my view there are plenty of practical real world problems that can be reasoned about by framing it as a graphs and applying graph theoretical solutions to it. I am not, nor will pretend to be good at math, but I understand that there will be aspects of graph theory that goes beyond of just logic (*which I am decent at*) and require some math knowledge. I am willing to do a serious attempt at learning this aspects if this will enable me to unlock the reasoning for the specifc graph theory aspect that I am exploring at the moment.

## Definitions

### Vertex

A vertex is a dot in the graph that could represent an intersection of streets, a land mass, or a general location, like “work” or “school”. Vertices are often connected by edges. Note that vertices only occur when a dot is explicitly placed, not whenever two edges cross. Imagine a freeway overpass—the freeway and side street cross, but it is not possible to change from the side street to the freeway at that point, so there is no intersection and no vertex would be placed.

### Edge

Edges connect pairs of vertices. An edge can represent a physical connection between locations, like a street, or simply that a route connecting the two locations exists, like an airline flight.

### Loop

A loop is a special type of edge that connects a vertex to itself. Loops are not used much in street network graphs.  
![Graph Loop](https://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/282/2016/01/20155118/Fig2_5_7.png "Graph Loop")

### Degree of a Vertex

The degree of a vertex is the number of edges meeting at that vertex. It is possible for a vertex to have a degree of zero or larger.  
![Graph Degree](https://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/282/2016/01/20155120/Fig2_5_11.png "Graph Degree")

### Path

A path is a sequence of vertices using the edges. Usually we are interested in a path between two vertices. For example, a path from vertex A to vertex M is shown below. It is one of many possible paths in this graph.
![Graph Path](https://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/282/2016/01/20155122/Fig2_5_13.png "Graph Path")

### Circuit

A circuit is a path that begins and ends at the same vertex. A circuit starting and ending at vertex A is shown below.  
![Graph Circuit](https://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/282/2016/01/20155123/Fig2_5_14.png "Graph Circuit")

### Connected

A graph is connected if there is a path from any vertex to any other vertex. Every graph drawn so far has been connected. The graph below is disconnected; there is no way to get from the vertices on the left to the vertices on the right.
![Connected Graph](https://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/282/2016/01/20155124/Fig2_5_15.png "Connected Graph")

### Weights

Depending upon the problem being solved, sometimes weights are assigned to the edges. The weights could represent the distance between two locations, the travel time, or the travel cost. It is important to note that the distance between vertices in a graph does not necessarily correspond to the weight of an edge.

## Learning Resources

- Graph Theory Basics (<https://courses.lumenlearning.com/wmopen-mathforliberalarts/chapter/introduction-graph-theory/>)
