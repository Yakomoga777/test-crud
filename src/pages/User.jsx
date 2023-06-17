import { Link, useParams, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import {
  useDeleteUserMutation,
  useGetUserQuery,
  useGetUsersQuery,
} from 'redux/userApi';

export const User = () => {
  const { userId } = useParams();
  const { data, isLoading, error } = useGetUserQuery(userId);
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();

  const handleUserDelete = async () => {
    try {
      await deleteUser(data?.id);
      navigate('/users');
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserEdit = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <Button component={Link} to={'/users'} variant="contained">
          GO BACK
        </Button>

        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button onClick={handleUserEdit}>Edit</Button>
          <Button onClick={handleUserDelete}>Delete</Button>
        </ButtonGroup>
      </Box>

      <Box
        sx={{
          marginBottom: '2rem',
        }}
      >
        <Typography>
          <strong>ID:</strong> {data?.id}
        </Typography>

        <Typography
          variant="h3"
          component="h1"
          style={{
            fontWeight: 700,
          }}
        >
          {data?.name}
        </Typography>

        <Typography variant="overline" display="block" gutterBottom>
          @{data?.nickname}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid xs={6}>
          <Paper
            sx={{
              padding: '1rem',
            }}
          >
            <Stack spacing={2}>
              <strong>City:</strong> {data?.city}
              <strong>Country:</strong> {data?.country}
            </Stack>
          </Paper>
        </Grid>

        <Grid xs={6}>
          <Paper
            sx={{
              padding: '1rem',
            }}
          >
            <Stack spacing={2}>
              <strong>Company:</strong> {data?.company}
              <strong> BS:</strong> {data?.companyBs}
            </Stack>
          </Paper>
        </Grid>

        <Grid xs={12}>
          <Paper
            sx={{
              padding: '1rem',
            }}
          >
            <Stack spacing={2}>
              <strong>Email:</strong> {data?.email} <strong>Phone:</strong>{' '}
              {data?.phone},<strong> Website:</strong> {data?.website}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
