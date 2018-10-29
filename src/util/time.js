// @flow
import moment from 'moment';

export const formatDay = (ms: number): string => {
  return moment(ms).format('MM/DD/YYYY');
};
