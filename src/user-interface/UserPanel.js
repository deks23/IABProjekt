import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import ApiClient from "../api-client/ApiClient";
import Donation from "./Donation";
import styled from "styled-components";
import Loader from "./Loader";
export class UserPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      userDonations: "",
      loading: false
    };
  }

  fetchUserData = () => {
    this.changeLoaderVisibility();
    ApiClient.post(USER, {
      token: this.props.user.token
    })
      .then(response => {
        this.setState({ userData: response.data });

        if (response.data.token === "") {
          console.log("token experied");
          //OPEN LOGIN PAGE
        }
        this.changeLoaderVisibility();
      })
      .catch(error => {
        console.log(error);
      });
  };

  fetchUserDonations = () => {
    ApiClient.post(DONATIONS, {
      token: this.props.user.token
    })
      .then(response => {
        this.setState({ userDonations: response.data });

        if (response.data.token === "") {
          console.log("token experied");
          //OPEN LOGIN PAGE
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderUserData = () => {
    console.log(this.state);
    if (this.state.userData !== "") {
      return (
        <Container>
          <div>
            Uzytkownik:
            <UserInfo>
              <ul className="list-group">
                <li>{this.state.userData[0].Imie}</li>
                <li>{this.state.userData[0].Nazwisko}</li>
                <li>{this.state.userData[0].DataUrodzenia}</li>
              </ul>
            </UserInfo>
            
          </div>
          <DonationList>
              Donacje:
              {this.isUserDonationsEmpty()
                ? this.renderLackOfDonations()
                : this.renderUserDonations()}
            </DonationList>
        </Container>
      );
    } else return <div />;
  };

  isUserDonationsEmpty = () => {
    if (this.state.userDonations.length === 0) return true;
    else return false;
  };

  renderUserDonations = () => {
    return this.state.userDonations.map(p => (
      <Donation don={p} key={p.idDonacji} date={p.Data} comment={p.Uwagi} />
    ));
  };
  
  renderLackOfDonations = () => {
    return <Donation comment="Brak donacji" />;
  };

  renderLoader() {
    return <Loader />;
  }

  changeLoaderVisibility = () => {
    this.setState({
      loading: !this.state.loading
    });
  };

  componentDidMount() {
    this.fetchUserData();
    this.fetchUserDonations();
  }
  render() {
    return (
      <div>
        {this.state.loading ? this.renderLoader() : this.renderUserData()}
      </div>
    );
  }
}

const mapStateToProps = currentState => {
  return {
    user: {
      email: currentState.login.user.email,
      token: currentState.login.user.token
    }
  };
};

const DonationList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const UserInfo = styled.div`
  background-color: #448de9;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
`;
const USER = "userData";
const DONATIONS = "userDonations";
export default connect(mapStateToProps)(UserPane);
