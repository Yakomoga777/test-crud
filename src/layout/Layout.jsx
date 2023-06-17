import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { Header } from 'layout/Header';
import { Footer } from 'layout/Footer';

export const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Box component={'section'} py={8}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};
