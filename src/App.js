import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import { onError } from '@apollo/client/link/error';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimeList from "./components/AnimeList/AnimeList";
import AnimeDetailsPage from "./components/AnimeDetail/AnimeDetailsPage";
import Header from "./components/Header";
import CollectionList from "./components/CollectionList";
import CollectionDetailPage from "./components/CollectionDetail";
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.forEach(({ message, location, path }) => {
      alert(`GraphQL error ${message}`);
    });
  }
});


const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphql.anilist.co" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<AnimeList />} />
            <Route path="/anime/:id" element={<AnimeDetailsPage />} />
            <Route path="/collection" element={<CollectionList />} />
            <Route path="/collections/:collectionName" element={<CollectionDetailPage />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
