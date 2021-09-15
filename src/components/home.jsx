import React, { useContext }from 'react';
import { SelectContext } from '../context/selectContext';
import Dropdown from './dropdown'
import Button from './button'

export default function Home() {
  const { select, tabs } = useContext(SelectContext);
  const [selectValue, setSelectValue] = select;
  const isDefault = selectValue === "default";
  return (
    <div className="landing">
      <p className="center instructions" >Select Analysis Pipeline Version</p>
      <Dropdown />
      <div className={`center action ${isDefault ? 'hidden' : ''}`}>
        <label>PIVAT {selectValue} User Manual</label>
        <Button text="Download User Manual" url={`${selectValue}/user_manual`}/>
        <label>PIVAT {selectValue} Release Notes</label>
        <Button text="Download Release Notes" url={`${selectValue}/release_notes`}/>
      </div>
    </div>
  )
}