import React, {useEffect} from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IconButton, TableContainer, Table, TableCell, Paper, TableBody, TableRow, TableHead, Typography } from '@material-ui/core';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { LinguisticModel } from '../../modals/linguistic.model';
import PageHeader from '../PageHeader/PageHeader';
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
import history from '../../utils/history';
import { pathURLs } from '../../utils/routes.utils';

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


const WidgetList = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [deleteId, setDeleteId] = React.useState<number>(0);
  const [data, setData]= React.useState<LinguisticModel[]>([]);

  useEffect(() => {
    const localData: LinguisticModel[] = localStorage.getItem('languageData') ? JSON.parse(localStorage.getItem('languageData') || '') : [];
    setData(localData);
  }, []); 

  const deleteRow = () => {
    const updatedData = data.filter((name, index) => index !== deleteId);
    setData(updatedData);
    localStorage.setItem('languageData', JSON.stringify(updatedData));
    setOpenModal(false);
  }

  
  return (
    <>
      <PageHeader title="Linguistic Details" callback={() => history.push(pathURLs.add)}/>
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
            {
              data.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.language}</TableCell>
                  <TableCell align="right">
                    <IconButton color="secondary" onClick={() => {setOpenModal(true); setDeleteId(index)}}>
                      <DeleteForever />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            }
            { !data?.length && 
              <TableRow key='none'>
                <TableCell component="th" scope="row">
                <Typography variant='body1' gutterBottom>No data available</Typography>
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
      { openModal && 
        <ConfirmDeleteModal open={openModal} onYesHandler={deleteRow} onNoHandler={() => setOpenModal(false)} />
      }
    </>
  )
}

export default WidgetList;
