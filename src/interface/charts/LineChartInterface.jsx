import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartInterface = ({ data }) => {
  const DataFormater = (number) => {
    if (number > 1000000000) {
      return (number / 1000000000).toString() + "B";
    } else if (number > 1000000) {
      return (number / 1000000).toString() + "M";
    } else if (number > 1000) {
      return (number / 1000).toString() + "K";
    } else {
      return number.toString();
    }
  };

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        data={data}
        margin={{
          top: 5,
          left: 0,
          right: 10,
          bottom: 5,
        }}
        className='font-light text-sm text-neutral-400 '>
        <XAxis
          axisLine={{ stroke: "rgb(163 163 163 /.4)" }}
          dataKey='name'
          tickFormatter={XAxisTickFormat}
          tickLine={false}

        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={DataFormater}
          dx={-10}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "transparent" }}
          wrapperStyle={{ outline: 0 }}
        />
        <Legend align='right' iconSize={10} iconType='circle' />
        <Line
          type='monotone'
          dataKey='Dispatched'
          stroke='#6366f1'
          dot={false}
          activeDot={{ r: 5 }}
        />
        <Line type='monotone' dataKey='Pending' stroke='#10b981' dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default LineChartInterface;

export const CustomTooltip = ({ active, payload, label }) => {
  console.log();
  if (active && payload && payload.length) {
    return (
      <div className='bg-neutral-600/30 backdrop-blur-sm rounded-2xl px-6 py-2'>
        <div>
          {payload.map((pld, index) => (
            <div className=' flex' key={index}>
              <div className='uppercase text-neutral-600'>{pld.dataKey} : </div>
              <div className='ml-2 text-emerald-600'>{pld.value}</div>
            </div>
          ))}
        </div>
        <p className='text-neutral-600 text-center'>{` ${label}`}</p>
      </div>
    );
  }

  return null;
};

const XAxisTickFormat = ( label ) => {
  return label.slice(0, 3)
};
