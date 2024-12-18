import { Avatar, Box, Chip, Link, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import React from 'react'
import { Users } from '../types'

const ShowTop3 = ({ users }: Users) => {
  const flag: number = 1
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, mb: 4, paddingTop: 5, borderTop: 1 }}>
      <Box sx={{ textAlign: 'center', position: 'relative', paddingTop: 2 }}>
        <Chip
          label="2"
          sx={{
            color: 'white',
            backgroundColor: flag === 0 ? '#FFD700' : '#silver',
            position: 'absolute',
            top: 3,
            left: '10%',
            transform: 'translateX(-70%)',
            width: 40,
            height: 40,
            zIndex: 1
          }}
        />
        <Link href={`./users/${users[1].id}`} underline="hover" color="inherit">
          <Avatar src={users[1].icon} sx={{ width: 90, height: 90, mb: 1 }} />
          <Typography>{users[1].name}</Typography>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
          <FavoriteIcon sx={{ mr: 1, color: '#f50057' }} />
          <Typography>{users[1].user_total_hearts.toLocaleString()}</Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', position: 'relative' }}>
        <Chip
          label="1"
          sx={{
            color: 'white',
            backgroundColor: '#FFD700',
            position: 'absolute',
            top: -10,
            left: '10%',
            transform: 'translateX(-50%)',
            width: 40,
            height: 40,
            zIndex: 1
          }}
        />
        <Link href={`./users/${users[0].id}`} underline="hover" color="inherit">
          <Avatar src={users[0].icon} sx={{ width: 100, height: 100, mb: 1 }} />
          <Typography>{users[0].name}</Typography>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
          <FavoriteIcon sx={{ mr: 1, color: '#f50057' }} />
          <Typography>{users[0].user_total_hearts.toLocaleString()}</Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', position: 'relative', paddingTop: 2 }}>
        <Chip
          label="3"
          sx={{
            color: 'white',
            backgroundColor: '#b26e59',
            position: 'absolute',
            top: 3,
            left: '10%',
            transform: 'translateX(-50%)',
            width: 40,
            height: 40,
            zIndex: 1
          }}
        />
        <Link href={`./users/${users[2].id}`} underline="hover" color="inherit">
          <Avatar src={users[2].icon} sx={{ width: 90, height: 90, mb: 1 }} />
          <Typography>{users[2].name}</Typography>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
          <FavoriteIcon sx={{ mr: 1, color: '#f50057' }} />
          <Typography>{users[2].user_total_hearts.toLocaleString()}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ShowTop3
