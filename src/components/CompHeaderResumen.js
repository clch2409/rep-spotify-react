import { Component } from "react";


class CompHeaderResumen extends Component{
    

    render(){
        return (
            <nav className="navbar">
                <div className="container-fluid" style={{display: "flex;", justifyContent: "space-between;"}}>
                    <a className="navbar-brand" href="" style={{outline: "none"}}>
                        <i className="bi bi-spotify" ></i>
                    </a>
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

export default CompHeaderResumen