import { Layout, PhoneList } from '../components'
import { Contact, useGetContact } from '../modules/store/getContact';
import empty from '@/icons/empty.svg';
import styled from '@emotion/styled'
import Input from '../components/Composables/input';
import { Container, ContanctList } from '../components/layout/container';
import { getColorFromName } from '../modules/function/getRandomColor';
import { mq } from '../components/Composables/mediaQuery';
import { fullCenterColumn} from '../style/flex';
import arrowLeft from '@/icons/arrow-left-bold.svg';
import arrowRight from '@/icons/arrow-right-bold.svg';
import Dropdown from '../components/Composables/dropdown';
import Modal from '../components/Composables/modal';
import { IconButtonStyle } from '../components/Composables/iconButton';
import { ButtonStyle } from '../components/Composables/button';


//style
const EmptyDataStyle = styled.div({
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

const ContentHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  [mq[2]]: {
   flexWrap: 'wrap'
  },
})

const Pagination = styled.div({
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
  },
  [mq[0]]: {
    minWidth: '250px',
    maxWidth: '250px',
  },
})


const DropdownPaginationStyle = styled.div({
  minWidth: '255px',
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
  }
})

const PagesStyle = styled.div({
  display: 'flex',
  alignItems: 'center',
  p:{
    padding: '10px 10px',
    color: 'var(--disabled)',
    fontSize: '14px'
  }, 
})


//layout
const Home = () => {
  //stateData
  const [contactData, setContactData] = useState([])

  //statePagination
  const [countData, setCountData] = useState(0)
  const [countPage, setCountPage] = useState(1)
  const [searchData, setSearchData] = useState('')
  const [limitData, setLimitData] = useState(10)
  const [offsetData, setOffsetData] = useState(0)

  //stateComponent
  const [modal, setModal] = useState(false)
  //requestData
  const [request, setRequest] = useState({
    where: {},
    limit: limitData,
    offset: offsetData,
    order_by: {
      first_name: 'asc'
    }
  })
 

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
    }))
  }

  //modalComponent

  //search
  const handleSearch = (keyword: string | number) => {    
    setSearchData(keyword.toString())
    handleSetRequest(0, keyword, limitData)
  }

  //paginationLimit
  const handleLimitData = (value: number) => {    
    setLimitData(value)
    setOffsetData(0)
    setCountPage(1)
    handleSetRequest(0, searchData, value)
  }

 
  //paginationButtonOffset
  const handlePagination =  async (info: string, offset: number) => {
    if(info === 'previous')
      setCountPage(countPage - 1)
    else
      setCountPage(countPage + 1)      
    
    setOffsetData(offset)
    handleSetRequest(offset, searchData, limitData)
    
    if(offset < 0)
      setOffsetData(0)

   
  }
  
  //api
  const { loading, data, error, count } = useGetContact(request);

  //setLocal || getLocal
  useEffect(() => {
    if (!loading && data) {
      setContactData(data.contact || []);
      setCountData(count);
      localStorage.setItem('contact', JSON.stringify(data.contact))
    }
    else{
      const storedData = localStorage.getItem('contact');
      setCountData(count);
      const parsedData = storedData ? JSON.parse(storedData) : [];
      setContactData(parsedData);
    }
  }, [loading, data, error, count]);

return (
    <Layout>     
    <Modal title='Add Contact' closeModal={e => setModal(e)} isOpen={modal} 
    
      content={
        <><Input
          type="text"
          sendChange={handleSearch}
          placeHolder='First Name'
          />
        <Input
          type="text"
          sendChange={handleSearch}
          placeHolder='Last Name'
        />
        <Input
          type="text"
          sendChange={handleSearch}
          placeHolder='Phone'
        ></Input>
        </>
      }
    />  
           
      <Container>
        <ContentHeader>
          <Input
            type="text"         
            sendChange={handleSearch}
            placeHolder='Search Contact'
          />
        <ButtonStyle size='20%' color='primary' radius='5px' content='20%' onClick={() => setModal(!modal)} > Add Contact</ButtonStyle>
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
                <PhoneList item={_c} index={index} preItem={previousItem} randomColor={getColorFromName(_c.first_name, _c.phones[0]?.number, _c.last_name)} />
              </div>
            );
          })}
          <Pagination>
            <DropdownPaginationStyle>
              <p>Items per page</p>
              <Dropdown
                defaultValue={limitData != 10 ? limitData : 10}
                options={[100, 50, 25, 10, 5]}
                onSelect={selectedOption => handleLimitData(Number(selectedOption))}
              />
              <p>{`${offsetData + 1} - ${countData <= limitData + offsetData ?  countData : limitData + offsetData} of ${countData} items`}</p>
            </DropdownPaginationStyle>           
            <PagesStyle>
              <IconButtonStyle 
                size={25}
                minMax={15} 
                color={offsetData === 0 ? 'neutral' : 'primary'} 
                disabled={offsetData === 0 ? true : false} 
                radius='100%'>
                  <img src={arrowLeft} alt="SVG Image" onClick={() => handlePagination('previous', offsetData - limitData)}/>
                </IconButtonStyle>
              <p>{countPage}</p>
              <IconButtonStyle 
                size={25}
                minMax={15} 
                color={countData <= limitData + offsetData ? 'neutral' : 'primary'} 
                disabled={countData <= limitData + offsetData ? true : false} 
                radius='100%'>
                  <img src={arrowRight} alt="SVG Image" onClick={() => handlePagination('next', offsetData + limitData)} />
               </IconButtonStyle>    
            </PagesStyle>           
          </Pagination>
        </ContanctList>
        }              
      </Container>
    </Layout>
  );
};

export default Home