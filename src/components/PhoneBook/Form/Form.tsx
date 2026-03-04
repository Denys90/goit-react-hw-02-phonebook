import React from 'react';
import FormS from '../Styled/FormS.styled';

type FormProps = {
  name: string;
  number: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Form({ name, number, onChange, onSubmit }: FormProps) {
  return (
    <FormS onSubmit={onSubmit}>
      <label htmlFor="Name">
        Name
        <input
          type="text"
          name="name"
          id="Name"
          value={name}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onChange}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </FormS>
  );
}

export default Form;
