import { Avatar, Button, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react'
import styled from 'styled-components';
import { storage, users } from '../utils/firebase';
import Error from './Error';


const AddCompanyImage = ({ userData }) => {
    const [file, setFile] = useState(null);
    const [fileData, setFileData] = useState(null);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(false);

    const handleFile = e => {
        setError(null);
        const file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
            setFile(file);
            var reader = new FileReader();
            reader.onload = (e) => {
                setFileData(e.target.result);
            }
            reader.readAsDataURL(file);
        } else {
            setError("Only Image Allowed")
        }
    }

    const uploadFile = () => {
        const uploadTask = storage.ref(`users/${userData.email}/company/${'image'}`).put(file);
        uploadTask.on("state_changed", snapshot => {
            setProgress(true);
        }, (error) => {
            alert(error.message);
        }, () => {
            storage
                .ref(`users/${userData.email}/company/${'image'}`)
                .getDownloadURL()
                .then(url => {
                    users.doc(userData.email).set({
                        profilePic: url,
                    }, { merge: true }).then(() => {
                        setProgress(false);
                        setFile('')
                    })
                }).catch(err => console.log(err.message));
        })
    }

    const handleCancel = () => {
        setFile(null)
        setFileData(null)
    }

    return (
        <Container>
            <UserAvatar src={fileData ? fileData : userData.companyData?.image} />
            <div className="input-group mb-3">
                <div className="custom-file">
                    <input style={{ width: '15px !important', overflow: "hidden" }} onChange={handleFile} type="file" className="custom-file-input" id="inputGroupFile02" />
                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">{!file ? (userData.profilePic ? 'Change Profile Picture' : 'Choose Profile Picture') : file.name}</label>
                </div>
                {file &&
                    <div onClick={uploadFile} className="input-group-append">
                        <span className="input-group-text" id="inputGroupFileAddon02">{progress && <CircularProgress size={16} color="inherit" />}upload</span>
                    </div>
                }
            </div>
            {error && <Error message={error} />}
            {/* {file && <Button startIcon={progress && <CircularProgress size={16} color="inherit" />} onClick={uploadFile} color="primary" variant="contained">Upload</Button>} */}
        </Container>
    )
}

export default AddCompanyImage

const Container = styled.div`
    display: flex;  
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
    >*{
        margin-bottom: 10px;
    }
`;

const UserAvatar = styled(Avatar)`
    width:150px !important;
    height:150px !important;
`;