import React from 'react';
import PropTypes from 'prop-types';
import {
  ComposedChart, BarChart, PieChart, Pie, Radar,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Cell, XAxis, YAxis, Tooltip, Legend,
  CartesianGrid, Area, Bar, Line,
} from 'recharts';
import { format } from 'date-fns';
import '../../styles/components/dashboard.scss';

class Dashboard extends React.Component {
  componentDidMount() {
    const { id, getDonationsByOrganisationID } = this.props;
    getDonationsByOrganisationID(id);
  }

  render() {
    const progressData = [
      { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
      { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
      { name: 'Page C', uv: 1397, pv: 1098, amt: 1989 },
      { name: 'Page D', uv: 1480, pv: 1200, amt: 2228 },
      { name: 'Page E', uv: 1520, pv: 1108, amt: 3100 },
      { name: 'Page F', uv: 1400, pv: 680, amt: 3700 },
    ];

    const signupData = [
      { name: 'Recipients', today: 40, other: 200 },
      { name: 'Donors', today: 300, other: 1308 },
    ];

    // pie chart
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#BADA55'];
    const donationData = [
      { name: '£2', value: 400 },
      { name: '£5', value: 300 },
      { name: '£10', value: 100 },
      { name: '£1', value: 200 },
      { name: '£20', value: 40 },
    ];

    // radar
    const dailyData = [
      { subject: 'Monday', A: 120, B: 110, fullMark: 150 },
      { subject: 'Tuesday', A: 98, B: 130, fullMark: 150 },
      { subject: 'Wednesday', A: 86, B: 130, fullMark: 150 },
      { subject: 'Thursday', A: 99, B: 100, fullMark: 150 },
      { subject: 'Friday', A: 85, B: 90, fullMark: 150 },
      { subject: 'Saturday', A: 65, B: 85, fullMark: 150 },
    ];

    const { donations } = this.props;


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
            <YAxis yAxisId="left" orientation="left" stroke="#BADA55" />
            <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
            <Tooltip />
            <Legend />
            <Area yAxisId="left" type='monotone' dataKey='amt' fill='#BADA55' stroke='#BADA55' />
            <Bar yAxisId="right" dataKey='pv' barSize={40} fill='#413ea0' />
            <Line yAxisId="right" type='monotone' dataKey='uv' stroke='#ff7300' />
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

        <section className="dashboard__amounts">
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
                donationData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
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
        <section className="dashboard__donations">
          <table className="dashboard__donations__table">
            <thead>
              <td>ID</td>
              <td>Date</td>
              <td>Amount</td>
              <td>Recipient</td>
              <td>Donor</td>
            </thead>
            <tbody>
              {donations.map((donation) => {
                const { id, time, amount, recipient, donor } = donation;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{format(time, 'D/M/YYYY')}</td>
                    <td>{`£ ${Number.parseFloat(amount / 10).toFixed(2)}`}</td>
                    <td>{recipient}</td>
                    <td>{donor}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

        </section>
      </section>
    );
  };
};

Dashboard.propTypes = {
  id: PropTypes.number.isRequired,
  getDonationsByOrganisationID: PropTypes.func.isRequired,
  donations: PropTypes.instanceOf(Array).isRequired,
};

export default Dashboard;
