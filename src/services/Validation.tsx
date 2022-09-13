import React from "react";
import { object, string } from "yup";

export const ValidationSchema = object().shape({
  email: string().email().required(),
  password: string().required(),
});
