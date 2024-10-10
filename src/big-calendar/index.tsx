import dayjs from 'dayjs';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {Calendar, ICalendarEventBase, Mode} from 'react-native-big-calendar';

// import {Calendar, ICalendarEventBase, Mode} from './build';

export const BigCalendar = () => {
  const {height} = useWindowDimensions();
  const [mode, setMode] = React.useState<Mode>('week');
  const [additionalEvents, setAdditionalEvents] = React.useState<
    ICalendarEventBase[]
  >([]);

  const addEvent = React.useCallback(
    (start: Date) => {
      const title = 'new Event';
      const end = dayjs(start).add(59, 'minute').toDate();
      setAdditionalEvents([...additionalEvents, {start, end, title}]);
    },
    [additionalEvents, setAdditionalEvents],
  );

  const addLongEvent = React.useCallback(
    (start: Date) => {
      const title = 'new Long Event';
      const end = dayjs(start).add(1, 'hour').add(59, 'minute').toDate();
      setAdditionalEvents([...additionalEvents, {start, end, title}]);
    },
    [additionalEvents, setAdditionalEvents],
  );

  return (
    <View>
      <SafeAreaView>
        <Text style={styles.headline}>Calendar Mode</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => setMode('week')}
              style={[
                styles.buttonContainer,
                mode === 'week' && styles.buttonContainerActive,
              ]}>
              <Text>week</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMode('day')}
              style={[
                styles.buttonContainer,
                mode === 'day' && styles.buttonContainerActive,
              ]}>
              <Text>day</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMode('3days')}
              style={[
                styles.buttonContainer,
                mode === '3days' && styles.buttonContainerActive,
              ]}>
              <Text>3days</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMode('month')}
              style={[
                styles.buttonContainer,
                mode === 'month' && styles.buttonContainerActive,
              ]}>
              <Text>month</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMode('schedule')}
              style={[
                styles.buttonContainer,
                mode === 'schedule' && styles.buttonContainerActive,
              ]}>
              <Text>schedule</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Calendar
          height={height - 60}
          events={[]}
          onLongPressCell={addLongEvent}
          onPressCell={addEvent}
          swipeEnabled
          sortedMonthView={false}
          mode={mode}
          moreLabel="+{moreCount}"
          onPressMoreLabel={moreEvents => {
            console.log(moreEvents);
          }}
          itemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginEnd: 15,
  },
  buttonContainerActive: {
    borderBottomColor: 'blue',
    borderBottomWidth: 3,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headline: {
    fontSize: 16,
  },
  itemSeparator: {
    height: 5,
    marginBottom: 20,
  },
});
