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
})