import { Component } from "react";
import { Link } from "react-router-dom";


class CompHeader extends Component{
    

    render(){
        return (
            <nav className="navbar">
                <div className="container-fluid" style={{display: "flex;", justifyContent: "space-between;"}}>
                    <Link className="navbar-brand" to={"/"} style={{outline: "none"}}>
                        <i className="bi bi-spotify" ></i>
                    </Link>
                    <form className="buscar" role="search">
                        <input className="" type="search" placeholder="Buscar" aria-label="Search"/>
                        <i className="bi bi-search buscar__lupa"></i>
                    </form>
                    <div className="counter">
                        <p style={{pointerEvents: "none", userSelect: "none"}}>{this.props.cont}</p>
                        <i className="bi bi-headphones"></i>
                    </div>
                </div>
            </nav>
        );
    }
}

export default CompHeader