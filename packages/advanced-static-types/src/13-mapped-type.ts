interface Point {
  x: number
  y: number
}

/* freeze use Readonly type */
const originPoint = Object.freeze<Point>({ x: 0, y: 0 })
originPoint.x = 1

type Readonly2<T> = {
  readonly [P in keyof T]: T[P]
}

type ReadonlyPoint = Readonly<Point>

const anotherPoint: Partial<Point> = { x: 0 }

type Nullable<T> = {
  [P in keyof T]: T[P] | null
}

type NullablePoint = Nullable<Point>

const nullablePoint: NullablePoint = {
  x: null,
  y: 0,
}

type PartialNullablePoint = Partial<Nullable<Point>>

const partialNullablePoint: PartialNullablePoint = {
  x: null,
  y: 0,
}

type Stringify<T> = {
  [P in keyof T]: string
}

type PartialNullableStringifyPoint = Partial<Nullable<Stringify<Point>>>
