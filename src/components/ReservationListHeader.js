import React from 'react';
import { Text, View } from "react-native";
import { BLUEISH, WHITEISH } from "../colors";

export const ReservationListHeader = () => {
  return (
    <View style={style.container}>
      <View style={style.doubleColumn}>
        <Text style={style.text}>Hotel Name</Text>
      </View>
      <View style={[style.doubleColumn, style.columnLeftBorder]}>
        <Text style={style.text}>Customer Name</Text>
      </View>
      <View style={[style.column, style.columnLeftBorder]}>
        <Text style={style.text}>Arrival</Text>
      </View>
      <View style={[style.column, style.columnLeftBorder]}>
        <Text style={style.text}>Departure</Text>
      </View>
    </View>
  );
};

const style = {
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: BLUEISH,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 60,
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
    borderColor: WHITEISH,
  },
  text: {
    fontSize: 10,
    color: WHITEISH,
    fontWeight: '600',
    textAlign: 'center',
  },
};
