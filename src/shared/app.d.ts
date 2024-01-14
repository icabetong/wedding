import { type TablerIconsProps } from '@tabler/icons-react'

declare global {
  type DataPair<T> = {
    key: string
    data: T
  }
  type Theme = 'dark' | 'light'

  type ProductData = {
    key: string
    title: string
    summary: string
    highlight?: boolean
    features: string[]
  }
  type SupplierGroup = {
    key: string
    label: string
    suppliers: DataPair<string>[]
  }
  type CardData = {
    key: string
    title: string
    description?: string
    icon: (props: TablerIconsProps) => JSX.Element
  }
}
