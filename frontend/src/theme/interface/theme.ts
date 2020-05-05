import { 
  Typo,
 } from './index';
export interface Theme<
 TypoType = Typo
>{
 typo : Readonly<TypoType & Typo>
}