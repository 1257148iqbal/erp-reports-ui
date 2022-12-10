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

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6Imtaa1RBalNrZDhaS3g2Sl81WUtKQWciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzA2NDUyNjMsImV4cCI6MTY3MDY2MzI2MywiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2NzA2NDUyNjMsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.lRIgzl7Eo-QzmzaH9YjriTP2wRF-mdpu3RL-5NYm3Pb44irJD9zP0_b7bjYLlNBWy24pGaiAIC0BErTgr64Sum0Vqnz8EsIEK6IUs14py5D5dpU1HgThbHnxIgSM_PnoqN5Q3z-8T4W7gZMjE9tOLU4meVBEmc_FNUEDFJrdzyAFJLENh2-79fuPoo3pc6iZAdWaPT11SQMDIbH10kK4Ue715HiiONHC_dcU8JlLJSqP2NpTS1yTU0pjlcy9S8uDkOxwjiQUUkialHlgyqjlkerF0tbK2lprBKHrmxVqyhgYUJNLBKaftCKtEBkCju3O3PbanpR9gh73YRu36zTRcg";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}