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

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6Imtaa1RBalNrZDhaS3g2Sl81WUtKQWciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzA3MzQwODQsImV4cCI6MTY3MDc1MjA4NCwiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2NzA3MzQwODQsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.GFXFsv0igqq5chGWbWsQRHtyRq8DFE74HpwyZgzYah2iUOH0gGFTeRy105DbZoZGz0oPnwEU7PQ-c5THQocOyrzKJSdGnnzhhUuDh31sBXyyNLjrCKNvPut2s1QZocXqPkwaCGXlVzSnwahMR26KXydVR7uUyi6VpyrBchoqB5u2lmupaF-8TUeJVlR6aS9-bPFpTHIpVQ2r-V5Q1SxoFW-_FwrKiQmPoFCJGq3ou4fXD3-IqMMX3dzs-MB-So7Kln8p6LFag7KGV_orLkC3M5_zWeXB5ayuYzGb8NyRSsaEpn2XFxCCrn9UgJb-qBr86hVCbC08dfkBD5Y-YP_yVw";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}