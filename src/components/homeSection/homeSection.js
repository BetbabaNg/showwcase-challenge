import React, { useState } from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import headerImg from "../../images/undraw_Memory_storage_reh0.svg";
import {
  HomeContainer,
  HomeIntroduction,
  HomeSubHeading,
  HomeSubText,
  ErrorAlert,
  Img,
  Form,
  FormInput,
} from "../../components/homeSection/homeSection.elements";
import { Button, Container } from "../../globalStyles";

const HomeSection = ({ buttonLabel }) => {
  const [value, setValue] = useState({ name: "" });
  const [errors, setErrors] = useState({ errors: "" });

  const schema = {
    name: Joi.string().required().label("Name"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(value, schema, options);
    const { error } = result;
    const errors = {};

    if (!error) return null;

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const fieldSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, fieldSchema);
    return result ? result.message : null;
  };

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;

    const errorMessage = validateProperty(e.target);

    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    setValue((prevUser) => ({ ...prevUser, [name]: value }));
    setErrors({ ...errors, [errors]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    setErrors({ ...errors, [errors]: errors || {} });
    if (errors) return;

    console.log(value);
  };

  return (
    <>
      <HomeContainer>
        <HomeIntroduction>
          <Img src={headerImg}></Img>
          <HomeSubHeading>
            Hi there! Welcome to your education showcase
          </HomeSubHeading>
          <HomeSubText>
            Type your name and click 'Enter' below to begin
          </HomeSubText>
          <Form onSubmit={handleSubmit}>
            {errors.name && <ErrorAlert>{errors.name}</ErrorAlert>}
            <FormInput
              name="name"
              type="text"
              placeholder="Your Name"
              value={value.name}
              onChange={handleChange}
            />
            <Link to={`/Main/${value.name}`}>
              <Button big fontBig primary>
                {buttonLabel}
              </Button>
            </Link>
          </Form>
        </HomeIntroduction>
      </HomeContainer>
    </>
  );
};

export default HomeSection;
