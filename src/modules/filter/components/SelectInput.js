import React from 'react'
import { InputLabel, FormControl, Select, MenuItem, makeStyles } from '@material-ui/core'
import { handleCountryError } from '../helpers/handleCountryError'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

export const SelectInput = ({filter, inputsResolver }) => {
  const classes = useStyles();

  const handleInput = (filter, values) => {
    const input = handleCountryError(values.value)
    inputsResolver(filter.id, input)
  }
  const { values } = filter

  return (
  <FormControl  key={filter} className={classes.formControl}>
    <InputLabel>{filter.name}</InputLabel>
    <Select
      id={filter.id}
      value=''
    >
      {filter.values.map((values,index) => (
        <MenuItem
          onClick={() => handleInput(filter, values)}
          onChange={() => handleInput(filter, values)}
          onBlur={() => handleInput(filter, values)}
          key={index}
          value={values.value}
          name={values.id}>
            {values.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  )
}
