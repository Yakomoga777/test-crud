import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';

export const UsersList = ({ users = [] }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {users.map(({ id, name }) => (
          <Grid item xs={2} sm={4} md={4} key={id}>
            <Item>
              <Typography variant="h5" component="h3">
                {name}
              </Typography>

              <Button component={Link} exact="true" to={`${id}`} size="small">
                Read More
              </Button>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
