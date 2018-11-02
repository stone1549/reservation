// @flow
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { formatDay } from '../util/time';
import type { Reservation } from '../types';
import { BLUEISH, GRAYISH, WHITEISH } from '../colors';

export const ReservationView = (props: Reservation) => {
  const { id, customerName, hotelName, arrivalDate, departureDate } = props;
  return (
    <ScrollView style={style.container}>
      <View style={style.row} >
        <View style={style.left}>
          <Text style={[style.text, style.leftText]}>Reservation ID:</Text>
        </View>
        <View style={style.right}>
          <Text style={[style.text, style.rightText]}>{id.substring(0, 6)}</Text>
        </View>
      </View>
      <View style={style.row} >
        <View style={style.left}>
          <Text style={[style.text, style.leftText]}>Hotel Name:</Text>
        </View>
        <View style={style.right}>
          <Text style={[style.text, style.rightText]}>{hotelName}</Text>
        </View>
      </View>
      <View style={style.row} >
        <View style={style.left}>
          <Text style={[style.text, style.leftText]}>Customer Name:</Text>
        </View>
        <View style={style.right}>
          <Text style={[style.text, style.rightText]}>{customerName}</Text>
        </View>
      </View>
      <View style={style.row} >
        <View style={style.left}>
          <Text style={[style.text, style.leftText]}>Arrival Date:</Text>
        </View>
        <View style={style.right}>
          <Text style={[style.text, style.rightText]}>{formatDay(arrivalDate)}</Text>
        </View>
      </View>
      <View style={style.row} >
        <View style={style.left}>
          <Text style={[style.text, style.leftText]}>Departure Date:</Text>
        </View>
        <View style={style.right}>
          <Text style={[style.text, style.rightText]}>{formatDay(departureDate)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const style = {
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: WHITEISH,
  },
  row: {
    flex: 1,
    minHeight: 80,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: GRAYISH,
    alignItems: 'flex-end',
    paddingTop: 5,
    paddingBottom: 5,
  },
  left: {
    flex: 1,
    width: '30%',
  },
  right: {
    flex: 1,
    width: '70%',
  },
  text: {
    color: BLUEISH,
  },
  leftText: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  rightText: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '600',
    textAlign: 'right',
  },
};
