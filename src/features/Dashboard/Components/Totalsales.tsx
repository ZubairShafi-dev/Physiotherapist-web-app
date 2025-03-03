import MyAreaChart from "./AreaCharts"
const data = [
  { date: "Aug 01,2024", value: 5000 },
  { date: "Aug 02,2024", value: 6000 },
  { date: "Aug 03,2024", value: 3000 },
  { date: "Aug 04,2024", value: 8000 },
  { date: "Aug 05,2024", value: 9000 },
  { date: "Aug 06,2024", value: 4000 },
  { date: "Aug 07,2024", value: 11000 },
  { date: "Aug 08,2024", value: 7000 },
  { date: "Aug 09,2024", value: 13000 },
  { date: "Aug 10,2024", value: 9000 },
  { date: "Aug 11,2024", value: 15000 },
  { date: "Aug 12,2024", value: 5000 },
  { date: "Aug 13,2024", value: 17000 },
  { date: "Aug 14,2024", value: 8000 },
  { date: "Aug 15,2024", value: 19000 },
  { date: "Aug 16,2024", value: 20000 },
  { date: "Aug 17,2024", value: 21000 },
  { date: "Aug 18,2024", value: 18000 },
  { date: "Aug 19,2024", value: 16000 },
  { date: "Aug 20,2024", value: 20000 },
  { date: "Aug 21,2024", value: 17000 },
  { date: "Aug 22,2024", value: 32000 },
  { date: "Aug 23,2024", value: 22000 },
  { date: "Aug 24,2024", value: 26000 },
  { date: "Aug 25,2024", value: 38000 },
  { date: "Aug 26,2024", value: 37000 },
  { date: "Aug 27,2024", value: 42000 },
  { date: "Aug 28,2024", value: 39000 },
  { date: "Aug 29,2024", value: 46000 },
  { date: "Aug 30,2024", value: 48000 },
  { date: "Aug 31,2024", value: 50000 }
];

const Totalsales = () => {
  return (
    <div className='lg:w-[60%] md:w-[60%] sm:w-[100%] xs:w-[100%] rounded-lg border-[#B8B8B8] border-[1px] mt-2 px-5 py-3'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-[26px]'>Total sales</h1>
        <div className='flex gap-2'>
        <h6 className='font-semibold text-[12px] text-[#379996]'>Net Purchase</h6>
        <span className='px-3 text-[#379996] bg-[#D2FCF8] rounded-xl font-semibold text-[10px] py-1'>
          Rs 50,000</span>
        </div>
  
      </div>
      <MyAreaChart data={data} yaxis={false}/>
    </div>
  )
}

export default Totalsales