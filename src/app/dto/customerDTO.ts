export default class customerDTO{
  private email:string;
  private nic:string;
  private lisenno:string;
  private name:string;
  private address:string
  private contact:string;
  private password:string;



  constructor(email: string,nic:string,lisenno:string,name:string,address:string,contact:string,password:string) {
    this.email = email;
    this.nic=nic;
    this.lisenno=lisenno;
    this.name=name;
    this.address=address;
    this.contact=contact;
    this.password=password;
  }

  getemail(): string {
    return this.email;
  }

  setemail(emailValue: string) {
    this.email = emailValue;
  }
  getnic():string{
    return this.nic
  }
  setnic(nicValue:string){
    this.nic=nicValue;
  }
  getlisenNo():string{
    return this.lisenno;
  }
  setlisenNo(lisenNoValue:string){
    this.lisenno=lisenNoValue;
  }
  getname():string{
    return this.name;
  }
  setname(nameValue:string){
    this.name=nameValue;
  }
  getaddress():string{
    return this.address;
  }
  setaddress(addressValue:string){
    this.address=addressValue;
  }
  getcontact():string{
    return this.contact
  }
  setcontact(contactValue:string){
    this.contact=contactValue;
  }
  getpssword():string{
    return this.password;
  }
  setpassword(passwordValue:string){
    this.password=passwordValue;
  }


}
