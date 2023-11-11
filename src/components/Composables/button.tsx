import styled from '@emotion/styled'
import { mq } from './mediaQuery';

export interface IconButtonStyleProps {
    minMax?: number
    size: string
    radius?: string
    color?: string
}

export const ButtonStyle = styled.button<IconButtonStyleProps>(
{
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',    
    padding: '9px 10px',
    fontSize: '12px',
    justifyContent: 'center',       
    border: 'none',       
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    '&:hover': {
        opacity: '0.8',
    },
    [mq[2]]: {
        width: '100%',
        marginLeft: '0px',
        marginBottom: '10px'
    },
    }, props => ({
        width: `${props.size}`,
        background: `var(--${props.color}-btn)`,
        color: `var(--${props.color}-text)`,
        borderRadius: `${props.radius}`,
    })
);