export default class RentCarDetailDTO {
  private _rentid:string;
  private _carregno:string;
  private _cardate:string;
  private _cartime:string;
  private _cardiver:string;
  private _cusemail:string;


  constructor(rentid: string, carregno: string, cardate: string, cartime: string, cardiver: string, cusemail: string) {
    this._rentid = rentid;
    this._carregno = carregno;
    this._cardate = cardate;
    this._cartime = cartime;
    this._cardiver = cardiver;
    this._cusemail = cusemail;
  }

  get rentid(): string {
    return this._rentid;
  }

  set rentid(value: string) {
    this._rentid = value;
  }

  get carregno(): string {
    return this._carregno;
  }

  set carregno(value: string) {
    this._carregno = value;
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

  get cardiver(): string {
    return this._cardiver;
  }

  set cardiver(value: string) {
    this._cardiver = value;
  }

  get cusemail(): string {
    return this._cusemail;
  }

  set cusemail(value: string) {
    this._cusemail = value;
  }
}
