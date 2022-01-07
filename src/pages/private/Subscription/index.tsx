import SettingLeftPanel from '../../../components/SettingLeftPanel';
import './index.scss';
import * as React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { userSelectedPlan } from '../../../store/authentication/action-creator';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Subscription: React.FC = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();


  const [activePlan, setActivePlan] = React.useState<number>(1);
  const [activePaymentPlan, setActivePaymentPlan] = React.useState<number>(1);
  const planId = useAppSelector((state) => state.authReducer.user?.plan_id);

  React.useEffect(() => {
    if(planId && planId > 0)
    setActivePlan(planId)
  }, [planId]);

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
        content : '$1.63'
      }],
      buttonText : 'Subscribe'
    },
  ];

  const paymentPlan = [
    {
      id: 1,
      name: 'Paypal',
    },

    {
      id: 2,
      name: 'Amazon',
    },
  ];

  const modifyPaymentPlan = (paymentId: number) => {
    setActivePaymentPlan(paymentId);
  };

  const modifyPlan = (planId : number) => {
    const data = { plan_id: planId};
    dispatch(userSelectedPlan(data));
    navigate('/plan');
  }

  return (
    <div className="mainContainer">
      <div className="leftSidebar">
        <SettingLeftPanel active="subscriptions" />
      </div>
      <div className="contArea">
        <div className="title">Subscription Plans</div>
        {planMethod && planMethod.length > 0 && 
        <div className="pricingList">
          {planMethod.map((val,key) => {
            return <div className="pricingItemOuter" key={`pricing~${key}`}>
            <div className="pricingItem">
              <div className="label">{val?.label}</div>
              <div className="salePrice">
              {val?.price_label && val?.price_label.length > 0 && val?.price_label.map((value,key) => {
                return <span key={`sale_price_${key}`}>{value?.content}</span>
              })}
                 {val?.price}
              </div>
              <div className="title">
              {val?.name}
              </div>
              {val?.buttonText &&
              <div className="bottomArea">
                <button
                  className="btnSubscribe"
                  type="button"
                  onClick={() => {
                    modifyPlan(val?.id);
                  }}
                >
                  {activePlan && activePlan === val?.id && <span className="checkIcon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 0C40.111 0 30.444 2.93245 22.2215 8.42652C13.9991 13.9206 7.59043 21.7295 3.80605 30.8658C0.0216642 40.0021 -0.968502 50.0555 0.960758 59.7545C2.89002 69.4536 7.65206 78.3627 14.6447 85.3553C21.6373 92.3479 30.5465 97.11 40.2455 99.0392C49.9445 100.969 59.9979 99.9783 69.1342 96.194C78.2705 92.4096 86.0794 86.001 91.5735 77.7785C97.0676 69.556 100 59.8891 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0ZM42.8572 69.9643L25 52.1071L30.6786 46.4286L42.8572 58.6071L69.3214 32.1429L75.0214 37.8071L42.8572 69.9643Z"
                        fill="white"
                      />
                    </svg>
                  </span>}
                  {activePlan && activePlan === val?.id ? ' Subscribed' : val?.buttonText}
                </button>
              </div>}
            </div>
          </div>
          })}
          </div>}
        

        <div className="title">Payment Method</div>
        {paymentPlan && paymentPlan.length > 0 && (
          <div className="row">
            {paymentPlan.map((val, index) => {
              return (
                <div
                  className="col6 singlePaymentPlan"
                  key={`payment~type~${index}`}
                  onClick={() => {
                    modifyPaymentPlan(val?.id);
                  }}
                >
                  <div
                    className={`selectPlan ${
                      val?.id === activePaymentPlan ? 'active' : ''
                    }`}
                  >
                    <span className="checkIcon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M50 0C40.111 0 30.444 2.93245 22.2215 8.42652C13.9991 13.9206 7.59043 21.7295 3.80605 30.8658C0.0216642 40.0021 -0.968502 50.0555 0.960758 59.7545C2.89002 69.4536 7.65206 78.3627 14.6447 85.3553C21.6373 92.3479 30.5465 97.11 40.2455 99.0392C49.9445 100.969 59.9979 99.9783 69.1342 96.194C78.2705 92.4096 86.0794 86.001 91.5735 77.7785C97.0676 69.556 100 59.8891 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0ZM42.8572 69.9643L25 52.1071L30.6786 46.4286L42.8572 58.6071L69.3214 32.1429L75.0214 37.8071L42.8572 69.9643Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    {val?.name === 'Paypal' ? (
                      <img
                        src='/assets/images/paypal-icon.png'
                        width="146"
                        height="35"
                        alt="image1"
                      />
                    ) : val?.name === 'Amazon' ? (
                      <img
                        src='/assets/images/amazon-logo.png'
                        width="183"
                        height="35"
                        alt="image1"
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscription;
