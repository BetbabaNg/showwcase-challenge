import React, { useState } from "react";
import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import Modal from "react-modal";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  ErrorAlert,
  SuccessAlert,
} from "../../components/homeSection/homeSection.elements";
import "../../common/modal/modal.css";

Modal.setAppElement("#root");

const ModalUtil = (props) => {
  const {
    values,
    handleAutoComplete,
    serverMsg,
    errors,
    handleChange,
    handleSubmit,
    isOpen,
    toggleModal,
  } = props;
  let active = false;
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestionValue = (suggestion) => suggestion.name;
  const renderSuggestion = (suggestion) => <span>{suggestion.name}</span>;

  if (serverMsg !== "") {
    active = true;
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#101522" }}>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
              <SuccessAlert active={active}>{serverMsg}</SuccessAlert>
              <h1>
                Create your educational profile with Showwcase! start by filling
                out the information below.
              </h1>
              <div className="form-inputs">
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={({ value }) => {
                    setValue(value);
                    fetch(
                      `http://universities.hipolabs.com/search?name=${value}`
                    )
                      .then((response) => response.json())
                      .then((data) => setSuggestions(data));
                  }}
                  onSuggestionsClearRequested={() => setSuggestions([])}
                  onSuggestionSelected={(_, { suggestionValue }) =>
                    console.log(suggestionValue)
                  }
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={{
                    placeholder: "Search University",
                    value: value,
                    onChange: (_, { newValue }) => {
                      setValue(newValue);
                      handleAutoComplete(newValue);
                    },
                  }}
                  highlightFirstSuggestion={true}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="degree" className="form-label">
                  Degree
                </label>
                <select
                  id="degree"
                  name="degree"
                  value={values.degree}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option>{`Select Select`}</option>
                  <option value="B.Sc">{`B.Sc`}</option>
                  <option value="M.Sc">{`M.Sc`}</option>
                  <option value="M.Ba">{`M.Ba`}</option>
                  <option value="Phd">{`Phd`}</option>
                </select>
                {errors.degree && <ErrorAlert>{errors.degree}</ErrorAlert>}
              </div>
              <div className="form-inputs">
                <label htmlFor="fieldOfStudy" className="form-label">
                  Field of Study
                </label>
                <input
                  id="fieldOfStudy"
                  type="text"
                  name="fieldOfStudy"
                  value={values.fieldOfStudy}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your Field of Study"
                />
                {errors.fieldOfStudy && (
                  <ErrorAlert>{errors.fieldOfStudy}</ErrorAlert>
                )}
              </div>
              <div className="form-inputs">
                <label htmlFor="startYear" className="form-label">
                  Start Year
                </label>
                <input
                  id="startYear"
                  type="date"
                  name="startYear"
                  value={values.startYear}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter Start Year"
                />
                {errors.startYear && (
                  <ErrorAlert>{errors.startYear}</ErrorAlert>
                )}
              </div>
              <div className="form-inputs">
                <label htmlFor="endYear" className="form-label">
                  End Year
                </label>
                <input
                  id="endYear"
                  type="date"
                  name="endYear"
                  value={values.endYear}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter End Year"
                />
                {errors.endYear && <ErrorAlert>{errors.endYear}</ErrorAlert>}
              </div>
              <div className="form-inputs">
                <label htmlFor="grade" className="form-label">
                  Grade
                </label>
                <input
                  id="grade"
                  type="text"
                  name="grade"
                  value={values.grade}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter End Grade"
                />
                {errors.grade && <ErrorAlert>{errors.grade}</ErrorAlert>}
              </div>
              <div className="form-inputs">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  id="description"
                  type="text"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Brief description on Project"
                />
                {errors.description && (
                  <ErrorAlert>{errors.description}</ErrorAlert>
                )}
              </div>
              <button className="form-input-btn">Submit</button>
            </form>
          </div>
          <Link to="#" onClick={toggleModal} className="closeModal">
            <FaIcons.FaTimes></FaIcons.FaTimes>
          </Link>
          {/* <button onClick={toggleModal}>Close modal</button> */}
        </Modal>
      </IconContext.Provider>
    </>
  );
};

export default ModalUtil;
