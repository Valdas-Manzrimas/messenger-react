import React, { useState, useContext } from 'react';
import './index.scss';
import chatImg from '../../assets/chat.svg';
import addImg from '../../assets/add.svg';
//components
import { CreateChannel } from '../../context/createChannel';
import { AuthenticationContext } from '../../context/authentication';

function Sidebar() {
  const { createChannel } = useContext(CreateChannel);
  const { token } = useContext(AuthenticationContext);

  const [isChannelHidden, setChannelIsHidden] = useState(true);
  const [isUsersHidden, setUsersIsHidden] = useState(true);
  const [channelData, setChannelData] = useState([]);

  let toogleChannelBox = () => {
    setChannelIsHidden(isChannelHidden ? false : true);
    console.log(channelData);
  };

  let toogleUserBox = () => {
    setUsersIsHidden(isUsersHidden ? false : true);
  };

  let channelClass = isChannelHidden ? 'isHidden' : 'allChannels';
  let userClass = isUsersHidden ? 'isHidden' : 'allUsers';

  // const getAllChannels = async () => {
  //   try {
  //     let channels = await fetch('http://localhost:4000/v1/getAllChannels', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'x-auth-msg': token,
  //       },
  //     });
  //     if (!channels.ok) throw channels.json();
  //     setChannelData(await channels.json());
  //   } catch (e) {
  //     console.log(await e);
  //   }
  // };

  return (
    <div className="Sidebar">
      <div className="sideHeader">
        <span className="username">Username</span>
        <img src={chatImg} alt="chat" />
      </div>
      <hr></hr>
      <div className="sideBar-Header">
        <span onClick={toogleChannelBox}>Channels</span>
        <img
          className="add-item"
          src={addImg}
          alt="add"
          onClick={createChannel}
        />
      </div>
      <div className={channelClass}>
        <ul className="list-groclassNameup"></ul>
      </div>
      <div className="sideBar-Header">
        <span onClick={toogleUserBox}>Users</span>
        <img className="add-item" src={addImg} alt="add" />
      </div>
      <div className={userClass}>
        <ul className="list-group"></ul>
      </div>
    </div>
  );
}

export default Sidebar;
