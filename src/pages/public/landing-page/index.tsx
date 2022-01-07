import React from 'react';
import MediaWrapper from '../../../components/media-wrapper';
import Button from '../../../components/form/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  margin-bottom: 80px;
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
      &:after {
        content: '/';
        margin: 0 15px;
        opacity: 0.7;
      }
    }
  }
`;
const BannerCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid #931a1a;
`;
const BannerContRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const BannerContLeft = styled.div`
  width: 70%;
  padding-right: 3rem;
`;
const BannerContRight = styled.div`
  width: 30%;
  svg {
    width: 100%;
  }
`;
const BannerTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  opacity: 0.7;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const BannerDesc = styled.div`
  font-size: 16px;
  color: #61b2b2;
  font-weight: 400;
  opacity: 0.7;
  margin-bottom: 2rem;
`;

const CommunityHackers = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 5rem;
`;
const CommunityHackersLeft = styled.div`
  width: 40%;
`;
const CommunityHackersRight = styled.div`
  width: 60%;
  padding-left: 1rem;
`;
const CommunityHackersTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  opacity: 0.7;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const CommunityHackersDesc = styled.div`
  font-size: 16px;
  color: #61b2b2;
  font-weight: 400;
  opacity: 0.7;
  margin-bottom: 2rem;
