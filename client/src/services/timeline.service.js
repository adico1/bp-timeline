import axios from 'axios';
import config from '../config/config';

const apiClient = axios.create({
  baseURL: config.apiUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getTimelineItemsV1() {
    return apiClient.get('/activities/v1');
  },
  getTimelineItemsV2() {
    return apiClient.get('/activities/v2');
  },
};
