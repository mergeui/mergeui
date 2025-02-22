/**
 * Copyright (c) Paymium.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root of this projects source tree.
 */

export type ICalendarProps = {
  getDayProps: IGetDayPropsFn;
  getNextMonthProps: IGetPrevNextPropsFn;
  getNextYearProps: IGetPrevNextPropsFn;
  getPrevMonthProps: IGetPrevNextPropsFn;
  getPrevYearProps: IGetPrevNextPropsFn;
  months: IMonth[];
  resetState: () => void;
  setMonth: (_month: number) => void;
  setYear: (_year: number) => void;
  monthsInRange: { month: number; year: number }[];
};

export type IDay = {
  date: Date;
  events?: IEvent[];
  isAdjacentMonth?: boolean;
  isSelectable?: boolean;
  isSelected?: boolean;
  isToday?: boolean;
  isWeekend?: boolean;
};

export type IEvent = {
  [key: string]: unknown;
  end?: Date;
  start: Date;
};

export type IGetDayPropsFn = {
  (_options: IGetDayPropsOptions): Partial<IGetDayPropsReturns>;
};

export type IGetDayPropsOptions = {
  day: IDay | null;
};

export type IGetDayPropsReturns = {
  'aria-label': string;
  'aria-selected': boolean;
  'disabled': boolean;
  'key': string;
  'onClick': () => void;
  'role': string;
};

export type IGetPrevNextPropsFn = {
  (): IGetPrevNextPropsReturns;
};

export type IGetPrevNextPropsReturns = {
  'aria-label': string;
  'disabled': boolean;
  'onClick': () => void;
  'role': string;
  'type': 'button';
};

export type IMonth = {
  month: number;
  weeks: IWeek[];
  year: number;
};

export type IUseCalendarOptions = {
  availableDates: Date[];
  events: IEvent[];
  firstDayOfWeek: number;
  maxDate: Date;
  minDate: Date;
  monthsToDisplay?: number;
  onDateSelected: (_day: IDay) => void;
  selectedDate?: Date | number | string;
};

export type IWeek = IDay[];
