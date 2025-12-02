/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import '../../styles/CometChatLogin/CometChatLogin.css';
import logo from '../../assets/logo.mp4';
import { CometChatUIKit } from '@cometchat/chat-uikit-react';
import { sampleUsers } from './sampledata';

type User = {
  name: string;
  uid: string;
  avatar: string;
};

type UserJson = {
  users: User[];
};

const CometChatLogin = () => {
  const [defaultUsers, setDefaultUsers] = useState<User[]>([]);
  const [uid, setUid] = useState('');
  const [selectedUid, setSelectedUid] = useState('');
  const isDarkMode = document.querySelector('[data-theme="dark"]') ? true : false;


 

  async function login(uid: string) {
    setSelectedUid(uid);
    try {
      CometChatUIKit.login(uid)?.then((loggedInUser) => {
        console.log('Login successful, loggedInUser:', loggedInUser);
      });
    } catch (error) {
      console.error('login failed', error);
    }
  }

  async function handleLoginWithUidFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(uid);
    } catch (error) {
      console.error(error);
    }
  }

  

  return (
    <div className="cometchat-login__container">
      <div
  style={{
    width: "300px",
    height: "250px",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "0 auto"
  }}
>
  <video
    src={logo}
    autoPlay
    loop
    muted
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }}
  />
</div>

      
          <div className="cometchat-login__title">Sign in to YapSite</div>
          <div className="cometchat-login__sample-users">
          

        <div className="cometchat-login__divider-section" style={{ display: 'flex' }}>
          <div className="cometchat-login__divider" />

          <div className="cometchat-login__divider" />
        </div>

        <div className="cometchat-login__custom-login">
          <form onSubmit={handleLoginWithUidFormSubmit} className="cometchat-login__form">
            <div className="cometchat-login__input-group">
              <label className="input-label cometchat-login__input-label" htmlFor="">
                Your UID
              </label>
              <input
                className="cometchat-login__input"
                type="text"
                value={uid}
                onChange={(e) => {
                  setUid(e.target.value);
                }}
                required
                placeholder="Enter your UID"
              />
            </div>

            <button className="cometchat-login__submit-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CometChatLogin;
