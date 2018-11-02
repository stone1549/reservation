import React from 'react';
import { Text, View } from "react-native";
import { BLUEISH, WHITEISH } from "../colors";

export const ReservationListHeader = () => {
  return (
    <View style={style.container}>
      <View style={style.doubleColumn}>
        <Text style={style.text}>Hotel</Text>
      </View>
      <View style={[style.doubleColumn, style.columnWithSideBorder]}>
        <Text style={style.text}>Name</Text>
      </View>
      <View style={style.column}>
        <Text style={style.text}>Arrive</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doubleColumn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnWithSideBorder: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: WHITEISH,
  },
  text: {
    fontSize: 20,
    lineHeight: 25,
    color: WHITEISH,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
