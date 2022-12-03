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

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNQb1FETktuR05pc25jaFJNR0hwWkEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzAwNTkzMTcsImV4cCI6MTY3MDA3NzMxNywiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2NzAwNTkzMTcsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.X5eORWgDiAw7g9d6oA8uKaVkMfhCtst0S0UB0NuZUZqbweO2bMJlwshkEmEcRlMzPPUQMrNjVSe91RypeFdqSBcabIrDHhe93_uwgKzMJSx2v-jz3AD6fi6tOAczBG3rGBUo9Pv6sbEyLAOSUlE1bs352hiJ7kcsfUW8ouF-B_uSo1rJJNo3yi5ipL_56g6KSDSAXTNuUvL7FiPajZL1Pe9ZB5jT4vIy0zW9bBLD7dW9OSUATF2RkWTBlqLJYNn8iNB0joVBzpoIIKYOXXRnJi-D9ub2a4zP8vMo0x-9sLWXLL0HX8CPxrCA8RxM9cA6X0skQGjvH3vCPPso2-gHDA";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}