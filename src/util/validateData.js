import urlIsValid from './urlValidator';

export const checkRequiredDatas = (carObject) => {
    for (let element in carObject) {
        if (carObject[element].required && (carObject[element].data === null || carObject[element].data === '' || carObject[element].data === undefined)) return false
    }
    return true
}

export const validateCell = (key, carObject) => {
    if (key === 'manufacturerWebSite' && urlIsValid(carObject.manufacturerWebSite.data) === false) return false
    if (carObject[key].required === true && carObject[key].data === '') return false
    return true
  }