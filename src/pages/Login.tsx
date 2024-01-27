import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import FormInput from "../components/Form/FormInput";

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div className="shadow-lg p-20">
        <h1 className="text-center text-xl font-semibold">Login Please!</h1>
        <Form onSubmit={onSubmit}>
          <FormInput type="text" name="email" label="email" />
          <FormInput type="text" name="password" label="Password" />
          <Button htmlType="submit">Login</Button>
        </Form>
        <p className="mt-2">
          Dont't have account?{" "}
          <Link className="text-blue-400" to={"/register"}>
            Register Now!
          </Link>
        </p>
      </div>
    </Row>
  );
};

export default Login;
