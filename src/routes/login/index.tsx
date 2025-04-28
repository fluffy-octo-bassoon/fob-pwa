import { useLocation } from "preact-iso";
import { UserSignal } from "../../hooks/auth";
import { Button, Stack, TextField } from "@mui/material";

export default function LoginPage() {
    const { route } = useLocation();

    if (UserSignal.value != null) route("/", true);

    return(
        <Stack spacing={2} justifyContent={"center"}>
            <TextField required label="E-Mail" variant="outlined" />
            <TextField required label="Password" type="password" variant="outlined"/>
            <Button variant="contained">Log In</Button>
            <Button variant="text">Register</Button>

        </Stack>
    )
}