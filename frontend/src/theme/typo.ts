import { Typo } from './interface';

// line-height 
export const NAV_LINE_HEIGHT = 'line-height: 64px;'
export const DEFAULT_LINE_HEIGHT = 'line-height: 16px'
// font-weight
export const BOLD = 'font-weight: 700;';
export const MEDIUM = 'font-weight: 500;';
export const NORMAL = 'font-weight: 400;';
export const LIGHT = 'font-weight: 300;';

export const typo: Typo = Object.freeze({
  nav14white : `
    ${NAV_LINE_HEIGHT}
    color: white;
    ${BOLD}
  `, 
  nav14black : `
    ${NAV_LINE_HEIGHT}
    color: black;
    ${BOLD}
  `,
  detail20black:`
    ${MEDIUM};
    color: 1C2D3D;
    line-height: 1.2;
    font-size: 20px;
  `,
  item24black:`
    ${BOLD}
    color: 1C2D3D;
    line-height: 28px;
    font-size: 24px;
  `,
  item16Desblack : `
    ${NORMAL}
    color: 1C2D3D;
    line-height: ${DEFAULT_LINE_HEIGHT}; 
    font-size: 14px;
  `,
})