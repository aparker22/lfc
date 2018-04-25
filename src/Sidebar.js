import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from './logo.png';


let mapStateToProps = (state) => {
    return {categoryList: state.categoryList}
};

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

class DumbSidebar extends Component {

    render() {
        let { categoryList } = this.props;
        
        return <div className="sidebar">
            <img src={logo} alt='logo' />
            <div className="sidebarList">
            {categoryList.map( category => <Link to={`/categories/${category.name}`} key={category.id}>{category.name}</Link>)}
            </div>
        </div>
    }
}

let Sidebar = connect(mapStateToProps, mapDispatchToProps)(DumbSidebar)

export default Sidebar;