import React from 'react'
import Product from '../../models/product'
import Badge from 'react-bootstrap/Badge'

interface ProductOverviewProps {
    product: Product | null
}

export const ProductOverview = ({ product }: ProductOverviewProps) => {
    return (
        product && (
            <div className="product-overview m-4">
                <div className="p-5">
                    <img width={'100%'} src={product.image}></img>
                </div>
                <h3>{product.title}</h3>
                <p>{product.subtitle}</p>
                <div className="hr"></div>
                {product.tags.map((tag) => (
                    <Badge pill bg="secondary" className="m-1" key={tag}>
                        {tag}
                    </Badge>
                ))}
            </div>
        )
    )
}
