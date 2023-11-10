import styled from '@emotion/styled'

//props
export interface InputProps {
    value?: number | string
    type: "text" | "number" | "email"
    sendChange: (data: number | string) => void
    placeHolder?: "" | string;
}

//style
const InputStyle = styled.input({
    height: '35px',
    maxWidth: '100%',
    width: '100%',
    padding: '12px 10px',
    margin: '10px 0',
    display: 'inline-block',
    borderRadius: '5px',
    caretColor: 'var(--primary)',
    border: '0.5px solid var(--gray-border)',    
    boxSizing: 'border-box',
    
    '&:focus': {
        outline: '0.5px solid var(--third)'
    },

    '&:hover': {
        outline: '0.5px solid var(--primary)'
    },

    '&:: placeholder': {
        color:  'var(--disabled)'
    }
})

const Input = ({ value, type, placeHolder, sendChange}: InputProps) => {
    const handlerData = (data:  number | string) => {        
        sendChange(data); //sendData to Parent
    };
    return (
        <InputStyle
            type={type}
            value={value}
            onChange={(e) => handlerData(e.target.value)}
            placeholder={placeHolder}
        />
    );
};

export default Input;