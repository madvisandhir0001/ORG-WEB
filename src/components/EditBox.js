import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Button, CircularProgress, IconButton, InputAdornment, TextField } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import firebase from 'firebase'
import { auth, db } from '../utils/firebase';
import Error from './Error';
import Success from './Success';
import { useAuthState } from 'react-firebase-hooks/auth';

const EditBox = ({ userData, userId, id, type, name, title, value, key, immutable }) => {

    const [user, loading, error2] = useAuthState(auth);
    const [disabled, setDisabled] = useState(true);
    const [progress, setProgress] = useState(false);
    const [progress2, setProgress2] = useState(false);
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = () => {
        if (input.length > 0) {
            setProgress(true);
            const handlePhoneVefier = id === "phoneNo" ? false : true
            db.collection('users').doc(userId).set({ [id]: input, phoneNoVerified: handlePhoneVefier }, { merge: true }).then(() => {
                setSuccess(`${title} changed to ${input}`);
                setDisabled(true);
                setProgress(false);
            })
        } else {
            setError('Nothing to change...')
        }
    }

    const handleCancel = () => {
        setInput('');
        setDisabled(true);
    }

    const verifyPhoneNumber = () => {
        const recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        const phoneNumber = `+91${userData.phoneNo}`;
        const email = userData.email;
        auth.signInWithPhoneNumber(phoneNumber, recaptcha).then(e => {
            let code = prompt("Enter OTP ", '');
            if (code == null) return;
            e.confirm(code).then((user) => {
                setProgress2(true)
                const password = prompt("Enter Password ", '');
                auth.signInWithEmailAndPassword(email, password).then(() => {
                    db.collection('users').doc(email).set({ phoneNoVerified: true }, { merge: true })
                        .then(() => setProgress2(false))
                })
            }).catch((err) => console.log(err))
        }).catch((err) => console.log(err))
    }

    const verifyEmail = () => {
        user.sendEmailVerification()
    }
    useEffect(() => {
        user?.emailVerified && db.collection('users').doc(user.email).set({ emailVerified: true }, { merge: true })
            .then(() => setProgress2(false))
    }, [user])
    return (
        <Container>
            <Recaptcha id="recaptcha-container"></Recaptcha>
            <h3>{title}</h3>
            <TextField
                // variant="Member"
                disabled={disabled}
                value={input.length === 0 ? value : input}
                onChange={e => setInput(e.target.value)}
                type={type}
                name={name}
                InputProps={{
                    endAdornment: (
                        !immutable && <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility">
                                {(value && !progress) ?
                                    (disabled ?
                                        <EditIcon onClick={() => setDisabled(false)} className='mui-icon' />
                                        :
                                        <DoneIcon style={{ color: 'green' }} onClick={handleChange} />
                                    )
                                    :
                                    <CircularProgress size={16} />
                                }
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            {!disabled && <CancelIcon onClick={handleCancel} />}
            {!userData.emailVerified && id === 'email' && <Verify onClick={verifyEmail} color={'primary'}>Verify</Verify>}
            {!userData.phoneNoVerified && id === 'phoneNo' && <Verify id='sign-in-button' onClick={verifyPhoneNumber} color={'primary'}>Verify</Verify>}
            {progress2 && <CircularProgress />}

            {/* {error && <Error message={error} />}
            {success && <Success message={success} />} */}
        </Container>
    )
}

export default EditBox

const Recaptcha = styled.div`
    position:absolute;
    top:-150px;
`;
// const Container = styled.div``;
const Container = styled.div`
    display: flex;
    /* align-items: center; */
    position: relative;
    background-color:rgba(232, 232, 235,1);
    border-radius:10px;
    padding:2px 10px;
    margin-bottom:10px;
    >h3{
        font-size:20px;
        font-weight:400;
        margin-right:15px;
        line-height:28px;
        flex:.3;
    }
    >.MuiFormControl-root{
        flex:.7;
    }
    >.Mui-disabled{
        color:black !important;
    }
`;
const Verify = styled(Button)`
    position:absolute !important;
    right:-100px !important;
    cursor:pointer !important;
    >.MuiFormControl-root{
        text-transform: capitalize !important;
    }
`;
const CancelIcon = styled(ClearIcon)`
    color:red;
    font-size:30px !important;
    position:absolute;
    right:-27px;
    top:5px;
    cursor:pointer;
`;
