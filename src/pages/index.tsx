import { Layout, PhoneList } from '../components'
import { Contact, useGetContact } from '../modules/store/getContact';
import empty from '@/icons/empty.svg';
import styled from '@emotion/styled'
import Input from '../components/Composables/input';
import { Container, ContanctList } from '../components/layout/container';
import { getColorFromName } from '../modules/function/getRandomColor';
import { mq } from '../components/Composables/mediaQuery';
import { fullCenterColumn} from '../style/flex';


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

const Pagination = styled.div({
  minWidth: '600px',
  maxWidth: '600px',
  height: '35px',
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




//layout
const Home = () => {
  //state
  const[contactData, setContactData] = useState([])
  const [request, setRequest] = useState({
    where: {},  
    limit: 10,
    order_by: {
      first_name: 'asc'
    }
  })

  // search
  const handleSearch = (keyword: string | number) => {   
    
    setRequest((prevRequest) => ({
      ...prevRequest,
      where: {
        _or: [
          {first_name: { _ilike: `%${keyword}%` }},
          {last_name: { _ilike: `%${keyword}%` }},
        ]
      }, 
      limit: 10,     
      order_by: {
        first_name: 'asc'
      }
    }))
  }

  //api
  const { loading, data, error } = useGetContact(request);

  //setLocal || getLocal
  useEffect(() => {
    if (!loading && data) {
      setContactData(data.contact || []);
      localStorage.setItem('contact', JSON.stringify(data.contact))
    }
    else{
      const storedData = localStorage.getItem('contact');
      const parsedData = storedData ? JSON.parse(storedData) : [];
      setContactData(parsedData);
    }
  }, [loading, data, error]);

return (
    <Layout>     
      <Container>
        <Input
          type="text"         
          sendChange={handleSearch}
          placeHolder='Search Contact'
        />
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
                <PhoneList item={_c} index={index} preItem={previousItem} randomColor={getColorFromName(_c.first_name, _c.last_name)} />
              </div>
            );
          })}
          <Pagination>
            <div>

            </div>
            <div>

            </div>
          </Pagination>
        </ContanctList>
        }              
      </Container>
    </Layout>
  );
};

export default Home;