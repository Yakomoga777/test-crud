import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';

export const Layout = () => {
  return (
    <Stack direction={'column'} minHeight={'100vh'}>
      <Header />

      <Box component="main" flexGrow={1}>
        <Box component={'section'} py={8}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Box>

      <Footer />
    </Stack>
  );
};
