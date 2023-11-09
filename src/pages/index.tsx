import { css } from '@emotion/react'
import { Layout } from '../components'
import { Contact, useGetContact } from '../modules/getContact';


const container = css({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 10px',
  transition: 'all 0.25s ease-out',
})

const Container = ({ children } : { children: React.ReactNode }) => (
  <div css={container}>
    {children}
  </div>
)

const Home = () => {
  const[contactData, setContactData] = useState([]);

  const request = { 
    where: {}, 
    limit: 10,    
    order_by: { 
      first_name: 'asc' 
    } 
  };

  const { loading, data, error } = useGetContact(request);
 
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
 
  if(loading) return ''
  
  return (
    <Layout>     
      <Container>
        <div> {contactData.map((_c: Contact) => (          
          <div key={_c.id}>
            {_c.first_name} {_c.last_name}
           </div>          
        ))}</div>
      </Container>
    </Layout>
  );
};

export default Home;