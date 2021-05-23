import React from 'react'
import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import styled from 'styled-components'

const InputField = ({ label, value, id, icon, Data, setData, error, helperText, optional, color }) => {

    return (
        <Input
            type='text'
            label={label}
            variant="outlined"
            error={error}
            helperText={helperText}
            value={value}
            required={!optional}
            onChange={e => setData({ ...Data, [id]: e.target.value })}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility">
                            {icon}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

export default InputField

const Input = styled(TextField)`
    margin-bottom: 20px !important;
    }
`;