import { Audio } from 'expo-av';
import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

import GameBackground from '../components/background/Background';
import GameCarousel from '../components/game/GameCarousel';

export default function HomeScreen() {
  const fade = useRef(new Animated.Value(0)).current;
  const glow = useRef(new Animated.Value(0)).current;
  const soundRef = useRef<Audio.Sound | null>(null);

  // load sound sekali
  useEffect(() => {
    (async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/swipe.wav'),
        { volume: 0.6 }
      );
      soundRef.current = sound;
    })();

    return () => {
      soundRef.current?.unloadAsync();
    };
  }, []);

  const playTransition = async () => {
    // 🔊 play sound
    await soundRef.current?.replayAsync();

    // 🎥 fade + glow animation
    Animated.parallel([
      Animated.sequence([
        Animated.timing(fade, {
          toValue: 0.45,
          duration: 160,
          useNativeDriver: true,
        }),
        Animated.timing(fade, {
          toValue: 0,
          duration: 220,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 0.25,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.timing(glow, {
          toValue: 0,
          duration: 260,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <View className="flex-1 overflow-hidden bg-[#1a3c40]">
      <GameBackground />

      <GameCarousel onChange={playTransition} />

      {/* DARK FADE */}
      <Animated.View
        pointerEvents="none"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#020617', // deep navy
          opacity: fade,
          zIndex: 50,
        }}
      />

      {/* SOFT GLOW */}
      <Animated.View
        pointerEvents="none"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#60a5fa', // soft blue glow
          opacity: glow,
          zIndex: 49,
        }}
      />
    </View>
  );
}
