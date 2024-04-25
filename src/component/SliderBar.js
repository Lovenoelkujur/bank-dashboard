import React, {useState} from 'react';
import "./SliderBar.css";
import Slider from '@mui/material/Slider';

export const SliderBar = ({title, symbole, min, max, value, setValue}) => {

  

  function valuetext(value) {
    return `${value}°C`;
  }    

  return (
    <div className='slider-main'>

      <div className='title'><p>{title}</p></div>

      <div>
        <h2>
          {symbole} {value}
        </h2>
      </div>

      <Slider className='slider-bar'
        aria-label="Small steps"
        defaultValue={value}
        getAriaValueText={valuetext}
        shiftStep={30}
        step={100}
        marks
        min={min}
        max={max}
        valueLabelDisplay="auto"
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />

      <div className='min-max'>
        <div><p>{symbole} {min}</p></div>
        <div><p>{symbole} {max}</p></div>
      </div>
      
    </div>
  )
}

