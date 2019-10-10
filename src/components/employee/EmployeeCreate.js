import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, createEmp} from '../../actions';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
import Spinner from '../common/Spinner';
import EmployeeForm from './EmployeeForm';
import ImagePicker from 'react-native-image-picker';
import uuid from 'uuid/v4'; // Import UUID to generate UUID
import firebase from "firebase";
import RNFetchBlob from "react-native-fetch-blob";

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

class EmployeeCreate extends Component {
  createEmpHandler = () => {
    this.props.createEmp({
      name: this.props.name,
      phone: this.props.phone,
      shift: this.props.shift || 'Monday',
      photo: this.state.imageUri.uri,
    });
  };

  state = {
    employeeImage: null,
    images: [],
    loading: null,
    imageUri: null,
  }
  renderImage = () => {
    switch (this.state.loading) {
      case true:
        return <CardSection><Spinner /></CardSection>;
      case false:
        return <CardSection><Image style={{height: 200, width: "100%"}} source={this.state.imageUri}/></CardSection>;
      default:
        return <View />;
    }
  }
  uploadImage = (uri, mime = 'application/octet-stream') => {
    return new Promise((resolve, reject) => {
      this.setState({loading: true});
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      let uploadBlob = null;

      
      const ext = this.state.employeeImage.uri.split('.').pop();
      const filename = `${uuid()}.${ext}`;

      const imageRef = firebase.storage().ref('images').child(filename)

      fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          resolve(url)
        })
        .catch((error) => {
          reject(error)
      })
    })

  }
  pickImage = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);
     
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
     
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
     
        this.setState({
          employeeImage: source,
        });
        
        this.uploadImage(response.uri)
          .then(url => {
            console.log('-------------------------------------------------------------');
            
            this.setState({
              imageUri: {
                uri: url,
              },
              loading: false,
            });
          })
          .catch(error => console.log(error))

      }
    });    
  }

  render() {
    return (
      <View style={{paddingTop: 50}}>
        <Card>
          <EmployeeForm {...this.props} />
          {this.renderImage()}
          <CardSection>
            <Button
              title="Create"
              value={this.props.shift}
              onPress={() => this.createEmpHandler()}
            />
          </CardSection>
          <CardSection>
              <Button title="Pick Image"
              onPress={() => this.pickImage()}/>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.employee.name,
    phone: state.employee.phone,
    shift: state.employee.shift,
  };
};

export default connect(
  mapStateToProps,
  {employeeUpdate, createEmp},
)(EmployeeCreate);
