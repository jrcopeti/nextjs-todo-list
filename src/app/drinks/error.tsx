"use client";

interface ErrorProps {
  error: {
    message: string;
  };
}

const error = ({ error }: ErrorProps) => {
  return <div>{error.message}</div>;
};
export default error;
