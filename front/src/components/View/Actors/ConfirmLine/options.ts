import { EChartsOption } from "echarts"
const colors = ["#126EFC"]
export const createLineOption = (data: { x: number; y: number }[]): EChartsOption => {
    const x = data.map(({ x }) => x)
    const y = data.map(({ y }) => y)
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
            left: "45%",
        },
        legend: {
            show: true,
            orient: "horizontal",
            data: ["国外确诊趋势"],
            right: 0,
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
        yAxis: [
            {
                name: "人数",
                type: "value",
                axisLabel: {
                    formatter: `{value|{value}}`,
                    rich: {
                        base: {
                            fontSize: 12,
                        },
                        value: {
                            fontSize: 10,
                            padding: [0, 0, 0, 0],
                        },
                    },
                },
                nameTextStyle: {
                    padding: [0, 0, 0, 25],
                },
                axisLine: {
                    show: true,
                    symbol: ["none", "none"],
                    lineStyle: {
                        color: "#677AFB",
                    },
                    // symbolOffset: [0, 10],
                    // symbolSize: [10, 15]
                },
            },
        ],
        series: [
            {
                data: y,
                yAxisIndex: 0,
                type: "line",
                name: "幅值",
                smooth: true,
                itemStyle: { color: colors[0] },
                lineStyle: { width: 3, color: colors[0] },
            },
        ],
    }
}
