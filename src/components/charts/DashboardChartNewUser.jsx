import React from 'react'
import { Chart } from "react-google-charts";

const data = [
    ["Mês", "Density", { role: "style" }],
    ["Janeiro", 8.94, "#F91F49"], // RGB value
    ["Fevereiro", 10.49, "#F91F49"], // English color name
    ["Março", 11.3, "#F91F49"],
    ["Abril", 12.45, "#F91F49"],
    ["Maio", 13.45, "#F91F49"],
    ["Junho", 14.45, "#F91F49"],
    ["Julho", 15.45, "#F91F49"],
    ["Agosto", 16.45, "#F91F49"],
    ["Setembro", 18.45, "#F91F49"],
    ["Outubro", 19.45, "#F91F49"],
    ["Novembro", 20.45, "#F91F49"],
    ["Dezembro", 21.45, "#F91F49"], // CSS-style declaration
]

const DashboardChartNewUser = () => {
  return (
    <Chart 
    chartType='ColumnChart' 
    width="100%" 
    height="400%" 
    data={data} />
  )
}

export default DashboardChartNewUser
