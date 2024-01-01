import React from 'react'
import { useState, useEffect } from 'react'
import Product from '../../models/product'
import Table from 'react-bootstrap/Table'
import Sale from '../../models/sale'

interface ProductSalesTableProps {
    product: Product | null
}
interface Sort {
    name: sortNameType | ''
    sort: 'asc' | 'desc' | ''
}

type sortNameType =
    | 'retailSales'
    | 'wholesaleSales'
    | 'unitsSold'
    | 'retailerMargin'

export const ProductSaleTable = ({ product }: ProductSalesTableProps) => {
    const [tableData, setTableData] = useState<Sale[]>([])
    const [sort, setSort] = useState<Sort>({
        name: '',
        sort: '',
    })

    useEffect(() => {
        if (product && product.sales) {
            setTableData(product.sales)
        } else {
            setTableData([])
        }
    }, [product])

    const sortFunction = (field: sortNameType) => {
        if (sort.name == field) {
            const isSortDesc = sort.sort == 'desc'

            const sorted = [...tableData].sort((a, b) =>
                isSortDesc ? a[field] - b[field] : b[field] - a[field]
            )

            setSort({
                name: field,
                sort: isSortDesc ? 'asc' : 'desc',
            })

            setTableData(sorted)
        } else {
            const sorted = [...tableData].sort((a, b) => a[field] - b[field])
            setSort({
                name: field,
                sort: 'asc',
            })
            setTableData(sorted)
        }
    }

    const getSortDirectSymbol = (field: sortNameType) => {
        if (sort.name == field) {
            return sort.sort == 'desc' ? 'v' : '^'
        }
        return ' '
    }

    if (!product || tableData.length == 0) return <></>
    return (
        product && (
            <div className="product-sale-table-container shadow">
                <Table hover>
                    <thead>
                        <tr>
                            <th>WEEK ENDING</th>
                            <th onClick={() => sortFunction('retailSales')}>
                                RETAIL SALES{getSortDirectSymbol('retailSales')}
                            </th>
                            <th onClick={() => sortFunction('wholesaleSales')}>
                                WHOLESALE SALES
                                {getSortDirectSymbol('wholesaleSales')}
                            </th>
                            <th onClick={() => sortFunction('unitsSold')}>
                                UNITS SOLD{getSortDirectSymbol('unitsSold')}
                            </th>
                            <th onClick={() => sortFunction('retailerMargin')}>
                                RETAILER MARGIN
                                {getSortDirectSymbol('retailerMargin')}
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ width: '10px' }}>
                        {tableData.map((sale) => (
                            <tr key={sale.weekEnding}>
                                <td>{sale.weekEnding}</td>
                                <td>{sale.retailSales}</td>
                                <td>{sale.wholesaleSales}</td>
                                <td>{sale.unitsSold}</td>
                                <td>{sale.retailerMargin}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    )
}
