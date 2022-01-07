import SettingLeftPanel from '../../../components/SettingLeftPanel';
import './index.scss';
import * as React from 'react';

const Integration: React.FC = () => {
  return (
    <div className="mainContainer">
      <div className="leftSidebar">
        <SettingLeftPanel active="integrations" />
      </div>
      <div className="contArea">
        <div className="title">Integrations</div>
        <div className="pricingList">
          <div className="pricingItemOuter">
            <div className="pricingItem">
              <span className="itemImage">
                <img src='/assets/images/Icon_white.jpg' alt="imag1" />
              </span>

              <div className="title">World of Haiku</div>

              <div className="bottomArea">
                <button
                  className="btnSubscribe"
                  type="button"
                  onClick={() => {
                    const data = { selectedPlan: 1 };
                    console.log('data--->', data);
                    
                  }}
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
          <div className="pricingItemOuter">
            <div className="pricingItem">
              <span className="itemImage">
                <img src='/assets/images/badgr_white.jpg' alt="badgr" />
              </span>
              
              <div className="title">Badgr</div>

              <div className="bottomArea">COMING SOON</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
