import React from 'react'
import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import styled from 'styled-components'

const InputField = ({ label, value, id, icon, data, setData }) => {
    return (
        <Input
            type='text'
            label={label}
            variant="outlined"
            // error={(error2?.type === 5 || error2?.type === 7) && true}
            // helperText={(error2?.type === 5 || error2?.type === 7) && error2?.message}
            value={value}
            onChange={e => setData({ ...data, [id]: e.target.value })}
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
`;