"use client";

import Container from "@mui/material/Container";

interface ErrorProps {
  error: Error;
  digest?: string;
}

const Error = ({ error, digest }: ErrorProps) => {
  return (
    <Container>
      There was an error
      <br />
      {error.message}
    </Container>
  );
};

export default Error;
