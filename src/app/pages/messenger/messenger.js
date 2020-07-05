import React from 'react';
import './messenger.scss';
//components
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sideBar';
import { CreateChannelProvider } from '../../context/createChannel';

function Messenger() {
  return (
    <div className="Messenger">
      <CreateChannelProvider>
        <Navbar />
        <Sidebar />
      </CreateChannelProvider>
    </div>
  );
}

export default Messenger;
