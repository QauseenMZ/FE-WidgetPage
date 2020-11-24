import React from 'react';
import { Grid, Box, Divider, Typography, Button } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

type TitleVariantType = "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "srOnly" | undefined;

interface PageHeaderProps {
    title: string;
    titleVariant?: TitleVariantType;
    additionalButtonComponent?: JSX.Element;
    callback?: (...p: any) => any;
}

const PageHeader = (props: PageHeaderProps) => {
    const { title, titleVariant, additionalButtonComponent, callback } = { ...props };

    return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container justify="space-between">
              <Typography variant={titleVariant || 'h4'} align='left' display='inline'>
                {title}
              </Typography>
              { callback && 
                <div style={{ display: '-webkit-box' }}>
                  {additionalButtonComponent || <Button startIcon={<Add />} variant='contained' color='primary' onClick={callback}>{"Add New"}</Button>}
                </div>
              }
            </Grid>
            <Box py={2}>
              <Divider />
            </Box>
          </Grid>
        </Grid>
      );
}
export default PageHeader;
