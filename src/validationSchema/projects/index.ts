import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  deadline: yup.date().nullable(),
  client_id: yup.string().nullable().required(),
});
