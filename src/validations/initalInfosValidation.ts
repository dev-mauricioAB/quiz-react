
import * as yup from "yup";

export const initialInfosSchema = yup.object().shape({
  name: yup.string().required(),
  difficulty: yup.string().required(),
});