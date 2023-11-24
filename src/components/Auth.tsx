"use client";
import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { currentConfig } from "../amplifyconfiguration";
import Stripe from "stripe";

import { randomUUID } from "crypto";

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
  apiVersion: "2023-10-16",
});
Amplify.configure(currentConfig);

export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
