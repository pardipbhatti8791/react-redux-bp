import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageContent from '../../../components/PageContent';
import { getUser } from '../../../store/authentication/action-creator';
//import history from '@root/utils/history';

const PageContainer = styled.div``;

const ConfirmContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 100px 0;
`;

const ConfirmFormContainer = styled.div`
  z-index: 100;
`;


const WelcomePage: React.FC = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const title = 'Greetings Name';
  const subtitle = 'Welcome to Haiku Pro. You will automatically be re-directed to our DISCOVER page.';

  React.useEffect(() => {
    window.scrollTo(0,0);
    dispatch(getUser());
    setTimeout(() => {
      navigate('/pricing')
    },3000);
  }, [dispatch, navigate]);

  return (
    <PageContainer>
      <ConfirmContainer>
        <ConfirmFormContainer>
          <PageContent title={title} subtitle={subtitle} />
        </ConfirmFormContainer>
      </ConfirmContainer>
    </PageContainer>
  );
};

export default WelcomePage as React.FC;
