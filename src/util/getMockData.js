import defaultCarData from "./defaultCarData"
import { changeDateToEpoch } from './changeDateFormat'

const getMockData = async (setMockData) => {
    const response = await fetch('https://myfakeapi.com/api/cars/')
    const data = await response.json()
    setMockData(reformatMockData(data)) 
   }

const reformatMockData = (mockedData) => {
  let exampleArray = []
  for (let i = 0; i < 5; i++) {
    let mockedCarScheme = JSON.parse(JSON.stringify(defaultCarData))
      mockedCarScheme.manufacturer.data = mockedData.cars[i].car
      mockedCarScheme.type.data = mockedData.cars[i].car_model
      mockedCarScheme.engineCC.data = '2000'
      mockedCarScheme.color.data = mockedData.cars[i].car_color
      mockedCarScheme.manufactureTime.data = changeDateToEpoch(mockedData.cars[i].car_model_year+'-01')

      exampleArray.push(mockedCarScheme)
  }
  
  return exampleArray
}

export default getMockData