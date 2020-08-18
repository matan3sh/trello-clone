import React from 'react';
import { connect } from 'react-redux';
import { sort } from '../../store/actions';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import List from '../list/List';
import ActionButton from '../list/ActionButton';

import styled from 'styled-components';
const ListContainer = styled.div`
  display: flex;
  margin: 8px;
`;

const Home = ({ lists, sort }) => {
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) return;
    const properties = {
      droppableIdStart: source.droppableId,
      droppableIdEnd: destination.droppableId,
      droppableIndexStart: source.index,
      droppableIndexEnd: destination.index,
      draggableId,
      type,
    };
    sort(properties);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='all-lists' direction='horizontal' type='list'>
        {(provided) => (
          <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
            {lists.map((list, index) => (
              <List listId={list.id} key={list.id} list={list} index={index} />
            ))}
            {provided.placeholder}
            <ActionButton list />
          </ListContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => ({
  lists: state.listApp.lists,
});

const mapDispatchToProps = {
  sort,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
