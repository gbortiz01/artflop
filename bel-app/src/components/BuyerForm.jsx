import { Button, Form } from "react-bootstrap";

function BuyerForm({ onSubmit, values, handleChange }) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          value={values.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          value={values.lastName}
          name="lastName"
          type="text"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          value={values.phone}
          name="phone"
          type="text"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={values.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Repita email por favor</Form.Label>
        <Form.Control
          value={values.email2}
          name="email2"
          type="email"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Comprar
      </Button>
    </Form>
  );
}

export default BuyerForm;
