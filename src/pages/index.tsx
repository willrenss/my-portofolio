import { useState, useEffect } from 'react';
import Layout from "../components/layout/layout";
import axios from 'axios';

interface Player {
  id: string;
  name: string;
  age: number;
  birthPlace: string;
}

const Home = () => {
  const [data, setData] = useState<Player[]>([]);
  const [playerData, setPlayerData] = useState<Player | null>(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    age: 0,
    birthPlace: ''
  });

  const handleChange = (event: string) => {
    setSelectedOption(event);
    setShowOptions(false);
    setPlayerData(null);
    fetchData(event);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (birthPlace?: string) => {
    try {
      let url = 'https://localhost:7004/api/Player';
      if (birthPlace) {
        url += `?birthPlace=${encodeURIComponent(birthPlace)}`;
      }
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRequest = async (itemId: string) => {
    try {
      const response = await axios.get('https://localhost:7004/api/Player/' + itemId);
      setPlayerData(response.data);
    } catch (error) {
      console.error('Error fetching player data:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPlayer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const postData = async () => {
    try {
      // Send POST request with new player data
      await axios.post('https://localhost:7004/api/Player', newPlayer);

      // Fetch updated data
      fetchData();

      // Reset input fields
      setNewPlayer({        
        name: '',
        age: 0,
        birthPlace: ''
      });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <Layout>
      <section>
        <div id='myprofile' className='background-section-first'>
          <div className='container-layout fullCenter-flex flex-column'>
            <div className='fullCenter-flex isWrap home-layout'>
              <div className="wd-800-max txt-left">
                <div className="dropdown mb-10">
                  <div className='mb-10'>
                    <h2>Tambah Pemain Baru</h2>
                    <input type="text" name="name" value={newPlayer.name} onChange={handleInputChange} placeholder="Name" />
                    <input type="number" name="age" value={newPlayer.age} onChange={handleInputChange} placeholder="Age" />
                    <input type="text" name="birthPlace" value={newPlayer.birthPlace} onChange={handleInputChange} placeholder="Birth Place" />
                    <button onClick={postData}>Tambah</button>
                  </div>
                  <div className="select" onClick={() => setShowOptions(!showOptions)}>
                    {selectedOption || 'Semua'}
                  </div>
                  <div className={`option-list ${showOptions ? 'show' : ''}`}>
                    <div className="option" onClick={() => handleChange('')}>Semua</div>
                    <div className="option" onClick={() => handleChange('Europe')}>Europe</div>
                    <div className="option" onClick={() => handleChange("South America")}>South America</div>
                  </div>
                </div>
                {data.map((item, index) => (
                  <div className="card isClickAble" key={index} onClick={() => handleRequest(item.id)}>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex-column'>
              <h1>Data Pemain</h1>            
              {playerData ? (
                <>
                  <p className="card-text">Age: {playerData.age}</p>
                  <p className="card-text">Birth Place: {playerData.birthPlace}</p>
                </>
              ) : (
                <p>No player data selected</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;