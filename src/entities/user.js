import UTCtoDateObj from "../utils/parseUTCstring";

class User {
  constructor(firstName, lastName, id, email, createdAt) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.email = email;
    this.createdAt = createdAt;
  }
  getTimeStamp() {
    return UTCtoDateObj(this.createdAt);
  }
}

export default User;
