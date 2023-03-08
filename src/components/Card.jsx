import { Typography, Box,Stack } from "@mui/material"


const Card = ({student}) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '10px 30px',
      borderRadius: '5px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    }}>
      <Stack direction='row' sx={{
        width: '200px',
      }}>
        <Typography variant='body' fontWeight={600}>Apellido:</Typography>
        <Typography variant='body' marginLeft='10px'>{student.surname}</Typography>
      </Stack>
      <Stack direction='row' sx={{
        width: '200px',
      }}>
        <Typography variant='body' fontWeight={600}>Correo:</Typography>
        <Typography variant='body' marginLeft='10px' >{student.email}</Typography>
      </Stack>
    </Box> 
  );
}
 
export default Card;