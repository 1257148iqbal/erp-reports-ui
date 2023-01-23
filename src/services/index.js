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

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlVNR19lMWVjTGhsbXlVZ2lfNkRXNUEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzQzNjA2MTYsImV4cCI6MTY3NDM3ODYxNiwiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2NzQzNjA2MTYsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.nOC0afcU5rmqbtTgyY14vWKI6Z9F6-T5qUTP-kV28kQ-rZmEjnH2kWOEUIaUZjriLXbU4nCAPbRMctXvGJzRCGqeDVPD905ova3yKovDbjhECthZkEAOVQ5h4OJqTyLCwjkyerqui5C3bOCiuvCr3GK2d-CgQvN6ZiVcyEEzXJ3akpaO9Hpd1HwxahXfRnMgIqcrQUci48Tm9hCuRI_KV_vVdGqCth5Qn8mGCrjx3JjQNxO6OenOavzjMWHQcfMz8urk9ZVcLkS4McbZFfwJxEfVOIXM2eisrNbOvrZIwwXCvbNariAUFVgq-xWJXLo9Za4e-EbylmsJd5TzsnAb2w";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}