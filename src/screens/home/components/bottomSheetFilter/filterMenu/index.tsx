import {
  FilterIcon,
  FilterText,
  FilterButton,
  FilterIndicator,
  FilterMenuContainer,
} from "./styles";

interface FilterMenuProps {
  trainningsCount: number;
  onButtonPress: () => void;
  hasAnyFilter: boolean;
}

const TrainningCountLabel = (trainningCount: number) => {
  if (trainningCount === 1) return "Trainning";

  return `Trainnings`;
};

export const FilterMenu = ({ trainningsCount, onButtonPress, hasAnyFilter }: FilterMenuProps) => (
  <FilterMenuContainer>
    <FilterText>
      {trainningsCount} {TrainningCountLabel(trainningsCount)}
    </FilterText>

    <FilterButton onPress={onButtonPress} activeOpacity={0.9}>
      <FilterIcon name="tune" />
      <FilterText buttonText>Filters</FilterText>
      {hasAnyFilter && (
        <FilterIndicator>
          <FilterIcon name="exclamation" />
        </FilterIndicator>
      )}
    </FilterButton>
  </FilterMenuContainer>
);
