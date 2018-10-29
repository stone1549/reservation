// @flow
import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Error } from '../components/common/Error';
import { ReservationItem } from '../components/ReservationItem';
import { GET_ALL_RESERVATIONS } from '../queries/reservations';
import type { Reservation } from '../types';

type RenderReservationItem = {
  item: Reservation,
};

function renderReservation({item}: RenderReservationItem): ReservationItem {
  const { id, name, hotelName, arrivalDate, departureDate } = item;
  return (
    <ReservationItem
      key={id}
      id={id}
      name={name}
      hotelName={hotelName}
      arrivalDate={arrivalDate}
      departureDate={departureDate}
    />
  );
}

export const ReservationListView = () => {
  return (
    <View style={style.container}>
      <Query
        query={gql`${GET_ALL_RESERVATIONS}`}
        pollInterval={3000}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size="large" color="#002C51" />;
          if (error) return <Error message={error} />;

          return (
            <FlatList
              data={data.reservations}
              renderItem={renderReservation}
              style={style.reservationList}
              keyExtractor={(item) => item.id}
              ListFooterComponent={<View style={style.listFooter} />}
            />
          );
        }}
      </Query>
    </View>
  );
};

const style = {
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  reservationList: {
    flex: 1,
  },
  listFooter: {
    flex: 1,
    height: 120,
  },
};
