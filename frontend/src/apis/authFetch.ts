import { http } from './useHttpModule'; 
import { APIResponse } from '@apis/index'; 
export type LogInfoType = {
  message: string,
  token: string;
}
export type RegisterInfoType = {
  message: string, 
  admin: boolean
}

export const signUp = (): Promise<APIResponse<RegisterInfoType>> => http.GET<RegisterInfoType>('/api/auth/register'); 
export const logIn = (username: string, password: string ): Promise<APIResponse<LogInfoType>> => http.POST<LogInfoType>('/api/auth/login');
 