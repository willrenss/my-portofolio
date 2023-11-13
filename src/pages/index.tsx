import styled from '@emotion/styled'
import { mq } from '../components/Composables/mediaQuery';
import { Layout, PhoneList } from '../components';
import { Contact, Phone, PhoneObj, useGetContact, useGetPhoneList } from '../modules/store/getContact';
import empty from '@/icons/empty.svg';
import plus from '@/icons/plus.svg';
import Input from '../components/Composables/input';
import { Container, ContanctList } from '../components/layout/container';
import { getColorFromName } from '../modules/function/getRandomColor';
import { fullCenterColumn, fullFlexCenter} from '../style/flex';
import arrowLeft from '@/icons/arrow-left-bold.svg';
import arrowRight from '@/icons/arrow-right-bold.svg';
import Dropdown from '../components/Composables/dropdown';
import Modal from '../components/Composables/modal';
import { IconButtonStyle } from '../components/Composables/iconButton';
import { ButtonStyle } from '../components/Composables/button';
import { getCountDataStorage, getCountPageDataStorage, getLimitDataStorage, getLocalStorage, getOffsetDataStorage, getSearchStorage } from '../modules/store/localStorage';
import Alert from '../components/Composables/alert';
import { useAddContact } from '../modules/store/addDataContacts';
import { favFix } from '../modules/function/functionFav';
import { isExpand } from '../style/width';
import { useEditContact } from '../modules/store/editContact';
import { useEditPhone } from '../modules/store/editPhone';

//style
export const EmptyDataStyle = styled.div({
  minWidth: '600px',
  maxWidth: '600px',
  height: '100vh',
  p:{
    color: 'var(--primary)',
    fontSize: '32px',
    fontWeight: 'bold',
  },
  img: {
    minWidth: '150px',
    maxWidth: '150px',
    maxHeight: '150px',
    minHeight: '150px',
  },
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
})

