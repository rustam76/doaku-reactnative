import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, Animated, Easing} from 'react-native';
import mandoa from '../assets/mandoa.png';

const Loading = () => {
  const imageScale = useRef(new Animated.Value(1)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const animateImage = Animated.loop(
      Animated.sequence([
        Animated.timing(imageScale, {
          toValue: 0.8,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(imageScale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    );

    const animateText = Animated.loop(
      Animated.sequence([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    );

    const text = 'Loading...!!';
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedText(text.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        currentIndex = 0;
      }
    }, 200);

    animateImage.start();
    animateText.start();

    return () => {
      clearInterval(intervalId);
      animateImage.stop();
      animateText.stop();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#040C23',
      }}>
      <Text className="text-[#FFFFFF] font-bold text-[28px]">Doaku</Text>
      <Animated.Image
        source={mandoa}
        style={{transform: [{scale: imageScale}], width: 250, height: 250}}
      />
      <Animated.Text
        style={{
          marginTop: 10,
          fontSize: 16,
          fontWeight: 'bold',
          color: '#fff',
          opacity: textOpacity,
        }}>
        {typedText}
      </Animated.Text>
    </View>
  );
};

export default Loading;
