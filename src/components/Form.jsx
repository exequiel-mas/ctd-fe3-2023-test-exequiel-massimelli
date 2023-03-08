import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import Card from './Card'
import { Stack } from '@mui/system'

const Form = () => {

  const [students, setStudents] = useState([])
  const [formData, setFormData] = useState({ surname: '', email: ''});
  const [error, setError] = useState('');


  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { surname, email } = formData;
    const surnameIsValid = validateMinLength(surname, 3) && !validateBlankSpaces(surname);
    const emailIsValid = validateMinLength(email, 6)
    if (!surnameIsValid || !emailIsValid) {
      setError('Por favor chequea que la información sea correcta')
      return
    }
    if (surnameIsValid && emailIsValid) {
      setError('');
    }
    setStudents((prevStudents) => [...prevStudents, formData]);
  };

  const validateMinLength = (value, minLength) => {
     return value.length >= minLength
  };

  const validateBlankSpaces = (value) => {
    return value.startsWith(' ')
  }


  return (
    <Stack alignItems='center'>
      <Typography variant="h2" gutterBottom>Inscripcion:</Typography>
      <form  onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{width: '600px'}}>
          <TextField
            name="surname"
            label="Apellido"
            variant="outlined"
            value={formData?.surname}
            onChange={handleFormChange}
            placeholder="Ingrese su apellido"
          />    
          <TextField
            name="email"
            label="Correo"
            variant="outlined"
            value={formData?.email}
            onChange={handleFormChange}
            placeholder="Ingrese su correo"
          />   
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Enviar
        </Button> 
        <Typography variant="caption" color='error' gutterBottom>{error}</Typography>
        </Stack>

      </form>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography variant="h2" gutterBottom marginTop={4}>Estudiantes</Typography>
      {students && <Stack spacing={2} sx={{
        width: '600px',
      }}>
      {students.map((student,index) => (
          <Card key={index} student={student} />
        ))} 
      </Stack>}
      </Container>
    </Stack>
  );
};

export default Form;
