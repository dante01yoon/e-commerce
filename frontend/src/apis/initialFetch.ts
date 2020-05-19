import { http, APIResponse } from './index';
import { INITIAL_DATA_TYPE } from '@models/index'; 

export const initialFetch = (): Promise<APIResponse<INITIAL_DATA_TYPE>> => http.GET<INITIAL_DATA_TYPE>('/items'); 