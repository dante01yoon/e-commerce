import React, { FC } from 'react';
import { IconType, iconMap} from './chart';
import * as Styled from './style'; 

const { 
    IconBox 
} = Styled; 
export const Icon: FC<{
    type: IconType,
    color: string, 
    backgroundColor: string,
    size: number,
    viewBox: string     
}> = ({
    type = iconMap.blank,
    color = 'black',
    backgroundColor = 'white', 
    size = 24
     
})=> {
    return(
        <IconBox color={color} backgroundColor={backgroundColor}>
            <svg width={size} height={size} viewBox={}>
                <path d={type}/>
            </svg>
        </IconBox>
    )    
}

export default Icon;
