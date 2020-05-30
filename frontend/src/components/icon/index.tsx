import React, { FC, RefObject, forwardRef, ButtonHTMLAttributes } from 'react';
import { IconType, iconMapKey, iconMap} from './chart';
import * as Styled from './style'; 
const { 
    IconBox 
} = Styled; 
type Ref = HTMLDivElement | null;
interface Props extends Omit<ButtonHTMLAttributes<HTMLDivElement>,"type">{
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
        viewBox = "0",
        onClick
    } = props; 
    
    return(
        <IconBox 
            backgroundColor={backgroundColor} 
            ref={ref} 
            onClick={onClick}
        >
            <svg width={size} height={size} viewBox={viewBox} fill={color}>
                <path d={iconMap[type as IconType]} />
            </svg>
        </IconBox>
    )    
});

export default Icon;
