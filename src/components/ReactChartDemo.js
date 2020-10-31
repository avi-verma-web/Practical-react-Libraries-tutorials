import React from "react";
import { Line, Bar,Doughnut } from "react-chartjs-2";
const ReactChartDemo = () => {
  const data = {
    //X axis
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    //Y axis
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5],
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: ["rgba(255,206,86,0.2)"],
        pointBackgroundColor: ["rgba(255,206,86,0.2)"],
        pointBorderColor: ["rgba(255,206,86,0.2)"],
      },
      {
        label: "Sales for 2019 (M)",
        data: [1, 3, 2, 2, 3],
        borderColor: ["rgba(54,162,235,0.2)"],
        backgroundColor: ["rgba(54,162,235,0.2)"],
        pointBackgroundColor: ["rgba(54,162,235,0.2)"],
        pointBorderColor: ["rgba(54,162,235,0.2)"],
      },
    ],
  };

  const option = {
    title: {
      display: true,
      text: "Line chart",
    },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 6, stepSize: 1 } }],
    },
  };
  return (
    <div>
      <Line data={data} options={option}></Line>
      <Bar data={data} options={option}></Bar>
      <Doughnut data={data} options={option}></Doughnut>
    </div>
  );
};

export default ReactChartDemo;
