import { Animated } from "react-native";
import styled from "styled-components/native";

export const TrainningCardContainerSkeleton = styled(Animated.View)`
  width: 380px;
  height: 132px;

  gap: 14px;
  margin: 20px 16px 5px;
  padding: 16px;

  border: 1px solid transparent;
  border-radius: 16px;

  elevation: 12;
  background-color: ${(props) => props.theme.primaryB};
`;

export const TrainningLocaleAndMoodSkeleton = styled.View`
  flex-direction: row;
  align-items: normal;
  justify-content: space-between;
`;

export const DateTextSkeleton = styled.View`
  width: 77px;
  height: 22px;

  border-radius: 50px;
  background-color: ${(props) => props.theme["primary-dark"]};
`;

export const CityTextSkeleton = styled.View`
  width: 100px;
  height: 15px;

  margin-top: 4px;

  border-radius: 50px;
  background-color: ${(props) => props.theme["primary-dark"]};
`;

export const MoodImageSkeleton = styled.View`
  width: 22px;
  height: 22px;

  border-radius: 999px;
  background-color: ${(props) => props.theme["primary-dark"]};
`;

export const TrainningFoughtBeltsSkeleton = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const FoughtTextSkeleton = styled.View`
  width: 83px;
  height: 17px;

  border-radius: 50px;
  background-color: ${(props) => props.theme["primary-dark"]};
`;

export const BeltsImageSkeleton = styled.View`
  width: 83px;
  height: 22px;

  border-radius: 50px;
  background-color: ${(props) => props.theme["primary-dark"]};
`;

export const TrainningStatisticsSkeleton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StatisticsTextSkeleton = styled.View`
  width: 63px;
  height: 17px;

  border-radius: 50px;
  background-color: ${(props) => props.theme["primary-dark"]};
`;
