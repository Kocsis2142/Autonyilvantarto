import { getActualDate } from './changeDateFormat';

const defaultCarData = {
    manufacturer: {title: 'Gyártó', required: true, data: '', inputType: 'text', example: 'Audi'},
    type: {title: 'Típus', required: true, data: '', inputType: 'text', example: 'Quattro S1'},
    engineCC: {title: 'Motor hengerűrtartalom (cm³)', required: true, data: '', inputType: 'number', inputMin:'0', example: '2100'},
    color: {title: 'Szín', required: false, data: '', inputType: 'text', example: 'Kék'},
    designe: {title: 'Kivitel', required: false, data: '', inputType: 'text', example: 'Kétajtós kupé'},
    manufactureTime: {title: 'Gyártási időpont', required: true, data: '', inputType: 'month', example: '1985-01', inputMax: getActualDate()},
    manufacturerWebSite: {title: 'Gyártó weboldala', required: false, data: '', inputType: 'url', example: 'https://audi.com/'}
  }

export default defaultCarData