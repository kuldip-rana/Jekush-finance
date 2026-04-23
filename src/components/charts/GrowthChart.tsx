import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const GrowthChart: React.FC = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#f8fafc',
          font: {
            family: "'Inter', sans-serif",
          }
        }
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#f8fafc',
        bodyColor: '#94a3b8',
        borderColor: '#334155',
        borderWidth: 1,
        padding: 12,
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(51, 65, 85, 0.5)',
        },
        ticks: {
          color: '#94a3b8',
          callback: function(value: any) {
            return '₹' + value / 100000 + 'L';
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#94a3b8',
        }
      }
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
  };

  const labels = ['Year 1', 'Year 5', 'Year 10', 'Year 15', 'Year 20', 'Year 25', 'Year 30'];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Invested Amount',
        data: [120000, 600000, 1200000, 1800000, 2400000, 3000000, 3600000],
        borderColor: '#EE7F1A',
        backgroundColor: 'rgba(238, 127, 26, 0.1)',
        tension: 0.4,
      },
      {
        fill: true,
        label: 'Wealth Gained (12% CAGR)',
        data: [128000, 824000, 2323000, 5045000, 9991000, 18880000, 35299000],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default GrowthChart;
