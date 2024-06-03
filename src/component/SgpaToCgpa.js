import React ,{useState} from 'react'

export default function SgpaToCgpa(prop) {
    const [sgpa, setSgpa] = useState('');
    const [sem, setSem] = useState('');
    const [cgpa, setCgpa] = useState('');

    const sgpaCalcFunction = () => {
        const TotalScore = parseFloat(sgpa);
        const semNUmber = parseInt(sem)
        if (!isNaN(TotalScore) && ((semNUmber <= '8' && TotalScore <= semNUmber*100) )) {
          let newCgpa;
          newCgpa = (TotalScore / semNUmber);
          setCgpa(newCgpa)
        }  
        else {
          setCgpa("Enter Approprite Sum of SGPA's");
          }
    }

    let myStyle ={
        backgroundColor : prop.mode==='dark'?'black':'white',
        color : prop.mode==='dark'?'white':'black',
        borderColor:prop.mode==='dark'?'blue':'black'
      }


  return (
    <div className='container' style={myStyle}>
    <div class="card" style={myStyle}>
    <h4 className="card-header p-3">Convert Your SGPA to CGPA</h4>
  <div class="card-body">
    
    <p class="card-text">CGPA stands for Cumulative Grade Point Average. It is the average of Grade Points obtained in all the semesters.
SGPA is Semester Grade Point Average. It is calculated by dividing total credit points obtained by candidate in one semester by total credit points in that semester. Both CGPA & SGPA varies from 0.00 to 10.00.

This calculator calculates the cgpa using sgpa, cgpa values..</p>
    <input className="input-group input-group-lg my-2 w-90" style={{height:'40px',fontSize:'17px', paddingLeft:'15px'}}
    type="text" value={sgpa}
    onChange={(e) => setSgpa(e.target.value)}
     placeholder="Enter Sum of SGPAs of All Semesters :" />



<p>Total Number of Semesters :</p>
<select className="btn btn-primary w-50 dropdown-toggle"
    value={sem} onChange={(e) => setSem(e.target.value)}>
        <option className="dropdown-item "value="1">1 Semester</option>
        <option className="dropdown-item" value="2">2 Semester</option>
        <option className="dropdown-item" value="3">3 Semester</option>
        <option className="dropdown-item" value="4">4 Semester</option>
        <option className="dropdown-item" value="5">5 Semester</option>
        <option className="dropdown-item" value="6">6 Semester</option>
        <option className="dropdown-item" value="7">7 Semester</option>
        <option className="dropdown-item" value="8">8 Semester</option>
    </select>
    <br/>



    <button className="btn btn-success w-50 my-2" onClick={sgpaCalcFunction}>Calculate Percentage</button>
    <br/>
    <h6>Converted CGPA:  <label>{cgpa}</label></h6>
  </div>
</div>
</div>  
  )
}
