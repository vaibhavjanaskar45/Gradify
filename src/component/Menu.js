import React,{useState} from 'react'

export default function Menu(prop) {
  
const [cgpa, setCgpa] = useState('');
const [percentage, setPercentage] = useState('');
const [scale, setScale] = useState('10');

  const cgpaCalcFunction = () => {
    const num = parseFloat(cgpa);
    if (!isNaN(num) && ((scale === '10' && num <= 10) || (scale === '5' && num < 5))) {
      let newPercentage;
    if (scale === '10') {
      newPercentage = (num * 7.1) + 11;
    } else if (scale === '5') {
      newPercentage = (num * 18) + 32;
      }
      setPercentage(newPercentage.toFixed(2)); // toFixed(2) to keep two decimal places
    } else {
      setPercentage('Number must be numeric and less than the selected scale');
      }
  };

  let myStyle ={
    backgroundColor : prop.mode==='dark'?'black':'white',
    color : prop.mode==='dark'?'white':'black',
    borderColor:prop.mode==='dark'?'blue':'black'
  }




  return (
  <div className='container my-4' style={myStyle}>
    <div className="card" style={myStyle}>
    <h4 className="card-header p-3">Convert Your CGPA to Percentage</h4>
    <div className="card-body">
    
    <p className="card-text">Quickly convert CGPA to percentage with our user-friendly calculator. Get accurate results for 5, 10, and any CGPA. Calculate total CGPA effortlessly using our efficient CGPA to percentage and marks calculator.</p>

   
    <input className="input-group input-group-lg my-2 w-90" style={{height:'40px',fontSize:'17px', paddingLeft:'15px'}}
    type="text" value={cgpa}
    onChange={(e) => setCgpa(e.target.value)} placeholder="Enter Your CGPA" />

    <select className="btn btn-primary w-50 dropdown-toggle"
    value={scale} onChange={(e) => setScale(e.target.value)}>
        <option className="dropdown-item " value="10">10-point scale</option>
        <option className="dropdown-item" value="5">5-point scale</option>
    </select>
    <br/>

    <button className="btn btn-success w-50 my-2" onClick={cgpaCalcFunction}>Calculate Percentage</button>
    <br/>
    <h6>Converted Percentage: <label>{percentage}</label></h6>
    </div>  
    </div>
  </div>  
  )
}
