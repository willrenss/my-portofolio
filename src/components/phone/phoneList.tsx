import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Contact } from '../../modules/store/getContact';
import { flexCenter, fullFlexCenter } from '../../style/flex';
import { isExpand } from '../../style/width';
import { mq } from '../Composables/mediaQuery';
import trash from '@/icons/trash.svg';
import pencil from '@/icons/pencil.svg';
//props
export interface PhoneListProps {
    item: Contact
    index: number
    preItem: Contact
    randomColor: string
}

//function
const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

//styled
const PhoneStyle = styled.div({   
    display: 'flex',
    overflow: 'hidden',
    minWidth: '600px',
    maxWidth: '600px',    
    marginBottom: '10px',
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
    '&:hover button': {
        display: 'inline-block',
    },
})

const ContactStyle = styled.div({
    overflow: 'hidden',
    backgroundColor: 'var(--white)',   
    padding: '18px 12px',
    borderRadius: '5px',
    '&:hover div': {
        marginLeft: '-100px',
    },
    '&:hover div:first-child': {
        transform: 'translateX(-400%)',
    },
 
})

const NameContactStyle = styled.div({
  color: 'var(--secondary)',
  fontWeight: 700,
  marginLeft: '5px',
  transition: 'all 0.25s ease-out',
})

const RoundedContactStyle = styled.div({
    borderRadius: '100%',
    padding: '10px',
    color: 'white',
    fontWeight: 500,
    minWidth: '25px',
    maxWidth: '25px',
    maxHeight: '25px',
    minHeight: '25px',
    transition: 'all 0.25s ease-out'
}, props => ({ backgroundColor: props.color }))


const FontHeaderStyle = styled.div(props => ({
    color: `var(--${props.color})`,    
    marginRight: '10px',
    marginLeft: `${props.lang}px`,
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 15px',
    fontWeight: 600,
    fontSize: '12px',
    backgroundColor: `var(--${props.theme})`,
}))

const ButtonStyle = styled.button(props => (
{
    display: 'none',
    background: `var(--${props.color}-btn)`,    
    color: `var(--${props.color}-text)`,
    border: 'none',
    width: '40px',
    padding: '5px 10px',
    borderRadius: `${props.lang}`,
    cursor: 'pointer',
    transition: 'all 0.25s ease',    
    boxSizing: 'border-box',   
    zIndex: 1,    
    '&:hover': {
        opacity: '0.8'
    },
    img:{
        minWidth: '25px',
        maxWidth: '25px',
        maxHeight: '25px',
        minHeight: '25px',
    }
}));

//css
const phoneRow = {
    row: css({
        padding: '10px 5px',       
    }),
    number: css({
        color: 'var(--disabled)',
        fontWeight: 400,
        fontSize: '12px',       
    }),
}

//Component
const PhoneList = ({ item, index, preItem, randomColor }: PhoneListProps) => (
    <PhoneStyle>          
        {
            item.first_name[0].toLocaleLowerCase() !== preItem.first_name[0].toLocaleLowerCase() || index == 0 ? (
            <FontHeaderStyle color='white' theme='third' lang='0'>{item.first_name[0].toLocaleUpperCase()}</FontHeaderStyle>) : 
            <FontHeaderStyle color='gray-bg' theme='none' lang='8'> </FontHeaderStyle>
        }           
        
        <ContactStyle css={[flexCenter, isExpand]}>
            <RoundedContactStyle color={randomColor} css={fullFlexCenter}>
                {item.first_name[0].toLocaleUpperCase()}{item.last_name[0].toLocaleUpperCase()}
            </RoundedContactStyle>
            <NameContactStyle>
                <div>
                    {capitalizeFirstLetter(item.first_name)} {capitalizeFirstLetter(item.last_name)}
                </div>
                <div css={phoneRow.number}>
                    {item.phones[0] && item.phones[0].number ? item.phones[0].number : '-'}
                </div>
            </NameContactStyle>
        </ContactStyle>
            <ButtonStyle color='info' lang='5px 0 0 5px'><img src={pencil} alt="SVG Image" /></ButtonStyle>      
            <ButtonStyle color='error' lang='0 5px 5px 0'><img src={trash} alt="SVG Image" /></ButtonStyle>
    </PhoneStyle>
)

export default PhoneList;