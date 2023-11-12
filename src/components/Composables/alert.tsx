import styled from '@emotion/styled';
import { mq } from './mediaQuery';


export interface AlertProps {
    children: React.ReactNode;
    type: string
    isShow: boolean
}    


export interface AlertStyleProps {   
    type: string
    isShow: boolean
}
const AlertStyle = styled.div<AlertStyleProps>({ 
    position: 'fixed',
    minWidth: '600px',
    maxWidth: '600px',    
    padding: '10px',  
    top: '15px',
    left: '50%', 
    transform: 'translateX(-50%)',  
    borderRadius:'5px',
    textAlign: 'center',
    boxSizing: 'border-box',
    fontWeight: 500,
    transition: 'all 0.25s ease',
    zIndex: '99999',
        [mq[2]]: {
            minWidth: '550px',
            maxWidth: '550px',
        },
            [mq[1]]: {
            minWidth: '350px',
            maxWidth: '350px',
        },
            [mq[0]]: {
            minWidth: '250px',
            maxWidth: '250px',
        },
},
 props => ({
     backgroundColor: `var(--${props.type}-bg)`,
     color: `var(--${props.type}-btn)`,
     display: props.isShow ? 'block' : 'none'
    })
)

const Alert = ({ children, type, isShow } : AlertProps) => {
    return (
        <AlertStyle type={type} isShow={isShow}>
            {children}
        </AlertStyle>
    );
};

export default Alert