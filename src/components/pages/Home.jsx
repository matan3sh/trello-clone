import React from 'react';
import { connect } from 'react-redux';
import { sort } from '../../store/actions';
import { DragDropContext } from 'react-beautiful-dnd';

import List from '../list/List';
import ActionButton from '../list/ActionButton';

import styled from 'styled-components';
const ListContainer = styled.div`
  display: flex;
  margin: 8px;
`;

const Home = ({ lists, sort }) => {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    const properties = {
      droppableIdStart: source.droppableId,
      droppableIdEnd: destination.droppableId,
      droppableIndexStart: source.index,
      droppableIndexEnd: destination.index,
      draggableId,
    };
    sort(properties);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListContainer>
        {lists.map((list) => (
          <List listId={list.id} key={list.id} list={list} />
        ))}
        <ActionButton list />
      </ListContainer>
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
