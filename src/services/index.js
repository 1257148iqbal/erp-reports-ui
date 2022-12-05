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

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImczQlBHeFFMR0Rud1h0bVplbV9uT0EiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzAyMzg0NDYsImV4cCI6MTY3MDI1NjQ0NiwiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2NzAyMzg0NDYsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.nxjgurjPsB4Lu5eMn6ON9_T2_3sO4GZVa5h0pvx9V3-VSDohsdNR_sb4Wx5isjVJFG3WN8jiow_dahs9lLUy8tDm1_aNwiDaxFl5lFJvusu8pcRU1Rvfyu1Bedo8WlZYaom4zU0VeCeoUnOB_pK3RTs9qjaTC6E5BAVfAtekjSmn_kBrxhV5cqknf2ac0ImMK-SOKQjpwSevkHsNtQA3JczZL_xyMJSmXoJabeazJiSyOOjqB-npEXL9M6OTq9C6RC5gjQT89olXtN64KO0EUviFON2McECPpiHOMIjrecq0AARxoSjvZRqvzlQaSKe2X85iCsa6545voqT3UHMLaw";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}