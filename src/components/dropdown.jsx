import React, {useEffect, useState}from 'react';
import Select from 'react-select';
import '../styles/dropdown.scss';


export default function Dropdown(){
  const [dropdownOptions, setDropdownOptions] = useState();
  const [selectValue, setSelectValue] = useState();

  const options = [
    {value: "AP 2021.1", label: "ap-2021-1"},
    {value: "AP 2021.2", label: "ap-2021-2"},
    {value: "AP 2022.2", label: "ap-2022-1"}
  ]

  const handleSelectChange = (e) => {setSelectValue((e.target.value))}
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
        <select className="select" onChange={e => setSelectValue(e.target.value)}>
          {options.map(o => {
            return (
              <option value={o.value}>{o.value}</option>
            )
          })}
        </select>
      {/* <Select options={options} className="select" onChange={e => handleSelectChange(e)} /> */}
      {console.log(selectValue)}
      
    </div>
    </>
  )
}

