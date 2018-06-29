import React, { Component } from 'react';
import { yelpLogo } from './yelp.jsx';

class App extends React.Component {
  render() {
    return (
      <div className='whole-container'>
      <div className ='header-container'>
      
      <div className='header'>
        
        <div className='header-app-name'>Yelp on Slack</div>
 
          <div className='git-link-logos'> 
    

       
            <a href="">
                  <img className='github-logo' src="http://res.cloudinary.com/nenry/image/upload/v1530234927/GitHub-Mark-Light-120px-plus.png" alt=""/>
            </a>
            
            <div className=''>
                <a href="">
                  <img className='linkedin-logo'src="http://res.cloudinary.com/nenry/image/upload/v1530235167/In-White-128px-R.png" alt="" />
                </a>
                <a href="">
                  <img className='linkedin-logo' src="https://res.cloudinary.com/nenry/image/upload/v1530235183/In-2CRev-128px-R.png" alt="" />
                </a>
                <a href="">
                  <img className='linkedin-logo' src="http://res.cloudinary.com/nenry/image/upload/v1530235159/In-Black-128px-R.png" alt="" />
                </a>

                <a href="">
                  <img className='linkedin-logo' src="http://res.cloudinary.com/nenry/image/upload/v1530235167/In-White-128px-R.png" alt="" />
                </a>
              
              </div>          
    
          </div>
        </div>
        {/* <div className='content-container'>
            <div>Logo</div>
            <h1>Insert Yack Splash Page Stuff Here!!</h1>
            <a href="https://slack.com/oauth/authorize?scope=incoming-webhook&client_id=387620765190.386684586035">
              <img  alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png"
                srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
            </a>
        </div> */}
      </div>
      
      <div className='first-content-container'>
          <div>Logo</div>
          <div className='header-text'>Yelp, Slack Integration</div>
          <div className='logo-plus'>
          
            {yelpLogo}
            <div className='plus'>
            +
            </div>
            <img className='slack-logo' src="http://res.cloudinary.com/nenry/image/upload/v1530205092/slack_256.png" alt=""/> 

          </div>
          <a href="https://slack.com/oauth/authorize?scope=incoming-webhook&client_id=387620765190.386684586035">
            <img className='add-slack' alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png"
              srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
          </a>
      </div>
        <div className='second-content-container'>
          <div className='what-text'>
          What is Yelp on Slack?
          </div>
        </div>
  
              </div>

    );
  }
}

export default App;