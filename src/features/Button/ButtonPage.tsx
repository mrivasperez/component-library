import Button from "./Button";

const ButtonPage = () => {
  return (
    <div>
      <h1>Regular</h1>
      <Button>Hello!</Button>
      <Button variant="danger">Hello!</Button>
      <Button variant="secondary">Hello!</Button>
      <Button variant="success">Hello!</Button>
      <Button variant="warning">Hello!</Button>

      <h1>Rounded</h1>
      <Button rounded>Hello!</Button>
      <Button variant="danger" rounded>
        Hello!
      </Button>
      <Button variant="secondary" rounded>
        Hello!
      </Button>
      <Button variant="success" rounded>
        Hello!
      </Button>
      <Button variant="warning" rounded>
        Hello!
      </Button>

      <h1>Outline</h1>
      <Button outline>Hello!</Button>
      <Button variant="danger" outline onClick={() => alert("danger")}>
        Hello!
      </Button>
      <Button variant="secondary" outline>
        Hello!
      </Button>
      <Button variant="success" outline>
        Hello!
      </Button>
      <Button variant="warning" outline>
        Hello!
      </Button>
    </div>
  );
};

export default ButtonPage;
