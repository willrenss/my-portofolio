import styled from '@emotion/styled'

//props
export interface InputProps {
    value?: number | string
    label?: '' | string,
    type: "text" | string
    regex?: undefined | RegExp 
    errorMsg?: '' | string
    sendChange: (data: number | string) => void
    placeHolder?: string
    disabled?: boolean
    readonly?: boolean
}

//style
const InputStyle = styled.input({
    height: '35px',
    maxWidth: '100%',
    width: '100%',
    padding: '12px 10px',
    margin: '5px 0',
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

const LabelStyle = styled.p({
   fontSize:'12px',
   fontWeight: 600,
   margin:'0'
})
const ErrorMsg = styled.p({
    fontSize: '10px',
    fontWeight: 400,
    height:'20px',
    color:'var(--error)',
    margin: '0'
})
const InputContainer = styled.div({
   display:'flex',
   maxWidth: '100%',    
   width: '100%',
   boxSizing: 'border-box',
   flexDirection :'column',
   alignItems:'start'
})
const Input = ({ value, type, placeHolder, label, regex, errorMsg, disabled, sendChange, readonly }: InputProps) => {

    const [inputValue, setInputValue] = useState('');
    const handlerData = (data:  number | string) => {        
        sendChange(data); //sendData to Parent
        setInputValue(data.toString())
    };

    const cekRegex = (char:string) => {
        const regexTest = regex
        return regexTest?.test(char)

    }
    return (       
        <InputContainer>
            {type == 'search' ? 
            <InputStyle
                type="text"
                value={value}
                onChange={(e) => handlerData(e.target.value)}
                placeholder={placeHolder}
            /> : 
            <>
                <LabelStyle>{label}</LabelStyle>
                <InputStyle
                    type={type}
                    disabled={disabled}
                    readOnly={readonly}
                    value={value}
                    onChange={(e) => handlerData(e.target.value)}
                    placeholder={placeHolder}                    
                />
                    {inputValue && !cekRegex(inputValue) ? <ErrorMsg>{errorMsg}</ErrorMsg> : <ErrorMsg></ErrorMsg>}
            </>         
            }           
        </InputContainer>        
    );
};

export default Input;