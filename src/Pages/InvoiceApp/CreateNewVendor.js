import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";


const AddNewVendor = (props) => {
 
   return (
    <Form>
   <FormGroup>
     <Label for="Name">Studio Name</Label>
     <Input
       type="Studio Name"
       name="Studio Name"
       id="StudioName"
       placeholder="Name of Studio"
     />
   </FormGroup>
   <FormGroup>
     <Label for="Manager Name">Manger Name</Label>
     <Input
       type="ManagerName"
       name="ManagerName"
       id="ManagerName"
       placeholder="Manager Name"
     />
   </FormGroup>
   <Button onClick={props.addButton}>Add</Button>
 </Form>
   )
}

export default AddNewVendor;