import { Avatar, Box, Chip, Link, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import React from 'react'
import { User } from '../types'

interface UsersProps {
  users: User[]
}

const Show4thOrLower = ({ users }: UsersProps) => {
  return (
    <Box sx={{ mt: 2, borderTop: 1 }}>
      {users.slice(3).map((user, index) => (
        <Box
          key={String(user.id)}
          sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1, borderBottom: '1px solid #e0e0e0' }}
        >
          <Chip label={index + 4} color="default" sx={{ mr: 2 }} />
          <Link href={`./users/${user.id}`} underline="hover" color="inherit">
            <Avatar src={user.icon} sx={{ width: 60, height: 60, mr: 2 }} />
          </Link>
          <Typography sx={{ flexGrow: 1 }}>{user.name}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
            <FavoriteIcon sx={{ mr: 1, color: '#f50057' }} />
            <Typography>{user.user_total_hearts.toLocaleString()}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Show4thOrLower
