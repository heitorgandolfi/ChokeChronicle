import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";
import { dataBaseConnection } from "../dbConnection";

const db = dataBaseConnection();

const addTrainningToDatabase = ({
  trainningDate,
  trainningLocation,
  whiteBelt,
  blueBelt,
  purpleBelt,
  brownBelt,
  blackBelt,
  rolls,
  rests,
  subs,
  taps,
  mood,
}: NewWorkoutFormFieldsProps) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Trainning (trainningDate, trainningLocation, whiteBelt, blueBelt, purpleBelt, brownBelt, blackBelt, rolls, rests, subs, taps, mood)" +
          "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          trainningDate,
          trainningLocation,
          whiteBelt,
          blueBelt,
          purpleBelt,
          brownBelt,
          blackBelt,
          rolls,
          rests,
          subs,
          taps,
          mood,
        ],
        (_, result) => {
          resolve(result.insertId);
        },
        (_, error) => {
          reject("Ops... Something went wrong! Try again later.");
          return false;
        },
      );
    });
  });
};

const getAllTrainningsFromDatabase = (): Promise<NewWorkoutFormFieldsProps[]> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Trainning ORDER BY Id DESC",
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          reject("Ops... Something went wrong! Try again later.");
          return false;
        },
      );
    });
  });
};

const dropTrainningTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE IF EXISTS Trainning",
        [],
        (_, result) => {
          resolve("Table Trainning dropped successfully");
        },
        (_, error) => {
          reject("Failed to drop table Trainning");
          return false;
        },
      );
    });
  });
};

export const TrainningRepository = {
  addTrainningToDatabase,
  getAllTrainningsFromDatabase,
  dropTrainningTable,
};
