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

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6Imtaa1RBalNrZDhaS3g2Sl81WUtKQWciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzA1MDE5OTgsImV4cCI6MTY3MDUxOTk5OCwiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2NzA1MDE5OTgsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.FIcyeEp3pBIUSxJRuyRq1SrLRn891UjNskkvf8CDV7UmYhPHEd8uQWnAfeuuOI-rMzt_hX08PsjQgLOYvAEgAcJ3WQyPzSaHnN8uRiJU1VfbiSiEhbiT7ZX01ntwnHrU6jHyTDSW6c0XIzkjXp3cYavRyqavCaEK-Harvjlj7iVQGr899rgP5LEMnfH5RwZKMSy4svg5qTvcAx6lrMRbhlX-kZe1eePxnO_QliepL7zaAcFaWBdPzHfgSF8rUXchQ907bPDn0zQ03oBbyJo2jIMz5LnsLSFLdfWWbJ8uPuw50X339IKfggrm6Kbg8eJoeYXEOHNSUQLtRK2PCfXssw";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}