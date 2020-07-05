import React, { useState, useContext } from 'react';
import './index.scss';
import closeBtn from '../../assets/close.svg';
//components
import Input from '../input';
import Button from '../../components/button';
import { CreateChannel } from '../../context/createChannel';

function NewChannelModel() {
  const [channelInput, setChannelInput] = useState('');

  const { createChannel } = useContext(CreateChannel);

  const setChannelName = (e) => {
    setChannelInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createChannel(channelInput);
  };

  return (
    <div className="NewChannelModel">
      <form onSubmit={onSubmit}>
        <div>
          <h2>Add Channel</h2>
          <img src={closeBtn} className="closeBtn" />
        </div>
        <div>
          <Input
            type="password"
            name="pass"
            htmlFor="pass"
            onChange={setChannelName}
          >
            Enter the new channel name:
          </Input>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
