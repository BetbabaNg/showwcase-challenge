import React, { useState } from "react";

import Joi from "joi-browser";
import ModalUtil from "../../common/modal/modal";
import {
  getProfileByName,
  getProfileBySchool,
  postEducationProfile,
} from "../../pages/MainPage/Data";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import {
  Navbar,
  MenuBar,
  Nav,
  NavMenuItems,
  NavBarToggle,
  NavLinkItem,
  MenuBars,
  NavText,
  Button,
  SpanElement,
  UserContainer,
  UserIntroduction,
  UserSubHeading,
  UserEducationContent,
  UserEducationWrapper,
  UserTitle,
  UserSubTitle,
  UserEducationItems,
  UserNoProfile,
  UserProfileInfo,
  Img,
} from "../../components/mainSection/mainSection.elements";
import noProfileImg from "../../images/undraw_No_data_re_kwbl.svg";

const MainSec = (data) => {
  console.log(data);
  let education, schools;

  const { data: details, user } = data;

  const [sidebar, setSidebar] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [values, setValues] = useState({
    degree: "",
    fieldOfStudy: "",
    startYear: "",
    endYear: "",
    grade: "",
    description: "",
  });

  const [autoData, setAutoData] = useState("");

  const [errors, setErrors] = useState({ errors: "" });

  const [serverMsg, setServerMsg] = useState("");

  const schema = {
    degree: Joi.string().required().label("Degree"),
    fieldOfStudy: Joi.string().required().label("Field of Study"),
    startYear: Joi.string().required().label("Start Year"),
    endYear: Joi.string().required().label("End Year"),
    grade: Joi.string().required().label("Grade"),
    description: Joi.string().required().label("Description"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(values, schema, options);
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
    console.log(name);

    const errorMessage = validateProperty(e.target);
    console.log(errorMessage);

    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    setValues((prevUser) => ({ ...prevUser, [name]: value }));
    setErrors({ ...errors, [errors]: errorMessage });
    setServerMsg("");
  };

  const handleAutoComplete = (value) => {
    const school = { school: value };
    setAutoData(school);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let counter;

    const errors = validate();
    setErrors({ ...errors, [errors]: errors || {} });

    if (errors) return;

    const result = getProfileByName(user.name);
    const { school } = autoData;

    if (result.length > 0) {
      counter = result.length + 1;
    } else {
      counter = 1;
    }
    try {
      const data = { id: counter, school: school, user: user.name, ...values };
      const response = postEducationProfile(data);

      setServerMsg("Education Profile Saved");
    } catch (error) {
      setServerMsg("Some problems were encountered");
    }
  };

  const populateEducation = (name) => {
    return getProfileByName(name);
  };

  const populateEducationProfile = (school) => {
    return getProfileBySchool(school);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setValues({
      degree: "",
      fieldOfStudy: "",
      startYear: "",
      endYear: "",
      grade: "",
      description: "",
    });
    setServerMsg("");
  };

  const showSideBar = () => {
    setSidebar(!sidebar);
  };

  switch (details.path) {
    case "/Main/:name/:education":
      education = populateEducationProfile(details.params.education);
      schools = populateEducation(details.params.name);
      break;

    case "/Main/:name":
      schools = populateEducation(details.params.name);
      education = schools;
      break;
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Navbar>
          <MenuBar to="#" onClick={showSideBar}>
            <FaIcons.FaBars onClick={showSideBar}></FaIcons.FaBars>
          </MenuBar>
        </Navbar>
        {schools.length > 0 ? (
          <Nav active={sidebar} click={sidebar}>
            <NavMenuItems onClick={showSideBar}>
              <NavBarToggle>
                <MenuBars to="#">SHOWCASE</MenuBars>
              </NavBarToggle>
              <NavMenuItems>
                {schools.map((item, index) => {
                  return (
                    <NavText>
                      <NavLinkItem to={`/Main/${user.name}/${item.school}`}>
                        <FaIcons.FaEnvelopeOpenText />
                        <SpanElement>{item.school}</SpanElement>
                      </NavLinkItem>
                    </NavText>
                  );
                })}
                <NavText>
                  <NavLinkItem to="/">
                    <FaIcons.FaPowerOff />
                    <SpanElement>Exit</SpanElement>
                  </NavLinkItem>
                </NavText>
              </NavMenuItems>
            </NavMenuItems>
          </Nav>
        ) : (
          <Nav active={!sidebar} click={!sidebar}>
            <NavMenuItems onClick={showSideBar} active={true}>
              <NavBarToggle>
                <MenuBars to="#">SHOWCASE</MenuBars>
              </NavBarToggle>
              <NavMenuItems>
                <NavText>
                  <NavLinkItem to="/">
                    <FaIcons.FaPowerOff />
                    <SpanElement>Exit</SpanElement>
                  </NavLinkItem>
                </NavText>
              </NavMenuItems>
            </NavMenuItems>
          </Nav>
        )}

        <UserContainer>
          <UserIntroduction>
            <UserSubHeading>
              Welcome to {`${user.name}'s`} education page
            </UserSubHeading>
            <Button big fontBig primary onClick={toggleModal}>
              {`Add New Education`}
            </Button>
            <UserEducationContent>
              {education.length > 0 ? (
                education.map((item, index) => {
                  return (
                    <UserEducationWrapper>
                      <UserTitle>{item.school}</UserTitle>
                      <UserSubTitle>{`${item.startYear} - ${item.endYear}`}</UserSubTitle>
                      <UserEducationItems>
                        <li>
                          <FaIcons.FaCheck size={15}></FaIcons.FaCheck>{" "}
                          {`${item.degree} in ${item.fieldOfStudy}`}
                        </li>
                        <li>
                          <FaIcons.FaCheck size={15}></FaIcons.FaCheck>{" "}
                          {`${item.grade}`}
                        </li>
                        <li>
                          <FaIcons.FaCheck size={15}></FaIcons.FaCheck>{" "}
                          {`${item.description}`}
                        </li>
                      </UserEducationItems>
                    </UserEducationWrapper>
                  );
                })
              ) : (
                <UserEducationWrapper>
                  <UserNoProfile>
                    <UserProfileInfo>
                      No Educational Profile Created
                    </UserProfileInfo>
                    <Img src={noProfileImg}></Img>
                  </UserNoProfile>
                </UserEducationWrapper>
              )}
            </UserEducationContent>
          </UserIntroduction>
        </UserContainer>
        <ModalUtil
          values={values}
          handleAutoComplete={handleAutoComplete}
          serverMsg={serverMsg}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          validate={validate}
          isOpen={isOpen}
          toggleModal={toggleModal}
        ></ModalUtil>
      </IconContext.Provider>
    </>
  );
};

export default MainSec;
