import MediaWrapper from '../../../components/media-wrapper';
import Button from '../../../components/form/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  max-width: 1330px;
  position: relative;
  z-index: 1;
`;
const BreadCrumbs = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: 18px;
      font-weight: 900;
      text-transform: uppercase;
      color: #fff;
      text-shadow: 2px 2px 20px rgba(255, 255, 255, 0.8);
      position: relative;
      &:not(:last-child):after {
        content: '/';
        margin: 0 15px;
        opacity: 0.7;
      }
    }
  }
`;
const UpgradeSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 5rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-top: 3px solid #d90816;
  background: linear-gradient(
    176.83deg,
    rgba(147, 26, 26, 0.71) 2.57%,
    rgba(102, 35, 35, 0) 82.97%
  );
  button {
    margin: 0 auto;
    background: #299999;
  }
`;
const UpgradeSectionTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  display: inline-block;
  padding: 10px 3rem 15px 3rem;
  margin: -3px auto 0 auto;
  background: #931a1a;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
`;
const UpgradeSectionSubTitle = styled.div`
  margin: 2rem 0;
  font-size: 24px;
  font-weight: 500;
`;
const UpgradeSectionList = styled.div`
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  ul {
    li {
      margin: 0 0 2rem 0;
      text-align: left;
      &:before {
        content: '>>';
        letter-spacing: -5px;
        margin-right: 15px;
      }
    }
  }
`;
const FeaturedSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 5rem;
`;
const FeaturedSectionTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 4rem;
  position: relative;
`;
const SectionTitleBorderLeft = styled.div`
  border-bottom: 1px solid #931a1a;
  width: 100%;
  height: 52px;
`;
const SectionTitleBorderRight = styled.div`
  border-bottom: 1px solid #931a1a;
  width: 100%;
  height: 52px;
`;
const FeaturedSectionTitleTxt = styled.div`
  border-bottom: 1px solid #931a1a;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  padding: 20px 3rem;
  position: relative;
  margin: 0 26px;
  white-space: nowrap;
  &:before {
    content: '';
    position: absolute;
    background: #299999;
    clip-path: polygon(0 0, 15% 0, 100% 100%, 85% 100%);
    width: 35px;
    height: 30px;
    box-shadow: 1px 1px 15px #00e4ff;
    left: -30px;
    bottom: -1px;
  }
  &:after {
    content: '';
    position: absolute;
    background: #299999;
    clip-path: polygon(85% 0, 100% 0%, 15% 100%, 0% 100%);
    width: 35px;
    height: 30px;
    box-shadow: 1px 1px 15px #00e4ff;
    right: -30px;
    bottom: -1px;
  }
`;
const FeaturedSectionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;
const FeaturedSectionLeft = styled.div`
  width: 46%;
  margin-right: 4%;
`;
const FeaturedSectionLeftCont = styled.div`
  margin-top: 1rem;
  background: rgba(8, 97, 97, 0.8);
  clip-path: polygon(0 0, 100% 0, 100% 86%, 94% 100%, 0 100%);
  padding: 20px;
`;
const FeaturedSectionLeftTitle = styled.div`
  font-size: 32px;
  font-weight: 900;
  opacity: 0.7;
  margin-bottom: 10px;
`;
const FeaturedSectionLeftAuthor = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const FeaturedSectionLeftDesc = styled.div`
  font-size: 16px;
  color: #61b2b2;
  font-weight: 400;
  opacity: 0.7;
  margin-bottom: 4rem;
`;
const FeaturedSectionLeftBadges = styled.div`
  margin-bottom: 2rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      background: #931a1a;
      padding: 7px 15px;
      font-size: 14px;
      font-weight: 700;
      text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.8);
      clip-path: polygon(10% 0, 100% 0, 100% 70%, 88% 100%, 0px 100%, 0 38%);
      border: 1px solid #67070e;
      &:not(:last-child) {
        margin-right: 20px;
      }
      svg {
        margin-right: 12px;
      }
    }
  }
`;
const FeaturedSectionLeftInfo = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: 16px;
      font-weight: 700;
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-right: 2rem;
      }
      svg {
        margin-right: 8px;
      }
    }
  }
`;
const FeaturedSectionRight = styled.div`
  width: 50%;
  padding: 25px;
  background: url('outline.png') no-repeat 0 0 / 100% 100%;
`;
const FeaturedSectionRightImg = styled.div`
  clip-path: polygon(12% 0, 100% 0, 100% 75%, 82% 100%, 0 100%, 0 18%);
`;
const LearnMoreBtn = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-shadow: 1px 1px 15px #fff;
  text-trasnform: uppercase;
  float: right;
  margin-top: 2rem;
  margin-right: 2rem;
  cursor: pointer;
`;

const AllMissions = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 5rem;
  button {
    margin: 0 auto;
  }
`;
const AllMissionsTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 4rem;
  position: relative;
`;
const AllMissionsSectionTitleBorderLeft = styled.div`
  border-bottom: 1px solid #931a1a;
  width: 100%;
  height: 52px;
`;
const AllMissionsSectionTitleBorderRight = styled.div`
  border-bottom: 1px solid #931a1a;
  width: 100%;
  height: 52px;
`;
const AllMissionsTitleTxt = styled.div`
  border-bottom: 1px solid #931a1a;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  padding: 20px 1.2rem;
  position: relative;
  margin: 0 26px;
  white-space: nowrap;
  &:before {
    content: '';
    position: absolute;
    background: #299999;
    clip-path: polygon(0 0, 15% 0, 100% 100%, 85% 100%);
    width: 35px;
    height: 30px;
    box-shadow: 1px 1px 15px #00e4ff;
    left: -30px;
    bottom: -1px;
  }
  &:after {
    content: '';
    position: absolute;
    background: #299999;
    clip-path: polygon(85% 0, 100% 0%, 15% 100%, 0% 100%);
    width: 35px;
    height: 30px;
    box-shadow: 1px 1px 15px #00e4ff;
    right: -30px;
    bottom: -1px;
  }
`;
const AllMissionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  margin: 0 -20px;
`;
const AllMissionsCol = styled.div`
  width: 33.3333%;
  padding: 0 20px;
`;
const AllMissionsBottom = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
const AllMissionsBottomCont = styled.div`
  margin-top: 1rem;
  background: rgba(8, 97, 97, 0.8);
  clip-path: polygon(0 0, 100% 0, 100% 86%, 94% 100%, 0 100%);
  padding: 20px;
`;
const AllMissionsBottomTitle = styled.div`
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: 1rem;
  min-height: 80px;
`;
const AllMissionsBottomAuthor = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const AllMissionsBottomBadges = styled.div`
  margin-bottom: 1rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      background: #931a1a;
      padding: 7px 15px;
      font-size: 14px;
      font-weight: 700;
      text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.8);
      clip-path: polygon(10% 0, 100% 0, 100% 70%, 88% 100%, 0px 100%, 0 38%);
      border: 1px solid #67070e;
      &:not(:last-child) {
        margin-right: 20px;
      }
      svg {
        margin-right: 12px;
      }
    }
  }
`;
const AllMissionsBottomInfo = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: 16px;
      font-weight: 700;
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-right: 2rem;
      }
      svg {
        margin-right: 8px;
      }
    }
  }
`;
const AllMissionsTop = styled.div`
  width: 100%;
  padding: 17px;
  background: url('outline.png') no-repeat 0 0 / 100% 100%;
`;
const AllMissionsTopImg = styled.div`
  clip-path: polygon(12% 0, 100% 0, 100% 75%, 82% 100%, 0 100%, 0 18%);
  img {
    width: 100%;
  }
`;

const SearchBar = styled.div`
  display: flex;
  margin-bottom: 2rem;
  button {
    margin-left: 2rem;
  }
`;

const ProfileInfo = styled.div`
  margin: 5rem 0;
  display: flex;
  justify-content: space-between;
  padding: 35px 50px;
  background: url('ProfileInfoBg.png') no-repeat 0 0 / 100% 100%;
`;
const ProfileInfoLeft = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImage = styled.div`
  display: flex;
  width: 135px;
  height: 135px;
  padding: 6px;
  position: relative;
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`;
const ProfileNameH2 = styled.div`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 20px;
`;
const ProfileCountryH4 = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #595959;
`;
const ProfileInfoRight = styled.div`
  display: flex;
