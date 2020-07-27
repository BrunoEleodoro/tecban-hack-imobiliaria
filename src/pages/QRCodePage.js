import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";
import { baseUrl } from "./constants"
import QRCode from "react-qr-code";

export default function QRCodePage() {
    const [url, setUrl] = useState()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        function getURL() {
            var config = {
                method: 'get',
                url: `${baseUrl}banking/authorize`,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            };
            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    setUrl(response.data.url);

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        getURL();

    }, [])

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                    Para consentir o acesso aos dados, por favor escaneie o QRCode abaixo
      </Typography>
            </Grid>
            <br />
            <Grid item xs={12}>
                {url != null ? <QRCode value={url} /> : ""}
            </Grid>

        </Grid>
    );
}