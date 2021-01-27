import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Page from 'src/components/Page';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const FormUsersAdd = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    tai_khoan: '',
    mat_khau: '',
    email: ''
  });

  const [policy, setPolicy] = useState(false);

  const [typeError, setTypeError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    setIsSubmitting(true);
    event.preventDefault();
    console.log(userInfo);
    axios.post('http://localhost:4000/user/sign-up', userInfo)
      .then((data) => {
        console.log(data);
        setTypeError('success');
        setMessageError('tạo user thành công!');
        setTimeout(() => {
          navigate('/app/users', { replace: true });
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
        setTypeError('error');
        setMessageError('tạo user thất bại!');
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleChangePolicy = () => {
    setPolicy(!policy);
  };

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          {typeError}
          {messageError}
          {
            (typeError && messageError) ? <Alert severity={typeError}>{messageError}</Alert> : <></>
          }
          <Formik>
            {({
              errors,
              handleBlur,
              touched
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Tạo User mới
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="Full name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={userInfo.name}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.tai_khoan && errors.tai_khoan)}
                  fullWidth
                  helperText={touched.tai_khoan && errors.tai_khoan}
                  label="Tài khoản"
                  margin="normal"
                  name="tai_khoan"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={userInfo.tai_khoan}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={userInfo.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.mat_khau && errors.mat_khau)}
                  fullWidth
                  helperText={touched.mat_khau && errors.mat_khau}
                  label="Mật Khẩu"
                  margin="normal"
                  name="mat_khau"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={userInfo.mat_khau}
                  variant="outlined"
                />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  <Checkbox
                    checked={policy}
                    name="policy"
                    onChange={handleChangePolicy}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default FormUsersAdd;
