import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import Results from './Results';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const UserListView = () => {
  const classes = useStyles();

  const [listUsers, setListUsers] = useState([]);

  const [valueSearch, setValueSearch] = useState('');

  useEffect(() => {
    setListUsers(data);
    axios.get('http://localhost:4000/users/')
      .then((dataReponse) => {
        console.log(dataReponse.data.data);
        setListUsers(dataReponse.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleProcessSearchValue = (e) => {
    setValueSearch(e.target.value);
  };

  return (
    <Page
      className={classes.root}
      title="Users"
    >
      <Container maxWidth={false}>
        <Toolbar processInput={handleProcessSearchValue} />
        {valueSearch}
        <Box mt={3}>
          <div>Test Page</div>
          <Results
            customers={
              listUsers.filter((temp) => {
                return temp.tai_khoan.indexOf(valueSearch) >= 0;
              })
            }
          />
        </Box>
      </Container>
    </Page>
  );
};

export default UserListView;
