import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const Accordion = (props) => {
  const { title, description } = props
  return (
    <MuiAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ReactMarkdown>{description}</ReactMarkdown>
        </Typography>
      </AccordionDetails>
    </MuiAccordion>
  )
}

export default Accordion
