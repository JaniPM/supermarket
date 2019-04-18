import React from 'react';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ViewContainer from '../../components/view-container';

const HomeView = () => (
  <Query
    query={gql`
      {
        products {
          _id
          title
          price
          images { url }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;

      return (
        <ViewContainer>
          {data.products.map(({ _id, title }) => (<Text key={_id}>{ title }</Text>))}
        </ViewContainer>
      );
    }}
  </Query>
);

export default HomeView;
