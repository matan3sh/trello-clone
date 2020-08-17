import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addList, addItem } from '../../store/actions';

import { Icon, Card, Button } from '@material-ui/core';
import TextArea from 'react-textarea-autosize';

const ActionButton = ({ list, listId, addList, addItem }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState('');

  const buttonText = list ? 'Add another list' : 'Add another card';
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? 'white' : 'inherit';
  const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

  const onSubmit = () => {
    if (text === '') return;
    if (list) {
      addList(text);
      setText('');
    } else {
      addItem(text, listId);
      setText('');
    }
  };

  const renderForm = () => {
    const placeholder = list
      ? 'Enter list title...'
      : 'Enter title for this card...';
    const buttonTitle = list ? 'Add List' : 'Add Card';
    return (
      <div>
        <Card style={styles.card}>
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={() => setFormOpen(false)}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={styles.textArea}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            variant='contained'
            style={styles.button}
            onMouseDown={onSubmit}
          >
            {buttonTitle}
          </Button>
          <Icon style={styles.icon}>close</Icon>
        </div>
      </div>
    );
  };

  return (
    <>
      {formOpen ? (
        renderForm()
      ) : (
        <div
          style={{
            ...styles.openForButtonGroup,
            opacity: buttonTextOpacity,
            color: buttonTextColor,
            background: buttonTextBackground,
          }}
          onClick={() => setFormOpen(true)}
        >
          <Icon>add</Icon>
          <p>{buttonText}</p>
        </div>
      )}
    </>
  );
};

const styles = {
  openForButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  textArea: {
    resize: 'none',
    width: '100%',
    overflow: 'hidden',
    outline: 'none',
    border: 'none',
    fontFamily: 'Roboto, sans-serif',
    padding: '5px 10px',
  },
  card: {
    overflow: 'visible',
    minHeight: 80,
    minWidth: 272,
    padding: '6px 8px 2px',
  },
  button: {
    color: '#fff',
    backgroundColor: '#5aac44',
  },
  icon: {
    marginLeft: 8,
    cursor: 'pointer',
  },
  formButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
  },
};

const mapDispatchToProps = {
  addList,
  addItem,
};

export default connect(null, mapDispatchToProps)(ActionButton);
