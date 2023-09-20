import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createProposal } from 'apiSdk/proposals';
import { proposalValidationSchema } from 'validationSchema/proposals';
import { JobInterface } from 'interfaces/job';
import { UserInterface } from 'interfaces/user';
import { getJobs } from 'apiSdk/jobs';
import { getUsers } from 'apiSdk/users';
import { ProposalInterface } from 'interfaces/proposal';

function ProposalCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: ProposalInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createProposal(values);
      resetForm();
      router.push('/proposals');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ProposalInterface>({
    initialValues: {
      cover_letter: '',
      rate: 0,
      hours_per_week: 0,
      job_id: (router.query.job_id as string) ?? null,
      freelancer_id: (router.query.freelancer_id as string) ?? null,
    },
    validationSchema: proposalValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Proposals',
              link: '/proposals',
            },
            {
              label: 'Create Proposal',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Proposal
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.cover_letter}
            label={'Cover Letter'}
            props={{
              name: 'cover_letter',
              placeholder: 'Cover Letter',
              value: formik.values?.cover_letter,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Rate"
            formControlProps={{
              id: 'rate',
              isInvalid: !!formik.errors?.rate,
            }}
            name="rate"
            error={formik.errors?.rate}
            value={formik.values?.rate}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('rate', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Hours Per Week"
            formControlProps={{
              id: 'hours_per_week',
              isInvalid: !!formik.errors?.hours_per_week,
            }}
            name="hours_per_week"
            error={formik.errors?.hours_per_week}
            value={formik.values?.hours_per_week}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('hours_per_week', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<JobInterface>
            formik={formik}
            name={'job_id'}
            label={'Select Job'}
            placeholder={'Select Job'}
            fetcher={getJobs}
            labelField={'title'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'freelancer_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/proposals')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'proposal',
    operation: AccessOperationEnum.CREATE,
  }),
)(ProposalCreatePage);
