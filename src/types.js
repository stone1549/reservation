// @flow

export type Reservation = {
  id: string,
  customerName: string,
  hotelName: string,
  arrivalDate: number,
  departureDate: number,
}

export type UnbookedReservation = {
  name: string,
  hotelName: string,
  arrivalDate: number,
  departureDate: number,
}

export type AllReservationResponse = {
  reservations: Array<Reservation>,
}
