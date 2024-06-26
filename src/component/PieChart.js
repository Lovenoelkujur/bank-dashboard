import React from 'react';
import "./PieChart.css";
import { Pie } from "react-chartjs-2";

const PieChart = ({chartData}) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Monthly Payment Charges"
            }
          }
        }}
      />
    </div>
  )
}

export default PieChart