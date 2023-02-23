import * as t from 'io-ts';

export const AuthUser = t.type({
  id: t.string,
  email: t.string,
  app_metadata: t.type({
    provider: t.string,
  }),
});

export type AuthUser = t.TypeOf<typeof AuthUser>;

export const AuthToken = t.type({
  access_token: t.string,
  refresh_token: t.string,
  expires_in: t.number,
  token_type: t.string,
  user: AuthUser,
});

export type AuthToken = t.TypeOf<typeof AuthToken>;