import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Image, Icon, Grid, List } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className='TopMenu'>
          <Container>
            <Menu.Item><Image size='small' src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/></Menu.Item>
            <Menu.Item position='right'>Home</Menu.Item>
            <Dropdown item text='Getting Here' icon='dropdown'>
            </Dropdown>
            <Menu.Item>St. Patrick's Day</Menu.Item>
            <Dropdown item text='Menus' icon='dropdown'>
            </Dropdown>
            <Menu.Item>Bar</Menu.Item>
            <Menu.Item><Icon name='search'/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class MiddleSection extends React.Component {
  render() {
    return (
        <div class="middle-background">
          <Grid textAlign='center' verticalAlign='middle' columns={2}>
            <Grid.Column style={{ 'padding-top': '150px', 'padding-left': '150px' }}>
              <Image size='large' src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png'/>
            </Grid.Column>
            <Grid.Column style={{ 'padding-top': '125px', 'padding-left': '20px', 'padding-right': '150px' }}>
              <p style={{ color: "white", 'font-size': '18px', }}>A traditional downtown saloon and eatery located in
                the Honolulu Financial District, just one block off
                the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</p>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
        <div class="footer-background">
          <Grid center padded relaxed columns={3}>

            <Grid.Column>
              Lunch
              <hr/>
              <List>
                <List.Item>Monday-Friday: 11:00am-2:30pm</List.Item>
                <List.Item>Saturday-Sunday: Not open for lunch</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Bar
              <hr/>
              <List>
                <List.Item>Monday-Friday from 11:00 am</List.Item>
                <List.Item>Saturday-Sunday from 4:00pm</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Dinner
              <hr/>
              <List>
                <List.Item>Monday-Saturday: 5:30pm-10:00pm</List.Item>
                <List.Item>Sunday: 5:00pm-9:00pm</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleSection/>
          <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
