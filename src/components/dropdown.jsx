import React, {useEffect, useState, useContext}from 'react';
import { SelectContext } from '../context/selectContext'
import '../styles/dropdown.scss';


export default function Dropdown(){
  const [options, setOptions] = useState([]);
  const { select } = useContext(SelectContext);
  const [selectValue, setSelectValue] = select;

  const staticOptions = {
    "data":[{
        "name": "AP 2021.1", "value": "ap-2021-1"
      },
      {
        "name": "AP 2021.2", "value": "ap-2021-2"
      },
      {
        "name": "AP 2022.2", "value": "ap-2022-1"
      }]
  }

  useEffect(() => {
    const apiUrl = 'https://pillar.free.beeceptor.com/api/pulldown';
    fetch(apiUrl)
    .then(response => {
      if(response.ok) { 
        return response.json()
      } else {
        // prevents app from breaking on 429 response
        return staticOptions;
      }
    })
    .then(d => {
      setOptions(d.data);
    })
  }, [])
  return(
    <>
    <div className="dropdown center">
      <label>Analysis Pipeline</label>
      <br />
      <select className="select" onChange={e => setSelectValue(e.target.value)}>
      <option value="default" >Choose Pipeline</option>
        {options.map(o => {
          return (
            <option key={o.name} value={o.value}>{o.value}</option>
          )
        })}
      </select>      
    </div>
    </>
  )
}
