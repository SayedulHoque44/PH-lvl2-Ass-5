import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import FormInput from "../components/Form/FormInput";

const Register = () => {
  const navigate = useNavigate();
  const onSubmit = (data: FieldValues) => {
    navigate("/login");
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div className="shadow-lg p-20">
        <h1 className="text-center text-xl font-semibold">
          Register first Please!
        </h1>
        <Form onSubmit={onSubmit}>
          <FormInput type="text" name="name" label="name" />
          <FormInput type="text" name="email" label="email" />
          <FormInput type="text" name="password" label="Password" />
          <Button htmlType="submit">Login</Button>
        </Form>
        <p className="mt-2">
          Already have account?{" "}
          <Link className="text-blue-400" to={"/login"}>
            Login Now!
          </Link>
        </p>
      </div>
    </Row>
  );
};

export default Register;
