export interface IUser {
    id: number;
    name: string;
    username: string;
    gender: string;
    email: string;
    phone: string;
    address: {
        city: string,
        zip: number
    };
}
