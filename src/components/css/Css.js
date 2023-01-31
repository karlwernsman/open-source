import React from 'react';
import { Badge, Button, Stack, Alert, Tooltip, OverlayTrigger, Spinner } from 'react-bootstrap';

export default function Css() {
  return (
    <>
      <div>
        <h1>
          Example heading{' '}
          <Badge bg="secondary" as="Button">
            New
          </Badge>
        </h1>
      </div>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      <div>
        {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(
          (variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert!
            </Alert>
          )
        )}
      </div>
      <div>
        {' '}
        {['top', 'right', 'bottom', 'left'].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Tooltip on <strong>{placement}</strong>.
              </Tooltip>
            }
          >
            <Button variant="secondary">Tooltip on {placement}</Button>
          </OverlayTrigger>
        ))}
      </div>
      <div>
        {' '}
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </div>
    </>
  );
}
