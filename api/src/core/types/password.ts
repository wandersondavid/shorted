import * as t from "io-ts";

const Password = t.brand(
  t.string,
  (s): s is t.Branded<string, { readonly Password: unique symbol }> =>
    s.length >= 8 && /[A-Z]/.test(s) && /[a-z]/.test(s) && /\d/.test(s),
  "Password"
);

export default Password;