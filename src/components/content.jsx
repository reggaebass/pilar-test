import React, { useContext }from 'react';
import { SelectContext } from '../context/selectContext';
import Navigation from './navigation';
import Home from './home';
import Analysis from './analysis';
import Results from './results';

export default function Content() {
  const { tabs } = useContext(SelectContext);
  const [tab, setTab] = tabs;
  return (
    <>
      <Navigation />
      <div className={tab === "home" ? '' : 'hidden'}>
        <Home />
      </div>
      <div className={tab === "analysis" ? '' : 'hidden'}>
        <Analysis />
      </div>
      <div className={tab === "results" ? '' : 'hidden'}>
        <Results />
      </div>
    </>
  )
}