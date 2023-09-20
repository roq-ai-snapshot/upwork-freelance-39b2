import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  rate: yup.number().integer().nullable(),
  hours_per_week: yup.number().integer().nullable(),
  proposal_id: yup.string().nullable().required(),
});
