import React, { FC } from 'react';
import * as Styled from './style';
const { 
    LoadingContainer,
    GaiaCircle,
    MotherCircle,
    ChildCircle,
    InnerCircle
} = Styled;
export const LoadingBar:FC<{
    color?: string; 
    size?: string; 
    content?: string; 
}> = ({
    color,
    size,
    content 
}) => {
    return(
        <LoadingContainer>
            <GaiaCircle>
                <MotherCircle>
                    <ChildCircle>
                        <InnerCircle>
                            {content} 
                        </InnerCircle>
                    </ChildCircle>
                </MotherCircle>
            </GaiaCircle>
        </LoadingContainer>
    )
}

