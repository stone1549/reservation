// @flow
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { formatDay } from "../util/time";
import { BLUEISH, WHITEISH } from '../colors';

export const navToReservation = (id: string, name: string, hotelName: string, arrivalDate: number,
                                 departureDate: number) => () => {
  Actions.reservation({ id, customerName: name, hotelName, arrivalDate, departureDate });
};

type ReservationItemProps = {
  id: string,
  name: string,
  hotelName: string,
  arrivalDate: number,
  departureDate: number,
};

export const ReservationItem = ({id, name, hotelName, arrivalDate, departureDate}: ReservationItemProps) => {
  return (
    <TouchableHighlight onPress={navToReservation(id, name, hotelName, arrivalDate, departureDate)}>
      <View style={style.container}>
        <View style={style.doubleColumn}>
          <Text style={style.text}>{hotelName}</Text>
        </View>
        <View style={[style.doubleColumn, style.columnLeftBorder]}>
          <Text style={style.text}>{name}</Text>
        </View>
        <View style={[style.column, style.columnLeftBorder]}>
          <Text style={style.text}>{formatDay(arrivalDate)}</Text>
        </View>
        <View style={[style.column, style.columnLeftBorder]}>
          <Text style={style.text}>{formatDay(departureDate)}</Text>
        </View>
      </View>
    </TouchableHighlight>

  );
};

const style = {
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: WHITEISH,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: BLUEISH,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 60,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 1,
    shadowOpacity: 0.5
  },
  column: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doubleColumn: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnLeftBorder: {
    borderLeftWidth: 1,
    borderColor: BLUEISH,
  },
  text: {
    fontSize: 10,
    color: BLUEISH,
    textAlign: 'center',
  },
};
