// @flow
import React from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { ReservationListView } from '../views/ReservationListView';
import { ReservationView } from '../views/ReservationView';
import AddReservationView from '../views/AddReservationView';
import { BLUEISH } from '../colors';

export const ResRouter = () => {
  return (
    <Router>
      <Stack
        key="reservations"
        backButtonTintColor={BLUEISH}
        titleStyle={style.title}
        navigationBarStyle={style.navBar}
        backButtonTextStyle={style.backButtonText}
        backTitle="Back"
      >
        <Scene
          key="reservationList"
          component={ReservationListView}
          initial
          title="Reservations"
          rightTitle="Add"
          rightButtonTextStyle={style.rightNavButtonText}
          onRight={() => Actions.addReservation()}
        />
        <Scene
          key="reservation"
          title="Reservation"
          component={ReservationView}
        />
        <Scene
          key="addReservation"
          title="Add Reservation"
          component={AddReservationView}
        />
      </Stack>
    </Router>
  );
};

const style = {
  title: {
    color: BLUEISH,
  },
  navBar: {
    borderBottomWidth: 2,
    borderBottomColor: BLUEISH,
  },
  rightNavButtonText: {
    fontWeight: '600',
    fontSize: 12,
    color: "#002C51",
    borderWidth: 2,
    borderColor: BLUEISH,
    padding: 5,
    borderRadius: 5,
  },
  backButtonText: {
    color: BLUEISH,
  },
};
