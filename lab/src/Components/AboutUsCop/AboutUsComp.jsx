import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {Box} from '@mui/material'

export default function AboutUsComp(){
    return(
        <Box sx={{display:"flex", flexDirection:"column",alignItems:"center", gap:'1em',justifyContent:"center",height:"400px"}}> 
            <Accordion sx={{width:"80%", }}>
            <AccordionSummary id="panel-header" aria-controls="panel-content">
                About furniture
            </AccordionSummary>
            <AccordionDetails>
                cool
            </AccordionDetails>
            </Accordion>
            <Accordion sx={{width:"80%", }}>
            <AccordionSummary id="panel-header" aria-controls="panel-content">
                About Us
            </AccordionSummary>
            <AccordionDetails>
                Cheap 
            </AccordionDetails>
            </Accordion>
            <Accordion sx={{width:"80%", }}>
            <AccordionSummary id="panel-header" aria-controls="panel-content">
                About Delivery
            </AccordionSummary>
            <AccordionDetails>
                Fast
            </AccordionDetails>
            </Accordion>
        </Box>
    )
}
