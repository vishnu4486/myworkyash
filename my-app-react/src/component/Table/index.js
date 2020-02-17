import React, { Component } from 'react'
import { Table } from 'reactstrap';
import './index.css';
export default class Tableshare extends Component {
    render() {
        return (
            <div className="spacing">
                <Table striped>
                    <thead>
                        <tr>
                        {this.props.header.map((title)=>{
                            return(<th>{title}</th>)
                        })}
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map((d)=>{
                            return(
                            <tr>
                                {this.props.header.map((title)=>{
                                    return(
                                        <td>{d[title]}</td>
                                    )
                                })}

                            </tr>
                            );
                        })}
                      </tbody>
                </Table>
            </div>
        )
    }
}
