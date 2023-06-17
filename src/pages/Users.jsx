import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

import { UsersList, Filter, Modal } from 'components';
import { useGetUsersQuery } from 'redux/userApi';

export const Users = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        Ooopps...Something went wrong
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      <Stack
        direction={'row'}
        sx={{
          justifyContent: 'space-between',
          mb: 5,
        }}
      >
        <Modal />
        <Filter />
      </Stack>

      <UsersList users={users} />
    </>
  );
};
