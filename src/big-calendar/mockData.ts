import moment from 'moment';

const events = [
  {
    title: 'Coffee break',
    start: moment().hour(14).minute(30).toDate(),
    end: moment().hour(15).minute(30).toDate(),
  },
  {
    title: 'Meeting again',
    start: moment().hour(16).minute(30).toDate(),
    end: moment().hour(17).minute(30).toDate(),
  },
  {
    title: 'Dinner at the Plaza',
    start: moment().hour(18).minute(30).toDate(),
    end: moment().hour(19).minute(30).toDate(),
  },
  {
    title: 'Go home',
    start: moment().hour(21).minute(30).toDate(),
    end: moment().hour(22).minute(30).toDate(),
  },
  {
    title: 'Read a book',
    start: moment().hour(22).minute(30).toDate(),
    end: moment().hour(23).minute(30).toDate(),
  },
  {
    title: 'Exercise',
    start: moment().add(1, 'days').hour(5).minute(0).toDate(),
    end: moment().add(1, 'days').hour(5).minute(30).toDate(),
  },
  {
    title: 'Repair my car',
    start: moment().add(1, 'days').hour(7).minute(45).toDate(),
    end: moment().add(1, 'days').hour(13).minute(30).toDate(),
  },
  {
    title: 'Gardening',
    start: moment().add(2, 'days').hour(10).minute(0).toDate(),
    end: moment().add(2, 'days').hour(10).minute(30).toDate(),
  },
  {
    title: 'Mowing',
    start: moment().add(2, 'days').hour(11).minute(0).toDate(),
    end: moment().add(2, 'days').hour(11).minute(30).toDate(),
  },
  {
    title: 'Go to beach',
    start: moment().add(3, 'days').hour(8).minute(0).toDate(),
    end: moment().add(3, 'days').hour(8).minute(30).toDate(),
  },
  {
    title: 'Meeting 2',
    start: moment().add(7, 'days').hour(10).minute(0).toDate(),
    end: moment().add(7, 'days').hour(10).minute(30).toDate(),
  },
  {
    title: 'Coffee break',
    start: moment().add(7, 'days').hour(14).minute(30).toDate(),
    end: moment().add(7, 'days').hour(15).minute(30).toDate(),
  },
  {
    title: 'Dentist appointment',
    start: moment().add(8, 'days').hour(14).minute(30).toDate(),
    end: moment().add(8, 'days').hour(15).minute(30).toDate(),
  },
  {
    title: 'Study',
    start: moment().add(9, 'days').hour(7).minute(45).toDate(),
    end: moment().add(12, 'days').hour(20).minute(30).toDate(),
  },
  // Add the remaining events here...
];
export {events};
