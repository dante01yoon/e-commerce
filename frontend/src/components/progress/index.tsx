import React, { FC } from 'react';
import * as Styled from './style';
const { 
    ProgressContainer,
    GaiaCircle,
    MotherCircle,
    ChildCircle,
    InnerCircle
} = Styled;
export const ProgressBar:FC<{
    color?: string; 
    size?: string; 
    content?: string; 
}> = ({
    color,
    size,
    content 
}) => {
    return(
        <ProgressContainer>
            <GaiaCircle>
                <MotherCircle>
                    <ChildCircle>
                        <InnerCircle>
                            {content} 
                        </InnerCircle>
                    </ChildCircle>
                </MotherCircle>
            </GaiaCircle>
        </ProgressContainer>
    )
}

