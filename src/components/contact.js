import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import myImage from '../assets/me.jpg'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Carlos Llano</h2>
                        <img
                            src={myImage}
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "15px", fontFamily: 'Oxygen' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (+57) 316 627 9150
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "15px", fontFamily: 'Oxygen' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        carlos_eduardo_llano@hotmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "15px", fontFamily: 'Oxygen' }}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        carlos_eduardo_llano@hotmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>

            </div>
        );
    }
}

export default Contact;

