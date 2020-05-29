import React, { FC, RefObject, forwardRef } from 'react';
import { IconType, iconMapKey, iconMap} from './chart';
import * as Styled from './style'; 
const { 
    IconBox 
} = Styled; 
type Ref = HTMLDivElement | null;
type Props = {
    type: IconType,
    color?: string,
    backgroundColor?: string,
    size?: number,
    viewBox?: string 
}
// {
//     type = iconMapKey.blank,
//     color = 'black',
//     backgroundColor = 'transparent', 
//     size = 24,
//     viewBox = '0'
// }
export const Icon = forwardRef<Ref,Props>((props,ref)=> {
    const {
        type, 
        color = 'black', 
        backgroundColor = 'transparent', 
        size = 24, 
        viewBox = '0'
    } = props; 
    
    return(
        <IconBox backgroundColor={backgroundColor} ref={ref}>
            <svg width={size} height={size} viewBox={viewBox}>
                <path d={iconMap[type as IconType]} fill={color}/>
            </svg>
        </IconBox>
    )    
});

export default Icon;
