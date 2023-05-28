import React from 'react'
import { Box, makeStyles } from '@mui/material'
import Head from 'next/head';
import TopBar from './TopBar';

type Props = {
  children: React.ReactNode;
  title: string;
}


export const Layout = ({ children, title }: Props) => {
  return (
    <Box sx={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
    }}>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viwport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Box width="100vw"><TopBar /></Box>
      <Box>Navbar</Box>
      <Box sx={{
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: "64px",
      }}>
        <Box sx={{
          display: 'flex',
          flex: '1 1 auto',
          overflow: 'hidden',
        }}>
          <Box sx={{
            flex: '1 1 auto',
            height: '100%',
            overflow: 'hidden',
          }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  )
}
