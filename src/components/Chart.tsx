import { theme } from '@chakra-ui/react'

import dynamic from 'next/dynamic'

const ApexChart = dynamic(()=>import('react-apexcharts'), {
    ssr: false
})

const Chart = () => {
    const options = {
        chart: {
            toolbar: {
                show: false
            },
            zoom: {
                enable: false
            },
            foreColor: theme.colors.gray[500]
        },
        grid: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                color: theme.colors.gray[600]
            },
            axisTicks: {
                color: theme.colors.gray[600]
            },
            categories: [
                '2021-03-18T00:00:00.000Z',
                '2021-03-19T00:00:00.000Z',
                '2021-03-20T00:00:00.000Z',
                '2021-03-21T00:00:00.000Z',
                '2021-03-22T00:00:00.000Z',
                '2021-03-23T00:00:00.000Z',
                '2021-03-24T00:00:00.000Z',
            ]
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.7,
                opacityTo: 0.3
            }
        }
    }
    
    const series = [
        { name: 'series1', data: [31, 120, 10, 28, 51, 18, 109]}
    ]

    return(
        <ApexChart
            type="area" 
            height={160} 
            options={options} 
            series={series}
        />
    )
}

export default Chart