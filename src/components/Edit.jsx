import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button className='btn text-cyan fs-2 me-2' onClick={handleOpen}><MdEditDocument /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Resume Details
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            {/* basic Details */}
                            <h3>Personal Details</h3>
                            <div className='p-3 row'>
                                <TextField id="standard-basic-name" label="Name" variant="standard" />
                                <TextField id="standard-basic-loc" label="Location" variant="standard" />
                                <FormControl variant="standard" >
                                    <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"

                                        label="Job"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        {/* contact details */}
                        <div>
                            <h3>contact Details</h3>
                            <div className='p-3 row'>
                                <TextField id="standard-basic-mail" label="email" variant="standard" />
                                <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
                                <TextField id="standard-basic-linkdin" label="LinkdIn Link" variant="standard" />
                                <TextField id="standard-basic-GitHub" label="GitHub" variant="standard" />

                            </div>
                        </div>
                        {/* Education details */}
                        <div>
                            <h3>Education Details</h3>
                            <div className='p-3 row'>
                                <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                                <TextField id="standard-basic-uni" label="Phone Number" variant="standard" />
                                <TextField id="standard-basic-year" label="Year of Graduation" variant="standard" />

                            </div>
                        </div>

                        {/* skills */}
                        <div>
                            <h3>Skills</h3>
                            <div className='p-3 d-flex justify-content-between '>
                                <input type="text" placeholder='Add skills' className='form-control' />
                                <Button variant='text'>Add</Button>
                            </div>
                            <h5>Added Skills:</h5>
                            {/* display all skills including existing  */}
                            <div className='p-3 d-flex justify-content-between flex-wrap'>
                                <Button variant='contained' className='my-1'>Skills<FaXmark className='ms-1' /></Button>

                            </div>
                        </div>
                        {/* summary */}
                        <div>
                            <h3>Summary</h3>
                            <div className='p-3 row'>
                                <TextField id="standard-basic-degree" label="summary" multiline variant="standard" />
                            </div>
                        </div>
                        {/* update */}
                        <button className='btn btn-primary'>Update</button>

                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default Edit