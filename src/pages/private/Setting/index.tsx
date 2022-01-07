import SettingLeftPanel from '../../../components/SettingLeftPanel';
import './index.scss';
import * as React from 'react';
import TextInput from '../../../components/form/TextInput';
import FormField from '../../../components/form/FormField';
import toast from 'react-hot-toast';
//import { AccountPostData } from '@root/redux/slices/account/types';
//import { useAppSelector } from '@root/hooks/redux';
import { useDispatch } from 'react-redux';
//import { userAccount } from '@root/redux/slices/account';
import Button from '../../../components/form/Button';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import { useAppSelector } from '../../../hooks/hooks';
import countryList from 'react-select-country-list'


const Setting: React.FC = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.authReducer.user)
  const countryOptions = React.useMemo(() => countryList().getData(), [])
  

  /*const SignupValidateSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    username: Yup.string().required('Required'),
  });*/

  const formik = useFormik({
    initialValues: {
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        username: user?.email || '',
        file: user?.file || '',
        country: user?.country || ''
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2))
      //navigate('/confirm')
      console.log(values)

    },
    validate:values=>{
      let errors:any = {};
      
      const emailRegex =
      // eslint-disable-next-line no-useless-escape
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!values.firstName){
        errors.firstName= 'Required'
      }
      if(!values.lastName){
        errors.lastName= 'Required'
      }
      if(!values.email){
        errors.email= 'Required'
      }else if (!values.email.match(emailRegex)) {
        errors.email = 'Please enter the valid email!'
      }
      if(!values.username){
        errors.username= 'Required'
      }
      if(!values.country){
        errors.country= 'Required'
      }
      
      return errors;
    
     }
   // validationSchema: SignupValidateSchema
  })

  
  const [userPreviewImage, setUserPreviewImage] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const isAccountRequesting = false

  const isRequesting = isAccountRequesting;

  
  

  /*const handleSubmit = () => {
    const emailRegex =
      // eslint-disable-next-line no-useless-escape
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!checkIsValid()) {
      toast.error('Please fill required fields!');
    } else if (!userData.email.match(emailRegex)) {
      toast.error('Please enter the valid email!');
    } else {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('username', username);
      //formData.append('country', country);
      formData.append('userImage', userImage);

      console.log('userData--->', formData);
      //dispatch(userAccount(formData));
    }
  };*/

  const selectFile = (event:any) => {
    //setUserImage(event.target.files[0]);
    formik.setFieldValue('file', event.target.files[0])
    setUserPreviewImage(URL.createObjectURL(event.target.files[0]));
  };

  const onResetPwd = () => {
    //history.replace('/reset');
    navigate('reset')
  };

  return (
    <div className="mainContainer">
      <div className="leftSidebar">
        <SettingLeftPanel />
      </div>
      <div className="contArea">
        <div className="title">Account</div>
        <div className="formData">
          <div className="profileImage">
            <input ref={inputRef} type="file" accept="image/*" onChange={selectFile} hidden />
            <span className="editBtn" onClick={()=>inputRef.current?.click()}>
              <svg
                width="49"
                height="50"
                viewBox="0 0 49 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.2707 10.8837L38.1981 2.59534C37.1446 1.57924 35.764 0.996216 34.319 0.957174C32.874 0.918131 31.4655 1.42579 30.3613 2.38359L3.84576 29.6082C2.89346 30.5943 2.30051 31.8867 2.16644 33.2684L0.89959 45.8825C0.859902 46.3256 0.915895 46.7722 1.06358 47.1905C1.21126 47.6088 1.44699 47.9885 1.75398 48.3025C2.02927 48.5829 2.35575 48.8047 2.71471 48.9552C3.07366 49.1057 3.45803 49.182 3.84576 49.1797H4.11092L16.3965 48.0303C17.7423 47.8926 19.001 47.2838 19.9613 46.306L46.4769 19.0814C47.506 17.9651 48.0622 16.4754 48.0236 14.9388C47.9849 13.4022 47.3546 11.944 46.2707 10.8837ZM15.8661 41.9803L7.02763 42.8273L7.8231 33.7524L24.469 16.8732L32.4236 25.0406L15.8661 41.9803ZM36.2537 20.9871L28.3579 12.8802L34.103 6.83028L42.146 15.0884L36.2537 20.9871Z"
                  fill="black"
                />
              </svg>
            </span>
            {userPreviewImage ? (
              <div>
                <img className="preview" src={userPreviewImage} alt="" width="282" height="292" />
              </div>
            ) : <img src="/assets/images/pic-placeholder.png" width="282" height="292" alt="pic" />}
            
          </div>
          <div className="formArea">
            <div className="formRow">
              <div className="formCol">
                <FormField>
                  <TextInput
                    className="firstInput"
                    label="first name"
                    value={formik.values.firstName}
                    onChange={(text: string) => formik.setFieldValue('firstName', text)}
                  />
                  {formik.errors.firstName && formik.touched.firstName && (<span className="error">{formik.errors.firstName}</span>)}
                </FormField>
                
              </div>
              <div className="formCol">
                <FormField>
                  <TextInput
                    className="lastInput"
                    label="last name"
                    value={formik.values.lastName}
                    onChange={(text: string) => formik.setFieldValue('lastName', text)}
                  />
                  {formik.errors.lastName && formik.touched.lastName && (<span className="error">{formik.errors.lastName}</span>)}
                </FormField>
                
              </div>
            </div>
            <div className="formRow">
              <div className="formCol">
                <FormField>
                  <TextInput
                    label="username"
                    value={formik.values.username}
                    onChange={(text: string) => formik.setFieldValue('username', text)}
                  />
                  {formik.errors.username && formik.touched.username && (<span className="error">{formik.errors.username}</span>)}
                </FormField>
                
                
              </div>
              <div className="formCol">
                <FormField>
                  <TextInput
                    label="E-mail"
                    value={formik.values.email}
                    onChange={(text: string) => formik.setFieldValue('email', text)}
                  />
                  {formik.errors.email && formik.touched.email && (<span className="error">{formik.errors.email}</span>)}
                </FormField>
                
              </div>
            </div>
            <div className="formRow">
              <div className="formCol">
                <button className="btnPrime" type="button" onClick={onResetPwd}>
                  Reset Password
                </button>
              </div>
             
              <div className='formCol'>
                <FormField>
                  <div className='customSelect'>
                    <label htmlFor='country'>Country:</label>
                    <select
                      value={formik.values.country}
                      onChange={(e: any) =>
                        formik.setFieldValue('country', e.target.value)
                      }
                    >
                      {countryOptions &&
                        countryOptions.length > 0 &&
                        countryOptions.map((val, key) => {
                          return (
                            <option value={val?.value}> {val?.label}</option>
                          );
                        })}
                    </select>
                    {/*<TextInput
                    label="Country"
                    value={country}
                    onChange={(text: string) => setCountry(text)}
                  /> */}
                  </div>
                  {formik.errors.country && formik.touched.country && (
                    <span className='error'>{formik.errors.country}</span>
                  )}
                </FormField>
              </div>
            </div>
            {/* <button className="btnPrime btnSave" type="button" onClick={handleSubmit}>
              Save
  </button> */}
            <Button
              className="btnPrime btnSave"
              onClick={() => formik.handleSubmit()}
              label="Save"
              disabled={isRequesting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
