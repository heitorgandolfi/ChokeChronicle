import { Controller } from "react-hook-form";

import { FormFieldsProps } from "../../../../models/newWorkoutFormFieldsModel";

import { Input, FormText } from "../../styles";

import { Button, ErrorText, ImagesWrapper, MoodContainer, MoodImage } from "./styles";

interface MoodButtonProps extends FormFieldsProps {
  selectedImage: string;
}

export const MoodContainerFormFields = ({
  control,
  setValue,
  errors,
  selectedImage,
}: MoodButtonProps) => {
  return (
    <MoodContainer>
      <FormText>How do you feel about today's trainning?</FormText>

      <ImagesWrapper>
        <Controller
          name="mood"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input isHidden onChange={onChange} value={value} />
          )}
        />
        <Button
          activeOpacity={0.9}
          onPress={() => setValue("mood", "dissatisfied")}
          isSelected={selectedImage === "dissatisfied"}
        >
          <MoodImage source={require("../../../../assets/emojis/dissatisfied.png")} />
        </Button>

        <Button
          activeOpacity={0.9}
          onPress={() => setValue("mood", "neutral")}
          isSelected={selectedImage === "neutral"}
        >
          <MoodImage source={require("../../../../assets/emojis/neutral.png")} />
        </Button>

        <Button
          activeOpacity={0.9}
          onPress={() => setValue("mood", "satisfied")}
          isSelected={selectedImage === "satisfied"}
        >
          <MoodImage source={require("../../../../assets/emojis/satisfied.png")} />
        </Button>
      </ImagesWrapper>

      {errors.mood && <ErrorText>{errors.mood.message}</ErrorText>}
    </MoodContainer>
  );
};
