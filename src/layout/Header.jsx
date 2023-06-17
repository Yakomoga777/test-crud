import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import { ROUTES } from 'utils/routes';

const pages = [
  {
    name: 'Home',
    path: ROUTES.HOME,
  },
  {
    name: 'Users',
    path: ROUTES.USERS,
  },
];

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 1,
          }}
        >
          <Stack direction="row" spacing={2}>
            {pages.map(({ name, path }) => (
              <Button
                component={NavLink}
                to={path}
                exact="true"
                key={name.toLowerCase()}
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '16px',

                  '&.active': {
                    color: 'yellow',
                  },
                }}
              >
                {name}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
