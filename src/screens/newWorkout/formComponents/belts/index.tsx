import { Controller } from "react-hook-form";

import { FormFieldsProps } from "../../../../models/newWorkoutFormFieldsModel";

import { Input, FormText } from "../../styles";

import { Belt, BeltImage, BeltsContainer, BeltsContent } from "./styles";

export const BeltsContainerFormFields = ({ control, setValue }: FormFieldsProps) => {
  return (
    <BeltsContainer>
      <FormText>Fought belts:</FormText>
      <BeltsContent>
        <Belt>
          <BeltImage source={require("../../../../assets/belts/white.png")} />
          <Controller
            name="whiteBelt"
            defaultValue="0"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                interactionInput
                foughtBeltsInput
                keyboardType="numeric"
                onBlur={onBlur}
                onFocus={() => setValue("whiteBelt", "")}
                onChangeText={onChange}
              />
            )}
          />
        </Belt>

        <Belt>
          <BeltImage source={require("../../../../assets/belts/blue.png")} />
          <Controller
            name="blueBelt"
            defaultValue="0"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                interactionInput
                foughtBeltsInput
                keyboardType="numeric"
                onBlur={onBlur}
                onFocus={() => setValue("blueBelt", "")}
                onChangeText={onChange}
              />
            )}
          />
        </Belt>

        <Belt>
          <BeltImage source={require("../../../../assets/belts/purple.png")} />
          <Controller
            name="purpleBelt"
            defaultValue="0"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                interactionInput
                foughtBeltsInput
                keyboardType="numeric"
                onBlur={onBlur}
                onFocus={() => setValue("purpleBelt", "")}
                onChangeText={onChange}
              />
            )}
          />
        </Belt>

        <Belt>
          <BeltImage source={require("../../../../assets/belts/brown.png")} />
          <Controller
            name="brownBelt"
            defaultValue="0"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                interactionInput
                foughtBeltsInput
                keyboardType="numeric"
                onBlur={onBlur}
                onFocus={() => setValue("brownBelt", "")}
                onChangeText={onChange}
              />
            )}
          />
        </Belt>

        <Belt>
          <BeltImage source={require("../../../../assets/belts/black.png")} />
          <Controller
            name="blackBelt"
            defaultValue="0"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                interactionInput
                value={value}
                foughtBeltsInput
                keyboardType="numeric"
                onBlur={onBlur}
                onFocus={() => setValue("blackBelt", "")}
                onChangeText={onChange}
              />
            )}
          />
        </Belt>
      </BeltsContent>
    </BeltsContainer>
  );
};
