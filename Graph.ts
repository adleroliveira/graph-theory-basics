

interface Graph<T> {
    degree: (arg0: T) => number
    neighbours: (arg0: T) => T[]
    path: (arg0: T, arg1: T) => Edge<T>[]
    pathLength: (arg0: T, arg1: T) => number
    isCycle: (arg0: T, arg1: T) => boolean
    isConnected: (arg0: T, arg1: T) => boolean
    isGraphConnected: () => boolean
    rootVertex: () => T
    components: () => Graph<T>[]
}

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

export class BasicGraph<T> implements Graph<T> {
    private _vertices: Array<number[]> = new Array<number[]>()
    private _values: T[] = new Array()
    private _visited: Array<boolean> = new Array()

    public dfs_order(v: T): T[] {
        const i = this._values.indexOf(v)
        if (i == -1) throw new Error("Vertex Not Found")
        const order: number[] = []
        this._do_dfs(i, order)
        this._visited = new Array(this._values.length).fill(false)
        return order.map(v => this._values[v])
    }

    public degree(vertex: T): number {
        const i = this._values.indexOf(vertex)
        if (i === -1) throw new Error("Vertex Not Found")
        return this._vertices[i].length
    }

    public neighbours(vertex: T): T[] {
        const i = this._values.indexOf(vertex)
        return this._neighbours(i).map(v => this._values[v])
    }

    public has(v: T): boolean {
        return this.indexOf(v) !== -1
    }

    public connect(v1: T, v2: T, _weight: number = 0): void {
        this.addVertex(v1)
        this.addVertex(v2)

        const i1 = this.indexOf(v1)
        const i2 = this.indexOf(v2)

        if (!this._isConnected(i1, i2)) this._vertices[i1].push(i2)
        if (!this._isConnected(i2, i1)) this._vertices[i2].push(i1)
    }

    public rootVertex(): T {
        if(this._values.length === 0) throw new Error("Empty Graph doesn't have a root vertex")
        return this._values[0]
    }

    public addVertex(v: T): void {
        if (!this.has(v)) {
            this._values.push(v)
            this._vertices.push([])
            this._visited.push(false)
        }
    }

    public path(v1: T, v2: T): Edge<T>[] {
        throw new Error("Not Implemented")
    }

    public pathLength(v1: T, v2: T): number {
        return this.path(v1, v2).length
    }

    public isCycle(v1: T, v2: T): boolean {
        throw new Error("Not Implemented")
    }

    public isConnected(v1: T, v2: T): boolean {
        throw new Error("Not Implemented")
    }

    public isGraphConnected(): boolean {
        throw new Error("Not Implemented")
    }

    public components(): BasicGraph<T>[] {
        const components:  BasicGraph<T>[] = []
        if (this.vertexCount() === 0) {
            components.push(new BasicGraph<T>())
            return components
        }
        let pointerIdx = 0
        while (pointerIdx < this._vertices.length) {
            const g = new BasicGraph<T>()
            const ordering_buffer: number[] = []
            const ordering = this._do_dfs(pointerIdx, ordering_buffer)
            for(let j=0;j<ordering.length;j++) {
                const value = this._values[ordering[j]]
                const neighbours = this._neighbours(ordering[j])
                for(let k=0;k<neighbours.length;k++) {
                    g.connect(value, this._values[neighbours[k]])
                }
            }
            components.push(g)
            pointerIdx+=ordering.length
        }
        return components
    }

    public vertexCount(): number {
        return this._vertices.length
    }

    public edgeCount(): number {
        return this._vertices.reduce( (acc: number, edges: number[]) => {
            return acc + edges.length
        }, 0) / 2
    }

    private indexOf(vertex: T): number {
        return this._values.indexOf(vertex)
    }

    private _isConnected(a: number, b: number): boolean {
        return this._vertices[a].indexOf(b) !== -1
    }

    private _do_dfs(i: number, order: number[]): number[] {
        order.push(i)
        this._visited[i] = true
        for(let w of this._neighbours(i)) {
            if(!this._visited[w]) this._do_dfs(w, order)
        }
        return order
    }

    private _neighbours(i: number): number[] {
        if (i === -1) throw new Error("Vertex Not Found")
        return this._vertices[i]
    }
}