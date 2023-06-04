import React from 'react'
import {useMediaQuery} from '@mui/material'
import {useTheme} from "@mui/material";

const Postmortem = () => {
    let theme=useTheme()
    let isMatch = useMediaQuery(theme.breakpoints.down('md'))
   return(
    <div>
      {
        isMatch?<h1>Allah Akbar</h1>:<h1>SubhanAllah</h1>
      }
    </div>
  )
}

export default Postmortem
