export const displayErrors = (errors) => {
  return (
    errors?.company_name?.message ||
    errors?.email?.message ||
    errors?.mobile?.message ||
    errors?.password?.message ||
    errors?.country?.message ||
    errors?.state?.message
  );
};
