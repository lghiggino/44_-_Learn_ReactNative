import React from 'react';
import { AppRegistry, View } from 'react-native';
import { AzureInstance, AzureLoginView } from './azure';

// CONSTANT
const CREDENTIAILS = {
  client_id: 'xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  client_secret: 'xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  redirect_uri: 'xxxx',
  scope: 'User.ReadBasic.All Mail.Read offline_access',
};

export default class azureAuth extends React.Component {
  constructor(props) {
    super(props);

    this.azureInstance = new AzureInstance(CREDENTIAILS);
    this._onLoginSuccess = this._onLoginSuccess.bind(this);
    this._onLoginCancel = this._onLoginCancel.bind(this);
  }

  _onLoginSuccess() {
    this.azureInstance
      .getUserInfo()
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  _onLoginCancel() {
    // Show cancel message
  }

  render() {
    return (
      <AzureLoginView
        azureInstance={this.azureInstance}
        loadingMessage="Requesting access token"
        onSuccess={this._onLoginSuccess}
        onCancel={this._onLoginCancel}
      />
    );
  }
}

AppRegistry.registerComponent('azureAuth', () => azureAuth);