export const ContentHeader = styled.div({
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  minWidth: '600px',
  maxWidth: '600px',
  transition: 'all 0.25s ease-out',
  [mq[2]]: {
    minWidth: '550px',
    maxWidth: '550px',
   flexWrap: 'wrap'
  }, 
  [mq[1]]: {
    minWidth: '350px',
    maxWidth: '350px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  [mq[0]]: {
    minWidth: '250px',
    maxWidth: '250px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})


const RoundedContactStyle = styled.div({  
  borderRadius: '100%',
  padding: '10px',
  marginBottom: '20px',
  color: 'white',
  fontWeight: 500,
  minWidth: '50px',
  maxWidth: '50px',
  maxHeight: '50px',
  minHeight: '50px',
  transition: 'all 0.25s ease-out',
}, props => ({ backgroundColor: props.color }))

export const Pagination = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '600px',
  maxWidth: '600px',  
  padding: '5px',
  borderRadius: '5px',
  border: '1px solid var(--gray-border)', 
  backgroundColor:'var(--white)',
  transition: 'all 0.25s ease-out',
  boxSizing: 'border-box',
  [mq[2]]: {
    minWidth: '550px',
    maxWidth: '550px',   
  },
  [mq[1]]: {
    minWidth: '350px',
    maxWidth: '350px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  [mq[0]]: {
    minWidth: '250px',
    maxWidth: '250px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})


export const DropdownPaginationStyle = styled.div({
  minWidth: '260px',
  maxWidth: '255px', 
  display: 'flex',
  alignItems: 'center',
  'p:nth-of-type(1)': {
    minWidth: '34px',
    color: 'var(--disabled)',
    fontSize: '12px'
  },
  'p:nth-of-type(2)': {
    minWidth: '34px',
    color: 'var(--disabled)',
    fontSize: '12px'
  },
  'div:first-of-type': {
    minWidth: '56px',
    maxWidth: '56px', 
    margin: '0px 5px'
  },
  [mq[0]]: {
  flexDirection: 'column',
    'div:first-of-type': {   
      margin: '8px 0px'
    },
},
})

export const PagesStyle = styled.div({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',  
  'p:nth-of-type(1)': {   
    color: 'var(--primary)',
    fontWeight: 500,
    fontSize: '15px',    
    marginTop: '-1px',
    marginLeft: '4px',
    marginRight: '4px'
  },
  'p:nth-of-type(2)': {
    color: 'var(--disabled)',
    fontSize: '11px',   
    marginRight: '4px'   
  }, 
  [mq[1]]: {
    marginTop: '10px'
  },
  [mq[0]]: {
    marginTop: '10px'
  },
})

export const ContainerInputName = styled.div({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center', 
  justifyContent: 'center',
  'div:nth-of-type(1)': {   
    marginRight:'5px',
  },
  'div:nth-of-type(2)': {    
    marginLeft: '4px'   
  },
  [mq[2]]: {
    flexWrap: 'wrap',
     'div:nth-of-type(1)': {
      marginRight: '0px',
    },
    'div:nth-of-type(2)': {      
      marginLeft: '0px'
    },
  },
})


export const ButtonAddContainer = styled.div({
  marginTop:'10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  width:'100%'
})

const getFirstNonSpaceCharacter = (inputString: string) => {
  const trimmedString = inputString.trim();
  if (trimmedString.length === 0) {
    return null;
  }
  return trimmedString[0];
}

//layout
export const Home = () => {
  //stateData
  const [contactData, setContactData] = useState(getLocalStorage);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [typeAlert, setTypeAlert] = useState('success');

  //statePagination  
  const [countData, setCountData] = useState(getCountDataStorage);
  const [countPage, setCountPage] = useState(getCountPageDataStorage);
  const [searchData, setSearchData] = useState(getSearchStorage);
  const [limitData, setLimitData] = useState(getLimitDataStorage);
  const [offsetData, setOffsetData] = useState(getOffsetDataStorage);
 
  //addEditData
  const [id, setID] = useState(0);
  const [idContact, setIDContact] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [lastPhone, setLastPhone] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState([{
    contact: {
      first_name: '',
      last_name: '',
      id: 0
    },
    number: ''
  }]);

  const { addC } = useAddContact({})
  const { editFav } = useEditContact({})
  const { editP } = useEditPhone({})
  const handlerEditData = (firstName: string, lastName: string) => {
    editFav({
      variables: {
        id: id,
        _set: {
          first_name: firstName,
          last_name: lastName
        }
      },    
    }).then(() => {
      setAlertMsg('Edit Name Success')
      setShowAlert(true)
      setModal('')
      setTypeAlert('success')
      setTimeout(() => window.location.reload(), 1500)
    }).catch(() => {
      setAlertMsg('Edit Name Failed')
      setTypeAlert('error')
      setShowAlert(true)
    });     
  }


  const handlerEditPhone = (newNumber: string) => {
    editP({
      variables: {
        pk_columns: {
          number: lastPhone,
          contact_id: idContact
        },
        new_phone_number: newNumber
      },
    }).then(() => {
      setAlertMsg('Edit Phone Contact Success')
      setShowAlert(true)
      setModalP('')
      setModal('')
      setTypeAlert('success')
      setTimeout(() => window.location.reload(), 1500)
    }).catch(() => {
      setAlertMsg('Failed Edit Phone Contact [Number Phone Must Be Unique]')
      setTypeAlert('error')
      setShowAlert(true)
    });     
  }

  const handlerNewPhone =( data: string) =>{
    setNewPhone(data)
  }

  const hanlderAddData = (firstName: string, lastName: string, phones: Phone[]) => {
    addC({
      variables: {
        first_name: firstName,
        last_name: lastName,
        phones: phones
      },
    }).then( () => {      
      setAlertMsg('Add Contact Success')
      setShowAlert(true)
      setModal('')
      setTypeAlert('success')
      setTimeout(() => window.location.reload(), 1500)
    }).catch(() => {      
        setAlertMsg('Failed Add Contact [Name and Number Phone Must Be Unique]')
        setTypeAlert('error')
        setShowAlert(true)
      });     
  }

  const handlerFirstName = (e: string) => {
    setFirstName(e)   
  };

  const handlerLastName = (e: string) => {
    setLastName(e)
  };

  const handlePhoneChange = (e:string | number, index:number) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index].number = e.toString();
    setPhoneNumbers(newPhoneNumbers);
  };

  const addPhoneNumber = () => {
    const newPhoneNumbers = [...phoneNumbers, {
      number: '', 
      contact: {
        first_name: '',
        last_name: '',
        id: 0
      },
}];
    setPhoneNumbers(newPhoneNumbers);
  };


  //stateComponent
  const [modal, setModal] = useState('');
  const [modalP, setModalP] = useState('');

  //requestData
  const [request, setRequest] = useState({
    where: {
      _or: [
        { first_name: { _ilike: `%${searchData}%` } },
        { last_name: { _ilike: `%${searchData}%` } },
      ]
    },
    limit: limitData,
    offset: offsetData,
    order_by: {
      first_name: 'asc',
      last_name: 'asc'
    },
    distinct_on: ["first_name", "last_name"],
  });

  const [requestP, setRequestP] = useState({
    where: {
      contact: {
        first_name: {
          _like: 'A'
        },
        last_name: {
          _like: 'A'
        }
      }
    }
  });
  
  const [whereData, setWhereData] = useState({
    where: {
      _or: [
        { first_name: { _ilike: `%${searchData}%` } },
        { last_name: { _ilike: `%${searchData}%` } },      ],         
    },
    order_by: {
      first_name: 'asc',
      last_name: 'asc'
    },
    distinct_on: ["first_name", "last_name"],
    
  });

  //modalComponent
  const handlerOpenAddModal = (modal:string) => {
    setModal(modal)
    setFirstName('')
    setLastName('')
    setPhoneNumbers([{
      number: '',
      contact: {
      first_name: '',
      last_name: '',
      id: 0
      },
    }])
  }

  const handlerEditPhoneModal = (data: PhoneObj, modal: string) => {
    setIDContact(data.contact.id)
    setModalP(modal)
    setLastPhone(data.number)
  }

  const handlerModalEditShow = (data:Contact, modal: string) => {
    setModal(modal)
    setID(data.id)
    setFirstName(favFix(data.first_name))
    setLastName(data.last_name)
    setRequestP((prevRequest) => ({
      ...prevRequest,
      where: {
        contact: {
          first_name: {
            _like: data.first_name
          },
          last_name: {
            _like: data.last_name
          }
        }
      }
    }) )   
  }

  const handleEditFavorite = (e: boolean) => {    
    setAlertMsg('Change Favorite Contact Success')
    setTimeout(() => window.location.reload(),500)
    setShowAlert(e)    
  }

  const handlerDelete = (e: boolean) => {
    setAlertMsg('Delete Contact Success')
    setTimeout(() => window.location.reload(), 500)
    setShowAlert(e)
  }
  

  const handleSetRequest = (offset: number, search: string | number, limit: number) => {
    setRequest((prevRequest) => ({
      ...prevRequest,
      where: {
        _or: [
          { first_name: { _ilike: `%${search}%` } },
          { last_name: { _ilike: `%${search}%` } },
        ]
      },
      offset: offset,
      limit: limit,
      order_by: {
        first_name: 'asc',
        last_name: 'asc'
      },     
      distinct_on: ["first_name", "last_name"],
    }));

    setWhereData((prevRequest) => ({
      ...prevRequest,
      where: {
        _or: [
          { first_name: { _ilike: `%${search}%` } },
          { last_name: { _ilike: `%${search}%` } },
        ]
      },
      order_by: {
        first_name: 'asc',
        last_name: 'asc'
      },
      distinct_on: ["first_name", "last_name"],
    }));
  };

  
  //search
  const handleSearch = (keyword: string | number) => {
    setSearchData(keyword.toString());
    setOffsetData(0);
    handleSetRequest(0, keyword, limitData);
    setCountPage(1),
      localStorage.setItem('offset', '0');
    localStorage.setItem('countPage', '1');
    localStorage.setItem('search', keyword.toString());
  };

  //paginationLimit
  const handleLimitData = (value: number) => {
    setLimitData(value);
    setOffsetData(0);
    setCountPage(1);
    localStorage.setItem('offset', '0');
    localStorage.setItem('countPage', '1');
    localStorage.setItem('limit', value.toString());
    handleSetRequest(0, searchData, value);
  };

 
  //paginationButtonOffset
  const handlePagination = async (info: string, offset: number) => {
    setOffsetData(offset);
    if (info === 'previous') {
      setCountPage(countPage - 1);
      handleSetRequest(offset, searchData, limitData);
      localStorage.setItem('offset', offset.toString());
      localStorage.setItem('countPage', (countPage - 1).toString());
    }
    else {
      setCountPage(countPage + 1);
      handleSetRequest(offset, searchData, limitData);
      localStorage.setItem('offset', offset.toString());
      localStorage.setItem('countPage', (countPage + 1).toString());
    }

    if (offset < 0) {
      setOffsetData(0);
      localStorage.setItem('offset', '0');
    }

  };

  //api
  const { loading, data, error, count } = useGetContact(request, whereData);
  const { loading:loadingP, data:dataP } = useGetPhoneList(requestP);
  //setLocal || getLocal
  useEffect(() => {
    if (!loading && data && count) {
      setContactData(data.contact);
      setCountData(count);
      localStorage.setItem('count', count);
      localStorage.setItem('contact', JSON.stringify(data.contact));
    }
    else {
      setCountData(getCountDataStorage);
      setContactData(getLocalStorage);
    }

    if (showAlert){
      setTimeout( ()=> setShowAlert(false), 500)
    }

    if (!loadingP && dataP) {
      setPhoneNumbers(dataP.phone === null ? { phone: [] } : dataP.phone);      
    }

  }, [loading, data, error, count, showAlert,loadingP,dataP]);

  return (
    <Layout>
      <Alert type={typeAlert} isShow={showAlert}
      >
        <div>{alertMsg}</div>
      </Alert>
      {/* edit-phone-modal */}
      <Modal title='Edit Phone' closeModal={e => setModalP(e)} isOpen={modalP === 'phone'}
        higherIndex={true}
        content={<>
          <div css={[isExpand, fullFlexCenter]}>
            <RoundedContactStyle color={getColorFromName(firstName, '', lastName)} css={fullFlexCenter}>
              {(getFirstNonSpaceCharacter(favFix(firstName)) || '').toLocaleUpperCase()}{(getFirstNonSpaceCharacter(lastName) || '').toLocaleUpperCase()}
            </RoundedContactStyle>
          </div>
          <Input
            type="text"
            label='Last Phone Number'
            value={lastPhone}
            disabled={true}
            regex={/^(?:\+62|0)[0-9]{9,13}$/}
            errorMsg='Phonenumber Not Valid'
            sendChange={(e) => console.log(e)}
            placeHolder='New Phone Number' />
          <Input
            type="text"
            label='New Phone'
            value={newPhone}
            regex={/^(?:\+62|0)[0-9]{9,13}$/}
            errorMsg='Phonenumber Not Valid'
            sendChange={(e) => handlerNewPhone(e.toString())}
            placeHolder='New Phone Number' />

        </>}
        action={
          <>
            <ButtonStyle size='20%' color='secondary' radius='5px' content='20%' onClick={() => setModalP('')}> Cancel</ButtonStyle>
            <ButtonStyle size='20%' color='primary' radius='5px' content='20%' onClick={() => handlerEditPhone(newPhone)}> Edit </ButtonStyle>
          </>
        } />




      {/* add-modal */}
      <Modal title='Add Contact' closeModal={e => setModal(e)} isOpen={modal === 'add'}     
        content={<>
        <div css={[isExpand, fullFlexCenter]}>
            <RoundedContactStyle color={getColorFromName(firstName, '', lastName)} css={fullFlexCenter}>
              {(getFirstNonSpaceCharacter(favFix(firstName)) || '').toLocaleUpperCase()}{(getFirstNonSpaceCharacter(lastName) || '').toLocaleUpperCase()}
            </RoundedContactStyle>
        </div>          
          <ContainerInputName>            
            <Input
              type="text"
              label='First Name'
              value={firstName}
              regex={/^[A-Za-z\s]+$/}
              errorMsg='Data is Required || Without Spescial Character'
              sendChange={(e) => handlerFirstName(e.toString())}
              placeHolder='First Name' />
            <Input
              label='Last Name'
              type="text"
              value={lastName}
              regex={/^[A-Za-z\s]+$/}
              errorMsg='Data is Required || Without Spescial Character'
              sendChange={(e) => handlerLastName(e.toString())}
              placeHolder='Last Name' />
            </ContainerInputName>
          {phoneNumbers.map((phoneNumber: Phone, index: number) => (
            <Input
              key={index}
              type="text"
              label={`Phone ${index + 1}`}
              regex={/^(?:\+62|0)[0-9]{9,13}$/}
              errorMsg='Phonenumber Not Valid'
              value={phoneNumber.number}
              sendChange={(e) => handlePhoneChange(e, index)}
              placeHolder={`Phone ${index + 1}`}
            />
          ))}
          <ButtonAddContainer>
            <IconButtonStyle
              size={25}
              minMax={15}
              color='secondary'
              radius='100%' onClick={addPhoneNumber}>
              <img src={plus} alt="SVG Image" />
            </IconButtonStyle>
          </ButtonAddContainer>
          
        </>} 
        action = {
          <>        
            <ButtonStyle size='20%' color='secondary' radius='5px' content='20%' onClick={() => setModal('')}> Cancel</ButtonStyle>
            <ButtonStyle size='20%' color='primary' radius='5px' content='20%' onClick={ ()=> hanlderAddData(firstName,lastName, phoneNumbers)}> Add </ButtonStyle>                 
          </>
        }/>     

      {/* edit-modal */}
      <Modal title='Edit Contact' closeModal={e => setModal(e)} isOpen={modal === 'edit'}
        
        content={<>         
          <div css={[isExpand, fullFlexCenter]}>
            <RoundedContactStyle color={getColorFromName(firstName, '', lastName)} css={fullFlexCenter}>
              {(getFirstNonSpaceCharacter(favFix(firstName)) || '').toLocaleUpperCase()}{(getFirstNonSpaceCharacter(lastName) || '').toLocaleUpperCase()}
            </RoundedContactStyle>
          </div>
          <ContainerInputName>
            <Input
              type="text"
              label='First Name'
              value={firstName}
              regex={/^[A-Za-z\s]+$/}
              errorMsg='Data is Required || Without Spescial Character'
              sendChange={(e) => handlerFirstName(e.toString())}
              placeHolder='First Name' />
            <Input
              label='Last Name'
              type="text"
              value={lastName}
              regex={/^[A-Za-z\s]+$/}
              errorMsg='Data is Required || Without Spescial Character'
              sendChange={(e) => handlerLastName(e.toString())}
              placeHolder='Last Name' />
          </ContainerInputName>
          {phoneNumbers.map((phoneNumber: PhoneObj, index: number) => (
            <div key={index} onClick={() => handlerEditPhoneModal(phoneNumber,'phone')}>
              <Input              
                type="text"                           
                label={`Phone ${index + 1}`}
                regex={/^(?:\+62|0)[0-9]{9,13}$/}
                errorMsg='Phonenumber Not Valid'                   
                value={phoneNumber.number}
                sendChange={(e) => handlePhoneChange(e, index)}
                placeHolder={`Phone ${index + 1}`}
              />
            </div>
          ))}
        </>}
        action={
          <>
            <ButtonStyle size='20%' color='secondary' radius='5px' content='20%' onClick={() => setModal('')}> Cancel</ButtonStyle>
            <ButtonStyle size='20%' color='primary' radius='5px' content='20%' onClick={() => handlerEditData(firstName, lastName)}> Edit </ButtonStyle>
          </>
        } />
      <Container>        
        <ContentHeader>
          <Input
            type="search"
            value={getSearchStorage()}
            sendChange={(e) => handleSearch(e)}
            placeHolder='Search Contact' />
          <ButtonStyle size='20%' color='primary' radius='5px' content='20%' onClick={() => handlerOpenAddModal('add')}> Add Contact</ButtonStyle>
        </ContentHeader>
        {contactData.length <= 0 ?
          <EmptyDataStyle css={fullCenterColumn}>
            <img src={empty} alt="SVG Image" />
            <p>Data Not Found</p>
          </EmptyDataStyle> :
          <ContanctList>
            {contactData.map((_c: Contact, index: number) => {
              const previousItem = index > 0 ? contactData[index - 1] : _c;
              return (
                <div key={_c.id}>
                  <PhoneList 
                    onEditContact={(e,d) => handlerModalEditShow(e,d)}
                    onDeleteContact={(e) => handlerDelete(e)} 
                    onMutationCompleted={(e) => handleEditFavorite(e)} 
                    item={_c} index={index} preItem={previousItem} 
                    randomColor={getColorFromName(_c.first_name, _c.phones[0]?.number, _c.last_name)} />
                </div>
              );
            })}
            <Pagination>
              <DropdownPaginationStyle>
                <p>Items per page</p>
                <Dropdown
                  defaultValue={limitData != 10 ? limitData : 10}
                  options={[100, 50, 25, 10, 5]}
                  onSelect={selectedOption => handleLimitData(Number(selectedOption))} />
                <p>{`${offsetData + 1} - ${countData <= limitData + offsetData ? countData : limitData + offsetData} of ${countData} items`}</p>
              </DropdownPaginationStyle>
              <PagesStyle>
                <IconButtonStyle
                  size={25}
                  minMax={15}
                  color={offsetData === 0 ? 'neutral' : 'primary'}
                  disabled={offsetData === 0 ? true : false}
                  radius='100%' onClick={() => handlePagination('previous', offsetData - limitData)}>
                  <img src={arrowLeft} alt="SVG Image" />
                </IconButtonStyle>
                <p>{`${countPage}`} </p>
                <p>{`of ${Math.ceil(countData / limitData)}`}</p>
                <IconButtonStyle
                  size={25}
                  minMax={15}
                  color={countData <= limitData + offsetData ? 'neutral' : 'primary'}
                  disabled={countData <= limitData + offsetData ? true : false}
                  radius='100%' onClick={() => handlePagination('next', offsetData + limitData)}>
                  <img src={arrowRight} alt="SVG Image" />
                </IconButtonStyle>
              </PagesStyle>
            </Pagination>
          </ContanctList>}
      </Container>
    </Layout>
  );
};

export default Home
