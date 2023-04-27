import { useState } from "react";
import "./cal.css";


function Calculator() {
  
  const [billAmount,setBillAmount]=useState(0);
  const [tipPercentage,setTipPercentage]=useState(10);
  const [noPeople,setNoPeople]=useState(1);
  const [numberOfPeopleInputError,setNumberOfPeopleInputError] =useState(false);
    
  const handleReset= () =>{
    setBillAmount(0);
    setTipPercentage(10);
    setNoPeople(1);
  }
  const handleBillAmountChange = (event) =>{
    if(!event.target.value){
      return;
    }
        setBillAmount(parseInt(event.target.value))
  }


  const handleTipPercentageChange = (event) =>{
    let tipPercentageValue = 0;
    if(!event.target.value){
      return;
    }
   if(event.target.value.split(".").length === 1){
    tipPercentageValue = parseInt(event.target.value)
   }else{
    tipPercentageValue = parseFloat(event.target.value)
   }
console.log(tipPercentageValue)
   setTipPercentage(tipPercentageValue)
}


const handleNoPeopleChange = (event) =>{
  if(event.target.value == 0){
    setNumberOfPeopleInputError(true);
    return;
  }else{
    setNumberOfPeopleInputError(false);
  }
  if(!(event.target.value)){
    return;
  }
  setNoPeople(parseInt(event.target.value))
}
const tipAmount = billAmount*tipPercentage/100;
    return (
       <div>
        <h1 className="text-center text-white fs-3 fw-bold">SPLITTER</h1>
      <div className="container" >
        <div className="row ">
            <div className="col-md-12">
                
                <div className="row">
            <div className="col-md-6">
            <form >
            <div className="mb-3">
                <label for="Bil" className="text-dark mt-3" >Bill</label>
                <input type="text" className="form-control"  placeholder="amount" value={billAmount} onChange={handleBillAmountChange}/>
            </div>
             <div className="mb-3">
             <label for="Bil" className="text-dark mt-3" >Select Tip%</label>
            
             </div >
             <div 
           className="d-grid gap-2 d-md-flex justify-content-md-start">
             <button  value={0.5} onClick={handleTipPercentageChange} type="button" className={`btn btn-lg btn-success px-5 ${tipPercentage === 0.5?'active':""}`}>0.5%</button>
             <button  value={10} onClick={handleTipPercentageChange} type="button" className={`btn btn-lg btn-success px-5 ${tipPercentage === 10?'active':""}`}>10%</button>
             <button   value={15} onClick={handleTipPercentageChange} type="button" className={`btn btn-lg btn-success px-5 ${tipPercentage === 15?'active':""}`}>15%</button>
             </div>
             <div 
            className="d-grid gap-2 my-2 d-md-flex justify-content-md-start">
             <button value={25} onClick={handleTipPercentageChange} type="button" className={`btn btn-lg btn-success px-5 ${tipPercentage === 25?'active':""}`}>25%</button>
             <button value={50} onClick={handleTipPercentageChange} type="button" className={`btn btn-lg btn-success px-5 ${tipPercentage === 50?'active':""}`}>50%</button>
             <input type="text" onChange={handleTipPercentageChange} className="form-control"  placeholder="custom" value={tipPercentage}/>
             </div>
             <div className="mb-3">
                <label for="Bil" className="text-dark mt-3 mb-2" >Number of people</label>
                {numberOfPeopleInputError && <span className="text-danger fo mt-3 mb-2">can't be zero</span>}
                <input  type="number" value={noPeople} onChange={handleNoPeopleChange} className={`form-control no-people ${numberOfPeopleInputError? 'error' : ""}`}  />
            </div>
            </form> 
            </div>
            <div className="col-md-6">
            <div>
              <div className="row">
                <div className="col-md-6">
                    <div>
                    <h4 className="text-center text-success my-5">Tip Amount</h4>
                    </div>
                    <div>
                    <h4 className="text-center text-success my-5">Total</h4>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                    <h1 className="text-center text-success fw-bold my-4 overflow-hidden">{Math.round(tipAmount/noPeople)} </h1>
                    </div>
                    <div>
                    <h1 className="text-center text-success fw-bold  my-4 overflow-hidden">{tipAmount+billAmount}</h1>
                    </div>
                </div>
              </div>
              <div class="d-grid gap-2 mt-5 col-6 mx-auto">
              <button type="reset"  onClick={handleReset} className="btn btn-success ">RESET</button>
            </div>    
            </div>
            </div>
            </div>
            </div>
        </div>
      </div>
      </div>
     
    );
  }
  
  export default Calculator;