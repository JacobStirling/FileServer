import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';

function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        fetch('http://localhost:8080/document/upload?imageName=' + file.name,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: reader.result
        }).then(res =>{
            if(res.ok){
                alert("success!");
            }
            else{
                alert("fail!")
            }
        });
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

var DropzoneDemo = React.createClass({
    onDrop: function (files) {
        console.log('Received files: ', files);
        getBase64(files[0])
    },

    render: function () {
        return (
            <div>
                <Dropzone onDrop={this.onDrop}>
                    <div>Try dropping a file here, or click to select file to upload.</div>
                </Dropzone>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <DropzoneDemo />
    </div>, document.getElementById('app-div'));
