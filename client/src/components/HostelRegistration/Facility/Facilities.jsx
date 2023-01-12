import React, { useState } from "react";
import {
  FacilitesWrapper,
  FacilityContainer,
  FacilityInformationText,
  FacilityRectangleImageBox,
  FacilityInformationTextBox,
  LabelTextField,
  HostelNameField,
  HostelAndNumberOfRoomContainer,
  PrivateBoxesContainer,
  SharedBoxContainer,
  TypeOfRoomText,
  PrivateText,
  CheckboxContainer,
  TypeCheckBoxContainer,
  FacilityAvailableContainer,
  FacilityAvailableText,
  FacilityLabelText,
  FreeContainer,
  FreeAvailableBox,
  GeneralContainer,
  ServiceContainer,
  AvailableItemBox,
  AvailableItemBoxText,
  GeneralAvailableBox,
  ServiceAvailableBox,
  PropertyTypeText,
  InstitutionContainer,
  PrivatePropertyContainer,
  RadioContainer,
  PropertyContainer,
  HostelRuleContainer,
  TextArea,
  ButtonsContainer,
  CancelButton,
  SaveButton,
  ErrorMsgText,
} from "./style";

import {
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Box,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import RectangleImage from "./Assets/Rectangle.png";
import Footer from "../../Home/Footer/Footer";
import { typesOfRoom } from "../../../ContextAPI/HostlerSchema/HostlerSchema";

function Facilities({ hostelFormik }) {
  const { handleBlur, values, touched, errors, handleChange, handleSubmit } =
    hostelFormik;
  // properties for checkboxes
  const [roomTypes, setRoomTypes] = useState(typesOfRoom);
  console.log(values);
  const roomHandleChange = (e) => {
    setRoomTypes({ ...roomTypes, [e.target.name]: e.target.value });
    console.log(roomTypes);
  };
  const [rooms, setFormData] = useState({
    hostelName: "",
    SingleRoom: false,
    DoubleRoom: false,
    ThreeSharing: false,
    FourSharing: false,
    female: false,
    male: false,
    catogry: "",
    institution: "",
    userInfo: "",
  });
  const FarazhandleChange = (event) => {
    const { type, checked, name, value } = event.target;
    if (type === "checkbox") {
      setFormData((prevObj) => {
        return {
          ...prevObj,
          [name]: checked,
        };
      });
    } else {
      setFormData((prevData) => {
        return {
          ...prevData,
          [name]: value,
        };
      });
    }
  };
  const roomTypeHandleChange = (e) => {
    setRoomTypes({ ...roomTypes, [e.target.name]: e.target.value });
  };
  console.log(roomTypes);
  //!Free

  const [free, setFree] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    console.log(e.key);
    const value = e.target.value;
    console.log(value);
    if (!value.trim()) return;
    setFree([...free, value]);
    // setUpValues([ ...QuestionValues, [...tagsArray] : value ]);
    // console.log(QuestionValues);
    // setUpValues([...values.tags, value]);
    e.target.value = "";
  };
  const removeFree = (index) => {
    setFree(free.filter((el, i) => i !== index));
  };

  // ! general
  const [general, setGeneral] = useState([]);

  const handleKeyDownGeneral = (e) => {
    if (e.key !== "Enter") return;
    console.log(e.key);
    const value = e.target.value;
    console.log(value);
    if (!value.trim()) return;
    setGeneral([...general, value]);
    // setUpValues([ ...QuestionValues, [...tagsArray] : value ]);
    // console.log(QuestionValues);
    // setUpValues([...values.tags, value]);
    e.target.value = "";
  };
  const removeGeneral = (index) => {
    setGeneral(general.filter((el, i) => i !== index));
  };
  // ! Services
  const [service, setService] = useState([]);

  const handleKeyDownService = (e) => {
    if (e.key !== "Enter") return;
    console.log(e.key);
    const value = e.target.value;
    console.log(value);
    if (!value.trim()) return;
    setService([...service, value]);
    // setUpValues([ ...QuestionValues, [...tagsArray] : value ]);
    // console.log(QuestionValues);
    // setUpValues([...values.tags, value]);
    e.target.value = "";
  };
  const removeService = (index) => {
    setService(service.filter((el, i) => i !== index));
  };
  return (
    <>
      <FacilitesWrapper>
        <FacilityContainer>
          <FacilityRectangleImageBox>
            <img width={"100%"} src={RectangleImage} alt='rectangle-image' />
          </FacilityRectangleImageBox>
          <FacilityInformationTextBox>
            <FacilityInformationText variant='h2' component='h2'>
              Hostel facilities information
            </FacilityInformationText>
          </FacilityInformationTextBox>
        </FacilityContainer>

        <FacilityContainer>
          <HostelAndNumberOfRoomContainer>
            <LabelTextField>
              Number of rooms
              <sup style={{ color: "rgba(255, 0, 0, 1)" }}>*</sup>
            </LabelTextField>
            <HostelNameField
              // type='number'
              variant='standard'
              placeholder='Enter Number of rooms'
              name='numberOfRooms'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.numberOfRooms}
            ></HostelNameField>
            {touched.numberOfRooms && errors.numberOfRooms ? (
              <>
                <ErrorMsgText>{errors.numberOfRooms}</ErrorMsgText>
              </>
            ) : null}
          </HostelAndNumberOfRoomContainer>
        </FacilityContainer>

        <FacilityContainer>
          <Box style={{ display: "flex" }}>
            <FormControl style={{ width: "100%", margin: "30px 10px" }}>
              <InputLabel id='demo-simple-select-label'>
                Select Type of room
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={roomTypes.roomType}
                label='Select Type of room'
                onChange={roomTypeHandleChange}
                name='roomType'
              >
                <MenuItem value={"singleRoom"}>Single room</MenuItem>
                <MenuItem value={"doubleSharing"}>Double Sharing</MenuItem>
                <MenuItem value={"tripleSharing"}>Triple Sharing</MenuItem>
                <MenuItem value={"quadruple"}>Quadruple Room</MenuItem>
              </Select>
            </FormControl>
            <HostelAndNumberOfRoomContainer>
              <LabelTextField>
                Room Price
                <sup style={{ color: "rgba(255, 0, 0, 1)" }}>*</sup>
              </LabelTextField>
              <HostelNameField
                // type='number'
                variant='standard'
                placeholder='Enter Price of room'
                name='price'
                // onBlur={handleBlur}
                onChange={roomHandleChange}
                value={roomTypes.price}
              ></HostelNameField>
              {/* {touched.typesOfRooms.roomType && errors.typesOfRooms.roomType ? (
            <>
              <ErrorMsgText>{errors.typesOfRooms.roomType}</ErrorMsgText>
            </>
          ) : null} */}
            </HostelAndNumberOfRoomContainer>
          </Box>
          <HostelAndNumberOfRoomContainer>
            <LabelTextField>
              Available Vacancy
              <sup style={{ color: "rgba(255, 0, 0, 1)" }}>*</sup>
            </LabelTextField>
            <HostelNameField
              // type='number'
              variant='standard'
              placeholder='Enter Available Vacancy'
              name='availableVacancy'
              // onBlur={handleBlur}
              onChange={roomHandleChange}
              value={roomTypes.availableVacancy}
            ></HostelNameField>
            {/* {touched.typesOfRooms.roomType && errors.typesOfRooms.roomType ? (
            <>
              <ErrorMsgText>{errors.typesOfRooms.roomType}</ErrorMsgText>
            </>
          ) : null} */}
          </HostelAndNumberOfRoomContainer>
        </FacilityContainer>

        <FacilityContainer>
          <FacilityAvailableContainer>
            <FacilityAvailableText>
              Facilities available{" "}
              <sup style={{ color: "rgba(255, 0, 0, 1)" }}>*</sup>
            </FacilityAvailableText>
            <FreeContainer>
              <FacilityLabelText style={{ marginRight: 10 }}>
                Free:
              </FacilityLabelText>
              <HostelNameField
                variant='standard'
                placeholder='Enter Tags'
                onKeyDown={(e) => handleKeyDown(e)}
              />
              <FreeAvailableBox></FreeAvailableBox>
              {/* <KeyboardArrowDownIcon
                sx={{ marginLeft: "auto", ":hover": { cursor: "pointer" } }}
              /> */}
            </FreeContainer>
            <Box style={{ display: "flex", justifyContent: "flex-start" }}>
              {free.map((free, index) => (
                <AvailableItemBox>
                  <AvailableItemBoxText>{free}</AvailableItemBoxText>
                  <IconButton onClick={() => removeFree(index)}>
                    <CloseIcon
                      sx={{
                        color: "rgba(250, 250, 250, 1)",
                        ":hover": { cursor: "pointer" },
                      }}
                      fontSize='small'
                    />
                  </IconButton>
                </AvailableItemBox>
              ))}
            </Box>

            <GeneralContainer>
              <FacilityLabelText style={{ marginRight: 10 }}>
                General:
              </FacilityLabelText>
              <HostelNameField
                variant='standard'
                placeholder='Enter General Tag'
                onKeyDown={(e) => handleKeyDownGeneral(e)}
              />
              <FreeAvailableBox></FreeAvailableBox>
              {/* <KeyboardArrowDownIcon
                sx={{ marginLeft: "auto", ":hover": { cursor: "pointer" } }}
              /> */}
            </GeneralContainer>
            <Box style={{ display: "flex", justifyContent: "flex-start" }}>
              {general.map((general, index) => (
                <AvailableItemBox>
                  <AvailableItemBoxText>{general}</AvailableItemBoxText>
                  <IconButton onClick={() => removeGeneral(index)}>
                    <CloseIcon
                      sx={{
                        color: "rgba(250, 250, 250, 1)",
                        ":hover": { cursor: "pointer" },
                      }}
                      fontSize='small'
                    />
                  </IconButton>
                </AvailableItemBox>
              ))}
            </Box>

            <GeneralContainer>
              <FacilityLabelText style={{ marginRight: 10 }}>
                Service:
              </FacilityLabelText>
              <HostelNameField
                variant='standard'
                placeholder='Enter Service Tag'
                onKeyDown={(e) => handleKeyDownService(e)}
              />
              <FreeAvailableBox></FreeAvailableBox>
              {/* <KeyboardArrowDownIcon
                sx={{ marginLeft: "auto", ":hover": { cursor: "pointer" } }}
              /> */}
            </GeneralContainer>
            <Box style={{ display: "flex", justifyContent: "flex-start" }}>
              {service.map((service, index) => (
                <AvailableItemBox>
                  <AvailableItemBoxText>{service}</AvailableItemBoxText>
                  <IconButton onClick={() => removeService(index)}>
                    <CloseIcon
                      sx={{
                        color: "rgba(250, 250, 250, 1)",
                        ":hover": { cursor: "pointer" },
                      }}
                      fontSize='small'
                    />
                  </IconButton>
                </AvailableItemBox>
              ))}
            </Box>
          </FacilityAvailableContainer>
        </FacilityContainer>

        {/* {Property} */}
        <FacilityContainer>
          <PropertyContainer>
            <PropertyTypeText>
              Property type <sup style={{ color: "rgba(255, 0, 0, 1)" }}>*</sup>
            </PropertyTypeText>

            <PrivatePropertyContainer>
              <FacilityLabelText>Private:</FacilityLabelText>
              <RadioContainer>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                  sx={{ fontSize: ".8rem" }}
                >
                  <FormControlLabel
                    sx={{ marginLeft: "1em" }}
                    onChange={handleChange}
                    value='Apartment'
                    name='propertyType'
                    control={<Radio size='small' color='default' />}
                    label='Apartment'
                    onBlur={handleBlur}
                  />
                  <FormControlLabel
                    onChange={handleChange}
                    value='House'
                    name='propertyType'
                    control={<Radio size='small' color='default' />}
                    label='House'
                    onBlur={handleBlur}
                  />
                  <FormControlLabel
                    onChange={handleChange}
                    value='Shared rooms'
                    name='propertyType'
                    control={<Radio size='small' color='default' />}
                    label='Shared rooms'
                    onBlur={handleBlur}
                  />
                  <FormControlLabel
                    onChange={handleChange}
                    value='Hostel'
                    name='propertyType'
                    control={<Radio size='small' color='default' />}
                    label='Hostel'
                    onBlur={handleBlur}
                  />
                </RadioGroup>
              </RadioContainer>
            </PrivatePropertyContainer>

            {/* <InstitutionContainer>
              <FacilityLabelText>Institution:</FacilityLabelText>
              <RadioContainer>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                  sx={{ fontFamily: "inherit" }}
                >
                  <FormControlLabel
                    sx={{ marginLeft: ".1em" }}
                    onChange={handleChange}
                    value='Campus'
                    name='institution'
                    control={<Radio size='small' color='default' />}
                    label='Campus'
                  />
                </RadioGroup>
              </RadioContainer>
            </InstitutionContainer> */}
          </PropertyContainer>
        </FacilityContainer>

        <FacilityContainer>
          <HostelRuleContainer>
            <LabelTextField>
              Enter House Rules{" "}
              <sup style={{ color: "rgba(255, 0, 0, 1)" }}>*</sup>
            </LabelTextField>
            <TextArea
              size='sm'
              minRows={4}
              color='neutral'
              onChange={handleChange}
              name='hostelRules'
              placeholder='Write here...'
              variant='neutral'
              label='neutral'
              value={values.hostelRules}
              onBlur={handleBlur}
            />
          </HostelRuleContainer>
          {touched.hostelRules && errors.hostelRules ? (
            <>
              <ErrorMsgText style={{ marginLeft: 20 }}>
                {errors.hostelRules}
              </ErrorMsgText>
            </>
          ) : null}
        </FacilityContainer>

        {/* <ButtonsContainer>
          <CancelButton variant='filled'>Cancel</CancelButton>
          <SaveButton variant='filled'>Save</SaveButton>
        </ButtonsContainer> */}
      </FacilitesWrapper>
    </>
  );
}

export default Facilities;
