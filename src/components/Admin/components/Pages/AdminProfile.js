import { Avatar, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import styled from "styled-components";
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

const Boss = styled.div`
    background-color: rgba(0,0,0, 0.8);
    border-radius: 8px;
    position: absolute;
    left: 65%;
    top: 50%;
    transform: translate(-65%, -50%);
    width: 60%;
    height: 80%;
    transition: all 0.3s ease;
    .avatar{
        margin-top: 20px;
        width: 150px;
        height: 150px;
        margin-left: auto;
        margin-right: auto;
        vertical-align: middle;
    }
    .dota{
        width: 350px;
        background-color: rgb(200,200,200);
        height: 40px;
        border-radius: 5px;
        border: 1px solid #ddd;
        margin:10px 0;
        padding: 20px;
        box-sizing: border-box;
        font-size: 18px;
        font-weight: 500;
        font-family: 'Heebo', sans-serif;
    }
    .parent1{
        margin-top: 20px;
        position: relative;
        width: 100%;
    }
    .div1{
        position: relative;
        margin-left:30px;
        margin-right:30px;
        float:left;
    }
    .div2{
        position: relative;
        margin-right:30px;
        float:right;
    }
    label{
        color: #fff;
        font-size: 20px;
        font-family: 'Fraunces', serif;
    }
    .edit{
        position: relative;
        float: right;
        width: 100%;
        margin-top: 370px;
        padding-right: 30px;
        background-color: yellow;
    }
    @media (max-width: 1317px){
    .div2{
        width: 90%;
        float: left;
        margin-left:30px;
        }
        .div1{
            width: 90%;
        }
        .dota{
            width: 100%;
        }
    }
    @media (max-width: 990px){
        .dota{
            width: 90%;
        }
        .parent1{
            margin-left: 30px;
        }
        .avatar{
            width: 120px;
            height: 120px;
        }
    }
    @media (max-width: 830px){
        .parent1{
            margin-left:15px;
        }
        .avatar{
            width: 100px;
            height: 100px;
        }
    }
    @media (max-width: 625px){
        .parent1{
            margin-top: 10px;
            margin-left: 8px;
        }
        .avatar{
            width: 100px;
            height: 100px;
        }
    }
`;

const useStyles = makeStyles((theme) => ({
    edit:{
        
        float: 'right',
        width: '60px',
        height: '40px',
    },
    button: {
        margin: '10px 0',
        width: '350px',
        height: '40px',
    },
    ['@media (max-width:1317px)']: {
        button: {
        width: '100%',
        height: '40px',
        }
    },
    ['@media (max-width:990px)']: {
        button: {
        width: '90%',
        height: '40px',
        }
    }
  }));

function AdminProfile() {

    const classes = useStyles();

    return (
        <Boss>
            <div>
            <Avatar 
              className="avatar"
                src="" 
                alt="" 
            />
            </div>
            <div className="parent1">
                <div className="div1">
                    <label>Username</label>
                    <div><input className="dota" type="text" /></div>
                </div>
                <div className="div2">
                    <label>Email</label>
                    <div><input className="dota" type="email" /></div>
                </div>
                
            </div>
            <div className="parent1">
                <div className="div1">
                    <label>Phone</label>
                    <div><input className="dota" type="text" /></div>
                </div>
                <div className="div2">
                    <label>Reset Password</label>
                    <div>
                        <Button
                            className={classes.button} 
                            variant="outlined"
                            color="primary"
                            startIcon={<CachedRoundedIcon />}
                        >
                        Click Here
                        </Button>
                    </div>
                </div>
            </div>

            <div className="edit">
                <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.edit}
                startIcon={<CreateRoundedIcon />}
                >
                Edit
                </Button>
            </div>
            
            
        </Boss>
    )
}

export default AdminProfile
