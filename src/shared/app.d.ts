declare global {
  type DataPair<T> = {
    key: string
    data: T
  }

  type ProductData = {
    key: string
    title: string
    summary: string
    highlight?: boolean
    features: string[]
  }
}

export {}
