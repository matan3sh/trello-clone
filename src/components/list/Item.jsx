import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';
const ItemContainer = styled.div`
  margin-bottom: 8px;
`;

const Item = ({ card, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <ItemContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card>
            <CardContent>
              <Typography gutterBottom>{card.text}</Typography>
            </CardContent>
          </Card>
        </ItemContainer>
      )}
    </Draggable>
  );
};

export default Item;
