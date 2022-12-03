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

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNQb1FETktuR05pc25jaFJNR0hwWkEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2Njk4OTU1NjUsImV4cCI6MTY2OTkxMzU2NSwiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2Njk4OTU1NjUsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.Ee-GGGVcR3XTOOdQ06KWT4PZuEt-9y3UtFcu_oK1kb2RU2Ohtz7aSQNXygsUCaALgzHU1qayGBYIR8g77y-K2P-l3QAYwX7tmV5k-YEhGMEWO7L1iWC7Bvh2k9j0A9DBBMz6H9BUnS9QkPTP8hYuWviFhxEx-2zcnQwGmJdjsKCSCMQuTBqabq51DDKEM7t69sMVXRyudF9u_0sLV1bt2Dd9b6Dflyw5b_ZQEPnBtvP5L4YcUoQPO8Z2r5XaiCFlIfN-5tzl1BDXZwKTyD9x613YQva0wgNQJUOU7O0xkhYx4B8D_ZaFZGT-YTepXxyc_RHJNt0qL3i-Mh623cwL2Q";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}