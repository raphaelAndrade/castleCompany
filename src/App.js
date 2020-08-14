import React, {useState} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
let noRepetNumber;
var str;
const [numberOfCastle, setNumberOfCastle] = useState(0)
const [showResult, setShowResult] = useState(false)

const onChange = e => {
  e.preventDefault();
  str = (e.target.value);
  noRepetNumber = Array.from(str).map(Number);
}

const findAPlaceToBuild = (e) => {
  e.preventDefault();
 let numberPlaceToBuild = 1;
 let peak = false; 
 let valley = false;

const noDuplicate = noRepetNumber.filter((val, key)=> {
  return val !== noRepetNumber[key-1] || key == 0;
});

  if (noDuplicate.length > 0) {
      for (var i = 0; i < noDuplicate.length; i++) {
          peak = noDuplicate[i] > noDuplicate[i - 1] && noDuplicate[i] > noDuplicate[i + 1];
          valley = noDuplicate[i] < noDuplicate[i - 1] && noDuplicate[i] < noDuplicate[i + 1];

          if (peak !== false || valley !== false) {
            numberPlaceToBuild++;
          }
      }
  }
  numberPlaceToBuild++;
  setNumberOfCastle(numberPlaceToBuild);
  
  if (numberPlaceToBuild > 0) {
    setShowResult(true);
  }
}

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>The Castle Company</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>To find out the number of places where you can build a castle, please enter a sequence of numbers</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <form  onSubmit={findAPlaceToBuild.bind(this)}>
          <div className="form-row">
            <div className="col-md-12">
              <input 
                  type="text" 
                  className="form-control " 
                  placeholder="Please, enter a sequence of number"
                  name="name"
                  onChange={onChange}
                  />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
            </form>
          </div>
        </div>
        {showResult ? <div className="row">
          <div className="col-md-12">
            <div className="numberOfCastle">You can build<span>  {numberOfCastle}</span> castles.</div>
          </div>
        </div> : ""}
      </div>
    </>
  );
}

export default App;
