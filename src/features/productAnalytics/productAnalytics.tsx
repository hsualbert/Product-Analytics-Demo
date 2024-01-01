import React, { useEffect } from 'react'
import Stack from 'react-bootstrap/Stack'
import Spinner from 'react-bootstrap/Spinner'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
    selectProduct,
    selectStatus,
    getMockData,
} from './productAnalyticsSlice'
import { ProductOverview } from './productOverview'
import { ProductSaleChart } from './productSaleChart'
import { ProductSaleTable } from './productSaleTable'
import './productAnalytics.css'

export const ProductAnalytics = () => {
    const currentProduct = useAppSelector(selectProduct)
    const apiStatus = useAppSelector(selectStatus)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMockData())
    }, [])

    if (apiStatus == 'loading') {
        return (
            <div className="m-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

    return (
        <div className="product-analytics row">
            <div className=" product-analytics col ">
                <ProductOverview product={currentProduct}></ProductOverview>
                <Stack gap={3} className="w-100">
                    <div className="m-4">
                        <ProductSaleChart product={currentProduct} />
                    </div>
                    <div className="m-4">
                        <ProductSaleTable product={currentProduct} />
                    </div>
                </Stack>
            </div>
        </div>
    )
}
