import React from 'react'
import { FacebookEmbed, InstagramEmbed, TwitterEmbed } from 'react-social-media-embed';
import "../../style/pages/socialmedia.css"


const SocialMediaPage = () => {
  return (
    <div id='SocialMediaContainer'>
      
      <div>
        <InstagramEmbed
          url="https://www.instagram.com/p/CgoKIodocbj/"
          width={500}
        />
      </div>
      
      <div>
        <FacebookEmbed url="https://www.facebook.com/qdipsx/posts/pfbid034vGP6y6cm2PLXjqsX7d6f9cQf8br1f6Np78oDy8gMxMLpx2kKRtdrU9pG48VwvUCl" width={500} />
      </div>

      <div>
        <TwitterEmbed
          url="https://twitter.com/qdi_psx/status/1558682565858545665"
          width={500}
        />
      </div>


    </div>
  )
}

export default SocialMediaPage