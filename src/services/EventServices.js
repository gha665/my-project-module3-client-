import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const service = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const eventEndPoint = "/api/events";

export const EVENTS_SERVICE = {
  getEvents() {
    return service.get(eventEndPoint);
  },
  service: service,
};
export default EVENTS_SERVICE;
