import { Control, FieldErrors, UseFormSetValue } from "react-hook-form";

type NewWorkoutFormFieldsProps = {
  trainingDate: string;
  trainingLocation: string;
  whiteBelt?: string;
  blueBelt?: string;
  purpleBelt?: string;
  brownBelt?: string;
  blackBelt?: string;
  rolls?: string;
  rests?: string;
  subs?: string;
  taps?: string;
  mood: string;
};

export interface FormFieldsProps {
  control: Control<NewWorkoutFormFieldsProps>;
  setValue: UseFormSetValue<NewWorkoutFormFieldsProps>;
  errors: FieldErrors<NewWorkoutFormFieldsProps>;
}
