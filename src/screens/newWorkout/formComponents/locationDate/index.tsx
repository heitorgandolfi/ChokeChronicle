import { useState } from "react";
import { Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";

import { ThemeProps } from "../../../../models/themeModel";
import { FormFieldsProps } from "../../../../models/newWorkoutFormFieldsModel";

import { ErrorText, Input, FormText } from "../../styles";

import { LocationDateContainer } from "./styles";

interface LocationDateContainerFormFields extends FormFieldsProps {
  theme: ThemeProps;
}

export const LocationDateContainerFormFields = ({
  control,
  errors,
  setValue,
  theme,
}: LocationDateContainerFormFields) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const renderDateTimePicker = () => {
    return (
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date()}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={(event, selectedDate) => {
          setDatePickerVisibility(false);
          if (selectedDate) {
            const formattedDate = selectedDate.toLocaleDateString("pt-BR");
            setValue("trainningDate", formattedDate);
          }
        }}
      />
    );
  };

  return (
    <LocationDateContainer>
      <FormText>Date:</FormText>

      {isDatePickerVisible && renderDateTimePicker()}

      <Controller
        name="trainningDate"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            placeholder="DD/MM/YYYY"
            placeholderTextColor={theme["primary-light"]}
            onFocus={() => setDatePickerVisibility(true)}
            onBlur={onBlur}
            onChangeText={onChange}
            hasError={Boolean(errors.trainningDate)}
            showSoftInputOnFocus={false}
          />
        )}
      />

      {errors.trainningDate && <ErrorText>{errors.trainningDate.message}</ErrorText>}

      <FormText>Location:</FormText>
      <Controller
        name="trainningLocation"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            placeholder="Where did you train?"
            placeholderTextColor={theme["primary-light"]}
            onBlur={onBlur}
            onChangeText={onChange}
            hasError={Boolean(errors.trainningLocation)}
          />
        )}
      />
      {errors.trainningLocation && <ErrorText>{errors.trainningLocation.message}</ErrorText>}
    </LocationDateContainer>
  );
};
