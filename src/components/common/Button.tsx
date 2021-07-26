import { Button as MuiButton } from '@material-ui/core'
import React from 'react'
export const Button = (props) => {
  const { color, variant, size, text, children, ...rest } = props
  return (
    <MuiButton
      color={color || 'primary'}
      variant={variant || 'contained'}
      size={size || 'large'}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}
