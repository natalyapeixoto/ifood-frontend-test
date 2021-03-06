import React from 'react'
import { object, func } from 'prop-types'
import { TextField, FormControl, makeStyles } from '@material-ui/core'
import { toISOString } from '../helpers/toISOString'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

const propTypes = {
  filter: object.isRequired,
  inputsResolver: func.isRequired
}

export const TimeInput = ({ filter, inputsResolver }) => {

  const handleInput = (e) => {
      const input = toISOString(e.target.value)
      inputsResolver(filter.id , input)
  }

  const classes = useStyles();
  return (
    <FormControl  key={filter.id} className={classes.formControl}>
      <TextField
        id={filter.id}
        label={filter.name}
        type="datetime-local"
        onChange={(e) => handleInput(e)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        />
    </FormControl>
  )
}

TimeInput.propTypes = propTypes
