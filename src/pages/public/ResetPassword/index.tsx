import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import TextInput from '../../../components/form/TextInput';
import FormField from '../../../components/form/FormField';
import Button from '../../../components/form/Button';
import AuthBackground from '../../../components/AuthBackground';
import AuthLoader from '../../../components/AuthLoader';
import toast from 'react-hot-toast';
//import history from '@root/utils/history';
//import { ResetPostData } from '@root/redux/slices/resetPassword/types';
//import { userResetPassword } from '@root/redux/slices/resetPassword';
import EyeOpen from '../../../components/svg/EyeOpen';
import EyeClose from '../../../components/svg/EyeClose';
import PageHeader from '../../../components/PageHeader';
import CheckIcon from '../../../components/svg/CheckIcon';

// console.log(buttonBgUrl, "buttonBgUrl");

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 100px 0;
`;

const SignUpFormContainer = styled.div`
  width: 463px;
  z-index: 100;
`;

const SignUpSocialButtons = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 70px;
`;

const StyledButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
`;

const StyledFormContainer = styled.div`
  margin-top: 10px;
  display: block;
  width: 100%;

  & [type="text"],
  & [type="password"] {
    position: relative;
  }
  & [type="password"] {
    font-family: caption;
  }
`;

const StyledFormUl = styled.ul`
padding-left: 8px;
`;

interface ILiProps {
  error?: boolean;
}

const StyledFormLi = styled.li<ILiProps>`
font-size:12px;
font-family: 'Roboto', sans-serif;
display: flex;
flex-wrap: wrap;
margin-bottom: 5px;
color: ${(ILiProps) => ILiProps.error ? 'red' : ''};`;


const StyledFormSVG = styled.div`
margin-right:8px`;


const ResetPasswordPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [password, setPassword] = React.useState<string>('');
  const [reTypePassword, setReTypePassword] = React.useState<string>('');
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showReTypePassword, setShowReTypePassword] = React.useState<boolean>(false);
  const [passwordErrorAry,setPasswordErrorAry] = React.useState<number[]>([]);
  
  const isResetPasswordRequesting = false;
  const isUserCreated = false
  const errorText = ''

  React.useEffect(() => {
    if (errorText) {
      // toast.error(`Signup failed: ${errorText}`);
    }
  }, [errorText]);

  const userData = {
    password,
    reTypePassword,
  };

  const checkIsValid = () => {
    let isValid = true;
    if (
      password === '' ||
      reTypePassword === ''
    ) {
      isValid = false;
    }

    return isValid;
  };


  const isRequesting = isResetPasswordRequesting;

  const handleRePassword = () => {
    const passwordRegex =
    // eslint-disable-next-line no-useless-escape
    /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!&*+=]).*$/gm;

    const charter8Length = /^(?=.*\d).{8,}$/gm;
    const digit1Number = /\d/;
    const specialCaseValidate = /^(?=.*[@#$%^!&*+=]).{1,}$/gm;
    const uppercaseValidate = /(?=.*[A-Z]).{1,}$/gm;
    const lowerCaseValidate = /^(?=.*[a-z]).{1,}$/gm;
    const error : number[] = [];

    if (!checkIsValid()) {
      setPasswordErrorAry(error);
      toast.error('Please fill required fields!');
    } else if (!userData.password.match(passwordRegex)) {
      if(!userData.password.match(charter8Length)){
        error.push(1);
      }
  
      if(!userData.password.match(digit1Number)){
        error.push(2);
      }
  
      if(!userData.password.match(specialCaseValidate)){
        error.push(3);
      }
  
      if(!userData.password.match(uppercaseValidate)){
        error.push(4);
      }
  
      if(!userData.password.match(lowerCaseValidate)){
        error.push(5);
      }
      
      setPasswordErrorAry(error);
      toast.error('Please enter the valid password!');
    }else if(userData.password !== userData.reTypePassword){
      setPasswordErrorAry(error);
      toast.error('Passwords don\'t match');
    }else {
      setPasswordErrorAry(error);
      navigate('/login')
      //dispatch(userResetPassword(userData));
    }
    
  };

  return (
    <SignUpContainer>
      <SignUpFormContainer>
        <PageHeader />
        <AuthBackground>
          <SignUpSocialButtons>
            <StyledFormContainer>
              <FormField>
                <TextInput
                  type="password"
                  label="New Password"
                  value={password}
                  showPassword={showPassword}
                  onChange={(text: string) => setPassword(text)}
                  rightIcon={showPassword ? EyeClose : EyeOpen}
                  onRightIconClick={() => setShowPassword(!showPassword)}
                />
              </FormField>
              
              <FormField>
                <TextInput
                  type="password"
                  label="Re-type Password"
                  value={reTypePassword}
                  showPassword={showReTypePassword}
                  onChange={(text: string) => setReTypePassword(text)}
                  rightIcon={showReTypePassword ? EyeClose : EyeOpen}
                  onRightIconClick={() => setShowReTypePassword(!showReTypePassword)}
                />
              </FormField>
              
              <StyledFormUl>
                <StyledFormLi error={passwordErrorAry.indexOf(1) !== -1 ? true : false}>
                  <StyledFormSVG> <CheckIcon /> </StyledFormSVG> Must be at least 8 characters long
                </StyledFormLi>
                <StyledFormLi error={passwordErrorAry.indexOf(2) !== -1 ? true : false}>
                  <StyledFormSVG><CheckIcon /> </StyledFormSVG> Include at least one number
                </StyledFormLi>
                <StyledFormLi error={passwordErrorAry.indexOf(3) !== -1 ? true : false}>
                  <StyledFormSVG> <CheckIcon /> </StyledFormSVG> {'Include at least 1 special character (!@#$%^&*)'}
                </StyledFormLi>
                <StyledFormLi error={passwordErrorAry.indexOf(4) !== -1 ? true : false}>
                  <StyledFormSVG> <CheckIcon /> </StyledFormSVG> Include at least 1 uppercase letter
                </StyledFormLi>
                <StyledFormLi error={passwordErrorAry.indexOf(5) !== -1 ? true : false}>
                  <StyledFormSVG> <CheckIcon /> </StyledFormSVG> Include at least 1 lowercase letter
                </StyledFormLi>
              </StyledFormUl>
              
             
            </StyledFormContainer>
            <StyledButtonContainer>
              <FormField>
                <Button
                  onClick={handleRePassword}
                  label="Confirm"
                  disabled={isRequesting}
                />
              </FormField>
            </StyledButtonContainer>
          </SignUpSocialButtons>
          {isRequesting ? <AuthLoader /> : null}
        </AuthBackground>
      </SignUpFormContainer>
    </SignUpContainer>
  );
};

export default ResetPasswordPage as React.FC;
