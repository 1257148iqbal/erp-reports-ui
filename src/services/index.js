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

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNQb1FETktuR05pc25jaFJNR0hwWkEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzAwNDA5NjYsImV4cCI6MTY3MDA1ODk2NiwiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2NzAwNDA5NjYsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.UuIxYFuMDgTwMOn4jo3TpE8sDQ3LZhg0huY2rV4mPnEMwfFOH6bo5yNQUBvW2AZjG5Iv2qXSkXa6cm8SBKErMkX3nS0e7g9dUdOHEnHMzK257da3qb1P5h531M_-nS3vcn4_gGC3sKl4mkwZW0AEGj4dxb9awP3sNOImdXtqMLXfCjP23L2IMmBIs6uwfP8cuZjuwyvu4ABoQS-PnA-qtwMAHCaVbnG5nzu5Qnh7WhSBKy1SArAGCuXtBjBJ3fskbc-Tegsh41RnoAgGCPFTGmXP1qSAkU64iQb8AyaGLg7wF37VdiI6UoXIMR131x0hehsBYmHsm6cOCmb_Fg7IIw";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}