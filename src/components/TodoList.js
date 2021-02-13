import React from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto; //나중에 항목이 많아지면 scroll bar
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="test for doing right" done={true} />
        </TodoListBlock>
    )
}

export default TodoList
