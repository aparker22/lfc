import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from './logo.png';
import {updateCategories} from './actions';
import { fetchCategoryList } from './helper';


let mapStateToProps = (state) => {
    return {categoryList: state.categoryList}
};

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

class DumbSidebar extends Component {

    componentDidMount() {
        fetchCategoryList()
        .then( (res) => {
            this.props.dispatch(updateCategories(res))})
        }

    render() {
        let { categoryList } = this.props;
        
        return <div className="sidebar">
            <Link to={'/'}><img src={logo} alt='logo' /></Link>
            <div className="sidebarList">
            {categoryList.map( category => <Link to={`/categories/${category.title}`} key={category.id}>{category.title}</Link>)}
            </div>
        </div>
    }
}

let Sidebar = connect(mapStateToProps, mapDispatchToProps)(DumbSidebar)

export default Sidebar;