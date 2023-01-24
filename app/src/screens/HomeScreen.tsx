import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { DETAILS_SCREEN_ROUTE } from '../navigation/navigation';

const HomeScreen = ( {navigation} ) => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>FeatherDex</Text>
      <Button
        onPress={() => navigation.navigate(DETAILS_SCREEN_ROUTE)} > Go to Details</Button>
      </Layout>
  );

  export default HomeScreen;