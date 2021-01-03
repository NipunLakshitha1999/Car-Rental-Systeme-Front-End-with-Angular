export default class RentDetail{
  private _tour:string;
  private _rentid:string;
  private _driverid:string;


  constructor(tour: string, rentid: string, driverid: string) {
    this._tour = tour;
    this._rentid = rentid;
    this._driverid = driverid;
  }

  get tour(): string {
    return this._tour;
  }

  set tour(value: string) {
    this._tour = value;
  }

  get rentid(): string {
    return this._rentid;
  }

  set rentid(value: string) {
    this._rentid = value;
  }

  get driverid(): string {
    return this._driverid;
  }

  set driverid(value: string) {
    this._driverid = value;
  }
}
