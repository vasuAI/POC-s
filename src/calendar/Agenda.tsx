import React, {useRef, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from 'react-native-calendars';
import {agendaItems, getMarkedDates} from '../mocks/agendaItems';
import AgendaItem from '../mocks/AgendaItem';
import {getTheme, themeColor, lightThemeColor} from '../mocks/theme';

// const leftArrowIcon = require('../img/previous.png');
// const rightArrowIcon = require('../img/next.png');
const ITEMS: any[] = agendaItems;

interface Props {
  weekView?: boolean;
}

const AgendaCalendarScreen = (props: Props) => {
  const {weekView} = props;
  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor,
  });

  // const onDateChanged = useCallback((date, updateSource) => {
  //   console.log('AgendaCalendarScreen onDateChanged: ', date, updateSource);
  // }, []);

  // const onMonthChange = useCallback(({dateString}) => {
  //   console.log('AgendaCalendarScreen onMonthChange: ', dateString);
  // }, []);

  const renderItem = useCallback(({item}: any) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CalendarProvider
        showTodayButton
        date={ITEMS[1]?.title}
        theme={todayBtnTheme.current}>
        {true ? (
          <WeekCalendar
            testID={'testIDs.weekCalendar.CONTAINER'}
            firstDay={1}
            markedDates={marked.current}
          />
        ) : (
          <ExpandableCalendar
            testID={'testIDs.expandableCalendar.CONTAINER'}
            // horizontal={false}
            // hideArrows
            // disablePan
            // hideKnob
            // initialPosition={ExpandableCalendar.positions.OPEN}
            // calendarStyle={styles.calendar}
            // headerStyle={styles.header} // for horizontal only
            // disableWeekScroll
            theme={theme.current}
            // disableAllTouchEventsForDisabledDays
            firstDay={1}
            markedDates={marked.current}
            //   leftArrowImageSource={leftArrowIcon}
            //   rightArrowImageSource={rightArrowIcon}
            // animateScroll
            // closeOnDayPress={false}
          />
        )}
        <AgendaList
          sections={ITEMS}
          // avoidDateUpdates
          renderItem={renderItem}
          // scrollToNextEvent
          sectionStyle={styles.section}
          // dayFormat={'yyyy-MM-d'}
        />
      </CalendarProvider>
    </View>
  );
};

export default AgendaCalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    backgroundColor: 'lightgrey',
  },
  section: {
    backgroundColor: '#f2f7f7',
    color: 'grey',
    textTransform: 'capitalize',
  },
});
