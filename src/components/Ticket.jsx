import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  const ticketStyles = {
    backgroundColor: '#000',
    color: 'white',
    fontFamily: 'sans-serif',
    borderRadius: "20px",
    padding: "10px",
    marginBottom: "5px"
  }
  return (
      <div style={ticketStyles}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
   );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
