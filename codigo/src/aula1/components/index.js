import React from "react";
import Comment from "./Comment";
import Clock from "./Clock";
import ToggleButton from "./ToggleButton";
import LoginControl from "./LoginControl";

const Components = () => {

    // Gerado em http://pajhome.org.uk/crypt/md5/
    const myHash = "58bdbac124bae2639efff9093ed0e67d";

    const author = {
        name: "Ricardo Glodzinski",
        avatarUrl: "https://www.gravatar.com/avatar/" + myHash
    };

    return (
        <div>
            <Comment
                author={author}
                text="Texto do comentário"
                date={new Date()} />
            <br />
            <Clock />
            <br />
            <ToggleButton />
            <br />
            <LoginControl />
        </div>
    );
};

export default Components;