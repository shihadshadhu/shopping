import { TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const View = () => {
    var[update,setupdate]= useState(false)
    var[selected,setselected]= useState([])
    var[students,setstudents]= useState([])
    effect(()=>{
    axios.get("http://localhost:3006/products")
    .then (Response=>{
        setstudents(students=Response.data)
        console.log(students)})
        .catch(Error=>console.log(Error))
    },[])
    const deletevalue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3006/products"+id)
        .then(Response=>{
            alert("deleted")
            window.location.reload(false)

            })
        }
    }
    const updatevalue=(value)=>{
        setselected(value)
        setupdate(true)
    }
    var finaljsk =<TableContainer>
        <table>
            <TableHead>
                <TableRow>
                    <br></br><br></br><br></br><br></br>
                    <TableCell>name</TableCell>
                    <TableCell>brand</TableCell>
                    <TableCell>quantity</TableCell>
                    <TableCell><price/TableCell>
                </TableRow>
            </TableHead>
        </table>
    </TableContainer>
  return (
    <div>
      
    </div>
  )
}

export default View
