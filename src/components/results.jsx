import React, { useContext }from 'react';
import { SelectContext } from '../context/selectContext';
import '../styles/results.scss';

export default function Analysis() {
  const { formResult } = useContext(SelectContext);
  const [result, setResult] = formResult;
  const submitted = result.length > 0;
  return (
    <>
      {submitted ? (
        <span className="center results">
          <div>
            <label>Name: </label>
            {result[0]}
          </div>
          <div>
            <label>Path: </label>
            {result[1]}
          </div>
          <div>
            <label>Pipeline: </label>
            {result[2]}
          </div>
        </span>
      ) : (
        <div className="noResults">Please Submit Analysis to See Results</div>
      )}
      </>
    
  )
};