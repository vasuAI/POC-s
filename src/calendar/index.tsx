import React from 'react';
import {View} from 'react-native';

import TimelineCalendarScreen from './TimelineCalendar';
import AgendaScreen from './Agenda';
import ExpandableCalendarScreen from './Agenda';

const Calendar = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <TimelineCalendarScreen />
      {/* <AgendaScreen /> */}
      {/* <ExpandableCalendarScreen weekView /> */}
    </View>
  );
};

export default Calendar;
