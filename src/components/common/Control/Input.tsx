import { TextField as MuiInput } from '@material-ui/core'

export default function Input(props: any) {
  const { variant, error, label, type, accept, ...rest } = props

  return (
    <MuiInput
      variant={variant || 'outlined'}
      error={!!error}
      label={label}
      type={type || 'text'}
      helperText={error ? error.message : ''}
      inputProps={{
        accept,
      }}
      {...rest}
    />
  )
}
