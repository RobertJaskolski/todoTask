import React from 'react';
import { Flex, Box, Input, Label, Radio, Button, Close } from 'theme-ui';
import { useForm } from 'react-hook-form';

function UserForm({ onClose, user, setNewUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSaveNewUser = (data) => {
    setNewUser({ ...data });
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(handleSaveNewUser)}>
      <Flex
        sx={{
          justifyContent:
            errors.name || errors.email || errors.gender
              ? 'space-between'
              : 'flex-end',
        }}
      >
        {(errors.name || errors.email || errors.gender) && (
          <Box color='red'>Uzupełnij wszystkie pola!</Box>
        )}
        <Close aria-label='Zamknij modal' type='button' onClick={onClose} />
      </Flex>
      <Label>
        <Box sx={{ width: '100px' }}>Nazwa:</Box>
        <Input
          {...register('name', { required: true })}
          placeholder='Wpisz nazwę...'
          defaultValue={(user.state === 'hasValue' && user.contents.name) || ''}
        />
      </Label>
      <Label>
        <Box sx={{ width: '100px' }}>Email:</Box>
        <Input
          {...register('email', { required: true })}
          type='email'
          placeholder='Wpisz email...'
          defaultValue={
            (user.state === 'hasValue' && user.contents.email) || ''
          }
        />
      </Label>
      <Label sx={{ justifyContent: 'flex-start' }}>
        <Box sx={{ width: '125px' }}>Mężczyzna</Box>
        <Radio
          {...register('gender', { required: true })}
          value='Male'
          defaultChecked={
            user.state === 'hasValue' && user.contents.gender === 'Male'
          }
          name='gender'
        />
      </Label>
      <Label sx={{ justifyContent: 'flex-start' }}>
        <Box sx={{ width: '125px' }}>Kobieta</Box>
        <Radio
          {...register('gender', { required: true })}
          value='Female'
          defaultChecked={
            user.state === 'hasValue' && user.contents.gender === 'Female'
          }
          name='gender'
        />
      </Label>
      <Button type='submit' sx={{ width: '100%' }}>
        Zapisz
      </Button>
    </form>
  );
}

export default UserForm;