`;
const ProfileInfoRightCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
`;
const ProfileInfoRightColh4 = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const ProfileInfoRightColh2 = styled.div`
  font-size: 32px;
  font-weight: 900;
  text-shadow: 0 0 50px #fff;
`;
export const DiscoverPage = (props: {}) => {
  const navigate = useNavigate();
  const user = useAppSelector((state)=>state.authReducer.user);
  return (
    <>
      <MediaWrapper />
      <Container>
        <BreadCrumbs>
          <ul>
            <li>HAIKU PRO</li>
            <li>DISCOVER</li>
          </ul>
        </BreadCrumbs>
      </Container>
      {(!user || user.plan_id === 1) ?
      <UpgradeSection>
        <Container>
          <UpgradeSectionTitle>Upgrade to Full Access</UpgradeSectionTitle>
          <UpgradeSectionSubTitle>
            With <b>Haiku Pro Full Access</b>, you have access to:
          </UpgradeSectionSubTitle>
          <UpgradeSectionList>
            <ul>
              <li>Compete against global users</li>
              <li>Get access to all Haiku Pro missions</li>
              <li>Play missions on all available levels</li>
              <li>Rate & write reviews on missions</li>
            </ul>
          </UpgradeSectionList>
          <Button label='Upgrade Now' disabled={false} onClick={() => {
            navigate('/pricing')
          }}/>
        </Container>
      </UpgradeSection> : null}
      <Container>
        <ProfileInfo>
          <ProfileInfoLeft>
            <ProfileImage>
              <svg
                width='139'
                height='139'
                viewBox='0 0 49 49'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.02539 3.20206V0.813507H3.41394'
                  stroke='#C00814'
                  stroke-width='0.335347'
                />
                <path
                  d='M3.4139 48.1864L1.02535 48.1864L1.02535 45.7979'
                  stroke='#C00814'
                  stroke-width='0.335347'
                />
                <path
                  d='M45.6117 0.81349L48.0002 0.81349V3.20204'
                  stroke='#C00814'
                  stroke-width='0.335347'
                />
                <path
                  d='M47.6021 45.7979L47.6021 48.1864L45.2135 48.1864'
                  stroke='#C00814'
                  stroke-width='0.335347'
                />
              </svg>
              <img src='/assets/images/pic-placeholder.png' alt="pic-placeholder" />
            </ProfileImage>
            <UserInfo>
              <ProfileNameH2>@cybersteffie</ProfileNameH2>
              <ProfileCountryH4>Japan</ProfileCountryH4>
            </UserInfo>
          </ProfileInfoLeft>
          <ProfileInfoRight>
            <ProfileInfoRightCol>
              <svg
                width='40'
                height='43'
                viewBox='0 0 40 43'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.2806 22.1521C14.4364 16.0843 16.0256 14.4951 22.0933 13.3394C22.8157 13.1949 23.2491 12.617 23.2491 11.8946C23.2491 11.1723 22.8157 10.5944 22.0933 10.4499C16.0256 9.29417 14.4364 7.70499 13.2806 1.63721C13.1361 0.914858 12.5583 0.481445 11.8359 0.481445C11.1135 0.481445 10.5357 0.914858 10.3912 1.63721C9.23542 7.70499 7.64624 9.29417 1.57847 10.4499C1.00058 10.5944 0.422699 11.1723 0.422699 11.8946C0.422699 12.617 0.856112 13.1949 1.57847 13.3394C7.64624 14.4951 9.23542 16.0843 10.3912 22.1521C10.5357 22.8744 11.1135 23.3078 11.8359 23.3078C12.5583 23.3078 13.1361 22.73 13.2806 22.1521Z'
                  fill='#C00814'
                />
                <path
                  d='M27.7277 32.2647C23.6825 31.3979 22.8157 30.531 21.9489 26.4858C21.8044 25.7635 21.2265 25.3301 20.5042 25.3301C19.7818 25.3301 19.204 25.7635 19.0595 26.4858C18.1927 30.531 17.3258 31.3979 13.2806 32.2647C12.5583 32.4091 12.1249 32.987 12.1249 33.7094C12.1249 34.4317 12.5583 35.0096 13.2806 35.1541C17.3258 36.0209 18.1927 36.8877 19.0595 40.9329C19.204 41.6553 19.7818 42.0887 20.5042 42.0887C21.2265 42.0887 21.8044 41.6553 21.9489 40.9329C22.8157 36.8877 23.6825 36.0209 27.7277 35.1541C28.4501 35.0096 28.8835 34.4317 28.8835 33.7094C28.8835 32.987 28.3056 32.4091 27.7277 32.2647Z'
                  fill='#C00814'
                />
                <path
                  d='M38.1296 17.818C34.9512 17.2401 34.2289 16.5177 33.651 13.3394C33.5065 12.617 32.9286 12.1836 32.2063 12.1836C31.4839 12.1836 30.906 12.617 30.7616 13.3394C30.1837 16.5177 29.4613 17.2401 26.283 17.818C25.5606 17.9624 25.1272 18.5403 25.1272 19.2627C25.1272 19.985 25.5606 20.5629 26.283 20.7074C29.4613 21.2853 30.1837 22.0076 30.7616 25.186C30.906 25.9083 31.4839 26.3417 32.2063 26.3417C32.9286 26.3417 33.5065 25.9083 33.651 25.186C34.2289 22.0076 34.9512 21.2853 38.1296 20.7074C38.8519 20.5629 39.2854 19.985 39.2854 19.2627C39.2854 18.5403 38.8519 17.9624 38.1296 17.818Z'
                  fill='#C00814'
                />
                <path
                  d='M4.17933 29.8094C3.74592 29.376 3.16804 29.2315 2.59015 29.5204C2.44568 29.5204 2.30121 29.6649 2.15674 29.8094C2.01227 29.9539 1.8678 30.0983 1.8678 30.2428C1.72333 30.3873 1.72333 30.6762 1.72333 30.8207C1.72333 30.9652 1.72333 31.2541 1.8678 31.3986C2.01227 31.543 2.01227 31.6875 2.15674 31.832C2.30121 31.9764 2.44568 32.1209 2.59015 32.1209C2.73462 32.2654 3.02357 32.2654 3.16804 32.2654C3.31251 32.2654 3.60145 32.2654 3.74592 32.1209C3.89039 31.9764 4.03486 31.9764 4.17933 31.832C4.3238 31.6875 4.46827 31.543 4.46827 31.3986C4.61275 31.2541 4.61275 30.9652 4.61275 30.8207C4.61275 30.6762 4.61275 30.3873 4.46827 30.2428C4.46827 30.0983 4.3238 29.9539 4.17933 29.8094Z'
                  fill='#C00814'
                />
                <path
                  d='M36.3962 7.70486C36.8296 7.70486 37.1185 7.56039 37.4075 7.27145C37.6964 6.98251 37.8409 6.69357 37.8409 6.26015C37.8409 5.82674 37.6964 5.5378 37.4075 5.24886C37.263 5.10439 37.1185 4.95992 36.974 4.95992C36.6851 4.81544 36.2517 4.81544 35.8183 4.95992C35.6738 4.95992 35.5293 5.10439 35.3849 5.24886C35.0959 5.5378 34.9514 5.82674 34.9514 6.26015C34.9514 6.69357 35.0959 6.98251 35.3849 7.27145C35.6738 7.56039 35.9627 7.70486 36.3962 7.70486Z'
                  fill='#C00814'
                />
              </svg>
              <ProfileInfoRightColh4>TOTAL POINTS</ProfileInfoRightColh4>
              <ProfileInfoRightColh2>100</ProfileInfoRightColh2>
            </ProfileInfoRightCol>
            <ProfileInfoRightCol>
              <svg
                width='47'
                height='47'
                viewBox='0 0 47 47'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_3586_4243)'>
                  <path
                    d='M17.6985 18.4239L8.41957 1.32129L5.5144 5.46449L14.0955 21.2231C15.112 20.0741 16.3339 19.1249 17.6985 18.4239Z'
                    fill='#C00814'
                  />
                  <path
                    d='M4.1418 7.42119C3.75845 7.96906 3.53572 8.61311 3.49872 9.28074C3.46172 9.94842 3.61192 10.6131 3.93239 11.2L11.6763 25.3816C11.9435 24.5972 12.2899 23.842 12.7101 23.1278L4.14202 7.4209L4.1418 7.42119Z'
                    fill='#C00814'
                  />
                  <path
                    d='M32.4054 21.2231L40.9865 5.46449L38.0812 1.32129L28.8024 18.4239C30.167 19.1249 31.3889 20.0741 32.4054 21.2231Z'
                    fill='#C00814'
                  />
                  <path
                    d='M42.359 7.42119V7.4209L33.7908 23.1278C34.2111 23.842 34.5575 24.5972 34.8247 25.3816L42.5685 11.2C42.8892 10.6131 43.0391 9.94842 43.0023 9.28074C42.9654 8.61311 42.7426 7.96906 42.359 7.42119Z'
                    fill='#C00814'
                  />
                  <path
                    d='M13.1547 5.44238L15.5788 9.91376H30.9216L33.3459 5.44238H13.1547Z'
                    fill='#C00814'
                  />
                  <path
                    d='M34.4885 3.338L35.5818 1.32227H10.9192L12.0125 3.338H34.4885Z'
                    fill='#C00814'
                  />
                  <path
                    d='M23.2502 19.6963C21.1562 19.6957 19.1191 20.3786 17.4487 21.6414C15.7782 22.9042 14.5655 24.6777 13.995 26.6925C13.4245 28.7074 13.5273 30.8534 14.2877 32.8045C15.0482 34.7556 16.4248 36.4051 18.2083 37.5025V45.4224C18.2083 45.5521 18.2461 45.6788 18.317 45.7875C18.3879 45.8959 18.489 45.9815 18.6077 46.0335C18.7265 46.0859 18.8578 46.1021 18.9858 46.0808C19.1137 46.0595 19.2326 46.0014 19.3281 45.9136L23.2494 42.3058L27.1724 45.9154C27.2679 46.0032 27.3868 46.0613 27.5148 46.0826C27.6427 46.1039 27.7741 46.0877 27.8929 46.0353C28.0117 45.9833 28.1126 45.8977 28.1836 45.789C28.2545 45.6806 28.2922 45.5535 28.2922 45.4238L28.2905 37.5036C30.0744 36.4065 31.4514 34.7571 32.2122 32.8059C32.9731 30.8548 33.0761 28.7086 32.5058 26.6935C31.9354 24.6784 30.7228 22.9047 29.0522 21.6417C27.3817 20.3787 25.3445 19.6957 23.2502 19.6963ZM18.3749 34.7962C17.425 33.9618 16.7092 32.8941 16.2982 31.6984C15.8871 30.5028 15.7951 29.2206 16.0312 27.9785L19.2361 30.8369L18.3749 34.7962ZM16.4474 26.5515C16.9556 25.305 17.7959 24.2218 18.8769 23.4197C19.9579 22.6177 21.2382 22.1274 22.5784 22.0024L20.7694 26.1179L16.4474 26.5515ZM23.2502 36.6621C22.0356 36.6633 20.8399 36.3615 19.7714 35.7838L23.2502 33.7533L26.7291 35.7838C25.6606 36.3615 24.4649 36.6633 23.2502 36.6621ZM30.5971 29.3153C30.5965 30.3517 30.3758 31.3763 29.9498 32.3211C29.5238 33.266 28.9019 34.1096 28.1256 34.7962L27.2644 30.8369L30.4693 27.9785C30.5527 28.4192 30.5954 28.8667 30.5971 29.3153ZM25.7311 26.1179L23.9221 22.0024C25.2623 22.1274 26.5426 22.6177 27.6236 23.4197C28.7046 24.2218 29.5449 25.305 30.0531 26.5515L25.7311 26.1179Z'
                    fill='#C00814'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3586_4243'>
                    <rect
                      width='46.2307'
                      height='46.2307'
                      fill='white'
                      transform='translate(0.135178 0.591797)'
                    />
                  </clipPath>
                </defs>
              </svg>

              <ProfileInfoRightColh4>
                GLOBAL RANK{' '}
                <svg
                  width='14'
                  height='15'
                  viewBox='0 0 14 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.26016 7.38769L6.76016 13.3877L12.2602 7.3877'
                    stroke='white'
                    stroke-width='2.05563'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M1.26016 1.38769L6.76016 6.3877L12.2602 1.3877'
                    stroke='white'
                    stroke-width='2.05563'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </ProfileInfoRightColh4>
              <ProfileInfoRightColh2>4</ProfileInfoRightColh2>
            </ProfileInfoRightCol>
            <ProfileInfoRightCol>
              <svg
                width='47'
                height='47'
                viewBox='0 0 47 47'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M44.7141 14.5329L35.4679 4.78108C35.6846 3.84202 35.3235 2.83072 34.4566 2.32507C33.951 2.03613 33.3731 1.9639 32.7952 2.10837C32.2173 2.25284 31.7839 2.61402 31.495 3.11966L27.0164 10.8489C24.7771 9.83756 22.3933 9.33191 19.8651 9.25968L12.8582 3.62531C12.6415 3.48084 12.3526 3.40861 12.1359 3.55308C11.9192 3.62531 11.7025 3.84202 11.7025 4.13096L11.0524 11.4267C5.20128 14.6051 1.58951 20.6729 1.58951 27.3185C1.58951 37.287 9.67988 45.3774 19.6484 45.3774C29.6169 45.3774 37.7072 37.287 37.7072 27.3185C37.7072 27.1741 37.7072 27.0296 37.7072 26.9574L41.7524 28.691C41.8246 28.7632 41.9691 28.7632 42.0414 28.7632C42.1858 28.7632 42.3303 28.691 42.4748 28.6188C42.6915 28.4743 42.7637 28.1854 42.7637 27.8964L41.319 20.6729V20.6006C41.319 20.6006 41.319 20.6006 41.319 20.5284V20.4562C41.319 20.4562 41.319 20.4562 41.319 20.3839C41.319 20.3839 41.319 20.3117 41.2468 20.3117L41.1745 20.2395C41.1023 20.1672 41.1023 20.1672 41.0301 20.095C41.0301 20.095 41.0301 20.095 40.9578 20.095C40.9578 20.095 40.9578 20.095 40.8856 20.095C40.8856 20.095 40.8856 20.095 40.8134 20.095H40.7411C40.7411 20.095 40.7411 20.095 40.6689 20.095C40.6689 20.095 40.6689 20.095 40.5966 20.095C40.5244 20.095 40.5244 20.095 40.4522 20.095H40.3799C40.3077 20.095 40.3077 20.1672 40.2355 20.1672C40.2355 20.1672 40.1632 20.1672 40.1632 20.2395L37.5628 22.4788L37.2016 22.8399C36.407 19.7338 34.8178 16.9166 32.5785 14.6773L44.1362 15.7609H44.2084C44.4974 15.7609 44.7141 15.6164 44.8585 15.3275C45.003 15.1107 44.9308 14.7496 44.7141 14.5329ZM12.3526 13.1604L19.7206 10.7044C22.0321 10.7044 24.1992 11.21 26.294 12.0769L24.8493 14.6051C23.1879 13.8827 21.4543 13.5938 19.6484 13.5938C16.9034 13.5938 14.3029 14.3884 12.1359 15.8331L12.3526 13.1604ZM19.6484 19.3726C20.443 19.3726 21.1653 19.5171 21.8877 19.7338L20.3707 22.3343C20.154 22.2621 19.9373 22.2621 19.6484 22.2621C16.8312 22.2621 14.5919 24.5014 14.5919 27.3185C14.5919 30.1357 16.8312 32.375 19.6484 32.375C22.4656 32.375 24.7049 30.1357 24.7049 27.3185C24.7049 26.3795 24.4881 25.5126 23.9825 24.7903L25.5717 22.0453C26.8719 23.4901 27.5943 25.3682 27.5943 27.3185C27.5943 31.7249 24.0547 35.2644 19.6484 35.2644C15.242 35.2644 11.7025 31.7249 11.7025 27.3185C11.7025 22.9122 15.242 19.3726 19.6484 19.3726ZM11.9914 17.7835L11.7025 20.8896C11.7025 21.2508 11.3413 21.5397 10.9801 21.5397H10.9079C10.5467 21.5397 10.2578 21.1785 10.2578 20.8173V20.7451L10.4022 19.3004C10.8356 18.7225 11.4135 18.2169 11.9914 17.7835ZM36.2625 27.3185C36.2625 36.4924 28.8223 43.9327 19.6484 43.9327C10.4745 43.9327 3.03422 36.4924 3.03422 27.3185C3.03422 21.5397 5.99587 16.1943 10.9079 13.1604L10.5467 16.9889C7.72952 19.5171 5.92364 23.2011 5.92364 27.3185C5.92364 34.9033 12.0636 41.0433 19.6484 41.0433C26.9442 41.0433 32.9397 35.2644 33.3731 28.0409L35.6846 26.0183L36.2625 26.235C36.2625 26.6684 36.2625 27.0296 36.2625 27.3185ZM29.039 30.208C29.039 29.9912 29.1112 29.7745 29.2557 29.6301L31.9284 27.3185C31.9284 28.0409 31.8562 28.691 31.7117 29.4134L30.1947 30.7136C30.1225 30.8581 29.9058 30.9303 29.7613 30.9303C29.5446 30.9303 29.3279 30.8581 29.1834 30.6414C29.1112 30.5691 29.039 30.3524 29.039 30.208ZM35.9013 23.9235L33.3009 26.1628C33.0119 22.551 31.2783 19.2282 28.5333 16.9166L29.978 14.4606H30.1225C33.0842 16.8444 35.1068 20.1672 35.9013 23.9235ZM34.0232 4.56437L22.5378 24.4291L21.0208 27.1018C20.8041 27.463 20.3707 27.5352 20.0095 27.3908C19.8651 27.3185 19.7206 27.1741 19.6484 26.9574C19.5761 26.7407 19.6484 26.5962 19.7206 26.3795L32.723 3.84202C32.7952 3.69755 32.9397 3.55308 33.1564 3.48084C33.2286 3.48084 33.3009 3.48084 33.3731 3.48084C33.5176 3.48084 33.5898 3.48084 33.7343 3.55308C33.8788 3.62531 34.0232 3.84202 34.0955 3.98649C34.0955 4.2032 34.0955 4.4199 34.0232 4.56437Z'
                  fill='#C00814'
                />
              </svg>

              <ProfileInfoRightColh4>MISSIONS COMPLETED</ProfileInfoRightColh4>
              <ProfileInfoRightColh2>48</ProfileInfoRightColh2>
            </ProfileInfoRightCol>
          </ProfileInfoRight>
        </ProfileInfo>
        <SearchBar>
          <input
            type='text'
            placeholder='Search for ranges by name or keyword'
          />
          <Button label='Search' disabled={false} />
        </SearchBar>
        <FeaturedSection>
          <FeaturedSectionTitle>
            <SectionTitleBorderLeft>&nbsp;</SectionTitleBorderLeft>
            <FeaturedSectionTitleTxt>FEATURED</FeaturedSectionTitleTxt>
            <SectionTitleBorderRight>&nbsp;</SectionTitleBorderRight>
          </FeaturedSectionTitle>
          <FeaturedSectionRow>
            <FeaturedSectionLeft>
              <FeaturedSectionLeftCont>
                <FeaturedSectionLeftTitle>
                  Silk road, part 1
                </FeaturedSectionLeftTitle>
                <FeaturedSectionLeftAuthor>@haikupro</FeaturedSectionLeftAuthor>
                <FeaturedSectionLeftDesc>
                  You are a hacktivist that take into his own hands to fight
                  cybernetic crime groups. The Silk Road is well known in the
                  dark web for selling drugs online.
                </FeaturedSectionLeftDesc>
                <FeaturedSectionLeftBadges>
                  <ul>
                    <li>
                      <svg
                        width='21'
                        height='12'
                        viewBox='0 0 21 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M1.7657 5.6102C2.56518 4.21185 3.69797 3.0345 5.06161 2.18203L9.79193 10.199L0.483438 10.1896C0.526289 8.58202 0.966222 7.00855 1.7657 5.6102Z'
                          stroke='white'
                          stroke-width='0.5'
                        />
                        <path
                          d='M10.2572 0.699257C11.9276 0.703913 13.5674 1.13762 15.0199 1.95688L10.2314 9.96003L5.48759 1.93031C6.94465 1.11916 8.5868 0.6946 10.2572 0.699257Z'
                          fill='white'
                          stroke='white'
                          stroke-width='0.5'
                        />
                        <path
                          d='M18.6991 5.6185C19.4972 7.01765 19.9355 8.59157 19.9768 10.1992H10.6683L15.4067 2.187C16.7695 3.04085 17.9011 4.21934 18.6991 5.6185Z'
                          stroke='white'
                          stroke-width='0.5'
                        />
                        <path
                          d='M10.3697 6.53566L10.8973 9.39025C10.6234 9.51128 10.4947 9.54836 10.3544 9.58873C10.3411 9.59256 10.3277 9.59642 10.314 9.60039C10.1672 9.64306 10.0023 9.69474 9.70163 9.82178L10.3697 6.53566Z'
                          fill='white'
                          stroke='#931A1A'
                          stroke-width='0.5'
                        />
                        <circle
                          cx='10.2301'
                          cy='10.1159'
                          r='1.41667'
                          fill='#931A1A'
                          stroke='white'
                          stroke-width='0.5'
                        />
                      </svg>
                      Level 2
                    </li>
                    <li>
                      <svg
                        width='10'
                        height='21'
                        viewBox='0 0 10 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7.15841 15.7415C7.15822 16.0852 7.06087 16.4222 6.87698 16.7158C6.6931 17.0094 6.42975 17.2481 6.11573 17.406C5.80171 17.5639 5.44909 17.6348 5.09642 17.6111C4.74374 17.5873 4.40457 17.4697 4.11597 17.2712C3.82737 17.0727 3.60045 16.8008 3.46 16.4854C3.31955 16.17 3.27098 15.8231 3.31959 15.4826C3.36821 15.1422 3.51214 14.8213 3.73566 14.555C3.95917 14.2887 4.25368 14.0872 4.58698 13.9727V8.24123C4.58698 8.07547 4.65471 7.91649 4.77527 7.79928C4.89583 7.68206 5.05934 7.61621 5.22984 7.61621C5.40034 7.61621 5.56385 7.68206 5.68441 7.79928C5.80497 7.91649 5.8727 8.07547 5.8727 8.24123V13.9727C6.24887 14.102 6.57453 14.3415 6.8048 14.6583C7.03507 14.9751 7.15862 15.3535 7.15841 15.7415Z'
                          fill='white'
                        />
                        <path
                          d='M2.0157 3.24131C2.0157 2.41248 2.35434 1.6176 2.95714 1.03153C3.55993 0.445462 4.3775 0.116211 5.22998 0.116211C6.08246 0.116211 6.90003 0.445462 7.50282 1.03153C8.10562 1.6176 8.44426 2.41248 8.44426 3.24131V12.6791C9.06441 13.2945 9.48389 14.0742 9.6501 14.9204C9.81632 15.7666 9.72186 16.6417 9.37859 17.436C9.03532 18.2302 8.45851 18.9083 7.72049 19.3851C6.98247 19.8619 6.11609 20.1162 5.22998 20.1162C4.34388 20.1162 3.47749 19.8619 2.73947 19.3851C2.00145 18.9083 1.42464 18.2302 1.08137 17.436C0.738095 16.6417 0.643645 15.7666 0.809859 14.9204C0.976073 14.0742 1.39555 13.2945 2.0157 12.6791V3.24131ZM5.22998 1.36625C4.71849 1.36625 4.22795 1.5638 3.86627 1.91544C3.5046 2.26709 3.30141 2.74401 3.30141 3.24131V13.2254L3.0867 13.4129C2.60143 13.8348 2.25937 14.39 2.10579 15.0051C1.9522 15.6202 1.99433 16.2661 2.22659 16.8574C2.45885 17.4486 2.87031 17.9574 3.4065 18.3164C3.94269 18.6753 4.57834 18.8675 5.22934 18.8675C5.88033 18.8675 6.51599 18.6753 7.05218 18.3164C7.58837 17.9574 7.99982 17.4486 8.23208 16.8574C8.46435 16.2661 8.50647 15.6202 8.35289 15.0051C8.1993 14.39 7.85724 13.8348 7.37198 13.4129L7.15855 13.2254V3.24131C7.15855 2.74401 6.95536 2.26709 6.59369 1.91544C6.23201 1.5638 5.74147 1.36625 5.22998 1.36625Z'
                          fill='white'
                        />
                      </svg>
                      Warm
                    </li>
                  </ul>
                </FeaturedSectionLeftBadges>
                <FeaturedSectionLeftInfo>
                  <ul>
                    <li>
                      <svg
                        width='25'
                        height='21'
                        viewBox='0 0 25 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M16.23 19.5459V17.5459C16.23 16.485 15.8086 15.4676 15.0584 14.7175C14.3083 13.9673 13.2908 13.5459 12.23 13.5459H5.22998C4.16911 13.5459 3.1517 13.9673 2.40155 14.7175C1.65141 15.4676 1.22998 16.485 1.22998 17.5459V19.5459'
                          stroke='white'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M8.72998 9.5459C10.9391 9.5459 12.73 7.75504 12.73 5.5459C12.73 3.33676 10.9391 1.5459 8.72998 1.5459C6.52084 1.5459 4.72998 3.33676 4.72998 5.5459C4.72998 7.75504 6.52084 9.5459 8.72998 9.5459Z'
                          stroke='white'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M17.23 9.5459L19.23 11.5459L23.23 7.5459'
                          stroke='white'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                      323
                    </li>
                    <li>
                      <svg
                        width='24'
                        height='21'
                        viewBox='0 0 24 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M20.5696 3.04151C20.0589 2.53052 19.4524 2.12516 18.785 1.8486C18.1175 1.57203 17.4021 1.42969 16.6796 1.42969C15.9571 1.42969 15.2417 1.57203 14.5743 1.8486C13.9068 2.12516 13.3004 2.53052 12.7896 3.04151L11.7296 4.10151L10.6696 3.04151C9.63792 2.00982 8.23864 1.43022 6.77961 1.43022C5.32058 1.43022 3.9213 2.00982 2.88961 3.04151C1.85792 4.07321 1.27832 5.47248 1.27832 6.93151C1.27832 8.39055 1.85792 9.78982 2.88961 10.8215L3.94961 11.8815L11.7296 19.6615L19.5096 11.8815L20.5696 10.8215C21.0806 10.3108 21.486 9.70433 21.7625 9.03687C22.0391 8.36941 22.1814 7.654 22.1814 6.93151C22.1814 6.20903 22.0391 5.49362 21.7625 4.82616C21.486 4.1587 21.0806 3.55227 20.5696 3.04151V3.04151Z'
                          stroke='white'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                      32
                    </li>
                    <li>
                      <svg
                        width='21'
                        height='21'
                        viewBox='0 0 21 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M19.23 10.0459C19.2334 11.3658 18.925 12.6678 18.33 13.8459C17.6244 15.2577 16.5397 16.4451 15.1974 17.2752C13.8551 18.1053 12.3082 18.5453 10.73 18.5459C9.41011 18.5494 8.1081 18.241 6.92998 17.6459L1.22998 19.5459L3.12998 13.8459C2.53491 12.6678 2.22654 11.3658 2.22998 10.0459C2.23059 8.46768 2.67059 6.92078 3.5007 5.57848C4.33081 4.23618 5.51823 3.15149 6.92998 2.44593C8.1081 1.85086 9.41011 1.54249 10.73 1.54593H11.23C13.3143 1.66092 15.283 2.54069 16.7591 4.01679C18.2352 5.49288 19.115 7.46158 19.23 9.54593V10.0459Z'
                          stroke='white'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                      2
                    </li>
                  </ul>
                </FeaturedSectionLeftInfo>
              </FeaturedSectionLeftCont>
              <LearnMoreBtn>
                LEARN MORE{' '}
                <svg
                  width='18'
                  height='16'
                  viewBox='0 0 18 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9.89336 14.8282L16.8457 8.27166L9.89336 1.71513'
                    stroke='white'
                    stroke-width='2.05563'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M1.59892 14.8282L8.55132 8.27166L1.59892 1.71513'
                    stroke='white'
                    stroke-width='2.05563'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </LearnMoreBtn>
            </FeaturedSectionLeft>
            <FeaturedSectionRight>
              <FeaturedSectionRightImg>
                <img src='/hacker-img.png' alt="hacker" />
              </FeaturedSectionRightImg>
            </FeaturedSectionRight>
          </FeaturedSectionRow>
        </FeaturedSection>

        <AllMissions>
          <AllMissionsTitle>
            <AllMissionsSectionTitleBorderLeft>
              &nbsp;
            </AllMissionsSectionTitleBorderLeft>
            <AllMissionsTitleTxt>All Missions</AllMissionsTitleTxt>
            <AllMissionsSectionTitleBorderRight>
              &nbsp;
            </AllMissionsSectionTitleBorderRight>
          </AllMissionsTitle>
          <AllMissionsRow>
            <AllMissionsCol>
              <AllMissionsTop>
                <AllMissionsTopImg>
                  <img src='/image2.png' alt="image2" />
                </AllMissionsTopImg>
              </AllMissionsTop>
              <AllMissionsBottom>
                <AllMissionsBottomCont>
                  <AllMissionsBottomTitle>Cryptocowboy</AllMissionsBottomTitle>
                  <AllMissionsBottomAuthor>@haikupro</AllMissionsBottomAuthor>
                  <AllMissionsBottomBadges>
                    <ul>
                      <li>
                        <svg
                          width='21'
                          height='12'
                          viewBox='0 0 21 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.7657 5.6102C2.56518 4.21185 3.69797 3.0345 5.06161 2.18203L9.79193 10.199L0.483438 10.1896C0.526289 8.58202 0.966222 7.00855 1.7657 5.6102Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.2572 0.699257C11.9276 0.703913 13.5674 1.13762 15.0199 1.95688L10.2314 9.96003L5.48759 1.93031C6.94465 1.11916 8.5868 0.6946 10.2572 0.699257Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M18.6991 5.6185C19.4972 7.01765 19.9355 8.59157 19.9768 10.1992H10.6683L15.4067 2.187C16.7695 3.04085 17.9011 4.21934 18.6991 5.6185Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.3697 6.53566L10.8973 9.39025C10.6234 9.51128 10.4947 9.54836 10.3544 9.58873C10.3411 9.59256 10.3277 9.59642 10.314 9.60039C10.1672 9.64306 10.0023 9.69474 9.70163 9.82178L10.3697 6.53566Z'
                            fill='white'
                            stroke='#931A1A'
                            stroke-width='0.5'
                          />
                          <circle
                            cx='10.2301'
                            cy='10.1159'
                            r='1.41667'
                            fill='#931A1A'
                            stroke='white'
                            stroke-width='0.5'
                          />
                        </svg>
                        Level 2
                      </li>
                      <li>
                        <svg
                          width='10'
                          height='21'
                          viewBox='0 0 10 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.15841 15.7415C7.15822 16.0852 7.06087 16.4222 6.87698 16.7158C6.6931 17.0094 6.42975 17.2481 6.11573 17.406C5.80171 17.5639 5.44909 17.6348 5.09642 17.6111C4.74374 17.5873 4.40457 17.4697 4.11597 17.2712C3.82737 17.0727 3.60045 16.8008 3.46 16.4854C3.31955 16.17 3.27098 15.8231 3.31959 15.4826C3.36821 15.1422 3.51214 14.8213 3.73566 14.555C3.95917 14.2887 4.25368 14.0872 4.58698 13.9727V8.24123C4.58698 8.07547 4.65471 7.91649 4.77527 7.79928C4.89583 7.68206 5.05934 7.61621 5.22984 7.61621C5.40034 7.61621 5.56385 7.68206 5.68441 7.79928C5.80497 7.91649 5.8727 8.07547 5.8727 8.24123V13.9727C6.24887 14.102 6.57453 14.3415 6.8048 14.6583C7.03507 14.9751 7.15862 15.3535 7.15841 15.7415Z'
                            fill='white'
                          />
                          <path
                            d='M2.0157 3.24131C2.0157 2.41248 2.35434 1.6176 2.95714 1.03153C3.55993 0.445462 4.3775 0.116211 5.22998 0.116211C6.08246 0.116211 6.90003 0.445462 7.50282 1.03153C8.10562 1.6176 8.44426 2.41248 8.44426 3.24131V12.6791C9.06441 13.2945 9.48389 14.0742 9.6501 14.9204C9.81632 15.7666 9.72186 16.6417 9.37859 17.436C9.03532 18.2302 8.45851 18.9083 7.72049 19.3851C6.98247 19.8619 6.11609 20.1162 5.22998 20.1162C4.34388 20.1162 3.47749 19.8619 2.73947 19.3851C2.00145 18.9083 1.42464 18.2302 1.08137 17.436C0.738095 16.6417 0.643645 15.7666 0.809859 14.9204C0.976073 14.0742 1.39555 13.2945 2.0157 12.6791V3.24131ZM5.22998 1.36625C4.71849 1.36625 4.22795 1.5638 3.86627 1.91544C3.5046 2.26709 3.30141 2.74401 3.30141 3.24131V13.2254L3.0867 13.4129C2.60143 13.8348 2.25937 14.39 2.10579 15.0051C1.9522 15.6202 1.99433 16.2661 2.22659 16.8574C2.45885 17.4486 2.87031 17.9574 3.4065 18.3164C3.94269 18.6753 4.57834 18.8675 5.22934 18.8675C5.88033 18.8675 6.51599 18.6753 7.05218 18.3164C7.58837 17.9574 7.99982 17.4486 8.23208 16.8574C8.46435 16.2661 8.50647 15.6202 8.35289 15.0051C8.1993 14.39 7.85724 13.8348 7.37198 13.4129L7.15855 13.2254V3.24131C7.15855 2.74401 6.95536 2.26709 6.59369 1.91544C6.23201 1.5638 5.74147 1.36625 5.22998 1.36625Z'
                            fill='white'
                          />
                        </svg>
                        Warm
                      </li>
                    </ul>
                  </AllMissionsBottomBadges>
                  <AllMissionsBottomInfo>
                    <ul>
                      <li>
                        <svg
                          width='25'
                          height='21'
                          viewBox='0 0 25 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.23 19.5459V17.5459C16.23 16.485 15.8086 15.4676 15.0584 14.7175C14.3083 13.9673 13.2908 13.5459 12.23 13.5459H5.22998C4.16911 13.5459 3.1517 13.9673 2.40155 14.7175C1.65141 15.4676 1.22998 16.485 1.22998 17.5459V19.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M8.72998 9.5459C10.9391 9.5459 12.73 7.75504 12.73 5.5459C12.73 3.33676 10.9391 1.5459 8.72998 1.5459C6.52084 1.5459 4.72998 3.33676 4.72998 5.5459C4.72998 7.75504 6.52084 9.5459 8.72998 9.5459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M17.23 9.5459L19.23 11.5459L23.23 7.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        323
                      </li>
                      <li>
                        <svg
                          width='24'
                          height='21'
                          viewBox='0 0 24 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M20.5696 3.04151C20.0589 2.53052 19.4524 2.12516 18.785 1.8486C18.1175 1.57203 17.4021 1.42969 16.6796 1.42969C15.9571 1.42969 15.2417 1.57203 14.5743 1.8486C13.9068 2.12516 13.3004 2.53052 12.7896 3.04151L11.7296 4.10151L10.6696 3.04151C9.63792 2.00982 8.23864 1.43022 6.77961 1.43022C5.32058 1.43022 3.9213 2.00982 2.88961 3.04151C1.85792 4.07321 1.27832 5.47248 1.27832 6.93151C1.27832 8.39055 1.85792 9.78982 2.88961 10.8215L3.94961 11.8815L11.7296 19.6615L19.5096 11.8815L20.5696 10.8215C21.0806 10.3108 21.486 9.70433 21.7625 9.03687C22.0391 8.36941 22.1814 7.654 22.1814 6.93151C22.1814 6.20903 22.0391 5.49362 21.7625 4.82616C21.486 4.1587 21.0806 3.55227 20.5696 3.04151V3.04151Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        32
                      </li>
                      <li>
                        <svg
                          width='21'
                          height='21'
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.23 10.0459C19.2334 11.3658 18.925 12.6678 18.33 13.8459C17.6244 15.2577 16.5397 16.4451 15.1974 17.2752C13.8551 18.1053 12.3082 18.5453 10.73 18.5459C9.41011 18.5494 8.1081 18.241 6.92998 17.6459L1.22998 19.5459L3.12998 13.8459C2.53491 12.6678 2.22654 11.3658 2.22998 10.0459C2.23059 8.46768 2.67059 6.92078 3.5007 5.57848C4.33081 4.23618 5.51823 3.15149 6.92998 2.44593C8.1081 1.85086 9.41011 1.54249 10.73 1.54593H11.23C13.3143 1.66092 15.283 2.54069 16.7591 4.01679C18.2352 5.49288 19.115 7.46158 19.23 9.54593V10.0459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        2
                      </li>
                    </ul>
                  </AllMissionsBottomInfo>
                </AllMissionsBottomCont>
              </AllMissionsBottom>
            </AllMissionsCol>

            <AllMissionsCol>
              <AllMissionsTop>
                <AllMissionsTopImg>
                  <img src='/image2.png' alt="image2" />
                </AllMissionsTopImg>
              </AllMissionsTop>
              <AllMissionsBottom>
                <AllMissionsBottomCont>
                  <AllMissionsBottomTitle>Swipe Left</AllMissionsBottomTitle>
                  <AllMissionsBottomAuthor>@haikupro</AllMissionsBottomAuthor>
                  <AllMissionsBottomBadges>
                    <ul>
                      <li>
                        <svg
                          width='21'
                          height='12'
                          viewBox='0 0 21 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.7657 5.6102C2.56518 4.21185 3.69797 3.0345 5.06161 2.18203L9.79193 10.199L0.483438 10.1896C0.526289 8.58202 0.966222 7.00855 1.7657 5.6102Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.2572 0.699257C11.9276 0.703913 13.5674 1.13762 15.0199 1.95688L10.2314 9.96003L5.48759 1.93031C6.94465 1.11916 8.5868 0.6946 10.2572 0.699257Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M18.6991 5.6185C19.4972 7.01765 19.9355 8.59157 19.9768 10.1992H10.6683L15.4067 2.187C16.7695 3.04085 17.9011 4.21934 18.6991 5.6185Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.3697 6.53566L10.8973 9.39025C10.6234 9.51128 10.4947 9.54836 10.3544 9.58873C10.3411 9.59256 10.3277 9.59642 10.314 9.60039C10.1672 9.64306 10.0023 9.69474 9.70163 9.82178L10.3697 6.53566Z'
                            fill='white'
                            stroke='#931A1A'
                            stroke-width='0.5'
                          />
                          <circle
                            cx='10.2301'
                            cy='10.1159'
                            r='1.41667'
                            fill='#931A1A'
                            stroke='white'
                            stroke-width='0.5'
                          />
                        </svg>
                        Level 2
                      </li>
                      <li>
                        <svg
                          width='10'
                          height='21'
                          viewBox='0 0 10 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.15841 15.7415C7.15822 16.0852 7.06087 16.4222 6.87698 16.7158C6.6931 17.0094 6.42975 17.2481 6.11573 17.406C5.80171 17.5639 5.44909 17.6348 5.09642 17.6111C4.74374 17.5873 4.40457 17.4697 4.11597 17.2712C3.82737 17.0727 3.60045 16.8008 3.46 16.4854C3.31955 16.17 3.27098 15.8231 3.31959 15.4826C3.36821 15.1422 3.51214 14.8213 3.73566 14.555C3.95917 14.2887 4.25368 14.0872 4.58698 13.9727V8.24123C4.58698 8.07547 4.65471 7.91649 4.77527 7.79928C4.89583 7.68206 5.05934 7.61621 5.22984 7.61621C5.40034 7.61621 5.56385 7.68206 5.68441 7.79928C5.80497 7.91649 5.8727 8.07547 5.8727 8.24123V13.9727C6.24887 14.102 6.57453 14.3415 6.8048 14.6583C7.03507 14.9751 7.15862 15.3535 7.15841 15.7415Z'
                            fill='white'
                          />
                          <path
                            d='M2.0157 3.24131C2.0157 2.41248 2.35434 1.6176 2.95714 1.03153C3.55993 0.445462 4.3775 0.116211 5.22998 0.116211C6.08246 0.116211 6.90003 0.445462 7.50282 1.03153C8.10562 1.6176 8.44426 2.41248 8.44426 3.24131V12.6791C9.06441 13.2945 9.48389 14.0742 9.6501 14.9204C9.81632 15.7666 9.72186 16.6417 9.37859 17.436C9.03532 18.2302 8.45851 18.9083 7.72049 19.3851C6.98247 19.8619 6.11609 20.1162 5.22998 20.1162C4.34388 20.1162 3.47749 19.8619 2.73947 19.3851C2.00145 18.9083 1.42464 18.2302 1.08137 17.436C0.738095 16.6417 0.643645 15.7666 0.809859 14.9204C0.976073 14.0742 1.39555 13.2945 2.0157 12.6791V3.24131ZM5.22998 1.36625C4.71849 1.36625 4.22795 1.5638 3.86627 1.91544C3.5046 2.26709 3.30141 2.74401 3.30141 3.24131V13.2254L3.0867 13.4129C2.60143 13.8348 2.25937 14.39 2.10579 15.0051C1.9522 15.6202 1.99433 16.2661 2.22659 16.8574C2.45885 17.4486 2.87031 17.9574 3.4065 18.3164C3.94269 18.6753 4.57834 18.8675 5.22934 18.8675C5.88033 18.8675 6.51599 18.6753 7.05218 18.3164C7.58837 17.9574 7.99982 17.4486 8.23208 16.8574C8.46435 16.2661 8.50647 15.6202 8.35289 15.0051C8.1993 14.39 7.85724 13.8348 7.37198 13.4129L7.15855 13.2254V3.24131C7.15855 2.74401 6.95536 2.26709 6.59369 1.91544C6.23201 1.5638 5.74147 1.36625 5.22998 1.36625Z'
                            fill='white'
                          />
                        </svg>
                        Warm
                      </li>
                    </ul>
                  </AllMissionsBottomBadges>
                  <AllMissionsBottomInfo>
                    <ul>
                      <li>
                        <svg
                          width='25'
                          height='21'
                          viewBox='0 0 25 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.23 19.5459V17.5459C16.23 16.485 15.8086 15.4676 15.0584 14.7175C14.3083 13.9673 13.2908 13.5459 12.23 13.5459H5.22998C4.16911 13.5459 3.1517 13.9673 2.40155 14.7175C1.65141 15.4676 1.22998 16.485 1.22998 17.5459V19.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M8.72998 9.5459C10.9391 9.5459 12.73 7.75504 12.73 5.5459C12.73 3.33676 10.9391 1.5459 8.72998 1.5459C6.52084 1.5459 4.72998 3.33676 4.72998 5.5459C4.72998 7.75504 6.52084 9.5459 8.72998 9.5459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M17.23 9.5459L19.23 11.5459L23.23 7.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        323
                      </li>
                      <li>
                        <svg
                          width='24'
                          height='21'
                          viewBox='0 0 24 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M20.5696 3.04151C20.0589 2.53052 19.4524 2.12516 18.785 1.8486C18.1175 1.57203 17.4021 1.42969 16.6796 1.42969C15.9571 1.42969 15.2417 1.57203 14.5743 1.8486C13.9068 2.12516 13.3004 2.53052 12.7896 3.04151L11.7296 4.10151L10.6696 3.04151C9.63792 2.00982 8.23864 1.43022 6.77961 1.43022C5.32058 1.43022 3.9213 2.00982 2.88961 3.04151C1.85792 4.07321 1.27832 5.47248 1.27832 6.93151C1.27832 8.39055 1.85792 9.78982 2.88961 10.8215L3.94961 11.8815L11.7296 19.6615L19.5096 11.8815L20.5696 10.8215C21.0806 10.3108 21.486 9.70433 21.7625 9.03687C22.0391 8.36941 22.1814 7.654 22.1814 6.93151C22.1814 6.20903 22.0391 5.49362 21.7625 4.82616C21.486 4.1587 21.0806 3.55227 20.5696 3.04151V3.04151Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        32
                      </li>
                      <li>
                        <svg
                          width='21'
                          height='21'
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.23 10.0459C19.2334 11.3658 18.925 12.6678 18.33 13.8459C17.6244 15.2577 16.5397 16.4451 15.1974 17.2752C13.8551 18.1053 12.3082 18.5453 10.73 18.5459C9.41011 18.5494 8.1081 18.241 6.92998 17.6459L1.22998 19.5459L3.12998 13.8459C2.53491 12.6678 2.22654 11.3658 2.22998 10.0459C2.23059 8.46768 2.67059 6.92078 3.5007 5.57848C4.33081 4.23618 5.51823 3.15149 6.92998 2.44593C8.1081 1.85086 9.41011 1.54249 10.73 1.54593H11.23C13.3143 1.66092 15.283 2.54069 16.7591 4.01679C18.2352 5.49288 19.115 7.46158 19.23 9.54593V10.0459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        2
                      </li>
                    </ul>
                  </AllMissionsBottomInfo>
                </AllMissionsBottomCont>
              </AllMissionsBottom>
            </AllMissionsCol>

            <AllMissionsCol>
              <AllMissionsTop>
                <AllMissionsTopImg>
                  <img src='/image2.png' alt="image2" />
                </AllMissionsTopImg>
              </AllMissionsTop>
              <AllMissionsBottom>
                <AllMissionsBottomCont>
                  <AllMissionsBottomTitle>
                    Yesterday World
                  </AllMissionsBottomTitle>
                  <AllMissionsBottomAuthor>@haikupro</AllMissionsBottomAuthor>
                  <AllMissionsBottomBadges>
                    <ul>
                      <li>
                        <svg
                          width='21'
                          height='12'
                          viewBox='0 0 21 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.7657 5.6102C2.56518 4.21185 3.69797 3.0345 5.06161 2.18203L9.79193 10.199L0.483438 10.1896C0.526289 8.58202 0.966222 7.00855 1.7657 5.6102Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.2572 0.699257C11.9276 0.703913 13.5674 1.13762 15.0199 1.95688L10.2314 9.96003L5.48759 1.93031C6.94465 1.11916 8.5868 0.6946 10.2572 0.699257Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M18.6991 5.6185C19.4972 7.01765 19.9355 8.59157 19.9768 10.1992H10.6683L15.4067 2.187C16.7695 3.04085 17.9011 4.21934 18.6991 5.6185Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.3697 6.53566L10.8973 9.39025C10.6234 9.51128 10.4947 9.54836 10.3544 9.58873C10.3411 9.59256 10.3277 9.59642 10.314 9.60039C10.1672 9.64306 10.0023 9.69474 9.70163 9.82178L10.3697 6.53566Z'
                            fill='white'
                            stroke='#931A1A'
                            stroke-width='0.5'
                          />
                          <circle
                            cx='10.2301'
                            cy='10.1159'
                            r='1.41667'
                            fill='#931A1A'
                            stroke='white'
                            stroke-width='0.5'
                          />
                        </svg>
                        Level 2
                      </li>
                      <li>
                        <svg
                          width='10'
                          height='21'
                          viewBox='0 0 10 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.15841 15.7415C7.15822 16.0852 7.06087 16.4222 6.87698 16.7158C6.6931 17.0094 6.42975 17.2481 6.11573 17.406C5.80171 17.5639 5.44909 17.6348 5.09642 17.6111C4.74374 17.5873 4.40457 17.4697 4.11597 17.2712C3.82737 17.0727 3.60045 16.8008 3.46 16.4854C3.31955 16.17 3.27098 15.8231 3.31959 15.4826C3.36821 15.1422 3.51214 14.8213 3.73566 14.555C3.95917 14.2887 4.25368 14.0872 4.58698 13.9727V8.24123C4.58698 8.07547 4.65471 7.91649 4.77527 7.79928C4.89583 7.68206 5.05934 7.61621 5.22984 7.61621C5.40034 7.61621 5.56385 7.68206 5.68441 7.79928C5.80497 7.91649 5.8727 8.07547 5.8727 8.24123V13.9727C6.24887 14.102 6.57453 14.3415 6.8048 14.6583C7.03507 14.9751 7.15862 15.3535 7.15841 15.7415Z'
                            fill='white'
                          />
                          <path
                            d='M2.0157 3.24131C2.0157 2.41248 2.35434 1.6176 2.95714 1.03153C3.55993 0.445462 4.3775 0.116211 5.22998 0.116211C6.08246 0.116211 6.90003 0.445462 7.50282 1.03153C8.10562 1.6176 8.44426 2.41248 8.44426 3.24131V12.6791C9.06441 13.2945 9.48389 14.0742 9.6501 14.9204C9.81632 15.7666 9.72186 16.6417 9.37859 17.436C9.03532 18.2302 8.45851 18.9083 7.72049 19.3851C6.98247 19.8619 6.11609 20.1162 5.22998 20.1162C4.34388 20.1162 3.47749 19.8619 2.73947 19.3851C2.00145 18.9083 1.42464 18.2302 1.08137 17.436C0.738095 16.6417 0.643645 15.7666 0.809859 14.9204C0.976073 14.0742 1.39555 13.2945 2.0157 12.6791V3.24131ZM5.22998 1.36625C4.71849 1.36625 4.22795 1.5638 3.86627 1.91544C3.5046 2.26709 3.30141 2.74401 3.30141 3.24131V13.2254L3.0867 13.4129C2.60143 13.8348 2.25937 14.39 2.10579 15.0051C1.9522 15.6202 1.99433 16.2661 2.22659 16.8574C2.45885 17.4486 2.87031 17.9574 3.4065 18.3164C3.94269 18.6753 4.57834 18.8675 5.22934 18.8675C5.88033 18.8675 6.51599 18.6753 7.05218 18.3164C7.58837 17.9574 7.99982 17.4486 8.23208 16.8574C8.46435 16.2661 8.50647 15.6202 8.35289 15.0051C8.1993 14.39 7.85724 13.8348 7.37198 13.4129L7.15855 13.2254V3.24131C7.15855 2.74401 6.95536 2.26709 6.59369 1.91544C6.23201 1.5638 5.74147 1.36625 5.22998 1.36625Z'
                            fill='white'
                          />
                        </svg>
                        Warm
                      </li>
                    </ul>
                  </AllMissionsBottomBadges>
                  <AllMissionsBottomInfo>
                    <ul>
                      <li>
                        <svg
                          width='25'
                          height='21'
                          viewBox='0 0 25 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.23 19.5459V17.5459C16.23 16.485 15.8086 15.4676 15.0584 14.7175C14.3083 13.9673 13.2908 13.5459 12.23 13.5459H5.22998C4.16911 13.5459 3.1517 13.9673 2.40155 14.7175C1.65141 15.4676 1.22998 16.485 1.22998 17.5459V19.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M8.72998 9.5459C10.9391 9.5459 12.73 7.75504 12.73 5.5459C12.73 3.33676 10.9391 1.5459 8.72998 1.5459C6.52084 1.5459 4.72998 3.33676 4.72998 5.5459C4.72998 7.75504 6.52084 9.5459 8.72998 9.5459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M17.23 9.5459L19.23 11.5459L23.23 7.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        323
                      </li>
                      <li>
                        <svg
                          width='24'
                          height='21'
                          viewBox='0 0 24 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M20.5696 3.04151C20.0589 2.53052 19.4524 2.12516 18.785 1.8486C18.1175 1.57203 17.4021 1.42969 16.6796 1.42969C15.9571 1.42969 15.2417 1.57203 14.5743 1.8486C13.9068 2.12516 13.3004 2.53052 12.7896 3.04151L11.7296 4.10151L10.6696 3.04151C9.63792 2.00982 8.23864 1.43022 6.77961 1.43022C5.32058 1.43022 3.9213 2.00982 2.88961 3.04151C1.85792 4.07321 1.27832 5.47248 1.27832 6.93151C1.27832 8.39055 1.85792 9.78982 2.88961 10.8215L3.94961 11.8815L11.7296 19.6615L19.5096 11.8815L20.5696 10.8215C21.0806 10.3108 21.486 9.70433 21.7625 9.03687C22.0391 8.36941 22.1814 7.654 22.1814 6.93151C22.1814 6.20903 22.0391 5.49362 21.7625 4.82616C21.486 4.1587 21.0806 3.55227 20.5696 3.04151V3.04151Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        32
                      </li>
                      <li>
                        <svg
                          width='21'
                          height='21'
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.23 10.0459C19.2334 11.3658 18.925 12.6678 18.33 13.8459C17.6244 15.2577 16.5397 16.4451 15.1974 17.2752C13.8551 18.1053 12.3082 18.5453 10.73 18.5459C9.41011 18.5494 8.1081 18.241 6.92998 17.6459L1.22998 19.5459L3.12998 13.8459C2.53491 12.6678 2.22654 11.3658 2.22998 10.0459C2.23059 8.46768 2.67059 6.92078 3.5007 5.57848C4.33081 4.23618 5.51823 3.15149 6.92998 2.44593C8.1081 1.85086 9.41011 1.54249 10.73 1.54593H11.23C13.3143 1.66092 15.283 2.54069 16.7591 4.01679C18.2352 5.49288 19.115 7.46158 19.23 9.54593V10.0459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        2
                      </li>
                    </ul>
                  </AllMissionsBottomInfo>
                </AllMissionsBottomCont>
              </AllMissionsBottom>
            </AllMissionsCol>

            <AllMissionsCol>
              <AllMissionsTop>
                <AllMissionsTopImg>
                  <img src='/image2.png' alt="image2" />
                </AllMissionsTopImg>
              </AllMissionsTop>
              <AllMissionsBottom>
                <AllMissionsBottomCont>
                  <AllMissionsBottomTitle>Swipe Right</AllMissionsBottomTitle>
                  <AllMissionsBottomAuthor>@haikupro</AllMissionsBottomAuthor>
                  <AllMissionsBottomBadges>
                    <ul>
                      <li>
                        <svg
                          width='21'
                          height='12'
                          viewBox='0 0 21 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.7657 5.6102C2.56518 4.21185 3.69797 3.0345 5.06161 2.18203L9.79193 10.199L0.483438 10.1896C0.526289 8.58202 0.966222 7.00855 1.7657 5.6102Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.2572 0.699257C11.9276 0.703913 13.5674 1.13762 15.0199 1.95688L10.2314 9.96003L5.48759 1.93031C6.94465 1.11916 8.5868 0.6946 10.2572 0.699257Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M18.6991 5.6185C19.4972 7.01765 19.9355 8.59157 19.9768 10.1992H10.6683L15.4067 2.187C16.7695 3.04085 17.9011 4.21934 18.6991 5.6185Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.3697 6.53566L10.8973 9.39025C10.6234 9.51128 10.4947 9.54836 10.3544 9.58873C10.3411 9.59256 10.3277 9.59642 10.314 9.60039C10.1672 9.64306 10.0023 9.69474 9.70163 9.82178L10.3697 6.53566Z'
                            fill='white'
                            stroke='#931A1A'
                            stroke-width='0.5'
                          />
                          <circle
                            cx='10.2301'
                            cy='10.1159'
                            r='1.41667'
                            fill='#931A1A'
                            stroke='white'
                            stroke-width='0.5'
                          />
                        </svg>
                        Level 2
                      </li>
                      <li>
                        <svg
                          width='10'
                          height='21'
                          viewBox='0 0 10 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.15841 15.7415C7.15822 16.0852 7.06087 16.4222 6.87698 16.7158C6.6931 17.0094 6.42975 17.2481 6.11573 17.406C5.80171 17.5639 5.44909 17.6348 5.09642 17.6111C4.74374 17.5873 4.40457 17.4697 4.11597 17.2712C3.82737 17.0727 3.60045 16.8008 3.46 16.4854C3.31955 16.17 3.27098 15.8231 3.31959 15.4826C3.36821 15.1422 3.51214 14.8213 3.73566 14.555C3.95917 14.2887 4.25368 14.0872 4.58698 13.9727V8.24123C4.58698 8.07547 4.65471 7.91649 4.77527 7.79928C4.89583 7.68206 5.05934 7.61621 5.22984 7.61621C5.40034 7.61621 5.56385 7.68206 5.68441 7.79928C5.80497 7.91649 5.8727 8.07547 5.8727 8.24123V13.9727C6.24887 14.102 6.57453 14.3415 6.8048 14.6583C7.03507 14.9751 7.15862 15.3535 7.15841 15.7415Z'
                            fill='white'
                          />
                          <path
                            d='M2.0157 3.24131C2.0157 2.41248 2.35434 1.6176 2.95714 1.03153C3.55993 0.445462 4.3775 0.116211 5.22998 0.116211C6.08246 0.116211 6.90003 0.445462 7.50282 1.03153C8.10562 1.6176 8.44426 2.41248 8.44426 3.24131V12.6791C9.06441 13.2945 9.48389 14.0742 9.6501 14.9204C9.81632 15.7666 9.72186 16.6417 9.37859 17.436C9.03532 18.2302 8.45851 18.9083 7.72049 19.3851C6.98247 19.8619 6.11609 20.1162 5.22998 20.1162C4.34388 20.1162 3.47749 19.8619 2.73947 19.3851C2.00145 18.9083 1.42464 18.2302 1.08137 17.436C0.738095 16.6417 0.643645 15.7666 0.809859 14.9204C0.976073 14.0742 1.39555 13.2945 2.0157 12.6791V3.24131ZM5.22998 1.36625C4.71849 1.36625 4.22795 1.5638 3.86627 1.91544C3.5046 2.26709 3.30141 2.74401 3.30141 3.24131V13.2254L3.0867 13.4129C2.60143 13.8348 2.25937 14.39 2.10579 15.0051C1.9522 15.6202 1.99433 16.2661 2.22659 16.8574C2.45885 17.4486 2.87031 17.9574 3.4065 18.3164C3.94269 18.6753 4.57834 18.8675 5.22934 18.8675C5.88033 18.8675 6.51599 18.6753 7.05218 18.3164C7.58837 17.9574 7.99982 17.4486 8.23208 16.8574C8.46435 16.2661 8.50647 15.6202 8.35289 15.0051C8.1993 14.39 7.85724 13.8348 7.37198 13.4129L7.15855 13.2254V3.24131C7.15855 2.74401 6.95536 2.26709 6.59369 1.91544C6.23201 1.5638 5.74147 1.36625 5.22998 1.36625Z'
                            fill='white'
                          />
                        </svg>
                        Warm
                      </li>
                    </ul>
                  </AllMissionsBottomBadges>
                  <AllMissionsBottomInfo>
                    <ul>
                      <li>
                        <svg
                          width='25'
                          height='21'
                          viewBox='0 0 25 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.23 19.5459V17.5459C16.23 16.485 15.8086 15.4676 15.0584 14.7175C14.3083 13.9673 13.2908 13.5459 12.23 13.5459H5.22998C4.16911 13.5459 3.1517 13.9673 2.40155 14.7175C1.65141 15.4676 1.22998 16.485 1.22998 17.5459V19.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M8.72998 9.5459C10.9391 9.5459 12.73 7.75504 12.73 5.5459C12.73 3.33676 10.9391 1.5459 8.72998 1.5459C6.52084 1.5459 4.72998 3.33676 4.72998 5.5459C4.72998 7.75504 6.52084 9.5459 8.72998 9.5459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M17.23 9.5459L19.23 11.5459L23.23 7.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        323
                      </li>
                      <li>
                        <svg
                          width='24'
                          height='21'
                          viewBox='0 0 24 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M20.5696 3.04151C20.0589 2.53052 19.4524 2.12516 18.785 1.8486C18.1175 1.57203 17.4021 1.42969 16.6796 1.42969C15.9571 1.42969 15.2417 1.57203 14.5743 1.8486C13.9068 2.12516 13.3004 2.53052 12.7896 3.04151L11.7296 4.10151L10.6696 3.04151C9.63792 2.00982 8.23864 1.43022 6.77961 1.43022C5.32058 1.43022 3.9213 2.00982 2.88961 3.04151C1.85792 4.07321 1.27832 5.47248 1.27832 6.93151C1.27832 8.39055 1.85792 9.78982 2.88961 10.8215L3.94961 11.8815L11.7296 19.6615L19.5096 11.8815L20.5696 10.8215C21.0806 10.3108 21.486 9.70433 21.7625 9.03687C22.0391 8.36941 22.1814 7.654 22.1814 6.93151C22.1814 6.20903 22.0391 5.49362 21.7625 4.82616C21.486 4.1587 21.0806 3.55227 20.5696 3.04151V3.04151Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        32
                      </li>
                      <li>
                        <svg
                          width='21'
                          height='21'
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.23 10.0459C19.2334 11.3658 18.925 12.6678 18.33 13.8459C17.6244 15.2577 16.5397 16.4451 15.1974 17.2752C13.8551 18.1053 12.3082 18.5453 10.73 18.5459C9.41011 18.5494 8.1081 18.241 6.92998 17.6459L1.22998 19.5459L3.12998 13.8459C2.53491 12.6678 2.22654 11.3658 2.22998 10.0459C2.23059 8.46768 2.67059 6.92078 3.5007 5.57848C4.33081 4.23618 5.51823 3.15149 6.92998 2.44593C8.1081 1.85086 9.41011 1.54249 10.73 1.54593H11.23C13.3143 1.66092 15.283 2.54069 16.7591 4.01679C18.2352 5.49288 19.115 7.46158 19.23 9.54593V10.0459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        2
                      </li>
                    </ul>
                  </AllMissionsBottomInfo>
                </AllMissionsBottomCont>
              </AllMissionsBottom>
            </AllMissionsCol>
            <AllMissionsCol>
              <AllMissionsTop>
                <AllMissionsTopImg>
                  <img src='/image2.png' alt="imag" />
                </AllMissionsTopImg>
              </AllMissionsTop>
              <AllMissionsBottom>
                <AllMissionsBottomCont>
                  <AllMissionsBottomTitle>
                    Drone Racing League
                  </AllMissionsBottomTitle>
                  <AllMissionsBottomAuthor>@haikupro</AllMissionsBottomAuthor>
                  <AllMissionsBottomBadges>
                    <ul>
                      <li>
                        <svg
                          width='21'
                          height='12'
                          viewBox='0 0 21 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.7657 5.6102C2.56518 4.21185 3.69797 3.0345 5.06161 2.18203L9.79193 10.199L0.483438 10.1896C0.526289 8.58202 0.966222 7.00855 1.7657 5.6102Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.2572 0.699257C11.9276 0.703913 13.5674 1.13762 15.0199 1.95688L10.2314 9.96003L5.48759 1.93031C6.94465 1.11916 8.5868 0.6946 10.2572 0.699257Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M18.6991 5.6185C19.4972 7.01765 19.9355 8.59157 19.9768 10.1992H10.6683L15.4067 2.187C16.7695 3.04085 17.9011 4.21934 18.6991 5.6185Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.3697 6.53566L10.8973 9.39025C10.6234 9.51128 10.4947 9.54836 10.3544 9.58873C10.3411 9.59256 10.3277 9.59642 10.314 9.60039C10.1672 9.64306 10.0023 9.69474 9.70163 9.82178L10.3697 6.53566Z'
                            fill='white'
                            stroke='#931A1A'
                            stroke-width='0.5'
                          />
                          <circle
                            cx='10.2301'
                            cy='10.1159'
                            r='1.41667'
                            fill='#931A1A'
                            stroke='white'
                            stroke-width='0.5'
                          />
                        </svg>
                        Level 2
                      </li>
                      <li>
                        <svg
                          width='10'
                          height='21'
                          viewBox='0 0 10 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.15841 15.7415C7.15822 16.0852 7.06087 16.4222 6.87698 16.7158C6.6931 17.0094 6.42975 17.2481 6.11573 17.406C5.80171 17.5639 5.44909 17.6348 5.09642 17.6111C4.74374 17.5873 4.40457 17.4697 4.11597 17.2712C3.82737 17.0727 3.60045 16.8008 3.46 16.4854C3.31955 16.17 3.27098 15.8231 3.31959 15.4826C3.36821 15.1422 3.51214 14.8213 3.73566 14.555C3.95917 14.2887 4.25368 14.0872 4.58698 13.9727V8.24123C4.58698 8.07547 4.65471 7.91649 4.77527 7.79928C4.89583 7.68206 5.05934 7.61621 5.22984 7.61621C5.40034 7.61621 5.56385 7.68206 5.68441 7.79928C5.80497 7.91649 5.8727 8.07547 5.8727 8.24123V13.9727C6.24887 14.102 6.57453 14.3415 6.8048 14.6583C7.03507 14.9751 7.15862 15.3535 7.15841 15.7415Z'
                            fill='white'
                          />
                          <path
                            d='M2.0157 3.24131C2.0157 2.41248 2.35434 1.6176 2.95714 1.03153C3.55993 0.445462 4.3775 0.116211 5.22998 0.116211C6.08246 0.116211 6.90003 0.445462 7.50282 1.03153C8.10562 1.6176 8.44426 2.41248 8.44426 3.24131V12.6791C9.06441 13.2945 9.48389 14.0742 9.6501 14.9204C9.81632 15.7666 9.72186 16.6417 9.37859 17.436C9.03532 18.2302 8.45851 18.9083 7.72049 19.3851C6.98247 19.8619 6.11609 20.1162 5.22998 20.1162C4.34388 20.1162 3.47749 19.8619 2.73947 19.3851C2.00145 18.9083 1.42464 18.2302 1.08137 17.436C0.738095 16.6417 0.643645 15.7666 0.809859 14.9204C0.976073 14.0742 1.39555 13.2945 2.0157 12.6791V3.24131ZM5.22998 1.36625C4.71849 1.36625 4.22795 1.5638 3.86627 1.91544C3.5046 2.26709 3.30141 2.74401 3.30141 3.24131V13.2254L3.0867 13.4129C2.60143 13.8348 2.25937 14.39 2.10579 15.0051C1.9522 15.6202 1.99433 16.2661 2.22659 16.8574C2.45885 17.4486 2.87031 17.9574 3.4065 18.3164C3.94269 18.6753 4.57834 18.8675 5.22934 18.8675C5.88033 18.8675 6.51599 18.6753 7.05218 18.3164C7.58837 17.9574 7.99982 17.4486 8.23208 16.8574C8.46435 16.2661 8.50647 15.6202 8.35289 15.0051C8.1993 14.39 7.85724 13.8348 7.37198 13.4129L7.15855 13.2254V3.24131C7.15855 2.74401 6.95536 2.26709 6.59369 1.91544C6.23201 1.5638 5.74147 1.36625 5.22998 1.36625Z'
                            fill='white'
                          />
                        </svg>
                        Warm
                      </li>
                    </ul>
                  </AllMissionsBottomBadges>
                  <AllMissionsBottomInfo>
                    <ul>
                      <li>
                        <svg
                          width='25'
                          height='21'
                          viewBox='0 0 25 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.23 19.5459V17.5459C16.23 16.485 15.8086 15.4676 15.0584 14.7175C14.3083 13.9673 13.2908 13.5459 12.23 13.5459H5.22998C4.16911 13.5459 3.1517 13.9673 2.40155 14.7175C1.65141 15.4676 1.22998 16.485 1.22998 17.5459V19.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M8.72998 9.5459C10.9391 9.5459 12.73 7.75504 12.73 5.5459C12.73 3.33676 10.9391 1.5459 8.72998 1.5459C6.52084 1.5459 4.72998 3.33676 4.72998 5.5459C4.72998 7.75504 6.52084 9.5459 8.72998 9.5459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M17.23 9.5459L19.23 11.5459L23.23 7.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        323
                      </li>
                      <li>
                        <svg
                          width='24'
                          height='21'
                          viewBox='0 0 24 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M20.5696 3.04151C20.0589 2.53052 19.4524 2.12516 18.785 1.8486C18.1175 1.57203 17.4021 1.42969 16.6796 1.42969C15.9571 1.42969 15.2417 1.57203 14.5743 1.8486C13.9068 2.12516 13.3004 2.53052 12.7896 3.04151L11.7296 4.10151L10.6696 3.04151C9.63792 2.00982 8.23864 1.43022 6.77961 1.43022C5.32058 1.43022 3.9213 2.00982 2.88961 3.04151C1.85792 4.07321 1.27832 5.47248 1.27832 6.93151C1.27832 8.39055 1.85792 9.78982 2.88961 10.8215L3.94961 11.8815L11.7296 19.6615L19.5096 11.8815L20.5696 10.8215C21.0806 10.3108 21.486 9.70433 21.7625 9.03687C22.0391 8.36941 22.1814 7.654 22.1814 6.93151C22.1814 6.20903 22.0391 5.49362 21.7625 4.82616C21.486 4.1587 21.0806 3.55227 20.5696 3.04151V3.04151Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        32
                      </li>
                      <li>
                        <svg
                          width='21'
                          height='21'
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.23 10.0459C19.2334 11.3658 18.925 12.6678 18.33 13.8459C17.6244 15.2577 16.5397 16.4451 15.1974 17.2752C13.8551 18.1053 12.3082 18.5453 10.73 18.5459C9.41011 18.5494 8.1081 18.241 6.92998 17.6459L1.22998 19.5459L3.12998 13.8459C2.53491 12.6678 2.22654 11.3658 2.22998 10.0459C2.23059 8.46768 2.67059 6.92078 3.5007 5.57848C4.33081 4.23618 5.51823 3.15149 6.92998 2.44593C8.1081 1.85086 9.41011 1.54249 10.73 1.54593H11.23C13.3143 1.66092 15.283 2.54069 16.7591 4.01679C18.2352 5.49288 19.115 7.46158 19.23 9.54593V10.0459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        2
                      </li>
                    </ul>
                  </AllMissionsBottomInfo>
                </AllMissionsBottomCont>
              </AllMissionsBottom>
            </AllMissionsCol>
            <AllMissionsCol>
              <AllMissionsTop>
                <AllMissionsTopImg>
                  <img src='/image2.png' alt="imag" />
                </AllMissionsTopImg>
              </AllMissionsTop>
              <AllMissionsBottom>
                <AllMissionsBottomCont>
                  <AllMissionsBottomTitle>
                    Feng Shui Codex
                  </AllMissionsBottomTitle>
                  <AllMissionsBottomAuthor>@haikupro</AllMissionsBottomAuthor>
                  <AllMissionsBottomBadges>
                    <ul>
                      <li>
                        <svg
                          width='21'
                          height='12'
                          viewBox='0 0 21 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.7657 5.6102C2.56518 4.21185 3.69797 3.0345 5.06161 2.18203L9.79193 10.199L0.483438 10.1896C0.526289 8.58202 0.966222 7.00855 1.7657 5.6102Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.2572 0.699257C11.9276 0.703913 13.5674 1.13762 15.0199 1.95688L10.2314 9.96003L5.48759 1.93031C6.94465 1.11916 8.5868 0.6946 10.2572 0.699257Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M18.6991 5.6185C19.4972 7.01765 19.9355 8.59157 19.9768 10.1992H10.6683L15.4067 2.187C16.7695 3.04085 17.9011 4.21934 18.6991 5.6185Z'
                            stroke='white'
                            stroke-width='0.5'
                          />
                          <path
                            d='M10.3697 6.53566L10.8973 9.39025C10.6234 9.51128 10.4947 9.54836 10.3544 9.58873C10.3411 9.59256 10.3277 9.59642 10.314 9.60039C10.1672 9.64306 10.0023 9.69474 9.70163 9.82178L10.3697 6.53566Z'
                            fill='white'
                            stroke='#931A1A'
                            stroke-width='0.5'
                          />
                          <circle
                            cx='10.2301'
                            cy='10.1159'
                            r='1.41667'
                            fill='#931A1A'
                            stroke='white'
                            stroke-width='0.5'
                          />
                        </svg>
                        Level 2
                      </li>
                      <li>
                        <svg
                          width='10'
                          height='21'
                          viewBox='0 0 10 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.15841 15.7415C7.15822 16.0852 7.06087 16.4222 6.87698 16.7158C6.6931 17.0094 6.42975 17.2481 6.11573 17.406C5.80171 17.5639 5.44909 17.6348 5.09642 17.6111C4.74374 17.5873 4.40457 17.4697 4.11597 17.2712C3.82737 17.0727 3.60045 16.8008 3.46 16.4854C3.31955 16.17 3.27098 15.8231 3.31959 15.4826C3.36821 15.1422 3.51214 14.8213 3.73566 14.555C3.95917 14.2887 4.25368 14.0872 4.58698 13.9727V8.24123C4.58698 8.07547 4.65471 7.91649 4.77527 7.79928C4.89583 7.68206 5.05934 7.61621 5.22984 7.61621C5.40034 7.61621 5.56385 7.68206 5.68441 7.79928C5.80497 7.91649 5.8727 8.07547 5.8727 8.24123V13.9727C6.24887 14.102 6.57453 14.3415 6.8048 14.6583C7.03507 14.9751 7.15862 15.3535 7.15841 15.7415Z'
                            fill='white'
                          />
                          <path
                            d='M2.0157 3.24131C2.0157 2.41248 2.35434 1.6176 2.95714 1.03153C3.55993 0.445462 4.3775 0.116211 5.22998 0.116211C6.08246 0.116211 6.90003 0.445462 7.50282 1.03153C8.10562 1.6176 8.44426 2.41248 8.44426 3.24131V12.6791C9.06441 13.2945 9.48389 14.0742 9.6501 14.9204C9.81632 15.7666 9.72186 16.6417 9.37859 17.436C9.03532 18.2302 8.45851 18.9083 7.72049 19.3851C6.98247 19.8619 6.11609 20.1162 5.22998 20.1162C4.34388 20.1162 3.47749 19.8619 2.73947 19.3851C2.00145 18.9083 1.42464 18.2302 1.08137 17.436C0.738095 16.6417 0.643645 15.7666 0.809859 14.9204C0.976073 14.0742 1.39555 13.2945 2.0157 12.6791V3.24131ZM5.22998 1.36625C4.71849 1.36625 4.22795 1.5638 3.86627 1.91544C3.5046 2.26709 3.30141 2.74401 3.30141 3.24131V13.2254L3.0867 13.4129C2.60143 13.8348 2.25937 14.39 2.10579 15.0051C1.9522 15.6202 1.99433 16.2661 2.22659 16.8574C2.45885 17.4486 2.87031 17.9574 3.4065 18.3164C3.94269 18.6753 4.57834 18.8675 5.22934 18.8675C5.88033 18.8675 6.51599 18.6753 7.05218 18.3164C7.58837 17.9574 7.99982 17.4486 8.23208 16.8574C8.46435 16.2661 8.50647 15.6202 8.35289 15.0051C8.1993 14.39 7.85724 13.8348 7.37198 13.4129L7.15855 13.2254V3.24131C7.15855 2.74401 6.95536 2.26709 6.59369 1.91544C6.23201 1.5638 5.74147 1.36625 5.22998 1.36625Z'
                            fill='white'
                          />
                        </svg>
                        Warm
                      </li>
                    </ul>
                  </AllMissionsBottomBadges>
                  <AllMissionsBottomInfo>
                    <ul>
                      <li>
                        <svg
                          width='25'
                          height='21'
                          viewBox='0 0 25 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.23 19.5459V17.5459C16.23 16.485 15.8086 15.4676 15.0584 14.7175C14.3083 13.9673 13.2908 13.5459 12.23 13.5459H5.22998C4.16911 13.5459 3.1517 13.9673 2.40155 14.7175C1.65141 15.4676 1.22998 16.485 1.22998 17.5459V19.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M8.72998 9.5459C10.9391 9.5459 12.73 7.75504 12.73 5.5459C12.73 3.33676 10.9391 1.5459 8.72998 1.5459C6.52084 1.5459 4.72998 3.33676 4.72998 5.5459C4.72998 7.75504 6.52084 9.5459 8.72998 9.5459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M17.23 9.5459L19.23 11.5459L23.23 7.5459'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        323
                      </li>
                      <li>
                        <svg
                          width='24'
                          height='21'
                          viewBox='0 0 24 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M20.5696 3.04151C20.0589 2.53052 19.4524 2.12516 18.785 1.8486C18.1175 1.57203 17.4021 1.42969 16.6796 1.42969C15.9571 1.42969 15.2417 1.57203 14.5743 1.8486C13.9068 2.12516 13.3004 2.53052 12.7896 3.04151L11.7296 4.10151L10.6696 3.04151C9.63792 2.00982 8.23864 1.43022 6.77961 1.43022C5.32058 1.43022 3.9213 2.00982 2.88961 3.04151C1.85792 4.07321 1.27832 5.47248 1.27832 6.93151C1.27832 8.39055 1.85792 9.78982 2.88961 10.8215L3.94961 11.8815L11.7296 19.6615L19.5096 11.8815L20.5696 10.8215C21.0806 10.3108 21.486 9.70433 21.7625 9.03687C22.0391 8.36941 22.1814 7.654 22.1814 6.93151C22.1814 6.20903 22.0391 5.49362 21.7625 4.82616C21.486 4.1587 21.0806 3.55227 20.5696 3.04151V3.04151Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        32
                      </li>
                      <li>
                        <svg
                          width='21'
                          height='21'
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.23 10.0459C19.2334 11.3658 18.925 12.6678 18.33 13.8459C17.6244 15.2577 16.5397 16.4451 15.1974 17.2752C13.8551 18.1053 12.3082 18.5453 10.73 18.5459C9.41011 18.5494 8.1081 18.241 6.92998 17.6459L1.22998 19.5459L3.12998 13.8459C2.53491 12.6678 2.22654 11.3658 2.22998 10.0459C2.23059 8.46768 2.67059 6.92078 3.5007 5.57848C4.33081 4.23618 5.51823 3.15149 6.92998 2.44593C8.1081 1.85086 9.41011 1.54249 10.73 1.54593H11.23C13.3143 1.66092 15.283 2.54069 16.7591 4.01679C18.2352 5.49288 19.115 7.46158 19.23 9.54593V10.0459Z'
                            stroke='white'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        2
                      </li>
                    </ul>
                  </AllMissionsBottomInfo>
                </AllMissionsBottomCont>
              </AllMissionsBottom>
            </AllMissionsCol>
          </AllMissionsRow>
          <Button label='See Less' disabled={false} />
        </AllMissions>
      </Container>
    </>
  );
};
