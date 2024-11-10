import { GetRaceDetailsResponse } from './types';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const colors = [
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#ff8042',
  '#8dd1e1',
  '#a4de6c',
  '#d0ed57',
  '#d0ed57',
  '#2ca02c',
  '#ff7f0e',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf',
  '#4e79a7',
  '#f28e2c',
  '#e15759',
  '#76b7b2',
  '#59a14f',
  '#edc948',
  '#b07aa1',
  '#ff9da7',
  '#9c755f',
  '#9edae5',
  '#d95f02',
  '#7570b3',
  '#e7298a',
  '#66a61e',
  '#e6ab02',
  '#a6761d',
  '#666666',
  '#1b9e77',
  '#1f78b4',
  '#b2df8a',
  '#33a02c',
  '#fb9a99',
  '#e31a1c',
  '#fdbf6f',
  '#ff7f00',
  '#cab2d6',
  '#6a3d9a',
];

const PerformanceChart = ({
  results,
}: {
  results: GetRaceDetailsResponse['MRData']['RaceTable']['Races'][0]['Results'];
}) => {
  const data = {
    labels: results.map((result) => result.Driver.familyName),
    datasets: [
      {
        label: 'Time (ms)',
        data: results.map((result) => parseInt(result.Time?.millis) || 0),
        backgroundColor: colors,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Performance Chart (Time in Minutes)',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: { raw: unknown }) {
            const value = tooltipItem.raw as number;
            const minutes = Math.floor(value / 60000);
            const seconds = ((value % 60000) / 1000).toFixed(3);
            return `${minutes}:${seconds.padStart(6, '0')}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function (tickValue: string | number) {
            const value = Number(tickValue);
            const minutes = Math.floor(value / 60000);
            const seconds = ((value % 60000) / 1000).toFixed(3);
            return `${minutes}:${seconds.padStart(6, '0')}`;
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PerformanceChart;
