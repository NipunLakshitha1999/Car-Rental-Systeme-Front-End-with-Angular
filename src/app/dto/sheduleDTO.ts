export default class DriverSheduleDTO {
  private _rentDetailid:string;
  private _tour:string;
  private _carregno: string;
  private _driverid:string;
  private _rentid:string;
  private _cardate: string;
  private _cartime: string;


  constructor(rentDetailid: string, tour: string, carregno: string, driverid: string, rentid: string, cardate: string, cartime: string) {
    this._rentDetailid = rentDetailid;
    this._tour = tour;
    this._carregno = carregno;
    this._driverid = driverid;
    this._rentid = rentid;
    this._cardate = cardate;
    this._cartime = cartime;
  }

  get rentDetailid(): string {
    return this._rentDetailid;
  }

  set rentDetailid(value: string) {
    this._rentDetailid = value;
  }

  get tour(): string {
    return this._tour;
  }

  set tour(value: string) {
    this._tour = value;
  }

  get carregno(): string {
    return this._carregno;
  }

  set carregno(value: string) {
    this._carregno = value;
  }

  get driverid(): string {
    return this._driverid;
  }

  set driverid(value: string) {
    this._driverid = value;
  }

  get rentid(): string {
    return this._rentid;
  }

  set rentid(value: string) {
    this._rentid = value;
  }

  get cardate(): string {
    return this._cardate;
  }

  set cardate(value: string) {
    this._cardate = value;
  }

  get cartime(): string {
    return this._cartime;
  }

  set cartime(value: string) {
    this._cartime = value;
  }
}
