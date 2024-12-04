import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {
  ExpandableCalendar,
  TimelineList,
  CalendarProvider,
  CalendarUtils,
  WeekCalendar,
} from 'react-native-calendars';
import {groupBy, filter, find} from 'lodash';

import {timelineEvents, getDate} from './data';
import Agenda from './Agenda';

const INITIAL_TIME = {hour: 9, minutes: 0};
const EVENTS = timelineEvents;

const TimelineCalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [eventsByDate, setEventsByDate] = useState(
    groupBy(EVENTS, e => CalendarUtils.getCalendarDateString(e.start)),
  );

  const marked = {
    [`${getDate(-1)}`]: {marked: true},
    [`${getDate()}`]: {marked: true},
    [`${getDate(1)}`]: {marked: true},
    [`${getDate(2)}`]: {marked: true},
    [`${getDate(4)}`]: {marked: true},
  };

  const onDateChanged = (date, source) => {
    console.log('TimelineCalendarScreen onDateChanged: ', date, source);
    setCurrentDate(date);
  };

  const onMonthChange = (month, updateSource) => {
    console.log('TimelineCalendarScreen onMonthChange: ', month, updateSource);
  };

  const createNewEvent = (timeString, timeObject) => {
    const hourString = `${(timeObject.hour + 1).toString().padStart(2, '0')}`;
    const minutesString = `${timeObject.minutes.toString().padStart(2, '0')}`;

    const newEvent = {
      id: 'draft',
      start: `${timeString}`,
      end: `${timeObject.date} ${hourString}:${minutesString}:00`,
      title: 'New Event',
      color: 'white',
    };

    if (timeObject.date) {
      setEventsByDate(prevEvents => {
        const updatedEvents = prevEvents[timeObject.date]
          ? [...prevEvents[timeObject.date], newEvent]
          : [newEvent];
        return {...prevEvents, [timeObject.date]: updatedEvents};
      });
    }
  };

  const approveNewEvent = (_timeString, timeObject) => {
    Alert.prompt('New Event', 'Enter event title', [
      {
        text: 'Cancel',
        onPress: () => {
          if (timeObject.date) {
            setEventsByDate(prevEvents => ({
              ...prevEvents,
              [timeObject.date]: filter(
                prevEvents[timeObject.date],
                e => e.id !== 'draft',
              ),
            }));
          }
        },
      },
      {
        text: 'Create',
        onPress: eventTitle => {
          if (timeObject.date) {
            setEventsByDate(prevEvents => {
              const draftEvent = find(prevEvents[timeObject.date], {
                id: 'draft',
              });
              if (draftEvent) {
                draftEvent.id = undefined;
                draftEvent.title = eventTitle ?? 'New Event';
                draftEvent.color = 'lightgreen';
              }
              return {...prevEvents};
            });
          }
        },
      },
    ]);
  };

  const timelineProps = {
    format24h: false,
    onBackgroundLongPress: createNewEvent,
    onBackgroundLongPressOut: approveNewEvent,
    // unavailableHours: [
    //   {start: 0, end: 6},
    //   {start: 22, end: 24},
    // ],
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CalendarProvider
        style={{flex: 1}}
        date={currentDate}
        onDateChanged={onDateChanged}
        onMonthChange={onMonthChange}
        showTodayButton
        disabledOpacity={0.6}>
        {/* <WeekCalendar testID={'wwww'} firstDay={1} markedDates={marked.current} /> */}
        {/* <ExpandableCalendar firstDay={1} markedDates={marked} /> */}
        <TimelineList
          events={eventsByDate}
          timelineProps={timelineProps}
          showNowIndicator
          scrollToFirst
          initialTime={INITIAL_TIME}
        />
      </CalendarProvider>
    </View>
  );
};

export default TimelineCalendarScreen;
