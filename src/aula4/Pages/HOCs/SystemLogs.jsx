import React from "react";
import { Grid } from "@material-ui/core";

const SystemLogs = props => {
    const { data } = props;

    const renderLogEntry = (entry, index) => {
        const { data, hora, mensagem } = entry;
        return (
            <Grid key={index} container>
                <Grid item sm={1}>{data}</Grid>
                <Grid item sm={1}>{hora}</Grid>
                <Grid item sm={10}>{mensagem}</Grid>
            </Grid>
        );
    }

    return (
        <div>
            <h2>Logs do Sistema</h2>
            {data && data.map(renderLogEntry)}
        </div>
    );
};

export default SystemLogs;
