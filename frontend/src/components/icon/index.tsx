import React, { FC } from 'react';
import { IconType, iconMapKey, iconMap} from './chart';
import * as Styled from './style'; 

const { 
    IconBox 
} = Styled; 
export const Icon: FC<{
    type: IconType,
    color?: string, 
    backgroundColor?: string,
    size?: number,
    viewBox?: string     
}> = ({
    type = iconMapKey.blank,
    color = 'black',
    backgroundColor = 'transparent', 
    size = 24,
    viewBox = '0'
})=> {
    return(
        <IconBox backgroundColor={backgroundColor}>
            <svg width={size} height={size} viewBox={viewBox}>
                <path d={iconMap[type as IconType]} fill={color}/>
            </svg>
        </IconBox>
    )    
}

export default Icon;
