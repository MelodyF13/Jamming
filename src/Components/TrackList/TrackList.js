import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        if (this.props.tracks) {
            var myList = this.props.tracks.map(track => {
                return <Track id={track.id} track={track} />
            })
        }
        return (
            <div className="TrackList">
                { myList }
            </div>
        )
    }
}

export default TrackList