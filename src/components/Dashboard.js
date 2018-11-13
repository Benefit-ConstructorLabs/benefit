import React from 'react';
import {
  ComposedChart, BarChart, PieChart, Pie, Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Cell, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line
} from 'recharts';
import '../../styles/components/dashboard.scss';

const Dashboard = () => {

  const progressData = [
    { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
    { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
    { name: 'Page C', uv: 1397, pv: 1098, amt: 1989 },
    { name: 'Page D', uv: 1480, pv: 1200, amt: 2228 },
    { name: 'Page E', uv: 1520, pv: 1108, amt: 3100 },
    { name: 'Page F', uv: 1400, pv: 680, amt: 3700 },
  ];

  const signupData = [
    { name: 'Recipients', today: 40, other: 200, },
    { name: 'Donors', today: 300, other: 1308, },
  ];

  // pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#BADA55'];
  const donationData = [
    { name: '£2', value: 400 },
    { name: '£5', value: 300 },
    { name: '£10', value: 100 },
    { name: '£1', value: 200 },
    { name: '£20', value: 40 },
  ]

  //radar
  const dailyData = [
    { subject: 'Monday', A: 120, B: 110, fullMark: 150 },
    { subject: 'Tuesday', A: 98, B: 130, fullMark: 150 },
    { subject: 'Wednesday', A: 86, B: 130, fullMark: 150 },
    { subject: 'Thursday', A: 99, B: 100, fullMark: 150 },
    { subject: 'Friday', A: 85, B: 90, fullMark: 150 },
    { subject: 'Saturday', A: 65, B: 85, fullMark: 150 },
  ];


  return (

    <section className="dashboard">
      <h2 className="dashboard__title">Dashboard</h2>
      <dl className="dashboard__totals__overall">
        <dd>Total</dd>
        <dt>£14500</dt>
      </dl>
      <dl className="dashboard__totals__daily">
        <dd>Today’s total</dd>
        <dt>£564</dt>
      </dl>
      <section className="dashboard__progress">
        <ComposedChart width={960} height={400} data={progressData}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
          <Bar dataKey='pv' barSize={20} fill='#413ea0' />
          <Line type='monotone' dataKey='uv' stroke='#ff7300' />
        </ComposedChart>
      </section>

      <section className="dashboard__signups">
        <BarChart width={300} height={300} data={signupData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="other" stackId="a" fill="#8884d8" />
          <Bar dataKey="today" stackId="a" fill="#82ca9d" />
        </BarChart>
      </section>

      <section className="dashboard__donations">
        <PieChart width={400} height={300}>
          <Pie
            data={donationData}
            dataKey="value"
            nameKey="name"
            // cx={120}
            cy={130}
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
          >
            {
              donationData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Legend verticalAlign="middle" />
        </PieChart>
      </section>
      <section className="dashboard__daily">
        <RadarChart outerRadius="90%" width={300} height={300} data={dailyData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </section>
    </section>
  );
};

export default Dashboard;
