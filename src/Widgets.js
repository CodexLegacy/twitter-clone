import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets-widgetContainer">
                <h2>What's happening?</h2>

                <TwitterTweetEmbed tweetId={"1316630579128008704"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="CodexLegacy"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://www.facebook.com/olumese.stevejohn"}
                    options={{ text: "#reactjs is a beautiful javascript library", via: "CodexLegacy" }}
                />
            </div>
        </div>
    );
}

export default Widgets;
