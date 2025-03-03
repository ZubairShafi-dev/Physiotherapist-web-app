
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Earningscharts = () => {
  
  const data = [
    { name: "Category A", value: 80 },
    { name: "Category B", value: 20 },

  ];

  const COLORS = ["#379996", "#2B2B36"];

  return (
    <div style={{ width: "100%", height: 120 }} className='relative'>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%" 
            cy="100%"  // Moves pie down to create a semi-pie chart
            startAngle={180} 
            endAngle={0} 
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div
				style={{
					position: 'absolute',
					bottom: '-10%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					textAlign: 'center',
				}}
			>
				<p className='font-bold text-4xl text-[#379996]'>80%</p>
	
			</div>
    </div>
  );
};


export default Earningscharts