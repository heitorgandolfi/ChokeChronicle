import { Control, FieldErrors, UseFormSetValue } from "react-hook-form";

export type NewWorkoutFormFieldsProps = {
  trainningDate: string;
  trainningLocation: string;
  whiteBelt: string;
  blueBelt: string;
  purpleBelt: string;
  brownBelt: string;
  blackBelt: string;
  rolls: string;
  rests: string;
  subs: string;
  taps: string;
  mood: string;
};

export type NewWorkoutFormWithOptionalFieldsProps = {
  trainningDate: string;
  trainningLocation: string;
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
  control: Control<NewWorkoutFormWithOptionalFieldsProps>;
  setValue: UseFormSetValue<NewWorkoutFormWithOptionalFieldsProps>;
  errors: FieldErrors<NewWorkoutFormWithOptionalFieldsProps>;
}
