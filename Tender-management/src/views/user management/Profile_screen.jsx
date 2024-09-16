import React, { useState } from 'react';
import { Button, Form, Row, Col, ToggleButton, ToggleButtonGroup, Container, Image } from 'react-bootstrap';

const Testing = () => {
  const [editing, setEditing] = useState(false);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    jobTitle: '',
    department: '',
    twoFactor: false,
  });

  // New state to hold original values before editing
  const [originalProfileData, setOriginalProfileData] = useState(profileData);
  const [originalProfilePictureUrl, setOriginalProfilePictureUrl] = useState(profilePictureUrl);

  const handleEditToggle = () => {
    if (editing) {
      // Revert to original values if canceling
      setProfileData(originalProfileData);
      setProfilePictureUrl(originalProfilePictureUrl);
    } else {
      // Save the current values before entering edit mode
      setOriginalProfileData(profileData);
      setOriginalProfilePictureUrl(profilePictureUrl);
    }
    setEditing(!editing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log('Saved data:', profileData);
    setEditing(false);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePictureUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className="bg-white p-5" style={{ width: '900px' }}>
      <Row>
        <Col md={4} className="text-center">
          <h3 className="pb-1" style={{ fontWeight: 700 }}>
            User Profile
          </h3>
          <Image
            src={profilePictureUrl || 'https://via.placeholder.com/100'}
            roundedCircle
            width="150"
            height="150"
            className="mb-3 ms-5 mt-3"
            style={{ display: 'block', marginLeft: '10px' }}
            alt="Profile"
          />

          <Form.Control type="file" onChange={handleProfilePictureChange} disabled={!editing} className="d-none" id="profilePictureInput" />

          {editing && (
            <label htmlFor="profilePictureInput" style={{ background: 'white', color: 'black' }} className="btn btn-primary">
              Choose File
            </label>
          )}
          <div className="mt-3">
            <Button variant="primary" className="mx-4" style={{ marginLeft: '86px' }} onClick={handleEditToggle}>
              {editing ? 'Cancel' : 'Add Details or Profile'}
            </Button>
            {editing && (
              <Button variant="success" className="mx-4" onClick={handleSave}>
                Save
              </Button>
            )}
          </div>

          <Button variant="link">Change Password</Button>

          <Form.Group className="mb-3">
            <Form.Label>Two-Factor Authentication</Form.Label>
            <ToggleButtonGroup
              type="radio"
              name="twoFactor"
              value={profileData.twoFactor}
              onChange={(val) => setProfileData({ ...profileData, twoFactor: val })}
            >
              <ToggleButton value={true} disabled={!editing}>
                Enable
              </ToggleButton>
              <ToggleButton value={false} disabled={!editing}>
                Disable
              </ToggleButton>
            </ToggleButtonGroup>
          </Form.Group>
        </Col>
        <Col md={8} style={{ marginTop: '-13px' }}>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstName" value={profileData.firstName} onChange={handleChange} disabled={!editing} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastName" value={profileData.lastName} onChange={handleChange} disabled={!editing} />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" value="xxxxxx@email.com" readOnly />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" name="phone" value={profileData.phone} onChange={handleChange} disabled={!editing} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" name="jobTitle" value={profileData.jobTitle} onChange={handleChange} disabled={!editing} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" name="department" value={profileData.department} onChange={handleChange} disabled={!editing} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Testing;
