import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './createChannel.scss';
import closeBtn from '../assets/close.svg';
import Input from '../components/input';
import Button from '../components/button';

import { AuthenticationContext } from '../context/authentication';

export const CreateChannel = React.createContext({});

export function CreateChannelProvider({ children }) {
  const [showChannelModal, setShowChannelModal] = useState(false);
  const [channelInput, setChannelInput] = useState('');

  const { token } = useContext(AuthenticationContext);
  const history = useHistory();

  let sendChannel = async (e) => {
    e.preventDefault();

    if (channelInput) {
      try {
        let res = await fetch('http://localhost:4000/v1/createChannel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-msg': token,
          },
          body: JSON.stringify({ title: channelInput }),
        });
        console.log('channel token', res);
        closeCreateChannel();

        if (!res.ok) throw res.json();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const setChannelName = (e) => {
    setChannelInput(e.target.value);
  };

  const createChannel = (e) => {
    e.preventDefault();
    setShowChannelModal(true);
  };

  const closeCreateChannel = (e) => {
    setShowChannelModal(false);
  };
  return (
    <CreateChannel.Provider value={{ createChannel }}>
      {children}
      {showChannelModal && (
        <div className="NewChannelModel">
          <form onSubmit={sendChannel}>
            <div className="container-title">
              <h3>Add Channel</h3>
              <img
                src={closeBtn}
                className="closeBtn"
                onClick={closeCreateChannel}
              />
            </div>
            <div className="inputDiv">
              <Input
                type="text"
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
      )}
    </CreateChannel.Provider>
  );
}
