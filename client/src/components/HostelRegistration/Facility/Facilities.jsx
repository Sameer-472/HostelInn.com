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
  SharedText,
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
} from "./style";

import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import RectangleImage from "./Assets/Rectangle.png";
import { fontSize } from "@mui/system";

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

  // console.log(formData)

  return (
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
          <LabelTextField>Number of rooms</LabelTextField>
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
                    />
                  }
                  label="female"
                />{" "}
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      name="Male"
                      onChange={handleChange}
                      checked={formData.male}
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
          <FacilityAvailableText>Facilities available</FacilityAvailableText>
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
      <FacilityContainer></FacilityContainer>
    </FacilitesWrapper>
  );
}

export default Facilities;
