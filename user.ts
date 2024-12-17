type Dob = {
  date: Date;
  age: number;
};

type ID = {
  name: string;
  value: string;
};

type Location = {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
};

type Coordinates = {
  latitude: string;
  longitude: string;
};

type Street = {
  number: number;
  name: string;
};

type Timezone = {
  offset: string;
  description: string;
};

type Login = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

type Name = {
  title: string;
  first: string;
  last: string;
};

type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type IUser = {
  results: {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Dob;
    phone: string;
    cell: string;
    id: ID;
    picture: Picture;
    nat: string;
  }[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};

export const requestGetRandomUser = async (): Promise<IUser | undefined> => {
  try {
    const response = await fetch('https://randomuser.me/api/');

    const json = (await response.json()) as IUser;

    return json;
  } catch (error) {
    return undefined;
  }
};
