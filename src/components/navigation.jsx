import React, { useContext }from 'react';
import Tab from './tab';
import { SelectContext } from '../context/selectContext';
import '../styles/navigation.scss';

export default function Navigation() {
  const { select, tabs, formResult } = useContext(SelectContext);
  const [selectValue, setSelectValue] = select; 
  const [tab, setTab] = tabs; 
  const isDefault = selectValue === "default";
  return (
    <>
      <div className="navigation">
        <div onClick={() => setTab("home")} >
        <Tab name="Home" />
        </div>
        <div className={isDefault ? 'disabled' : ''} onClick={!isDefault ? () => setTab("analysis") : null } >
          <Tab name="Analysis" />
        </div>
        <div className={isDefault ? 'disabled' : ''} onClick={!isDefault ? () => setTab("results") : null} >
          <Tab name="Results" />
        </div>
      </div>
    </> 
  )
}