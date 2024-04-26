export const validateEmail = (email: string) => {
  if (email.trim().length === 0)
    return {
      validate: false,
      validateStr: "Please input email.",
    };
  const validate = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (validate)
    return {
      validate: true,
      validateStr: "",
    };
  else
    return {
      validate: false,
      validateStr: "Please input validate email.",
    };
};
