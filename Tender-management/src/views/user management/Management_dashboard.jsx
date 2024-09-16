import { color } from 'd3';
import React, { useState } from 'react';
import { Table, Button, Pagination, Container, Modal, Form, InputGroup, FormControl, Badge } from 'react-bootstrap';
import { FaEdit, FaEye, FaPlus, FaTrash } from 'react-icons/fa';

const UserMgDashboard = () => {
  const initialUsersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'ACTIVATE' },
  { id: 2, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'DEACTIVATE' },
  { id: 3, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'ACTIVATE' },
  { id: 4, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'ACTIVATE' },
  { id: 5, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'DEACTIVATE' },
];

  const [usersData, setUsersData] = useState(initialUsersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;

  const totalPages = Math.ceil(usersData.length / itemsPerPage);

  const filteredUsers = usersData.filter(
    (user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  const handleShowModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleShowAddUserModal = () => {
      setShowAddUserModal(true);
  }
  const handleDeleteModal = (user)=>{
    const updatedUsers = currentUsers.filter((users) => users.id !== user);
    setUsersData(updatedUsers);
  }

  const handleCloseAddUserModal = () => {
        setShowAddUserModal(false);
        setSelectedUser(null); 
      };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
       e.preventDefault();
       const updatedUsers = usersData.map((user) => (user.id === selectedUser.id ? selectedUser : user));
       setUsersData(updatedUsers);
       handleCloseModal();
  };

  const handleAddUserSubmit = (e) => {
    e.preventDefault();
      const newUser = { ...selectedUser, id: usersData.length + 1, status: selectedUser.status || 'ACTIVATE' };
      const updatedUsers = [newUser, ...usersData];
      setUsersData(updatedUsers);
      setSelectedUser(null);
      setCurrentPage(1);
      handleCloseAddUserModal();
  };

  const handleStatusToggle = (userId) => {
    const updatedUsers = usersData.map((user) =>
      user.id === userId ? { ...user, status: user.status === 'ACTIVATE' ? 'DEACTIVATE' : 'ACTIVATE' } : user
    );
    setUsersData(updatedUsers);
  };

  return (
    <Container className=" bg-white text-center" style={{ maxWidth: '1000px' }}>
      <div className="p-5 rounded">
        <div className="$primary-color mb-1" style={{ fontSize: '28px', fontWeight: '700' }}>
          User Management
        </div>
        <div className="d-flex justify-content-between mb-4">
          <InputGroup className="mt-4" style={{ maxWidth: '400px', height: '10px' }}>
            <FormControl
              placeholder="Search users"
              aria-label="Search users"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          <Button className="mt-4" style={{ marginBottom: '-3px', height: '38px' }} onClick={handleShowAddUserModal}>
            <FaPlus /> Add User
          </Button>
        </div>

        <Table responsive bordered style={{ border: '1px solid gray' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="bg-light">
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.status === 'ACTIVATE' && (
                    <Button
                      style={{
                        cursor: 'pointer',
                        backgroundColor: '#2e7d32',
                        border: 'none',
                        fontSize: '11px',
                        width: '70px',
                        padding: '4px',
                        margin: '5px'
                      }}
                      onClick={() => handleStatusToggle(user.id)}
                    >
                      Activate
                    </Button>
                  )}
                  {user.status === 'DEACTIVATE' && (
                    <Button
                      style={{
                        cursor: 'pointer',
                        backgroundColor: '#455a64',
                        border: 'none',
                        fontSize: '11px',
                        width: '70px',
                        padding: '4px',
                        margin: '5px'
                      }}
                      onClick={() => handleStatusToggle(user.id)}
                    >
                      Deactivate
                    </Button>
                  )}
                </td>
                <td>
                  <Button variant="outline-primary" className="me-2" onClick={() => handleShowModal(user)}>
                    <FaEdit />
                  </Button>
                  {/* <Button variant="outline-success">
                    <FaEye />
                  </Button> */}
                  <Button variant="outline-danger" onClick={() => handleDeleteModal(user.id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex flex-row justify-content-between">
          Showing {indexOfFirstUser + 1} to {indexOfLastUser > usersData.length ? usersData.length : indexOfLastUser} of {usersData.length}{' '}
          entries
          <Pagination>
            <Pagination.First onClick={() => handleClick(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} />
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <Pagination.Item key={pageNumber + 1} active={currentPage === pageNumber + 1} onClick={() => handleClick(pageNumber + 1)}>
                {pageNumber + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => handleClick(totalPages)} disabled={currentPage === totalPages} />
          </Pagination>
        </div>

        {selectedUser && (
          <Modal show={showModal} onHide={handleCloseModal} centered size="md">
            <Modal.Header closeButton>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" value={selectedUser.name} onChange={handleInputChange} placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={selectedUser.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Control type="text" name="role" value={selectedUser.role} onChange={handleInputChange} placeholder="Enter role" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        )}

        {showAddUserModal && (
          <Modal show={showAddUserModal} onHide={handleCloseAddUserModal} centered size="md">
            <Modal.Header closeButton>
              <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleAddUserSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={selectedUser ? selectedUser.name : ''}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={selectedUser ? selectedUser.email : ''}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    name="role"
                    value={selectedUser ? selectedUser.role : ''}
                    onChange={handleInputChange}
                    placeholder="Enter role"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Add User
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </Container>
  );
};

export default UserMgDashboard;
