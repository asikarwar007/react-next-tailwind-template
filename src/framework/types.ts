

export type AddressQueryOptionsType = {
  text?: string;
  userId?: string;
  status?: string;
  limit?: number;
};
export type AddressType = {
  _id: string;
  userId: string;
  addressType: string;
  address:string;
  address2: string;
  street: string;
  landmark: string;
  city: string;
  state: string;
  postalcode: string;
  country: string;
  lat: string;
  lng: string;
  name: string;
  email: string;
  mobile: string;
  timing: string;
  status: string;
  isPreferred: false,
  className: string;
}
