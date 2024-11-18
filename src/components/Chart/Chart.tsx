"use client";

import { colors } from "@/styles/colors";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { container } from "./Chart.css";
import { Timeline } from "@/types/dto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  barPercentage: 0.6,
};

export const formatData = (timeLine: Timeline) => {
  return {
    labels: Object.keys(timeLine),
    datasets: [
      {
        data: Object.values(timeLine).map((time) => +time),
        backgroundColor: Object.values(timeLine).map((time) =>
          formatNumberToColor(+time)
        ),
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  };
};

const formatNumberToColor = (number: number) => {
  if (number > 50000) return colors.white;
  if (number > 30000) return colors.gray_01;
  if (number > 10000) return colors.gray_03;
  if (number > 5000) return colors.gray_04;
  return colors.gray_05;
};

export const Chart = ({ timeLine }: { timeLine: Timeline }) => {
  return (
    <div className={container}>
      <Bar options={options} data={formatData(timeLine)} />
    </div>
  );
};
