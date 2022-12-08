import axios from 'axios';
import { baseUrl } from '../utility/enums';

const { REACT_APP_MERCHANDISING_BASE_URL, REACT_APP_MERCHANDISING_URL } = process.env;

export const baseAxios = axios.create( {
  baseURL: baseUrl
} );

// axios instance for merchandising module
export const merchandisingAxiosInstance = axios.create( {
  baseURL: REACT_APP_MERCHANDISING_BASE_URL
} );

// axios merchandising
export const merchandisingAxios = axios.create( {
  baseURL: REACT_APP_MERCHANDISING_URL
} );

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6InlHNzZtS3BwQWQyaVJkSWR2MWJDdWciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzA0NzY4MzYsImV4cCI6MTY3MDQ5NDgzNiwiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2NzA0NzY4MzYsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.jqP_Jk1vHkWMX5CYsyfqW0IbCi9_fwqFXmzKkm6bb0wgj1qOal3UZUdEvWD7hSohR294JP5wg5xEuqLnQFn4-Y43_vP7WGimAXES6jEtEBrGx2qsU8CY0hUzl_0sZphotWWwnHDeJ72cDuFoOrGFJsm7qVQMzEsS-VbOaEnuDy7l4h3nf34nGlccO1qfd8iqZvK20nl0qfJP9hFV19C8qznNGEBOuQc8YIeEatUP1jJhuI9kW8AjZFHjCyPfX8a6_NJH_10_cpRLI6z4o5gysGESIDZwFg7PllPG-SAAiEFOPEMskZolZnbFWfGOsjs21EXd1O4rLnW9ZFzyfdu25g";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}