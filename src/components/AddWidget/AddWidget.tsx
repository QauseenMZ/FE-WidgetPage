import React, { useState, ChangeEvent } from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Stepper, Step, StepLabel, Button, TextField, FormControl, InputLabel, Select, MenuItem, Container} from '@material-ui/core';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons'
import PageHeader from '../PageHeader/PageHeader';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import history from '../../utils/history';

import './AddWidget.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

const AddWidget = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [language, setLanguage] = useState<string>('')
    const steps = ['Add name', 'Select language'];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleComplete = () => {
        setActiveStep(0);
        history.goBack();
    };

    const getStepContent = (step: number) => {
        switch (step) {
          case 0:
            return <TextField id="name" label="Name" variant="outlined" size='small' fullWidth/>
          case 1:
            return (<LanguageSelect val={language} change={(e: ChangeEvent<HTMLInputElement>, val: string) => setLanguage(val)} />
            // <FormControl variant="outlined" fullWidth> 
            //   <InputLabel id="select-language">Language</InputLabel>
            //   <Select
            //     labelId="select-language"
            //     id="language"
            //     value={10}
            //     onChange={() => {}}
            //     label="Language"
            //   >
            //     <MenuItem value="">
            //       <em>None</em>
            //     </MenuItem>
            //     <MenuItem value={10}>Ten</MenuItem>
            //     <MenuItem value={20}>Twenty</MenuItem>
            //     <MenuItem value={30}>Thirty</MenuItem>
            //   </Select>
            // </FormControl>
            );
          case 2:
            return;
          default:
            return 'Unknown';
        }
    }
      

    return (
      <>
        <PageHeader title="Add New"/>
        <Container className={classes.root} component={Paper}>
          <Stepper alternativeLabel activeStep={activeStep}>
              {steps.map((label) => (
              <Step key={label}>
                  <StepLabel>{label}</StepLabel>
              </Step>
              ))}
          </Stepper>

          <div>
            {activeStep === steps.length ? (
              <>
                <div className='form-content'>
                  <Typography className={classes.instructions}>Added Successfully</Typography>
                </div>
                <div className="form-actions" >
                  <Button variant="contained" color="primary" onClick={handleComplete} className={classes.button}>
                    Done
                  </Button>
                </div>
              </>
              ) : (
                <>
                  <div className='form-content'>
                      {getStepContent(activeStep)}   
                  </div>
                  <div className="form-actions">
                    <Button startIcon={<ArrowBackIos/>} color="primary" disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                      <Button startIcon={<ArrowForwardIos/>}
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                      >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                  </div>
                </>
              )}
          </div>
        </Container>
      </>
    );
}

export default AddWidget;
