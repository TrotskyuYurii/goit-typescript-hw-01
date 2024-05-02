// import axios from 'axios';

// async function fetchData(url) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

import axios, { AxiosResponse } from 'axios';

async function fetchData<T>(url: string): Promise<T> {
 try {
const response: AxiosResponse<T> = await axios.get(url);
return response.data;
} catch (error) {
throw new Error(`Error fetching from ${url}: ${error}`);
}
}