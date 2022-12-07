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

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6InlHNzZtS3BwQWQyaVJkSWR2MWJDdWciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzA0MDk4MTMsImV4cCI6MTY3MDQyNzgxMywiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2NzA0MDk4MTMsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.bHHA1GTeaqhJc6DotWYQYp1p3VvdbNaqr-iQHRyjlXEK5E7akOvdoioFFgi02Q8HntAxbrOOI89Zjz0UYMRxl_XAYU8WjQKL9Hhlz-vci1JQwyC30wBiqvXbcwmkRs7VerqLoG3EAEc631sUM5LjdtMaGNVLlIPJt2JvGRJTVfOz4rn-PKSn5u-fsDOspueN77i9bpdFrSd6IfTOL2864dBjOz_2DGOpv_urmO2BZNtTzM_zwR8inbXYi2dt5n5-WXXLdP0wcL5QlCy5TYHHlBPpF39GgigQPqKk4zrJjsfhSiBjYoL6k4Fl46ld2dDXuQLlb2DtCFcEQR0G4EVoAA";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}