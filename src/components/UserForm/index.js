import React from 'react';
import { Flex, Box, Input, Label, Radio, Button, Close } from 'theme-ui';
import { useForm } from 'react-hook-form';

// Recoil
import { useRecoilState } from 'recoil';
import { newUserState } from '../../recoil/user';

function UserForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [newUser, setNewUser] = useRecoilState(newUserState);
  const handleSaveNewUser = (data) => {
    const { name, email, gender } = data;
    setNewUser({
      name,
      email,
      gender,
    });
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
          defaultValue={newUser.name}
        />
      </Label>
      <Label>
        <Box sx={{ width: '100px' }}>Email:</Box>
        <Input
          {...register('email', { required: true })}
          type='email'
          placeholder='Wpisz email...'
          defaultValue={newUser.email}
        />
      </Label>
      <Label sx={{ justifyContent: 'flex-start' }}>
        <Box sx={{ width: '125px' }}>Mężczyzna</Box>
        <Radio
          {...register('gender', { required: true })}
          value='Male'
          defaultChecked={newUser.gender === 'Male'}
          name='gender'
        />
      </Label>
      <Label sx={{ justifyContent: 'flex-start' }}>
        <Box sx={{ width: '125px' }}>Kobieta</Box>
        <Radio
          {...register('gender', { required: true })}
          value='Female'
          defaultChecked={newUser.gender === 'Female'}
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
