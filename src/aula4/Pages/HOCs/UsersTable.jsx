import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = {
    emptyMessage: {
        margin: "10px",
        textAlign: "center"
    }
};

const UsersTable = props => {
    const { data } = props;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="data Table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>E-mail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.length > 0 && data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">{row.id}</TableCell>
                            <TableCell>{row.nome}</TableCell>
                            <TableCell>{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {(!data || data.length === 0) && (
                <div style={styles.emptyMessage}>Nenhum usuário encontrado!</div>
            )}
        </TableContainer>
    );
};

export default UsersTable;
