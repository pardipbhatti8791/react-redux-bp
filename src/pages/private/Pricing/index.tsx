import './index.scss';
import * as React from 'react';
//import { userSelectedPlan } from '@root/redux/slices/plan';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSelectedPlan } from '../../../store/authentication/action-creator';
import { useAppSelector } from '../../../hooks/hooks';

const PricingPage: React.FC = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const user = useAppSelector((state) => state.authReducer.user);

  const planMethod = [
    {
      id: 1,
      status: true,
      label : 'Started',
      name: 'Haiku Pro Started',
      price: 'Free',
      options : [{
        content : 'Try 15 minutes of ourfirst range.',
      },{
        content : 'View full leaderboard.'
      }],
      buttonText : 'Try For Free'
    },
    {
      id: 2,
      status: true,
      label: 'Full Access',
      name: 'Haiku Pro Full Access',
      price: '$45',
      price_label : [{
        content : '/month'
      }],
      options : [{
        content : 'Unlimited training for less than the cost of a single certification course.',
      },{
        content : '$1.63/day for world class cybersecurity training vs. $2000/day in a typical training course.'
      }],
      buttonText : 'Subscribe'
    },
  ];

  const modifyPlan = (planId : number) => {
    const data = { plan_id: planId};
    dispatch(userSelectedPlan(data));
    navigate('/plan');
  }

  return (
    <div className="mainContainer">
      <div className="pricing">
        <div className="title">
          Cybersecurity Learning Tools
          <br />
          Professional Training
        </div>
        <div className="pricingList">
          {planMethod &&
          planMethod.length > 0 &&
          planMethod.map((val, index) => {
            return (<div className="pricingItem" key={`price_${index}`}>
            <div className="label">{val?.label}</div>
            <div className="salePrice">
            <div className='amount'>{val?.price}</div>
            {val?.price_label &&
                val?.price_label.length > 0 &&
                val?.price_label.map((value, key) => {
                  return (
                    <span key={`sale_price_${key}`}>
                      {value?.content}
                    </span>
                  );
                })}
            </div>
            <div className="title">{val?.name}</div>
            {val?.options && val?.options.length > 0 && <div className="options">
              {val?.options.map((value,key) => {
                return <label className='optionList' key={`options~${key}`}>
                  <input type="checkbox" value="" checked/>
                  <span className="check-box-effect"></span>
                  <p>{value?.content}</p>
                </label>
              })}
              </div>
            }
            {val?.buttonText &&
            <div className="bottomArea">
              <button className="btnSubscribe" type="button" onClick={() => {
                modifyPlan(val?.id);
                //dispatch(userSelectedPlan(data));
                //navigate('/plan');
              }}>
                {user?.plan_id && user?.plan_id === val?.id ? 'Subscribed' : val?.buttonText}
              </button>
            </div>}
          </div>)
          })
          }
          <div className="pricingItem bgRed">
            <div className="label">COMING SOON</div>
            <div className="Price invisible">$599.88</div>
            <div className="iconHolder">
              <svg
                width="112"
                height="96"
                viewBox="0 0 112 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.6875 37.2908H90.2417L78.0059 58.2639H56.9233L44.6875 37.2908Z"
                  fill="url(#paint0_linear_2106_6700)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.5173 0H112L99.7642 20.9782H35.7531L23.5173 0Z"
                  fill="url(#paint1_linear_2106_6700)"
                />
                <path
                  d="M58.1613 58.2639L45.9255 37.2908L66.0486 58.2639H58.1613Z"
                  fill="#434242"
                  fillOpacity="0.502"
                />
                <path
                  d="M35.7532 20.9782L23.5173 0L43.6404 20.9782H35.7532Z"
                  fill="#434242"
                  fillOpacity="0.502"
                />
                <path
                  d="M56 96L0 0H24.1724L68.0862 75.283L56 96Z"
                  fill="url(#paint2_linear_2106_6700)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2106_6700"
                    x1="44.5842"
                    y1="47.7223"
                    x2="90.1271"
                    y2="47.7223"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#820810" />
                    <stop offset="1" stopColor="#3D070B" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2106_6700"
                    x1="23.4188"
                    y1="10.4418"
                    x2="111.883"
                    y2="10.4418"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A20812" />
                    <stop offset="1" stopColor="#302127" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2106_6700"
                    x1="-0.0917904"
                    y1="47.9451"
                    x2="67.9787"
                    y2="47.9451"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CE0815" />
                    <stop offset="1" stopColor="#61070D" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="title">
              HAIKU PRO +<br />
              VULCAN FORGE
            </div>
            <div className="options">
              <label className="optionList">
                <input type="checkbox" value="" />
                <p>
                  Create customized cyberranges with node-based visuall
                  programmer
                </p>
              </label>
              <label className="optionList">
                <input type="checkbox" value="" />
                <p>
                  World class cybersecurity training vs. $2000/day in a typical
                  training course.
                </p>
              </label>
            </div>
            <div className="bottomArea">COMING SOON!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
