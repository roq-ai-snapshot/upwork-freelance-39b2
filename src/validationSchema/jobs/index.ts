import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  rate: yup.number().integer().nullable(),
  hours_per_week: yup.number().integer().nullable(),
  project_id: yup.string().nullable().required(),
});
