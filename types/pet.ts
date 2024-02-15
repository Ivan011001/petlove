export interface IPet {
  id: number;
  species: string;
  title: string;
  name: string;
  birthday: string;
  sex: string;
  imgURL: string;
}

//   ownerId  Int?
//   owner    User?  @relation(fields: [ownerId], references: [id])
