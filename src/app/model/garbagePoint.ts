export class GarbagePoint {
  id: number;
  country: string ;
  city: string;
  address: string;
  size: string;
  userPhoneNumber: string;
  userId: number;

  constructor(id: number, country: string, city: string, address: string, size: string, userPhoneNumber: string,userId:number) {
    this.id = id;
    this.country = country;
    this.city = city;
    this.address = address;
    this.size = size;
    this.userId = userId;
    this.userPhoneNumber = userPhoneNumber;
  }
}