`;

const Scenarios = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 5rem;
`;
const ScenariosLeft = styled.div`
  width: 60%;
  padding-right: 1rem;
`;
const ScenariosRight = styled.div`
  width: 40%;
`;
const ScenariosTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  opacity: 0.7;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const ScenariosDesc = styled.div`
  font-size: 16px;
  color: #61b2b2;
  font-weight: 400;
  opacity: 0.7;
`;
const ScenariosList = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin: 3rem 0;
  opacity: 0.7;
  ul {
    padding-left: 2rem;

    margin: 2rem 0;
    li {
      margin: 0;
      list-style: disc;
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

const CertifiedSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 5rem;
`;
const CertifiedSectionLeft = styled.div`
  width: 32%;
`;
const CertifiedSectionRight = styled.div`
  width: 68%;
  padding-left: 3rem;
`;
const CertifiedSectionTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  opacity: 0.7;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const CertifiedSectionDesc = styled.div`
  font-size: 16px;
  color: #61b2b2;
  font-weight: 400;
  opacity: 0.7;
  margin-bottom: 2rem;
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
export const LandingPage = (props: {}) => {
  let navigate = useNavigate();
  return (
    <>
      <MediaWrapper />
      <BannerCont>
        <Container>
          <BreadCrumbs>
            <ul>
              <li>HAIKU PRO</li>
            </ul>
          </BreadCrumbs>
          <BannerContRow>
            <BannerContLeft>
              <BannerTitle>
                REAL-WORLD, hands-on Cybersecurity Training
              </BannerTitle>
              <BannerDesc>
                With our cloud-based full network training grounds, accessible
                from a browser, you can take your training to the next level
                over simple, web-accessible single machine targets. Our scoring
                system allows for training on real black hat skills along with
                forensic and defensive skillets. Whether you're a current or
                aspiring cybersecurity professional Haiku Pro will allow you to
                take your skills to the next level.
              </BannerDesc>
              <Button label='See Pricing' disabled={false} onClick={() => {
                navigate('/pricing')
              }}/>
            </BannerContLeft>
            <BannerContRight>
              <svg
                width='467'
                height='405'
                viewBox='0 0 467 405'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M287.15 0.226257C349.094 7.35335 402.575 42.3101 434.731 92.3129C333.974 171.842 265.036 217.32 126.82 231.574C106.624 233.497 86.0887 235.194 63.41 235.42V235.307C43.1007 235.534 22.0017 234.968 0 233.384C21.0991 233.158 41.9725 231.348 62.3945 228.406C61.2662 219.922 60.8149 211.211 60.8149 202.5C60.8149 97.2905 140.247 10.8603 242.244 0V49.2109C167.213 59.7318 109.557 124.328 109.557 202.5C109.557 208.156 109.896 213.7 110.46 219.13C141.036 211.777 170.259 202.161 197.451 191.3V112.11C205.349 98.0824 228.705 84.2807 242.357 84.3939V171.842C258.379 164.263 273.385 156.457 287.263 148.764C287.15 99.2137 287.15 49.7765 287.15 0.226257ZM115.763 246.054C125.692 279.993 146.904 309.067 174.998 328.978V385.542C119.937 358.617 78.8676 307.483 65.4409 245.941L115.763 246.054ZM332.056 291.08C325.061 304.429 301.705 317.552 287.15 319.927V220.261C302.157 216.641 319.194 209.401 332.056 202.839V291.08ZM197.451 394.932V238.927C212.909 237.004 227.802 234.629 242.244 231.687V355.676V405C226.787 403.303 211.668 399.909 197.451 394.932ZM455.04 133.605C462.712 155.099 467 178.291 467 202.5C467 307.031 388.358 393.235 287.15 404.774V355.45C361.392 344.25 418.258 279.993 418.258 202.387C418.258 189.83 416.791 177.612 413.97 165.96L455.04 133.605ZM332.056 63.5782V122.179C349.77 110.866 363.874 100.911 373.69 93.7835C361.618 81.5656 347.514 71.271 332.056 63.5782Z'
                  fill='url(#paint0_linear_3493_29)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_3493_29'
                    x1='-0.0392881'
                    y1='202.464'
                    x2='466.898'
                    y2='202.464'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#C00814' />
                    <stop offset='1' stop-color='#5E070D' />
                  </linearGradient>
                </defs>
              </svg>
            </BannerContRight>
          </BannerContRow>
        </Container>
      </BannerCont>
      <Container>
        <CommunityHackers>
          <CommunityHackersLeft>
            <img src='/hackers.png' alt='hackers' />
          </CommunityHackersLeft>
          <CommunityHackersRight>
            <CommunityHackersTitle>
              GLOBAL COMMUNITY OF HACKERS
            </CommunityHackersTitle>
            <CommunityHackersDesc>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </CommunityHackersDesc>
            <Button label='Compete with Others' disabled={false} />
          </CommunityHackersRight>
        </CommunityHackers>

        <Scenarios>
          <ScenariosLeft>
            <ScenariosTitle>REAL-WORLD SCENARIOS</ScenariosTitle>
            <ScenariosDesc>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </ScenariosDesc>
            <ScenariosList>
              Real world scenarios including:
              <ul>
                <li>Dark web infiltration</li>
                <li>Music festivals</li>
                <li>Digital Decentralized Autonomous Organization (DAO’s)</li>
              </ul>
              & more
            </ScenariosList>
            <Button label='Try For Free' disabled={false} />
          </ScenariosLeft>
          <ScenariosRight>
            <img src='/image1.png' alt='image1' />
          </ScenariosRight>
        </Scenarios>
      </Container>
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
          <Button label='Upgrade Now' disabled={false} />
        </Container>
      </UpgradeSection>
      <Container>
        <CertifiedSection>
          <CertifiedSectionLeft>
            <img src='/ccr.png' alt='ccr' />
          </CertifiedSectionLeft>
          <CertifiedSectionRight>
            <CertifiedSectionTitle>
              CERTIFIED CYBER RANGES
            </CertifiedSectionTitle>
            <CertifiedSectionDesc>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </CertifiedSectionDesc>
            <Button label='Skill Up' disabled={false} />
          </CertifiedSectionRight>
        </CertifiedSection>

        <FeaturedSection>
          <FeaturedSectionTitle>
            <SectionTitleBorderLeft>&nbsp;</SectionTitleBorderLeft>
            <FeaturedSectionTitleTxt>FEATURED</FeaturedSectionTitleTxt>
            <SectionTitleBorderRight>&nbsp;</SectionTitleBorderRight>
          </FeaturedSectionTitle>
          <FeaturedSectionRow>
            <FeaturedSectionLeft>
              <FeaturedSectionLeftCont>
                <FeaturedSectionLeftTitle>Silk Road</FeaturedSectionLeftTitle>
                <FeaturedSectionLeftAuthor>@author</FeaturedSectionLeftAuthor>
                <FeaturedSectionLeftDesc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tellus lobortis amet eu quis magna arcu magna. Non faucibus
                  sed interdum sit id integer molestie odio at. Suspendisse nisl
                  venenatis viverra vulputate habitasse in. Risus aliquam dui
                  consectetur netus.
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
                <img src='/hacker-img.png' alt='hacker' />
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
                  <img src='/image2.png' alt='image2' />
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
                  <img src='/image2.png' alt='image2' />
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
                  <img src='/image2.png' alt='image2' />
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
                  <img src='/image2.png' alt='image2' />
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
                  <img src='/image2.png' alt='image2' />
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
                  <img src='/image2.png' alt='image2' />
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
