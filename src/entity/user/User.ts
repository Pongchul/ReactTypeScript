import Gender from "../Gender";

export default class User {
  public id = 1;
  public name = "pongchul";
  public email = "asdfg12@google.com";
  public level = 10; // There are 1 to 10 and 1 is the best.
  public gender = Gender.MALE;
  public age = 10;

  public isAdult() {
    return this.age >= 20;
  }

  public getAdultLabel() {
    return this.isAdult() ? "어른" : "어린이";
  }
}
