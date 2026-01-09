import React from 'react';
import { Dimensions, View } from 'react-native';

import BgBelakang from '../../assets/background/bg-belakang.svg';
import BgDepan from '../../assets/background/bg-depan.svg';
import BgTengah from '../../assets/background/bg-tengah.svg';

const { width, height } = Dimensions.get('window');

export default function Background() {
  return (
    <View className="absolute inset-0 bg-[#1a3c40]">
      {/* Belakang */}
      <BgBelakang
        width={width}
        height={height}
        preserveAspectRatio="xMidYMid slice"
      />

      {/* Tengah */}
      <View className="absolute inset-0">
        <BgTengah
          width={width}
          height={height}
          preserveAspectRatio="xMidYMid slice"
        />
      </View>

      {/* Depan / Tanah */}
      <View className="absolute inset-0">
        <BgDepan
          width={width}
          height={height}
          preserveAspectRatio="xMidYMax slice"
        />
      </View>
    </View>
  );
}
