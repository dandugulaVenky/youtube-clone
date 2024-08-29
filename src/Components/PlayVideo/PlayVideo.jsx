import React from 'react';
import './PlayVideo.css'
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png';
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'


const playvideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted ></video>
        <h3>Best YouTube Channel To Learn Web Development</h3>
        <div className='play-video-info'>
            <p>15257 Views &bull; 8 days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />64</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel that makes learning Easy</p>
            <p>Subscribe GreatStack to Watch More Tutorials on Web development</p>
            <hr />
            <h4>130 Comments</h4>
        </div>
    </div>
  )
}

export default playvideo