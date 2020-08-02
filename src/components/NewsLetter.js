/* eslint-disable react/prop-types */
import {
  InputRightElement,
  InputGroup,
  Stack,
  Button,
  Input,
  Box,
  Heading,
  Text,
  useToast,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/core';
import { Formik, Field } from 'formik';
import { validateEmail } from '../util/validate';

const NewsLetter = () => {
  const toast = useToast();
  return (
    <Stack
      as="section"
      spacing={8}
      maxWidth="1000px"
      flexDirection={['column', 'column', 'row', 'row']}
      justifyContent="center"
      alignItems="center"
      width="100%"
      p={8}
      mt={[0, 0, 8]}
      mb={[0, 0, 8]}
      mx="auto"
    >
      <Box border="1px" rounded="md" borderColor="gray.200" p={5} bg="#d04a49">
        <Heading size="md" m={2} color="gray.100">
          Subscribe to the newsletter
        </Heading>
        <Text m={2} color="gray.100">
          Get emails from me about web development, tech, and early access to
          new articles.
        </Text>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={async (values, actions) => {
            console.log(actions);
            const { email } = values;
            const lowerCaseEmail = email.toLowerCase();
            const res = await fetch('/api/subscribe', {
              body: JSON.stringify({
                email: lowerCaseEmail,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
            });
            actions.setSubmitting(false);
            const { error } = await res.json();
            if (error) {
              const { title, description } = error;
              toast({
                title,
                description,
                status: 'error',
                duration: 9000,
                isClosable: true,
              });
              return;
            }
            actions.resetForm({ email: '' });
            toast({
              title: 'Success!',
              description: 'You are now subscribed.',
              status: 'success',
              duration: 9000,
              isClosable: true,
            });
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <Field name="email" validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <InputGroup size="md" color="gray.900">
                      <Input
                        {...field}
                        id="email"
                        aria-label="Email for newsletter"
                        pr="4.5rem"
                        type="email"
                        placeholder="sundar@abc.xyz"
                        color="gray.900"
                      />
                      <InputRightElement width="6rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          m={1}
                          isLoading={props.isSubmitting}
                          type="submit"
                        >
                          Subscribe
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage color="white">
                      {form.errors.email}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </form>
          )}
        </Formik>
      </Box>
    </Stack>
  );
};
export default NewsLetter;
