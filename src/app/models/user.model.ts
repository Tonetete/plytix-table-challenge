export type Expertise =
  | 'Experienced'
  | 'Senior'
  | 'Advanced'
  | 'Expert'
  | undefined;

export class User {
  [k: string]: any;
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public department: string,
    public created: Date | string | number,
    public expertise?: Expertise
  ) {}
}
