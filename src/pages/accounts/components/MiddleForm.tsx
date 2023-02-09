import { Box, Stack } from '@mui/material';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CreateProductForm } from 'types/product';

// import VariantForm from '../VariantForm';
import { CardTitle } from './Card';
import AccountInfoForm from './form/AccountInfoForm';

type Props = {
  updateMode?: boolean;
};

// eslint-disable-next-line arrow-body-style
const MiddleForm: React.FC<Props> = ({ updateMode }) => {
  const { watch } = useFormContext<CreateProductForm>();

  return (
    <Box>
      <Stack spacing={3}>
        <Stack spacing={2} textAlign="left">
          <CardTitle mb={2} variant="subtitle1">
            Thông tin tài khoản
          </CardTitle>
          <AccountInfoForm />
        </Stack>
      </Stack>
    </Box>
  );
};

export default MiddleForm;
