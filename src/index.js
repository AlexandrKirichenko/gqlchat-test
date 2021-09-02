import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

    const client = new ApolloClient({
        uri: 'https://48p1r2roz4.sse.codesandbox.io',
        cache: new InMemoryCache()
    });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);




// function App() {
//     const client = new ApolloClient({
//         uri: 'https://48p1r2roz4.sse.codesandbox.io',
//         cache: new InMemoryCache()
//     });
//

//
//     function ExchangeRates() {
//         const { loading, error, data } = useQuery(EXCHANGE_RATES);
//
//         if (loading) return <p>Loading...</p>;
//         if (error) return <p>Error :(</p>;
//
//         return data.rates.map(({ currency, rate }) => (
//             <div key={currency}>
//                 <p>
//                     {currency}: {rate}
//                 </p>
//             </div>
//         ));
//     }
//
//     return (
//         <div>
//             <h2>My first Apollo app 🚀</h2>
//             <ExchangeRates />
//         </div>
//     );
// }
//
// export default App;
