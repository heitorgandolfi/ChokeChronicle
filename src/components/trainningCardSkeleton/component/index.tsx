import { useEffect, useState } from "react";
import { Animated, View } from "react-native";

import {
  DateTextSkeleton,
  CityTextSkeleton,
  TrainningCardContainerSkeleton,
  MoodImageSkeleton,
  TrainningLocaleAndMoodSkeleton,
  TrainningFoughtBeltsSkeleton,
  FoughtTextSkeleton,
  BeltsImageSkeleton,
  StatisticsTextSkeleton,
} from "./styles";

export const TrainningCardSkeleton = () => {
  const [opacityValue] = useState(new Animated.Value(1));

  useEffect(() => {
    const opacityAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacityValue, {
          toValue: 0.5,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }),
      ]),
    );
    opacityAnimation.start();
    return () => {
      opacityAnimation.stop();
    };
  }, [opacityValue]);

  return (
    <>
      <TrainningCardContainerSkeleton
        style={{
          opacity: opacityValue,
        }}
      >
        <TrainningLocaleAndMoodSkeleton>
          <View>
            <DateTextSkeleton />
            <CityTextSkeleton />
          </View>

          <MoodImageSkeleton />
        </TrainningLocaleAndMoodSkeleton>

        <TrainningFoughtBeltsSkeleton>
          <FoughtTextSkeleton />
          <BeltsImageSkeleton />
        </TrainningFoughtBeltsSkeleton>

        <TrainningFoughtBeltsSkeleton>
          <StatisticsTextSkeleton />
          <StatisticsTextSkeleton />
          <StatisticsTextSkeleton />
          <StatisticsTextSkeleton />
        </TrainningFoughtBeltsSkeleton>
      </TrainningCardContainerSkeleton>
    </>
  );
};
