import { dataBaseConnection } from "../dbConnection";

export const initDataBase = () => {
  const db = dataBaseConnection();

  const query =
    "CREATE TABLE IF NOT EXISTS Trainning (" +
    "Id INTEGER PRIMARY KEY AUTOINCREMENT, " +
    "trainningDate TEXT, " +
    "trainningLocation TEXT, " +
    "whiteBelt TEXT, " +
    "blueBelt TEXT, " +
    "purpleBelt TEXT, " +
    "brownBelt TEXT, " +
    "blackBelt TEXT, " +
    "rolls TEXT, " +
    "rests TEXT, " +
    "subs TEXT, " +
    "taps TEXT, " +
    "mood TEXT " +
    ")";

  db.transaction((tx) => {
    tx.executeSql(query);
  });
};
