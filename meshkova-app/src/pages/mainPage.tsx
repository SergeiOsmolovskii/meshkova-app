import React from 'react';
import './../styles/mainPage.css';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
import { IData } from 'models/IData';
import { SubmitHandler, useForm } from 'react-hook-form';

export const MainPage = () => {

  const { register, handleSubmit, formState: { errors, isValid, touchedFields }, reset } = useForm<IData>(
    {
      mode: 'onBlur',
      defaultValues: {
        name: '',
        info: '',
      }
  });


  const onSubmit: SubmitHandler<IData> = async (data) => {

    console.log(process.env.REACT_APP_URI_API);
    let message = `<b>Тестовая заявка</b>\n`;
    message += `<b>${data.name}</b>\n`;
    message += `<b>${data.info}</b>\n`;
    
    axios.post(process.env.REACT_APP_URI_API!, {
      chat_id: process.env.REACT_APP_CHAT_ID,
      parse_mode: 'html',
      text: message
    });

  }

  return (
    <div className='main-page'>
      <h1>Main page</h1>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          autoComplete='on' autoFocus required id="name" label="name" type="text" margin="dense" fullWidth variant="standard" color="secondary"
          {...register("name", {
            required: 'Name is required',
          })}
        />
        <TextField
          autoComplete='on' autoFocus required id="info" label="info" type="text" margin="dense" fullWidth variant="standard" color="secondary"
          {...register("info", {
            required: 'Info is required',
          })}
        />
        <Button variant='contained' color='primary' type='submit' disabled={!isValid} >Send</Button>
      </Box>

    </div>
  );
}