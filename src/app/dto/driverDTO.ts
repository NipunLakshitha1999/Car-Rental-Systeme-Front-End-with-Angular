export default class DriverDTO{
  private _driverEmail:string;
  private _driverCode:string;
  private _driverName:string;
  private _diverAddress:string;
  private _diverContact:string;
  private _status:string;


  // @ts-ignore
  constructor(driverEmail: string, driverCode: string, driverName: string, diverAddress: string, diverContact: string, status: string) {
    this._driverEmail = driverEmail;
    this._driverCode = driverCode;
    this._driverName = driverName;
    this._diverAddress = diverAddress;
    this._diverContact = diverContact;
    this._status = status;
  }

  // @ts-ignore
  constructor(driverEmail:string,driverCode:string) {
    this.driverEmail=driverEmail;
    this.driverCode=driverCode;
  }

  get driverEmail(): string {
    return this._driverEmail;
  }

  set driverEmail(value: string) {
    this._driverEmail = value;
  }

  get driverCode(): string {
    return this._driverCode;
  }

  set driverCode(value: string) {
    this._driverCode = value;
  }

  get driverName(): string {
    return this._driverName;
  }

  set driverName(value: string) {
    this._driverName = value;
  }

  get diverAddress(): string {
    return this._diverAddress;
  }

  set diverAddress(value: string) {
    this._diverAddress = value;
  }

  get diverContact(): string {
    return this._diverContact;
  }

  set diverContact(value: string) {
    this._diverContact = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
}
