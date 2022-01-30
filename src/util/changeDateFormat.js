export const changeDateToEpoch = (dateInput) => {
    let date = new Date(dateInput);
    let timestamp = date.getTime();
    return timestamp
}

export const changeEpochToDate = (epochInput) => {
    let date = new Date(epochInput);
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    if ((date.getMonth() + 1).toString().length === 1) return year + '-' + 0 + month
    else return year + '-' + month
}

export const getActualDate = () => {
    let date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    if ((date.getMonth() + 1).toString().length === 1) return year + '-' + 0 + month
    else return year + '-' + month
}

export const checkTimeKey = (actualKey) => {
    if (actualKey === 'manufactureTime') return true
    else return false
}