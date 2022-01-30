import './App.css';
import { useState, useEffect } from 'react';
import defaultCarData from './util/defaultCarData';
import urlIsValid from './util/urlValidator';
import getMockData from './util/getMockData'
import { checkRequiredDatas, validateCell } from './util/validateData';
import { changeDateToEpoch, changeEpochToDate, checkTimeKey } from './util/changeDateFormat';

const App = () => {

  const [mockedCarList, setMockedCarList] = useState([])
  const [carList, setCarList] = useState(JSON.parse(localStorage.getItem('carListArray')) !== null ? JSON.parse(localStorage.getItem('carListArray')) : mockedCarList)
  const [carData, setCarData] = useState(defaultCarData)
  const [formIsVisible, setFormIsVisible] = useState(false)

  const changeCarObjectData = (e, key) => setCarData({...carData, [key] : {...carData[key], data : e.target.value}})
  
  const carObjectSetDefault = () => setCarData(defaultCarData)
  
  const changeCarList = () => {
      if (checkRequiredDatas(carData) && urlIsValid(carData.manufacturerWebSite.data)) {
        let newCarData = JSON.parse(JSON.stringify(carData))
        newCarData.manufactureTime.data = changeDateToEpoch(carData.manufactureTime.data)
        setCarList([...carList, newCarData])
      }
    }
  
  const changeFormVisibility = () => {
    formIsVisible ? setFormIsVisible(false) : setFormIsVisible(true)
  }

  useEffect(() => {
    getMockData(setMockedCarList)
  }, [])

  useEffect(() => {
    setCarList(JSON.parse(localStorage.getItem('carListArray')) !== null ? JSON.parse(localStorage.getItem('carListArray')) : mockedCarList)
  }, [mockedCarList])

  useEffect(() => {
    if (carList.length !== 0) localStorage.setItem('carListArray', JSON.stringify(carList))
  }, [carList])

  return (
    <div className='App'>
      <button onClick={changeFormVisibility}>Új Autó</button>
      {formIsVisible ?
      <div className='addCarContainer'>
        <form className='addCarForm'>
          {Object.keys(carData).map((actualData, index) => 
            <div key={index}>
              <p>{carData[actualData].title}</p>
              <input 
                value={carData[actualData].data}
                placeholder={carData[actualData].example} 
                type={carData[actualData].inputType} 
                min={carData[actualData]?.inputMin}
                max={carData[actualData]?.inputMax}
                onChange={(event)=>changeCarObjectData(event, actualData)}
                onBlur={(e) => validateCell(actualData, carData) ? e.target.style.border = '2px solid green' : e.target.style.border = '2px solid red'}
                />
            </div>
          )}
          <div>
            <button type='button' onClick={carObjectSetDefault}>Mezők törlése</button>
            <button type='button' onClick={changeCarList}>Mentés</button>
          </div>
        </form>
      </div> : ''}
      <div className='carListContainer'>
        <table>  
            {carList.map((actualCar, i) => 
              <tbody key={i}>
                {Object.keys(actualCar).map((actualData, index) =>
                actualCar[actualData].data !== '' ? 
                  <tr key={index}>
                    <td>{actualCar[actualData].title}</td>
                    {checkTimeKey(actualData) ? <td>{changeEpochToDate(actualCar[actualData].data)}</td> : <td>{actualCar[actualData].data}</td>}
                  </tr> : <tr key={index}></tr>
                )}
              </tbody>
            )}
        </table>
      </div>
    </div>
  );
}

export default App;

