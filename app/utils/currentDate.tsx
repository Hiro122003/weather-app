import React from "react";

export const getCurrentDate = () => {
  const currentDate = new Date().toLocaleDateString("ja-JA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
 return currentDate
};
