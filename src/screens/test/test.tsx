import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';

const StickyScrollViewExample = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0)); // Animated value to track scroll position
  const stickyViewHeight = 100; // Height of the sticky view
  
  // onScroll event handler to track scroll position
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  // Interpolate scrollY value to make the sticky view fixed at the top
  const stickyViewTranslate = scrollY.interpolate({
    inputRange: [0, stickyViewHeight], // When scroll reaches the height of the sticky view
    outputRange: [0, -stickyViewHeight], // Move sticky view up when scrolling past its height
    extrapolate: 'clamp', // Prevents the translation from going further than the specified range
  });

  return (
    <ScrollView
    style={styles.screen}
    stickyHeaderIndices={[0]}
>
   <View><Text>Hello1</Text></View>
   <View><Text>Hello2</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello5</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
   <View><Text>Hello3</Text></View>
</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  stickyView: {
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    zIndex: 1, // Ensure it stays above content when sticky
  },
  stickyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  aboveStickyContent: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  content: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default StickyScrollViewExample;
