export default class CarDTO {
  private _no:string;
  private _carBrand:string;
  private _carType:string;
  private _carPassengers:string;
  private _carTransmission:string;
  private _carFuel:string;
  private _carColor:string;
  private _carCount:string;
  private _carFreeMilageFDay:string;
  private _carFreeMilageFMonth:string;
  private _carPriceFRentDaily:string;
  private _carPricesFRentMonthly:string;
  private _carPriceFExKM:string;


  constructor(no: string, carBrand: string, carType: string, carPassengers: string, carTransmission: string, carFuel: string, carColor: string, carCount: string, carFreeMilageFDay: string, carFreeMilageFMonth: string, carPriceFRentDaily: string, carPricesFRentMonthly: string, carPriceFExKM: string) {
    this._no = no;
    this._carBrand = carBrand;
    this._carType = carType;
    this._carPassengers = carPassengers;
    this._carTransmission = carTransmission;
    this._carFuel = carFuel;
    this._carColor = carColor;
    this._carCount = carCount;
    this._carFreeMilageFDay = carFreeMilageFDay;
    this._carFreeMilageFMonth = carFreeMilageFMonth;
    this._carPriceFRentDaily = carPriceFRentDaily;
    this._carPricesFRentMonthly = carPricesFRentMonthly;
    this._carPriceFExKM = carPriceFExKM;
  }

  get no(): string {
    return this._no;
  }

  set no(value: string) {
    this._no = value;
  }

  get carBrand(): string {
    return this._carBrand;
  }

  set carBrand(value: string) {
    this._carBrand = value;
  }

  get carType(): string {
    return this._carType;
  }

  set carType(value: string) {
    this._carType = value;
  }

  get carPassengers(): string {
    return this._carPassengers;
  }

  set carPassengers(value: string) {
    this._carPassengers = value;
  }

  get carTransmission(): string {
    return this._carTransmission;
  }

  set carTransmission(value: string) {
    this._carTransmission = value;
  }

  get carFuel(): string {
    return this._carFuel;
  }

  set carFuel(value: string) {
    this._carFuel = value;
  }

  get carColor(): string {
    return this._carColor;
  }

  set carColor(value: string) {
    this._carColor = value;
  }

  get carCount(): string {
    return this._carCount;
  }

  set carCount(value: string) {
    this._carCount = value;
  }

  get carFreeMilageFDay(): string {
    return this._carFreeMilageFDay;
  }

  set carFreeMilageFDay(value: string) {
    this._carFreeMilageFDay = value;
  }

  get carFreeMilageFMonth(): string {
    return this._carFreeMilageFMonth;
  }

  set carFreeMilageFMonth(value: string) {
    this._carFreeMilageFMonth = value;
  }

  get carPriceFRentDaily(): string {
    return this._carPriceFRentDaily;
  }

  set carPriceFRentDaily(value: string) {
    this._carPriceFRentDaily = value;
  }

  get carPricesFRentMonthly(): string {
    return this._carPricesFRentMonthly;
  }

  set carPricesFRentMonthly(value: string) {
    this._carPricesFRentMonthly = value;
  }

  get carPriceFExKM(): string {
    return this._carPriceFExKM;
  }

  set carPriceFExKM(value: string) {
    this._carPriceFExKM = value;
  }
}
