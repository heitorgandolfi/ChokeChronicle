import { ErrorToast } from "react-native-toast-message";

export const toastConfig = {
  defaultToast: (props: any) => (
    <ErrorToast
      {...props}
      contentContainerStyle={{
        
      }}
      style={{
        backgroundColor: "#FAFAFA",
        borderColor: "#6A59FF",
      }}
      text1Style={{
        fontSize: 16,
      }}
      text2Style={{
        fontSize: 14,
        color: "#262A50",
        fontWeight: "400",
      }}
    />
  ),
};
