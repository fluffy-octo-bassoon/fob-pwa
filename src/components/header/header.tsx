import { AppBar, InputAdornment, TextField } from '@mui/material';

const Header = () => {
    return (
        <>
            <AppBar sx={{order: 0, color: 'secondary.main', padding: '.5em'}}>
                <TextField label="Wyszukaj" variant="outlined" slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position='start'>
                                <span className="material-symbols-outlined">search</span> 
                            </InputAdornment>
                        )
                    }
                }}
                sx={{ ".MuiOutlinedInput-root": { 
                    "&.Mui-focused fieldset": {
                        border: "1px solid",
                        borderColor: 'primary.main'
                    }
                } }}/>
            </AppBar>
        </>
    )
}

export default Header;