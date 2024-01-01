import Review from './review'
import Sale from './sale'

export default interface Product {
    id: string
    title: string
    image: string
    subtitle: string
    brand: string
    retailer: string
    tags: string[]
    details: string[]
    reviews: Review[]
    sales: Sale[]
}
