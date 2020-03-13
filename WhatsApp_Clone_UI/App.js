import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Chat from './app/chat'
import Status from './app/status'
import Call from './app/call'

console.disableYellowBox = true

const FirstRoute = () => (
  <Chat />
);

const SecondRoute = () => (
  <Status />
);

const ThirdRoute = () => (
  <Call />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Chats' },
    { key: 'second', title: 'Status' },
    { key: 'third', title: 'Calls' }
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.HeaderText}>WhatsApp</Text>
        <Image style={styles.logo} source={require('./assets/search.png')} />
        <Image style={[styles.logo, { marginLeft: '7%' }]} source={require('./assets/more.png')} />
      </View>

      <TabView style={styles.tab}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white', height: 1 }}
            style={{ backgroundColor: "#16a085", height: '8%' }}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'flex-start'
  },
  header:
  {
    height: '8%',
    justifyContent: 'flex-start',
    backgroundColor: '#16a085',
    flexDirection: 'row'
  },
  HeaderText:
  {
    marginLeft: '4.5%',
    marginTop: '2.5%',
    marginStart: 2,
    fontSize: 25,
    fontWeight: '100',
    color: 'white'
  },
  logo:
  {
    height: 25,
    width: 25,
    marginTop: '2.5%',
    marginLeft: '42%',
    alignItems: 'center'
  },
  tab:
  {
    backgroundColor: 'white',
  },
});