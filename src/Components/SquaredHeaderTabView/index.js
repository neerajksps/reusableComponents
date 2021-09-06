import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

/**
 *
 * @param {props} firstComponent - render first component of tab view
 * @param {props} secondComponent - render second component of tab view
 * @param {props} thirdComponent - render third component of tab view
 * @param {props} fourthComponent - render fourth component of tab view
 * @param {props} firstTabColor - color of first tab
 * @param {props} secondTabColor - color of second tab
 * @param {props} firstTabColor - color of first tab
 * @param {props} secondTabColor - color of second tab
 * @param {props} thirdTabColor - color of third tab
 * @param {props} fourthTabColor - color of fourth tab
 * @param {props} firstTabLabel - label of first tab
 * @param {props} secondTabLabel - label of second tab
 * @param {props} thirdTabLabel - label of third tab
 * @param {props} fourthTabLabel - label of fourth tab
 * @param {props} tabWholeViewDimension - dimension of whole view
 * @param {props} tabLabelStyle - style of tabs label
 * @param {props} currentTabIndex - returns current tab index
 * @returns
 */

let percentage, rotationPercentage;
const SquaredHeaderTabView = (props) => {
  const { 
    firstComponent,
    secondComponent,
    thirdComponent,
    fourthComponent,
    firstTabColor,
    secondTabColor,
    thirdTabColor,
    fourthTabColor,
    firstTabLabel,
    secondTabLabel,
    thirdTabLabel,
    fourthTabLabel,
    tabWholeViewDimension,
    tabLabelStyle,
    currentTabIndex
  } = props;
  const [rotationalValue, setRotationalValue] = useState(0);
  const scrollView = useRef(null);

  const rotationAnimatedStyle = {
    position: 'absolute',
    transform: [{rotate: `${rotationalValue}deg`}],
  };

  const onTabPress = (rotationalValue) => {
    scrollView.current.scrollTo({
      x: rotationalValue * Dimensions.get('window').width,
    });
  };

  const renderTabs = () => {
    return (
      <View style={styles.eachViewContiner}>
        <View style={[styles.boxWholeView(tabWholeViewDimension)]}>
          <View style={styles.eachBoxView(firstTabColor,tabWholeViewDimension / 2)}>
            <Text style={tabLabelStyle || styles.tabLabel}>{firstTabLabel}</Text>
          </View>
          <View style={styles.eachBoxView(secondTabColor,tabWholeViewDimension / 2)}>
            <Text style={tabLabelStyle || styles.tabLabel}>{secondTabLabel}</Text>
          </View>
          <View style={styles.eachBoxView(thirdTabColor,tabWholeViewDimension / 2)}>
            <Text style={tabLabelStyle || styles.tabLabel}>{thirdTabLabel}</Text>
          </View>
          <View style={styles.eachBoxView(fourthTabColor,tabWholeViewDimension / 2)}>
            <Text style={tabLabelStyle || styles.tabLabel}>{fourthTabLabel}</Text>
          </View>
        </View>
        <Animated.View style={[styles.boxWholeView(tabWholeViewDimension), rotationAnimatedStyle]}>
          <View style={styles.eachBoxView('transparent', tabWholeViewDimension / 2)} />
          <View style={[styles.eachBoxView(null, tabWholeViewDimension /2), styles.blackSheetOverlay]} />
          <View style={[styles.eachBoxView(null,tabWholeViewDimension /2), styles.blackSheetOverlay]} />
          <View style={[styles.eachBoxView(null, tabWholeViewDimension /2), styles.blackSheetOverlay]} />
        </Animated.View>
        <View style={[styles.boxWholeView(tabWholeViewDimension), {position: 'absolute'}]}>
          <TouchableOpacity
            style={styles.eachBoxView('transparent', tabWholeViewDimension /2)}
            onPress={() => onTabPress(0)}
          />
          <TouchableOpacity
            style={styles.eachBoxView('transparent', tabWholeViewDimension/2)}
            onPress={() => onTabPress(1)}
          />
          <TouchableOpacity
            style={styles.eachBoxView('transparent', tabWholeViewDimension/2)}
            onPress={() => onTabPress(3)}
          />
          <TouchableOpacity
            style={styles.eachBoxView('transparent', tabWholeViewDimension/2)}
            onPress={() => onTabPress(2)}
          />
        </View>
      </View>
    );
  };

  const renderScrollItems = () => {
    return (
      <ScrollView
      ref={scrollView}
      pagingEnabled
      contentContainerStyle={{marginTop: 20, }}
      horizontal
      onScroll={(event) => {
        percentage = Math.round(
          (event.nativeEvent.contentOffset.x /
            Dimensions.get('window').width) *
            100,
        );
        rotationPercentage = (percentage / 100) * 90;
        setRotationalValue(rotationPercentage);
      }}
      scrollEventThrottle={16}>
      <View style={styles.eachTabComponentView}>
        {firstComponent()}
      </View>
      <View style={styles.eachTabComponentView}>
        {secondComponent()}
      </View>
      <View style={styles.eachTabComponentView}>
        {thirdComponent()}
      </View>
      <View style={styles.eachTabComponentView}>
        {fourthComponent()}
      </View>
    </ScrollView>
    )
  }

  useEffect(() => {
    switch(rotationalValue) {
      case 0:
      currentTabIndex(1);
      break;
      case 90:
      currentTabIndex(2);
      break;
      case 180:
      currentTabIndex(4);
      case 270:
      currentTabIndex(3);
      break;
    }

  },[rotationalValue])

  return (
    <SafeAreaView style={styles.wholeView}>
      <ScrollView contentContainerStyle={styles.wholeView}>
      <View style={styles.wholeView}>
        {renderTabs()}
        {renderScrollItems()}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SquaredHeaderTabView;

SquaredHeaderTabView.defaultProps = {
  firstTabColor:'skyblue',
  secondTabColor:'#FFD580',
  thirdTabColor:'#00FF00',
  fourthTabColor:'#CBC3E3',
  firstTabLabel: 'Profile',
  secondTabLabel: 'Followers',
  thirdTabLabel: 'Following',
  fourthTabLabel: 'Contacts',
  tabWholeViewDimension: 300
}