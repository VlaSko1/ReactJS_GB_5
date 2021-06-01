
import {
  ListItem,
  withStyles,
} from "@material-ui/core"
import PropTypes from "prop-types"
import React from 'react'


const StyledListItem = withStyles(() => ({
  root: {
    "&.Mui-selected": {
      backgroundColor: "#2b5278",
      borderRadius: "20px"
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#2b5278",
    },
  },
}))(ListItem)


export class Chat extends React.Component {
  static propTypes = {
    selected: PropTypes.bool.isRequired,
    chat: PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string
    }),
    lastMessage: PropTypes.shape({
      author: PropTypes.string.isRequired,
      message: PropTypes.string,
      date: PropTypes.date,
    }),
  }


  render() {
    const { selected, chat, lastMessage } = this.props
    const { title } = chat


    return (
      <StyledListItem 
        selected={selected}
      >
        {title}
      </StyledListItem>
    )
  }
}
