import styled from '@emotion/styled';
import arrowDown from '@/icons/arrow-down.svg';
export interface DropdownProps {
    isOpen?: boolean
    defaultValue?: '' | number | string
    options? : Array<string | number>
    onSelect: (data: number | string) => void
}

const DropdownContainer = styled.div({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 5px',
    width: '100%',
    position: 'relative',
    borderRadius: '5px',
    border: '0.5px solid var(--gray-border)',
    '&:hover': {
        border: '1px solid var(--third)',
    },
    '&:focus': {
        border: '1px solid var(--third)',
    },
    img: {
        transition: 'all 0.25s ease',
        minWidth: '15px',        
        maxWidth: '15px',
        maxHeight: '15px',
        minHeight: '15px',
    }
})

const InputStyle = styled.input({
    height: '35px',
    maxWidth: '100%',
    width: '100%',   
    padding: '12px 10px',    
    color: 'var(--disabled)',        
    caretColor: 'var(--primary)',
    outline: 'none',
    border: 'none',
    // border: '0.5px solid var(--gray-border)',
    boxSizing: 'border-box',   
    '&:: placeholder': {
        color: 'var(--disabled)'
    }
})

const DropdownMenu = styled.ul((props) => ({
    minHeight: '100%',
    position: 'absolute',
    left: 0,
    bottom: '100%',
    width: '100%',
    listStyle: 'none',
    fontSize: '12px',
    background: 'var(--white)',
    border: '1px solid (--gray)',
    padding: 0,
    margin: 0,
    display: `${props.theme ? 'block' : 'none'}`,
}));

const DropdownItem = styled.li({
    padding: '10px',
    cursor: 'pointer',
    listStyle: 'none', 
    '&:hover': {
        background: 'var(--white)',
    },
});

const Dropdown = ({ options, onSelect, defaultValue }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const dropdownRef = useRef(null);
    const handleSelect = (option: string | number) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <DropdownContainer onClick={() => setIsOpen(!isOpen)} ref={dropdownRef} onMouseLeave={handleMouseLeave}>
            <InputStyle 
                readOnly={true}
                type={'text'}
                value={selectedOption}
            />                                 
            <img src={arrowDown} alt="SVG Image" />          
            <DropdownMenu theme={isOpen} >
                {options?.map(option => (
                    <DropdownItem key={option} onClick={() => handleSelect(option)}>
                        {option}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </DropdownContainer>
    );
};

export default Dropdown