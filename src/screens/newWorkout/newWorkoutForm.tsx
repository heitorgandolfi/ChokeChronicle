import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";

import AddTrainningUseCase from "../../useCases/trainningUseCase";

import { MoodContainerFormFields } from "./formComponents/mood";
import { BeltsContainerFormFields } from "./formComponents/belts";
import { FormContainer, SubmitButton, SubmitButtonText } from "./styles";
import { InteractionsContainerFormFields } from "./formComponents/interactions";
import { LocationDateContainerFormFields } from "./formComponents/locationDate";

const schema = Yup.object().shape({
  trainningDate: Yup.string().required("This field is required"),
  trainningLocation: Yup.string().required("This field is required"),
  whiteBelt: Yup.string(),
  blueBelt: Yup.string(),
  purpleBelt: Yup.string(),
  brownBelt: Yup.string(),
  blackBelt: Yup.string(),
  rolls: Yup.string(),
  rests: Yup.string(),
  subs: Yup.string(),
  taps: Yup.string(),
  mood: Yup.string().required("This field is required"),
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

  const userHandleSubmit = async (formData: any) => {
    reset();

    await AddTrainningUseCase.execute(formData);

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
