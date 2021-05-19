import React from 'react'
import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import styled from 'styled-components'

const InputField = ({ label, value, id, icon, companyData, setCompanyData, error, helperText }) => {
    return (
        <Input
            type='text'
            label={label}
            variant="outlined"
            error={error}
            helperText={helperText}
            value={value}
            onChange={e => setCompanyData({ ...companyData, [id]: e.target.value })}
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