import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/main.scss'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'



const client = new ApolloClient({  
  cache: new InMemoryCache(),
  uri: import.meta.env.VITE_API
}); 


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
