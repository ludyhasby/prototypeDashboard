import React from 'react'; 
import { useNavigate } from "react-router-dom";
import homeStatics from './homeStatics';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, AreaChart, Area, ComposedChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts'
// Using Rechart Library
const {data, data2, data3, data4, data5} = homeStatics; 
export default function HomeRightMain() {
  const navigate = useNavigate();
  return (
      <div>
        <div className='itemContainer'>
          <div className='itemContainer1'>
            <div className='subItemContainer'>
              <p className='taskProgress'>Task on Progress</p>
              <p className='taskCounter'>212</p>
              <p className='currentMonth'>Current Period</p>
            </div>
            <div className='barChartContainer'>
              <BarChart width={160} height={100} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Yours" fill="#8884d8" />
                <Bar dataKey="Others" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
          <div className='itemContainer1'>
            <div className='subItemContainer'>
              <p className='taskProgress'>Task Completed</p>
              <p className='taskCounter2'>301</p>
              <p className='currentMonth'>Current Period</p>
            </div>
            <div className='barChartContainer'>
              <BarChart width={160} height={100} data={data2}>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Yours" fill="#8884d8" />
              </BarChart>
            </div>
          </div>
          <div className='itemContainer1'>
            <div className='subItemContainer1'>
              <p className='taskProgress'>Monthly Task Summary</p>
              <p className='taskCounter3'>351</p>
              <p className='currentMonth'>Current Period</p>
            </div>
            <div className='barChartContainer'>
              <BarChart width={160} height={100} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="Others" fill="#3d3f3eff" />
              </BarChart>
            </div>
          </div>
        </div>

        <div className='middleTaskChart'>
          <p className='taskCreatedVSCompleted'>Task Created vs Task Completed</p>
          <AreaChart width={1150} height={350} data={data3}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Task Created" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="Task Completed" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </div>

        <div className='taskContainer'>
          <div className='taskChart'>
            <p>Your Team Performance This Week</p>
            <RadarChart outerRadius={90} width={350} height={250} data={data5}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="You" dataKey="You" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Your Team" dataKey="Your Team" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
            <p className='teamPerformanceText'>Your Team Performance is 35% better than last month</p>
            <button className="viewDetailBtn" onClick={() => navigate("/progress")}>View Details</button>
          </div>

          <div className='monthlyLearning'>
            <p>Monthly Learning Performance</p>
            <ComposedChart
              width={800}
              height={300}
              data={data4}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" barSize={20} fill="fill" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </div>
        </div>
      </div>
  )
}
