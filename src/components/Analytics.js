import React from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import './Analytics.css';

const barState = {
  labels: ["Vishwaram H", "Meenakshi H", "Vijai K A", "Vishwa Vichu", "Raghunathan V"],
  datasets: [
    {
      label: 'Referrals',
      backgroundColor: 'rgba(11, 121, 77, 0.603)',
      borderColor: 'rgba(0,255,20,0.8)',
      borderWidth: 2,
      data: [20,24,18,32,40],
    }
  ]
}

const lineState = {
  labels: ["Vishwaram H", "Meenakshi H", "Vijai K A", "Vishwa Vichu", "Raghunathan V"],
  datasets: [
    {
      label: 'Duration(in hrs.)',
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [17, 20, 15, 19, 30]
    }
  ]
}

const pieState = {
  labels: ["Vishwaram H", "Meenakshi H", "Vijai K A", "Vishwa Vichu", "Raghunathan V"],
  datasets: [
    {
      label: 'Money (in Rs.)',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [20,24,18,32,40]
    }
  ]
}

const doughnutState = {
  labels: ["Vishwaram H", "Meenakshi H", "Vijai K A", "Vishwa Vichu", "Raghunathan V"],
  datasets: [
    {
      label: 'Money (in Rs.)',
      backgroundColor: [
        'rgba(255,0,0,0.6)',
        'rgba(0,255,0,0.6)',
        'rgba(0,0,255,0.6)',
        'rgba(12,2,4,0.6)',
        'rgba(1,23,255,0.6)'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [20,24,18,32,40]
    }
  ]
}

class Analytics extends React.Component {
  render() {
    return (
      <div className="analytics">
        <div className="charts-1">
          <Bar className="bar"
            data={barState}
            options={{
              title:{
                display:true,
                text:'Top 5 Referrals made by Referrers',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
          <Line className="line"
            data={lineState}
            options={{
              title: {
                display: true,
                text: 'Number of hours spent in referral site',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </div>
        <div className="charts-2">
          <Pie
            data={pieState}
            options={{
              title:{
                display:true,
                text:'Money earned in this referral program',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
          <Doughnut
            data={doughnutState}
            options={{
              title:{
                display:true,
                text:'Number of rewards received',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Analytics;