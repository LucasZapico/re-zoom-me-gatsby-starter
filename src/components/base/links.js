import {
  ArrowForwardIcon,
  CopyIcon,
  EmailIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Link as ChLink,
  Flex,
  IconButton,
  Tooltip,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'gatsby';
import useClipboard from 'react-use-clipboard';
import { formatePhone, formatePhoneBot } from '../../helpers/index';

export const Cta = ({ href = '', to = '', children, ...rest }) => {
  return (
    <Box
      {...rest}
      rounded="100"
      border="2px"
      borderColor="black"
      background="brand.seven"
      px={4}
      py={4}
      as="em"
    >
      {href !== '' ? (
        <ChLink Link href={href}>
          {children}
        </ChLink>
      ) : (
        <Link to={to}>{children}</Link>
      )}
    </Box>
  );
};

export const LinkTwo = ({
  href = '',
  to = '',
  children,
  ...rest
}) => {
  return (
    <Box {...rest} fontWeight="900" maxW="350px">
      {href !== '' ? (
        <a href={href}>{children}</a>
      ) : (
        <Link to={to}>{children}</Link>
      )}
      <Box background="brand.seven" height="4px" width="100%" />
    </Box>
  );
};

export const LinkPhone = (props) => {
  const { children } = props;
  const formatedPhone = formatePhone(children);
  const formatedPhoneBot = formatePhoneBot(children);
  const [isCopied, setCopied] = useClipboard(formatedPhone, {
    successDuration: 1000,
  });
  const toast = useToast();

  return (
    <Flex
      {...props}
      display="inline"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="nowrap"
    >
      <a
        fontWeight="semibold"
        mr={0}
        href={`tel:+1${formatedPhoneBot}`}
      >
        <PhoneIcon mr={2} />
        {formatedPhone}
      </a>
      <Tooltip
        label={isCopied ? 'Copied' : 'copy to clipboard'}
        aria-label="copy to clipboard"
        placement="right"
      >
        <IconButton
          variant="none"
          aria-label="copy to clipboard"
          icon={<CopyIcon opacity="0.5" />}
          onClick={() => {
            setCopied();
            return toast({
              title: 'Copied to Clipboard',
              description: `${formatedPhone} copied to clipboard`,
              status: 'info',
              variant: 'top-accent',
              duration: 1000,
              isClosable: true,
            });
          }}
        />
      </Tooltip>
    </Flex>
  );
};

export const LinkEmail = (props) => {
  const { children } = props;
  const [isCopied, setCopied] = useClipboard(children, {
    successDuration: 1000,
  });

  const toast = useToast();
  return (
    <Flex
      {...props}
      display="inline"
      alignItems="center"
      justifyContent="space-between"
      minWidth="180px"
    >
      <a fontWeight="semibold" mr={0} href={`mailto:${children}`}>
        <EmailIcon mr={2} />
        {children}
      </a>
      <Tooltip
        label={isCopied ? 'Copied' : 'copy to clipboard'}
        aria-label="copy to clipboard"
        placement="right"
      >
        <IconButton
          variant="none"
          aria-label="copy to clipboard"
          icon={<CopyIcon opacity="0.5" />}
          onClick={() => {
            setCopied();
            return toast({
              title: 'Copied to Clipboard',
              description: `${children} copied to clipboard`,
              status: 'info',
              variant: 'top-accent',
              duration: 2000,
              isClosable: true,
            });
          }}
        />
      </Tooltip>
    </Flex>
  );
};
