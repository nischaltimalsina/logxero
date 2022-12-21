import React from "react";
import LineChartInterface from "../../interface/charts/LineChartInterface";

const data = [
  {
    name: "Sunday",
    Pending: 4000,
    Dispatched: 2400,
    amt: 2400,
  },
  {
    name: "Monday",
    Pending: 3000,
    Dispatched: 1398,
    amt: 2210,
  },
  {
    name: "Tuesday",
    Pending: 2000,
    Dispatched: 9800,
    amt: 2290,
  },
  {
    name: "Wednesday",
    Pending: 2780,
    Dispatched: 3908,
    amt: 2000,
  },
  {
    name: "Thursday",
    Pending: 1890,
    Dispatched: 4800,
    amt: 2181,
  },
  {
    name: "Friday",
    Pending: 2390,
    Dispatched: 3800,
    amt: 2500,
  },
  {
    name: "Saturday",
    Pending: 3490,
    Dispatched: 4300,
    amt: 2100,
  },
];

const RevenueChart = () => {
    
  return (
    <LineChartInterface data={data}/>
  );
};
export default RevenueChart;


