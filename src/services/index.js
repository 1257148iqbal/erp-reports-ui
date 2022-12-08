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

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6InlHNzZtS3BwQWQyaVJkSWR2MWJDdWciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzA0NzM1MzYsImV4cCI6MTY3MDQ5MTUzNiwiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2NzA0NzM1MzYsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.ALxPlZIDDBbtvJwcoXExCGKq4FxvqjJFBtXPHM9mNrf9j0lDcDPBnswxlxoDrRGplSndEyofJDgV8ff6eu1pLC34VPuKasSNbBfMMxtLq8V8NmN-oakdk500DzPQRjFScLPz_ANhw8iWTK-4BqZlOxOAlr0Z_OmgTK8V0jtU1zPg7g3opMGXr8uR2ql5mjpslezoq1VmzPs31iJzg3w5FoMebtXLlljwKUmqBCqBwa17MfpcKNBiY9cLhdn9-E--ZZrLd1ihKTvRv7rrwR0qfl2fUJfkwjjmFCydkjCL96hWKHKEXL3NbJ15CGPQgrEG4DmQo7tQGjHL9n2yBIe7Mg";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}