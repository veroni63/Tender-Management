import {useState} from 'react'
import { Container,Form,Row,Col } from 'react-bootstrap';
function Configurationscreen() {
  const [companyName,setCompanyName]=useState('');
  const [logoFile,setLogoFile]=useState(null);
  const [defaultLanguage,setDefaultLanguage]=useState('');
  const [dateFormat,setDateFormat]=useState('');
  const [zone, setZone] = useState("");
  const [currency,setCurrency] = useState("")
  const handleFiles = (event) =>{
     setLogoFile(event.target.files[0])
  }
  const TimeZone = [
    "Africa/Abidjan",
    "Africa/Accra",
    "Africa/Addis_Ababa",
    "Africa/Algiers"
  ];
  const CurrencyType = [
    "USD",
    "EUR",
    'GBP'
  ]
  return (
    <>
      <Container className="p-4 shadow-lg rounded bg-white">
        <h2 className="page-title mb-4">System Configuration  </h2>
        <Row className="mb-3">
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Company/Organization Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Company/Organization Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>System Logo</Form.Label>
              <Form.Control type="file" onChange={handleFiles} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Default Language</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setDefaultLanguage(e.target.value)}
              >
                <option value="" selected disabled>
                  Choose Default Language
                </option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spainsh">Spainsh</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Date Format</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setDateFormat(e.target.value)}
              >
                <option value="" selected disabled>
                  Choose Date Format
                </option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                <option value="DD MMM, YYYY">DD MMM, YYYY</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Time Zone</Form.Label>
              <Form.Control
                as="select"
                value={zone}
                onChange={(event) => setZone(event.target.value)}
              >
                <option value="" selected disabled>
                  Choose a Time Zone
                </option>
                {TimeZone.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Currency</Form.Label>
              <Form.Control
                as="select"
                value={currency}
                onChange={(event) => setCurrency(event.target.value)}
              >
                <option value="" selected disabled>
                  Choose Currency a Type
                </option>
                {CurrencyType.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>File Size Upload Limit</Form.Label>
              <Form.Control type="number" placeholder="Set Upload File Limit" />
            </Form.Group>
          </Col>
          <Col className="mb-3" md={6}>
            <Form.Group>
              <Form.Label>Session Timeout</Form.Label>
              <Form.Control type="number" placeholder="Set Session Timeout" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>Password Policy Settings</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Container>
    </>
  );
}

export default Configurationscreen
