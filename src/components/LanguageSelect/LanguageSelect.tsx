import React from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface DropdownProps {
    change: (...p: any) => any;
    val: any;
    error?: any; 
}

const languageOptions = [
    "Mandarin Chinese",
    "Spanish",
    "English",
    "Hindi/Urdu",
    "Arabic",
    "Bengali",
    "Portuguese",
    "Russian",
    "Japanese",
    "German",
    "Javanese",
    "Punjabi",
    "Wu",
    "French",
    "Telugu",
    "Vietnamese",
    "Marathi",
    "Korean",
    "Tamil",
    "Italian",
    "Turkish",
    "Cantonese/Yue"
];

const LanguageSelect = ({ change, val, error }: DropdownProps) => {
  return (
    <Autocomplete 
      value={val === '' ? null : val}
      onChange={change}
      autoHighlight
      options={languageOptions}
      renderInput={(params) =>
        <TextField
          {...params}
          margin='dense'
          size='medium'
          required={true}
          label={"Language"}
          error={error}
          helperText={error && "Please select your language."}
          variant='outlined' />
      }
    />
  );
};

export default React.memo(LanguageSelect, (prevProps: DropdownProps, nextProps: DropdownProps) => {
  return (prevProps.val === nextProps.val);
});
