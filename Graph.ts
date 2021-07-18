type Some<T> = T
type None = undefined
type Optional<T> = Some<T> | None

interface Graph<T> {
    degree: (arg0: T) => number
    neighbours: (arg0: T) => T[]
    path: (arg0: T, arg1: T) => Edge<T>[]
    pathLength: (arg0: T, arg1: T) => number
    isCycle: (arg0: T, arg1: T) => boolean
    isConnected: (arg0: T, arg1: T) => boolean
    isGraphConnected: () => boolean
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

type GraphEntry<T> = { vertex: T, edges: Edge<T>[] }

export class BasicGraph<T> implements Graph<T> {
    private _vertices: Array<number[]> = new Array<number[]>()
    private _values: T[] = new Array()

    public degree(vertex: T): number {
        const i = this._values.indexOf(vertex)
        if (i === -1) throw new Error("Vertex Not Found")
        return this._vertices[i].length
    }

    public neighbours(vertex: T): T[] {
        const i = this._values.indexOf(vertex)
        if (i === -1) throw new Error("Vertex Not Found")
        return this._vertices[i].map(v => this._values[v])
    }

    public has(v: T): boolean {
        return this.indexOf(v) !== -1
    }

    public connect(v1: T, v2: T, _weight: number = 0): void {
        if (!this.has(v1)) {
            this._values.push(v1)
            this._vertices.push([])
        }

        if (!this.has(v2)) {
            this._values.push(v2)
            this._vertices.push([])
        }

        const i1 = this.indexOf(v1)
        const i2 = this.indexOf(v2)

        if (!this._isConnected(i1, i2)) this._vertices[i1].push(i2)
        if (!this._isConnected(i2, i1)) this._vertices[i2].push(i1)
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

    public components(): Graph<T>[] {
        throw new Error("Not Implemented")
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
}