import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  profile_name: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
