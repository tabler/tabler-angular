export interface Collection {
  id: string
  name?: string
  icon?: any
  properties?: any
  fields?: any
}

export interface Item {
  id: string
  [key: string]: any
}
