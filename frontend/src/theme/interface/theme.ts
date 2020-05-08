import { 
  Typo,
  Color
 } from './index';
export interface Theme<
 TypoType = Typo,
 ColorType = Color
>{
 typo : Readonly<TypoType & Typo>;
 colors : Readonly<ColorType & Color>;
}