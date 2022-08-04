import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import FaceBookQdiPage from '../../components/socialMedia/facebook.component';


const SocialMediaPage = () => {
  return (
    <div>
      <div>
        {/* <FaceBookQdiPage /> */}
      </div>
      <div>
        <TwitterFollowButton
          screenName={'qdi_psx'}
        />
      </div>
      <div>
        <TwitterTimelineEmbed
          sourceType="qdi_psx"
          screenName="qdi_psx"
          options={{ height: 400, width: 400 }}
        />

      </div>
    </div>
  )
}

export default SocialMediaPage