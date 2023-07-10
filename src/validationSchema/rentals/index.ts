import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rent_date: yup.date().required(),
  return_date: yup.date(),
  tool_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
