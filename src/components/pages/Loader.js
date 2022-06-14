import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">

                <CircularProgress color="success" size='10rem'/>

            </Stack>
        </div>

    );
}