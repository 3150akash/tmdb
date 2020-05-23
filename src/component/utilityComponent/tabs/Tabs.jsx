import React from "react"
import { connect } from "react-redux";
import * as actions from "../../../store/actions"
import styles from "./tabs.module.css"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormLabel from '@material-ui/core/FormLabel';

class Tabs extends React.Component {
    componentDidMount() {
        this.props.getCategoryData(this.props.masterCategory, this.props.tabItems[0].val)
    }
    navigationNode = (currentItem, active) => (
        <Button variant={active ? "contained" : "outlined"} size="large" component="div" href="#" onClick={() => { this.props.getCategoryData(this.props.masterCategory, currentItem.val) }}>
            {currentItem.displayVal}
        </Button>
    )
    render() {
        return (
            <div className="mt-2 container-fluid">
                <div className="row">
                    <FormLabel className={styles.buttonTitle}>
                        <h4 style={{color:"white"}}>{this.props.title}</h4>
                    </FormLabel>
                    <ButtonGroup color="primary" aria-label="contained primary button group">
                        {
                            this.props.tabItems && this.props.tabItems.map(currentItem => {
                                return this.navigationNode(currentItem, currentItem.val === this.props.selectedCategory)
                            })
                        }
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategoryData: (masterCategory, infoType) => dispatch(actions.fetchData(masterCategory, infoType))
    }
}
export default connect(null, mapDispatchToProps)(Tabs)