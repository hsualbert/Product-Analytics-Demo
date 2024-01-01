import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface LineChartProps {
    title: string
    yAxisTitle: string
    xAxisTitle: string
    data: LineChartDataProps[]
}
interface LineChartDataProps {
    name: string
    data: LineChartDataPoint[]
}
export interface LineChartDataPoint {
    x: Date
    y: number
}

export const LineChart = ({
    data,
    title,
    yAxisTitle,
    xAxisTitle,
}: LineChartProps) => {
    const options = {
        chart: {
            type: 'spline',
        },
        title: {
            text: title,
        },
        xAxis: {
            labels: {
                formatter: (formatterProps: { value: number }) => {
                    return Highcharts.dateFormat('%b', formatterProps.value)
                },
            },
            title: {
                text: xAxisTitle,
            },
            type: 'datetime',
        },
        yAxis: {
            title: {
                text: yAxisTitle,
            },
        },
        series: [...data],
    }

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}
