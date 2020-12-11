import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Steve-John',
            username: 'CodexLegacy',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1317477721514102786/lo6Rq0KF_400x400.jpg",
        });
        setTweetMessage("");
        setTweetImage("");
    };
// output
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox-input">
                     
                    <Avatar src="https://pbs.twimg.com/profile_images/1317477721514102786/lo6Rq0KF_400x400.jpg" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} placeholder="What's happening?" type="text" />
                </div>
                <input onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox-imageInput" placeholder="Optional: Enter image URL" type="text" />
                <Button onClick={sendTweet} type="submit" className="tweetBox-tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
