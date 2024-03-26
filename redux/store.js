import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  transactionsData: [
    { id: 1, name: 'Target', amount: "55.00", date: '2024-03-15', location: 'Chicago, IL' },
    { id: 2, name: 'Amazon', amount: "120.00", date: '2024-04-05', location: 'Seattle, WA' },
    { id: 3, name: 'Best Buy', amount: "75.00", date: '2024-05-20', location: 'Houston, TX' },
    { id: 4, name: 'Walmart', amount: "200.00", date: '2024-03-10', location: 'Miami, FL' },
    { id: 5, name: 'Costco', amount: "150.00", date: '2024-12-21', location: 'San Francisco, CA' },
    { id: 6, name: 'Macy\'s', amount: "80.00", date: '2024-01-09', location: 'Atlanta, GA' },
    { id: 7, name: 'Gap', amount: "35.00", date: '2024-03-21', location: 'Boston, MA' },
    { id: 8, name: 'Trader Joe\'s', amount: "40.00", date: '2024-06-21', location: 'San Diego, CA' },
    { id: 9, name: 'Home Depot', amount: "90.00", date: '2024-05-25', location: 'Dallas, TX' },
    { id: 10, name: 'Starbucks', amount: "10.00", date: '2024-03-01', location: 'Philadelphia, PA' }
  ]
};


const store = createStore(reducer, initialState);

export default store;
