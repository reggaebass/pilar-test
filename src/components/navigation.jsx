import React, { useContext }from 'react';
import Tab from './tab';
import { SelectContext } from '../context/selectContext';
import '../styles/navigation.scss';

export default function Navigation() {
  const [selectValue, setSelectValue] = useContext(SelectContext);
  const isDefault = selectValue === "default";
  return (
    <>
      <div className="navigation">
        <Tab name="Home" />
        <div className={isDefault ? 'disabled' : ''} >
          <Tab name="Analysis" className={isDefault ? 'disabled' : ''} />
        </div>
        <div className={isDefault ? 'disabled' : ''} >
          <Tab name="Results" className={isDefault ? '' : 'disabled'} />
        </div>
      </div>
    </> 
  )
}