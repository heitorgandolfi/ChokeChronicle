import * as SQLite from "expo-sqlite";

export const dataBaseConnection = () => {
  const db = SQLite.openDatabase("JiuJitsuTrackerTest.db");
  return db;
};
