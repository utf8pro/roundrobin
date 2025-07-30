export type TRoundRobin<T = unknown> = {
  next(): T
}

export function roundrobin<T = unknown>(values: T[]): TRoundRobin<T> {
  if (values.length === 0) {
    throw new Error("Cannot initialize round robin with empty values")
  }
  let counter = 0
  const next = (): T => {
    counter++
    // @ts-ignore
    return values[(counter - 1) % values.length]
  }
  return {next}
}
