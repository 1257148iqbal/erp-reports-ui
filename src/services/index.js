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

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6Imtaa1RBalNrZDhaS3g2Sl81WUtKQWciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzE2MDA0NDUsImV4cCI6MTY3MTYxODQ0NSwiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2NzE2MDA0NDUsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.EyYqVozc3w5iVy9S22utzvIjANAhGpA4yi0FcyypdzbusLuoL5jRR9BfjPKDzYtAqcybqPUR5crgY17H2YRgjan0qZbddkY18Vq8DckUNVU1NBW1JIa2eeWpZiqZUF-jCET1iSyrdKV7T0b7JrbExjQZ1BICdVDc4BSNOguX8LHtTXos4mIVNs1w7Aeql5iqA-ar-Eu4gZNlO0mvBCgzZNxLontd8ve6-9K6T0-ArKJH5jPHOXjoExiJVrNb7mW63FQidfguMBaJYKxpJ-a8WCJXz3kVQN6N0Z73C-H3b1ea6Th1CXhLSfLC5vbIOuCP5OsVKdvHI9DsR-lLrPpzaQ";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}