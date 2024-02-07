import { Controller } from "react-hook-form";
import { RadioButton } from "react-native-paper";

import { RadioButtonContainer, RadioButtonLabel } from "./styles";

interface RadioButtonControllerProps {
  control: any;
  name: string;
  value: string;
  label: string;
  setValue: (name: string, value: string) => void;
}

export const RadioButtonController = ({
  control,
  name,
  value,
  label,
  setValue,
}: RadioButtonControllerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value: selectedValue } }) => (
        <RadioButtonContainer>
          <RadioButton
            value={value}
            status={selectedValue === value ? "checked" : "unchecked"}
            onPress={() => setValue(name, value)}
          />
          <RadioButtonLabel>{label}</RadioButtonLabel>
        </RadioButtonContainer>
      )}
    />
  );
};
