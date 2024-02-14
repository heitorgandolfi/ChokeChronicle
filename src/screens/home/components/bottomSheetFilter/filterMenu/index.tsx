import { FilterButton, FilterIcon, FilterMenuContainer, FilterText } from "./styles";

interface FilterMenuProps {
  trainningsCount: number;
  onButtonPress: () => void;
}

const TrainningCountLabel = (trainningCount: number) => {
  if (trainningCount === 1) return "Trainning";

  return `Trainnings`;
};

export const FilterMenu = ({ trainningsCount, onButtonPress }: FilterMenuProps) => (
  <FilterMenuContainer>
    <FilterText>
      {trainningsCount} {TrainningCountLabel(trainningsCount)}
    </FilterText>

    <FilterButton onPress={onButtonPress} activeOpacity={0.9}>
      <FilterIcon name="tune" />
      <FilterText buttonText>Filters</FilterText>
    </FilterButton>
  </FilterMenuContainer>
);
