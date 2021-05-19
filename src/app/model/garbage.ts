export class Garbage{
  id: number;
  country: string;
  city: string;
  address: string;
  size: string;


  constructor(id: number, country: string, city: string, address: string, size: string) {
    this.id = id;
    this.country = country;
    this.city = city;
    this.address = address;
    this.size = size;
  }
}
