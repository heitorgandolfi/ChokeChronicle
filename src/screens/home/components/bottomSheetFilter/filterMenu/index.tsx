import { FilterButton, FilterIcon, FilterMenuContainer, FilterText } from "./styles";

interface FilterMenuProps {
  trainningsCount: number;
  onButtonPress: () => void;
}

export const FilterMenu = ({ trainningsCount, onButtonPress }: FilterMenuProps) => (
  <FilterMenuContainer>
    <FilterText>{trainningsCount} Trainnings</FilterText>
    <FilterButton onPress={onButtonPress} activeOpacity={0.9}>
      <FilterIcon name="tune" />
      <FilterText buttonText>Filters</FilterText>
    </FilterButton>
  </FilterMenuContainer>
);
