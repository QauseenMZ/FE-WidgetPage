import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IconButton, TableContainer, Table, TableCell, Paper, TableBody, TableRow, TableHead } from '@material-ui/core';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { LinguisticModel } from '../../modals/linguistic.model';
import PageHeader from '../PageHeader/PageHeader';

const WidgetList = () => {
  const createData = (name: string, language: string) => {
    return { name, language};
  }
  
  const rows: LinguisticModel[] = [
    createData('John', "French"),
    createData('Sandy', "English"),
    createData('Elen', "Spanish"),
  ];

  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }),
  )(TableCell);

  return (
    <>
      <PageHeader title="Linguistic Details" callback={() => alert("clicked")}/>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Language</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.language}</TableCell>
              <TableCell align="right">
                <IconButton color="secondary" aria-label="delete-data" component="span">
                  <DeleteForever />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default WidgetList;
