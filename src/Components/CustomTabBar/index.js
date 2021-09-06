import React, {useRef, useState, useEffect} from 'react';
import {View, Image, Animated, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import styles from './styles';
import {followersIcon, followingIcon, HomeIcon, listIcon} from '../../assets';
let icon;
/**
 *
 * @param {props} firstTabIcon - icon of first tab view
 * @param {props} secondTabIcon - icon of second view
 * @param {props} thirdTabIcon - icon of third view
 * @param {props} fourthTabIcon - icon of fourth tab view
 * @param {props} activeTabColor - color of active tab
 * @param {props} onFirstTabPress - function when first tab pressed
 * @param {props} onSecondTabPress - function when second tab pressed
 * @param {props} onThirdTabPress - function when third tab pressed
 * @param {props} onFourthTabPress - function when fourth tab pressed
 * @param {props} currentTabIndex - callback that returns current tab index
 * @returns
 */

const CustomTabBar = (props) => {
  const marginLeftAnimated = useRef(new Animated.Value(0));
  const moveVerticalAnimated = useRef(new Animated.Value(0));
  const currentTabOpacityAnimated = useRef(new Animated.Value(0));
  const eachTabOpacityAnimated = useRef(new Animated.Value(0));
  const [currentSelectedTab, setCurrentSelectedTab] = useState(1);
  const {
    firstTabIcon,
    secondTabIcon,
    thirdTabIcon,
    fourthTabIcon,
    activeTabColor,
    onFirstTabPress,
    onSecondTabPress,
    onThirdTabPress,
    onFourthTabPress,
    currentTabIndex
  } = props;

  // useEffect(() => {
  //   currentTabIndex(currentSelectedTab)
  // }, [currentSelectedTab])
  const seekToPosition = (destinationValue) => {
    currentSelectedTabAnimation(1, 1);

    Animated.timing(marginLeftAnimated.current, {
      toValue: destinationValue,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setCurrentSelectedTab(marginLeftAnimated.current._value + 1);
      currentSelectedTabAnimation(0, 0);
      opacityOnEachTab(0);
    });
  };
  const opacityOnEachTab = (destinationValue) => {
    Animated.timing(eachTabOpacityAnimated.current, {
      toValue: destinationValue,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };
  const currentSelectedTabAnimation = (
    marginTopDestinationValue,
    opacityDestinationValue,
  ) => {
    Animated.parallel([
      Animated.timing(currentTabOpacityAnimated.current, {
        toValue: opacityDestinationValue,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(moveVerticalAnimated.current, {
        toValue: marginTopDestinationValue,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const currentSelectedIcon = () => {
    switch (currentSelectedTab) {
      case 1:
        icon = firstTabIcon;
        break;
      case 2:
        icon = secondTabIcon;
        break;
      case 3:
        icon = thirdTabIcon;
        break;
      case 4:
        icon = fourthTabIcon;
        break;
    }
    return icon;
  };

  const marginLeftInterpolateMotion = marginLeftAnimated.current.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [scale(12), scale(100), scale(188), scale(277)],
  });
  const opacityonEachTabInterpolateMotion =
    eachTabOpacityAnimated.current.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
  const moveVerticaltInterpolateMotion =
    moveVerticalAnimated.current.interpolate({
      inputRange: [0, 1],
      outputRange: [scale(0), scale(10)],
    });
  const currentTabOpacityInterpolateMotion =
    currentTabOpacityAnimated.current.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
  const marginLeftInterpolateStyle = {
    marginLeft: marginLeftInterpolateMotion,
  };
  const marginTopInterpolateStyle = {
    marginTop: moveVerticaltInterpolateMotion,
  };
  const currentTabOpacityInterpolateStyle = {
    opacity: currentTabOpacityInterpolateMotion,
  };

  const eachTabOpacityStyle = {
    opacity: opacityonEachTabInterpolateMotion,
  };

  marginLeftAnimated.current.addListener(({value}) => {
    opacityOnEachTab(1);
  });

  const onTabItemPressed = (index) => {
    switch(index) {
      case 0:
        seekToPosition(0);
        onFirstTabPress && onFirstTabPress();
        break;
      case 1:
        seekToPosition(1);
        onSecondTabPress && onSecondTabPress();
        break;
      case 2:
        seekToPosition(2);
        onThirdTabPress && onThirdTabPress();
        break;
      case 3:
        seekToPosition(3);
        onFourthTabPress && onFourthTabPress();
        break;
    }
  }

  return (
    <View>
      <View style={styles.upperLayerView(activeTabColor)} />
      <View style={styles.wholeView}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.eachTabView}
          onPress={() => onTabItemPressed(0)}>
          <Animated.View style={eachTabOpacityStyle}>
            <Image source={firstTabIcon} style={styles.iconStyle} />
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.eachTabView}
          activeOpacity={0.7}
          onPress={() => onTabItemPressed(1)}>
          <Animated.View style={eachTabOpacityStyle}>
            <Image source={secondTabIcon} style={styles.iconStyle} />
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.eachTabView}
          onPress={() => onTabItemPressed(2)}>
          <Animated.View style={eachTabOpacityStyle}>
            <Image source={thirdTabIcon} style={styles.iconStyle} />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.eachTabView}
          onPress={() => onTabItemPressed(3)}>
          <Animated.View style={eachTabOpacityStyle}>
            <Image source={fourthTabIcon} style={styles.iconStyle} />
          </Animated.View>
        </TouchableOpacity>
        <Animated.View
          style={[styles.currentTabAnimatedView, marginLeftInterpolateStyle]}>
          <View style={styles.currentTabContainerWholeView(activeTabColor)} />
          <Animated.View
            style={[
              styles.currentTabContainerView,
              marginTopInterpolateStyle,
              currentTabOpacityInterpolateStyle,
            ]}>
            <Image
              source={currentSelectedIcon()}
              style={[styles.iconStyle, styles.activeIconStyle]}
            />
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default CustomTabBar;

CustomTabBar.defaultProps = {
  firstTabIcon: HomeIcon,
  secondTabIcon: listIcon,
  thirdTabIcon: followersIcon,
  fourthTabIcon: followingIcon,
};
