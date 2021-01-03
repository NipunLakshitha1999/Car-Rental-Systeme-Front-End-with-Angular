import RentDTO from './addRentDTO';
import DriverDTO from './driverDTO';
import CarDTO from './carDTO';

export default class RentDetailDTO{
    private _rentDetailid:string;
    private _tour:string;
    private _rentid:string;
    private _driverid:string;
    private _rentCarRegNo:string;


  constructor(rentDetailid: string, tour: string, rentid: string, driverid: string, rentCarRegNo: string) {
    this._rentDetailid = rentDetailid;
    this._tour = tour;
    this._rentid = rentid;
    this._driverid = driverid;
    this._rentCarRegNo = rentCarRegNo;
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

  get rentCarRegNo(): string {
    return this._rentCarRegNo;
  }

  set rentCarRegNo(value: string) {
    this._rentCarRegNo = value;
  }
}
