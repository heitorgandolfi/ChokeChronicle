import { dataBaseConnection } from "../dbConnection";
import { formatDateForSQL } from "../../shared/utils/SqlDateFormatter";
import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";

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
        "SELECT *, substr(trainningDate, 7, 4) || substr(trainningDate, 4, 2) || substr(trainningDate, 1, 2) AS formattedDate FROM Trainning ORDER BY formattedDate DESC",
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

const getTrainningsByLastNDays = ({ days }: any): Promise<NewWorkoutFormFieldsProps[]> => {
  return new Promise((resolve, reject) => {
    const numberOfDays = parseInt(days, 10);

    if (isNaN(numberOfDays)) {
      reject("Invalid number of days");
      return;
    }

    db.transaction((tx) => {
      const currentDate = new Date();
      const startDate = new Date(currentDate.getTime() - (numberOfDays - 1) * 24 * 60 * 60 * 1000);

      const formattedStartDate = formatDateForSQL(startDate);
      const formattedCurrentDate = formatDateForSQL(currentDate);

      tx.executeSql(
        "SELECT *, substr(trainningDate, 7, 4) || '-' || substr(trainningDate, 4, 2) || '-' || substr(trainningDate, 1, 2) AS formattedTrainningDate FROM Trainning WHERE substr(trainningDate, 7, 4) || '/' || substr(trainningDate, 4, 2) || '/' || substr(trainningDate, 1, 2) BETWEEN ? AND ? ORDER BY trainningDate DESC",
        [formattedStartDate, formattedCurrentDate],
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          console.error("SQL Error:", error);
          reject("Ops... Something went wrong! Try again later.");
          return false;
        },
      );
    });
  });
};

const deleteTrainningFromDatabase = (id: number) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM Trainning WHERE Id = ?",
        [id],
        (_, result) => {
          resolve(result.rowsAffected);
        },
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
  getTrainningsByLastNDays,
  deleteTrainningFromDatabase,
  dropTrainningTable,
};
