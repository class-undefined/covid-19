import { EChartsOption } from "echarts"

export const createTrendsCountryLineOption = (data: {
    date: string[]
    country: { name: string; y: number[] }[]
}): EChartsOption => {
    const x = data.date
    const country = data.country
    const names = country.map(item => item.name)
    const series = country.map((item, index) => {
        return {
            data: item.y,
            yAxisIndex: index,
            type: "line" as "line",
            name: item.name,
            smooth: true,
        }
    })
    const yAxis = country.map(item => {
        return {
            // name: item.name,
            // type: "value" as "value",
            // axisLabel: {
            //     formatter: `{value|{value}}`,
            //     rich: {
            //         base: {
            //             fontSize: 12,
            //         },
            //         value: {
            //             fontSize: 10,
            //             padding: [0, 0, 0, 0],
            //         },
            //     },
            // },
            // axisLine: {
            //     show: false,
            //     symbol: ["none", "none"] as [string, string],
            //     // lineStyle: {
            //     //     color: "#677AFB",
            //     // },
            //     // symbolOffset: [0, 10],
            //     // symbolSize: [10, 15]
            // },
        }
    })
    return {
        title: {
            text: "国外确诊数量",
            textStyle: {
                fontSize: 14,
                align: "center",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: 17,
            },
            left: "0%",
        },
        legend: {
            show: true,
            orient: "horizontal",
            data: names,
            right: 0,
            textStyle: {
                fontSize: 8,
            },
        },
        grid: {
            left: "2%",
            // left: 80,
            right: "2%",
            containLabel: true,
            // top: 100,
        },
        tooltip: {
            show: true,
            trigger: "axis",
            textStyle: { color: "#424242" },
            axisPointer: {
                type: "cross",
                // snap: true
            },
        },
        xAxis: {
            name: "日期",
            nameGap: 27,
            nameLocation: "middle",
            type: "category",
            data: x,
            nameTextStyle: {
                padding: [0, 0, 0, 10],
            },
            axisLabel: {
                formatter: (value: string, index: number) => parseFloat(value).toFixed(2),
            },
            axisLine: {
                symbol: ["none", "none"],
                symbolOffset: [0, 0],
                symbolSize: [10, 15],
            },
            splitLine: {
                show: true,
            },
        },
        yAxis,
        series,
    }
}
