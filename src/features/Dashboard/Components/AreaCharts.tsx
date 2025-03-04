import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

// Define the expected type for data items
interface DataPoint {
  date: string;
  value: number;
}

// Define props for the component
interface MyAreaChartProps {
  data: DataPoint[]; // Array of data points
  yaxis?: boolean;   // Optional boolean for Y-axis visibility
}

const MyAreaChart: React.FC<MyAreaChartProps> = ({ data, yaxis }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#29b6f6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#29b6f6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          className="font-semibold text-[12px] text-zinc-950"
        />
        {yaxis ? (
          <YAxis
            dataKey="value"
            tickLine={false}
            axisLine={false}
            className="font-semibold text-[12px] text-zinc-950"
          />
        ) : null}
        <Area
          dataKey="value"
          stroke="#21AFA8"
          strokeWidth={2}
          fill="url(#colorFill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MyAreaChart;
