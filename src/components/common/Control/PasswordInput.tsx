import {
  IconButton,
  InputAdornment,
  TextField as MuiInput,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { useState } from 'react'

export default function PasswordInput(props: any) {
  const { variant, error, label, type, ...rest } = props
  const [showPassword, setShowPassword] = useState(false)

  return (
    <MuiInput
      variant={variant || 'outlined'}
      error={!!error}
      label={label}
      type={showPassword ? 'password' : 'text'}
      helperText={error ? error.message : ''}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {showPassword && <Visibility />}
              {!showPassword && <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  )
}
