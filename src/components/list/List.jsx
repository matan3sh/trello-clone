import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Item from './Item';
import ActionButton from './ActionButton';

import styled from 'styled-components';
const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`;
const ListTitle = styled.h2`
  margin: '5px 0';
  font-size: 16px;
`;

const List = ({ list, listId, index }) => {
  return (
    <Draggable draggableId={listId} index={index}>
      {(provided) => (
        <ListContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={listId}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <ListTitle>{list.title}</ListTitle>
                {list.cards.map((card, index) => (
                  <Item card={card} key={card.id} id={card.id} index={index} />
                ))}
                {provided.placeholder}
                <ActionButton listId={listId} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

export default List;
