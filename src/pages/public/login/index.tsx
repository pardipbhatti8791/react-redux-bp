import * as React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { useNavigate} from 'react-router-dom'

import AuthBackground from '../../../components/AuthBackground'
import AuthContent from '../../../components/AuthContent'
import AuthFooter from '../../../components/AuthFooter'
import AuthHeader from '../../../components/AuthHeader'
import Divider from '../../../components/Divider'
import Button from '../../../components/form/Button'
import FormField from '../../../components/form/FormField'
import TextInput from '../../../components/form/TextInput'
import MediaWrapper from '../../../components/media-wrapper'
import SocialFacebook from '../../../components/SocialMediaLogin/SocialFacebook'
import SocialGoogle from '../../../components/SocialMediaLogin/SocialGoogle'
import SocialLinkedin from '../../../components/SocialMediaLogin/SocialLinkedin'
import HaikuIcon from '../../../components/svg/HaikuIcon'
import EyeClose from '../../../components/svg/EyeClose'
import EyeOpen from '../../../components/svg/EyeOpen'
import { useAuth } from '../../../hoc/AuthProvider'
import * as Yup from 'yup';


const Login: React.FC = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const LoginValidateSchema = Yup.object().shape({
    username: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      auth.signin(values, () => {
        navigate('/welcome')
      })
    },
    validationSchema: LoginValidateSchema
  })

  return (
    <PageContainer>
      <MediaWrapper />
      <LoginContainer>
        <LoginFormContainer>
          <AuthHeader />
          <AuthBackground>
            <AuthContent
              title='Welcome back to Haiku Pro'
              subtitle='Login to your account with'
            />
            <SignUpSocialButtons>
              <StyledSocialContainer>
                <FormField>
                  <Button icon={HaikuIcon} label='World of Haiku' />
                </FormField>

                <FormField>
                  <SocialGoogle />
                </FormField>

                <FormField>
                  <SocialLinkedin />
                </FormField>

                <FormField>
                  <SocialFacebook />
                </FormField>
              </StyledSocialContainer>
              <Divider text='or' />
              <StyledFormContainer>
                <FormField>
                  <TextInput
                    label='email'
                    value={formik.values.username}
                    onChange={(text: string) =>
                      formik.setFieldValue('username', text)
                    }
                  />
                  {formik.errors.username && formik.touched.username && (<span className="error">{formik.errors.username}</span>)}
                </FormField>
                
                <FormField>
                  <TextInput
                    type='password'
                    label='password'
                    value={formik.values.password}
                    showPassword={showPassword}
                    onChange={(text: string) =>
                      formik.setFieldValue('password', text)
                    }
                    rightIcon={showPassword ? EyeClose : EyeOpen}
                    onRightIconClick={() => setShowPassword(!showPassword)}
                  />
                  {formik.errors.password && formik.touched.password && (<span className="error">{formik.errors.password}</span>)}
                </FormField>
                
              </StyledFormContainer>
              <StyledButtonContainer>
                <Button
                  onClick={() => formik.handleSubmit()}
                  label={formik.isSubmitting ? 'Logining in...' : 'Log In'}
                  disabled={false}
                />
              </StyledButtonContainer>
              <AuthFooter />
            </SignUpSocialButtons>
          </AuthBackground>
        </LoginFormContainer>
      </LoginContainer>
    </PageContainer>
  )
}

export default Login as React.FC

const PageContainer = styled.div``

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 100px 0;
`

const LoginFormContainer = styled.div`
  width: 463px;
  height: 1030px;
  z-index: 100;
`
const SignUpSocialButtons = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 70px;
`

const StyledButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
`

const StyledFormContainer = styled.div`
  margin-top: 10px;
  display: block;
  width: 100%;

  & [type='text'],
  & [type='password'] {
    position: relative;
  }
  & [type='password'] {
    font-family: caption;
  }
`

const StyledSocialContainer = styled.div`
  margin-bottom: 5px;
  display: block;
  width: 100%;
`
