import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';
import { userSelectedPlan } from '../../../store/authentication/action-creator';
import './index.scss';

const PlanPage: React.FC = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const planId = useAppSelector((state) => state.authReducer.user.plan_id)
  
  const [isRequesting,setIsRequesting] = React.useState<boolean>(false);
  const [showPaymentModal, setShowPaymentModal] =
    React.useState<boolean>(false);
  const [showActivePlan, setShowActivePlan] = React.useState<boolean>(true);
  const [activePlan, setActivePlan] = React.useState<number>(1);
  const [activePaymentPlan, setActivePaymentPlan] = React.useState<number>(1);

  React.useEffect(() => {
    if(planId && planId > 0)
    setActivePlan(planId)
  }, [planId]);
  
  const planMethod = [
    {
      id: 1,
      name: 'Haiku Pro Started ',
      price: 'Free',
    },

    {
      id: 2,
      name: 'Full Access',
      price: '45/month',
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

  const toggleActivePlan = () => {
    setShowActivePlan(!showActivePlan);
  };

  const modifyActive = (planId: number) => {
    setActivePlan(planId);
    setShowActivePlan(!showActivePlan);
  };

  const submitSubscribe = () => {
    const data = { plan_id: activePlan};
    dispatch(userSelectedPlan(data));
    setIsRequesting(true);
    setTimeout(()=>{
      //setIsRequesting(false);
      setShowPaymentModal(true);
    },1000);
    setTimeout(()=>{
      setIsRequesting(false);
      setShowPaymentModal(false);
      navigate('/discover')
    },2000);
    
  };

  const modifyPaymentPlan = (paymentId: number) => {
    setActivePaymentPlan(paymentId);
  };

  React.useEffect(() => {       
    window.scrollTo(0, 0);    
  }, []);

  return (
    <div className="subscribeMain">
      <div className="subscribeCont">
        <div className="polygon"></div>
        <div className="polygonAfter"></div>
        <div className="title">Plan</div>
        {showActivePlan &&
          activePlan > 0 &&
          planMethod &&
          planMethod.length > 0 &&
          planMethod
            .filter((item) => {
              if (item?.id === activePlan) {
                return true;
              } else {
                return false;
              }
            })
            .map((val, index) => {
              return (
                <div className="planList active" key={`active~${index}`}>
                  <ul>
                    <li>
                      <span className="checkIcon">
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56823 3.03617 8.69181 1.52242 12.3463C0.00866568 16.0009 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9992 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM17.1429 27.9857L10 20.8429L12.2714 18.5714L17.1429 23.4429L27.7286 12.8571L30.0086 15.1229L17.1429 27.9857Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span>{`${val?.name} - $ ${val?.price}`}</span>{' '}
                      <span className="editBtn" onClick={toggleActivePlan}>
                        Edit
                      </span>
                    </li>
                  </ul>
                </div>
              );
            })}
        {showActivePlan === false && planMethod && planMethod.length > 0 && (
          <div className="planList">
            <ul>
              {planMethod.map((val, index) => {
                return (
                  <li
                    className={`singlePlan ${
                      val?.id === activePlan ? 'active' : ''
                    }`}
                    key={`plandata~${index}`}
                    onClick={() => {
                      modifyActive(val?.id);
                    }}
                  >
                    <span className="checkIcon">
                      <svg
                        width="35"
                        height="35"
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
                    <span className="planName">{val?.name}</span>
                    <span className="planPrice">$ {val?.price}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
.

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
                      <img alt="paypal"
                        src='/assets/images/paypal-icon.png'
                        width="146"
                        height="35"
                      />
                    ) : val?.name === 'Amazon' ? (
                      <img alt="amazon"
                        src='/assets/images/amazon-logo.png'
                        width="183"
                        height="35"
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
        {/*<div className="row">
          <div className="col6">
            <div className="selectPlan">
              <img
                src={require("../../assets/images/paypal-icon.png")}
                width="146"
                height="35"
              />
            </div>
          </div>
          <div className="col6">
            <div className="selectPlan">
              <span className="checkIcon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56823 3.03617 8.69181 1.52242 12.3463C0.00866568 16.0009 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9992 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM17.1429 27.9857L10 20.8429L12.2714 18.5714L17.1429 23.4429L27.7286 12.8571L30.0086 15.1229L17.1429 27.9857Z"
                    fill="white"
                  />
                </svg>
              </span>
              <img
                src={require("../../assets/images/amazon-logo.png")}
                width="183"
                height="35"
              />
            </div>
          </div>
        </div>*/}
        <div className="textRight">
          <button className="btnSub" type="button" onClick={submitSubscribe} disabled={isRequesting}>
            Subscribe
          </button>
          {/*isRequesting ? <AuthLoader /> : null*/}
          {/*isRequesting ? <GifLoader /> : null */}
        </div>
      </div>

      {showPaymentModal && (
        <div className="popModal">
          <div className="popModalCont">
            <span
              className="closePopup"
              onClick={() => setShowPaymentModal(!showPaymentModal)}
            >
              X
            </span>
            <div className="imageHolder">
              <img
                src="/assets/images/Haiku_pro.gif"
                width="140"
                height="140"
                alt="site logo"
              />
            </div>
            <div className="title">Submitting Payment</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanPage as React.FC;
