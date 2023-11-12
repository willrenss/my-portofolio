import styled from '@emotion/styled';

export interface IconButtonStyleProps {   
    minMax: number
    size: number
    radius?: string
    color?: string
}

export const IconButtonStyle = styled.button<IconButtonStyleProps> (
    {
        display: 'flex',
        alignItems: 'center',       
        justifyContent: 'center',       
        top: '10px',      
        right: '10px',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
       
    },
    props => ({
        minWidth: `${props.size}px`,
        maxWidth: `${props.size}px`,
        maxHeight: `${props.size}px`,
        minHeight: `${props.size}px`, 
        background: `var(--${props.color}-btn)`,
        color: `var(--${props.color}-text)`,
        border: 'none',
        borderRadius: `${props.radius}`,
        img: {
            transition: 'all 0.25s ease',
            minWidth: `${props.minMax}px`,
            maxWidth: `${props.minMax}px`,
            maxHeight: `${props.minMax}px`,
            minHeight: `${props.minMax}px`,
        },
        '&:hover': {
            opacity: '0.8',
            img: {
                minWidth: `${props.minMax+3}px`,
                maxWidth: `${props.minMax+3}px`,
                maxHeight: `${props.minMax+3}px`,
                minHeight: `${props.minMax+3}px`,
            }
        },
    })
)