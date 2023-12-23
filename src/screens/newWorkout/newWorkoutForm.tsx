import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";

import { MoodContainerFormFields } from "./formComponents/mood";
import { FormContainer, SubmitButton, SubmitButtonText } from "./styles";
import { BeltsContainerFormFields } from "./formComponents/belts";
import { InteractionsContainerFormFields } from "./formComponents/interactions";
import { LocationDateContainerFormFields } from "./formComponents/locationDate";

const schema = Yup.object().shape({
  trainningDate: Yup.string().required("Date is required"),
  trainningLocation: Yup.string().required("Location is required"),
  whiteBelt: Yup.string(),
  blueBelt: Yup.string(),
  purpleBelt: Yup.string(),
  brownBelt: Yup.string(),
  blackBelt: Yup.string(),
  rolls: Yup.string(),
  rests: Yup.string(),
  subs: Yup.string(),
  taps: Yup.string(),
  mood: Yup.string().required("At least one must be selected"),
});

export const NewWorkoutForm = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const selectedImage = watch("mood");

  const userHandleSubmit = (formData: any) => {
    const { trainningDate, trainningLocation } = formData;
    console.log(`form: ${JSON.stringify(formData)}`);

    reset();

    navigation.navigate("Home");
  };

  return (
    <FormContainer>
      <LocationDateContainerFormFields
        control={control}
        setValue={setValue}
        errors={errors}
        theme={theme}
      />

      <BeltsContainerFormFields control={control} setValue={setValue} errors={errors} />

      <InteractionsContainerFormFields control={control} setValue={setValue} errors={errors} />

      <MoodContainerFormFields
        control={control}
        setValue={setValue}
        errors={errors}
        selectedImage={selectedImage}
      />

      <SubmitButton activeOpacity={0.9} onPress={handleSubmit(userHandleSubmit)}>
        <SubmitButtonText>Submit</SubmitButtonText>
      </SubmitButton>
    </FormContainer>
  );
};
