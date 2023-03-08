import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IcLogo, IcStart} from '../../assets';
import {
  Container,
  Gap,
  Header,
  ItemEmpty,
  ItemHistory,
  ItemMenu,
  List,
  TextView,
  Wrapper,
} from '../../components';
import {colors, MENUS} from '../../utils';

const Home = () => {
  const [dataHistory, setDataHistory] = useState([]);

  const insets = useSafeAreaInsets();

  return (
    <Container>
      <Header title="Welcome" IconRight={IcLogo} />

      <Wrapper>
        <TextView style={styles.title}>{'Menus'}</TextView>

        <View style={styles.containerMenu}>
          {MENUS.map((item, index) => (
            <ItemMenu
              key={index}
              data={item}
              isLast={MENUS.length - 1 - index}
            />
          ))}
        </View>
      </Wrapper>

      <Gap height={16} />

      <Wrapper>
        <TextView style={styles.title}>{'History'}</TextView>

        <List
          data={dataHistory}
          renderItem={({}) => <ItemHistory />}
          renderEmpty={() => <ItemEmpty />}
        />
      </Wrapper>

      <View
        style={[
          styles.containerFab,
          {
            bottom: Platform.OS === 'ios' ? insets.bottom : 16,
          },
        ]}>
        <IcStart />
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },

  containerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  containerFab: {
    position: 'absolute',
    right: 16,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 50 / 2,
  },
});
