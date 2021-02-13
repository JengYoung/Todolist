import React from 'react'
import styled from 'styled-components';
import { useTodoState } from './TodoContext'
const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;
function getToday(date) {
    let month = date.getMonth();
    if (month < 9) {
        month = '0' + (month + 1)
    }
    let day = date.getDate();
    if (day <= 9) {
        day = '0' + day
    }
    return `${date.getFullYear()}년 ${month}월 ${day}일`
}

//date.toLocaleDateString('ko-KR', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
// });
//date.toLocaleDateString('ko-KR', {
//     weekday: 'long'
// })

const date = new Date();
const days = ['일요일', '월요일', '화요일', '수요일', '목요일','금요일', '토요일']; 

function TodoHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    
    return (
        <TodoHeadBlock>
            <h1>{getToday(date)}</h1>
            <div className="day">{days[date.getDay()]}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead
