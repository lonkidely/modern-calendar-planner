import React from 'react';
import Card from 'react-bootstrap/Card';
import './CalendarDay.scss';

type CalendarDayProps = {
    day: number,
    class:string,
};

export const CalendarDay:React.FC<CalendarDayProps> = (props:CalendarDayProps) => {
    return (
        <div>
            <Card className={props.class}>
                <Card.Header className="calendar_day_header">{ props.day }</Card.Header>
            </Card>
        </div>
    );
};
