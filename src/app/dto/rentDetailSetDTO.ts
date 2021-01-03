export default class RentDetailSetDTO{
  private _rentDetailID:string;
  private _km:string;
  private _driver:string;
  private _rent:string;
  private _car:string;


  constructor(rentDetailID: string, km: string, driver: string, rent: string, car: string) {
    this._rentDetailID = rentDetailID;
    this._km = km;
    this._driver = driver;
    this._rent = rent;
    this._car = car;
  }

  get rentDetailID(): string {
    return this._rentDetailID;
  }

  set rentDetailID(value: string) {
    this._rentDetailID = value;
  }

  get km(): string {
    return this._km;
  }

  set km(value: string) {
    this._km = value;
  }

  get driver(): string {
    return this._driver;
  }

  set driver(value: string) {
    this._driver = value;
  }

  get rent(): string {
    return this._rent;
  }

  set rent(value: string) {
    this._rent = value;
  }

  get car(): string {
    return this._car;
  }

  set car(value: string) {
    this._car = value;
  }
}
