import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { API_URL_GRAPHQL } from './Constants';
import { store } from './store';

const httpLink = createHttpLink({
	uri: API_URL_GRAPHQL,
});

const authLink = setContext((_, { headers }) => {
	// TODO: Add headers
	const {
		auth: { token },
	} = store.getState();

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default client;
