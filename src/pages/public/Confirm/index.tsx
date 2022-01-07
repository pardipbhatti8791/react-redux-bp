import * as React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import PageContent from '../../../components/PageContent';

// console.log(buttonBgUrl, "buttonBgUrl");
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

const ConfirmLink = styled(NavLink)`
  align-items: center;
  flex-direction: row;
  text-decoration: underline;
  color: var(--main-text-primary-color);
  font-weight: 900;
  font-size: 14px;
  margin-left: 10px;
`;

const ConfirmPage: React.FC = () => {
  const navigate = useNavigate();
  const title = 'Confirm your Account';
  const subtitle = 'Check your email address for magic link';
  // eslint-disable-next-line react/no-unescaped-entities
  const content = <>Didn't get an email?<ConfirmLink to="/"> Send it again</ConfirmLink>. </>;

  React.useEffect(() => {
    window.scrollTo(0,0);
    setTimeout(() => {
      //history.replace('/pricing');
      navigate('/setpassword')
    },3000);
  }, [navigate]);

  return (
    <PageContainer>
      <ConfirmContainer>
        <ConfirmFormContainer>
          <PageContent title={title} subtitle={subtitle} content={content} />
         
        </ConfirmFormContainer>
      </ConfirmContainer>
    </PageContainer>
  );
};

export default ConfirmPage as React.FC;
