// @flow
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';
import { Error } from '../components/common/Error';
import { ReservationItem } from '../components/ReservationItem';
import { GET_ALL_RESERVATIONS } from '../queries/reservations';
import type { AllReservationResponse, Reservation} from '../types';

type RenderReservationItem = {
  item: Reservation,
};

export const allReservationsQuery = gql`${GET_ALL_RESERVATIONS}`;

export const renderReservation = ({ item }: RenderReservationItem): ReservationItem => {
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
};

export const reservationKeyExtractor = (item: Reservation): string =>  item.id;

export const handleQueryResults = ( { loading, error, data }: QueryResult<AllReservationResponse> ): Component => {
  if (loading) {
    return <ActivityIndicator size="large" color="#002C51"/>;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <FlatList
      data={data.reservations}
      renderItem={renderReservation}
      style={style.reservationList}
      keyExtractor={reservationKeyExtractor}
      ListFooterComponent={<View style={style.listPadding} />}
    />
  );
};

export const ReservationListView = () => {
  return (
    <View style={style.container}>
      <Query
        query={allReservationsQuery}
        children={handleQueryResults}
        displayName="allReservationsQuery"
        pollInterval={3000}
      />
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
  listPadding: {
    flex: 1,
    height: 120,
  },
};
