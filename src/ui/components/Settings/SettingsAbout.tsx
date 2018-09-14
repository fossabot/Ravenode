import * as React from 'react';
import { Button } from 'react-bootstrap';

import ExternalLink from '../Shared/ExternalLink';

import * as app from '../../lib/app';
import * as SettingsActions from '../../actions/SettingsActions';

/*
|--------------------------------------------------------------------------
| Child - About
|--------------------------------------------------------------------------
*/

export default class SettingsAbout extends React.Component {
  render () {
    return (
      <div className='setting setting-about'>
        <div className='setting-section'>
          <h4>About Ravenode</h4>
          <p>Ravenode was forked from Museeks.io on September 10, 2018.</p>
          <p>Ravenode { app.version }{ ' - ' }
            <ExternalLink href='http://github.com/eligeorgios/ravenode'>Ravenode Repository</ExternalLink>{ ' - ' }<ExternalLink href='http://museeks.io'>Museeks.io</ExternalLink>

            { ' - ' }
            <ExternalLink href={`https://github.com/eligeorgios/ravenode/releases/tag/$
            {app.version}`}>Release Notes</ExternalLink>
          </p>
          <Button
            bsSize='small' className='update-checker'
            onClick={async () => { await SettingsActions.checkForUpdate(); }}
          >Check for updates</Button>
        
        </div>
        <br />
        <div className='setting-section'>
          <h4>Contributors</h4>
          <div className='contributors-list'>
            <p>
              Made with lots of <span className='heart'>♥</span> by Eliyahu Georgios (<ExternalLink href='http://github.com/eligeorgios/'>eligeorgios</ExternalLink>), Pierre de la Martinière
              (<ExternalLink href='http://pierrevanmart.com'>KeitIG</ExternalLink>),
              and a bunch of <ExternalLink href='https://github.com/KeitIG/museeks/graphs/contributors'>great developers over at Github</ExternalLink>.
            </p>
           <br />
          </div>
        </div>
        <div className='setting-section'>
          <h4>Report issue / Ask for a feature</h4>
          <div className='contributors-list'>
            <p>
              Although Ravenode/Museeks is mostly stable, there are still a few bugs buried somewhere in the haystack. Don't hesitate to report them or to ask for features you would like
               using our <ExternalLink href='http://github.com/eligeorgios/ravenode/issues'>bug tracker</ExternalLink>.
            </p>
         <br />
          </div>
        </div>
      </div>
    );
  }
}
