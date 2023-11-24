import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      //  Amazon Cognito User Pool ID

      userPoolId: "us-east-1_9e9TbA4hG",

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)

      userPoolClientId: "5r5o6cidvvma0711mrqijq31ll",

      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID

      identityPoolId: "us-east-1:e8255207-ebc2-4539-abb0-7dcdc6dc38aa",

      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp

      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification

      signUpVerificationMethod: "code", // 'code' | 'link'

      loginWith: {
        // OPTIONAL - Hosted UI configuration

        oauth: {
          domain: "https://d3buwxry0r34t9.auth.us-east-1.amazoncognito.com",

          scopes: [
            "phone",

            "email",

            "profile",

            "openid",

            "aws.cognito.signin.user.admin",
          ],

          redirectSignIn: ["http://localhost:3000/"],

          redirectSignOut: ["http://localhost:3000/"],

          responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
        },
      },
    },
  },
});

// You can get the current config object

export const currentConfig = Amplify.getConfig();
