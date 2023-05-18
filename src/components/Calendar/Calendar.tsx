import React, {useState} from 'react';
import './Calendar.scss';
import {Button, Table} from 'react-bootstrap';
import {CalendarDay} from "@components/CalendarDay/CalendarDay";


export const Calendar:React.FC<unknown> = () => {
    const daysOfWeek:string[] = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const monthOfYear:string[] = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];

    const currentDate:Date = new Date();
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    const prevMonth = (month:number) => month === 0 ? 11 : month - 1;
    const prevMonthToYear = (month:number, year: number) => month === 0 ? year - 1 : year;
    const nextMonth = (month:number) => month === 11 ? 0 : month + 1;
    const nextMonthToYear = (month:number, year:number) => month === 11 ? year + 1 : year;

    const firstDayOfMonth:number = new Date(currentYear, currentMonth).getDay();
    const lastDayOfMonth:number = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastDayOfWeekCurrentMonth:number = new Date(currentYear, currentMonth + 1, 0).getDay();
    const lastDayOfPrevMonth:number = new Date(currentYear, currentMonth, 0).getDate();

    const updateMonthNext = () => {
        setCurrentMonth(month => nextMonth(month));
        setCurrentYear(year => nextMonthToYear(currentMonth, year));
    };

    const updateMonthPrev = () => {
        setCurrentMonth(month => prevMonth(month));
        setCurrentYear(year => prevMonthToYear(currentMonth, year));
    };

    type calendarDay = {
        day:number;
        type:string;
    };
    enum typeOfCalendarDay {
        active = "calendar_day",
        inactive = "calendar_day_inactive",
        today = "calendar_day_today",
    }

    let calendarMonth:calendarDay[] = [];
    for (let i = lastDayOfPrevMonth - (firstDayOfMonth === 0 ? 7 : firstDayOfMonth) + 2; i <= lastDayOfPrevMonth; i++) {
        calendarMonth = [...calendarMonth, {day:i, type:typeOfCalendarDay.inactive}];
    }
    for (let i = 1; i <= lastDayOfMonth; i++) {
        calendarMonth = [...calendarMonth, {day:i, type:typeOfCalendarDay.active}];
    }
    for (let i = 0; i < 7 - (lastDayOfWeekCurrentMonth === 0 ? 7 : lastDayOfWeekCurrentMonth); i++) {
        calendarMonth = [...calendarMonth, {day:1 + i, type:typeOfCalendarDay.inactive}];
    }
    if (calendarMonth.length < 42) {
        for (let i = 7 - (lastDayOfWeekCurrentMonth === 0 ? 7 : lastDayOfWeekCurrentMonth);
            i < 7 - (lastDayOfWeekCurrentMonth === 0 ? 7 : lastDayOfWeekCurrentMonth) + 7; i++) {
            calendarMonth = [...calendarMonth, {day:7 + i, type:typeOfCalendarDay.inactive}];
        }
    }
    if (currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
        const idx = calendarMonth.findIndex( el => el.day === currentDate.getDate() && el.type === typeOfCalendarDay.active);
        calendarMonth[idx].type = typeOfCalendarDay.today;
    }

    return (
        <div className="calendar">
            <Table borderless hover size={"sm"}>
                <thead>
                    <tr className="calendar__utils">
                        <th></th>
                        <th></th>
                        <th>
                            <div className="calendar__utils__left_btn">
                                <Button size="sm" onClick={updateMonthPrev}> &larr; </Button>
                            </div>
                        </th>

                        <th>
                            <div className="calendar__utils__current_month">
                                {monthOfYear[currentMonth] + " " + currentYear}
                            </div>
                        </th>

                        <th>
                            <div className="calendar__utils__right_btn">
                                <Button size="sm" onClick={updateMonthNext}> &rarr; </Button>
                            </div>
                        </th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        {
                            daysOfWeek.map((val, idx) => {
                                return <th key={idx}>{val}</th>;
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from(Array(calendarMonth.length).keys()).map((value) => {
                            return <tr key={value}>{
                                calendarMonth.slice(7 * value, 7 * (value + 1)).map((val, idx) => {
                                    return <td key={idx}><CalendarDay key={idx} day={val.day} class={val.type} /></td>;
                                })
                            }</tr>;
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};
