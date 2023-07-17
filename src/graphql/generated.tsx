export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CreatePlaceInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPlace: Place;
  removePlace: Place;
  updatePlace: Place;
  updateUser: User;
};

export type MutationCreatePlaceArgs = {
  createPlaceInput: CreatePlaceInput;
};

export type MutationRemovePlaceArgs = {
  id: Scalars['Int']['input'];
};

export type MutationUpdatePlaceArgs = {
  updatePlaceInput: UpdatePlaceInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Place = {
  __typename?: 'Place';
  /** The formatted_address of the place */
  formatted_address: Scalars['String']['output'];
  /** The id of the car */
  id: Scalars['ID']['output'];
  /** The name of the place */
  name: Scalars['String']['output'];
  /** The place_id of the place */
  place_id: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getPlaces: Array<Place>;
  getUser: User;
  place: Place;
  places: Array<Place>;
  users: Array<User>;
};

export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPlaceArgs = {
  id: Scalars['Int']['input'];
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePlaceInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** Email of the user */
  email: Scalars['String']['output'];
  /** Full name of the user */
  fullName: Scalars['String']['output'];
  /** The id of the user */
  id: Scalars['ID']['output'];
  /** Phone number of the user */
  phone: Scalars['String']['output'];
  /** User's roles */
  roles: Array<ValidRoles>;
  /** Status of the user */
  status: UserStatus;
};

export enum UserStatus {
  Active = 'Active',
  Blocked = 'Blocked',
  Incomplete = 'Incomplete',
  Pending = 'Pending',
}

export enum ValidRoles {
  Admin = 'admin',
  User = 'user',
}
