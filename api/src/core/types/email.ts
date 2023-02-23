import * as t from "io-ts";

const Email = t.brand(
  t.string,
  (s): s is t.Branded<string, { readonly Email: unique symbol }> =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s),
  "Email"
);

export default Email;