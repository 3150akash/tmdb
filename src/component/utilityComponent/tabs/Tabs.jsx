import React from "react"
import { Nav, NavItem, NavLink, Badge, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import * as actions from "../../../store/actions"
import styles from "./tabs.module.css"
class Tabs extends React.Component {
    componentDidMount() {
        this.props.getCategoryData(this.props.masterCategory, this.props.tabItems[0].val) 
    }
    navigationNode = (currentItem) => (
        <NavLink className={styles.navigation} href="#" onClick={() => { this.props.getCategoryData(this.props.masterCategory, currentItem.val) }}>
            <h5>{currentItem.displayVal}</h5>
        </NavLink>
    )
    render() {
        return (
            <div className="mt-2 container-fluid">
                <div className="row">
                    <div className="col-2">
                        <h3>{this.props.title}</h3>
                    </div>

                    <div className="row border rounded">
                        <Nav>
                            {
                                this.props.tabItems && this.props.tabItems.map(currentItem => {
                                    return (
                                        <NavItem key={currentItem.val} className="col-4 p-0">
                                            {currentItem.val === this.props.selectedCategory
                                                ? <Badge className="p-0">
                                                    {this.navigationNode(currentItem)}
                                                </Badge>
                                                : this.navigationNode(currentItem)
                                            }

                                        </NavItem>
                                    )
                                })
                            }
                        </Nav>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         selectedCategory: state.home.selectedCategory
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        getCategoryData: (masterCategory, infoType) => dispatch(actions.fetchData(masterCategory, infoType))
    }
}
export default connect(null, mapDispatchToProps)(Tabs)