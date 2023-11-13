import styled from '@emotion/styled';
import { mq } from './mediaQuery';
import { IconButtonStyle } from './iconButton';
import close from '@/icons/close.svg';

interface ModalProps {
    isOpen?: boolean;
    title?: string;
    higherIndex?: boolean
    action?: React.ReactNode
    content?: React.ReactNode
    closeModal: (data: string) => void
}

interface ModalContainerProps {
    isOpen?: boolean
    indexShow?: boolean
}

const ModalContainer = styled.div<ModalContainerProps>(
    {
        display: 'none',
        position: 'fixed',
        paddingTop: '100px',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',       
        flexDirection: 'column',        
        alignItems: 'center',
        transition: 'all 0.25s ease-out',
    },
    props => ({
        display: props.isOpen ? 'flex' : 'none',
        zIndex: props.indexShow ? '1200' : '999'
    })
);

const ModalHeader = styled.div({
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    background: 'var(--primary)',
    boxSizing: 'border-box',
    minWidth: '600px',
    maxWidth: '600px',
    borderRadius: '5px 5px 0px 0px',
    fontWeight: 600,
    color:'var(--white)',
    transition: 'all 0.25s ease-out',
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
    button: {
        marginRight: '8px'
    },
    padding: '10px',
});



const ModalContent = styled.div({   
    backgroundColor: 'white',  
    padding: '15px 20px',
    borderRadius: '0px 0px 0px 0px',
    minWidth: '600px',
    boxSizing:'border-box',
    maxWidth: '600px',
    transition: 'all 0.25s ease-out',   
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
});

const ModalAction = styled.div({
    display:'flex',
    alignItems: 'center',
    justifyContent:'end',
    backgroundColor: 'var(--gray-bg)',
    padding: '10px',
    flexWrap:'wrap',
    borderRadius: '0px 0px 5px 5px',
    width:'100%',
    minWidth: '600px',
    maxWidth: '600px',
    borderTop: '1px solid var(--neutral-bg)',
    boxSizing: 'border-box',   
    transition: 'all 0.25s ease-out',
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
});

const Modal = ({ isOpen, action, content, title, higherIndex,closeModal }: ModalProps) => {
    const handlerModal = (data: string) => {
        closeModal(data); //sendData to Parent
    };   
    return (
        <ModalContainer isOpen={isOpen} indexShow={higherIndex}>         
                <ModalHeader>                   
                    <IconButtonStyle 
                    size={20} 
                    minMax={10} 
                    color={'link'} 
                    radius='100%'
                    onClick={() => handlerModal('')}
                    >
                        <img src={close} alt="SVG Image" />
                    </IconButtonStyle>
                    {title}                   
                </ModalHeader>
                <ModalContent>
                    {content}
                </ModalContent>      
                <ModalAction>
                        {action}
                </ModalAction>     
        </ModalContainer>
    );
};

export default Modal;