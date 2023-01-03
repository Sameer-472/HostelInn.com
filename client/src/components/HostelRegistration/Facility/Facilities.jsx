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
} from "./style";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import RectangleImage from "./Assets/Rectangle.png";
import Footer from "../../Home/Footer/Footer";

function Facilities({ yupFunctions }) {
  // properties for checkboxes
  const [formData, setFormData] = useState({
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

  const handleChange = (event) => {
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

  console.log(formData);

  return (
    <>
      <FacilitesWrapper>
        <FacilityContainer>
          <FacilityRectangleImageBox>
            <img width={"100%"} src={RectangleImage} alt="rectangle-image" />
          </FacilityRectangleImageBox>
          <FacilityInformationTextBox>
            <FacilityInformationText variant="h2" component="h2">
              Hostel facilities information
            </FacilityInformationText>
          </FacilityInformationTextBox>
        </FacilityContainer>

        <FacilityContainer>
          <HostelAndNumberOfRoomContainer>
            <LabelTextField>
              Number of rooms{" "}
              <sup style={{ color: "rgba(255, 0, 0, 1)" }}>*</sup>
            </LabelTextField>
            <HostelNameField
              type="text"
              variant="standard"
              placeholder="Enter hostel name"
              name="hostelName"
              onChange={handleChange}
            ></HostelNameField>
          </HostelAndNumberOfRoomContainer>
        </FacilityContainer>

        <FacilityContainer>
          <TypeCheckBoxContainer>
            <TypeOfRoomText>Type of rooms</TypeOfRoomText>
            <FormGroup sx={{ width: "80%" }}>
              <PrivateBoxesContainer>
                <PrivateText>Private:</PrivateText>
                <CheckboxContainer>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        name="SingleRoom"
                        onChange={handleChange}
                        checked={formData.SingleRoom}
                        color="default"
                      />
                    }
                    label="Single room"
                  />
                </CheckboxContainer>
              </PrivateBoxesContainer>

              <SharedBoxContainer>
                <PrivateText>Shared:</PrivateText>
                <CheckboxContainer>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        onChange={handleChange}
                        name="DoubleRoom"
                        checked={formData.DoubleRoom}
                        color="default"
                      />
                    }
                    label="Double room"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        onChange={handleChange}
                        name="ThreeSharing"
                        checked={formData.ThreeSharing}
                        color="default"
                      />
                    }
                    label="Three sharing"
                  />{" "}
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        name="FourSharing"
                        onChange={handleChange}
                        checked={formData.FourSharing}
                        color="default"
                      />
                    }
                    label="four sharing"
                  />{" "}
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        onChange={handleChange}
                        name="female"
                        checked={formData.female}
                        color="default"
                      />
                    }
                    label="female"
                  />{" "}
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        name="male"
                        onChange={handleChange}
                        checked={formData.male}
                        color="default"
                      />
                    }
                    label="Male"
                  />
                </CheckboxContainer>
              </SharedBoxContainer>
            </FormGroup>
          </TypeCheckBoxContainer>
        </FacilityContainer>

        <FacilityContainer>
          <FacilityAvailableContainer>
            <FacilityAvailableText>
              Facilities available{" "}
              <sup style={{ color: "rgba(255, 0, 0, 1)" }}>*</sup>
            </FacilityAvailableText>
            <FreeContainer>
              <FacilityLabelText>Free:</FacilityLabelText>
              <FreeAvailableBox>
                <AvailableItemBox>
                  <AvailableItemBoxText>Free Wifi</AvailableItemBoxText>
                  <CloseIcon
                    sx={{
                      color: "rgba(250, 250, 250, 1)",
                      ":hover": { cursor: "pointer" },
                    }}
                    fontSize="small"
                  />
                </AvailableItemBox>
              </FreeAvailableBox>
              <KeyboardArrowDownIcon
                sx={{ marginLeft: "auto", ":hover": { cursor: "pointer" } }}
              />
            </FreeContainer>

            <GeneralContainer>
              <FacilityLabelText>General:</FacilityLabelText>

              <GeneralAvailableBox>
                <AvailableItemBox>
                  <AvailableItemBoxText>Kitchen</AvailableItemBoxText>
                  <CloseIcon
                    sx={{
                      color: "rgba(250, 250, 250, 1)",
                      ":hover": { cursor: "pointer" },
                    }}
                    fontSize="small"
                  />
                </AvailableItemBox>
                <AvailableItemBox>
                  <AvailableItemBoxText>Launch</AvailableItemBoxText>
                  <CloseIcon
                    sx={{
                      color: "rgba(250, 250, 250, 1)",
                      ":hover": { cursor: "pointer" },
                    }}
                    fontSize="small"
                  />
                </AvailableItemBox>
                <AvailableItemBox>
                  <AvailableItemBoxText>Chef</AvailableItemBoxText>
                  <CloseIcon
                    sx={{
                      color: "rgba(250, 250, 250, 1)",
                      ":hover": { cursor: "pointer" },
                    }}
                    fontSize="small"
                  />
                </AvailableItemBox>
              </GeneralAvailableBox>
              <KeyboardArrowDownIcon
                sx={{ marginLeft: "auto", ":hover": { cursor: "pointer" } }}
              />
            </GeneralContainer>

            <ServiceContainer>
              <FacilityLabelText>Service:</FacilityLabelText>

              <ServiceAvailableBox>
                <AvailableItemBox>
                  <AvailableItemBoxText>Laundry</AvailableItemBoxText>
                  <CloseIcon
                    sx={{
                      color: "rgba(250, 250, 250, 1)",
                      ":hover": { cursor: "pointer" },
                    }}
                    fontSize="small"
                  />
                </AvailableItemBox>
                <AvailableItemBox>
                  <AvailableItemBoxText>Security</AvailableItemBoxText>
                  <CloseIcon
                    sx={{
                      color: "rgba(250, 250, 250, 1)",
                      ":hover": { cursor: "pointer" },
                    }}
                    fontSize="small"
                  />
                </AvailableItemBox>
                <AvailableItemBox>
                  <AvailableItemBoxText>Staff 24/7</AvailableItemBoxText>
                  <CloseIcon
                    sx={{
                      color: "rgba(250, 250, 250, 1)",
                      ":hover": { cursor: "pointer" },
                    }}
                    fontSize="small"
                  />
                </AvailableItemBox>
              </ServiceAvailableBox>
              <KeyboardArrowDownIcon
                sx={{ marginLeft: "auto", ":hover": { cursor: "pointer" } }}
              />
            </ServiceContainer>
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
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ fontSize: ".8rem" }}
                >
                  <FormControlLabel
                    sx={{ marginLeft: "1em" }}
                    onChange={handleChange}
                    value="Apartment"
                    name="catogry"
                    control={<Radio size="small" color="default" />}
                    label="Apartment"
                  />
                  <FormControlLabel
                    onChange={handleChange}
                    value="House"
                    name="catogry"
                    control={<Radio size="small" color="default" />}
                    label="House"
                  />
                  <FormControlLabel
                    onChange={handleChange}
                    value="Shared rooms"
                    name="catogry"
                    control={<Radio size="small" color="default" />}
                    label="Shared rooms"
                  />
                  <FormControlLabel
                    onChange={handleChange}
                    value="Hostel"
                    name="catogry"
                    control={<Radio size="small" color="default" />}
                    label="Hostel"
                  />
                </RadioGroup>
              </RadioContainer>
            </PrivatePropertyContainer>

            <InstitutionContainer>
              <FacilityLabelText>Institution:</FacilityLabelText>
              <RadioContainer>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ fontFamily: "inherit" }}
                >
                  <FormControlLabel
                    sx={{ marginLeft: ".1em" }}
                    onChange={handleChange}
                    value="Campus"
                    name="institution"
                    control={<Radio size="small" color="default" />}
                    label="Campus"
                  />
                </RadioGroup>
              </RadioContainer>
            </InstitutionContainer>
          </PropertyContainer>
        </FacilityContainer>

        <FacilityContainer>
          <HostelRuleContainer>
            <LabelTextField>
              Enter House Rules{" "}
              <sup style={{ color: "rgba(255, 0, 0, 1)" }}>*</sup>
            </LabelTextField>
            <TextArea
              size="sm"
              minRows={2}
              color="neutral"
              onChange={handleChange}
              name="userInfo"
              placeholder="Write here..."
              variant="neutral"
              label="neutral"
            />
          </HostelRuleContainer>
        </FacilityContainer>

        <ButtonsContainer>
          <CancelButton variant="filled">Cancel</CancelButton>
          <SaveButton variant="filled">Save</SaveButton>
        </ButtonsContainer>
      </FacilitesWrapper>

      <Footer />
    </>
  );
}

export default Facilities;
