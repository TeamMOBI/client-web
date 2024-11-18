"use client";

import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../Input";

const Calendar = () => {
  const [selected, setSelected] = useState<Date | null>(new Date());

  const parseDateToString = (date: Date | null) => {
    if (!date) return "";

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  };

  return (
    <DatePicker
      customInput={<Input label="방문 날짜*" icon={false} />}
      value={parseDateToString(selected)}
      selected={selected}
      onChange={(date: Date | null) => setSelected(date)}
    />
  );
};

export default Calendar;
