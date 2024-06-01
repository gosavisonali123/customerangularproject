
export interface Customer {
    id: number;
    pan: string;
    fullName: string;
    email: string;
    mobileNumber: string;
    addresses: Address[];
  }
  
  export interface Address {
    addressLine1: string;
    addressLine2: string;
    postcode: number;
    state: string;
    city: string;
  }
  