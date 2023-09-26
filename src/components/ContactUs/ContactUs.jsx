import React from 'react'

export default class ContactUs extends React.Component {

    async componentDidMount() {
        // You should be able to stop camera from here
        const videoEl = document.getElementById('arjs-video');
        if (videoEl) {
            // const stream = videoEl.srcObject;
            // // now get all tracks
            // const tracks = await stream.getTracks();
            // // now close each track by having forEach loop
            // tracks.forEach(function(track) {
            //     // stopping every track
            //     track.stop();
            // });
            // // assign null to srcObject of video
            // videoEl.srcObject = null;
            document.getElementById('arjs-video').remove();
        }
    }

    render() {
        return (
            <>
                <span>Contact page</span>
            </>
        )
    }
}