/**
 * Created by Mahesh on 14-08-2018.
 */
export class Member {
  constructor(
    public firstName: string,
    public lastName: string,
    public pin: string,
    public dob: Date,
    public email: string,
    public gender:string,
    public department:string,
    public membertype:string
  ) {  }
}
