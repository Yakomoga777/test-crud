import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { experimentalStyled as styled } from '@mui/material/styles';

import { Filter, Modal } from 'components';

export const Users = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
