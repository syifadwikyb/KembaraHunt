import React from 'react';
import {
    Animated,
    Dimensions,
    View,
} from 'react-native';

import RedeemIcon from '../../assets/game/chest.svg';
import HeroIcon from '../../assets/game/hero.svg';

const { width } = Dimensions.get('window');

const MENU = [
  {
    id: '1',
    title: 'MY HERO',
    Icon: HeroIcon,
    scale: 1.15,
    offsetY: 10,
  },
  {
    id: '2',
    title: 'MISSIONS',
    Icon: HeroIcon, // sementara pakai hero dulu
    scale: 1.15,
    offsetY: 10,
  },
  {
    id: '3',
    title: 'REDEEM',
    Icon: RedeemIcon,
    scale: 1,
    offsetY: 40,
  },
];

type Props = {
  onChange: () => void;
};

export default function GameCarousel({ onChange }: Props) {
  return (
    <Animated.FlatList
      data={MENU}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      onMomentumScrollEnd={onChange} // 🔥 trigger animasi
      renderItem={({ item }) => {
        const Icon = item.Icon;

        return (
          <View
            style={{ width }}
            className="flex-1 items-center justify-center"
          >
            <View
              style={{
                transform: [{ translateY: item.offsetY }],
              }}
            >
              <Icon
                width={750 * item.scale}
                height={750 * item.scale}
              />
            </View>
          </View>
        );
      }}
    />
  );
}
