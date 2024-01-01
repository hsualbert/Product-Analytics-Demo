import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import Product from '../../models/product'
import {
    LineChart,
    LineChartDataPoint,
} from '../../components/charts/lineChart'

interface ProductSalesChartProps {
    product: Product | null
}

export const ProductSaleChart = ({ product }: ProductSalesChartProps) => {
    const [retailSales, setRetailSales] = useState<LineChartDataPoint[]>([])
    const [wholeSales, setWholeSales] = useState<LineChartDataPoint[]>([])
    const [unitSold, setUnitSold] = useState<LineChartDataPoint[]>([])
    const [retailMargin, setRetailMargin] = useState<LineChartDataPoint[]>([])

    useEffect(() => {
        const newRetailSales: LineChartDataPoint[] = []
        const newWholeSales: LineChartDataPoint[] = []
        const newUnitSold: LineChartDataPoint[] = []
        const newMargin: LineChartDataPoint[] = []
        if (product && product.sales) {
            for (const sale of product.sales) {
                newRetailSales.push({
                    y: sale.retailSales ?? 0,
                    x: new Date(sale.weekEnding),
                })
                newWholeSales.push({
                    y: sale.wholesaleSales ?? 0,
                    x: new Date(sale.weekEnding),
                })
                newUnitSold.push({
                    y: sale.unitsSold ?? 0,
                    x: new Date(sale.weekEnding),
                })
                newMargin.push({
                    y: sale.retailerMargin ?? 0,
                    x: new Date(sale.weekEnding),
                })
            }
        }
        setRetailSales(newRetailSales)
        setWholeSales(newWholeSales)
        setUnitSold(newUnitSold)
        setRetailMargin(newMargin)
    }, [product])

    const convertToSeries = (data: LineChartDataPoint[], label: string) => {
        return {
            data: data,
            name: label,
        }
    }

    const lineChartData = useMemo(() => {
        const retailData = convertToSeries(retailSales, 'Retail Sale')
        const wholeSaleData = convertToSeries(wholeSales, 'Wholesale')
        const unitSoldData = convertToSeries(unitSold, 'Unit Sold')
        const retailMarginData = convertToSeries(retailMargin, 'Retail Margin')
        return [retailData, wholeSaleData, unitSoldData, retailMarginData]
    }, [retailSales, wholeSales, unitSold, retailMargin])

    if (!product) return <></>

    return (
        <div className="product-sale-chart-container shadow">
            <LineChart
                title={'Sales'}
                data={lineChartData}
                xAxisTitle="Sale Type"
                yAxisTitle="Sales"
            />
        </div>
    )
}
