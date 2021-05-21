export class Garbage{
  id: number;
  country: string;
  city: string;
  address: string;
  size: string;
  userId: number;


  constructor(id: number, country: string, city: string, address: string, size: string, userId: number) {
    this.id = id;
    this.country = country;
    this.city = city;
    this.address = address;
    this.size = size;
    this.userId = userId;
  }
}
