/* This example requires Tailwind CSS v2.0+ */

import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Icon } from '@iconify/react';
import discordIcon from '@iconify/icons-mdi/discord';

export default function Example() {
    return (
      <div id="donate" className="bg-gray-50">
        <div className="px-4 py-2 mx-auto max-w-8xl sm:px-6 lg:py-4 lg:px-12 lg:flex lg:items-center lg:justify-between">
          <h2 className="font-serif font-semibold tracking-tight text-gray-900 text-md ">
            <span className="block text-lg font-bold 1xl">Donation Addresses:</span>
            
            <span className="block font-mono text-sm ">E-Transfer: bigdirtyoca@gmail.com</span>
            <span className="block font-mono text-sm ">ETH: 0x689928419c12e6cf81cea0241963fec3300b470c</span>
            <span className="block font-mono text-sm ">CRO: cro100t86ugn9nv4pkquayq0yyredg7al8fdrwe72s</span>
            <span className="block font-mono text-sm ">BTC: bc1qgp952peqpvf6zfsy2m6ak67zgw0252g0lmr9k6</span>
            
          </h2>
          <div className="flex gap-2 mt-8 lg:mt-0 ">
            <div className="inline-flex " >
            <a href="https://mobile.twitter.com/KevtheFishermen">
            <TwitterIcon 
            	fontSize= "large"
              to="/any-url"
            />
            </a>
            {/* <RedditIcon    
                fontSize= "large"
                to="/any-url"
            />
            <FacebookIcon 
                fontSize= "large"
                to="/any-url"
            />
            <InstagramIcon 
                fontSize= "large"
                to="/any-url"
            />
            <TelegramIcon 
                fontSize= "large"
                to="/any-url"
            /> */}
              
            <a href="https://www.youtube.com/watch?v=alsAp1WHD84&feature=emb_title">
            <YouTubeIcon 
                fontSize= "large"
                
            />
            </a>
            
            <a href="https://discord.gg/c28DBcuM">
            <Icon 
                icon={discordIcon} 
                to="/any-url"
                width="36" 
                height="36"
            />
            </a>
            </div>

          </div>
          <h2 className="font-serif font-medium tracking-tight text-gray-900 text-md ">
            <span className="block text-lg font-bold 1xl">Contact Info:</span>
            
            <span className="block font-serif text-sm font-semibold ">Kevin_gale101@hotmail.com</span>

          </h2>

          
        </div>
      </div>
    )
  }