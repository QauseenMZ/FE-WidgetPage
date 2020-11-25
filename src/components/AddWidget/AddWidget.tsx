import React, { useState, useEffect, ChangeEvent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper, Typography, Stepper, Step, StepLabel, Button, TextField, Container} from '@material-ui/core';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons'
import PageHeader from '../PageHeader/PageHeader';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import history from '../../utils/history';
import createData from '../../utils/utilityFunctions.utils';

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
    const [name, setName] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const steps = ['Add name', 'Select language'];

    useEffect(() => {
      setError('');
    }, [name, language])

    const handleNext = () => {
      switch (activeStep) {
        case 0: {
          if(!name) {
            setError('Name is required')
            return;
          }
          break;
        }
        case 1: {
          if(!language) {
            setError('Language is required')
            return;
          }

          updateLocalData();
          break;
        }
        default: 
          break;
      }
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
            return (
              <TextField value={name} label="Name" variant="outlined" size='small' fullWidth required
                error={!!error}
                helperText={error}
                onChange={(e: any) => setName(e.target.value)}
              />
            )
          case 1:
            return (
              <LanguageSelect error={!!error} val={language} change={(e: ChangeEvent<HTMLInputElement>, val: string) => setLanguage(val)} />
            );
          case 2:
            return;
          default:
            return 'Unknown';
        }
    }
      
    const updateLocalData = () => {
      let localData: any = localStorage.getItem('languageData');
      localData = localData ? JSON.parse(localData) : [];
      localData = [...localData, createData(name, language)];
      localStorage.setItem('languageData', JSON.stringify(localData))
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
            {activeStep === steps.length ? 
              (
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
              ) : 
              (
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
