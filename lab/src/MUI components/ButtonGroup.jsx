import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function DefButtonGroup(props) {
    return (
        <ButtonGroup variant="contained">
            <Button 
                sx={{ backgroundColor: 'orange', color: 'black', '&:hover': { backgroundColor: 'darkgray' } }}
            >
                {props.text1}
            </Button>
            <Button 
                sx={{ backgroundColor: 'orange', color: 'black', '&:hover': { backgroundColor: 'darkgray' } }}
            >
                {props.text2}
            </Button>
        </ButtonGroup>
    );
}