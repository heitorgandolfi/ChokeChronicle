import { Controller } from "react-hook-form";

import { FormFieldsProps } from "../../../../models/newWorkoutFormFieldsModel";

import { Input, FormText } from "../../styles";

import { InteractionsContainer, InteractionsWrapper } from "./styles";

export const InteractionsContainerFormFields = ({ control, setValue }: FormFieldsProps) => {
  return (
    <InteractionsContainer>
      <FormText>Interactions:</FormText>
      <InteractionsWrapper>
        <Controller
          name="rolls"
          defaultValue="0"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              interactionInput
              keyboardType="numeric"
              onBlur={onBlur}
              onFocus={() => setValue("rolls", "")}
              onChangeText={onChange}
            />
          )}
        />
        <FormText interactionsText>Rolls</FormText>

        <Controller
          name="rests"
          defaultValue="0"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              interactionInput
              keyboardType="numeric"
              onBlur={onBlur}
              onFocus={() => setValue("rests", "")}
              onChangeText={onChange}
            />
          )}
        />
        <FormText interactionsText>Rests</FormText>

        <Controller
          name="subs"
          defaultValue="0"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              interactionInput
              keyboardType="numeric"
              onBlur={onBlur}
              onFocus={() => setValue("subs", "")}
              onChangeText={onChange}
            />
          )}
        />
        <FormText interactionsText>Subs</FormText>

        <Controller
          name="taps"
          defaultValue="0"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              interactionInput
              keyboardType="numeric"
              onBlur={onBlur}
              onFocus={() => setValue("taps", "")}
              onChangeText={onChange}
            />
          )}
        />
        <FormText interactionsText>Taps</FormText>
      </InteractionsWrapper>
    </InteractionsContainer>
  );
};
