import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar } from 'recharts';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts';
import { Legend, XAxis, YAxis, Tooltip } from 'recharts';
import { ComposedChart, CartesianGrid, Area, Line, ErrorBar } from 'recharts';
import { format, getTime, isToday } from 'date-fns';
import '../../styles/components/dashboard.scss';

class Dashboard extends React.Component {
  componentDidMount() {
    const { id, getDonationsByOrganisationID } = this.props;
    getDonationsByOrganisationID(id);
  }

  render() {
    const { donations } = this.props;

    let total = 0;

    const todaysTotal = (donations.filter(item => isToday(item.time))
      .reduce(((acc, item) => acc + item.amount), 0) / 100)
      .toFixed(2);

    // console.log('TODAY', todaysDonations);

    const timelineData = [...donations];
    timelineData.reverse();

    const timeSeries = timelineData.map((item, index) => {
      const { time, amount } = item;
      total += (amount / 100);
      return {
        time: getTime(time), donation: (amount / 100), total, average: total / (index + 1),
      };
    });

    const signupData = [
      { name: 'Recipients', today: 4, other: 13 },
      { name: 'Donors', today: 14, other: 148 },
    ];

    // radar

    const dailySeries = donations.map((item) => {
      const { time, amount } = item;
      return { day: format(time, 'dddd'), amount: amount / 100 };
    });

    const days = [
      { day: 'Monday', amount: 0 },
      { day: 'Tuesday', amount: 0 },
      { day: 'Wednesday', amount: 0 },
      { day: 'Thursday', amount: 0 },
      { day: 'Friday', amount: 0 },
      { day: 'Saturday', amount: 0 },
      { day: 'Sunday', amount: 0 }];

    dailySeries.forEach((item) => {
      if (days.find(element => element.day === item.day)) {
        days.find(element => element.day === item.day).amount += item.amount;
      } else {
        days.push(item);
      }
    });

    return (
      <section className="dashboard">
        <h2 className="dashboard__title">Dashboard (beta)</h2>
        <dl className="dashboard__totals__overall">
          <dd>Total Donations</dd>
          <dt>{`£${total.toFixed(2)}`}</dt>
        </dl>
        <dl className="dashboard__totals__daily">
          <dd>Today’s total</dd>
          <dt>{`£${todaysTotal}`}</dt>
        </dl>
        <section className="dashboard__progress">
          <h3>Donations timeline</h3>
          <ComposedChart
            width={960}
            height={400}
            data={timeSeries}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="time" type="number" stroke="#aaa" domain={['auto', 'auto']} tickFormatter={time => format(time, 'D MMM')} />
            <YAxis yAxisId="left" orientation="left" stroke="#aaa" label={{ value: 'total (£)', angle: -90, position: 'left' }} />
            <YAxis yAxisId="right" orientation="right" stroke="#aaa" label={{ value: 'donation (£)', angle: -90, position: 'right' }} />
            <Tooltip labelFormatter={label => format(label, 'D/M/YYYY')} formatter={value => `£${value.toFixed(2)}`} />
            <Legend />
            <Area yAxisId="left" type="basisOpen" dataKey="total" fill="#BCF1FF" stroke="#AB90A4" />
            <Line yAxisId="right" type="basisOpen" dataKey="average" stroke="#D1008E" />
            <Bar yAxisId="right" dataKey="donation" barSize={10} fill="#350078" />
          </ComposedChart>
        </section>

        <section className="dashboard__signups">
          <h3>Sign-ups by type</h3>
          <BarChart
            width={300}
            height={400}
            data={signupData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="other" stackId="a" fill="#BCF1FF" />
            <Bar dataKey="today" stackId="a" fill="#350078" />
          </BarChart>
        </section>

        <section className="dashboard__daily">
          <h3>Donations by day of the week</h3>
          <RadarChart outerRadius="80%" width={600} height={400} data={days}>
            <PolarGrid />
            <PolarAngleAxis dataKey="day" />
            <Tooltip formatter={value => `£${value.toFixed()}`} />
            <Radar name="Donations" dataKey="amount" stroke="#bbb" fill="#BCF1FF" fillOpacity={0.6} />
          </RadarChart>
        </section>
        <section className="dashboard__donations">
          <h3>Donations data</h3>
          <table className="dashboard__donations__table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Recipient</th>
                <th>Donor</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => {
                const { id, time, amount, recipient, donor } = donation;
                return (
                  <tr key={id}>
                    <td>{format(time, 'D/M/YYYY')}</td>
                    <td>{`£ ${Number.parseFloat(amount / 100).toFixed(2)}`}</td>
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
  }
}

Dashboard.propTypes = {
  id: PropTypes.number.isRequired,
  getDonationsByOrganisationID: PropTypes.func.isRequired,
  donations: PropTypes.instanceOf(Array).isRequired,
};

export default Dashboard;
