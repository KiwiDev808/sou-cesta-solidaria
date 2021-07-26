import { MenuItem, TextField } from '@material-ui/core'

export default function Select(props: any) {
  const { error, options, inputProps, label, variant, ...rest } = props
  return (
    <TextField
      select
      label={label}
      variant={variant || 'outlined'}
      error={!!error}
      helperText={error?.message}
      inputProps={inputProps}
      {...rest}
    >
      <MenuItem value="" disabled>
        Select
      </MenuItem>
      {options.map((option: any) => {
        return (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        )
      })}
    </TextField>
  )
}
