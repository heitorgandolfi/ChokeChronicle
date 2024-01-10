import { View, Dimensions } from "react-native";

import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { TrainningCardProps } from "../../models/trainningCardModel";

import { TrainningMood } from "./trainningMood";
import { TranningBelts } from "./trainningBelts";
import { TrainningStatistics } from "./trainningStatistics";
import { TrainningCardContainer, DeleteCardIconContainer } from "./styles";
import { useTheme } from "styled-components";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TRANSLATE_X_TRASHHOLDER = -SCREEN_WIDTH * 0.2;

interface TrainningCardPropsWithId extends TrainningCardProps {
  id: number;
  onDeleted: (id: number) => void;
}

export const TrainningCard = ({
  id,
  onDeleted,
  date,
  city,
  mood,
  whiteBelt,
  blueBelt,
  purpleBelt,
  brownBelt,
  blackBelt,
  rolls,
  rests,
  subs,
  taps,
}: TrainningCardPropsWithId) => {
  const { error } = useTheme();
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const trainningCardShouldBeDeleted = translateX.value < TRANSLATE_X_TRASHHOLDER;
      if (trainningCardShouldBeDeleted) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        runOnJS(onDeleted)(id);
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const trainningCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rDeleteIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(translateX.value < TRANSLATE_X_TRASHHOLDER ? 1 : 0);
    return { opacity };
  });

  return (
    <View>
      <DeleteCardIconContainer>
        <Animated.View style={rDeleteIconContainerStyle}>
          <MaterialCommunityIcons name="trash-can-outline" size={40} color={error} />
        </Animated.View>
      </DeleteCardIconContainer>

      <PanGestureHandler onGestureEvent={panGesture}>
        <TrainningCardContainer style={trainningCardStyle}>
          <TrainningMood date={date} city={city} mood={mood} />

          <TranningBelts
            whiteBelt={whiteBelt}
            blueBelt={blueBelt}
            purpleBelt={purpleBelt}
            brownBelt={brownBelt}
            blackBelt={blackBelt}
          />

          <TrainningStatistics rolls={rolls} rests={rests} subs={subs} taps={taps} />
        </TrainningCardContainer>
      </PanGestureHandler>
    </View>
  );
};
