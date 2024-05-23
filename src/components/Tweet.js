import React from 'react';
import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './TimeStamp';
import Message from './Message';
import Actions from './Actions';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage profileImage={tweet.user.image} />

      <div className="body">
        <div className="top">
        <User name={tweet.user.name} handle={tweet.user.handle} />
        <Timestamp timeStamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
