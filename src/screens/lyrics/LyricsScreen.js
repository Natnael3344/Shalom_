import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, Text} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LyricsList from './LyricsList';


const renderScene = ({ route }) => {
  switch (route.key) {
    case 'all':
      return <LyricsList style="all" />;
    case 'ballad':
      return <LyricsList style="ballad" />;
    case 'chickchika':
      return <LyricsList style="chickchika" />;
    case 'disco':
      return <LyricsList style="disco" />;
    case 'reggae':
      return <LyricsList style="reggae" />;
    case 'waltz':
      return <LyricsList style="waltz" />;
    case 'rock':
      return <LyricsList style="rock" />;
    default:
      return null;
  }
};

const LyricsScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'all', title: 'All' },
    { key: 'ballad', title: 'Ballad' },
    { key: 'chickchika', title: 'Chickchika' },
    { key: 'disco', title: 'Disco' },
    { key: 'reggae', title: 'Reggae' },
    { key: 'waltz', title: 'Waltz' },
    { key: 'rock', title: 'Wollo and S.Rock' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={{ backgroundColor: '#674fa3' }}
      style={{ backgroundColor: 'white' }}
      renderLabel={({ route, focused, color }) => (
        color='black',
        <Text style={[styles.tabText, { color: focused ? '#674fa3' : color }]}>
          {route.title.length > 20 ? route.title.substring(0, 10) : route.title}
        </Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black'
  },
});

export default LyricsScreen;