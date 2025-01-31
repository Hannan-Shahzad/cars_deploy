export interface IUser {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string;
    location?: string;
    role: "user1" | "user2";
    createdAt?: Date;
    updatedAt?: Date;
  }
  