import React from 'react';
import "./Home.css"
import { Navbar } from '../component/Navbar'
import { SliderBar } from '../component/SliderBar'
import { useState, useEffect } from 'react';
import PieChart from '../component/PieChart';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Select from "../component/Select.js"


Chart.register(CategoryScale);

export const Home = () => {

  const [homevalue, setHomeValue] = useState(1700);  
  const [downPaymentValue, setDownPaymentValue] = useState(180);  
  const [loanAmountValue, setLoanAmountValue] = useState(1520);  
  const [interestValue, setInterestValue] = useState(2); // Yearly
  const [tenureParent, setTenureParent] = useState();
  const [monthlyInterest, setMonthlyInterest] = useState();


  const [chartData, setChartData] = useState({
    labels: ["Principal", "Interest"], 
    datasets: [
      {
        label: "Monthly Payment",
        data: [homevalue, 230],
        backgroundColor: [
          "#DA70D6",
          "#87CEEB",  
        ],
        borderColor: "black",
        borderWidth: 2,
      }
    ]
  })

  useEffect(()=>{
    // Update the downPaymentValue : 20% of current homevalue
    const downPayment = homevalue * 0.20
    setDownPaymentValue(downPayment)

    // Update the loanAmountValue : homevalue - downPaymentValue
    const loanAmount = homevalue - downPaymentValue
    setLoanAmountValue(loanAmount)
  },[homevalue])


  useEffect(()=>{
    const r = interestValue/12;
    const n = tenureParent * 12;
    const EMI = (loanAmountValue * r * (1 + r)^n) / ((1 + r)^n - 1)
    setMonthlyInterest(EMI)
  },[loanAmountValue, interestValue, tenureParent])

  return (
    <div>
        <Navbar></Navbar>
        <div className='main'>
            <div className='left-section'>
                <SliderBar title={"Home Value"} symbole={"$"} setValue={setHomeValue} value={homevalue} min={1000} max={10000}></SliderBar>
                <SliderBar title={"Down Payment"} symbole={"$"} setValue={setDownPaymentValue} value={homevalue-loanAmountValue} min={0} max={homevalue}></SliderBar>
                <SliderBar title={"Loan Amount"} symbole={"$"} setValue={setLoanAmountValue} value={homevalue-downPaymentValue} min={0} max={homevalue}></SliderBar>
                <SliderBar title={"Interest Rate"} symbole={"%"} setValue={setInterestValue} value={interestValue} min={2} max={18}></SliderBar>
                <br/>
                <Select setTenureParent={setTenureParent} ></Select>
            </div>

            <div className='right-section'>
              <PieChart chartData={chartData}></PieChart>
            </div>
        </div>
        
    </div>
  )
}
