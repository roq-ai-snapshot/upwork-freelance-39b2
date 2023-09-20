import * as yup from 'yup';

export const proposalValidationSchema = yup.object().shape({
  cover_letter: yup.string().required(),
  rate: yup.number().integer().nullable(),
  hours_per_week: yup.number().integer().nullable(),
  job_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
