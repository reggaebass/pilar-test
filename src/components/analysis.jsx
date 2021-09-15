import React, { useContext, useState }from 'react';
import { SelectContext } from '../context/selectContext';
import Button from './button'
import '../styles/analysis.scss';


export default function Analysis() {
  const { select, formResult, tabs } = useContext(SelectContext);
  const [selectValue, setSelectValue] = select;
  const [result, setResult] = formResult;
  const [tab, setTab] = tabs;
  const [name, setName] = useState();
  const [path, setPath] = useState();

  function HandleSubmit (e) {
    e.preventDefault();
    setResult([name, path, selectValue]);
    setTab("results")
  }

  return (
    <>
      <form className="analysisForm" >
        <span className="formContent" >
          <span>
            <label>Name</label>
            <input onChange={e => setName(e.target.value)}></input>
          </span>
          <span>
            <label>Path</label>
            <input onChange={e => setPath(e.target.value)}></input>
          </span>
          <span>
            <label>Pipeline</label>
            <span className="pipelineValue">{selectValue}</span>
          </span>
        </span>
        <span className="action center">
          <div onClick={e => HandleSubmit(e) }>
            <Button text="submit" />
          </div>
        </span>
      </form>
    </>
  )
};