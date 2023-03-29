import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./style";
import ButtonCommon from "../../Component/Common/Button";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = "My App"; 
 }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.cover}>
          <div className={classes.btn_container}>
            <Link to="/customer">
              <ButtonCommon 
                variant="contained" 
                label="Save Customer" 
                />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styleSheet)(HomePage);
