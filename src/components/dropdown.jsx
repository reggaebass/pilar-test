import React, {useEffect, useState, useContext}from 'react';
import { SelectContext } from '../context/selectContext'
import '../styles/dropdown.scss';


export default function Dropdown(){
  const [dropdownOptions, setDropdownOptions] = useState();
  const [selectValue, setSelectValue] = useContext(SelectContext);

  const options = [
    {value: "AP 2021.1", label: "ap-2021-1"},
    {value: "AP 2021.2", label: "ap-2021-2"},
    {value: "AP 2022.2", label: "ap-2022-1"}
  ]

  // const handleSelectChange = (e) => {setSelectValue((e.target.value))}
  // useEffect(() => {
  //   const apiUrl = 'https://pillar.free.beeceptor.com/api/pulldown';

  //   const getData = async () => {
  //     try {
  //       const response = await fetch(apiUrl);
  //       const json = await response.json();
  //       setDropdownOptions(json.data.name)
  //       console.log(dropdownOptions);
  //     } catch {
  //       console.log("error")
  //     }
  //   }
    
  //   getData();   
  // }, [dropdownOptions])
  return(
    <>
    <div className="dropdown center">
      <label>Analysis Pipeline</label>
      <br />
      <select className="select" onChange={e => setSelectValue(e.target.value)}>
      <option value="default" >Choose Pipeline</option>
        {options.map(o => {
          return (
            <option key={o.label} value={o.value}>{o.value}</option>
          )
        })}
      </select>      
    </div>
    </>
  )
}

